---
title: "deepseek-ai/DeepSeek-OCR"
repo_name: "deepseek-ai/DeepSeek-OCR"
url: "https://github.com/deepseek-ai/DeepSeek-OCR"
github_url: "https://github.com/deepseek-ai/DeepSeek-OCR"
stars: 22683
language: "Python"
layout: repo
tags:
  - "DeepSeek"
  - "OCR"
  - "VLM"
  - "Document Understanding"
  - "Optical Compression"
  - "PyTorch"
  - "Enterprise AI"
---

## What it is

State-of-the-art vision-to-text 'Optical Compression' model for hyper-accurate document understanding.

## Problems solved

- High error rates in traditional OCR when dealing with multi-column layouts and tables.
- Inability of standard vision models to handle extremely long document contexts (100+ pages) without losing detail.
- Semantic 'Information Loss' during the transition from visual image to plain text.

## How to get started

git clone https://github.com/deepseek-ai/DeepSeek-OCR
pip install -e .
python ocr.py --image invoice.jpg --compress true
