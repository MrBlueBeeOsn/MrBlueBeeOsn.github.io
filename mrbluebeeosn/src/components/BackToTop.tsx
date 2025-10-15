import { useEffect, useRef } from 'react';

export default function BackToTop(): React.JSX.Element {
  const backToTopRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const backToTopButton = backToTopRef.current;
    
    if (!backToTopButton) return;

    const handleScroll = (): void => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    };

    const handleClick = (): void => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleTouchStart = (): void => {
      backToTopButton.style.opacity = '1';
    };

    const handleTouchEnd = (): void => {
      setTimeout(() => {
        backToTopButton.style.opacity = '0.3';
      }, 300);
    };

    window.addEventListener('scroll', handleScroll);
    backToTopButton.addEventListener('click', handleClick);
    backToTopButton.addEventListener('touchstart', handleTouchStart);
    backToTopButton.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      backToTopButton.removeEventListener('click', handleClick);
      backToTopButton.removeEventListener('touchstart', handleTouchStart);
      backToTopButton.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <button 
      ref={backToTopRef} 
      className="back-to-top" 
      title="Back to top"
    ></button>
  );
}