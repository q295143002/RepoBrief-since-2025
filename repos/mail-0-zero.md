---
title: "Mail-0/Zero"
repo_name: "Mail-0/Zero"
url: "https://github.com/Mail-0/Zero"
github_url: "https://github.com/Mail-0/Zero"
stars: 10479
language: "TypeScript"
layout: repo
tags:
  - "AI Email"
  - "Self-Hosted"
  - "Privacy"
  - "Next.js"
---

## What it is

Zero is a privacy-first, open-source AI email client and server that offers a unified, self-hosted inbox with deep LLM agent integrations.

## Problems solved

- Combines the privacy of self-hosting with the convenience of unified Gmail/Outlook access; uses AI agents to automate email categorization, summarization, and responses; replaces complex, data-hungry, and closed-source email solutions with a modern, developer-friendly stack.

## How to get started

Requires Node.js v18+, pnpm, and Docker. Clone the repo, run `pnpm install`, start the DB with `pnpm docker:db:up`, configure `.env` via `pnpm nizzy env`, and launch the app with `pnpm dev`. Access at `http://localhost:3000`.

## Detailed report

### 1. Positioning
Zero is designed for privacy-advocates, developers, and enterprises looking for a modern email experience without the surveillance of traditional providers. It positions itself as an 'Agent-Native' email client where LLMs are central to the workflow.

### 2. Pain Points & Advantages
Modern email services lack transparency and robust AI automation. Zero solves this by being fully open-source and letting users run their own instances. Key advantages include a unified inbox (N-providers), full data ownership, and a highly responsive Next.js frontend capable of handling massive message volumes via Durable Objects and R2 storage.

### 3. Technical Architecture
Built on a modern TypeScript stack: Next.js/React/Tailwind for the frontend, Drizzle ORM with PostgreSQL for data persistence, and Better Auth for security. It utilizes Cloudflare's Durable Objects for high-speed email syncing and storage.

### 4. Core Implementation
The core 'Sync' engine is designed to be exceptionally fast, storing emails in R2 buckets and Durable Objects for rapid retrieval. The agentic layer integrates directly with the message pipeline, allowing for real-time processing and automated task generation from incoming emails.

### 5. Code Organization
The project is organized as a monorepo, with the main application in `apps/mail`. It includes a custom CLI `nizzy` for environment and type synchronization, and well-structured database schemas defining the RAG and Agent table structures.

### 6. Quick Start Suggestion
Follow the Docker-native setup to get a local instance running, then connect your Gmail account through the provided Google OAuth setup guide. Use the 'Sync' feature to index your last 500 emails and try an AI-powered summary query to see the platform's speed.

### 7. Summary
Zero is a ambitious and well-executed attempt to modernize the oldest protocol on the web. By combining a premium, modern tech stack with a deep focus on privacy and AI-native features, it provides a compelling alternative for anyone tired of traditional, opaque email platforms.
