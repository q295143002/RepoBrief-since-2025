---
id: 950140488
repo_name: "TecharoHQ/anubis"
url: "https://github.com/TecharoHQ/anubis"
stars: 17689
language: "Go"
tags: ["Cybersecurity","Cloud Native","Kubernetes","SecOps","Autonomous Agents","Red Teaming","Vulnerability Scanning"]
original_description: "Anubis: A multi-agent security platform for automated cloud-native vulnerability scanning and threat modeling."
english_summary: "A multi-agent security suite for automated discovery and threat modeling in cloud-native infrastructures."
chinese_summary: null
problems_solved: "- Complexity of auditing K8s clusters and multi-cloud environments manually\n- Lack of 'Correlation' in security alerts across different services\n- Manual overhead in preparing 'Attack Path' visualizations"
how_to_use: "Clone the repo and start via docker-compose. Run `./anubis scan` specifying your cloud namespace to begin the autonomous audit."
sync_at: "2026-03-17T12:09:44.212Z"
---

# TecharoHQ/anubis

### 1. Positioning
Anubis is an AI SecOps platform using specialized agents (Scanner, Exploiter, Reporter) to audit cloud environments. It builds 'Reasoning Chains' to explain potential attack paths like an autonomous red team.

### 2. Pain Points & Advantages
Reduces alert fatigue by using agents to filter for only 'Exploitable' vulnerabilities. Specifically understands K8s RBAC and cloud IAM roles that traditional scanners miss.

### 3. Technical Architecture
Golang scanner with a Python reasoning agent and React dashboard. Adopts a 'Swarm Attack' model where agents specialize in different vectors (DNS, API, DB).

### 4. Core Implementation
`threat_modeler.go` uses LLMs to hypothesize attack paths based on scan findings. Features real-time 'Graph Visualization' of vulnerable network nodes for instant human understanding.

### 5. Code Organization
`/scanner` houses low-level containers/network discovery logic, and `/intel` contains the reasoning engine for scoring and planning.

### 6. Quick Start Suggestion
Run a baseline scan on a staging environment and observe the Threat Modeler agent explain the top 3 leak risks in under 2 minutes.

### 7. Summary
The 'AI Security Analyst' for the cloud. It leverages multi-agent coordination to automate the high-skill task of technical threat correlation and exploit planning.
