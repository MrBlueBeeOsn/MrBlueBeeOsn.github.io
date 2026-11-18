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

export default function EVArticlesQuiz() {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "I saw ______ movie last night. ______ movie was excellent.",
			options: [
				"a / a",
				"a / the",
				"the / the",
				"an / the"
			],
			correctAnswer: 1,
			explanation: "When mentioning \"movie\" for the first time, we use the indefinite article \"a.\" When referring to that same movie again in the second sentence, it is now specific, so we use \"the.\""
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
			explanation: "Although \"university\" starts with the letter \"u,\" it is pronounced with a consonant sound /juː/, so we use \"a\" instead of \"an.\""
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
			explanation: "\"Engineer\" starts with a vowel sound /e/, so we use the article \"an.\""
		},
		{
			id: 4,
			question: "______ Mount Everest is the highest mountain in the world.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 3,
			explanation: "As a general rule, we do not use the article \"the\" before the names of individual mountains (it is only used for mountain ranges)."
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
			explanation: "The word \"honest\" has a silent \"h\" and begins with a vowel sound /ɒ/, so we use \"an.\""
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
			explanation: "We use \"the\" for unique objects or things that are one of a kind (such as the moon, the sun, and the earth)."
		},
		{
			id: 7,
			question: "We usually have ______ lunch at 12:30 p.m.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 3,
			explanation: "We do not use an article before the names of meals (breakfast, lunch, dinner) unless they are preceded by an adjective or refer to a specific meal."
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
			explanation: "We use the article \"the\" before the names of musical instruments when talking about playing them."
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
			explanation: "The structure \"the + noun + of + noun\" is used to refer to a specific, defined person or thing."
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
			explanation: "In this context, both the speaker and the listener know which specific salt shaker on the table is being referred to, so we use \"the.\""
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#articles-quiz"><mark className="highlight-tertiary-padding-4-8">Articles Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Articles Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Articles concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>April 15, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};