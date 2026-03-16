---
title: "alibaba/zvec"
repo_name: "alibaba/zvec"
url: "https://github.com/alibaba/zvec"
github_url: "https://github.com/alibaba/zvec"
stars: 8904
language: "C++"
layout: repo
tags:
  - "Vector Database"
  - "RAG"
  - "AI"
  - "Embedding"
  - "Search"
---

## What it is

Zvec is a high-performance, in-process vector database built on the Proxima engine, providing low-latency similarity search for dense and sparse vectors directly within applications.

## Problems solved

- Eliminates the complexity and latency of external vector database servers; solves the 'cold start' and management overhead for lightweight AI apps; provides high-performance search for billions of vectors with minimal resource usage.

## How to get started

Install via pip: `pip install zvec`. Define a `CollectionSchema`, create a collection with `zvec.create_and_open()`, insert documents (id + vectors), and query using `collection.query()`. Node.js users can use `npm install @zvec/zvec`.
