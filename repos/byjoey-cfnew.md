---
title: "byJoey/cfnew"
repo_name: "byJoey/cfnew"
url: "https://github.com/byJoey/cfnew"
github_url: "https://github.com/byJoey/cfnew"
stars: 10579
language: ""
layout: repo
tags:
  - "Networking"
  - "Cloudflare Workers"
  - "Proxy"
  - "VLESS"
  - "Trojan"
---

## What it is

CFnew is an advanced Cloudflare Workers script deploying a multi-protocol (VLESS, Trojan, xhttp) proxy terminal with built-in latency testing, API management, and dynamic visual configurations.

## Problems solved

- Simplifies the complex deployment and continual optimization of serverless proxy nodes. It offers instantaneous graphical configuration using KV storage
- automated regional selection
- and rapid API-driven node generation without requiring worker redeployments.

## How to get started

Deploy to Cloudflare Workers, configure your UUID via the `u` environment variable, bind a KV namespace to `C` for graphical configurations, and access the setup page via `/{your-uuid}` or a requested custom path.
