/* =============================
   Back to Top Button
============================= */

const backToTopButton = document.querySelector('.back-to-top');

        // Hiển thị/ẩn nút khi cuộn
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Hiển thị nút khi cuộn xuống 300px
                // Thêm class "show" khi cuộn xuống 300px
                backToTopButton.classList.add('show');
            } else {
                // Xóa class "show" khi cuộn lên trên
                backToTopButton.classList.remove('show'); 
            }
        });

        // Cuộn mượt về đầu trang
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        backToTopButton.addEventListener('touchstart', () => {
            backToTopButton.style.opacity = '1'; // sáng khi chạm
        });

        backToTopButton.addEventListener('touchend', () => {
            setTimeout(() => {
                backToTopButton.style.opacity = '0.3'; // mờ lại sau khi thả
            }, 300); // có thể chỉnh delay theo ý bạn
        });

/* =============================
   My Blog Journey
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