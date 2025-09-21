import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from "./pages/Home";
import Bookkeeping from "./pages/Bookkeeping";
import English from "./pages/English";
import MrBeeOsn from "./pages/MrBeeOsn";



export default function AppRoutes() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/Bookkeeping" element={<Bookkeeping />} />
        <Route path="/English" element={<English />} />
        <Route path="/mrbeeosn" element={<MrBeeOsn />} />

      </Route>

    </Routes>

  );
}