import { Download, SortAsc, SortDesc, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import styles from './Toolbar.module.css';

export default function Toolbar({ count, sortOrder, onSortToggle, onExport, searchValue, onSearchChange }) {
  const t = useTranslations('Toolbar');

  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <div className={styles.searchWrapper}>
          <Search size={16} color="var(--text-muted)" />
          <input 
            type="text" 
            className={styles.searchInput}
            placeholder={t('searchPlaceholder')}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <span className={styles.resultsCount}>
          {t('results', { count })}
        </span>
      </div>

      <div className={styles.right}>
        <button className={styles.button} onClick={onSortToggle}>
          {sortOrder === 'desc' ? <SortDesc size={18} /> : <SortAsc size={18} />}
          {t('sortByStars')}
        </button>
        <button className={`${styles.button} ${styles.buttonPrimary}`} onClick={onExport}>
          <Download size={18} />
          {t('export')}
        </button>
      </div>
    </div>
  );
}
