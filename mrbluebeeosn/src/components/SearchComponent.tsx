import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import dbData from '../data/db.json';

export default function SearchComponent(): React.JSX.Element {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false); // ❌ ĐỔI THÀNH false
  const [error, setError] = useState(null);
  
  // State phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    // ⚡ HIỂN THỊ NGAY với file local (không loading)
    console.log('📁 Hiển thị ngay với file local...');
    setAllPosts(dbData.posts || []);
    
    // 🔄 SYNC với API trong background
    console.log('🔄 Đang sync với API...');
    fetch('http://localhost:3003/posts')
      .then(response => {
        console.log('📡 Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error(`Expected JSON but got: ${contentType}`);
        }
        
        return response.text();
      })
      .then(text => {
        console.log('📄 Raw response:', text.substring(0, 200));
        
        try {
          const apiPosts = JSON.parse(text);
          console.log('✅ Sync API thành công:', apiPosts.length, 'posts');
          
          // Chỉ update nếu data khác (tránh re-render không cần thiết)
          if (JSON.stringify(apiPosts) !== JSON.stringify(dbData.posts)) {
            setAllPosts(apiPosts);
            console.log('🔄 Đã cập nhật data từ API');
          }
        } catch (parseError) {
          console.error('❌ Lỗi parse JSON:', parseError);
        }
      })
      .catch(error => {
        console.log('❌ Sync API thất bại, giữ data local:', error.message);
      });
  }, []);

  const handleSearchResults = (results) => {
    setDisplayedPosts(results);
    setHasSearched(true);
    setCurrentPage(1);
  };

  // Tính toán posts cho trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = displayedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(displayedPosts.length / postsPerPage);

  // Chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // ❌ XOÁ loading check - luôn hiển thị content ngay
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="blog-container">
      <SearchBar posts={allPosts} onSearchResults={handleSearchResults} />
      
      <div className="posts-list">
        {hasSearched ? (
          <>
            <p className="results-count">
              {displayedPosts.length} {displayedPosts.length === 1 ? 'result' : 'results'} found
              {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
            </p>
            
            {/* Hiển thị posts của trang hiện tại */}
            {currentPosts.map(post => (
              <article key={post.id} className="post-card">
                <p className="post-category">
                  <Link to={`/${post.categorySlug}`}>{post.categoryDisplay}</Link>
                </p>
                <h2>{post.title}</h2>
                <p className="post-date">Date: {post.date}</p>
                <p>{post.content}</p>
                <Link to={`/${post.slug}`}>Read more</Link>
              </article>
            ))}

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="pagination">
                <button 
                  onClick={() => paginate(currentPage - 1)} 
                  disabled={currentPage === 1}
                  className="pagination-btn"
                >
                  Previous
                </button>
                
                {/* Hiển thị số trang */}
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button 
                  onClick={() => paginate(currentPage + 1)} 
                  disabled={currentPage === totalPages}
                  className="pagination-btn"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="default-message">
            <p>Nhập từ khoá để tìm kiếm bài viết...</p>
            {/* <p><small>Đang hiển thị {allPosts.length} bài viết từ {dbData.posts === allPosts ? 'file local' : 'API'}</small></p> */}
          </div>
        )}
      </div>
    </div>
  );
}