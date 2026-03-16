---
title: "Alibaba-NLP/DeepResearch"
repo_name: "Alibaba-NLP/DeepResearch"
url: "https://github.com/Alibaba-NLP/DeepResearch"
github_url: "https://github.com/Alibaba-NLP/DeepResearch"
stars: 18422
language: "Python"
layout: repo
tags:
  - "NLP"
  - "Alibaba AI"
  - "Qwen"
  - "Document Understanding"
  - "Knowledge Graph"
  - "RAG"
  - "Big Data"
---

## What it is

Alibaba's official framework for large-scale document comprehension and autonomous research reasoning.

## Problems solved

- Context ceiling when processing thousands of documents for a single goal
- Difficulty maintaining logical consistency synthesising contradictory sources
- Inefficiency in flat RAG for connecting dots across different files

## How to get started

Clone the repo and install via pip. Run using `python run_research.py` specifying the document dataset and your research query.

## Detailed report

### 1. Positioning
Alibaba-NLP's DeepResearch is a research framework for 'Global Document Understanding.' It focuses on analyzing millions of private docs (papers, corporate reports) and performing long-range reasoning for strategic synthesis.

### 2. Pain Points & Advantages
Uses hierarchical summarization instead of simple vector chunks to solve fragmented context. Optimized for Qwen-2.5 models for superior reasoning and long-context performance.

### 3. Technical Architecture
Python/PyTorch based, using DashScope APIs. Adopts a 'Multi-Scale Knowledge Graph' approach to map the entire corpus before the agent begins its task.

### 4. Core Implementation
`hierarchical_indexer.py` implements recursive distillation turns from raw text into concept summaries. Explicitly flags contradictions between documents, crucial for high-accuracy research.

### 5. Code Organization
`/models` contains specialized prompts/loading logic, and `/evaluation` provides benchmarks for 'Reasoning over Long Documents' (RLD).

### 6. Quick Start Suggestion
Read `Methodology.md` to understand 'Iterative Question Decomposition' where a goal is broken into hundreds of atomic retrieval tasks.

### 7. Summary
The 'Strategic Analyst' for big data. It establishes hierarchical indexing as a robust alternative to basic RAG for complex, large-scale enterprise knowledge work.
