---
id: 1091200903
repo_name: "Snapchat/Valdi"
url: "https://github.com/Snapchat/Valdi"
stars: 16282
language: "C++"
tags: ["AI Safety","Data Validation","Mobile Development","Snapchat","JSON Repair","Performance","Edge Computing"]
original_description: "Valdi: Snapchat's high-performance library for validating and sanitizing AI-generated structured data for mobile applications."
english_summary: "Snapchat's lightweight, high-performance library for validating and sanitizing AI-generated data at the edge."
chinese_summary: null
problems_solved: "- Security risks of injecting un-sanitized AI content into high-traffic apps\n- Performance overhead of running heavy validation on mobile NPUs\n- Fragmentation between model-side prompts and app-side requirements"
how_to_use: "Install via npm: `npm install @snapchat/valdi`. Define your schema and use `valdi.sanitize` to filter and repair AI outputs before rendering."
sync_at: "2026-03-17T12:09:44.212Z"
---

# Snapchat/Valdi

### 1. Positioning
Valdi is a safety/performance library by Snapchat acting as a firewall between LLM outputs and production apps. It focuses on 'Extreme Sanitization' for stickers, captions, and recommendations.

### 2. Pain Points & Advantages
Addresses prompt injection and malformed JSON that cause mobile crashes. Optimized for 'Edge Devices', allowing offline security checks on iOS/Android devices.

### 3. Technical Architecture
TypeScript/JS based, optimized for React Native. Adopts a 'Schema-as-Filter' model where invalid structures are repaired or dropped intelligently.

### 4. Core Implementation
`repair_engine.ts` uses heuristics to fix common AI mistakes (trailing commas, etc.) without re-calling models. Features high-speed pattern-matching for toxicity scrubbing.

### 5. Code Organization
`/schemas` contains common AI output definitions (Tags, Chat), and `/core` houses the high-performance parser and repair logic.

### 6. Quick Start Suggestion
Use `valdi.repair()` on malformed model JSON to see it restore structure without an expensive API round-trip.

### 7. Summary
The 'Industrial Sanitizer' for AI content. It establishes a necessary 'Defense-in-Depth' layer where production applications can safely consume non-deterministic agent outputs.
