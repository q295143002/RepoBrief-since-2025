---
id: 965615190
repo_name: "bmad-code-org/BMAD-METHOD"
url: "https://github.com/bmad-code-org/BMAD-METHOD"
stars: 40467
language: "JavaScript"
tags: ["Agile","Multi-Agent","Orchestration","Software Development","Framework","AI Collaboration","Workflow"]
original_description: "BMAD Method: A framework for AI-led agile development architecture. Defines 12+ Agent roles and their collaboration protocols for building large systems."
english_summary: "An agile architecture framework for multi-agent autonomous software development teams."
chinese_summary: null
problems_solved: "- Chaos in autonomous agent teams without clear hierarchy or roles.\n- Difficulty in managing large-scale software projects with AI alone.\n- Lack of a collaborative protocol that mirrors professional human dev teams."
how_to_use: "git clone https://github.com/bmad-code-org/BMAD-METHOD\n# Review the 'architect_role.md' and 'dev_role.md' in the roles/ folder."
sync_at: "2026-03-17T12:09:44.212Z"
---

# bmad-code-org/BMAD-METHOD

### 1. Positioning
The BMAD (Beta-Managed Agile Development) Method is a high-level orchestration framework for AI agents. It reimagines the agile dev cycle as a multi-agent collaboration, defining specific roles like the 'Scrum Agent', 'Architect Agent', and 'QA Agent'.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Prevents 'agent drift' and the silo effect where agents lose track of global project goals.
- **Differentiation**: Specifically designed for 'Large System' development, whereas most frameworks focus on single-script automation.

### 3. Technical Architecture
- **Tech Stack**: Language-agnostic, primarily implemented via LLM system instructions.
- **Design Strategy**: Uses a 'Stateful Protocol' where each agent's output must adhere to a specific status (e.g., READY_TO_CODE, QA_FAILED).

### 4. Core Implementation
- **Protocol**: Implements a 'Double-Correction' loop where the Architect Agent must approve a design before the Dev Agent writes a single line of code.
- **Engineering Practice**: Standardized use of ticket-based task management accessible to all agents in the swarm.

### 5. Code Organization
- `/roles`: Instruction files for each specific AI role.
- `/workflows`: Operational flows for Sprints and Bug-hunting.

### 6. Quick Start Suggestion
Read `roles/architect.md` to understand how high-level architectural constraints are passed down to an AI worker hive.

### 7. Summary
**Essence**: A 'management system' for AI workers. Key learning is the organizational theory applied to autonomous silicon teams.
