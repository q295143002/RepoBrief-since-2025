---
title: "HKUDS/CLI-Anything"
repo_name: "HKUDS/CLI-Anything"
url: "https://github.com/HKUDS/CLI-Anything"
github_url: "https://github.com/HKUDS/CLI-Anything"
stars: 10191
language: "Python"
layout: repo
tags:
  - "AI Agent"
  - "CLI"
  - "Agent-Native"
  - "Automation"
---

## What it is

CLI-Anything is an automated tool that transforms any software repository into an agent-controllable CLI, enabling AI models to operate professional software natively.

## Problems solved

- Fixes the 'AI-Software Gap' where agents can reason but can't use professional tools; replaces brittle GUI automation with deterministic
- self-describing
- and structured (JSON) CLI interfaces; automates the expensive process of manual tool integration via a 7-phase generation pipeline.

## How to get started

In Claude Code, add the marketplace `HKUDS/CLI-Anything` and install `/plugin install cli-anything`. Then run `/cli-anything ./your-repo` to generate a full harness. Access the new CLI via `cli-anything-{software} --help`.
