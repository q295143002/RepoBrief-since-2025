---
id: 982697710
repo_name: "bytedance/Dolphin"
url: "https://github.com/bytedance/Dolphin"
stars: 8859
language: "Python"
tags: ["OCR","Document Parsing","VLM","AI","ByteDance"]
original_description: "Dolphin: Document Image Parsing via Heterogeneous Anchor Prompting. A universal document parsing model from ByteDance."
english_summary: "Dolphin is an advanced Document Image Parsing model that handles digital and photographed documents using a two-stage approach with heterogeneous anchor prompting for high accuracy."
chinese_summary: null
problems_solved: "- Solves the 'messy document' problem where text\n- formulas\n- and tables are intertwined; overcomes the difficulty of parsing photographed documents with warped or low-quality layouts; improves reading order prediction for complex multi-column pages."
how_to_use: "Clone the repo and install dependencies: `pip install -r requirements.txt`. Download pre-trained models from Hugging Face (`ByteDance/Dolphin-v2`). Run `python demo_page.py --model_path ./hf_model --input_path [image_path]` to parse a document into structured JSON/Markdown."
sync_at: "2026-03-17T12:09:44.212Z"
---

# bytedance/Dolphin

### 1. Positioning
Dolphin positions itself as the 'Next-Gen OCR' for professional document workflows. It targets industries with high-volume document digitization needs (Legal, Finance, Research) and AI researchers looking for efficient multi-modal parsing solutions.

### 2. Pain Points & Advantages
Generic OCR often fails on complex elements like math formulas or multi-level tables. Dolphin's advantage is its 'Document-Type-Aware' architecture—it treats digital PDFs and photographed documents differently to optimize for speed vs. robustness. It achieves state-of-the-art results on benchmarks like OmniDocBench while maintaining a lightweight (0.3B to 3B) footprint.

### 3. Technical Architecture
A two-stage vision-language model (VLM) framework. Stage 1 performs layout analysis and reading order prediction. Stage 2 executes 'Heterogeneous Anchor Prompting'—using different prompting strategies for different elements (text, figure, formula, table) to ensure precise structural extraction.

### 4. Core Implementation
Implemented using PyTorch and Hugging Face Transformers. It includes specialized inference optimization for TensorRT-LLM and vLLM. The model supports both 'Page-level' (holistic) and 'Element-level' (granular) parsing modes, allowing for flexible integration into various pipelines.

### 5. Code Organization
Organized into core model logic, inference demos (`demo_page.py`, `demo_element.py`), and deployment scripts. It features a clear benchmark section and comprehensive citation records. The code is designed to be easily extendable for custom document types.

### 6. Quick Start Suggestion
Run `demo_page.py` on a complex research paper containing tables and equations. Compare the structured Markdown output with the original image to see how effectively it reconstructs the reading order and separates code blocks from body text.

### 7. Summary
Dolphin represents a significant step forward in making document AI more robust and accessible. By combining ByteDance's model expertise with a parallel parsing mechanism, it provides an industrial-strength solution for structural information extraction.
