---
id: 919443098
repo_name: "deepseek-ai/DeepSeek-R1"
url: "https://github.com/deepseek-ai/DeepSeek-R1"
stars: 91967
language: null
tags: ["DeepSeek-R1","LLM","Reasoning Model","Reinforcement Learning","GRPO","Open Source","MoE"]
original_description: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning. R1-Zero and R1 series models provide strong reasoning capabilities comparable to OpenAI's o1."
english_summary: "State-of-the-art open reasoning models incentivized via reinforcement learning for complex problem solving."
chinese_summary: "DeepSeek-R1 是由 DeepSeek 团队开发的高性能推理模型，通过强化学习展现了卓越的思维能力，在数学、代码和逻辑推理上表现强劲。"
problems_solved: "- High cost of training high-reasoning models.\n- Need for open-weights alternatives to proprietary reasoning models like OpenAI o1.\n- Inefficiency in complex multi-step logical deduction in standard LLMs."
how_to_use: "pip install vllm\n# Run with vLLM\npython -m vllm.entrypoints.openai.api_server --model deepseek-ai/DeepSeek-R1-Distill-Qwen-32B"
sync_at: "2026-03-17T12:09:44.212Z"
---

# deepseek-ai/DeepSeek-R1

### 1. Positioning
DeepSeek-R1 is a new generation of reasoning models developed by the DeepSeek team. It significantly enhances logical reasoning, mathematical solving, and programming capabilities through reinforcement learning (RL), rivaling the o1 series from OpenAI. It is primarily built for scientific research, complex engineering calculations, and AI applications requiring deep thought.

### 2. Pain Points & Advantages
- **Pain Points Solved**: It addresses the weakness of open-source models in complex reasoning tasks (e.g., long-chain mathematical proofs) while drastically reducing inference costs for high-performance reasoning.
- **Differentiation**: Provides a complete evolution path from R1-Zero (pure RL) to R1 (SFT + RL) and open-sources distilled models of multiple sizes for local deployment.

### 3. Technical Architecture
- **Tech Stack**: Based on the Transformer architecture using a Mixture-of-Experts (MoE) structure to optimize inference efficiency.
- **Design Strategy**: Introduces the Group Relative Policy Optimization (GRPO) reinforcement learning algorithm, moving away from reliance on massive SFT data by improving reasoning through self-play.

### 4. Core Implementation
- **Key Innovation**: Discovered an 'Aha Moment' during training where the model learned to self-reflect and correct errors autonomously.
- **Code Reference**: Demonstrates configuration for Chain-of-Thought (CoT) generation length in the provided inference setup.

### 5. Code Organization
- `/models`: Contains weights info and configuration docs for various model sizes.
- `/scripts`: Provides startup scripts for model conversion and inference.

### 6. Quick Start Suggestion
Start by reading the `DeepSeek_R1.pdf` paper to understand how GRPO incentivizes deep thinking without pure human data annotation.

### 7. Summary
**Essence**: The pinnacle of open-source reasoning models. The most notable takeaway is its training paradigm using RL to break intelligence bottlenecks.
