---
id: 964395174
repo_name: "dyad-sh/dyad"
url: "https://github.com/dyad-sh/dyad"
stars: 19873
language: "TypeScript"
tags: ["App Builder","Local AI","Next.js","React","AI Coding","Low-Code","Developer Tools"]
original_description: "Dyad: Local, open-source AI app builder for power users. A v0 / Lovable / Replit alternative."
english_summary: "A high-performance local AI app builder that converts prompts into full-stack web applications."
chinese_summary: null
problems_solved: "- High monthly costs and privacy concerns with cloud-based AI app builders\n- Difficulty in maintaining complex React/Next.js codebases created by AI without a visual IDE\n- Lack of 'Local-First' developer tools that integrate with existing Git workflows"
how_to_use: "Install globally via npm: `npm install -g @dyad-sh/dyad`. Use `dyad create my-app` to start a new project guided by AI."
sync_at: "2026-03-17T12:09:44.212Z"
---

# dyad-sh/dyad

### 1. Positioning
Dyad is a 'Local-Host' alternative to popular AI app builders. It allows power users to generate, edit, and deploy full-stack Next.js applications using natural language, all while running locally on their own machines.

### 2. Pain Points & Advantages
Eliminates vendor lock-in, giving developers full ownership of source code and deployment. Features 'Two-Way Sync'—edit code in VS Code or the Dyad UI, and both stay synchronized in real-time.

### 3. Technical Architecture
Next.js, Tailwind CSS, and a specialized 'Shadow-DOM' for live previewing. Adopts a 'Component-First' generation approach for higher reliability during incremental builds.

### 4. Core Implementation
`lib/generator/nextjs.ts` converts high-level descriptions into modular React components. Features 'Live Error-Correction'—automatically detecting build errors and prompting self-fixes.

### 5. Code Organization
`/src/ui` houses the visual editor and preview engine, while `/src/agents` contains prompting and code-execution logic for different stacks.

### 6. Quick Start Suggestion
Run `dyad create` and ask for a 'Real-time kanban board' to see the speed and quality of the local generation engine.

### 7. Summary
The 'Open-Source v0'. It masterfully handles real-time code-to-preview synchronization, making rapid AI prototyping accessible on local hardware.
