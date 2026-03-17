---
id: 1065936302
repo_name: "Open-Dev-Society/OpenStock"
url: "https://github.com/Open-Dev-Society/OpenStock"
stars: 9378
language: "TypeScript"
tags: ["FinTech","Next.js","AI","MongoDB","Financial Dashboard"]
original_description: "OpenStock: An open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights."
english_summary: "OpenStock is an open-source financial dashboard built with Next.js and MongoDB, providing real-time stock tracking, AI-personalized news summaries, and TradingView-powered visualizations."
chinese_summary: null
problems_solved: "- Provides a free alternative to paid financial terminals; streamlines the 'onboarding' of new investors through AI-personalized welcome flows; saves time by aggregating cross-market news into daily personalized digests based on user watchlists."
how_to_use: "Clone the repo, install dependencies with `pnpm install`, and configure your `.env` with a MongoDB URI and Finnhub API key. Run `pnpm dev` for the frontend and `npx inngest-cli@latest dev` for background AI tasks."
sync_at: "2026-03-17T12:09:44.212Z"
---

# Open-Dev-Society/OpenStock

### 1. Positioning
OpenStock positions itself as the 'Community-Built Terminal'. It targets retail investors and students who want professional-grade data visualization and personalized AI insights without the high subscription costs of platforms like Bloomberg or Morningstar.

### 2. Pain Points & Advantages
Financial data is often fragmented or behind paywalls. OpenStock's advantage is its 'Open Integration'—it bundles Finnhub data, TradingView charts, and Google Gemini AI into one cohesive, free-to-use experience. It emphasizes 'Transparency' through its AGPL-3.0 license and community-driven development path.

### 3. Technical Architecture
Modern full-stack architecture using Next.js 15 (App Router), TypeScript, and Tailwind CSS v4. It uses MongoDB for user data/watchlists and Inngest for event-driven workflows (like cron-based news summaries and AI processing). Better Auth handles secure user identification.

### 4. Core Implementation
Key features include a Command+K global search palette, interactive candlestick charts, and specialized Inngest functions that use the Gemini API to generate personalized daily financial summaries based on a user's specific watchlist and risk profile.

### 5. Code Organization
A clean Next.js structure: `/app` for routes, `/components` for the atomic UI library (shadcn/ui), and `/lib` for server actions (Finnhub/Inngest). It includes a dedicated `test-db.mjs` script to ensure environment health before deployment.

### 6. Quick Start Suggestion
Run the Docker Compose setup to get a local MongoDB instance in seconds. Sign up and add 'AAPL' to your watchlist—then check the Inngest dev server to see the AI agent preparing your first personalized market brief.

### 7. Summary
OpenStock is a powerful showcase of modern web technologies aimed at democratization. By combining high-fidelity UI with robust background orchestration, it provides a blueprint for building accessible, intelligence-driven financial applications.
