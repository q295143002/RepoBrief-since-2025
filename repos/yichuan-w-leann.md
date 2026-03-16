---
title: "yichuan-w/LEANN"
repo_name: "yichuan-w/LEANN"
url: "https://github.com/yichuan-w/LEANN"
github_url: "https://github.com/yichuan-w/LEANN"
stars: 10302
language: "Python"
layout: repo
tags:
  - "Vector Database"
  - "RAG"
  - "Storage Optimization"
  - "Privacy"
---

## What it is

LEANN is an ultra-lightweight vector database that uses selective recomputation to provide high-accuracy RAG capabilities on personal devices with minimal storage overhead.

## Problems solved

- Eliminates the massive storage requirements of traditional vector databases (e.g.
- saving 195GB for 60M docs); provides full data privacy by enabling large-scale local RAG on laptops; resolves the complexity of indexing diverse personal data (emails
- chats
- browser history) through a unified declarative API.

## How to get started

Install via `uv pip install leann` (requires `uv` and some C++ build tools for DiskANN). Create an index and chat with data in Python: `builder = LeannBuilder(backend_name="hnsw"); builder.add_text("content"); builder.build_index("path"); chat = LeannChat("path"); chat.ask("your question")`.

## Detailed report

### 1. Positioning
LEANN is perfectly positioned for the 'Local AI' and 'Personalized AI' movement. It targets individual users and developers who want to perform RAG on their entire digital life (millions of documents) without the cost or privacy risks of cloud databases or the storage burden of standard local solutions.

### 2. Pain Points & Advantages
Traditional RAG requires storing massive embedding vectors, which is impractical for local devices. LEANN's '97% storage saving' is its killer feature, achieved by storing only a pruned graph and selectively recomputing embeddings on-demand. Advantages include zero cloud costs, 100% privacy, and portability of the knowledge base across devices.

### 3. Technical Architecture
Core logic is built in Python with a high-performance C++ backend (supporting HNSW and DiskANN). It utilizes 'graph-based selective recomputation' and CSR format storage to minimize memory and disk usage while maintaining search accuracy parity with heavyweight competitors (like Pinecone or Milvus).

### 4. Core Implementation
Features a unique 'personal data processor' architecture with specialized modules for Apple Mail, Google Search History, WeChat/iMessage, and PDF/Markdown files. It natively supports MCP (Model Context Protocol), allowing it to bridge local vector search directly into tools like Claude Code or Cursor.

### 5. Code Organization
Structured into `leann/` (core library), `packages/` (MCP and specialized integration layers), and `apps/` (concrete RAG implementations for various data sources like `email_rag`, `wechat_rag`, and `colqwen_rag`).

### 6. Quick Start Suggestion
Try the `document_rag` app: `python -m apps.document_rag --query "What is LEANN?"`. It indexes the provided README folder, demonstrating the rapid build time and low disk footprint immediately.

### 7. Summary
LEANN is a masterpiece of optimization for the age of personal AI. By solving the storage bottleneck of vector search, it makes 'RAG on everything' a technical reality for standard laptops, setting a new standard for efficient digital memory management.
