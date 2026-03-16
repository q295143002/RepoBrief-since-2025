---
title: "bytedance/deer-flow"
repo_name: "bytedance/deer-flow"
url: "https://github.com/bytedance/deer-flow"
github_url: "https://github.com/bytedance/deer-flow"
stars: 30059
language: "Python"
layout: repo
tags:
  - "ByteDance"
  - "Orchestration Engine"
  - "DAG"
  - "High Concurrency"
  - "Go"
  - "AI Pipeline"
  - "Parallel Processing"
---

## What it is

ByteDance's lightweight, high-concurrency AI task orchestration engine based on DAG pipelines.

## Problems solved

- Performance bottlenecks in sequential AI task processing.
- Difficulty in visualizing and managing complex multi-stage AI workflows (e.g., Video -> Audio -> Summary).
- High infrastructure costs due to inefficient resource scheduling in AI pipelines.

## How to get started

git clone https://github.com/bytedance/deer-flow
./build.sh
./deer-flow --flow my_task.yaml
