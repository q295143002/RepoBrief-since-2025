---
id: 958531089
repo_name: "VectifyAI/PageIndex"
url: "https://github.com/VectifyAI/PageIndex"
stars: 21386
language: "Python"
tags: ["RAG","Vectorless","Semantic Search","Document Indexing","AI Efficiency","Explainable AI","Vectify"]
original_description: "PageIndex: Document Index for Vectorless, Reasoning-based RAG designed to handle massive data without expensive embedding costs."
english_summary: "A breakthrough 'Vector-less' RAG system that uses hierarchical indexing and semantic reasoning instead of traditional embeddings."
chinese_summary: null
problems_solved: "- High API costs and latency of vector embeddings for massive datasets\n- Black-box nature of vector search making retrieval hard to audit\n- Semantic loss during vector projection"
how_to_use: "Install via pip: `pip install vectify-pageindex`. Use `LocalIndex` to index your docs and perform reasoning-based queries."
sync_at: "2026-03-17T12:09:44.212Z"
---

# VectifyAI/PageIndex

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
