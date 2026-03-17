## ADDED Requirements

### Requirement: Main Showcase Interface
The system SHALL display a list of repositories in a grid/list format as designed in `require.pen`.

#### Scenario: Displaying repo list
- **WHEN** user loads the index page
- **THEN** system renders repo cards showing project name, star count, and tags.

### Requirement: Tag Filtering
The system SHALL allow users to filter the repository list by selecting one or more bubble tags.

#### Scenario: Filter by single tag
- **WHEN** user selects the "AI" tag
- **THEN** only repositories containing the "AI" tag are displayed.

### Requirement: Star Sorting
The system SHALL provide a button to sort the repository list by star count (ascending/descending).

#### Scenario: Sort by most stars
- **WHEN** user selects "Sort by Stars (High to Low)"
- **THEN** repositories are re-ordered starting with the highest star count.

### Requirement: Theme Toggle
The system SHALL support theme switching between Dark (Slate 900) and Light (Slate 50).

#### Scenario: Toggle theme to Light
- **WHEN** user clicks the theme toggle switch
- **THEN** the interface colors change to the Light Mode palette.
