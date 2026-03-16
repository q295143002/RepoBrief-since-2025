---
title: "steipete/gogcli"
repo_name: "steipete/gogcli"
url: "https://github.com/steipete/gogcli"
github_url: "https://github.com/steipete/gogcli"
stars: 6232
language: "Go"
layout: repo
tags:
  - "Google Workspace"
  - "CLI"
  - "Gmail"
  - "Google Drive"
  - "Automation"
  - "DevOps"
  - "Security"
---

## What it is

gogcli (gog) is a comprehensive command-line interface for Google services including Gmail, Drive, Calendar, Sheets, Docs, and more. It is designed for both human use and automation, providing JSON-first outputs, secure keyring-based token storage, and multi-account management. It uniquely supports Workspace-specific features like domain-wide delegation and service accounts.

## Problems solved

- Clunky Google Web UIs: Provides a blazing fast terminal interface for common tasks (searching mail, creating events).
- Automation friction: Every command outputs clean JSON, making it trivial to pipe into `jq` or AI agents.
- Auth management: Handles OAuth refresh tokens, service accounts, and headless auth flows smoothly.
- Security sandboxing: Includes a command allowlist feature to restrict which Google APIs an AI agent can access.

## How to get started

Install via Homebrew (`brew install gogcli`). Run `gog auth credentials <json>` to set up your OAuth client, then `gog auth add <email>` to sign in. Once authenticated, use commands like `gog gmail search 'unread'` or `gog calendar events --today`. It supports setting aliases for accounts to simplify multi-account usage (e.g., `GOG_ACCOUNT=work gog ...`).
