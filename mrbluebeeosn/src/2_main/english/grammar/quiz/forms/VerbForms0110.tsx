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

export default function VerbForms0110(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "She ______ to the gym every morning before going to work.",
			options: [
				"V1: go",
				"V2: went",
				"V3: gone",
				"V4: going",
				"V5: goes"
			],
			correctAnswer: 4,
			explanation: "\"Every morning\" signals a daily habit, requiring the Present Simple tense. With the third-person singular subject \"She\", the verb takes the V5 (-s/-es) form."
		},
		{
			id: 2,
			question: "We ______ a wonderful time at the beach yesterday.",
			options: [
				"V1: have",
				"V2: had",
				"V3: had",
				"V4: having",
				"V5: has"
			],
			correctAnswer: 1,
			explanation: "The time marker \"yesterday\" indicates a completed action in the past, requiring the Past Simple form (V2)."
		},
		{
			id: 3,
			question: "By the time the police arrived, the thief had already ______.",
			options: [
				"V1: escape",
				"V2: escaped",
				"V3: escaped",
				"V4: escaping",
				"V5: escapes"
			],
			correctAnswer: 2,
			explanation: "The Past Perfect tense (had + Past Participle) requires the V3 form to show an action completed before another past event."
		},
		{
			id: 4,
			question: "Look! The children are ______ football in the yard.",
			options: [
				"V1: play",
				"V2: played",
				"V3: played",
				"V4: playing",
				"V5: plays"
			],
			correctAnswer: 3,
			explanation: "\"Look!\" signals an action happening right now, requiring the Present Continuous tense (am/is/are + V4)."
		},
		{
			id: 5,
			question: "My brother enjoys ______ sci-fi novels in his free time.",
			options: [
				"V1: read",
				"V2: read",
				"V3: read",
				"V4: reading",
				"V5: reads"
			],
			correctAnswer: 3,
			explanation: "The verb \"enjoy\" must be followed by a gerund (V4 / -ing form)."
		},
		{
			id: 6,
			question: "You should ______ more water every day to stay healthy.",
			options: [
				"V1: drink",
				"V2: drank",
				"V3: drunk",
				"V4: drinking",
				"V5: drinks"
			],
			correctAnswer: 0,
			explanation: "Modal verbs like \"should\" are always followed by the bare infinitive / base form (V1)."
		},
		{
			id: 7,
			question: "This famous novel was ______ by Charles Dickens in 1859.",
			options: [
				"V1: write",
				"V2: wrote",
				"V3: written",
				"V4: writing",
				"V5: writes"
			],
			correctAnswer: 2,
			explanation: "This is a Passive Voice sentence (was + Past Participle), which requires the V3 form of the irregular verb \"write\"."
		},
		{
			id: 8,
			question: "John ______ his keys last night and couldn't get into his house.",
			options: [
				"V1: lose",
				"V2: lost",
				"V3: lost",
				"V4: losing",
				"V5: loses"
			],
			correctAnswer: 1,
			explanation: "\"Last night\" places the action strictly in the past, requiring the Past Simple form (V2)."
		},
		{
			id: 9,
			question: "Water ______ at 100 degrees Celsius under standard pressure.",
			options: [
				"V1: boil",
				"V2: boiled",
				"V3: boiled",
				"V4: boiling",
				"V5: boils"
			],
			correctAnswer: 4,
			explanation: "General truths and scientific facts use the Present Simple tense. With the singular uncountable subject \"Water\", the V5 (-s) form is used."
		},
		{
			id: 10,
			question: "Have you ever ______ sushi in Japan?",
			options: [
				"V1: eat",
				"V2: ate",
				"V3: eaten",
				"V4: eating",
				"V5: eats"
			],
			correctAnswer: 2,
			explanation: "The Present Perfect tense (Have/Has + Past Participle) requires the V3 form of the irregular verb \"eat\"."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#verb-forms"><mark className="highlight-tertiary-padding-4-8">Verb Forms</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Verb Forms Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of verb forms</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>noVEMber 16, 2025 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};