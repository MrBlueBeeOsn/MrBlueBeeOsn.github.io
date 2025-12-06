// EnglishPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import EnglishPracticeQuiz from '../../../components/quiz/EnglishPracticeQuiz';

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

export default function MixedEnglishGrammarAndVocabulary(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "She _______ to the cinema with her friends yesterday evening.",
			options: [
				"go",
				"went",
				"gone",
				"goes"
			],
			correctAnswer: 1,
			explanation: "The sentence contains the past time adverb \"yesterday evening,\" which signals the Past Simple Tense. The Past Simple form of \"go\" is \"went.\""
		},
		{
			id: 2,
			question: "If it rains tomorrow, we _______ the picnic.",
			options: [
				"cancel",
				"will cancel",
				"canceled",
				"would cancel"
			],
			correctAnswer: 1,
			explanation: "This is a Type 1 Conditional sentence, which describes a real and possible situation in the future. The structure for the main clause is S + will + V(bare infinitive)."
		},
		{
			id: 3,
			question: "He is very interested _______ learning new languages.",
			options: [
				"on",
				"at",
				"in",
				"of"
			],
			correctAnswer: 2,
			explanation: "The fixed structure for expressing interest is \"to be interested in + V-ing/Noun\" (to have an interest or concern in something)."
		},
		{
			id: 4,
			question: "This car is _______ than the one I drove yesterday.",
			options: [
				"more expensive",
				"expensive",
				"expensiver",
				"most expensive"
			],
			correctAnswer: 0,
			explanation: "This is a comparative sentence using the word \"than.\" Because \"expensive\" is a long adjective (three syllables), the correct comparative structure is \"more + adjective + than.\""
		},
		{
			id: 5,
			question: "I have lived in this city _______ 2010.",
			options: [
				"for",
				"since",
				"in",
				"ago"
			],
			correctAnswer: 1,
			explanation: "In the Present Perfect Tense (I have lived), \"since\" is used before a specific point in time (2010) to indicate when the action started. \"For\" is used for a duration (e.g., for 15 years)."
		},
		{
			id: 6,
			question: "My brother enjoys _______ football on the weekends.",
			options: [
				"play",
				"to play",
				"playing",
				"played"
			],
			correctAnswer: 2,
			explanation: "Following verbs expressing preference or enjoyment like \"enjoy,\" the subsequent verb is always in the V-ing form (Gerund)."
		},
		{
			id: 7,
			question: "The letter _______ by the secretary right now.",
			options: [
				"is typing",
				"is being typed",
				"types",
				"was typed"
			],
			correctAnswer: 1,
			explanation: "The subject, \"The letter,\" is an object and the action is happening \"right now,\" so this requires the Present Continuous Passive voice. The structure is: am/is/are + being + V3/ed."
		},
		{
			id: 8,
			question: "You _______ smoke here. It is strictly prohibited.",
			options: [
				"mustn't",
				"needn't",
				"don't have to",
				"should"
			],
			correctAnswer: 0,
			explanation: "\"Mustn't\" (must not) is the modal verb used to express strong prohibition or something that is against the rules, which aligns with the phrase \"strictly prohibited.\""
		},
		{
			id: 9,
			question: "Do you have _______ money left in your wallet?",
			options: [
				"some",
				"many",
				"any",
				"a"
			],
			correctAnswer: 2,
			explanation: "\"Any\" is typically used in questions and negative sentences when referring to indefinite quantities. \"Money\" is an uncountable noun."
		},
		{
			id: 10,
			question: "The man _______ lives next door is a doctor.",
			options: [
				"which",
				"who",
				"whose",
				"whom"
			],
			correctAnswer: 1,
			explanation: "We need a relative pronoun that refers to a person (\"The man\") and functions as the subject of the verb \"lives\" in the relative clause, making \"who\" the correct choice."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#english-multiple-choice"><mark className="highlight-tertiary-padding-4-8">English</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Mixed English Grammar & Vocabulary</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				{/* This is the content of English Quiz. */}
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 05, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};