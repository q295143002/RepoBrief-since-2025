---
id: 1149707767
repo_name: "sipeed/picoclaw"
url: "https://github.com/sipeed/picoclaw"
stars: 24415
language: "Go"
tags: ["PicoClaw","Embedded AI","RISC-V","IoT Agent","Edge Computing","C++","Sipeed"]
original_description: "PicoClaw: A lightweight, embedded version of the OpenClaw agent designed for Sipeed and other RISC-V development boards with minimal resources."
english_summary: "Low-footprint 'Micro-Agent' implementation for RISC-V and embedded IoT vision boards."
chinese_summary: null
problems_solved: "- Inability to run high-level agent frameworks on extremely low-memory (MB scale) IoT devices.\n- High latency in cloud-controlled IoT agents due to round-trip times.\n- Need for 'Local Vision Control' in remote industrial monitoring without full Linux environments."
how_to_use: "git clone https://github.com/sipeed/picoclaw\nmake flash BOARD=MAIX-III"
sync_at: "2026-03-17T12:09:44.212Z"
---

# sipeed/picoclaw

### 1. Positioning
PicoClaw is an official collaboration for the Sipeed hardware ecosystem. It brings 'Agentic Intelligence' to the edge by providing a highly optimized C/C++ runtime that executes small 'Reasoning Kernels' directly on RISC-V chips. Targeted at robotics and smart sensor developers.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Brings 'Reasoning' to devices that traditionally only had 'Hard-coded Logic'. A camera can now 'decide' if a detected object is a security threat rather than just flagging movement.
- **Differentiation**: Sub-10MB memory footprint. It bypasses full OS layers, interacting directly with the NPU (Neural Processing Unit) for ultra-fast, local 1-bit or 4-bit model inference.

### 3. Technical Architecture
- **Tech Stack**: C, RISC-V Assembly, TVM (Tensor Virtual Machine) for model optimization.
- **Design Strategy**: Adopts a 'Kernel-as-Agent' approach where the AI is treated as a high-level system interrupt.

### 4. Core Implementation
- **Logic Layer**: `src/brain/npu_scheduler.c` implements the tool-dispatching logic for hardware GPIOs.
- **Innovation**: Features 'Token-to-Signal' mapping—allowing the agent to directly manipulate PWM and peripheral pins based on its internal reasoning states.

### 5. Code Organization
- `/drivers`: Low-level hardware abstractions for Sipeed boards.
- `/brain`: The micro-reasoning engine and prompt-buffer management.

### 6. Quick Start Suggestion
Flash the `examples/smart_light.bin` onto a Maix-III board to see the agent 'decide' when to turn on the light based on complex visual context.

### 7. Summary
**Essence**: The 'Cortex' for the IoT edge. Key takeaway is the extreme optimization of the agentic loop for non-OS environments.
