---
title: "datawhalechina/hello-agents"
repo_name: "datawhalechina/hello-agents"
url: "https://github.com/datawhalechina/hello-agents"
github_url: "https://github.com/datawhalechina/hello-agents"
stars: 27265
language: "Python"
layout: repo
tags:
  - "AI Agents"
  - "Education"
  - "Python"
  - "DataWhale"
  - "Agentic Framework"
  - "Tutorial"
  - "Open Source"
---

## What it is

A comprehensive, beginner-friendly educational framework for mastering AI agent development.

## Problems solved

- Steep learning curve for newcomers to the world of LLM orchestration and tools.
- Lack of simple, 'runnable-out-of-the-box' examples for common agent patterns (ReAct, Planning).
- Fragmented documentation in the agentic ecosystem.

## How to get started

git clone https://github.com/datawhalechina/hello-agents
cd hello-agents
pip install -r requirements.txt
python examples/simple_agent.py

## Detailed report

### 1. Positioning
Hello-Agents is an educational project by the DataWhale community. It is designed to demystify AI agents for students and engineers by providing 'Gold Standard' implementations of core agentic concepts (like tool calling, memory management, and multi-agent coordination) in plain Python.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Provides a structured learning path that goes from 'Hello World' to complex enterprise agents in a single repo.
- **Differentiation**: Emphasizes 'code readability' and 'principled design' over raw performance, making it the best starting point for educators.

### 3. Technical Architecture
- **Tech Stack**: Python, supporting multiple LLM backends (OpenAI, DeepSeek, GLM).
- **Design Strategy**: Follows the 'Micro-Framework' approach—each concept is a standalone script or module with heavy commenting.

### 4. Core Implementation
- **Implementation Style**: Clear separation between the 'Brain' (LLM), 'Hands' (Tools), and 'Context' (Memory).
- **Innovation**: Documentation of 'Agent Failure Modes'—explaining why an agent might loop and how to fix it via prompt engineering.

### 5. Code Organization
- `/concepts`: Tutorials on ReAct, Planning, and Tool-use.
- `/projects`: End-to-end practical examples (e.g., automated SEO agent).

### 6. Quick Start Suggestion
Read `concepts/01_react_loop.py` to see the simplest implementation of an AI agent that can correct its own mistakes.

### 7. Summary
**Essence**: The 'textbook' for the Agent era. Key taking is the clear, modular deconstruction of agentic reasoning.
