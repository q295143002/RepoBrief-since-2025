## Why

The user has identified three specific refinements needed to polish the RepoBrief application:
1.  **Metric Correction**: The GitHub star count in the navigation bar is currently hardcoded and incorrect.
2.  **Visual Alignment**: The programming language field (e.g., "Python") in the repository cards is not properly aligned with the tag chips.
3.  **Export Logic**: The Excel download function should strictly respect the current filters/search results to provide more targeted exports.

## What Changes

- **GitHub Navigation**: Update the hardcoded star count in `GithubNav.js` to "1".
- **Repo Card Styling**: Fix the alignment of the language field in `RepoCard.module.css` by ensuring vertical centering within the footer flex container.
- **Excel Export**: Verify and ensure `handleExport` in `Showcase.js` only exports the currently filtered repository list.

## Capabilities

### Modified Capabilities
- `ui-header-nav`: Update metric display.
- `ui-repo-card`: Fix layout alignment issues.
- `feature-data-export`: Refine export logic to be context-aware.

## Impact

- **UI Components**: `GithubNav`, `RepoCard`, `Showcase`.
- **User Experience**: Improved visual consistency and functional accuracy.
