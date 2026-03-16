---
title: "pinchtab/pinchtab"
repo_name: "pinchtab/pinchtab"
url: "https://github.com/pinchtab/pinchtab"
github_url: "https://github.com/pinchtab/pinchtab"
stars: 7328
language: "Go"
layout: repo
tags:
  - "Browser-Automation"
  - "AI-Agent"
  - "Go"
  - "MCP"
  - "Chrome"
  - "HTTP-API"
  - "Open-Source"
---

## What it is

PinchTab is a self-contained 12MB Go binary that runs as a local HTTP server to give AI agents direct, low-token-cost control over Chrome via a REST/CLI API — featuring multi-instance support, persistent profiles, stealth mode, and SMCP/MCP integration.

## Problems solved

- Replaces screenshot-heavy browser automation (10
- 000 tokens/page) with accessibility-first text extraction at ~800 tokens/page (5-13x cheaper)
- while providing stable element refs
- persistent sessions
- ARM64 support
- and headless-or-headed operation in a dependency-free binary.

## How to get started

Install via `curl -fsSL https://pinchtab.com/install.sh | bash` or `npm install -g pinchtab` or Docker. Start with `pinchtab`, then control via CLI (`pinchtab nav <url>`, `pinchtab snap`, `pinchtab click e5`) or HTTP API at `localhost:9867`.
