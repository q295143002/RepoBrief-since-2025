---
title: "deepseek-ai/DeepEP"
repo_name: "deepseek-ai/DeepEP"
url: "https://github.com/deepseek-ai/DeepEP"
github_url: "https://github.com/deepseek-ai/DeepEP"
stars: 9045
language: "Cuda"
layout: repo
tags:
  - "Deep Learning"
  - "MoE"
  - "GPU"
  - "CUDA"
  - "Infrastructure"
---

## What it is

DeepEP is a specialized GPU communication library for MoE architectures, providing high-throughput all-to-all kernels with support for FP8 and asymmetric-domain bandwidth for internode scaling.

## Problems solved

- Optimizes the 'dispatch and combine' bottleneck in Mixture-of-Experts training and inference; solves bandwidth imbalances in asymmetric network domains (NVLink to RDMA); reduces decoding latency for large-scale production inference (top-8 experts).

## How to get started

Requires Ampere/Hopper GPUs and CUDA 11+. Install NVSHMEM first, then run `NVSHMEM_DIR=/path/to/nvshmem python setup.py install`. Import `Buffer` from `deep_ep` to manage MoE communication in your PyTorch project.
