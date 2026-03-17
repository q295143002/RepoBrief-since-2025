---
id: 1140828898
repo_name: "anthropics/knowledge-work-plugins"
url: "https://github.com/anthropics/knowledge-work-plugins"
stars: 9022
language: "Python"
tags: ["Claude","MCP","Enterprise","Productivity","Marketplace"]
original_description: "Knowledge Work Plugins: Plugins that turn Claude into a specialist for your role, team, and company. Built for Claude Cowork."
english_summary: "Knowledge Work Plugins is an open-source marketplace of 11 role-specific plugins (Sales, PM, Legal, etc.) that empower Claude with specialized tools, workflows, and connectors for enterprise apps."
chinese_summary: null
problems_solved: "- Eliminates the 'generic AI' problem by providing role-specific skills; solves data silo issues through built-in connectors for Slack\n- Notion\n- Jira\n- and Snowflake; standardizes critical enterprise workflows like contract review and sales prospecting."
how_to_use: "In Claude Code, add the marketplace: `claude plugin marketplace add anthropics/knowledge-work-plugins`. Install a plugin (e.g., `claude plugin install sales`). In a session, use provided slash commands like `/sales:call-prep` to trigger specialized logic."
sync_at: "2026-03-17T12:09:44.212Z"
---

# anthropics/knowledge-work-plugins

### 1. Positioning
Knowledge Work Plugins position Claude as a 'Day-1 Productive Coworker'. This repository is a blueprint for the 'Agentic Enterprise', targeting teams who need AI to handle specific business processes (Triage, Analysis, Drafting) rather than just open-ended chat.

### 2. Pain Points & Advantages
Companies struggle to make AI 'useful' for specific departments. These plugins offer 'Pre-packaged Expertise'—battle-tested instructions for 11 distinct corporate functions. The primary advantage is 'Extensibility'—every plugin is just Markdown and JSON, allowing companies to fork and inject their own internal terminology and private MCP servers with zero code.

### 3. Technical Architecture
Built on the Model Context Protocol (MCP) and Claude's file-based plugin architecture. Each plugin contains a `plugin.json` (manifest), `.mcp.json` (tool definitions), and directories for `/commands` (explicit user actions) and `/skills` (automatic background knowledge).

### 4. Core Implementation
Features the 'cowork-plugin-management' plugin, which allows Claude to help users *build more plugins*. It demonstrates sophisticated MCP integration strategies for complex tools like Snowflake, Canva, and PubMed. Use of 'Skills' allows Claude to proactively apply best practices whenever a relevant task is identified.

### 5. Code Organization
A flat monorepo where each top-level folder is a complete plugin. This 'File-Based' approach means there are no infrastructure or build steps—deploying a new company skill is as simple as adding a Markdown file to the directory.

### 6. Quick Start Suggestion
Install the `productivity` plugin. Use it to synthesize your's day from Slack and Jira in one command. Then, look at `productivity/skills/task-management.md` to see how you can add your own team's specific 'Done Definition' to the agent's background knowledge.

### 7. Summary
Knowledge Work Plugins represent the shift from 'LLM-as-a-service' to 'Agent-as-a-specialist'. By open-sourcing these frameworks, Anthropic is providing the industry with a standard way to encode human business logic for autonomous systems.
