---
title: "hsliuping/TradingAgents-CN"
repo_name: "hsliuping/TradingAgents-CN"
url: "https://github.com/hsliuping/TradingAgents-CN"
github_url: "https://github.com/hsliuping/TradingAgents-CN"
stars: 18576
language: "Python"
layout: repo
tags:
  - "FinTech"
  - "Trading Agent"
  - "A-Share market"
  - "Quantitative Finance"
  - "Multi-Agent"
  - "Chinese AI"
  - "Investment Strategy"
---

## What it is

High-performance Chinese financial trading agent suite with native support for A-shares, Hong Kong, and US markets.

## Problems solved

- Poor support for Chinese financial news and jargon in Western-centric trading agents
- Complexity in coordinating multiple 'Analysts' (K-line, News, Macro) for a single trade decision
- High barrier of entry to create professional-grade backtesting for AI-driven strategies

## How to get started

Clone the repo and install dependencies. Launch the web UI with `python main.py --webui`. Connect your trading data providers in the configuration panel.

## Detailed report

### 1. Positioning
TradingAgents-CN is a multi-agent financial platform optimized for the Chinese market. It features native integration with A-share data providers and high-quality Chinese LLMs like Qwen and DeepSeek.

### 2. Pain Points & Advantages
Localizes 'Financial Intelligence'—ensuring AI understands the unique volatility of A-shares. Features 'Agent-Driven Strategy Questioning' for evaluating stocks via specialized theories like Elliott Wave.

### 3. Technical Architecture
Python/FastAPI backend with a Vue.js frontend. Adopts an 'Analyst-Group' model where specialized agents (K-Line, News, Macro) are synthesized by a Lead Portfolio Manager.

### 4. Core Implementation
`src/agents/finance_agent.py` handles financial prompting. Includes a 'Decision Dashboard' with reasoning logs that map sentiment scores to specific news items.

### 5. Code Organization
`/app` contains trading logic, `/frontend` houses the UI, and `/strategies` defines methodologies in YAML format.

### 6. Quick Start Suggestion
Use the 'Vision Import' feature in the web GUI to upload portfolio screenshots for instant, deep-dive AI analysis on your holdings.

### 7. Summary
The 'AI War Room' for Chinese traders. It represents a significant step in the localization of financial agentic reasoning for high-volatility markets.
