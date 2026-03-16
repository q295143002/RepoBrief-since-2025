---
title: "zumerlab/snapdom"
repo_name: "zumerlab/snapdom"
url: "https://github.com/zumerlab/snapdom"
github_url: "https://github.com/zumerlab/snapdom"
stars: 7603
language: "JavaScript"
layout: repo
tags:
  - "DOM-Capture"
  - "Screenshot"
  - "JavaScript"
  - "Canvas"
  - "SVG"
  - "Frontend"
  - "Browser"
---

## What it is

SnapDOM is a zero-dependency JavaScript library for capturing DOM elements as high-fidelity images (SVG, PNG, JPG, WebP) with embedded fonts, pseudo-elements, and backgrounds, significantly faster than html2canvas and html-to-image.

## Problems solved

- Replaces slow (67ms+) tools like html2canvas with a sub-millisecond DOM capture solution that correctly handles CSS pseudo-elements
- icon fonts
- cross-origin images (via proxy)
- iframe content
- and CSS counter() functions.

## How to get started

Install via `npm i @zumer/snapdom`. Import `snapdom`, then call `snapdom.toPng(element)` for a one-step capture, or use the full API `const result = await snapdom(el)` for reusable captures to multiple formats (PNG, JPG, WebP, SVG, Blob, download).
