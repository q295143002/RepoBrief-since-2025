const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '../github_repos.db');
const OUTPUT_DIR = path.join(__dirname, '../repos');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
    process.exit(1);
  }
});

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

db.all('SELECT * FROM repositories', [], (err, rows) => {
  if (err) {
    console.error('Error fetching data:', err.message);
    return;
  }

  const syncTimestamp = new Date().toISOString();
  const activeFiles = new Set();

  rows.forEach((row) => {
    const fileName = `${slugify(row.repo_name)}.md`;
    const filePath = path.join(OUTPUT_DIR, fileName);
    activeFiles.add(fileName);

    // Frontmatter structure
    const frontmatter = {
      id: row.id,
      repo_name: row.repo_name,
      url: row.url,
      stars: row.stars,
      language: row.language,
      tags: row.tags ? row.tags.split(',').map(t => t.trim()) : [],
      original_description: row.original_description,
      english_summary: row.english_summary,
      chinese_summary: row.chinese_summary,
      problems_solved: row.problems_solved,
      how_to_use: row.how_to_use,
      sync_at: syncTimestamp
    };

    const content = `---
${Object.entries(frontmatter).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n')}
---

# ${row.repo_name}

${row.detailed_report || row.original_description || 'No detailed report available.'}
`;

    fs.writeFileSync(filePath, content);
    console.log(`✓ Synced: ${row.repo_name}`);
  });

  // Pruning
  const existingFiles = fs.readdirSync(OUTPUT_DIR);
  existingFiles.forEach((file) => {
    if (file.endsWith('.md') && !activeFiles.has(file)) {
      fs.unlinkSync(path.join(OUTPUT_DIR, file));
      console.log(`🗑 Pruned: ${file}`);
    }
  });

  console.log('\n✨ Synchronization complete!');
  db.close();
});
