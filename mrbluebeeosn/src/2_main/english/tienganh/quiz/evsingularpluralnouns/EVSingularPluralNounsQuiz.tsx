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
			explanation: "\"Sheep\" là danh từ có hình thức số ít và số nhiều giống hệt nhau. Không bao giờ thêm \"s\" vào sau từ này."
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
			explanation: "Các danh từ kết thúc bằng đuôi \"-fe\" thường được đổi thành \"-ves\" khi chuyển sang số nhiều (knife -> knives)."
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
			explanation: "\"Children\" là dạng số nhiều bất quy tắc của \"child\". Bản thân nó đã là số nhiều nên không thêm \"s\"."
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
			explanation: "\"Teeth\" là dạng số nhiều bất quy tắc của \"tooth\" (thay đổi nguyên âm bên trong)."
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
			explanation: "\"Women\" là dạng số nhiều của \"woman\". Tương tự như man/men, ta thay đổi nguyên âm \"a\" thành \"e\"."
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
			explanation: "Đây là danh từ gốc Hy Lạp. \"Phenomenon\" là số ít và \"phenomena\" là số nhiều."
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
			explanation: "Thông thường, \"fish\" giữ nguyên hình thức ở số nhiều. (Lưu ý: \"fishes\" chỉ dùng khi nói về nhiều loài cá khác nhau, nhưng trong ngữ cảnh thông thường ta dùng \"fish\")."
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
			explanation: "Danh cơ kết thúc bằng \"-f\" thường chuyển thành \"-ves\" ở số nhiều (leaf -> leaves)."
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
			explanation: "\"Geese\" là dạng số nhiều bất quy tắc của \"goose\"."
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
			explanation: "Danh cơ kết thúc bằng đuôi \"-x\" thì ta thêm hậu tố \"-es\" để tạo thành số nhiều."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-singular-and-plural-nouns-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Singular and Plural Verbs</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
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