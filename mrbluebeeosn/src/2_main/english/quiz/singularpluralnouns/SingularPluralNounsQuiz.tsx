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
			question: "The __________ are playing happily in the park.",
			options: [
				"child",
				"childs",
				"children",
				"childrens"
			],
			correctAnswer: 2,
			explanation: "\"Children\" is the irregular plural form of the singular noun \"child.\" Options b and d are grammatically incorrect."
		},
		{
			id: 2,
			question: "I need to buy two __________ of bread from the bakery.",
			options: [
				"loaf",
				"loafs",
				"loaves",
				"loafes"
			],
			correctAnswer: 2,
			explanation: "For most nouns ending in \"-f\" or \"-fe,\" we change the ending to \"-ves\" to form the plural."
		},
		{
			id: 3,
			question: "All the __________ in the building must be replaced.",
			options: [
				"window",
				"windows",
				"windowes",
				"windows's"
			],
			correctAnswer: 1,
			explanation: "\"Window\" is a regular noun, so we simply add \"-s\" to make it plural."
		},
		{
			id: 4,
			question: "A pack of __________ was seen roaming near the forest.",
			options: [
				"wolf",
				"wolfs",
				"wolves",
				"wolveses"
			],
			correctAnswer: 2,
			explanation: "Similar to \"loaf,\" the noun \"wolf\" ends in \"-f,\" so the plural form is \"wolves.\""
		},
		{
			id: 5,
			question: "How many __________ did you catch during the fishing trip?",
			options: [
				"fish",
				"fishs",
				"fishes",
				"fishies"
			],
			correctAnswer: 0,
			explanation: "\"Fish\" is a noun that remains the same in both singular and plural forms when referring to the same species."
		},
		{
			id: 6,
			question: "The dentist told him to brush his __________ twice a day.",
			options: [
				"tooth",
				"tooths",
				"teeth",
				"teeths"
			],
			correctAnswer: 2,
			explanation: "\"Teeth\" is an irregular plural noun. The singular form is \"tooth.\""
		},
		{
			id: 7,
			question: "Several __________ were grazing in the green field.",
			options: [
				"sheep",
				"sheeps",
				"sheepes",
				"sheepses"
			],
			correctAnswer: 0,
			explanation: "Like \"fish,\" the word \"sheep\" has the same form for both singular and plural."
		},
		{
			id: 8,
			question: "The chef used a sharp __________ to cut the vegetables.",
			options: [
				"knife",
				"knifes",
				"knives",
				"knifeses"
			],
			correctAnswer: 0,
			explanation: "The sentence uses the article \"a,\" which indicates a singular noun is required. \"Knife\" is the singular form."
		},
		{
			id: 9,
			question: "These __________ are very comfortable for running.",
			options: [
				"shoe",
				"shoes",
				"shoess",
				"shoese"
			],
			correctAnswer: 1,
			explanation: "The demonstrative adjective \"these\" indicates a plural noun. \"Shoes\" is the correct plural of \"shoe.\""
		},
		{
			id: 10,
			question: "Many __________ struggle with finding a work-life balance.",
			options: [
				"person",
				"persons",
				"people",
				"peoples"
			],
			correctAnswer: 2,
			explanation: "While \"persons\" is sometimes used in legal contexts, \"people\" is the standard irregular plural form of \"person\" in general English."
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
						<span>March 29, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};