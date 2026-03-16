---
title: "anthropics/knowledge-work-plugins"
repo_name: "anthropics/knowledge-work-plugins"
url: "https://github.com/anthropics/knowledge-work-plugins"
github_url: "https://github.com/anthropics/knowledge-work-plugins"
stars: 9022
language: "Python"
layout: repo
tags:
  - "Claude"
  - "MCP"
  - "Enterprise"
  - "Productivity"
  - "Marketplace"
---

## What it is

Knowledge Work Plugins is an open-source marketplace of 11 role-specific plugins (Sales, PM, Legal, etc.) that empower Claude with specialized tools, workflows, and connectors for enterprise apps.

## Problems solved

- Eliminates the 'generic AI' problem by providing role-specific skills; solves data silo issues through built-in connectors for Slack
- Notion
- Jira
- and Snowflake; standardizes critical enterprise workflows like contract review and sales prospecting.

## How to get started

In Claude Code, add the marketplace: `claude plugin marketplace add anthropics/knowledge-work-plugins`. Install a plugin (e.g., `claude plugin install sales`). In a session, use provided slash commands like `/sales:call-prep` to trigger specialized logic.
