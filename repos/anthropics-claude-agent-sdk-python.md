---
title: "anthropics/claude-agent-sdk-python"
repo_name: "anthropics/claude-agent-sdk-python"
url: "https://github.com/anthropics/claude-agent-sdk-python"
github_url: "https://github.com/anthropics/claude-agent-sdk-python"
stars: 5394
language: "Python"
layout: repo
tags:
  - "Claude"
  - "SDK"
  - "AI Agents"
  - "MCP"
  - "Python"
  - "Anthropic"
  - "Open Source"
---

## What it is

This SDK provides a streamlined interface for developers to build interactive, tool-using AI agents powered by Claude. It supports bidirectional communication, custom in-process MCP servers, and granular permission hooks to control agent behavior.

## Problems solved

- Complexity of implementing reliable agentic loops from scratch
- Overhead of managing multi-process MCP servers for local tools
- Need for fine-grained control over AI tool usage and file edits

## How to get started

Install via `pip install claude-agent-sdk`. Use the `query()` function for simple tasks or the `ClaudeSDKClient` for interactive sessions that require custom tools (MCP) and deterministic hooks.
