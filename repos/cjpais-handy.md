---
title: "cjpais/Handy"
repo_name: "cjpais/Handy"
url: "https://github.com/cjpais/Handy"
github_url: "https://github.com/cjpais/Handy"
stars: 17512
language: "Rust"
layout: repo
tags:
  - "macOS"
  - "Productivity"
  - "Utility"
  - "Swift"
  - "Rust"
  - "CLI"
  - "Workflow Enhancement"
---

## What it is

A versatile macOS productivity utility that puts a suite of AI-powered commands and tools at your fingertips.

## Problems solved

- Time wasted copy-pasting text between apps and browser AI chats
- Lack of instant access for small tasks like formatting or summarizing
- Cognitive load in managing dozens of custom shell aliases for AI scripts

## How to get started

Install via Homebrew: `brew install cjpais/handy`. Use global shortcuts or the menu bar icon to trigger AI actions on selected text.

## Detailed report

### 1. Positioning
Handy is a 'Macro-Level' AI companion for macOS. It provides pre-built actions ('Rewrite', 'Extract Links', etc.) triggered via shortcuts on any selected text, acting as a productivity swiss army knife.

### 2. Pain Points & Advantages
Fixes the 'Context Switch' problem—get LLM benefits without leaving your active app. Native integration allows Handy to send outputs back into your active text field instantly.

### 3. Technical Architecture
Swift (macOS UI), Rust (logic), and OpenAI/Anthropic APIs. Adopts a command-centric architecture where users add custom scripts via JSON prompts.

### 4. Core Implementation
`text_processor.rs` handles clipboard capture and LLM formatting. Features 'Interactive Shell Assistant' that detects terminal syntax errors and offers ready-to-run fixes.

### 5. Code Organization
`/macos-app` houses the GUI and shortcuts, while `/core-cli` is the cross-platform engine for API management.

### 6. Quick Start Suggestion
Pin your most-used commands (like 'Summarize') to the top of the menu to radically speed up daily information processing.

### 7. Summary
The 'AI Speed-Dial' for macOS. It demonstrates how near-zero friction can transform LLMs from occasional tools into fundamental parts of the desktop workflow.
