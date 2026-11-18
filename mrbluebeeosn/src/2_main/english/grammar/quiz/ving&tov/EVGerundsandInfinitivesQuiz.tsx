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

export default function EVGerundsandInfinitivesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Gerunds (V-ing) và Infinitives (To V/V nguyên thể) cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "I am looking forward to _______ my old friends at the party tonight.",
			options: [
				"meet",
				"meeting",
				"met",
				"to meet"
			],
			correctAnswer: 1,
			explanation: "The phrase \"look forward to\" ends with the preposition \"to\", so it must be followed by a gerund (V-ing)."
		},
		{
			id: 2,
			question: "My parents don't let me _______ out too late on weekdays.",
			options: [
				"going",
				"go",
				"to go",
				"gone"
			],
			correctAnswer: 1,
			explanation: "The structure \"let + someone + V (bare-infinitive)\" requires the base form of the verb without \"to\"."
		},
		{
			id: 3,
			question: "We decided _______ a new car because the old one kept breaking down.",
			options: [
				"buy",
				"buying",
				"to buy",
				"bought"
			],
			correctAnswer: 2,
			explanation: "The verb \"decide\" is followed by a to-infinitive (to-V)."
		},
		{
			id: 4,
			question: "It’s no use _______ about the past; you should focus on the future.",
			options: [
				"cry",
				"to cry",
				"crying",
				"cried"
			],
			correctAnswer: 2,
			explanation: "The idiom \"it’s no use\" is always followed by a gerund (V-ing)."
		},
		{
			id: 5,
			question: "She suggested _______ to the cinema, but I wanted to stay home.",
			options: [
				"go",
				"to go",
				"going",
				"gone"
			],
			correctAnswer: 2,
			explanation: "When \"suggest\" is followed directly by another verb without an object, that verb must take the gerund (V-ing) form."
		},
		{
			id: 6,
			question: "I remember _______ the door, but now I can’t find my keys.",
			options: [
				"lock",
				"locking",
				"to lock",
				"locked"
			],
			correctAnswer: 1,
			explanation: "Remember + V-ing is used to talk about a memory of a past action that has already been completed."
		},
		{
			id: 7,
			question: "He stopped _______ a cigarette because he realized it was bad for his health.",
			options: [
				"smoking",
				"smoke",
				"to smoke",
				"smoked"
			],
			correctAnswer: 0,
			explanation: "Stop + V-ing means to quit or completely give up a habit or ongoing activity."
		},
		{
			id: 8,
			question: "It is very difficult _______ a job in this economy.",
			options: [
				"find",
				"finding",
				"to find",
				"found"
			],
			correctAnswer: 2,
			explanation: "The dummy subject structure \"It + be + adjective + to-V\" requires a to-infinitive."
		},
		{
			id: 9,
			question: "They managed _______ the project on time despite many difficulties.",
			options: [
				"finish",
				"to finish",
				"finishing",
				"finished"
			],
			correctAnswer: 1,
			explanation: "The verb \"manage\" is followed by a to-infinitive (to-V)."
		},
		{
			id: 10,
			question: "Do you mind _______ the window? It’s getting a bit cold in here.",
			options: [
				"close",
				"to close",
				"closing",
				"closed"
			],
			correctAnswer: 2,
			explanation: "In polite requests with \"Do you mind\" or \"Would you mind\", the following verb always takes the gerund (V-ing) form."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#gerunds&infinitives-quiz"><mark className="highlight-tertiary-padding-4-8">Gerunds and Infinitives Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Gerunds and Infinitives Quiz (EV)</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Gerunds and Infinitives</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>deCEMber 28, 2025 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};