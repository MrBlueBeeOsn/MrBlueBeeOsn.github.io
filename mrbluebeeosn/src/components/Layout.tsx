import '/public/assets/css/style.css'

import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import BackToTop from './BackToTop';

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