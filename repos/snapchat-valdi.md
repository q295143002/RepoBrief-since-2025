---
title: "Snapchat/Valdi"
repo_name: "Snapchat/Valdi"
url: "https://github.com/Snapchat/Valdi"
github_url: "https://github.com/Snapchat/Valdi"
stars: 16282
language: "C++"
layout: repo
tags:
  - "AI Safety"
  - "Data Validation"
  - "Mobile Development"
  - "Snapchat"
  - "JSON Repair"
  - "Performance"
  - "Edge Computing"
---

## What it is

Snapchat's lightweight, high-performance library for validating and sanitizing AI-generated data at the edge.

## Problems solved

- Security risks of injecting un-sanitized AI content into high-traffic apps
- Performance overhead of running heavy validation on mobile NPUs
- Fragmentation between model-side prompts and app-side requirements

## How to get started

Install via npm: `npm install @snapchat/valdi`. Define your schema and use `valdi.sanitize` to filter and repair AI outputs before rendering.
