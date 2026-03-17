---
id: 1171026502
repo_name: "googleworkspace/cli"
url: "https://github.com/googleworkspace/cli"
stars: 19740
language: "Rust"
tags: ["Google Workspace","CLI","Productivity","Automation","Google API","AI Skills","Developer Tools"]
original_description: "Google Workspace CLI: One command-line tool for Drive, Gmail, Calendar, and more. Includes AI agent skills."
english_summary: "Google's official CLI for managing Workspace services with integrated AI research and reporting skills."
chinese_summary: null
problems_solved: "- Friction in managing Workspace data across multiple browser tabs\n- Lack of a 'Bulk Management' interface for Workspace admins and power users\n- Difficulty for external AI agents to access Workspace context securely"
how_to_use: "Install via npm: `npm install -g @google/workspace-cli`. Authenticate with `gworkspace auth login` and use commands like `gworkspace drive search`."
sync_at: "2026-03-17T12:09:44.212Z"
---

# googleworkspace/cli

### 1. Positioning
The Google Workspace CLI is the official 'Swiss Army Knife' for the Google ecosystem. It provides a unified terminal interface for Gmail, Drive, Docs, etc., including 'Agent Skills' for cross-service AI tasks.

### 2. Pain Points & Advantages
Centralizes disparate API interactions into a single scriptable tool. Native integration with Google's Discovery Service ensures it supports the latest security standards and API features.

### 3. Technical Architecture
TypeScript/Node.js based. Adopts a 'Sub-Command' architecture mirroring Workspace API structures (e.g., `gworkspace [service] [action]`).

### 4. Core Implementation
Robust OAuth2 flow for multi-account switching. The `skills` module uses LLMs to map natural language intents to series of atomic CLI commands.

### 5. Code Organization
`/src/services` contains individual modules for Drive, Gmail, etc., while `/src/skills` houses the AI orchestration logic.

### 6. Quick Start Suggestion
Try `gworkspace drive summarize-doc [id]` to see how the CLI uses internal AI skills to extract insights from long documents.

### Summary
The 'terminal gateway' to Google Workspace. It transforms static APIs into an agentic 'skill-set', drastically reducing friction for power users and developers.
