npm install -g npm@11.6.2

cd D:\GitHub\Black\MrBlackBeeOsn.github.io\mrblackbeeosn
cd D:\GitHub\Blue\MrBlueBeeOsn.github.io\mrbluebeeosn
cd D:\GitHub\Black\MrBlackBeeOsn.github.io\mrblackbeeosn


Mở Command Palette:
Ctrl + Shift + P (Windows/Linux)
Cmd + Shift + P (macOS)
Gõ >Terminal: Select Default Profile

git add .
git commit -m "Nội dung commit"
git push origin main

🏆 Workflow hoàn chỉnh:

Lần đầu: npm run db:generate (tạo db.json)

Khi có bài mới: npm run db:generate (merge, giữ stats cũ)

Khi cần thêm field: npm run db:update-views hoặc npm run db:update-likes

node generate-db.js
node update-likes.js

npm install -g json-server
npm run db:server
json-server --watch src/data/db.json --port 3001
npx json-server src/data/db.json --port 3001

npm run install

Bash
cd /D/Github/Black/MrBlackBeeOsn.github.io/mrblackbeeosn
cd /D/Github/Blue/MrBlueBeeOsn.github.io/mrbluebeeosn
cd /D/Github/Green/MrGreenBeeOsn.github.io/mrgreenbeeosn

git add . → git commit -m "bee" → git push → npm run deploy.

npm run dev

npm run db:generate
npm run db:update-views
npm run db:update-likes

npm run build
npm run deploy
