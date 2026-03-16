---
title: "microsoft/magentic-ui"
repo_name: "microsoft/magentic-ui"
url: "https://github.com/microsoft/magentic-ui"
github_url: "https://github.com/microsoft/magentic-ui"
stars: 9717
language: "Python"
layout: repo
tags:
  - "AI Agent"
  - "Web Automation"
  - "Human-in-the-loop"
  - "Microsoft Research"
---

## What it is

Magentic-UI is a Microsoft Research project that provides a transparent, controllable web-browsing agent featuring a human-in-the-loop plan editor and multi-agent orchestration.

## Problems solved

- Solves the 'Black Box' problem of autonomous agents by exposing a Step-by-Step plan editor for user guidance; automates long-running monitoring tasks ('Tell me When'); manages sensitive web actions through explicit 'Action Guards'.

## How to get started

Requires Docker and Python 3.10+. Install via `pip install magentic-ui`, set your `OPENAI_API_KEY`, and launch with `magentic-ui --port 8081`. Access the dashboard in your browser to start co-planning tasks.
