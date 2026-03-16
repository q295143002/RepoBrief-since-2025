---
title: "ayangweb/BongoCat"
repo_name: "ayangweb/BongoCat"
url: "https://github.com/ayangweb/BongoCat"
github_url: "https://github.com/ayangweb/BongoCat"
stars: 19325
language: "TypeScript"
layout: repo
tags:
  - "Desktop Pet"
  - "Interactive AI"
  - "Electron"
  - "Productivity Tools"
  - "Developer Culture"
  - "Animation"
  - "Desktop Customization"
---

## What it is

An adorable, cross-platform interactive desk pet that reacts to user input and environment.

## Problems solved

- Loneliness and 'desk fatigue' for remote workers and students
- Lack of personality in standard operating system interfaces
- High resource usage of traditional desktop companions

## How to get started

Install globally via npm: `npm install -g @ayangweb/bongocat`. Launch the pet with `bongocat`. Use `--theme` to customize the appearance.

## Detailed report

### 1. Positioning
BongoCat is an interactive, animated desktop companion. It provides a lightweight, reactive 'pet' that mirrors your keyboard and mouse actions, providing visual feedback to system events. Targeted at developers and students.

### 2. Pain Points & Advantages
Provides a visual stress-reliever during long coding sessions. Highly customizable—users can add new themes and animations using simple CSS/JS, making it the most modular companion in the ecosystem.

### 3. Technical Architecture
Electron-based app using HTML5 Canvas for performance-optimized animations. Frame rates and states are tied directly to system input hooks (HID events).

### 4. Core Implementation
`src/main/input_hooks.js` captures global keyboard and mouse events without interfering with other apps. Features 'Sound-Reactive' modes where the cat's movement syncs with system audio playback.

### 5. Code Organization
`/assets/themes` contains character sprites and animation definitions, while `/src/render` houses the core animation engine.

### 6. Quick Start Suggestion
Run with the `--debug-input` flag to see how the cat precisely follows your typing rhythm in real-time.

### 7. Summary
The 'Vibe-Booster' for your desktop. It efficiently captures and visualizes system-level events to create a more engaging and personal workstation experience.
