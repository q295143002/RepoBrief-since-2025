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

## Detailed report

### 1. Positioning
OpenSkills is a 'Compatibility Bridge' for the agentic ecosystem. It targets developers who love the modular 'Skill' philosophy of Claude Code but prefer using other IDEs like Cursor, Windsurf, or Aider. It positions itself as the 'Babel for Agent Instructions'.

### 2. Pain Points & Advantages
Modern AI agents often get 'confused' when their system prompt is too long. OpenSkills solves this through 'Progressive Disclosure'—it tells the agent about available skills via a tiny XML block in `AGENTS.md` and only provides the full detail when the agent explicitly 'reads' that skill. Its primary advantage is 'Zero Overhead'—it uses standard CLI tools and requires no complex MCP servers.

### 3. Technical Architecture
A Node.js CLI tool that manages a local `.claude/skills` store. It parses `SKILL.md` (Markdown with YAML frontmatter) and generates the corresponding `<available_skills>` XML. It supports git-based distribution (SSH and HTTPS) and symlink-based local development.

### 4. Core Implementation
Key feature is the 'Universal Loader'—it creates a standard contract where any agent that can execute terminal commands can 'boot up' specialized domain knowledge. It includes a `skill-creator` skill to help users author new modules following best practices.

### 5. Code Organization
Focused and lightweight. The logic centers on the CLI interface, skill installation (cloning/linking), and the `read`/`sync` commands. It strictly follows Anthropic's file structure to ensure a 1:1 migration path to/from Claude Code.

### 6. Quick Start Suggestion
Install `openskills` in your project root. Install the `anthropics/skills` pack. Run `npx openskills sync` and look at your new `AGENTS.md`. Tell your AI assistant: 'Read the PDF skill and extract text from this file.' Watch the agent download and follow the skill's specific scripts automatically.

### 7. Summary
OpenSkills is a vital utility for the 'Power Agent' workflow. By standardizing how instructions and assets are delivered to LLMs, it ensures that your team's hard-won technical guidelines work consistently across the entire landscape of AI coding tools.
