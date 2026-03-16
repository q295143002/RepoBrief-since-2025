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
