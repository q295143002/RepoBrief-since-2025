---
title: "tobi/qmd"
repo_name: "tobi/qmd"
url: "https://github.com/tobi/qmd"
github_url: "https://github.com/tobi/qmd"
stars: 14951
language: "TypeScript"
layout: repo
tags:
  - "Search Engine"
  - "Markdown"
  - "Local AI"
  - "Privacy"
  - "Vector Search"
  - "PKM"
  - "Obsidian"
---

## What it is

A local, completely on-device AI search engine utilizing BM25 and vector search for Markdown documents.

## Problems solved

- Missing semantic meaning in standard keyword-based note searches
- Privacy risks of sending personal notes to cloud vector stores
- Complexity in setting up local hybrid search for personal knowledge bases

## How to get started

Install via npm, index your markdown folder, and query via CLI or a connected MCP client for semantic results.

## Detailed report

### 1. Positioning
QMD is a privacy-first, on-device search engine for markdown notes, targeted at developers using Obsidian or standard text vaults.

### 2. Pain Points & Advantages
Combines BM25 keyword search with local vector search and LLM re-ranking. Zero-cloud dependency ensures total data sovereignty for private notes.

### 3. Technical Architecture
Uses Lancedb for local vector storage and `node-llama-cpp` for GGUF-based local embedding and ranking. Fully compatible with the MCP protocol.

### 4. Core Implementation
Robust ingestion pipeline for file parsing and chunking. Hybrid search logic executes cross-encoder re-ranking for superior accuracy.

### 5. Code Organization
TypeScript based, separating indexing, search endpoints, and the MCP server definition into modular clusters.

### 6. Quick Start Suggestion
Connect QMD to an AI assistant and ask: "Find all notes about project architecture discussed last month" to see semantic recall in action.

### 7. Summary
An excellent bridge for personal knowledge management, delivering advanced semantic capabilities without compromising individual data privacy.
