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
			question: "she _______ STUDying for her FInal exAMs all DAY YESterday.",
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
			question: "_______ you SEEN the NEW docuMENtary about SPACE exploRAtion YET?",
			options: [
				"do",
				"have",
				"are",
				"did"
			],
			correctAnswer: 1,
			explanation: "This is a present perfect question indicated by \"YET\" and the past participle \"SEEN,\" so the auxiliary \"have\" is required."
		},
		{
			id: 3,
			question: "he _______ NOT LIKE to EAT SPIcy FOOD because it upSETS his STOMach.",
			options: [
				"does",
				"is",
				"has",
				"do"
			],
			correctAnswer: 0,
			explanation: "For a negative statement in the present simple tense with a third-person singular subject (he), we use \"does NOT.\""
		},
		{
			id: 4,
			question: "they _______ been WORKing on this PROJect for THREE MONTHS NOW.",
			options: [
				"are",
				"do",
				"have",
				"were"
			],
			correctAnswer: 2,
			explanation: "The phrase \"for THREE MONTHS NOW\" indicates the present perfect continuous tense, which uses \"have been\" + V-ing."
		},
		{
			id: 5,
			question: "_______ the CHILDren PLAYing in the GARden when it STARTed to RAIN?",
			options: [
				"do",
				"have",
				"were",
				"did"
			],
			correctAnswer: 2,
			explanation: "This question refers to an action in progress in the past (past continuous), so the plural auxiliary \"were\" is used for \"the CHILDren.\""
		},
		{
			id: 6,
			question: "i _______ alREADy FINished my HOMEwork before my FRIENDS arRIVED.",
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
			question: "WHY _______ you LOOK SO TIred this MORNing?",
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
			question: "the WINdows _______ CLEANed by a proFESsional COMpany every MONTH.",
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
			question: "she _______ ALways WANTed to TRavel to jaPAN.",
			options: [
				"is",
				"does",
				"has",
				"was"
			],
			correctAnswer: 2,
			explanation: "The past participle \"WANTed\" combined with \"ALways\" indicates the present perfect tense, requiring \"has\" for the subject \"she.\""
		},
		{
			id: 10,
			question: "_______ you enJOY the CONcert LAST NIGHT?",
			options: [
				"do",
				"were",
				"have",
				"did"
			],
			correctAnswer: 3,
			explanation: "To form a question about a completed action in the past (\"LAST NIGHT\"), we use the past simple auxiliary \"did.\""
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
						<span>March 26, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};