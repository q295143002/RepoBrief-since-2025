---
title: "bytebot-ai/bytebot"
repo_name: "bytebot-ai/bytebot"
url: "https://github.com/bytebot-ai/bytebot"
github_url: "https://github.com/bytebot-ai/bytebot"
stars: 10545
language: "TypeScript"
layout: repo
tags:
  - "AI Agent"
  - "Desktop Automation"
  - "Self-Hosted"
  - "Docker"
---

## What it is

Bytebot is an open-source AI desktop agent that operates within a full virtual Ubuntu environment to perform complex cross-application tasks autonomously.

## Problems solved

- Resolves the limitations of browser-only agents by providing a complete desktop environment; handles 2FA and complex authentications via password managers; automates native desktop application workflows (like VS Code or Office) that are typically inaccessible to standard AI web agents.

## How to get started

Standard deployment via Docker Compose: `git clone https://github.com/bytebot-ai/bytebot.git`, add your `ANTHROPIC_API_KEY` (or OpenAI/Gemini) to `docker/.env`, and run `docker-compose -f docker/docker-compose.yml up -d`. Access the UI at `http://localhost:9992`.
