---
title: "superset-sh/superset"
repo_name: "superset-sh/superset"
url: "https://github.com/superset-sh/superset"
github_url: "https://github.com/superset-sh/superset"
stars: 6766
language: "TypeScript"
layout: repo
tags:
  - "AI-Coding-Agent"
  - "Terminal"
  - "macOS"
  - "Electron"
  - "Parallel-Execution"
  - "Developer-Tool"
  - "Open-Source"
---

## What it is

Superset is a macOS Electron desktop terminal application specifically designed for running multiple CLI coding agents (Claude Code, Gemini CLI, Codex, Cursor, etc.) in parallel with git worktree isolation per task, unified monitoring, and a built-in diff viewer.

## Problems solved

- Eliminates the context-switching and interference cost of running multiple AI coding agents simultaneously — each agent gets its own branch/working directory via git worktrees
- while a single UI shows status
- notifies on completion
- and provides quick integrated diff review.

## How to get started

Download the macOS app from releases. Open a project, create workspaces (each gets a git worktree), and launch any CLI agent in each workspace's terminal. Monitor from the main sidebar. Review changes with the built-in diff viewer. Customize setup/teardown in `.superset/config.json`.
