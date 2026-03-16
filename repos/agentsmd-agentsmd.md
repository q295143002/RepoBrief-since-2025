---
title: "agentsmd/agents.md"
repo_name: "agentsmd/agents.md"
url: "https://github.com/agentsmd/agents.md"
github_url: "https://github.com/agentsmd/agents.md"
stars: 18887
language: "TypeScript"
layout: repo
tags:
  - "Standardization"
  - "AI Instructions"
  - "Coding Standards"
  - "Prompt Engineering"
  - "Code Documentation"
  - "Agent Context"
  - "Open Format"
---

## What it is

An open-standard format for project-level AI instructions, ensuring agents adhere to specific local coding rules.

## Problems solved

- AI agents ignoring local lint rules or naming conventions on specialized projects
- Onboarding 'New' agents to codebases where context is scattered across many files
- Fragmentation between different coding agents regarding project-level system prompts

## How to get started

Create an `AGENTS.md` file in your repository root. Use the standard headers (Mission, Tech Stack, Rules) to define your project's AI operating manual.

## Detailed report

### 1. Positioning
AGENTS.md is a proposal for a standardized 'README' for AI. It provides a single Markdown file that any agentive tool (Claude Code, Cursor, etc.) can read to understand a project's unique constraints and priorities.

### 2. Pain Points & Advantages
Eliminates 'Instruction Drift' by providing a single source of truth for AI agents. Simple and low-tech—requires no new libraries, just standard Markdown files that LLMs read naturally.

### 3. Technical Architecture
Structured Markdown with mandatory headers. Adopts a 'System-Prompt Injection' pattern where content is appended to the agent's initial context window.

### 4. Core Implementation
Standardizes 'Safe Zones'—defining directories the agent must not modify. Includes support for a 'Glossary' to define project-specific jargon that might confuse base models.

### 5. Code Organization
`/spec` defines the formal AGENTS.md standard, and `/templates` provides boilerplate for various tech stacks (React, Go, Python).

### 6. Quick Start Suggestion
Add an `AGENTS.md` to your repo with the rule "Always use functional components" and see how your AI editor's suggestions immediately align.

### 7. Summary
The '.gitignore' for AI instructions. It serves as the bridge for human-to-machine context transfer and is essential for maintaining consistency in AI-assisted codebases.
