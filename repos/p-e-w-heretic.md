---
title: "p-e-w/heretic"
repo_name: "p-e-w/heretic"
url: "https://github.com/p-e-w/heretic"
github_url: "https://github.com/p-e-w/heretic"
stars: 12386
language: "Python"
layout: repo
tags:
  - "LLM-Ablation"
  - "AI-Safety"
  - "Model-Correction"
  - "GPU-Optimization"
  - "Machine-Learning"
---

## What it is

A sophisticated CLI tool automating directional ablation techniques natively removing "safety alignment" censorship filters from transformer LLMs without necessitating expensive post-training.

## Problems solved

- Bypasses the extreme computational costs generally tied to Fine-Tuning or explicitly retraining LLM models merely focused on mitigating RLHF safety refusals
- relying intelligently on ablation parameter extraction instead.

## How to get started

Activate a Python environment, `pip install -U heretic-llm`, followed precisely by executing `heretic Qwen/Qwen3-4B-Instruct-2507` allocating it natively against appropriate GPU limits.
