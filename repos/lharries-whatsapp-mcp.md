---
title: "lharries/whatsapp-mcp"
repo_name: "lharries/whatsapp-mcp"
url: "https://github.com/lharries/whatsapp-mcp"
github_url: "https://github.com/lharries/whatsapp-mcp"
stars: 5405
language: "Go"
layout: repo
tags:
  - "WhatsApp"
  - "MCP"
  - "AI Agents"
  - "Communication"
  - "Personal Assistant"
  - "Python"
  - "Open Source"
---

## What it is

This MCP (Model Context Protocol) server bridges personal WhatsApp accounts with AI agents like Claude. It allows agents to search contacts, read message history (including media), and send messages/files directly from the LLM interface.

## Problems solved

- Inaccessibility of personal chat data for AI productivity tools
- Lack of a standardized, secure way to grant AI agents communication capabilities
- Complexity of the WhatsApp Web protocol for casual developers

## How to get started

Run the Go-based bridge to authenticate via QR code. Configure the Python MCP server in your Claude Desktop or Cursor settings. The agent will then have access to tools like `search_contacts` and `send_message`.
