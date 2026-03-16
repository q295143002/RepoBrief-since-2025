---
title: "mrexodia/ida-pro-mcp"
repo_name: "mrexodia/ida-pro-mcp"
url: "https://github.com/mrexodia/ida-pro-mcp"
github_url: "https://github.com/mrexodia/ida-pro-mcp"
stars: 6328
language: "Python"
layout: repo
tags:
  - "Reverse Engineering"
  - "IDA Pro"
  - "MCP"
  - "Cybersecurity"
  - "AI Developer Tools"
  - "Binary Analysis"
---

## What it is

IDA Pro MCP is a Bridge between IDA Pro and AI assistants using the Model Context Protocol. It allows AI models (like Claude Code or Cursor) to interact with IDA Pro to decompile functions, list symbols, rename variables/functions, add comments, and even perform debugging operations. It essentially provides a highly automated, AI-driven reverse engineering environment.

## Problems solved

- Manual reverse engineering friction: Automates repetitive tasks like renaming and commenting.
- High cognitive load: Offloads the initial analysis of complex assembly/decompilation to an AI.
- Tooling silos: Connects professional-grade binary analysis (IDA) to modern LLM interfaces.
- Manual base conversion: Provides an `int_convert` tool to prevent AI hallucination during number base shifts.

## How to get started

Install using `pip install` from the ZIP URL. Run `ida-pro-mcp --install` to set up the IDA plugin and MCP server. Restart IDA and your preferred MCP client (e.g., Claude Desktop, Cursor). Then, prompt your AI to 'analyze the binary in IDA Pro', guiding it to rename functions and add comments for clarity.
