---
title: "HKUDS/DeepCode"
repo_name: "HKUDS/DeepCode"
url: "https://github.com/HKUDS/DeepCode"
github_url: "https://github.com/HKUDS/DeepCode"
stars: 14865
language: "Python"
layout: repo
tags:
  - "Multi-Agent"
  - "Software Engineering"
  - "Code Generation"
  - "HKUDS"
  - "Auto-Programming"
  - "QA Automation"
  - "Sandboxing"
---

## What it is

A sophisticated multi-agent AI system for automating large-scale software generation and implementation tasks.

## Problems solved

- Failure of single-prompt LLMs on complex, multi-file codebases
- Gap between theoretical research papers and functional implementations
- Lack of automated QA loops in generated software projects

## How to get started

Clone the repo and configure your `.env` keys. Use scripts like `paper2code` to translate scientific papers into functional software repositories.

## Detailed report

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
