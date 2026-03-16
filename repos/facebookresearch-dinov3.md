---
title: "facebookresearch/dinov3"
repo_name: "facebookresearch/dinov3"
url: "https://github.com/facebookresearch/dinov3"
github_url: "https://github.com/facebookresearch/dinov3"
stars: 9813
language: "Jupyter Notebook"
layout: repo
tags:
  - "Computer Vision"
  - "PyTorch"
  - "Self-Supervised"
  - "Meta AI"
---

## What it is

DINOv3 is Meta AI's latest family of self-supervised vision models, ranging from 21M to 7B parameters, delivering SOTA performance on vision tasks without fine-tuning.

## Problems solved

- Provides universal
- high-resolution visual embeddings for downstream tasks like classification
- segmentation
- and depth estimation; achieves outstanding 'zero-shot' performance through large-scale pretraining on web and satellite datasets; simplifies the use of massive models (7B) via PyTorch Hub and Transformers.

## How to get started

Load backbones via PyTorch Hub: `torch.hub.load('facebookresearch/dinov3', 'dinov3_vitb16')`. For Hugging Face Transformers, use `AutoModel.from_pretrained('facebook/dinov3-vits16-pretrain-lvd1689m')`. Pretrained heads for segmentation and depth are also available.
