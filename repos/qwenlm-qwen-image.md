---
title: "QwenLM/Qwen-Image"
repo_name: "QwenLM/Qwen-Image"
url: "https://github.com/QwenLM/Qwen-Image"
github_url: "https://github.com/QwenLM/Qwen-Image"
stars: 7545
language: "Python"
layout: repo
tags:
  - "Alibaba"
  - "Qwen"
  - "Text-to-Image"
  - "Image-Editing"
  - "Diffusion-Model"
  - "Chinese-AI"
  - "Open-Source"
---

## What it is

Qwen-Image is Alibaba's 20B parameter multimodal diffusion transformer for text-to-image generation and image editing, excelling at complex Chinese/English text rendering and photorealistic human images.

## Problems solved

- Addresses limitations of prior image gen models in accurately rendering complex multilingual text (especially Chinese)
- producing realistic human portraits
- and providing high-quality instruction-following for precise image editing.

## How to get started

Install diffusers and use `QwenImagePipeline.from_pretrained('Qwen/Qwen-Image-2512')` for text-to-image. For editing, use `QwenImageEditPlusPipeline.from_pretrained('Qwen/Qwen-Image-Edit-2511')`. Runs on CUDA GPU with bfloat16.
