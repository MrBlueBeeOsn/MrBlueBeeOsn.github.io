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

export default function EVMatrixQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "The girl [sitting by the window] is my cousin. \n\n Cô gái [đang ngồi cạnh cửa sổ] là em họ của tôi. \n\n",
			options: [
				"[Verb Phrase] functioning as a [Noun Phrase]",
				"[Verb Phrase] functioning as an [Adjective Phrase]",
				"[Verb Clause] functioning as an [Adjective Clause]",
				"[Verb Base] functioning as an [Adjective Base]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [sitting by the window] - Động Cụm [Verb Phrase] bắt đầu bằng đuôi -ing kèm các thành phần bổ khuyết để tạo thành một cụm hành vi chưa chia thời gian. \n\n Chức năng: [sitting by the window] - Tính Cụm [Adjective Phrase] đứng ngay sau để bổ nghĩa trực tiếp và định danh cho nhóm thành phần chỉ người \"The girl\""
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-matrix-quiz"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Hình thái × Chức năng Matrix</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>June 14, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};