// import  from "";
// const  = lazy(() => import(''))
// <Suspense fallback={<></>}></Suspense>

import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('@/components/body/Layout'));
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
  const VietCumDanhTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/VietCumDanhTuTiengAnh'))
  const DichCumDongTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/DichCumDongTuTiengAnh'));
  const VietCumDongTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/VietCumDongTuTiengAnh'));
  const DichCauHoiTiengAnh = lazy(() => import('@/2_main/english/tienganh/DichCauHoiTiengAnh'));
  const GiaoVienTiengAnh = lazy(() => import('@/2_main/english/tienganh/GiaoVienTiengAnh'));
  
  // 5. Vocabulary - Tính chính xác
  const VocabularyIndex = lazy(() => import('@/2_main/english/_indexes/VocabularyIndex'));
  const Accurately1 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/Accurately1'));
  const Accurately2 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/Accurately2'));
  const Precisely1 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/Precisely1'));
  const Precisely2 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/Precisely2'));
  const Correctly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/Correctly1'));
  const Correctly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/Correctly2'));
  const Exactly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/Exactly1'));
  const Exactly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/Exactly2'));

  // 5. Vocabulary - Tính tỉ mỉ
  const Painstakingly1 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/Painstakingly1'));
  const Painstakingly2 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/Painstakingly2'));
  const Thoroughly1 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/Thoroughly1'));
  const Thoroughly2 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/Thoroughly2'));
  const Diligently1 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/Diligently1'));
  const Diligently2 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/Diligently2'));
  const Scrupulously1 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/Scrupulously1'));
  const Scrupulously2 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/Scrupulously2'));

  // 5. Vocabulary - Tính rõ ràng
  const Clearly1 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/Clearly1'));
  const Clearly2 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/Clearly2'));
  const Obviously1 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/Obviously1'));
  const Obviously2 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/Obviously2'));
  const Evidently1 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/Evidently1'));
  const Evidently2 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/Evidently2'));
  const Visibly1 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/Visibly1'));
  const Visibly2 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/Visibly2'));

  // 6. Vocabulary - Tính xác thực
  const Actually1 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/Actually1'));
  const Actually2 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/Actually2'));
  const Truly1 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/Truly1'));
  const Truly2 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/Truly2'));
  const Really1 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/Really1'));
  const Really2 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/Really2'));
  const Genuinely1 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/Genuinely1'));
  const Genuinely2 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/Genuinely2'));

  // 7. Vocabulary - Tính chắc chắn
  const Certainly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/Certainly1'));
  const Certainly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/Certainly2'));
  const Definitely1 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/Definitely1'));
  const Definitely2 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/Definitely2'));
  const Absolutely1 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/Absolutely1'));
  const Absolutely2 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/Absolutely2'));
  const Surely1 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/Surely1'));
  const Surely2 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/Surely2'));

  // 8. Vocabulary - Tính lặp lại
  const Again1 = lazy(() => import('@/2_main/english/vocabulary/tinhlaplai/Again1'));
  const Again2 = lazy(() => import('@/2_main/english/vocabulary/tinhlaplai/Again2'));
  const Often1 = lazy(() => import('@/2_main/english/vocabulary/tinhlaplai/Often1'));
  const Often2 = lazy(() => import('@/2_main/english/vocabulary/tinhlaplai/Often2'));
  const Repeatedly1 = lazy(() => import('@/2_main/english/vocabulary/tinhlaplai/Repeatedly1'));
  const Repeatedly2 = lazy(() => import('@/2_main/english/vocabulary/tinhlaplai/Repeatedly2'));
  const Frequently1 = lazy(() => import('@/2_main/english/vocabulary/tinhlaplai/Frequently1'));
  const Frequently2 = lazy(() => import('@/2_main/english/vocabulary/tinhlaplai/Frequently2'));

  // 9. Vocabulary - Tính hiếm
  const Seldom1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/Seldom1'));
  const Seldom2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/Seldom2'));
  const Sometimes1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/Sometimes1'));
  const Sometimes2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/Sometimes2'));
  const Rarely1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/Rarely1'));
  const Rarely2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/Rarely2'));
  const Occasionally1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/Occasionally1'));
  const Occasionally2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/Occasionally2'));

  // 10. Vocabulary - Tính liên tục
  const Always1 = lazy(() => import('@/2_main/english/vocabulary/co/Always1'));
  const Always2 = lazy(() => import('@/2_main/english/vocabulary/co/Always2'));
  const Yes1 = lazy(() => import('@/2_main/english/vocabulary/co/Yes1'));
  const Yes2 = lazy(() => import('@/2_main/english/vocabulary/co/Yes2'));
  const Ever1 = lazy(() => import('@/2_main/english/vocabulary/co/Ever1'));
  const Ever2 = lazy(() => import('@/2_main/english/vocabulary/co/Ever2'));

  // 11. Vocabulary - Tính không liên tục
  const No1 = lazy(() => import('@/2_main/english/vocabulary/khong/No1'));
  const No2 = lazy(() => import('@/2_main/english/vocabulary/khong/No2'));
  const Not1 = lazy(() => import('@/2_main/english/vocabulary/khong/Not1'));
  const Not2 = lazy(() => import('@/2_main/english/vocabulary/khong/Not2'));
  const Never1 = lazy(() => import('@/2_main/english/vocabulary/khong/Never1'));
  const Never2 = lazy(() => import('@/2_main/english/vocabulary/khong/Never2'));

  // 12. Vocabulary - Mức độ cao
  const So1 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/So1'));
  const So2 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/So2'));
  const Very1 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Very1'));
  const Very2 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Very2'));
  const Extremely1 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Extremely1'));
  const Extremely2 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Extremely2'));
  const Highly1 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Highly1'));
  const Highly2 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Highly2'));
  const Greatly1 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Greatly1'));
  const Greatly2 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Greatly2'));

  // 13. Vocabulary - Không chắc chắn
  const Maybe1 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Maybe1'));
  const Maybe2 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Maybe2'));
  const Perhaps1 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Perhaps1'));
  const Perhaps2 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Perhaps2'));
  const Possibly1 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Possibly1'));
  const Possibly2 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Possibly2'));
  const Questionably1 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Questionably1'));
  const Questionably2 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Questionably2'));
  const Probably1 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Probably1'));
  const Probably2 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Probably2'));
  const Apparently1 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Apparently1'));
  const Apparently2 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Apparently2'));

  // 14. Vocabulary - Thời gian hiện tại
  const Now1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/Now1'));
  const Now2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/Now2'));
  const Today1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/Today1'));
  const Today2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/Today2'));
  const Currently1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/Currently1'));
  const Currently2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/Currently2'));
  const Presently1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/Presently1'));
  const Presently2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/Presently2'));

  // 15. Vocabulary - Thời gian tương lai
  const Soon1 = lazy(() => import('@/2_main/english/vocabulary/thoigiantuonglai/Soon1'));
  const Soon2 = lazy(() => import('@/2_main/english/vocabulary/thoigiantuonglai/Soon2'));
  const Tomorrow1 = lazy(() => import('@/2_main/english/vocabulary/thoigiantuonglai/Tomorrow1'));
  const Tomorrow2 = lazy(() => import('@/2_main/english/vocabulary/thoigiantuonglai/Tomorrow2'));

  // 16. Vocabulary - Tính chân thành
  const Sincerely1 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/Sincerely1'));
  const Sincerely2 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/Sincerely2'));
  const Honestly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/Honestly1'));
  const Honestly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/Honestly2'));
  const Faithfully1 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/Faithfully1'));
  const Faithfully2 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/Faithfully2'));
  const Openly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/Openly1'));
  const Openly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/Openly2'));

  // 16. Vocabulary - Điểm nhấn đặc biệt
  const Especially1 = lazy(() => import('@/2_main/english/vocabulary/diemnhandacbiet/Especially1'));
  const Especially2 = lazy(() => import('@/2_main/english/vocabulary/diemnhandacbiet/Especially2'));
  const Particularly1 = lazy(() => import('@/2_main/english/vocabulary/diemnhandacbiet/Particularly1'));
  const Particularly2 = lazy(() => import('@/2_main/english/vocabulary/diemnhandacbiet/Particularly2'));

  // 17. Vocabulary - Về cơ bản
  const Basically1 = lazy(() => import('@/2_main/english/vocabulary/vecoban/Basically1'));
  const Basically2 = lazy(() => import('@/2_main/english/vocabulary/vecoban/Basically2'));

// 3. Test Tailwind
	const TestTailwind = lazy(() => import('@/components/test/TestTailwind'));


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
          <Route path="/tieng-anh/huong-dan-viet-cum-danh-tu-tieng-anh" element={<VietCumDanhTuTiengAnh />} />
          <Route path="/tieng-anh/huong-dan-dich-cum-dong-tu-tieng-anh" element={<DichCumDongTuTiengAnh />} />
          <Route path="/tieng-anh/huong-dan-viet-cum-dong-tu-tieng-anh" element={<VietCumDongTuTiengAnh />} />
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

          {/* 8. Vocabulary - Tính lặp lại */}
          <Route path="/vocabulary/again-1" element={<Again1 />} />
          <Route path="/vocabulary/again-2" element={<Again2 />} />
          <Route path="/vocabulary/often-1" element={<Often1 />} />
          <Route path="/vocabulary/often-2" element={<Often2 />} />
          <Route path="/vocabulary/repeatedly-1" element={<Repeatedly1 />} />
          <Route path="/vocabulary/repeatedly-2" element={<Repeatedly2 />} />
          <Route path="/vocabulary/frequently-1" element={<Frequently1 />} />
          <Route path="/vocabulary/frequently-2" element={<Frequently2 />} />

          {/* 9. Vocabulary - Tính hiếm */}
          <Route path="/vocabulary/seldom-1" element={<Seldom1 />} />
          <Route path="/vocabulary/seldom-2" element={<Seldom2 />} />
          <Route path="/vocabulary/sometimes-1" element={<Sometimes1 />} />
          <Route path="/vocabulary/sometimes-2" element={<Sometimes2 />} />
          <Route path="/vocabulary/rarely-1" element={<Rarely1 />} />
          <Route path="/vocabulary/rarely-2" element={<Rarely2 />} />
          <Route path="/vocabulary/occasionally-1" element={<Occasionally1 />} />
          <Route path="/vocabulary/occasionally-2" element={<Occasionally2 />} />

          {/* 10. Vocabulary - Tính liên tục */}
          <Route path="/vocabulary/always-1" element={<Always1 />} />
          <Route path="/vocabulary/always-2" element={<Always2 />} />
          <Route path="/vocabulary/yes-1" element={<Yes1 />} />
          <Route path="/vocabulary/yes-2" element={<Yes2 />} />
          <Route path="/vocabulary/ever-1" element={<Ever1 />} />
          <Route path="/vocabulary/ever-2" element={<Ever2 />} />

          {/* 11. Vocabulary - Tính không liên tục */}
          <Route path="/vocabulary/no-1" element={<No1 />} />
          <Route path="/vocabulary/no-2" element={<No2 />} />
          <Route path="/vocabulary/not-1" element={<Not1 />} />
          <Route path="/vocabulary/not-2" element={<Not2 />} />
          <Route path="/vocabulary/never-1" element={<Never1 />} />
          <Route path="/vocabulary/never-2" element={<Never2 />} />

          {/* 12. Vocabulary - Mức độ cao */}
          <Route path="/vocabulary/so-1" element={<So1 />} />
          <Route path="/vocabulary/so-2" element={<So2 />} />
          <Route path="/vocabulary/very-1" element={<Very1 />} />
          <Route path="/vocabulary/very-2" element={<Very2 />} />
          <Route path="/vocabulary/extremely-1" element={<Extremely1 />} />
          <Route path="/vocabulary/extremely-2" element={<Extremely2 />} />
          <Route path="/vocabulary/highly-1" element={<Highly1 />} />
          <Route path="/vocabulary/highly-2" element={<Highly2 />} />
          <Route path="/vocabulary/greatly-1" element={<Greatly1 />} />
          <Route path="/vocabulary/greatly-2" element={<Greatly2 />} />

          {/* 13. Vocabulary - Không chắc chắn */}
          <Route path="/vocabulary/maybe-1" element={<Maybe1 />} />
          <Route path="/vocabulary/maybe-2" element={<Maybe2 />} />
          <Route path="/vocabulary/perhaps-1" element={<Perhaps1 />} />
          <Route path="/vocabulary/perhaps-2" element={<Perhaps2 />} />
          <Route path="/vocabulary/possibly-1" element={<Possibly1 />} />
          <Route path="/vocabulary/possibly-2" element={<Possibly2 />} />
          <Route path="/vocabulary/questionably-1" element={<Questionably1 />} />
          <Route path="/vocabulary/questionably-2" element={<Questionably2 />} />
          <Route path="/vocabulary/probably-1" element={<Probably1 />} />
          <Route path="/vocabulary/probably-2" element={<Probably2 />} />
          <Route path="/vocabulary/apparently-1" element={<Apparently1 />} />
          <Route path="/vocabulary/apparently-2" element={<Apparently2 />} />

          {/* 14. Vocabulary - Thời gian hiện tại */}
          <Route path="/vocabulary/now-1" element={<Now1 />} />
          <Route path="/vocabulary/now-2" element={<Now2 />} />
          <Route path="/vocabulary/today-1" element={<Today1 />} />
          <Route path="/vocabulary/today-2" element={<Today2 />} />
          <Route path="/vocabulary/currently-1" element={<Currently1 />} />
          <Route path="/vocabulary/currently-2" element={<Currently2 />} />
          <Route path="/vocabulary/presently-1" element={<Presently1 />} />
          <Route path="/vocabulary/presently-2" element={<Presently2 />} />

          {/* 15. Vocabulary - Thời gian tương lai */}
          <Route path="/vocabulary/soon-1" element={<Soon1 />} />
          <Route path="/vocabulary/soon-2" element={<Soon2 />} />
          <Route path="/vocabulary/tomorrow-1" element={<Tomorrow1 />} />
          <Route path="/vocabulary/tomorrow-2" element={<Tomorrow2 />} />

          {/* 16. Vocabulary - Tính chân thành */}
          <Route path="/vocabulary/sincerely-1" element={<Sincerely1 />} />
          <Route path="/vocabulary/sincerely-2" element={<Sincerely2 />} />
          <Route path="/vocabulary/honestly-1" element={<Honestly1 />} />
          <Route path="/vocabulary/honestly-2" element={<Honestly2 />} />
          <Route path="/vocabulary/faithfully-1" element={<Faithfully1 />} />
          <Route path="/vocabulary/faithfully-2" element={<Faithfully2 />} />
          <Route path="/vocabulary/openly-1" element={<Openly1 />} />
          <Route path="/vocabulary/openly-2" element={<Openly2 />} />

          {/* 17. Vocabulary - Điểm nhấn đặc biệt */}
          <Route path="/vocabulary/especially-1" element={<Especially1 />} />
          <Route path="/vocabulary/especially-2" element={<Especially2 />} />
          <Route path="/vocabulary/particularly-1" element={<Particularly1 />} />
          <Route path="/vocabulary/particularly-2" element={<Particularly2 />} />

          {/* 18. Vocabulary - Về cơ bản */}
          <Route path="/vocabulary/basically-1" element={<Basically1 />} />
          <Route path="/vocabulary/basically-2" element={<Basically2 />} />

          {/* 3. Test Tailwind */}
					<Route path="/tailwindcss/test-tailwind" element={<TestTailwind />} />

      </Route>

    </Routes>

  </Suspense>

  );
}