---
id: 1020672081
repo_name: "Usagi-org/ai-goofish-monitor"
url: "https://github.com/Usagi-org/ai-goofish-monitor"
stars: 9399
language: "Python"
tags: ["Web Scraping","AI Agent","Playwright","Xianyu","Python"]
original_description: "Goofish Monitor: 基于 Playwright 和 AI 的闲鱼多任务实时监控工具，提供完整的 Web 管理界面。"
english_summary: "Goofish Monitor is an AI-powered real-time tracking tool for the Xianyu (Goofish) marketplace, featuring multi-tasking, visual management, and automated item value analysis via LLMs."
chinese_summary: null
problems_solved: "- Eliminates the need for manual refreshing to find bargain items; solves the 'low-quality' notification issue by using AI to filter out junk/scam results; provides a centralized dashboard for managing multiple monitoring tasks with different criteria."
how_to_use: "Deploy via Docker: `docker compose up -d`. Access the UI at `http://localhost:8000`, import your Xianyu login cookie via the specialized Chrome extension, and create a task by describing your desired product in natural language."
sync_at: "2026-03-17T12:09:44.212Z"
---

# Usagi-org/ai-goofish-monitor

### 1. Positioning
Goofish Monitor is a high-utility 'Sniping' tool for second-hand market enthusiasts. It targets professional resellers and hobbyists who need early access to undervalued items on China's largest second-hand platform, Xianyu.

### 2. Pain Points & Advantages
Manual marketplace monitoring is time-consuming and prone to missing deals. Goofish Monitor's advantage is its 'AI Evaluator'—it doesn't just match keywords; it uses multi-modal LLMs to 'look' at product photos and descriptions to judge if an item is a genuine bargain or a scam. Its 'Multi-account rotation' feature helps bypass platform anti-bot measures.

### 3. Technical Architecture
Built on a Python (FastAPI) backend leveraging Playwright for browser automation. It uses a React-based frontend for management and SQLite for persistent storage of tasks and 'scraped' item history. It supports containerized deployment with a built-in Chromium instance.

### 4. Core Implementation
Features a 'Natural Language Task' system: users describe what they want (e.g., 'A white iPhone 15 Pro with no scratches under 3000 RMB'), and the system generates the complex logic and prompts required to monitor and filter those specific items. It supports deep notification hooks for Telegram, WeChat, and Discord.

### 5. Code Organization
The project is divided into `src/` (backend logic), `web-ui/` (frontend), and specialized 'spider' scripts. It includes a mermaid diagram in the README detailing the autonomous loop: Search -> Fetch -> Download Images -> AI Analyze -> Notify.

### 6. Quick Start Suggestion
Install the 'Xianyu Login State Extractor' extension to quickly fetch your login cookies. Once in the dashboard, try creating an 'AI-Judged' task for a high-value item and watch the real-time logs as the agent starts its first sweep.

### 7. Summary
Goofish Monitor is a perfect example of AI-augmented web automation. By combining professional-grade scraping (Playwright) with modern LLM reasoning, it provides a significant edge in the competitive second-hand marketplace.
