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
  const [showPattern, setShowPattern] = useState(false);

  console.log('🔘 ToggleButton state:', showPattern); // Debug

  const handleToggle = () => {
    console.log('🔘 Toggle button clicked'); // Debug
    setShowPattern(!showPattern);
  };

  return (<>
    
    {/* Hiển thị Pattern và Controls chỉ khi showPattern là true */}
    {showPattern && (
      <>
        <Background />
        <Pattern />
        <ThemeControls />
      </>
    )}

    {/* Nút toggle - THÊM STYLE ĐẢM BẢO HIỂN THỊ */}
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      zIndex: 1002,
    }}>
      <ToggleButton isVisible={showPattern} onToggle={handleToggle} />
    </div>

    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
    </div>
    
  </>);
};