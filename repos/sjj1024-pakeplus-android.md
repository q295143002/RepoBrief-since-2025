---
title: "Sjj1024/PakePlus-Android"
repo_name: "Sjj1024/PakePlus-Android"
url: "https://github.com/Sjj1024/PakePlus-Android"
github_url: "https://github.com/Sjj1024/PakePlus-Android"
stars: 6390
language: "Lua"
layout: repo
tags:
  - "Desktop App Development"
  - "Mobile App Development"
  - "Rust"
  - "Tauri"
  - "Web to App"
  - "DevOps"
---

## What it is

PakePlus is a cross-platform packaging tool that converts websites into lightweight native applications. Built on Rust and Tauri v2, it produces binaries as small as 5MB (compared to ~100MB for Electron) and supports macOS, Windows, Linux, Android, and iOS. It simplifies the build process using GitHub Actions, requiring only a GitHub Token from the user.

## Problems solved

- Bloated desktop apps: Replaces Electron with the much smaller Rust-based Tauri framework.
- Complex mobile development: Provides a simple way to package web apps for Android/iOS using native templates.
- Environment setup hurdles: Uses GitHub Actions to build apps in the cloud, removing the need for local Rust/Node installation.
- Website access barriers: Allows users to hide URLs or inject custom JS to bypass ads or automate tasks.

## How to get started

Provide a GitHub Token to the PakePlus client. The tool will fork a template repository to your account. Input a website URL, customize icons and names, and trigger the build process. You can then download the resulting installation packages (DMG, EXE, APK, IPA) from the release page of your forked repo.
