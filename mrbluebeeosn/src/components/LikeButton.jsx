import React, { useState, useEffect } from 'react';
import HeartIconColor from './HeartIconColor';
import HeartIcon from './HeartIcon';

const LikeButton = ({ postId }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`post-${postId}-likes`);
    const savedIsLiked = localStorage.getItem(`post-${postId}-isLiked`);
    
    if (savedLikes) setLikes(parseInt(savedLikes));
    if (savedIsLiked) setIsLiked(JSON.parse(savedIsLiked));
  }, [postId]);

  const handleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    const newIsLiked = !isLiked;
    
    setLikes(newLikes);
    setIsLiked(newIsLiked);
    setIsAnimating(true);
    
    localStorage.setItem(`post-${postId}-likes`, newLikes.toString());
    localStorage.setItem(`post-${postId}-isLiked`, JSON.stringify(newIsLiked));
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="like-container">
      <button 
        className={`like-button ${isLiked ? 'liked' : ''} ${isAnimating ? 'animating' : ''}`}
        onClick={handleLike}
        aria-label={isLiked ? 'Bỏ thích' : 'Thích'}
      >
        <span className="heart">{isLiked ? <HeartIconColor /> : <HeartIcon />}</span>
        <span className="likes-count">{likes} hearts</span>
      </button>
      
      {/* Hiệu ứng particles */}
      {isAnimating && (
        <div className="particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="particle"><HeartIcon /></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikeButton;