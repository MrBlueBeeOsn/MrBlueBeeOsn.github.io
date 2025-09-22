import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// 1_header import các chức năng và đường dẫn
import Home from "./1_header/Home";
import Home_Bookkeeping from "./1_header/Home_Bookkeeping";
import Home_English from "./1_header/Home_English";

// 2_main import các chức năng và đường dẫn
import Mr_Bee_Osn from "./2_main/msbeeosn/Mr_Bee_Osn";

// 2_main import các chức năng và đường dẫn Bookkeeping

  // 1. Bookkeeping
  import Bookkeeping from "./2_main/bookkeeping/Bookkeeping";
  import Bookkeeper from "./2_main/bookkeeping/Bookkeeper";
  import Accounts_Receivable from "./2_main/bookkeeping/Accounts_Receivable";
  import Accounts_Payable from "./2_main/bookkeeping/Accounts_Payable";
  import Journal_Entry from "./2_main/bookkeeping/Journal_Entry";
  import General_Ledger from "./2_main/bookkeeping/General_Ledger";
  import Trial_Balance from "./2_main/bookkeeping/Trial_Balance";
  import Account_Reconciliation from "./2_main/bookkeeping/Account_Reconciliation";
  

// 2_main import các chức năng và đường dẫn

  // 1. English
  import English from "./2_main/english/English";
  import The_English_Language from "./2_main/english/The_English_Language";

  // 2. Grammar
  import Adverb from "./2_main/english/grammar/Adverb";
  import Verb from "./2_main/english/grammar/Verb";
  import Adjective from "./2_main/english/grammar/Adjective";
  import Noun from "./2_main/english/grammar/Noun";
  
  // 3. Pronunciation
  import Pronunciation from "./2_main/english/pronunciation/Pronunciation";
  import IPA from "./2_main/english/pronunciation/IPA";
  
  // 4. Mr.Bee Osn English Terms
  import Searching_And_Clickable_Dictionary from "./2_main/english/mrbeeenglish/Searching_And_Clickable_Dictionary";

  // 5. Tiếng Anh
  import Bay_Dau_Phu_Phien_Am_Tieng_Anh_1 from "./2_main/english/tienganh/Bay_Dau_Phu_Phien_Am_Tieng_Anh_1";
  import Bay_Dau_Phu_Phien_Am_Tieng_Anh_2 from "./2_main/english/tienganh/Bay_Dau_Phu_Phien_Am_Tieng_Anh_2";
  import Nguyen_Am_Don from "./2_main/english/tienganh/Nguyen_Am_Don";
  import Nguyen_Am_Doi from "./2_main/english/tienganh/Nguyen_Am_Doi";
  
  // 6. Vocabulary - Tính chính xác
  import Accurately_1 from "./2_main/english/vocabulary/Accurately_1";
  import Accurately_2 from "./2_main/english/vocabulary/Accurately_2";
  import Precisely_1 from "./2_main/english/vocabulary/Precisely_1";
  import Precisely_2 from "./2_main/english/vocabulary/Precisely_2";
  import Correctly_1 from "./2_main/english/vocabulary/Correctly_1";
  import Correctly_2 from "./2_main/english/vocabulary/Correctly_2";
  import Exactly_1 from "./2_main/english/vocabulary/Exactly_1";
  import Exactly_2 from "./2_main/english/vocabulary/Exactly_2";

  // 6. Vocabulary - Tính tỉ mỉ
  import Painstakingly_1 from "./2_main/english/vocabulary/Painstakingly_1";
  import Painstakingly_2 from "./2_main/english/vocabulary/Painstakingly_2";
  import Thoroughly_1 from "./2_main/english/vocabulary/Thoroughly_1";
  import Thoroughly_2 from "./2_main/english/vocabulary/Thoroughly_2";
  import Diligently_1 from "./2_main/english/vocabulary/Diligently_1";
  import Diligently_2 from "./2_main/english/vocabulary/Diligently_2";
  import Scrupulously_1 from "./2_main/english/vocabulary/Scrupulously_1";
  import Scrupulously_2 from "./2_main/english/vocabulary/Scrupulously_2";


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
        <Route path="/mrbeeosn" element={<Mr_Bee_Osn />} />

        {/* 2_main Khai báo đường dẫn path cho Bookkeeping */}

          {/* 1. Bookkeeping */}
          <Route path="/bookkeeping/what-is-bookkeeping?" element={<Bookkeeping />} />
          <Route path="/bookkeeping/what-is-a-bookkeeper?" element={<Bookkeeper />} />
          <Route path="/bookkeeping/what-is-accounts-receivable?" element={<Accounts_Receivable />} />
          <Route path="/bookkeeping/what-is-accounts-payable?" element={<Accounts_Payable />} />
          <Route path="/bookkeeping/what-is-a-journal-entry?" element={<Journal_Entry />} />
          <Route path="/bookkeeping/what-is-a-general-ledger?" element={<General_Ledger />} />
          <Route path="/bookkeeping/what-is-a-trial-balance?" element={<Trial_Balance />} />
          <Route path="/bookkeeping/what-is-account-reconciliation?" element={<Account_Reconciliation />} />


        {/* 2_main Khai báo đường dẫn path cho English */}

          {/* 1. English */}
          <Route path="/english/what-is-english?" element={<English />} />
          <Route path="/english/what-is-the-english-language?" element={<The_English_Language />} />

          {/* 2. Grammar */}
          <Route path="/english/grammar/what-is-an-adverb?" element={<Adverb />} />
          <Route path="/english/grammar/what-is-a-verb?" element={<Verb />} />
          <Route path="/english/grammar/what-is-an-adjective?" element={<Adjective />} />
          <Route path="/english/grammar/what-is-a-noun?" element={<Noun />} />
          
          {/* 3. Pronunciation */}
          <Route path="/english/pronunciation/what-is-pronunciation?" element={<Pronunciation />} />
          <Route path="/english/pronunciation/what-is-IPA?" element={<IPA />} />
          
          {/* 4. Mr.Bee Osn English Terms */}
          <Route path="/english/mrbeeenglish/searching-and-clickable-dictionary?" element={<Searching_And_Clickable_Dictionary />} />
          
          {/* 5. Tiếng Anh */}
          <Route path="/english/tienganh/he-thong-7-dau-phu-phien-am-tieng-anh-1?" element={<Bay_Dau_Phu_Phien_Am_Tieng_Anh_1 />} />
          <Route path="/english/tienganh/he-thong-7-dau-phu-phien-am-tieng-anh-2" element={<Bay_Dau_Phu_Phien_Am_Tieng_Anh_2 />} />
          <Route path="/english/tienganh/nguyen-am-don?" element={<Nguyen_Am_Don />} />
          <Route path="/english/tienganh/nguyen-am-doi?" element={<Nguyen_Am_Doi />} />

          {/* 6. Vocabulary - Tính chính xác */}
          <Route path="/english/vocabulary/accurately-1?" element={<Accurately_1 />} />
          <Route path="/english/vocabulary/accurately-2?" element={<Accurately_2 />} />
          <Route path="/english/vocabulary/precisely-1?" element={<Precisely_1 />} />
          <Route path="/english/vocabulary/precisely-2?" element={<Precisely_2 />} />
          <Route path="/english/vocabulary/correctly-1?" element={<Correctly_1 />} />
          <Route path="/english/vocabulary/correctly-2?" element={<Correctly_2 />} />
          <Route path="/english/vocabulary/exactly-1?" element={<Exactly_1 />} />
          <Route path="/english/vocabulary/exactly-2?" element={<Exactly_2 />} />

          {/* 6. Vocabulary - Tính tỉ mỉ */}
          <Route path="/english/vocabulary/painstakingly-1?" element={<Painstakingly_1 />} />
          <Route path="/english/vocabulary/painstakingly-2?" element={<Painstakingly_2 />} />
          <Route path="/english/vocabulary/thoroughly-1?" element={<Thoroughly_1 />} />
          <Route path="/english/vocabulary/thoroughly-2?" element={<Thoroughly_2 />} />
          <Route path="/english/vocabulary/diligently-1?" element={<Diligently_1 />} />
          <Route path="/english/vocabulary/diligently-2?" element={<Diligently_2 />} />
          <Route path="/english/vocabulary/scrupulously-1?" element={<Scrupulously_1 />} />
          <Route path="/english/vocabulary/scrupulously-2?" element={<Scrupulously_2 />} />

      </Route>

    </Routes>

  );
}