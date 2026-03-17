## Context

The `FilterSection` currently renders a fixed slice of `tagStats`. We need to move logic into the component to prioritize selected tags.

## Goals / Non-Goals

**Goals:**
- Selected tags are always visible and at the start.
- Five rows of tags are visible by default.

## Decisions

### Component Logic in `FilterSection.js`

Instead of simply mapping `tagStats.slice(0, 15)`, we will:
1. Filter `tagStats` into `selected` (those in `selectedTags`) and `unselected`.
2. Limit the total display to a higher number (e.g., 40).
3. Ensure unselected tags are still sorted by count.

### CSS Adjustments

If we want "exactly 5 rows", using a fixed height or `max-height` with `overflow: hidden` on the container might be safer than a count-based slice, but usually, a count-based slice is sufficient for "roughly 5 rows". I'll increase the slice to 40.

## Risks / Trade-offs

- **Layout Shift**: Selecting a tag will cause it to jump to the front. While functional, it's a significant visual shift. We'll ensure smooth transitions if possible via standard CSS.
