## Why

The goal of this change is to optimize the landing page's visual appeal and functional clarity. By adding project-specific navigation (GitHub link), a clear project description module, and refining the filter UX (counts and "More" overlay), we improve the user's ability to understand the project at a glance and find specific repositories more efficiently.

## What Changes

- **Header**: Add a GitHub project navigation link (`https://github.com/q295143002/RepoBrief-since-2025`) displayed as a pill with star counts.
- **Hero Area**: Insert a "Project Description Module" below the header to introduce "UI UX Pro Max" and its design intelligence capabilities.
- **Filter Bar**: 
  - Update tags/chips to include the count of repositories for each tag.
  - Limit the display to two rows of chips.
  - Add a "More +" button to trigger a filter overlay.
- **Filter Overlay**: A dedicated modal displaying all tags sorted alphabetically with an A-Z navigation bar for quick access.

## Capabilities

### New Capabilities
- `ui-nav-github`: GitHub repository navigation and statistics in the header.
- `ui-intro-hero`: A project introduction section for branding and clarity.
- `ui-filter-expansion`: A sophisticated filtering interface with alphabetical sorting and row-limited display.

### Modified Capabilities
- `ui-filter-chips`: Update existing filter chips to include numerical counts.

## Impact

- **UI Components**: Header, Filter Section, and a new Hero/Overlay component.
- **Data Layer**: Requires calculating counts per tag from the repository database.
