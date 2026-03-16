---
title: "Mail-0/Zero"
repo_name: "Mail-0/Zero"
url: "https://github.com/Mail-0/Zero"
github_url: "https://github.com/Mail-0/Zero"
stars: 10479
language: "TypeScript"
layout: repo
tags:
  - "AI Email"
  - "Self-Hosted"
  - "Privacy"
  - "Next.js"
---

## What it is

Zero is a privacy-first, open-source AI email client and server that offers a unified, self-hosted inbox with deep LLM agent integrations.

## Problems solved

- Combines the privacy of self-hosting with the convenience of unified Gmail/Outlook access; uses AI agents to automate email categorization, summarization, and responses; replaces complex, data-hungry, and closed-source email solutions with a modern, developer-friendly stack.

## How to get started

Requires Node.js v18+, pnpm, and Docker. Clone the repo, run `pnpm install`, start the DB with `pnpm docker:db:up`, configure `.env` via `pnpm nizzy env`, and launch the app with `pnpm dev`. Access at `http://localhost:3000`.
