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

## Detailed report

### 1. Positioning
pinchtab/pinchtab is positioned as a pinchtab is a self-contained 12mb go binary that runs as a local http server to give ai agents direct, low-token-cost control over chrome via a rest/cli api — featuring multi-instance support, persistent profiles, stealth mode, and smcp/mcp integration. It aims to provide developers with a robust, Go-based solution for high-performance browser automation bridge and multi-instance orchestrator with advanced stealth injection and real-time dashboard.

### 2. Pain Points & Advantages
Traditional methods in this domain often suffer from Replaces screenshot-heavy browser automation (10. pinchtab/pinchtab addresses this by pinchtab is a self-contained 12mb go binary that runs as a local http server to give ai agents direct, low-token-cost control over chrome via a rest/cli api — featuring multi-instance support, persistent profiles, stealth mode, and smcp/mcp integration, offering a significant performance boost and better developer ergonomics compared to existing alternatives.

### 3. Technical Architecture
The project is built using Go, adopting a modular and scalable design. It leverages modern industry standards to ensure compatibility across different environments, focusing on efficiency and ease of integration.

### 4. Core Implementation
Main logic revolves around high-performance browser automation bridge and multi-instance orchestrator with advanced stealth injection and real-time dashboard. The implementation utilizes Go's strengths to provide pinchtab is a self-contained 12mb go binary that runs as a local http server to give ai agents direct, low-token-cost control over chrome via a rest/cli api — featuring multi-instance support, persistent profiles, stealth mode, and smcp/mcp integration, ensuring high reliability and performance under load.

### 5. Code Organization
The repository is structured logically, with core functionality separated from utilities and examples. This organization facilitates easy navigation and contribution for developers looking to extend the tool's capabilities.

### 6. Quick Start Suggestion
To get started, install via `curl -fssl https://pinchtab.com/install.sh | bash` or `npm install -g pinchtab` or docker. start with `pinchtab`, then control via cli (`pinchtab nav <url>`, `pinchtab snap`, `pinchtab click e5`) or http api at `localhost:9867`. This will allow you to quickly evaluate the tool and integrate it into your existing development workflow.

### 7. Summary
An essential, Go-powered utility that streamlines high-performance browser automation bridge and multi-instance orchestrator with advanced stealth injection and real-time dashboard; it effectively tackles Replaces screenshot-heavy browser automation (10 while maintaining a high standard of code quality and usability.
