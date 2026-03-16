---
title: "Done-0/fuck-u-code"
repo_name: "Done-0/fuck-u-code"
url: "https://github.com/Done-0/fuck-u-code"
github_url: "https://github.com/Done-0/fuck-u-code"
stars: 6868
language: "TypeScript"
layout: repo
tags:
  - "Code-Quality"
  - "CLI"
  - "Node.js"
  - "AI-Code-Review"
  - "MCP"
  - "AST"
  - "Open-Source"
---

## What it is

fuck-u-code is a Node.js CLI tool that analyzes code quality offline using tree-sitter AST parsing (14 languages) to produce an 0–100 Overall Score and per-file Shit-Gas Index, plus optional LLM-powered review via OpenAI, Anthropic, DeepSeek, Gemini, or Ollama. Includes MCP server for Claude Code/Cursor integration.

## Problems solved

- Provides fast
- fully offline code quality scoring with humor-driven feedback
- covering complexity
- duplication
- size
- structure
- error handling
- naming
- and documentation — then optionally sends the worst files to an AI model for deeper review.

## How to get started

Install: `npm install -g eff-u-code`. Analyze: `fuck-u-code analyze .` (or specific dir). AI review: `fuck-u-code ai-review . -p anthropic -m claude-sonnet-4-5-20250929`. MCP integration: run `fuck-u-code mcp-install claude`. Export reports in markdown, HTML, or JSON.
