// contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'whatsapp' | 'telegram' | 'pink' | 'mint' | 'lavender' | 'peach';

interface ThemeContextType {
  currentTheme: Theme;
  changeTheme: (theme: Theme) => void;
  themeConfig: {
    color: string;
    backgroundColor: string;
    name: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('whatsapp');

  const themeConfigs = {
    whatsapp: { color: '#D9D9D9', backgroundColor: '#f0f2f5', name: 'WhatsApp' },
    telegram: { color: '#1E2A38', backgroundColor: '#18222d', name: 'Telegram' },
    pink: { color: '#FFB6C1', backgroundColor: '#fff5f7', name: 'Pink' },
    mint: { color: '#20B2AA', backgroundColor: '#f0fffd', name: 'Mint' },
    lavender: { color: '#9C27B0', backgroundColor: '#faf5ff', name: 'Lavender' },
    peach: { color: '#FF9A76', backgroundColor: '#fff5f0', name: 'Peach' }
  };

  const changeTheme = (theme: Theme) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      changeTheme,
      themeConfig: themeConfigs[currentTheme]
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};