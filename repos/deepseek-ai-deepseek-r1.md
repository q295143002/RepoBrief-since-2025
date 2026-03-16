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
