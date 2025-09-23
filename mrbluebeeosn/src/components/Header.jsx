import { Link } from "react-router-dom";
import logo from '/public/assets/images/bee-teal2.png';

export default function Header() {
  return (

    <header>

      <nav>

        <div className="branding">
          <Link to="/"><img src={logo} className="logo" alt="Mr. Bee - Ong siêng năng"></img></Link>
          <span class="logo-text">👋&nbsp;Hello!&nbsp;</span>
        </div>

        <div>
          <ul>
            <li><Link to="/bookkeeping" className="nav-link">🅱️ookkeeping</Link></li>
            <li><Link to="/english" className="nav-link">🅴nglish</Link></li>
          </ul>
        </div>

      </nav>

    </header>
    
  );
}