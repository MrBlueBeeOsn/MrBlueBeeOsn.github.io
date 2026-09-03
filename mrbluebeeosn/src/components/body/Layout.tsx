import React, { useState } from 'react';
import '/public/assets/css/style.css'

import Header from '@/components/body/Header';
import Footer from '@/components/body/Footer';
import { Outlet } from 'react-router-dom';
import BackToTop from '@/components/backtotop/BackToTop';
import { ThemeProvider, useTheme } from '@/components/color/ThemeContext';
import Background from '@/components/color/Background';
import BackgroundMain from '@/components/color/BackgroundMain';
import Pattern from '@/components/color/Pattern';
import ThemeControls from '@/components/color/ThemeControls';
import ToggleButton from '@/components/color/ToggleButton';

export default function Layout() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );  
}

const MainLayout: React.FC = () => {
  const [showControls, setShowControls] = useState(false); // Chỉ control ThemeControls
  const { backgroundMainColor } = useTheme();

  return (
    <>
      {/* Pattern LUÔN HIỆN - không phụ thuộc vào showControls */}
      <Background />
      <Pattern />

      {/* Chỉ hiện ThemeControls khi showControls là true */}
      {showControls && <ThemeControls />}

      {/* ToggleButton chỉ điều khiển ThemeControls */}
      {/* <ToggleButton 
        isVisible={showControls} 
        onToggle={() => setShowControls(!showControls)}
        variant="floating" // Hoặc không cần vì mặc định là floating
      /> */}

    <div className="layout">
      <Header 
          showControls={showControls}
          onToggleControls={() => setShowControls(!showControls)}
        />
      <main style={{ backgroundColor: backgroundMainColor }}>
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
    </div>

  </>);
};