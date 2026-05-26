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

export default function AdjectiveClausesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "The man ________ lives next door is a famous musician.",
			options: [
				"which",
				"whom",
				"who",
				"whose"
			],
			correctAnswer: 2,
			explanation: "\"Who\" is used as a subject pronoun for clear reference to a person (\"the man\") performing the action of living next door."
		},
		{
			id: 2,
			question: "The book ________ you lent me yesterday was deeply moving.",
			options: [
				"who",
				"which",
				"whom",
				"whose"
			],
			correctAnswer: 1,
			explanation: "\"Which\" is used as an object pronoun to refer to things or objects (\"the book\")."
		},
		{
			id: 3,
			question: "The corporate building ________ we visited last week has fifty floors.",
			options: [
				"where",
				"that",
				"at which",
				"in where"
			],
			correctAnswer: 1,
			explanation: "\"That\" acts as the object of the verb \"visited.\" \"Where\" cannot be used here because \"visited\" requires a direct object, not an adverbial modifier of place."
		},
		{
			id: 4,
			question: "The student ________ project won first prize was highly praised by the principal.",
			options: [
				"who",
				"whom",
				"whose",
				"which"
			],
			correctAnswer: 2,
			explanation: "\"Whose\" is a possessive relative pronoun used to show that the project belongs to the student."
		},
		{
			id: 5,
			question: "This is the exact restaurant ________ my parents met for the first time.",
			options: [
				"which",
				"that",
				"where",
				"whom"
			],
			correctAnswer: 2,
			explanation: "\"Where\" is a relative adverb used to modify a place (\"the restaurant\") and functions as an adverbial of place within the clause."
		},
		{
			id: 6,
			question: "The professor ________ I spoke to this morning gave me some excellent career advice.",
			options: [
				"which",
				"whose",
				"whom",
				"where"
			],
			correctAnswer: 2,
			explanation: "\"Whom\" is used as the object of the preposition \"to\" when referring to a person (\"the professor\")."
		},
		{
			id: 7,
			question: "2020 was the year ________ the global pandemic changed everyone's daily lives.",
			options: [
				"which",
				"when",
				"where",
				"that's"
			],
			correctAnswer: 1,
			explanation: "\"When\" is a relative adverb used to modify a noun of time (\"the year\")."
		},
		{
			id: 8,
			question: "The reason ________ she left the company so suddenly remains a complete mystery.",
			options: [
				"why",
				"which",
				"whose",
				"where"
			],
			correctAnswer: 0,
			explanation: "\"Why\" is the relative adverb typically used to modify the noun \"reason\" to explain a cause."
		},
		{
			id: 9,
			question: "The local team, ________ tracking record had been poor, surprisingly won the championship.",
			options: [
				"who",
				"that",
				"whose",
				"which"
			],
			correctAnswer: 2,
			explanation: "\"Whose\" indicates possession over the \"tracking record.\" Note that \"that\" cannot be used in non-defining relative clauses (set off by commas)."
		},
		{
			id: 10,
			question: "The water filter ________ we bought last month has already stopped working efficiently.",
			options: [
				"who",
				"whom",
				"whose",
				"that"
			],
			correctAnswer: 3,
			explanation: "\"That\" is used to refer to an object (\"the water filter\") in a defining relative clause."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#dc-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Adjective - DC Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>May 25, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};