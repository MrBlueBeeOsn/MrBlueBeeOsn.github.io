// components/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Theme = 'teal' | 'blue' | 'charcoal' | 'secondary' | 'tertiary' | 'raisinblack';

interface ThemeContextType {
  patternColor: string;
  setPatternColor: (color: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  backgroundMainColor: string;
  setBackgroundMainColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Đặt màu mặc định là WhatsApp
  const [patternColor, setPatternColor] = useState('rgba(102, 226, 230, 1)');     // Pattern mặc định
  const [backgroundColor, setBackgroundColor] = useState('rgba(33, 33, 33, 1)'); // Background mặc định
  const [backgroundMainColor, setBackgroundMainColor] = useState('rgba(245, 245, 245, 0)'); // Background mặc định

  return (
    <ThemeContext.Provider
      value={{
        patternColor,
        setPatternColor,
        backgroundColor,
        setBackgroundColor,
        backgroundMainColor,
        setBackgroundMainColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};