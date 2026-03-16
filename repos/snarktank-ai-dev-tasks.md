---
title: "snarktank/ai-dev-tasks"
repo_name: "snarktank/ai-dev-tasks"
url: "https://github.com/snarktank/ai-dev-tasks"
github_url: "https://github.com/snarktank/ai-dev-tasks"
stars: 7622
language: ""
layout: repo
tags:
  - "AI-Coding"
  - "Prompt-Engineering"
  - "PRD"
  - "Task-Management"
  - "Claude-Code"
  - "Windsurf"
---

## What it is

A set of structured markdown prompt files (`create-prd.md`, `generate-tasks.md`) to guide AI coding assistants (Claude Code, Amp, Windsurf, Cursor) through a disciplined PRD → task list → iterative implementation workflow.

## Problems solved

- Prevents AI coding tools from losing track in large feature requests by breaking them down with a 3-step workflow: define scope (PRD)
- generate granular tasks
- and implement one task at a time with verification checkpoints.

## How to get started

Clone repository and place `.md` files in your project. In your AI tool, tag `@create-prd.md` to create a PRD and describe your feature. Then use `@generate-tasks.md` to generate tasks. Finally, instruct AI to work through tasks one-by-one.
