---
title: "Fosowl/agenticSeek"
repo_name: "Fosowl/agenticSeek"
url: "https://github.com/Fosowl/agenticSeek"
github_url: "https://github.com/Fosowl/agenticSeek"
stars: 25493
language: "Python"
layout: repo
tags:
  - "AI Search"
  - "Autonomous Agent"
  - "Information Synthesis"
  - "Research Tool"
  - "Python"
  - "Web Scraping"
  - "Fact Checking"
---

## What it is

A deep-reasoning autonomous AI search engine for information synthesis and reporting.

## Problems solved

- Fatigue in clicking through dozens of search results manually to find the intersection of facts.
- SEO-bloat in modern search engines leading to low-signal commercial results.
- Need for a search tool that can 'verify' its own claims by cross-referencing multiple sources.

## How to get started

git clone https://github.com/Fosowl/agenticSeek
pip install -r requirements.txt
python app.py --query 'Competitive analysis of modern agent frameworks'

## Detailed report

### 1. Positioning
AgenticSeek is an autonomous search and synthesis agent. Unlike a traditional search engine, it uses a multi-step 'Research Loop' to identify promising sources, read them in detail, and synthesize a final report that answers complex, multi-layered queries.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Automates the 'Fact-Checking' loop. It doesn't just hallucinate answers; it cites specific passages from live web sources.
- **Differentiation**: Features a 'Breadth-First' expansion strategy—it will follow 'suggested searches' found within articles to find deep-web information.

### 3. Technical Architecture
- **Tech Stack**: Python, SearXNG/Google-Search-API, and Claude 3.5 Sonnet for reasoning.
- **Design Strategy**: Adopts a 'Detective Mode'—it starts with a query, builds a hypothesis, and keeps searching until the hypothesis is validated.

### 4. Core Implementation
- **Logic Layer**: `src/processor/evaluator.py` scores the 'Information Density' of a webpage before deciding to ingest it into the report.
- **Engineering Practice**: Uses specialized 'Anti-Bot' headers and rotating proxies to ensure reliable research across sensitive technical docs.

### 5. Code Organization
- `/agents`: Planning and Fact-Verification logic.
- `/scrapers`: HTML-to-Markdown converters and search API wrappers.

### 6. Quick Start Suggestion
Run with the `--report-mode` flag to see it generate a 2000-word deep dive into any technical topic in less than 2 minutes.

### 7. Summary
**Essence**: A 'search engine with a PhD.' Key takeaway is the automated transition from raw search results to structured technical summaries.
