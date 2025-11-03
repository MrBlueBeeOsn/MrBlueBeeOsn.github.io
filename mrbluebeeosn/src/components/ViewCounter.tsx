// =============================
//    ViewCounter · by DPSK
// =============================

import React from 'react';
import { useState, useEffect } from 'react';

interface ViewCounterProps {
  postId: string | number;
}

export default function ViewCounter({ postId }: ViewCounterProps): React.JSX.Element {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    console.log('🎯 ViewCounter mounted for post:', postId);
    
    // Lấy views từ API
    fetch(`http://localhost:3003/posts/${postId}`)
      .then(response => {
        console.log('📡 GET Response status:', response.status);
        if (!response.ok) throw new Error('GET failed');
        return response.json();
      })
      .then((post: { views?: number }) => {
        console.log('✅ Nhận được views:', post.views);
        setViews(post.views || 0);
      })
      .catch(error => {
        console.error('❌ Lỗi khi lấy views:', error);
      });

    // Tăng views
    const viewKey = `viewed_${postId}`;
    const lastView = localStorage.getItem(viewKey);
    const now = Date.now();
    const thirtyMinutes = 30 * 60 * 1000;

    if (!lastView || (now - parseInt(lastView)) > thirtyMinutes) {
      console.log('🔄 Đang tăng views...');
      
      fetch(`http://localhost:3003/posts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ views: (views + 1) })
      })
      .then(response => {
        console.log('📡 PATCH Response status:', response.status);
        if (!response.ok) throw new Error('PATCH failed');
        return response.json();
      })
      .then((updatedPost: { views: number }) => {
        console.log('✅ Đã tăng views lên:', updatedPost.views);
        setViews(updatedPost.views);
        localStorage.setItem(viewKey, now.toString());
      })
      .catch(error => {
        console.error('❌ Lỗi khi tăng views:', error);
        // Fallback: dùng localStorage
        const storedViews = localStorage.getItem(`post_${postId}_views`) || '0';
        const newViews = parseInt(storedViews) + 1;
        setViews(newViews);
        localStorage.setItem(`post_${postId}_views`, newViews.toString());
        localStorage.setItem(viewKey, now.toString());
      });
    } else {
      console.log('⏰ Chưa đủ 30 phút để tăng view');
    }
  }, [postId, views]); // Thêm views vào dependencies

  return <div className="view-counter">{views} views</div>;
}