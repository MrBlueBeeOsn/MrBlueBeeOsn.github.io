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

export default function VerbForms1120(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "She avoids ______ late at night because it ruins her sleep schedule.",
			options: [
				"V1: study",
				"V2: studied",
				"V3: studied",
				"V4: studying",
				"V5: studies"
			],
			correctAnswer: 3,
			explanation: "The verb \"avoid\" is always followed by a gerund (V4 / -ing form)."
		},
		{
			id: 2,
			question: "He ______ a dedicated student who always completes his assignments on time.",
			options: [
				"V1: be",
				"V2: was / were",
				"V3: been",
				"V4: being",
				"V5: is / am / are"
			],
			correctAnswer: 4,
			explanation: "The sentence requires the Present Simple tense of the verb \"to be\". With the third-person singular subject \"He\", the correct V5 form is \"is\"."
		},
		{
			id: 3,
			question: "They ______ a new strategy before the market crashed last year.",
			options: [
				"V1: build",
				"V2: built",
				"V3: built",
				"V4: building",
				"V5: builds"
			],
			correctAnswer: 1,
			explanation: "The action occurred and finished in the past (\"last year\"), requiring the Past Simple form (V2) of the irregular verb \"build\"."
		},
		{
			id: 4,
			question: "Have you ______ your homework yet?",
			options: [
				"V1: do",
				"V2: did",
				"V3: done",
				"V4: doing",
				"V5: does"
			],
			correctAnswer: 2,
			explanation: "The Present Perfect tense (Have/Has + Past Participle) requires the V3 form of the irregular verb \"do\"."
		},
		{
			id: 5,
			question: "Every winter, the lake ______ completely solid.",
			options: [
				"V1: freeze",
				"V2: froze",
				"V3: frozen",
				"V4: freezing",
				"V5: freezes"
			],
			correctAnswer: 4,
			explanation: "\"Every winter\" expresses a recurring fact/habit, requiring the Present Simple tense. With the singular subject \"the lake\", the V5 (-s) form is used."
		},
		{
			id: 6,
			question: "I need to ______ a new passport before my trip next month.",
			options: [
				"V1: get",
				"V2: got",
				"V3: gotten / got",
				"V4: getting",
				"V5: gets"
			],
			correctAnswer: 0,
			explanation: "After \"need to\", the base form / infinitive (V1) is required."
		},
		{
			id: 7,
			question: "The flight had already ______ off when we reached the gate.",
			options: [
				"V1: take",
				"V2: took",
				"V3: taken",
				"V4: taking",
				"V5: takes"
			],
			correctAnswer: 2,
			explanation: "The Past Perfect tense (had + Past Participle) uses the V3 form of the irregular verb \"take\"."
		},
		{
			id: 8,
			question: "Right now, the chef is ______ a special dish for the guests.",
			options: [
				"V1: prepare",
				"V2: prepared",
				"V3: prepared",
				"V4: preparing",
				"V5: prepares"
			],
			correctAnswer: 3,
			explanation: "\"Right now\" indicates an action currently in progress, requiring the Present Continuous tense (is + V4)."
		},
		{
			id: 9,
			question: "She ______ her ankle while running in the park two days ago.",
			options: [
				"V1: twist",
				"V2: twisted",
				"V3: twisted",
				"V4: twisting",
				"V5: twists"
			],
			correctAnswer: 1,
			explanation: "\"Two days ago\" marks a specific completed time in the past, requiring the Past Simple form (V2)."
		},
		{
			id: 10,
			question: "A good leader always ______ to the concerns of their team.",
			options: [
				"V1: listen",
				"V2: listened",
				"V3: listened",
				"V4: listening",
				"V5: listens"
			],
			correctAnswer: 4,
			explanation: "\"Always\" describes a general characteristic or habit in the present. With the third-person singular subject \"A good leader\", the V5 (-s) form is required."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#verb-forms"><mark className="highlight-tertiary-padding-4-8">Verb Forms</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Verb Forms 11-20</h1>
					<p className="subtitle text-center">Test your knowledge of Verb Forms</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>noVEMber 21, 2025 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};