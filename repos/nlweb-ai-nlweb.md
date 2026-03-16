---
title: "nlweb-ai/NLWeb"
repo_name: "nlweb-ai/NLWeb"
url: "https://github.com/nlweb-ai/NLWeb"
github_url: "https://github.com/nlweb-ai/NLWeb"
stars: 6162
language: "Python"
layout: repo
tags:
  - "MCP"
  - "Semantic Web"
  - "AI Agents"
  - "Schema.org"
  - "Web Development"
  - "Information Retrieval"
---

## What it is

NLWeb is an open protocol designed to bring natural language interfaces to the web. It treats the web of the future as a connected 'web of agents'. By leveraging existing Schema.org and RSS markup, NLWeb allows websites to quickly implement conversational endpoints that can serve both humans and AI agents. It is fully MCP-compliant, meaning any NLWeb instance acts as an MCP server.

## Problems solved

- Web-AI gap: Provides a standard way for AI agents to 'talk' to websites without complex custom scraping.
- Fragmented data: Uses Schema.org as a universal vocabulary for structured web responses.
- Scoping AI interaction: Defines the 'Ask' method as a foundational primitive for AI-Web communication.
- Implementation overhead: Provides tools like 'AskAgent' and 'ModelRouter' to lower the barrier for site owners.

## How to get started

Site owners can integrate NLWeb by deploying the 'AskAgent' module. It connects to the site's existing data (via vector stores like Qdrant or Milvus) and provides a REST API. Developers can then use the `ask` method to query the site in natural language. It supports all major LLMs including OpenAI, Anthropic, and DeepSeek.
