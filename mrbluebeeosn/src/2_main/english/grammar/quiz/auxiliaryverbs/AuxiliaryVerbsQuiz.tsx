// EnglishPracticeQuizDPDK.tsx

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

export default function AuxiliaryVerbsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "She ________ not like to eat spicy food for dinner.",
			options: [
				"do",
				"does",
				"did",
				"is"
			],
			correctAnswer: 1,
			explanation: "The subject \"she\" is third-person singular, so the auxiliary verb \"does\" is used in the present simple negative form."
		},
		{
			id: 2,
			question: "________ you see the solar eclipse that happened last night?",
			options: [
				"do",
				"done",
				"did",
				"have"
			],
			correctAnswer: 2,
			explanation: "\"Did\" is used as the auxiliary verb to form questions in the past simple tense."
		},
		{
			id: 3,
			question: "I ________ been working on this accounting report for three hours.",
			options: [
				"am",
				"has",
				"have",
				"was"
			],
			correctAnswer: 2,
			explanation: "This sentence is in the present perfect continuous tense (subject + have/has + been + V-ing), and \"I\" takes the auxiliary \"have.\""
		},
		{
			id: 4,
			question: "They ________ planning to launch the new software next month.",
			options: [
				"are",
				"is",
				"was",
				"been"
			],
			correctAnswer: 0,
			explanation: "The sentence uses the present continuous tense for a future arrangement. \"They\" is a plural subject, requiring the auxiliary \"are.\""
		},
		{
			id: 5,
			question: "The keys ________ found by the janitor under the desk.",
			options: [
				"did",
				"were",
				"have",
				"be"
			],
			correctAnswer: 1,
			explanation: "This is a passive voice sentence in the past simple (be + past participle). Since \"keys\" is plural, \"were\" is the correct auxiliary."
		},
		{
			id: 6,
			question: "________ she ever travelled to Europe before?",
			options: [
				"does",
				"is",
				"has",
				"did"
			],
			correctAnswer: 2,
			explanation: "To form a question in the present perfect tense (have/has + subject + past participle), we use \"has\" for the third-person singular \"she.\""
		},
		{
			id: 7,
			question: "You ________ not have to finish the task today; tomorrow is fine.",
			options: [
				"does",
				"are",
				"do",
				"did"
			],
			correctAnswer: 2,
			explanation: "In the present simple negative, \"do not\" (don't) is used with the subject \"you.\""
		},
		{
			id: 8,
			question: "What ________ you doing when the power went out?",
			options: [
				"was",
				"were",
				"did",
				"are"
			],
			correctAnswer: 1,
			explanation: "This is the past continuous tense (was/were + V-ing) used for an action in progress in the past. \"You\" always takes \"were.\""
		},
		{
			id: 9,
			question: "He ________ just finished his CPA exam.",
			options: [
				"is",
				"does",
				"has",
				"was"
			],
			correctAnswer: 2,
			explanation: "The word \"just\" indicates the present perfect tense. \"He\" is third-person singular, so it requires \"has.\""
		},
		{
			id: 10,
			question: "We ________ going to attend the seminar in Vietnam.",
			options: [
				"will",
				"are",
				"do",
				"have"
			],
			correctAnswer: 1,
			explanation: "The structure \"be + going to\" is used to express future intentions. \"We\" requires the auxiliary \"are.\""
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#Auxiliary-Verbs-Quiz"><mark className="highlight-tertiary-padding-4-8">Auxiliary Verbs</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Auxiliary Verbs Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Auxiliary Verbs</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>MARCH 25, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};