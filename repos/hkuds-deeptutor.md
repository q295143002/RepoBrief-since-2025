---
title: "HKUDS/DeepTutor"
repo_name: "HKUDS/DeepTutor"
url: "https://github.com/HKUDS/DeepTutor"
github_url: "https://github.com/HKUDS/DeepTutor"
stars: 10684
language: "Python"
layout: repo
tags:
  - "AI Education"
  - "RAG"
  - "Multi-Agent"
  - "Personalized Learning"
---

## What it is

DeepTutor is a comprehensive AI-powered learning system that combines document-based knowledge retrieval with multi-agent automated tutoring, visualization, and practice generation.

## Problems solved

- Addresses fragmented learning experiences by combining a smart knowledge base (RAG from textbooks) with multi-agent problem solving
- step-by-step visual explanations
- adaptive Q&A generation
- and automated research synthesis into a singular unified platform.

## How to get started

Clone the repo and configure your `.env` with required LLM and Embedding API keys. The easiest deployment is via Docker: `docker run -d -p 8001:8001 -p 3782:3782 --env-file .env -v $(pwd)/data:/app/data ghcr.io/hkuds/deeptutor:latest`.
