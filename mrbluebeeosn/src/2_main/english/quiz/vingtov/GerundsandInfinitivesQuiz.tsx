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

export default function GerundsAndInfinitivesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Gerunds and Infinitives cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "i REally enJOY ________ to MUsic while i am STUDying.",
			options: [
				"LISten",
				"to LISten",
				"LIStening",
				"LIStened"
			],
			correctAnswer: 2,
			explanation: "The verb enJOY is followed by a gerund (V-ing)."
		},
		{
			id: 2,
			question: "my PARents deCIded ________ a NEW CAR NEXT MONTH.",
			options: [
				"BUY",
				"to BUY",
				"BUYing",
				"BOUGHT"
			],
			correctAnswer: 1,
			explanation: "The verb DECIDE is followed by a to-infinitive (to-V)."
		},
		{
			id: 3,
			question: "i’ll NEVer forGET ________ the EIffel TOWer for the FIRST TIME.",
			options: [
				"SEE",
				"to SEE",
				"SEEing",
				"SEEN"
			],
			correctAnswer: 2,
			explanation: "forGET + V-ing is used to talk about a memory of a past event."
		},
		{
			id: 4,
			question: "PLEASE reMEMber ________ the DOOR before you LEAVE the HOUSE.",
			options: [
				"LOCK",
				"to LOCK",
				"LOCKing",
				"LOCKED"
			],
			correctAnswer: 1,
			explanation: "reMEMber + to-V is used when you remember to do a task or duty."
		},
		{
			id: 5,
			question: "she aVOIDed ________ TELLing him about her PLANS because she WANTed it to be a surPRISE.",
			options: [
				"TELL",
				"to TELL",
				"TELLing",
				"TOLD"
			],
			correctAnswer: 2,
			explanation: "The verb aVOID is followed by a gerund (V-ing)."
		},
		{
			id: 6,
			question: "he MANaged ________ the PROJect on TIME despite the DIFficulties.",
			options: [
				"FINish",
				"to FINish",
				"FINishing",
				"FINished"
			],
			correctAnswer: 1,
			explanation: "The verb MANage is followed by a to-infinitive (to-V)."
		},
		{
			id: 7,
			question: "i don’t MIND ________ for a FEW MORE MINutes.",
			options: [
				"WAIT",
				"to WAIT",
				"WAITing",
				"WAITed"
			],
			correctAnswer: 2,
			explanation: "The phrase don't MIND is followed by a gerund (V-ing)."
		},
		{
			id: 8,
			question: "they sugGESTed ________ a TAXi to the AIRport inSTEAD of TAking the BUS.",
			options: [
				"TAKE",
				"to TAKE",
				"TAking",
				"TOOK"
			],
			correctAnswer: 2,
			explanation: "The verb sugGEST is followed by a gerund (V-ing)."
		},
		{
			id: 9,
			question: "it's NO USE ________ about THINGS you CANnot CHANGE.",
			options: [
				"WORry",
				"to WORry",
				"WORrying",
				"WORried"
			],
			correctAnswer: 2,
			explanation: "The expression \"it's NO USE\" is always followed by a gerund (V-ing)."
		},
		{
			id: 10,
			question: "we STOPPED ________ some GAS because the TANK was ALmost EMPty.",
			options: [
				"GET",
				"to GET",
				"GETting",
				"GOT"
			],
			correctAnswer: 1,
			explanation: "STOP + to-V indicates that you stop an activity in order to do something else."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#ving-tov-basic-practice"><mark className="highlight-tertiary-padding-4-8">Gerunds and Infinitives</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center"></h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Gerunds and Infinitives</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 28, 2025 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};