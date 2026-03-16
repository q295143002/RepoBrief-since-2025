---
title: "pbakaus/impeccable"
repo_name: "pbakaus/impeccable"
url: "https://github.com/pbakaus/impeccable"
github_url: "https://github.com/pbakaus/impeccable"
stars: 6383
language: "JavaScript"
layout: repo
tags:
  - "Frontend Development"
  - "UX/UI Design"
  - "AI Agent Tools"
  - "Web Design"
  - "Design Systems"
  - "Productivity"
---

## What it is

Impeccable is a specialized extension for AI coding agents (like Cursor and Claude Code) that provides deep expertise in frontend design. It includes 7 domain-specific reference files covering typography, color, motion, and UX writing, along with 17 steering commands (e.g., /audit, /polish, /delight) to guide the AI toward high-quality, professional UI results while explicitly avoiding common LLM design tropes.

## Problems solved

- Generic AI designs: Fights the 'Inter font and purple gradient' bias of base models.
- Poor accessibility: Includes steering for OKLCH color spaces and a11y audits.
- UI anti-patterns: Explicitly instructs AI what NOT to do (e.g., no gray text on colored backgrounds, no nested cards).
- Lack of design nuance: Provides modules for purposeful motion, staggered animations, and professional typography pairings.

## How to get started

Download the configuration files for your specific tool (Cursor, Claude Code, Gemini CLI, etc.). Place them in the appropriate configuration directory (e.g., `.cursor/` or `.claude/`). Once installed, use slash commands like `/audit` to check site quality or `/polish` for a final design pass.
