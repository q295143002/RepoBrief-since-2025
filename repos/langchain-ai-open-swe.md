---
title: "langchain-ai/open-swe"
repo_name: "langchain-ai/open-swe"
url: "https://github.com/langchain-ai/open-swe"
github_url: "https://github.com/langchain-ai/open-swe"
stars: 5287
language: "Python"
layout: repo
tags:
  - "AI Coding Agent"
  - "SWE Agent"
  - "LangGraph"
  - "Slackbot"
  - "DevOps"
  - "Automation"
  - "Open Source"
---

## What it is

Open SWE is an industrial-grade framework for building 'Software Engineering' agents similar to those used internally at companies like Stripe and Ramp. Built on LangGraph, it provides a complete infrastructure including secure cloud sandboxes, Slack/Linear invocation, and subagent orchestration for complex coding tasks.

## Problems solved

- High risk of running agent-generated code on local developer machines
- Lack of standardized context-gathering from task management systems like Linear
- Need for multi-step 'agentic loops' with safety gates (PR creation instead of direct commits)

## How to get started

Deploy as a service that listens to GitHub/Slack/Linear webhooks. When an engineer mentions the bot on an issue or thread, Open SWE spins up an isolated sandbox (Modal, Daytona, etc.), clones the repo, and performs the requested engineering task asynchronously.
