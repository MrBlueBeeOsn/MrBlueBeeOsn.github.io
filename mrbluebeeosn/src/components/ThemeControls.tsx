// components/ThemeControls.tsx
import React from 'react';
import { useTheme } from '@/components/ThemeContext';

const ThemeControls: React.FC = () => {
  const { currentTheme, changeTheme} = useTheme();

  const themeConfigs = {
    whatsapp: { color: '#D9D9D9', backgroundColor: '#f0f2f5', name: 'WhatsApp' },
    telegram: { color: '#1E2A38', backgroundColor: '#18222d', name: 'Telegram' },
    pink: { color: '#FFB6C1', backgroundColor: '#fff5f7', name: 'Pink' },
    mint: { color: '#20B2AA', backgroundColor: '#f0fffd', name: 'Mint' },
    lavender: { color: '#9C27B0', backgroundColor: '#faf5ff', name: 'Lavender' },
    peach: { color: '#FF9A76', backgroundColor: '#fff5f0', name: 'Peach' }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: 'rgba(33, 33, 33, 0.8)', // Màu nền phù hợp với background #212121
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 4px 25px rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      zIndex: 1000
    }}>
      <h3 style={{ margin: '0 0 15px 0', fontSize: '1rem', color: 'white', textAlign: 'center' }}>
        Chọn Màu Pattern
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {Object.entries(themeConfigs).map(([theme, config]) => (
          <button
            key={theme}
            onClick={() => changeTheme(theme as any)}
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: config.color,
              border: currentTheme === theme ? '3px solid white' : '3px solid transparent',
              borderRadius: '12px',
              cursor: 'pointer'
            }}
            title={config.name}
          >
            <span style={{ 
              fontSize: '0.6rem', 
              color: 'white', 
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              fontWeight: 'bold'
            }}>
              {config.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeControls;