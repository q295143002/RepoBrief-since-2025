---
title: "openai/openai-cs-agents-demo"
repo_name: "openai/openai-cs-agents-demo"
url: "https://github.com/openai/openai-cs-agents-demo"
github_url: "https://github.com/openai/openai-cs-agents-demo"
stars: 5928
language: "Python"
layout: repo
tags:
  - "OpenAI"
  - "AI Agents"
  - "Customer Service"
  - "Next.js"
  - "Python"
  - "Demo"
  - "Agentic Workflow"
---

## What it is

This repository is an official demo from OpenAI showcasing multi-agent orchestration for customer service. It simulates an airline support system with specialized agents (Triage, Flight Info, Booking, FAQ, etc.) that can communicate and 'hand off' tasks to each other. It includes a Next.js frontend to visualize the agent's thought process and routing logic in real-time.

## Problems solved

- Task complexity in chatbots: Demonstrates how to break down a large domain (airline support) into specialized, manageable agents.
- Bot 'jailbreaking': Implements dedicated guardrails for relevance and system instruction protection.
- Lack of visual debugging: Provides a UI that shows which agent is currently active and why a handoff occurred.
- Static responses: Shows how tools can be used to fetch live flight data and perform real booking operations.

## How to get started

Set your `OPENAI_API_KEY`, install Python dependencies in the `python-backend` folder, and Node.js dependencies in the `ui` folder. Run `npm run dev` in the UI folder to launch both the frontend and the uvicorn backend. You can then interact with the system via a chat interface and watch the 'agent graph' update.
