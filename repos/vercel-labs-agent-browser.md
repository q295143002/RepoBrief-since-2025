---
title: "vercel-labs/agent-browser"
repo_name: "vercel-labs/agent-browser"
url: "https://github.com/vercel-labs/agent-browser"
github_url: "https://github.com/vercel-labs/agent-browser"
stars: 21519
language: "Rust"
layout: repo
tags:
  - "Browser Automation"
  - "Vercel"
  - "Playwright"
  - "AI Vision"
  - "DOM Parsing"
  - "Web Scraping"
  - "Agent Tooling"
---

## What it is

Vercel's high-performance CLI tool for giving AI agents 'Hands and Eyes' in any web browser.

## Problems solved

- AI agents failing on dynamic SPAs that scrapers miss
- Complexity in 'Screenshot-to-Action' vision loops
- Heaviness of full Puppeteer/Playwright setups for simple tasks

## How to get started

Run via npx: `npx @vercel/agent-browser --task "find stars"`. Uses vision and DOM snapshots per turn.

## Detailed report

### 1. Positioning
Agent-Browser is Vercel's specialized browser automation utility for LLMs, exposing human-like commands via CLI.

### 2. Pain Points & Advantages
Handles Client-Side Rendering by waiting for JS. Minimizes token usage via 'Semantic DOM Pruning' (removing meta/styles).

### 3. Technical Architecture
Playwright-based with Vercel AI SDK integration. Uses a 'Snapshot-based Action' loop for agent navigation.

### 4. Core Implementation
Pruning algorithm reduces HTML to a clean DOM tree. Includes real-time visual debugging in a side window.

### 5. Code Organization
`/src/tools` for navigation/interaction; `/src/drivers` for browser lifecycle.

### 6. Quick Start Suggestion
Try `summarize` action on Hacker News to see automated semantic extraction in seconds.

### 7. Summary
A semantic 'Web-API' for AI that simplifies complex UI interaction into agent-digestible fragments.
