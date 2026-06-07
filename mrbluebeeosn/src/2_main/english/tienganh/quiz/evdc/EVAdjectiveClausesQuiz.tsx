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

export default function EVAdjectiveClausesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "The woman _______ lives next door is a famous doctor.",
			options: [
				"whom",
				"who",
				"which",
				"whose"
			],
			correctAnswer: 1,
			explanation: "Đại cơ quan hệ thay thế cho danh từ chỉ người \"The woman\" và đóng vai trò làm chủ ngữ trong mệnh đề quan hệ (đứng trước động từ \"lives\")."
		},
		{
			id: 2,
			question: "The book _______ I borrowed from the library yesterday is very interesting.",
			options: [
				"who",
				"whom",
				"which",
				"whose"
			],
			correctAnswer: 2,
			explanation: "Đại cơ quan hệ thay thế cho danh từ chỉ vật \"The book\" và đóng vai trò làm tân ngữ trong mệnh đề quan hệ."
		},
		{
			id: 3,
			question: "Do you know the boy _______ bicycle was stolen last night?",
			options: [
				"who",
				"whose",
				"whom",
				"that"
			],
			correctAnswer: 1,
			explanation: "Dùng để chỉ sở hữu cho danh từ đứng trước (\"the boy's bicycle\" → \"the boy whose bicycle\")."
		},
		{
			id: 4,
			question: "The restaurant _______ we had dinner last week was fantastic.",
			options: [
				"where",
				"which",
				"that",
				"when"
			],
			correctAnswer: 0,
			explanation: "Trạng cơ quan hệ chỉ nơi chốn, thay thế cho \"The restaurant\" (tương đương với cụm \"at which\")."
		},
		{
			id: 5,
			question: "I will never forget the day _______ I first met my best friend.",
			options: [
				"which",
				"where",
				"when",
				"who"
			],
			correctAnswer: 2,
			explanation: "Trạng cơ quan hệ chỉ thời gian, thay thế cho danh từ \"the day\"."
		},
		{
			id: 6,
			question: "The man _______ you met at the party is my uncle.",
			options: [
				"which",
				"whose",
				"whom",
				"columns"
			],
			correctAnswer: 2,
			explanation: "Đại cơ quan hệ thay thế cho danh từ chỉ người \"The man\" và đóng vai trò làm tân ngữ trong mệnh đề quan hệ (sau nó là một đại từ/chủ ngữ \"you\")."
		},
		{
			id: 7,
			question: "The reason _______ he failed the exam was his laziness.",
			options: [
				"why",
				"which",
				"where",
				"when"
			],
			correctAnswer: 0,
			explanation: "Trạng cơ quan hệ chỉ lý do, thường đi kèm sau cụm từ danh từ \"The reason\"."
		},
		{
			id: 8,
			question: "The building, _______ was built in 1920, is being renovated.",
			options: [
				"that",
				"which",
				"who",
				"where"
			],
			correctAnswer: 1,
			explanation: "Đây là mệnh đề quan hệ không xác định (có dấu phẩy), bổ nghĩa cho vật \"The building\". Quy tắc ngữ pháp không dùng \"that\" sau dấu phẩy."
		},
		{
			id: 9,
			question: "The students _______ completed the assignment on time received extra marks.",
			options: [
				"whom",
				"which",
				"who",
				"whose"
			],
			correctAnswer: 2,
			explanation: "Thay thế cho danh từ số nhiều chỉ người \"The students\" và làm chủ ngữ cho động từ \"completed\"."
		},
		{
			id: 10,
			question: "The laptop _______ she is using belongs to her brother.",
			options: [
				"whose",
				"who",
				"whom",
				"that"
			],
			correctAnswer: 3,
			explanation: "\"that\" được dùng để thay thế cho danh từ chỉ vật \"The laptop\" trong mệnh đề quan hệ xác định (ở đây có thể dùng \"which\" nhưng trong các phương án chỉ có \"that\" là chính xác)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-dc-quiz"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm DC - Adjective</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>May 25, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};