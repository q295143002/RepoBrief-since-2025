---
id: 918932479
repo_name: "bytedance/UI-TARS"
url: "https://github.com/bytedance/UI-TARS"
stars: 9874
language: "Python"
tags: ["Computer Use","AI Agent","VLM","RL","ByteDance"]
original_description: "UI-TARS: Pioneering Automated GUI Interaction with Native Agents. An open-source multimodal agent capable of operating computers and mobile devices through vision-language reasoning."
english_summary: "UI-TARS is a state-of-the-art Vision-Language model from ByteDance that acts as a native GUI agent, capable of navigating desktops and mobile apps via visual reasoning and RL-enhanced thought processes."
chinese_summary: null
problems_solved: "- Bridges the gap between AI and complex GUI software where APIs are missing; achieves SOTA on benchmarks like OSWorld by reasoning through 'thoughts' before taking action; handles gaming and cross-app tasks on both desktop and mobile platforms."
how_to_use: "Install via `pip install ui-tars`. Deploy the weights from Hugging Face (7B or larger). Use the built-in action parser in Python to convert model strings like `click(start_box='(100,200)')` into executable PyAutoGUI or mobile driver code."
sync_at: "2026-03-17T12:09:44.212Z"
---

# bytedance/UI-TARS

### 1. Positioning
UI-TARS is ByteDance's flagship entry into the 'Computer Use' agent space. It targets researchers and AI product developers who want to build autonomous systems capable of using computers exactly like a human does—via the screen and mouse/keyboard.

### 2. Pain Points & Advantages
Most GUI agents struggle with precision (coordinate mapping) and reasoning. UI-TARS uses Reinforcement Learning to enable 'Thought' steps, allowing it to plan and verify before clicking. Its primary advantage is its 'All-in-One' capability, outperforming Claude 3.7 and OpenAI CUA on specialized GUI benchmarks (OSWorld 42.5%).

### 3. Technical Architecture
Built on top of Qwen 2.5-VL, UI-TARS uses absolute coordinates for grounding. It features a 7-phase generation pipeline for its harnesses and supports diverse prompt templates like COMPUTER_USE, MOBILE_USE, and GROUNDING (action-only).

### 4. Core Implementation
The model operates by processing screenshots into 'thoughts' and then 'actions'. A specialized action parser (ui-tars-python) translates these into structured JSON or direct OS-level commands (PyAutoGUI). It supports inference scaling, allowing it to reason longer for more complex tasks.

### 5. Code Organization
The repository includes the inference engine, deployment guides, a dedicated coordinate processing system, and evaluation scripts for benchmarks like OSWorld, WebVoyager, and various games (Minecraft, Poki).

### 6. Quick Start Suggestion
Check out the `README_deploy.md` to launch a 7B instruct version via vLLM. Then, use the provided Python snippet to parse a 'Click the button' action and see how it generates the precise PyAutoGUI code needed to move your local mouse cursor.

### 7. Summary
UI-TARS is arguably the leading open-weights model for GUI automation. By combining high-resolution visual grounding with RL-driven reasoning, it sets a new bar for how AI can interact with the legacy software world.
