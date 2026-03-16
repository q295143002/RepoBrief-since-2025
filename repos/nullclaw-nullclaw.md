---
title: "nullclaw/nullclaw"
repo_name: "nullclaw/nullclaw"
url: "https://github.com/nullclaw/nullclaw"
github_url: "https://github.com/nullclaw/nullclaw"
stars: 6244
language: "Zig"
layout: repo
tags:
  - "Zig"
  - "AI Infrastructure"
  - "Edge Computing"
  - "High Performance"
  - "AI Agents"
  - "Embedded Systems"
---

## What it is

NullClaw is an extremely high-performance, lightweight AI assistant core written in Zig. It features a tiny binary size, near-zero memory footprint, and is designed to run on any hardware with a CPU, including $5 edge boards. Despite its size, it includes 50+ providers, 19 communication channels (Telegram, Discord, etc.), a sandboxed execution environment, and built-in MCP support.

## Problems solved

- Heavy AI infrastructure: Replaces multi-GB Python/Node environments with a single <1MB binary.
- Slow cold starts: Boots in under 2ms on modern hardware, making it ideal for event-driven edge functions.
- Resource constraints: Runs comfortably on devices with only a few MBs of RAM.
- Deployment complexity: No runtime dependencies, just a static binary that 'just runs' on ARM, x86, or RISC-V.

## How to get started

Install via Homebrew (`brew install nullclaw`) or build from source using Zig 0.15.2. Use `nullclaw onboard --interactive` for guided setup. Launch the interactive chat with `nullclaw agent` or start the long-running gateway with `nullclaw gateway`. It can be integrated into Telegram or Discord by configuring the respective tokens in `config.json`.
