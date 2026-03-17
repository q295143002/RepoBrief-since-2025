import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const REPOS_DIR = path.join(process.cwd(), 'repos');

export async function getRepos() {
  if (!fs.existsSync(REPOS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(REPOS_DIR);
  const repos = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(REPOS_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      return {
        ...data,
        slug: file.replace('.md', ''),
        detailed_report: content
      };
    });

  // Default sorting: most stars first
  return repos.sort((a, b) => (b.stars || 0) - (a.stars || 0));
}

export function getAllTags(repos) {
  const tags = new Set();
  repos.forEach((repo) => {
    if (repo.tags && Array.isArray(repo.tags)) {
      repo.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

export function getTagStats(repos) {
  const stats = {};
  repos.forEach((repo) => {
    if (repo.tags && Array.isArray(repo.tags)) {
      repo.tags.forEach((tag) => {
        stats[tag] = (stats[tag] || 0) + 1;
      });
    }
  });
  return Object.entries(stats)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => {
      if (b.count !== a.count) {
        return b.count - a.count;
      }
      return a.name.localeCompare(b.name);
    });
}

export function getAlphabeticalTags(repos) {
  const stats = getTagStats(repos);
  const groups = {};
  
  stats.forEach((tag) => {
    const char = tag.name.charAt(0).toUpperCase();
    if (!groups[char]) {
      groups[char] = [];
    }
    groups[char].push(tag);
  });
  
  return Object.entries(groups)
    .map(([letter, tags]) => ({ letter, tags }))
    .sort((a, b) => a.letter.localeCompare(b.letter));
}
