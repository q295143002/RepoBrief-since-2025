---
id: 997890921
repo_name: "czlonkowski/n8n-mcp"
url: "https://github.com/czlonkowski/n8n-mcp"
stars: 15032
language: "TypeScript"
tags: ["n8n","MCP","Automation","Low Code","Workflow","AI Integration","Protocol"]
original_description: "n8n-MCP: Standardizes communication to n8n node operations."
english_summary: "An MCP server giving AI assistants direct access to the n8n automation platform's node documentation and execution."
chinese_summary: null
problems_solved: "- Gap between AI generation and actual workflow automation syntax\n- Hallucinations regarding specific n8n node parameters and API logic\n- Difficulty in programmatically querying n8n capabilities from an LLM"
how_to_use: "Run via npx: `npx @n8n/mcp-server`. Link it to your MCP-compatible IDE (like Claude Desktop) to start building workflows with AI."
sync_at: "2026-03-17T12:09:44.212Z"
---

# czlonkowski/n8n-mcp

### 1. Positioning
n8n-MCP is an integration server exposing n8n's node ecosystem to AI via the Model Context Protocol, streamlining visual automation design.

### 2. Pain Points & Advantages
Fixes the 'Syntax Nuance' struggle during automation builds. Provides LLMs with direct, verified node schemas to ensure generated workflows are runnable.

### 3. Technical Architecture
TypeScript-based MCP Server. It indexes the n8n node registry and translates operations into standard MCP tools/resources.

### 4. Core Implementation
Dynamic fetching and caching of node parameters. Structures metadata into LLM-optimized formats for high-fidelity prompt injection.

### 5. Code Organization
NPM package structure containing source controllers for querying docs and the core protocol handler logic.

### 6. Quick Start Suggestion
Add the server to your `claude_desktop_config.json` and ask Claude to 'Create a Slack to Google Sheets automation using n8n'.

### 7. Summary
A synergistic tool that elevates LLMs from simple chat bots into capable orchestrators of complex, multi-service n8n automation pipelines.
