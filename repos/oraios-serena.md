---
id: 953683578
repo_name: "oraios/serena"
url: "https://github.com/oraios/serena"
stars: 21442
language: "Python"
tags: ["MCP","Coding Agent","Semantic Search","AST","Code Refactoring","Developer Tools","Structural Editing"]
original_description: "A powerful coding agent toolkit providing semantic retrieval and editing capabilities through MCP."
english_summary: "A suite of professional MCP servers for high-precision semantic code search and automated multi-file editing."
chinese_summary: null
problems_solved: "- Context bottlenecks in coding agents reading too many files\n- Inaccurate search results using standard string matching on large codebases\n- High risk of syntax breaking during automated bulk refactors"
how_to_use: "Run via npx: `npx @oraios/serena-mcp`. Connect to Cursor, Claude Desktop, or Windsurf."
sync_at: "2026-03-17T12:09:44.212Z"
---

# oraios/serena

### 1. Positioning
Serena is a professional-grade MCP server suite specializing in 'Semantic Grounding' and 'Structural Code Editing' via AST logic.

### 2. Pain Points & Advantages
Fixes the 'Lost in Code' problem via semantic indexing. Features 'Atomic Multi-file Edits' for guaranteed rollbacks on failure.

### 3. Technical Architecture
TypeScript based, using Tree-sitter for AST and vector-based local indexing.

### 4. Core Implementation
High-reliability patcher for complex document shifts. Semantic retrieval uses hybrid BM25 + Vector search for 5x faster discovery.

### 5. Code Organization
`/mcp-servers` for protocol endpoints; `/core/index` for the high-performance indexing engine.

### 6. Quick Start Suggestion
Enable 'Semantic Search' in your editor and ask about relationships between distant modules.

### 7. Summary
A precision instrument for AI coding that fuses LLM reasoning with rigorous static analysis.
