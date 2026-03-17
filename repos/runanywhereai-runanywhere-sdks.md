---
id: 1023959202
repo_name: "RunanywhereAI/runanywhere-sdks"
url: "https://github.com/RunanywhereAI/runanywhere-sdks"
stars: 10246
language: "C++"
tags: ["On-device AI","SDK","iOS","Android","Privacy"]
original_description: "On-device AI for every platform. Run LLMs, speech-to-text, and text-to-speech locally — private, offline, fast. SDKs for Swift, Kotlin, Web, React Native, and Flutter."
english_summary: "RunAnywhere provides high-performance, cross-platform SDKs for executing LLMs, STT, and TTS entirely on-device, prioritizing privacy and speed."
chinese_summary: null
problems_solved: "- Eliminates latency and privacy concerns of cloud-based AI by keeping inference 100% local; provides a unified API across 5 major platforms (mobile\n- web\n- desktop); handles the complexity of model downloading\n- progress tracking\n- and hardware acceleration (Metal\n- NPU\n- WebGPU) transparently."
how_to_use: "Varies by platform. For Swift (iOS/macOS), add the SPM package, call `try RunAnywhere.initialize()`, download/load a model like `smollm2-360m`, and generate text with `RunAnywhere.chat(\"prompt\")`. Similar flows exist for Kotlin via Gradle and Web via npm."
sync_at: "2026-03-17T12:09:44.212Z"
---

# RunanywhereAI/runanywhere-sdks

### 1. Positioning
RunAnywhere is a developer-first tool suite targeting mobile and web engineers who want to embed privacy-conscious AI features into their applications. It serves as a comprehensive local alternative to cloud-only services like OpenAI or ElevenLabs.

### 2. Pain Points & Advantages
Integrating local AI is traditionally difficult due to platform-specific inference engines and model management logic. RunAnywhere provides a 'batteries-included' solution with a common C++ core and native wrappers. Advantages include 100% offline functionality, zero per-token costs, and built-in support for voice assistant pipelines (STT -> LLM -> TTS).

### 3. Technical Architecture
Relies on a shared C++ core (built on llama.cpp and ONNX Runtime) with native bindings for Swift (iOS), Kotlin (Android), WASM (Web), and cross-platform frameworks (React Native, Flutter). It leverages hardware acceleration like Apple's MLX/Metal and Android NPUs where available.

### 4. Core Implementation
Supports GGUF models for LLMs and quantized ONNX models for Whisper (STT) and Piper (TTS). It includes high-level features like structured JSON output, tool-calling support, and a pre-configured 'Voice Assistant Pipeline' that handles audio buffers and voice activity detection natively.

### 5. Code Organization
Organized into `sdk/` (platform-specific implementations), `examples/` (full-featured demo apps), and a `Playground/` directory containing advanced autonomous agents like an on-device Android 'Use Agent' and a local browser automation extension.

### 6. Quick Start Suggestion
Download the 'RunAnywhere' app on the iOS App Store or Google Play to see the performance of on-device models immediately. Developers should check the `swift-starter-app` in the Playground for a clean reference of a voice-enabled iOS application.

### 7. Summary
RunAnywhere is the most comprehensive toolset for cross-platform on-device AI. By unifying the fragmented landscape of mobile and web LLM inference into a single, reliable SDK, it enables a new generation of truly private and responsive AI-powered applications.
