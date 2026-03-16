---
title: "nicotsx/zerobyte"
repo_name: "nicotsx/zerobyte"
url: "https://github.com/nicotsx/zerobyte"
github_url: "https://github.com/nicotsx/zerobyte"
stars: 5902
language: "TypeScript"
layout: repo
tags:
  - "Backup Automation"
  - "Restic"
  - "Self-Hosted"
  - "Cloud Storage"
  - "Privacy"
  - "Storage Management"
  - "Open Source"
---

## What it is

Zerobyte is a user-friendly management layer for the Restic backup engine. It allows users to schedule and monitor encrypted backups from multiple protocols (SMB, NFS, SFTP, WebDAV) to various cloud remotes (S3, GCS, Azure, and 40+ rclone providers). It features a polished dashboard for tracking backup progress, managing retention policies, and performing easy data restoration.

## Problems solved

- CLI-only backup friction: Provides a modern web UI for Restic, making encrypted backups accessible to non-CLI users.
- Remote share complexity: Built-in support for mounting remote shares (NFS/SMB) directly within the backup container.
- Unsecured cloud storage: Ensures all data is encrypted locally via AES-256 before leaving the server.
- Deployment overhead: Offers a single Docker image with all necessary tools (Restic, rclone, FUSE) pre-installed.

## How to get started

Deploy the Docker container with `SYS_ADMIN` capabilities for mounting. Access the web interface at port 4096. Create a 'Volume' (the data source) and a 'Repository' (the backup destination), then define a 'Backup Job' to set the schedule and retention rules. It supports mounting existing rclone configurations for extensive cloud support.
