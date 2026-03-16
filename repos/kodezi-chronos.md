---
title: "Kodezi/Chronos"
repo_name: "Kodezi/Chronos"
url: "https://github.com/Kodezi/Chronos"
github_url: "https://github.com/Kodezi/Chronos"
stars: 5078
language: "Java"
layout: repo
tags:
  - "LLM"
  - "Autonomous Debugging"
  - "AI Research"
  - "Benchmark"
  - "SWE-bench"
  - "DevOps"
  - "Open Source"
---

## What it is

Kodezi Chronos is a specialized language model designed specifically for autonomous debugging and repository-scale code understanding. While the model itself is proprietary, this repository contains the groundbreaking research, benchmarks (like SWE-bench Lite where it scored 80.33%), and the evaluation framework used to achieve these results.

## Problems solved

- General-purpose LLMs (GPT-4/Claude 3.5) having a 'debugging gap' (high code gen score but low fix rate)
- Inability of traditional models to handle multi-file root cause analysis in massive codebases
- Inefficient retrieval methods that dilute context window with irrelevant files

## How to get started

This repository is primarily for researchers and developers to run the 'MRR' (Multi-Random Retrieval) benchmarks against their own models or to review the technical methodology behind Chronos. Access to the Chronos model itself is managed via Kodezi OS.
