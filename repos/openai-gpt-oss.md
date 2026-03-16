---
title: "openai/gpt-oss"
repo_name: "openai/gpt-oss"
url: "https://github.com/openai/gpt-oss"
github_url: "https://github.com/openai/gpt-oss"
stars: 19908
language: "Python"
layout: repo
tags:
  - "Open Source AI"
  - "OpenAI"
  - "Research Models"
  - "MoE"
  - "Transformer"
  - "Weight Transparency"
  - "Deep Learning"
---

## What it is

OpenAI's official release of open-weight reasoning and instruction-tuned models for research.

## Problems solved

- Lack of high-quality open-source benchmarks for reasoning-heavy tasks
- Inability for researchers to inspect internal weight distributions of top-tier models
- Need for a 'Baseline' open model for the community to fine-tune on specialized datasets

## How to get started

Install via pip: `pip install openai-gpt-oss`. Load the model using: `from gpt_oss import load_model; model = load_model('gpt-oss-120b')`.
