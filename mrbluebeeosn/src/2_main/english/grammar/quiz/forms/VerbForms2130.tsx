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

export default function VerbForms2130(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Did she ______ the email before leaving the office? (Interrogative)",
			options: [
				"V1: send",
				"V2: sent",
				"V3: sent",
				"V4: sending",
				"V5: sends"
			],
			correctAnswer: 0,
			explanation: "In Past Simple questions using the auxiliary verb \"Did\", the main verb must return to its base form (V1)."
		},
		{
			id: 2,
			question: "They didn't ______ any noise during the presentation. (Negative)",
			options: [
				"V1: make",
				"V2: made",
				"V3: made",
				"V4: making",
				"V5: makes"
			],
			correctAnswer: 0,
			explanation: "After the negative auxiliary \"didn't\", the main verb is always in its base form (V1)."
		},
		{
			id: 3,
			question: "The sun ______ in the east and sets in the west. (Affirmative)",
			options: [
				"V1: rise",
				"V2: rose",
				"V3: risen",
				"V4: rising",
				"V5: rises"
			],
			correctAnswer: 4,
			explanation: "This is an affirmative statement expressing a general truth. With the singular subject \"The sun\", the Present Simple V5 (-s) form is required."
		},
		{
			id: 4,
			question: "Have the guests ______ yet? The dinner is getting cold. (Interrogative)",
			options: [
				"V1: arrive",
				"V2: arrived",
				"V3: arrived",
				"V4: arriving",
				"V5: arrives"
			],
			correctAnswer: 2,
			explanation: "In Present Perfect questions (Have/Has + Subject + Past Participle), the main verb takes the V3 form."
		},
		{
			id: 5,
			question: "He hasn't ______ to his parents since he moved abroad. (Negative)",
			options: [
				"V1: speak",
				"V2: spoke",
				"V3: spoken",
				"V4: speaking",
				"V5: speaks"
			],
			correctAnswer: 2,
			explanation: "In negative Present Perfect sentences (hasn't + Past Participle), the irregular verb \"speak\" takes its V3 form (\"spoken\")."
		},
		{
			id: 6,
			question: "Are you ______ on the new marketing project this week? (Interrogative)",
			options: [
				"V1: work",
				"V2: worked",
				"V3: worked",
				"V4: working",
				"V5: works"
			],
			correctAnswer: 3,
			explanation: "In Present Continuous questions (Am/Is/Are + Subject + V4), the -ing form (V4) is used to ask about an ongoing action around the present time (\"this week\")."
		},
		{
			id: 7,
			question: "My sister doesn't ______ coffee because it makes her anxious. (Negative)",
			options: [
				"V1: drink",
				"V2: drank",
				"V3: drunk",
				"V4: drinking",
				"V5: drinks"
			],
			correctAnswer: 0,
			explanation: "In Present Simple negative sentences with \"doesn't\", the main verb stays in its base form (V1) without adding \"-s\"."
		},
		{
			id: 8,
			question: "We ______ a rare vintage car at the museum last weekend. (Affirmative)",
			options: [
				"V1: see",
				"V2: saw",
				"V3: seen",
				"V4: seeing",
				"V5: sees"
			],
			correctAnswer: 1,
			explanation: "This affirmative sentence refers to a completed action at a specific past time (\"last weekend\"), requiring the Past Simple form (V2) of \"see\"."
		},
		{
			id: 9,
			question: "Why were they ______ so loudly in the hallway earlier? (Interrogative)",
			options: [
				"V1: laugh",
				"V2: laughed",
				"V3: laughed",
				"V4: laughing",
				"V5: laughs"
			],
			correctAnswer: 3,
			explanation: "In Past Continuous questions (Was/Were + Subject + V4), the -ing form (V4) is used to describe an action in progress at a past moment."
		},
		{
			id: 10,
			question: "She isn't ______ to the party tonight because she has a fever. (Negative)",
			options: [
				"V1: come",
				"V2: came",
				"V3: come",
				"V4: coming",
				"V5: comes"
			],
			correctAnswer: 3,
			explanation: "In Present Continuous negative sentences (isn't + V4), the -ing form (V4) is used to express a planned arrangement or near-future action (\"tonight\")."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#verb-forms"><mark className="highlight-tertiary-padding-4-8">Verb Forms</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Verb Forms 21-30</h1>
					<p className="subtitle text-center">Test your knowledge of Verb Forms</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>noVEMber 22, 2025 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};