---
title: "deepseek-ai/3FS"
repo_name: "deepseek-ai/3FS"
url: "https://github.com/deepseek-ai/3FS"
github_url: "https://github.com/deepseek-ai/3FS"
stars: 9766
language: "C++"
layout: repo
tags:
  - "Storage"
  - "Distributed Systems"
  - "AI Infrastructure"
  - "C++"
  - "Performance"
---

## What it is

3FS is a distributed, high-performance file system from DeepSeek-AI, specifically architected for massive-scale AI workloads using modern SSD/RDMA technologies.

## Problems solved

- Solves the storage bottleneck in large-scale AI training (Checkpointing) and inference (KV-Cache); eliminates the need for data shuffling/prefetching via locality-oblivious storage; provides strong consistency and familiar file interfaces while scaling to thousands of nodes.

## How to get started

Requires Ubuntu 20.04/22.04 with RDMA hardware. Install dependencies (libuv, foundationdb, etc.), clone with submodules, and build via CMake: `cmake -DSHUFFLE_METHOD=g++11 .. && make`. Deployment instructions are found in the `deploy/` directory.
