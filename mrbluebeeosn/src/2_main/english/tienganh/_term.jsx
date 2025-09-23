import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function () {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/english#tieng-anh-terms"><mark className="highlight2">Tiếng Anh</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">What is pronunciation?</h2>

    {/* Đây là nội dung của Thuật ngữ Tiếng Anh. */}

    

    {/* =============================
        ☘️ Hãy nghĩ thật đơn giản!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌻 Think simply!</h3>

    

    <p className="margin-top-50 text-small"> - by 💎Gem</p>
    
  </main>

  </>);
}