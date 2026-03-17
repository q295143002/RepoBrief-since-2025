---
id: 1013143108
repo_name: "MoonshotAI/Kimi-K2"
url: "https://github.com/MoonshotAI/Kimi-K2"
stars: 10498
language: null
tags: ["LLM","MoE","MoE Model","Agentic Intelligence","Open Source"]
original_description: "Kimi K2 is an open mixture-of-experts (MoE) language model with 32B activated parameters and 1T total parameters. Optimized for agentic intelligence, tool use, and autonomous problem-solving."
english_summary: "Kimi K2 is a massive 1-trillion parameter MoE model from Moonshot AI, specifically optimized for high-performance agentic workflows, coding, and complex reasoning."
chinese_summary: null
problems_solved: "- Addresses the need for efficient yet powerful models for agentic tasks that require high instruction following and tool usage; optimizes training stability at the 1T parameter scale using the Muon optimizer; provides open-source weights for a state-of-the-art MoE architecture."
how_to_use: "Deploy using engines like vLLM, SGLang, or KTransformers. Use the OpenAI-compatible API: replace your base URL with `https://platform.moonshot.ai/v1` and use model `Kimi-K2-Instruct`. Recommended temperature for agentic tasks is 0.6."
sync_at: "2026-03-17T12:09:44.212Z"
---

# MoonshotAI/Kimi-K2

### 1. Positioning
Kimi K2 is Moonshot AI's flagship open-weights model, targeting researchers and developers who require top-tier reasoning and coding capabilities. It stands as a direct competitor to high-end proprietary models like GPT-4 and Claude 3.5 Sonnet in the arena of agentic execution.

### 2. Pain Points & Advantages
Many open-source models struggle with multi-step reasoning and precise tool-calling required for autonomous agents. Kimi K2 excels here, achieving open-source SOTA on coding benchmarks (SWE-bench) and general reasoning tasks. Its MoE architecture allows it to have the knowledge of a 1T model with the inference speed of a 32B model.

### 3. Technical Architecture
A Mixture-of-Experts (MoE) model featuring 1 trillion total parameters with 32 billion activated per token. It uses 61 layers, 384 experts (8 selected per token), MLA attention, and a 160K vocabulary size, trained on 15.5T tokens using the Muon optimizer.

### 4. Core Implementation
The model is meticulous in its 'Agentic Intelligence' optimization. It supports native tool-calling with a dedicated parsing logic and handles long contexts (up to 128K) with high stability. Moonshot provides both a 'Base' model for fine-tuning and an 'Instruct' model for direct chat/agent usage.

### 5. Code Organization
The repository includes the full technical rapport, evaluation suite against leading models, deployment guides for various backends (vLLM, SGLang), and Python examples for chat and tool-calling implementation.

### 6. Quick Start Suggestion
Access the model via Moonshot AI's platform for a quick test. Use the provided Python script to execute a tool-calling task like weather retrieval to witness its high-accuracy function parameter generation.

### 7. Summary
Kimi K2 is a monumental contribution to the open AI community. By providing a 1T parameter model with a focus on agentic benchmarks, Moonshot AI has significantly narrowed the gap between open and closed models for autonomous software agent development.
