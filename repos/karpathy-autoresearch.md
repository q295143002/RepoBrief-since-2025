---
title: "karpathy/autoresearch"
repo_name: "karpathy/autoresearch"
url: "https://github.com/karpathy/autoresearch"
github_url: "https://github.com/karpathy/autoresearch"
stars: 29930
language: "Python"
layout: repo
tags:
  - "AI Research"
  - "Andrej Karpathy"
  - "ArXiv"
  - "Automation"
  - "Scientific Research"
  - "Python"
  - "Paper Synthesis"
---

## What it is

Andrej Karpathy's autonomous AI research agent for automated paper ingestion and synthesis.

## Problems solved

- Information overload in rapidly moving scientific fields (like AI).
- Time-consuming task of manually reading, summarizing, and connecting new research papers.
- Difficulty in maintaining a cross-referenced database of citations and benchmarks.

## How to get started

git clone https://github.com/karpathy/autoresearch
pip install -r requirements.txt
python research.py --topic 'Reinforcement Learning from Task Feedback'

## Detailed report

### 1. Positioning
AutoResearch is an experimental project by Andrej Karpathy that automates the scientific research cycle. It searches ArXiv, downloads relevant PDFs, analyzes their methodologies, and cross-references them to generate a comprehensive 'State-of-the-Field' report. Targeted at researchers and deep learners.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Drastically reduces the time required to 'catch up' on a new research topic from days to minutes.
- **Differentiation**: Focuses on 'Reasoning Accuracy' rather than just speed, using multi-step verification to ensure summarized facts are actually present in the source paper.

### 3. Technical Architecture
- **Tech Stack**: Python, LangChain, and PDFMiner for high-fidelity text extraction.
- **Design Strategy**: Follows a 'Search -> Filter -> Read -> Synthesize' funnel, using the LLM at each stage to prune irrelevant content.

### 4. Core Implementation
- **Logic Layer**: `src/agent/summarizer.py` implements a 'Recursive Analysis' loop that identifies the core contribution of each paper.
- **Engineering Practice**: Implements a local vector store for citations, allowing the agent to 'jump' between referenced papers autonomously.

### 5. Code Organization
- `/fetcher`: ArXiv and Semantic Scholar API wrappers.
- `/synthesizer`: The logic for aggregating individual paper summaries into a coherent literature review.

### 6. Quick Start Suggestion
Run `research.py` with the `--verbose` flag to see how the agent 'decides' which papers are worth reading based on their abstracts.

### 7. Summary
**Essence**: A 'digital PhD candidate'. Key takeaway is the systematic automation of high-level intellectual labor.
