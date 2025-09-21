import '/public/assets/css/style.css'

import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import BackToTop from './BackToTop';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* nơi render các route con */}
      </main>

        <button className="back-to-top" title="Back to top"></button>

        <BackToTop />

      <Footer />
    </>
  );
}