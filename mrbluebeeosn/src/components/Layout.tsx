import React, { useState } from 'react';
import '/public/assets/css/style.css'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeContext';
import Background from '@/components/Background';
import Pattern from '@/components/Pattern';
import ThemeControls from '@/components/ThemeControls';
import ToggleButton from '@/components/ToggleButton';

export default function Layout() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );  
}

const MainLayout: React.FC = () => {
  const [showControls, setShowControls] = useState(false); // Chỉ control ThemeControls

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
      <main>
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
    </div>

  </>);
};