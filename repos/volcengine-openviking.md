---
title: "volcengine/OpenViking"
repo_name: "volcengine/OpenViking"
url: "https://github.com/volcengine/OpenViking"
github_url: "https://github.com/volcengine/OpenViking"
stars: 7722
language: "Python"
layout: repo
tags:
  - "AI-Agent"
  - "Context-Database"
  - "Memory-Management"
  - "RAG"
  - "Filesystem"
  - "Volcengine"
---

## What it is

An open-source Context Database solving AI Agent fragmentation by mapping documents, skills, and memories to an intuitive filesystem hierarchy (viking://).

## Problems solved

- Replaces vague
- flat vector database retrieval with structured directory recursive-retrieval and tiered context loading (L0/L1/L2)
- reducing token costs and improving overall contextual accuracy.

## How to get started

Install via `pip install openviking` and run `openviking-server`. Configure a VLM and embedding model (OpenAI, Volcengine, LiteLLM) in `ov.conf`. Interface through CLI commands like `ov ls viking://resources/` or `ov find`.
