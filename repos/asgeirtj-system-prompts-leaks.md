---
id: 976921297
repo_name: "asgeirtj/system_prompts_leaks"
url: "https://github.com/asgeirtj/system_prompts_leaks"
stars: 34243
language: "HTML"
tags: ["System Prompts","Prompt Engineering","AI Safety","Reverse Engineering","Claude","GPT","Alignment"]
original_description: "System Prompts Leaks and Experiments: A collection and analysis of leaked or discovered system prompts from top-tier AI models and applications."
english_summary: "Archive and research repository for discovered system prompts of major AI platforms."
chinese_summary: null
problems_solved: "- Lack of transparency in commercial AI behavior and safety constraints.\n- Need for a central database of prompt-engineering 'anti-patterns' and common safeguards.\n- Difficulty for researchers to track how system instructions evolve across model versions."
how_to_use: "git clone https://github.com/asgeirtj/system_prompts_leaks\n# Navigate the 'archive/' folder."
sync_at: "2026-03-17T12:09:44.212Z"
---

# asgeirtj/system_prompts_leaks

### 1. Positioning
This repository acts as a public archive for 'leaked' or discovered system instructions from prominent AI products (e.g., GPT, Claude, Perplexity). It serves as a research baseline for understanding how safety alignment and personality are implemented at the prompt level.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Provides rare insight into the 'internal rules' that govern modern AI behavior, which are usually hidden from the public.
- **Differentiation**: Focuses on 'Discovery and Analysis' rather than just a raw list, documenting the 'leaking' methods used by researchers.

### 3. Technical Architecture
- **Stack**: Markdown-based research database.
- **Design Strategy**: Chronological tracking of model personality shifts (e.g., changes in Claude's refusal style).

### 4. Core Implementation
- **Value**: Contains the 'Master Safety Prompt' patterns used by major labs to prevent jailbreaking.
- **Engineering Practice**: Shows the evolution of multi-turn XML tagging for instruction adherence.

### 5. Code Organization
- `/prompts`: The core archive of discovered instructions.
- `/analysis`: Research notes on prompt efficiency and safety patterns.

### 6. Quick Start Suggestion
Read `analysis/claude-3-refusal-patterns.md` to see how instruction-level guards affect model helpfulness.

### 7. Summary
**Essence**: The 'Black Box' decoder for AI behavior. Key learning is the observation of how tiny shifts in system wording affect macro-scale model alignment.
