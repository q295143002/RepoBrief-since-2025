---
title: "alibaba/OpenSandbox"
repo_name: "alibaba/OpenSandbox"
url: "https://github.com/alibaba/OpenSandbox"
github_url: "https://github.com/alibaba/OpenSandbox"
stars: 7685
language: "Python"
layout: repo
tags:
  - "Alibaba"
  - "Sandbox"
  - "AI-Agent"
  - "Docker"
  - "Kubernetes"
  - "Code-Execution"
  - "Infrastructure"
---

## What it is

OpenSandbox is Alibaba's open-source sandbox infrastructure platform providing isolated, secure, and scalable execution environments for AI coding agents, browser automations, and RL training workloads, with multi-language SDK support.

## Problems solved

- Solves the challenge of safely executing arbitrary AI-generated code and agent actions in isolated environments
- supporting both local Docker runs and large-scale Kubernetes deployments with strong container isolation (gVisor
- Kata
- Firecracker).

## How to get started

Install via `uv pip install opensandbox-server`, initialize config, and start the server. Use `opensandbox-code-interpreter` SDK in Python/TypeScript/Java/C# to create sandboxes, run commands, manage files, and execute code programmatically.
