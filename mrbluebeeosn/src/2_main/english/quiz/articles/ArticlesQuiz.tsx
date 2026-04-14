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

export default function ArticlesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "He is ___ honest man who always tells the truth.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 1,
			explanation: "Although \"honest\" starts with the consonant letter 'h', the 'h' is silent. The word begins with a vowel sound /ɒ/, so we use \"an.\""
		},
		{
			id: 2,
			question: "I saw ___ amazing movie last night at the cinema.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 1,
			explanation: "\"Amazing\" starts with a vowel sound /ə/, so the indefinite article \"an\" is required for a non-specific singular noun."
		},
		{
			id: 3,
			question: "___ sun rises in the east and sets in the west.",
			options: [
				"A",
				"An",
				"The",
				"(no article)"
			],
			correctAnswer: 2,
			explanation: "We use \"the\" for unique celestial bodies and things that are one of a kind."
		},
		{
			id: 4,
			question: "My sister is studying to become ___ university professor.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 0,
			explanation: "\"University\" starts with the consonant sound /j/ (yoo-ni-ver-si-ty). Therefore, we use \"a\" instead of \"an.\""
		},
		{
			id: 5,
			question: "We are going to have ___ dinner at that new Italian restaurant.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 3,
			explanation: "General names of meals (breakfast, lunch, dinner) usually do not take an article unless they are being described specifically."
		},
		{
			id: 6,
			question: "___ Nile is the longest river in the world.",
			options: [
				"A",
				"An",
				"The",
				"(no article)"
			],
			correctAnswer: 2,
			explanation: "We use the definite article \"the\" before the names of rivers."
		},
		{
			id: 7,
			question: "I need to buy ___ new pair of shoes for the wedding.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 0,
			explanation: "We use \"a\" for a singular countable noun mentioned for the first time that begins with a consonant sound."
		},
		{
			id: 8,
			question: "Mount Everest is ___ highest mountain in the world.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 2,
			explanation: "We always use \"the\" before superlative adjectives like \"highest,\" \"tallest,\" or \"best.\""
		},
		{
			id: 9,
			question: "Do you have ___ umbrella I could borrow? It's starting to rain.",
			options: [
				"a",
				"an",
				"the",
				"(no article)"
			],
			correctAnswer: 1,
			explanation: "\"Umbrella\" starts with a vowel sound /ʌ/, so we use the indefinite article \"an.\""
		},
		{
			id: 10,
			question: "___ happiness is more important than money.",
			options: [
				"A",
				"An",
				"The",
				"(no article)"
			],
			correctAnswer: 3,
			explanation: "Abstract nouns (like happiness, love, or time) typically do not use an article when used in a general sense."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#articles-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Articles Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>April 15, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};