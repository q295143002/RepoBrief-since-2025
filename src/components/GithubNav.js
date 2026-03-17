import { Github, Star } from 'lucide-react';
import styles from './GithubNav.module.css';

export default function GithubNav() {
  const repoUrl = "https://github.com/q295143002/RepoBrief-since-2025";
  
  return (
    <a 
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.githubNav}
    >
      <div className={styles.iconGroup}>
        <Github size={18} />
      </div>
      <div className={styles.divider} />
      <div className={styles.starGroup}>
        <Star size={16} fill="var(--warning)" color="var(--warning)" />
        <span className={styles.starCount}>43.5k</span>
      </div>
    </a>
  );
}
