'use client';

import { useTranslations } from 'next-intl';
import styles from './FilterSection.module.css';

export default function FilterSection({ tagStats, selectedTags, onTagToggle, onShowMore }) {
  const t = useTranslations('Filter');

  const displayLimit = 40;
  
  // Split into selected and unselected, maintaining original sorting (project count)
  const selected = tagStats.filter(tag => selectedTags.includes(tag.name));
  const unselected = tagStats.filter(tag => !selectedTags.includes(tag.name));
  
  // Combine: pinned tags first, then unpinned
  const processedTags = [...selected, ...unselected].slice(0, displayLimit);

  return (
    <section className={styles.filterSection}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.tagsContainer}>
        {processedTags.map((tag) => (
          <div
            key={tag.name}
            className={`${styles.chip} ${selectedTags.includes(tag.name) ? styles.chipSelected : ''}`}
            onClick={() => onTagToggle(tag.name)}
          >
            {tag.name} <span className={styles.count}>({tag.count})</span>
          </div>
        ))}
        {tagStats.length > displayLimit && (
          <div className={styles.moreButton} onClick={onShowMore}>
            {t('more')} +
          </div>
        )}
      </div>
    </section>
  );
}
