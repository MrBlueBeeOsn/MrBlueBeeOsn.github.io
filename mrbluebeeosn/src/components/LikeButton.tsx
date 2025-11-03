// =============================
//    LikeButton · by DPSK
// =============================

import React, { useState, useEffect } from 'react';
import HeartIconColor from '@/components/HeartIconColor';
import HeartIcon from '@/components/HeartIcon';

interface Post {
  likes?: number;
}

interface LikeButtonProps {
  postId: string | number;
}

export default function LikeButton({ postId }: LikeButtonProps): React.JSX.Element {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const formatLikesText = (count: number): string => {
    return count === 1 ? `${count} heart` : `${count} hearts`;
  };

  useEffect(() => {
    // Lấy likes từ server
    fetch(`http://localhost:3003/posts/${postId}`)
      .then(response => response.json())
      .then((post: Post) => {
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

  const handleLike = (): void => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    const newIsLiked = !isLiked;
    
    // ⚡ UPDATE UI NGAY LẬP TỨC (không chờ server)
    setLikes(newLikes);
    setIsLiked(newIsLiked);
    setIsAnimating(true);
    
    // ✅ LUÔN lưu localStorage ngay
    localStorage.setItem(`post-${postId}-likes`, newLikes.toString());
    localStorage.setItem(`post-${postId}-isLiked`, JSON.stringify(newIsLiked));
    
    // 🔄 SYNC với server trong background (không block UI)
    fetch(`http://localhost:3003/posts/${postId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        likes: newLikes 
      })
    })
    .then(response => response.json())
    .then((updatedPost: Post) => {
      console.log('✅ Đã sync likes với server:', updatedPost.likes);
      // Có thể sync lại nếu cần: setLikes(updatedPost.likes);
    })
    .catch(error => {
      console.error('❌ Lỗi sync với server:', error);
      // Không cần làm gì - UI đã update rồi
    });
    
    setTimeout(() => setIsAnimating(false), 300);
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