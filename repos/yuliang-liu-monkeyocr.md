---
title: "Yuliang-Liu/MonkeyOCR"
repo_name: "Yuliang-Liu/MonkeyOCR"
url: "https://github.com/Yuliang-Liu/MonkeyOCR"
github_url: "https://github.com/Yuliang-Liu/MonkeyOCR"
stars: 6534
language: "Python"
layout: repo
tags:
  - "OCR"
  - "Document-Parsing"
  - "VLM"
  - "PDF"
  - "Research"
  - "Python"
  - "Open-Source"
---

## What it is

MonkeyOCR is an open-source document parsing VLM that uses a Structure-Recognition-Relation triplet paradigm to efficiently parse PDFs and images into structured Markdown — handling text, formulas, tables, and reading order across 9 document types. MonkeyOCR-pro-1.2B outperforms all tested VLMs including GPT-4o and Gemini 2.5-Pro on OmniDocBench, at 1.4+ pages/sec on a 4090.

## Problems solved

- Multi-tool document parsing pipelines are complex and brittle
- while using large general-purpose VLMs page-by-page is slow and expensive. MonkeyOCR's SRR paradigm unifies structure detection
- content recognition
- and block-relationship modeling in a single compact model
- achieving higher accuracy at much lower cost.

## How to get started

Install via guide. Download: `python tools/download_model.py -n MonkeyOCR-pro-3B`. Parse: `python parse.py input_path` (PDF, image, or folder). Single-task: `python parse.py input.pdf -t text|formula|table`. API: `uvicorn api.main:app --port 8000`. Gradio: `python demo/demo_gradio.py`. Docker: `docker compose up monkeyocr-demo`.
