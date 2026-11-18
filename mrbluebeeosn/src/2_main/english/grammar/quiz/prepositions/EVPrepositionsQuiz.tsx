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

export default function EVPrepositionsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "I am interested _______ learning more about ancient history.",
			options: [
				"in",
				"on",
				"at",
				"for"
			],
			correctAnswer: 0,
			explanation: "The fixed phrase \"be interested in something\" means to be curious about or enjoy something."
		},
		{
			id: 2,
			question: "We agreed _______ the date of the meeting after a long discussion.",
			options: [
				"to",
				"with",
				"on",
				"for"
			],
			correctAnswer: 2,
			explanation: "\"Agree on something\" is used when people reach a shared decision about a plan, date, or topic."
		},
		{
			id: 3,
			question: "She has been waiting for the bus _______ 8 o'clock this morning.",
			options: [
				"for",
				"since",
				"from",
				"during"
			],
			correctAnswer: 1,
			explanation: "\"Since\" is used to indicate a specific starting point in the past for an action that continues into the present."
		},
		{
			id: 4,
			question: "The cat is hiding _______ the bed because it is scared of the vacuum cleaner.",
			options: [
				"above",
				"over",
				"under",
				"through"
			],
			correctAnswer: 2,
			explanation: "\"Under\" means directly below or beneath something, which fits the position of hiding beneath a bed."
		},
		{
			id: 5,
			question: "My brother is very good _______ playing the guitar.",
			options: [
				"in",
				"at",
				"with",
				"about"
			],
			correctAnswer: 1,
			explanation: "The structure \"be good at something/doing something\" is used to describe being skilled at an activity."
		},
		{
			id: 6,
			question: "They decided to go for a walk _______ the rain.",
			options: [
				"despite",
				"although",
				"in spite",
				"even though"
			],
			correctAnswer: 0,
			explanation: "\"Despite\" or \"in spite of\" is followed by a noun or noun phrase (the rain) to express contrast."
		},
		{
			id: 7,
			question: "Please remind me _______ call my mother tonight.",
			options: [
				"of",
				"about",
				"to",
				"for"
			],
			correctAnswer: 2,
			explanation: "The structure \"remind someone to do something\" means to help someone remember to perform an action."
		},
		{
			id: 8,
			question: "The keys are _______ the table in the hallway.",
			options: [
				"in",
				"at",
				"on",
				"into"
			],
			correctAnswer: 2,
			explanation: "We use the preposition \"on\" to indicate a position resting on a flat surface like a table."
		},
		{
			id: 9,
			question: "He apologized _______ his teacher for being late.",
			options: [
				"with",
				"to",
				"for",
				"at"
			],
			correctAnswer: 1,
			explanation: "The complete structure is \"apologize to someone for something.\""
		},
		{
			id: 10,
			question: "We are going to New York _______ June.",
			options: [
				"in",
				"on",
				"at",
				"since"
			],
			correctAnswer: 0,
			explanation: "The preposition \"in\" is used before months, seasons, years, and longer periods of time."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#prepositions-quiz"><mark className="highlight-tertiary-padding-4-8">Prepositions Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Prepositions Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Prepositions</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>MARCH 29, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};