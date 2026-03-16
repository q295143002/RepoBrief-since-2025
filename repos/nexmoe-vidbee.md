---
title: "nexmoe/VidBee"
repo_name: "nexmoe/VidBee"
url: "https://github.com/nexmoe/VidBee"
github_url: "https://github.com/nexmoe/VidBee"
stars: 7097
language: "TypeScript"
layout: repo
tags:
  - "Video-Downloader"
  - "Electron"
  - "yt-dlp"
  - "Desktop-App"
  - "Open-Source"
  - "RSS"
  - "Docker"
---

## What it is

VidBee is an open-source Electron desktop app (and Docker-ready web+API) for downloading videos and audio from 1000+ sites via yt-dlp, featuring a clean UI, download queue management, and RSS auto-download for automated subscription-based downloading.

## Problems solved

- Provides a polished
- privacy-respecting alternative to proprietary video download tools with auto-subscription (RSS) for hands-free downloads
- browser extension support
- and a shareable Docker API/web interface instead of just a desktop app.

## How to get started

Download the installer from vidbee.org or build from source with pnpm. For web/Docker mode, run `pnpm run start:web` or `docker compose up -d --build`. An API server (Fastify + oRPC) and web client start automatically.
