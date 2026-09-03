// components/Background.tsx
import React, { useMemo } from 'react';
import { useTheme } from '@/components/color/ThemeContext';

const BackgroundMain: React.FC = () => {
  const { backgroundMainColor } = useTheme();

  // LOG để chắc chắn context thay đổi
  console.log('Background re‑render → backgroundMainColor:', backgroundMainColor);

  const style = useMemo(
    () => ({
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: backgroundMainColor, // <-- màu thực tế
      opacity: 1,
      zIndex: -1,
      pointerEvents: 'none' as const,
    }),
    [backgroundMainColor]                // <-- dependency đúng
  );

  return <div style={style} />;
};

export default BackgroundMain;