---
id: 1115161703
repo_name: "steipete/gogcli"
url: "https://github.com/steipete/gogcli"
stars: 6232
language: "Go"
tags: ["Google Workspace","CLI","Gmail","Google Drive","Automation","DevOps","Security"]
original_description: "Google Suite CLI: Gmail, GCal, GDrive, GContacts."
english_summary: "gogcli (gog) is a comprehensive command-line interface for Google services including Gmail, Drive, Calendar, Sheets, Docs, and more. It is designed for both human use and automation, providing JSON-first outputs, secure keyring-based token storage, and multi-account management. It uniquely supports Workspace-specific features like domain-wide delegation and service accounts."
chinese_summary: null
problems_solved: "- Clunky Google Web UIs: Provides a blazing fast terminal interface for common tasks (searching mail, creating events).\n- Automation friction: Every command outputs clean JSON, making it trivial to pipe into `jq` or AI agents.\n- Auth management: Handles OAuth refresh tokens, service accounts, and headless auth flows smoothly.\n- Security sandboxing: Includes a command allowlist feature to restrict which Google APIs an AI agent can access."
how_to_use: "Install via Homebrew (`brew install gogcli`). Run `gog auth credentials <json>` to set up your OAuth client, then `gog auth add <email>` to sign in. Once authenticated, use commands like `gog gmail search 'unread'` or `gog calendar events --today`. It supports setting aliases for accounts to simplify multi-account usage (e.g., `GOG_ACCOUNT=work gog ...`)."
sync_at: "2026-03-17T12:09:44.212Z"
---

# steipete/gogcli

### 1. Positioning
steipete/gogcli is positioned as a gogcli (gog) is a comprehensive command-line interface for google services including gmail, drive, calendar, sheets, docs, and more. it is designed for both human use and automation, providing json-first outputs, secure keyring-based token storage, and multi-account management. it uniquely supports workspace-specific features like domain-wide delegation and service accounts. It aims to provide developers with a robust, Go-based solution for google suite cli: gmail, gcal, gdrive, gcontacts.

### 2. Pain Points & Advantages
Traditional methods in this domain often suffer from Clunky Google Web UIs: Provides a blazing fast terminal interface for common tasks (searching mail, creating events).. steipete/gogcli addresses this by gogcli (gog) is a comprehensive command-line interface for google services including gmail, drive, calendar, sheets, docs, and more. it is designed for both human use and automation, providing json-first outputs, secure keyring-based token storage, and multi-account management. it uniquely supports workspace-specific features like domain-wide delegation and service accounts, offering a significant performance boost and better developer ergonomics compared to existing alternatives.

### 3. Technical Architecture
The project is built using Go, adopting a modular and scalable design. It leverages modern industry standards to ensure compatibility across different environments, focusing on efficiency and ease of integration.

### 4. Core Implementation
Main logic revolves around google suite cli: gmail, gcal, gdrive, gcontacts. The implementation utilizes Go's strengths to provide gogcli (gog) is a comprehensive command-line interface for google services including gmail, drive, calendar, sheets, docs, and more. it is designed for both human use and automation, providing json-first outputs, secure keyring-based token storage, and multi-account management. it uniquely supports workspace-specific features like domain-wide delegation and service accounts, ensuring high reliability and performance under load.

### 5. Code Organization
The repository is structured logically, with core functionality separated from utilities and examples. This organization facilitates easy navigation and contribution for developers looking to extend the tool's capabilities.

### 6. Quick Start Suggestion
To get started, install via homebrew (`brew install gogcli`). run `gog auth credentials <json>` to set up your oauth client, then `gog auth add <email>` to sign in. once authenticated, use commands like `gog gmail search 'unread'` or `gog calendar events --today`. it supports setting aliases for accounts to simplify multi-account usage (e.g., `gog_account=work gog ...`). This will allow you to quickly evaluate the tool and integrate it into your existing development workflow.

### 7. Summary
An essential, Go-powered utility that streamlines google suite cli: gmail, gcal, gdrive, gcontacts; it effectively tackles Clunky Google Web UIs: Provides a blazing fast terminal interface for common tasks (searching mail, creating events). while maintaining a high standard of code quality and usability.
