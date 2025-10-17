import '/public/assets/css/style.css'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import BackToTop from '@/components/BackToTop';

export default function Layout(): React.JSX.Element {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}