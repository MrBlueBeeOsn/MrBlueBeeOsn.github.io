// EnglishPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import EnglishPracticeQuiz from '../../../../components/quiz/EnglishPracticeQuiz';

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

export default function SAndEsInNounsVerbs(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which of the following nouns forms its plural by adding -es?",
			options: [
				"Photo",
				"Bench",
				"Piano",
				"Radio"
			],
			correctAnswer: 1,
			explanation: "Nouns ending in -ch, -sh, -s, -x, or -z require -es to become plural (e.g., benches)."
		},
		{
			id: 2,
			question: "Choose the correct verb form: My brother always _______ his teeth after breakfast.",
			options: [
				"brushs",
				"brush",
				"brushes",
				"brushing"
			],
			correctAnswer: 2,
			explanation: "For third-person singular subjects (He, She, It), verbs ending in -sh take -es."
		},
		{
			id: 3,
			question: "Identify the correctly spelled plural noun:",
			options: [
				"Tomatoe",
				"Citys",
				"Puppys",
				"Potatoes"
			],
			correctAnswer: 3,
			explanation: "Most nouns ending in a consonant + o take -es. Photo and piano are exceptions that only take -s."
		},
		{
			id: 4,
			question: "The technician _______ the broken screen carefully.",
			options: [
				"fixs",
				"fixes",
				"fixies",
				"fix"
			],
			correctAnswer: 1,
			explanation: "Verbs ending in -x take -es in the third-person singular present tense."
		},
		{
			id: 5,
			question: "Which word is the correct plural of \"Butterfly\"?",
			options: [
				"Butterflys",
				"Butterflies",
				"Butterflyes",
				"Butterflyies"
			],
			correctAnswer: 1,
			explanation: "For nouns ending in a consonant + y, you change the y to i and add -es."
		},
		{
			id: 6,
			question: "Select the sentence with the correct subject-verb agreement:",
			options: [
				"The cat chase the mouse.",
				"The cat chases the mouse.",
				"The cat chasses the mouse.",
				"The cat chasees the mouse."
			],
			correctAnswer: 1,
			explanation: "The subject The cat is singular. The verb chase already ends in -e, so you simply add -s."
		},
		{
			id: 7,
			question: "Choose the correct plural form of \"Bus\":",
			options: [
				"Buss",
				"Buses",
				"Busses",
				"Busies"
			],
			correctAnswer: 1,
			explanation: "Nouns ending in -s add -es to form the plural."
		},
		{
			id: 8,
			question: "Complete the sentence: She _______ to the gym every morning.",
			options: [
				"gos",
				"goes",
				"gose",
				"go"
			],
			correctAnswer: 1,
			explanation: "The verbs go and do always add -es for third-person singular subjects (goes/does)."
		},
		{
			id: 9,
			question: "Which of these nouns ends in -es in its plural form?",
			options: [
				"Belief",
				"Roof",
				"Fox",
				"Chief"
			],
			correctAnswer: 2,
			explanation: "Nouns ending in -x form their plural by adding -es (foxes)."
		},
		{
			id: 10,
			question: "Mark _______ his homework before dinner.",
			options: [
				"finishs",
				"finish",
				"finishes",
				"finishing"
			],
			correctAnswer: 2,
			explanation: "Verbs ending in -sh require -es when used with a singular subject like Mark."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#s-and-es-in-nouns-and-verbs-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">-s and -es in Nouns and Verbs</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
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