---
title: "vxcontrol/pentagi"
repo_name: "vxcontrol/pentagi"
url: "https://github.com/vxcontrol/pentagi"
github_url: "https://github.com/vxcontrol/pentagi"
stars: 9454
language: "Go"
layout: repo
tags:
  - "Cybersecurity"
  - "Penetration Testing"
  - "AI Agent"
  - "Knowledge Graph"
  - "Docker"
---

## What it is

PentAGI is a state-of-the-art, autonomous AI system for penetration testing, combining 20+ professional security tools with long-term memory and knowledge graph reasoning.

## Problems solved

- Automates the high-skill domain of security testing; solves the isolation issue by running all attacks in sandboxed Docker containers; overcomes LLM context limits via an intelligent memory system and Neo4j-based knowledge graphs.

## How to get started

Requires Docker and 4GB+ RAM. Use the interactive `./installer` to configure LLM providers (OpenAI, Anthropic, or local Ollama). Access the web UI at `localhost:8443` and define a 'Flow' to start an autonomous security audit.

## Detailed report

### 1. Positioning
PentAGI positions itself as a 'Virtual Security Engineer'. It targets CISOs, developers, and researchers who need frequent, deep security audits but don't have the budget or time for manual human penetration testing teams.

### 2. Pain Points & Advantages
Security scanning is often noisy and lacks 'reasoning'. PentAGI's advantage is its 'Autonomous Loop'—it doesn't just find vulnerabilities; it reasons about how to exploit them, chains attacks together, and learns from successful attempts using its 'Smart Memory System'.

### 3. Technical Architecture
A sophisticated microservices architecture. It uses a Go-based API, a React frontend, and a PostgreSQL/pgvector database for memory. Most notably, it incorporates 'Graphiti' (a Neo4j-powered knowledge graph) to track complex semantic relationships between various attack vectors.

### 4. Core Implementation
Integrates 20+ professional tools (Nmap, Metasploit, Sqlmap). It features 'Chain Summarization' to manage long conversation histories and supports a 'Team of Specialists' where specialized agents are delegated for research, development, and infrastructure tasks.

### 5. Code Organization
The project is divided into core services, a dedicated monitoring stack (Grafana/Prometheus), and an analytics platform (Langfuse). It uses Docker Compose for coordinated deployment of its multi-node architecture.

### 6. Quick Start Suggestion
Use the interactive installer to set up an Ollama-backed local environment. Start a 'Reconnaissance' flow against a test target to see how the agent intelligently selects tools and builds a knowledge graph of the target's attack surface.

### 7. Summary
PentAGI is at the absolute forefront of 'AI for Security'. By combining professional toolsets with advanced AI reasoning and graph-based memory, it provides a glimpse into a future where security testing is continuous, autonomous, and incredibly deep.
