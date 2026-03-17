---
id: 1102157650
repo_name: "karpathy/llm-council"
url: "https://github.com/karpathy/llm-council"
stars: 15592
language: "Python"
tags: ["Karpathy","AI Debate","Consensus","Multi-Agent","Reasoning","Hallucination Reduction","Python"]
original_description: "llm-council: Andrej Karpathy's experimental project for achieving consensus through a multi-agent debate and voting mechanism."
english_summary: "Karpathy's project for high-precision decision-making through multi-agent debate and consensus."
chinese_summary: null
problems_solved: "- Individual LLM hallucinations in high-stakes tasks\n- Bias in model outputs favoring specific styles or viewpoints\n- Lack of structured voting protocols for reaching final agent answers"
how_to_use: "Clone the repo and run `council.py`. Provide your question and number of agents to start a multi-round debate session."
sync_at: "2026-03-17T12:09:44.212Z"
---

# karpathy/llm-council

### 1. Positioning
llm-council is Karpathy's explore of the 'Wisdom of the Crowd' for AI. It creates a 'Council' of agents from different providers that debate a question before a Judge agent synthesizes the view. Gold standard for high-confidence reasoning.

### 2. Pain Points & Advantages
Reduces reasoning errors by forcing models to defend logic against peers. Codebase is extremely readable and minimal, true to Karpathy's style, avoiding enterprise framework bloat.

### 3. Technical Architecture
Python-based, using standard libraries and model APIs. Adopts a 3-round debate model: Initial answers -> Critics -> Final Synthesis.

### 4. Core Implementation
'Synthesis Prompt' teaches the Judge how to spot group-think and weigh arguments. Features 'Cross-Provider Calibration'—showing how OpenAI vs Google vs Meta models disagree on logic.

### 5. Code Organization
Single-file `council.py` containing the protocol, prompts, and networking logic.

### 6. Quick Start Suggestion
Run with a difficult math problem; watch the terminal logs to see critics pick apart primary logic until the correct answer emerges.

### 7. Summary
The 'Courtroom' for AI reasoning. It demonstrates that model diversity and structured debate are the most powerful tools for eliminating hallucinations in agentic software.
