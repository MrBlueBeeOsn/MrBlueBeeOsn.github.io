import React from 'react';
import { Link } from "react-router-dom";
import logo from '/public/assets/images/bee-teal2.png';
import SearchIcon from '@/components/SearchIcon';

export default function Header(): React.JSX.Element {
  return (

    <header>

      <nav>

        <div className="branding">
          <Link to="/"><img src={logo} className="logo" alt="Mr. Bee - Ong siêng năng"></img></Link>
          <span className="logo-text">👋&nbsp;Hello!&nbsp;</span>
        </div>

        <div className="nav-bar">

          <Link to="/bookkeeping" className="nav-link">🅱️ookkeeping</Link>
          <Link to="/english" className="nav-link">🅴nglish</Link>

          <Link to="/search" className="nav-link">

            <SearchIcon 
              size={24} 
              fill="var(--secondary-color)" 
              stroke="var(--tertiary-color)"
            />

          </Link>
              
        </div>

      </nav>

    </header>
    
  );
}