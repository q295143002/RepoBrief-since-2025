---
title: "SamsungSAILMontreal/TinyRecursiveModels"
repo_name: "SamsungSAILMontreal/TinyRecursiveModels"
url: "https://github.com/SamsungSAILMontreal/TinyRecursiveModels"
github_url: "https://github.com/SamsungSAILMontreal/TinyRecursiveModels"
stars: 6400
language: "Python"
layout: repo
tags:
  - "Machine Learning"
  - "Recursive Reasoning"
  - "ARC-AGI"
  - "Neural Networks"
  - "AI Research"
  - "Deep Learning"
---

## What it is

Tiny Recursive Models (TRM) is a research project demonstrating that massive models are not always necessary for complex reasoning. Using a tiny 7-million parameter network that recurses on itself to improve its answers over time, this method achieves state-of-the-art results on the ARC-AGI-1 (45%) and ARC-AGI-2 benchmarks. It simplifies recursive reasoning by removing hierarchical and complex mathematical requirements.

## Problems solved

- High resource requirements for AI reasoning: Demonstrates SOTA performance on hard tasks with a fraction of the parameters of LLMs.
- Overfitting in small models: The recursive process naturally regularizes the model.
- Complexity in recursive reasoning architectures: Simplifies the process to a core latent update loop.
- ARC-AGI Benchmark: Provides a high-performing baseline for the Abstract Reasoning Corpus.

## How to get started

Set up a Python 3.10 environment with PyTorch. Use the provided `build_arc_dataset` scripts to prepare data from the ARC-AGI competition. Run `pretrain.py` with specific configuration flags for TRM architecture to train on tasks like Sudoku-Extreme, Maze-Hard, or ARC-AGI.
