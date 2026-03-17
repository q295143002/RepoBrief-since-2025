'use client';

import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import styles from './FilterOverlay.module.css';

export default function FilterOverlay({ isOpen, onClose, tagGroups, selectedTags, onTagToggle }) {
  const t = useTranslations('Filter');

  if (!isOpen) return null;

  const scrollToLetter = (letter) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{t('overlayTitle')}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.navBar}>
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => {
            const exists = tagGroups.some(g => g.letter === letter);
            return (
              <button 
                key={letter}
                className={`${styles.navItem} ${!exists ? styles.navItemDisabled : ''}`}
                onClick={() => exists && scrollToLetter(letter)}
                disabled={!exists}
              >
                {letter}
              </button>
            );
          })}
        </div>

        <div className={styles.content}>
          {tagGroups.map(group => (
            <div key={group.letter} id={`letter-${group.letter}`} className={styles.group}>
              <h3 className={styles.groupLetter}>{group.letter}</h3>
              <div className={styles.groupTags}>
                {group.tags.map(tag => (
                  <div
                    key={tag.name}
                    className={`${styles.chip} ${selectedTags.includes(tag.name) ? styles.chipSelected : ''}`}
                    onClick={() => onTagToggle(tag.name)}
                  >
                    {tag.name} <span className={styles.count}>({tag.count})</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
