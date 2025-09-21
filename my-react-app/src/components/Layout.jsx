import '/public/assets/css/style.css'

import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import BackToTop from './BackToTop';

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="content-wrapper">
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}