// ViewCounter.jsx - Dùng API
import { useState, useEffect } from 'react';

export default function ViewCounter({ postId }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Lấy views từ API
    fetch(`/posts/${postId}`)
      .then(res => res.json())
      .then(post => setViews(post.views || 0));

    // Tăng views
    const viewKey = `viewed_${postId}`;
    const lastView = localStorage.getItem(viewKey);
    const now = Date.now();
    const thirtyMinutes = 30 * 60 * 1000;

    if (!lastView || (now - parseInt(lastView)) > thirtyMinutes) {
      fetch(`/posts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ views: (views || 0) + 1 })
      })
      .then(res => res.json())
      .then(updatedPost => {
        setViews(updatedPost.views);
        localStorage.setItem(viewKey, now.toString());
      });
    }
  }, [postId]);

  return <div>{views} views</div>;
}