---
title: "sipeed/picoclaw"
repo_name: "sipeed/picoclaw"
url: "https://github.com/sipeed/picoclaw"
github_url: "https://github.com/sipeed/picoclaw"
stars: 24415
language: "Go"
layout: repo
tags:
  - "PicoClaw"
  - "Embedded AI"
  - "RISC-V"
  - "IoT Agent"
  - "Edge Computing"
  - "C++"
  - "Sipeed"
---

## What it is

Low-footprint 'Micro-Agent' implementation for RISC-V and embedded IoT vision boards.

## Problems solved

- Inability to run high-level agent frameworks on extremely low-memory (MB scale) IoT devices.
- High latency in cloud-controlled IoT agents due to round-trip times.
- Need for 'Local Vision Control' in remote industrial monitoring without full Linux environments.

## How to get started

git clone https://github.com/sipeed/picoclaw
make flash BOARD=MAIX-III
