---
id: 1025856648
repo_name: "wshobson/agents"
url: "https://github.com/wshobson/agents"
stars: 31135
language: "Python"
tags: ["Voice AI","Real-time","Low Latency","STT","TTS","WebSockets","Conversation Server"]
original_description: "Agents: A conversation server that supports text and real-time voice (TTS/STT). Aimed at reducing latency for AI voice conversations."
english_summary: "High-performance AI conversation server supporting real-time text and voice interaction."
chinese_summary: null
problems_solved: "- Frustrating latency in AI voice conversations due to separate STT/LLM/TTS roundtrips.\n- Inconsistency in voice output emotion and pacing.\n- Complexity in managing multi-modal session state for real-time applications."
how_to_use: "git clone https://github.com/wshobson/agents\nnpm install\nnpm run dev:voice"
sync_at: "2026-03-17T12:09:44.212Z"
---

# wshobson/agents

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
