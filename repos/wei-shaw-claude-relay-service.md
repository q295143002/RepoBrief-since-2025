---
id: 1019432584
repo_name: "Wei-Shaw/claude-relay-service"
url: "https://github.com/Wei-Shaw/claude-relay-service"
stars: 9446
language: "JavaScript"
tags: ["API Gateway","Claude","Codex","Infrastructure","Proxy"]
original_description: "Claude Relay Service: 自行搭建Claude API中转服务，支持多账户管理。支持 Claude Code 和 Codex CLI。"
english_summary: "Claude Relay Service is a self-hosted API gateway for Claude and Codex, featuring multi-account management, intelligent rotation, and usage statistics for individuals and teams."
chinese_summary: null
problems_solved: "- Solves regional access restrictions to Claude services; eliminates privacy concerns of third-party mirroring sites by keeping data on private servers; enables cost-sharing of high-tier subscriptions (like Claude Max) through multi-user API key management."
how_to_use: "Run the one-click script: `curl -fsSL https://pincc.ai/manage.sh -o manage.sh && chmod +x manage.sh && ./manage.sh install`. Configure your `JWT_SECRET` and `ENCRYPTION_KEY` in the `.env` file, then access the web dashboard at `http://your-ip:3000/web` to add accounts."
sync_at: "2026-03-17T12:09:44.212Z"
---

# Wei-Shaw/claude-relay-service

### 1. Positioning
Claude Relay Service (CRS) is an infrastructure tool for the 'power user' ecosystem. It positions itself as a private, secure bridge between Anthropic's official API and developers who require high stability, multi-account pooling, and transparent cost management for tools like Claude Code and Codex.

### 2. Pain Points & Advantages
Standard API usage is often restricted by geography or single-account limits. CRS's primary advantage is its 'Account-Native' rotation logic—it manages multiple OAuth sessions and API keys, automatically switching to a healthy account if one hits a rate limit or 5xx error. Unlike public mirror sites, CRS ensures 100% data privacy as traffic flows directly from the private server to Anthropic.

### 3. Technical Architecture
Built with a Node.js (v18+) backend and a React/Vite-based administrative frontend. It uses Redis (v6+) for session persistence, rate-limiting state, and intelligent routing metadata. The system is designed to be lightweight, running comfortably on a 1-core, 1GB RAM VPS.

### 4. Core Implementation
Features a sophisticated 'Cooling' system: when an upstream account returns a 503 or 429 error, CRS temporarily pauses routing to that specific account for a configurable TTL. It includes a WebSocket-based real-time log viewer and a 'Static Proxy' feature to assign different IPs to different accounts, mitigating mass account flagging.

### 5. Code Organization
The repository is a monorepo containing the server logic (`src/`), a web dashboard (`web-ui/`), and a collection of lifecycle management scripts. It provides deep integration guides for various CLIs: `~/.claude/config.json` for Claude Code and `~/.codex/config.toml` for Codex.

### 6. Quick Start Suggestion
After installation, go to the 'Claude Accounts' tab and use the 'Generate Authorization Link' feature to quickly pair your existing browser session. Once paired, create a specialized API key for your local terminal to track exactly how many tokens your coding sessions are consuming.

### 7. Summary
Claude Relay Service is a vital utility for serious AI-assisted developers. By providing a production-grade orchestration layer for personal AI accounts, it transforms a fragile single-user session into a robust, team-ready API infrastructure.
