---
id: 1048065319
repo_name: "thedotmack/claude-mem"
url: "https://github.com/thedotmack/claude-mem"
stars: 34477
language: "TypeScript"
tags: ["Claude","Memory","Knowledge Graph","RAG","Context Management","Node.js","Long-term memory"]
original_description: "Claude-Mem: A memory patch for Claude AI that maintains a local knowledge graph to overcome context limitations in long conversations."
english_summary: "A local knowledge-graph-based memory extension for Claude AI to sustain long-term context."
chinese_summary: null
problems_solved: "- Loss of 'long-term memory' in Claude when the token context window is exceeded.\n- Inefficiency in RAG-based systems that use simple vector search without relational context.\n- Need for a local, private alternative to cloud-hosted memory services."
how_to_use: "git clone https://github.com/thedotmack/claude-mem\nnpm install\nnpm run serve"
sync_at: "2026-03-17T12:09:44.212Z"
---

# thedotmack/claude-mem

### 1. Positioning
Claude-Mem is a community-built memory enhancement for Claude. It uses a local knowledge graph to store facts and relationships from past conversations, allowing the AI to 'remember' details even after they have aged out of its primary context window.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Solves the 'amnesia' effect in long-running AI projects and collaborative coding sessions.
- **Differentiation**: Uses a 'Graph-based RAG' approach which is superior to standard vector search for connecting disparate facts over time.

### 3. Technical Architecture
- **Tech Stack**: Node.js, SQLite (for graph storage), and OpenAI/Claude API for fact extraction.
- **Design Strategy**: Employs an 'Auto-Indexing' loop that extracts key facts from every assistant response and updates the graph asynchronously.

### 4. Core Implementation
- **Logic Layer**: `src/memory/graph_manager.ts` handles the creation and query of semantic nodes and edges.
- **Innovative**: Implements a 'Relationship Ranker' that prioritizes the most frequently mentioned entities in the current context.

### 5. Code Organization
- `/memory`: Graph logic and database migrations.
- `/integration`: Middleware for intercepting Claude API calls.

### 6. Quick Start Suggestion
Read `docs/graph-schema.md` to understand how conversation turns are modeled as semantic triples (Subject-Predicate-Object).

### 7. Summary
**Essence**: A 'cybernetic hippocampus' for Claude. Key learning is the application of graph theory to solve LLM context decay.
