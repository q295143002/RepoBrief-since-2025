---
title: "alibaba/page-agent"
repo_name: "alibaba/page-agent"
url: "https://github.com/alibaba/page-agent"
github_url: "https://github.com/alibaba/page-agent"
stars: 6782
language: "TypeScript"
layout: repo
tags:
  - "Alibaba"
  - "Browser-Automation"
  - "Web-Agent"
  - "TypeScript"
  - "LLM"
  - "No-Code"
  - "Open-Source"
---

## What it is

PageAgent (alibaba/page-agent) is a pure client-side JavaScript library that embeds an AI GUI agent directly inside any webpage, enabling natural-language control of UI elements through text-based DOM analysis — no screenshots, no Python, no browser extensions required.

## Problems solved

- Eliminates the need for a separate headless browser or server-side automation infrastructure to build AI copilots and smart form-filling in web apps — everything runs in-page in pure JS with any LLM (Qwen
- OpenAI
- etc.).

## How to get started

One-line CDN integration: add a `<script>` tag with the IIFE bundle. Or `npm install page-agent` and initialize `new PageAgent({ model, baseURL, apiKey })`. Call `await agent.execute('Click the login button')`. An optional Chrome extension enables multi-tab tasks.
