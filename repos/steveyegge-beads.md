---
id: 1074561042
repo_name: "steveyegge/beads"
url: "https://github.com/steveyegge/beads"
stars: 18922
language: "Go"
tags: ["Coding Agent","AI Memory","Knowledge Graph","Steveyegge","Software Architecture","Developer Tools","Context Management"]
original_description: "Beads: A specialized memory and context upgrade for coding agents, enhancing their ability to handle large project structures."
english_summary: "Steveyegge's dedicated 'Memory Patch' for AI coding agents to improve architectural awareness in large codebases."
chinese_summary: null
problems_solved: "- Inability of coding agents to 'remember' architectural decisions over dozens of turns\n- Confusion between similar class or variable names in massive monorepos\n- High token costs caused by re-sending project metadata repeatedly"
how_to_use: "Install the package via npm and integrate it as a middleware in your AI-powered coding CLI. Configuration is handled via a `beads.json` file."
sync_at: "2026-03-17T12:09:44.212Z"
---

# steveyegge/beads

### 1. Positioning
Beads is a middleware-based memory enhancement for coding agents. It introduces a 'Breadcrumb' (Bead) system where agents leave semantic anchors in a persistent memory store during codebase exploration for higher precision.

### 2. Pain Points & Advantages
Fixes the 'Goldfish Memory' of LLMs in engineering tasks. Uses 'Structural Context Pinning' to force models to maintain a constantly-updated 'Master Plan' in a dedicated memory buffer.

### 3. Technical Architecture
TypeScript/Node.js based. Adopts a 'Journaling' architecture where agent thoughts are distilled into 'Semantic Triples' and stored in a local graph index.

### 4. Core Implementation
`src/memory/journaler.ts` handles summarization and pruning of past turns. Features 'Automated Hypothesis Testing'—tracking what the agent assumed vs. what it confirmed after reading code.

### 5. Code Organization
`/index` houses the graph-based storage logic, and `/middleware` contains adapters for tools like Claude Code or Cursor.

### 6. Quick Start Suggestion
Read `docs/why-beads.md` to understand the philosophy of 'Context Layering' and how it differs from standard vector-based RAG.

### 7. Summary
The 'Architectural Hippocampus' for AI. It represents the move from stateless coding sessions to persistent, structured knowledge management for complex software systems.
