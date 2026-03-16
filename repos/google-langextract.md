---
title: "google/langextract"
repo_name: "google/langextract"
url: "https://github.com/google/langextract"
github_url: "https://github.com/google/langextract"
stars: 34668
language: "Python"
layout: repo
tags:
  - "Google"
  - "Language Detection"
  - "NLP"
  - "Text Extraction"
  - "Multilingual"
  - "Machine Learning"
  - "C++"
---

## What it is

Google's high-accuracy machine learning tool for multilingual language identification and extraction.

## Problems solved

- Low precision in traditional regex-based language detection for mixed-language pages.
- Difficulty in extracting clean text from complex, boiler-plate heavy HTML.
- Need for high-throughput language classification in large-scale web indexing.

## How to get started

pip install google-langextract
from langextract import identify
identify("Bonjour tout le monde")
