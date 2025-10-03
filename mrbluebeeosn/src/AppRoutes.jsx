import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Posts from './posts/Posts';

// 1_header import các chức năng và đường dẫn
import Home from "./1_header/Home";
import SearchIndex from "./1_header/SearchIndex";

// 2_main import các chức năng và đường dẫn
import MrBeeOsn from "./2_main/msbeeosn/MrBeeOsn";

// 2_main import các chức năng và đường dẫn Bookkeeping

  // 1. Bookkeeping
  import BookkeepingIndex from "./2_main/bookkeeping/_indexes/BookkeepingIndex";
  import Bookkeeping from "./2_main/bookkeeping/Bookkeeping";
  import Bookkeeper from "./2_main/bookkeeping/Bookkeeper";
  import AccountsReceivable from "./2_main/bookkeeping/AccountsReceivable";
  import AccountsPayable from "./2_main/bookkeeping/AccountsPayable";
  import JournalEntry from "./2_main/bookkeeping/JournalEntry";
  import GeneralLedger from "./2_main/bookkeeping/GeneralLedger";
  import TrialBalance from "./2_main/bookkeeping/TrialBalance";
  import AccountReconciliation from "./2_main/bookkeeping/AccountReconciliation";
  

// 2_main import các chức năng và đường dẫn

  // Mr.Bee Osn English Terms
  import SearchingAndClickableDictionary from "./2_main/english/mrbeeenglish/SearchingAndClickableDictionary";

  // 1. English
  import EnglishIndex from "./2_main/english/_indexes/EnglishIndex";
  import English from "./2_main/english/English";
  import TheEnglishLanguage from "./2_main/english/TheEnglishLanguage";

  // 2. Grammar
  import GrammarIndex from "./2_main/english/_indexes/GrammarIndex";
  import Adverb from "./2_main/english/grammar/Adverb";
  import Verb from "./2_main/english/grammar/Verb";
  import Adjective from "./2_main/english/grammar/Adjective";
  import Noun from "./2_main/english/grammar/Noun";
  
  // 3. Pronunciation
  import PronunciationIndex from "./2_main/english/_indexes/PronunciationIndex";
  import Pronunciation from "./2_main/english/pronunciation/Pronunciation";
  import IPA from "./2_main/english/pronunciation/IPA";

  // 4. Tiếng Anh
  import TiengAnhIndex from "./2_main/english/_indexes/TiengAnhIndex";
  import BayDauPhuPhienAmTiengAnh1 from "./2_main/english/tienganh/BayDauPhuPhienAmTiengAnh1";
  import BayDauPhuPhienAmTiengAnh2 from "./2_main/english/tienganh/BayDauPhuPhienAmTiengAnh2";
  import NguyenAmDon from "./2_main/english/tienganh/NguyenAmDon";
  import NguyenAmDoi from "./2_main/english/tienganh/NguyenAmDoi";
  
  // 5. Vocabulary - Tính chính xác
  import VocabularyIndex from "./2_main/english/_indexes/VocabularyIndex";
  import Accurately1 from "./2_main/english/vocabulary/Accurately1";
  import Accurately2 from "./2_main/english/vocabulary/Accurately2";
  import Precisely1 from "./2_main/english/vocabulary/Precisely1";
  import Precisely2 from "./2_main/english/vocabulary/Precisely2";
  import Correctly1 from "./2_main/english/vocabulary/Correctly1";
  import Correctly2 from "./2_main/english/vocabulary/Correctly2";
  import Exactly1 from "./2_main/english/vocabulary/Exactly1";
  import Exactly2 from "./2_main/english/vocabulary/Exactly2";

  // 6. Vocabulary - Tính tỉ mỉ
  import Painstakingly1 from "./2_main/english/vocabulary/Painstakingly1";
  import Painstakingly2 from "./2_main/english/vocabulary/Painstakingly2";
  import Thoroughly1 from "./2_main/english/vocabulary/Thoroughly1";
  import Thoroughly2 from "./2_main/english/vocabulary/Thoroughly2";
  import Diligently1 from "./2_main/english/vocabulary/Diligently1";
  import Diligently2 from "./2_main/english/vocabulary/Diligently2";
  import Scrupulously1 from "./2_main/english/vocabulary/Scrupulously1";
  import Scrupulously2 from "./2_main/english/vocabulary/Scrupulously2";


// Xuất khẩu chức năng
export default function AppRoutes() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>
      <Route path="/:slug" element={<Posts />} />
      <Route path="/:category" element={<Posts />} />

        {/* 2_main Khai báo đường dẫn path cho Home */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchIndex />} />

        {/* 2_main Khai báo đường dẫn path cho Mr. Bee Osn */}
        <Route path="/mrbeeosn" element={<MrBeeOsn />} />

        {/* 2_main Khai báo đường dẫn path cho Bookkeeping */}

          {/* 1. Bookkeeping */}
          <Route path="/bookkeeping" element={<BookkeepingIndex />} />
          <Route path="/bookkeeping/what-is-bookkeeping?" element={<Bookkeeping />} />
          <Route path="/bookkeeping/what-is-a-bookkeeper?" element={<Bookkeeper />} />
          <Route path="/bookkeeping/what-is-accounts-receivable?" element={<AccountsReceivable />} />
          <Route path="/bookkeeping/what-is-accounts-payable?" element={<AccountsPayable />} />
          <Route path="/bookkeeping/what-is-a-journal-entry?" element={<JournalEntry />} />
          <Route path="/bookkeeping/what-is-a-general-ledger?" element={<GeneralLedger />} />
          <Route path="/bookkeeping/what-is-a-trial-balance?" element={<TrialBalance />} />
          <Route path="/bookkeeping/what-is-account-reconciliation?" element={<AccountReconciliation />} />


        {/* 2_main Khai báo đường dẫn path cho English */}

          {/* Mr.Bee Osn English Terms */}
          <Route path="/mrbeeenglish/searching-and-clickable-dictionary" element={<SearchingAndClickableDictionary />} />
          
          {/* 1. English */}
          <Route path="/english" element={<EnglishIndex />} />
          <Route path="/english/what-is-english?" element={<English />} />
          <Route path="/english/what-is-the-english-language?" element={<TheEnglishLanguage />} />

          {/* 2. Grammar */}
          <Route path="/grammar" element={<GrammarIndex />} />
          <Route path="/grammar/what-is-an-adverb?" element={<Adverb />} />
          <Route path="/grammar/what-is-a-verb?" element={<Verb />} />
          <Route path="/grammar/what-is-an-adjective?" element={<Adjective />} />
          <Route path="/grammar/what-is-a-noun?" element={<Noun />} />
          
          {/* 3. Pronunciation */}
          <Route path="/pronunciation" element={<PronunciationIndex />} />
          <Route path="/pronunciation/what-is-pronunciation?" element={<Pronunciation />} />
          <Route path="/pronunciation/what-is-IPA?" element={<IPA />} />
          
          {/* 4. Tiếng Anh */}
          <Route path="/tieng-anh" element={<TiengAnhIndex />} />
          <Route path="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1" element={<BayDauPhuPhienAmTiengAnh1 />} />
          <Route path="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-2" element={<BayDauPhuPhienAmTiengAnh2 />} />
          <Route path="/tieng-anh/nguyen-am-don" element={<NguyenAmDon />} />
          <Route path="/tieng-anh/nguyen-am-doi" element={<NguyenAmDoi />} />

          {/* 5. Vocabulary - Tính chính xác */}
          <Route path="/vocabulary" element={<VocabularyIndex />} />
          <Route path="/vocabulary/accurately-1" element={<Accurately1 />} />
          <Route path="/vocabulary/accurately-2" element={<Accurately2 />} />
          <Route path="/vocabulary/precisely-1" element={<Precisely1 />} />
          <Route path="/vocabulary/precisely-2" element={<Precisely2 />} />
          <Route path="/vocabulary/correctly-1" element={<Correctly1 />} />
          <Route path="/vocabulary/correctly-2" element={<Correctly2 />} />
          <Route path="/vocabulary/exactly-1" element={<Exactly1 />} />
          <Route path="/vocabulary/exactly-2" element={<Exactly2 />} />

          {/* 6. Vocabulary - Tính tỉ mỉ */}
          <Route path="/vocabulary/painstakingly-1" element={<Painstakingly1 />} />
          <Route path="/vocabulary/painstakingly-2" element={<Painstakingly2 />} />
          <Route path="/vocabulary/thoroughly-1" element={<Thoroughly1 />} />
          <Route path="/vocabulary/thoroughly-2" element={<Thoroughly2 />} />
          <Route path="/vocabulary/diligently-1" element={<Diligently1 />} />
          <Route path="/vocabulary/diligently-2" element={<Diligently2 />} />
          <Route path="/vocabulary/scrupulously-1" element={<Scrupulously1 />} />
          <Route path="/vocabulary/scrupulously-2" element={<Scrupulously2 />} />

      </Route>

    </Routes>

  );
}