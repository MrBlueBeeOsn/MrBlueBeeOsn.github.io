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

export default function EVSAndESQuiz(): React.JSX.Element {
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
			explanation: "With a singular subject (my younger brother), verbs ending in -sh take -es."
		},
		{
			id: 2,
			question: "There are many _______ growing in the field.",
			options: [
				"tomato",
				"tomatos",
				"tomatoes",
				"tomatoies"
			],
			correctAnswer: 2,
			explanation: "Nouns ending in -o (preceded by a consonant) usually add -es to form the plural."
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
			explanation: "The verb \"do\" adds -es to become \"does\" when used with a third-person singular subject (she)."
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
			explanation: "Nouns ending in -f or -fe usually change the -f to -v and add -es (loaf -> loaves)."
		},
		{
			id: 5,
			question: "Which of the following is the correct plural form of \"factory\"?",
			options: [
				"factorys",
				"factories",
				"factoryes",
				"factoryies"
			],
			correctAnswer: 1,
			explanation: "For nouns ending in a consonant + -y, change -y to -i and add -es."
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
			explanation: "Verbs ending in -x add -es in the third-person singular present tense."
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
			explanation: "Similar to question 6, verbs ending in -x take -es for third-person singular subjects."
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
			explanation: "Nouns ending in -x add -es to form the plural."
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
			explanation: "Verbs ending in -o add -es when used with a singular subject (he)."
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
			explanation: "For nouns ending in a vowel (e) + -y, simply add -s without changing -y to -ies."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#s-and-es-quiz"><mark className="highlight-tertiary-padding-4-8">S & ES Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">S & ES Quiz (EV)</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental S & ES</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>April 05, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};