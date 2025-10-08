/*-- ========================================
 
  © 2025 - 🐝 Mr. ßee - 🅾ng siêng năng📘

      https://mrbluebeeosn.github.io

          ☕ Happy reading today!

========================================= --*/

/* =============================
   Scroll Into View · by GRK
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