---
title: "automazeio/ccpm"
repo_name: "automazeio/ccpm"
url: "https://github.com/automazeio/ccpm"
github_url: "https://github.com/automazeio/ccpm"
stars: 7626
language: "Shell"
layout: repo
tags:
  - "Claude-Code"
  - "Project-Management"
  - "GitHub-Issues"
  - "Parallel-Agents"
  - "Spec-Driven"
  - "Productivity"
---

## What it is

CCPM (Claude Code PM) is a battle-tested project management system for Claude Code that turns PRDs into GitHub issues and drives parallel AI agent execution through Git worktrees, eliminating context loss and enabling 5-8x concurrent task flow.

## Problems solved

- Solves context loss between sessions
- serial task execution
- vague specs
- and invisible progress in AI-assisted development by providing a strict
- GitHub-native
- spec-driven workflow with transparent audit trail and parallel agent orchestration.

## How to get started

Install via `curl -sSL https://automaze.io/ccpm/install | bash` into your project. Run `/pm:init` to set up GitHub auth, then `/pm:prd-new feature-name` to start a PRD. Progress through `/pm:prd-parse`, `/pm:epic-oneshot`, and `/pm:issue-start` to execute in parallel.
