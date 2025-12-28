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

export default function GerundsandInfinitivesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Gerunds and Infinitives cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "I really enjoy ________ to music while I am studying.",
			options: [
				"listen",
				"to listen",
				"listening",
				"listened"
			],
			correctAnswer: 2,
			explanation: "The verb enjoy is followed by a gerund (V-ing)."
		},
		{
			id: 2,
			question: "My parents decided ________ a new car next month.",
			options: [
				"buy",
				"to buy",
				"buying",
				"bought"
			],
			correctAnswer: 1,
			explanation: "The verb decide is followed by a to-infinitive (to-V)."
		},
		{
			id: 3,
			question: "I’ll never forget ________ the Eiffel Tower for the first time.",
			options: [
				"see",
				"to see",
				"seeing",
				"seen"
			],
			correctAnswer: 2,
			explanation: "Forget + V-ing is used to talk about a memory of a past event."
		},
		{
			id: 4,
			question: "Please remember ________ the door before you leave the house.",
			options: [
				"lock",
				"to lock",
				"locking",
				"locked"
			],
			correctAnswer: 1,
			explanation: "Remember + to-V is used when you remember to do a task or duty."
		},
		{
			id: 5,
			question: "She avoided ________ him about her plans because she wanted it to be a surprise.",
			options: [
				"tell",
				"to tell",
				"telling",
				"told"
			],
			correctAnswer: 2,
			explanation: "The verb avoid is followed by a gerund (V-ing)."
		},
		{
			id: 6,
			question: "He managed ________ the project on time despite the difficulties.",
			options: [
				"finish",
				"to finish",
				"finishing",
				"finished"
			],
			correctAnswer: 1,
			explanation: "The verb manage is followed by a to-infinitive (to-V)."
		},
		{
			id: 7,
			question: "I don’t mind ________ for a few more minutes.",
			options: [
				"wait",
				"to wait",
				"waiting",
				"waited"
			],
			correctAnswer: 2,
			explanation: "The phrase don't mind is followed by a gerund (V-ing)."
		},
		{
			id: 8,
			question: "They suggested ________ a taxi to the airport instead of taking the bus.",
			options: [
				"take",
				"to take",
				"taking",
				"took"
			],
			correctAnswer: 2,
			explanation: "The verb suggest is followed by a gerund (V-ing)."
		},
		{
			id: 9,
			question: "It's no use ________ about things you cannot change.",
			options: [
				"worry",
				"to worry",
				"worrying",
				"worried"
			],
			correctAnswer: 2,
			explanation: "The expression \"It's no use\" is always followed by a gerund (V-ing)."
		},
		{
			id: 10,
			question: "We stopped ________ some gas because the tank was almost empty.",
			options: [
				"get",
				"to get",
				"getting",
				"got"
			],
			correctAnswer: 1,
			explanation: "Stop + to-V indicates that you stop an activity in order to do something else."
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
						<span>December 28, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};