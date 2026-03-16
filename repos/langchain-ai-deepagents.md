---
title: "langchain-ai/deepagents"
repo_name: "langchain-ai/deepagents"
url: "https://github.com/langchain-ai/deepagents"
github_url: "https://github.com/langchain-ai/deepagents"
stars: 10661
language: "Python"
layout: repo
tags:
  - "AI Agent"
  - "LangGraph"
  - "Python"
  - "Developer Harness"
---

## What it is

Deep Agents is an opinionated, out-of-the-box agent harness built on LangGraph, providing built-in planning, filesystem access, sub-agent delegation, and shell execution.

## Problems solved

- Saves developers from writing extensive boilerplate necessary to wire up prompts
- tool definitions
- filesystem capabilities
- and persistent context management when bootstrapping an autonomous AI agent.

## How to get started

Install via `pip install deepagents`. In Python, initialize with `from deepagents import create_deep_agent`, then create an instance `agent = create_deep_agent()` and invoke it: `agent.invoke({"messages": [{"role": "user", "content": "Research LangGraph"}]})`.
