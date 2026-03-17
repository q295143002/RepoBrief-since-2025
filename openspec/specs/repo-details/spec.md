## ADDED Requirements

### Requirement: Repository Detail Drawer
The system SHALL display a right-side drawer when a repository card is clicked, based on the `poplayer.pen` design.

#### Scenario: Opening detail drawer
- **WHEN** user clicks on a repository card
- **THEN** a drawer slides out from the right showing English summary, problems solved, and how to use.

### Requirement: Detailed Report Section
The drawer SHALL include a "Detailed Report" section parsed from the corresponding Markdown file.

#### Scenario: Drawer content verification
- **WHEN** drawer is opened for "LangChain"
- **THEN** it displays the specific content found in `repos/langchain.md`.
