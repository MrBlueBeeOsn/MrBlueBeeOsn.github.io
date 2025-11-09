// import  from "";
// const  = lazy(() => import(''))
// <Suspense fallback={<></>}></Suspense>

import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('@/components/Layout'));
const Posts = lazy(() => import('@/data/Posts'));

// 1_header import các chức năng và đường dẫn
  const Home = lazy(() => import('@/1_header/Home'));
  const SearchIndex = lazy(() => import('@/1_header/SearchIndex'));

// 2_main import các chức năng và đường dẫn
  const MrBeeOsn = lazy(() => import('@/2_main/msbeeosn/MrBeeOsn'));
  const AboutIndex = lazy(() => import('@/2_main/msbeeosn/_indexes/AboutIndex'));
  const ProjectIndex = lazy(() => import('@/2_main/msbeeosn/_indexes/ProjectIndex'));
  const JourneyIndex = lazy(() => import('@/2_main/msbeeosn/_indexes/JourneyIndex'));
  const ContactIndex = lazy(() => import('@/2_main/msbeeosn/_indexes/ContactIndex'));

// 2_main import các chức năng và đường dẫn Bookkeeping

  // 1. Bookkeeping
  const BookkeepingIndex = lazy(() => import('@/2_main/bookkeeping/_indexes/BookkeepingIndex'));
  const Bookkeeping = lazy(() => import('@/2_main/bookkeeping/Bookkeeping'));
  const Bookkeeper = lazy(() => import('@/2_main/bookkeeping/Bookkeeper'));
  const AccountsReceivable = lazy(() => import('@/2_main/bookkeeping/AccountsReceivable'));
  const AccountsPayable = lazy(() => import('@/2_main/bookkeeping/AccountsPayable'));
  const JournalEntry = lazy(() => import('@/2_main/bookkeeping/JournalEntry'));
  const GeneralLedger = lazy(() => import('@/2_main/bookkeeping/GeneralLedger'));
  const TrialBalance = lazy(() => import('@/2_main/bookkeeping/TrialBalance'));
  const AccountReconciliation = lazy(() => import('@/2_main/bookkeeping/AccountReconciliation'));

// 2_main import các chức năng và đường dẫn

  // Mr.Bee Osn English Terms
  const SearchingAndClickableDictionary = lazy(() => import('@/2_main/english/mrbeeenglish/SearchingAndClickableDictionary'));

  // 1. English
  const EnglishIndex = lazy(() => import('@/2_main/english/_indexes/EnglishIndex'));
  const English = lazy(() => import('@/2_main/english/English'));
  const TheEnglishLanguage = lazy(() => import('@/2_main/english/TheEnglishLanguage'));
  const EnglishTeacher = lazy(() => import('@/2_main/english/EnglishTeacher'));

  // 2. Grammar
  const GrammarIndex = lazy(() => import('@/2_main/english/_indexes/GrammarIndex'));
  const Adverb = lazy(() => import('@/2_main/english/grammar/Adverb'));
  const Verb = lazy(() => import('@/2_main/english/grammar/Verb'));
  const Adjective = lazy(() => import('@/2_main/english/grammar/Adjective'));
  const Noun = lazy(() => import('@/2_main/english/grammar/Noun'));
  
  // 3. Pronunciation
  const PronunciationIndex = lazy(() => import('@/2_main/english/_indexes/PronunciationIndex'));
  const Pronunciation = lazy(() => import('@/2_main/english/pronunciation/Pronunciation'));
  const IPA = lazy(() => import('@/2_main/english/pronunciation/IPA'));

  // 4. Tiếng Anh
  const TiengAnhIndex = lazy(() => import('@/2_main/english/_indexes/TiengAnhIndex'));
  const BayDauPhuPhienAmTiengAnh1 = lazy(() => import('@/2_main/english/tienganh/BayDauPhuPhienAmTiengAnh1'));
  const BayDauPhuPhienAmTiengAnh2 = lazy(() => import('@/2_main/english/tienganh/BayDauPhuPhienAmTiengAnh2'));
  const NguyenAmDon = lazy(() => import('@/2_main/english/tienganh/NguyenAmDon'));
  const NguyenAmDoi = lazy(() => import('@/2_main/english/tienganh/NguyenAmDoi'));
  const DichCumDanhTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/DichCumDanhTuTiengAnh'));
  const DichCumDongTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/DichCumDongTuTiengAnh'));
  const DichCauHoiTiengAnh = lazy(() => import('@/2_main/english/tienganh/DichCauHoiTiengAnh'));
  const GiaoVienTiengAnh = lazy(() => import('@/2_main/english/tienganh/GiaoVienTiengAnh'));
  
  // 5. Vocabulary - Tính chính xác
  const VocabularyIndex = lazy(() => import('@/2_main/english/_indexes/VocabularyIndex'));
  const Accurately1 = lazy(() => import('@/2_main/english/vocabulary/Accurately1'));
  const Accurately2 = lazy(() => import('@/2_main/english/vocabulary/Accurately2'));
  const Precisely1 = lazy(() => import('@/2_main/english/vocabulary/Precisely1'));
  const Precisely2 = lazy(() => import('@/2_main/english/vocabulary/Precisely2'));
  const Correctly1 = lazy(() => import('@/2_main/english/vocabulary/Correctly1'));
  const Correctly2 = lazy(() => import('@/2_main/english/vocabulary/Correctly2'));
  const Exactly1 = lazy(() => import('@/2_main/english/vocabulary/Exactly1'));
  const Exactly2 = lazy(() => import('@/2_main/english/vocabulary/Exactly2'));

  // 5. Vocabulary - Tính tỉ mỉ
  const Painstakingly1 = lazy(() => import('@/2_main/english/vocabulary/Painstakingly1'));
  const Painstakingly2 = lazy(() => import('@/2_main/english/vocabulary/Painstakingly2'));
  const Thoroughly1 = lazy(() => import('@/2_main/english/vocabulary/Thoroughly1'));
  const Thoroughly2 = lazy(() => import('@/2_main/english/vocabulary/Thoroughly2'));
  const Diligently1 = lazy(() => import('@/2_main/english/vocabulary/Diligently1'));
  const Diligently2 = lazy(() => import('@/2_main/english/vocabulary/Diligently2'));
  const Scrupulously1 = lazy(() => import('@/2_main/english/vocabulary/Scrupulously1'));
  const Scrupulously2 = lazy(() => import('@/2_main/english/vocabulary/Scrupulously2'));

  // 5. Vocabulary - Tính rõ ràng
  const Clearly1 = lazy(() => import('@/2_main/english/vocabulary/Clearly1'));
  const Clearly2 = lazy(() => import('@/2_main/english/vocabulary/Clearly2'));
  const Obviously1 = lazy(() => import('@/2_main/english/vocabulary/Obviously1'));
  const Obviously2 = lazy(() => import('@/2_main/english/vocabulary/Obviously2'));
  const Evidently1 = lazy(() => import('@/2_main/english/vocabulary/Evidently1'));
  const Evidently2 = lazy(() => import('@/2_main/english/vocabulary/Evidently2'));
  const Visibly1 = lazy(() => import('@/2_main/english/vocabulary/Visibly1'));
  const Visibly2 = lazy(() => import('@/2_main/english/vocabulary/Visibly2'));

  // 6. Vocabulary - Tính xác thực
  const Actually1 = lazy(() => import('@/2_main/english/vocabulary/Actually1'));
  const Actually2 = lazy(() => import('@/2_main/english/vocabulary/Actually2'));
  const Truly1 = lazy(() => import('@/2_main/english/vocabulary/Truly1'));
  const Truly2 = lazy(() => import('@/2_main/english/vocabulary/Truly2'));
  const Really1 = lazy(() => import('@/2_main/english/vocabulary/Really1'));
  const Really2 = lazy(() => import('@/2_main/english/vocabulary/Really2'));
  const Genuinely1 = lazy(() => import('@/2_main/english/vocabulary/Genuinely1'));
  const Genuinely2 = lazy(() => import('@/2_main/english/vocabulary/Genuinely2'));

  // 6. Vocabulary - Tính chắc chắn
  const Certainly1 = lazy(() => import('@/2_main/english/vocabulary/Certainly1'));
  const Certainly2 = lazy(() => import('@/2_main/english/vocabulary/Certainly2'));
  const Definitely1 = lazy(() => import('@/2_main/english/vocabulary/Definitely1'));
  const Definitely2 = lazy(() => import('@/2_main/english/vocabulary/Definitely2'));
  const Absolutely1 = lazy(() => import('@/2_main/english/vocabulary/Absolutely1'));
  const Absolutely2 = lazy(() => import('@/2_main/english/vocabulary/Absolutely2'));
  const Surely1 = lazy(() => import('@/2_main/english/vocabulary/Surely1'));
  const Surely2 = lazy(() => import('@/2_main/english/vocabulary/Surely2'));

  // 7. Vocabulary - Thời gian lặp lại
  const Often1 = lazy(() => import('@/2_main/english/vocabulary/Often1'));
  const Often2 = lazy(() => import('@/2_main/english/vocabulary/Often2'));

// 3. Test Tailwind
	const TestTailwind = lazy(() => import('@/components/TestTailwind'));


// Xuất khẩu chức năng
export default function AppRoutes(): React.JSX.Element {
  return (

  <Suspense fallback={<></>}>

    <Routes>

      <Route path="/" element={<Layout />}>

        <Route path="/:slug" element={<Posts />} />
        <Route path="/:category" element={<Posts />} />

        {/* 2_main Khai báo đường dẫn path cho Home */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchIndex />} />

        {/* 2_main Khai báo đường dẫn path cho Mr. Bee Osn */}
        <Route path="/mrbeeosn" element={<MrBeeOsn />} />
        <Route path="/about" element={<AboutIndex />} />
        <Route path="/project" element={<ProjectIndex />} />
        <Route path="/journey" element={<JourneyIndex />} />
        <Route path="/contact" element={<ContactIndex />} />

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
          <Route path="/english/what-is-an-english-teacher?" element={<EnglishTeacher />} />

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
          <Route path="/tieng-anh/huong-dan-dich-cum-danh-tu-tieng-anh" element={<DichCumDanhTuTiengAnh />} />
          <Route path="/tieng-anh/huong-dan-dich-cum-dong-tu-tieng-anh" element={<DichCumDongTuTiengAnh />} />
          <Route path="/tieng-anh/huong-dan-dich-cau-hoi-tieng-anh" element={<DichCauHoiTiengAnh />} />
          <Route path="/tieng-anh/giao-vien-tieng-anh-la-gi?" element={<GiaoVienTiengAnh />} />

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

          {/* 5. Vocabulary - Tính tỉ mỉ */}
          <Route path="/vocabulary/painstakingly-1" element={<Painstakingly1 />} />
          <Route path="/vocabulary/painstakingly-2" element={<Painstakingly2 />} />
          <Route path="/vocabulary/thoroughly-1" element={<Thoroughly1 />} />
          <Route path="/vocabulary/thoroughly-2" element={<Thoroughly2 />} />
          <Route path="/vocabulary/diligently-1" element={<Diligently1 />} />
          <Route path="/vocabulary/diligently-2" element={<Diligently2 />} />
          <Route path="/vocabulary/scrupulously-1" element={<Scrupulously1 />} />
          <Route path="/vocabulary/scrupulously-2" element={<Scrupulously2 />} />

          {/* 5. Vocabulary - Tính rõ ràng */}
          <Route path="/vocabulary/clearly-1" element={<Clearly1 />} />
          <Route path="/vocabulary/clearly-2" element={<Clearly2 />} />
          <Route path="/vocabulary/obviously-1" element={<Obviously1 />} />
          <Route path="/vocabulary/obviously-2" element={<Obviously2 />} />
          <Route path="/vocabulary/evidently-1" element={<Evidently1 />} />
          <Route path="/vocabulary/evidently-2" element={<Evidently2 />} />
          <Route path="/vocabulary/visibly-1" element={<Visibly1 />} />
          <Route path="/vocabulary/visibly-2" element={<Visibly2 />} />

          {/* 6. Vocabulary - Tính xác thực */}
          <Route path="/vocabulary/actually-1" element={<Actually1 />} />
          <Route path="/vocabulary/actually-2" element={<Actually2 />} />
          <Route path="/vocabulary/truly-1" element={<Truly1 />} />
          <Route path="/vocabulary/truly-2" element={<Truly2 />} />
          <Route path="/vocabulary/really-1" element={<Really1 />} />
          <Route path="/vocabulary/really-2" element={<Really2 />} />
          <Route path="/vocabulary/genuinely-1" element={<Genuinely1 />} />
          <Route path="/vocabulary/genuinely-2" element={<Genuinely2 />} />

          {/* 7. Vocabulary - Tính chắc chắn */}
          <Route path="/vocabulary/certainly-1" element={<Certainly1 />} />
          <Route path="/vocabulary/certainly-2" element={<Certainly2 />} />
          <Route path="/vocabulary/definitely-1" element={<Definitely1 />} />
          <Route path="/vocabulary/definitely-2" element={<Definitely2 />} />
          <Route path="/vocabulary/absolutely-1" element={<Absolutely1 />} />
          <Route path="/vocabulary/absolutely-2" element={<Absolutely2 />} />
          <Route path="/vocabulary/surely-1" element={<Surely1 />} />
          <Route path="/vocabulary/surely-2" element={<Surely2 />} />

          {/* 8. Vocabulary - Thời gian lặp lại */}
          <Route path="/vocabulary/often-1" element={<Often1 />} />
          <Route path="/vocabulary/often-2" element={<Often2 />} />

          {/* 3. Test Tailwind */}
					<Route path="/tailwindcss/test-tailwind" element={<TestTailwind />} />

      </Route>

    </Routes>

  </Suspense>

  );
}