## Context

These are small but important refinements for visual polish and functional correctness.

## Goals / Non-Goals

**Goals:**
- Correct hardcoded metrics.
- Fix alignment in the repository grid.
- Ensure export utility is context-aware.

## Decisions

### 1. GitHub Star Count
Update `src/components/GithubNav.js`:
Change `<span className={styles.starCount}>43.5k</span>` to `<span className={styles.starCount}>1</span>`.

### 2. Repo Card Alignment
Update `src/components/RepoCard.module.css`:
Add `align-items: center;` to the `.footer` class to ensure the language text and tag chips are vertically centered relative to each other.

### 3. Excel Export
The current implementation in `src/components/Showcase.js` already uses `filteredRepos`. I will verify that no global `allRepos` reference is accidentally used in the export trigger or data mapping.

## Risks / Trade-offs

None. These are non-breaking refinements.
