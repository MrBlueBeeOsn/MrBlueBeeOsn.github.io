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

export default function EnglishMultipleChoice(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "CHOOSE the SENtence that is gramMATically corRECT.",
			options: [
				"she DON'T LIKE COFfee.",
				"she DOESN'T LIKES COFfee.",
				"she DOESN'T LIKE COFfee.",
				"she NOT LIKE COFfee."
			],
			correctAnswer: 2,
			explanation: "The subject \"she\" is a third-person singular pronoun. In the negative present simple tense, it requires the auxiliary verb \"does\" + the base form of the main verb \"LIKE\". The other options demonstrate errors in subject-verb agreement."
		},
		{
			id: 2,
			question: "iDENtify the corRECT prepoSITion: he is VERy GOOD ______ PLAYing the guiTAR.",
			options: [
				"at",
				"in",
				"with",
				"for"
			],
			correctAnswer: 0,
			explanation: "The fixed adjective preposition combination is \"GOOD at (DOing) SOMEthing,\" which means to have talent or skill in a particular area."
		},
		{
			id: 3,
			question: "CHOOSE the corRECT MEANing of the PHRAsal VERB \"call OFF\".",
			options: [
				"to VISit SOMEone",
				"to CANcel SOMEthing",
				"to SHOUT LOUDly",
				"to inVITE SOMEone"
			],
			correctAnswer: 1,
			explanation: "The phrasal verb \"to call OFF\" means to cancel an event or activity. Example: \"they called OFF the MEETing due to ILLness.\""
		},
		{
			id: 4,
			question: "which SENtence Uses the PREsent PERfect TENSE corRECTly?",
			options: [
				"i have SEEN that MOvie YESterday.",
				"i SAW that MOvie YESterday.",
				"i have SEEN that MOvie.",
				"i SEE that MOvie."
			],
			correctAnswer: 2,
			explanation: "The present perfect tense (have/has + past participle) describes an action that occurred at an unspecified time in the past or has relevance to the present. It is generally not used with specific time adverbs like \"YESterday\" (making option a incorrect). Option b is grammatically correct but is in the simple past tense, not the present perfect as requested."
		},
		{
			id: 5,
			question: "WHAT is the SYNonym \"beNEVolent\"?",
			options: [
				"SELfish",
				"MEAN",
				"KIND HEARTed",
				"WEALthy"
			],
			correctAnswer: 2,
			explanation: "\"beNEVolent\" means well-meaning and kindly, so the closest synonym is \"KIND HEARTed.\" The other words are antonyms (SELfish, MEAN) or unrelated (WEALthy)."
		},
		{
			id: 6,
			question: "seLECT the corRECTly PUNCtuated SENtence.",
			options: [
				"let's EAT GRANDma!",
				"let's EAT, GRANDma!",
				"lets EAT GRANDma.",
				"lets EAT, GRANDma."
			],
			correctAnswer: 1,
			explanation: "The comma is crucial here as it separates the vocative (\"GRANDma\") from the main clause. Without it, the sentence suggests cannibalism (\"let's EAT GRANDma!\"). The correct meaning is an invitation: \"GRANDma, let's EAT.\" \"let's\" is the correct contraction of \"let us.\""
		},
		{
			id: 7,
			question: "which OPtion corRECTly comPLETES this conDITional SENtence? if i had KNOWN, i __________________ you.",
			options: [
				"will HELP",
				"would HELP",
				"would have HELPED",
				"had HELPED"
			],
			correctAnswer: 2,
			explanation: "This is a third conditional sentence, used to talk about a hypothetical situation in the past and its impossible result. The structure is: if + past perfect (had KNOWN), would/could/might + have + past participle (would have HELPED)."
		},
		{
			id: 8,
			question: "FIND the SENtence with the incorRECT ARticle Usage.",
			options: [
				"he is an HONest MAN.",
				"i NEED an umBRELla.",
				"she WORKS for an interNATional COMpany.",
				"the SUN RIses in the EAST."
			],
			correctAnswer: 1,
			explanation: "The choice of the indefinite article depends on the sound that follows it. Although \"umBRELla\" begins with the letter 'u', it is pronounced with an initial vowel sound /ʌ/. Therefore, it requires \"an umBRELla.\" \"HONest\" begins with a silent 'h', so it correctly takes \"an.\""
		},
		{
			id: 9,
			question: "WHICH of the FOLlowing is an exAMple of the PASsive VOICE?",
			options: [
				"the CHEF COOKED a WONderful MEAL.",
				"the CHILDren are PLAYing in the PARK.",
				"a WONderful MEAL was COOKED by the CHEF.",
				"does she DRIVE to WORK?"
			],
			correctAnswer: 2,
			explanation: "A passive voice construction places the object of an action as the subject of the sentence. The structure is: Subject + a form of 'to be' + past participle (+ by + agent). Here, \"was COOKED\" is the passive form in the simple past tense. The other sentences are in the active voice."
		},
		{
			id: 10,
			question: "CHOOSE the OPtion that BEST exPRESSes the SAME MEANing: \"it's a PIECE of CAKE.\"",
			options: [
				"it's VERy DIFficult.",
				"it's a deLICious desSERT.",
				"it's VERy EAsy.",
				"it's a TRICKy situAtion."
			],
			correctAnswer: 2,
			explanation: "This is an idiom. \"a PIECE of CAKE\" is a common metaphorical expression meaning something is very easy to do."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#english-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">English Multiple Choice</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				{/* This is the content of English Quiz. */}
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 04, 2025 · by DPSK ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};