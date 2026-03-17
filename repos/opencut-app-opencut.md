---
id: 1006414368
repo_name: "OpenCut-app/OpenCut"
url: "https://github.com/OpenCut-app/OpenCut"
stars: 46530
language: "TypeScript"
tags: ["Video Editing","Whisper ASR","FFmpeg","AI Creator Tools","Automation","Python","Open Source"]
original_description: "OpenCut is an open-source video editing assistant powered by AI. It focuses on text-based video manipulation, automated subtitling, and sequence generation using natural language."
english_summary: "A natural language-driven AI video editor for automated cutting, captioning, and manipulation."
chinese_summary: null
problems_solved: "- High time consumption and manual effort for rough cutting and subtitle syncing\n- Steep learning curve of professional suites like Premiere Pro for simple editing tasks\n- Difficulty in 'searching' within long video files for specific keywords or moments using text"
how_to_use: "Clone the repo and install dependencies (requires FFmpeg): `pip install -r requirements.txt`. Run using the prompt: `python opencut.py --video input.mp4 --prompt 'Cut out all silence and zoom in on the peaks'.`"
sync_at: "2026-03-17T12:09:44.212Z"
---

# OpenCut-app/OpenCut

### 1. Positioning
OpenCut is an 'AI-First Video Editor.' It brings the power of LLMs to the video timeline, allowing users to edit footage as easily as they edit a document. It targets creators who want to automate the 'boring parts' of video production.

### 2. Pain Points & Advantages
Syncing subtitles and removing dead air (silence) takes hours of manual work. OpenCut automates this perfectly. Its main advantage is its 'Local-First' processing—using Whisper and FFmpeg locally ensures user privacy and zero cloud costs.

### 3. Technical Architecture
A Python-based pipeline that bridges semantic AI (ASR) with binary media processing (FFmpeg). It uses a 'Text-as-Timeline' paradigm where video is manipulated via a generated text transcript.

### 4. Core Implementation
Uses `Faster-Whisper` for high-speed transcription and `MoviePy/FFmpeg` for rendering. The `silence_detector.py` uses wave analysis to create an 'Automated Jumpcut' logic which can condense hours of footage in seconds.

### 5. Code Organization
Structured into `/cli` for the interface and `/engine` for the heavy-lifting ASR and video encoders. Includes a suite of example scripts for common tasks like multi-camera syncing.

### 6. Quick Start Suggestion
Try the `quick_cut` example on a raw vlog. Witness how it automatically creates a tightly-edited, captioned social media clip from raw, unedited footage in one pass.

### 7. Summary
A visionary tool that represents the future of creative labor. By combining accurate speech recognition with hard-core video processing, it enables a new 'low-friction' era for digital storytelling.
