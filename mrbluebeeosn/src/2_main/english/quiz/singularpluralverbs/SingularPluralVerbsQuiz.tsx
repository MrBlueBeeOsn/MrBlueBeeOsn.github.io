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

export default function SingularPluralVerbsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Neither the manager nor the employees _______ aware of the new policy changes.",
			options: [
				"is",
				"are",
				"was",
				"has"
			],
			correctAnswer: 1,
			explanation: "When using \"neither... nor,\" the verb must agree with the noun closest to it. Since \"employees\" is plural, the plural verb \"are\" is required."
		},
		{
			id: 2,
			question: "The list of items _______ on the desk for your review.",
			options: [
				"are",
				"were",
				"is",
				"have been"
			],
			correctAnswer: 2,
			explanation: "The subject is \"The list,\" which is singular. The phrase \"of items\" is a prepositional phrase and does not change the number of the subject."
		},
		{
			id: 3,
			question: "Each of the students _______ required to submit a final project by Friday.",
			options: [
				"are",
				"were",
				"is",
				"have"
			],
			correctAnswer: 2,
			explanation: "\"Each\" is an indefinite pronoun that is always singular, regardless of the plural noun \"students\" that follows it."
		},
		{
			id: 4,
			question: "Statistics _______ a difficult subject for many people to master.",
			options: [
				"is",
				"are",
				"were",
				"have been"
			],
			correctAnswer: 0,
			explanation: "When referring to a branch of knowledge or a field of study, words ending in \"-ics\" (like statistics, physics, or mathematics) take a singular verb."
		},
		{
			id: 5,
			question: "A pair of scissors _______ in the top drawer of the cabinet.",
			options: [
				"are",
				"were",
				"is",
				"have been"
			],
			correctAnswer: 2,
			explanation: "While \"scissors\" is plural, the subject \"A pair\" is singular, so it requires the singular verb \"is.\""
		},
		{
			id: 6,
			question: "Not only the teacher but also the student _______ excited about the field trip.",
			options: [
				"are",
				"is",
				"were",
				"have been"
			],
			correctAnswer: 1,
			explanation: "With \"not only... but also,\" the verb agrees with the subject closest to it. \"The student\" is singular, so \"is\" is the correct choice."
		},
		{
			id: 7,
			question: "Most of the milk _______ spoiled because it was left out overnight.",
			options: [
				"have",
				"are",
				"has",
				"were"
			],
			correctAnswer: 2,
			explanation: "\"Most\" can be singular or plural depending on the noun it refers to. Since \"milk\" is uncountable (singular), the verb must be singular (\"has\")."
		},
		{
			id: 8,
			question: "Five miles _______ a long distance to run every morning.",
			options: [
				"are",
				"were",
				"is",
				"have been"
			],
			correctAnswer: 2,
			explanation: "Units of measurement (distance, time, money) are usually treated as a single collective unit and take a singular verb."
		},
		{
			id: 9,
			question: "The team _______ arguing about which strategy to implement.",
			options: [
				"is",
				"are",
				"was",
				"has"
			],
			correctAnswer: 1,
			explanation: "When members of a collective noun (like \"team\") are acting as individuals or are in disagreement, a plural verb is used to show they are not acting as one unit."
		},
		{
			id: 10,
			question: "There _______ several reasons why we should postpone the meeting.",
			options: [
				"is",
				"was",
				"has been",
				"are"
			],
			correctAnswer: 3,
			explanation: "In \"there is/there are\" sentences, the verb must agree with the noun that follows it. \"Reasons\" is plural, so \"are\" is the correct verb."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#singular-and-plural-verbs-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Singular and Plural Verbs</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 29, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};