---
id: 1110222585
repo_name: "AndyMik90/Aperant"
url: "https://github.com/AndyMik90/Aperant"
stars: 13247
language: "TypeScript"
tags: ["AI Agent","Framework"]
original_description: "Autonomous multi-agent coding framework that plans, builds, and validates software for you."
english_summary: "Auto Claude represents an autonomous framework using multi-agent capabilities to oversee coding tasks, validation testing, and software building natively on desktop."
chinese_summary: null
problems_solved: "- Automates the tedious aspects of the SDLC (Software Development Life Cycle) like planning, quality assurance loops, branching, and codebase validation through highly coordinated AI agents."
how_to_use: "Download the stable desktop client or construct the Electron application locally. Initiate terminal tasks or utilize the visual Kanban interface to designate multi-stage coding routines."
sync_at: "2026-03-17T12:09:44.212Z"
---

# AndyMik90/Aperant

### 1. Positioning
Formally known as "Auto Claude" (Aperant), this software serves as an autonomous coding workforce, combining a desktop GUI (Electron) and backend AI orchestration frameworks interacting directly with Claude Pro models.

### 2. Pain Points & Advantages
Developers frequently break workflows performing QA or handling git-merges sequentially. Auto Claude coordinates concurrent, separated multi-agent builds isolated in git worktrees that execute, self-validate functionality, and auto-merge.

### 3. Technical Architecture
Constructed synchronously: an Electron-based React frontend acts as the task UI and Kanban board handling visual telemetry. The backend leverages Python scripts orchestrating Claude Code CLI binaries, employing distinct workspace sandboxes.

### 4. Core Implementation
Enacts a stringent, three-tier security loop: restricting filesystem traversal, OS sandboxing, and dynamic bash command whitelisting based on the detected software stack. Maintains a persistent memory layer to ensure agents retain architectural knowledge across sessions.

### 5. Code Organization
Structured as a mono-repository containing `apps/backend/` representing Python QA/pipeline definitions, and `apps/frontend/` handling graphical interfaces and telemetry displays.

### 6. Quick Start Suggestion
For CLI integration in CI environments, utilize `python run.py --spec <ID> --review && python run.py --merge` to implement entirely headless, AI-validated CI/CD pipelines bridging features automatically.

### 7. Summary
A robust, secure multi-agent platform elevating generative coding beyond simple autocomplete into autonomous life-cycle feature deployments, protected natively by local filesystem git sandboxes.
