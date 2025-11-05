// components/Pattern.tsx
import React, { useMemo } from 'react';
import { useTheme } from '@/components/ThemeContext';

const Pattern: React.FC = () => {
  const { patternColor } = useTheme();

  console.log('Pattern - Current pattern color:', patternColor);

  const patternStyle = useMemo(() => {
    const generateSVGPattern = (color: string): string => {
      const svgContent = `
        <svg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <g fill="${color}">
            <!-- Hoa lớn 1 -->
            <g transform='translate(120, 45)' opacity='0.25'>
              <circle cx='0' cy='0' r='4'/>
              <circle cx='0' cy='-10' r='5'/>
              <circle cx='8.7' cy='-5' r='5'/>
              <circle cx='8.7' cy='5' r='5'/>
              <circle cx='0' cy='10' r='5'/>
              <circle cx='-8.7' cy='5' r='5'/>
              <circle cx='-8.7' cy='-5' r='5'/>
            </g>

            <!-- Hoa vừa 1 -->
            <g transform='translate(30, 110)' opacity='0.25'>
              <circle cx='0' cy='0' r='3' />
              <circle cx='0' cy='-7' r='4' />
              <circle cx='6' cy='-3.5' r='4' />
              <circle cx='6' cy='3.5' r='4' />
              <circle cx='0' cy='7' r='4' />
              <circle cx='-6' cy='3.5' r='4' />
              <circle cx='-6' cy='-3.5' r='4' />
            </g>

            <!-- Hoa nhỏ 1 -->
            <g transform='translate(180, 25)' opacity='0.25'>
              <circle cx='0' cy='0' r='2' />
              <circle cx='0' cy='-5' r='2.5' />
              <circle cx='4.3' cy='-2.5' r='2.5' />
              <circle cx='4.3' cy='2.5' r='2.5' />
              <circle cx='0' cy='5' r='2.5' />
              <circle cx='-4.3' cy='2.5' r='2.5' />
              <circle cx='-4.3' cy='-2.5' r='2.5' />
            </g>

          </g>
        </svg>
      `.trim();

          // <circle cx='50' cy='150' r='8' opacity='0.4'/>
          //  <circle cx='150' cy='80' r='6' opacity='0.5'/>
          //  <circle cx='180' cy='160' r='4' opacity='0.25'/>

      const encoded = encodeURIComponent(svgContent).replace(/#/g, '%23');
      return `url("data:image/svg+xml,${encoded}")`;
    };

    return {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundImage: generateSVGPattern(patternColor),
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: '200px 200px',
      opacity: 0.3,
      zIndex: 1,
      pointerEvents: 'none' as const,
      // Thêm key để ép re-render background
      backgroundColor: 'transparent',
    };
  }, [patternColor]); // <-- Chỉ tái tạo khi patternColor thay đổi

  return <div style={patternStyle} />;
};

export default Pattern;