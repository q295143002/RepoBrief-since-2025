---
title: "cloudflare/moltworker"
repo_name: "cloudflare/moltworker"
url: "https://github.com/cloudflare/moltworker"
github_url: "https://github.com/cloudflare/moltworker"
stars: 9586
language: "TypeScript"
layout: repo
tags:
  - "Cloudflare Workers"
  - "Serverless"
  - "AI Agent"
  - "OpenClaw"
  - "R2 Storage"
---

## What it is

Moltworker is an experimental project that allows developers to host the OpenClaw AI assistant within Cloudflare's serverless container infrastructure (Sandboxes).

## Problems solved

- Eliminates the need for self-hosting a persistent home server for AI agents; provides a secure
- managed environment with built-in Cloudflare Access authentication; enables persistent agent states via R2 storage integration.

## How to get started

Requires a Cloudflare Workers Paid plan. Clone the repo, set secrets (ANTHROPIC_API_KEY, CF_ACCESS_AUD) via `wrangler secret put`, and deploy with `npm run deploy`. Access the web UI via your worker URL with a generated gateway token.
