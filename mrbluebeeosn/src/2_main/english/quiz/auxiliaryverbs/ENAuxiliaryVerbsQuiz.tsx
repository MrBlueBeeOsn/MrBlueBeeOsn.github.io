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

export default function ENAuxiliaryVerbsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "She ___ not like to eat spicy food for dinner.",
			options: [
				"do",
				"does",
				"did",
				"is"
			],
			correctAnswer: 1,
			explanation: "The subject \"She\" is third-person singular, so the auxiliary verb \"does\" is used in the present simple negative form."
		},
		{
			id: 2,
			question: "___ you see the solar eclipse that happened last night?",
			options: [
				"Do",
				"Done",
				"Did",
				"Have"
			],
			correctAnswer: 2,
			explanation: "\"Did\" is used as the auxiliary verb to form questions in the past simple tense."
		},
		{
			id: 3,
			question: "I ___ been working on this accounting report for three hours.",
			options: [
				"am",
				"has",
				"have",
				"was"
			],
			correctAnswer: 2,
			explanation: "This sentence is in the present perfect continuous tense (Subject + have/has + been + V-ing), and \"I\" takes the auxiliary \"have.\""
		},
		{
			id: 4,
			question: "They ___ planning to launch the new software next month.",
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
			question: "The keys ___ found by the janitor under the desk.",
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
			question: "___ she ever traveled to Europe before?",
			options: [
				"Does",
				"Is",
				"Has",
				"Did"
			],
			correctAnswer: 2,
			explanation: "To form a question in the present perfect tense (Have/Has + subject + past participle), we use \"Has\" for the third-person singular \"she.\""
		},
		{
			id: 7,
			question: "You ___ not have to finish the task today; tomorrow is fine.",
			options: [
				"does",
				"are",
				"do",
				"did"
			],
			correctAnswer: 2,
			explanation: "In the present simple negative, \"do not\" (don't) is used with the subject \"You.\""
		},
		{
			id: 8,
			question: "What ___ you doing when the power went out?",
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
			question: "He ___ just finished his CPA exam.",
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
			question: "We ___ going to attend the seminar in Ho Chi Minh City.",
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
				
				<h4><HashLink smooth to="/english#en-auxiliary-verbs-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Auxiliary Verbs Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 25, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};