import React from 'react';
import { Link } from "react-router-dom";
import BeeSwarm from '@/components/BeeSwarm';

export default function Footer(): React.JSX.Element {
  return (

    <footer>
      
      <h4 className="font-normal">© 2025 <span className="bee">🐝</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mr. ßee - a Diligent Bee📘</h4>

      <Link to="/"><ins>๏</ins></Link>

      <BeeSwarm />
      
    </footer>

  );
}