---
id: 1035029907
repo_name: "badlogic/pi-mono"
url: "https://github.com/badlogic/pi-mono"
stars: 23076
language: "TypeScript"
tags: ["Agent Toolkit","vLLM","Multi-platform AI","CLI","TUI","TypeScript","DevOps AI"]
original_description: "AI agent toolkit: coding agent CLI, unified LLM API, TUI & web UI libraries, Slack bot, vLLM pods."
english_summary: "A comprehensive, all-in-one Swiss Army knife for building and deploying AI agents across multiple platforms."
chinese_summary: null
problems_solved: "- Fragmentation in agent development tools (different libraries for CLI vs. Web vs. Bots).\n- Complexity in switching between local vLLM instances and cloud LLM providers.\n- High boilerplate when building interactive TUI (Terminal UI) for AI interactions."
how_to_use: "npm install @badlogic/pi-mono\npi-mono init-cloud # Setup cloud providers\npi-mono start-tui"
sync_at: "2026-03-17T12:09:44.212Z"
---

# badlogic/pi-mono

### 1. Positioning
Pi-Mono is a multi-platform toolkit for AI agent development. It provides a unified codebase for creating CLI-based coding agents, web-based assistants, Slack bots, and even managing local GPU pods (vLLM), targeting power users and DevOps teams.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Eliminates the need to glue together multiple disconnected libraries for different agent deployment targets.
- **Differentiation**: Native support for 'vLLM Pods'—allowing developers to easily toggle between local self-hosted models and expensive cloud APIs without code changes.

### 3. Technical Architecture
- **Tech Stack**: Node.js/TypeScript (Core), React (Web), Blessed/Ink (TUI).
- **Design Strategy**: Uses a 'Unified LLM Interface' pattern that abstracts away the specific provider protocols (OpenAI, Anthropic, Google).

### 4. Core Implementation
- **Logic Layer**: `lib/llm/provider-router.ts` handles the seamless redirection of prompts based on availability and cost logic.
- **Innovation**: The TUI library implements highly responsive, 'Vim-like' keyboard navigation for terminal AI assistance.

### 5. Code Organization
- `/packages/cli`: The terminal-based coding agent.
- `/packages/pods`: Infrastructure-as-code for local model serving.
- `/packages/ui`: Shared React components for the web dashboard.

### 6. Quick Start Suggestion
Explore `packages/cli/README.md` to see how the toolkit enables 'Self-Reflecting' shell commands via the unified provider interface.

### 7. Summary
**Essence**: The 'one-stop shop' for agent infra. Key takeaway is the abstraction of deployment-specific logic into a unified agent lifecycle manager.
