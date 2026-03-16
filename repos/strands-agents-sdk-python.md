---
title: "strands-agents/sdk-python"
repo_name: "strands-agents/sdk-python"
url: "https://github.com/strands-agents/sdk-python"
github_url: "https://github.com/strands-agents/sdk-python"
stars: 5302
language: "Python"
layout: repo
tags:
  - "AI Agents"
  - "SDK"
  - "MCP"
  - "Streaming AI"
  - "Voice AI"
  - "Python"
  - "Open Source"
---

## What it is

Strands Agents is a lightweight Python SDK for building autonomous AI agents and workflows. It is model-agnostic, supporting providers like Amazon Bedrock, Anthropic, Gemini, and local models via Ollama. A standout feature is its experimental support for bidirectional streaming, enabling real-time voice and audio interactions.

## Problems solved

- High complexity of building multi-agent systems and custom tool loops
- Lock-in to specific LLM providers
- Difficulty in implementing real-time, interruptible voice interactions with VLMs

## How to get started

Install via `pip install strands-agents`. Create an `Agent` instance by passing a list of tools (functions decorated with `@tool`). The agent will handle the loop of calling LLMs and executing your code based on the user's prompt.
