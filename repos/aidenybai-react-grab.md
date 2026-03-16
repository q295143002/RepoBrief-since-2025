---
title: "aidenybai/react-grab"
repo_name: "aidenybai/react-grab"
url: "https://github.com/aidenybai/react-grab"
github_url: "https://github.com/aidenybai/react-grab"
stars: 6507
language: "TypeScript"
layout: repo
tags:
  - "React"
  - "Developer-Tool"
  - "AI-Coding"
  - "Claude-Code"
  - "Cursor"
  - "Debug"
  - "Open-Source"
---

## What it is

react-grab is a lightweight JavaScript library that adds an element inspector to React apps in development mode. Hovering over any element and pressing ⌘C/Ctrl+C copies the element's full context (React component name, source file path + line number, HTML) to the clipboard, ready to paste into Claude Code, Cursor, or any AI coding assistant.

## Problems solved

- Providing precise context to AI coding agents requires manually navigating file trees and copy-pasting code. react-grab eliminates this friction by making any rendered UI element self-describing — one hotkey gives the agent exactly the right file
- component
- and HTML to work with
- reducing agent iterations significantly.

## How to get started

Init: `npx -y grab@latest init` in project root. MCP: `npx -y grab@latest add mcp`. Usage: hover element, press ⌘C (Mac) or Ctrl+C. For Next.js App Router, add `<Script src='//unpkg.com/react-grab/...' strategy='beforeInteractive'/>` in layout. Plugin API: `registerPlugin({ hooks: { onElementSelect } })`. Disable: set `window.__REACT_GRAB_DISABLED__ = true`.
