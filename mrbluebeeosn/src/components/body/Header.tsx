import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import logo from '/public/assets/images/bee-teal2.png';
import SearchIcon from '@/components/icon/SearchIcon';
import Branding from '@/components/logo/Branding';
import ToggleButton from '@/components/color/ToggleButton';

interface HeaderProps {
  showControls: boolean;
  onToggleControls: () => void;
}

export default function Header({ showControls, onToggleControls }: HeaderProps): React.JSX.Element {
  const [selected, setSelected] = useState(false);
  return (

    <header className="site-header">

      <nav>

        <div className="branding">
          <NavLink to="/"><Branding /></NavLink>
          <span className="logo-text">👋&nbsp;helLO!&nbsp;</span>
        </div>

        <div className="nav-bar">

          <NavLink to="/bookkeeping"
            className={`link-rounded ${selected ? 'selected' : ''}`}
            style={({ isActive }) => ({
              background: isActive ? 'var(--accent-color-50)' : '',
            })}
          >
            🅱️OOKkeeping
          </NavLink>

          <NavLink to="/english"
            className={`link-rounded ${selected ? 'selected' : ''}`}
            style={({ isActive }) => ({
              background: isActive ? 'var(--accent-color-50)' : '',
            })}
          >
            🅴NGlish
          </NavLink>

          <NavLink to="/search" className="nav-link">

            <SearchIcon 
              size={24} 
              fill="var(--secondary-color)" 
              stroke="var(--tertiary-color)"
            />

          </NavLink>

          <ToggleButton 
            isVisible={showControls} 
            onToggle={onToggleControls}
            variant="header" // Quan trọng: thêm variant="header"
          />
              
        </div>

      </nav>

    </header>
    
  );
}