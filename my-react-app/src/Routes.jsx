import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Bookkeeping from "./Bookkeeping";
import English from "./English";
import MrBeeOsn from "./MrBeeOsn";



export default function AppRoutes() {
  return (

    <Routes>

      <div className="app">

        <Header />

        <main>

            <Route path="/" element={<Home />} />
            <Route path="/Bookkeeping" element={<Bookkeeping />} />
            <Route path="/English" element={<English />} />
            <Route path="/mrbeeosn" element={<MrBeeOsn />} />

        </main>

        <Footer />

      </div>

    </Routes>

  );
}