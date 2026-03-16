---
title: "HKUDS/CLI-Anything"
repo_name: "HKUDS/CLI-Anything"
url: "https://github.com/HKUDS/CLI-Anything"
github_url: "https://github.com/HKUDS/CLI-Anything"
stars: 10191
language: "Python"
layout: repo
tags:
  - "AI Agent"
  - "CLI"
  - "Agent-Native"
  - "Automation"
---

## What it is

CLI-Anything is an automated tool that transforms any software repository into an agent-controllable CLI, enabling AI models to operate professional software natively.

## Problems solved

- Fixes the 'AI-Software Gap' where agents can reason but can't use professional tools; replaces brittle GUI automation with deterministic
- self-describing
- and structured (JSON) CLI interfaces; automates the expensive process of manual tool integration via a 7-phase generation pipeline.

## How to get started

In Claude Code, add the marketplace `HKUDS/CLI-Anything` and install `/plugin install cli-anything`. Then run `/cli-anything ./your-repo` to generate a full harness. Access the new CLI via `cli-anything-{software} --help`.

## Detailed report

### 1. Positioning
Developed by HKUDS, CLI-Anything targets agent developers and researchers who want to unlock complex software (e.g., Blender, GIMP, LibreOffice) for their autonomous agents. It acts as a bridge between human-centric software and agent-native execution environments.

### 2. Pain Points & Advantages
Agents currently rely on restricted APIs or fragile UI-clicking. CLI-Anything solves this by synthesizing an 'Agent Harness'—a production-grade Python CLI that wraps the software's backend. Advantages include zero-screenshot reliability, structured JSON output for easy agent parsing, and a complete REPL mode for interactive sessions.

### 3. Technical Architecture
The system operates as a Claude Code plugin or OpenCode command set. It follows a mandatory 7-phase pipeline: Analyze, Design, Implement, Plan Tests, Write Tests, Document, and Publish. The generated harnesses use Click/Python and call the original software's binary or API (e.g., `bpy` for Blender) directly.

### 4. Core Implementation
The core 'Harness' logic focuses on authentic software integration. It doesn't just mock features; it generates valid project files (SVG, BLEND, ODF) and invokes the software's native renderer or headless engine. It includes a unified 'ReplSkin' for consistent interactive agent experiences across all generated tools.

### 5. Code Organization
The repo contains the plugin/command source in `cli-anything-plugin/` and `opencode-commands/`, alongside 11 'Demonstration' harnesses in separate folders (GIMP, Blender, etc.), each containing hundreds of passing unit and E2E tests.

### 6. Quick Start Suggestion
Use Claude Code to install the plugin and try building a harness for a simple CLI or small open-source project. Run `/cli-anything-list` to see the 11 pre-built examples like `cli-anything-libreoffice` to understand the depth of control provided.

### 7. Summary
CLI-Anything is a visionary project that prepares the world's software for an agent-centric future. By automating the creation of high-quality, battle-tested CLI interfaces, it allows AI agents to cross the 'chasm' from simple text generators to functional operators of complex professional software.
