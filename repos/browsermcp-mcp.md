---
title: "BrowserMCP/mcp"
repo_name: "BrowserMCP/mcp"
url: "https://github.com/BrowserMCP/mcp"
github_url: "https://github.com/BrowserMCP/mcp"
stars: 6039
language: "TypeScript"
layout: repo
tags:
  - "MCP"
  - "Browser Automation"
  - "Privacy"
  - "Chrome Extension"
  - "AI Developer Tools"
  - "Playwright"
---

## What it is

Browser MCP is a specialized Model Context Protocol (MCP) server that connects AI assistants to the user's actual Chrome browser. Unlike traditional headless automation (like standard Playwright), Browser MCP uses a Chrome extension to act within the user's real browser profile. This allows the AI to perform tasks on sites where the user is already logged in and avoids typical bot detection mechanisms.

## Problems solved

- Bot detection barriers: Bypasses CAPTCHAs and 'automated browser' blocks by using the user's real browser fingerprint.
- Authentication hurdles: No need to pass cookies or session tokens to the AI; it works inside existing logged-in sessions (Gmail, GitHub, etc.).
- High latency: Automation happens locally on the user's machine, eliminating network round-trips to remote browser clouds.
- Privacy concerns: Browser activity stays local and is not sent to third-party automation services.

## How to get started

Install the Browser MCP desktop application and the companion Chrome extension. Add the server to your MCP client (like Claude Desktop or Cursor). The assistant will then see tools for navigation, clicking, typing, and reading content within your active browser tabs.
