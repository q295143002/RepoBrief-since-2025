---
title: "anthropics/claude-code-action"
repo_name: "anthropics/claude-code-action"
url: "https://github.com/anthropics/claude-code-action"
github_url: "https://github.com/anthropics/claude-code-action"
stars: 6235
language: "TypeScript"
layout: repo
tags:
  - "GitHub Actions"
  - "Claude Code"
  - "CI/CD Automation"
  - "AI Coding Assistant"
  - "Code Review"
  - "DevOps"
---

## What it is

Claude Code Action integrates the capabilities of Claude Code directly into GitHub workflows. It intelligently detects context—such as @mentions in comments or issue assignments—to perform code reviews, answer architectural questions, and implement code changes. It supports multiple cloud providers (Anthropic, Bedrock, Vertex AI) and runs on your own GitHub runners for maximum security.

## Problems solved

- Manual code review bottleneck: Automates PR reviews based on custom team checklists and security standards.
- Slow issue triage: Automatically categorizes and labels issues based on content.
- Out-of-sync documentation: Keeps docs updated automatically as code changes are merged.
- Friction in PR contributions: Allows Claude to implement requested changes directly within a PR conversation.

## How to get started

The easiest setup is running `/install-github-app` inside the `claude` CLI. Alternatively, add the action to your `.github/workflows` YAML. Configure either `ANTHROPIC_API_KEY` or the appropriate AWS/Google/Microsoft credentials. It can be triggered by comments, labels, or schedules as defined in your workflow file.
