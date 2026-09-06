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

export default function PrepositionsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "the MEETing is SCHEDuled to START _____ 9:00 a.M. SHARP.",
			options: [
				"in",
				"on",
				"at",
				"by"
			],
			correctAnswer: 2,
			explanation: "We use \"at\" for specific times of the day."
		},
		{
			id: 2,
			question: "i am REALly LOOKing FORward _____ VISiting my GRANDparents this SUMmer.",
			options: [
				"to",
				"for",
				"at",
				"with"
			],
			correctAnswer: 0,
			explanation: "The phrasal verb is \"LOOK FORward to,\" which means to be excited about something in the future."
		},
		{
			id: 3,
			question: "my BROTHer is VERy GOOD _____ PLAYing the guiTAR.",
			options: [
				"in",
				"at",
				"on",
				"with"
			],
			correctAnswer: 1,
			explanation: "We use the adjective phrase \"GOOD at\" + NOUN/V-ing to describe a skill or talent."
		},
		{
			id: 4,
			question: "we arRIVED _____ the AIRport JUST in TIME for our FLIGHT.",
			options: [
				"in",
				"to",
				"at",
				"on"
			],
			correctAnswer: 2,
			explanation: "We usually use \"at\" for specific places or points in a journey, like an airport or a station."
		},
		{
			id: 5,
			question: "she has been LIVing in this CITy _____ FIVE YEARS.",
			options: [
				"since",
				"during",
				"for",
				"from"
			],
			correctAnswer: 2,
			explanation: "\"for\" is used to show a duration or period of time (FIVE YEARS)."
		},
		{
			id: 6,
			question: "is your HOUSE _____ the LEFT or the RIGHT SIDE of the STREET?",
			options: [
				"in",
				"at",
				"on",
				"by"
			],
			correctAnswer: 2,
			explanation: "We use the preposition \"on\" for directions like \"on the LEFT\" or \"on the RIGHT.\""
		},
		{
			id: 7,
			question: "i'm SORry, but i DON'T aGREE _____ your oPINion on this MATter.",
			options: [
				"to",
				"with",
				"for",
				"about"
			],
			correctAnswer: 1,
			explanation: "The verb \"aGREE\" is followed by \"with\" when referring to a person or their iDEas/oPINions."
		},
		{
			id: 8,
			question: "the CAT is HIding _____ the BED because it is SCARED of the VACUum CLEANer.",
			options: [
				"between",
				"among",
				"under",
				"through"
			],
			correctAnswer: 2,
			explanation: "\"under\" indicates a position directly below or covered by something else."
		},
		{
			id: 9,
			question: "PLEASE WAIT for me. i’ll be BACK _____ a FEW MINutes.",
			options: [
				"at",
				"in",
				"on",
				"since"
			],
			correctAnswer: 1,
			explanation: "We use \"in\" to indicate a point in the future or the length of time before something happens."
		},
		{
			id: 10,
			question: "he is reSPONsible _____ MANaging the MARketing dePARTment.",
			options: [
				"with",
				"of",
				"for",
				"about"
			],
			correctAnswer: 2,
			explanation: "The adjective \"reSPONsible\" is followed by the preposition \"for.\""
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#prepositions-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Prepositions Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 29, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};