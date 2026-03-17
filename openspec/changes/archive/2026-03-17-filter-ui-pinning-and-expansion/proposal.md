## Why

Currently, the filter section only shows 15 tags (about 2 rows), and selected tags remain in their original positions. To improve the user experience:
1.  **Selection Persistence**: Pinning selected tags to the top ensures users can easily see and deselect their active filters without scrolling or opening the overlay.
2.  **Increased Discoverability**: Expanding to 5 rows allows users to see more high-impact tags immediately without needing to open the "More" overlay.

## What Changes

- **Tag Pinning**: Selected tags will always appear at the beginning of the list in `FilterSection`.
- **Expanded View**: Increase the number of visible tags in the dashboard from ~15 to ~40 (roughly 5 rows on desktop).
- **Sorting preserved**: Unselected tags will continue to be sorted by project count (descending).

## Capabilities

### Modified Capabilities
- `ui-filter-chips`: Implement dynamic reordering logic where selected state takes precedence over project count for positioning.

## Impact

- **UI Components**: `FilterSection` logic will be updated to handle the `selectedTags` prop to reorder its internal list.
