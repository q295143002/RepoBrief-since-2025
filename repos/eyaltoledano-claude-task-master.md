---
id: 942837343
repo_name: "eyaltoledano/claude-task-master"
url: "https://github.com/eyaltoledano/claude-task-master"
stars: 25902
language: "JavaScript"
tags: ["Automation"]
original_description: "Claude Task Master: A specialized interface and automation tool for delegating complex, hierarchical tasks to the Claude 3.5 series."
english_summary: "Task-oriented UI and automation layer for orchestrating multi-step Claude 3.5 missions."
chinese_summary: null
problems_solved: "- Difficulty in tracking 'task status' when Claude is performing a 2-hour research mission.\n- High failure rate in 'long-context' missions due to cumulative errors.\n- Need for a clean way to visualize the 'Plan-vs-Execution' status for non-technical stakeholders."
how_to_use: "git clone https://github.com/eyaltoledano/claude-task-master\nnpm install && npm start"
sync_at: "2026-03-17T12:09:44.212Z"
---

# eyaltoledano/claude-task-master

### 1. Positioning
Claude Task Master is an 'Orchestration Dashboard' specifically for the Claude 3.5 series. It transforms the chat interface into a project management board, where each 'Agentic Request' is treated as a job with sub-tasks, statuses (Running, Blocked, Done), and automated retries.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Fixes the 'Black Box' problem where a user doesn't know if a long-running agent is making progress or looping.
- **Differentiation**: Features a 'Sub-Task Re-planning' logic where if sub-task #3 fails, the agent can re-architect tasks #4-10 on the fly.

### 3. Technical Architecture
- **Tech Stack**: React for the dashboard, Node.js for the session runner.
- **Design Strategy**: Adopts a 'Job Queue' philosophy—every user request is persisted and can be resumed across browser restarts.

### 4. Core Implementation
- **Logic Layer**: `src/engine/planner.ts` handles the recursive task decomposition with high-fidelity JSON output from Claude.
- **Innovative**: Implements 'Human-in-the-Loop' intervention points—you can manually fix a sub-task and the agent will continue from there.

### 5. Code Organization
- `/engine`: The task runner and state machine.
- `/ui`: Kanban-style visualization of the agent's progress.

### 6. Quick Start Suggestion
Create a task like "Build a full-stack Trello clone" and watch the dashboard populate with dozens of architectural sub-tasks in real-time.

### 7. Summary
**Essence**: The 'Kanban' for AI Agents. Key learning is the visibility and persistence of long-running autonomous workflows.
