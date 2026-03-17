---
id: 1024118326
repo_name: "Tencent/WeKnora"
url: "https://github.com/Tencent/WeKnora"
stars: 13364
language: "Go"
tags: ["Knowledge Base","Tencent","AI"]
original_description: "WeKnora - LLM-Powered Document Understanding & Retrieval Framework"
english_summary: "A comprehensive RAG framework developed by Tencent integrating robust multimodal parsing, sophisticated agent workflows, heterogeneous databases, and web search capabilities."
chinese_summary: null
problems_solved: "- Resolves enterprise barriers to implementing complex deep document reasoning models by providing a plug-and-play RAG ecosystem emphasizing massive unstructured data integration and privacy."
how_to_use: "Pull the repo, copy the `.env.example`, configure API keys, and deploy via `docker compose up -d`. Explore the GUI at `http://localhost` to upload documents and configure Agent logic."
sync_at: "2026-03-17T12:09:44.212Z"
---

# Tencent/WeKnora

### 1. Positioning
WeKnora is an enterprise-grade LLM-powered Semantic Retrieval Framework targeting organizations that need robust internal knowledge retrieval, document analysis, and conversational AI while maintaining local data sovereignty.

### 2. Pain Points & Advantages
Traditional search lacks reasoning. Ad hoc RAG implementations struggle with multimodal parsing (Images, complex PDFs) and scalable vector processing. WeKnora abstracts these into a tightly integrated pipeline supporting visual QA, hybrid retrieval, graph-RAG, and user-friendly deployments simultaneously.

### 3. Technical Architecture
Built natively comprising Go backends and React UI. Adopts a highly modular flow decoupled into Document Parsing pipelines, Vector backends (QDrant/Milvus), Graph indexing (Neo4J), and ReACT Agents leveraging Model Context Protocol (MCP).

### 4. Core Implementation
Utilizes multi-layered routing for data chunking (Parent-Child chunking schemas) extending via specialized extraction and cleaning modules for accurate Rerank algorithms. Features agentic "Thinking Modes" controlling generation.

### 5. Code Organization
A traditional microservice mono-repo: `frontend/` (React SPA), `cmd/` (Go binaries), `docreader/` (Parsing ingestion logic), `docker/` (Helm and compose orchestration definitions).

### 6. Quick Start Suggestion
Ensure Docker is installed, execute `./scripts/start_all.sh` selecting desired modules (like MinIO or Neo4J), connect to the frontend GUI, register an admin account, and upload your enterprise FAQ PDF.

### 7. Summary
A powerhouse holistic RAG architecture offering immense scalability, state-of-the-art unstructured data parsing capabilities, and production-ready deployments built by Tencent.
