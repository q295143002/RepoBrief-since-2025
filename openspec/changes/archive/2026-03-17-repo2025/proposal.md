## Why

This project aims to provide a professional project showcase platform (similar to GitBook) to introduce high-star open-source repositories. It addresses the need for a modern, localized, and easily navigable interface to discover and deep-dive into top-tier projects, while maintaining a single source of truth in a SQLite database.

## What Changes

- **Data Synchronization**: A process to sync repository data from `github_repos.db` into Markdown files in the `repos/` directory.
- **Showcase Interface**: A high-quality web interface (based on `require.pen` design) with:
    - Default Dark Mode with a Slate 900 palette and a Light Mode alternative.
    - Theme and Language (EN/ZH) toggle in the header.
    - Tag-based filtering (splitting comma-separated strings from the database).
    - Star-based sorting and Excel data export.
- **Detail Overlay**: A right-side drawer components (based on `poplayer.pen` design) to show detailed summaries, problems solved, and usage guides.
- **Localization**: Content translation support to enable seamless switching between English and Chinese.

## Capabilities

### New Capabilities
- `data-sync`: Synchronize repository data from SQLite to Markdown files.
- `repo-ui`: Main showcase interface with filtering, sorting, and theme/language toggles.
- `repo-details`: Detail drawer component for in-depth repository information.
- `content-localization`: Localization engine for English/Chinese content switching.
- `data-export`: Capability to export filtered repository lists to Excel.

### Modified Capabilities
- (None)

## Impact

- **Database**: Reads from `github_repos.db`.
- **File System**: Manages markdown files in the `repos/` directory.
- **Frontend**: New modern UI implementation with dark/light theme support.
- **Dependencies**: Potential new dependencies for Excel export (e.g., `xlsx`) and localization.
