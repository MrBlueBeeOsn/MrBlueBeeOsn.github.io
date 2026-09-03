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

export default function EVSAndEsInNounsVerbs(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "my YOUNGer BROTHer _______ his TEETH THREE TIMES a DAY.",
			options: [
				"BRUSH",
				"BRUSHes",
				"BRUSHS",
				"BRUSHing"
			],
			correctAnswer: 1,
			explanation: "Với danh chủ số ít (my YOUNGer BROTHer), hành động tận cùng là -SH ta thêm -es."
		},
		{
			id: 2,
			question: "there are MANy _______ GRAzing in the FIELD.",
			options: [
				"toMAto",
				"toMAtos",
				"toMAtoes",
				"toMAtoies"
			],
			correctAnswer: 2,
			explanation: "Danh cơ tận cùng là -o (trước đó là một phụ âm) thường thêm -es để tạo thành số nhiều."
		},
		{
			id: 3,
			question: "she ALways _______ the LAUNdry on SUNday MORNings.",
			options: [
				"DO",
				"DOSE",
				"DOES",
				"DOing"
			],
			correctAnswer: 2,
			explanation: "Động cơ \"DO\" khi đi với danh chủ ngôi thứ ba số ít (she) sẽ thêm -ES thành \"DOES\"."
		},
		{
			id: 4,
			question: "the BAker SELLS VARious TYPES of _______ at his SHOP.",
			options: [
				"LOAFS",
				"LOAFES",
				"LOAVES",
				"LOAF"
			],
			correctAnswer: 2,
			explanation: "Các Danh Cơ tận cùng bằng -F hoặc -FE thường đổi thành -v rồi thêm -ES (LOAF -> LOAVES)."
		},
		{
			id: 5,
			question: "WHICH of the FOLlowing is the corRECT PLURal FORM of \"FACtory\"?",
			options: [
				"FACtorys",
				"FACtories",
				"FACtoryes",
				"FACtories"
			],
			correctAnswer: 1,
			explanation: "Danh cơ tận cùng là phụ âm + -y, ta đổi -y thành -i rồi thêm -es."
		},
		{
			id: 6,
			question: "the meCHANic _______ the BROken ENgine in LESS than an HOUR.",
			options: [
				"FIX",
				"FIXs",
				"FIXes",
				"FIXing"
			],
			correctAnswer: 2,
			explanation: "Động cơ tận cùng là -X khi chia ở ngôi thứ ba số ít ta thêm -es."
		},
		{
			id: 7,
			question: "my CAT OFTen _______ on the SOfa after LUNCH.",
			options: [
				"reLAXS",
				"reLAXes",
				"reLAX",
				"reLAXing"
			],
			correctAnswer: 1,
			explanation: "Tương tự câu 6, hành động tận cùng là -X nên ta thêm -es."
		},
		{
			id: 8,
			question: "HOW MANy _______ did you BUY for the PARTy?",
			options: [
				"BOXS",
				"BOXies",
				"BOXes",
				"BOX"
			],
			correctAnswer: 2,
			explanation: "Danh cơ tận cùng là -X thêm -es để tạo thành số nhiều."
		},
		{
			id: 9,
			question: "he _______ to WORK by BUS EVERy DAY.",
			options: [
				"GO",
				"GOES",
				"GOS",
				"GOing"
			],
			correctAnswer: 1,
			explanation: "Động cơ tận cùng là -O thêm -ES khi đi với danh chủ số ít (he)."
		},
		{
			id: 10,
			question: "the CHILDren LOVE to WATCH the _______ at the ZOO.",
			options: [
				"MONkeys",
				"MONkies",
				"MONkeies",
				"MONkeyes"
			],
			correctAnswer: 0,
			explanation: "Danh cơ tận cùng là nguyên âm (e) + -y, chúng ta chỉ cần thêm -s, không đổi thành -ies."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-s-and-es-in-nouns-and-verbs-quiz"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc nghiệm -s and -es in Nouns and Verbs</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>April 05, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};