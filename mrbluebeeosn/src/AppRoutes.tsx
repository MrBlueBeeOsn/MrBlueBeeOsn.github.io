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

	// Quiz
	const QuestionsandAnswers = lazy(() => import('@/2_main/bookkeeping/quiz/QuestionsandAnswers'));

// 2_main import các chức năng và đường dẫn

	// Mr.Bee Osn English Terms
	const SearchingAndClickableDictionary = lazy(() => import('@/2_main/english/mrbeeenglish/SearchingAndClickableDictionary'));

	// Test Tailwind
	const TestTailwind = lazy(() => import('@/components/test/TestTailwind'));

	// 1. English
	const EnglishIndex = lazy(() => import('@/2_main/english/_indexes/EnglishIndex'));
	const English = lazy(() => import('@/2_main/english/English'));
	const TheEnglishLanguage = lazy(() => import('@/2_main/english/TheEnglishLanguage'));
	const EnglishTeacher = lazy(() => import('@/2_main/english/EnglishTeacher'));

	// EnglishMultipleChoice
	const EnglishMultipleChoice = lazy(() => import('@/2_main/english/quiz/EnglishMultipleChoice'));
	const MixedEnglishGrammarAndVocabulary = lazy(() => import('@/2_main/english/quiz/MixedEnglishGrammarAndVocabulary'));

	// IELTS
	const IELTSQuestions = lazy(() => import('@/2_main/english/quiz/ielts/IELTSQuestions'));

	// TOEIC
	const TOEICPractice = lazy(() => import('@/2_main/english/quiz/toeic/TOEICPractice'));

	// Phrasal Verbs
	const PhrasalVerbsQuestions = lazy(() => import('@/2_main/english/quiz/phrasalverbs/PhrasalVerbsQuestions'));

	

	// 2. Grammar
	const GrammarIndex = lazy(() => import('@/2_main/english/_indexes/GrammarIndex'));
	const Adverb = lazy(() => import('@/2_main/english/grammar/Adverb'));
	const Verb = lazy(() => import('@/2_main/english/grammar/Verb'));
	const Adjective = lazy(() => import('@/2_main/english/grammar/Adjective'));
	const Noun = lazy(() => import('@/2_main/english/grammar/Noun'));

	// Quiz
	const EnglishGrammarQuestions = lazy(() => import('@/2_main/english/grammar/quiz/EnglishGrammarQuestions'));
	const EnglishGrammarQuestions2 = lazy(() => import('@/2_main/english/grammar/quiz/EnglishGrammarQuestions2'));

	// Tenses
	const EnglishTensesQuiz = lazy(() => import('@/2_main/english/grammar/quiz/tenses/EnglishTensesQuiz'));
	
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


	const DichCumDanhTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/DichCumDanhTuTiengAnh'));
	const DichCumDongTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/DichCumDongTuTiengAnh'));
	const DichCauHoiTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/DichCauHoiTiengAnh'));

	const VietCumDanhTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/VietCumDanhTuTiengAnh'))
	const VietCumDongTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/VietCumDongTuTiengAnh'));

	const SapXepCumDanhTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/SapXepCumDanhTuTiengAnh'))
	const SapXepCumDongTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/SapXepCumDongTuTiengAnh'));

	const NhanDienCumDanhTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/NhanDienCumDanhTuTiengAnh'))
	const NhanDienCumDongTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/NhanDienCumDongTuTiengAnh'))

	const DichCauTiengVietSangTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/DichCauTiengVietSangTiengAnh'))

	const PhanTichCauTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/PhanTichCauTiengAnh'))
	const Nho12ThiTiengAnh = lazy(() => import('@/2_main/english/tienganh/Nho12ThiTiengAnh'))
	const ThiTiengAnh = lazy(() => import('@/2_main/english/tienganh/ThiTiengAnh'))
	const Bang12DongTuPhoBien = lazy(() => import('@/2_main/english/tienganh/Bang12DongTuPhoBien'));

	const VietTiengAnhMuotMaHon = lazy(() => import('@/2_main/english/tienganh/VietTiengAnhMuotMaHon'))
	
	const GiaoVienTiengAnh = lazy(() => import('@/2_main/english/tienganh/GiaoVienTiengAnh'));

	// Quiz
	const TiengAnhQuestions = lazy(() => import('@/2_main/english/tienganh/quiz/TiengAnhQuestions'));

	// Ngữ pháp
	const TracNghiemNguPhapTiengAnh = lazy(() => import('@/2_main/english/tienganh/quiz/nguphap/TracNghiemNguPhapTiengAnh'));

	// Cụm động từ
	const PhrasalVerbsQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/cumdongtu/PhrasalVerbsQuiz'));

	// Thì
	const TracNghiemThiTiengAnh = lazy(() => import('@/2_main/english/tienganh/quiz/thi/TracNghiemThiTiengAnh'));
	
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
	const Again1 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/Again1'));
	const Again2 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/Again2'));
	const Often1 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/Often1'));
	const Often2 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/Often2'));
	const Repeatedly1 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/Repeatedly1'));
	const Repeatedly2 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/Repeatedly2'));
	const Frequently1 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/Frequently1'));
	const Frequently2 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/Frequently2'));
	const Usually1 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/Usually1'));
	const Usually2 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/Usually2'));

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

	// 17. Vocabulary - Điểm nhấn đặc biệt
	const Especially1 = lazy(() => import('@/2_main/english/vocabulary/diemnhandacbiet/Especially1'));
	const Especially2 = lazy(() => import('@/2_main/english/vocabulary/diemnhandacbiet/Especially2'));
	const Particularly1 = lazy(() => import('@/2_main/english/vocabulary/diemnhandacbiet/Particularly1'));
	const Particularly2 = lazy(() => import('@/2_main/english/vocabulary/diemnhandacbiet/Particularly2'));

	// 18. Vocabulary - Về cơ bản
	const Basically1 = lazy(() => import('@/2_main/english/vocabulary/vecoban/Basically1'));
	const Basically2 = lazy(() => import('@/2_main/english/vocabulary/vecoban/Basically2'));

	// 19. Vocabulary - Tính hiệu quả
	const Effectively1 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/Effectively1'));
	const Effectively2 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/Effectively2'));
	const Efficiently1 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/Efficiently1'));
	const Efficiently2 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/Efficiently2'));
	const Successfully1 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/Successfully1'));
	const Successfully2 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/Successfully2'));
	const Productively1 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/Productively1'));
	const Productively2 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/Productively2'));

	// 20. Vocabulary - Tốc độ nhanh
	const Quickly1 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/Quickly1'));
	const Quickly2 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/Quickly2'));
	const Rapidly1 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/Rapidly1'));
	const Rapidly2 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/Rapidly2'));
	const Instantly1 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/Instantly1'));
	const Instantly2 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/Instantly2'));
	const Suddenly1 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/Suddenly1'));
	const Suddenly2 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/Suddenly2'));

	// 21. Vocabulary - Tính kiên nhẫn
	const Patiently1 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/Patiently1'));
	const Patiently2 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/Patiently2'));
	const Tirelessly1 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/Tirelessly1'));
	const Tirelessly2 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/Tirelessly2'));
	const Persistently1 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/Persistently1'));
	const Persistently2 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/Persistently2'));
	const Steadily1 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/Steadily1'));
	const Steadily2 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/Steadily2'));

	// 22. Vocabulary - Tính cẩn thận
	const Carefully1 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/Carefully1'));
	const Carefully2 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/Carefully2'));
	const Meticulously1 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/Meticulously1'));
	const Meticulously2 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/Meticulously2'));
	const Cautiously1 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/Cautiously1'));
	const Cautiously2 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/Cautiously2'));
	const Attentively1 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/Attentively1'));
	const Attentively2 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/Attentively2'));

	// 22. Vocabulary - Tốc độ chậm
	const Slowly1 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/Slowly1'));
	const Slowly2 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/Slowly2'));
	const Lazily1 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/Lazily1'));
	const Lazily2 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/Lazily2'));
	const Gradually1 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/Gradually1'));
	const Gradually2 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/Gradually2'));
	const Belatedly1 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/Belatedly1'));
	const Belatedly2 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/Belatedly2'));

	// 23. Vocabulary - Tính tích cực
	const Happily1 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/Happily1'));
	const Happily2 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/Happily2'));
	const Positively1 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/Positively1'));
	const Positively2 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/Positively2'));
	const Joyfully1 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/Joyfully1'));
	const Joyfully2 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/Joyfully2'));
	const Cheerfully1 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/Cheerfully1'));
	const Cheerfully2 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/Cheerfully2'));

	// 24. Vocabulary - Tính nhẹ nhàng
	const Gently1 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/Gently1'));
	const Gently2 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/Gently2'));
	const Delicately2 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/Delicately2'));
	const Delicately1 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/Delicately1'));
	const Softly1 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/Softly1'));
	const Softly2 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/Softly2'));
	const Tenderly2 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/Tenderly2'));
	const Tenderly1 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/Tenderly1'));


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
					
					{/* Quiz */}
					<Route path="/bookkeeping/questions-&-answers" element={<QuestionsandAnswers />} />

				{/* 2_main Khai báo đường dẫn path cho English */}

					{/* Mr.Bee Osn English Terms */}
					<Route path="/mrbeeenglish/searching-and-clickable-dictionary" element={<SearchingAndClickableDictionary />} />

					{/* Test Tailwind */}
					<Route path="/tailwindcss/test-tailwind" element={<TestTailwind />} />
					
					{/* 1. English */}
					<Route path="/english" element={<EnglishIndex />} />
					<Route path="/english/what-is-english?" element={<English />} />
					<Route path="/english/what-is-the-english-language?" element={<TheEnglishLanguage />} />
					<Route path="/english/what-is-an-english-teacher?" element={<EnglishTeacher />} />

					{/* Quiz */}
					<Route path="/english/english-multiple-choice" element={<EnglishMultipleChoice />} />
					<Route path="/english/mixed-english-grammar-&-vocabulary" element={<MixedEnglishGrammarAndVocabulary />} />

					{/* IELTS */}
					<Route path="/english/ielts-questions" element={<IELTSQuestions />} />

					{/* TOEIC */}
					<Route path="/english/toeic-practice" element={<TOEICPractice />} />

					{/* Phrasal Verbs */}
					<Route path="/english/phrasal-verbs-questions" element={<PhrasalVerbsQuestions />} />

					

					{/* 2. Grammar */}
					<Route path="/grammar" element={<GrammarIndex />} />
					<Route path="/grammar/what-is-an-adverb?" element={<Adverb />} />
					<Route path="/grammar/what-is-a-verb?" element={<Verb />} />
					<Route path="/grammar/what-is-an-adjective?" element={<Adjective />} />
					<Route path="/grammar/what-is-a-noun?" element={<Noun />} />

					{/* Quiz */}
					<Route path="/grammar/english-grammar-questions" element={<EnglishGrammarQuestions />} />
					<Route path="/grammar/english-grammar-questions-2" element={<EnglishGrammarQuestions2 />} />

					{/* Tenses */}
					<Route path="/grammar/english-tenses-quiz" element={<EnglishTensesQuiz />} />
					
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

					<Route path="/tieng-anh/huong-dan-viet-cum-danh-tu-tieng-anh" element={<VietCumDanhTuTiengAnh />} />
					<Route path="/tieng-anh/huong-dan-viet-cum-dong-tu-tieng-anh" element={<VietCumDongTuTiengAnh />} />

					<Route path="/tieng-anh/huong-dan-sap-xep-cum-danh-tu-tieng-anh" element={<SapXepCumDanhTuTiengAnh />} />
					<Route path="/tieng-anh/huong-dan-sap-xep-cum-dong-tu-tieng-anh" element={<SapXepCumDongTuTiengAnh />} />

					<Route path="/tieng-anh/huong-dan-nhan-dien-cum-danh-tu-tieng-anh" element={<NhanDienCumDanhTuTiengAnh />} />
					<Route path="/tieng-anh/huong-dan-nhan-dien-cum-dong-tu-tieng-anh" element={<NhanDienCumDongTuTiengAnh />} />

					<Route path="/tieng-anh/dich-cau-tieng-viet-sang-tieng-anh" element={<DichCauTiengVietSangTiengAnh />} />

					<Route path="/tieng-anh/phan-tich-cau-tieng-anh" element={<PhanTichCauTiengAnh />} />
					<Route path="/tieng-anh/nho-12-thi-tieng-anh" element={<Nho12ThiTiengAnh />} />
					<Route path="/tieng-anh/thi-tieng-anh" element={<ThiTiengAnh />} />
					<Route path="/tieng-anh/thi-tieng-anh" element={<ThiTiengAnh />} />
					<Route path="/tieng-anh/12-dong-tu-thong-dung-nhat-cung-4-dang-co-ban" element={<Bang12DongTuPhoBien />} />
					
					<Route path="/tieng-anh/meo-hay-de-viet-tieng-anh-muot-ma-hon" element={<VietTiengAnhMuotMaHon />} />

					{/* Quiz */}
					<Route path="/tieng-anh/tieng-anh-questions" element={<TiengAnhQuestions />} />

					{/* Ngữ pháp */}
					<Route path="/tieng-anh/trac-nghiem-ngu-phap-tieng-anh" element={<TracNghiemNguPhapTiengAnh />} />

					{/* Cụm động từ */}
					<Route path="/tieng-anh/phrasal-verbs-quiz" element={<PhrasalVerbsQuiz />} />

					{/* Thì tiếng Anh */}
					<Route path="/tieng-anh/trac-nghiem-thi-tieng-anh" element={<TracNghiemThiTiengAnh />} />

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
					<Route path="/vocabulary/again-1" element={<Again1 />} />
					<Route path="/vocabulary/again-2" element={<Again2 />} />
					<Route path="/vocabulary/often-1" element={<Often1 />} />
					<Route path="/vocabulary/often-2" element={<Often2 />} />
					<Route path="/vocabulary/repeatedly-1" element={<Repeatedly1 />} />
					<Route path="/vocabulary/repeatedly-2" element={<Repeatedly2 />} />
					<Route path="/vocabulary/frequently-1" element={<Frequently1 />} />
					<Route path="/vocabulary/frequently-2" element={<Frequently2 />} />
					<Route path="/vocabulary/usually-1" element={<Usually1 />} />
					<Route path="/vocabulary/usually-2" element={<Usually2 />} />

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

					{/* 19. Vocabulary - Tính hiệu quả */}
					<Route path="/vocabulary/effectively-1" element={<Effectively1 />} />
					<Route path="/vocabulary/effectively-2" element={<Effectively2 />} />
					<Route path="/vocabulary/efficiently-1" element={<Efficiently1 />} />
					<Route path="/vocabulary/efficiently-2" element={<Efficiently2 />} />
					<Route path="/vocabulary/successfully-1" element={<Successfully1 />} />
					<Route path="/vocabulary/successfully-2" element={<Successfully2 />} />
					<Route path="/vocabulary/productively-1" element={<Productively1 />} />
					<Route path="/vocabulary/productively-2" element={<Productively2 />} />

					{/* 20. Vocabulary - Tốc độ nhanh */}
					<Route path="/vocabulary/quickly-1" element={<Quickly1 />} />
					<Route path="/vocabulary/quickly-2" element={<Quickly2 />} />
					<Route path="/vocabulary/rapidly-1" element={<Rapidly1 />} />
					<Route path="/vocabulary/rapidly-2" element={<Rapidly2 />} />
					<Route path="/vocabulary/instantly-1" element={<Instantly1 />} />
					<Route path="/vocabulary/instantly-2" element={<Instantly2 />} />
					<Route path="/vocabulary/suddenly-1" element={<Suddenly1 />} />
					<Route path="/vocabulary/suddenly-2" element={<Suddenly2 />} />

					{/* 21. Vocabulary - Tính kiên nhẫn */}
					<Route path="/vocabulary/patiently-1" element={<Patiently1 />} />
					<Route path="/vocabulary/patiently-2" element={<Patiently2 />} />
					<Route path="/vocabulary/tirelessly-1" element={<Tirelessly1 />} />
					<Route path="/vocabulary/tirelessly-2" element={<Tirelessly2 />} />
					<Route path="/vocabulary/persistently-1" element={<Persistently1 />} />
					<Route path="/vocabulary/persistently-2" element={<Persistently2 />} />
					<Route path="/vocabulary/steadily-1" element={<Steadily1 />} />
					<Route path="/vocabulary/steadily-2" element={<Steadily2 />} />

					{/* 22. Vocabulary - Tính cẩn thận */}
					<Route path="/vocabulary/carefully-1" element={<Carefully1 />} />
					<Route path="/vocabulary/carefully-2" element={<Carefully2 />} />
					<Route path="/vocabulary/meticulously-1" element={<Meticulously1 />} />
					<Route path="/vocabulary/meticulously-2" element={<Meticulously2 />} />
					<Route path="/vocabulary/cautiously-1" element={<Cautiously1 />} />
					<Route path="/vocabulary/cautiously-2" element={<Cautiously2 />} />
					<Route path="/vocabulary/attentively-1" element={<Attentively1 />} />
					<Route path="/vocabulary/attentively-2" element={<Attentively2 />} />

					{/* 22. Vocabulary - Tốc độ chậm */}
					<Route path="/vocabulary/slowly-1" element={<Slowly1 />} />
					<Route path="/vocabulary/slowly-2" element={<Slowly2 />} />
					<Route path="/vocabulary/lazily-1" element={<Lazily1 />} />
					<Route path="/vocabulary/lazily-2" element={<Lazily2 />} />
					<Route path="/vocabulary/gradually-1" element={<Gradually1 />} />
					<Route path="/vocabulary/gradually-2" element={<Gradually2 />} />
					<Route path="/vocabulary/belatedly-1" element={<Belatedly1 />} />
					<Route path="/vocabulary/belatedly-2" element={<Belatedly2 />} />

					{/* 23. Vocabulary - Tính tích cực */}
					<Route path="/vocabulary/happily-1" element={<Happily1 />} />
					<Route path="/vocabulary/happily-2" element={<Happily2 />} />
					<Route path="/vocabulary/positively-1" element={<Positively1 />} />
					<Route path="/vocabulary/positively-2" element={<Positively2 />} />
					<Route path="/vocabulary/joyfully-1" element={<Joyfully1 />} />
					<Route path="/vocabulary/joyfully-2" element={<Joyfully2 />} />
					<Route path="/vocabulary/cheerfully-1" element={<Cheerfully1 />} />
					<Route path="/vocabulary/cheerfully-2" element={<Cheerfully2 />} />

					{/* 24. Vocabulary - Tính nhẹ nhàng */}
					<Route path="/vocabulary/gently-1" element={<Gently1 />} />
					<Route path="/vocabulary/gently-2" element={<Gently2 />} />
					<Route path="/vocabulary/delicately-1" element={<Delicately1 />} />
					<Route path="/vocabulary/delicately-2" element={<Delicately2 />} />
					<Route path="/vocabulary/softly-1" element={<Softly1 />} />
					<Route path="/vocabulary/softly-2" element={<Softly2 />} />
					<Route path="/vocabulary/tenderly-1" element={<Tenderly1 />} />
					<Route path="/vocabulary/tenderly-2" element={<Tenderly2 />} />


			</Route>

		</Routes>

	</Suspense>

	);
}