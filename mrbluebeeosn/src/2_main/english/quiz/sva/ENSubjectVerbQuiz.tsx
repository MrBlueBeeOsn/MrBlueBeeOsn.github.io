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

export default function ENSubjectVerbQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Each of the students _______ to complete the assignment by tomorrow.",
			options: [
				"has",
				"have",
				"having",
				"are"
			],
			correctAnswer: 0,
			explanation: "\"Each\" is a singular pronoun and always takes a singular verb, regardless of the plural noun \"students\" that follows it."
		},
		{
			id: 2,
			question: "Either the teacher or the students _______ responsible for the mistake.",
			options: [
				"is",
				"are",
				"was",
				"has"
			],
			correctAnswer: 1,
			explanation: "When using \"either... or,\" the verb must agree with the subject closest to it. \"Students\" is plural, so the plural verb \"are\" is used."
		},
		{
			id: 3,
			question: "The team _______ practice every day after school.",
			options: [
				"do",
				"practices",
				"practice",
				"are practicing"
			],
			correctAnswer: 1,
			explanation: "Collective nouns like \"team\" are usually treated as singular units when the members are acting together as one body."
		},
		{
			id: 4,
			question: "Statistics _______ a difficult subject for many college students.",
			options: [
				"are",
				"were",
				"is",
				"be"
			],
			correctAnswer: 2,
			explanation: "Although \"statistics\" ends in -s, it refers to a single branch of knowledge or a field of study, which is singular."
		},
		{
			id: 5,
			question: "Neither of the movies _______ worth watching.",
			options: [
				"are",
				"were",
				"is",
				"being"
			],
			correctAnswer: 2,
			explanation: "\"Neither\" is an indefinite pronoun that is treated as singular, even though it refers to two things."
		},
		{
			id: 6,
			question: "A number of people _______ waiting in line for the tickets.",
			options: [
				"is",
				"was",
				"are",
				"has been"
			],
			correctAnswer: 2,
			explanation: "The phrase \"a number of\" is followed by a plural noun and takes a plural verb, whereas \"the number of\" would take a singular verb."
		},
		{
			id: 7,
			question: "Rice and beans _______ my favorite meal for lunch.",
			options: [
				"is",
				"are",
				"were",
				"have been"
			],
			correctAnswer: 0,
			explanation: "When two nouns joined by \"and\" refer to a single dish or a unified concept, they take a singular verb."
		},
		{
			id: 8,
			question: "There _______ many reasons why we should protect the environment.",
			options: [
				"is",
				"was",
				"are",
				"has"
			],
			correctAnswer: 2,
			explanation: "In sentences starting with \"there is/are,\" the verb must agree with the noun that follows it. \"Reasons\" is plural, so we use \"are.\""
		},
		{
			id: 9,
			question: "Ten dollars _______ too much to pay for a cup of coffee.",
			options: [
				"are",
				"is",
				"were",
				"have been"
			],
			correctAnswer: 1,
			explanation: "Expressions of time, money, or distance are usually considered a single unit of measurement and take a singular verb."
		},
		{
			id: 10,
			question: "The manager, along with his assistants, _______ attending the meeting.",
			options: [
				"are",
				"is",
				"have been",
				"were"
			],
			correctAnswer: 1,
			explanation: "Phrases like \"along with,\" \"as well as,\" or \"together with\" do not change the number of the subject. The subject is \"The manager\" (singular)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#en-subject-verb-agreement-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center"></h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 20, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};