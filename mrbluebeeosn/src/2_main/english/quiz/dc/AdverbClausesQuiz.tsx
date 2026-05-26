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

export default function AdverbClausesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "___________ the traffic was incredibly heavy, we managed to arrive at the airport before our flight closed.",
			options: [
				"Despite",
				"Although",
				"In spite of",
				"Because"
			],
			correctAnswer: 1,
			explanation: "This sentence expresses concession. \"Although\" is a subordinating conjunction that introduces an adverb clause of concession (Although + clause). \"Despite\" and \"In spite of\" require a noun phrase or gerund, not a full clause. \"Because\" would change the meaning to cause-and-effect, which does not fit the context."
		},
		{
			id: 2,
			question: "You should write down the appointment date in your calendar ___________ you don't forget it.",
			options: [
				"so that",
				"in order to",
				"because of",
				"as long as"
			],
			correctAnswer: 0,
			explanation: "This introduces an adverb clause of purpose. \"So that\" is followed by a clause (subject + verb, often with modal verbs like can/could/will/would). \"In order to\" must be followed directly by a base verb, and \"because of\" requires a noun phrase."
		},
		{
			id: 3,
			question: "The company will launch the new product next month ___________ any unexpected manufacturing delays occur.",
			options: [
				"providing that",
				"unless",
				"if only",
				"as soon as"
			],
			correctAnswer: 1,
			explanation: "\"Unless\" means \"if... not,\" introducing an adverb clause of condition. The sentence means the company will launch the product if there are no unexpected delays. \"Providing that\" means \"if,\" which would create an illogical statement here."
		},
		{
			id: 4,
			question: "___________ James graduated from university, he has been working as a junior accountant at an international firm.",
			options: [
				"When",
				"While",
				"Since",
				"Until"
			],
			correctAnswer: 2,
			explanation: "This is an adverb clause of time. \"Since\" indicates a starting point in the past up to the present, which perfectly matches the use of the present perfect tense (has been working) in the main clause."
		},
		{
			id: 5,
			question: "She spoke in a very low voice ___________ she would wake up the sleeping baby in the next room.",
			options: [
				"for fear that",
				"so as to",
				"in case of",
				"even if"
			],
			correctAnswer: 0,
			explanation: "\"For fear that\" introduces an adverb clause of purpose/negative intention, meaning \"to avoid the risk of.\" It is followed by a full clause (she would wake up). \"So as to\" requires a base verb, and \"in case of\" requires a noun phrase."
		},
		{
			id: 6,
			question: "The chef prepared the dish exactly ___________ the traditional recipe instructed.",
			options: [
				"as if",
				"like",
				"as",
				"whereas"
			],
			correctAnswer: 2,
			explanation: "\"As\" is used here to introduce an adverb clause of manner, showing how the action was performed based on a guide or instruction. While \"like\" is common in casual spoken English, \"as\" is the correct subordinating conjunction for a full formal clause. \"As if\" implies an unreal or hypothetical situation, which does not apply to a real recipe."
		},
		{
			id: 7,
			question: "___________ hard he tried to fix the broken laptop, he could not get it to turn on again.",
			options: [
				"Although",
				"No matter",
				"However",
				"Even though"
			],
			correctAnswer: 2,
			explanation: "\"However\" acts as a subordinating conjunction meaning \"no matter how\" and must be followed directly by an adjective or adverb (However + adjective/adverb + subject + verb). \"No matter\" needs the word \"how\" to be complete in this structure."
		},
		{
			id: 8,
			question: "We decided to stay indoors and watch a movie ___________ it was raining heavily outside.",
			options: [
				"now that",
				"due to",
				"even though",
				"so"
			],
			correctAnswer: 0,
			explanation: "\"Now that\" introduces an adverb clause of cause/reason, meaning \"because now.\" It explains the reason for staying indoors. \"Due to\" is a prepositional phrase and cannot be followed by a clause. \"Even though\" indicates concession, which contradicts the logic of the sentence."
		},
		{
			id: 9,
			question: "You can borrow my favorite novel ___________ you promise to return it to me by next Friday.",
			options: [
				"as far as",
				"as long as",
				"unless",
				"in case"
			],
			correctAnswer: 1,
			explanation: "\"As long as\" is a subordinating conjunction of condition meaning \"provided that\" or \"only if.\" It sets the condition under which the person is allowed to borrow the"
		},
		{
			id: 10,
			question: "Please double-check the financial figures in the spreadsheet ___________ you submit the final report to the manager.",
			options: [
				"before",
				"after",
				"while",
				"since"
			],
			correctAnswer: 0,
			explanation: "This is an adverb clause of time. Checking the figures must happen prior to the submission of the report, making \"before\" the only chronologically logical choice."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#dc-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Adverb - DC Quiz</h1>
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