---
title: "facebook/pyrefly"
repo_name: "facebook/pyrefly"
url: "https://github.com/facebook/pyrefly"
github_url: "https://github.com/facebook/pyrefly"
stars: 5460
language: "Rust"
layout: repo
tags:
  - "Python"
  - "Type Checker"
  - "LSP"
  - "Rust"
  - "Static Analysis"
  - "Meta"
  - "Open Source"
---

## What it is

Pyrefly is a high-performance Python type checker and LSP (Language Server Protocol) server developed by Meta/Facebook. Written in Rust, it provides lightning-fast type checking, inference, and semantic highlighting for massive Python codebases.

## Problems solved

- Slow type checking in large Python projects (Mypy/Pyright performance)
- Limited type inference in many existing checkers
- Complexity of global state management in incremental checking

## How to get started

Install via `pip install pyrefly` or use the official VS Code/Zed extensions. It can also be integrated into Neovim or used as a CLI tool for CI/CD pipelines.
