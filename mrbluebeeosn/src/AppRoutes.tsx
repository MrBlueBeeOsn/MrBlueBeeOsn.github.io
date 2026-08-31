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
	const BookkeepingQuiz = lazy(() => import('@/2_main/bookkeeping/quiz/BookkeepingQuiz'));
	const EVBookkeepingQuiz = lazy(() => import('@/2_main/bookkeeping/quiz/EVBookkeepingQuiz'));
	const VNBookkeepingQuiz = lazy(() => import('@/2_main/bookkeeping/quiz/VNBookkeepingQuiz'));

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

	// Gerunds and Infinitives
	const GerundsAndInfinitivesQuiz = lazy(() => import('@/2_main/english/quiz/vingtov/GerundsandInfinitivesQuiz'));

	// Subject-Verb Agreement
	const ENSubjectVerbQuiz = lazy(() => import('@/2_main/english/quiz/sva/ENSubjectVerbQuiz'));

	// Primary Auxiliary Verbs
	const PrimaryAuxiliaryVerbsQuiz = lazy(() => import('@/2_main/english/quiz/primaryauxiliaryverbs/PrimaryAuxiliaryVerbsQuiz'));

	// Auxiliary Verbs
	const ENAuxiliaryVerbsQuiz = lazy(() => import('@/2_main/english/quiz/auxiliaryverbs/ENAuxiliaryVerbsQuiz'));

	// Singular Plural Verbs
	const SingularPluralVerbsQuiz = lazy(() => import('@/2_main/english/quiz/singularpluralverbs/SingularPluralVerbsQuiz'));

	// Singular Plural Nouns Quiz
	const SingularPluralNounsQuiz = lazy(() => import('@/2_main/english/quiz/singularpluralnouns/SingularPluralNounsQuiz'));

	// Prepositions Quiz
	const PrepositionsQuiz = lazy(() => import('@/2_main/english/quiz/prepositions/PrepositionsQuiz'));

	// S And Es In Nouns Verbs
	const SAndEsInNounsVerbsQuiz = lazy(() => import('@/2_main/english/quiz/ses/SAndEsInNounsVerbsQuiz'));

	// Articles Quiz
	const ArticlesQuiz = lazy(() => import('@/2_main/english/quiz/articles/ArticlesQuiz'));

	// Paraphrasing Techniques Quiz
	const ParaphrasingTechniquesQuiz = lazy(() => import('@/2_main/english/quiz/paraphrasing/ParaphrasingTechniquesQuiz'));

	// DC Quiz
	const DCQuiz = lazy(() => import('@/2_main/english/quiz/dc/DCQuiz'));
	const AdjectiveClausesQuiz = lazy(() => import('@/2_main/english/quiz/dc/AdjectiveClausesQuiz'));
	const AdverbClausesQuiz = lazy(() => import('@/2_main/english/quiz/dc/AdverbClausesQuiz'));
	const NounClausesQuiz = lazy(() => import('@/2_main/english/quiz/dc/NounClausesQuiz'));

	// Matrix Quiz
	const MatrixQuiz = lazy(() => import('@/2_main/english/quiz/matrix/MatrixQuiz'));

	// Bookkeeping Matrix
	const BookkeepingMatrix = lazy(() => import('@/2_main/english/quiz/bookkeepingmatrix/BookkeepingMatrix'));
	



	// 2. Grammar
	const GrammarIndex = lazy(() => import('@/2_main/english/_indexes/GrammarIndex'));
	const Adverb = lazy(() => import('@/2_main/english/grammar/Adverb'));
	const Verb = lazy(() => import('@/2_main/english/grammar/Verb'));
	const Adjective = lazy(() => import('@/2_main/english/grammar/Adjective'));
	const Noun = lazy(() => import('@/2_main/english/grammar/Noun'));
	const VerbsAddS = lazy(() => import('@/2_main/english/grammar/VerbsAddS'));


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
	const BayDauPhuPhienAmTiengAnh1 = lazy(() => import('@/2_main/english/tienganh/pronunciation/BayDauPhuPhienAmTiengAnh1'));
	const BayDauPhuPhienAmTiengAnh2 = lazy(() => import('@/2_main/english/tienganh/pronunciation/BayDauPhuPhienAmTiengAnh2'));
	const NguyenAmDon = lazy(() => import('@/2_main/english/tienganh/pronunciation/NguyenAmDon'));
	const NguyenAmDoi = lazy(() => import('@/2_main/english/tienganh/pronunciation/NguyenAmDoi'));

	const GiaoVienTiengAnh = lazy(() => import('@/2_main/english/tienganh/GiaoVienTiengAnh'));

	const SauDangHanhDong1 = lazy(() => import('@/2_main/english/tienganh/verbs/SauDangHanhDong1'));
	const SauDangHanhDong2 = lazy(() => import('@/2_main/english/tienganh/verbs/SauDangHanhDong2'));

	const PREsentPERfect = lazy(() => import('@/2_main/english/tienganh/verbs/PREsentPERfect'));

	const GerundsAndInfinitives = lazy(() => import('@/2_main/english/vocabulary/verb/GerundsAndInfinitives'));
	const NhanBietTinhTuTiengAnh = lazy(() => import('@/2_main/english/tienganh/adjective/NhanBietTinhTuTiengAnh'));

	const BiMatVeTuDuyNgonNgu1 = lazy(() => import('@/2_main/english/tienganh/folder/BiMatVeTuDuyNgonNgu1'));
	const BiMatVeTuDuyNgonNgu2 = lazy(() => import('@/2_main/english/tienganh/folder/BiMatVeTuDuyNgonNgu2'));
	const BiMatVeTuDuyNgonNgu3 = lazy(() => import('@/2_main/english/tienganh/folder/BiMatVeTuDuyNgonNgu3'));

	const TieredStructure1 = lazy(() => import('@/2_main/english/tienganh/article/tieredstructure/TieredStructure1'));
	
	const NineBox1 = lazy(() => import('@/2_main/english/tienganh/article/3x3/NineBox1'));
	
	const SV1 = lazy(() => import('@/2_main/english/tienganh/article/sv/SV1'));
	const SV2 = lazy(() => import('@/2_main/english/tienganh/article/sv/SV2'));
	const SV3 = lazy(() => import('@/2_main/english/tienganh/article/sv/SV3'));
	const SV4 = lazy(() => import('@/2_main/english/tienganh/article/sv/SV4'));
	const SV5 = lazy(() => import('@/2_main/english/tienganh/article/sv/SV5'));
	const SV6 = lazy(() => import('@/2_main/english/tienganh/article/sv/SV6'));
	const SV7 = lazy(() => import('@/2_main/english/tienganh/article/sv/SV7'));
	const SV8 = lazy(() => import('@/2_main/english/tienganh/article/sv/SV8'));
	const SV9 = lazy(() => import('@/2_main/english/tienganh/article/sv/SV9'));
	
	const SuperWords1 = lazy(() => import('@/2_main/english/tienganh/article/superwords/SuperWords1'));
	const SuperWords2 = lazy(() => import('@/2_main/english/tienganh/article/superwords/SuperWords2'));
	const SuperWords3 = lazy(() => import('@/2_main/english/tienganh/article/superwords/SuperWords3'));
	const SuperWords4 = lazy(() => import('@/2_main/english/tienganh/article/superwords/SuperWords4'));
	const SuperWords5 = lazy(() => import('@/2_main/english/tienganh/article/superwords/SuperWords5'));
	const SuperWords6 = lazy(() => import('@/2_main/english/tienganh/article/superwords/SuperWords6'));
	const SuperWords7 = lazy(() => import('@/2_main/english/tienganh/article/superwords/SuperWords7'));
	const SuperWords8 = lazy(() => import('@/2_main/english/tienganh/article/superwords/SuperWords8'));
	const SuperWords9 = lazy(() => import('@/2_main/english/tienganh/article/superwords/SuperWords9'));

	
	const ThreeDC1 = lazy(() => import('@/2_main/english/tienganh/article/3dc/ThreeDC1'));
	const ThreeDC2 = lazy(() => import('@/2_main/english/tienganh/article/3dc/ThreeDC2'));
	const ThreeDC3 = lazy(() => import('@/2_main/english/tienganh/article/3dc/ThreeDC3'));
	const ThreeDC4 = lazy(() => import('@/2_main/english/tienganh/article/3dc/ThreeDC4'));
	const ThreeDC5 = lazy(() => import('@/2_main/english/tienganh/article/3dc/ThreeDC5'));
	const ThreeDC6 = lazy(() => import('@/2_main/english/tienganh/article/3dc/ThreeDC6'));
	const ThreeDC7 = lazy(() => import('@/2_main/english/tienganh/article/3dc/ThreeDC7'));
	const ThreeDC8 = lazy(() => import('@/2_main/english/tienganh/article/3dc/ThreeDC8'));
	const ThreeDC9 = lazy(() => import('@/2_main/english/tienganh/article/3dc/ThreeDC9'));

	const AdjPlacement1 = lazy(() => import('@/2_main/english/tienganh/article/adj/AdjPlacement1'));
	const AdjPlacement2 = lazy(() => import('@/2_main/english/tienganh/article/adj/AdjPlacement2'));
	const AdjPlacement3 = lazy(() => import('@/2_main/english/tienganh/article/adj/AdjPlacement3'));
	const AdjPlacement4 = lazy(() => import('@/2_main/english/tienganh/article/adj/AdjPlacement4'));
	const AdjPlacement5 = lazy(() => import('@/2_main/english/tienganh/article/adj/AdjPlacement5'));
	const AdjPlacement6 = lazy(() => import('@/2_main/english/tienganh/article/adj/AdjPlacement6'));
	const AdjPlacement7 = lazy(() => import('@/2_main/english/tienganh/article/adj/AdjPlacement7'));
	const AdjPlacement8 = lazy(() => import('@/2_main/english/tienganh/article/adj/AdjPlacement8'));
	const AdjPlacement9 = lazy(() => import('@/2_main/english/tienganh/article/adj/AdjPlacement9'));
	
	const LegoAssembly1 = lazy(() => import('@/2_main/english/tienganh/article/lego/LegoAssembly1'));
	const LegoAssembly2 = lazy(() => import('@/2_main/english/tienganh/article/lego/LegoAssembly2'));
	const LegoAssembly3 = lazy(() => import('@/2_main/english/tienganh/article/lego/LegoAssembly3'));
	const LegoAssembly4 = lazy(() => import('@/2_main/english/tienganh/article/lego/LegoAssembly4'));
	const LegoAssembly5 = lazy(() => import('@/2_main/english/tienganh/article/lego/LegoAssembly5'));
	const LegoAssembly6 = lazy(() => import('@/2_main/english/tienganh/article/lego/LegoAssembly6'));
	const LegoAssembly7 = lazy(() => import('@/2_main/english/tienganh/article/lego/LegoAssembly7'));
	const LegoAssembly8 = lazy(() => import('@/2_main/english/tienganh/article/lego/LegoAssembly8'));
	const LegoAssembly9 = lazy(() => import('@/2_main/english/tienganh/article/lego/LegoAssembly9'));

	const DependentClause1 = lazy(() => import('@/2_main/english/tienganh/thinking/dc/DependentClause1'));
	const DependentClause2 = lazy(() => import('@/2_main/english/tienganh/thinking/dc/DependentClause2'));
	const DependentClause3 = lazy(() => import('@/2_main/english/tienganh/thinking/dc/DependentClause3'));
	const DependentClause4 = lazy(() => import('@/2_main/english/tienganh/thinking/dc/DependentClause4'));
	const DependentClause5 = lazy(() => import('@/2_main/english/tienganh/thinking/dc/DependentClause5'));
	const DependentClause6 = lazy(() => import('@/2_main/english/tienganh/thinking/dc/DependentClause6'));
	const DependentClause7 = lazy(() => import('@/2_main/english/tienganh/thinking/dc/DependentClause7'));
	const DependentClause8 = lazy(() => import('@/2_main/english/tienganh/thinking/dc/DependentClause8'));
	const DependentClause9 = lazy(() => import('@/2_main/english/tienganh/thinking/dc/DependentClause9'));

	const SentenceVariety1 = lazy(() => import('@/2_main/english/tienganh/thinking/sv/SentenceVariety1'));
	const SentenceVariety2 = lazy(() => import('@/2_main/english/tienganh/thinking/sv/SentenceVariety2'));
	const SentenceVariety3 = lazy(() => import('@/2_main/english/tienganh/thinking/sv/SentenceVariety3'));
	const SentenceVariety4 = lazy(() => import('@/2_main/english/tienganh/thinking/sv/SentenceVariety4'));
	const SentenceVariety5 = lazy(() => import('@/2_main/english/tienganh/thinking/sv/SentenceVariety5'));
	const SentenceVariety6 = lazy(() => import('@/2_main/english/tienganh/thinking/sv/SentenceVariety6'));
	const SentenceVariety7 = lazy(() => import('@/2_main/english/tienganh/thinking/sv/SentenceVariety7'));
	const SentenceVariety8 = lazy(() => import('@/2_main/english/tienganh/thinking/sv/SentenceVariety8'));
	const SentenceVariety9 = lazy(() => import('@/2_main/english/tienganh/thinking/sv/SentenceVariety9'));


	const SVOMPT1 = lazy(() => import('@/2_main/english/tienganh/thinking/svompt/SVOMPT1'));
	const SVOMPT2 = lazy(() => import('@/2_main/english/tienganh/thinking/svompt/SVOMPT2'));
	const SVOMPT3 = lazy(() => import('@/2_main/english/tienganh/thinking/svompt/SVOMPT3'));
	const SVOMPT4 = lazy(() => import('@/2_main/english/tienganh/thinking/svompt/SVOMPT4'));
	const SVOMPT5 = lazy(() => import('@/2_main/english/tienganh/thinking/svompt/SVOMPT5'));
	const SVOMPT6 = lazy(() => import('@/2_main/english/tienganh/thinking/svompt/SVOMPT6'));
	const SVOMPT7 = lazy(() => import('@/2_main/english/tienganh/thinking/svompt/SVOMPT7'));
	const SVOMPT8 = lazy(() => import('@/2_main/english/tienganh/thinking/svompt/SVOMPT8'));

	const ThinkStraightFlowFast1 = lazy(() => import('@/2_main/english/tienganh/thinking/tsff/ThinkStraightFlowFast1'));
	const ThinkStraightFlowFast2 = lazy(() => import('@/2_main/english/tienganh/thinking/tsff/ThinkStraightFlowFast2'));
	const ThinkStraightFlowFast3 = lazy(() => import('@/2_main/english/tienganh/thinking/tsff/ThinkStraightFlowFast3'));
	const ThinkStraightFlowFast4 = lazy(() => import('@/2_main/english/tienganh/thinking/tsff/ThinkStraightFlowFast4'));
	const ThinkStraightFlowFast5 = lazy(() => import('@/2_main/english/tienganh/thinking/tsff/ThinkStraightFlowFast5'));
	const ThinkStraightFlowFast6 = lazy(() => import('@/2_main/english/tienganh/thinking/tsff/ThinkStraightFlowFast6'));
	const ThinkStraightFlowFast7 = lazy(() => import('@/2_main/english/tienganh/thinking/tsff/ThinkStraightFlowFast8'));
	const ThinkStraightFlowFast8 = lazy(() => import('@/2_main/english/tienganh/thinking/tsff/ThinkStraightFlowFast7'));

	const TheBeautyOfTheGirl1 = lazy(() => import('@/2_main/english/tienganh/thinking/bg/TheBeautyOfTheGirl1'));
	const TheBeautyOfTheGirl2 = lazy(() => import('@/2_main/english/tienganh/thinking/bg/TheBeautyOfTheGirl2'));
	const TheBeautyOfTheGirl3 = lazy(() => import('@/2_main/english/tienganh/thinking/bg/TheBeautyOfTheGirl3'));
	const TheBeautyOfTheGirl4 = lazy(() => import('@/2_main/english/tienganh/thinking/bg/TheBeautyOfTheGirl4'));
	const TheBeautyOfTheGirl5 = lazy(() => import('@/2_main/english/tienganh/thinking/bg/TheBeautyOfTheGirl5'));

	const NamDangDongTuVangRong2 = lazy(() => import('@/2_main/english/tienganh/folder/NamDangDongTuVangRong2'));
	const NamDangDongTuVangRong1 = lazy(() => import('@/2_main/english/tienganh/folder/NamDangDongTuVangRong1'));


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
	const Nho12ThiTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/Nho12ThiTiengAnh'))
	const ThiTiengAnh = lazy(() => import('@/2_main/english/tienganh/folder/ThiTiengAnh'))

	const VietTiengAnhMuotMaHon = lazy(() => import('@/2_main/english/tienganh/VietTiengAnhMuotMaHon'))

	const IrregularVerbs = lazy(() => import('@/2_main/english/vocabulary/verb/IrregularVerbs'))
	const PhrasalVerbs = lazy(() => import('@/2_main/english/vocabulary/verb/PhrasalVerbs'))
	
	

	// Quiz
	const TiengAnhQuestions = lazy(() => import('@/2_main/english/tienganh/quiz/TiengAnhQuestions'));

	// Ngữ pháp
	const TracNghiemNguPhapTiengAnh = lazy(() => import('@/2_main/english/tienganh/quiz/nguphap/TracNghiemNguPhapTiengAnh'));

	// Động cụm
	const PhrasalVerbsQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/cumdongtu/PhrasalVerbsQuiz'));

	// Thì
	const TracNghiemThiTiengAnh = lazy(() => import('@/2_main/english/tienganh/quiz/thi/TracNghiemThiTiengAnh'));

	// Gerunds and Infinitives
	const TracNghiemGerundsAndInfinitives = lazy(() => import('@/2_main/english/tienganh/quiz/vingtov/TracNghiemGerundsAndInfinitives'));

	// Subject-Verb Agreement
	const EVSubjectVerbQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/sva/EVSubjectVerbQuiz'));

	// Primary Auxiliary Verbs
	const EVPrimaryAuxiliaryVerbsQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/evprimaryauxiliaryverbs/EVPrimaryAuxiliaryVerbsQuiz'));

	// AuxiliaryVerbsQuiz
	const EVAuxiliaryVerbsQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/trodongtu/EVAuxiliaryVerbsQuiz'));

	// EVSingularPluralVerbsQuiz
	const EVSingularPluralVerbsQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/evsingularpluralverbs/EVSingularPluralVerbsQuiz'));

	// EV Singular Plural Nouns Quiz
	const EVSingularPluralNounsQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/evsingularpluralnouns/EVSingularPluralNounsQuiz'));

	// EV Prepositions Quiz
	const EVPrepositionsQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/evprepositions/EVPrepositionsQuiz'));

	// EV Prepositions Quiz
	const EVSAndEsInNounsVerbsQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/evses/EVSAndEsInNounsVerbsQuiz'));

	// EV Articles Quiz
	const EVArticlesQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/evarticles/EVArticlesQuiz'));

	// EV Paraphrasing TechniquesQuiz
	const EVParaphrasingTechniquesQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/evparaphrasing/EVParaphrasingTechniquesQuiz'));

	// EV DC Quiz
	const EVDCQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/evdc/EVDCQuiz'));
	const EVAdjectiveClausesQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/evdc/EVAdjectiveClausesQuiz'));
	const EVAdverbClausesQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/evdc/EVAdverbClausesQuiz'));
	const EVNounClausesQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/evdc/EVNounClausesQuiz'));

	// EV Matrix Quiz
	const EVMatrixQuiz = lazy(() => import('@/2_main/english/tienganh/quiz/evmatrix/EVMatrixQuiz'));


	// EV Bookkeeping Matrix
	const EVBookkeepingMatrix = lazy(() => import('@/2_main/english/tienganh/quiz/evbookkeepingmatrix/EVBookkeepingMatrix'));

	
	// Vocabulary
	const VocabularyIndex = lazy(() => import('@/2_main/english/_indexes/VocabularyIndex'));


	// 1. Verbs
	const Clear = lazy(() => import('@/2_main/english/vocabulary/verb/Clear'));
	const Respond = lazy(() => import('@/2_main/english/vocabulary/verb/Respond'));
	const Create = lazy(() => import('@/2_main/english/vocabulary/verb/Create'));
	



	// 6. Adjectives
	const BEAUtiful = lazy(() => import('@/2_main/english/vocabulary/adj/BEAUtiful'));
	const AtTRACtive = lazy(() => import('@/2_main/english/vocabulary/adj/atTRACtive'));
	const GRATEful = lazy(() => import('@/2_main/english/vocabulary/adj/GRATEful'));



	// 7. DC

	
	
	const When = lazy(() => import('@/2_main/english/vocabulary/dc/When'));
	const If = lazy(() => import('@/2_main/english/vocabulary/dc/If'));
	const Although = lazy(() => import('@/2_main/english/vocabulary/dc/Although'));
	const Because = lazy(() => import('@/2_main/english/vocabulary/dc/Because'));
	
	










	// 5. Vocabulary - Tính chính xác
	const ACcurately1 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/ACcurately1'));
	const ACcurately2 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/ACcurately2'));
	const PreCISEly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/preCISEly1'));
	const PreCISEly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/preCISEly2'));
	const CorRECTly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/corRECTly1'));
	const CorRECTly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/corRECTly2'));
	const ExACTly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/exACTly1'));
	const ExACTly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchinhxac/exACTly2'));

	// 5. Vocabulary - Tính tỉ mỉ
	const PAINStakingly1 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/PAINStakingly1'));
	const PAINStakingly2 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/PAINStakingly2'));
	const THORoughly1 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/THORoughly1'));
	const THORoughly2 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/THORoughly2'));
	const DILigently1 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/DILigently1'));
	const DILigently2 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/DILigently2'));
	const SCRUpulously1 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/SCRUpulously1'));
	const SCRUpulously2 = lazy(() => import('@/2_main/english/vocabulary/tinhtimi/SCRUpulously2'));

	// 5. Vocabulary - Tính rõ ràng
	const CLEARly1 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/CLEARly1'));
	const CLEARly2 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/CLEARly2'));
	const OBviously1 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/OBviously1'));
	const OBviously2 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/OBviously2'));
	const EVidently1 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/EVidently1'));
	const EVidently2 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/EVidently2'));
	const VISibly1 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/VISibly1'));
	const VISibly2 = lazy(() => import('@/2_main/english/vocabulary/tinhrorang/VISibly2'));

	// 6. Vocabulary - Tính xác thực
	const ACtually1 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/ACtually1'));
	const ACtually2 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/ACtually2'));
	const TRUly1 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/TRUly1'));
	const TRUly2 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/TRUly2'));
	const REALly1 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/REALly1'));
	const REALly2 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/REALly2'));
	const GENuinely1 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/GENuinely1'));
	const GENuinely2 = lazy(() => import('@/2_main/english/vocabulary/tinhxacthuc/GENuinely2'));

	// 7. Vocabulary - Tính chắc chắn
	const CERtainly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/CERtainly1'));
	const CERtainly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/CERtainly2'));
	const DEFinitely1 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/DEFinitely1'));
	const DEFinitely2 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/DEFinitely2'));
	const AbsoLUTEly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/absoLUTEly1'));
	const AbsoLUTEly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/absoLUTEly2'));
	const SUREly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/SUREly1'));
	const SUREly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchacchan/SUREly2'));

	// 8. Vocabulary - Tính lặp lại
	const AGAIN1 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/aGAIN1'));
	const AGAIN2 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/aGAIN2'));
	const OFten1 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/OFten1'));
	const OFten2 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/OFten2'));
	const RePEATedly1 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/rePEATedly1'));
	const RePEATedly2 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/rePEATedly2'));
	const FREquently1 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/FREquently1'));
	const FREquently2 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/FREquently2'));
	const Usually1 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/Usually1'));
	const Usually2 = lazy(() => import('@/2_main/english/vocabulary/thoigianlaplai/Usually2'));

	// 9. Vocabulary - Tính hiếm
	const SELdom1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/SELdom1'));
	const SELdom2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/SELdom2'));
	const SOMEtimes1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/SOMEtimes1'));
	const SOMEtimes2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/SOMEtimes2'));
	const RAREly1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/RAREly1'));
	const RAREly2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/RAREly2'));
	const OcCAsionally1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/ocCAsionally1'));
	const OcCAsionally2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhiem/ocCAsionally2'));

	// 10. Vocabulary - Tính liên tục
	const ALways1 = lazy(() => import('@/2_main/english/vocabulary/co/ALways1'));
	const ALways2 = lazy(() => import('@/2_main/english/vocabulary/co/ALways2'));
	const YES1 = lazy(() => import('@/2_main/english/vocabulary/co/YES1'));
	const YES2 = lazy(() => import('@/2_main/english/vocabulary/co/YES2'));
	const EVer1 = lazy(() => import('@/2_main/english/vocabulary/co/EVer1'));
	const EVer2 = lazy(() => import('@/2_main/english/vocabulary/co/EVer2'));

	// 11. Vocabulary - Tính không liên tục
	const NO1 = lazy(() => import('@/2_main/english/vocabulary/khong/NO1'));
	const NO2 = lazy(() => import('@/2_main/english/vocabulary/khong/NO2'));
	const NOT1 = lazy(() => import('@/2_main/english/vocabulary/khong/NOT1'));
	const NOT2 = lazy(() => import('@/2_main/english/vocabulary/khong/NOT2'));
	const NEVer1 = lazy(() => import('@/2_main/english/vocabulary/khong/NEVer1'));
	const NEVer2 = lazy(() => import('@/2_main/english/vocabulary/khong/NEVer2'));

	// 12. Vocabulary - Mức độ cao
	const SO1 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/SO1'));
	const SO2 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/SO2'));
	const VERy1 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/VERy1'));
	const VERy2 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/VERy2'));
	const Extremely1 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Extremely1'));
	const Extremely2 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Extremely2'));
	const Highly1 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Highly1'));
	const Highly2 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Highly2'));
	const Greatly1 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Greatly1'));
	const Greatly2 = lazy(() => import('@/2_main/english/vocabulary/mucdocao/Greatly2'));

	// 13. Vocabulary - Không chắc chắn
	const MAYbe1 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/MAYbe1'));
	const MAYbe2 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/MAYbe2'));
	const PerHAPS1 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/perHAPS1'));
	const PerHAPS2 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/perHAPS2'));
	const Possibly1 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Possibly1'));
	const Possibly2 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Possibly2'));
	const Questionably1 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Questionably1'));
	const Questionably2 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Questionably2'));
	const Probably1 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Probably1'));
	const Probably2 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Probably2'));
	const Apparently1 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Apparently1'));
	const Apparently2 = lazy(() => import('@/2_main/english/vocabulary/khongchacchan/Apparently2'));

	// 14. Vocabulary - Thời gian hiện tại
	const NOW1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/NOW1'));
	const NOW2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/NOW2'));
	const ToDAY1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/toDAY1'));
	const ToDAY2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/toDAY2'));
	const CURrently1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/CURrently1'));
	const CURrently2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/CURrently2'));
	const PRESently1 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/PRESently1'));
	const PRESently2 = lazy(() => import('@/2_main/english/vocabulary/thoigianhientai/PRESently2'));

	// 15. Vocabulary - Thời gian tương lai
	const SOON1 = lazy(() => import('@/2_main/english/vocabulary/thoigiantuonglai/SOON1'));
	const SOON2 = lazy(() => import('@/2_main/english/vocabulary/thoigiantuonglai/SOON2'));
	const ToMORrow1 = lazy(() => import('@/2_main/english/vocabulary/thoigiantuonglai/toMORrow1'));
	const ToMORrow2 = lazy(() => import('@/2_main/english/vocabulary/thoigiantuonglai/toMORrow2'));

	// 16. Vocabulary - Tính chân thành
	const SinCEREly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/sinCEREly1'));
	const SinCEREly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/sinCEREly2'));
	const HONestly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/HONestly1'));
	const HONestly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/HONestly2'));
	const FAITHfully1 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/FAITHfully1'));
	const FAITHfully2 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/FAITHfully2'));
	const Openly1 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/Openly1'));
	const Openly2 = lazy(() => import('@/2_main/english/vocabulary/tinhchanthanh/Openly2'));

	// 17. Vocabulary - Điểm nhấn đặc biệt
	const Especially1 = lazy(() => import('@/2_main/english/vocabulary/diemnhandacbiet/Especially1'));
	const Especially2 = lazy(() => import('@/2_main/english/vocabulary/diemnhandacbiet/Especially2'));
	const Particularly1 = lazy(() => import('@/2_main/english/vocabulary/diemnhandacbiet/Particularly1'));
	const Particularly2 = lazy(() => import('@/2_main/english/vocabulary/diemnhandacbiet/Particularly2'));

	// 18. Vocabulary - Về cơ bản
	const BAsically1 = lazy(() => import('@/2_main/english/vocabulary/vecoban/BAsically1'));
	const BAsically2 = lazy(() => import('@/2_main/english/vocabulary/vecoban/BAsically2'));

	// 19. Vocabulary - Tính hiệu quả
	const EfFECtively1 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/efFECtively1'));
	const EfFECtively2 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/efFECtively2'));
	const EfFICiently1 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/efFICiently1'));
	const EfFICiently2 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/efFICiently2'));
	const SucCESSfully1 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/sucCESSfully1'));
	const SucCESSfully2 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/sucCESSfully2'));
	const ProDUCtively1 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/proDUCtively1'));
	const ProDUCtively2 = lazy(() => import('@/2_main/english/vocabulary/tinhhieuqua/proDUCtively2'));

	// 20. Vocabulary - Tốc độ nhanh
	const QUICKly1 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/QUICKly1'));
	const QUICKly2 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/QUICKly2'));
	const RAPidly1 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/RAPidly1'));
	const RAPidly2 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/RAPidly2'));
	const INstantly1 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/INstantly1'));
	const INstantly2 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/INstantly2'));
	const SUDdenly1 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/SUDdenly1'));
	const SUDdenly2 = lazy(() => import('@/2_main/english/vocabulary/tocdonhanh/SUDdenly2'));

	// 21. Vocabulary - Tính kiên nhẫn
	const PAtiently1 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/PAtiently1'));
	const PAtiently2 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/PAtiently2'));
	const TIRElessly1 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/TIRElessly1'));
	const TIRElessly2 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/TIRElessly2'));
	const PerSIStently1 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/perSIStently1'));
	const PerSIStently2 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/perSIStently2'));
	const STEADily1 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/STEADily1'));
	const STEADily2 = lazy(() => import('@/2_main/english/vocabulary/tinhkiennhan/STEADily2'));

	// 22. Vocabulary - Tính cẩn thận
	const CAREfully1 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/CAREfully1'));
	const CAREfully2 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/CAREfully2'));
	const MeTICulously1 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/meTICulously1'));
	const MeTICulously2 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/meTICulously2'));
	const CAUtiously1 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/CAUtiously1'));
	const CAUtiously2 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/CAUtiously2'));
	const AtTENtively1 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/atTENtively1'));
	const AtTENtively2 = lazy(() => import('@/2_main/english/vocabulary/tinhcanthan/atTENtively2'));

	// 22. Vocabulary - Tốc độ chậm
	const SLOWly1 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/SLOWly1'));
	const SLOWly2 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/SLOWly2'));
	const LAzily1 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/LAzily1'));
	const LAzily2 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/LAzily2'));
	const GRADually1 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/GRADually1'));
	const GRADually2 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/GRADually2'));
	const BeLAtedly1 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/beLAtedly1'));
	const BeLAtedly2 = lazy(() => import('@/2_main/english/vocabulary/tocdocham/beLAtedly2'));

	// 23. Vocabulary - Tính tích cực
	const HAPpily1 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/HAPpily1'));
	const HAPpily2 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/HAPpily2'));
	const POSitively1 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/POSitively1'));
	const POSitively2 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/POSitively2'));
	const JOYfully1 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/JOYfully1'));
	const JOYfully2 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/JOYfully2'));
	const CHEERfully1 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/CHEERfully1'));
	const CHEERfully2 = lazy(() => import('@/2_main/english/vocabulary/tinhtichcuc/CHEERfully2'));

	// 24. Vocabulary - Tính nhẹ nhàng
	const GENTly1 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/GENTly1'));
	const GENTly2 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/GENTly2'));
	const DELicately2 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/DELicately2'));
	const DELicately1 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/DELicately1'));
	const SOFTly1 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/SOFTly1'));
	const SOFTly2 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/SOFTly2'));
	const TENderly2 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/TENderly2'));
	const TENderly1 = lazy(() => import('@/2_main/english/vocabulary/tinhnhenhang/TENderly1'));


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
					<Route path="/bookkeeping/bookkeeping-quiz" element={<BookkeepingQuiz />} />
					<Route path="/bookkeeping/ev-bookkeeping-Quiz" element={<EVBookkeepingQuiz />} />
					<Route path="/bookkeeping/vn-bookkeeping-Quiz" element={<VNBookkeepingQuiz />} />

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

					{/* Gerunds and Infinitives */}
					<Route path="/english/gerunds-and-infinitives-quiz" element={<GerundsAndInfinitivesQuiz />} />

					{/* Subject-Verb Agreement */}
					<Route path="/english/en-subject-verb-quiz" element={<ENSubjectVerbQuiz />} />

					{/* Primary Auxiliary Verbs */}
					<Route path="/english/primary-auxiliary-verbs-quiz" element={<PrimaryAuxiliaryVerbsQuiz />} />

					{/* Auxiliary Verbs */}
					<Route path="/english/en-auxiliary-verbs-quiz" element={<ENAuxiliaryVerbsQuiz />} />

					{/* Singular and Plural Verbs */}
					<Route path="/english/singular-and-plural-verbs-quiz" element={<SingularPluralVerbsQuiz />} />

					{/* Singular Plural Nouns Quiz */}
					<Route path="/english/singular-and-plural-nouns-quiz" element={<SingularPluralNounsQuiz />} />

					{/* Prepositions Quiz */}
					<Route path="/english/prepositions-quiz" element={<PrepositionsQuiz />} />

					{/* S And Es In Nouns Verbs */}
					<Route path="/english/s-and-es-in-nouns-and-verbs-quiz" element={<SAndEsInNounsVerbsQuiz />} />

					{/* Articles Quiz */}
					<Route path="/english/articles-quiz" element={<ArticlesQuiz />} />

					{/* Paraphrasing Techniques Quiz */}
					<Route path="/english/paraphrasing-techniques-quiz" element={<ParaphrasingTechniquesQuiz />} />

					{/* DC Quiz */}
					<Route path="/english/dc-quiz" element={<DCQuiz />} />
					<Route path="/english/adjective-clauses-quiz" element={<AdjectiveClausesQuiz />} />
					<Route path="/english/adverb-clauses-quiz" element={<AdverbClausesQuiz />} />
					<Route path="/english/noun-clauses-quiz" element={<NounClausesQuiz />} />

					{/* Matrix Quiz */}
					<Route path="/english/matrix-quiz" element={<MatrixQuiz />} />


					{/* Matrix Quiz */}
					<Route path="/english/bookkeeping-matrix-quiz" element={<BookkeepingMatrix />} />
					
					
					



					{/* 2. Grammar */}
					<Route path="/grammar" element={<GrammarIndex />} />
					<Route path="/grammar/what-is-an-adverb?" element={<Adverb />} />
					<Route path="/grammar/what-is-a-verb?" element={<Verb />} />
					<Route path="/grammar/what-is-an-adjective?" element={<Adjective />} />
					<Route path="/grammar/what-is-a-noun?" element={<Noun />} />
					<Route path="/grammar/how-to-remember-verbs-add-s?" element={<VerbsAddS />} />

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

					<Route path="/tieng-anh/giao-vien-tieng-anh-la-gi" element={<GiaoVienTiengAnh />} />

					<Route path="/tieng-anh/6-dang-hanh-dong-1" element={<SauDangHanhDong1 />} />
					<Route path="/tieng-anh/6-dang-hanh-dong-2" element={<SauDangHanhDong2 />} />

					<Route path="/tieng-anh/present-perfect" element={<PREsentPERfect />} />

					<Route path="/tieng-anh/gerunds-and-infinitives" element={<GerundsAndInfinitives />} />
					<Route path="/tieng-anh/bi-quyet-nhan-biet-tinh-tu-trong-tieng-anh" element={<NhanBietTinhTuTiengAnh />} />

					<Route path="/tieng-anh/bi-mat-ve-tu-duy-ngon-ngu-1" element={<BiMatVeTuDuyNgonNgu1 />} />
					<Route path="/tieng-anh/bi-mat-ve-tu-duy-ngon-ngu-2" element={<BiMatVeTuDuyNgonNgu2 />} />
					<Route path="/tieng-anh/bi-mat-ve-tu-duy-ngon-ngu-3" element={<BiMatVeTuDuyNgonNgu3 />} />

					<Route path="/tieng-anh/tiered-structure-1" element={<TieredStructure1 />} />
					
					<Route path="/tieng-anh/nine-box-1" element={<NineBox1 />} />
					
					<Route path="/tieng-anh/s-v-1" element={<SV1 />} />
					<Route path="/tieng-anh/s-v-2" element={<SV2 />} />
					<Route path="/tieng-anh/s-v-3" element={<SV3 />} />
					<Route path="/tieng-anh/s-v-4" element={<SV4 />} />
					<Route path="/tieng-anh/s-v-5" element={<SV5 />} />
					<Route path="/tieng-anh/s-v-6" element={<SV6 />} />
					<Route path="/tieng-anh/s-v-7" element={<SV7 />} />
					<Route path="/tieng-anh/s-v-8" element={<SV8 />} />
					<Route path="/tieng-anh/s-v-9" element={<SV9 />} />
					
					<Route path="/tieng-anh/super-words-1" element={<SuperWords1 />} />
					<Route path="/tieng-anh/super-words-2" element={<SuperWords2 />} />
					<Route path="/tieng-anh/super-words-3" element={<SuperWords3 />} />
					<Route path="/tieng-anh/super-words-4" element={<SuperWords4 />} />
					<Route path="/tieng-anh/super-words-5" element={<SuperWords5 />} />
					<Route path="/tieng-anh/super-words-6" element={<SuperWords6 />} />
					<Route path="/tieng-anh/super-words-7" element={<SuperWords7 />} />
					<Route path="/tieng-anh/super-words-8" element={<SuperWords8 />} />
					<Route path="/tieng-anh/super-words-9" element={<SuperWords9 />} />
					
					<Route path="/tieng-anh/three-dc-1" element={<ThreeDC1 />} />
					<Route path="/tieng-anh/three-dc-2" element={<ThreeDC2 />} />
					<Route path="/tieng-anh/three-dc-3" element={<ThreeDC3 />} />
					<Route path="/tieng-anh/three-dc-4" element={<ThreeDC4 />} />
					<Route path="/tieng-anh/three-dc-5" element={<ThreeDC5 />} />
					<Route path="/tieng-anh/three-dc-6" element={<ThreeDC6 />} />
					<Route path="/tieng-anh/three-dc-7" element={<ThreeDC7 />} />
					<Route path="/tieng-anh/three-dc-8" element={<ThreeDC8 />} />
					<Route path="/tieng-anh/three-dc-9" element={<ThreeDC9 />} />

					<Route path="/tieng-anh/adj-placement-1" element={<AdjPlacement1 />} />
					<Route path="/tieng-anh/adj-placement-2" element={<AdjPlacement2 />} />
					<Route path="/tieng-anh/adj-placement-3" element={<AdjPlacement3 />} />
					<Route path="/tieng-anh/adj-placement-4" element={<AdjPlacement4 />} />
					<Route path="/tieng-anh/adj-placement-5" element={<AdjPlacement5 />} />
					<Route path="/tieng-anh/adj-placement-6" element={<AdjPlacement6 />} />
					<Route path="/tieng-anh/adj-placement-7" element={<AdjPlacement7 />} />
					<Route path="/tieng-anh/adj-placement-8" element={<AdjPlacement8 />} />
					<Route path="/tieng-anh/adj-placement-9" element={<AdjPlacement9 />} />

					<Route path="/tieng-anh/lego-assembly-1" element={<LegoAssembly1 />} />
					<Route path="/tieng-anh/lego-assembly-2" element={<LegoAssembly2 />} />
					<Route path="/tieng-anh/lego-assembly-3" element={<LegoAssembly3 />} />
					<Route path="/tieng-anh/lego-assembly-4" element={<LegoAssembly4 />} />
					<Route path="/tieng-anh/lego-assembly-5" element={<LegoAssembly5 />} />
					<Route path="/tieng-anh/lego-assembly-6" element={<LegoAssembly6 />} />
					<Route path="/tieng-anh/lego-assembly-7" element={<LegoAssembly7 />} />
					<Route path="/tieng-anh/lego-assembly-8" element={<LegoAssembly8 />} />
					<Route path="/tieng-anh/lego-assembly-9" element={<LegoAssembly9 />} />
					
					<Route path="/tieng-anh/dependent-clause-1" element={<DependentClause1 />} />
					<Route path="/tieng-anh/dependent-clause-2" element={<DependentClause2 />} />
					<Route path="/tieng-anh/dependent-clause-3" element={<DependentClause3 />} />
					<Route path="/tieng-anh/dependent-clause-4" element={<DependentClause4 />} />
					<Route path="/tieng-anh/dependent-clause-5" element={<DependentClause5 />} />
					<Route path="/tieng-anh/dependent-clause-6" element={<DependentClause6 />} />
					<Route path="/tieng-anh/dependent-clause-7" element={<DependentClause7 />} />
					<Route path="/tieng-anh/dependent-clause-8" element={<DependentClause8 />} />
					<Route path="/tieng-anh/dependent-clause-9" element={<DependentClause9 />} />

					<Route path="/tieng-anh/sentence-variety-1" element={<SentenceVariety1 />} />
					<Route path="/tieng-anh/sentence-variety-2" element={<SentenceVariety2 />} />
					<Route path="/tieng-anh/sentence-variety-3" element={<SentenceVariety3 />} />
					<Route path="/tieng-anh/sentence-variety-4" element={<SentenceVariety4 />} />
					<Route path="/tieng-anh/sentence-variety-5" element={<SentenceVariety5 />} />
					<Route path="/tieng-anh/sentence-variety-6" element={<SentenceVariety6 />} />
					<Route path="/tieng-anh/sentence-variety-7" element={<SentenceVariety7 />} />
					<Route path="/tieng-anh/sentence-variety-8" element={<SentenceVariety8 />} />
					<Route path="/tieng-anh/sentence-variety-9" element={<SentenceVariety9 />} />


					<Route path="/tieng-anh/SVOMPT-1" element={<SVOMPT1 />} />
					<Route path="/tieng-anh/SVOMPT-2" element={<SVOMPT2 />} />
					<Route path="/tieng-anh/SVOMPT-3" element={<SVOMPT3 />} />
					<Route path="/tieng-anh/SVOMPT-4" element={<SVOMPT4 />} />
					<Route path="/tieng-anh/SVOMPT-5" element={<SVOMPT5 />} />
					<Route path="/tieng-anh/SVOMPT-6" element={<SVOMPT6 />} />
					<Route path="/tieng-anh/SVOMPT-7" element={<SVOMPT7 />} />
					<Route path="/tieng-anh/SVOMPT-8" element={<SVOMPT8 />} />

					<Route path="/tieng-anh/think-straight-flow-fast-1" element={<ThinkStraightFlowFast1 />} />
					<Route path="/tieng-anh/think-straight-flow-fast-2" element={<ThinkStraightFlowFast2 />} />
					<Route path="/tieng-anh/think-straight-flow-fast-3" element={<ThinkStraightFlowFast3 />} />
					<Route path="/tieng-anh/think-straight-flow-fast-4" element={<ThinkStraightFlowFast4 />} />
					<Route path="/tieng-anh/think-straight-flow-fast-5" element={<ThinkStraightFlowFast5 />} />
					<Route path="/tieng-anh/think-straight-flow-fast-6" element={<ThinkStraightFlowFast6 />} />
					<Route path="/tieng-anh/think-straight-flow-fast-7" element={<ThinkStraightFlowFast7 />} />
					<Route path="/tieng-anh/think-straight-flow-fast-8" element={<ThinkStraightFlowFast8 />} />

					<Route path="/tieng-anh/the-beauty-of-the-girl-1" element={<TheBeautyOfTheGirl1 />} />
					<Route path="/tieng-anh/the-beauty-of-the-girl-2" element={<TheBeautyOfTheGirl2 />} />
					<Route path="/tieng-anh/the-beauty-of-the-girl-3" element={<TheBeautyOfTheGirl3 />} />
					<Route path="/tieng-anh/the-beauty-of-the-girl-4" element={<TheBeautyOfTheGirl4 />} />
					<Route path="/tieng-anh/the-beauty-of-the-girl-5" element={<TheBeautyOfTheGirl5 />} />


					<Route path="/tieng-anh/5-dang-dong-tu-vang-rong-2" element={<NamDangDongTuVangRong2 />} />
					<Route path="/tieng-anh/5-dang-dong-tu-vang-rong-1" element={<NamDangDongTuVangRong1 />} />

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
					
					
					<Route path="/tieng-anh/meo-hay-de-viet-tieng-anh-muot-ma-hon" element={<VietTiengAnhMuotMaHon />} />

					<Route path="/tieng-anh/irregular-verbs" element={<IrregularVerbs />} />
					<Route path="/tieng-anh/phrasal-verbs" element={<PhrasalVerbs />} />



					{/* Quiz */}
					<Route path="/tieng-anh/tieng-anh-questions" element={<TiengAnhQuestions />} />

					{/* Ngữ pháp */}
					<Route path="/tieng-anh/trac-nghiem-ngu-phap-tieng-anh" element={<TracNghiemNguPhapTiengAnh />} />

					{/* Động cụm */}
					<Route path="/tieng-anh/phrasal-verbs-quiz" element={<PhrasalVerbsQuiz />} />

					{/* Thì tiếng Anh */}
					<Route path="/tieng-anh/trac-nghiem-thi-tieng-anh" element={<TracNghiemThiTiengAnh />} />

					{/* Gerunds and Infinitives */}
					<Route path="/tieng-anh/trac-nghiem-gerunds-and-infinitives" element={<TracNghiemGerundsAndInfinitives />} />

					{/* Subject-Verb Agreement */}
					<Route path="/tieng-anh/ev-subject-verb-quiz" element={<EVSubjectVerbQuiz />} />

					{/* Primary Auxiliary Verbs */}
					<Route path="/tieng-anh/ev-primary-auxiliary-verbs-quiz" element={<EVPrimaryAuxiliaryVerbsQuiz />} />

					{/* Auxiliary Verbs */}
					<Route path="/tieng-anh/ev-auxiliary-verbs-quiz" element={<EVAuxiliaryVerbsQuiz />} />

					{/* EVSingularPluralVerbs */}
					<Route path="/tieng-anh/ev-singular-and-plural-verbs-quiz" element={<EVSingularPluralVerbsQuiz />} />

					{/* EV Singular Plural Nouns Quiz */}
					<Route path="/tieng-anh/ev-singular-and-plural-nouns-quiz" element={<EVSingularPluralNounsQuiz />} />

					{/* EV Prepositions Quiz */}
					<Route path="/tieng-anh/ev-prepositions-quiz" element={<EVPrepositionsQuiz />} />

					{/* EV Prepositions Quiz */}
					<Route path="/tieng-anh/ev-s-and-es-in-nouns-and-verbs-quiz" element={<EVSAndEsInNounsVerbsQuiz />} />

					{/* EV Articles Quiz */}
					<Route path="/tieng-anh/ev-articles-quiz" element={<EVArticlesQuiz />} />

					{/* EV Paraphrasing TechniquesQuiz */}
					<Route path="/tieng-anh/ev-paraphrasing-techniques-quiz" element={<EVParaphrasingTechniquesQuiz />} />

					{/* EV DC Quiz */}
					<Route path="/tieng-anh/ev-dc-quiz" element={<EVDCQuiz />} />
					<Route path="/tieng-anh/ev-adjective-clauses-quiz" element={<EVAdjectiveClausesQuiz />} />
					<Route path="/tieng-anh/ev-adverb-clauses-quiz" element={<EVAdverbClausesQuiz />} />
					<Route path="/tieng-anh/ev-noun-clauses-quiz" element={<EVNounClausesQuiz />} />

					{/* EV Matrix Quiz */}
					<Route path="/tieng-anh/ev-matrix-quiz" element={<EVMatrixQuiz />} />

					{/* EV Matrix Quiz */}
					<Route path="/tieng-anh/ev-bookkeeping-matrix-quiz" element={<EVBookkeepingMatrix />} />
					






					{/* Vocabulary */}
					<Route path="/vocabulary" element={<VocabularyIndex />} />




					{/* 1. Vocabulary - Verbs */}
					<Route path="/vocabulary/clear" element={<Clear />} />
					<Route path="/vocabulary/respond" element={<Respond />} />
					<Route path="/vocabulary/create" element={<Create />} />
					




					{/* 1. Vocabulary - Adjectives */}
					<Route path="/vocabulary/BEAUtiful" element={<BEAUtiful />} />
					<Route path="/vocabulary/atTRACtive" element={<AtTRACtive />} />
					<Route path="/vocabulary/grateful" element={<GRATEful />} />



					{/* 1. Vocabulary - DC */}

					
					
					<Route path="/vocabulary/when" element={<When />} />
					<Route path="/vocabulary/if" element={<If />} />
					<Route path="/vocabulary/although" element={<Although />} />
					<Route path="/vocabulary/because" element={<Because />} />
					
					
					


					{/* 5. Vocabulary - Tính chính xác */}
					<Route path="/vocabulary/ACcurately-1" element={<ACcurately1 />} />
					<Route path="/vocabulary/ACcurately-2" element={<ACcurately2 />} />
					<Route path="/vocabulary/preCISEly-1" element={<PreCISEly1 />} />
					<Route path="/vocabulary/preCISEly-2" element={<PreCISEly2 />} />
					<Route path="/vocabulary/corRECTly-1" element={<CorRECTly1 />} />
					<Route path="/vocabulary/corRECTly-2" element={<CorRECTly2 />} />
					<Route path="/vocabulary/exACTly-1" element={<ExACTly1 />} />
					<Route path="/vocabulary/exACTly-2" element={<ExACTly2 />} />

					{/* 5. Vocabulary - Tính tỉ mỉ */}
					<Route path="/vocabulary/PAINStakingly-1" element={<PAINStakingly1 />} />
					<Route path="/vocabulary/PAINStakingly-2" element={<PAINStakingly2 />} />
					<Route path="/vocabulary/THORoughly-1" element={<THORoughly1 />} />
					<Route path="/vocabulary/THORoughly-2" element={<THORoughly2 />} />
					<Route path="/vocabulary/DILiGENTly-1" element={<DILigently1 />} />
					<Route path="/vocabulary/DILiGENTly-2" element={<DILigently2 />} />
					<Route path="/vocabulary/SCRUpulously-1" element={<SCRUpulously1 />} />
					<Route path="/vocabulary/SCRUpulously-2" element={<SCRUpulously2 />} />

					{/* 5. Vocabulary - Tính rõ ràng */}
					<Route path="/vocabulary/CLEARly-1" element={<CLEARly1 />} />
					<Route path="/vocabulary/CLEARly-2" element={<CLEARly2 />} />
					<Route path="/vocabulary/OBviously-1" element={<OBviously1 />} />
					<Route path="/vocabulary/OBviously-2" element={<OBviously2 />} />
					<Route path="/vocabulary/EVidently-1" element={<EVidently1 />} />
					<Route path="/vocabulary/EVidently-2" element={<EVidently2 />} />
					<Route path="/vocabulary/VISibly-1" element={<VISibly1 />} />
					<Route path="/vocabulary/VISibly-2" element={<VISibly2 />} />

					{/* 6. Vocabulary - Tính xác thực */}
					<Route path="/vocabulary/ACtually-1" element={<ACtually1 />} />
					<Route path="/vocabulary/ACtually-2" element={<ACtually2 />} />
					<Route path="/vocabulary/TRUly-1" element={<TRUly1 />} />
					<Route path="/vocabulary/TRUly-2" element={<TRUly2 />} />
					<Route path="/vocabulary/REALly-1" element={<REALly1 />} />
					<Route path="/vocabulary/REALly-2" element={<REALly2 />} />
					<Route path="/vocabulary/GENuinely-1" element={<GENuinely1 />} />
					<Route path="/vocabulary/GENuinely-2" element={<GENuinely2 />} />

					{/* 7. Vocabulary - Tính chắc chắn */}
					<Route path="/vocabulary/CERtainly-1" element={<CERtainly1 />} />
					<Route path="/vocabulary/CERtainly-2" element={<CERtainly2 />} />
					<Route path="/vocabulary/DEFinitely-1" element={<DEFinitely1 />} />
					<Route path="/vocabulary/DEFinitely-2" element={<DEFinitely2 />} />
					<Route path="/vocabulary/absoLUTEly-1" element={<AbsoLUTEly1 />} />
					<Route path="/vocabulary/absoLUTEly-2" element={<AbsoLUTEly2 />} />
					<Route path="/vocabulary/SUREly-1" element={<SUREly1 />} />
					<Route path="/vocabulary/SUREly-2" element={<SUREly2 />} />

					{/* 8. Vocabulary - Thời gian lặp lại */}
					<Route path="/vocabulary/aGAIN-1" element={<AGAIN1 />} />
					<Route path="/vocabulary/aGAIN-2" element={<AGAIN2 />} />
					<Route path="/vocabulary/OFten-1" element={<OFten1 />} />
					<Route path="/vocabulary/OFten-2" element={<OFten2 />} />
					<Route path="/vocabulary/rePEATedly-1" element={<RePEATedly1 />} />
					<Route path="/vocabulary/rePEATedly-2" element={<RePEATedly2 />} />
					<Route path="/vocabulary/FREquently-1" element={<FREquently1 />} />
					<Route path="/vocabulary/FREquently-2" element={<FREquently2 />} />
					<Route path="/vocabulary/Usually-1" element={<Usually1 />} />
					<Route path="/vocabulary/Usually-2" element={<Usually2 />} />

					{/* 9. Vocabulary - Tính hiếm */}
					<Route path="/vocabulary/SELdom-1" element={<SELdom1 />} />
					<Route path="/vocabulary/SELdom-2" element={<SELdom2 />} />
					<Route path="/vocabulary/SOMEtimes-1" element={<SOMEtimes1 />} />
					<Route path="/vocabulary/SOMEtimes-2" element={<SOMEtimes2 />} />
					<Route path="/vocabulary/RAREly-1" element={<RAREly1 />} />
					<Route path="/vocabulary/RAREly-2" element={<RAREly2 />} />
					<Route path="/vocabulary/ocCAsionally-1" element={<OcCAsionally1 />} />
					<Route path="/vocabulary/ocCAsionally-2" element={<OcCAsionally2 />} />

					{/* 10. Vocabulary - Tính liên tục */}
					<Route path="/vocabulary/ALways-1" element={<ALways1 />} />
					<Route path="/vocabulary/ALways-2" element={<ALways2 />} />
					<Route path="/vocabulary/YES-1" element={<YES1 />} />
					<Route path="/vocabulary/YES-2" element={<YES2 />} />
					<Route path="/vocabulary/EVer-1" element={<EVer1 />} />
					<Route path="/vocabulary/EVer-2" element={<EVer2 />} />

					{/* 11. Vocabulary - Tính không liên tục */}
					<Route path="/vocabulary/NO-1" element={<NO1 />} />
					<Route path="/vocabulary/NO-2" element={<NO2 />} />
					<Route path="/vocabulary/NOT-1" element={<NOT1 />} />
					<Route path="/vocabulary/NOT-2" element={<NOT2 />} />
					<Route path="/vocabulary/NEVer-1" element={<NEVer1 />} />
					<Route path="/vocabulary/NEVer-2" element={<NEVer2 />} />

					{/* 12. Vocabulary - Mức độ cao */}
					<Route path="/vocabulary/SO-1" element={<SO1 />} />
					<Route path="/vocabulary/SO-2" element={<SO2 />} />
					<Route path="/vocabulary/VERy-1" element={<VERy1 />} />
					<Route path="/vocabulary/VERy-2" element={<VERy2 />} />
					<Route path="/vocabulary/extremely-1" element={<Extremely1 />} />
					<Route path="/vocabulary/extremely-2" element={<Extremely2 />} />
					<Route path="/vocabulary/highly-1" element={<Highly1 />} />
					<Route path="/vocabulary/highly-2" element={<Highly2 />} />
					<Route path="/vocabulary/greatly-1" element={<Greatly1 />} />
					<Route path="/vocabulary/greatly-2" element={<Greatly2 />} />

					{/* 13. Vocabulary - Không chắc chắn */}
					<Route path="/vocabulary/MAYbe-1" element={<MAYbe1 />} />
					<Route path="/vocabulary/MAYbe-2" element={<MAYbe2 />} />
					<Route path="/vocabulary/perHAPS-1" element={<PerHAPS1 />} />
					<Route path="/vocabulary/perHAPS-2" element={<PerHAPS2 />} />
					<Route path="/vocabulary/possibly-1" element={<Possibly1 />} />
					<Route path="/vocabulary/possibly-2" element={<Possibly2 />} />
					<Route path="/vocabulary/questionably-1" element={<Questionably1 />} />
					<Route path="/vocabulary/questionably-2" element={<Questionably2 />} />
					<Route path="/vocabulary/probably-1" element={<Probably1 />} />
					<Route path="/vocabulary/probably-2" element={<Probably2 />} />
					<Route path="/vocabulary/apparently-1" element={<Apparently1 />} />
					<Route path="/vocabulary/apparently-2" element={<Apparently2 />} />

					{/* 14. Vocabulary - Thời gian hiện tại */}
					<Route path="/vocabulary/NOW-1" element={<NOW1 />} />
					<Route path="/vocabulary/NOW-2" element={<NOW2 />} />
					<Route path="/vocabulary/toDAY-1" element={<ToDAY1 />} />
					<Route path="/vocabulary/toDAY-2" element={<ToDAY2 />} />
					<Route path="/vocabulary/CURrently-1" element={<CURrently1 />} />
					<Route path="/vocabulary/CURrently-2" element={<CURrently2 />} />
					<Route path="/vocabulary/PRESently-1" element={<PRESently1 />} />
					<Route path="/vocabulary/PRESently-2" element={<PRESently2 />} />

					{/* 15. Vocabulary - Thời gian tương lai */}
					<Route path="/vocabulary/SOON-1" element={<SOON1 />} />
					<Route path="/vocabulary/SOON-2" element={<SOON2 />} />
					<Route path="/vocabulary/toMORrow-1" element={<ToMORrow1 />} />
					<Route path="/vocabulary/toMORrow-2" element={<ToMORrow2 />} />

					{/* 16. Vocabulary - Tính chân thành */}
					<Route path="/vocabulary/sinCEREly-1" element={<SinCEREly1 />} />
					<Route path="/vocabulary/sinCEREly-2" element={<SinCEREly2 />} />
					<Route path="/vocabulary/HONestly-1" element={<HONestly1 />} />
					<Route path="/vocabulary/HONestly-2" element={<HONestly2 />} />
					<Route path="/vocabulary/FAITHfully-1" element={<FAITHfully1 />} />
					<Route path="/vocabulary/FAITHfully-2" element={<FAITHfully2 />} />
					<Route path="/vocabulary/Openly-1" element={<Openly1 />} />
					<Route path="/vocabulary/Openly-2" element={<Openly2 />} />

					{/* 17. Vocabulary - Điểm nhấn đặc biệt */}
					<Route path="/vocabulary/especially-1" element={<Especially1 />} />
					<Route path="/vocabulary/especially-2" element={<Especially2 />} />
					<Route path="/vocabulary/particularly-1" element={<Particularly1 />} />
					<Route path="/vocabulary/particularly-2" element={<Particularly2 />} />

					{/* 18. Vocabulary - Về cơ bản */}
					<Route path="/vocabulary/BAsically-1" element={<BAsically1 />} />
					<Route path="/vocabulary/BAsically-2" element={<BAsically2 />} />

					{/* 19. Vocabulary - Tính hiệu quả */}
					<Route path="/vocabulary/efFECtively-1" element={<EfFECtively1 />} />
					<Route path="/vocabulary/efFECtively-2" element={<EfFECtively2 />} />
					<Route path="/vocabulary/efFICiently-1" element={<EfFICiently1 />} />
					<Route path="/vocabulary/efFICiently-2" element={<EfFICiently2 />} />
					<Route path="/vocabulary/sucCESSfully-1" element={<SucCESSfully1 />} />
					<Route path="/vocabulary/sucCESSfully-2" element={<SucCESSfully2 />} />
					<Route path="/vocabulary/proDUCtively-1" element={<ProDUCtively1 />} />
					<Route path="/vocabulary/proDUCtively-2" element={<ProDUCtively2 />} />

					{/* 20. Vocabulary - Tốc độ nhanh */}
					<Route path="/vocabulary/QUICKly-1" element={<QUICKly1 />} />
					<Route path="/vocabulary/QUICKly-2" element={<QUICKly2 />} />
					<Route path="/vocabulary/RAPidly-1" element={<RAPidly1 />} />
					<Route path="/vocabulary/RAPidly-2" element={<RAPidly2 />} />
					<Route path="/vocabulary/INstantly-1" element={<INstantly1 />} />
					<Route path="/vocabulary/INstantly-2" element={<INstantly2 />} />
					<Route path="/vocabulary/SUDdenly-1" element={<SUDdenly1 />} />
					<Route path="/vocabulary/SUDdenly-2" element={<SUDdenly2 />} />

					{/* 21. Vocabulary - Tính kiên nhẫn */}
					<Route path="/vocabulary/PAtiently-1" element={<PAtiently1 />} />
					<Route path="/vocabulary/PAtiently-2" element={<PAtiently2 />} />
					<Route path="/vocabulary/TIRElessly-1" element={<TIRElessly1 />} />
					<Route path="/vocabulary/TIRElessly-2" element={<TIRElessly2 />} />
					<Route path="/vocabulary/perSIStently-1" element={<PerSIStently1 />} />
					<Route path="/vocabulary/perSIStently-2" element={<PerSIStently2 />} />
					<Route path="/vocabulary/STEADily-1" element={<STEADily1 />} />
					<Route path="/vocabulary/STEADily-2" element={<STEADily2 />} />

					{/* 22. Vocabulary - Tính cẩn thận */}
					<Route path="/vocabulary/CAREfully-1" element={<CAREfully1 />} />
					<Route path="/vocabulary/CAREfully-2" element={<CAREfully2 />} />
					<Route path="/vocabulary/meTICulously-1" element={<MeTICulously1 />} />
					<Route path="/vocabulary/meTICulously-2" element={<MeTICulously2 />} />
					<Route path="/vocabulary/CAUtiously-1" element={<CAUtiously1 />} />
					<Route path="/vocabulary/CAUtiously-2" element={<CAUtiously2 />} />
					<Route path="/vocabulary/atTENtively-1" element={<AtTENtively1 />} />
					<Route path="/vocabulary/atTENtively-2" element={<AtTENtively2 />} />

					{/* 22. Vocabulary - Tốc độ chậm */}
					<Route path="/vocabulary/SLOWly-1" element={<SLOWly1 />} />
					<Route path="/vocabulary/SLOWly-2" element={<SLOWly2 />} />
					<Route path="/vocabulary/LAzily-1" element={<LAzily1 />} />
					<Route path="/vocabulary/LAzily-2" element={<LAzily2 />} />
					<Route path="/vocabulary/GRADually-1" element={<GRADually1 />} />
					<Route path="/vocabulary/GRADually-2" element={<GRADually2 />} />
					<Route path="/vocabulary/beLAtedly-1" element={<BeLAtedly1 />} />
					<Route path="/vocabulary/beLAtedly-2" element={<BeLAtedly2 />} />

					{/* 23. Vocabulary - Tính tích cực */}
					<Route path="/vocabulary/HAPpily-1" element={<HAPpily1 />} />
					<Route path="/vocabulary/HAPpily-2" element={<HAPpily2 />} />
					<Route path="/vocabulary/POSitively-1" element={<POSitively1 />} />
					<Route path="/vocabulary/POSitively-2" element={<POSitively2 />} />
					<Route path="/vocabulary/JOYfully-1" element={<JOYfully1 />} />
					<Route path="/vocabulary/JOYfully-2" element={<JOYfully2 />} />
					<Route path="/vocabulary/CHEERfully-1" element={<CHEERfully1 />} />
					<Route path="/vocabulary/CHEERfully-2" element={<CHEERfully2 />} />

					{/* 24. Vocabulary - Tính nhẹ nhàng */}
					<Route path="/vocabulary/GENTly-1" element={<GENTly1 />} />
					<Route path="/vocabulary/GENTly-2" element={<GENTly2 />} />
					<Route path="/vocabulary/DELicately-1" element={<DELicately1 />} />
					<Route path="/vocabulary/DELicately-2" element={<DELicately2 />} />
					<Route path="/vocabulary/SOFTly-1" element={<SOFTly1 />} />
					<Route path="/vocabulary/SOFTly-2" element={<SOFTly2 />} />
					<Route path="/vocabulary/TENderly-1" element={<TENderly1 />} />
					<Route path="/vocabulary/TENderly-2" element={<TENderly2 />} />


			</Route>

		</Routes>

	</Suspense>

	);
}