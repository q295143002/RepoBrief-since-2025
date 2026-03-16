---
title: "Tongyi-MAI/Z-Image"
repo_name: "Tongyi-MAI/Z-Image"
url: "https://github.com/Tongyi-MAI/Z-Image"
github_url: "https://github.com/Tongyi-MAI/Z-Image"
stars: 10480
language: "Python"
layout: repo
tags:
  - "AI Image Generation"
  - "Diffusion"
  - "DiT"
  - "Open Source"
---

## What it is

Z-Image is a high-efficiency 6B image generation model from Alibaba's Tongyi-MAI, featuring a single-stream DiT architecture that enables sub-second inference.

## Problems solved

- Reduces high inference latency in diffusion models through 'Decoupled-DMD' and 'DMDR' distillation; enables high-quality photorealistic and bilingual (CN/EN) text generation on consumer-grade hardware; solves parameter inefficiency of dual-stream DiT architectures.

## How to get started

Install via `pip install git+https://github.com/huggingface/diffusers`. Use `ZImagePipeline.from_pretrained("Tongyi-MAI/Z-Image-Turbo")` with `num_inference_steps=9` and `guidance_scale=0.0` for rapid 8-step generation.
