---
id: 1128267392
repo_name: "chatfire-AI/huobao-drama"
url: "https://github.com/chatfire-AI/huobao-drama"
stars: 8800
language: "Vue"
tags: ["Video Generation","AI Drama","Go","Vue","Full-Stack"]
original_description: "Huobao Drama: An AI-powered full-stack production platform for short dramas. Automates script parsing, character design, and video generation."
english_summary: "Huobao Drama is an end-to-end AI production platform that transforms ideas into short videos by automating scriptwriting, character creation, storyboarding, and video synthesis using LLM and VLM technologies."
chinese_summary: null
problems_solved: "- Drastically reduces the cost and time of short drama production; solves the 'consistency' problem in AI video by managing persistent character portraits; provides a unified UI for non-technical creators to orchestrate complex AI video workflows."
how_to_use: "Requires Go and Node.js. Clone the repository, run `go mod download`, then `npm install` in the `web/` directory. Deploy via Docker Compose: `docker-compose up -d`. Connect your AI providers (OpenAI, Gemini, etc.) via the Web UI to start creating."
sync_at: "2026-03-17T12:09:44.212Z"
---

# chatfire-AI/huobao-drama

### 1. Positioning
Huobao Drama positions itself as the 'AI Movie Studio' for the TikTok era. It targets content creators and studios looking to leverage AI to mass-produce high-engagement vertical video content with minimum human intervention.

### 2. Pain Points & Advantages
Creating consistent AI stories across multiple shots is extremely labor-intensive. Huobao's advantage is its 'Production Management' approach—it uses a DDD (Domain-Driven Design) backend to manage state across script parsing, character design, and video composition. It features a unique 'Global Style System' to ensure artistic consistency throughout an entire series.

### 3. Technical Architecture
A full-stack Go (Gin) + Vue3 (Tailwind) application. It relies on FFmpeg for heavy-duty video processing and GORM (SQLite) for state persistence. It supports multiple AI backends (OpenAI for scripts, various providers for images/video) and includes a 'Nine-Grid' tool for precise action sequence cropping.

### 4. Core Implementation
Key features include: Automated 'Storyboard Scenarios', 'Character Batch Generation', and 'Transition Effects' management. It supports a 'Local-Storage-First' strategy to mitigate external link expiration—essential for long-term project management in the AI space.

### 5. Code Organization
Structured with a clear separation between the API layer, Application services, and Domain models. The frontend is organized as a modern Vue3 app with Pinia for state management. It provides clear cloud deployment paths (optimized for 3080Ti GPUs) and Docker options.

### 6. Quick Start Suggestion
Install the Docker version and use the 'One-Click' sample project. Try parsing a simple 3-scene script. Watch how the system identifies characters, generates consistent portraits for them, and then produces a storyboard image for each shot before final video rendering.

### 7. Summary
Huobao Drama is a comprehensive and professional solution for AI-assisted storytelling. By focusing on the 'Workflow Orchestration' rather than just individual generations, it provides a truly industrial tool for the booming short drama market.
