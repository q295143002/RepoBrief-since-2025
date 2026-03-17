## Why

Currently, the tags in the `FilterSection` are sorted alphabetically. However, to help users find the most popular or relevant categories faster, it is better to sort them by the number of repositories associated with each tag in descending order (popularity).

## What Changes

- **Filter Sorting**: Change the default sorting of tags in the main `FilterSection` from alphabetical to count-based (descending).
- **Secondary Sorting**: For tags with the same count, fallback to alphabetical sorting.

## Capabilities

### Modified Capabilities
- `ui-filter-chips`: Update the tag statistical calculation and presentation to support sorting by frequency.

## Impact

- **UI Components**: `FilterSection` will display a different order of tags.
- **Data Layer**: `getTagStats` in `src/lib/data.js` needs to ensure it returns data in the newly required order or handle sorting in the component.
