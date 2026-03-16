---
title: "huggingface/agents-course"
repo_name: "huggingface/agents-course"
url: "https://github.com/huggingface/agents-course"
github_url: "https://github.com/huggingface/agents-course"
stars: 26281
language: "MDX"
layout: repo
tags:
  - "Llm"
---

## What it is

Official Hugging Face curriculum for mastering LLM agents using open-source models.

## Problems solved

- Knowledge gap in how to adapt open-weights models (Llama, Gemma) for reliable agentic tool-use.
- Lack of standardized benchmarks for 'Agent performance' in open-source research.
- Complexity in deploying multi-agent swarms using the Transformers library.

## How to get started

git clone https://github.com/huggingface/agents-course
# Follow the Jupyter notebooks in chronological order.

## Detailed report

### 1. Positioning
This is the official curriculum by Hugging Face for the next generation of AI developers. It focuses on the transition from 'Chatbots' to 'Agents,' teaching the community how to leverage open-source models for tool interaction, long-term reasoning, and autonomy.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Provides documented 'Best Practices' for fine-tuning small models (7B/8B) to be as effective at tool-calling as proprietary giants.
- **Differentiation**: Integrates deeply with the Hugging Face Hub, providing pre-configured 'Agent Spaces' where students can deploy their projects for free.

### 3. Technical Architecture
- **Tech Stack**: Python, Transformers, Gradio, smolagents.
- **Design Strategy**: Learn-by-doing—moving from basic function calling to complex multi-agent orchestration via the `smolagents` library.

### 4. Core Implementation
- **Logic Layer**: Teaches the 'Code Agent' paradigm—where agents write and execute local code to solve problems rather than just predicting JSON.
- **Innovation**: Documentation of the 'Grammar-constrained generation' technique to ensure 100% syntactical tool-call correctness.

### 5. Code Organization
- `/unit0`: Introduction to tool-calling.
- `/unit1`: Building your first autonomous research agent.
- `/unit2`: Multi-agent systems and collaboration.

### 6. Quick Start Suggestion
Start with the `smolagents` notebook in Unit 1; it’s the most modern approach to building efficient, small-footprint agents.

### 7. Summary
**Essence**: The 'Academy' for open AI agents. Key taking is the democratization of agentic reasoning through open-weights models.
