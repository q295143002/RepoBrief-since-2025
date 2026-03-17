---
id: 926861272
repo_name: "dzhng/deep-research"
url: "https://github.com/dzhng/deep-research"
stars: 18562
language: "TypeScript"
tags: ["AI Research","Web Scraping","Information Retrieval","Auto-GPT","Deep Learning","Open Source","Agentic RAG"]
original_description: "dzhng/deep-research: An open-source implementation of a deep research agent that can browse the web and synthesize information autonomously."
english_summary: "An autonomous AI research assistant that browses the web to synthesize deep, multi-page reports."
chinese_summary: null
problems_solved: "- LLMs limited by internal training data for recent or niche topics\n- High manual effort in 'Tab-Hopping' across many sources for a single report\n- Hallucinations caused by out-of-date info in static model contexts"
how_to_use: "Clone the repo and run with npm. Use `--topic` to specify your research goal, e.g., `npm run start -- --topic \"The future of RISC-V in 2025\"`."
sync_at: "2026-03-17T12:09:44.212Z"
---

# dzhng/deep-research

### 1. Positioning
dzhng/deep-research is a popular open-source researcher agent. It uses an iterative search-and-refine loop to crawl relevant web pages and structure findings into cited reports, acting as a free community alternative to OpenAI's deep research.

### 2. Pain Points & Advantages
Fixes the 'Surface Level Summary' problem by forcing multi-step search queries. Fully transparent and hackable—users can swap search engines (Tavily, Brave, Google) and models (OpenAI, Claude, Llama 3).

### 3. Technical Architecture
Next.js and OpenAI SDK based, using Tavily for enterprise search. Adopts a 'Breadth-First' then 'Depth-First' crawling strategy.

### 4. Core Implementation
`researcher.ts` manages the recursive loop of searching and synthesis. Features 'Breadcrumb Visualization' so users can see exactly which websites the agent is visiting in real-time.

### 5. Code Organization
`/src/tools` contains browser and search wrappers, and `/src/prompts` houses multi-stage templates for planning and aggregation.

### 6. Quick Start Suggestion
Experiment with the `depth` parameter (e.g., `--depth 5`) to observe how the agent's reasoning depth increases as it explores more search sub-nodes.

### 7. Summary
The 'Autonomous Librarian' for the live web. It proves the efficacy of iterative agentic search loops in overcoming LLM knowledge cutoffs and improving factual accuracy.
