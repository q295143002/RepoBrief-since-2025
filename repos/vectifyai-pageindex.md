---
title: "VectifyAI/PageIndex"
repo_name: "VectifyAI/PageIndex"
url: "https://github.com/VectifyAI/PageIndex"
github_url: "https://github.com/VectifyAI/PageIndex"
stars: 21386
language: "Python"
layout: repo
tags:
  - "RAG"
  - "Vectorless"
  - "Semantic Search"
  - "Document Indexing"
  - "AI Efficiency"
  - "Explainable AI"
  - "Vectify"
---

## What it is

A breakthrough 'Vector-less' RAG system that uses hierarchical indexing and semantic reasoning instead of traditional embeddings.

## Problems solved

- High API costs and latency of vector embeddings for massive datasets
- Black-box nature of vector search making retrieval hard to audit
- Semantic loss during vector projection

## How to get started

Install via pip: `pip install vectify-pageindex`. Use `LocalIndex` to index your docs and perform reasoning-based queries.

## Detailed report

### 1. Positioning
PageIndex is a 'Reasoning-based RAG' framework by VectifyAI that uses hierarchical text-based indexing instead of vector math.

### 2. Pain Points & Advantages
Eliminates the 'Vector Storage Tax'. Offers 100% explainable retrieval by tracing 'index nodes' through the hierarchy.

### 3. Technical Architecture
Python/SQLite based. Adopts 'Recursive Semantic Navigation' where the LLM walks a table of contents to find answers.

### 4. Core Implementation
Builds hierarchical relationships without heavy vectors. Features 'Token-Aware Retrieval' to fit model context windows.

### 5. Code Organization
`/indexer` for structural mapping; `/retriever` for the reasoning-based search engine.

### 6. Quick Start Suggestion
Run cost benchmarks to see PageIndex deliver Pinecone-level accuracy at a fraction of the cost.

### 7. Summary
A 'Logical Librarian' that leverages hierarchical reasoning as a cheaper, more transparent alternative to vector search.
