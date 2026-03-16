---
title: "xinnan-tech/xiaozhi-esp32-server"
repo_name: "xinnan-tech/xiaozhi-esp32-server"
url: "https://github.com/xinnan-tech/xiaozhi-esp32-server"
github_url: "https://github.com/xinnan-tech/xiaozhi-esp32-server"
stars: 8864
language: "JavaScript"
layout: repo
tags:
  - "IoT"
  - "ESP32"
  - "AI Assistant"
  - "ASR"
  - "TTS"
  - "Python"
---

## What it is

Xiaozhi-esp32-server is a comprehensive backend for open-source AI hardware, supporting diverse communication protocols and integrating LLM, TTS, ASR, and RAG capabilities.

## Problems solved

- Provides a ready-to-use backend for custom AI assistant hardware; solves the complexity of bridging low-power ESP32 chips with high-level AI APIs; manages multi-user voice registration and real-time interaction latency.

## How to get started

Deploy via Docker for the simplest setup: `docker compose up -d`. Configure your LLM and ASR/TTS keys in the provided config files. Access the web dashboard at `http://localhost:3000` to manage your devices and users.

## Detailed report

### 1. Positioning
Xiaozhi-esp32-server is the 'Intelligence Hub' for the Xiaozhi AI hardware ecosystem. It targets makers and hardware enthusiasts (especially those from South China University of Technology) who are building custom, voice-controlled physical AI agents.

### 2. Pain Points & Advantages
Building a low-latency voice assistant from scratch is difficult due to ASR/TTS/LLM orchestration. The advantage of this server is its 'Multi-Protocol Flexibility'—it supports MQTT+UDP for efficient hardware control and WebSocket for real-time audio streams. It offers both 'Entry-Level Free' and 'Demonstration-Grade Streaming' configurations.

### 3. Technical Architecture
A full-stack application with a Python backend and Vue3 frontend. It uses a modular architecture where ASR, LLM, TTS, VAD, and Memory are pluggable components. It integrates specialized tools like FunASR for local speech recognition and RAGFlow for knowledge base support.

### 4. Core Implementation
Features a 'Voiceprint Recognition' system for multi-speaker identification and a 'Proactive Interaction' mechanism using MCP (Model Context Protocol). It supports 'Stateful Memory' (local or mem0) to ensure the AI hardware has long-term context during conversations.

### 5. Code Organization
The repository is structured with `xiaozhi-server/` (Python logic), `docs/` (comprehensive guides), and a web dashboard for administrative tasks. It provides distinct Docker configurations for 'Simplest' vs 'Full-Module' installations to suit different hardware constraints.

### 6. Quick Start Suggestion
Use the Docker version for quick testing. Once running, go to the 'Test Page' (`test_page.html`) in your browser to verify audio interaction before burning the firmware to your ESP32 device. Check the performance reports to compare different ASR/TTS provider speeds.

### 7. Summary
Xiaozhi-esp32-server is a mature and robust solution for anyone building DIY AI hardware. By open-sourcing the entire backend pipeline, it empowers creators to build private, customized, and responsive physical AI assistants.
