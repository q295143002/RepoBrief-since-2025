---
title: "agentscope-ai/CoPaw"
repo_name: "agentscope-ai/CoPaw"
url: "https://github.com/agentscope-ai/CoPaw"
github_url: "https://github.com/agentscope-ai/CoPaw"
stars: 11096
language: "Python"
layout: repo
tags:
  - "AI Assistant"
  - "Multi-Channel"
  - "Local LLM"
  - "Personal AI"
---

## What it is

CoPaw is a versatile, easily deployable personal AI assistant supporting multiple communication channels and local or cloud models with extensive custom capabilities.

## Problems solved

- Consolidates AI interaction into a single assistant accessible across various platforms (DingTalk
- QQ
- Discord
- etc.); enables users to maintain full control of data and memory by deploying locally or relying on cloud networks; eliminates vendor lock-in with support for numerous AI modes and transparent extensibility.

## How to get started

Via pip: `pip install copaw`, initialize with `copaw init --defaults`, and run `copaw app`. Detailed script installations are also provided for macOS/Linux `curl -fsSL https://copaw.agentscope.io/install.sh | bash` and Docker `docker run -p 127.0.0.1:8088:8088 -v copaw-data:/app/working -v copaw-secrets:/app/working.secret agentscope/copaw:latest`.
