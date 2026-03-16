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
