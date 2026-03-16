---
title: "OpenBMB/VoxCPM"
repo_name: "OpenBMB/VoxCPM"
url: "https://github.com/OpenBMB/VoxCPM"
github_url: "https://github.com/OpenBMB/VoxCPM"
stars: 6123
language: "Python"
layout: repo
tags:
  - "TTS"
  - "Voice Cloning"
  - "Speech Synthesis"
  - "Machine Learning"
  - "AI Audio"
  - "Generative AI"
---

## What it is

VoxCPM is an advanced Text-to-Speech (TTS) framework that models speech in a continuous space rather than using discrete tokens. It features 'context-aware' generation, where the AI infers appropriate emotional tone and prosody from the text, and high-fidelity zero-shot voice cloning that requires only a short reference clip. It supports streaming synthesis and is optimized for consumer-grade hardware.

## Problems solved

- Robotic TTS: Replaces discrete tokenization with continuous speech modeling for more natural flow.
- Lack of expressiveness: Automatically adapts speaking style (pacing, rhythm) based on the input text's context.
- Complex voice cloning: Does accurate cloning with minimal data, capturing timbre AND accent/emotion.
- Latency in production: Supports streaming with a Real-Time Factor (RTF) as low as 0.15 on an RTX 4090.

## How to get started

Install via `pip install voxcpm`. Use the `VoxCPM.from_pretrained` method to load models like VoxCPM1.5. Run `model.generate` for non-streaming or `model.generate_streaming` for real-time applications. It supports voice cloning by passing a `prompt_wav_path` of the target speaker. A Gradio-based web UI is also provided for easy experimentation.
