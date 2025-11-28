import React, { useState } from 'react';
import SearchIcon from './SearchIcon';

export default function SearchBar({ posts, onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  // Hàm chuẩn hóa chuỗi tiếng Việt (bỏ dấu)
  const normalizeString = (str) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLowerCase();
  };

  const handleSearch = () => {
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setHasSearched(false);
    onSearchResults([]);
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
        placeholder="Bee Article"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      {hasSearched && ( 
        <button onClick={handleClear} className="clear-btn">
          ✕
        </button>
      )}
      
    </div>
  );
}