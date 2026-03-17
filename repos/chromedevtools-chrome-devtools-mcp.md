---
id: 1054793726
repo_name: "ChromeDevTools/chrome-devtools-mcp"
url: "https://github.com/ChromeDevTools/chrome-devtools-mcp"
stars: 28759
language: "TypeScript"
tags: ["Chrome DevTools","MCP","Debugging","Web Development","Performance Audit","TypeScript","CDP"]
original_description: "Chrome-DevTools-MCP: A Model Context Protocol server that gives AI agents direct access to Chrome's developer tools for debugging and auditing."
english_summary: "An official MCP server for AI-driven browser debugging and performance auditing via Chrome DevTools."
chinese_summary: null
problems_solved: "- AI agents lacking the 'technical vision' into network logs, console errors, and performance traces.\n- Slow manual process of auditing accessibility (WCAG) and SEO for web applications.\n- Inability of AI to 'live-debug' JavaScript execution inside a running browser."
how_to_use: "npx chrome-devtools-mcp@latest"
sync_at: "2026-03-17T12:09:44.212Z"
---

# ChromeDevTools/chrome-devtools-mcp

### 1. Positioning
Chrome-DevTools-MCP is a powerful bridge between AI and the Chrome DevTools Protocol (CDP). It allows AI agents to perform professional-grade web audits, debug console errors, and inspect network traffic, effectively giving the AI the same tools as a senior web developer.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Automates the 'Discovery' phase of debugging where a developer has to manually click through tabs to find a failed network request or a slow resource.
- **Differentiation**: Deeply integrated with Chrome's native auditing engines (like Lighthouse), providing the AI with high-fidelity performance metrics.

### 3. Technical Architecture
- **Tech Stack**: TypeScript, Chrome-Remote-Interface (CDP wrapper), MCP SDK.
- **Design Strategy**: Uses 'Diagnostic Tools' as MCP primitives, allowing an agent to ask "Why is this page slow?" and receive a structured performance trace.

### 4. Core Implementation
- **Logic Layer**: `src/tools/network.ts` implements interceptors for XHR/Fetch requests, providing the AI with full request/response context.
- **Innovation**: Features 'Live JS Evaluation'—allowing the agent to run code snippets in the browser console to verify state.

### 5. Code Organization
- `/tools`: Modules for Console, Network, Performance, and Accessibility audits.
- `/browser`: Logic for auto-connecting to running Chrome instances.

### 6. Quick Start Suggestion
Connect it to a 'Bug Hunting' agent to see it automatically identify a 404 resource in the network tab and propose a fix in the source code.

### 7. Summary
**Essence**: The 'Digital Eye' for web internals. Key learning is the semantic mapping of low-level browser metrics to high-level debugging insights.
