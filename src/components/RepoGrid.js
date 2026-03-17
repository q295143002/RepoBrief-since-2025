'use client';

import RepoCard from './RepoCard';
import styles from './RepoGrid.module.css';

export default function RepoGrid({ repos, onRepoClick }) {
  return (
    <div className={styles.grid}>
      {repos.map((repo) => (
        <RepoCard 
          key={repo.slug} 
          repo={repo} 
          onClick={onRepoClick} 
        />
      ))}
    </div>
  );
}
