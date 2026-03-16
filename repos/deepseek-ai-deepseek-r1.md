---
title: "deepseek-ai/DeepSeek-R1"
repo_name: "deepseek-ai/DeepSeek-R1"
url: "https://github.com/deepseek-ai/DeepSeek-R1"
github_url: "https://github.com/deepseek-ai/DeepSeek-R1"
stars: 91967
language: ""
layout: repo
tags:
  - "DeepSeek-R1"
  - "LLM"
  - "Reasoning Model"
  - "Reinforcement Learning"
  - "GRPO"
  - "Open Source"
  - "MoE"
---

## What it is

State-of-the-art open reasoning models incentivized via reinforcement learning for complex problem solving.

## Problems solved

- High cost of training high-reasoning models.
- Need for open-weights alternatives to proprietary reasoning models like OpenAI o1.
- Inefficiency in complex multi-step logical deduction in standard LLMs.

## How to get started

pip install vllm
# Run with vLLM
python -m vllm.entrypoints.openai.api_server --model deepseek-ai/DeepSeek-R1-Distill-Qwen-32B

## Detailed report

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
