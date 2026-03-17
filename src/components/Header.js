'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Globe, ChevronDown } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import GithubNav from './GithubNav';
import styles from './Header.module.css';

export default function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = document.documentElement.dataset.theme || 'dark';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <div style={{ 
          width: 32, 
          height: 32, 
          background: 'var(--accent)', 
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--bg-primary)',
          fontWeight: 800
        }}>B</div>
        <span className={styles.logoText}>{t('logo')}</span>
      </div>

      <div className={styles.controls}>
        <GithubNav />
        <div className={styles.controlItem} onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </div>

        <div className={styles.controlItem}>
          <Globe size={18} />
          <select 
            className={styles.languageSelect} 
            value={locale} 
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
          <ChevronDown size={14} />
        </div>
      </div>
    </header>
  );
}
