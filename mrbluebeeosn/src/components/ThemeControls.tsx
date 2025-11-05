// components/ThemeControls.tsx
import React, { useState } from 'react';
import { useTheme } from '@/components/ThemeContext';
import type { Theme } from '@/components/ThemeContext';

const ThemeControls: React.FC = () => {
  const {
    patternColor,
    setPatternColor,
    backgroundColor,
    setBackgroundColor,
    backgroundMainColor,
    setBackgroundMainColor,
  } = useTheme();

  const [isVisible, setIsVisible] = useState(true);

  const themes: Theme[] = ['teal', 'blue', 'charcoal', 'secondary', 'tertiary', 'raisinblack'];
    const names = {
      teal: 'Teal',
      blue: 'Blue Dark',
      charcoal: 'Charcoal Blue',
      secondary: 'Secondary',
      tertiary: 'Tertiary',
      raisinblack: 'Raisin Black',
    };
  
    const patternMap = {
      teal: 'rgba(25, 211, 218, 1)',
      blue: 'rgba(1, 172, 193, 1)',
      charcoal: 'rgba(23, 33, 43, 0.1)',
      secondary: 'rgba(102, 226, 230, 1)',
      tertiary: 'rgba(166, 239, 241, 1)',
      raisinblack: 'rgba(33, 33, 33, 1)',
    };
    const bgMap = {
      teal: 'rgba(25, 211, 218, 0.1)',
      blue: 'rgba(1, 172, 193, 0.1)',
      charcoal: 'rgba(23, 33, 43, 1)',
      secondary: 'rgba(102, 226, 230, 0.1)',
      tertiary: 'rgba(166, 239, 241, 0.1)',
      raisinblack: 'rgba(33, 33, 33, 1)',
    };
    const bgMainMap = {
      teal: 'rgba(25, 211, 218, 0.1)',
      blue: 'rgba(1, 172, 193, 0.1)',
      charcoal: 'rgba(23, 33, 43, 0.1)',
      secondary: 'rgba(102, 226, 230, 0.1)',
      tertiary: 'rgba(166, 239, 241, 0.1)',
      raisinblack: 'rgba(245, 245, 245, 1)',
    };
  
    // const patternMap = {
      //   whatsapp: '#D9D9D9',
      //   telegram: '#1E2A38',
      //   pink: '#FFB6C1',
      //   mint: '#20B2AA',
      //   lavender: '#9C27B0',
      //   peach: '#FF9A76',
      // };
      // const bgMap = {
      //   whatsapp: '#F0F0F0',
      //   telegram: '#17212B',
      //   pink: '#FFE4E1',
      //   mint: '#E0FFFF',
      //   lavender: '#E6E6FA',
      //   peach: '#FFDAB9',
      // };

  // Nếu không hiển thị, trả về null
  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        background: 'rgba(33,33,33,0.9)',
        padding: 20,
        borderRadius: 15,
        boxShadow: '0 4px 25px rgba(0,0,0,0.4)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.15)',
        zIndex: 1000,
        width: 220,
        color: 'white',
      }}
    >
      {/* Nút đóng */}
      <button
        onClick={() => setIsVisible(false)}
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          background: 'rgba(255,255,255,0.1)',
          border: 'none',
          borderRadius: '50%',
          width: 24,
          height: 24,
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
        }}
      >
        ×
      </button>

      {/* PATTERN ROW */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ margin: '0 0 10px', fontSize: '0.95rem', textAlign: 'center' }}>
          Pattern
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          {themes.map(t => (
            <button
              key={`p-${t}`}
              onClick={() => {
                console.log('SET PATTERN:', patternMap[t]);
                setPatternColor(patternMap[t]);
              }}
              style={{
                width: 50,
                height: 50,
                backgroundColor: patternMap[t],
                border: patternColor === patternMap[t] ? '3px solid white' : '2px solid rgba(255,255,255,0.3)',
                borderRadius: 10,
                cursor: 'pointer',
                fontSize: '0.65rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all .2s',
              }}
              title={names[t]}
            >
              {names[t].slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      {/* BACKGROUND ROW */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ margin: '0 0 10px', fontSize: '0.95rem', textAlign: 'center' }}>
          Background
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          {themes.map(t => (
            <button
              key={`b-${t}`}
              onClick={() => {
                console.log('SET BACKGROUND:', bgMap[t]);
                setBackgroundColor(bgMap[t]);
              }}
              style={{
                width: 50,
                height: 50,
                backgroundColor: bgMap[t],
                border: backgroundColor === bgMap[t] ? '3px solid white' : '2px solid rgba(255,255,255,0.3)',
                borderRadius: 10,
                cursor: 'pointer',
                fontSize: '0.65rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all .2s',
              }}
              title={names[t]}
            >
              {names[t].slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      {/* BACKGROUND MAIN ROW */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ margin: '0 0 10px', fontSize: '0.95rem', textAlign: 'center' }}>
          Main
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          {themes.map(t => (
            <button
              key={`b-${t}`}
              onClick={() => {
                console.log('SET BACKGROUNDMAIN:', bgMainMap[t]);
                setBackgroundMainColor(bgMainMap[t]);
              }}
              style={{
                width: 50,
                height: 50,
                backgroundColor: bgMainMap[t],
                border: backgroundMainColor === bgMainMap[t] ? '3px solid white' : '2px solid rgba(255,255,255,0.3)',
                borderRadius: 10,
                cursor: 'pointer',
                fontSize: '0.65rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all .2s',
              }}
              title={names[t]}
            >
              {names[t].slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ThemeControls;