import React, { useState } from 'react';


export default function SearchBar({ posts, onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    // Nếu search trống, không làm gì cả (giữ trạng thái ban đầu)
    if (searchTerm.trim() === '') {
      setHasSearched(false);
      onSearchResults([]); // Truyền mảng rỗng để ẩn kết quả
      return;
    }
    
    setHasSearched(true);
    
    // Chỉ tìm kiếm khi có từ khóa
    const filteredPosts = (posts || []).filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.content && post.content.toLowerCase().includes(searchTerm.toLowerCase()))
    );
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

        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" fill="currentColor" stroke="var(--secondary-color)" strokeWidth="2" viewBox="0 0 24 24">

            <circle cx="11" cy="11" r="8" />
            
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            
        </svg>

      </button>

      <input
        type="text"
        placeholder="Search..."
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