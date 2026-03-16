---
title: "maderix/ANE"
repo_name: "maderix/ANE"
url: "https://github.com/maderix/ANE"
github_url: "https://github.com/maderix/ANE"
stars: 6151
language: "Objective-C"
layout: repo
tags:
  - "Apple Silicon"
  - "Deep Learning"
  - "Reverse Engineering"
  - "Systems Programming"
  - "AI Research"
  - "High Performance Computing"
---

## What it is

ANE Training is a ground-breaking research project that bypasses Apple's 'inference-only' restriction on the Neural Engine. By reverse-engineering internal private APIs (_ANEClient, _ANECompiler), it enables forward and backward passes to run directly on the ANE hardware. It achieves significant speedups for small-to-mid-sized models (like Stories110M) compared to CPU, reaching peak throughputs of 18+ TFLOPS.

## Problems solved

- Artificial hardware restrictions: Unlocks the training potential of the ANE, which Apple officially restricts to inference.
- High power consumption: Demonstrates the ANE's extreme energy efficiency for compute compared to GPU/CPU.
- Model deployment bottlenecks: Provides a pathway for on-device learning on Apple Silicon that doesn't compete with GPU resources.
- Lack of ANE documentation: Serves as a deep technical reference for MIL (Model Intermediate Language) and shared SRAM behavior.

## How to get started

This is a research PoC for developers on macOS 15+. Use the provided `Makefile` to build the training loop for specific models (e.g., `make MODEL=stories110m`). It requires no external dependencies beyond system frameworks. Developers can explore `api_exploration.m` to see how the private ANE APIs are invoked via `objc_msgSend`.
