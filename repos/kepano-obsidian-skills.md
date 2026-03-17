---
id: 1126947080
repo_name: "kepano/obsidian-skills"
url: "https://github.com/kepano/obsidian-skills"
stars: 13588
language: null
tags: ["Obsidian","AI Agent","Skills","PKM"]
original_description: "Agent Skills for use with Obsidian."
english_summary: "A suite of Agent Skills specifically configured for AI agents to interact with, create, and edit Obsidian vaults and markdown files."
chinese_summary: null
problems_solved: "- Bridges the gap between AI coding assistants and Obsidian, allowing agents to natively parse and format Obsidian-flavored wikilinks, canvas files, and databases."
how_to_use: "Add via the plugin marketplace: `/plugin install obsidian@obsidian-skills`, or copy the repository contents to your vault's `/.claude/skills` directory."
sync_at: "2026-03-17T12:09:44.212Z"
---

# kepano/obsidian-skills

### 1. Positioning
Obsidian Skills focuses on extending the Agent Skills specification to the Obsidian ecosystem, turning standard LLM agents (Claude Code, Codex CLI) into capable note-taking, formatting, and vault manipulation tools.

### 2. Pain Points & Advantages
Generic markdown generators notoriously mess up Obsidian-specific syntax (e.g., `[[links]]`, Callouts, Properties, `.canvas` formats). These skills constrain and direct the AI to perfectly conform to Obsidian's proprietary syntactical flavors.

### 3. Technical Architecture
Declarative, prompt-based instruction models combined with utility wrappers. Functions out-of-the-box utilizing standard Markdown specification files readable natively by tools like OpenCode.

### 4. Core Implementation
Skill subsets like `obsidian-markdown`, `json-canvas`, and `obsidian-bases` contain deep contextual knowledge of how schema structures work, enabling safe reading/writing of complex node graphs or metadata tables inside Obsidian vaults.

### 5. Code Organization
Organized by skill inside the `/skills/` directory containing individual specifications for Markdown syntax, Bases, JSON Canvas, and Obsidian CLI interactions.

### 6. Quick Start Suggestion
Install via `npx skills add git@github.com:kepano/obsidian-skills.git` inside an Obsidian vault, then instruct your agent to "create a new canvas mapping out project X utilizing JSON Canvas".

### 7. Summary
A quintessential utility for power users intertwining their PKM (Personal Knowledge Management) workflows in Obsidian with advanced, automated AI terminal agents.
