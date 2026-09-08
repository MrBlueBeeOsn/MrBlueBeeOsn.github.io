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

export default function AdjectiveClausesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "the MAN ________ LIVES NEXT DOOR is a FAmous muSICian.",
			options: [
				"which",
				"whom",
				"who",
				"whose"
			],
			correctAnswer: 2,
			explanation: "\"who\" is used as a subject pronoun for clear reference to a person (\"the MAN\") performing the action of living next door."
		},
		{
			id: 2,
			question: "the BOOK ________ you LENT me YESterday was DEEPly MOving.",
			options: [
				"who",
				"which",
				"whom",
				"whose"
			],
			correctAnswer: 1,
			explanation: "\"which\" is used as an object pronoun to refer to things or objects (\"the BOOK\")."
		},
		{
			id: 3,
			question: "the CORporate BUILding ________ we VISited LAST WEEK HAS FIFty FLOORS.",
			options: [
				"where",
				"that",
				"at which",
				"in where"
			],
			correctAnswer: 1,
			explanation: "\"that\" acts as the object of the verb \"VISited.\" \"where\" cannot be used here because \"VISited\" requires a direct object, not an adverbial modifier of place."
		},
		{
			id: 4,
			question: "the STUdent ________ PROJect WON FIRST PRIZE was HIGHly PRAISED by the PRINcipal.",
			options: [
				"who",
				"whom",
				"whose",
				"which"
			],
			correctAnswer: 2,
			explanation: "\"whose\" is a possessive relative pronoun used to show that the project belongs to the STUdent."
		},
		{
			id: 5,
			question: "THIS is the exACT RESTAURant ________ my PARents MET for the FIRST TIME.",
			options: [
				"which",
				"that",
				"where",
				"whom"
			],
			correctAnswer: 2,
			explanation: "\"where\" is a relative adverb used to modify a place (\"the RESTAURant\") and functions as an adverbial of place within the clause."
		},
		{
			id: 6,
			question: "the proFESsor ________ i SPOKE to this MORning GAVE me some EXcellent caREER adVICE.",
			options: [
				"which",
				"whose",
				"whom",
				"where"
			],
			correctAnswer: 2,
			explanation: "\"whom\" is used as the object of the preposition \"to\" when referring to a person (\"the proFESsor\")."
		},
		{
			id: 7,
			question: "2020 was the YEAR ________ the GLObal panDEMic CHANGED EVERyone's DAIly LIVES.",
			options: [
				"which",
				"when",
				"where",
				"that's"
			],
			correctAnswer: 1,
			explanation: "\"when\" is a relative adverb used to modify a noun of time (\"the YEAR\")."
		},
		{
			id: 8,
			question: "the REAson ________ she LEFT the COMpany so SUDdenly reMAINS a comPLETE MYStery.",
			options: [
				"why",
				"which",
				"whose",
				"where"
			],
			correctAnswer: 0,
			explanation: "\"why\" is the relative adverb typically used to modify the noun \"REAson\" to explain a cause."
		},
		{
			id: 9,
			question: "the LOcal TEAM, ________ TRACKing REcord had been POOR, surPRIsingly WON the CHAMpionship.",
			options: [
				"who",
				"that",
				"whose",
				"which"
			],
			correctAnswer: 2,
			explanation: "\"whose\" indicates possession over the \"TRACKing REcord.\" Note that \"that\" cannot be used in non-defining relative clauses (seT OFF by COMmas)."
		},
		{
			id: 10,
			question: "the WAter FILter ________ we BOUGHT LAST MONTH has alREADy STOPPED WORKing efFICiently.",
			options: [
				"who",
				"whom",
				"whose",
				"that"
			],
			correctAnswer: 3,
			explanation: "\"that\" is used to refer to an object (\"the WAter FILter\") in a defining relative clause."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#dc-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Adjective - DC Quiz</h1>
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