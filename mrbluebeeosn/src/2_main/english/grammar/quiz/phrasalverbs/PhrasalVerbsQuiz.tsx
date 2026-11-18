// EnglishPracticeQuizDPDK.tsx

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

export default function PhrasalVerbsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Phrasal Verbs cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "The manager decided to call off the meeting because the main speaker was ill. What does \"call off\" mean?",
			options: [
				"postpone",
				"cancel",
				"start",
				"attend"
			],
			correctAnswer: 1,
			explanation: "The phrasal verb \"call off\" means to decide that a planned event or agreement will not happen (synonym: cancel)."
		},
		{
			id: 2,
			question: "She takes after her grandmother; they are both very artistic. What does \"takes after\" mean?",
			options: [
				"looks up to",
				"follows",
				"resembles in appearance or character",
				"takes care of"
			],
			correctAnswer: 2,
			explanation: "To \"take after\" someone means to look or behave like an older relative, often a parent or grandparent."
		},
		{
			id: 3,
			question: "Don't worry, you will get over the flu in a couple of days. What does \"get over\" mean?",
			options: [
				"avoid",
				"recover from",
				"catch",
				"search for"
			],
			correctAnswer: 1,
			explanation: "To \"get over\" something, especially an illness or a difficult experience, means to recover from it."
		},
		{
			id: 4,
			question: "I was walking in the park and unexpectedly ran into my old primary school teacher. What does \"run into\" mean?",
			options: [
				"collide with",
				"meet someone unexpectedly",
				"get in trouble with",
				"chase after"
			],
			correctAnswer: 1,
			explanation: "The phrasal verb \"run into\" means to meet someone by chance without having planned to."
		},
		{
			id: 5,
			question: "When I asked about his family, he quickly brought up a new topic. What does \"bring up\" mean here?",
			options: [
				"to raise a child",
				"to mention or introduce a subject",
				"to vomit",
				"to move something upwards"
			],
			correctAnswer: 1,
			explanation: "To \"bring up\" a subject means to start discussing it or mention it in a conversation."
		},
		{
			id: 6,
			question: "The machine broke down right in the middle of our production cycle. What does \"broke down\" mean?",
			options: [
				"stopped working because of a fault",
				"fell on the floor",
				"started working effectively",
				"divided into smaller parts"
			],
			correctAnswer: 0,
			explanation: "When a machine or vehicle \"breaks down,\" it stops operating or functioning because of a mechanical failure."
		},
		{
			id: 7,
			question: "Could you hold on for a moment? I need to check my calendar. What does \"hold on\" mean?",
			options: [
				"grab something tightly",
				"wait for a short time",
				"continue with an activity",
				"stay on the line"
			],
			correctAnswer: 1,
			explanation: "The phrasal verb \"hold on\" is an informal way of asking someone to wait, often used when talking on the phone."
		},
		{
			id: 8,
			question: "I came across a fascinating article about ancient history while browsing the internet. What does \"come across\" mean?",
			options: [
				"to be understood",
				"to cross a boundary",
				"to find or meet by chance",
				"to seem or appear"
			],
			correctAnswer: 2,
			explanation: "To \"come across\" something or someone means to find or meet them by accident."
		},
		{
			id: 9,
			question: "All students must hand in their essays before Friday at five p.m. What does \"hand in\" mean?",
			options: [
				"submit",
				"distribute",
				"collect",
				"write"
			],
			correctAnswer: 0,
			explanation: "To \"hand in\" an assignment or piece of work means to give it to a person in authority (like a teacher or manager) for assessment or approval (synonym: submit)."
		},
		{
			id: 10,
			question: "They are planning to set up a new branch office in London next year. What does \"set up\" mean?",
			options: [
				"to decorate",
				"to trick someone",
				"to establish or organize something",
				"to stand up"
			],
			correctAnswer: 2,
			explanation: "To \"set up\" a business, system, or organization means to start or establish it."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#phrasal-verbs-quiz"><mark className="highlight-tertiary-padding-4-8">Phrasal Verbs Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Phrasal Verbs Questions Quiz</h1>
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