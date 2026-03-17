---
id: 957658915
repo_name: "humanlayer/12-factor-agents"
url: "https://github.com/humanlayer/12-factor-agents"
stars: 18688
language: "TypeScript"
tags: ["Agent Principles","Best Practices","AI Safety","Engineering Standards","DevOps","Scalability","Enterprise AI"]
original_description: "12-Factor Agents: A set of principles and best practices for building production-grade LLM-powered software."
english_summary: "The 'Twelve-Factor App' equivalent for AI agents, outlining principles for scale, safety, and reliability."
chinese_summary: null
problems_solved: "- Fragmentation and 'Experimental' nature of most AI agent projects lacking logging and safety\n- Scalability issues in agentic software regarding cost, latency, and concurrency\n- Lack of 'Industrial Standards' for the deployment of autonomous systems"
how_to_use: "Review the principles at the project website and use the reference implementations in the `/examples` folder to audit your own agent's architecture."
sync_at: "2026-03-17T12:09:44.212Z"
---

# humanlayer/12-factor-agents

### 1. Positioning
12-Factor Agents is a thought-leadership project by HumanLayer. It adapts the '12-Factor App' methodology for the Generative AI era, providing a checklist for building production-stable agents.

### 2. Pain Points & Advantages
Provides a 'Maturity Model' to move beyond hacker scripts. Addresses the non-deterministic nature of AI with factors like 'Input/Output Observability' and 'Deterministic Fallbacks'.

### 3. Technical Architecture
A 12-section manifesto. Principles-as-Code strategy provides reference implementations in Python and TS for observability, safety, and cost management.

### 4. Core Implementation
Factor #7 (Human-in-the-Loop) defines a standardized approval layer for external side-effects. Factor #4 (Prompt as Code) treats prompts as versioned, mission-critical source code.

### 5. Code Organization
`/factors` contains deep-dives into principles, while `/examples` demonstrates 'Good vs. Bad' patterns in agentic orchestration.

### 6. Quick Start Suggestion
Read 'Factor 5: Task Atomicity' to understand why breaking complex missions into verifiable turns is critical for agentic reliability.

### 7. Summary
The 'DevOps Manifesto' for AI. It applies traditional engineering discipline to the chaotic world of LLM orchestration, ensuring agents can safely scale in enterprise environments.
