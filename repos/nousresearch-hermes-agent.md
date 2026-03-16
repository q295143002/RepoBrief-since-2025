---
title: "NousResearch/hermes-agent"
repo_name: "NousResearch/hermes-agent"
url: "https://github.com/NousResearch/hermes-agent"
github_url: "https://github.com/NousResearch/hermes-agent"
stars: 6464
language: "Python"
layout: repo
tags:
  - "AI Autonomous Agent"
  - "Machine Learning"
  - "Self-Improving AI"
  - "Multi-Agent Systems"
  - "Workflow Automation"
  - "DevOps"
---

## What it is

Hermes Agent is an advanced AI agent framework that features a built-in learning loop, allowing it to create new skills from experience and improve them over time. It supports persistent across-session memory, scheduled automations via cron, and can be accessed through various platforms including Telegram, Discord, and a traditional TUI.

## Problems solved

- Static AI capabilities: Implements a learning loop where the agent creates and refines skills autonomously.
- Context limit issues: Uses subagents and trajectory compression to handle complex, long-running tasks.
- High cost of idle agents: Supports 'hibernating' environments on serverless infrastructure like Modal or Daytona.
- Fragmented communication: Provides a single gateway to access the agent via CLI, Telegram, Discord, and more.

## How to get started

Install via the provided install script. Run `hermes` to start the interactive CLI. Use `hermes model` to select LLM providers (e.g., OpenRouter, OpenAI, local) and `hermes gateway` to enable messaging platforms like Telegram. The agent can be configured with specialized tools and skills via `hermes tools` and `hermes setup`.
