import { useEffect, useRef } from 'react';

const YouGlishWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://youglish.com/public/emb/widget.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={widgetRef} style={{ 
      width: '100%', 
      maxWidth: '800px', 
      margin: '0 auto',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <a
        id="yg-widget-0"
        className="youglish-widget"
        // data-query="bookkeeping"
        data-lang="english"
        data-accent="aus"
        data-zones="aus"
        // data-accent="us"
        // data-zones="us"
        // data-components="33113"
        // data-components="33115"
        // data-components="33117"
        data-components="41435"
        // data-title="%25i%25%2F%25total%25"
        // data-components="8415"
        data-video-quality="highres"
        
        // Sử dụng format màu đúng cho YouGlish
        data-bkg-color="theme_light"  // hoặc "theme_dark"
        data-link-color="rgba(32, 178, 170, 1)"    // Màu dạng decimal (#FF5732 = 16744782)
        data-ttl-color="rgba(1, 172, 193, 1)"       // Hex không có #
        data-cap-color="rgba(1, 172, 193, 1)"       // Hex không có #
        data-marker-color="rgba(102, 226, 230, 0.5)"    // Hex không có #
        data-panels-bkg-color="rgba(248, 249, 250, 0.5)" // Màu nền panel
        data-text-color="rgba(42, 21, 48, 1)"      // Màu chữ
        data-keyword-color="rgba(1, 172, 193, 1)"   // Màu keyword
        data-search-bkg-color="rgba(255, 255, 255, 0.5)" // Màu nền search
        data-search-text-color="rgba(32, 178, 170, 1)" // Màu chữ search
        
        rel="nofollow"
        href="https://youglish.com"
        style={{ display: 'block', width: '100%', height: '400px' }}
      >
        Visit YouGlish.com
      </a>
    </div>
  );
};

export default YouGlishWidget;