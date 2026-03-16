---
title: "VoltAgent/voltagent"
repo_name: "VoltAgent/voltagent"
url: "https://github.com/VoltAgent/voltagent"
github_url: "https://github.com/VoltAgent/voltagent"
stars: 6688
language: "TypeScript"
layout: repo
tags:
  - "AI-Agent"
  - "TypeScript"
  - "Framework"
  - "LLM-Observability"
  - "MCP"
  - "Workflow"
  - "Open-Source"
---

## What it is

VoltAgent is a full-stack AI agent platform: an open-source TypeScript framework (`@voltagent/core`) for building agents with tools, memory, RAG, guardrails, voice, and supervisor/sub-agent patterns, plus VoltOps Console (cloud/self-hosted) for real-time tracing, deployment, prompt management, and evals.

## Problems solved

- Building production AI agents requires both a solid dev framework and operational tooling. VoltAgent combines typed agent definitions
- workflow orchestration
- MCP tool support
- and resumable streaming in the framework layer
- then adds LLM observability
- one-click deployment
- and eval suites at the ops layer — eliminating the need to stitch together disparate tools.

## How to get started

Create project: `npm create voltagent-app@latest`. Add agents: `new Agent({ name, instructions, model, tools, memory })`. Define workflows with `createWorkflowChain`. Run `npm run dev` and open the VoltOps Console at `console.voltagent.dev` to chat, trace, and debug. For deployment: one-click GitHub integration in VoltOps.
