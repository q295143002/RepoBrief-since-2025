---
title: "JimLiu/baoyu-skills"
repo_name: "JimLiu/baoyu-skills"
url: "https://github.com/JimLiu/baoyu-skills"
github_url: "https://github.com/JimLiu/baoyu-skills"
stars: 8738
language: "TypeScript"
layout: repo
tags:
  - "Social Media"
  - "Infographics"
  - "Content Creation"
  - "Claude Code"
  - "Tools"
---

## What it is

Baoyu Skills is a premium toolkit for Claude Code, offering specialized modules for social media content creation, image generation, and advanced content processing with elegant presets.

## Problems solved

- Solves the 'generic content' problem on social platforms like Xiaohongshu and Weibo; automates the creation of professional infographics and slide decks; provides a unified interface for multiple image generation backends (OpenAI/Google).

## How to get started

Install using the simple command: `npx skills add jimliu/baoyu-skills`, or within Claude Code: `/plugin marketplace add JimLiu/baoyu-skills`. Use commands like `/baoyu-xhs-images` to convert any article into a viral-ready infographic deck.

## Detailed report

### 1. Positioning
Baoyu Skills positions itself as the 'Ultimate Productivity Power-Up' for modern content creators. It targets influencers, educators, and product managers who use Claude Code as their primary workspace but need high-end 'Deliverable-Ready' outputs for different platforms.

### 2. Pain Points & Advantages
Creating social-media-ready visuals and formatted posts is traditionally a manual, multi-tool process. This toolkit's primary advantage is its 'Aesthetic Presets'—it comes with curated styles like 'Notion', 'Geometric', and 'Blueprint' that ensure every output looks professional and bespoke. It features a complete '2D Style x Layout' system for maximum flexibility.

### 3. Technical Architecture
Built as a collection of specialized 'Claude Code Skills' with Node.js backends. It integrates with real browsers (via CDP) for social media posting to bypass anti-automation. It uses a modular API implementation that supports multi-account management and multi-provider image generation.

### 4. Core Implementation
Key skills include: `baoyu-xhs-images` (1-10 page infographic decks), `baoyu-slide-deck` (full PowerPoint synthesis), and `baoyu-post-to-x`. It features 'Baoyu-Image-Gen', which acts as a provider-agnostic bridge to DALL-E 3, Gemini Image, and Aliyun Wanxiang.

### 5. Code Organization
Structured as a monorepo under `skills/`. Each skill has its own logic, templates, and `SKILL.md`. It includes a dedicated `scripts/` directory for publishing to registries like ClawHub. The use of `.env` files and aliases allows for secure, complex account management (e.g., managing multiple WeChat Official Accounts).

### 6. Quick Start Suggestion
Install the toolkit and try the `/baoyu-xhs-images` command on any technical Markdown file. Watch as it breaks down your text into 8 beautifully styled 'Knowledge Cards' with custom layouts. Then, use `/baoyu-post-to-weibo` to prepare a draft for your followers in seconds.

### 7. Summary
Baoyu Skills is a masterclass in 'High-Resolution AI Tooling'. By wrapping complex generation and distribution tasks into simple, highly-parameterized commands, it empowers creators to maintain a high-frequency, high-quality presence across the entire social web.
