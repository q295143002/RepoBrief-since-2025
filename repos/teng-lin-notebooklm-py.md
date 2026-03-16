---
title: "teng-lin/notebooklm-py"
repo_name: "teng-lin/notebooklm-py"
url: "https://github.com/teng-lin/notebooklm-py"
github_url: "https://github.com/teng-lin/notebooklm-py"
stars: 5382
language: "Python"
layout: repo
tags:
  - "NotebookLM"
  - "Python API"
  - "AI Agent"
  - "Research Tools"
  - "Content Generation"
  - "SDK"
  - "Open Source"
---

## What it is

NotebookLM-py is a comprehensive, unofficial Python SDK and CLI for Google's NotebookLM. It enables programmatic access to features not fully exposed in the web UI, such as batch downloads, structured quiz/flashcard export (JSON/Markdown), and hierarchical mind map extraction. It also includes an 'agentic skill' to integrate NotebookLM directly into AI agents like Claude Code.

## Problems solved

- Lack of an official API for Google NotebookLM
- Manual effort required for bulk importing sources (URLs, PDFs, YouTube)
- Inability to export NotebookLM artifacts like quizzes and mind maps in machine-readable formats

## How to get started

Install via `pip install notebooklm-py`. Use `notebooklm login` to authenticate via browser cookies. From there, you can use the CLI to create notebooks, add sources, and generate/download artifacts, or use the `NotebookLMClient` in your own Python scripts.
