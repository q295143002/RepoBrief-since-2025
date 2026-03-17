---
id: 1116260703
repo_name: "gsd-build/get-shit-done"
url: "https://github.com/gsd-build/get-shit-done"
stars: 29106
language: "JavaScript"
tags: ["AI Task Runner","Velocity","CLI","Automation","Bash","TypeScript","Greedy Execution"]
original_description: "Get-Shit-Done (GSD): A radical AI task runner that focuses on immediate execution and 'getting things done' without over-planning."
english_summary: "A high-velocity AI task runner focused on rapid execution and minimal administrative overhead."
chinese_summary: null
problems_solved: "- 'Analysis Paralysis' in complex agent frameworks where agents spend more time planning than coding.\n- Overheating/Token waste caused by excessive self-reflection loops in simple tasks.\n- Friction in integrating AI assistants into fast-paced bash-focused workflows."
how_to_use: "npm install -g @gsd-build/gsd\ngsd \"Deploy this site to Vercel and tell the team on Slack\""
sync_at: "2026-03-17T12:09:44.212Z"
---

# gsd-build/get-shit-done

### 1. Positioning
GSD is a pragmatist's AI agent. Built for engineers who prioritize 'execution speed' above all else, it bypasses traditional deep-planning cycles for simple tasks, focusing on 'First-Pass Execution' and fixing errors on the fly. It is the 'Anti-Agile' of AI agents.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Eliminates the 20-30 second 'thinking' delay in most agents, allowing for a near-instant 'command -> action' experience for local shell tasks.
- **Differentiation**: Native 'Bash-First' philosophy—it assumes the user knows roughly what needs to happen and just needs the AI's speed to type it out.

### 3. Technical Architecture
- **Tech Stack**: TypeScript / Node.js.
- **Design Strategy**: Adopts a 'Greedy Execution' model—it performs the first logical action immediately and uses the output to determine the second, rather than building a full graph first.

### 4. Core Implementation
- **Logic Layer**: `src/runner/greedy.ts` implements the rapid-fire command execution loop.
- **Creative**: Features a 'Noise Filter' that automatically ignores verbose terminal warnings to keep the AI focused on the primary task exit status.

### 5. Code Organization
- `/cli`: The command entry and shell integration.
- `/adapters`: Quick-response model configurations (Claude Haiku optimized).

### 6. Quick Start Suggestion
Run `gsd --dry-run` to see how it resolves a complex command into a linear set of shell operations.

### 7. Summary
**Essence**: The 'Fast and Furious' of AI agents. Key learning is prioritize iteration speed over planning perfection for local automation.
