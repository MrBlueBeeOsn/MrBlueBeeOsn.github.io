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
            <li><Link to="/programming" className="nav-link">🅿rogramming</Link></li>
            <li><Link to="/spreadsheet" className="nav-link">Spreadsheet</Link></li>
          </ul>
        </div>

      </nav>

    </header>
    
  );
}