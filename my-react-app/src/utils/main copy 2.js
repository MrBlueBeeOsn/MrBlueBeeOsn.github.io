/*-- ========================================
 
  © 2025 - 🐝 Mr. ßee - 🅾ng siêng năng📘

      https://mrbluebeeosn.github.io

          ☕ Happy reading today!

========================================= --*/

/* =============================
   My Blog Journey - by DPSK
============================= */

        // Chờ cho trang web tải xong
        document.addEventListener('DOMContentLoaded', function() {

            // Lấy tất cả các phần tử có class "year"
            const yearHeaders = document.querySelectorAll('.year');

            // Gán sự kiện click cho mỗi tiêu đề năm
            yearHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    // Toggle class 'collapsed' trên tiêu đề năm
                    // (Nếu nó đang có class collapsed thì bỏ đi, và ngược lại)
                    header.classList.toggle('collapsed');
                });
            });

            // (Tùy chọn) Nếu bạn muốn mặc định thu gọn các năm cũ,
            // hãy bỏ comment dòng dưới đây và thêm class "collapsed" vào thẻ <h2> của năm đó.
            // document.getElementById('2025').classList.add('collapsed');
        });