// components/ThemeControls.tsx
import React from 'react';
import { useTheme } from '@/components/ThemeContext';
import type { Theme } from '@/components/ThemeContext';

const ThemeControls: React.FC = () => {
  const {
    patternColor,
    setPatternColor,
    backgroundColor,
    setBackgroundColor,
  } = useTheme();

  const themes: Theme[] = ['whatsapp', 'telegram', 'pink', 'mint', 'lavender', 'peach'];
  const names = {
    whatsapp: 'WhatsApp',
    telegram: 'Telegram',
    pink: 'Pink',
    mint: 'Mint',
    lavender: 'Lavender',
    peach: 'Peach',
  };

  const patternMap = {
    whatsapp: '#D9D9D9',
    telegram: '#1E2A38',
    pink: '#FFB6C1',
    mint: '#20B2AA',
    lavender: '#9C27B0',
    peach: '#FF9A76',
  };
  const bgMap = {
    whatsapp: '#F0F0F0',
    telegram: '#17212B',
    pink: '#FFE4E1',
    mint: '#E0FFFF',
    lavender: '#E6E6FA',
    peach: '#FFDAB9',
  };

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
                console.log('SET PATTERN:', patternMap[t]);   // <-- LOG
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
      <div>
        <h3 style={{ margin: '0 0 10px', fontSize: '0.95rem', textAlign: 'center' }}>
          Background
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          {themes.map(t => (
            <button
              key={`b-${t}`}
              onClick={() => {
                console.log('SET BACKGROUND:', bgMap[t]);     // <-- LOG
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
    </div>
  );
};

export default ThemeControls;