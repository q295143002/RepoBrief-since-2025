---
title: "a2aproject/A2A"
repo_name: "a2aproject/A2A"
url: "https://github.com/a2aproject/A2A"
github_url: "https://github.com/a2aproject/A2A"
stars: 22483
language: "Shell"
layout: repo
tags:
  - "Agent Protocol"
  - "Interoperability"
  - "P2P"
  - "Multi-Agent Systems"
  - "Communication"
  - "Open Standard"
---

## What it is

A universal communication protocol for decentralized, cross-platform AI agent interoperability.

## Problems solved

- Siloed 'Agent Islands' where a task started in one app cannot be finished in another.
- Lack of a standard 'Handshake' protocol for agents to negotiate permissions and costs.
- Difficulty in managing 'Context Transfer' when one agent delegates a sub-task to another.

## How to get started

npm install @a2aproject/sdk
# Define your agent's A2A-Manifest and start listening for peer requests.

## Detailed report

### 1. Positioning
Agent2Agent (A2A) is a foundational infrastructure project aiming to build the 'Internet of Agents.' It provides a standardized protocol (schemas and handshake logic) so that agents built by different companies can discover each other, understand each other's capabilities, and collaborate on complex tasks through a unified message bus.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Eliminates the need for 'Custom Integrations' for every pair of agents; if two agents support A2A, they can immediately work together.
- **Differentiation**: Features 'Opaque Coordination'—allowing agents to collaborate even if they don't share their underlying prompts or weights, protecting IP while enabling utility.

### 3. Technical Architecture
- **Tech Stack**: Language-agnostic (reference implementation in TS/Node), using JSON-RPC over WebSockets/LibP2P.
- **Design Strategy**: Adopts a 'Capability-Based' addressing system rather than fixed ID addressing (e.g., "Find any agent that can solve this differential equation").

### 4. Core Implementation
- **Logic Layer**: `src/protocol/handshake.ts` manages the mutual verification of 'Skill Claims' between two agents.
- **Innovation**: The 'Trust Score' system—where the protocol can track and penalize agents that provide low-quality or hallucinated results to their peers.

### 5. Code Organization
- `/protocol`: The core message schemas and state machine for negotiation.
- `/sdk`: Ready-to-use libraries for injecting A2A support into existing frameworks like LangChain.

### 6. Quick Start Suggestion
Examine `examples/delegation_flow.ts` to see how a 'Travel Agent' can autonomously 'hire' a 'Booking Agent' via the A2A handshake.

### 7. Summary
**Essence**: The 'HTTP' for agents. Key learning is the standardization of cross-provider agentic cooperation.
