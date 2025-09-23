import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function () {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/english#pronunciation-terms"><mark className="highlight2">Pronunciation</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">What is pronunciation?</h2>

    {/* This is the content of English Learning Term. */}

    

    {/* =============================
          🌻 Think simply!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌻 Think simply!</h3>

    

    <p className="margin-top-50 text-small"> - by 💎Gem</p>
    
  </main>

  </>);
}