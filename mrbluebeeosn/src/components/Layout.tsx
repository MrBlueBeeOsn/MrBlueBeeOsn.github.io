import React from 'react';
import '/public/assets/css/style.css'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider, useTheme } from '@/components/ThemeContext';
import PatternBackground from '@/components/PatternBackground';
import ThemeControls from '@/components/ThemeControls';

export default function Layout() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

const MainLayout: React.FC = () => {
  const { themeConfig } = useTheme();

  // Set CSS variable cho root
  React.useEffect(() => {
    document.documentElement.style.setProperty('--theme-bg-color', themeConfig.backgroundColor);
  }, [themeConfig.backgroundColor]);

  return (<>
    <PatternBackground />
    <ThemeControls />

    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
    </div>
    
  </>);
}