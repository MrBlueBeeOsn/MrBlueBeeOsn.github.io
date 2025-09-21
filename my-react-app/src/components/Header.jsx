import { Link } from "react-router-dom";

export default function Header() {
  return (

    <header>

      <nav>

        <div className="branding">
          <Link to="/" className="nav-link">Home</Link>
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