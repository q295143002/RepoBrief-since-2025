---
title: "NoeFabris/opencode-antigravity-auth"
repo_name: "NoeFabris/opencode-antigravity-auth"
url: "https://github.com/NoeFabris/opencode-antigravity-auth"
github_url: "https://github.com/NoeFabris/opencode-antigravity-auth"
stars: 9485
language: "TypeScript"
layout: repo
tags:
  - "Opencode"
  - "Google OAuth"
  - "Gemini"
  - "Claude"
  - "AI Infrastructure"
---

## What it is

This Opencode plugin enables Google OAuth, allowing developers to access Antigravity rate limits and premium models like Gemini 3.1 and Claude 4.6 using their Google credentials.

## Problems solved

- Solves the 'API Key' barrier for Google-hosted models by using native OAuth; provides multi-account rotation to bypass rate-limits; enables 'extended thinking' and 'Google Search grounding' for Gemini models within the Opencode CLI.

## How to get started

Add `opencode-antigravity-auth` to your `opencode.json` plugin list. Run `opencode auth login` and follow the Google OAuth flow. Configure models in your JSON config to point to the `google` provider.
