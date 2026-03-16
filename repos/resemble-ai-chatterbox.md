---
title: "resemble-ai/chatterbox"
repo_name: "resemble-ai/chatterbox"
url: "https://github.com/resemble-ai/chatterbox"
github_url: "https://github.com/resemble-ai/chatterbox"
stars: 23264
language: "Python"
layout: repo
tags:
  - "P2P"
  - "Agent Swarms"
  - "Communication Bus"
  - "Rust"
  - "Decentralized AI"
  - "Networking"
  - "QUIC"
---

## What it is

A decentralized, high-throughput P2P communication bus for autonomous agent swarms.

## Problems solved

- Single-point-of-failure and bottleneck issues in centralized multi-agent orchestrators.
- High costs and privacy risks of routing agent-to-agent messages through cloud brokers (AWS/GCP).
- Lack of 'Discovery' in dynamic agent swarms moving across local networks.

## How to get started

npm install @resemble-ai/chatterbox
const node = new Chatterbox();
node.broadcast('TASK_AVAILABLE', { type: 'OCR' });
