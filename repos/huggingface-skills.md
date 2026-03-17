---
id: 1102903896
repo_name: "huggingface/skills"
url: "https://github.com/huggingface/skills"
stars: 8911
language: "Python"
tags: ["AI","ML","Hugging Face","Agent","MCP","Tooling"]
original_description: "Hugging Face Skills: Definitions for AI/ML tasks like dataset creation, model training, and evaluation. Interoperable with Claude Code, Codex, Gemini CLI, and Cursor."
english_summary: "Hugging Face Skills is a collection of standardized definitions for AI/ML workflows, enabling various coding agents to perform tasks like training, evaluation, and dataset management."
chinese_summary: null
problems_solved: "- Standardizes complex AI/ML workflows across different agent platforms; eliminates manual prompt engineering for task-specific Hub operations; provides a secure\n- versioned way to share AI engineering skills."
how_to_use: "In Claude Code: `/plugin marketplace add huggingface/skills`, then `/plugin install <skill-name>`. For Codex/Cursor, use the instructions in `SKILL.md` files or the provided manifest files (`.mcp.json`, etc.)."
sync_at: "2026-03-17T12:09:44.212Z"
---

# huggingface/skills

### 1. Positioning
Hugging Face Skills positions itself as the 'Skill Hub' for the open-weights era. It targets AI engineers and researchers who use coding agents to manage the full lifecycle of models on the Hugging Face Hub, providing 'native' capabilities for specialized ML tasks.

### 2. Pain Points & Advantages
Most agents handle generic coding well but struggle with specialized ML infrastructure (like training monitoring or dataset viewing). The advantage of this project is its 'Protocol-First' approach—it uses the Agent Skills standard to ensure that a training recipe defined here works identically across Claude, Cursor, and Gemini.

### 3. Technical Architecture
The repository is a collection of skill modules. Each module contains a `SKILL.md` (instructions), helper scripts (Python/Node), and metadata. It uses a centralized `publish.sh` script to regenerate manifests for different plugin systems (`.mcp.json`, `gemini-extension.json`, etc.).

### 4. Core Implementation
Key skills include: `hugging-face-model-trainer` for SFT/DPO jobs, `hugging-face-dataset-viewer` for zero-dependency data exploration, and `transformers-js` for browser-based ML. It leverages the Model Context Protocol (MCP) to bridge LLMs with Hub APIs securely.

### 5. Code Organization
Structured as a flat `skills/` directory where each subfolder is a standalone skill. A `scripts/` directory handles common build tasks (like generating the `AGENTS.md` fallback), and `agents/` contains pre-bundled configuration files for major platforms.

### 6. Quick Start Suggestion
Install the `hf-cli` skill first to give your agent the power to manage your Hugging Face account. Then, try installing the `hugging-face-dataset-viewer` and ask: 'Query the first 10 rows of the [dataset_name] from the Hub and summarize the label distribution.'

### 7. Summary
Hugging Face Skills is an essential infrastructure layer for AI-assisted machine learning. By codifying best practices into portable 'Skills', it enables developers to orchestrate complex Hub-based workflows with minimal overhead and high reliability.
