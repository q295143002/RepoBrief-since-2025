---
title: "apple/ml-sharp"
repo_name: "apple/ml-sharp"
url: "https://github.com/apple/ml-sharp"
github_url: "https://github.com/apple/ml-sharp"
stars: 7853
language: "Python"
layout: repo
tags:
  - "Apple"
  - "View-Synthesis"
  - "3D-Generation"
  - "Monocular"
  - "Gaussian-Splatting"
  - "Machine-Learning"
---

## What it is

SHARP is a neural network model that rapidly converts a single 2D photograph into a 3D Gaussian representation, enabling photorealistic view synthesis in real time.

## Problems solved

- Solves the slow processing times of traditional photorealistic view synthesis. SHARP processes a 2D image into 3D Gaussian Splats in under a second using a single feedforward pass on a standard GPU.

## How to get started

Set up a Python 3.13 environment and install dependencies. Run `sharp predict -i /path/to/images -o /path/to/gaussians` to generate 3DGS .ply files, which can then be rendered in public 3DGS renderers or directly using the `--render` flag.
