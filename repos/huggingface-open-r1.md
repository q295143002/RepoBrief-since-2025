---
title: "huggingface/open-r1"
repo_name: "huggingface/open-r1"
url: "https://github.com/huggingface/open-r1"
github_url: "https://github.com/huggingface/open-r1"
stars: 25941
language: "Python"
layout: repo
tags:
  - "Dataset"
---

## What it is

The community reproduction of DeepSeek-R1 for open-weights reasoning model training.

## Problems solved

- High technical barrier to reproducing state-of-the-art RL-based reasoning models.
- Need for open datasets that mirror the 'Cold Start' and 'RL' phases of reasoning models.
- Lack of public training recipes that work on consumer-grade (or reachable) GPU clusters.

## How to get started

git clone https://github.com/huggingface/open-r1
pip install -e .[dev]
# Read the training recipe in recipes/R1-Distill-Qwen-7B/

## Detailed report

### 1. Positioning
Open-R1 is a high-profile open research project by Hugging Face. It aims to democratize the 'Reasoning Model' breakthrough pioneered by DeepSeek and OpenAI by providing a complete, transparent training pipeline that anyone can use to train their own R1-tier models.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Provides the missing 'Recipe' for how to use Reinforcement Learning (RL) to 'teach' a model to think, rather than just using massive static datasets.
- **Differentiation**: Backed by the Hugging Face team, it is the most well-documented and verified reproduction attempt, focusing on 'Replicability' above all else.

### 3. Technical Architecture
- **Tech Stack**: Python, PyTorch, TRL (Transformer Reinforcement Learning library), and vLLM.
- **Design Strategy**: Follows the three-stage DeepSeek-R1 path: 1) Cold-start SFT, 2) Grpo/RL for reasoning, 3) Final distillation.

### 4. Core Implementation
- **Logic Layer**: Implements a highly efficient version of the GRPO (Group Relative Policy Optimization) algorithm in the `open_r1/` package.
- **Innovation**: Provides curated 'Thought datasets' that show the model exactly what a 'Chain of Thought' should look like.

### 5. Code Organization
- `/recipes`: Full config files for multi-stage training.
- `/scripts`: Data collection and model evaluation tools.
- `/src/open_r1`: The core core training logic implementation.

### 6. Quick Start Suggestion
Read `recipes/Llama-3.1-8B-Instruct-Open-R1-SFT` to see the minimal data requirements for the 'Cold Start' phase.

### 7. Summary
**Essence**: The 'Open Hardware' of LLM reasoning. Key taking is the democratization of high-level intelligence through shared training recipes.
