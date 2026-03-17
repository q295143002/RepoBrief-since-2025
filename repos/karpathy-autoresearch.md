---
id: 1174820787
repo_name: "karpathy/autoresearch"
url: "https://github.com/karpathy/autoresearch"
stars: 29930
language: "Python"
tags: ["AI Research","Andrej Karpathy","ArXiv","Automation","Scientific Research","Python","Paper Synthesis"]
original_description: "AutoResearch: An AI system by Karpathy designed to automate the research workflow, including paper searching, analysis, and report generation."
english_summary: "Andrej Karpathy's autonomous AI research agent for automated paper ingestion and synthesis."
chinese_summary: null
problems_solved: "- Information overload in rapidly moving scientific fields (like AI).\n- Time-consuming task of manually reading, summarizing, and connecting new research papers.\n- Difficulty in maintaining a cross-referenced database of citations and benchmarks."
how_to_use: "git clone https://github.com/karpathy/autoresearch\npip install -r requirements.txt\npython research.py --topic 'Reinforcement Learning from Task Feedback'"
sync_at: "2026-03-17T12:09:44.212Z"
---

# karpathy/autoresearch

### 1. Positioning
AutoResearch is an experimental project by Andrej Karpathy that automates the scientific research cycle. It searches ArXiv, downloads relevant PDFs, analyzes their methodologies, and cross-references them to generate a comprehensive 'State-of-the-Field' report. Targeted at researchers and deep learners.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Drastically reduces the time required to 'catch up' on a new research topic from days to minutes.
- **Differentiation**: Focuses on 'Reasoning Accuracy' rather than just speed, using multi-step verification to ensure summarized facts are actually present in the source paper.

### 3. Technical Architecture
- **Tech Stack**: Python, LangChain, and PDFMiner for high-fidelity text extraction.
- **Design Strategy**: Follows a 'Search -> Filter -> Read -> Synthesize' funnel, using the LLM at each stage to prune irrelevant content.

### 4. Core Implementation
- **Logic Layer**: `src/agent/summarizer.py` implements a 'Recursive Analysis' loop that identifies the core contribution of each paper.
- **Engineering Practice**: Implements a local vector store for citations, allowing the agent to 'jump' between referenced papers autonomously.

### 5. Code Organization
- `/fetcher`: ArXiv and Semantic Scholar API wrappers.
- `/synthesizer`: The logic for aggregating individual paper summaries into a coherent literature review.

### 6. Quick Start Suggestion
Run `research.py` with the `--verbose` flag to see how the agent 'decides' which papers are worth reading based on their abstracts.

### 7. Summary
**Essence**: A 'digital PhD candidate'. Key takeaway is the systematic automation of high-level intellectual labor.
