// =============================
//    Branding · by DPSK
// =============================

import { useState } from 'react';
import logo from '/public/assets/images/bee-teal2.png';

export default function Branding() {
  const [rotation, setRotation] = useState(0);

  const handleLogoClick = () => {
    setRotation((prevRotation) => (prevRotation + 45) % 360);
  };

  return (
    <div className="branding">
      <img 
        src={logo}
        alt="Mr. Bee - Ong siêng năng" 
        className="logo"
        style={{ transform: `rotate(${rotation}deg)` }}
        onClick={handleLogoClick}
      />
    </div>
  );
}