---
title: "accomplish-ai/accomplish"
repo_name: "accomplish-ai/accomplish"
url: "https://github.com/accomplish-ai/accomplish"
github_url: "https://github.com/accomplish-ai/accomplish"
stars: 9757
language: "TypeScript"
layout: repo
tags:
  - "AI Agent"
  - "Desktop Automation"
  - "Productivity"
  - "Privacy"
  - "Electron"
---

## What it is

Accomplish is a privacy-first, open-source AI desktop agent for macOS and Windows that performs file operations and browser automation using local or cloud LLMs.

## Problems solved

- Provides a user-friendly GUI for 'Computer Use' agents; ensures data privacy by running entirely locally and requiring user approval for every action; eliminates subscriptions by allowing users to bring their own API keys (OpenAI
- Anthropic) or use Ollama (local).

## How to get started

Download the DMG (macOS) or EXE (Windows) from the website. Connect your API key (OpenAI/Anthropic/Google) or point it to your local Ollama instance. Select which folders you want the agent to 'see' and start typing tasks in the chat window.

## Detailed report

### 1. Positioning
Accomplish targets non-technical professionals and privacy-advocates who want the power of an 'AI Agent' without the complexity of a CLI or the privacy risks of cloud-based 'agent services'. It is a user-friendly wrapper around the emerging 'Computer Use' technology.

### 2. Pain Points & Advantages
Most AI tools just 'chat'. Accomplish 'acts'—it can rename 50 files based on content or research a topic in a browser and draft a report. Its biggest advantage is 'Total Control': every action is logged, results are previewed, and nothing happens without a 'Approve' click from the user.

### 3. Technical Architecture
Built as a modern monorepo using Electron (Desktop), React (UI), and TypeScript. It leverages OpenCode (a specialized CLI for agentic execution) as its backend 'worker', spawning it via `node-pty` to handle file and shell operations.

### 4. Core Implementation
Supports an exhaustive list of providers: Anthropic, OpenAI, Gemini, xAI, DeepSeek, and local engines like Ollama and LM Studio. It implements a 'Skill' system where users can save repeatable workflows and an 'Onboarding' flow that guides users through secure API key management.

### 5. Code Organization
Organized into `apps/desktop` (Electron/React frontend) and `packages/shared`. It follows the 'CLAUDE.md' architecture pattern for its internal development, ensuring high code quality and consistency.

### 6. Quick Start Suggestion
Install the app and try a multi-file task: 'Take all photos in this folder, rename them to include the date they were taken, and move them into a new folder called Memories'. Watch the agent plan the steps and wait for your approval before writing a single byte.

### 7. Summary
Accomplish is one of the most polished 'Agent UI' projects available. By combining a premium design with a local-first, 'Bring Your Own Key' model, it offers a practical and secure way for the average user to benefit from the next generation of autonomous AI assistants.
