## ADDED Requirements

### Requirement: Language Switching
The system SHALL allow users to toggle between English and Chinese content using a header dropdown.

#### Scenario: Switch to Chinese
- **WHEN** user selects "Chinese" in the language dropdown
- **THEN** the UI strings and (where available) project summaries switch to Chinese.

### Requirement: Localized Content Metadata
The system SHALL support localized metadata files or keys to provide translated content for repository summaries.

#### Scenario: Displaying Chinese summary
- **WHEN** language is set to Chinese and a `zh.md` summary exists
- **THEN** the drawer displays the Chinese version of the summary.
