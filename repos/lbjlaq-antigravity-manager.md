---
title: "lbjlaq/Antigravity-Manager"
repo_name: "lbjlaq/Antigravity-Manager"
url: "https://github.com/lbjlaq/Antigravity-Manager"
github_url: "https://github.com/lbjlaq/Antigravity-Manager"
stars: 26107
language: "Rust"
layout: repo
tags:
  - "Process Manager"
  - "Dashboard"
  - "Agent Monitoring"
  - "Node.js"
  - "Real-time"
  - "Operational Tools"
  - "Infrastructure"
---

## What it is

A robust process manager and monitor for local AI agents and background background tasks.

## Problems solved

- Difficulty in monitoring multiple detached AI agent processes (zombie processes, crashes).
- Lack of a 'God View' for multi-agent logs across different terminals.
- High manual overhead in restarting failed long-running research tasks.

## How to get started

git clone https://github.com/lbjlaq/Antigravity-Manager
npm install && npm run start

## Detailed report

### 1. Positioning
Antigravity-Manager is an operational dashboard for agent-centric development environments. It acts like a 'PM2' specifically for AI agents, allowing developers to spin up, monitor, and scale local agent instances via a clean web interface.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Centralizes log management—no more hunting through dozens of hidden terminal windows to find why an agent failed.
- **Differentiation**: Features 'Intelligent Auto-Restart'—it can analyze the last 5 lines of a crash log and decide whether to retry or wait for user input.

### 3. Technical Architecture
- **Tech Stack**: Node.js, Socket.io (for real-time logs), and a React-based UI.
- **Design Strategy**: Adopts a 'Sidecar' approach where the manager monitors the agent without interfering with its core logic.

### 4. Core Implementation
- **Logic Layer**: `src/manager/process_watcher.ts` handles the lifecycle of child processes and resource usage tracking (CPU/RAM).
- **Engineering Practice**: Uses WebSockets to pipe real-time CLI output directly to the browser for effortless remote monitoring.

### 5. Code Organization
- `/server`: Process management and state persistence.
- `/client`: Real-time monitoring dashboard.

### 6. Quick Start Suggestion
Add your `scraper.ts` to the manager to watch it crawl 48 pages of results in the background with absolute stability.

### 7. Summary
**Essence**: The 'Control Tower' for your agent fleet. Key learning is the centralized management of non-deterministic processes.
