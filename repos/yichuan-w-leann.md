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
