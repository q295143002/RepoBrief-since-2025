---
title: "EveryInc/compound-engineering-plugin"
repo_name: "EveryInc/compound-engineering-plugin"
url: "https://github.com/EveryInc/compound-engineering-plugin"
github_url: "https://github.com/EveryInc/compound-engineering-plugin"
stars: 10331
language: "TypeScript"
layout: repo
tags:
  - "Claude Code"
  - "AI Engineering"
  - "Workflow"
  - "Productivity"
---

## What it is

EveryInc's plugin marketplace offers a suite of 'Compound Engineering' tools for Claude Code and other AI coding assistants, emphasizing thorough planning and codified learnings.

## Problems solved

- Combats technical debt and complexity creep by enforcing a 'Compound Engineering' philosophy; bridges the gap between different AI coding tools (Cursor
- Gemini CLI
- Windsurf) via a unified plugin conversion CLI; automates the cycle of brainstorming
- planning
- and documenting learnings.

## How to get started

In Claude Code, add the marketplace with `/plugin marketplace add EveryInc/compound-engineering-plugin`, then install via `/plugin install compound-engineering`. For other tools, use the provided conversion CLI: `bunx @every-env/compound-plugin install compound-engineering --to opencode`.

## Detailed report

### 1. Positioning
This marketplace serves professional software engineers who use agentic coding tools and want to adopt a high-quality development lifecycle. It targets the 'Every' engineering philosophy: 80% planning/review and 20% execution.

### 2. Pain Points & Advantages
Most AI coding interactions are ad-hoc and lead to messy codebases. This plugin provides a structured workflow (/ce:brainstorm, /ce:plan, /ce:work, /ce:review, /ce:compound) that ensures each task makes subsequent ones easier. Its biggest advantage is its 'Sync' capability, allowing personal skills and MCP servers to be mirrored across 10+ different AI IDEs automatically.

### 3. Technical Architecture
Built using Bun and TypeScript, it features a sophisticated conversion engine that maps Claude Code plugin definitions (JSON/Markdown) into provider-specific formats for tools like Cursor, Windsurf, and OpenCode. It uses symlinking for personal config syncing to ensure real-time updates across platforms.

### 4. Core Implementation
The primary 'Compound' plugin provides five cross-linked commands. The `/ce:compound` command is the key, automating the documentation of architectural patterns and learnings after a task is completed, which then feeds back into the `/ce:plan` phase of the next task.

### 5. Code Organization
The repository includes the marketplace index, the `compound-engineering` plugin source (agents, commands, skills), and a `src/` directory for the Bun-based CLI tool responsible for cross-tool installation and configuration syncing.

### 6. Quick Start Suggestion
Install the plugin in Claude Code and run `/ce:brainstorm` for your next feature. Watch how it pushes you to clarify requirements and then try `/ce:compound` after finishing to see it automatically build your project's 'memory'.

### 7. Summary
EveryInc has created more than just a plugin; they've productized a philosophy. The Compound Engineering Plugin is a powerful tool for any team looking to use AI agents effectively without compromising codebase quality, further aided by their impressive cross-IDE compatibility layer.
