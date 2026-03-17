---
id: 914316754
repo_name: "Alibaba-NLP/DeepResearch"
url: "https://github.com/Alibaba-NLP/DeepResearch"
stars: 18422
language: "Python"
tags: ["NLP","Alibaba AI","Qwen","Document Understanding","Knowledge Graph","RAG","Big Data"]
original_description: "DeepResearch: Alibaba-NLP's research project for large-scale document understanding and autonomous reasoning across massive datasets."
english_summary: "Alibaba's official framework for large-scale document comprehension and autonomous research reasoning."
chinese_summary: null
problems_solved: "- Context ceiling when processing thousands of documents for a single goal\n- Difficulty maintaining logical consistency synthesising contradictory sources\n- Inefficiency in flat RAG for connecting dots across different files"
how_to_use: "Clone the repo and install via pip. Run using `python run_research.py` specifying the document dataset and your research query."
sync_at: "2026-03-17T12:09:44.212Z"
---

# Alibaba-NLP/DeepResearch

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
