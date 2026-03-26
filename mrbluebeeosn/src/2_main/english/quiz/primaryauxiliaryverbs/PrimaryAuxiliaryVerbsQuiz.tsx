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

export default function PrimaryAuxiliaryVerbsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "She _______ studying for her final exams all day yesterday.",
			options: [
				"does",
				"has",
				"was",
				"is"
			],
			correctAnswer: 2,
			explanation: "The sentence uses the past continuous tense to describe an action in progress at a specific time in the past, requiring \"was\" for a singular subject."
		},
		{
			id: 2,
			question: "_______ you seen the new documentary about space exploration yet?",
			options: [
				"Do",
				"Have",
				"Are",
				"Did"
			],
			correctAnswer: 1,
			explanation: "This is a present perfect question indicated by \"yet\" and the past participle \"seen,\" so the auxiliary \"have\" is required."
		},
		{
			id: 3,
			question: "He _______ not like to eat spicy food because it upsets his stomach.",
			options: [
				"does",
				"is",
				"has",
				"do"
			],
			correctAnswer: 0,
			explanation: "For a negative statement in the present simple tense with a third-person singular subject (He), we use \"does not.\""
		},
		{
			id: 4,
			question: "They _______ been working on this project for three months now.",
			options: [
				"are",
				"do",
				"have",
				"were"
			],
			correctAnswer: 2,
			explanation: "The phrase \"for three months now\" indicates the present perfect continuous tense, which uses \"have been\" + V-ing."
		},
		{
			id: 5,
			question: "_______ the children playing in the garden when it started to rain?",
			options: [
				"Do",
				"Have",
				"Were",
				"Did"
			],
			correctAnswer: 2,
			explanation: "This question refers to an action in progress in the past (past continuous), so the plural auxiliary \"were\" is used for \"the children.\""
		},
		{
			id: 6,
			question: "I _______ already finished my homework before my friends arrived.",
			options: [
				"have",
				"had",
				"am",
				"did"
			],
			correctAnswer: 1,
			explanation: "The sentence describes an action completed before another action in the past, necessitating the past perfect auxiliary \"had.\""
		},
		{
			id: 7,
			question: "Why _______ you look so tired this morning?",
			options: [
				"are",
				"have",
				"do",
				"were"
			],
			correctAnswer: 2,
			explanation: "This is a general question about a current state/feeling in the present simple tense, using \"do\" for the subject \"you.\""
		},
		{
			id: 8,
			question: "The windows _______ cleaned by a professional company every month.",
			options: [
				"are",
				"have",
				"do",
				"been"
			],
			correctAnswer: 0,
			explanation: "This is a passive voice sentence in the present simple tense, using \"are\" followed by a past participle for a plural subject."
		},
		{
			id: 9,
			question: "She _______ always wanted to travel to Japan.",
			options: [
				"is",
				"does",
				"has",
				"was"
			],
			correctAnswer: 2,
			explanation: "The past participle \"wanted\" combined with \"always\" indicates the present perfect tense, requiring \"has\" for the subject \"she.\""
		},
		{
			id: 10,
			question: "_______ you enjoy the concert last night?",
			options: [
				"Do",
				"Were",
				"Have",
				"Did"
			],
			correctAnswer: 3,
			explanation: "To form a question about a completed action in the past (\"last night\"), we use the past simple auxiliary \"did.\""
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#primary-auxiliary-verbs-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Primary Auxiliary Verbs Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 26, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};