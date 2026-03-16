---
title: "Jeffallan/claude-skills"
repo_name: "Jeffallan/claude-skills"
url: "https://github.com/Jeffallan/claude-skills"
github_url: "https://github.com/Jeffallan/claude-skills"
stars: 6488
language: "Python"
layout: repo
tags:
  - "AI Agent Tools"
  - "Claude Code Plugins"
  - "Full-Stack Development"
  - "DevOps"
  - "Software Architecture"
  - "Workflow Automation"
---

## What it is

Claude Skills is a powerful extension framework for Claude Code that provides over 60 specialized domain skills across backend, frontend, infrastructure, and security. It includes 9 integrated workflows that manage software development lifecycles from discovery to deployment, with support for Atlassian MCP (Jira/Confluence) integration.

## Problems solved

- Fragmented AI context: Provides specialized reference files to narrow down AI focus.
- Manual workflow management: Automates epics and project lifecycle commands.
- Lack of domain expertise: Supplements base model knowledge with curated expert patterns for various frameworks and languages.
- Tooling gaps: Integrates Jira and Confluence directly into the AI coding workflow.

## How to get started

Install the marketplace via `/plugin marketplace add jeffallan/claude-skills`, then install specific skill sets such as `/plugin install fullstack-dev-skills@jeffallan`. Use `/common-ground` to sync project context or invoke specific skills by asking questions related to their domain (e.g., 'Implement JWT in NestJS').
