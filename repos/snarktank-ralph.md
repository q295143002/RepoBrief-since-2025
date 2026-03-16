---
title: "snarktank/ralph"
repo_name: "snarktank/ralph"
url: "https://github.com/snarktank/ralph"
github_url: "https://github.com/snarktank/ralph"
stars: 12792
language: "TypeScript"
layout: repo
tags:
  - "Autonomous-Agent"
  - "Coding-Tools"
  - "Automation"
  - "PRD-Management"
  - "Bash-Loop"
---

## What it is

A sophisticated CLI bash loop pattern that continuously spawns fresh instances of AI coding tools to execute isolated tasks until a Product Requirements Document (PRD) is completed.

## Problems solved

- Eliminates the detrimental logic degradation and "context exhaustion" synonymous with executing massive tasks continuously within one LLM session by forcing deterministic execution across isolated subtasks.

## How to get started

Write a PRD using the included `/prd` skill. Convert it into a `/ralph` formatted JSON context map. Execute `./scripts/ralph/ralph.sh` letting it autonomously conquer the individual stories sequentially.
