---
title: "zilliztech/claude-context"
repo_name: "zilliztech/claude-context"
url: "https://github.com/zilliztech/claude-context"
github_url: "https://github.com/zilliztech/claude-context"
stars: 5625
language: "TypeScript"
layout: repo
tags:
  - "Semantic Search"
  - "Code Search"
  - "MCP"
  - "Claude Code"
  - "Milvus"
  - "Developer Tools"
  - "Open Source"
---

## What it is

Claude Context is an MCP (Model Context Protocol) plugin that enables semantic search across massive codebases for AI agents. It allows Claude Code and other assistants to find relevant code snippets from millions of lines without exceeding context limits or incurring high costs.

## Problems solved

- Context limit constraints when working on large projects
- Inaccurate results from simple keyword searches in code
- High token costs associated with loading entire directories into LLM prompts

## How to get started

Install the MCP server using `claude mcp add`. Configure it with a Zilliz Cloud (Milvus) token and an OpenAI API key for embeddings. Once active, agents can use the `index_codebase` and `search_code` tools to intelligently retrieve code context.
