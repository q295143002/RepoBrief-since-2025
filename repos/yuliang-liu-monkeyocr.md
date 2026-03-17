---
id: 995214393
repo_name: "Yuliang-Liu/MonkeyOCR"
url: "https://github.com/Yuliang-Liu/MonkeyOCR"
stars: 6534
language: "Python"
tags: ["OCR","Document-Parsing","VLM","PDF","Research","Python","Open-Source"]
original_description: "A lightweight LMM-based Document Parsing Model"
english_summary: "MonkeyOCR is an open-source document parsing VLM that uses a Structure-Recognition-Relation triplet paradigm to efficiently parse PDFs and images into structured Markdown — handling text, formulas, tables, and reading order across 9 document types. MonkeyOCR-pro-1.2B outperforms all tested VLMs including GPT-4o and Gemini 2.5-Pro on OmniDocBench, at 1.4+ pages/sec on a 4090."
chinese_summary: null
problems_solved: "- Multi-tool document parsing pipelines are complex and brittle\n- while using large general-purpose VLMs page-by-page is slow and expensive. MonkeyOCR's SRR paradigm unifies structure detection\n- content recognition\n- and block-relationship modeling in a single compact model\n- achieving higher accuracy at much lower cost."
how_to_use: "Install via guide. Download: `python tools/download_model.py -n MonkeyOCR-pro-3B`. Parse: `python parse.py input_path` (PDF, image, or folder). Single-task: `python parse.py input.pdf -t text|formula|table`. API: `uvicorn api.main:app --port 8000`. Gradio: `python demo/demo_gradio.py`. Docker: `docker compose up monkeyocr-demo`."
sync_at: "2026-03-17T12:09:44.212Z"
---

# Yuliang-Liu/MonkeyOCR

### 1. Positioning
Yuliang-Liu/MonkeyOCR is positioned as a monkeyocr is an open-source document parsing vlm that uses a structure-recognition-relation triplet paradigm to efficiently parse pdfs and images into structured markdown — handling text, formulas, tables, and reading order across 9 document types. monkeyocr-pro-1.2b outperforms all tested vlms including gpt-4o and gemini 2.5-pro on omnidocbench, at 1.4+ pages/sec on a 4090. It aims to provide developers with a robust, Python-based solution for a lightweight lmm-based document parsing model.

### 2. Pain Points & Advantages
Traditional methods in this domain often suffer from Multi-tool document parsing pipelines are complex and brittle. Yuliang-Liu/MonkeyOCR addresses this by monkeyocr is an open-source document parsing vlm that uses a structure-recognition-relation triplet paradigm to efficiently parse pdfs and images into structured markdown — handling text, formulas, tables, and reading order across 9 document types. monkeyocr-pro-1.2b outperforms all tested vlms including gpt-4o and gemini 2.5-pro on omnidocbench, at 1.4+ pages/sec on a 4090, offering a significant performance boost and better developer ergonomics compared to existing alternatives.

### 3. Technical Architecture
The project is built using Python, adopting a modular and scalable design. It leverages modern industry standards to ensure compatibility across different environments, focusing on efficiency and ease of integration.

### 4. Core Implementation
Main logic revolves around a lightweight lmm-based document parsing model. The implementation utilizes Python's strengths to provide monkeyocr is an open-source document parsing vlm that uses a structure-recognition-relation triplet paradigm to efficiently parse pdfs and images into structured markdown — handling text, formulas, tables, and reading order across 9 document types. monkeyocr-pro-1.2b outperforms all tested vlms including gpt-4o and gemini 2.5-pro on omnidocbench, at 1.4+ pages/sec on a 4090, ensuring high reliability and performance under load.

### 5. Code Organization
The repository is structured logically, with core functionality separated from utilities and examples. This organization facilitates easy navigation and contribution for developers looking to extend the tool's capabilities.

### 6. Quick Start Suggestion
To get started, install via guide. download: `python tools/download_model.py -n monkeyocr-pro-3b`. parse: `python parse.py input_path` (pdf, image, or folder). single-task: `python parse.py input.pdf -t text|formula|table`. api: `uvicorn api.main:app --port 8000`. gradio: `python demo/demo_gradio.py`. docker: `docker compose up monkeyocr-demo`. This will allow you to quickly evaluate the tool and integrate it into your existing development workflow.

### 7. Summary
An essential, Python-powered utility that streamlines a lightweight lmm-based document parsing model; it effectively tackles Multi-tool document parsing pipelines are complex and brittle while maintaining a high standard of code quality and usability.
