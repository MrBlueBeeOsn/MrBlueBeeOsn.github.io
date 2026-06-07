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

export default function TracNghiemGerundsVaInfinitives(): React.JSX.Element {
	// Danh sách câu hỏi về Gerunds (V-ing) và Infinitives (To V/V nguyên thể) cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "I am looking forward to _______ my old friends at the party tonight.",
			options: [
				"meet",
				"meeting",
				"met",
				"to meet"
			],
			correctAnswer: 1,
			explanation: "Cấu trúc \"Look forward to\" là một cụm từ cố định mang ý nghĩa mong đợi một điều gì đó với sự hân hoan. Trong cấu trúc này, từ \"to\" đóng vai trò là một giới cơ chứ không phải là dấu hiệu của động cơ nguyên mẫu (To-infinitive), vì vậy theo quy tắc ngữ pháp, sau giới cơ chúng ta phải sử dụng một danh động cơ (V-ing)."
		},
		{
			id: 2,
			question: "My parents don't let me _______ out too late on weekdays.",
			options: [
				"going",
				"go",
				"to go",
				"gone"
			],
			correctAnswer: 1,
			explanation: "Cấu trúc \"Let + someone + V (bare-infinitive)\" được dùng để diễn tả việc cho phép ai đó làm gì. Trong cấu trúc này, động cơ đi sau tân ngữ (me) bắt buộc phải ở dạng nguyên thể không có \"to\"."
		},
		{
			id: 3,
			question: "We decided _______ a new car because the old one kept breaking down.",
			options: [
				"buy",
				"buying",
				"to buy",
				"bought"
			],
			correctAnswer: 2,
			explanation: "Động cơ \"Decide\" (quyết định) là một trong những động cơ luôn đi kèm với động cơ nguyên mẫu có \"to\" (To-infinitive) khi muốn diễn tả quyết định thực hiện một hành động nào đó trong tương lai."
		},
		{
			id: 4,
			question: "It’s no use _______ about the past; you should focus on the future.",
			options: [
				"cry",
				"to cry",
				"crying",
				"cried"
			],
			correctAnswer: 2,
			explanation: "\"It’s no use\" là một thành ngữ cố định có nghĩa là \"chẳng ích gì\" hoặc \"vô ích khi làm gì\". Theo quy tắc ngữ pháp, sau cấu trúc này chúng ta luôn sử dụng danh động cơ (V-ing)."
		},
		{
			id: 5,
			question: "She suggested _______ to the cinema, but I wanted to stay home.",
			options: [
				"go",
				"to go",
				"going",
				"gone"
			],
			correctAnswer: 2,
			explanation: "Động cơ \"Suggest\" (gợi ý) khi được theo sau trực tiếp bởi một hành động khác mà không có tân ngữ chỉ người thì hành động đó phải được chia ở dạng danh động cơ (V-ing)."
		},
		{
			id: 6,
			question: "I remember _______ the door, but now I can’t find my keys.",
			options: [
				"lock",
				"locking",
				"to lock",
				"locked"
			],
			correctAnswer: 1,
			explanation: "Động cơ \"Remember\" có hai cách dùng: \"Remember + to V\" là nhớ phải làm gì (chưa làm), còn \"Remember + V-ing\" là nhớ đã làm gì trong quá khứ. Trong ngữ cảnh này, người nói nhớ về hành động khóa cửa đã thực hiện rồi nên phải dùng dạng V-ing."
		},
		{
			id: 7,
			question: "He stopped _______ a cigarette because he realized it was bad for his health.",
			options: [
				"smoking",
				"smoke",
				"to smoke",
				"smoked"
			],
			correctAnswer: 0,
			explanation: "Động cơ \"Stop\" khi đi với \"V-ing\" có nghĩa là dừng hẳn một thói quen hoặc một hành động đang diễn ra. Ở đây, nhân vật này dừng hẳn việc hút thuốc vì lý do sức khỏe nên \"smoking\" là đáp án đúng."
		},
		{
			id: 8,
			question: "It is very difficult _______ a job in this economy.",
			options: [
				"find",
				"finding",
				"to find",
				"found"
			],
			correctAnswer: 2,
			explanation: "Đây là cấu trúc tính cơ dùng với chủ ngữ giả: \"It + be + Adj + to V\". Cấu trúc này dùng để đưa ra nhận xét hoặc đánh giá về việc thực hiện một hành động nào đó."
		},
		{
			id: 9,
			question: "They managed _______ the project on time despite many difficulties.",
			options: [
				"finish",
				"to finish",
				"finishing",
				"finished"
			],
			correctAnswer: 1,
			explanation: "Động cơ \"Manage\" mang nghĩa là xoay xở hoặc thành công làm được việc gì đó. Theo sau động cơ này, chúng ta luôn sử dụng dạng nguyên mẫu có \"to\" (To-infinitive)."
		},
		{
			id: 10,
			question: "Do you mind _______ the window? It’s getting a bit cold in here.",
			options: [
				"close",
				"to close",
				"closing",
				"closed"
			],
			correctAnswer: 2,
			explanation: "Trong các câu hỏi lịch sự với \"Do you mind\" hoặc \"Would you mind\" (Bạn có phiền/ngại làm gì đó không), động cơ chính theo sau luôn phải ở dạng danh động cơ (V-ing)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ving-tov-basic-practice"><mark className="highlight-tertiary-padding-4-8">Gerunds and Infinitives</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Bài tập trắc nghiệm Gerunds & Infinitives</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Gerunds (V-ing) và Infinitives (To V/V nguyên thể)</p>
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