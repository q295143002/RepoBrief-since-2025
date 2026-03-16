---
title: "orion-lib/OrionTV"
repo_name: "orion-lib/OrionTV"
url: "https://github.com/orion-lib/OrionTV"
github_url: "https://github.com/orion-lib/OrionTV"
stars: 5149
language: "TypeScript"
layout: repo
tags:
  - "React Native TVOS"
  - "Expo"
  - "Apple TV"
  - "Android TV"
  - "Video Player"
  - "Smart TV"
  - "Open Source"
---

## What it is

OrionTV is a modern, cross-platform video playback application designed specifically for '10-foot' interfaces (TVs). Built using React Native TVOS and Expo, it provides a fluid, remote-friendly UI for both Apple TV and Android TV platforms.

## Problems solved

- Complexity of developing and maintaining separate apps for Apple TV and Android TV
- Poor remote control navigation in standard mobile-focused video apps
- Need for a lightweight, file-system based routing system in TV applications

## How to get started

Install dependencies with `yarn`. Run `yarn prebuild-tv` to generate the native project files for TV platforms, then use `yarn ios-tv` or `yarn android-tv` to deploy to a simulator or real device. It is often used in conjunction with the MoonTV video aggregation backend.
