---
title: "lucasgelfond/zerobrew"
repo_name: "lucasgelfond/zerobrew"
url: "https://github.com/lucasgelfond/zerobrew"
github_url: "https://github.com/lucasgelfond/zerobrew"
stars: 6733
language: "Rust"
layout: repo
tags:
  - "Package-Manager"
  - "Homebrew"
  - "Rust"
  - "macOS"
  - "Open-Source"
  - "Developer-Tool"
---

## What it is

zerobrew (`zb`) is an experimental Rust-based Homebrew-compatible package manager that replaces the Homebrew client while reusing its formula definitions, bottles, and infrastructure. It introduces content-addressable deduplication and APFS clonefiles for near-zero-copy installs, with 2× cold and 7.6× warm speedups over Homebrew for the top-100 packages.

## Problems solved

- Homebrew's monolithic install logic is slow — zerobrew eliminates redundant downloads by deduplicating shared bottle content across packages and uses APFS clonefiles to make copies zero-overhead on Apple file systems
- dramatically reducing install and re-install times.

## How to get started

Install: `curl -fsSL https://zerobrew.rs/install | bash`. Use `zb install <pkg>`, `zb bundle` (from Brewfile), `zb uninstall <pkg>`, `zb gc`, `zb reset`. Run without linking: `zbx <pkg> --version`. Recommended to run alongside Homebrew rather than replace it.
