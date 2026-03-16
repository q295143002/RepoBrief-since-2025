---
title: "Anionex/banana-slides"
repo_name: "Anionex/banana-slides"
url: "https://github.com/Anionex/banana-slides"
github_url: "https://github.com/Anionex/banana-slides"
stars: 12908
language: "TypeScript"
layout: repo
tags:
  - "AI-PPT"
  - "Generative-AI"
  - "Vibe-Coding"
  - "Presentation-Tools"
  - "React"
---

## What it is

An AI-powered presentation generator application designed around the Nano Banana Pro model, enabling quick, high-aesthetic "Vibe PPT" creation via natural language.

## Problems solved

- Overrides rigid template constraints inherent in conventional AI presentation generators by offering dynamic
- natural-language editing capabilities for highly customizable
- "vibe-oriented" slide layouts.

## How to get started

Populate environmental variables with LLM API keys. Start the app locally using Docker Compose (`docker compose up -d`), accessing the UI at `localhost:3000` to dictate or type pitch deck structural outlines.

## Detailed report

### 1. Positioning
Banana-Slides serves as a native, conversational alternative to heavy presentation software, utilizing powerful LLMs to rapidly render and iterate over beautiful slide decks targeting students and professionals globally.

### 2. Pain Points & Advantages
Typical generators yield monotonous layouts with unalterable graphics. This platform introduces a robust conversational iteration layer (Vibe editing). You can literally tell the application to "change this graph to a pie chart", and it executes pixel-perfect changes independently.

### 3. Technical Architecture
A decoupled stack utilizing React/TypeScript and Zustand for the frontend, coupled intrinsically via Axios to a Python/Flask backend engine integrating multimodal AI processors.

### 4. Core Implementation
Capitalizes extensively on Markdown parsing, dynamic layout algorithms mapping LLM output strictly to PowerPoint DOM vectors (`python-pptx`), and orchestrates an array of LLM routing configurations (Gemini/OpenAI/Vertex) abstracting the intricate slide-render state internally over concurrent queues.

### 5. Code Organization
Structured gracefully into `/frontend` (React Single Page App spanning layout and modular drag-and-drop components) and `/backend` (Flask MVC with services controlling AI prompts, DB initialization, and export integrations).

### 6. Quick Start Suggestion
Execute the production docker-compose file leveraging precompiled images, input your AI Hub Mix API credentials, upload a Word outline document, and observe the AI intuitively translate text structures onto visually stunning geometric decks instantly.

### 7. Summary
A tremendously polished presentation ideation suite demonstrating superior UX paradigms; drastically lessening the friction between abstract thought generation and beautifully exported .pptx finalizations utilizing intuitive agent-driven refinements.
