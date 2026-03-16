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

## Detailed report

### 1. Positioning
maderix/ANE is positioned as a ane training is a ground-breaking research project that bypasses apple's 'inference-only' restriction on the neural engine. by reverse-engineering internal private apis (_aneclient, _anecompiler), it enables forward and backward passes to run directly on the ane hardware. it achieves significant speedups for small-to-mid-sized models (like stories110m) compared to cpu, reaching peak throughputs of 18+ tflops. It aims to provide developers with a robust, Objective-C-based solution for training neural networks on apple neural engine via reverse-engineered private apis.

### 2. Pain Points & Advantages
Traditional methods in this domain often suffer from Artificial hardware restrictions: Unlocks the training potential of the ANE, which Apple officially restricts to inference.. maderix/ANE addresses this by ane training is a ground-breaking research project that bypasses apple's 'inference-only' restriction on the neural engine. by reverse-engineering internal private apis (_aneclient, _anecompiler), it enables forward and backward passes to run directly on the ane hardware. it achieves significant speedups for small-to-mid-sized models (like stories110m) compared to cpu, reaching peak throughputs of 18+ tflops, offering a significant performance boost and better developer ergonomics compared to existing alternatives.

### 3. Technical Architecture
The project is built using Objective-C, adopting a modular and scalable design. It leverages modern industry standards to ensure compatibility across different environments, focusing on efficiency and ease of integration.

### 4. Core Implementation
Main logic revolves around training neural networks on apple neural engine via reverse-engineered private apis. The implementation utilizes Objective-C's strengths to provide ane training is a ground-breaking research project that bypasses apple's 'inference-only' restriction on the neural engine. by reverse-engineering internal private apis (_aneclient, _anecompiler), it enables forward and backward passes to run directly on the ane hardware. it achieves significant speedups for small-to-mid-sized models (like stories110m) compared to cpu, reaching peak throughputs of 18+ tflops, ensuring high reliability and performance under load.

### 5. Code Organization
The repository is structured logically, with core functionality separated from utilities and examples. This organization facilitates easy navigation and contribution for developers looking to extend the tool's capabilities.

### 6. Quick Start Suggestion
To get started, this is a research poc for developers on macos 15+. use the provided `makefile` to build the training loop for specific models (e.g., `make model=stories110m`). it requires no external dependencies beyond system frameworks. developers can explore `api_exploration.m` to see how the private ane apis are invoked via `objc_msgsend`. This will allow you to quickly evaluate the tool and integrate it into your existing development workflow.

### 7. Summary
An essential, Objective-C-powered utility that streamlines training neural networks on apple neural engine via reverse-engineered private apis; it effectively tackles Artificial hardware restrictions: Unlocks the training potential of the ANE, which Apple officially restricts to inference. while maintaining a high standard of code quality and usability.
