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

---------

Merge nhánh master vào main:
• Bước 1: git checkout master
• Bước 2: git add . && git commit -m "sua code o master"
• Bước 3: git checkout main
• Bước 4: git merge master && npm run up

---------

Xem trước: npm run dev

npm run db:generate
npm run db:update-views
npm run db:update-likes

---------

Tạo nhánh:
Creat new branch: master → git push -u origin master

---------

Cách 1: git add . → git commit -m "bee" → git push → npm run deploy.

---------

Cách 2:
npm run build
npm run deploy
Ctr shift G: commit và đồng bộ

---------

Cách 3: npm run up
