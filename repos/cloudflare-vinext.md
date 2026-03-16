---
title: "cloudflare/vinext"
repo_name: "cloudflare/vinext"
url: "https://github.com/cloudflare/vinext"
github_url: "https://github.com/cloudflare/vinext"
stars: 6638
language: "TypeScript"
layout: repo
tags:
  - "Cloudflare"
  - "Next.js"
  - "Vite"
  - "TypeScript"
  - "AI-Generated-Code"
  - "Open-Source"
  - "Web-Framework"
---

## What it is

vinext is an open-source Vite plugin by Cloudflare that reimplements the Next.js public API (routing, SSR, RSC, server actions, middleware, caching) on Vite rather than the Next.js compiler. It achieves ~94% API coverage, natively deploys to Cloudflare Workers, and supports other platforms via Nitro. The entire codebase was mostly written by Claude Code as an AI-driven development experiment.

## Problems solved

- Next.js apps are locked to the Vercel toolchain. vinext lets existing Next.js projects run on Vite (faster HMR
- smaller bundles
- clean plugin API) and deploy natively to Cloudflare Workers — enabling D1
- KV
- R2
- AI bindings — while preserving the familiar Next.js API. The incremental migration (`vinext init`
- `vinext check`) is non-destructive.

## How to get started

Migrate: `npx vinext init` in your Next.js project root. Or manual: `npm install vinext`, replace `next` scripts with `vinext`. Fix issues: `vinext check`. Deploy to Cloudflare: `wrangler login`, then `vinext deploy`. Use Agent Skill: `npx skills add cloudflare/vinext` + tell AI to 'migrate this project to vinext'.
