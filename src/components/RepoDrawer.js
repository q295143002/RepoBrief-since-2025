'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useTranslations, useLocale } from 'next-intl';
import styles from './RepoDrawer.module.css';

export default function RepoDrawer({ repo, isOpen, onClose }) {
  const t = useTranslations('Drawer');
  const locale = useLocale();

  if (!repo) return null;

  const summary = locale === 'zh' ? repo.chinese_summary : repo.english_summary;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.drawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.header}>
              <div className={styles.titleArea}>
                <h2>{repo.repo_name}</h2>
                <a 
                  href={repo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-secondary)' }}
                >
                  <ExternalLink size={14} />
                  View on GitHub
                </a>
              </div>
              <button className={styles.closeButton} onClick={onClose}>
                <X size={20} />
              </button>
            </div>

            <div className={styles.content}>
              {summary && (
                <div className={styles.section}>
                  <span className={styles.sectionLabel}>{t('summary')}</span>
                  <p className={styles.sectionContent}>{summary}</p>
                </div>
              )}

              {repo.problems_solved && (
                <div className={styles.section}>
                  <span className={styles.sectionLabel}>{t('problems')}</span>
                  <p className={styles.sectionContent}>{repo.problems_solved}</p>
                </div>
              )}

              {repo.how_to_use && (
                <div className={styles.section}>
                  <span className={styles.sectionLabel}>{t('howToUse')}</span>
                  <p className={styles.sectionContent}>{repo.how_to_use}</p>
                </div>
              )}

              <div className={styles.section}>
                <span className={styles.sectionLabel}>{t('report')}</span>
                <div className={styles.markdownBody}>
                  <ReactMarkdown>{repo.detailed_report}</ReactMarkdown>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
