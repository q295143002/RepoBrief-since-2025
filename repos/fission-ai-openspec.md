---
title: "Fission-AI/OpenSpec"
repo_name: "Fission-AI/OpenSpec"
url: "https://github.com/Fission-AI/OpenSpec"
github_url: "https://github.com/Fission-AI/OpenSpec"
stars: 30128
language: "TypeScript"
layout: repo
tags:
  - "AI Interoperability"
  - "Protocol"
  - "Agent Capabilities"
  - "Standards"
  - "JSON Schema"
  - "Service Discovery"
  - "Agentic AI"
---

## What it is

An open-source interoperability protocol for AI agents to share and invoke cross-platform capabilities.

## Problems solved

- Siloed AI agents that cannot 'talk' to each other or use each other's specialized tools.
- Redundancy in creating similar tools for different agent frameworks (LangChain vs. AutoGPT).
- Lack of a discovery mechanism for third-party AI 'services'.

## How to get started

npm install @fission-ai/openspec
# Declare your agent's manifest.json following OpenSpec standards.

## Detailed report

### 1. Positioning
OpenSpec is a standardization protocol by Fission-AI. It allows AI agents to 'broadcast' their capabilities in a machine-readable format so that other agents can discover and invoke their tools, effectively creating a 'Marketplace of Skills' for AI.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Breaks down the barriers between different AI agent ecosystems, allowing a 'Researcher Agent' on one platform to hire a 'Plotting Agent' on another.
- **Differentiation**: Heavily focuses on 'Auth and Security'—ensuring that cross-agent calls are cryptographically signed and rate-limited.

### 3. Technical Architecture
- **Tech Stack**: JSON Schema for specs, gRPC/REST for communication.
- **Design Strategy**: Adopts a 'Service Discovery' pattern similar to microservices architecture, but optimized for LLM semantic routing.

### 4. Core Implementation
- **Innovative**: Implements a 'Capability Verification' loop where the protocol automatically tests if an agent actually provides the tools it claims to have.
- **Value**: Provides a 'Dynamic Tool Resolver' that matches natural language intents to the best-rated OpenSpec provider.

### 5. Code Organization
- `/specs`: Standard definitions for common tools (Email, Browser, Calculator).
- `/registry`: Reference implementation of a capability registry.

### 6. Quick Start Suggestion
Read `specs/common-v1.json` to see how a standard 'Send Email' capability is defined for universal AI compatibility.

### 7. Summary
**Essence**: The 'TCP/IP' of the Agentic age. Key takeaway is the formalization of agent-to-agent contract management.
