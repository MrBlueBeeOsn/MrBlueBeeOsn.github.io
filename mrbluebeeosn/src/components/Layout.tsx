import React from 'react';
import '/public/assets/css/style.css'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import BackToTop from '@/components/BackToTop';
import { ThemeProvider } from '@/components/ThemeContext';
import Background from '@/components/Background';
import Pattern from '@/components/Pattern';
import ThemeControls from '@/components/ThemeControls';

export default function Layout() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

const MainLayout: React.FC = () => (
  <>
    <Background />          {/* dưới cùng */}
    <Pattern />   {/* trên nền */}
    <ThemeControls />
    <div className="layout">
      <Header />
      <main><Outlet /></main>
      <BackToTop />
      <Footer />
    </div>
  </>
);