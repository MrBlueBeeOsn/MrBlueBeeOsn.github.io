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

export default function NounClausesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "whether the PROJect sucCEEDS or FAILS dePENDS enTIrely on ________ TARgets the DEADlines.",
			options: [
				"whoEVer",
				"whoMEVer",
				"WHO",
				"WHOSE"
			],
			correctAnswer: 0,
			explanation: "The noun clause \"whoEVer TARgets the DEADlines\" acts as the object of the preposition \"on\". Within this noun clause, we need a subject pronoun for the verb \"TARgets\". \"whoEVer\" is the subjective pronoun, whereas \"whoMEVer\" is the objective pronoun."
		},
		{
			id: 2,
			question: "the HR MANager anNOUNCED ________ the COMpany would be tranSITioning to a HYbrid WORK MODel NEXT MONTH.",
			options: [
				"WHAT",
				"that",
				"WHICH",
				"if"
			],
			correctAnswer: 1,
			explanation: "The verb \"anNOUNCED\" requires a direct object. The clause following it is a statement that is grammatically complete on its own (the COMpany would be tranSITioning...). Therefore, the conjunction \"that\" is used simply to introduce the noun clause without functioning as a grammatical element inside it."
		},
		{
			id: 3,
			question: "________ surPRISED the enTIRE BOARD of diRECtors was his SUDden deCISion to reSIGN.",
			options: [
				"That",
				"WHICH",
				"WHAT",
				"WHY"
			],
			correctAnswer: 2,
			explanation: "The noun clause serves as the subject of the main sentence verb \"was\". Inside the noun clause, a subject is missing for the verb \"surPRISED\". \"WHAT\" functions simultaneously as the connector and the subject of the noun clause (MEANing \"the THING that\")."
		},
		{
			id: 4,
			question: "the acCOUNTant NEEDS to VERify ________ the fiNANcial disCREPancies ocCURRED during the LAST FIScal QUARTer.",
			options: [
				"WHY",
				"that",
				"WHAT",
				"WHICH"
			],
			correctAnswer: 0,
			explanation: "The sentence looks for the reason behind the event. \"WHY\" introduces a noun clause that functions as the direct object of the verb \"VERify\". While \"that\" is grammatically possible, \"WHY\" fits the contextual meaning of inVESTigating a discrepancy much better."
		},
		{
			id: 5,
			question: "the TEAM LEADers are STILL deBAting the ISsue of ________ should be ALlocated the reMAIning BUDget.",
			options: [
				"WHO",
				"WHOM",
				"WHOSE",
				"WHICH"
			],
			correctAnswer: 0,
			explanation: "The noun clause is the object of the preposition \"of\". Within the noun clause itself, we need a subject pronoun for the passive verb phrase \"should be ALlocated\". Therefore, the subjective form \"who\" is the correct choice."
		},
		{
			id: 6,
			question: "the MAIN CHALlenge with the NEW SOFTware is ________ it reQUIres exTENsive TRAIning for the STAFF.",
			options: [
				"WHAT",
				"because",
				"that",
				"HOW"
			],
			correctAnswer: 2,
			explanation: "In this sentence, the noun clause functions as a predicate nominative (SUBject COMplement) following the linking verb \"is\". Since the clause \"it reQUIres exTENsive TRAIning...\" is a complete statement of fact, the conjunction \"that\" is the correct connector."
		},
		{
			id: 7,
			question: "you can inVITE ________ you THINK will BENefit MOST from this proFESsional deVELopment WORKshop.",
			options: [
				"whoMEVer",
				"whoEVer",
				"ANyone",
				"WHAT"
			],
			correctAnswer: 1,
			explanation: "This is a tricky structure. The parenthetically inserted phrase \"you THINK\" can cloud the grammar. If you temporarily remove \"you THINK\", you can see that the pronoun functions as the subject of the verb phrase \"will BENefit\". Therefore, the subjective form \"whoEVer\" is required."
		},
		{
			id: 8,
			question: "the LEgal dePARTment will reVIEW ________ DOCuments are subMITted through the PORTal.",
			options: [
				"whaTEVer",
				"whiCHEVer",
				"WHAT",
				"that"
			],
			correctAnswer: 0,
			explanation: "Here, \"whaTEVer\" acts as a determiner modifying the noun \"DOCuments\" within the noun clause \"whaTEVer DOCuments are subMITted through the PORTal\". It means \"any DOCuments that\", which perfectly fits the open-ended nature of the submission process."
		},
		{
			id: 9,
			question: "SCIentists are STILL TRYing to deTERmine ________ the ANcient ARtifact was BURied beneath the STRUCture.",
			options: [
				"WHEN",
				"that",
				"WHAT",
				"WHICH"
			],
			correctAnswer: 0,
			explanation: "The verb \"deTERmine\" needs an object. The clause addresses a question of time regarding a complete past action (the ANcient ARtifact was BURied...). Therefore, the adjoined question word \"WHEN\" correctly introduces the noun clause."
		},
		{
			id: 10,
			question: "the sucCESS of the negotiAtion dePENDS LARGEly on ________ the CLIent acCEPTS our reVISED TERMS.",
			options: [
				"if",
				"whether",
				"that",
				"WHAT"
			],
			correctAnswer: 1,
			explanation: "The noun clause follows the preposition \"on\". While both \"if\" and \"whether\" can introduce noun clauses that express alternatives, only \"whether\" can be used immediately following a preposition."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#dc-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Noun - DC Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
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