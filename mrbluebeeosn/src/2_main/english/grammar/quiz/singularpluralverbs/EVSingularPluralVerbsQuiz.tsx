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

export default function EVSingularPluralVerbsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "The list of items _______ on the desk.",
			options: [
				"is",
				"are",
				"were",
				"being"
			],
			correctAnswer: 0,
			explanation: "The main subject is the singular noun \"the list,\" not \"items.\" Therefore, a singular verb is required."
		},
		{
			id: 2,
			question: "Neither the teacher nor the students _______ to skip the extra class.",
			options: [
				"wants",
				"wanting",
				"want",
				"has wanted"
			],
			correctAnswer: 2,
			explanation: "With \"neither... nor...,\" the verb agrees with the subject closest to it. \"The students\" is plural, so \"want\" is required."
		},
		{
			id: 3,
			question: "Economics _______ a difficult subject for many people.",
			options: [
				"are",
				"is",
				"have been",
				"were"
			],
			correctAnswer: 1,
			explanation: "Nouns ending in \"-ics\" that refer to a field of study or subject (like economics, physics, or mathematics) always take a singular verb."
		},
		{
			id: 4,
			question: "A number of employees _______ complained about the new policy.",
			options: [
				"has",
				"is",
				"have",
				"was"
			],
			correctAnswer: 2,
			explanation: "The structure \"a number of + plural noun\" always takes a plural verb. (In contrast, \"the number of\" takes a singular verb)."
		},
		{
			id: 5,
			question: "Every man, woman, and child _______ the right to be happy.",
			options: [
				"has",
				"have",
				"having",
				"are having"
			],
			correctAnswer: 0,
			explanation: "When a subject begins with \"every\" or \"each,\" the verb is always singular regardless of how many nouns follow."
		},
		{
			id: 6,
			question: "The pair of scissors _______ on the sewing table.",
			options: [
				"are",
				"were",
				"was",
				"been"
			],
			correctAnswer: 2,
			explanation: "Although \"scissors\" is a plural noun, the subject \"the pair\" is singular, so the verb agrees with \"pair.\""
		},
		{
			id: 7,
			question: "Ten dollars _______ too much to pay for this small snack.",
			options: [
				"are",
				"were",
				"is",
				"have been"
			],
			correctAnswer: 2,
			explanation: "Periods of time, sums of money, distances, or weights are treated as a single unit and take a singular verb."
		},
		{
			id: 8,
			question: "Either my brothers or my father _______ responsible for the repairs.",
			options: [
				"are",
				"is",
				"were",
				"have been"
			],
			correctAnswer: 1,
			explanation: "With \"either... or...,\" the verb agrees with the subject closest to it, which is \"my father\" (singular)."
		},
		{
			id: 9,
			question: "The team _______ arguing among themselves about the strategy.",
			options: [
				"is",
				"are",
				"has",
				"was"
			],
			correctAnswer: 1,
			explanation: "Collective nouns (like team, family, or staff) take a plural verb when emphasizing the individual actions of the members (here, arguing with one another)."
		},
		{
			id: 10,
			question: "Bread and butter _______ our daily breakfast.",
			options: [
				"is",
				"are",
				"were",
				"have been"
			],
			correctAnswer: 0,
			explanation: "When two nouns joined by \"and\" refer to a single dish or unified idea, they take a singular verb."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#singular-and-plural-verbs-quiz"><mark className="highlight-tertiary-padding-4-8">Singular and Plural Verbs Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Singular and Plural Verbs Quiz (EV)</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Singular and Plural Verbs</p>
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