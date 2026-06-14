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
			question: "The girl [sitting by the window] is my cousin.",
			options: [
				"[Verb Phrase] acting as a [Noun Phrase]",
				"[Verb Phrase] acting as a [Adjective Phrase]",
				"[Verb Clause] acting as a [Adjective Clause]",
				"[Verb Base] acting as a [Adjective Base]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: Cấu trúc [sitting by the window] là một Động Cụm [Verb Phrase] bắt đầu bằng một hình thái đuôi -ing kèm các thành phần bổ khuyết. \n Chức năng: Đứng sau và bổ nghĩa cho nhóm thành phần chỉ người \"The girl\", đóng vai trò như một Tính Cụm [Adjective Phrase]."
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