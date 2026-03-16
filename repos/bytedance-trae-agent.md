---
title: "bytedance/trae-agent"
repo_name: "bytedance/trae-agent"
url: "https://github.com/bytedance/trae-agent"
github_url: "https://github.com/bytedance/trae-agent"
stars: 11013
language: "Python"
layout: repo
tags:
  - "AI Agent"
  - "Software Engineering"
  - "CLI"
  - "Multi-LLM"
---

## What it is

Trae Agent is a research-friendly CLI tool from ByteDance used to automate diverse software engineering workflows via multi-LLM support.

## Problems solved

- Offers a transparent and highly modular platform tailored for studying AI agent architectures (test-time scaling
- ablation studies); resolves complex software engineering tasks naturally through terminal workflows without restricting users to a single vendor's LLM.

## How to get started

Clone the repository and install through UV: `uv sync --all-extras`, activate the environment `source .venv/bin/activate`, copy the config `cp trae_config.yaml.example trae_config.yaml` to put API keys, and run tasks like `trae-cli run "Create a hello world Python script"`.
