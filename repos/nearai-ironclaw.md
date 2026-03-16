---
title: "nearai/ironclaw"
repo_name: "nearai/ironclaw"
url: "https://github.com/nearai/ironclaw"
github_url: "https://github.com/nearai/ironclaw"
stars: 9816
language: "Rust"
layout: repo
tags:
  - "Security"
  - "Rust"
  - "WASM"
  - "Privacy"
  - "AI Agent"
---

## What it is

IronClaw is a security-first, Rust-based personal AI assistant that executes tools in a WASM sandbox with local data residency and multi-layered protection.

## Problems solved

- Protects against prompt injection and data exfiltration through a capability-based WASM sandbox; guarantees privacy by storing all data locally in PostgreSQL; replaces opaque AI systems with a transparent
- open-source Rust implementation.

## How to get started

Requires Rust 1.85+ and PostgreSQL with pgvector. Clone and build with `cargo build --release`. Run `ironclaw onboard` to set up the database and LLM providers. Access the assistant via CLI or the web gateway.
