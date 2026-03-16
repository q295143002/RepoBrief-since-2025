---
title: "hangwin/mcp-chrome"
repo_name: "hangwin/mcp-chrome"
url: "https://github.com/hangwin/mcp-chrome"
github_url: "https://github.com/hangwin/mcp-chrome"
stars: 10746
language: "TypeScript"
layout: repo
tags:
  - "MCP"
  - "Chrome Extension"
  - "Browser Automation"
  - "AI Tools"
---

## What it is

Chrome MCP Server is an extension-based model context protocol server that enables AI models to directly control and retrieve context from your everyday Chrome browser.

## Problems solved

- Bypasses the limitations of headless automated browsers (like Playwright needing clean states
- new logins
- and high overhead) by directly hooking AI control into the user's active
- authenticated Chrome instance via an MCP server.

## How to get started

Download the Chrome extension from GitHub releases and load it unpacked. Install the bridge globally via `npm install -g mcp-chrome-bridge`. Connect your MCP client (like CherryStudio) using the Streamable HTTP URL `http://127.0.0.1:12306/mcp`.
