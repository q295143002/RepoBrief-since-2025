---
title: "bytedance/UI-TARS"
repo_name: "bytedance/UI-TARS"
url: "https://github.com/bytedance/UI-TARS"
github_url: "https://github.com/bytedance/UI-TARS"
stars: 9874
language: "Python"
layout: repo
tags:
  - "Computer Use"
  - "AI Agent"
  - "VLM"
  - "RL"
  - "ByteDance"
---

## What it is

UI-TARS is a state-of-the-art Vision-Language model from ByteDance that acts as a native GUI agent, capable of navigating desktops and mobile apps via visual reasoning and RL-enhanced thought processes.

## Problems solved

- Bridges the gap between AI and complex GUI software where APIs are missing; achieves SOTA on benchmarks like OSWorld by reasoning through 'thoughts' before taking action; handles gaming and cross-app tasks on both desktop and mobile platforms.

## How to get started

Install via `pip install ui-tars`. Deploy the weights from Hugging Face (7B or larger). Use the built-in action parser in Python to convert model strings like `click(start_box='(100,200)')` into executable PyAutoGUI or mobile driver code.
