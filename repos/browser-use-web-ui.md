---
id: 910986056
repo_name: "browser-use/web-ui"
url: "https://github.com/browser-use/web-ui"
stars: 15707
language: "Python"
tags: ["Browser Automation","Agent Monitoring","Playwright","Web GUI","FastAPI","VNC","User Interface"]
original_description: "browser-use-web-ui: A powerful and user-friendly web interface for orchestrating browser-based agents with visual monitoring."
english_summary: "A comprehensive web dashboard for managing and visualizing autonomous browser-based agents."
chinese_summary: null
problems_solved: "- High technical barrier to monitoring headful browser agents\n- Lack of 'Visual Proof' during long-running browser automation tasks\n- Difficulty managing multiple sessions and cookie persistence"
how_to_use: "Run via docker-compose and access the web UI at localhost. Define your browser missions and monitor agent progress in real-time."
sync_at: "2026-03-17T12:09:44.212Z"
---

# browser-use/web-ui

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
