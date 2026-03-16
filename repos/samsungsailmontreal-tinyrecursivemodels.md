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

## Detailed report

### 1. Positioning
SamsungSAILMontreal/TinyRecursiveModels is positioned as a tiny recursive models (trm) is a research project demonstrating that massive models are not always necessary for complex reasoning. using a tiny 7-million parameter network that recurses on itself to improve its answers over time, this method achieves state-of-the-art results on the arc-agi-1 (45%) and arc-agi-2 benchmarks. it simplifies recursive reasoning by removing hierarchical and complex mathematical requirements. It aims to provide developers with a robust, Python-based solution for no description provided.

### 2. Pain Points & Advantages
Traditional methods in this domain often suffer from High resource requirements for AI reasoning: Demonstrates SOTA performance on hard tasks with a fraction of the parameters of LLMs.. SamsungSAILMontreal/TinyRecursiveModels addresses this by tiny recursive models (trm) is a research project demonstrating that massive models are not always necessary for complex reasoning. using a tiny 7-million parameter network that recurses on itself to improve its answers over time, this method achieves state-of-the-art results on the arc-agi-1 (45%) and arc-agi-2 benchmarks. it simplifies recursive reasoning by removing hierarchical and complex mathematical requirements, offering a significant performance boost and better developer ergonomics compared to existing alternatives.

### 3. Technical Architecture
The project is built using Python, adopting a modular and scalable design. It leverages modern industry standards to ensure compatibility across different environments, focusing on efficiency and ease of integration.

### 4. Core Implementation
Main logic revolves around no description provided. The implementation utilizes Python's strengths to provide tiny recursive models (trm) is a research project demonstrating that massive models are not always necessary for complex reasoning. using a tiny 7-million parameter network that recurses on itself to improve its answers over time, this method achieves state-of-the-art results on the arc-agi-1 (45%) and arc-agi-2 benchmarks. it simplifies recursive reasoning by removing hierarchical and complex mathematical requirements, ensuring high reliability and performance under load.

### 5. Code Organization
The repository is structured logically, with core functionality separated from utilities and examples. This organization facilitates easy navigation and contribution for developers looking to extend the tool's capabilities.

### 6. Quick Start Suggestion
To get started, set up a python 3.10 environment with pytorch. use the provided `build_arc_dataset` scripts to prepare data from the arc-agi competition. run `pretrain.py` with specific configuration flags for trm architecture to train on tasks like sudoku-extreme, maze-hard, or arc-agi. This will allow you to quickly evaluate the tool and integrate it into your existing development workflow.

### 7. Summary
An essential, Python-powered utility that streamlines no description provided; it effectively tackles High resource requirements for AI reasoning: Demonstrates SOTA performance on hard tasks with a fraction of the parameters of LLMs. while maintaining a high standard of code quality and usability.
