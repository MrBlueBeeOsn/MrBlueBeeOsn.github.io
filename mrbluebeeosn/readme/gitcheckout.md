Nếu bạn sửa code ở nhánh master rồi muốn gộp (merge) phần code đó sang nhánh chính main, bạn chỉ cần quay về main và chạy lệnh git merge master.
Cách làm này giống hệt quy trình gộp một nhánh thử nghiệm vào main, giúp giữ nguyên lịch sử của cả hai nhánh mà không cần dùng lệnh ép ghi đè (-f).

Quy trình 4 bước gộp code từ master vào main

• Bước 1: Chuyển sang master và làm việc. Đứng ở nhánh master (git checkout master), bạn thoải mái chỉnh sửa code trên VS Code.
• Bước 2: Lưu lại thay đổi trên master. Sau khi sửa xong, bạn lưu bản cập nhật vào nhánh master bằng lệnh:bash
git add . && git commit -m "sua code o master"
Use code with caution.
• Bước 3: Quay trở về nhánh chính main. Chuyển Terminal sang nhà chính main:bash
git checkout main
Use code with caution.
• Bước 4: Hút code từ master sang main và đẩy lên web. Đứng ở nhánh (main), bạn gõ lệnh sau để gộp toàn bộ thay đổi mới từ master sang, đồng thời chạy npm run up để cập nhật lên GitHub và trang web:bash
git merge master && npm run up
Use code with caution.

Lưu ý nhỏ để hai nhánh luôn khớp nhau

• Cập nhật ngược lại cho master (nếu cần). Sau khi gộp xong ở Bước 4, nhánh main sẽ đi trước master một bước. Nếu lần sau bạn muốn làm tiếp trên master từ điểm mới nhất này, bạn chỉ cần đứng ở master và gõ git merge main để hai nhánh bằng nhau trở lại.
Bạn có muốn thử thực hành gộp thử một thay đổi nhỏ từ master sang main bằng lệnh git merge master ngay bây giờ để xem cách nó hoạt động không?
