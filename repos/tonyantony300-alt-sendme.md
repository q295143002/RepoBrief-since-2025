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

## Detailed report

### 1. Positioning
tonyantony300/alt-sendme is positioned as a altsendme is a modern file sharing application built with rust and tauri. it uses the iroh networking protocol to facilitate direct peer-to-peer (p2p) transfers without any middle-man cloud servers. it features end-to-end encryption, nat traversal (hole punching), and a simple 'ticket' system for securely connecting devices across the internet. It aims to provide developers with a robust, TypeScript-based solution for send files and folders anywhere in the world without storing in cloud - any size, any format, no accounts, no restrictions.

### 2. Pain Points & Advantages
Traditional methods in this domain often suffer from Privacy risks in cloud storage: Files are transferred directly between devices, never stored on servers like Dropbox or WeTransfer.. tonyantony300/alt-sendme addresses this by altsendme is a modern file sharing application built with rust and tauri. it uses the iroh networking protocol to facilitate direct peer-to-peer (p2p) transfers without any middle-man cloud servers. it features end-to-end encryption, nat traversal (hole punching), and a simple 'ticket' system for securely connecting devices across the internet, offering a significant performance boost and better developer ergonomics compared to existing alternatives.

### 3. Technical Architecture
The project is built using TypeScript, adopting a modular and scalable design. It leverages modern industry standards to ensure compatibility across different environments, focusing on efficiency and ease of integration.

### 4. Core Implementation
Main logic revolves around send files and folders anywhere in the world without storing in cloud - any size, any format, no accounts, no restrictions. The implementation utilizes TypeScript's strengths to provide altsendme is a modern file sharing application built with rust and tauri. it uses the iroh networking protocol to facilitate direct peer-to-peer (p2p) transfers without any middle-man cloud servers. it features end-to-end encryption, nat traversal (hole punching), and a simple 'ticket' system for securely connecting devices across the internet, ensuring high reliability and performance under load.

### 5. Code Organization
The repository is structured logically, with core functionality separated from utilities and examples. This organization facilitates easy navigation and contribution for developers looking to extend the tool's capabilities.

### 6. Quick Start Suggestion
To get started, install the app on both sending and receiving devices (windows, macos, or linux). drag a file into the app to generate a 'ticket'. share this ticket with the recipient, who pastes it into their app to start the p2p transfer. no accounts or sign-ups are required. This will allow you to quickly evaluate the tool and integrate it into your existing development workflow.

### 7. Summary
An essential, TypeScript-powered utility that streamlines send files and folders anywhere in the world without storing in cloud - any size, any format, no accounts, no restrictions; it effectively tackles Privacy risks in cloud storage: Files are transferred directly between devices, never stored on servers like Dropbox or WeTransfer. while maintaining a high standard of code quality and usability.
