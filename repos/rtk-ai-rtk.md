---
title: "rtk-ai/rtk"
repo_name: "rtk-ai/rtk"
url: "https://github.com/rtk-ai/rtk"
github_url: "https://github.com/rtk-ai/rtk"
stars: 6651
language: "Rust"
layout: repo
tags:
  - "Token-Optimization"
  - "Claude-Code"
  - "Rust"
  - "CLI"
  - "Developer-Tool"
  - "Open-Source"
---

## What it is

rtk is a single Rust binary that intercepts shell command output and applies smart filtering, grouping, truncation, and deduplication before the output reaches the LLM context. It reduces token usage 60–90% for git, ls, cat, grep, test, build, and lint commands, with <10ms overhead and a hook that auto-rewrites commands transparently in Claude Code and OpenCode.

## Problems solved

- AI coding agents consume enormous token budgets on verbose
- repetitive command outputs (git diff
- cargo test
- ls
- etc.). rtk makes those outputs LLM-efficient without changing the agent's behavior — the agent still issues normal commands but gets clean
- compressed output.

## How to get started

Install: `brew install rtk` or `curl ... | sh`. Setup hook: `rtk init --global` (then restart Claude Code). Use directly: `rtk git status`, `rtk ls .`, `rtk test cargo test`. View savings: `rtk gain`. For OpenCode: `rtk init -g --opencode`.
