## ADDED Requirements

### Requirement: Sync SQLite data to Markdown
The system SHALL provide a CLI script to extract project data from `github_repos.db` and generate individual Markdown files in the `repos/` directory.

#### Scenario: Successful sync
- **WHEN** user runs the sync script
- **THEN** system reads `github_repos.db`, creates `repos/*.md` for each project, and deletes any markdown files no longer present in the database.

### Requirement: Markdown Frontmatter
The sync script SHALL populate the Markdown frontmatter with `stars`, `language`, `tags` (array), `url`, and `original_description`.

#### Scenario: Correct frontmatter generation
- **WHEN** a repository row has tags "AI, ML"
- **THEN** the generated Markdown frontmatter contains `tags: ["AI", "ML"]`.
