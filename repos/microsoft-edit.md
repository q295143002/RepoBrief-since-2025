---
id: 952719663
repo_name: "microsoft/edit"
url: "https://github.com/microsoft/edit"
stars: 13656
language: "Rust"
tags: ["Text Editor","Rust","CLI","MS-DOS"]
original_description: "A simple editor for simple needs."
english_summary: "A modern homage to the classic MS-DOS Editor, built with Rust for terminal-based, simple, and accessible text editing."
chinese_summary: null
problems_solved: "- Provides a terminal-based editor alternative designed to be vastly simpler and more accessible than Vim or Emacs for inexperienced users."
how_to_use: "Install via `winget install Microsoft.Edit` or build from source using Cargo. Run `edit <filename>` in your terminal."
sync_at: "2026-03-17T12:09:44.212Z"
---

# microsoft/edit

### 1. Positioning
Open-sourced by Microsoft, `edit` is a lightweight, approachable terminal text editor targeting modern interfaces but paying homage to legacy MS-DOS editing workflows.

### 2. Pain Points & Advantages
CLI text editors (Vim/Nano/Emacs) possess steep learning curves or unintuitive interfaces for modern graphical-interface users. `edit` boasts UI concepts similar to VS Code inside a terminal, significantly lowering the barrier to entry.

### 3. Technical Architecture
Written entirely in Rust. It utilizes modern terminal UI libraries and optionally links to ICU (International Components for Unicode) for complex search/replace functionalities and internationalization support.

### 4. Core Implementation
Features event-loop driven rendering, an internal gap-buffer or rope structure for performant text manipulation, and implements standard key-bindings familiar to modern IDE users.

### 5. Code Organization
Idiomatic Rust workspace featuring `src/` for core application logic, integrated testing suites, and a dedicated `i18n/` directory managing multi-language support definitions.

### 6. Quick Start Suggestion
Compile with Rust nightly using `cargo build --release` or install precompiled binaries, then execute `edit` to launch a friendly terminal TUI.

### 7. Summary
A nostalgic yet thoroughly modern Rust-based text editor that acts as the perfect, accessible terminal editing tool for users desiring simplicity.
