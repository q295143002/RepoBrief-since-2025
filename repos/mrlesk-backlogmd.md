---
title: "MrLesk/Backlog.md"
repo_name: "MrLesk/Backlog.md"
url: "https://github.com/MrLesk/Backlog.md"
github_url: "https://github.com/MrLesk/Backlog.md"
stars: 5113
language: "TypeScript"
layout: repo
tags:
  - "Task Manager"
  - "Kanban"
  - "Markdown"
  - "AI Agents"
  - "MCP"
  - "Git-Native"
  - "Open Source"
---

## What it is

Backlog.md is a zero-config task management system that lives entirely within your project's Git repository as plain Markdown files. It is specifically optimized for 'spec-driven AI development,' providing a structured way to feed tasks and implementation plans to AI agents like Claude Code or Gemini CLI via MCP.

## Problems solved

- Heavy, centralized project management tools (Jira/Trello) for small developer teams
- Disconnected task status from the actual code (tasks live in the git repo here)
- Lack of a standardized task format for AI coding agents to follow

## How to get started

Install globally via npm or brew. Run `backlog init` in your repo to start. You can manage tasks via CLI commands (`backlog task create/list`), view a terminal Kanban board (`backlog board`), or launch a sleek local web UI (`backlog browser`).
