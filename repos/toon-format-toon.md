---
title: "toon-format/toon"
repo_name: "toon-format/toon"
url: "https://github.com/toon-format/toon"
github_url: "https://github.com/toon-format/toon"
stars: 23207
language: "TypeScript"
layout: repo
tags:
  - "Toon"
  - "DSL"
  - "Task Orchestration"
  - "Type Safety"
  - "Autonomous Agents"
  - "Rust"
  - "Formal Verification"
---

## What it is

A strictly-typed task definition format designed to ensure zero-ambiguity in AI autonomous task execution.

## Problems solved

- AI agents failing due to 'vague' task descriptions or misinterpreting JSON schemas.
- Inability to compile-time check if an agent can actually fulfill a requested task.
- Lack of a 'Human-Readable yet Machine-Strict' format for defining complex multi-step workflows.

## How to get started

npm install toon-cli
toon validate workflow.toon
toon run workflow.toon

## Detailed report

### 1. Positioning
Toon is a novel 'Task Definition Language' (TDL). It sits between natural language and raw code, providing a strictly-typed schema that forces both humans and AI to define missions with absolute clarity. It is to 'Agent Tasks' what 'TypeScript' is to 'JavaScript'.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Eliminates the 'Drift' where an agent starts a task but forgets the original constraints halfway through. The `.toon` file acts as an immutable source of truth.
- **Differentiation**: Features 'Semantic Type-Checking'—the Toon compiler can flag if an agent is trying to pass a 'String' into an 'Image' input before the LLM even tries to execute it.

### 3. Technical Architecture
- **Tech Stack**: Rust (Compiler), JS/TS (Runtime).
- **Design Strategy**: Uses a custom DSL (Domain Specific Language) that emphasizes 'Pre-conditions' and 'Post-conditions' for every task node.

### 4. Core Implementation
- **Logic Layer**: `src/compiler/parser.rs` converts the `.toon` format into an optimized execution graph (DAG).
- **Innovative**: 'Reasoning Checkpoints'—the format allows developers to define points where the agent MUST pause and provide a structured reflection before proceeding.

### 5. Code Organization
- `/compiler`: The Rust-based parser and validator.
- `/runtime`: Environment-specific drivers for executing Toon graphs.

### 6. Quick Start Suggestion
Read `docs/syntax.md` to see how a complex multi-tool research task is broken down into a 100% predictable set of nodes and edges.

### 7. Summary
**Essence**: The 'formal verification' of the Agent age. Key learning is the balance between natural language flexibility and type-safe execution.
