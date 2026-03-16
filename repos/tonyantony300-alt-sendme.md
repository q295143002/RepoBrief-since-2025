---
title: "tonyantony300/alt-sendme"
repo_name: "tonyantony300/alt-sendme"
url: "https://github.com/tonyantony300/alt-sendme"
github_url: "https://github.com/tonyantony300/alt-sendme"
stars: 6020
language: "TypeScript"
layout: repo
tags:
  - "P2P"
  - "File Sharing"
  - "Privacy"
  - "Networking"
  - "Rust"
  - "Tauri"
  - "Cryptography"
---

## What it is

AltSendme is a modern file sharing application built with Rust and Tauri. It uses the Iroh networking protocol to facilitate direct peer-to-peer (P2P) transfers without any middle-man cloud servers. It features end-to-end encryption, NAT traversal (hole punching), and a simple 'ticket' system for securely connecting devices across the internet.

## Problems solved

- Privacy risks in cloud storage: Files are transferred directly between devices, never stored on servers like Dropbox or WeTransfer.
- Size limits: No artificial limits on file or directory size.
- Complex network setup: Uses QUIC hole-punching to work through firewalls/NATs automatically.
- Insecure transfers: All data is protected with TLS 1.3 and verified using BLAKE3 hashes for integrity.

## How to get started

Install the app on both sending and receiving devices (Windows, macOS, or Linux). Drag a file into the app to generate a 'ticket'. Share this ticket with the recipient, who pastes it into their app to start the P2P transfer. No accounts or sign-ups are required.
