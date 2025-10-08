import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function SearchComponent() {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // 5 bài mỗi trang

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(posts => {
        setAllPosts(posts);
        setLoading(false);
      })
      .catch(error => {
        console.error('Lỗi:', error);
        setError('Không thể tải dữ liệu.');
        setLoading(false);
      });
  }, []);

  const handleSearchResults = (results) => {
    setDisplayedPosts(results);
    setHasSearched(true);
    setCurrentPage(1); // Reset về trang 1 khi search mới
  };

  // Tính toán posts cho trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = displayedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(displayedPosts.length / postsPerPage);

  // Chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div className="loading">Đang tải dữ liệu...</div>;
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
          </div>
        )}
      </div>
    </div>
  );
}