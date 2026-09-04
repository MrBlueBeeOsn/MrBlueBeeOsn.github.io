// TiengAnhPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import EnglishPracticeQuiz from '../../../../../components/quiz/EnglishPracticeQuiz';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

interface Question {
	id: number;
	question: string;
	options: string[];
	correctAnswer: number;
	explanation: string;
}

export default function EVPrimaryAuxiliaryVerbsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "she ________ NOT FINished her acCOUNTing rePORT YET.",
			options: [
				"does",
				"has",
				"is",
				"did"
			],
			correctAnswer: 1,
			explanation: "Câu ở 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành (PRESent PERfect) với cấu trúc s + have/has + V3/ed. Với danh chủ \"she\", ta dùng \"has\"."
		},
		{
			id: 2,
			question: "________ you STUDy the NEW interNATional acCOUNTing STANDards YESterday?",
			options: [
				"do",
				"have",
				"did",
				"were"
			],
			correctAnswer: 2,
			explanation: "Câu nghi vấn ⏳ Thời Gian Hành Động ở Quá Khứ Đơn (PAST SIMple) mượn thời gian hành động \"did\" đứng trước danh chủ, hành động chính \"STUDy\" giữ nguyên mẫu."
		},
		{
			id: 3,
			question: "the fiNANcial STATEments ________ being AUdited by the inTERnal TEAM RIGHT NOW.",
			options: [
				"are",
				"have",
				"do",
				"is"
			],
			correctAnswer: 0,
			explanation: "Câu ở ⏱️ thời điểm hành động ở hiện tại tiếp diễn thể bị động (PRESent conTINuous PASSive): s + am/is/are + being + V3/ed. \"STATEments\" là Danh Cơ số nhiều nên dùng \"are\"."
		},
		{
			id: 4,
			question: "WHY ________ he ALways inSIST on Using MANual SPREADsheets inSTEAD of SOFTware?",
			options: [
				"is",
				"has",
				"does",
				"did"
			],
			correctAnswer: 2,
			explanation: "Câu hỏi ở ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với hành động thường \"inSIST\". Danh chủ \"he\" yêu cầu thời gian hành động \"does\"."
		},
		{
			id: 5,
			question: "we ________ had many opporTUnities to PRACtice exCEL FUNCtions this MONTH.",
			options: [
				"are",
				"do",
				"have",
				"did"
			],
			correctAnswer: 2,
			explanation: "📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành dùng để diễn tả hành động kéo dài đến hiện tại. Cấu trúc s (we) + have + V3 (had)."
		},
		{
			id: 6,
			question: "________ the COMpany proVIDE FREE ENGlish COURSes for its emPLOYees LAST YEAR?",
			options: [
				"does",
				"did",
				"has",
				"was"
			],
			correctAnswer: 1,
			explanation: "Dấu hiệu \"LAST YEAR\" cho thấy đây là ⏳ Thời Gian Hành Động ở Quá Khứ Đơn. Mượn thời gian hành động \"did\" cho câu hỏi với hành động thường \"proVIDE\"."
		},
		{
			id: 7,
			question: "i ________ CURrently READing a BOOK about efFECtive transLAtion techNIQUES.",
			options: [
				"do",
				"have",
				"am",
				"be"
			],
			correctAnswer: 2,
			explanation: "⏱️ Thời Điểm Hành Động ở Hiện Tại Tiếp Diễn diễn tả hành động đang xảy ra: s (i) + am + V-ing."
		},
		{
			id: 8,
			question: "they ________ NOT LIKE the WAY the NEW SOFTware ORganizes the DAta.",
			options: [
				"does",
				"are",
				"do",
				"have"
			],
			correctAnswer: 2,
			explanation: "Câu phủ định ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với danh chủ \"they\" (số nhiều) sử dụng thời gian hành động \"do\" + not."
		},
		{
			id: 9,
			question: "the TAX DOCuments ________ alREADy been SENT to the TAX OFfice.",
			options: [
				"are",
				"have",
				"do",
				"did"
			],
			correctAnswer: 1,
			explanation: "📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành thể bị động: s + have/has + been + V3/ed. \"DOCuments\" số nhiều đi với \"have\"."
		},
		{
			id: 10,
			question: "________ she WORKing on the BALance SHEET when you CALLED her?",
			options: [
				"does",
				"has",
				"was",
				"did"
			],
			correctAnswer: 2,
			explanation: "Câu hỏi ở ⏱️ Thời Điểm Hành Động ở Quá Khứ Tiếp Diễn: was/were + s + V-ing. Với danh chủ \"she\", ta dùng \"was\"."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-primary-auxiliary-verbs-quiz"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Primary Auxiliary Verbs</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 26, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};