---
title: "facebookresearch/sam-3d-objects"
repo_name: "facebookresearch/sam-3d-objects"
url: "https://github.com/facebookresearch/sam-3d-objects"
github_url: "https://github.com/facebookresearch/sam-3d-objects"
stars: 6197
language: "Python"
layout: repo
tags:
  - "Computer Vision"
  - "3D Reconstruction"
  - "AI Foundation Model"
  - "Gaussian Splatting"
  - "Machine Learning"
  - "Meta AI Research"
---

## What it is

SAM 3D Objects is part of Meta's SAM 3D family of models. It is a foundation model capable of converting objects in a single image into high-quality 3D models (Gaussian Splats or meshes) including their pose, shape, and texture. It is designed to be robust in real-world scenes with clutter, occlusions, and unusual poses, significantly outperforming prior models in human preference tests.

## Problems solved

- 2D to 3D bottleneck: Automates the complex process of 3D modeling from static photographs.
- Occlusion handling: Uses progressive training to infer parts of objects that are hidden in the 2D view.
- Cluttered scene difficulty: Specifically optimized for 'in-the-wild' uncurated images like rooms or outdoor scenes.
- Alignment issues: When combined with SAM 3D Body, it allows for seamless human-object 3D scene reconstruction.

## How to get started

Follow the setup guide to install dependencies and download checkpoints. Use the `inference` class to load an image and a binary mask of the target object. Running the model generates a 3D representation that can be saved as a PLY (Gaussian Splat) file. Detailed Jupyter notebooks are provided for both single and multi-object reconstruction.
