---
title: "rednote-hilab/dots.ocr"
repo_name: "rednote-hilab/dots.ocr"
url: "https://github.com/rednote-hilab/dots.ocr"
github_url: "https://github.com/rednote-hilab/dots.ocr"
stars: 7998
language: "Python"
layout: repo
tags:
  - "OCR"
  - "VLM"
  - "Open-Source-AI"
  - "Document-Layout"
  - "SVG-Parsing"
  - "Multilingual"
---

## What it is

A state-of-the-art multilingual OCR and image parsing model that converts document layout and complex graphics into structured text or SVG.

## Problems solved

- Poor performance on non-Latin scripts; loss of structure (tables/formulas) during digitization; lack of tools for converting charts into code.

## How to get started

Requires Python 3.12 and PyTorch 2.7; deploy via vLLM for best performance using 'vllm serve rednote-hilab/dots.ocr-1.5'.
