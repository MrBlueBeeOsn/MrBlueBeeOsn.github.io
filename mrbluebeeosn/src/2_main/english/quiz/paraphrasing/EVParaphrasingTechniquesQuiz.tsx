// TiengAnhPracticeQuizDPDK.tsx

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

export default function EVParaphrasingTechniquesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "Which of the following is the most effective way to begin paraphrasing a sentence?",
			options: [
				"Changing only the adjectives and adverbs.",
				"Using a thesaurus to replace every single word.",
				"Understanding the full meaning and then rewriting it in your own words.",
				"Rearranging the word order without changing any vocabulary."
			],
			correctAnswer: 2,
			explanation: "Paraphrasing is not just about swapping words; the most important step is to fully understand the original meaning and express it using your own structure and vocabulary to avoid plagiarism."
		},
		{
			id: 2,
			question: "Changing \"The committee postponed the meeting\" to \"The meeting was postponed by the committee\" is an example of which technique?",
			options: [
				"Using synonyms",
				"Changing the voice (active to passive)",
				"Changing the part of speech",
				"Combining sentences"
			],
			correctAnswer: 1,
			explanation: "This technique converts a sentence from the active voice to the passive voice."
		},
		{
			id: 3,
			question: "If you change the word \"accurate\" to \"precise\" in a sentence, which technique are you using?",
			options: [
				"Changing the word form",
				"Changing the sentence structure",
				"Using synonyms",
				"Reducing clauses"
			],
			correctAnswer: 2,
			explanation: "\"Accurate\" and \"precise\" are synonyms, meaning they share a very similar definition regarding exactness."
		},
		{
			id: 4,
			question: "Which of these is a correct paraphrase of: \"The number of tourists increased significantly last year.\"?",
			options: [
				"There was a significant growth in the quantity of visitors last year.",
				"The number of tourists increased significantly a year ago.",
				"Last year, the number of tourists increased significantly.",
				"Significantly, the number of tourists increased last year."
			],
			correctAnswer: 0,
			explanation: "This option combines vocabulary changes (tourists -> visitors, increased -> growth) and a change in part of speech (the verb \"increased\" becomes the noun \"growth\")."
		},
		{
			id: 5,
			question: "Changing \"He decided to leave because he was tired\" to \"Because of his fatigue, he decided to leave\" involves:",
			options: [
				"Using antonyms",
				"Changing the part of speech (adjective to noun)",
				"Changing a statement to a question",
				"Only changing the word order"
			],
			correctAnswer: 1,
			explanation: "The adjective \"tired\" is changed into the noun \"fatigue\" to alter the grammatical structure of the sentence."
		},
		{
			id: 6,
			question: "What should you do if a sentence contains a technical term or a proper noun (e.g., \"DNA\", \"the Great Wall\")?",
			options: [
				"Find a synonym for it at all costs.",
				"Keep it as it is.",
				"Change the spelling to make it unique.",
				"Delete it from the sentence."
			],
			correctAnswer: 1,
			explanation: "Technical terms, proper nouns, or specific dates should generally remain unchanged when paraphrasing to maintain factual accuracy."
		},
		{
			id: 7,
			question: "When paraphrasing, \"Although it was raining, they went hiking\" can be rewritten:",
			options: [
				"It was raining, so they went hiking.",
				"They went hiking despite the rain.",
				"They didn't go hiking because of the rain.",
				"Even though they went hiking, it rained."
			],
			correctAnswer: 1,
			explanation: "Using the structure \"despite + noun\" to replace \"although + clause\" is an effective grammatical restructuring technique."
		},
		{
			id: 8,
			question: "What is a \"patchwork paraphrase\"?",
			options: [
				"A high-quality paraphrase using diverse vocabulary.",
				"A paraphrase that combines ideas from multiple sources perfectly.",
				"A poor paraphrase that only changes a few words and keeps the original structure.",
				"A summary of a very long paragraph."
			],
			correctAnswer: 2,
			explanation: "A \"patchwork paraphrase\" is a form of unintentional plagiarism where the writer only swaps out a few isolated words while keeping the original sentence structure."
		},
		{
			id: 9,
			question: "Identify the technique used: \"The car was expensive\" -> \"The automobile was not cheap.\"",
			options: [
				"Changing word order",
				"Using synonyms and antonyms (with negation)",
				"Changing a clause to a phrase",
				"Changing from passive to active"
			],
			correctAnswer: 1,
			explanation: "The writer replaced \"car\" with \"automobile\" (a synonym) and \"expensive\" with \"not cheap\" (a negated antonym)."
		},
		{
			id: 10,
			question: "Which of the following is not a goal of paraphrasing?",
			options: [
				"To avoid plagiarism.",
				"To show that you understand the source material.",
				"To make the text much longer than the original.",
				"To improve the flow of your writing."
			],
			correctAnswer: 2,
			explanation: "The goal of paraphrasing is to restate ideas clearly and integrate them into your writing, not to make the text unnecessarily longer. A good paraphrase is usually similar in length to the original."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#paraphrasing-techniques-quiz"><mark className="highlight-tertiary-padding-4-8">Paraphrasing Techniques Quiz</mark></HashLink></h4>
					
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Paraphrasing Techniques Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Paraphrasing Techniques</p>
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