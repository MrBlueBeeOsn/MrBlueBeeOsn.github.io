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
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 2,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 3,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 4,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 5,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 6,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 7,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 8,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 9,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
		},
		{
			id: 10,
			question: "",
			options: [
				"",
				"",
				"",
				""
			],
			correctAnswer: 0,
			explanation: ""
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