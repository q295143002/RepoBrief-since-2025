---
title: "databasus/databasus"
repo_name: "databasus/databasus"
url: "https://github.com/databasus/databasus"
github_url: "https://github.com/databasus/databasus"
stars: 5979
language: "Go"
layout: repo
tags:
  - "Database Backup"
  - "PostgreSQL"
  - "DevOps"
  - "Cybersecurity"
  - "Self-Hosted"
  - "Open Source"
  - "Cloud Storage"
---

## What it is

Databasus is a professional-grade database backup manager. It allows developers to schedule automated backups for popular databases and store them in various cloud destinations (S3, Dropbox, SFTP, etc.). It features Grandfather-Father-Son (GFS) retention policies, AES-256 encryption, and a polished web UI for managing multicore database environments across different projects or 'workspaces'.

## Problems solved

- Backup complexity: Simplifies the process of setting up cron jobs and storage scripts with a visual wizard.
- Storage inefficiency: Uses smart compression to save 4-8x on storage space during backups.
- Security risks: Implements zero-trust storage—backup files are encrypted locally before being sent to the cloud.
- Lack of monitoring: Sends notifications via Slack, Telegram, or Discord regarding backup success or failure.

## How to get started

Run the automated installation script on a Linux server to set up the Docker-based dashboad. Access the UI at port 4005, add your database credentials, choose a storage destination (like AWS S3), and define your backup schedule. It also supports Helm charts for Kubernetes deployments.
