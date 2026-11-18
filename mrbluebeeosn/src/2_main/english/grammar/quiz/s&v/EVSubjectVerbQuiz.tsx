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

export default function EVSubjectVerbQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "Each of the students _______ required to submit the assignment by Friday.",
			options: [
				"is",
				"are",
				"were",
				"have"
			],
			correctAnswer: 0,
			explanation: "When a subject starts with \"each of\" (meaning each one among...), the verb is always singular regardless of the plural noun that follows."
		},
		{
			id: 2,
			question: "Neither the manager nor the employees _______ aware of the new policy.",
			options: [
				"was",
				"were",
				"is",
				"has been"
			],
			correctAnswer: 1,
			explanation: "With \"neither... nor...,\" the verb must agree with the subject closest to it (here, \"employees\" is a plural noun)."
		},
		{
			id: 3,
			question: "The team _______ every morning at six a.m.",
			options: [
				"do",
				"practices",
				"practice",
				"are practicing"
			],
			correctAnswer: 1,
			explanation: "\"Team\" is a collective noun. When the group acts together as a single unit, we use a singular verb."
		},
		{
			id: 4,
			question: "Mathematics _______ my most challenging subject in high school.",
			options: [
				"are",
				"were",
				"was",
				"have been"
			],
			correctAnswer: 2,
			explanation: "School subjects ending in \"-ics\" (mathematics, physics, economics, etc.) are always treated as singular nouns."
		},
		{
			id: 5,
			question: "A number of people _______ waiting in line for the concert tickets.",
			options: [
				"is",
				"was",
				"are",
				"has been"
			],
			correctAnswer: 2,
			explanation: "The structure \"a number of + plural noun\" always takes a plural verb (meaning \"many people or things\")."
		},
		{
			id: 6,
			question: "Either my sister or my parents _______ coming to the graduation ceremony.",
			options: [
				"is",
				"are",
				"was",
				"has"
			],
			correctAnswer: 1,
			explanation: "With \"either... or...,\" the verb agrees with the subject closest to it, which is \"parents\" (plural)."
		},
		{
			id: 7,
			question: "Politics _______ a complicated topic for many people.",
			options: [
				"are",
				"is",
				"were",
				"have been"
			],
			correctAnswer: 1,
			explanation: "Similar to school subjects, \"politics\" is treated as a singular noun when referring to a general field or topic."
		},
		{
			id: 8,
			question: "Bread and butter _______ her favorite breakfast.",
			options: [
				"are",
				"were",
				"is",
				"have been"
			],
			correctAnswer: 2,
			explanation: "Although two nouns are joined by \"and,\" \"bread and butter\" is considered a single dish (one unified item), so it takes a singular verb."
		},
		{
			id: 9,
			question: "Ten miles _______ a long distance to run for a beginner.",
			options: [
				"are",
				"were",
				"is",
				"have"
			],
			correctAnswer: 2,
			explanation: "Units of measurement (distance, time, money, weight) are treated as a single collective unit and take a singular verb."
		},
		{
			id: 10,
			question: "Everyone in the office _______ to attend the meeting tomorrow.",
			options: [
				"need",
				"needs",
				"are needing",
				"have needed"
			],
			correctAnswer: 1,
			explanation: "Indefinite pronouns (everyone, someone, no one, everything, etc.) always take a singular verb."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#subject-verb-agreement-quiz"><mark className="highlight-tertiary-padding-4-8">Subject Verb Agreement Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Subject Verb Agreement Quiz (EV)</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Subject Verb Agreement</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>MARCH 20, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};