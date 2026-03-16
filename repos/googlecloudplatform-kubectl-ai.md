---
title: "GoogleCloudPlatform/kubectl-ai"
repo_name: "GoogleCloudPlatform/kubectl-ai"
url: "https://github.com/GoogleCloudPlatform/kubectl-ai"
github_url: "https://github.com/GoogleCloudPlatform/kubectl-ai"
stars: 7357
language: "Go"
layout: repo
tags:
  - "Kubernetes"
  - "DevOps"
  - "Vertex-AI"
  - "Google-Cloud"
  - "kubectl"
  - "CLI-Tools"
---

## What it is

An official kubectl plugin that allows developers to manage, troubleshoot, and generate Kubernetes manifests using Google Cloud's Vertex AI.

## Problems solved

- Steep learning curve of K8s YAML; difficulty diagnosing obscure pod errors; manual effort in repetitive resource management commands.

## How to get started

Install via Krew: 'kubectl krew install ai'; authenticate with GCP; run 'kubectl ai "Explain why pod X is pending"' or 'kubectl ai "Generate a deployment for Nginx"'.
