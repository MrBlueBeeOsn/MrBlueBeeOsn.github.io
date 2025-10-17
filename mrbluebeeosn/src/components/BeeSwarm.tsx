import { useEffect } from 'react';

interface BeeConfig {
  rangeX: number;
  rangeY: number;
  interval: number;
}

function startBeeFlying(selector: string = '.bee'): void {
  const bees = document.querySelectorAll(selector);
  
  bees.forEach((bee) => {
    const isMobile = window.innerWidth <= 600;
    const config: BeeConfig = isMobile
      ? { rangeX: 10, rangeY: -10, interval: 2000 }
      : { rangeX: 10, rangeY: -10, interval: 1000 };

    const intervalId = setInterval(() => {
      const x = Math.random() * config.rangeX;
      const y = Math.random() * config.rangeY;
      const rotate = Math.random() * 10 - 10;
      
      if (bee instanceof HTMLElement) {
        bee.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
      }
    }, config.interval);

    // Cleanup function (tuỳ chọn)
    return () => clearInterval(intervalId);
  });
}

export default function BeeSwarm(): React.JSX.Element {
  useEffect(() => {
    startBeeFlying();
    
    // Cleanup nếu cần
    return () => {
      // Có thể thêm cleanup logic ở đây nếu cần
    };
  }, []);

  return (
    <div className="swarm">
      <div className="bee" />
      <div className="bee" />
      <div className="bee" />
    </div>
  );
}