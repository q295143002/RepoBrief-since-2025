---
title: "apple/ml-fastvlm"
repo_name: "apple/ml-fastvlm"
url: "https://github.com/apple/ml-fastvlm"
github_url: "https://github.com/apple/ml-fastvlm"
stars: 7257
language: "Python"
layout: repo
tags:
  - "Apple"
  - "Vision-Language-Model"
  - "VLM"
  - "CVPR-2025"
  - "On-Device-AI"
  - "Mobile-AI"
  - "Research"
---

## What it is

Apple's CVPR 2025 research introducing FastViTHD, a novel hybrid vision encoder that drastically reduces the number of visual tokens and encoding latency for VLMs, enabling real-time on-device multimodal AI on mobile hardware.

## Problems solved

- Standard VLM vision encoders are slow and produce too many tokens for high-resolution images
- making real-time on-device inference (iPhone/iPad) impractical. FastViTHD reduces Time-to-First-Token by up to 85x while maintaining or exceeding accuracy.

## How to get started

Create conda env, `pip install -e .`. Download models via `bash get_models.sh`. Run inference with `python predict.py --model-path /path/to/checkpoint --image-file image.png --prompt 'Describe this image.'`. For Apple Silicon, export models via `model_export/` and run native app in `app/` folder.
