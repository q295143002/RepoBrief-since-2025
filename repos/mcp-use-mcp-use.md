---
id: 956472076
repo_name: "mcp-use/mcp-use"
url: "https://github.com/mcp-use/mcp-use"
stars: 9432
language: "TypeScript"
tags: ["MCP","AI Agent","TypeScript","Python","Framework"]
original_description: "mcp-use: The fullstack MCP framework to build MCP Apps for ChatGPT / Claude & MCP Servers for AI Agents."
english_summary: "mcp-use is a comprehensive full-stack framework for the Model Context Protocol (MCP), enabling developers to build, test, and deploy interactive MCP servers and UI-driven 'MCP Apps'."
chinese_summary: null
problems_solved: "- Standardizes the bridge between AI agents and local/hosted tools; solves the 'no UI' problem of standard MCP by introducing React-based widgets; provides a unified SDK for both TypeScript and Python\n- reducing the learning curve for multi-language teams."
how_to_use: "Start a new project with `npx create-mcp-use-app@latest`. For Python, install via `pip install mcp-use`. Use the built-in inspector at `server.listen(3000)` to debug your tools and widgets in the browser instantly."
sync_at: "2026-03-17T12:09:44.212Z"
---

# mcp-use/mcp-use

### 1. Positioning
mcp-use is the 'Next.js of MCP'. It targets developers building the next generation of AI-native software, where the agent is a primary user. It focuses on reducing the friction of the 'Build -> Test -> Deploy' loop for both simple terminal tools and complex interactive widgets.

### 2. Pain Points & Advantages
Standard MCP implementations are often low-level and lack visual feedback. mcp-use's killer feature is its 'MCP Apps' concept—interactive React widgets that are auto-discovered and served alongside standard tool definitions. Its advantage is its 'Inspector'—a rich web interface that allows side-by-side debugging of prompts and responses.

### 3. Technical Architecture
A cross-language framework supporting both TypeScript and Python. It utilizes a plugin-based architecture for transports (SSE, WebSockets, Stdio). The 'MCP App' layer uses a custom React reconciler to render UI components within supported clients like Claude or the hosted mcp-use viewer.

### 4. Core Implementation
The framework includes a specialized `MCPServer` class that handles tool registration, resource discovery, and widget serving. For agents, it provides `MCPAgent` and `MCPClient` helpers that integrate deeply with LangChain for effortless tool-calling and memory management.

### 5. Code Organization
Organized as a monorepo: `libraries/` contains the TS/JS and Python SDKs; `packages/` contains the CLI tool, the web-based inspector, and scaffolding templates. It uses Zod for type-safe schema definition of tools and widgets.

### 6. Quick Start Suggestion
Clone the repo and run the weather server example. Open the local inspector and observe how the 'weather-display' widget renders a beautiful React UI when the AI agent 'calls' the tool—this is the future of agentic interfaces.

### 7. Summary
mcp-use is a pioneering framework that moves MCP from a terminal-only protocol to a rich, interactive platform. It is an essential toolkit for anyone building serious AI agent infrastructure.
