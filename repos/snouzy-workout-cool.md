---
title: "Snouzy/workout-cool"
repo_name: "Snouzy/workout-cool"
url: "https://github.com/Snouzy/workout-cool"
github_url: "https://github.com/Snouzy/workout-cool"
stars: 7115
language: "TypeScript"
layout: repo
tags:
  - "Fitness"
  - "Next.js"
  - "Open-Source"
  - "Self-Hosted"
  - "Exercise-Database"
  - "TypeScript"
  - "PostgreSQL"
---

## What it is

Workout.cool is a self-hostable, open-source Next.js fitness platform with workout planning, progress tracking, and an exercise database, built as a modern revival of the abandoned workout.lol project.

## Problems solved

- Fills the gap left by the abandonment of workout.lol — providing the open-source fitness community with a maintained
- modern platform that supports self-hosting
- exercise video imports via CSV
- and a clean Feature-Sliced Design architecture.

## How to get started

Clone the repo. Use `make dev` (Docker) or `pnpm install` + `pnpm dev` (manual). Set up PostgreSQL, run Prisma migrations, and optionally seed the exercise database from a CSV file with `pnpm run import:exercises-full`. Access at `localhost:3000`.
