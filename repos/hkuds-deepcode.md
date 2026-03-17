---
id: 983246568
repo_name: "HKUDS/DeepCode"
url: "https://github.com/HKUDS/DeepCode"
stars: 14865
language: "Python"
tags: ["Multi-Agent","Software Engineering","Code Generation","HKUDS","Auto-Programming","QA Automation","Sandboxing"]
original_description: "DeepCode: An AI-powered platform for automating code generation and implementation tasks."
english_summary: "A sophisticated multi-agent AI system for automating large-scale software generation and implementation tasks."
chinese_summary: null
problems_solved: "- Failure of single-prompt LLMs on complex, multi-file codebases\n- Gap between theoretical research papers and functional implementations\n- Lack of automated QA loops in generated software projects"
how_to_use: "Clone the repo and configure your `.env` keys. Use scripts like `paper2code` to translate scientific papers into functional software repositories."
sync_at: "2026-03-17T12:09:44.212Z"
---

# HKUDS/DeepCode

### 1. Positioning
DeepCode by HKUDS is an advanced multi-agent software engineering platform acting as a virtual team for generating tested repositories from high-level text.

### 2. Pain Points & Advantages
Goes beyond autocomplete to handle full-project implementation. Uses specialized agents (architects, coders, testers) for a robust and verified software output.

### 3. Technical Architecture
Distributed multi-agent system with sandboxed execution for real-time testing and recursive self-correction during the engineering phase.

### 4. Core Implementation
'Paper2Code' parses PDFs for mechanics and implementation. 'Text2Web' generates reactive frontends. Includes an automated self-correcting QA pipeline.

### 5. Code Organization
Modular architecture isolating task domains (Web, Backend, Research) with unified communication buses and sandboxing utilities.

### 6. Quick Start Suggestion
Run with Docker enabled to provide the agents with a sandbox, and watch them build a backend API including unit tests from a one-paragraph prompt.

### 7. Summary
A premier open-source reference for multi-agent engineering, proving that specialized agent roles and QA loops are the key to building complex AI-native software.
