// EnglishQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import EnglishQuiz from './EnglishQuiz';

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

const EnglishQuiz0110: React.FC = () => {
	// Danh sách câu hỏi về tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Choose the sentence that is grammatically correct.",
			options: [
				"She don't like coffee.",
				"She doesn't likes coffee.",
				"She doesn't like coffee.",
				"She not like coffee."
			],
			correctAnswer: 2,
			explanation: "Chủ ngữ \"She\" ngôi thứ ba số ít, nên cần trợ động từ \"does\" + động từ nguyên thể \"like\" trong câu phủ định. Các đáp án khác sai về sự hòa hợp chủ ngữ-động từ."
		},
		{
			id: 2,
			question: "Identify the correct preposition: He is very good ______ playing the guitar.",
			options: [
				"at",
				"in",
				"with",
				"for"
			],
			correctAnswer: 0,
			explanation: "Cụm từ cố định \"good at (doing) something\" có nghĩa là giỏi về cái gì/làm gì."
		},
		{
			id: 3,
			question: "Choose the correct meaning of the phrasal verb \"call off\".",
			options: [
				"to visit someone",
				"to cancel something",
				"to shout loudly",
				"to invite someone"
			],
			correctAnswer: 1,
			explanation: "\"Call off\" có nghĩa là hủy bỏ (một sự kiện, cuộc họp...). Ví dụ: \"The match was called off due to rain.\""
		},
		{
			id: 4,
			question: "Which sentence uses the present perfect tense correctly?",
			options: [
				"I have seen that movie yesterday.",
				"I saw that movie yesterday.",
				"I have seen that movie.",
				"I see that movie."
			],
			correctAnswer: 2,
			explanation: "Thì Hiện tại hoàn thành (have/has + past participle) diễn tả một hành động xảy ra ở một thời điểm không xác định trong quá khứ. Nó thường không dùng với các trạng từ chỉ thời gian cụ thể như \"yesterday\" (đáp án a sai). Đáp án b là thì Quá khứ đơn, đúng về ngữ pháp nhưng không phải là Present Perfect theo yêu cầu câu hỏi."
		},
		{
			id: 5,
			question: "What is the synonym of \"benevolent\"?",
			options: [
				"selfish",
				"mean",
				"kind-hearted",
				"wealthy"
			],
			correctAnswer: 2,
			explanation: "\"Benevolent\" có nghĩa là nhân từ, hay làm việc thiện, từ đồng nghĩa gần nhất là \"kind-hearted\". Các từ còn lại: selfish (ích kỷ), mean (bần tiện/độc ác), wealthy (giàu có)."
		},
		{
			id: 6,
			question: "Select the correctly punctuated sentence.",
			options: [
				"Let's eat grandma!",
				"Let's eat, grandma!",
				"Lets eat grandma.",
				"Lets eat, grandma."
			],
			correctAnswer: 1,
			explanation: "Dấu phẩy (comma) trong câu này là rất quan trọng, nó ngăn cách phần gọi (vocative) \"grandma\". Không có dấu phẩy, câu sẽ thành \"Hãy ăn bà đi!\" thay vì \"Bà ơi, chúng ta ăn thôi!\". \"Let's\" là dạng viết tắt đúng của \"Let us\"."
		},
		{
			id: 7,
			question: "Which option correctly completes this conditional sentence? If I had known, I __________________ you.",
			options: [
				"will help",
				"would help",
				"would have helped",
				"had helped"
			],
			correctAnswer: 2,
			explanation: "Đây là câu điều kiện loại 3, diễn tả một giả định không có thực trong quá khứ. Cấu trúc: If + past perfect (had known), would/could/might + have + past participle (would have helped)."
		},
		{
			id: 8,
			question: "Find the sentence with the incorrect article usage.",
			options: [
				"He is an honest man.",
				"I need a umbrella.",
				"She works for an international company.",
				"The sun rises in the east."
			],
			correctAnswer: 1,
			explanation: "Mặc dù \"umbrella\" bắt đầu bằng nguyên âm \"u\", cách phát âm là /ʌmˈbrelə/ (bắt đầu bằng âm /ʌ/ là nguyên âm), nên ta phải dùng \"an umbrella\". \"Honest\" bắt đầu bằng âm câm /ɒ/, nên dùng \"an honest\" là đúng."
		},
		{
			id: 9,
			question: "Which of the following is an example of the passive voice?",
			options: [
				"The chef cooked a wonderful meal.",
				"The children are playing in the park.",
				"A wonderful meal was cooked by the chef.",
				"Does she drive to work?"
			],
			correctAnswer: 2,
			explanation: "Câu bị động (passive voice) có cấu trúc: Chủ ngữ + to be + Past Participle (V3/ed) (+ by agent). Ở đây, \"was cooked\" là dạng bị động thì quá khứ đơn. Các câu còn lại đều ở dạng chủ động."
		},
		{
			id: 10,
			question: "Choose the option that best expresses the same meaning: \"It's a piece of cake.\"",
			options: [
				"It's very difficult.",
				"It's a delicious dessert.",
				"It's very easy.",
				"It's a tricky situation."
			],
			correctAnswer: 2,
			explanation: "Thành ngữ (idiom) \"a piece of cake\" có nghĩa là việc gì đó rất dễ dàng, đơn giản."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#english-quiz-01-10"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				{/* This is the content of English Quiz. */}
	
				<EnglishQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 04, 2025 · by DPSK ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};

export default EnglishQuiz0110;