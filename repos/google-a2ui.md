---
id: 1063641074
repo_name: "google/A2UI"
url: "https://github.com/google/A2UI"
stars: 12847
language: "TypeScript"
tags: ["UI-Standard","Agentic-UI","Google-Cloud","Declarative-UI","Protocol"]
original_description: "A2UI: Agent-to-User Interface"
english_summary: "An open-source standard and toolkit by Google enabling AI agents to dynamically transmit secure, declarative JSON structures dictating rich interactive UI renderings on clients."
chinese_summary: null
problems_solved: "- Prevents the immense security risks and structural vulnerabilities tied closely to remote agents executing arbitrary JS/HTML UI elements by mandating a restricted\n- abstract data rendering protocol instead."
how_to_use: "For backend inference: Configure agents to generate A2UI JSON dicts. On the frontend: Import the `web_core` A2UI specific libraries and register custom components representing the declarative abstract elements locally."
sync_at: "2026-03-17T12:09:44.212Z"
---

# google/A2UI

### 1. Positioning
A2UI (Agent-to-User Interface) bridges an essential deficiency existing between large language models and native frontends (React/Flutter/Lit) by developing a scalable, framework-agnostic presentation protocol for agentic ecosystems.

### 2. Pain Points & Advantages
Agents outputting raw HTML is brittle and inherently insecure. A2UI resolves this definitively by enforcing UI as flat declarative JSON intent mapped directly against pre-compiled, highly secure native elements restricted manually by the developer's client configurations.

### 3. Technical Architecture
A language-agnostic protocol definition heavily backed by a modular Node.js/Typescript framework mapping implementation paths explicitly across Markdown renderers, Lit element environments, and native Flutter SDK applications.

### 4. Core Implementation
The fundamental loop isolates LLM generative parameters. Agents broadcast hierarchical component IDs and nested structures concurrently across A2A (Agent-to-Agent) channels. A local client parsing library continuously loops over inbound messages matching component tags against registered smart wrappers.

### 5. Code Organization
Divided primarily across rendering specifications and clients: `/renderers/` tracking varying integrations like Lit or Markdown; `/samples/` containing Python orchestrating agents (`backend`) next to corresponding web-client shells (`frontend`).

### 6. Quick Start Suggestion
Execute the Python Adk agent targeting `restaurant_finder`. Boot up the corresponding frontend dev environment via npm and observe exactly how the REST protocol seamlessly translates agent dialogue dynamically into beautifully native UI cards instantaneously.

### 7. Summary
A critically important paradigm specification formulated cleanly by Google, assuring cross-platform component stability and formidable cybersecurity whilst retaining comprehensive generative versatility during agent integrations.
