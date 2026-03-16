---
title: "cft0808/edict"
repo_name: "cft0808/edict"
url: "https://github.com/cft0808/edict"
github_url: "https://github.com/cft0808/edict"
stars: 8838
language: "Python"
layout: repo
tags:
  - "Multi-Agent"
  - "AI Governance"
  - "Dashboard"
  - "OpenClaw"
  - "Architecture"
---

## What it is

Edict (San Sheng Liu Bu) is a highly structured multi-agent framework that implements institutional governance and quality control through specialized roles and a mandatory review process for AI tasks.

## Problems solved

- Solves the 'hallucination and poor quality' problem in unsupervised multi-agent chats; provides a mandatory 'QA stage' (Menxia) to vet AI plans before execution; offers a full monitoring dashboard for task observability and intervention.

## How to get started

Deploy via Docker for the demo: `docker run -p 7891:7891 cft0808/edict`. For full integration, run the `install.sh` script to set up the 12 specialized agent workspaces and the 'Military Dashboard' server. Access the dashboard at `http://localhost:7891`.
