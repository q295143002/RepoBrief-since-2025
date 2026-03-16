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
