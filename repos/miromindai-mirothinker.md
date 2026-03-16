---
title: "MiroMindAI/MiroThinker"
repo_name: "MiroMindAI/MiroThinker"
url: "https://github.com/MiroMindAI/MiroThinker"
github_url: "https://github.com/MiroMindAI/MiroThinker"
stars: 6714
language: "Python"
layout: repo
tags:
  - "Research-Agent"
  - "LLM"
  - "Benchmark"
  - "Qwen3"
  - "Deep-Research"
  - "Python"
  - "Open-Source"
---

## What it is

MiroThinker is an open-source deep research agent series from MiroMindAI built on Qwen3 base models, introducing 'interactive scaling' (more frequent agent-environment interactions as a third scaling dimension). MiroThinker-1.7 (30B/235B variants) achieves SOTA on BrowseComp-ZH (75.3%) and GAIA-Val-165 (82.7%). The MiroFlow framework supports fully configurable single/multi-agent setups with Serper, Jina, and E2B tools.

## Problems solved

- Open-source research agents lagged far behind commercial deep research systems (Perplexity
- OpenAI Deep Research). MiroThinker introduces interactive scaling — dramatically more tool interactions per task — to close this gap at 30B/235B scales
- surpassing larger proprietary models on many benchmarks.

## How to get started

Clone repo, install with `uv sync` in `apps/miroflow-agent`, configure `.env` with Serper/Jina/E2B keys, serve MiroThinker model with SGLang, then run `uv run python main.py llm=qwen-3 agent=mirothinker_1.7_keep5_max200`. Benchmark scripts in `scripts/` directory.

## Detailed report

### 1. Positioning
MiroMindAI/MiroThinker is positioned as a mirothinker is an open-source deep research agent series from miromindai built on qwen3 base models, introducing 'interactive scaling' (more frequent agent-environment interactions as a third scaling dimension). mirothinker-1.7 (30b/235b variants) achieves sota on browsecomp-zh (75.3%) and gaia-val-165 (82.7%). the miroflow framework supports fully configurable single/multi-agent setups with serper, jina, and e2b tools. It aims to provide developers with a robust, Python-based solution for mirothinker is a deep research agent optimized for complex research and prediction tasks. our latest models, mirothinker-1.7 and mirothinker-h1, achieve 74.0 and 88.2 on the browsecomp, respectively.

### 2. Pain Points & Advantages
Traditional methods in this domain often suffer from Open-source research agents lagged far behind commercial deep research systems (Perplexity. MiroMindAI/MiroThinker addresses this by mirothinker is an open-source deep research agent series from miromindai built on qwen3 base models, introducing 'interactive scaling' (more frequent agent-environment interactions as a third scaling dimension). mirothinker-1.7 (30b/235b variants) achieves sota on browsecomp-zh (75.3%) and gaia-val-165 (82.7%). the miroflow framework supports fully configurable single/multi-agent setups with serper, jina, and e2b tools, offering a significant performance boost and better developer ergonomics compared to existing alternatives.

### 3. Technical Architecture
The project is built using Python, adopting a modular and scalable design. It leverages modern industry standards to ensure compatibility across different environments, focusing on efficiency and ease of integration.

### 4. Core Implementation
Main logic revolves around mirothinker is a deep research agent optimized for complex research and prediction tasks. our latest models, mirothinker-1.7 and mirothinker-h1, achieve 74.0 and 88.2 on the browsecomp, respectively. The implementation utilizes Python's strengths to provide mirothinker is an open-source deep research agent series from miromindai built on qwen3 base models, introducing 'interactive scaling' (more frequent agent-environment interactions as a third scaling dimension). mirothinker-1.7 (30b/235b variants) achieves sota on browsecomp-zh (75.3%) and gaia-val-165 (82.7%). the miroflow framework supports fully configurable single/multi-agent setups with serper, jina, and e2b tools, ensuring high reliability and performance under load.

### 5. Code Organization
The repository is structured logically, with core functionality separated from utilities and examples. This organization facilitates easy navigation and contribution for developers looking to extend the tool's capabilities.

### 6. Quick Start Suggestion
To get started, clone repo, install with `uv sync` in `apps/miroflow-agent`, configure `.env` with serper/jina/e2b keys, serve mirothinker model with sglang, then run `uv run python main.py llm=qwen-3 agent=mirothinker_1.7_keep5_max200`. benchmark scripts in `scripts/` directory. This will allow you to quickly evaluate the tool and integrate it into your existing development workflow.

### 7. Summary
An essential, Python-powered utility that streamlines mirothinker is a deep research agent optimized for complex research and prediction tasks. our latest models, mirothinker-1.7 and mirothinker-h1, achieve 74.0 and 88.2 on the browsecomp, respectively; it effectively tackles Open-source research agents lagged far behind commercial deep research systems (Perplexity while maintaining a high standard of code quality and usability.
