import { useEffect } from 'react';

export default function BackToTop() {
  useEffect(() => {
    const backToTopButton = document.querySelector('.back-to-top');

    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleTouchStart = () => {
      backToTopButton.style.opacity = '1';
    };

    const handleTouchEnd = () => {
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

    <button className="back-to-top" title="Back to top"></button>
    
  );
}
