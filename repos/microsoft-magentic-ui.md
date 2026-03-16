---
title: "microsoft/magentic-ui"
repo_name: "microsoft/magentic-ui"
url: "https://github.com/microsoft/magentic-ui"
github_url: "https://github.com/microsoft/magentic-ui"
stars: 9717
language: "Python"
layout: repo
tags:
  - "AI Agent"
  - "Web Automation"
  - "Human-in-the-loop"
  - "Microsoft Research"
---

## What it is

Magentic-UI is a Microsoft Research project that provides a transparent, controllable web-browsing agent featuring a human-in-the-loop plan editor and multi-agent orchestration.

## Problems solved

- Solves the 'Black Box' problem of autonomous agents by exposing a Step-by-Step plan editor for user guidance; automates long-running monitoring tasks ('Tell me When'); manages sensitive web actions through explicit 'Action Guards'.

## How to get started

Requires Docker and Python 3.10+. Install via `pip install magentic-ui`, set your `OPENAI_API_KEY`, and launch with `magentic-ui --port 8081`. Access the dashboard in your browser to start co-planning tasks.

## Detailed report

### 1. Positioning
Magentic-UI is a research-centric platform from Microsoft targeting human-AI interaction (HAI) researchers and developers. It is uniquely focused on 'Human-Centered AI', where the agent is a collaborator rather than a fully autonomous (and often silent) operator.

### 2. Pain Points & Advantages
Users often find autonomous agents scary or difficult to trust. Magentic-UI's 'Co-Planning' feature is its killer app: the agent proposes a plan, you edit it in a visual UI, and only then does it execute. Other advantages include 'Action Guards' for sensitive clicks and 'Plan Learning' (retrieving successful plans from a history gallery).

### 3. Technical Architecture
Built using Microsoft's AutoGen framework. It employs a multi-agent team: an Orchestrator, a Coder, a Web Surfer, and an Action Guard. Deployment is containerized (Docker) to provide a secure execution environment for browser and code tasks.

### 4. Core Implementation
Integrates specialized models like Fara-7B for efficient computer use. It features 'Tell me When' logic—agents that can wait for days and monitor for specific web changes (like a stock price or a pizza status). It also supports the Model Context Protocol (MCP) to extend its capabilities.

### 5. Code Organization
The project is divided into a Python backend (`magentic_ui/`) and a Gatsby/React frontend (`frontend/`), with a dedicated `docker/` directory containing the browser and worker environment definitions.

### 6. Quick Start Suggestion
Try a 'Pizza Ordering' task (on a staging site). You'll see the agent browse, select items, and then pause at the 'Checkout' button, letting you verify the order and payment details before it proceed, demonstrating the 'Action Guard' principle perfectly.

### 7. Summary
Magentic-UI is a visionary prototype for the future of AI. By prioritizing transparency and user control as first-class features, Microsoft has created a framework that makes autonomous web agents feel safe and reliable enough for real-world personal use.
