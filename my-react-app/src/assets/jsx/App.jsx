import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Bookkeeping from "./Bookkeeping";
import English from "./English";
import MrBeeOsn from "./MrBeeOsn";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Bookkeeping" element={<Bookkeeping />} />
            <Route path="/English" element={<English />} />
            <Route path="/mrbeeosn" element={<MrBeeOsn />} />
          </Routes>

        </main>

        <Footer />

      </div>
    </Router>
  );
}