---
title: "microsoft/VibeVoice"
repo_name: "microsoft/VibeVoice"
url: "https://github.com/microsoft/VibeVoice"
github_url: "https://github.com/microsoft/VibeVoice"
stars: 23725
language: "Python"
layout: repo
tags:
  - "VibeVoice"
  - "Speech Synthesis"
  - "Microsoft Research"
  - "Emotion AI"
  - "Voice Cloning"
  - "PyTorch"
  - "Audio AI"
---

## What it is

Microsoft's research project for high-fidelity, emotion-aware AI voice synthesis for agents.

## Problems solved

- The 'Uncanny Valley' effect in AI assistants caused by robotic or monotone voice delivery.
- Lack of 'Emotional Context' in AI responses (e.g., soundly happy when giving good news).
- Difficulty in achieving zero-shot 'Voice Cloning' that preserves subtle human inflections.

## How to get started

git clone https://github.com/microsoft/VibeVoice
pip install -e .
python synth.py --text 'Hello, I am your research assistant' --emotion 'excited'
