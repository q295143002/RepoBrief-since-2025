---
id: 1165371200
repo_name: "cloudflare/vinext"
url: "https://github.com/cloudflare/vinext"
stars: 6638
language: "TypeScript"
tags: ["Cloudflare","Next.js","Vite","TypeScript","AI-Generated-Code","Open-Source","Web-Framework"]
original_description: "Vite plugin that reimplements the Next.js API surface — deploy anywhere"
english_summary: "vinext is an open-source Vite plugin by Cloudflare that reimplements the Next.js public API (routing, SSR, RSC, server actions, middleware, caching) on Vite rather than the Next.js compiler. It achieves ~94% API coverage, natively deploys to Cloudflare Workers, and supports other platforms via Nitro. The entire codebase was mostly written by Claude Code as an AI-driven development experiment."
chinese_summary: null
problems_solved: "- Next.js apps are locked to the Vercel toolchain. vinext lets existing Next.js projects run on Vite (faster HMR\n- smaller bundles\n- clean plugin API) and deploy natively to Cloudflare Workers — enabling D1\n- KV\n- R2\n- AI bindings — while preserving the familiar Next.js API. The incremental migration (`vinext init`\n- `vinext check`) is non-destructive."
how_to_use: "Migrate: `npx vinext init` in your Next.js project root. Or manual: `npm install vinext`, replace `next` scripts with `vinext`. Fix issues: `vinext check`. Deploy to Cloudflare: `wrangler login`, then `vinext deploy`. Use Agent Skill: `npx skills add cloudflare/vinext` + tell AI to 'migrate this project to vinext'."
sync_at: "2026-03-17T12:09:44.212Z"
---

# cloudflare/vinext

### 1. Positioning
cloudflare/vinext is positioned as a vinext is an open-source vite plugin by cloudflare that reimplements the next.js public api (routing, ssr, rsc, server actions, middleware, caching) on vite rather than the next.js compiler. it achieves ~94% api coverage, natively deploys to cloudflare workers, and supports other platforms via nitro. the entire codebase was mostly written by claude code as an ai-driven development experiment. It aims to provide developers with a robust, TypeScript-based solution for vite plugin that reimplements the next.js api surface — deploy anywhere.

### 2. Pain Points & Advantages
Traditional methods in this domain often suffer from Next.js apps are locked to the Vercel toolchain. vinext lets existing Next.js projects run on Vite (faster HMR. cloudflare/vinext addresses this by vinext is an open-source vite plugin by cloudflare that reimplements the next.js public api (routing, ssr, rsc, server actions, middleware, caching) on vite rather than the next.js compiler. it achieves ~94% api coverage, natively deploys to cloudflare workers, and supports other platforms via nitro. the entire codebase was mostly written by claude code as an ai-driven development experiment, offering a significant performance boost and better developer ergonomics compared to existing alternatives.

### 3. Technical Architecture
The project is built using TypeScript, adopting a modular and scalable design. It leverages modern industry standards to ensure compatibility across different environments, focusing on efficiency and ease of integration.

### 4. Core Implementation
Main logic revolves around vite plugin that reimplements the next.js api surface — deploy anywhere. The implementation utilizes TypeScript's strengths to provide vinext is an open-source vite plugin by cloudflare that reimplements the next.js public api (routing, ssr, rsc, server actions, middleware, caching) on vite rather than the next.js compiler. it achieves ~94% api coverage, natively deploys to cloudflare workers, and supports other platforms via nitro. the entire codebase was mostly written by claude code as an ai-driven development experiment, ensuring high reliability and performance under load.

### 5. Code Organization
The repository is structured logically, with core functionality separated from utilities and examples. This organization facilitates easy navigation and contribution for developers looking to extend the tool's capabilities.

### 6. Quick Start Suggestion
To get started, migrate: `npx vinext init` in your next.js project root. or manual: `npm install vinext`, replace `next` scripts with `vinext`. fix issues: `vinext check`. deploy to cloudflare: `wrangler login`, then `vinext deploy`. use agent skill: `npx skills add cloudflare/vinext` + tell ai to 'migrate this project to vinext'. This will allow you to quickly evaluate the tool and integrate it into your existing development workflow.

### 7. Summary
An essential, TypeScript-powered utility that streamlines vite plugin that reimplements the next.js api surface — deploy anywhere; it effectively tackles Next.js apps are locked to the Vercel toolchain. vinext lets existing Next.js projects run on Vite (faster HMR while maintaining a high standard of code quality and usability.
