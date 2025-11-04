// components/ThemeControls.tsx
import React from 'react';
import { useTheme } from '@/components/ThemeContext';
import type { Theme } from '@/components/ThemeContext'; // Import Theme type

const ThemeControls: React.FC = () => {
  const { currentTheme, changeTheme } = useTheme();

  const themeConfigs: Record<Theme, { color: string; name: string }> = {
    whatsapp: { color: '#D9D9D9', name: 'WhatsApp' },
    telegram: { color: '#1E2A38', name: 'Telegram' },
    pink: { color: '#FFB6C1', name: 'Pink' },
    mint: { color: '#20B2AA', name: 'Mint' },
    lavender: { color: '#9C27B0', name: 'Lavender' },
    peach: { color: '#FF9A76', name: 'Peach' }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: 'rgba(33, 33, 33, 0.8)',
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
        {(Object.entries(themeConfigs) as [Theme, { color: string; name: string }][]).map(([theme, config]) => (
          <button
            key={theme}
            onClick={() => changeTheme(theme)} // Sửa thành theme thay vì theme as Theme
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: config.color,
              border: currentTheme === theme ? '3px solid white' : '3px solid transparent',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '0.7rem',
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title={config.name}
          >
            {config.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeControls;