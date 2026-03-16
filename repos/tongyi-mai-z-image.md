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

## Detailed report

### 1. Positioning
Z-Image targets professional designers and AI researchers looking for top-tier open-source image generation. It is specifically optimized for high-speed, high-quality production environments where sub-second latency is critical.

### 2. Pain Points & Advantages
Standard diffusion models (like Flux or SD3) often require significant time and VRAM for high-res generation. Z-Image-Turbo achieves state-of-the-art results in only 8 steps, fitting into 16GB VRAM devices while outperforming other open-source models in photorealism and precise bilingual text rendering.

### 3. Technical Architecture
Uses a Scalable Single-Stream Diffusion Transformer (S3-DiT) with 6B parameters. It concatenates text, visual semantic tokens, and image VAE tokens into a unified input stream. The acceleration is powered by 'Decoupled-DMD', which treats CFG augmentation and distribution matching as separate mechanisms.

### 4. Core Implementation
The training pipeline consists of pre-training, SFT for aesthetic alignment, and a unique 'DMDR' phase that fuses DMD with Reinforcement Learning. It supports a wide range of aspect ratios and resolutions (512 to 2048px) and includes specialized versions for image editing (Z-Image-Edit).

### 5. Code Organization
The repository provides native PyTorch inference scripts, diffusers integration code, and detailed technical reports. It also links to extensive community integrations like ComfyUI, stable-diffusion.cpp, and vLLM.

### 6. Quick Start Suggestion
Use the `diffusers` script provided in the README to generate a high-detail portrait of a 'Young Chinese woman in red Hanfu' at 1024x1024. In just 8 steps, you'll see the model's impressive aesthetic quality and text-rendering accuracy.

### 7. Summary
Z-Image is a breakthrough for efficient open-source generative AI. By perfecting the single-stream DiT architecture and pioneering new distillation and RL techniques, Alibaba has delivered a model that is arguably the most practical and high-performance image foundation model currently available for local enthusiasts and enterprises alike.
