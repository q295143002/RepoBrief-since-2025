---
id: 1164832776
repo_name: "cft0808/edict"
url: "https://github.com/cft0808/edict"
stars: 8838
language: "Python"
tags: ["Multi-Agent","AI Governance","Dashboard","OpenClaw","Architecture"]
original_description: "Edict: A multi-agent collaboration architecture based on the ancient 'Three Provinces and Six Ministries' system. Focuses on checks and balances."
english_summary: "Edict (San Sheng Liu Bu) is a highly structured multi-agent framework that implements institutional governance and quality control through specialized roles and a mandatory review process for AI tasks."
chinese_summary: null
problems_solved: "- Solves the 'hallucination and poor quality' problem in unsupervised multi-agent chats; provides a mandatory 'QA stage' (Menxia) to vet AI plans before execution; offers a full monitoring dashboard for task observability and intervention."
how_to_use: "Deploy via Docker for the demo: `docker run -p 7891:7891 cft0808/edict`. For full integration, run the `install.sh` script to set up the 12 specialized agent workspaces and the 'Military Dashboard' server. Access the dashboard at `http://localhost:7891`."
sync_at: "2026-03-17T12:09:44.212Z"
---

# cft0808/edict

### 1. Positioning
Edict positions itself as the 'Institutional Guardrail' for complex AI workflows. It targets developers and teams who find existing 'autonomous' frameworks (like CrewAI or AutoGen) too chaotic and hard to audit, providing a 'Governance-First' alternative based on a 1400-year-old bureaucratic model.

### 2. Pain Points & Advantages
Collaborative agents often suffer from 'groupthink' or unchecked errors. Edict's killer advantage is its 'Systemic Checks & Balances'—every task *must* be planned by 'Zhongshu' and *must* be approved or 'vetoed' by 'Menxia' before 'Shangshu' can dispatch it to the executive ministries. It prioritizes 'Auditability and Predictability' over raw speed.

### 3. Technical Architecture
Built on top of OpenClaw, utilizing 11 specialized agent roles + 1 compatibility role. It features a React-based 'Military Dashboard' (Jingjichu) that visualizes task states, token costs, and agent heartbeats in real-time. The backend is written in pure Python (stdlib only) for zero-dependency portability.

### 4. Core Implementation
Features a sophisticated 'Imperial Decree' state machine (Kanban). It includes automated 'news aggregation' and 'daily briefings' via the 'Zaochao' agent. It supports 'Skill' injection where specialized expertise can be mapped to specific ministries (e.g., security skills to the Ministry of Punishments).

### 5. Code Organization
Organized into `agents/` (behavior definitions in SOUL.md), `dashboard/` (UI), and `scripts/` (data synchronization and loop management). It enforces a strict 'Permission Matrix'—agents cannot communicate outside their designated hierarchical paths, mirroring real-world organizational security.

### 6. Quick Start Suggestion
Run the Docker demo and open the dashboard. Use the 'Template Library' to issue a 'Competitor Analysis' decree. Watch the 'Kanban' as the task moves from planning to review to parallel execution by different ministries (Hubu, Bingbu, etc.), and eventually results in a 'Memorial' (final report).

### 7. Summary
Edict is a fascinating and practical experiment in 'AI Constitutionalism'. By applying a proven human governance structure to LLMs, it provides a superior level of control and reliability for enterprise-grade autonomous operations.
