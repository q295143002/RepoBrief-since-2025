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

## Detailed report

### 1. Positioning
langchain-ai/open-swe is positioned as a open swe is an industrial-grade framework for building 'software engineering' agents similar to those used internally at companies like stripe and ramp. built on langgraph, it provides a complete infrastructure including secure cloud sandboxes, slack/linear invocation, and subagent orchestration for complex coding tasks. It aims to provide developers with a robust, Python-based solution for an open-source asynchronous coding agent.

### 2. Pain Points & Advantages
Traditional methods in this domain often suffer from High risk of running agent-generated code on local developer machines. langchain-ai/open-swe addresses this by open swe is an industrial-grade framework for building 'software engineering' agents similar to those used internally at companies like stripe and ramp. built on langgraph, it provides a complete infrastructure including secure cloud sandboxes, slack/linear invocation, and subagent orchestration for complex coding tasks, offering a significant performance boost and better developer ergonomics compared to existing alternatives.

### 3. Technical Architecture
The project is built using Python, adopting a modular and scalable design. It leverages modern industry standards to ensure compatibility across different environments, focusing on efficiency and ease of integration.

### 4. Core Implementation
Main logic revolves around an open-source asynchronous coding agent. The implementation utilizes Python's strengths to provide open swe is an industrial-grade framework for building 'software engineering' agents similar to those used internally at companies like stripe and ramp. built on langgraph, it provides a complete infrastructure including secure cloud sandboxes, slack/linear invocation, and subagent orchestration for complex coding tasks, ensuring high reliability and performance under load.

### 5. Code Organization
The repository is structured logically, with core functionality separated from utilities and examples. This organization facilitates easy navigation and contribution for developers looking to extend the tool's capabilities.

### 6. Quick Start Suggestion
To get started, deploy as a service that listens to github/slack/linear webhooks. when an engineer mentions the bot on an issue or thread, open swe spins up an isolated sandbox (modal, daytona, etc.), clones the repo, and performs the requested engineering task asynchronously. This will allow you to quickly evaluate the tool and integrate it into your existing development workflow.

### 7. Summary
An essential, Python-powered utility that streamlines an open-source asynchronous coding agent; it effectively tackles High risk of running agent-generated code on local developer machines while maintaining a high standard of code quality and usability.
