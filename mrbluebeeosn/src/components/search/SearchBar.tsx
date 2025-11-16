// =============================
//    SearchBar · by DPSK
// =============================

import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import SearchIcon from '@/components/icon/SearchIcon';

interface Post {
  title?: string;
  content?: string;
  categoryDisplay?: string;
}

interface SearchBarProps {
  posts: Post[];
  onSearchResults: (results: Post[]) => void;
}

export default function SearchBar({ posts, onSearchResults }: SearchBarProps): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  // Hàm chuẩn hóa chuỗi tiếng Việt (bỏ dấu)
  const normalizeString = (str: string): string => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLowerCase();
  };

  const handleSearch = (): void => {
    // Nếu search trống, không làm gì cả (giữ trạng thái ban đầu)
    if (searchTerm.trim() === '') {
      setHasSearched(false);
      onSearchResults([]); // Truyền mảng rỗng để ẩn kết quả
      return;
    }
    
    setHasSearched(true);
    
    // Chuẩn hóa search term (bỏ dấu)
    const normalizedSearchTerm = normalizeString(searchTerm);
    
    // Chỉ tìm kiếm khi có từ khóa
    const filteredPosts = (posts || []).filter(post => {
      // Chuẩn hóa tất cả các trường cần tìm kiếm
      const normalizedTitle = normalizeString(post.title || '');
      const normalizedContent = normalizeString(post.content || '');
      const normalizedCategory = normalizeString(post.categoryDisplay || '');

      return (
        normalizedTitle.includes(normalizedSearchTerm) ||
        normalizedContent.includes(normalizedSearchTerm) ||
        normalizedCategory.includes(normalizedSearchTerm)
      );
    });
    onSearchResults(filteredPosts);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = (): void => {
    setSearchTerm('');
    setHasSearched(false);
    onSearchResults([]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <button onClick={handleSearch} className="search-btn">
        <SearchIcon 
          size={24} 
          fill="var(--tertiary-color)" 
          stroke="var(--secondary-color)"
        />
      </button>

      <input
        type="text"
        placeholder="Bee Search"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="search-input"
      />

      {hasSearched && ( 
        <button onClick={handleClear} className="clear-btn">
          ✕
        </button>
      )}
    </div>
  );
}