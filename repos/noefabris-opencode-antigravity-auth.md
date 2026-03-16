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

## Detailed report

### 1. Positioning
This plugin is a critical infrastructure piece for the Opencode (formerly Claude Code-compatible) ecosystem. It targets developers who want to unify their AI toolchain under their Google account, leveraging professional quotas for both Claude and Gemini models.

### 2. Pain Points & Advantages
Managing multiple API keys and quotas can be a headache. This plugin's advantage is 'Quota Aggregation'—it can auto-rotate between multiple Google accounts when rate limits are hit. It also unlocks advanced model variants (like 32k thinking budgets) that are often unavailable in standard API tiers.

### 3. Technical Architecture
Implements an OAuth 2.0 flow specifically tailored for the Google Cloud for AI Companion API. It acts as a provider bridge within Opencode, transforming model requests into compatible JSON-RPC calls for the Antigravity backend.

### 4. Core Implementation
Features a 'Dual Quota System' that can fall back between Antigravity and Gemini CLI pools, a 'Soft Quota Protection' to avoid account flags, and a local credential manager that securely stores refresh tokens in the user's config directory.

### 5. Code Organization
The repository contains the OAuth handler logic, the model transformation registry, and specialized scripts for managing the account rotation and 'stickiness' strategies.

### 6. Quick Start Suggestion
After logging in, try running a task with the `--variant=max` flag. This will trigger the 'extended thinking' mode, allowing the model to spend a massive token budget on reasoning before returning the final code result.

### 7. Summary
Opencode-antigravity-auth is a high-agency tool for developers who want the most power out of the Google AI ecosystem. Its robust account management and support for advanced thinking models make it a must-have for professional LLM-driven development.
