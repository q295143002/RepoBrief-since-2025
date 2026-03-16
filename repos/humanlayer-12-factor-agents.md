---
title: "humanlayer/12-factor-agents"
repo_name: "humanlayer/12-factor-agents"
url: "https://github.com/humanlayer/12-factor-agents"
github_url: "https://github.com/humanlayer/12-factor-agents"
stars: 18688
language: "TypeScript"
layout: repo
tags:
  - "Agent Principles"
  - "Best Practices"
  - "AI Safety"
  - "Engineering Standards"
  - "DevOps"
  - "Scalability"
  - "Enterprise AI"
---

## What it is

The 'Twelve-Factor App' equivalent for AI agents, outlining principles for scale, safety, and reliability.

## Problems solved

- Fragmentation and 'Experimental' nature of most AI agent projects lacking logging and safety
- Scalability issues in agentic software regarding cost, latency, and concurrency
- Lack of 'Industrial Standards' for the deployment of autonomous systems

## How to get started

Review the principles at the project website and use the reference implementations in the `/examples` folder to audit your own agent's architecture.

## Detailed report

### 1. Positioning
12-Factor Agents is a thought-leadership project by HumanLayer. It adapts the '12-Factor App' methodology for the Generative AI era, providing a checklist for building production-stable agents.

### 2. Pain Points & Advantages
Provides a 'Maturity Model' to move beyond hacker scripts. Addresses the non-deterministic nature of AI with factors like 'Input/Output Observability' and 'Deterministic Fallbacks'.

### 3. Technical Architecture
A 12-section manifesto. Principles-as-Code strategy provides reference implementations in Python and TS for observability, safety, and cost management.

### 4. Core Implementation
Factor #7 (Human-in-the-Loop) defines a standardized approval layer for external side-effects. Factor #4 (Prompt as Code) treats prompts as versioned, mission-critical source code.

### 5. Code Organization
`/factors` contains deep-dives into principles, while `/examples` demonstrates 'Good vs. Bad' patterns in agentic orchestration.

### 6. Quick Start Suggestion
Read 'Factor 5: Task Atomicity' to understand why breaking complex missions into verifiable turns is critical for agentic reliability.

### 7. Summary
The 'DevOps Manifesto' for AI. It applies traditional engineering discipline to the chaotic world of LLM orchestration, ensuring agents can safely scale in enterprise environments.
