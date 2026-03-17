---
id: 1002125012
repo_name: "BloopAI/vibe-kanban"
url: "https://github.com/BloopAI/vibe-kanban"
stars: 23092
language: "Rust"
tags: ["Kanban","Agent Orchestration","Claude Code","Workflow Visualization","TypeScript","Coding Tools"]
original_description: "Get 10X more out of Claude Code, Codex or any coding agent with Vibe Kanban."
english_summary: "A specialized Kanban board interface for orchestrating and visualizing coding agent workflows."
chinese_summary: null
problems_solved: "- Difficulty in tracking high-level intent across long-running AI coding sessions.\n- Lack of structural overview for complex refactoring tasks assigned to agents.\n- Inefficiency in managing the 'Agent-Human' feedback loop for iterative development."
how_to_use: "npm install -g @bloop-ai/vibe-kanban\nvibe init\nvibe start"
sync_at: "2026-03-17T12:09:44.212Z"
---

# BloopAI/vibe-kanban

### 1. Positioning
Vibe Kanban is a workflow orchestration layer designed specifically for AI coding agents (like Claude Code or Codex). It introduces a Kanban-based visual board to manage architectural intent and task states, helping developers maintain control over autonomous code generation.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Prevents 'context decay' in long coding sessions where the agent loses track of the original architectural goal.
- **Differentiation**: Focuses on 'Intent Management' rather than just code completion, providing a visual bridge between high-level project goals and low-level agent actions.

### 3. Technical Architecture
- **Tech Stack**: TypeScript, Node.js, and a React-based TUI/Frontend.
- **Design Strategy**: Adopts a 'Task-State' synchronization model where agentic outputs are automatically mapped to kanban cards representing features or bugs.

### 4. Core Implementation
- **Logic Layer**: `src/engine/sync.ts` manages the bi-directional state sync between the local file system (agent output) and the visual board.
- **Innovation**: Implements a 'Cognitive Roadmap'—a visual graph that shows the dependency between different agent-driven refactoring steps.

### 5. Code Organization
- `/core`: The headless kanban logic and state machine.
- `/adapters`: Connectors for different coding agents (Claude, GPT, etc.).

### 6. Quick Start Suggestion
Run `vibe start` in your project root to see your current Git history and file changes automatically parsed into a 'To-Do' board for your coding agent.

### 7. Summary
**Essence**: The 'Mission Control' for AI coding. Key learning is the visualization of non-deterministic agent progress into structured project management states.
