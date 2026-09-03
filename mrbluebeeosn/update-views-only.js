// update-views-only.js
import fs from 'fs';

console.log('🔄 Đang thêm field views...');

const db = JSON.parse(fs.readFileSync('./src/data/db.json', 'utf8'));

let updatedCount = 0;
db.posts = db.posts.map(post => {
  if (post.views === undefined) {
    updatedCount++;
    return { ...post, views: 0 };
  }
  return post;
});

fs.writeFileSync('./src/data/db.json', JSON.stringify(db, null, 2));
console.log(`✅ Đã thêm views cho ${updatedCount} bài viết`);
console.log(`📊 Tổng: ${db.posts.length} bài viết`);