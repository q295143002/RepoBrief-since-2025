---
title: "pranshuparmar/witr"
repo_name: "pranshuparmar/witr"
url: "https://github.com/pranshuparmar/witr"
github_url: "https://github.com/pranshuparmar/witr"
stars: 14063
language: "Go"
layout: repo
tags:
  - "CLI"
  - "Process Trace"
  - "Rust"
  - "System Tool"
---

## What it is

A CLI tool that traces process ancestry to answer "Why is this running?", providing insight into what triggered a specific process.

## Problems solved

- Solves the mystery of rogue, unexpected, or resource-heavy processes by tracing who or what invoked them down their ancestry tree.

## How to get started

Install using cargo: `cargo install witr`. Run `witr <PID>` or `witr <process_name>` to trace ancestry. Use `witr -i` for interactive TUI.

## Detailed report

### 1. Positioning
`witr` (Why Is This Running) is a systemic diagnostic tool written in Rust aimed at developers and sysadmins to trace the origins of active processes.

### 2. Pain Points & Advantages
Processes often obscure their triggers (e.g., cron jobs, nested scripts). Existing tools like `ps` or `htop` require manual ancestry tracking. `witr` automates this cleanly, featuring graphical TUI modes and cross-platform support.

### 3. Technical Architecture
Built in Rust, leveraging system-level OS APIs (procfs on Linux, task/sys APIs on macOS/Windows) to poll process hierarchy and construct parent-child graphs.

### 4. Core Implementation
Recursively maps PIDs to their PPIDs until reaching the init process (PID 1). Generates formatted output graphs and integrates a terminal UI (via `ratatui`) for interactive exploration.

### 5. Code Organization
Structured as a standard Cargo workspace with separate modules for OS integrations, TUI logic, and command-line argument parsing.

### 6. Quick Start Suggestion
Install via `cargo install witr`, then use `witr <process_name>` to immediately see the invocation chain leading to the process.

### 7. Summary
A powerful, lightweight Rust-based system administration tool that intuitively debugs process execution origins and invocation trees.
