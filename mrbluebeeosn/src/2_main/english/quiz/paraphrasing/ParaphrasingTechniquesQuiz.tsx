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

export default function ParaphrasingTechniquesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "WHICH of the FOLlowing is the MOST efFECtive WAY to beGIN PARaphrasing a SENtence?",
			options: [
				"CHAnging Only the ADjectives and ADverbs.",
				"Using a theSAUrus to rePLACE every SINgle WORD.",
				"underSTANDing the FULL MEANing and reWRIting the iDEa in your OWN WORDS.",
				"rearRAnging the ORder of the WORDS without CHAnging them."
			],
			correctAnswer: 2,
			explanation: "Paraphrasing is about conveying the original meaning using your own unique voice and structure, not just swapping words."
		},
		{
			id: 2,
			question: "when PARaphrasing, if you CHANGE the SENtence from \"the COMpany LAUNCHED the PRODuct in 2023\" to \"the PRODuct was LAUNCHED by the COMpany in 2023,\" WHICH techNIQUE are you Using?",
			options: [
				"Using SYNonyms",
				"CHAnging PASsive VOICE to ACtive VOICE",
				"CHAnging ACtive VOICE to PASsive VOICE",
				"nominalizAtion"
			],
			correctAnswer: 2,
			explanation: "This is a structural change where the subject (the COMpany) and the object (the PRODuct) swap roles using passive construction."
		},
		{
			id: 3,
			question: "WHAT is a \"SYNonym\"?",
			options: [
				"a WORD with the OPposite MEANing.",
				"a WORD that SOUNDS the SAME but has a DIFFERent MEANing.",
				"a WORD or PHRASE that MEANS exACTly or NEARly the SAME as anOTHer.",
				"a WORD that is CAPitalized in every SENtence."
			],
			correctAnswer: 2,
			explanation: "Using synonyms is a core technique in paraphrasing to avoid \"PATCHwriting\" or copying the original vocabulary."
		},
		{
			id: 4,
			question: "WHEN should you USE quoTAtion MARKS during the PARaphrasing PROcess?",
			options: [
				"when you USE MORE than THREE WORDS from the oRIGinal TEXT.",
				"when you USE uNIQUE TERMS or speCIFic PHRASES that CANnot be CHANGED.",
				"Only at the beGINning and END of your enTIre PARagraph.",
				"NEVer; PARaphrasing MEANS you don't NEED quoTAtion MARKS."
			],
			correctAnswer: 1,
			explanation: "If the original author uses a very specific or technical term that cannot be paraphrased, you must put that specific term in quotes."
		},
		{
			id: 5,
			question: "WHICH of THESE is an exAMple of CHAnging \"PARTS of SPEECH\" for PARaphrasing?",
			options: [
				"Changing \"happy\" to \"joyful.\"",
				"CHAnging \"the NURSE CARED for the PAtient\" to \"the NURSE proVIded CARE for the PAtient.\"",
				"CHAnging \"he RAN FAST\" to \"he MOVED QUICKly.\"",
				"CHAnging the ORder of TWO PARagraphs."
			],
			correctAnswer: 1,
			explanation: "In this example, the verb \"cared\" is transformed into the noun \"care.\""
		},
		{
			id: 6,
			question: "TRUE or FALSE: you do NOT NEED to CITE the SOURCE if you have PARaphrased the inforMAtion PERfectly in your OWN WORDS.",
			options: [
				"TRUE",
				"FALSE",
				"",
				""
			],
			correctAnswer: 1,
			explanation: "Even if the words are 100% yours, the idea belongs to the original author. Failing to cite is still considered plagiarism."
		},
		{
			id: 7,
			question: "WHICH techNIQUE inVOLVES CHAnging the STRUCture of a SENtence by TURNing a VERB into a NOUN?",
			options: [
				"transpoSITion",
				"nominaliZAtion",
				"CLAUSE reDUCtion",
				"conJUNCtion substiTUtion"
			],
			correctAnswer: 1,
			explanation: "Nominalization is the process of turning verbs or adjectives into nouns (e.g., \"deCIDE\" beCOMES \"deCISion\")."
		},
		{
			id: 8,
			question: "oRIGinal: \"due to the FACT that it was RAIning, the GAME was CANcelled.\" PARaphrase: \"the MATCH was callED OFF because of the RAIN. \"What techNIQUE was PRImarily USED HERE?",
			options: [
				"Only CHAnging the WORD \"RAIN.\"",
				"comBIning SENtences.",
				"Using SYNonyms and SIMplifying the STRUCture.",
				"CHAnging the TENSE from PAST to FUture."
			],
			correctAnswer: 2,
			explanation: "\"Cancelled\" became \"called off,\" and the wordy \"due to the fact that\" was simplified to \"because of.\""
		},
		{
			id: 9,
			question: "WHAT is \"PATCHwriting\"?",
			options: [
				"WRIting a PERfect PARaphrase.",
				"SEWing DIFFERent iDEas toGETHer from many BOOKS.",
				"COPying a PASsage but deLEting a FEW WORDS or CHAnging SMALL PARTS.",
				"WRIting a SUMmary of a WHOLE CHAPter."
			],
			correctAnswer: 2,
			explanation: "Patchwriting is considered a form of \"FAILED PARaphrasing\" where the student stays too close to the original grammar and vocabulary."
		},
		{
			id: 10,
			question: "when PARaphrasing a COMplex SENtence with MULtiple CLAUses, it is OFten HELPful to:",
			options: [
				"BREAK the LONG SENtence into TWO or MORE SHORTer SENtences.",
				"KEEP the exACT punctuAtion but CHANGE the NOUNS.",
				"transLATE it into anOTHer LANGuage and BACK aGAIN.",
				"USE the SAME conNECTors (and, but, so) as the oRIGinal."
			],
			correctAnswer: 0,
			explanation: "Breaking down complex structures is a powerful way to ensure the new version is distinct from the original while remaining clear."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#paraphrasing-techniques-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Paraphrasing Techniques Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>April 16, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};