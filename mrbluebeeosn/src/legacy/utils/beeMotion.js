/*-- ========================================
 
  © 2025 - 🐝 Mr. ßee - 🅾ng siêng năng📘

      https://mrbluebeeosn.github.io

          ☕ Happy reading today!

========================================= --*/

/* =============================
   Bee · by GPT
============================= */     

export function startBeeFlying(selector = '.bee') {
  const bees = document.querySelectorAll(selector);
  bees.forEach((bee) => {
    const isMobile = window.innerWidth <= 600;
    const config = isMobile
      ? { rangeX: 10, rangeY: -10, interval: 2000 }
      : { rangeX: 10, rangeY: -10, interval: 1000 };

    setInterval(() => {
      const x = Math.random() * config.rangeX;
      const y = Math.random() * config.rangeY;
      const rotate = Math.random() * 10 - 10;
      bee.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
    }, config.interval);
  });
}