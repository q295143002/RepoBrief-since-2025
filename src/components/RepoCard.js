'use client';

import { Star } from 'lucide-react';
import styles from './RepoCard.module.css';

export default function RepoCard({ repo, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(repo)}>
      <div className={styles.header}>
        <h3 className={styles.repoName}>{repo.repo_name}</h3>
        <div className={styles.stats}>
          <Star size={16} fill="currentColor" />
          <span>{repo.stars.toLocaleString()}</span>
        </div>
      </div>
      
      <p className={styles.description}>
        {repo.original_description || 'Explore this awesome project on GitHub.'}
      </p>

      <div className={styles.footer}>
        {repo.tags.slice(0, 3).map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
        {repo.language && <span className={styles.lang}>{repo.language}</span>}
      </div>
    </div>
  );
}
