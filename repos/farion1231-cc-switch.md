---
title: "farion1231/cc-switch"
repo_name: "farion1231/cc-switch"
url: "https://github.com/farion1231/cc-switch"
github_url: "https://github.com/farion1231/cc-switch"
stars: 27614
language: "Rust"
layout: repo
tags:
  - "Claude Code"
  - "Profile Manager"
  - "CLI Tool"
  - "Developer Productivity"
  - "Node.js"
  - "Automation"
  - "Config Switcher"
---

## What it is

A fast configuration switcher for Claude Code to manage multiple accounts and model tiers.

## Problems solved

- Tedious manual editing of config files when switching between personal and work Claude accounts.
- Inefficiency in toggling between different model tiers (Haiku vs Sonnet) for different tasks.
- Risk of accidentally using the wrong API key/org in a production codebase.

## How to get started

npm install -g cc-switch
cc-switch use work-profile
cc-switch use personal-profile

## Detailed report

### 1. Positioning
CC-Switch is a developer productivity tool specifically for the Claude Code CLI. It acts as a profile manager, allowing users to define multiple 'profiles' (combinations of keys, regions, and model preferences) and swap between them with a single command.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Solves the UI friction of modern AI CLI tools that lack multi-account support natively.
- **Differentiation**: Lightweight and fast—it essentially automates the symlinking of `.claudecode.json` files, ensuring no disruption to the coding workflow.

### 3. Technical Architecture
- **Tech Stack**: Node.js CLI.
- **Design Strategy**: Non-destructive file management—it keeps a hidden directory of profiles and swaps the active one into the user's home directory.

### 4. Core Implementation
- **Logic Layer**: Implements a simple atomic file swap to ensure the CLI never encounters a corrupted or half-written config file.
- **Engineering Practice**: Uses safe environment variable injection to override keys on the fly.

### 5. Code Organization
- `src/cli.ts`: Argument parsing and command dispatch.
- `src/profiles.ts`: Profile storage and file system logic.

### 6. Quick Start Suggestion
Define two profiles: one with `haiku` for cheap unit tests and one with `sonnet` for major refactors.

### 7. Summary
**Essence**: The 'Profile Manager' for your AI coding identity. Key learning is the automation of configuration states for high-frequency CLI users.
