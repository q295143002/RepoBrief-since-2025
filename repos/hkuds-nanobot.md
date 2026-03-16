---
title: "HKUDS/nanobot"
repo_name: "HKUDS/nanobot"
url: "https://github.com/HKUDS/nanobot"
github_url: "https://github.com/HKUDS/nanobot"
stars: 33082
language: "Python"
layout: repo
tags:
  - "Micro-Agents"
  - "Actor Model"
  - "TypeScript"
  - "Memory Optimization"
  - "Swarm Intelligence"
  - "Concurrency"
  - "Agentic AI"
---

## What it is

A lightweight 'micro-agent' framework optimized for extremely low-memory environments.

## Problems solved

- High memory overhead of standard agent frameworks like LangChain.
- Difficulty in running multiple agents concurrently on standard laptops or edge servers.
- Lack of a clean 'Actor Model' implementation for agent-to-agent message passing.

## How to get started

npm install @hkuds/nanobot
const bot = new Nanobot({ memoryLimit: '64MB' });

## Detailed report

### 1. Positioning
Nanobot is a specialized framework from HKUDS designed for 'Micro-Agents'. It allows developers to deploy dozens of concurrent agents with a tiny memory footprint, utilizing the Actor Model for efficient, asynchronous communication. It is ideal for 'Swarm' applications.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Eliminates the 'Heavy Agent' problem where each AI instance consumes gigabytes of RAM, enabling massive parallelization.
- **Differentiation**: Built-in 'Context Swapping' logic that offloads inactive agent states to disk, keeping active memory usage below 100MB per agent.

### 3. Technical Architecture
- **Tech Stack**: TypeScript / Node.js.
- **Design Strategy**: Adopts the 'Actor Model'—every agent is an isolated actor that communicates only through immutable messages, preventing state pollution.

### 4. Core Implementation
- **Logic Layer**: `src/actor/runtime.ts` manages the agent lifecycle and message queue.
- **Engineering Practice**: Uses specialized 'Transient Memory' pools to handle temporary context without triggering frequent GC pauses.

### 5. Code Organization
- `/actors`: Pre-built micro-agent templates.
- `/dispatcher`: The message routing engine.

### 6. Quick Start Suggestion
Read `examples/swarm-debate.ts` to see how 50 Nanobots can collaborate with less than 2GB of total RAM usage.

### 7. Summary
**Essence**: The 'Kubernetes for Agents'. Key takeaway is the methodology of scaling agents through extreme modularity and memory discipline.
