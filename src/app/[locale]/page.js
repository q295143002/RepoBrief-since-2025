import { getRepos, getTagStats, getAlphabeticalTags } from '@/lib/data';
import Header from '@/components/Header';
import ProjectIntro from '@/components/ProjectIntro';
import Showcase from '@/components/Showcase';

export default async function Home() {
  const allRepos = await getRepos();
  const tagStats = getTagStats(allRepos);
  const tagGroups = getAlphabeticalTags(allRepos);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <ProjectIntro />
      <Showcase initialRepos={allRepos} tagStats={tagStats} tagGroups={tagGroups} />
    </main>
  );
}
