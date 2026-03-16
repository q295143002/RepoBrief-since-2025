---
title: "openai/skills"
repo_name: "openai/skills"
url: "https://github.com/openai/skills"
github_url: "https://github.com/openai/skills"
stars: 14089
language: "Python"
layout: repo
tags:
  - "AI Agent"
  - "Skills"
  - "Plugin"
  - "Codex"
  - "Claude Code"
---

## What it is

A collection of predefined Agent Skills to enhance AI agents like Codex and Claude with specific capabilities.

## Problems solved

- Equips AI agents with predefined skills and capabilities, preventing redundant coding and enhancing utility out of the box.

## How to get started

Add the selected tools from the repository to your `.claude` or agent directory. Or run e.g. `/plugin marketplace add openai/skills` inside Claude Code to install skills.

## Detailed report

### 1. Positioning
This repository provides "Agent Skills" for AI agents such as Codex CLI and Claude Code, expanding their functionality with robust specific domain knowledge plugins.

### 2. Pain Points & Advantages
Developing specific capabilities for different AI agents repeatedly is tedious. This repo acts as a centralized repository and specification mapping for universally reusable skills.

### 3. Technical Architecture
The repository adheres to the Agent Skills Specification, providing Markdown instructions (`SKILL.md`) mapped to distinct functionalities, often orchestrating shell scripts or Python tools.

### 4. Core Implementation
Functionality varies per skill, but they commonly include comprehensive, deterministic instructions and sometimes auxiliary code within subdirectories, tailored for AI ingestion and execution via a sandbox or shell interface.

### 5. Code Organization
Organized hierarchically by skill names (e.g., `skills/defuddle/`, `skills/obsidian-cli/`), containing `SKILL.md` along with any necessary scripts.

### 6. Quick Start Suggestion
Use `/plugin marketplace add openai/skills` to integrate these tools directly into Claude Code, or clone specific skills into your `~/.codex/skills` directory.

### 7. Summary
A catalog of predefined, plug-and-play skills intended to supercharge agentic AI paradigms, enabling them directly with standardized workflows and toolkits.
