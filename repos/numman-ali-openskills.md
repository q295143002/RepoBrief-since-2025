---
title: "numman-ali/openskills"
repo_name: "numman-ali/openskills"
url: "https://github.com/numman-ali/openskills"
github_url: "https://github.com/numman-ali/openskills"
stars: 8997
language: "TypeScript"
layout: repo
tags:
  - "Claude Code"
  - "Cursor"
  - "Aider"
  - "DX"
  - "Tooling"
---

## What it is

OpenSkills is a universal CLI tool that brings Anthropic's 'Skills' system to any AI coding agent, enabling progressive disclosure of instructions and resources for Cursor, Windsurf, and Aider.

## Problems solved

- Breaks the lock-in of the Anthropic marketplace by making skills universal; solves 'context bloat' in generic agents by loading instructions only when needed; allows teams to share private coding guidelines via git repos or local paths.

## How to get started

Run `npx openskills install anthropics/skills` to get the core library. Use `npx openskills sync` to update your `AGENTS.md` (for Cursor/Windsurf). An agent can then invoke a skill by running `npx openskills read <skill-name>` in its terminal.
