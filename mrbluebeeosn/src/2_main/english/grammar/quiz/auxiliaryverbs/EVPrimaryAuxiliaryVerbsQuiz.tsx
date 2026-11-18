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

export default function EVPrimaryAuxiliaryVerbsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "She ________ not finished her accounting report yet.",
			options: [
				"does",
				"has",
				"is",
				"did"
			],
			correctAnswer: 1,
			explanation: "This sentence uses the 📏 Present Perfect tense with the structure S + have/has + V3/ed. With the subject \"she,\" we use \"has.\""
		},
		{
			id: 2,
			question: "________ you study the new international accounting standards yesterday?",
			options: [
				"do",
				"have",
				"did",
				"were"
			],
			correctAnswer: 2,
			explanation: "A question in the ⏳ Simple Past tense uses the auxiliary \"did\" before the subject, while the main verb \"study\" remains in its base form."
		},
		{
			id: 3,
			question: "The financial statements ________ being audited by the internal team right now.",
			options: [
				"are",
				"have",
				"do",
				"is"
			],
			correctAnswer: 0,
			explanation: "This is the ⏱️ Present Continuous Passive voice: S + am/is/are + being + V3/ed. \"Statements\" is plural, so we use \"are.\""
		},
		{
			id: 4,
			question: "Why ________ he always insist on using manual spreadsheets instead of software?",
			options: [
				"is",
				"has",
				"does",
				"did"
			],
			correctAnswer: 2,
			explanation: "This is a ⏳ Simple Present question with the action verb \"insist.\" The singular subject \"he\" requires the auxiliary \"does.\""
		},
		{
			id: 5,
			question: "We ________ had many opportunities to practice Excel functions this month.",
			options: [
				"are",
				"do",
				"have",
				"did"
			],
			correctAnswer: 2,
			explanation: "The 📏 Present Perfect tense is used to describe an action continuing up to the present. Structure: S (we) + have + V3 (had)."
		},
		{
			id: 6,
			question: "________ the company provide free English courses for its employees last year?",
			options: [
				"does",
				"did",
				"has",
				"was"
			],
			correctAnswer: 1,
			explanation: "The time marker \"last year\" indicates the ⏳ Simple Past tense. We use the auxiliary \"did\" to form a question with the action verb \"provide.\""
		},
		{
			id: 7,
			question: "I ________ currently reading a book about effective translation techniques.",
			options: [
				"do",
				"have",
				"am",
				"be"
			],
			correctAnswer: 2,
			explanation: "The ⏱️ Present Continuous tense describes an action happening right now: S (I) + am + V-ing."
		},
		{
			id: 8,
			question: "They ________ not like the way the new software organizes the data.",
			options: [
				"does",
				"are",
				"do",
				"have"
			],
			correctAnswer: 2,
			explanation: "A negative sentence in the ⏳ Simple Present tense with the plural subject \"they\" uses the auxiliary \"do\" + not."
		},
		{
			id: 9,
			question: "The tax documents ________ already been sent to the tax office.",
			options: [
				"are",
				"have",
				"do",
				"did"
			],
			correctAnswer: 1,
			explanation: "This is the 📏 Present Perfect Passive voice: S + have/has + been + V3/ed. \"Documents\" is plural, so it takes \"have.\""
		},
		{
			id: 10,
			question: "________ she working on the balance sheet when you called her?",
			options: [
				"does",
				"has",
				"was",
				"did"
			],
			correctAnswer: 2,
			explanation: "This is a question in the ⏱️ Past Continuous tense: Was/Were + S + V-ing. With the subject \"she,\" we use \"was.\""
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
						<span>MARCH 26, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};