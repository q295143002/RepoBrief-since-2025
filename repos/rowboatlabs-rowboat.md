---
id: 916009087
repo_name: "rowboatlabs/rowboat"
url: "https://github.com/rowboatlabs/rowboat"
stars: 9174
language: "TypeScript"
tags: ["AI Agent","Knowledge Graph","Local-First","Obsidian","Productivity"]
original_description: "Rowboat: Open-source AI coworker that turns work into a knowledge graph and acts on it. Local-first by design."
english_summary: "Rowboat is a local-first AI coworker that integrates with your email and meeting notes to build an Obsidian-compatible knowledge graph, allowing you to generate decks, briefs, and automate workflows from your private data."
chinese_summary: null
problems_solved: "- Eliminates 'context amnesia' by building a long-lived memory graph; solves privacy concerns by keeping all data on the user's machine in Markdown format; reduces meeting prep time by automatically synthesizing decisions and open questions from past threads."
how_to_use: "Download the app for Mac/Windows/Linux from `rowboatlabs.com`. Connect your Google account (Gmail/Calendar) following the provided guide. Optionally add Deepgram/Brave API keys in `~/.rowboat/config/` to enable voice notes and web search."
sync_at: "2026-03-17T12:09:44.212Z"
---

# rowboatlabs/rowboat

### 1. Positioning
Rowboat is an 'Intelligence Node' for professional workflows. It targets knowledge workers who are drowning in fragmented data across emails and meetings. It positions itself as a 'compound interest' memory tool—the more you work, the smarter and more personalized its context becomes.

### 2. Pain Points & Advantages
Retrieving context from scattered docs is slow and often 'cold'. Rowboat's advantage is its 'Obsidian-Native' approach—it creates a transparent, editable vault of Markdown files. Unlike cloud-only AI assistants, Rowboat is 'local-first', ensuring 100% data ownership and the ability to use your own local models via Ollama.

### 3. Technical Architecture
A desktop application (Electron/TypeScript) that manages a local vector/graph store. It integrates with Gmail (via OAuth), Granola, and Fireflies. The system utilizes MCP (Model Context Protocol) to extend its capabilities to external tools like X, Slack, and Linear.

### 4. Core Implementation
Features 'Background Agents' that automatically draft email replies and generate daily morning voice notes. It uses a unique 'Voice-to-Graph' loop where voice memos are transcribed (Deepgram) and then automatically used to update key takeaways in the Markdown vault.

### 5. Code Organization
The repository contains the desktop app glue and infrastructure guides. It emphasizes a 'transparent working memory', where the logic for integration (Google, Deepgram, Exa) is modular and uses standard JSON configurations.

### 6. Quick Start Suggestion
Install the app and connect one Gmail account. Let it index for a few minutes, then try asking: 'Prep me for my next meeting with [Name]'. Observe how it pulls specific decisions made in previous email threads into a crisp brief—this is the 'Knowledge Graph' in action.

### 7. Summary
Rowboat is a powerful example of the 'AI OS' future. By combining the permanence of a personal knowledge base (Obsidian) with the reasoning power of modern LLMs, it provides a privacy-respecting way to scale personal productivity.
