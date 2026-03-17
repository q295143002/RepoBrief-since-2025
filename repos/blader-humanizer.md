---
id: 1136666433
repo_name: "blader/humanizer"
url: "https://github.com/blader/humanizer"
stars: 8921
language: null
tags: ["Claude Code","Writing","NLP","Productivity","Text Processing"]
original_description: "Humanizer: A Claude Code skill that removes signs of AI-generated writing from text, making it sound more natural and human."
english_summary: "Humanizer is a professional-grade text refinement skill for Claude Code that identifies and fixes 24 distinct 'AI-isms' based on Wikipedia's AI-cleanup standards to produce natural, human-sounding prose."
chinese_summary: null
problems_solved: "- Eliminates 'promotional' and 'inflated' language common in LLM outputs; solves the 'Rule of Three' and 'AI Vocabulary' (landscape\n- testament) repetition issue; cleans up chatbot artifacts and sycophantic tones for professional publishing."
how_to_use: "Install into Claude Code: `git clone https://github.com/blader/humanizer.git ~/.claude/skills/humanizer`. Invoke by asking Claude: 'Please humanize this text: [paste text]' or simply by running the `/humanizer` command within the CLI."
sync_at: "2026-03-17T12:09:44.212Z"
---

# blader/humanizer

### 1. Positioning
Humanizer is an 'Aesthetic Filter' for AI writers. It targets bloggers, researchers, and professional communicators who use AI for drafting but need the final output to pass the 'Vibe Check' of a human reader. It's an essential tool for avoiding the 'AI Slop' stigma in public-facing copy.

### 2. Pain Points & Advantages
AI text often feels 'stiff' or 'formulaic' due to statistical guessing. This skill's advantage is its 'Strict Diagnostic' approach—instead of just saying 'make it better', it uses 24 specific patterns (Significance inflation, Copula avoidance, Synonym cycling) derived from the Wikipedia AI Cleanup project. It includes a second 'obviously AI' audit pass to catch remaining 'tell-tale' signs.

### 3. Technical Architecture
Implemented as a high-density instruction module (`SKILL.md`) for the Claude Code ecosystem. It uses a 'multi-pass' reasoning strategy: first detecting violations across 5 categories (Content, Language, Style, Comm, Filler), then performing a zero-base rewrite grounded in those findings.

### 4. Core Implementation
Includes a comprehensive 'Transformation Table' with specific 'Before/After' examples for every pattern. Patterns cover everything from structural issues (Inline-header lists) to stylistic nuances (Curly quotes vs straight quotes). It explicitly forbids 'significance inflation' and 'AI vocabulary' like 'additionally' and 'showcasing'.

### 5. Code Organization
A lean, single-file skill repository. The YAML frontmatter defines the capabilities, and the Markdown content contains the 1000+ words of specialized 'De-AI-ing' instructions that Claude follows during the humanization prompt.

### 6. Quick Start Suggestion
Paste an AI-generated intro (e.g., 'In today's rapidly evolving technological landscape...') into the `/humanizer` command. Watch as the skill transforms the 'filler slop' into a direct, opinionated, and variable-length sequence of sentences that sound like they were written by a human expert.

### 7. Summary
Humanizer is a masterclass in 'High-Resolution Prompting'. By providing the agent with a formal taxonomy of bad habits and their human alternatives, it elevates AI writing from 'statistically average' to 'genuinely engaging'.
