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

export default function EVSAndEsInNounsVerbs(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "My younger brother _______ his teeth three times a day.",
			options: [
				"brush",
				"brushes",
				"brushs",
				"brushing"
			],
			correctAnswer: 1,
			explanation: "Với chủ ngữ số ít (My younger brother), động cơ tận cùng là -sh ta thêm -es."
		},
		{
			id: 2,
			question: "There are many _______ grazing in the field.",
			options: [
				"tomato",
				"tomatos",
				"tomatoes",
				"tomatoies"
			],
			correctAnswer: 2,
			explanation: "Danh cơ tận cùng là -o (trước đó là một phụ âm) thường thêm -es để tạo thành số nhiều."
		},
		{
			id: 3,
			question: "She always _______ the laundry on Sunday mornings.",
			options: [
				"do",
				"dose",
				"does",
				"doing"
			],
			correctAnswer: 2,
			explanation: "Động cơ \"do\" khi đi với chủ ngữ ngôi thứ ba số ít (She) sẽ thêm -es thành \"does\"."
		},
		{
			id: 4,
			question: "The baker sells various types of _______ at his shop.",
			options: [
				"loafs",
				"loafes",
				"loaves",
				"loaf"
			],
			correctAnswer: 2,
			explanation: "Các danh cơ tận cùng bằng -f hoặc -fe thường đổi thành -v rồi thêm -es (loaf -> loaves)."
		},
		{
			id: 5,
			question: "Which of the following is the correct plural form of \"factory\"?",
			options: [
				"factorys",
				"factories",
				"factoryes",
				"factories'"
			],
			correctAnswer: 1,
			explanation: "Danh cơ tận cùng là phụ âm + -y, ta đổi -y thành -i rồi thêm -es."
		},
		{
			id: 6,
			question: "The mechanic _______ the broken engine in less than an hour.",
			options: [
				"fix",
				"fixs",
				"fixes",
				"fixing"
			],
			correctAnswer: 2,
			explanation: "Động cơ tận cùng là -x khi chia ở ngôi thứ ba số ít ta thêm -es."
		},
		{
			id: 7,
			question: "My cat often _______ on the sofa after lunch.",
			options: [
				"relaxs",
				"relaxes",
				"relax",
				"relaxing"
			],
			correctAnswer: 1,
			explanation: "Tương tự câu 6, động cơ tận cùng là -x nên ta thêm -es."
		},
		{
			id: 8,
			question: "How many _______ did you buy for the party?",
			options: [
				"boxs",
				"boxies",
				"boxes",
				"box"
			],
			correctAnswer: 2,
			explanation: "Danh cơ tận cùng là -x thêm -es để tạo thành số nhiều."
		},
		{
			id: 9,
			question: "He _______ to work by bus every day.",
			options: [
				"go",
				"goes",
				"gos",
				"going"
			],
			correctAnswer: 1,
			explanation: "Động cơ tận cùng là -o thêm -es khi đi với chủ ngữ số ít (He)."
		},
		{
			id: 10,
			question: "The children love to watch the _______ at the zoo.",
			options: [
				"monkeys",
				"monkies",
				"monkeies",
				"monkeyes"
			],
			correctAnswer: 0,
			explanation: "Danh cơ tận cùng là nguyên âm (e) + -y, chúng ta chỉ cần thêm -s, không đổi thành -ies."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-s-and-es-in-nouns-and-verbs-quiz"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc nghiệm -s and -es in Nouns and Verbs</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>April 05, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};