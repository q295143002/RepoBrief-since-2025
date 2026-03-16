---
title: "Yeachan-Heo/oh-my-claudecode"
repo_name: "Yeachan-Heo/oh-my-claudecode"
url: "https://github.com/Yeachan-Heo/oh-my-claudecode"
github_url: "https://github.com/Yeachan-Heo/oh-my-claudecode"
stars: 9570
language: "TypeScript"
layout: repo
tags:
  - "Claude Code"
  - "CLI"
  - "AI Agent"
  - "Orchestration"
  - "Tmux"
---

## What it is

Oh-My-ClaudeCode (OMC) is a powerful, tmux-powered orchestration layer for Claude Code that enables multi-agent teams, tri-model advising (Claude/Gemini/Codex), and persistent execution loops.

## Problems solved

- Overcomes the single-agent limitations of standard Claude Code; solves high-latency tasks by spawning parallel tmux worker panes; provides a 'Deep Interview' mode to clarify vague technical requirements before coding begins.

## How to get started

Install via Claude Code: `/plugin install oh-my-claudecode`. Run `/omc-setup` to configure providers. Use keywords like `autopilot: {task}` for high-agency work or `/team 3:executor` for multi-agent parallel implementation.

## Detailed report

### 1. Positioning
OMC is the 'Zsh-style powerup' for the Claude Code CLI. It targets power users who want to transform the single-threaded Claude experience into a multi-agent 'Software Engineering Studio'.

### 2. Pain Points & Advantages
Claude Code can be slow for large tasks. OMC's 'Ultrawork' and 'Team' modes solve this by parallelizing work across multiple processes. Its 'Tri-Model' capability (via `/ccg`) is a unique advantage, allowing users to cross-reference Claude's logic with Gemini's massive 1M context and Codex's architecture reviews.

### 3. Technical Architecture
Built as a sophisticated bridge between the Claude Code plugin system and the local OS. It heavily utilizes `tmux` for process management and session persistence. It includes a custom HUD (Head-Up Display) for real-time monitoring of orchestration metrics.

### 4. Core Implementation
Features a 32-agent specialist library (Architect, Researcher, etc.), a 'Socratic' interview engine to minimize hallucination through clarification, and a 'Rate Limit Daemon' that auto-resumes sessions when quotas reset.

### 5. Code Organization
The repository contains the plugin bridging logic, a suite of bash/node scripts for tmux automation, and a comprehensive configuration system for external providers (Gemini/OpenAI).

### 6. Quick Start Suggestion
Run `/deep-interview "I want to build a SaaS dashboard"`. Use the resulting structured plan as the input for `autopilot`, and watch how the agent executes the clarified vision with much higher precision.

### 7. Summary
OMC is an essential utility for anyone serious about 'Vibe Coding' at scale. By bringing professional-grade orchestration and multi-model consensus to the terminal, it pushes the boundaries of what a single developer can achieve with AI.
