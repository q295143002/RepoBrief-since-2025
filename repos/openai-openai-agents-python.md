---
title: "openai/openai-agents-python"
repo_name: "openai/openai-agents-python"
url: "https://github.com/openai/openai-agents-python"
github_url: "https://github.com/openai/openai-agents-python"
stars: 19953
language: "Python"
layout: repo
tags:
  - "OpenAI"
  - "Agent SDK"
  - "Multi-Agent"
  - "Python"
  - "Orchestration"
  - "LiteLLM"
  - "AI Safety"
---

## What it is

OpenAI's official Python SDK for building modular, provider-agnostic multi-agent systems.

## Problems solved

- Over-complexity and 'Heavy' abstractions in early agent frameworks like LangChain
- Lock-in to specific model providers—needing a tool that works with OpenAI, Claude, and local models
- Complexity in managing 'Handoffs' between specialized agents

## How to get started

Install via pip: `pip install openai-agents`. Use the `Agent` and `Runner` classes to define instructions, tools, and cross-agent handoff logic.

## Detailed report

### 1. Positioning
The OpenAI Agents SDK is a 'Modern minimalist' framework. It prioritizes 'Provider Agnosticism' (via LiteLLM) and 'Functional Simplicity,' focusing on Instructions, Tools, Guardrails, and Handoffs.

### 2. Pain Points & Advantages
Simplifies 'Complex Orchestration'—trivializes creating 'Supervisor' agents that can delegate to 'Coder' agents. Official support for 'Realtime Agents' and 'Human-in-the-loop' makes it production-ready.

### 3. Technical Architecture
Python-based, using LiteLLM for multi-model tiering. Adopts a 'Runner-based' architecture where execution logic is decoupled from agent definitions for better tracing.

### 4. Core Implementation
`agents/runner.py` manages the recursion and tool-calling loop. Features built-in 'Tracing'—every run generates an execution trace for optimization and auditing.

### 5. Code Organization
`/agents` contains core abstractions, while `/examples` demonstrates patterns from basic chat to multi-agent voice collaboration.

### 6. Quick Start Suggestion
Run `examples/basic/handoff.py` to see the cleanest implementation of agent-to-agent delegation currently available in the ecosystem.

### Summary
The 'Reference Architecture' for modular agents. It represents the industry pivot towards 'lightweight orchestration' and model-agnostic development.
