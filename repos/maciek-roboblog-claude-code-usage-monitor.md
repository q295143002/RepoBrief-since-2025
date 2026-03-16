---
title: "Maciek-roboblog/Claude-Code-Usage-Monitor"
repo_name: "Maciek-roboblog/Claude-Code-Usage-Monitor"
url: "https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor"
github_url: "https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor"
stars: 6929
language: "Python"
layout: repo
tags:
  - "Claude"
  - "Token-Usage"
  - "Monitoring"
  - "CLI"
  - "Python"
  - "Analytics"
  - "Open-Source"
---

## What it is

Claude Code Usage Monitor (`claude-monitor`) is a Python terminal tool that reads Claude's local session files to display real-time token/cost consumption, burn rate predictions, and ML-based P90 session limit detection for Pro/Max5/Max20/custom plans.

## Problems solved

- Gives Claude Code users live visibility into their token usage
- cost burn rate
- and predicted session expiry — directly in the terminal — thus preventing unexpected rate-limit interruptions during long coding sessions.

## How to get started

Install: `uv tool install claude-monitor`. Run: `claude-monitor` (or `cmonitor`, `ccm`). Specify plan: `--plan pro|max5|max20|custom`. Set timezone, theme, refresh rate as needed. The tool auto-saves preferences and auto-detects plan switches.
