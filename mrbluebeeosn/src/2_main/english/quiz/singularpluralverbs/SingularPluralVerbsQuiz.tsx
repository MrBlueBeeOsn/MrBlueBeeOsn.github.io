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
			question: "neither the MANager nor the emPLOYees _______ aWARE of the NEW POLicy CHANges.",
			options: [
				"is",
				"are",
				"was",
				"has"
			],
			correctAnswer: 1,
			explanation: "When using \"neither... nor,\" the verb must agree with the noun closest to it. Since \"emPLOYees\" is plural, the plural verb \"are\" is required."
		},
		{
			id: 2,
			question: "the LIST of Items _______ on the DESK for your reVIEW.",
			options: [
				"are",
				"were",
				"is",
				"have been"
			],
			correctAnswer: 2,
			explanation: "The subject is \"the LIST,\" which is singular. The phrase \"of Items\" is a prepositional phrase and does not change the number of the subject."
		},
		{
			id: 3,
			question: "EACH of the STUdent _______ reQUIred to subMIT a FInal PROJect by FRIday.",
			options: [
				"are",
				"were",
				"is",
				"have"
			],
			correctAnswer: 2,
			explanation: "\"EACH\" is an indefinite pronoun that is always singular, regardless of the plural noun \"STUdent\" that follows it."
		},
		{
			id: 4,
			question: "staTIStics _______ a DIFficult SUBject for many PEOple to MASter.",
			options: [
				"is",
				"are",
				"were",
				"have been"
			],
			correctAnswer: 0,
			explanation: "When referring to a branch of knowledge or a field of study, words ending in \"-ics\" (like staTIStics, PHYsics, or matheMATics) take a singular verb."
		},
		{
			id: 5,
			question: "a PAIR of SCISsors _______ in the TOP DRAWer of the CABinet.",
			options: [
				"are",
				"were",
				"is",
				"have been"
			],
			correctAnswer: 2,
			explanation: "While \"SCISsors\" is plural, the subject \"a PAIR\" is singular, so it requires the singular verb \"is.\""
		},
		{
			id: 6,
			question: "NOT Only the TEACHer but ALso the STUdent _______ exCIted about the FIELD TRIP.",
			options: [
				"are",
				"is",
				"were",
				"have been"
			],
			correctAnswer: 1,
			explanation: "With \"NOT Only... but ALso,\" the verb agrees with the subject closest to it. \"the STUdent\" is singular, so \"is\" is the correct choice."
		},
		{
			id: 7,
			question: "MOST of the MILK _______ SPOILED because it was left OUT overNIGHT.",
			options: [
				"have",
				"are",
				"has",
				"were"
			],
			correctAnswer: 2,
			explanation: "\"MOST\" can be singular or plural depending on the noun it refers to. Since \"MILK\" is uncountable (singular), the verb must be singular (\"has\")."
		},
		{
			id: 8,
			question: "FIVE MILES _______ a LONG DIStance to RUN every MORNing.",
			options: [
				"are",
				"were",
				"is",
				"have been"
			],
			correctAnswer: 2,
			explanation: "Units of measurement (DIStance, TIME, MONey) are usually treated as a single collective unit and take a singular verb."
		},
		{
			id: 9,
			question: "the TEAM _______ ARGuing about which STRATegy to IMplement.",
			options: [
				"is",
				"are",
				"was",
				"has"
			],
			correctAnswer: 1,
			explanation: "When members of a collective noun (like \"TEAM\") are acting as individuals or are in disagreement, a plural verb is used to show they are not acting as one unit."
		},
		{
			id: 10,
			question: "there _______ several REAsons why we should postPONE the MEETing.",
			options: [
				"is",
				"was",
				"has been",
				"are"
			],
			correctAnswer: 3,
			explanation: "In \"there is/there are\" sentences, the verb must agree with the noun that follows it. \"REAsons\" is plural, so \"are\" is the correct verb."
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
						<span>March 29, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};