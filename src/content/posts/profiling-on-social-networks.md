---
title: "Profiling on Social Networks with Topic Modeling"
date: 2019-06-22
description: "Using Latent Dirichlet Allocation to discover topics in Twitter timelines"
---

Last weekend, I built an application for analyzing Twitter timelines called [Profiler](https://github.com/bertini36/profiler). Some years ago, while working on probabilistic models, one caught my attention: [Latent Dirichlet Allocation](http://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf) (LDA).

This model was developed by David Blei, Andrew Ng, and Michael I. Jordan to discover topics in document collections. In other words, it groups text documents into topics that the model discovers automatically. I won't explain the model structure and inference here. For that, I recommend reading the [original paper](http://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf).

LDA is based on estimating [Dirichlet distributions](https://en.wikipedia.org/wiki/Dirichlet_distribution), which model the probability of membership in a set of classes. The model constructs Dirichlet distributions through an iterative procedure to estimate the probability of a word belonging to a specific topic and the probability of each document belonging to each topic. The parameters of these distributions can be estimated using various Bayesian inference techniques, such as Variational Inference or sampling methods like Markov Chain Monte Carlo.

Profiler uses this probabilistic model to identify topics in a Twitter timeline: a collection of user tweets. The application downloads all tweets from a user, stores them, preprocesses them, and discovers their main topics.

## Technology Stack

- **Data Collection**: [Tweepy](https://github.com/tweepy/tweepy) for downloading Twitter data
- **Storage**: [MongoDB](https://www.mongodb.com/) with [PyMongo](https://github.com/mongodb/mongo-python-driver) for storing timelines
- **Preprocessing**: [Pandas](https://github.com/pandas-dev/pandas) and [NLTK](https://github.com/nltk/nltk) for cleaning tweets (removing emoticons, symbols, and digits; converting text to lowercase)
- **Model Inference**: [Gensim](https://github.com/RaRe-Technologies/gensim) for a concurrent LDA implementation
- **Visualization**: [pyLDAvis](https://github.com/bmabey/pyLDAvis) for generating interactive visualizations to explore results
- **CLI**: Google's [Fire](https://github.com/google/python-fire) library for the command interface
- **Development Environment**: [Docker](https://www.docker.com/), Docker Compose, and [Travis CI](https://travis-ci.org/) for automated testing

## Command Interface

Profiler has a simple command interface. For example, you can analyze Spanish politicians with:

```bash
make run_all timelines=Albert_Rivera,sanchezcastejon,Pablo_Iglesias_,pablocasado_ n_topics=5
```

Installation steps are available in the [repository README](https://github.com/bertini36/profiler/blob/master/README.md). You can configure preprocessing and model parameters in the [settings file](https://github.com/bertini36/profiler/blob/master/src/settings.py).

## Example Results

<img src="/images/posts/profiling_on_social_networks/profiler1.png" alt="Results Group 1" style="width: 100% !important; max-height: none !important;"/>

<img src="/images/posts/profiling_on_social_networks/profiler2.png" alt="Results Group 4" style="width: 100% !important; max-height: none !important;"/>

Results from Twitter data aren't as clear as those from longer documents like articles or blog posts. Tweets are short, resulting in limited vocabularies that make it harder for the model to identify distinct topics (a problem known as data sparsity). However, the example above shows some interesting patterns. These results are from Pedro Sánchez's timeline (President of Spanish Government). Group 1 appears to relate to campaign tweets, while Group 4 focuses on the issue of gender-based violence.

Despite these challenges, LDA proves to be a powerful tool for unsupervised analysis of social media. It allows us to quickly grasp the main themes in a user's discourse without manually reading thousands of tweets. With further refinement, such as aggregating tweets by user or time windows, the coherence of these topics could be improved even further.

## References

- David M. Blei, Andrew Y. Ng, and Michael I. Jordan. 2003. [Latent Dirichlet Allocation](http://www.jmlr.org/papers/volume3/blei03a/blei03a.pdf). J. Mach. Learn. Res. 3 (March 2003), 993–1022.
