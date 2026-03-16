---
title: "lllyasviel/FramePack"
repo_name: "lllyasviel/FramePack"
url: "https://github.com/lllyasviel/FramePack"
github_url: "https://github.com/lllyasviel/FramePack"
stars: 16665
language: "Python"
layout: repo
tags:
  - "Computer Vision"
  - "Video Analysis"
  - "VLM"
  - "Token Optimization"
  - "OpenCV"
  - "PyTorch"
  - "Media Processing"
---

## What it is

A high-performance library for 'Semantically Compressing' video data for AI agents and VLMs.

## Problems solved

- Token overload when sending high-FPS video frames to Vision models
- Loss of 'Temporal Context' when randomly sampling frames from long videos
- High inference costs for video-based agentic workflows

## How to get started

Install via pip: `pip install framepack`. Use the `compress` function to intelligently package video frames into a high-density visual prompt.
