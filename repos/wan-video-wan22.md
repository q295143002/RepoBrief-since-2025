---
title: "Wan-Video/Wan2.2"
repo_name: "Wan-Video/Wan2.2"
url: "https://github.com/Wan-Video/Wan2.2"
github_url: "https://github.com/Wan-Video/Wan2.2"
stars: 14617
language: "Python"
layout: repo
tags:
  - "Video Generation"
  - "MoE"
  - "Alibaba AI"
  - "Cinematic AI"
  - "Open Source"
  - "Diffusion"
  - "Generative Video"
---

## What it is

The successor to Wan2.1, featuring a Mixture-of-Experts (MoE) architecture for highly efficient and cinematic video generation.

## Problems solved

- Extreme VRAM consumption of large dense transformer models for video
- Motion artifacts and lack of cinematic detail in early open models
- Inefficient parameter scaling in video diffusion backbones

## How to get started

Download MoE weights and run the updated inference scripts. Ensure your hardware supports the MoE routing logic via the latest Wan2.2 suite.

## Detailed report

### 1. Positioning
Wan2.2 is Alibaba's advanced open-weight video model, utilizing Mixture-of-Experts (MoE) for high-end creative workflows and research.

### 2. Pain Points & Advantages
Uses MoE to radically increase parameter count and quality while keeping active VRAM manageable. Achieves higher cinematic detail and motion complexity than its predecessor.

### 3. Technical Architecture
Replaces dense layers with sparse MoE blocks in the diffusion backbone, specializing experts for visual fidelity and spatiotemporal motion.

### 4. Core Implementation
Complex token routing during diffusion, with hybrid text-to-video (TI2V) conditioning algorithms for professional cinematic output.

### 5. Code Organization
Updated inference utilities optimized for MoE checkpoint handling across various consumer GPU architectures.

### 6. Quick Start Suggestion
Run the MoE specific `generate.py` script to see a noticeable jump in motion fluidness and texture detail compared to 2.1 base models.

### 7. Summary
Wan2.2 pushes open-source video AI into the MoE era, reaching levels of motion complexity previously only seen in proprietary cloud models.
