---
title: "NewsAggr: My Personal News Aggregator"
date: 2026-02-04
description: "Building a distraction-free, serverless news aggregator from scratch using Antigravity"
heroImage: "/images/posts/news_aggregator/newsaggr_home.png"
---

I've always had a specific way of consuming news. I needed to consult my main sources in a consolidated, fast, and simple way, and of course, directly from my mobile device. Most importantly, I wanted an experience completely free of spam and intrusive ads.

Existing solutions didn't quite cut it. They were either too cluttered, missed the specific niche sources I follow, or just didn't feel right. I also needed a reliable way to save articles to read later, without relying on yet another third-party service.

I used this opportunity to "vibe code" the project from scratch, leveraging **[Antigravity](https://antigravity.google/)** to accelerate the process.

The experience was refreshing. Instead of wrestling with complex configurations for hours, I could focus on the selection of data sources and the design. [Antigravity](https://antigravity.google/) helped specifically with the integration parts, analyzing the data sources website HTML structure and generating the scraping logic, which made the development flow much smoother. It felt like pair programming with a partner who handles the tedious parts while I make the executive decisions.

## The App

**[NewsAggr](https://newsaggr.online/)** is the result. It's an elegant, distraction-free news aggregator designed for focus. I'm gradually adding new features and improving existing ones based on feedback from friends. 

It features:
- **Unified Feed**: All my tech and news sources in one place.
- **Read Later**: A simple bookmarking system to save articles for when I have more time.
- **Clean UI**: Dark mode support and a minimalist design that puts content first.
- **Authentication**: OAuth implementation for secure access and syncing across devices.
- **Multi-font**: The app supports multiple fonts to find the one that works best for you.
- **Mobile First**: It's a PWA, so it feels native on my phone.

## Architecture

To keep things fast and low-maintenance, I chose a serverless architecture.

```mermaid
graph TD
    User[User] -->|HTTPS| CF[Cloudflare Pages]
    CF -->|Reads/Writes| D1[Cloudflare D1 Database]
    CF -->|Fetches| Sources[News Sources]
    User -->|OAuth| Auth[Google/GitHub]
```


<br>

The stack is simple but powerful:
- **Cloudflare Pages**: Hosts the frontend and provides the serverless backend (Pages Functions).
- **Cloudflare D1**: A serverless SQLite database to store articles and user preferences.
- **Fetching Strategy**: The application uses an **on-demand hydration** model. Data is fetched server-side *during* the user request if the cache is stale, utilizing **adaptive TTLs** to balance freshness with source rate limits. This avoids the cost and complexity of background cron jobs.
- **Authentication**: OAuth implementation with Google and GitHub.

This setup ensures that the app scales effortlessly and stays responsive.

## Conclusion

Building [NewsAggr](https://newsaggr.online/) was a fun journey. It solved a legitimate personal problem while giving me a playground to experiment with new tools like [Antigravity](https://antigravity.google/) and the [Cloudflare](https://www.cloudflare.com/en-gb/) ecosystem.

This project was my first real dive into "vibe coding" with an AI agent, and I was genuinely impressed. One standout moment was watching [Antigravity](https://antigravity.google/) take control of the Chrome browser to verify everything worked correctly, testing responsiveness across different screen sizes, checking navigation flows, and confirming the UI behaved as expected. It felt like having a QA engineer built right into my IDE.

Perhaps even more impressive was how effortless the scraper creation became. I simply pointed the agent to the data sources I wanted to aggregate, and it analyzed the HTML structure of each website, identified the relevant elements, and generated tailored scraping logic for each one. What would have taken me hours of inspecting DOM trees and writing brittle selectors was handled in minutes, with clean, maintainable code as the output.

Now, I have my news exactly how I like it: clean, fast, and all in one place.

