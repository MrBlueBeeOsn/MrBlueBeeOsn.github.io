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

export default function EVArticlesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "I saw ______ movie last night. ______ movie was excellent.",
			options: [
				"a / A",
				"a / The",
				"the / The",
				"an / The"
			],
			correctAnswer: 1,
			explanation: "Lần đầu nhắc đến \"movie\" dùng mạo từ bất định \"a\". Khi nhắc lại bộ phim đó ở câu thứ hai, vật thể đã được xác định nên dùng \"the\"."
		},
		{
			id: 2,
			question: "My brother is ______ university student in London.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 0,
			explanation: "Mặc dù \"university\" bắt đầu bằng chữ \"u\", nhưng phát âm là /juː/ (phụ âm), nên ta dùng \"a\" thay vì \"an\"."
		},
		{
			id: 3,
			question: "She wants to become ______ engineer when she grows up.",
			options: [
				"a",
				"the",
				"an",
				"(no article)"
			],
			correctAnswer: 2,
			explanation: "\"Engineer\" bắt đầu bằng nguyên âm /e/, vì vậy ta dùng mạo từ \"an\"."
		},
		{
			id: 4,
			question: "______ Mount Everest is the highest mountain in the world.",
			options: [
				"A",
				"An",
				"The",
				"(no article)"
			],
			correctAnswer: 3,
			explanation: "Quy tắc chung là không dùng mạo từ \"the\" trước tên các ngọn núi đơn lẻ (chỉ dùng cho các dãy núi)."
		},
		{
			id: 5,
			question: "He is ______ honest man you can trust.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 1,
			explanation: "Từ \"honest\" có âm \"h\" câm, phát âm bắt đầu bằng nguyên âm /ɒ/, nên dùng \"an\"."
		},
		{
			id: 6,
			question: "Look at ______ moon! It's so bright tonight.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 2,
			explanation: "Dùng \"the\" cho những vật thể duy nhất, độc nhất (như mặt trăng, mặt trời, trái đất)."
		},
		{
			id: 7,
			question: "We usually have ______ lunch at 12:30 PM.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 3,
			explanation: "Không dùng mạo từ trước tên các bữa ăn (breakfast, lunch, dinner) trừ khi có tính từ đứng trước hoặc nói về một bữa ăn cụ thể."
		},
		{
			id: 8,
			question: "My father plays ______ piano very well.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 2,
			explanation: "Dùng mạo từ \"the\" trước tên các loại nhạc cụ khi nói về kỹ năng chơi nhạc cụ đó."
		},
		{
			id: 9,
			question: "Paris is ______ capital of France.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 2,
			explanation: "Cấu trúc \"The + noun + of + noun\" dùng để chỉ một đối tượng cụ thể, xác định."
		},
		{
			id: 10,
			question: "Can you pass me ______ salt, please?",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 2,
			explanation: "Trong ngữ cảnh này, cả người nói và người nghe đều biết rõ \"lọ muối\" đang được nhắc tới ở trên bàn, nên dùng \"the\"."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-articles-quiz"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Articles</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>April 15, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};