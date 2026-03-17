---
id: 938468965
repo_name: "musistudio/claude-code-router"
url: "https://github.com/musistudio/claude-code-router"
stars: 29575
language: "TypeScript"
tags: ["Claude Code"]
original_description: "Claude Code Router: A middleware to optimize costs and performance by routing tasks to different Claude models based on complexity."
english_summary: "A smart middleware for routing AI tasks to the most cost-effective Claude models based on complexity."
chinese_summary: null
problems_solved: "- Wasting expensive Claude 3.5 Sonnet/Opus tokens on trivial tasks (like fixing typos).\n- Latency issues when using large models for simple, fast-response features.\n- Complexity in managing model-specific prompts across a large application."
how_to_use: "npm install @musistudio/claude-code-router\nconst router = new Router();\nrouter.complete(\"Simple greeting\", { context: 'low-complexity' })"
sync_at: "2026-03-17T12:09:44.212Z"
---

# musistudio/claude-code-router

### 1. Positioning
Claude Code Router is a developer-facing middleware designed for 'Model Tiering'. It automatically analyzes incoming AI requests and routes them to the cheapest/fastest Claude model capable of handling the task (e.g., routing a docstring generation to Haiku and a complex refactor to Sonnet).

### 2. Pain Points & Advantages
- **Pain Points Solved**: Reduces AI API costs by up to 60% without sacrificing the quality of complex responses.
- **Differentiation**: Unlike simple routers, it uses a 'Complexity Estimator' (based on input token count and keyword analysis) to make routing decisions in <10ms.

### 3. Technical Architecture
- **Tech Stack**: Node.js, supporting both server-side and client-side usage.
- **Design Strategy**: Implements a 'Proxy Pattern'—it acts as a drop-in replacement for the Anthropic SDK client.

### 4. Core Implementation
- **Logic Layer**: `src/router/complexity_analyzer.ts` uses a lightweight heuristic and a vector-based classifier to predict task difficulty.
- **Engineering Practice**: Supports 'Fallthrough'—if a smaller model fails a validation check, the task is automatically re-routed to a larger model.

### 5. Code Organization
- `/models`: Rule sets for Haiku, Sonnet, and Opus capabilities.
- `/proxy`: The SDK interception logic.

### 6. Quick Start Suggestion
Read `docs/custom-rules.md` to see how you can define your own routing triggers based on your specific application domain.

### 7. Summary
**Essence**: The 'Traffic Controller' for AI costs. Key learning is the automated matching of task complexity to model capability.
