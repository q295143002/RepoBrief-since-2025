---
id: 938453471
repo_name: "SparkAudio/Spark-TTS"
url: "https://github.com/SparkAudio/Spark-TTS"
stars: 10949
language: "Python"
tags: ["AI","TTS","Text-to-Speech","Voice Cloning","LLM"]
original_description: "Spark-TTS: An Efficient LLM-Based Text-to-Speech Model with Single-Stream Decoupled Speech Tokens"
english_summary: "Spark-TTS is a highly efficient text-to-speech system relying on single-stream decoupled tokens generated entirely by the Qwen2.5 LLM, optimizing out secondary flow models."
chinese_summary: null
problems_solved: "- By directly mapping text to single-stream decoupled speech tokens instead of utilizing separate acoustic/flow-matching models, it heavily decreases computational overhead. It achieves robust zero-shot cross-lingual cloning (English/Chinese) and granular controllable generation directly via the LLM."
how_to_use: "Clone the repo and install dependencies: `conda create -n sparktts python=3.12` and `pip install -r requirements.txt`. Download the pretrained model using Hugging Face CLI. Run inference: `python -m cli.inference --text \"text to synthesis.\" --device 0 --save_dir \"path/to/save/audio\" --model_dir pretrained_models/Spark-TTS-0.5B`."
sync_at: "2026-03-17T12:09:44.212Z"
---

# SparkAudio/Spark-TTS

### 1. Positioning
Spark-TTS is positioned as a leading-edge academic and production text-to-speech generative system. It targets users requiring high-efficiency, multi-lingual TTS configurations boasting rapid inference latency with robust zero-shot voice cloning capabilities, ideal for interactive voice products.

### 2. Pain Points & Advantages
Traditional high-quality TTS paradigms (like Auto-Regressive + Flow Matching) suffer from high latency due to their cascading architecture. Spark-TTS eliminates the post-generation acoustic modules, relying purely on Qwen2.5's capacity to synthesize single-stream decoupled audio codes, thereby achieving excellent Real-Time Factors (RTF) of ~0.13 without losing emotion, control, or voice similarities.

### 3. Technical Architecture
Built on PyTorch 2.5+, it fundamentally extends the Qwen2.5 LLM framework. It relies on a unified causal language modeling setup that outputs decoupled discrete speech tokens which are directly converted back to waveforms. Nvidia Triton with TensorRT-LLM bounds are deployed specifically for heavy runtime environments.

### 4. Core Implementation
The execution centers on extracting parameters and zero-shot clues (prompts). It accepts reference text and speech, then auto-regressively decodes targeted tokens. Because it's integrated fully inside the LLM pathway, parameters like gender, speed, or tone are effectively injected simply as prompt embeddings or prefix sequences to the generator.

### 5. Code Organization
The project provides robust scripting for installation (`requirements.txt`, `infer.sh`), WebUI abstractions via Gradio for simple testing (`webui.py`), and a production-grade inference serving stack contained in `runtime/triton_trtllm/` leveraging TensorRT for extreme throughput.

### 6. Quick Start Suggestion
For immediate visualization and testing of its varied virtual speakers and cloning feature, boot the Gradio interface: `python webui.py --device 0`. This will let you drop in WAV targets and type text to verify the zero-shot efficiency promptly.

### 7. Summary
Spark-TTS bridges the gap between massive parameter LLM logic and optimized direct speech generation. Its elimination of the typical acoustic-modeling pipeline significantly minimizes complexity while enabling highly scalable and expressive cross-lingual voice cloning setups.
