---
title: "toon-format/toon"
repo_name: "toon-format/toon"
url: "https://github.com/toon-format/toon"
github_url: "https://github.com/toon-format/toon"
stars: 23207
language: "TypeScript"
layout: repo
tags:
  - "Toon"
  - "DSL"
  - "Task Orchestration"
  - "Type Safety"
  - "Autonomous Agents"
  - "Rust"
  - "Formal Verification"
---

## What it is

A strictly-typed task definition format designed to ensure zero-ambiguity in AI autonomous task execution.

## Problems solved

- AI agents failing due to 'vague' task descriptions or misinterpreting JSON schemas.
- Inability to compile-time check if an agent can actually fulfill a requested task.
- Lack of a 'Human-Readable yet Machine-Strict' format for defining complex multi-step workflows.

## How to get started

npm install toon-cli
toon validate workflow.toon
toon run workflow.toon
