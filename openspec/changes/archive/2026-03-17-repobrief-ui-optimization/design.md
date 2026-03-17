## Context

RepoBrief currently provides a simple interface for browsing high-star GitHub repositories. While functional, the UI lacks branding and some UX refinements for handling a large number of tags. This design addresses functional and visual optimizations requested in `require2.md`.

## Goals / Non-Goals

**Goals:**
- Implement a branded project introduction (Hero) section.
- Enhance the header with GitHub-specific navigation and repository stats.
- Improve the filter UI by showing counts, limiting initial space, and providing a comprehensive overlay.
- Maintain consistency across Dark and Light modes.

**Non-Goals:**
- Changing the underlying data storage (SQLite/Markdown).
- Modifying the repository detail view (Poplayer).

## Decisions

### Component Architecture

The application will follow a Client/Server component separation for optimal performance and reactivity.

- **`MainLayout` (Server Component)**: Holds the overall structure.
  - **`Header` (Client Component)**: Manages theme and language state.
    - **`GithubNav` (Client Component)**: Displays the repository link and fetches live star count via GitHub API or uses cached database value.
  - **`ProjectIntro` (Server/Static Component)**: New Hero section displaying "UI UX Pro Max" branding.
  - **`FilterSection` (Client Component)**: 
    - Logic for limiting tag chips to 2 rows.
    - state to manage the "More Filters" overlay visibility.
  - **`RepoList` (Client Component)**: Displays cards based on current filters.

### UI Components (Ant Design)
- **Overlay**: Use `antd` `Modal` or a custom full-screen `Drawer` for the "More Filters" overlay.
- **Alphabetic Nav**: Use `antd` `Anchor` or a horizontal custom flex list for A-Z navigation.
- **Tag Chips**: Use `antd` `Tag` or `CheckableTag` with a custom badge suffix for counts.

### Data Strategy
- **Tag Counts**: A pre-computation step during the site build or a simple SQL query `SELECT tag, COUNT(*) FROM repo_tags GROUP BY tag` will provide the counts.
- **Alphabetical Sorting**: Client-side logic will group tags by their first letter: `{ "A": [Angular, ...], "B": [Bootstrap, ...] }`.

## Risks / Trade-offs

- **Performance**: Heavy tag counts and a 1440px wide landing page with many cards could lead to slow initial render. Mitigation: implement pagination or virtualization for the main list.
- **Responsiveness**: The alphabetical navigation bar needs to be adapted for mobile view (perhaps a vertical rail or a dropdown).
