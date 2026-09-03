import React from 'react';
import { Link } from "react-router-dom";
import BeeSwarm from '@/components/beeflying/BeeSwarm';

export default function Footer(): React.JSX.Element {
  return (

    <footer className="site-footer">
      
      <h4 className="font-normal">© 2025 <span className="bee">🐝</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MR. ßEE - a DILigent BEE📘</h4>

      <Link to="/"><ins>๏</ins></Link>

      <BeeSwarm />
      
    </footer>

  );
}