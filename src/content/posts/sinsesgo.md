---
title: "sinsesgo: An autonomous daily briefing on Spanish media bias"
date: 2026-04-27
description: "How I built a fully autonomous pipeline of agents that ingests, clusters and contrasts the daily news from 18 Spanish outlets across the political spectrum"
---

For years I have read Spanish news with a thumb on the scroll bar and one eye on the source. The same event reads as a triumph in one outlet and a scandal in another, and the gap between the two has widened. I wanted a tool that read the same story across the spectrum for me, told me what every outlet agreed on, and pointed out what each side left out.

[Ground News](https://ground.news/daily-briefing) does this for the English-speaking world. Their daily briefing was the inspiration. But Ground News does not cover Spanish outlets in any meaningful depth, and most of their bias signal comes from the source label, not from the content of each article. I wanted something focused on Spain, that read every article in full, and that ran on its own every afternoon without me touching it.

That project is **[sinsesgo](https://sinsesgo.es)**. Every day at 20:00, a cron job pulls articles from 18 Spanish outlets, clusters them by topic, picks the five most covered stories of the day, analyze them through a pipeline of agents, and builds a briefing that contrasts how the left, center and right framed each one. No login, no paywall, no human in the loop.

This post is for the technical readers who land on the [funcionamiento](https://sinsesgo.es/funcionamiento) page and want the long version. I will walk through the pipeline end to end: data ingestion, embeddings, clustering, and the agents that do the analysis. I will also explain a second use case that lives in the codebase but does not run in production, and why.

## Why I built it

Two reasons converged on the same project.

The first is professional. I work with LLMs every day and I wanted to spend time inside the agent ecosystem: orchestration graphs, retries, structured outputs, multi-model routing, RAG over a real corpus. Reading posts and tutorials only takes you so far. Building a pipeline that has to run unattended every day, parse messy real-world inputs, and produce something a stranger can read forces you to learn the parts that toy projects skip.

The second is personal. I want to read the news without picking a side first. Every Spanish outlet I open has a clear lean, and switching between two of them does not give you the truth, it gives you two opinions and a headache. What I actually want is a single place that reads the same story across the spectrum, tells me which facts every outlet agrees on, and lists the ones each side leaves out. That tool did not exist for Spanish media, so I built it.

Ground News was the closest thing, but it treats Spain as one country among many in a global aggregator. It mixes Spanish outlets with English-language sources reporting on Spain from the outside, which works for international readers but not for someone who reads Spanish and wants depth. More fundamentally, Ground News signals bias at the outlet level: it tells you that a source leans left or right, but it does not read the article. sinsesgo goes one level deeper. Every article goes through a chain of agents that examine the headline framing, the logical fallacies, the sources quoted, and the specific facts the outlet chose to omit. The goal is not to compete with Ground News but to replicate what makes their model valuable, applied to Spain's media landscape with the granularity that geographic focus allows.

## The pipeline

The system runs four stages in sequence. Each stage feeds the next.

```
╭──────────────────────────╮
│  ①  Data ingestion       │
╰────────────┬─────────────╯
             ▼
╭──────────────────────────╮
│  ②  Embeddings           │
╰────────────┬─────────────╯
             ▼
╭──────────────────────────╮
│  ③  Topic clustering     │
╰────────────┬─────────────╯
             ▼
╭──────────────────────────╮
│  ④  Agent pipeline       │
╰──────────────────────────╯
```

The whole pipeline is a [Django](https://www.djangoproject.com/) project with [PostgreSQL](https://www.postgresql.org/) and [pgvector](https://github.com/pgvector/pgvector), orchestrated with [LangGraph](https://github.com/langgraph/langgraph). Two cron jobs on [Render](https://render.com/) trigger the stages: ingestion runs several times a day, and the briefing runs once at 20:00.

### Stage 1: Data ingestion

Each outlet has an RSS feed and a known political bias score from -1 (far left) to +1 (far right) that I curated by hand. The ingestion command walks every outlet, fetches the feed, and discards anything that looks like sports, gossip or lifestyle.
What survives the filter is a list of records with a URL, headline, snippet, author and a published date. The next step scrapes the article body and writes to the database.

### Stage 2: Embeddings

I store a 1536-dimensional vector per article in a `pgvector` column. The model is OpenAI `text-embedding-3-small`. The text I embed is whatever is longest available: full body, falling back to the snippet, falling back to the headline.

`text-embedding-3-small` is cheap (about $0.02 per million tokens) and good enough for clustering articles by topic.

The embedding column drives two later behaviors:

1. **Topic clustering** for the daily briefing.
2. **Opposite article retrieval** for one of the agents, which finds politically opposite outlets covering the same event with `pgvector` cosine distance plus a temporal proximity boost.

### Stage 3: Topic clustering

This is where the briefing starts to take shape. Given all the embeddings of articles published on a given day, I cluster them and pick the largest groups.

I use **Agglomerative Clustering** from [scikit-learn](https://scikit-learn.org/) with cosine distance and average linkage. The key parameter is `distance_threshold=0.35`. I set `n_clusters=None` so the algorithm finds the natural groupings instead of forcing a fixed count. Singletons get dropped as noise.

Why agglomerative and not k-means? Two reasons:

1. I do not know how many topics will be in the news on any given day. Some days have one dominant story; others have ten. K-means forces a number; agglomerative discovers it.
2. Cosine distance is the natural metric for embeddings. K-means defaults to Euclidean.

Tuning the threshold was the hardest part of this stage. 0.35 was the sweet spot after several tries

Once I have clusters, I rank them by size and outlet diversity (more outlets means a more covered story). I take the top five. For each cluster I pick a representative article (the one closest to the centroid), and I select up to five articles per cluster, prioritizing outlet diversity (one per outlet, sorted by absolute bias score, so the loudest voices on each side make it in).

### Stage 4: The agent pipeline

Each cluster goes through a chain of agents. Every agent is a [LangGraph](https://github.com/langgraph/langgraph) graph that produces a typed result. The briefing runs the parser once per article, then five agents in parallel per article, then one historical-context agent on the representative article, and finally one summary agent that fuses everything into the topic card you see on the site.

Models split between two tiers, routed through [OpenRouter](https://openrouter.ai/) so I can swap them without touching the code:

> **Claims extraction** &middot; `google/gemini-2.5`
> parser

> **Cheap extraction** &middot; `google/gemini-2.5-flash`
> framing, perspective balance

> **Long-context reasoning** &middot; `anthropic/claude-sonnet-4.6`
> argumentation, omissions, historical coverage, summary, fact-checker

Here is what each agent does:

**1. Article Parser.** Extracts the main topic and the verifiable claims. Its output feeds every downstream agent.

**2. Framing Analyzer.** Looks at how the headline relates to the body, loaded words, scare quotes and emotional language. Punctuation is counted in Python, not by the LLM, because LLMs are bad at counting and it is free in code.

**3. Argumentation Analyzer.** Detects six types of fallacies (ad hominem, straw man, false dilemma, slippery slope, appeal to authority, appeal to emotion), seven cognitive biases, unattributed generalizations, and intent attributions without evidence. The most expensive agent in the briefing: the prompt context is large and the schema is the most complex.

**4. Perspective Balance Analyzer.** Identifies who speaks in the article (named sources, anonymous sources), their stance toward the main thesis, and counts direct quotes versus paraphrases. Surfaces missing perspectives.

**5. Omissions Detector.** This one needed the embeddings. For the article under analysis, it pulls articles from politically opposite outlets (bias distance >= 0.5) covering the same event within a ±3-day window, ranked by cosine similarity and recency. Then it asks Sonnet to find facts that the opposites report and the source omits. Output is a list of omissions with a verbatim quote, a severity rating, and the URL of the source.

**6. Historical Coverage Analyzer.** Runs once per cluster, on the representative article only, to keep cost down. Pulls up to 10 semantically similar articles from the same outlet over the previous 90 days, deduplicated by day. The agent reads them and surfaces recurring framing patterns. This catches outlets that always frame a topic the same way.

**7. Topic Summary.** The final stage. Takes the cluster (up to five articles, all their pre-computed agent results) and synthesizes a structured output: a 6-10 word title, a one-liner, three to four cross-referenced verified facts, a "why it matters" paragraph, a quality note, and two narratives (left and right). Coverage counts and references are built in Python, not by the LLM, because it would lie about percentages.

**8. Fact-checker.** Runs after the briefing is generated, on demand via a management command. It takes every verified fact and the topic one-liner from each section and validates them against open-web search results via [Tavily](https://tavily.com).

The flow has three nodes: first, a cheap LLM generates a short keyword query per fact (stripping negations and long prose down to named entities, which Tavily handles better than a full sentence); then Tavily runs both the literal fact and the keyword query in parallel and merges the deduplicated hits; finally, a second LLM reads the snippets and assigns one of three verdicts: `confirmed`, `needs_correction`, or `unverifiable`. Confirmed facts are kept. Facts that need correction get their text updated to match the snippet. Unverifiable facts are dropped from the section entirely. The one-liner is corrected if wrong but never dropped, because an empty card preview is a worse outcome than an unverified one-liner.

The hardest class of error to catch is temporal hallucination: the summary agent consistently confuses plans with executed actions. The fact-checker prompt treats verb tense as a first-class signal and flags any mismatch between the tense in the fact and the tense in the snippets as `needs_correction`, rewriting the fact in the correct tense grounded in the source.

The coverage bar you see on the site is computed as follows. Each outlet has a bias score from -1 (far left) to +1 (far right) that I curated by hand. Every article in the cluster is classified by its outlet's score: below -0.3 goes to the left bucket, above +0.3 to the right bucket, anything in between to center. The backend counts how many articles land in each bucket. A blindspot is flagged when one side has no articles at all, or when one side has at most one article while the other has three or more.

The output of this last agent is what you see on [sinsesgo](https://sinsesgo.es) every day.

## The other use case: single-article reports

The system has a second use case that does not run in production: a single-article report. You point it at any URL, the pipeline scrapes the article and runs the full agent chain on it (no clustering, just one article from end to end), and you get a Markdown report with verified facts, omissions, framing analysis, argumentation problems, and a coverage map of who else covered the story.

This path adds three agents that the briefing skips:

- **Classifier.** Decides if the article is worth analyzing. Sports, gossip and lifestyle stop here.
- **Number Validator.** Takes the numeric claims the parser found and checks them against official sources (INE, BDE, Eurostat, CNMC) via [Tavily](https://tavily.com). Catches tricks like "the deficit fell" when the official source shows it rose.
- **Presentator.** Fuses every other agent's output into a single Markdown report.

This was the original idea. The daily briefing came later, when I realized the per-article report was too expensive to expose publicly. A single report runs nine agents and costs about 0.15€ in inference. If I let anyone paste any URL, a small group of users could spend 100€ a day in tokens out of my pocket. The code is still there, fully tested, and could power a paid tier if I ever validate the demand. For now it stays as an internal command.

## Problems I hit

A few rough edges that took real time:

**RSS feeds are inconsistent.** Some outlets publish the full body in the feed. Others publish a 200-character teaser and force a scrape. A few publish broken XML. The parser handles most of it, but I had to add malformed-feed detection and a fallback path that scrapes the homepage when the feed comes back empty.

**Clustering threshold tuning.** No formula. You stare at sample clusters for a week and adjust until the same story stops splitting and unrelated stories stop merging.

**Cost control.** Every daily briefing has to fit a budget I am paying out of pocket. I tuned the cluster and article limits until each briefing landed around 2.50€ in inference cost.
The two main savings: capping the briefing at five topics per day, and running the historical-context agent once per cluster instead of once per article. Five topics is also about the right size for someone reading a daily briefing over a coffee.

**LLM hallucinations, especially on verb tense.** The verified facts the summary agent produces go straight onto the website. LLMs are good at extracting content but blur the line between what happened and what was announced. The most common failure was temporal: the model would write a fact in the past tense for an event that was still a proposal, or use the present tense for something already voted on. Numerical hallucinations (wrong figures, wrong percentages) were the second most common class. Building the fact-checker as a post-processing step with explicit tense-verification rules in the prompt caught most of these before they ever reached readers.

**Prompt drift across model updates.** Every time a model version changes, a few agents start producing slightly different outputs. I ended up with a small set of regression evals that run each agent on a fixed corpus of articles and compare outputs against a snapshot. Not perfect, but enough to catch the worst regressions.

**Outlet bias scoring.** I curated the bias of the top 18 outlets manually. New domains are inferred, but I still manually review the inferred scores once a week.

## What is next

The briefing is live and stable. The next experiments are:

- **Feedback loop.** A button on each topic summary to flag a bad omission or a misclassified claim.
- **More outlets.** 18 is a start. I want regional outlets and a couple of right-wing and left-wing fringes that the current set misses.
- **A subscription tier** for the per-article report, if the public briefing builds enough audience to justify it.

If you want to see the output, the latest briefing is at [sinsesgo](https://sinsesgo.es). If you want the short version of the pipeline, the [funcionamiento](https://sinsesgo.es/funcionamiento) page links back to this post.

This project sits at the intersection of three things I care about: AI, the media we read every day, and shipping real software. I learned more about agents in the two months it took to ship sinsesgo than in the previous year of reading about them, and I now have a tool I use every day. If it helps one more reader cross the aisle and check what the other side is saying, the cost of running it is already paid back.
