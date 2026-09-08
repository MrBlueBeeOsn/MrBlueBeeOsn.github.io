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

export default function ENAuxiliaryVerbsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "she ________ NOT LIKE to EAT SPIcy FOOD for DINner.",
			options: [
				"do",
				"does",
				"did",
				"is"
			],
			correctAnswer: 1,
			explanation: "The subject \"she\" is third-person singular, so the auxiliary verb \"does\" is used in the present simple negative form."
		},
		{
			id: 2,
			question: "________ you SEE the SOlar eCLIPSE that HAPpened LAST NIGHT?",
			options: [
				"do",
				"done",
				"did",
				"have"
			],
			correctAnswer: 2,
			explanation: "\"did\" is used as the auxiliary verb to form questions in the past simple tense."
		},
		{
			id: 3,
			question: "i ________ been WORKing on this acCOUNTing rePORT for THREE HOURS.",
			options: [
				"am",
				"has",
				"have",
				"was"
			],
			correctAnswer: 2,
			explanation: "This sentence is in the present perfect continuous tense (SUBject + have/has + been + V-ing), and \"i\" takes the auxiliary \"have.\""
		},
		{
			id: 4,
			question: "they ________ PLANning to LAUNCH the NEW SOFTware NEXT MONTH.",
			options: [
				"are",
				"is",
				"was",
				"been"
			],
			correctAnswer: 0,
			explanation: "The sentence uses the present continuous tense for a future arrangement. \"they\" is a plural subject, requiring the auxiliary \"are.\""
		},
		{
			id: 5,
			question: "the KEYS ________ FOUND by the JANitor under the DESK.",
			options: [
				"did",
				"were",
				"have",
				"be"
			],
			correctAnswer: 1,
			explanation: "This is a passive voice sentence in the past simple (be + PAST PARTiciple). Since \"KEYS\" is plural, \"were\" is the correct auxiliary."
		},
		{
			id: 6,
			question: "________ she EVer TRAVelled to EURope beFORE?",
			options: [
				"does",
				"is",
				"has",
				"did"
			],
			correctAnswer: 2,
			explanation: "To form a question in the present perfect tense (have/has + SUBject + PAST PARTiciple), we use \"has\" for the third-person singular \"she.\""
		},
		{
			id: 7,
			question: "you ________ NOT have to FINish the TASK toDAY; toMORrow is FINE.",
			options: [
				"does",
				"are",
				"do",
				"did"
			],
			correctAnswer: 2,
			explanation: "In the present simple negative, \"do NOT\" (DON'T) is used with the subject \"you.\""
		},
		{
			id: 8,
			question: "WHAT ________ you DOING when the POWer wenT OUT?",
			options: [
				"was",
				"were",
				"did",
				"are"
			],
			correctAnswer: 1,
			explanation: "This is the past continuous tense (was/were + V-ing) used for an action in progress in the past. \"you\" always takes \"were.\""
		},
		{
			id: 9,
			question: "he ________ JUST FINished his CPA exAM.",
			options: [
				"is",
				"does",
				"has",
				"was"
			],
			correctAnswer: 2,
			explanation: "The word \"JUST\" indicates the present perfect tense. \"he\" is third-person singular, so it requires \"has.\""
		},
		{
			id: 10,
			question: "we ________ GOING to atTEND the SEMinar in vietNAM",
			options: [
				"will",
				"are",
				"do",
				"have"
			],
			correctAnswer: 1,
			explanation: "The structure \"be + GOING to\" is used to express future intentions. \"we\" requires the auxiliary \"are.\""
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#en-auxiliary-verbs-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Auxiliary Verbs Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 25, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};