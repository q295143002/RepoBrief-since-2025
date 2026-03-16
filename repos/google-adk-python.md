---
title: "google/adk-python"
repo_name: "google/adk-python"
url: "https://github.com/google/adk-python"
github_url: "https://github.com/google/adk-python"
stars: 18334
language: "Python"
layout: repo
tags:
  - "Google Cloud"
  - "SDK"
  - "AI Engineering"
  - "Python"
  - "Agent Tooling"
  - "Production AI"
  - "Testing"
---

## What it is

Google's modular Python SDK for building, testing, and scaling industrial-grade AI agents.

## Problems solved

- Fragmentation in agent design patterns and repeated Action-Loop implementations
- Lack of rigorous testing tools for non-deterministic AI behaviors
- Difficulty in scaling agents from local scripts to cloud environments

## How to get started

Install via pip: `pip install google-adk`. Load the `Agent` and `Skill` classes to define tools and orchestration logic in your Python application.

## Detailed report

### 1. Positioning
The Agent Development Kit (ADK) is Google's 'Enterprise-First' response to agentic software. It provides a modular, decoupled architecture treating Reasoning, Tooling, and State as distinct, swappable components.

### 2. Pain Points & Advantages
Standardizes 'Skill Definitions' for cross-project reuse. Native support for 'Scenario-based Testing', allowing developers to write mock interactions to verify safety and policy compliance.

### 3. Technical Architecture
Strictly typed Python/Pydantic core. Adopts a plugin-based architecture where every external capability is a 'Skill' with its own schema and validation.

### 4. Core Implementation
`runtime.py` implements the high-level execution loop with integrated telemetry. Includes 'Safe Execution Handlers'—guardrails that sanitize model outputs before they reach sensitive tools like DBs or Shell.

### 5. Code Organization
`/google/adk/skills` contains verified tools (Search, Gmail), and `/google/adk/testing` provides utilities for agentic unit tests.

### 6. Quick Start Suggestion
Examine `examples/basic_skill_agent.py` to see the clear separation between the model (brain) and the skills (hands).

### 7. Summary
The 'Standard Library' for Agents. It bridges the gap between AI research and production software engineering through modularity and strict schema-first validation.
