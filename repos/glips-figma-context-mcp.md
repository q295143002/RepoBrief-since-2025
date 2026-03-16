---
title: "GLips/Figma-Context-MCP"
repo_name: "GLips/Figma-Context-MCP"
url: "https://github.com/GLips/Figma-Context-MCP"
github_url: "https://github.com/GLips/Figma-Context-MCP"
stars: 13652
language: "TypeScript"
layout: repo
tags:
  - "Figma"
  - "MCP"
  - "AI Coding"
  - "UI Generation"
---

## What it is

An MCP server that provides AI coding assistants like Cursor direct access to Figma design metadata to generate accurate UI code.

## Problems solved

- Eliminates the inaccuracy of pasting design screenshots into AI chats by directly feeding structured layout and style data from Figma APIs via MCP.

## How to get started

Configure your IDE's MCP settings to run `npx -y figma-developer-mcp --figma-api-key=YOUR-KEY --stdio`. Paste a Figma URL in your IDE's agent chat and ask it to implement the design.
