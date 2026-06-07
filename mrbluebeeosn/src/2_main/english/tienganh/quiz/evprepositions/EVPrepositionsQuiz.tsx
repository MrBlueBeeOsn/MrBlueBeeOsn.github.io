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

export default function EVPrepositionsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "I am interested _______ learning more about ancient history.",
			options: [
				"in",
				"on",
				"at",
				"for"
			],
			correctAnswer: 0,
			explanation: "Cấum từ cố định \"be interested in something\" có nghĩa là quan tâm hoặc hứng thú với cái gì đó."
		},
		{
			id: 2,
			question: "We agreed _______ the date of the meeting after a long discussion.",
			options: [
				"to",
				"with",
				"on",
				"for"
			],
			correctAnswer: 2,
			explanation: "\"Agree on something\" được dùng khi các bên cùng thống nhất về một kế hoạch, ngày tháng hoặc quyết định chung."
		},
		{
			id: 3,
			question: "She has been waiting for the bus _______ 8 o'clock this morning.",
			options: [
				"for",
				"since",
				"from",
				"during"
			],
			correctAnswer: 1,
			explanation: "\"Since\" dùng để chỉ một mốc thời gian cụ thể trong quá khứ khi hành động bắt đầu và kéo dài đến hiện tại."
		},
		{
			id: 4,
			question: "The cat is hiding _______ the bed because it is scared of the vacuum cleaner.",
			options: [
				"above",
				"over",
				"under",
				"through"
			],
			correctAnswer: 2,
			explanation: "\"Under\" nghĩa là ở phía dưới/dưới gầm, phù hợp với vị trí trốn dưới giường."
		},
		{
			id: 5,
			question: "My brother is very good _______ playing the guitar.",
			options: [
				"in",
				"at",
				"with",
				"about"
			],
			correctAnswer: 1,
			explanation: "Cấu trúc \"be good at something/doing something\" dùng để nói về việc giỏi một lĩnh vực hay kỹ năng nào đó."
		},
		{
			id: 6,
			question: "They decided to go for a walk _______ the rain.",
			options: [
				"despite",
				"although",
				"in spite",
				"even though"
			],
			correctAnswer: 0,
			explanation: "\"Despite\" hoặc \"In spite of\" đi kèm với một danh cơ/danh cụm (the rain) để chỉ sự nhượng bộ (mặc dù)."
		},
		{
			id: 7,
			question: "Please remind me _______ call my mother tonight.",
			options: [
				"of",
				"about",
				"to",
				"for"
			],
			correctAnswer: 2,
			explanation: "Cấu trúc \"remind someone to do something\" nghĩa là nhắc nhở ai đó làm việc gì."
		},
		{
			id: 8,
			question: "The keys are _______ the table in the hallway.",
			options: [
				"in",
				"at",
				"on",
				"into"
			],
			correctAnswer: 2,
			explanation: "Dùng giới cơ \"on\" để chỉ vị trí trên bề mặt của một vật phẳng như cái bàn."
		},
		{
			id: 9,
			question: "He apologized _______ his teacher for being late.",
			options: [
				"with",
				"to",
				"for",
				"at"
			],
			correctAnswer: 1,
			explanation: "Cấu trúc đầy đủ là \"apologize to someone for something\" (xin lỗi ai về việc gì)."
		},
		{
			id: 10,
			question: "We are going to New York _______ June.",
			options: [
				"in",
				"on",
				"at",
				"since"
			],
			correctAnswer: 0,
			explanation: "Giới cơ \"in\" được dùng trước các tháng, mùa, năm và các khoảng thời gian dài."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-prepositions-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Prepositions</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 29, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};