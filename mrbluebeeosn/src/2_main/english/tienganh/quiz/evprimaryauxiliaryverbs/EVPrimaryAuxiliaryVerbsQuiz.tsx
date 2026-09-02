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
			question: "She ________ not finished her accounting report yet.",
			options: [
				"does",
				"has",
				"is",
				"did"
			],
			correctAnswer: 1,
			explanation: "Câu ở 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành (Present Perfect) với cấu trúc S + have/has + V3/ed. Với danh chủ \"She\", ta dùng \"has\"."
		},
		{
			id: 2,
			question: "________ you study the new international accounting standards yesterday?",
			options: [
				"Do",
				"Have",
				"Did",
				"Were"
			],
			correctAnswer: 2,
			explanation: "Câu nghi vấn ⏳ Thời Gian Hành Động ở Quá Khứ Đơn (Past Simple) mượn thời gian hành động \"Did\" đứng trước danh chủ, hành động chính \"study\" giữ nguyên mẫu."
		},
		{
			id: 3,
			question: "The financial statements ________ being audited by the internal team right now.",
			options: [
				"are",
				"have",
				"do",
				"is"
			],
			correctAnswer: 0,
			explanation: "Câu ở ⏱️ thời điểm hành động ở hiện tại tiếp diễn thể bị động (Present Continuous Passive): S + am/is/are + being + V3/ed. \"Statements\" là Danh Cơ số nhiều nên dùng \"are\"."
		},
		{
			id: 4,
			question: "Why ________ he always insist on using manual spreadsheets instead of software?",
			options: [
				"is",
				"has",
				"does",
				"did"
			],
			correctAnswer: 2,
			explanation: "Câu hỏi ở ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với hành động thường \"insist\". Danh chủ \"he\" yêu cầu thời gian hành động \"does\"."
		},
		{
			id: 5,
			question: "We ________ had many opportunities to practice Excel functions this month.",
			options: [
				"are",
				"do",
				"have",
				"did"
			],
			correctAnswer: 2,
			explanation: "📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành dùng để diễn tả hành động kéo dài đến hiện tại. Cấu trúc S (We) + have + V3 (had)."
		},
		{
			id: 6,
			question: "________ the company provide free English courses for its employees last year?",
			options: [
				"Does",
				"Did",
				"Has",
				"Was"
			],
			correctAnswer: 1,
			explanation: "Dấu hiệu \"last year\" cho thấy đây là ⏳ Thời Gian Hành Động ở Quá Khứ Đơn. Mượn thời gian hành động \"Did\" cho câu hỏi với hành động thường \"provide\"."
		},
		{
			id: 7,
			question: "I ________ currently reading a book about effective translation techniques.",
			options: [
				"do",
				"have",
				"am",
				"be"
			],
			correctAnswer: 2,
			explanation: "⏱️ Thời Điểm Hành Động ở Hiện Tại Tiếp Diễn diễn tả hành động đang xảy ra: S (I) + am + V-ing."
		},
		{
			id: 8,
			question: "They ________ not like the way the new software organizes the data.",
			options: [
				"does",
				"are",
				"do",
				"have"
			],
			correctAnswer: 2,
			explanation: "Câu phủ định ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với danh chủ \"They\" (số nhiều) sử dụng thời gian hành động \"do\" + not."
		},
		{
			id: 9,
			question: "The tax documents ________ already been sent to the tax office.",
			options: [
				"are",
				"have",
				"do",
				"did"
			],
			correctAnswer: 1,
			explanation: "📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành thể bị động: S + have/has + been + V3/ed. \"Documents\" số nhiều đi với \"have\"."
		},
		{
			id: 10,
			question: "________ she working on the balance sheet when you called her?",
			options: [
				"Does",
				"Has",
				"Was",
				"Did"
			],
			correctAnswer: 2,
			explanation: "Câu hỏi ở ⏱️ Thời Điểm Hành Động ở Quá Khứ Tiếp Diễn: Was/Were + S + V-ing. Với danh chủ \"she\", ta dùng \"Was\"."
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