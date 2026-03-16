---
title: "router-for-me/CLIProxyAPI"
repo_name: "router-for-me/CLIProxyAPI"
url: "https://github.com/router-for-me/CLIProxyAPI"
github_url: "https://github.com/router-for-me/CLIProxyAPI"
stars: 16044
language: "Go"
layout: repo
tags:
  - "CLI Adapter"
  - "REST API"
  - "Agent Tooling"
  - "FastAPI"
  - "Automation"
  - "System Integration"
  - "OpenAPI"
---

## What it is

A universal proxy server that exposes command-line utilities as structured, agent-ready APIs.

## Problems solved

- Inability of agents to interact with legacy CLI tools lacking REST APIs
- Complexity in parsing messy stdout into agent-friendly JSON
- Lack of rate-limiting and permission scoping for agent shell commands

## How to get started

Install via pip: `pip install cliproxyapi`. Serve tools like git or ffmpeg via `cliproxy serve` to expose them as local REST endpoints.
