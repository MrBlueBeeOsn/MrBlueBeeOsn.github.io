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
			question: "___________ the TRAFfic was inCREDibly HEAVy, we MANaged to arRIVE at the AIRport before our FLIGHT CLOSED.",
			options: [
				"despite",
				"although",
				"in spite of",
				"because"
			],
			correctAnswer: 1,
			explanation: "This sentence expresses concession. \"although\" is a subordinating conjunction that introduces an adverb clause of concession (although + CLAUSE). \"despite\" and \"in spite of\" require a noun phrase or gerund, not a full clause. \"because\" would change the meaning to cause-and-effect, which does not fit the context."
		},
		{
			id: 2,
			question: "you should wriTE DOWN the apPOINTment DATE in your CALendar ___________ you DON'T forGET it.",
			options: [
				"so that",
				"in order to",
				"because of",
				"as long as"
			],
			correctAnswer: 0,
			explanation: "This introduces an adverb clause of purpose. \"so that\" is followed by a clause (SUBject + VERB, OFten with MOdal VERBS like can/could/will/would). \"in order to\" must be followed directly by a base verb, and \"because of\" requires a noun phrase."
		},
		{
			id: 3,
			question: "the COMpany will LAUNCH the NEW PRODuct NEXT MONTH ___________ any unexPECTed manuFACturing deLAYS ocCUR.",
			options: [
				"providing that",
				"unless",
				"if only",
				"as SOON as"
			],
			correctAnswer: 1,
			explanation: "\"unless\" means \"if... not,\" introducing an adverb clause of condition. The sentence means the company will launch the product if there are no unexpected delays. \"providing that\" means \"if,\" which would create an illogical statement here."
		},
		{
			id: 4,
			question: "___________ JAMES GRADuated from uniVERsity, he has been WORKing as a JUnior acCOUNTant at an interNATional FIRM.",
			options: [
				"when",
				"while",
				"since",
				"until"
			],
			correctAnswer: 2,
			explanation: "This is an adverb clause of time. \"since\" indicates a starting point in the past up to the present, which perfectly matches the use of the present perfect tense (has been WORKing) in the main clause."
		},
		{
			id: 5,
			question: "she SPOKE in a VERy LOW VOICE ___________ she would waKE UP the SLEEPing BAby in the NEXT ROOM.",
			options: [
				"for fear that",
				"so as to",
				"in case of",
				"even if"
			],
			correctAnswer: 0,
			explanation: "\"for fear that\" introduces an adverb clause of purpose/negative intention, meaning \"to aVOID the RISK of.\" It is followed by a full clause (she would waKE UP). \"so as to\" requires a base verb, and \"in case of\" requires a noun phrase."
		},
		{
			id: 6,
			question: "the CHEF prePARED the DISH exACTly ___________ the traDITional REcipe inSTRUCTed.",
			options: [
				"as if",
				"like",
				"as",
				"whereas"
			],
			correctAnswer: 2,
			explanation: "\"as\" is used here to introduce an adverb clause of manner, showing how the action was performed based on a guide or instruction. While \"like\" is common in casual spoken English, \"as\" is the correct subordinating conjunction for a full formal clause. \"as if\" implies an unreal or hypothetical situation, which does not apply to a real recipe."
		},
		{
			id: 7,
			question: "___________ HARD he TRIED to FIX the BROken LAPtop, he could NOT GET it to TURN on aGAIN.",
			options: [
				"Although",
				"no matter",
				"however",
				"even though"
			],
			correctAnswer: 2,
			explanation: "\"hoWEVer\" acts as a subordinating conjunction meaning \"no matter how\" and must be followed directly by an adjective or adverb (hoWEVer + ADjective/ADverb + SUBject + VERB). \"no matter\" needs the word \"HOW\" to be complete in this structure."
		},
		{
			id: 8,
			question: "we deCIded to STAY inDOORS and WATCH a MOvie ___________ it was RAIning HEAVily outSIDE.",
			options: [
				"now that",
				"due to",
				"even though",
				"so"
			],
			correctAnswer: 0,
			explanation: "\"now that\" introduces an adverb clause of cause/reason, meaning \"because NOW.\" It explains the reason for staying indoors. \"due to\" is a prepositional phrase and cannot be followed by a clause. \"even though\" indicates concession, which contradicts the logic of the sentence."
		},
		{
			id: 9,
			question: "you can BORrow my FAvorite NOVel ___________ you PROMise to reTURN it to me by NEXT FRIday.",
			options: [
				"as far as",
				"as long as",
				"unless",
				"in case"
			],
			correctAnswer: 1,
			explanation: "\"as long as\" is a subordinating conjunction of condition meaning \"provided that\" or \"only if.\" It sets the condition under which the person is allowed to borrow the"
		},
		{
			id: 10,
			question: "PLEASE DOUble-CHECK the fiNANcial FIgures in the SPREADsheet ___________ you subMIT the FInal rePORT to the MANager.",
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
						<span>May 25, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};