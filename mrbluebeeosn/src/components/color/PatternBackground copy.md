import React from 'react';
import { useTheme } from '@/components/ThemeContext';

const PatternBackground: React.FC = () => {
  const { themeConfig } = useTheme();

  const generateSVGPattern = (color: string): string => {
    const svgContent = `
      <svg width='200' height='200' xmlns='http://www.w3.org/2000/svg'>
        <g style='color: ${color};'>
          <!-- Ong lớn 1 -->
          <g transform='translate(35, 35)' opacity='0.15'>
            <ellipse cx='0' cy='0' rx='14' ry='8' fill='currentColor'/>
            <ellipse cx='-6' cy='-5' rx='10' ry='6' fill='currentColor' opacity='0.3'/>
            <ellipse cx='-6' cy='5' rx='10' ry='6' fill='currentColor' opacity='0.3'/>
            <circle cx='-13' cy='0' r='6' fill='currentColor'/>
            <line x1='-18' y1='-4' x2='-22' y2='-6' stroke='currentColor' stroke-width='1.2'/>
            <line x1='-18' y1='4' x2='-22' y2='6' stroke='currentColor' stroke-width='1.2'/>
          </g>

          <!-- Ong vừa 1 -->
          <g transform='translate(150, 60)' opacity='0.14'>
            <ellipse cx='0' cy='0' rx='10' ry='6' fill='currentColor'/>
            <ellipse cx='-4' cy='-3' rx='7' ry='4' fill='currentColor' opacity='0.3'/>
            <ellipse cx='-4' cy='3' rx='7' ry='4' fill='currentColor' opacity='0.3'/>
            <circle cx='-9' cy='0' r='4' fill='currentColor'/>
            <line x1='-12' y1='-2.5' x2='-15' y2='-4' stroke='currentColor' stroke-width='1'/>
            <line x1='-12' y1='2.5' x2='-15' y2='4' stroke='currentColor' stroke-width='1'/>
          </g>

          <!-- Ong nhỏ 1 -->
          <g transform='translate(95, 175)' opacity='0.12'>
            <ellipse cx='0' cy='0' rx='7' ry='4' fill='currentColor'/>
            <ellipse cx='-3' cy='-2' rx='5' ry='3' fill='currentColor' opacity='0.3'/>
            <ellipse cx='-3' cy='2' rx='5' ry='3' fill='currentColor' opacity='0.3'/>
            <circle cx='-6' cy='0' r='3' fill='currentColor'/>
            <line x1='-8' y1='-1.5' x2='-10' y2='-2.5' stroke='currentColor' stroke-width='0.8'/>
            <line x1='-8' y1='1.5' x2='-10' y2='2.5' stroke='currentColor' stroke-width='0.8'/>
          </g>

          <!-- Ong vừa 2 -->
          <g transform='translate(170, 140)' opacity='0.13'>
            <ellipse cx='0' cy='0' rx='10' ry='6' fill='currentColor'/>
            <ellipse cx='-4' cy='-3' rx='7' ry='4' fill='currentColor' opacity='0.3'/>
            <ellipse cx='-4' cy='3' rx='7' ry='4' fill='currentColor' opacity='0.3'/>
            <circle cx='-9' cy='0' r='4' fill='currentColor'/>
            <line x1='-12' y1='-2.5' x2='-15' y2='-4' stroke='currentColor' stroke-width='1'/>
            <line x1='-12' y1='2.5' x2='-15' y2='4' stroke='currentColor' stroke-width='1'/>
          </g>

          <!-- Hoa lớn 1 -->
          <g transform='translate(120, 45)' opacity='0.13'>
            <circle cx='0' cy='0' r='4' fill='currentColor'/>
            <circle cx='0' cy='-10' r='5' fill='currentColor'/>
            <circle cx='8.7' cy='-5' r='5' fill='currentColor'/>
            <circle cx='8.7' cy='5' r='5' fill='currentColor'/>
            <circle cx='0' cy='10' r='5' fill='currentColor'/>
            <circle cx='-8.7' cy='5' r='5' fill='currentColor'/>
            <circle cx='-8.7' cy='-5' r='5' fill='currentColor'/>
          </g>

          <!-- Hoa vừa 1 -->
          <g transform='translate(30, 110)' opacity='0.12'>
            <circle cx='0' cy='0' r='3' fill='currentColor'/>
            <circle cx='0' cy='-7' r='4' fill='currentColor'/>
            <circle cx='6' cy='-3.5' r='4' fill='currentColor'/>
            <circle cx='6' cy='3.5' r='4' fill='currentColor'/>
            <circle cx='0' cy='7' r='4' fill='currentColor'/>
            <circle cx='-6' cy='3.5' r='4' fill='currentColor'/>
            <circle cx='-6' cy='-3.5' r='4' fill='currentColor'/>
          </g>

          <!-- Hoa nhỏ 1 -->
          <g transform='translate(180, 25)' opacity='0.1'>
            <circle cx='0' cy='0' r='2' fill='currentColor'/>
            <circle cx='0' cy='-5' r='2.5' fill='currentColor'/>
            <circle cx='4.3' cy='-2.5' r='2.5' fill='currentColor'/>
            <circle cx='4.3' cy='2.5' r='2.5' fill='currentColor'/>
            <circle cx='0' cy='5' r='2.5' fill='currentColor'/>
            <circle cx='-4.3' cy='2.5' r='2.5' fill='currentColor'/>
            <circle cx='-4.3' cy='-2.5' r='2.5' fill='currentColor'/>
          </g>

          <!-- Hoa vừa 2 -->
          <g transform='translate(75, 130)' opacity='0.11'>
            <circle cx='0' cy='0' r='3' fill='currentColor'/>
            <circle cx='0' cy='-7' r='4' fill='currentColor'/>
            <circle cx='6' cy='-3.5' r='4' fill='currentColor'/>
            <circle cx='6' cy='3.5' r='4' fill='currentColor'/>
            <circle cx='0' cy='7' r='4' fill='currentColor'/>
            <circle cx='-6' cy='3.5' r='4' fill='currentColor'/>
            <circle cx='-6' cy='-3.5' r='4' fill='currentColor'/>
          </g>

          <!-- Hoa nhỏ 2 -->
          <g transform='translate(145, 165)' opacity='0.09'>
            <circle cx='0' cy='0' r='2' fill='currentColor'/>
            <circle cx='0' cy='-5' r='2.5' fill='currentColor'/>
            <circle cx='4.3' cy='-2.5' r='2.5' fill='currentColor'/>
            <circle cx='4.3' cy='2.5' r='2.5' fill='currentColor'/>
            <circle cx='0' cy='5' r='2.5' fill='currentColor'/>
            <circle cx='-4.3' cy='2.5' r='2.5' fill='currentColor'/>
            <circle cx='-4.3' cy='-2.5' r='2.5' fill='currentColor'/>
          </g>

          <!-- Hoa lớn 2 -->
          <g transform='translate(60, 180)' opacity='0.12'>
            <circle cx='0' cy='0' r='4' fill='currentColor'/>
            <circle cx='0' cy='-10' r='5' fill='currentColor'/>
            <circle cx='8.7' cy='-5' r='5' fill='currentColor'/>
            <circle cx='8.7' cy='5' r='5' fill='currentColor'/>
            <circle cx='0' cy='10' r='5' fill='currentColor'/>
            <circle cx='-8.7' cy='5' r='5' fill='currentColor'/>
            <circle cx='-8.7' cy='-5' r='5' fill='currentColor'/>
          </g>

          <!-- Bướm lớn 1 -->
          <g transform='translate(85, 70)' opacity='0.14'>
            <ellipse cx='0' cy='0' rx='2.5' ry='8' fill='currentColor'/>
            <circle cx='0' cy='-6' r='3' fill='currentColor'/>
            <path d='M -4,-4 Q -15,-12 -13,-2 Q -16,4 -4,0 Z' fill='currentColor'/>
            <path d='M 4,-4 Q 15,-12 13,-2 Q 16,4 4,0 Z' fill='currentColor'/>
            <path d='M -4,3 Q -14,9 -10,13 Q -6,10 -4,6 Z' fill='currentColor' opacity='0.8'/>
            <path d='M 4,3 Q 14,9 10,13 Q 6,10 4,6 Z' fill='currentColor' opacity='0.8'/>
            <line x1='0' y1='-9' x2='-2.5' y2='-13' stroke='currentColor' stroke-width='1'/>
            <line x1='0' y1='-9' x2='2.5' y2='-13' stroke='currentColor' stroke-width='1'/>
          </g>

          <!-- Bướm vừa 1 -->
          <g transform='translate(160, 110)' opacity='0.13'>
            <ellipse cx='0' cy='0' rx='2' ry='6' fill='currentColor'/>
            <circle cx='0' cy='-5' r='2.5' fill='currentColor'/>
            <path d='M -3,-3 Q -12,-8 -10,-2 Q -12,3 -3,0 Z' fill='currentColor'/>
            <path d='M 3,-3 Q 12,-8 10,-2 Q 12,3 3,0 Z' fill='currentColor'/>
            <path d='M -3,2 Q -10,6 -8,9 Q -5,7 -3,4 Z' fill='currentColor' opacity='0.8'/>
            <path d='M 3,2 Q 10,6 8,9 Q 5,7 3,4 Z' fill='currentColor' opacity='0.8'/>
            <line x1='0' y1='-7' x2='-2' y2='-10' stroke='currentColor' stroke-width='0.8'/>
            <line x1='0' y1='-7' x2='2' y2='-10' stroke='currentColor' stroke-width='0.8'/>
          </g>

          <!-- Bướm nhỏ 1 -->
          <g transform='translate(45, 155)' opacity='0.11'>
            <ellipse cx='0' cy='0' rx='1.5' ry='4' fill='currentColor'/>
            <circle cx='0' cy='-3' r='2' fill='currentColor'/>
            <path d='M -2,-2 Q -8,-5 -7,-1 Q -8,2 -2,0 Z' fill='currentColor'/>
            <path d='M 2,-2 Q 8,-5 7,-1 Q 8,2 2,0 Z' fill='currentColor'/>
            <line x1='0' y1='-5' x2='-1.5' y2='-7' stroke='currentColor' stroke-width='0.6'/>
            <line x1='0' y1='-5' x2='1.5' y2='-7' stroke='currentColor' stroke-width='0.6'/>
          </g>

          <!-- Bướm vừa 2 -->
          <g transform='translate(20, 75)' opacity='0.12'>
            <ellipse cx='0' cy='0' rx='2' ry='6' fill='currentColor'/>
            <circle cx='0' cy='-5' r='2.5' fill='currentColor'/>
            <path d='M -3,-3 Q -12,-8 -10,-2 Q -12,3 -3,0 Z' fill='currentColor'/>
            <path d='M 3,-3 Q 12,-8 10,-2 Q 12,3 3,0 Z' fill='currentColor'/>
            <path d='M -3,2 Q -10,6 -8,9 Q -5,7 -3,4 Z' fill='currentColor' opacity='0.8'/>
            <path d='M 3,2 Q 10,6 8,9 Q 5,7 3,4 Z' fill='currentColor' opacity='0.8'/>
            <line x1='0' y1='-7' x2='-2' y2='-10' stroke='currentColor' stroke-width='0.8'/>
            <line x1='0' y1='-7' x2='2' y2='-10' stroke='currentColor' stroke-width='0.8'/>
          </g>

          <!-- Lá lớn 1 -->
          <g transform='translate(185, 90)' opacity='0.11'>
            <ellipse cx='0' cy='0' rx='5' ry='12' fill='currentColor'/>
            <line x1='0' y1='-12' x2='0' y2='12' stroke='currentColor' stroke-width='0.8' opacity='0.4'/>
          </g>

          <!-- Lá vừa 1 -->
          <g transform='translate(135, 20)' opacity='0.1'>
            <ellipse cx='0' cy='0' rx='4' ry='9' fill='currentColor'/>
            <line x1='0' y1='-9' x2='0' y2='9' stroke='currentColor' stroke-width='0.6' opacity='0.4'/>
          </g>

          <!-- Lá nhỏ 1 -->
          <g transform='translate(55, 50)' opacity='0.09'>
            <ellipse cx='0' cy='0' rx='3' ry='6' fill='currentColor'/>
            <line x1='0' y1='-6' x2='0' y2='6' stroke='currentColor' stroke-width='0.5' opacity='0.4'/>
          </g>

          <!-- Lá vừa 2 -->
          <g transform='translate(15, 145)' opacity='0.1'>
            <ellipse cx='0' cy='0' rx='4' ry='9' fill='currentColor'/>
            <line x1='0' y1='-9' x2='0' y2='9' stroke='currentColor' stroke-width='0.6' opacity='0.4'/>
          </g>

          <!-- Lá nhỏ 2 -->
          <g transform='translate(110, 95)' opacity='0.08'>
            <ellipse cx='0' cy='0' rx='3' ry='6' fill='currentColor'/>
            <line x1='0' y1='-6' x2='0' y2='6' stroke='currentColor' stroke-width='0.5' opacity='0.4'/>
          </g>

          <!-- Điểm trang trí lớn -->
          <circle cx='25' cy='190' r='2.5' fill='currentColor' opacity='0.09'/>
          <circle cx='190' cy='180' r='2.5' fill='currentColor' opacity='0.09'/>
          
          <!-- Điểm trang trí vừa -->
          <circle cx='100' cy='15' r='2' fill='currentColor' opacity='0.08'/>
          <circle cx='175' cy='155' r='2' fill='currentColor' opacity='0.08'/>
          <circle cx='40' cy='30' r='2' fill='currentColor' opacity='0.08'/>
          
          <!-- Điểm trang trí nhỏ -->
          <circle cx='70' cy='195' r='1.5' fill='currentColor' opacity='0.07'/>
          <circle cx='195' cy='65' r='1.5' fill='currentColor' opacity='0.07'/>
          <circle cx='130' cy='185' r='1.5' fill='currentColor' opacity='0.07'/>
          <circle cx='10' cy='25' r='1.5' fill='currentColor' opacity='0.07'/>
        </g>
      </svg>
    `.replace(/#/g, '%23');

    return `url("data:image/svg+xml,${encodeURIComponent(svgContent)}")`;
  };

  const patternStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: generateSVGPattern(themeConfig.color),
    backgroundColor: themeConfig.backgroundColor,
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: '200px 200px',
    opacity: 0.15,
    zIndex: -1,
    transition: 'all 0.5s ease-in-out'
  };

  return <div style={patternStyle} />;
};

export default PatternBackground;