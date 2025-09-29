import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Posts from '../Posts';

export default function Blog() {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    // Gọi hàm Posts() để lấy dữ liệu
    setAllPosts(Posts());

  }, []);

  const handleSearchResults = (results) => {
    setDisplayedPosts(results);
    setHasSearched(true);
  };

  return (

    <div className="blog-container">
      <SearchBar 
        posts={allPosts} 
        onSearchResults={handleSearchResults} 
      />
      
      <div className="posts-list">
        {hasSearched ? (<>

            {displayedPosts.length === 1 ? (<>
                <p className="results-count">
                  {displayedPosts.length} result found
                </p>
                {displayedPosts.map(post => (
                  <article key={post.id} className="post-card">

                    <p className="post-category"><Link to={`/${post.category}`}>{post.category}</Link></p>

                    <h2>{post.title}</h2>

                    <p className="post-date">Date: {post.date}</p>

                    <p>{post.content}</p>

                    <Link to={`/${post.slug}`}>Read more</Link>

                  </article>
                ))}

            </>) : (<>

                <p className="results-count">
                  {displayedPosts.length} results found
                </p>
                {displayedPosts.map(post => (
                  <article key={post.id} className="post-card">

                    <p className="post-category"><Link to={`/${post.category}`}>{post.category}</Link></p>

                    <h2>{post.title}</h2>

                    <p className="post-date">Date: {post.date}</p>

                    <p>{post.content}</p>

                    <Link to={`/${post.slug}`}>Read more</Link>

                  </article>
                ))}
              
                </>)}

            </>) : (<>

        </>)}
      </div>
    </div>
    
  );
}