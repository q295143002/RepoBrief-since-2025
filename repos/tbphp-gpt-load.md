---
title: "tbphp/gpt-load"
repo_name: "tbphp/gpt-load"
url: "https://github.com/tbphp/gpt-load"
github_url: "https://github.com/tbphp/gpt-load"
stars: 5985
language: "Go"
layout: repo
tags:
  - "API Proxy"
  - "Load Balancing"
  - "OpenAI"
  - "Go"
  - "DevOps"
  - "Enterprise Software"
  - "Machine Learning Infrastructure"
---

## What it is

GPT-Load is a Go-based proxy service for managing multiple AI API providers (OpenAI, Gemini, Claude). It features intelligent 'key pools' with automatic rotation and failure recovery, allowing businesses to maintain high availability and scale their AI usage. It provides a sleek Vue 3 management interface for monitoring requests, managing groups, and hot-reloading configurations.

## Problems solved

- API reliability issues: Automatically blacklists failed keys and retries requests with healthy ones to ensure 100% uptime.
- High costs and rate limits: Load balances across multiple accounts and keys to maximize throughput and optimize quota usage.
- Lack of usage visibility: Provides real-time statistics and detailed request logs for better auditing.
- Insecure key management: Stores API keys with AES encryption and provides separate authentication for admin and proxy users.

## How to get started

Deploy via Docker Compose. Access the web dashboard at port 3001 to create groups and add API keys. Then, update your client SDKs (Python, Node.js) to point to the GPT-Load proxy URL (e.g., `.../proxy/group-name`) and use your custom proxy keys for authentication.
