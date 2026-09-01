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
			question: "she _______ to the CINema with her FRIENDS YESterday EVEning.",
			options: [
				"GO",
				"WENT",
				"GONE",
				"GOES"
			],
			correctAnswer: 1,
			explanation: "The sentence contains the past time adverb \"YESterday EVEning,\" which signals the Past Simple Tense. The Past Simple form of \"GO\" is \"WENT.\""
		},
		{
			id: 2,
			question: "if it RAINS toMORrow we _______ the PICnic.",
			options: [
				"CANcel",
				"will CANcel",
				"CANceled",
				"would CANcel"
			],
			correctAnswer: 1,
			explanation: "This is a Type 1 Conditional sentence, which describes a real and possible situation in the future. The structure for the main clause is S + will + V(bare infinitive)."
		},
		{
			id: 3,
			question: "he is VERy INTERested _______ LEARNing NEW LANGuages.",
			options: [
				"on",
				"at",
				"in",
				"of"
			],
			correctAnswer: 2,
			explanation: "The fixed structure for expressing interest is \"to be INTERested in + V-ing/Noun\" (to have an INTERest or conCERN in SOMEthing)."
		},
		{
			id: 4,
			question: "this CAR is _______ than the ONE i DROVE YESterday.",
			options: [
				"MORE exPENsive",
				"exPENsive",
				"exPENsiver",
				"MOST exPENsive"
			],
			correctAnswer: 0,
			explanation: "This is a comparative sentence using the word \"than.\" Because \"exPENsive\" is a long adjective (three syllables), the correct comparative structure is \"MORE + adjective + than.\""
		},
		{
			id: 5,
			question: "i have LIVED in this CITy _______ 2010.",
			options: [
				"for",
				"since",
				"in",
				"aGO"
			],
			correctAnswer: 1,
			explanation: "In the Present Perfect Tense (i have LIVED), \"since\" is used before a specific point in time (2010) to indicate when the action started. \"for\" is used for a duration (e.g., for fifTEEN YEARS)."
		},
		{
			id: 6,
			question: "my BROTHer enJOYS _______ FOOTball on the WEEKends.",
			options: [
				"PLAY",
				"to PLAY",
				"PLAYing",
				"PLAYED"
			],
			correctAnswer: 2,
			explanation: "Following verbs expressing preference or enjoyment like \"enJOY,\" the subsequent verb is always in the V-ing form (Gerund)."
		},
		{
			id: 7,
			question: "the LETter _______ by the SECretary RIGHT NOW.",
			options: [
				"is TYping",
				"is being TYPED",
				"TYPES",
				"was TYPED"
			],
			correctAnswer: 1,
			explanation: "The subject, \"the LETter,\" is an object and the action is happening \"RIGHT NOW,\" so this requires the Present Continuous Passive voice. The structure is: am/is/are + being + V3/ed."
		},
		{
			id: 8,
			question: "you _______ SMOKE HERE. it is STRICTly proHIBited.",
			options: [
				"MUSTn't",
				"NEEDn't",
				"DON'T have to",
				"should"
			],
			correctAnswer: 0,
			explanation: "\"MUSTn't\" (must NOT) is the modal verb used to express strong prohibition or something that is against the rules, which aligns with the phrase \"strictly prohibited.\""
		},
		{
			id: 9,
			question: "do you have _______ MONey LEFT in your WALlet?",
			options: [
				"some",
				"many",
				"any",
				"a"
			],
			correctAnswer: 2,
			explanation: "\"any\" is typically used in questions and negative sentences when referring to indefinite quantities. \"MONey\" is an uncountable noun."
		},
		{
			id: 10,
			question: "the MAN _______ LIVES NEXT DOOR is a DOCtor.",
			options: [
				"which",
				"who",
				"whose",
				"whom"
			],
			correctAnswer: 1,
			explanation: "We need a relative pronoun that refers to a person (\"the MAN\") and functions as the subject of the verb \"LIVES\" in the relative clause, making \"who\" the correct choice."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#english-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Mixed English Grammar & Vocabulary</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				{/* This is the content of English Quiz. */}
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 05, 2025 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};