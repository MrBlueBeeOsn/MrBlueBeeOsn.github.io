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

export default function EVPhrasalVerbsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Phrasal Verbs cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "After a long negotiation, the two companies finally decided to call off the merger. What does \"call off\" mean?",
			options: [
				"to announce",
				"to postpone",
				"to cancel",
				"to complete"
			],
			correctAnswer: 2,
			explanation: "\"Call off\" means to cancel or abandon a planned event or agreement."
		},
		{
			id: 2,
			question: "She was very upset when her boyfriend decided to break up with her. What does \"break up\" mean?",
			options: [
				"to start a business",
				"to end a relationship",
				"to have a fight",
				"to feel confused"
			],
			correctAnswer: 1,
			explanation: "\"Break up (with someone)\" means to end a romantic relationship."
		},
		{
			id: 3,
			question: "The police are investigating how the suspect managed to get away from custody. What does \"get away\" mean?",
			options: [
				"to confess",
				"to escape",
				"to arrive",
				"to surrender"
			],
			correctAnswer: 1,
			explanation: "\"Get away\" means to escape or flee from a place or situation."
		},
		{
			id: 4,
			question: "If you don't know the meaning of a word, you should look it up in a dictionary. What does \"look up\" mean in this context?",
			options: [
				"to admire",
				"to search for information",
				"to observe the sky",
				"to expect"
			],
			correctAnswer: 1,
			explanation: "\"Look up\" means to search for information (such as a word or phone number) in a reference book, dictionary, or online."
		},
		{
			id: 5,
			question: "Please turn down the music; it's too loud and I can't concentrate. What does \"turn down\" mean here?",
			options: [
				"to increase the volume",
				"to refuse an offer",
				"to reduce the volume",
				"to flip upside down"
			],
			correctAnswer: 2,
			explanation: "\"Turn down\" means to lower the volume, temperature, or level of a device."
		},
		{
			id: 6,
			question: "I'm trying to give up eating fast food because I want to be healthier. What does \"give up\" mean?",
			options: [
				"to start a new habit",
				"to continue",
				"to stop doing something",
				"to try harder"
			],
			correctAnswer: 2,
			explanation: "\"Give up\" means to quit or stop doing a habit or activity."
		},
		{
			id: 7,
			question: "We need to set up a meeting next week to discuss the new project. What does \"set up\" mean?",
			options: [
				"to clean",
				"to arrange or establish",
				"to finish",
				"to review"
			],
			correctAnswer: 1,
			explanation: "\"Set up\" means to arrange, establish, or organize (such as a meeting, business, or system)."
		},
		{
			id: 8,
			question: "He didn't know the answer, so he decided to make up a story. What does \"make up\" mean in this sentence?",
			options: [
				"to apply cosmetics",
				"to invent or fabricate",
				"to forgive",
				"to reconcile"
			],
			correctAnswer: 1,
			explanation: "\"Make up\" means to invent, fabricate, or create a false story or excuse."
		},
		{
			id: 9,
			question: "Remember to put on your seatbelt before you start driving. What does \"put on\" mean?",
			options: [
				"to take off",
				"to discard",
				"to wear or dress oneself in",
				"to postpone"
			],
			correctAnswer: 2,
			explanation: "\"Put on\" means to place clothing, accessories, or gear (like a seatbelt) onto your body."
		},
		{
			id: 10,
			question: "If you keep working hard, you will eventually catch up with your classmates in terms of performance. What does \"catch up (with)\" mean?",
			options: [
				"to stay behind",
				"to reach the same level as",
				"to compete against",
				"to criticize"
			],
			correctAnswer: 1,
			explanation: "\"Catch up (with)\" means to reach the same level, standard, or progress as someone else."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#phrasal-verbs-quiz"><mark className="highlight-tertiary-padding-4-8">Phrasal Verbs Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Phrasal Verbs Questions Quiz (EV)</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Phrasal Verbs</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>deCEMber 10, 2025 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};