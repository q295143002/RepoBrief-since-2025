---
title: "browser-use/web-ui"
repo_name: "browser-use/web-ui"
url: "https://github.com/browser-use/web-ui"
github_url: "https://github.com/browser-use/web-ui"
stars: 15707
language: "Python"
layout: repo
tags:
  - "Browser Automation"
  - "Agent Monitoring"
  - "Playwright"
  - "Web GUI"
  - "FastAPI"
  - "VNC"
  - "User Interface"
---

## What it is

A comprehensive web dashboard for managing and visualizing autonomous browser-based agents.

## Problems solved

- High technical barrier to monitoring headful browser agents
- Lack of 'Visual Proof' during long-running browser automation tasks
- Difficulty managing multiple sessions and cookie persistence

## How to get started

Run via docker-compose and access the web UI at localhost. Define your browser missions and monitor agent progress in real-time.

## Detailed report

### 1. Positioning
browser-use-web-ui is the management portal for the browser-use ecosystem. It provides real-time VNC-like views of agent screens and a library of 'Saved Missions' for recurring automation.

### 2. Pain Points & Advantages
Solves the 'Black Box' problem—users can manually take over if agents get stuck in captchas. Supports 'Multi-session Grid' for monitoring 10+ agents simultaneously.

### 3. Technical Architecture
React/Next.js frontend with a Python/FastAPI/Playwright backend. Adopts a 'Real-time VNC' approach via WebSocket frame streaming.

### 4. Core Implementation
`session_manager.py` handles lifecycle and memory isolation. Includes 'Interactive Replay'—scrolling through history to see exactly where an agent clicked and why.

### 5. Code Organization
`/components` houses the dashboard and video player, while `/server` manages orchestration and browser lifecycle.

### 6. Quick Start Suggestion
Launch a 'Flight Booking' task and watch the agent navigate through multiple calendars in real-time on your dashboard.

### 7. Summary
The 'Mission Control' for browser AI. It empowers users to monitor, intervene, and audit non-deterministic UI automations with visual certainty.
