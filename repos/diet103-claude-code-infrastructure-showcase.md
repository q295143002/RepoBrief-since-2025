---
id: 1086161926
repo_name: "diet103/claude-code-infrastructure-showcase"
url: "https://github.com/diet103/claude-code-infrastructure-showcase"
stars: 9234
language: "Shell"
tags: ["Claude Code","AI Engineering","Infrastructure","Prompt Engineering","Productivity"]
original_description: "Claude Code Infrastructure Showcase: A curated reference library of production-tested Claude Code infrastructure. Patterns for auto-activating skills, modular patterns, and specialized agents."
english_summary: "This repository is a production-hardened reference library for Claude Code infrastructure, providing patterns for auto-activating skills, modular configurations (the 500-line rule), and specialized task agents."
chinese_summary: null
problems_solved: "- Solves the 'passive skill' problem by enabling auto-activation via hooks; overcomes context limits through a 'Progressive Disclosure' modular skill pattern; prevents knowledge loss across context resets using a structured 'Dev Docs' system."
how_to_use: "Copy relevant files from `.claude/skills/`, `.claude/hooks/`, or `.claude/agents/` into your own project. Reference `CLAUDE_INTEGRATION_GUIDE.md` to set up the two essential hooks for skill auto-activation and tool tracking."
sync_at: "2026-03-17T12:09:44.212Z"
---

# diet103/claude-code-infrastructure-showcase

### 1. Positioning
This showcase is an 'Infrastructure Blueprint' for professional Claude Code users. It targets developers managing complex, large-scale TypeScript projects (50,000+ lines) who need to optimize the agent's efficiency, reliability, and project-specific knowledge.

### 2. Pain Points & Advantages
Standard Claude Code skills are manual and often too large for context buffers. This project's advantage is its 'Systematic Automation'—it introduces a `skill-rules.json` pattern that automatically triggers specific guidelines based on what files you are editing. Its '500-Line Rule' prevents the 'dulling' effect of oversized prompts, keeping the agent sharp and context-aware.

### 3. Technical Architecture
A curated library of `.md` (skills/agents) and `.sh` (hooks) patterns. It leverages the standard Claude Code 'hooks' architecture to interject logic during prompt submission and post-tool execution. It is designed to be domain-agnostic (using a 'Blog' domain for examples).

### 4. Core Implementation
Key patterns include: 'Auto-Activation Hooks' (UserPromptSubmit) that suggest skills based on regex patterns, 'Modular Skills' with a main index and nested resources, and 'Specialized Agents' for high-stakes tasks like architecture review or auth-route debugging.

### 5. Code Organization
Highly structured: `.claude/skills/` (guidelines), `.claude/hooks/` (automation), `.claude/agents/` (personas), and `dev/active/` (the 'Dev Docs' knowledge persistence pattern). Each section includes a standalone README with integration instructions.

### 6. Quick Start Suggestion
Copy the `skill-activation-prompt` hook into your project. Add a small 'Backend Guidelines' skill and define a rule in `skill-rules.json` to trigger it whenever you edit files in `src/routes`. This immediate feedback loop is the fastest way to feel the 'magic' of the system.

### 7. Summary
The Claude Code Infrastructure Showcase is an essential 'Level 2' resource for AI-assisted engineering. By treating the agent's context as a manageable resource, it provides the tools necessary to scale AI-driven development to enterprise-level complexity.
