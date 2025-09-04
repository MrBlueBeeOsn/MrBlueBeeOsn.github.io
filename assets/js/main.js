/* =============================
   Back to Top Button - by GRK
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

/* =============================
   Scroll Into View - by GRK
============================= */

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

/* =============================
   Scroll Into View (hash trong liên kết) - by GRK
============================= */

        window.addEventListener('load', () => {
            const hash = window.location.hash;
            if (hash) {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });

/* =============================
   Bee - by GPT
============================= */     

    const bees = document.querySelectorAll('.bee');

    function randomFly(bee, config) {
      const x = Math.random() * config.rangeX;
      const y = Math.random() * config.rangeY;
      const rotate = Math.random() * 10 - 10;
      bee.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
    }

    function startFlying(bee) {
      const isMobile = window.innerWidth <= 600;
      const config = isMobile
        ? { rangeX: 10, rangeY: 0, interval: 2000 }
        : { rangeX: 10, rangeY: -5, interval: 1000 };

      setInterval(() => randomFly(bee, config), config.interval);
    }

    bees.forEach(startFlying);