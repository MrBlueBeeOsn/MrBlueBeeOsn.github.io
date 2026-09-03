✅ Tạo thư mục .ssh
mkdir -p ~/.ssh


✅ Tạo keys
cd ~/.ssh
ssh-keygen -t ed25519 -C "personal@gmail.com" -f id_github_personal
ssh-keygen -t ed25519 -C "work@gmail.com " -f id_github_work
ssh-keygen -t ed25519 -C "company@gmail.com" -f id_github_company
Enter
Enter


✅ Thêm keys GitHub
cat ~/.ssh/id_github_personal.pub
cat ~/.ssh/id_github_work.pub
cat ~/.ssh/id_github_company.pub
✅ Thêm keys bash
eval $(ssh-agent)
ssh-add ~/.ssh/id_github_personal
ssh-add ~/.ssh/id_github_work
ssh-add ~/.ssh/id_github_company


✅ Kiểm tra file ~/.ssh/config
ls ~/.ssh
ls -la ~/.ssh/
✅ Kiểm tra file ~/.ssh/config
cat ~/.ssh/config
✅  Test kết nối:
ssh -T personal
ssh -T work
ssh -T company
✅  Kiểm tra id
ssh -T -i ~/.ssh/id_github_personal git@github.com
ssh -T -i ~/.ssh/id_github_work git@github.com
ssh -T -i ~/.ssh/id_github_company git@github.com


✅ config
Host personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_github_personal
  IdentitiesOnly yes

Host work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_github_work
  IdentitiesOnly yes

Host company
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_github_company
  IdentitiesOnly yes

Đảm bảo file được lưu với tên chính xác là config (không phải config.txt)
Nếu Notepad hỏi “Save as”, chọn Save as type: All Files và đặt tên là config (không thêm .txt)


✅  /* Xóa remove keys*/
cd ~/.ssh
rm id_github_personal
rm id_github_personal.pub

rm id_github_work
rm id_github_work.pub

rm id_github_company
rm id_github_company.pub


✅  /* Private keys*/
cd ~/.ssh
ssh -i id_github_personal -T git@github.com
ssh -i id_github_work -T git@github.com
ssh -i id_github_company -T git@github.com


✅  # Clone repo từ GitHub
cd /d/GitHub/personal
git clone personal:personal/personal.github.io.git
cd /d/GitHub/work
git clone work:work/work.github.io.git
cd /d/GitHub/company
git clone company:company/company.github.io.git


✅  # Đẩy code từ Desktop lên GitHub
Command Line:
git add .
git commit -m "Add new feature"
git push origin main

ReactJS:
cd /d/GitHub/personal/personal.github.io/personal
cd /d/GitHub/work/work.github.io/work
cd /d/GitHub/company/company.github.io/company
npm install
npm run dev
npm run build
npm run deploy

Đảm bảo push/pull đến đúng repository
git remote -v
