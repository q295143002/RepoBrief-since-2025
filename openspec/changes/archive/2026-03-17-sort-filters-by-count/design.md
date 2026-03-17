## Context

The current UI surfaces tags alphabetically. This optimization aims to surface the most "dense" tags first to improve category discovery.

## Goals / Non-Goals

**Goals:**
- Sort tags in the main Filter bar by the number of projects associated with them.
- High-count tags should appear first (left/top).

**Non-Goals:**
- Modifying the sort order inside the "More Filters" overlay (that should remain alphabetical for quick A-Z searching).

## Decisions

### Refactor `getTagStats` in `src/lib/data.js`

The function should be updated to change its sorting logic.

- **Current Logic**: `.sort((a, b) => a.name.localeCompare(b.name))`
- **New Logic**: 
  ```javascript
  .sort((a, b) => {
    // Primary: Count descending
    if (b.count !== a.count) {
      return b.count - a.count;
    }
    // Secondary: Alphabetical ascending
    return a.name.localeCompare(b.name);
  })
  ```

### Impact on Components

- **`FilterSection.js`**: By changing the helper function's output, `FilterSection` will automatically display the prioritized tags without further logic changes.
- **`Showcase.js`**: No changes needed as it consumes the already-sorted `tagStats`.

## Risks / Trade-offs

- **Consistency**: Users regularily using the alphabetical list might experience a slight "learning curve" if tags jump around as the database updates. However, for a discovery-focused app, popularity-based sorting is preferred.
