---
title: "anthropics/skills"
repo_name: "anthropics/skills"
url: "https://github.com/anthropics/skills"
github_url: "https://github.com/anthropics/skills"
stars: 92402
language: "Python"
layout: repo
tags:
  - "Claude"
  - "Agent Skills"
  - "Anthropic"
  - "Prompt Engineering"
  - "Modular AI"
  - "Developer Tools"
  - "Best Practices"
---

## What it is

Anthropic's official collection of modular skills to extend Claude's task-specific capabilities.

## Problems solved

- Performance degradation of general-purpose LLMs on specialized workflows.
- Need for a standardized way to share 'best practice' instructions across AI instances.
- Inconsistency in AI output format when handling complex document generation.

## How to get started

git clone https://github.com/anthropics/skills
# In Claude Code: /plugin marketplace add anthropics/skills

## Detailed report

### 1. Positioning
This repository is Anthropic's official collection of modular 'Skills.' By providing structured instructions and resource packages, it significantly enhances Claude's performance on vertical tasks. It is aimed at developers and enterprise users looking to productize AI capabilities.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Addresses performance instability and formatting chaos in professional areas such as financial report generation and complex PDF parsing.
- **Differentiation**: Maintained directly by the model creator, these prompt templates align perfectly with Claude's underlying weights, representing current 'best practices.'

### 3. Technical Architecture
- **Tech Stack**: Based on a modular definition standard using Markdown + YAML Frontmatter.
- **Design Strategy**: Follows the 'Just-In-Time (JIT) Injection' principle, encapsulating instructions and examples into independent units via `SKILL.md`.

### 4. Core Implementation
- **Implementation Strategy**: Focuses on using 'Few-shot Learning' and 'Negative Constraints' to precisely navigate model behavior.
- **Highlight**: Files in `skills/docx` demonstrate how sophisticated instruction structures can allow an LLM to perfectly manipulate binary document components.

### 5. Code Organization
- `skills/`: Categorized skill blocks (Creative, Technical, Enterprise).
- `template/`: Unified template for skill definitions.
- `spec/`: Defines the open Agent Skills industry standard.

### 6. Quick Start Suggestion
Read `template/SKILL.md` to understand the standardization philosophy behind Anthropic's ecosystem.

### 7. Summary
**Essence**: A 'professional certification' library for the LLM era. The most notable takeaway is the prompt engineering capability that formats minimalist text into powerful behavioral logic.
