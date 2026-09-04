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
			question: "EACH of the STUDents _______ to comPLETE the asSIGNment by toMORrow.",
			options: [
				"has",
				"have",
				"having",
				"are"
			],
			correctAnswer: 0,
			explanation: "\"EACH\" is a singular pronoun and always takes a singular verb, regardless of the plural noun \"STUDents\" that follows it."
		},
		{
			id: 2,
			question: "either the TEAcher or the STUDents _______ reSPONsible for the miSTAKE.",
			options: [
				"is",
				"are",
				"was",
				"has"
			],
			correctAnswer: 1,
			explanation: "When using \"either... or,\" the verb must agree with the subject closest to it. \"STUDents\" is plural, so the plural verb \"are\" is used."
		},
		{
			id: 3,
			question: "the TEAM _______ PRACtice every DAY after SCHOOL.",
			options: [
				"DO",
				"PRACtices",
				"PRACtice",
				"are PRACticing"
			],
			correctAnswer: 1,
			explanation: "Collective nouns like \"TEAM\" are usually treated as singular units when the members are acting together as one body."
		},
		{
			id: 4,
			question: "staTIStics _______ a DIFficult SUBject for many COLlege STUdents.",
			options: [
				"are",
				"were",
				"is",
				"be"
			],
			correctAnswer: 2,
			explanation: "Although \"staTIStics\" ends in -s, it refers to a single branch of knowledge or a field of study, which is singular."
		},
		{
			id: 5,
			question: "NEIther of the MOVies _______ WORTH WATCHing.",
			options: [
				"are",
				"were",
				"is",
				"being"
			],
			correctAnswer: 2,
			explanation: "\"NEIther\" is an indefinite pronoun that is treated as singular, even though it refers to two things."
		},
		{
			id: 6,
			question: "a NUMber of PEOple _______ WAITING in LINE for the TICKets.",
			options: [
				"is",
				"was",
				"are",
				"has been"
			],
			correctAnswer: 2,
			explanation: "The phrase \"a NUMber of\" is followed by a plural noun and takes a plural verb, whereas \"the NUMber of\" would take a singular verb."
		},
		{
			id: 7,
			question: "RICE and BEANS _______ my FAvorite MEAL for LUNCH.",
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
			question: "there _______ many REAsons why we should proTECT the enVIronment.",
			options: [
				"is",
				"was",
				"are",
				"has"
			],
			correctAnswer: 2,
			explanation: "In sentences starting with \"there is/are,\" the verb must agree with the noun that follows it. \"REAsons\" is plural, so we use \"are.\""
		},
		{
			id: 9,
			question: "TEN DOLlars _______ is TOO MUCH to PAY for a CUP of COFfee.",
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
			question: "the MANager, aLONG with his asSIStants, _______ is atTENDing the MEETing.",
			options: [
				"are",
				"is",
				"have been",
				"were"
			],
			correctAnswer: 1,
			explanation: "Phrases like \"aLONG with,\" \"as WELL as,\" or \"toGETHer with\" do not change the number of the subject. The subject is \"the MANager\" (singular)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#en-subject-verb-agreement-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Subject-Verb Agreement Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 20, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};