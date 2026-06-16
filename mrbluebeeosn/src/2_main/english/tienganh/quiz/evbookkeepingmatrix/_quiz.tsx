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

export default function (): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: " \n ",
			options: [
				"",
				""
			],
			correctAnswer: 0,
			explanation: " \n\n "
		},
		{
			id: 2,
			question: " \n ",
			options: [
				"",
				""
			],
			correctAnswer: 0,
			explanation: " \n\n "
		},
		{
			id: 3,
			question: " \n ",
			options: [
				"",
				""
			],
			correctAnswer: 0,
			explanation: " \n\n "
		},
		{
			id: 4,
			question: " \n ",
			options: [
				"",
				""
			],
			correctAnswer: 0,
			explanation: " \n\n "
		},
		{
			id: 5,
			question: " \n ",
			options: [
				"",
				""
			],
			correctAnswer: 0,
			explanation: " \n\n "
		},
		{
			id: 6,
			question: " \n ",
			options: [
				"",
				""
			],
			correctAnswer: 0,
			explanation: " \n\n "
		},
		{
			id: 7,
			question: " \n ",
			options: [
				"",
				""
			],
			correctAnswer: 0,
			explanation: " \n\n "
		},
		{
			id: 8,
			question: " \n ",
			options: [
				"",
				""
			],
			correctAnswer: 0,
			explanation: " \n\n "
		},
		{
			id: 9,
			question: " \n ",
			options: [
				"",
				""
			],
			correctAnswer: 0,
			explanation: " \n\n "
		},
		{
			id: 10,
			question: " \n ",
			options: [
				"",
				""
			],
			correctAnswer: 0,
			explanation: " \n\n "
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-matrix-quiz"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">EV Bookkeeping Matrix</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>June 16, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};