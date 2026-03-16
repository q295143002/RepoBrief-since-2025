---
title: "frankbria/ralph-claude-code"
repo_name: "frankbria/ralph-claude-code"
url: "https://github.com/frankbria/ralph-claude-code"
github_url: "https://github.com/frankbria/ralph-claude-code"
stars: 7781
language: "Shell"
layout: repo
tags:
  - "Claude-Code"
  - "Agentic-Workflow"
  - "Autonomous-Coding"
  - "CLI"
  - "Shell-Scripting"
  - "Productivity"
---

## What it is

Ralph is a wrapper for Claude Code that enables safe, continuous, and autonomous development loops, providing safeguards like circuit breakers and session management.

## Problems solved

- Prevents runaway infinite loops and excessive API usage (rate limits/5-hour lockouts) while maintaining session continuity during long
- autonomous coding tasks handled by Claude Code.

## How to get started

Install globally using the provided script. Run `ralph-enable` in your project to set up the config (.ralphrc). Define tasks in `PROMPT.md` and run `ralph --monitor` to start an autonomous loop with a live tmux dashboard.
