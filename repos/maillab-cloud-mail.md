---
title: "maillab/cloud-mail"
repo_name: "maillab/cloud-mail"
url: "https://github.com/maillab/cloud-mail"
github_url: "https://github.com/maillab/cloud-mail"
stars: 5040
language: "JavaScript"
layout: repo
tags:
  - "Email Service"
  - "Cloudflare Workers"
  - "Serverless"
  - "Vue 3"
  - "Hono"
  - "Self-Hosted"
  - "Open Source"
---

## What it is

Cloud Mail is a lightweight, serverless email platform that leverages the Cloudflare ecosystem (Workers, D1, KV, R2) to provide a full-featured mailbox. It allows users to manage multiple custom-domain email addresses with support for sending, receiving, and attachment storage, all with near-zero infrastructure cost.

## Problems solved

- High subscription costs of professional email hosting (G Suite/Fastmail)
- Technical complexity of managing a private mail server with a database and file storage
- Need for a responsive, modern email interface that works on both mobile and desktop

## How to get started

Deploy the backend to Cloudflare Workers and the frontend (Vue 3) to Cloudflare Pages. Configure your domain and DNS records according to the deployment documentation. It integrates with Resend for reliable outbound mail delivery and uses R2 for storing attachments securely.
