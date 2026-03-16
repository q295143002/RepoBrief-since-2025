---
title: "anthropics/claude-plugins-official"
repo_name: "anthropics/claude-plugins-official"
url: "https://github.com/anthropics/claude-plugins-official"
github_url: "https://github.com/anthropics/claude-plugins-official"
stars: 10509
language: "Python"
layout: repo
tags:
  - "Claude Code"
  - "AI Plugins"
  - "Marketplace"
  - "MCP"
---

## What it is

This repository serves as the official marketplace for Claude Code plugins, indexing both internal Anthropic tools and community-developed extensions.

## Problems solved

- Centralizes discovery and installation of extensions for the Claude Code CLI; provides a standardized structure for plugins including agents
- skills
- and MCP servers; simplifies the contribution process for developers through a unified submission framework.

## How to get started

Install plugins directly via the Claude Code CLI using `/plugin install {plugin-name}@claude-plugin-directory` or browse via `/plugin > Discover` within your terminal session.

## Detailed report

### 1. Positioning
This repository functions as the central ecosystem hub for Claude Code, Anthropic's agentic coding assistant. It target developers looking to extend Claude's utility with specialized domain knowledge or tool integrations.

### 2. Pain Points & Advantages
Without a central registry, users struggle to find reliable and secure tools to enhance their AI workflows. This directory provides an official discovery layer with clear trust warnings, standardized file structures, and easy one-command installations, ensuring a cohesive user experience within the Claude ecosystem.

### 3. Technical Architecture
The directory follows a rigid metadata structure where each entry contains a `plugin.json` for metadata and an optional `.mcp.json` for Model Context Protocol server settings. It separates 'internal' (Anthropic-maintained) and 'external' (partner/community) plugins for clear trust boundaries.

### 4. Core Implementation
Implementation details reside within individual plugin subdirectories. A plugin can define new slash commands, agent behaviors, and reusable 'skills' (Python functions or scripts). It relies on the Claude Code plugin system to parse these definitions and load them into the active LLM context.

### 5. Code Organization
The repo is organized into `/plugins` and `/external_plugins`. Each plugin folder follows a mandatory schema: `.claude-plugin/` for metadata and specific directories for `commands`, `agents`, and `skills`.

### 6. Quick Start Suggestion
Open Claude Code and run `/plugin > Discover` to see a live list. To verify a specific integration, try installing an official plugin like `brave-search` to grant your local agent real-time web access.

### 7. Summary
As the primary registry for Claude Code, this project is essential for the growth of the Claude ecosystem. By enforcing a standard structure for MCP servers and agent skills, it allows developers to build and share complex AI capabilities that can be invoked natively within a professional terminal environment.
