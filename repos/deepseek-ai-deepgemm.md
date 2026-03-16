---
title: "deepseek-ai/DeepGEMM"
repo_name: "deepseek-ai/DeepGEMM"
url: "https://github.com/deepseek-ai/DeepGEMM"
github_url: "https://github.com/deepseek-ai/DeepGEMM"
stars: 6254
language: "Cuda"
layout: repo
tags:
  - "CUDA"
  - "FP8"
  - "Optimization"
  - "DeepSeek"
  - "Deep Learning"
---

## What it is

DeepSeek's high-performance FP8 GEMM (General Matrix Multiplication) library for ultra-fast training.

## Problems solved

- High computational cost of traditional FP16/BF16 training
- Lack of optimized kernels for FP8 precision on NVIDIA GPUs
- Inefficiency in large-scale model pre-training throughput

## How to get started

Clone the repo, compile the CUDA kernels, and integrate with your PyTorch training loop.
