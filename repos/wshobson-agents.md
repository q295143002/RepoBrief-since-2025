---
title: "wshobson/agents"
repo_name: "wshobson/agents"
url: "https://github.com/wshobson/agents"
github_url: "https://github.com/wshobson/agents"
stars: 31135
language: "Python"
layout: repo
tags:
  - "Voice AI"
  - "Real-time"
  - "Low Latency"
  - "STT"
  - "TTS"
  - "WebSockets"
  - "Conversation Server"
---

## What it is

High-performance AI conversation server supporting real-time text and voice interaction.

## Problems solved

- Frustrating latency in AI voice conversations due to separate STT/LLM/TTS roundtrips.
- Inconsistency in voice output emotion and pacing.
- Complexity in managing multi-modal session state for real-time applications.

## How to get started

git clone https://github.com/wshobson/agents
npm install
npm run dev:voice

## Detailed report

### 1. Positioning
Agents is a real-time conversation orchestration server. It integrates STT (Speech-to-Text), LLM reasoning, and TTS (Text-to-Speech) into a single, low-latency pipeline, allowing for human-like voice interactions without the typical 'wait-response' delay.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Solves the 'latency gap' in AI assistants, making them viable for real-time customer support and interactive gaming.
- **Differentiation**: Native support for 'Streaming VAD' (Voice Activity Detection), allowing the agent to listen and interrupt exactly like a human would.

### 3. Technical Architecture
- **Tech Stack**: Node.js / WebSockets, integrated with deepgram/elevenlabs.
- **Design Strategy**: Uses a 'Duplex Pipeline' where STT and TTS buffers overlap with LLM generation to eliminate serial delay.

### 4. Core Implementation
- **Logic Layer**: `src/server/vibe_engine.ts` synchronizes the audio-to-text-to-audio flow.
- **Innovation**: Implements 'Pre-emptive Generation'—it starts generating TTS audio based on the most likely first words of the LLM response before the full sentence is done.

### 5. Code Organization
- `/stt`: Real-time audio stream handlers.
- `/tts`: Audio synthesis and playback synchronization.
- `/vibe`: Emotional tone and inflection logic.

### 6. Quick Start Suggestion
Examine `src/examples/voice-assistant.ts` to understand how the websocket stream manages full-duplex audio.

### 7. Summary
**Essence**: A 'real-time brain' for voice AI. Key learning is the overlap of I/O operations to achieve sub-500ms voice latency.
