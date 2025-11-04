// components/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Theme = 'whatsapp' | 'telegram' | 'pink' | 'mint' | 'lavender' | 'peach';

interface ThemeContextType {
  patternColor: string;
  setPatternColor: (color: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [patternColor, setPatternColor] = useState('#D9D9D9'); // default WhatsApp
  const [backgroundColor, setBackgroundColor] = useState('#F0F0F0'); // default WhatsApp

  return (
    <ThemeContext.Provider
      value={{
        patternColor,
        setPatternColor,
        backgroundColor,
        setBackgroundColor,
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