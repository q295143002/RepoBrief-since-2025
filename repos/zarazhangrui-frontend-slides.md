---
title: "zarazhangrui/frontend-slides"
repo_name: "zarazhangrui/frontend-slides"
url: "https://github.com/zarazhangrui/frontend-slides"
github_url: "https://github.com/zarazhangrui/frontend-slides"
stars: 9216
language: "CSS"
layout: repo
tags:
  - "Claude Code"
  - "UI"
  - "HTML"
  - "Presentation"
  - "Web Design"
---

## What it is

Frontend Slides is an AI-powered UI skill for Claude Code that generates premium, animation-rich HTML presentations from natural language or existing PowerPoint files.

## Problems solved

- Eliminates the 'CSS struggle' for non-designers creating web content; solves the 'design fatigue' of generic AI slides by using curated style presets; overcomes the fragility of modern web frameworks by producing single
- dependency-free HTML files.

## How to get started

Clone into your Claude Code skills directory: `git clone https://github.com/zarazhangrui/frontend-slides.git ~/.claude/skills/frontend-slides`. In Claude Code, type `/frontend-slides` and provide a prompt or a `.pptx` file path to begin generation.

## Detailed report

### 1. Positioning
Frontend Slides is a 'Vibe Coding' tool for high-stakes presentations. It positions itself as the 'Clean Slate' alternative to bloated presentation software, targeting developers and product managers who want the portability of the web with the punch of high-end motion design.

### 2. Pain Points & Advantages
Most AI-generated sites look 'sloppy' or generic. This skill's advantage is its 'Anti-AI-Slop' philosophy—it uses 12 highly distinctive, hand-crafted visual presets (like 'Neon Cyber' or 'Swiss Modern') instead of letting the LLM guess styles. It also solves 'dependency rot' by bundling everything into a single file that will work in any browser for years.

### 3. Technical Architecture
Architected using 'Progressive Disclosure' for LLMs: a tiny `SKILL.md` map (~180 lines) points to specialized external modules only when needed. It uses a Python-based PPTX extractor and a pure CSS/JS animation engine built on `viewport-base.css` and `html-template.md`.

### 4. Core Implementation
Features a unique 'Visual Style Discovery' loop: the agent generates three distinct visual previews based on the user's intent ('impressed', 'excited', etc.), allowing the user to pick a direction before the full deck is built. It supports complex CSS transitions and 'Pull Quote' animations out of the box.

### 5. Code Organization
Modular and file-based: `STYLE_PRESETS.md` contains the design tokens, `animation-patterns.md` provides the logic, and `scripts/extract-pptx.py` handles the legacy conversion. The output is a self-contained HTML file with no external CDN dependencies.

### 6. Quick Start Suggestion
Invoke `/frontend-slides` and say 'I want to create a pitch deck for my AI startup with a futuristic neon look.' Compare the generated previews and watch as the agent builds a full, browser-based slideshow that looks like it cost thousands in custom dev time.

### 7. Summary
Frontend Slides is a masterclass in 'Agent-First Resource Design'. By providing the LLM with a highly structured toolkit rather than vague instructions, it consistently produces production-grade visual outputs that feel bespoke rather than generated.
