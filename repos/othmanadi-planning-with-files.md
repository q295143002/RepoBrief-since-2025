---
title: "OthmanAdi/planning-with-files"
repo_name: "OthmanAdi/planning-with-files"
url: "https://github.com/OthmanAdi/planning-with-files"
github_url: "https://github.com/OthmanAdi/planning-with-files"
stars: 15953
language: "Python"
layout: repo
tags:
  - "Code Refactoring"
  - "Software Engineering"
  - "DAG"
  - "Static Analysis"
  - "AI Coder"
  - "Project Planning"
  - "Dependency Management"
---

## What it is

An AI agent that constructs and manages a 'File-DAG' to execute cross-project planning and refactors.

## Problems solved

- Agent confusion regarding circular dependencies in large codebases
- Inability to plan changes spanning many disconnected files simultaneously
- Risk of partial refactors breaking builds due to missing files in a plan

## How to get started

Clone the repo and run `planner.py`. Point it to your project root and define your refactoring goal in natural language.

## Detailed report

### 1. Positioning
Planning-with-files is a structural reasoning agent. It parses entire project structures into a DAG of dependencies to execute refactors in logically correct orders (e.g. DB before API).

### 2. Pain Points & Advantages
Fixes top-down vs bottom-up confusion by automatically including all affected files in a plan. Only begins execution if the entire task graph is logically sound.

### 3. Technical Architecture
Python-based, using LSIF/ctags for discovery. Adopts a 'Search and Solve' model where the agent explores the DAG before using a plan-as-graph for edits.

### 4. Core Implementation
`dependency_map.py` builds the internal map by parsing imports/exports. Features 'Pre-execution Impact Analysis'—predicting exactly how many files will change before touching code.

### 5. Code Organization
`/src/graph` handles indexing and DAG logic, while `/src/execution` provides the transactional bridge for safe multi-file edits.

### 6. Quick Start Suggestion
Use it to 'Replace a database library' on a small project to see how it maps changes across models, services, and tests in one tree.

### 7. Summary
The 'Architect's Map' for AI coding. It validates that graph-based project indexing is essential for enabling reliable, complex engineering transformations at scale.
