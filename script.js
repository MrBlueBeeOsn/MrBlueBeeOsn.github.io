const backToTopButton = document.querySelector('.back-to-top');

        // Hiển thị/ẩn nút khi cuộn
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Hiển thị nút khi cuộn xuống 300px
                backToTopButton.classList.add('show');
            } else {
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