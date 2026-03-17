---
id: 920152532
repo_name: "Jiayi-Pan/TinyZero"
url: "https://github.com/Jiayi-Pan/TinyZero"
stars: 12930
language: "Python"
tags: ["Reinforcement-Learning","Reasoning","Deep-Research","Machine-Learning","Open-Source-AI"]
original_description: "TinyZero is a reproduction of DeepSeek R1 Zero in countdown and multiplication tasks."
english_summary: "A reinforcement learning project replicating DeepSeek R1 Zero's reasoning capabilities scaling on much smaller 3B parameter models."
chinese_summary: null
problems_solved: "- Democratizes empirical DeepRL reasoning research explicitly demonstrating how smaller models self-develop sophisticated verifiable chains of thought without relying heavily on supervised instruction tuning."
how_to_use: "Establish a conda environment, install `veRL` and `vLLM`. Prepare dataset variables, and run `bash ./scripts/train_tiny_zero.sh` utilizing a target <3B base model."
sync_at: "2026-03-17T12:09:44.212Z"
---

# Jiayi-Pan/TinyZero

### 1. Positioning
TinyZero is an experimental, highly educational Reinforcement Learning (RL) project proving that sophisticated logical deduction mechanisms (self-verification/search) can be induced entirely from scratch within small, 3-billion-parameter language models.

### 2. Pain Points & Advantages
Replicating frontier models (like DeepSeek R1) usually necessitates massive compute grids. TinyZero proves these foundational methodologies are scalable downwards, requiring <$30 of compute (e.g., dual GPUs) to empirically witness the "Aha" moment where an LLM functionally understands reasoning.

### 3. Technical Architecture
Heavily leverages `veRL` (Volcengine RL framework) as the reinforcement execution loop and integrates seamlessly into GPU clusters employing `vLLM` and Flash Attention 2 for ultra-efficient rollout throughput.

### 4. Core Implementation
Instead of broad NLP tasks, the learning environments are constrained rigorously to deterministic logic puzzles (e.g., "Countdown" numerical puzzles and multiplications), enforcing strict reward architectures validating mathematical truthfulness iteratively over thousands of RL episodes.

### 5. Code Organization
The project is bundled neatly containing `/examples/data_preprocess/` determining input structures and `/scripts/` controlling training parameters corresponding directly to `veRL` execution parameters.

### 6. Quick Start Suggestion
Use Qwen2.5-3B as the base model, parse the provided countdown data sets, and launch the single-script training routine to observe the progressive evolution of `<thought>` tags indicating successful logic generation.

### 7. Summary
A fascinating pipeline brilliantly illustrating cost-efficient AI reasoning extraction using reinforcement learning, empowering independent researchers with state-of-the-art methodology on consumer hardware.
