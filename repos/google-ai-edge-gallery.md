---
id: 958136139
repo_name: "google-ai-edge/gallery"
url: "https://github.com/google-ai-edge/gallery"
stars: 15355
language: "Kotlin"
tags: ["Edge AI","Google AI","Mobile Development","TensorFlow Lite","MediaPipe","On-Device LLM","Android/iOS"]
original_description: "An experimental Android/iOS app showcasing on-device Generative AI."
english_summary: "An official experimental mobile application by Google showcasing the capabilities of on-device Generative AI."
chinese_summary: null
problems_solved: "- Difficulty in deploying generative models locally on mobile devices\n- Privacy concerns associated with cloud-based AI processing\n- High latency when running mobile AI tasks over slow networks"
how_to_use: "Build the Android or iOS projects using Android Studio or Xcode. Deploy to a physical device to test on-device LLM and Vision tasks."
sync_at: "2026-03-17T12:09:44.212Z"
---

# google-ai-edge/gallery

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
