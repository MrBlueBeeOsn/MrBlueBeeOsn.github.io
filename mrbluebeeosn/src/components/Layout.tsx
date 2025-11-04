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
  // Define a patternColor variable, you can set its value as needed
  const patternColor = 'default-pattern-color';

  return (<>
    <PatternBackground key={patternColor} />
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