---
title: "Lake1059/FFmpegFreeUI"
repo_name: "Lake1059/FFmpegFreeUI"
url: "https://github.com/Lake1059/FFmpegFreeUI"
github_url: "https://github.com/Lake1059/FFmpegFreeUI"
stars: 6514
language: "Visual Basic .NET"
layout: repo
tags:
  - "FFmpeg"
  - "Video-Encoding"
  - "Windows"
  - "GUI"
  - "Desktop-App"
  - "C#"
  - "Open-Source"
---

## What it is

FFmpegFreeUI (3FUI) is a professional, ad-free, open-source Windows FFmpeg GUI targeting power users and video compression hobbyists. It supports 40+ video encoders (libsvtav1, av1_nvenc/qsv/amf, libx265, hevc_nvenc, libx264, prores, vvc, etc.), 20+ audio codecs, and 10+ image formats, with unlimited batch queuing, preset management, subtitle burning, color management, and remote/plugin APIs.

## Problems solved

- Existing FFmpeg GUIs either hide too many parameters
- contain ads
- bundle outdated FFmpeg binaries
- or lack professional-grade batch management. 3FUI provides full parameter transparency
- no presets forced
- no ads
- and uses the system FFmpeg — always current
- always pure.

## How to get started

Download release (ReadyToRun recommended). Place ffmpeg.exe/ffprobe.exe/ffplay.exe in app folder or add to PATH. Drag files to encoding queue. Set parameters in panel. Press start to encode. For remote invocation: enable in settings, send UDP on port 10591. For plugins: add `.3fui.dll` files to Plugin folder.
