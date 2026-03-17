---
id: 918932603
repo_name: "bytedance/UI-TARS-desktop"
url: "https://github.com/bytedance/UI-TARS-desktop"
stars: 28799
language: "TypeScript"
tags: ["Ai Agent"]
original_description: "UI-TARS-desktop: The desktop control terminal for UI-TARS, ByteDance's vision-driven universal Agent core library."
english_summary: "ByteDance's desktop interface for controlling vision-driven AI agents on local systems."
chinese_summary: null
problems_solved: "- Lack of a GUI to monitor and troubleshoot complex vision-based agent actions.\n- Difficulty in 'handoff' between human user and AI agent on a desktop environment.\n- Complexity in managing multiple local UI-TARS instances."
how_to_use: "git clone https://github.com/bytedance/UI-TARS-desktop\nnpm install && npm run build\n./UI-TARS-desktop --connect local"
sync_at: "2026-03-17T12:09:44.212Z"
---

# bytedance/UI-TARS-desktop

### 1. Positioning
UI-TARS-desktop is the official GUI for ByteDance's UI-TARS (Universal Intelligent Task Assistant via Remote Sensing). While the core library handles the vision and reasoning, this desktop client provides the 'Control Center' for users to initiate, monitor, and intercede in AI-driven desktop automation tasks.

### 2. Pain Points & Advantages
- **Pain Points Solved**: It provides 'Visual Explainability'—showing the user exactly what coordinates the AI is clicking and why.
- **Differentiation**: Specifically optimized for 'low-latency visual feedback', ensuring the user sees the agent's intent in near real-time.

### 3. Technical Architecture
- **Tech Stack**: Electron + React.
- **Design Strategy**: Adopts a 'Remote Control' architecture where the UI communicates with a background TARS-Engine via high-speed IPC/GRPC.

### 4. Core Implementation
- **Innovative**: Features 'Visual Overlays'—it draws bounding boxes over the desktop screen to show where the AI is focusing its attention.
- **Engineering Practice**: Implements a 'Safety Kill-Switch' that immediately halts all AI clicks if the user moves their mouse.

### 5. Code Organization
- `/main`: Electron main process logic (system permissions, input emulation).
- `/renderer`: The React-based dashboard and overlay UI.

### 6. Quick Start Suggestion
Launch the app and enable 'Debug Overlay' to see the real-time object detection labels as the AI navigates your desktop.

### 7. Summary
**Essence**: The 'Mission Control' for vision-based agents. Key learning is the design of human-in-the-loop interfaces for high-autonomy systems.
