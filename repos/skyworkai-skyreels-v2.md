---
title: "SkyworkAI/SkyReels-V2"
repo_name: "SkyworkAI/SkyReels-V2"
url: "https://github.com/SkyworkAI/SkyReels-V2"
github_url: "https://github.com/SkyworkAI/SkyReels-V2"
stars: 6547
language: "Python"
layout: repo
tags:
  - "Video-Generation"
  - "Diffusion-Model"
  - "AI-Video"
  - "Text-to-Video"
  - "Research"
  - "Python"
  - "Open-Source"
---

## What it is

SkyReels-V2 is an open-source video generation model series from Skywork combining Multi-modal LLMs, Reinforcement Learning, and a novel Diffusion Forcing Transformer for unbounded-length video generation (T2V, I2V, video extension, start/end frame control). Available in 1.3B and 14B parameter scales at 540P/720P resolution. Integrated into HuggingFace Diffusers.

## Problems solved

- Video generation models were limited to 5–10 second clips with quality vs. duration trade-offs
- poor motion quality for large deformable motions
- and inability to generate professional film-style content with cinematographic grammar. SkyReels-V2 breaks the duration barrier with autoregressive generation while using RL-trained motion quality rewards and cinematic-aware video captioning.

## How to get started

Install: `pip install -r requirements.txt`. Download model from HuggingFace: `Skywork/SkyReels-V2-DF-14B-540P`. Run: `python generate_video_df.py --model_id <id> --num_frames 97 --prompt '...'` for synchronous (10s), add `--ar_step 5` for async (30s+). Multi-GPU: `torchrun --nproc_per_node=2`. Diffusers: `SkyReelsV2DiffusionForcingPipeline`.
