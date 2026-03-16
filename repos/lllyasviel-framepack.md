---
title: "lllyasviel/FramePack"
repo_name: "lllyasviel/FramePack"
url: "https://github.com/lllyasviel/FramePack"
github_url: "https://github.com/lllyasviel/FramePack"
stars: 16665
language: "Python"
layout: repo
tags:
  - "Computer Vision"
  - "Video Analysis"
  - "VLM"
  - "Token Optimization"
  - "OpenCV"
  - "PyTorch"
  - "Media Processing"
---

## What it is

A high-performance library for 'Semantically Compressing' video data for AI agents and VLMs.

## Problems solved

- Token overload when sending high-FPS video frames to Vision models
- Loss of 'Temporal Context' when randomly sampling frames from long videos
- High inference costs for video-based agentic workflows

## How to get started

Install via pip: `pip install framepack`. Use the `compress` function to intelligently package video frames into a high-density visual prompt.

## Detailed report

### 1. Positioning
FramePack is a 'Visual Squeezer' for agents. It enables AI to 'watch' long videos by selecting only semantically significant frames (movement, scene changes) and packaging them into a single prompt.

### 2. Pain Points & Advantages
Addresses the 'Video Inference Wall'—allowing 10-minute video understanding at a fraction of the token cost. Features 'Adaptive Rate Sampling' for preserving narrative flow.

### 3. Technical Architecture
Python/OpenCV/PyTorch based. Adopts a 'Pre-Filtering' approach where lightweight local models identify interesting frames before calling heavy cloud VLMs.

### 4. Core Implementation
`semantic_engine.py` stitches frames into an optimal 'Mosaic' image. Injects timestamp metadata into frame names for temporal reasoning (when events happened).

### 5. Code Organization
`/samplers` contains algorithms for keyframe/event sampling, while `/packers` manages the optimal grid arrangement for LLMs.

### 6. Quick Start Suggestion
Use `examples/cctv_summarizer.py` to see FramePack summarize 24 hours of security footage into a 500-word report in seconds.

### 7. Summary
The 'Video-to-Prompt' Optimizer. It proves that local semantic filters are essential for cost-effective multi-modal AI reasoning over long temporal sequences.
