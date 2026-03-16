---
title: "HKUDS/ClawWork"
repo_name: "HKUDS/ClawWork"
url: "https://github.com/HKUDS/ClawWork"
github_url: "https://github.com/HKUDS/ClawWork"
stars: 7130
language: "Python"
layout: repo
tags:
  - "Benchmark"
  - "AI-Agent"
  - "Economics"
  - "GDPVal"
  - "Python"
  - "Research"
  - "Multi-Model"
---

## What it is

ClawWork is an open-source economic survival benchmark from HKUDS where AI agents start with $10, complete 220 GDPVal professional tasks across 44 occupations to earn income, and pay for every LLM token, with a real-time React dashboard showing the economic drama.

## Problems solved

- Replaces simplistic technical benchmarks with a realistic economic pressure test — measuring work quality
- cost efficiency
- and long-term solvency simultaneously across real-world professional tasks that require actual deliverables (Word docs
- Excel
- PDFs
- data analysis).

## How to get started

Clone the repo, set up the conda environment, install deps. Copy `.env.example` to `.env` and fill in `OPENAI_API_KEY`. Run `./start_dashboard.sh` for the dashboard and `./run_test_agent.sh` to launch an agent. Open `http://localhost:3000` to watch in real time.
