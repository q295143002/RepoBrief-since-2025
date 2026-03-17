'use client';

import { useMemo, useState } from 'react';
import * as XLSX from 'xlsx';
import FilterSection from './FilterSection';
import FilterOverlay from './FilterOverlay';
import Toolbar from './Toolbar';
import RepoGrid from './RepoGrid';
import RepoDrawer from './RepoDrawer';

export default function Showcase({ initialRepos, tagStats, tagGroups }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const filteredRepos = useMemo(() => {
    let result = [...initialRepos];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((repo) =>
        repo.repo_name.toLowerCase().includes(query) ||
        (repo.original_description && repo.original_description.toLowerCase().includes(query))
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      result = result.filter((repo) =>
        selectedTags.every((tag) => repo.tags.includes(tag))
      );
    }

    // Sort by stars
    result.sort((a, b) => {
      const diff = (b.stars || 0) - (a.stars || 0);
      return sortOrder === 'desc' ? diff : -diff;
    });

    return result;
  }, [initialRepos, selectedTags, sortOrder, searchQuery]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  };

  const handleExport = () => {
    const data = filteredRepos.map(repo => ({
      'Repo Name': repo.repo_name,
      'Stars': repo.stars,
      'Language': repo.language,
      'URL': repo.url,
      'Tags': repo.tags.join(', '),
      'Description': repo.original_description
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Repositories");
    
    // Generate buffer
    XLSX.writeFile(workbook, `repobrief_export_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
  };

  const closeDrawer = () => {
    setSelectedRepo(null);
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <FilterSection 
        tagStats={tagStats} 
        selectedTags={selectedTags} 
        onTagToggle={toggleTag} 
        onShowMore={() => setIsFilterModalOpen(true)}
      />
      <Toolbar 
        count={filteredRepos.length} 
        sortOrder={sortOrder} 
        onSortToggle={toggleSort}
        onExport={handleExport}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <RepoGrid 
        repos={filteredRepos} 
        onRepoClick={handleRepoClick} 
      />
      <RepoDrawer 
        repo={selectedRepo} 
        isOpen={!!selectedRepo} 
        onClose={closeDrawer} 
      />
      <FilterOverlay
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        tagGroups={tagGroups}
        selectedTags={selectedTags}
        onTagToggle={toggleTag}
      />
    </div>
  );
}
