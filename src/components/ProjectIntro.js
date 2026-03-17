import { useTranslations } from 'next-intl';
import styles from './ProjectIntro.module.css';

export default function ProjectIntro() {
  const t = useTranslations('Intro');

  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.container}>
        <div className={styles.badge}>UI UX Pro Max</div>
        <h1 className={styles.title}>
          <span className={styles.accent}>Design</span> Intelligence
        </h1>
        <p className={styles.description}>
          Discover and explore high-star repositories with localized summaries. 
          Powered by advanced curation and intelligent insights.
        </p>
      </div>
    </section>
  );
}
