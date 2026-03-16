---
title: "dwzhu-pku/PaperBanana"
repo_name: "dwzhu-pku/PaperBanana"
url: "https://github.com/dwzhu-pku/PaperBanana"
github_url: "https://github.com/dwzhu-pku/PaperBanana"
stars: 5046
language: "Python"
layout: repo
tags:
  - "AI Agents"
  - "Academic Illustration"
  - "Scientific Visualization"
  - "Image Generation"
  - "Multi-Agent"
  - "Research Tools"
  - "Open Source"
---

## What it is

PaperBanana is a sophisticated multi-agent framework designed to automate the creation of high-quality scientific diagrams and plots. It acts as a creative team where specialized agents (Retriever, Planner, Stylist, Visualizer, and Critic) work together to transform raw research text or method descriptions into publication-ready visual assets.

## Problems solved

- Steep learning curve of design tools like Adobe Illustrator for researchers
- Inconsistency and aesthetic limitations of standard AI image generators when handling technical diagrams
- Need for semantically accurate visualizations that reflect specific research methodologies rather than generic concepts

## How to get started

Clone the repo and install dependencies with `uv`. Users can use the interactive Streamlit demo (`demo.py`) to paste method sections and captions. The framework then retrieves relevant examples, plans the layout, refines the style, and generates candidates that can be iteratively improved by the Critic agent.
