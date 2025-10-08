// generate-db.js
import fs from 'fs';
import path from 'path';

function readJSONFile(filePath) {
  const absolutePath = path.join(process.cwd(), filePath);
  const data = fs.readFileSync(absolutePath, 'utf8');
  const parsed = JSON.parse(data);
  
  if (parsed.posts && Array.isArray(parsed.posts)) {
    return parsed.posts;
  }
  else if (Array.isArray(parsed)) {
    return parsed;
  }
  else {
    console.log('⚠️  Cấu trúc không xác định trong:', filePath);
    return [];
  }
}

function generateDB() {
  // Đọc db.json hiện tại để giữ views/likes
  let existingDB = { posts: [] };
  try {
    existingDB = JSON.parse(fs.readFileSync('./src/data/db.json', 'utf8'));
    console.log('📊 Đã tìm thấy db.json cũ với', existingDB.posts.length, 'bài viết');
  } catch (error) {
    console.log('🆕 Tạo db.json mới');
  }

  // Đọc files mới
  const MrBeeOsn = readJSONFile('./src/data/mrbeeosn/MrBeeOsn.json');
  const BookkeepingPosts = readJSONFile('./src/data/bookkeeping/BookkeepingPosts.json');
  const EnglishPosts = readJSONFile('./src/data/english/EnglishPosts.json');
  const GrammarPosts = readJSONFile('./src/data/english/GrammarPosts.json');
  const PronunciationPosts = readJSONFile('./src/data/english/PronunciationPosts.json');
  const TiengAnhPosts = readJSONFile('./src/data/tienganh/TiengAnhPosts.json');
  const VocabularyPosts = readJSONFile('./src/data/tienganh/VocabularyPosts.json');

  // Combine posts mới
  const newPosts = [
    ...MrBeeOsn,
    ...BookkeepingPosts,
    ...EnglishPosts,
    ...GrammarPosts,
    ...PronunciationPosts,
    ...TiengAnhPosts,
    ...VocabularyPosts
  ];

  // Merge: giữ views/likes cũ, thêm posts mới
  const mergedPosts = newPosts.map(newPost => {
    const existingPost = existingDB.posts.find(p => p.id === newPost.id);
    
    if (existingPost) {
      // Giữ nguyên views/likes từ post cũ
      return {
        ...newPost,           // Cập nhật content mới
        views: existingPost.views || 0,
        likes: existingPost.likes || 0
      };
    } else {
      // Post mới - thêm views/likes mặc định
      return {
        ...newPost,
        views: 0,
        likes: 0
      };
    }
  });

  // Create db.json
  const dbJson = { posts: mergedPosts };
  const outputPath = path.join(process.cwd(), 'src/data/db.json');
  
  fs.writeFileSync(outputPath, JSON.stringify(dbJson, null, 2));
  console.log('✅ Đã merge db.json với', mergedPosts.length, 'bài viết');
  console.log('💾 Giữ nguyên views/likes từ data cũ');
}

generateDB();