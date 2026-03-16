---
title: "ahujasid/blender-mcp"
repo_name: "ahujasid/blender-mcp"
url: "https://github.com/ahujasid/blender-mcp"
github_url: "https://github.com/ahujasid/blender-mcp"
stars: 17696
language: "Python"
layout: repo
tags:
  - "MCP"
  - "Blender"
  - "3D Modeling"
  - "Creative AI"
  - "Python API"
  - "Design Automation"
  - "Graphics"
---

## What it is

An MCP server enabling AI agents to design, render, and manipulate 3D scenes in Blender via natural language.

## Problems solved

- Steep learning curve for Blender's complex UI and Python API
- Inability of agents to 'See' or 'Edit' 3D objects in text-based sessions
- Workflow disconnection between creative briefs and 3D execution

## How to get started

Run with npx: `npx -y @ahujasid/blender-mcp`. Connect your MCP-compatible agent (e.g. Claude) and command it to create or modify 3D scenes.

## Detailed report

### 1. Positioning
Blender-MCP is a bridge between agents and 3D creation. It exposes Blender's internal state via MCP, allowing models to write and run BPY (Blender Python) code to generate models and adjust scenes.

### 2. Pain Points & Advantages
Eliminates API look-up fatigue for artists. Unlike simple generation, it is 'Context-Aware'—agents query the current scene to see existing objects before suggesting changes.

### 3. Technical Architecture
Python (Blender side) and TypeScript (MCP side) based. Adopts an RPC model where natural language is translated into atomic Blender commands.

### 4. Core Implementation
`blender_bridge.py` manages secure script execution inside Blender. Features 'Live Viewport Feedback' where the UI updates instantly as the agent proposes edits.

### 5. Code Organization
`/tools` defines mesh creation and rendering actions, while `/server` implements the MCP protocol and connection management.

### 6. Quick Start Suggestion
Try: "Setup professional three-point lighting for the current object and render a high-res PNG" to see the full potential of agentic 3D workflows.

### 7. Summary
The 'Creative Co-pilot' for 3D. It successfully transforms a massive desktop application into a semantic set of tools addressable by AI agents.
