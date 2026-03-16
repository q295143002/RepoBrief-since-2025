---
title: "RunanywhereAI/runanywhere-sdks"
repo_name: "RunanywhereAI/runanywhere-sdks"
url: "https://github.com/RunanywhereAI/runanywhere-sdks"
github_url: "https://github.com/RunanywhereAI/runanywhere-sdks"
stars: 10246
language: "C++"
layout: repo
tags:
  - "On-device AI"
  - "SDK"
  - "iOS"
  - "Android"
  - "Privacy"
---

## What it is

RunAnywhere provides high-performance, cross-platform SDKs for executing LLMs, STT, and TTS entirely on-device, prioritizing privacy and speed.

## Problems solved

- Eliminates latency and privacy concerns of cloud-based AI by keeping inference 100% local; provides a unified API across 5 major platforms (mobile
- web
- desktop); handles the complexity of model downloading
- progress tracking
- and hardware acceleration (Metal
- NPU
- WebGPU) transparently.

## How to get started

Varies by platform. For Swift (iOS/macOS), add the SPM package, call `try RunAnywhere.initialize()`, download/load a model like `smollm2-360m`, and generate text with `RunAnywhere.chat("prompt")`. Similar flows exist for Kotlin via Gradle and Web via npm.
