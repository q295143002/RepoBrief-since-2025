---
title: "MemTensor/MemOS"
repo_name: "MemTensor/MemOS"
url: "https://github.com/MemTensor/MemOS"
github_url: "https://github.com/MemTensor/MemOS"
stars: 6797
language: "Python"
layout: repo
tags:
  - "Memory"
  - "LLM"
  - "AI-Agent"
  - "RAG"
  - "Research"
  - "Python"
  - "Open-Source"
---

## What it is

MemOS is an open-source Memory Operating System (arXiv 2507.03724) for LLMs and AI agents, providing a unified API for multi-modal memory (text, images, tools, personas) with multi-cube knowledge base management, async ingestion, feedback/correction, and native OpenClaw plugin support.

## Problems solved

- Solves the fundamental problem of LLM statefulness: agents have no persistent
- cross-session
- structured memory. MemOS provides graph-structured
- inspectable memory with 43.7% better accuracy than OpenAI Memory
- 35.24% token savings
- and a +2568% improvement on PrefEval-10.

## How to get started

Cloud: Sign up on MemOS Dashboard, get API key, follow Cloud Getting Started guide. Self-hosted: `git clone`, configure `.env`, `docker compose up`. Use via REST API to add/search user memories, or install the OpenClaw plugin (Cloud or Local).
