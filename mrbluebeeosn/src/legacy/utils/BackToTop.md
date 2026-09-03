/*-- ========================================
 
  © 2025 - 🐝 Mr. ßee - 🅾ng siêng năng📘

      https://mrbluebeeosn.github.io

          ☕ Happy reading today!

========================================= --*/

/* =============================
   Back to Top Button · by GRK
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