// components/Background.tsx
import React, { useMemo } from 'react';
import { useTheme } from '@/components/ThemeContext';

const Background: React.FC = () => {
  const { backgroundColor } = useTheme();

  // LOG để chắc chắn context thay đổi
  console.log('Background re‑render → backgroundColor:', backgroundColor);

  const style = useMemo(
    () => ({
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor,               // <-- màu thực tế
      opacity: 0.2,
      zIndex: -1,
      pointerEvents: 'none' as const,
    }),
    [backgroundColor]                // <-- dependency đúng
  );

  return <div style={style} />;
};

export default Background;