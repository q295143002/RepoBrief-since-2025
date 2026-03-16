---
title: "SparkAudio/Spark-TTS"
repo_name: "SparkAudio/Spark-TTS"
url: "https://github.com/SparkAudio/Spark-TTS"
github_url: "https://github.com/SparkAudio/Spark-TTS"
stars: 10949
language: "Python"
layout: repo
tags:
  - "AI"
  - "TTS"
  - "Text-to-Speech"
  - "Voice Cloning"
  - "LLM"
---

## What it is

Spark-TTS is a highly efficient text-to-speech system relying on single-stream decoupled tokens generated entirely by the Qwen2.5 LLM, optimizing out secondary flow models.

## Problems solved

- By directly mapping text to single-stream decoupled speech tokens instead of utilizing separate acoustic/flow-matching models, it heavily decreases computational overhead. It achieves robust zero-shot cross-lingual cloning (English/Chinese) and granular controllable generation directly via the LLM.

## How to get started

Clone the repo and install dependencies: `conda create -n sparktts python=3.12` and `pip install -r requirements.txt`. Download the pretrained model using Hugging Face CLI. Run inference: `python -m cli.inference --text "text to synthesis." --device 0 --save_dir "path/to/save/audio" --model_dir pretrained_models/Spark-TTS-0.5B`.
