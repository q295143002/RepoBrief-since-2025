---
title: "Wei-Shaw/claude-relay-service"
repo_name: "Wei-Shaw/claude-relay-service"
url: "https://github.com/Wei-Shaw/claude-relay-service"
github_url: "https://github.com/Wei-Shaw/claude-relay-service"
stars: 9446
language: "JavaScript"
layout: repo
tags:
  - "API Gateway"
  - "Claude"
  - "Codex"
  - "Infrastructure"
  - "Proxy"
---

## What it is

Claude Relay Service is a self-hosted API gateway for Claude and Codex, featuring multi-account management, intelligent rotation, and usage statistics for individuals and teams.

## Problems solved

- Solves regional access restrictions to Claude services; eliminates privacy concerns of third-party mirroring sites by keeping data on private servers; enables cost-sharing of high-tier subscriptions (like Claude Max) through multi-user API key management.

## How to get started

Run the one-click script: `curl -fsSL https://pincc.ai/manage.sh -o manage.sh && chmod +x manage.sh && ./manage.sh install`. Configure your `JWT_SECRET` and `ENCRYPTION_KEY` in the `.env` file, then access the web dashboard at `http://your-ip:3000/web` to add accounts.
