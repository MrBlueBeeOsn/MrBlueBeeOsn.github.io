// TiengAnhPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import EnglishPracticeQuiz from '../../../../../components/quiz/EnglishPracticeQuiz';

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

export default function EVSingularPluralNounsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "The shepherd is looking after a large flock of ________.",
			options: [
				"sheeps",
				"sheep",
				"sheepes",
				"sheepses"
			],
			correctAnswer: 1,
			explanation: "\"Sheep\" is a noun with the exact same singular and plural forms. Never add \"-s\" to this word."
		},
		{
			id: 2,
			question: "I need to buy two new ________ for the kitchen.",
			options: [
				"knifes",
				"knifves",
				"knives",
				"knivs"
			],
			correctAnswer: 2,
			explanation: "Nouns ending in \"-fe\" usually change to \"-ves\" in the plural form (knife -> knives)."
		},
		{
			id: 3,
			question: "Many ________ are playing in the park today.",
			options: [
				"childs",
				"children",
				"childrens",
				"childes"
			],
			correctAnswer: 1,
			explanation: "\"Children\" is the irregular plural form of \"child.\" Since it is already plural, do not add \"-s.\""
		},
		{
			id: 4,
			question: "Could you please brush your ________ before going to bed?",
			options: [
				"tooths",
				"teeths",
				"teeth",
				"toothes"
			],
			correctAnswer: 2,
			explanation: "\"Teeth\" is the irregular plural form of \"tooth\" (changing the internal vowels)."
		},
		{
			id: 5,
			question: "There are five ________ working in this office.",
			options: [
				"women",
				"woman",
				"womens",
				"womans"
			],
			correctAnswer: 0,
			explanation: "\"Women\" is the plural form of \"woman.\" Similar to man/men, we change the vowel \"a\" to \"e.\""
		},
		{
			id: 6,
			question: "Scientists are studying the ________ of the local environment.",
			options: [
				"phenomenons",
				"phenomena",
				"phenomenas",
				"phenomenoes"
			],
			correctAnswer: 1,
			explanation: "This is a noun of Greek origin. \"Phenomenon\" is singular and \"phenomena\" is plural."
		},
		{
			id: 7,
			question: "How many ________ did you catch during the fishing trip?",
			options: [
				"fish",
				"fishes",
				"fishs",
				"fishies"
			],
			correctAnswer: 0,
			explanation: "Normally, \"fish\" remains unchanged in the plural form. (Note: \"fishes\" is only used when referring to multiple different species of fish)."
		},
		{
			id: 8,
			question: "The ________ were scattered all over the floor.",
			options: [
				"leafes",
				"leafs",
				"leaves",
				"leaf"
			],
			correctAnswer: 2,
			explanation: "Nouns ending in \"-f\" typically change to \"-ves\" in the plural form (leaf -> leaves)."
		},
		{
			id: 9,
			question: "My grandmother has three ________.",
			options: [
				"geese",
				"gooses",
				"geeses",
				"goosess"
			],
			correctAnswer: 0,
			explanation: "\"Geese\" is the irregular plural form of \"goose.\""
		},
		{
			id: 10,
			question: "Please put the ________ on the top shelf.",
			options: [
				"boxs",
				"box",
				"boxes",
				"boxies"
			],
			correctAnswer: 2,
			explanation: "For nouns ending in \"-x,\" we add the suffix \"-es\" to form the plural."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#singular-and-plural-nouns-quiz"><mark className="highlight-tertiary-padding-4-8">Singular and Plural Nouns Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Singular and Plural Nouns Quiz (EV)</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Singular and Plural Nouns</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>MARCH 29, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};