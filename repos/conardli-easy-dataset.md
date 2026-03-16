---
title: "ConardLi/easy-dataset"
repo_name: "ConardLi/easy-dataset"
url: "https://github.com/ConardLi/easy-dataset"
github_url: "https://github.com/ConardLi/easy-dataset"
stars: 13617
language: "JavaScript"
layout: repo
tags:
  - "Dataset"
  - "Fine-tuning"
  - "LLM"
  - "Data Prep"
---

## What it is

An application enabling users to intelligently parse unstructured documents to generate, clean, and format high-quality fine-tuning datasets for LLMs.

## Problems solved

- Automates the labor-intensive process of creating high-quality, structurized datasets (QA formats, dialogs) derived from raw textual or visual documents necessary for LLM fine-tuning.

## How to get started

Install via Docker Compose or download the desktop client (Windows/macOS/Linux). Upload documents, select generation strategies, and export structured QA files.

## Detailed report

### 1. Positioning
Easy Dataset provides a unified, user-friendly framework (GUI-driven) to synthesize Large Language Model fine-tuning data from raw domain-specific documents.

### 2. Pain Points & Advantages
Dataset curation involves complex chunking, prompt engineering, and cleaning pipelines often requiring bespoke Python scripts. Easy Dataset offers a graphical, automated pipeline with built-in LLM integrations to convert PDFs/Docs to robust Alpaca/ShareGPT formats seamlessly.

### 3. Technical Architecture
Features a multi-platform electron or Tauri client / Web application leveraging a backend engine for node-based document parsing. Highly integrated with external AI APIs (OpenAI format) to generate intelligent evaluations, QA pairs, and data cleaning tasks.

### 4. Core Implementation
Employs intelligent recursive chunking and visual segmentation algorithms. Contains specialized chains utilizing "Judge Models" to auto-evaluate dataset quality (Human Blind Test and automated scoring) before final dataset compilation.

### 5. Code Organization
The repository includes a Node/TypeScript-based web backend, a Prisma schema mapped to local sqlite storage (`local-db/`), and a dynamic frontend UI application.

### 6. Quick Start Suggestion
Run the Docker image using the provided `docker-compose.yml`, mount local directories, access the UI at `localhost:1717`, and upload a PDF to experiment with automated QA pair generation.

### 7. Summary
An exceptional, end-to-end graphical pipeline solution that massively democratizes fine-tuning dataset generation, data distillation, and LLM evaluation procedures.
