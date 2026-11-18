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

export default function EVAdjectiveClausesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "The woman _______ lives next door is a famous doctor.",
			options: [
				"whom",
				"who",
				"which",
				"whose"
			],
			correctAnswer: 1,
			explanation: "A relative pronoun replacing the person noun \"the woman\" and acting as the subject in the relative clause (before the verb \"lives\")."
		},
		{
			id: 2,
			question: "The book _______ I borrowed from the library yesterday is very interesting.",
			options: [
				"who",
				"whom",
				"which",
				"whose"
			],
			correctAnswer: 2,
			explanation: "A relative pronoun replacing the thing noun \"the book\" and acting as the object in the relative clause."
		},
		{
			id: 3,
			question: "Do you know the boy _______ bicycle was stolen last night?",
			options: [
				"who",
				"whose",
				"whom",
				"that"
			],
			correctAnswer: 1,
			explanation: "Used to show possession for the preceding noun (\"the boy's bicycle\" -> \"the boy whose bicycle\")."
		},
		{
			id: 4,
			question: "The restaurant _______ we had dinner last week was fantastic.",
			options: [
				"where",
				"which",
				"that",
				"when"
			],
			correctAnswer: 0,
			explanation: "A relative adverb of place replacing \"the restaurant\" (equivalent to \"at which\")."
		},
		{
			id: 5,
			question: "I will never forget the day _______ I first met my best friend.",
			options: [
				"which",
				"where",
				"when",
				"who"
			],
			correctAnswer: 2,
			explanation: "A relative adverb of time replacing the noun \"the day.\""
		},
		{
			id: 6,
			question: "The man _______ you met at the party is my uncle.",
			options: [
				"which",
				"whose",
				"whom",
				"who"
			],
			correctAnswer: 2,
			explanation: "A relative pronoun replacing the person noun \"the man\" and acting as the object in the relative clause (followed by the subject pronoun \"you\")."
		},
		{
			id: 7,
			question: "The reason _______ he failed the exam was his laziness.",
			options: [
				"why",
				"which",
				"where",
				"when"
			],
			correctAnswer: 0,
			explanation: "A relative adverb of reason, typically used immediately after the noun phrase \"the reason.\""
		},
		{
			id: 8,
			question: "The building, _______ was built in nineteen twenty, is being renovated.",
			options: [
				"that",
				"which",
				"who",
				"where"
			],
			correctAnswer: 1,
			explanation: "This is a non-defining relative clause (with commas) modifying the thing \"the building.\" Grammar rules do not allow \"that\" after a comma."
		},
		{
			id: 9,
			question: "The students _______ completed the assignment on time received extra marks.",
			options: [
				"whom",
				"which",
				"who",
				"whose"
			],
			correctAnswer: 2,
			explanation: "Replaces the plural person noun \"the students\" and acts as the subject for the verb \"completed.\""
		},
		{
			id: 10,
			question: "The laptop _______ she is using belongs to her brother.",
			options: [
				"whose",
				"who",
				"whom",
				"that"
			],
			correctAnswer: 3,
			explanation: "\"That\" is used to replace the thing noun \"the laptop\" in a defining relative clause (\"which\" is also possible, though \"that\" is the only correct option provided)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#clauses-quiz"><mark className="highlight-tertiary-padding-4-8">Clauses Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Adjective Clauses Quiz (EV)</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Clauses</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>May 25, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};