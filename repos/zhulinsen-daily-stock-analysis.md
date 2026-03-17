---
id: 1131513930
repo_name: "ZhuLinsen/daily_stock_analysis"
url: "https://github.com/ZhuLinsen/daily_stock_analysis"
stars: 19404
language: "Python"
tags: ["Stock Analysis","FinTech","Investment Tools","AI Agent","Market Data","Financial Analysis","Python"]
original_description: "Daily Stock Analysis: LLM-driven stock analysis for A-share, HK, and US markets with multimodal data integration."
english_summary: "A powerful AI-driven stock analysis agent that synthesizes market data, news, and technical indicators into decision dashboards."
chinese_summary: null
problems_solved: "- Information overload for individual investors across multiple news sources\n- Difficulty in correlating 'Sentiment' from news with technical 'Price Action'\n- High latency in receiving summarized actionable intelligence during market hours"
how_to_use: "Clone the repo, install requirements, and run `python main.py --webui`. Configure your API keys for Gemini/OpenAI in the settings page."
sync_at: "2026-03-17T12:09:44.212Z"
---

# ZhuLinsen/daily_stock_analysis

### 1. Positioning
Daily Stock Analysis is a comprehensive financial intelligence platform. It uses LLMs to perform multi-modal analysis, digesting everything from K-lines to market news images for retail and professional traders.

### 2. Pain Points & Advantages
Automates the 'Due Diligence' checklist for technical, sentiment, and fundamental data. Features 'Vision-AI Smart Import'—screenshots of portfolios are automatically parsed for stock codes.

### 3. Technical Architecture
Python/FastAPI backend with a Next.js frontend. Adopts an 'Agentic Strategy' model where users choose from built-in theories like Elliott Wave or Dow Theory.

### 4. Core Implementation
`src/processor/analyzer.py` handles multi-source aggregation (Baidu, Yahoo Finance). Includes a 'Decision Dashboard' with visual health indicators and risk scores.

### 5. Code Organization
`/apps/dsa-web` houses the frontend, while `/strategies` contains YAML definitions for market analysis methodologies.

### 6. Quick Start Suggestion
Activate `AGENT_MODE=true` in the web UI and use the chat to ask for a specific strategy analysis on a stock ticker.

### 7. Summary
The 'Bloomberg Terminal' for individual investors. It effectively fuses traditional technical analysis with modern semantic news reasoning to provide a competitive edge.
