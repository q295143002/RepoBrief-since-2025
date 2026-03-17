---
id: 1075431749
repo_name: "karpathy/nanochat"
url: "https://github.com/karpathy/nanochat"
stars: 47610
language: "Python"
tags: ["Karpathy","LLM Reference","FastAPI","Claude API","Tool Calling","Educational","Minimalism"]
original_description: "Nanochat by Karpathy: A minimal, single-file AI chat implementation demonstrating Claude API capabilities. Focuses on speed and readability for educational purposes."
english_summary: "Andrej Karpathy's minimal, single-file reference for modern AI chat and tool-calling implementation."
chinese_summary: null
problems_solved: "- Overwhelming boilerplate and complexity in modern AI web frameworks\n- Opaque architectures in industrial AI applications that are hard for beginners to learn from\n- Requirement for a clean, zero-dependency baseline for researching tool-calling behavior"
how_to_use: "Clone the repo and install the minimal stack: `pip install fastapi uvicorn anthropic`. Run with `uvicorn app:app` and access the local web interface."
sync_at: "2026-03-17T12:09:44.212Z"
---

# karpathy/nanochat

### 1. Positioning
Nanochat is an 'Atomic Reference' for AI developers. Created by Andrej Karpathy (ex-Tesla AI), it provides the minimum viable code required to build a modern, high-performance AI chat interface with streaming and tool calling.

### 2. Pain Points & Advantages
Modern frameworks often hide the actual API mechanics. Nanochat solves this by using almost zero dependencies. Its main advantage is 100% transparency—you can read the entire product's logic in the time it takes to drink a cup of coffee.

### 3. Technical Architecture
A 'Vanilla First' stack: Python + FastAPI for the backend and pure HTML/JS + Tailwind for the frontend. No React, no build steps, just the core logic of communicating with the Anthropic API.

### 4. Core Implementation
The `app.py` file contains the entire application. It demonstrates how to handle SSE (Server-Sent Events) for streaming and, crucially, how to implement a multi-step 'Dispatcher' for model tools (e.g., calculator, search).

### 5. Code Organization
Extreme simplicity: `app.py` handles the server, AI, and tool logic, while `index.html` provides the entire UI. This 'single-file' approach is a masterclass in clarity.

### 6. Quick Start Suggestion
Read `app.py` from top to bottom. It is essentially a piece of 'living documentation' on how to implement the tool-calling loop that powers modern agents like Claude Code.

### 7. Summary
A minimalist gem that proves that building sophisticated AI tools doesn't require complex frameworks, just a deep understanding of the underlying API protocols.
