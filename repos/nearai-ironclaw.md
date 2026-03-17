---
id: 1148615527
repo_name: "nearai/ironclaw"
url: "https://github.com/nearai/ironclaw"
stars: 9816
language: "Rust"
tags: ["Security","Rust","WASM","Privacy","AI Agent"]
original_description: "IronClaw: Your secure personal AI assistant, always on your side. Built in Rust for speed, security, and transparency, featuring a WASM sandbox for untrusted tools."
english_summary: "IronClaw is a security-first, Rust-based personal AI assistant that executes tools in a WASM sandbox with local data residency and multi-layered protection."
chinese_summary: null
problems_solved: "- Protects against prompt injection and data exfiltration through a capability-based WASM sandbox; guarantees privacy by storing all data locally in PostgreSQL; replaces opaque AI systems with a transparent\n- open-source Rust implementation."
how_to_use: "Requires Rust 1.85+ and PostgreSQL with pgvector. Clone and build with `cargo build --release`. Run `ironclaw onboard` to set up the database and LLM providers. Access the assistant via CLI or the web gateway."
sync_at: "2026-03-17T12:09:44.212Z"
---

# nearai/ironclaw

### 1. Positioning
IronClaw targets 'sovereign users' and privacy-conscious developers who need an AI agent but refuse to upload their sensitive data to cloud platforms. It positions itself as a robust, native alternative to browser-based or Electron-heavy assistants.

### 2. Pain Points & Advantages
Most agents run tools with full system permissions, creating a massive security risk. IronClaw solves this via a WASM sandbox: tools only get the explicit permissions (HTTP, Secrets) you grant them. Other core advantages include 'Reciprocal Rank Fusion' for superior RAG and a 'Heartbeat System' for proactive background automation.

### 3. Technical Architecture
Written in pure Rust for high performance and a single-binary footprint. It uses PostgreSQL + pgvector for its long-term memory and runs untrusted plugins in a WASM environment. The architecture uses an 'Agent Loop' with intent routing and a parallel job scheduler.

### 4. Core Implementation
Supports the Model Context Protocol (MCP) and dynamic tool building. It includes a 'Safety Layer' for pattern-based injection detection and 'Credential Protection' where secrets are injected at the host boundary, never exposed to the AI model itself.

### 5. Code Organization
Organized into core logic (`src/`), a web gateway, and specialized 'Channels' (Telegram, Slack, HTTP) which are themselves built as WASM modules for maximum isolation and extensibility.

### 6. Quick Start Suggestion
Run `ironclaw onboard` to connect your local PostgreSQL, then try the REPL. Use the 'Dynamic Tool Building' feature: 'Build me a tool that searches my local filesystem for PDF invoices and summarizes their totals'—watch it generate and run a safe WASM package.

### 7. Summary
IronClaw is the gold standard for secure, local-first AI agents. By applying modern systems engineering (Rust, WASM) to the agent problem, it provides a level of trust and performance that is currently unmatched in the open-source ecosystem.
