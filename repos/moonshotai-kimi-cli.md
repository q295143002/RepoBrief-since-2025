---
title: "MoonshotAI/kimi-cli"
repo_name: "MoonshotAI/kimi-cli"
url: "https://github.com/MoonshotAI/kimi-cli"
github_url: "https://github.com/MoonshotAI/kimi-cli"
stars: 7143
language: "Python"
layout: repo
tags:
  - "Kimi"
  - "MoonshotAI"
  - "AI-Coding-Agent"
  - "CLI"
  - "MCP"
  - "IDE-Integration"
  - "Terminal"
---

## What it is

Kimi Code CLI is MoonshotAI's terminal-based AI coding agent that autonomously reads/edits code, runs shell commands, searches the web, supports MCP tools, and integrates with VS Code, Zed, JetBrains, and Zsh via the Agent Client Protocol.

## Problems solved

- Provides a Kimi-powered alternative to Claude Code and Gemini CLI
- offering a unified coding agent that works in any terminal
- supports MCP server management
- shell passthrough mode
- IDE integration via ACP
- and Zsh plugin integration.

## How to get started

Install via `pip install kimi-cli`. Run `kimi` and `/login` to authenticate. Use `Ctrl-X` to toggle shell command mode. Add MCP servers with `kimi mcp add`. For IDE integration, configure `kimi acp` as an ACP agent server in Zed or JetBrains settings.
