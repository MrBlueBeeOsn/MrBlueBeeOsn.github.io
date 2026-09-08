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

export default function DCQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Identify the dependent clause in the following sentence: \"Although it was raining, we decided to go for a walk in the park.\"",
			options: [
				"we decided to go for a walk",
				"Although it was raining",
				"in the park",
				"we decided to go"
			],
			correctAnswer: 1,
			explanation: "\"Although it was raining\" is a dependent clause because it begins with the subordinating conjunction \"although\" and cannot stand alone as a complete sentence."
		},
		{
			id: 2,
			question: "What type of dependent clause is underlined in this sentence? \"The book that you lent me was absolutely fascinating.\"",
			options: [
				"Adverbial clause",
				"Noun clause",
				"Adjective (Relative) clause",
				"Coordinate clause"
			],
			correctAnswer: 2,
			explanation: "\"that you lent me\" is an adjective (relative) clause because it modifies the noun \"book\" and provides essential details about which book is being discussed."
		},
		{
			id: 3,
			question: "Choose the correct subordinating conjunction to complete the sentence: \"You won't pass the exam ________ you start studying harder.\"",
			options: [
				"because",
				"unless",
				"although",
				"provider that"
			],
			correctAnswer: 1,
			explanation: "\"Unless\" means \"except if,\" which perfectly fits the logical condition of the sentence: you will fail except if you study harder."
		},
		{
			id: 4,
			question: "In the sentence, \"What you just said makes a lot of sense,\" the clause \"What you just said\" acts as:",
			options: [
				"The object of the preposition",
				"The subject of the sentence",
				"An adverbial modifier",
				"An adjective modifying \"sense\""
			],
			correctAnswer: 1,
			explanation: "\"What you just said\" is a noun clause functioning as the subject of the main verb \"makes.\""
		},
		{
			id: 5,
			question: "WHICH of the FOLlowing SENtences conTAINS an adVERbial CLAUSE of TIME?",
			options: [
				"i will CALL you as SOON as i arRIVE at the STAtion.",
				"the HOUSE where i greW UP has been deMOLished.",
				"she ACTS as if she KNOWS EVERything.",
				"whichever PATH you CHOOSE will LEAD to adVENTure."
			],
			correctAnswer: 0,
			explanation: "\"as SOON as I arrive at the station\" is an adverbial clause of time because it answers the question \"when\" the main action (calling) will happen."
		},
		{
			id: 6,
			question: "comPLETE the SENtence with the corRECT RELative PROnoun: \"the SCIentist ________ disCOVered the NEW ELement was aWARDed a NObel PRIZE.\"",
			options: [
				"which",
				"whom",
				"whose",
				"who"
			],
			correctAnswer: 3,
			explanation: "\"who\" is the correct relative pronoun here because it refers to a person (\"the SCIentist\") and functions as the subject of the dependent clause \"disCOVered the NEW ELement.\""
		},
		{
			id: 7,
			question: "iDENtify the FUNCtion of the NOUN CLAUSE in this SENtence: \"the TEACHer anNOUNCED that the exAM was postPONED.\"",
			options: [
				"SUBject",
				"diRECT OBject",
				"SUBject COMplement",
				"apPOSitive"
			],
			correctAnswer: 1,
			explanation: "The noun clause \"that the exAM was postPONED\" answers the question \"anNOUNCED WHAT?\" making it the direct object of the transitive verb \"anNOUNCED.\""
		},
		{
			id: 8,
			question: "WHICH of the FOLlowing is a FRAGment (an incomPLETE SENtence) because it Only conTAINS a dePENdent CLAUSE?",
			options: [
				"WALKing down the street, i SAW a cat.",
				"since we forGOT the MAP at HOME.",
				"the STORM PASSED QUICKly, but the POWer was OUT.",
				"RUN as FAST as you CAN."
			],
			correctAnswer: 1,
			explanation: "\"since we forGOT the MAP at HOME\" begins with the subordinating conjunction \"since\" and lacks an independent clause to complete the thought, making it a sentence fragment."
		},
		{
			id: 9,
			question: "WHAT is the dePENdent CLAUSE in this SENtence? \"we can EAT DINner whenever you are READy.\"",
			options: [
				"we can EAT DINner",
				"whenever you are READy",
				"you are READy",
				"we can EAT"
			],
			correctAnswer: 1,
			explanation: "\"whenever you are READy\" is an adverbial dependent clause introduced by the subordinating conjunction \"whenever.\""
		},
		{
			id: 10,
			question: "CHOOSE the SENtence that corRECTly Uses a COMma after an introDUCtory dePENdent CLAUSE:",
			options: [
				"if you SEE MARy TELL her to CALL me.",
				"if you SEE MARy, TELL her to CALL me.",
				"if, you SEE MARy TELL her to CALL me.",
				"if you SEE MARy TELL her to CALL me."
			],
			correctAnswer: 1,
			explanation: "When an adverbial dependent clause introduces a sentence (COMES before the indePENdent CLAUSE), a comma must be placed immediately after the dependent clause to separate it from the main clause."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#dc-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">DC Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>May 23, 2023 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};