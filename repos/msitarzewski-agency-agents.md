---
id: 1075372545
repo_name: "msitarzewski/agency-agents"
url: "https://github.com/msitarzewski/agency-agents"
stars: 37142
language: "Shell"
tags: ["Multi-Agent","Agent Orchestration","Creative Agency","Task Delegation","Python","AI Workflow","Quality Control"]
original_description: "Agency-Agents is a framework for multi-agent orchestration simulating an advertising agency. It excels at task decomposition, delegation, and auditing across different LLM personas."
english_summary: "A specialized multi-agent framework patterned after high-efficiency team structures like creative agencies."
chinese_summary: null
problems_solved: "- Inefficiency when a single agent tries to handle mixed creative and technical tasks simultaneously\n- Lack of a clear 'account management' or 'quality control' layer in autonomous agent swarms\n- Difficulty in coordinating work between models of varying costs and capabilities effectively"
how_to_use: "Clone the repo and install Python dependencies. Run your first campaign: `python main.py --campaign 'Launch a new AI tool'`. Define your team in the `agency.json` configuration."
sync_at: "2026-03-17T12:09:44.212Z"
---

# msitarzewski/agency-agents

### 1. Positioning
Agency-Agents is a multi-agent orchestration framework that mimics a professional agency structure. It divides tasks between specific roles (e.g., Creative Director, Copywriter, Strategist) to achieve professional-grade outputs through collaborative iteration.

### 2. Pain Points & Advantages
Reduces the high variance in output quality that occurs when a single model is overloaded. Features a unique 'Delegation Protocol' where senior-level agents can reject work from junior-level agents, simulating real-world quality control.

### 3. Technical Architecture
Python-based, designed for high-end models like GPT-4o or Claude 3.5 Sonnet. Adopts a 'Strict Hierarchy' model with a focus on the 'Review-and-Revise' loop as the primary quality engine.

### 4. Core Implementation
`orchestrator/pipeline.py` implements the feedback loop where an 'Account Manager' agent decides if the final output meets the initial client brief. Uses 'Role-Specific Memories' to prevent agents from getting distracted by irrelevant technical details.

### 5. Code Organization
`/personas` contains system prompts defining each team member's unique perspective, while `/workflow` defines sequential and parallel execution graph definitions.

### 6. Quick Start Suggestion
Read `personas/creative_director.md` to learn how high-level vision and tone-of-voice constraints are systematically enforced across the entire agent swarm.

### 7. Summary
A 'digital boardroom' for AI. It implements professional 'Review' states and hierarchical management to eliminate hallucinations and ensure consistently high-quality project outputs.
