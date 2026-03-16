---
title: "OpenPipe/ART"
repo_name: "OpenPipe/ART"
url: "https://github.com/OpenPipe/ART"
github_url: "https://github.com/OpenPipe/ART"
stars: 9011
language: "Python"
layout: repo
tags:
  - "RL"
  - "GRPO"
  - "AI Agent"
  - "vLLM"
  - "Deep Learning"
---

## What it is

ART (Agent Reinforcement Trainer) is an open-source RL framework that enables LLMs to improve their tool-use and reasoning through experience, providing a managed harness for GRPO (Group Relative Policy Optimization).

## Problems solved

- Solves the 'reliability gap' in multi-step agents where fine-tuning isn't enough; overcomes the infrastructure headache of RL loops (inference vs training); eliminates the need for labeled data by allowing agents to learn from environment rewards (RULER).

## How to get started

Install via `pip install openpipe-art`. Define a `TrainableModel` and a `ServerlessBackend` (W&B/OpenPipe). Run agentic rollouts, assign rewards to 'Trajectories', and the framework will automatically group them for GRPO training on the backend.
