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

export default function SingularPluralNounsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "the __________ are PLAYing HAPpily in the PARK.",
			options: [
				"CHILD",
				"CHILDS",
				"CHILDren",
				"CHILDrens"
			],
			correctAnswer: 2,
			explanation: "\"CHILDren\" is the irregular plural form of the singular noun \"CHILD.\" Options b and d are grammatically incorrect."
		},
		{
			id: 2,
			question: "I NEED to BUY TWO __________ of BREAD from the BAkery.",
			options: [
				"LOAF",
				"LOAFS",
				"LOAVES",
				"LOAFES"
			],
			correctAnswer: 2,
			explanation: "For most nouns ending in \"-F\" or \"-FE,\" we change the ending to \"-VES\" to form the plural."
		},
		{
			id: 3,
			question: "all the __________ in the BUILDing must be rePLACED.",
			options: [
				"WINdow",
				"WINdows",
				"WINdowes",
				"WINdows's"
			],
			correctAnswer: 1,
			explanation: "\"WINdow\" is a regular noun, so we simply add \"-s\" to make it plural."
		},
		{
			id: 4,
			question: "a PAIR of __________ was SEEN ROAMing near the FORest.",
			options: [
				"WOLF",
				"WOLFS",
				"WOLVES",
				"WOLVEses"
			],
			correctAnswer: 2,
			explanation: "Similar to \"LOAF,\" the noun \"WOLF\" ends in \"-F,\" so the plural form is \"WOLVES.\""
		},
		{
			id: 5,
			question: "HOW many __________ did you CATCH during the FISHing TRIP?",
			options: [
				"FISH",
				"FISHS",
				"FISHes",
				"FISHies"
			],
			correctAnswer: 0,
			explanation: "\"FISH\" is a noun that remains the same in both singular and plural forms when referring to the same species."
		},
		{
			id: 6,
			question: "the DENtist TOLD him to BRUSH his __________ TWICE a DAY.",
			options: [
				"TOOTH",
				"TOOTHS",
				"TEETH",
				"TEETHS"
			],
			correctAnswer: 2,
			explanation: "\"TEETH\" is an irregular plural noun. The singular form is \"TOOTH.\""
		},
		{
			id: 7,
			question: "several __________ were GRAzing in the GREEN FIELD.",
			options: [
				"SHEEP",
				"SHEEPS",
				"SHEEPes",
				"SHEEPses"
			],
			correctAnswer: 0,
			explanation: "Like \"FISH,\" the word \"SHEEP\" has the same form for both singular and plural."
		},
		{
			id: 8,
			question: "the CHEF USED a SHARP __________ to CUT the VEGEtables.",
			options: [
				"KNIFE",
				"KNIFES",
				"KNIVES",
				"KNIFEses"
			],
			correctAnswer: 0,
			explanation: "The sentence uses the article \"a,\" which indicates a singular noun is required. \"KNIFE\" is the singular form."
		},
		{
			id: 9,
			question: "these __________ are very COMFORtable for RUNning.",
			options: [
				"SHOE",
				"SHOES",
				"SHOESS",
				"SHOESE"
			],
			correctAnswer: 1,
			explanation: "The demonstrative adjective \"these\" indicates a plural noun. \"SHOES\" is the correct plural of \"SHOE.\""
		},
		{
			id: 10,
			question: "many __________ STRUGgle with FINDing a WORK-LIFE BALance.",
			options: [
				"PERson",
				"PERsons",
				"PEOple",
				"PEOples"
			],
			correctAnswer: 2,
			explanation: "While \"PERsons\" is sometimes used in legal contexts, \"PEOple\" is the standard irregular plural form of \"PERson\" in general English."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#singular-and-plural-nouns-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Singular and Plural Nouns</h1>
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