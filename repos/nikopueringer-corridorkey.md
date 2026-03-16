---
title: "nikopueringer/CorridorKey"
repo_name: "nikopueringer/CorridorKey"
url: "https://github.com/nikopueringer/CorridorKey"
github_url: "https://github.com/nikopueringer/CorridorKey"
stars: 6427
language: "Python"
layout: repo
tags:
  - "VFX"
  - "Computer Vision"
  - "Machine Learning"
  - "Image Processing"
  - "Video Editing"
  - "Professional Software"
---

## What it is

CorridorKey is a specialized AI keying engine that solves the 'unmixing' problem in green screen photography. Unlike binary maskers, it uses a neural network to reconstruct the true color of foreground pixels even in semi-transparent areas like hair or motion blur. It supports 16/32-bit linear EXR workflows and is resolution-independent.

## Problems solved

- Harsh edges in keying: Reconstructs soft, transparent edges instead of creating binary masks.
- Color contamination: Predicts un-multiplied 'straight' color as if the green screen wasn't there.
- Complex rotoscoping: Automates the separation process with minimal user input (rough alpha hints).
- VFX workflow integration: Natively supports industry-standard EXR files and linear color math.

## How to get started

The tool uses a CLI wizard. Drag a clip or folder onto the provided batch/shell script. Provide a 'rough alpha hint' (manually or via integrated GVM/VideoMaMa modules). The engine then processes the frame to output a high-fidelity linear alpha, straight foreground color, and a premultiplied RGBA preview.
