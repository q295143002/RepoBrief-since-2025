## Context

The RepoBrief project requires a professional showcases for top open-source projects. Currently, project data is stored in `github_repos.db`. We have a validated design system in `require.pen` and `poplayer.pen` that needs to be implemented.

## Goals / Non-Goals

**Goals:**
- **Automated Sync**: A CLI script to convert SQLite rows into Markdown files in the `repos/` directory.
- **Themed UI**: A responsive Next.js application with Dark/Light mode support (default Dark).
- **Search & Filter**: Client-side filtering by tags and sorting by star count.
- **Deep-Dive**: Repository detail drawer using the `poplayer.pen` structure.
- **i18n**: Support for English and Chinese language toggles.
- **Export**: One-click Excel export for the current filtered list.

**Non-Goals:**
- **Admin UI**: No interface for editing repository data directly.
- **Real-time Sync**: The database-to-markdown sync is triggered manually or via CI.

## Decisions

- **Frontend Framework**: **Next.js (App Router)**. This choice provides excellent performance through Static Site Generation (SSG) for repository pages while allowing dynamic client-side filtering.
- **Styling Strategy**: **Vanilla CSS**. To perfectly match the premium feel of the `.pen` designs without the overhead of utility-first frameworks. CSS Variables will be used for Dark/Light theme management.
- **Data Source**: **Markdown Files**. The UI will consume data from the `repos/` directory. frontmatter will store metadata (`stars`, `tags`, `language`, `url`), and the content will be the project description.
- **Localization**: **`next-intl` or similar**. This allows structured translation keys for UI elements and provides a pattern for localized project summaries.
- **Export Utility**: **`xlsx` library**. A lightweight and standard choice for generating Excel files in the browser.

## Risks / Trade-offs

- **[Risk] Sync Complexity** → [Mitigation] The sync script should be idempotent and handle the removal of stale markdown files if a project is removed from the database.
- **[Risk] Large Data Set Performance** → [Mitigation] If the repo count grows to thousands, implement virtualization for the list and ensure filtering logic is optimized.
- **[Risk] CSS Maintenance** → [Mitigation] Use CSS Modules to keep styles encapsulated and maintainable as the component count grows.
