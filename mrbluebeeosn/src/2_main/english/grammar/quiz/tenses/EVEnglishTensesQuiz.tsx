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

export default function EVEnglishTensesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tenses cơ bản
	const questions: Question[] = [
				{
			id: 1,
			question: "She _______ to the gym three times a week.",
			options: [
				"is going",
				"goes",
				"went",
				"has gone"
			],
			correctAnswer: 1,
			explanation: "This is a repeated action (habit) indicated by the frequency phrase \"three times a week\". We use the ⏳ Simple Present tense."
		},
		{
			id: 2,
			question: "When the phone rang, I _______ a shower.",
			options: [
				"took",
				"was taking",
				"take",
				"have taken"
			],
			correctAnswer: 1,
			explanation: "An ongoing action (taking a shower) was interrupted by a shorter past action (the phone rang). We use the ⏱️ Past Continuous tense for the ongoing action."
		},
		{
			id: 3,
			question: "By the time we arrive at the airport, the plane _______.",
			options: [
				"leaves",
				"will leave",
				"is leaving",
				"will have left"
			],
			correctAnswer: 3,
			explanation: "The action of the plane leaving will be completed before a specific time or another action in the future (when we arrive). We use the 📏 Future Perfect tense."
		},
		{
			id: 4,
			question: "They _______ here since 2010.",
			options: [
				"live",
				"lived",
				"are living",
				"have lived"
			],
			correctAnswer: 3,
			explanation: "The action started in the past (2010) and continues into the present (indicated by \"since\"). We use the 📏 Present Perfect tense."
		},
		{
			id: 5,
			question: "Look! The sun _______ so brightly.",
			options: [
				"shines",
				"is shining",
				"shone",
				"has shone"
			],
			correctAnswer: 1,
			explanation: "The action is happening right at the moment of speaking, often signaled by words like \"Look!\" or \"Listen!\". We use the ⏱️ Present Continuous tense."
		},
		{
			id: 6,
			question: "Before he went to bed, he _______ his homework.",
			options: [
				"does",
				"did",
				"had done",
				"was doing"
			],
			correctAnswer: 2,
			explanation: "Finishing homework happened and was completed before another past action (going to bed). We use the 📏 Past Perfect tense for the earlier action."
		},
		{
			id: 7,
			question: "This time tomorrow, I _______ on a beach in Hawaii.",
			options: [
				"will lie",
				"am lying",
				"will be lying",
				"lie"
			],
			correctAnswer: 2,
			explanation: "The action will be in progress at a specific time in the future (\"this time tomorrow\"). We use the ⏱️ Future Continuous tense."
		},
		{
			id: 8,
			question: "I _______ my key, so I can't open the door.",
			options: [
				"lose",
				"lost",
				"have lost",
				"had lost"
			],
			correctAnswer: 2,
			explanation: "Losing the key happened in the past, but it has a clear result or impact on the present (being unable to open the door). We use the 📏 Present Perfect tense."
		},
		{
			id: 9,
			question: "How long _______ the piano before you started taking singing lessons?",
			options: [
				"do you play",
				"did you play",
				"were you playing",
				"had you been playing"
			],
			correctAnswer: 3,
			explanation: "Playing the piano was a continuous action lasting up until a specific point in the past (before starting singing lessons). We use the 🏃‍♂️ Past Perfect Continuous tense."
		},
		{
			id: 10,
			question: "If the weather is good, we _______ for a picnic next weekend.",
			options: [
				"go",
				"went",
				"will go",
				"are going"
			],
			correctAnswer: 2,
			explanation: "This is a First Conditional sentence describing a likely future result (\"next weekend\") based on a real condition. We use the ⏳ Simple Future tense in the main clause."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/grammar#english-tenses-quiz"><mark className="highlight-tertiary-padding-4-8">English Tenses Quiz</mark></HashLink></h4>
					
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">English Tenses Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English Tenses</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>deCEMber 11, 2025 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};