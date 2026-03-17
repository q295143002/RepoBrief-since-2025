---
id: 1143261428
repo_name: "cloudflare/moltworker"
url: "https://github.com/cloudflare/moltworker"
stars: 9586
language: "TypeScript"
tags: ["Cloudflare Workers","Serverless","AI Agent","OpenClaw","R2 Storage"]
original_description: "moltworker: OpenClaw on Cloudflare Workers. Run the OpenClaw personal AI assistant in a Cloudflare Sandbox (containers)."
english_summary: "Moltworker is an experimental project that allows developers to host the OpenClaw AI assistant within Cloudflare's serverless container infrastructure (Sandboxes)."
chinese_summary: null
problems_solved: "- Eliminates the need for self-hosting a persistent home server for AI agents; provides a secure\n- managed environment with built-in Cloudflare Access authentication; enables persistent agent states via R2 storage integration."
how_to_use: "Requires a Cloudflare Workers Paid plan. Clone the repo, set secrets (ANTHROPIC_API_KEY, CF_ACCESS_AUD) via `wrangler secret put`, and deploy with `npm run deploy`. Access the web UI via your worker URL with a generated gateway token."
sync_at: "2026-03-17T12:09:44.212Z"
---

# cloudflare/moltworker

### 1. Positioning
Moltworker is a proof-of-concept for the 'Cloud-Native Personal Assistant'. It targets developers who want a dedicated, always-on AI gateway (OpenClaw) but prefer the reliability and security of Cloudflare's global network over a local Raspberry Pi or VPS.

### 2. Pain Points & Advantages
Hosting personal agents usually involves opening ports on a home router or managing a Linux server. Moltworker leverages 'Cloudflare Sandboxes' (containers) to provide a fully managed runtime. Its major advantage is 'Tight Integration'—it natively uses R2 for storage and Cloudflare Access for enterprise-grade authentication.

### 3. Technical Architecture
Built on a Docker-based architecture that runs inside Cloudflare's container environment. It uses Worker scripts as a proxy gateway to handle auth and WebSocket routing. Persistence is achieved through a backup/restore cycle targeting Cloudflare R2 object storage.

### 4. Core Implementation
Supports multiple chat channels (Telegram, Discord, Slack) and includes a specialized 'Browser Automation' skill using the Chrome DevTools Protocol (CDP). It features a visual Admin UI for managing paired devices and triggered backups.

### 5. Code Organization
The repository contains the Dockerfile for the OpenClaw container, wrangler configuration for the Worker gateway, and scripts for managing the R2-based persistence layer.

### 6. Quick Start Suggestion
Deploy with `DEV_MODE=true` to locally test the container. Once in production, configure an R2 bucket and trigger a manual backup from the `/_admin/` panel to ensure your conversation history survives container restarts.

### 7. Summary
Moltworker showcases the future of serverless AI. By combining the flexibility of containers with the massive scale of Cloudflare's edge, it provides a blueprint for a globally accessible, private, and powerful AI companion.
