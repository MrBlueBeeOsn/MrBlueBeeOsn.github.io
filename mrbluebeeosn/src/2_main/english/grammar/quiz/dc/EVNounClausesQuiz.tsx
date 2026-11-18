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

export default function EVNounClausesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "________ made everyone in the room laugh was his hilarious imitation of the boss.",
			options: [
				"what",
				"that",
				"which",
				"whatever"
			],
			correctAnswer: 0,
			explanation: "The subject of this sentence requires a noun clause. \"What\" acts as the subject inside that clause (What made everyone... = The thing that made everyone...). \"That\" cannot serve as the subject of \"made\" without a preceding noun."
		},
		{
			id: 2,
			question: "The professor explained ________ the new software program could improve our efficiency.",
			options: [
				"what",
				"how",
				"which",
				"who"
			],
			correctAnswer: 1,
			explanation: "The noun clause acts as the direct object of the verb \"explained.\" Based on the meaning of the sentence, we need a connector indicating method or manner: \"how.\""
		},
		{
			id: 3,
			question: "The decision depends on ________ candidate passes the final interview.",
			options: [
				"whoever",
				"whichever",
				"who",
				"whatever"
			],
			correctAnswer: 1,
			explanation: "A noun clause is needed after the preposition \"on.\" Since the noun \"candidate\" follows immediately, we need a determiner to modify it. \"Whichever\" means \"any one of a limited group\" (the candidates interviewing)."
		},
		{
			id: 4,
			question: "It is essential that she ________ the report before the board meeting tomorrow.",
			options: [
				"submits",
				"submit",
				"submitted",
				"will submit"
			],
			correctAnswer: 1,
			explanation: "This sentence uses the subjunctive mood with the adjective \"essential\" (It is essential that + S + V-inf). In the noun clause following \"that,\" the verb always takes the bare infinitive form for all subjects."
		},
		{
			id: 5,
			question: "Do you know ________ the package will arrive from London?",
			options: [
				"when",
				"that",
				"what",
				"why"
			],
			correctAnswer: 0,
			explanation: "The noun clause functions as the direct object of the verb \"know.\" Because the question asks about the arrival time of the package, \"when\" is the correct choice."
		},
		{
			id: 6,
			question: "________ she managed to finish the project in just two days surprised all of us.",
			options: [
				"what",
				"how",
				"that",
				"if"
			],
			correctAnswer: 2,
			explanation: "The entire clause at the beginning acts as the main subject. Since \"she managed to finish...\" is already grammatically complete (S-V-O), we use \"that\" to turn the statement of fact into a noun clause."
		},
		{
			id: 7,
			question: "We are still discussing the issue of ________ should be appointed as the new manager.",
			options: [
				"whom",
				"who",
				"whose",
				"which"
			],
			correctAnswer: 1,
			explanation: "The noun clause follows the preposition \"of.\" Inside this clause, we need a subject pronoun before the passive verb phrase \"should be appointed.\" Therefore, the subjective pronoun \"who\" is required."
		},
		{
			id: 8,
			question: "She couldn't hear ________ the tour guide was saying because of the loud noise.",
			options: [
				"that",
				"which",
				"what",
				"whatever"
			],
			correctAnswer: 2,
			explanation: "The noun clause is the object of \"hear.\" Inside the clause, the verb \"saying\" lacks a direct object. \"What\" acts both as the connector and the object of \"saying\" (the things that the tour guide was saying)."
		},
		{
			id: 9,
			question: "The true problem is ________ we lack the necessary budget to launch the campaign.",
			options: [
				"that",
				"what",
				"if",
				"whether"
			],
			correctAnswer: 0,
			explanation: "The noun clause acts as a subject complement following the linking verb \"is.\" Because the clause \"we lack...\" is complete in meaning and structure, \"that\" is used to introduce the fact."
		},
		{
			id: 10,
			question: "The HR department will hire ________ qualifies for the technical position.",
			options: [
				"who",
				"whomever",
				"whoever",
				"anyone"
			],
			correctAnswer: 2,
			explanation: "The noun clause functions as the object of \"hire.\" Within this noun clause, the missing word acts as the subject of the verb \"qualifies,\" so the subjective pronoun \"whoever\" is required rather than \"whomever.\""
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#clauses-quiz"><mark className="highlight-tertiary-padding-4-8">Clauses Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Noun Clauses Quiz (EV)</h1>
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