import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// 1_header import các chức năng và đường dẫn
import Home from "./1_header/Home";
import Home_Bookkeeping from "./1_header/Home_Bookkeeping";
import Home_English from "./1_header/Home_English";

// 2_main import các chức năng và đường dẫn
import MrBeeOsn from "./2_main/msbeeosn/MrBeeOsn";
import Bookkeeping from "./2_main/bookkeeping/Bookkeeping";
import The_English_Language from "./2_main/english/The_English_Language";

// Xuất khẩu chức năng
export default function AppRoutes() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>

        {/* 2_main Khai báo đường dẫn path cho Home */}
        <Route path="/" element={<Home />} />
        <Route path="/Bookkeeping" element={<Home_Bookkeeping />} />
        <Route path="/English" element={<Home_English />} />

        {/* 2_main Khai báo đường dẫn path cho Mr. Bee Osn */}
        <Route path="/mrbeeosn" element={<MrBeeOsn />} />

        {/* 2_main Khai báo đường dẫn path cho Bookkeeping */}
        <Route path="/bookkeeping/what-is-bookkeeping?" element={<Bookkeeping />} />


        {/* 2_main Khai báo đường dẫn path cho English */}
        <Route path="/english/what-is-the-english-language?" element={<The_English_Language />} />

      </Route>

    </Routes>

  );
}