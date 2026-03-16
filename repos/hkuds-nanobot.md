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
