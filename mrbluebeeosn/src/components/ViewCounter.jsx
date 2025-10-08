import { useState, useEffect } from 'react';

export default function ViewCounter({ postId }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Lấy lượt xem hiện tại
    const storedViews = localStorage.getItem(`post_${postId}_views`);
    if (storedViews) {
      setViews(parseInt(storedViews));
    }

    // Kiểm tra chống spam
    const viewKey = `viewed_${postId}`;
    const lastView = localStorage.getItem(viewKey);
    const now = Date.now();
    const thirtyMinutes = 30 * 60 * 1000; // 30 phút

    if (!lastView || (now - parseInt(lastView)) > thirtyMinutes) {
      // Tăng lượt xem
      const newViews = (parseInt(storedViews) || 0) + 1;
      setViews(newViews);
      
      // Lưu dữ liệu
      localStorage.setItem(`post_${postId}_views`, newViews.toString());
      localStorage.setItem(viewKey, now.toString());
    }
  }, [postId]);

  // Thêm logic để hiển thị đúng số nhiều/số ít
  const displayText = views === 1 ? "view" : "views";

  return (
    <div className="view-counter">
      {views.toLocaleString()} {displayText} ·
    </div>
  );
}