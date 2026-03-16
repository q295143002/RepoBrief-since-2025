---
title: "google-ai-edge/gallery"
repo_name: "google-ai-edge/gallery"
url: "https://github.com/google-ai-edge/gallery"
github_url: "https://github.com/google-ai-edge/gallery"
stars: 15355
language: "Kotlin"
layout: repo
tags:
  - "Edge AI"
  - "Google AI"
  - "Mobile Development"
  - "TensorFlow Lite"
  - "MediaPipe"
  - "On-Device LLM"
  - "Android/iOS"
---

## What it is

An official experimental mobile application by Google showcasing the capabilities of on-device Generative AI.

## Problems solved

- Difficulty in deploying generative models locally on mobile devices
- Privacy concerns associated with cloud-based AI processing
- High latency when running mobile AI tasks over slow networks

## How to get started

Build the Android or iOS projects using Android Studio or Xcode. Deploy to a physical device to test on-device LLM and Vision tasks.

## Detailed report

### 1. Positioning
The Google AI Edge Gallery is a reference implementation showing how to run generative models directly on mobile hardware via MediaPipe and TFLite.

### 2. Pain Points & Advantages
Proves the viability of edge AI, offering offline functionality, zero latency, and total privacy for mobile user data.

### 3. Technical Architecture
Integrates MediaPipe and TensorFlow Lite. Uses NPU/GPU acceleration for real-time inference on both Android and iOS platforms.

### 4. Core Implementation
Features dynamic model loading and UI bindings for multimodal tasks like chat, image processing, and audio analysis.

### 5. Code Organization
Split into native `android/` and `ios/` directories containing the UI and inference bridging logic.

### 6. Quick Start Suggestion
Open the project in your IDE of choice, sync dependencies, and deploy to a phone with an NPU for the best performance benchmark.

### 7. Summary
A foundational reference project for mobile developers looking to transition from cloud-dependent AI to privacy-first edge computing.
