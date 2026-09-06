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

export default function SAndEsInNounsVerbs(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "WHICH of the FOLlowing NOUNS FORMS its PLURal by ADding -es?",
			options: [
				"PHOto",
				"BENCH",
				"piANo",
				"RAdio"
			],
			correctAnswer: 1,
			explanation: "Nouns ending in -CH, -SH, -S, -X, or -Z require -es to become plural (e.g., BENCHes)."
		},
		{
			id: 2,
			question: "CHOOSE the corRECT VERB FORM: my BROTHer ALways _______ his TEETH after BREAKfast.",
			options: [
				"BRUSHS",
				"BRUSH",
				"BRUSHes",
				"BRUSHing"
			],
			correctAnswer: 2,
			explanation: "For third-person singular subjects (he, she, it), verbs ending in -SH take -es."
		},
		{
			id: 3,
			question: "iDENtify the corRECTly SPELLED PLURal NOUN:",
			options: [
				"toMAtoe",
				"CITys",
				"PUPpys",
				"poTAtoes"
			],
			correctAnswer: 3,
			explanation: "Most nouns ending in a consonant + o take -es. Photo and piano are exceptions that only take -s."
		},
		{
			id: 4,
			question: "the techNICian _______ the BROken SCREEN CAREfully.",
			options: [
				"FIXS",
				"FIXes",
				"FIXies",
				"FIX"
			],
			correctAnswer: 1,
			explanation: "Verbs ending in -x take -es in the third-person singular present tense."
		},
		{
			id: 5,
			question: "WHICH WORD is the corRECT PLURal of \"BUTterfly\"?",
			options: [
				"BUTterflys",
				"BUTterflies",
				"BUTterflyes",
				"BUTterflyies"
			],
			correctAnswer: 1,
			explanation: "For nouns ending in a consonant + y, you change the y to i and add -es."
		},
		{
			id: 6,
			question: "seLECT the SENtence with the corRECT SUBject-VERB aGREEment:",
			options: [
				"the CAT CHASE the MOUSE.",
				"the CAT CHAses the MOUSE.",
				"the CAT CHASses the MOUSE.",
				"the CAT CHAsees the MOUSE."
			],
			correctAnswer: 1,
			explanation: "The subject the CAT is singular. The verb chase already ends in -e, so you simply add -S."
		},
		{
			id: 7,
			question: "CHOOSE the corRECT PLURal FORM of \"BUS\":",
			options: [
				"BUSS",
				"BUSes",
				"BUSses",
				"BUSies"
			],
			correctAnswer: 1,
			explanation: "Nouns ending in -S add -es to form the plural."
		},
		{
			id: 8,
			question: "comPLETE the SENtence: she _______ to the GYM every MORNing.",
			options: [
				"GOS",
				"GOES",
				"GOSE",
				"GO"
			],
			correctAnswer: 1,
			explanation: "The verbs go and do always add -es for third-person singular subjects (GOES/DOES)."
		},
		{
			id: 9,
			question: "WHICH of these NOUNS ENDS in -es in its PLURal FORM?",
			options: [
				"beLIEF",
				"ROOF",
				"FOX",
				"CHIEF"
			],
			correctAnswer: 2,
			explanation: "Nouns ending in -x form their plural by adding -es (FOXes)."
		},
		{
			id: 10,
			question: "MARK _______ his HOMEwork before DINner.",
			options: [
				"FINishs",
				"FINish",
				"FINishes",
				"FINishing"
			],
			correctAnswer: 2,
			explanation: "Verbs ending in -sh require -es when used with a singular subject like MARK."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#s-and-es-in-nouns-and-verbs-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">-s and -es in Nouns and Verbs</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>April 05, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};