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
			question: "the SHEPherd is LOOKing after a LARGE FLOCK of ________.",
			options: [
				"SHEEPS",
				"SHEEP",
				"SHEEPES",
				"SHEEPses"
			],
			correctAnswer: 1,
			explanation: "\"SHEEP\" là Danh Cơ có hình thức số ít và số nhiều giống hệt nhau. Không bao giờ thêm \"S\" vào sau từ này."
		},
		{
			id: 2,
			question: "i NEED to BUY TWO NEW ________ for the KITCHen.",
			options: [
				"KNIFES",
				"KNIFVES",
				"KNIVES",
				"KNIVS"
			],
			correctAnswer: 2,
			explanation: "Các Danh Cơ kết thúc bằng đuôi \"-FE\" thường được đổi thành \"-VES\" khi chuyển sang số nhiều (KNIFE -> KNIVES)."
		},
		{
			id: 3,
			question: "many ________ are PLAYing in the PARK toDAY.",
			options: [
				"CHILDS",
				"CHILDren",
				"CHILDrens",
				"CHILDES"
			],
			correctAnswer: 1,
			explanation: "\"CHILDren\" là dạng số nhiều bất quy tắc của \"CHILD\". Bản thân nó đã là số nhiều nên không thêm \"S\"."
		},
		{
			id: 4,
			question: "could you PLEASE BRUSH your ________ before GOing to BED?",
			options: [
				"TOOTHS",
				"TEETHS",
				"TEETH",
				"TOOTHES"
			],
			correctAnswer: 2,
			explanation: "\"TEETH\" là dạng số nhiều bất quy tắc của \"TOOTH\" (thay đổi nguyên âm bên trong)."
		},
		{
			id: 5,
			question: "there are FIVE ________ WORKing in this OFfice.",
			options: [
				"WOMen",
				"WOMan",
				"WOMens",
				"WOMans"
			],
			correctAnswer: 0,
			explanation: "\"Women\" là dạng số nhiều của \"WOMan\". Tương tự như MAN/MEN, ta thay đổi nguyên âm \"a\" thành \"e\"."
		},
		{
			id: 6,
			question: "SCIentists are STUDying the ________ of the LOcal enVIronment.",
			options: [
				"pheNOMenons",
				"pheNOMena",
				"pheNOMenas",
				"pheNOMenoes"
			],
			correctAnswer: 1,
			explanation: "Đây là Danh Cơ gốc Hy Lạp. \"pheNOMenon\" là số ít và \"pheNOMena\" là số nhiều."
		},
		{
			id: 7,
			question: "HOW many ________ did you CATCH during the FISHing TRIP?",
			options: [
				"FISH",
				"FISHes",
				"FISHS",
				"FISHies"
			],
			correctAnswer: 0,
			explanation: "Thông thường, \"FISH\" giữ nguyên hình thức ở số nhiều. (Lưu ý: \"FISHes\" chỉ dùng khi nói về nhiều loài cá khác nhau, nhưng trong ngữ cảnh thông thường ta dùng \"FISH\")."
		},
		{
			id: 8,
			question: "the ________ were SCATtered all over the FLOOR.",
			options: [
				"LEAFES",
				"LEAFS",
				"LEAVES",
				"LEAF"
			],
			correctAnswer: 2,
			explanation: "Danh cơ kết thúc bằng \"-f\" thường chuyển thành \"-VES\" ở số nhiều (LEAF -> LEAVES)."
		},
		{
			id: 9,
			question: "my GRANDmother has THREE ________.",
			options: [
				"GEESE",
				"GOOSes",
				"GEESes",
				"GOOSess"
			],
			correctAnswer: 0,
			explanation: "\"GEESE\" là dạng số nhiều bất quy tắc của \"GOOSE\"."
		},
		{
			id: 10,
			question: "PLEASE PUT the ________ on the TOP SHELF.",
			options: [
				"BOXS",
				"BOX",
				"BOXes",
				"BOXies"
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
						<span>March 29, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};