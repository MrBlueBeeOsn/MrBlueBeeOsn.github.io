import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function () {
  return (<>

  <main className="image image2">
    
    <h4>by <HashLink smooth to="/english#mr-bee-osn-english-terms"><mark className="highlight-tertiary-padding-4-8">Mr. Bee Osn</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">Searching and clickable dictionary</h2>

    {/* This is the content of Mr.Bee English Term. */}

    

    {/* =============================
          🌻 Think simply!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌻 Think simply!</h3>

    

    <p className="margin-top-50 text-small"> - by 💎Gem</p>
    
  </main>

  </>);
}