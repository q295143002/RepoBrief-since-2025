---
title: "tw93/Mole"
repo_name: "tw93/Mole"
url: "https://github.com/tw93/Mole"
github_url: "https://github.com/tw93/Mole"
stars: 39524
language: "Shell"
layout: repo
tags:
  - "Web Scraping"
  - "AI Scraper"
  - "Data Extraction"
  - "JSON"
  - "Node.js"
  - "Minimalist Tools"
  - "Semantic Search"
---

## What it is

A minimalist, semantic web scraper that converts any webpage into clean JSON/Markdown via AI.

## Problems solved

- Constant breakage of traditional scrapers due to site layout and CSS changes
- Complexity of writing XPath/CSS selectors for non-technical users
- Inefficiency in extracting specific data types (prices, dates) from messy, unstructured HTML

## How to get started

Install globally via npm: `npm install -g @tw93/mole`. Run it on any URL: `mole "https://example.com/product" --type product` to get clean JSON.

## Detailed report

### 1. Positioning
Mole is a next-generation web scraping tool that replaces fragile CSS selectors with LLM-based semantic extraction. It aims to make data extraction accessible to everyone by allowing users to describe *what* they want instead of *how* to find it.

### 2. Pain Points & Advantages
Eliminates the maintenance burden of scrapers—even if a site changes its layout, Mole can still find the data based on its meaning. It is extremely minimalist with a focus on speed and simplicity over complex feature creep.

### 3. Technical Architecture
Built with Node.js and uses highly optimized LLM prompts for 'one-shot' extraction. It employs a hybrid approach: fast heuristic pre-processing to reduce token counts followed by LLM-driven structured mapping.

### 4. Core Implementation
The `extract.ts` core script converts a messy DOM tree into a clean text representation then passes it to the AI for JSON mapping. Demonstrates an efficient HTML pruning strategy that keeps costs low while maintaining high accuracy.

### 5. Code Organization
`/src` contains the core CLI and extraction logic, while `/prompts` stores fine-tuned instructions for different categories of websites (E-commerce, News, Social).

### 6. Quick Start Suggestion
Read `src/prompts/default.md` to see how the project instructs the AI to ignore navigation bars and ads while focusing on the core content of any webpage.

### 7. Summary
A 'semantic shovel' for the web. It reliably reduces messy semi-structured web data into deterministic JSON structures with minimal configuration.
