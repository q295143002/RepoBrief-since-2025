---
id: 985839104
repo_name: "browseros-ai/BrowserOS"
url: "https://github.com/browseros-ai/BrowserOS"
stars: 9707
language: "C++"
tags: ["Browser","AI Agent","MCP","Chromium","Privacy"]
original_description: "BrowserOS: The open-source Chromium fork that runs AI agents natively. The privacy-first alternative to ChatGPT Atlas, Perplexity Comet, and Dia."
english_summary: "BrowserOS is a specialized, open-source Chromium fork designed to run AI agents locally and securely, featuring native MCP support and visual workflow automation."
chinese_summary: null
problems_solved: "- Eliminates privacy concerns of cloud-based browsing agents by executing tasks locally; provides a standardized bridge between AI agents and the browser via 31+ MCP tools; solves the 'static' nature of modern browsing through autopilot scheduled tasks and data scraping workflows."
how_to_use: "Download the DMG (Mac), EXE (Windows), or AppImage (Linux) from the website. Connect your AI provider (OpenAI, Anthropic, Gemini, or local Ollama). Install as an MCP server for tools like Claude Code to control your browser via JSON-RPC."
sync_at: "2026-03-17T12:09:44.212Z"
---

# browseros-ai/BrowserOS

### 1. Positioning
BrowserOS positions itself as the 'Agent-Native Browser'. It targets power users and developers who find modern search engines and standard browsers inadequate for the era of AI. It is built to be the primary interface where humans and agents collaborate on the live web.

### 2. Pain Points & Advantages
Most AI browsing solutions (like Perplexity) are proprietary and ingest your data. BrowserOS is 100% open-source (AGPLv3) and prioritizes local data residency. Its primary advantage is its 'MCP-First' design—it natively exposes 31 browser control tools for any AI coding assistant or agent, making it the most 'controllable' browser on the market.

### 3. Technical Architecture
A highly customized fork of the Chromium project, specifically incorporating privacy patches from ungoogled-chromium. It features a built-in Node.js runtime to handle the Model Context Protocol (MCP) server and a visual graph-based engine for building automation workflows.

### 4. Core Implementation
The system includes a visual 'Workflow Builder' for repetitive tasks, an 'LLM Hub' for side-by-side model comparison, and a 'Cowork' feature that bridges browser actions with local filesystem operations (e.g., scrape a site and save to a local folder automatically).

### 5. Code Organization
The repository contains the Chromium modification logic, the MCP server implementation scripts, and the Electron/React-based UI for managing agent prompts, schedules, and security settings.

### 6. Quick Start Suggestion
Enable the 'MCP Server' mode in settings and connect it to your local Claude Code instance. Try asking: 'Research the latest AI news in BrowserOS and create a summarized markdown file in my current folder'—watch the agent navigate and write simultaneously.

### 7. Summary
BrowserOS is the most ambitious attempt to rebuild the browser around the agentic paradigm. By combining the familiarity of Chrome with the power of open-source AI standards, it provides a secure and powerful playground for the next generation of web automation.
