---
id: 1134543109
repo_name: "vercel-labs/skills"
url: "https://github.com/vercel-labs/skills"
stars: 10011
language: "TypeScript"
tags: ["AI Agent","CLI","Package Manager","Productivity"]
original_description: "The CLI for the open agent skills ecosystem. Reusable instruction sets that extend your coding agent's capabilities via SKILL.md files."
english_summary: "Vercel's Skills CLI is a package manager for the open agent ecosystem, allowing developers to install and manage reusable 'skills' across dozens of AI coding agents."
chinese_summary: null
problems_solved: "- Solves the fragmentation of AI agent capabilities by providing a unified specification (SKILL.md); enables cross-agent portability of prompt engineering and workflow automation; simplifies the distribution and installation of complex agent instructions for teams and individuals."
how_to_use: "Install a skill via npx: `npx skills add {owner/repo}`. List installed skills: `npx skills list`. Search for new skills: `npx skills find`. To create your own, use `npx skills init` to generate a template."
sync_at: "2026-03-17T12:09:44.212Z"
---

# vercel-labs/skills

### 1. Positioning
Vercel Labs' `skills` CLI is the infrastructure layer for a 'NPM for AI Agents'. It targets AI engineers and power users of tools like Claude Code, Cursor, and Antigravity, providing a standardized way to share and version-control agent behaviors.

### 2. Pain Points & Advantages
Before this, sharing complex prompts or multi-step logic between agents was a manual copy-paste process. Skills solves this with a CLI that automatically detects 37+ different agents and symlinks reusable instructions into their respective config directories. Its main advantage is its universal scope—it doesn't care which agent you use, as long as it follows the specification.

### 3. Technical Architecture
Built with TypeScript/Node.js, the CLI uses a directory-based discovery mechanism. It looks for `SKILL.md` files with YAML frontmatter. It handles global vs. project-level installation and supports multiple installation methods, including symbolic linking for a single source of truth across multiple agents.

### 4. Core Implementation
The core logic bridges the gap between various agent file structures (e.g., `.claude/skills` for Claude Code vs. `~/.gemini/antigravity/skills`). It includes a robust CLI interface with autocomplete, update checking, and a recursive search algorithm for discovering skills within any repository.

### 5. Code Organization
The repository contains the CLI source, a comprehensive list of supported agents and their configuration paths, and the logic for parsing and validating the SKILL.md specification.

### 6. Quick Start Suggestion
Run `npx skills find web-design` to see how the CLI can instantly discover and install specialized design guidelines for your favorite AI coding assistant.

### 7. Summary
`skills` is a critical piece of the emerging agentic middleware stack. By decoupling the 'capabilities' of an AI from the 'engine' that runs it, Vercel has created a foundational tool that makes the entire AI agent ecosystem more modular and powerful.
