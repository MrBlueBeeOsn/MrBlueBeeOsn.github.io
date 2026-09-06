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

export default function PhrasalVerbsQuestions(): React.JSX.Element {
	// Danh sách câu hỏi về Phrasal Verbs cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "the MANager deCIded to call OFF the MEETing because the MAIN SPEAKer was ILL. WHAT does \"call OFF\" MEAN?",
			options: [
				"postPONE",
				"CANcel",
				"START",
				"atTEND"
			],
			correctAnswer: 1,
			explanation: "The phrasal verb \"call OFF\" means to decide that a planned event or agreement will not happen (SYNonym: CANcel)."
		},
		{
			id: 2,
			question: "she takes AFter her GRANDmother; they are both VERy arTIStic. WHAT does \"takes AFter\" MEAN?",
			options: [
				"looks UP to",
				"FOLlows",
				"reSEMbles in apPEARance or CHARacter",
				"takes CARE of"
			],
			correctAnswer: 2,
			explanation: "To \"take AFter\" someone means to look or behave like an older relative, often a parent or grandparent."
		},
		{
			id: 3,
			question: "DON'T WORry, you will get Over the FLU in a COUPle of DAYS. WHAT does \"get Over\" MEAN?",
			options: [
				"aVOID",
				"reCOVer from",
				"CATCH",
				"SEARCH for"
			],
			correctAnswer: 1,
			explanation: "To \"get Over\" SOMEthing , especially an illness or a difficult experience, means to recover from it."
		},
		{
			id: 4,
			question: "i was WALKing in the PARK and unexPECTedly ran INto my OLD PRImary SCHOOL TEACHer. WHAT does \"run INto\" MEAN?",
			options: [
				"colLIDE with",
				"MEET SOMEthing unexPECTedly",
				"GET in TROUBle with",
				"CHASE after"
			],
			correctAnswer: 1,
			explanation: "The phrasal verb \"run INto\" means to meet someone by chance without having planned to."
		},
		{
			id: 5,
			question: "when i ASKED about his FAMILy, he QUICKly brought UP a NEW TOPic. WHAT does \"bring UP\" MEAN HERE?",
			options: [
				"to RAISE a CHILD",
				"to MENtion or introDUCE a SUBject",
				"to VOMit",
				"to MOVE SOMEthing UPwards"
			],
			correctAnswer: 1,
			explanation: "To \"bring UP\" a subject means to start discussing it or mention it in a conversation."
		},
		{
			id: 6,
			question: "the maCHINE broke DOWN RIGHT in the MIDdle of our proDUCtion CYcle. WHAT does \"broke DOWN\" MEAN?",
			options: [
				"STOPPED WORKing because of a FAULT",
				"FELL on the FLOOR",
				"STARTed WORKing efFECtively",
				"diVIded INto SMALler PARTS"
			],
			correctAnswer: 0,
			explanation: "When a machine or vehicle \"breaks DOWN,\" it stops operating or functioning because of a mechanical failure."
		},
		{
			id: 7,
			question: "could you hold ON for a MOment? i NEED to CHECK my CALendar. WHAT does \"hold ON\" MEAN?",
			options: [
				"GRAB SOMEthing TIGHTly",
				"WAIT for a SHORT TIME",
				"conTINue with an acTIVity",
				"STAY on the LINE"
			],
			correctAnswer: 1,
			explanation: "The phrasal verb \"hold ON\" is an informal way of asking someone to wait, often used when talking on the phone."
		},
		{
			id: 8,
			question: "i came aCROSS a FAScinating ARticle about ANcient HISTORy while BROWsing the INternet. WHAT does \"come aCROSS\" MEAN?",
			options: [
				"to be underSTOOD",
				"to CROSS a BOUNdary",
				"to FIND or MEET by CHANCE",
				"to SEEM or apPEAR"
			],
			correctAnswer: 2,
			explanation: "To \"come aCROSS\" SOMEthing  or SOMEone means to find or meet them by accident."
		},
		{
			id: 9,
			question: "all STUdents must hand IN their ESsays before FRIday at FIVE p.M. WHAT does \"hand IN\" MEAN?",
			options: [
				"subMIT",
				"disTRIBute",
				"colLECT",
				"WRITE"
			],
			correctAnswer: 0,
			explanation: "To \"hand IN\" an assignment or piece of work means to give it to a person in authority (like a TEACHer or MANager) for assessment or approval (SYNonym: subMIT)."
		},
		{
			id: 10,
			question: "they are PLANning to set UP a NEW BRANCH OFfice in LONdon NEXT YEAR. WHAT does \"set UP\" MEAN?",
			options: [
				"to DECorate",
				"to TRICK someone",
				"to esTABlish or ORganize SOMEthing ",
				"to stand UP"
			],
			correctAnswer: 2,
			explanation: "To \"set UP\" a business, system, or organization means to start or establish it."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#phrasal-verbs-basic-practice"><mark className="highlight-tertiary-padding-4-8">Phrasal Verbs</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Phrasal Verbs Questions</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Phrasal Verbs concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 10, 2025 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};