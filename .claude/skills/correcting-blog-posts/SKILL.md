---
name: correcting-blog-posts
description: Use when reviewing a manually-written post in src/content/posts for language errors and prose improvements - grammar, spelling, punctuation, subject-verb agreement, awkward phrasing, or voice consistency. Never use to draft new posts, new sections, or open-ended "make it better" rewrites.
---

# Correcting Blog Posts

## Overview

Posts in `src/content/posts/` are always written by hand by the author, never AI-generated. This skill fixes language errors and proposes prose tightening in the author's existing voice. It never invents content, expands sections, or writes replacement paragraphs.

## When to Use

- Author asks to check, review, proofread, or correct a post
- After a post is finished but before publishing
- Spot-checking older posts for lingering errors

## When NOT to Use

- Drafting a new post or a new section - out of scope, the author writes all prose
- Open-ended "make this post better/more engaging" - that's an editorial call for the author
- Restructuring, adding new examples, or extending explanations

## The Rule

**Fix errors. Do not add content the author didn't write.**

Every change must be one of:

1. **Grammar/spelling/punctuation fix** - subject-verb agreement, missing possessive, typo, wrong article, tense mismatch.
2. **Trim** - cut a redundant word or clause without changing meaning.
3. **Reorder** - same words, clearer order (e.g. fixing a dangling modifier).
4. **Flagged suggestion** - a prose change that touches meaning or adds words. Proposed as a diff for the author to accept or reject. Never applied silently.

If a fix requires writing a new sentence or expanding an idea, stop. Flag it as a suggestion with the reasoning, and let the author write the replacement.

## Recognizing the Blog's Voice

Read at least 2 existing posts in `src/content/posts/` before editing any one. Voice varies by era, but has consistent fingerprints:

- First person, direct: "I built...", "I chose...", contractions used freely (I've, doesn't, wasn't)
- Sentence fragments and short declaratives for texture: "No formula.", "That project is X."
- No em dashes as a stylistic tic. Don't add throat-clearing openers like "In this post, we will explore..." unless the author already wrote one
- Concrete numbers, tools, and links over vague adjectives
- Didactic "we" is fine only in explanatory/mathematical passages ("we can approximate the gradient..."), never in first-person narrative about what the author personally built or decided - there it's "I"

## AI-Tell Checklist

Reject any fix that introduces these, even if grammatically correct:

- Filler openers or closers ("In conclusion", "It's worth noting", "Moreover", "Overall")
- Unnecessary em dashes
- Symmetric triplets ("clean, fast, and reliable") where the author wrote two items
- Hedging qualifiers the author didn't use ("arguably", "in many ways")
- Over-formalizing an intentional fragment into a full sentence
- A rewritten sentence that ends up longer than the original without adding real information

## Workflow

1. Read the target post fully.
2. Read 1-2 other posts, ideally from the same era (check `date` in frontmatter), to calibrate voice.
3. List candidate fixes, each tagged `fix` (apply directly) or `suggestion` (needs author sign-off).
4. Apply only `fix`-tagged changes, as minimal diffs.
5. Present `suggestion`-tagged items as a list: original vs proposed, with a one-line reason. Wait for approval before applying.
6. Never touch code blocks, math (LaTeX/KaTeX), image paths, or frontmatter fields other than an obvious typo in `title`/`description` if flagged.

## Common Mistakes

| Mistake | Why it's wrong |
|---|---|
| Rewriting a whole paragraph "while in there" | Scope creep - turns a correction pass into a rewrite, erodes the author's voice |
| Fixing style you personally dislike but isn't wrong | Not your call - only fix actual errors or explicitly flagged suggestions |
| Adding transitions or conclusions the post didn't have | That's generation, not correction - forbidden |
| Applying `suggestion`-tagged prose changes without asking | Silent meaning changes are exactly what makes text read as AI-edited |
| Skipping the voice-calibration read | Guarantees fixes that don't match the post's era or tone |

## Red Flags - you are about to violate this skill

- "Let me also improve this transition" - stop, that's not a language error
- "This paragraph would flow better if I added..." - stop, propose as a suggestion, don't add
- "I'll just rewrite this section for clarity" - stop, rewriting is not correcting
- About to touch more than one sentence with wording not present in the original - tag as `suggestion`, don't apply
