---
id: 969010919
repo_name: "nari-labs/dia"
url: "https://github.com/nari-labs/dia"
stars: 19173
language: "Python"
tags: ["TTS","Generative Audio","Dialogue Systems","AI Voice","Nari-Labs","Multi-Speaker","Speech Synthesis"]
original_description: "DIA: A TTS model capable of generating ultra-realistic dialogue with native emotional pacing in one pass."
english_summary: "Nari-Labs' state-of-the-art TTS model for generating high-fidelity, emotionally-aware dialogues."
chinese_summary: null
problems_solved: "- The 'Robotic Turn-Taking' effect in AI dialogues (lack of natural interruptions and breath sounds)\n- Difficulty in maintaining a consistent 'Vocal Identity' across a long multi-way conversation\n- High computational costs of generating high-resolution audio for long interactions"
how_to_use: "Clone the repo and install dependencies. Generate a conversation by passing a text script to `generate_conv.py`: `python generate_conv.py --script input.txt`."
sync_at: "2026-03-17T12:09:44.212Z"
---

# nari-labs/dia

### 1. Positioning
DIA (Dialogue Inference Architecture) is a specialized TTS model from Nari-Labs. It models the subtle pauses, overlaps, and emotional shifts required for realistic long-form dialogue between multiple speakers.

### 2. Pain Points & Advantages
Eliminates 'dead air' between agent turns, making interactions feel fluid and empathetic. Features 'One-Pass Generation'—predicting acoustic features for all speakers simultaneously to ensure timing coherence.

### 3. Technical Architecture
PyTorch-based with a Transformer-XL backbone for long-context audio reasoning. Adopts a 'Multi-Stream' approach where each speaker has a dedicated neural stream.

### 4. Core Implementation
`src/inference/dialogue_manager.py` handles the timing and overlap of speech fragments. Implements 'Paralinguistic Prediction'—generating non-verbal cues like laughter or sighs based on context.

### 5. Code Organization
`/models/dia_v1` contains the core multi-speaker architecture, while `/scripts` converts screenplays into model-ready metadata.

### 6. Quick Start Suggestion
Listen to samples in the `audio/` directory; pay attention to 'Interruptive Speech' to see how the model manages realistic conversational overlaps.

### 7. Summary
The 'Cinema Engine' for AI speech. It represents the state-of-the-art in shift from single-sentence generation to globally-coherent multi-turn voice interaction.
