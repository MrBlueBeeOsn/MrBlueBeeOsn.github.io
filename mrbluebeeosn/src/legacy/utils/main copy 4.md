/*-- ========================================
 
  © 2025 - 🐝 Mr. ßee - 🅾ng siêng năng📘

      https://mrbluebeeosn.github.io

          ☕ Happy reading today!

========================================= --*/

/* =============================
   Scroll Into View (hash trong liên kết) · by GRK
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