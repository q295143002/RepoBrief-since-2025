---
title: "musistudio/claude-code-router"
repo_name: "musistudio/claude-code-router"
url: "https://github.com/musistudio/claude-code-router"
github_url: "https://github.com/musistudio/claude-code-router"
stars: 29575
language: "TypeScript"
layout: repo
tags:
  - "Claude Code"
---

## What it is

A smart middleware for routing AI tasks to the most cost-effective Claude models based on complexity.

## Problems solved

- Wasting expensive Claude 3.5 Sonnet/Opus tokens on trivial tasks (like fixing typos).
- Latency issues when using large models for simple, fast-response features.
- Complexity in managing model-specific prompts across a large application.

## How to get started

npm install @musistudio/claude-code-router
const router = new Router();
router.complete("Simple greeting", { context: 'low-complexity' })
