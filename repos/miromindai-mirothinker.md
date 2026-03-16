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
