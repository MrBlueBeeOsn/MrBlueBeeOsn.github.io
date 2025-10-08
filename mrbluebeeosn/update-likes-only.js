// update-likes-only.js
import fs from 'fs';

console.log('🔄 Đang thêm field likes...');

const db = JSON.parse(fs.readFileSync('./src/data/db.json', 'utf8'));

let updatedCount = 0;
db.posts = db.posts.map(post => {
  if (post.likes === undefined) {
    updatedCount++;
    return { ...post, likes: 0 };
  }
  return post;
});

fs.writeFileSync('./src/data/db.json', JSON.stringify(db, null, 2));
console.log(`✅ Đã thêm likes cho ${updatedCount} bài viết`);
console.log(`📊 Tổng: ${db.posts.length} bài viết`);