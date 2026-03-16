---
title: "astral-sh/ty"
repo_name: "astral-sh/ty"
url: "https://github.com/astral-sh/ty"
github_url: "https://github.com/astral-sh/ty"
stars: 17677
language: "Python"
layout: repo
tags:
  - "Programming Language"
  - "Type Safety"
  - "Astral"
  - "Agent Reliability"
  - "Compiler"
  - "Rust"
  - "Deterministic AI"
---

## What it is

Astral's experimental type-safe language for building deterministic behaviors in AI agent systems.

## Problems solved

- Predictability issues where models output malformed JSON or invalid logic
- Difficulty defining 'Strict Interfaces' for agent-to-software interaction
- High latency in interpreting complex agent logic in Python/TS

## How to get started

Install using the curl script from ty-lang.org. Build and run your agent scripts using `ty build` and `ty run` commands.

## Detailed report

### 1. Positioning
Ty is a radical approach to agent development by the Astral team (creators of `uv`). It's a compiled, type-safe language for defining 'Agentic State Machines', ensuring agents never deviate from pre-defined logical paths.

### 2. Pain Points & Advantages
Solves the 'Unpredictable Agent' problem by moving safety rules from prompts to the type system. Compiled for speed, initializing 10-50x faster than traditional Python-based agents.

### 3. Technical Architecture
Rust-based compiler with a custom LLM-integrated runtime. Adopts a 'Schema-Driven Execution' model where code acts as a chassis for the model engine.

### 4. Core Implementation
The compiler generates 'Constrained JSON Schemas' injected into every model call for 100% compliance. Includes 'First-class Probabilistic Types' for handling non-deterministic choices.

### 5. Code Organization
`/compiler` contains the Rust lexer/generator, while `/runtime/llm-bridge` manages interactions between compiled code and model APIs.

### 6. Quick Start Suggestion
Read `benchmarks/determinism.py` to see how Ty-based agents achieve near-perfect task success rates compared to standard Python agents.

### 7. Summary
The 'Chassis' for the AI engine. It represents a paradigm shift towards using native compiled languages to enforce strict reliability in autonomous systems.
