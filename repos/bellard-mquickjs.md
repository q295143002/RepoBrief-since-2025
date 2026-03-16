---
title: "bellard/mquickjs"
repo_name: "bellard/mquickjs"
url: "https://github.com/bellard/mquickjs"
github_url: "https://github.com/bellard/mquickjs"
stars: 5623
language: "C"
layout: repo
tags:
  - "JavaScript Engine"
  - "Embedded Systems"
  - "Low Memory"
  - "C Library"
  - "IoT"
  - "Open Source"
---

## What it is

MicroQuickJS (MQuickJS) is an ultra-lightweight JavaScript engine designed for embedded devices with severe memory constraints. It can run programs with as little as 10kB of RAM and requires only 100kB of ROM, while maintaining performance comparable to the original QuickJS.

## Problems solved

- High memory overhead of standard JS engines on microcontrollers
- Need for scripting capabilities in resource-constrained IoT devices
- Fragmentation and CPU stack dependency in embedded interpreters

## How to get started

Embed the C library into your project or use the `mqjs` REPL for standalone testing. It supports a stricter ES5 subset and can compile JavaScript to persistent bytecode for execution directly from ROM.
