---
id: 1139782619
repo_name: "saturndec/waoowaoo"
url: "https://github.com/saturndec/waoowaoo"
stars: 9279
language: "TypeScript"
tags: ["AI Video","Film Production","Next.js","Docker","Storyboarding"]
original_description: "waoowaoo AI 影视 Studio: 一款基于 AI 技术的短剧/漫画视频制作工具，支持从小说文本自动生成分镜、角色、场景。"
english_summary: "waoowaoo is an AI-powered film studio for short dramas and comics, automating the entire workflow from novel script analysis to character design and final video synthesis."
chinese_summary: null
problems_solved: "- Streamlines the labor-intensive process of converting text to video content; solves character consistency issues across multiple scenes (storytelling consistency); provides a unified interface for script analysis\n- voiceover\n- and visual synthesis."
how_to_use: "Requires Docker Desktop. Run `docker compose up -d` after downloading the `docker-compose.yml`. Access the studio at `http://localhost:13000`, configure your API keys in the settings center, and upload a novel text to begin analysis."
sync_at: "2026-03-17T12:09:44.212Z"
---

# saturndec/waoowaoo

### 1. Positioning
waoowaoo positions itself as the 'Next-Gen Creative Workflow' for short-form video creators. It targets individual creators and small studios who want to produce high-quality AI short dramas or manga videos with minimal manual effort.

### 2. Pain Points & Advantages
Creating a video from a story usually requires multiple disconnected tools (Midjourney, ElevenLabs, Runway). waoowaoo's primary advantage is its 'Full-Stack Integration'—it manages everything from the initial LLM-based script breakdown to the final assembly of shots and audio within a single Next.js-based application.

### 3. Technical Architecture
Built with Next.js 15 and React 19. It uses MySQL (via Prisma) for project persistence and Redis (via BullMQ) for managing the heavy asynchronous jobs of image generation and video rendering. It is designed to be fully containerized via Docker.

### 4. Core Implementation
Features include: 'AI Script Analyst' for character/scene extraction, 'Consistency Engine' to ensure characters look the same in every shot, and a multi-character 'AI Voiceover' system. It uses Tailwind CSS v4 for a modern, responsive editor interface.

### 5. Code Organization
A clean monorepo structure. It includes a `Caddyfile` for easy HTTPS setup (important for browser concurrency limits). The backend utilizes a job-queue pattern to handle the unpredictable latency of third-party AI APIs.

### 6. Quick Start Suggestion
Use the 'Pull Pre-built Image' method for a zero-config start. Once inside, enter the tutorial section and use a sample short story—watch how the system automatically identifies 'Protagonist' and 'Antagonist' characters before generating their consistent appearance profiles.

### 7. Summary
waoowaoo is an ambitious tool that lowers the barrier to entry for digital storytelling. By orchestrating a complex chain of AI models into a user-friendly studio, it empowers a new class of 'One-Person Film Crews'.
