import React, { useState, useEffect } from 'react';
import HeartIconColor from './HeartIconColor';
import HeartIcon from './HeartIcon';

export default function LikeButton({ postId }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);

  // Format số lượng hearts
  const formatLikesText = (count) => {
    return count === 1 ? `${count} heart` : `${count} hearts`;
  };

  useEffect(() => {
    // Lấy likes từ server
    fetch(`http://localhost:3001/posts/${postId}`)
      .then(response => response.json())
      .then(post => {
        setLikes(post.likes || 0);
        setLoading(false);
      })
      .catch(error => {
        console.error('Lỗi khi lấy likes:', error);
        // Fallback: dùng localStorage
        const savedLikes = localStorage.getItem(`post-${postId}-likes`);
        const savedIsLiked = localStorage.getItem(`post-${postId}-isLiked`);
        if (savedLikes) setLikes(parseInt(savedLikes));
        if (savedIsLiked) setIsLiked(JSON.parse(savedIsLiked));
        setLoading(false);
      });
  }, [postId]);

  const handleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    const newIsLiked = !isLiked;
    
    // Update server
    fetch(`http://localhost:3001/posts/${postId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        likes: newLikes 
      })
    })
    .then(response => response.json())
    .then(updatedPost => {
      setLikes(updatedPost.likes);
      setIsLiked(newIsLiked);
      setIsAnimating(true);
      
      // Vẫn lưu localStorage để chống spam
      localStorage.setItem(`post-${postId}-isLiked`, JSON.stringify(newIsLiked));
      
      setTimeout(() => setIsAnimating(false), 300);
    })
    .catch(error => {
      console.error('Lỗi khi update likes:', error);
      // Fallback: dùng localStorage
      setLikes(newLikes);
      setIsLiked(newIsLiked);
      setIsAnimating(true);
      localStorage.setItem(`post-${postId}-likes`, newLikes.toString());
      localStorage.setItem(`post-${postId}-isLiked`, JSON.stringify(newIsLiked));
      setTimeout(() => setIsAnimating(false), 300);
    });
  };

  if (loading) {
    return <div className="like-loading">...</div>;
  }

  return (
    <div className="like-container">
      <button 
        className={`like-button ${isLiked ? 'liked' : ''} ${isAnimating ? 'animating' : ''}`}
        onClick={handleLike}
        aria-label={isLiked ? 'Bỏ thích' : 'Thích'}
      >
        <span className="heart">
          {isLiked ? <HeartIconColor /> : <HeartIcon />}
        </span>
        <span className="likes-count">{formatLikesText(likes)}</span>
      </button>
      
      {/* Hiệu ứng particles */}
      {isAnimating && (
        <div className="particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="particle">
              {isLiked ? <HeartIconColor /> : <HeartIcon />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}