---
title: "bytedance/Dolphin"
repo_name: "bytedance/Dolphin"
url: "https://github.com/bytedance/Dolphin"
github_url: "https://github.com/bytedance/Dolphin"
stars: 8859
language: "Python"
layout: repo
tags:
  - "OCR"
  - "Document Parsing"
  - "VLM"
  - "AI"
  - "ByteDance"
---

## What it is

Dolphin is an advanced Document Image Parsing model that handles digital and photographed documents using a two-stage approach with heterogeneous anchor prompting for high accuracy.

## Problems solved

- Solves the 'messy document' problem where text
- formulas
- and tables are intertwined; overcomes the difficulty of parsing photographed documents with warped or low-quality layouts; improves reading order prediction for complex multi-column pages.

## How to get started

Clone the repo and install dependencies: `pip install -r requirements.txt`. Download pre-trained models from Hugging Face (`ByteDance/Dolphin-v2`). Run `python demo_page.py --model_path ./hf_model --input_path [image_path]` to parse a document into structured JSON/Markdown.
