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

## Detailed report

### 1. Positioning
aidenybai/react-grab is positioned as a react-grab is a lightweight javascript library that adds an element inspector to react apps in development mode. hovering over any element and pressing ⌘c/ctrl+c copies the element's full context (react component name, source file path + line number, html) to the clipboard, ready to paste into claude code, cursor, or any ai coding assistant. It aims to provide developers with a robust, TypeScript-based solution for select context for coding agents directly from your website.

### 2. Pain Points & Advantages
Traditional methods in this domain often suffer from Providing precise context to AI coding agents requires manually navigating file trees and copy-pasting code. react-grab eliminates this friction by making any rendered UI element self-describing — one hotkey gives the agent exactly the right file. aidenybai/react-grab addresses this by react-grab is a lightweight javascript library that adds an element inspector to react apps in development mode. hovering over any element and pressing ⌘c/ctrl+c copies the element's full context (react component name, source file path + line number, html) to the clipboard, ready to paste into claude code, cursor, or any ai coding assistant, offering a significant performance boost and better developer ergonomics compared to existing alternatives.

### 3. Technical Architecture
The project is built using TypeScript, adopting a modular and scalable design. It leverages modern industry standards to ensure compatibility across different environments, focusing on efficiency and ease of integration.

### 4. Core Implementation
Main logic revolves around select context for coding agents directly from your website. The implementation utilizes TypeScript's strengths to provide react-grab is a lightweight javascript library that adds an element inspector to react apps in development mode. hovering over any element and pressing ⌘c/ctrl+c copies the element's full context (react component name, source file path + line number, html) to the clipboard, ready to paste into claude code, cursor, or any ai coding assistant, ensuring high reliability and performance under load.

### 5. Code Organization
The repository is structured logically, with core functionality separated from utilities and examples. This organization facilitates easy navigation and contribution for developers looking to extend the tool's capabilities.

### 6. Quick Start Suggestion
To get started, init: `npx -y grab@latest init` in project root. mcp: `npx -y grab@latest add mcp`. usage: hover element, press ⌘c (mac) or ctrl+c. for next.js app router, add `<script src='//unpkg.com/react-grab/...' strategy='beforeinteractive'/>` in layout. plugin api: `registerplugin({ hooks: { onelementselect } })`. disable: set `window.__react_grab_disabled__ = true`. This will allow you to quickly evaluate the tool and integrate it into your existing development workflow.

### 7. Summary
An essential, TypeScript-powered utility that streamlines select context for coding agents directly from your website; it effectively tackles Providing precise context to AI coding agents requires manually navigating file trees and copy-pasting code. react-grab eliminates this friction by making any rendered UI element self-describing — one hotkey gives the agent exactly the right file while maintaining a high standard of code quality and usability.
