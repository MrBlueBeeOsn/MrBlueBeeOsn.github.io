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

export default function EVSingularPluralVerbsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "the LIST of Items _______ on the DESK.",
			options: [
				"is",
				"are",
				"were",
				"being"
			],
			correctAnswer: 0,
			explanation: "Danh chủ chính là Danh Cơ số ít \"the LIST\", không phải \"Items\". Vì vậy, hành động phải chia ở số ít."
		},
		{
			id: 2,
			question: "neither the TEACHer nor the STUdents _______ to SKIP the EXtra CLASS.",
			options: [
				"WANTS",
				"WANTing",
				"WANT",
				"has WANTed"
			],
			correctAnswer: 2,
			explanation: "Với cấu trúc \"neither... nor...\", hành động chia theo danh chủ gần nó nhất. \"the STUdents\" là Danh Cơ số nhiều nên dùng \"WANT\"."
		},
		{
			id: 3,
			question: "ecoNOMics _______ a DIFficult SUBject for many PEOple.",
			options: [
				"are",
				"is",
				"have been",
				"were"
			],
			correctAnswer: 1,
			explanation: "Một số Danh Cơ kết thúc bằng \"s\" nhưng là tên môn học, lĩnh vực (ecoNOMics, PHYSics, matheMATics) thì luôn chia hành động ở số ít."
		},
		{
			id: 4,
			question: "a NUMber of emPLOYees _______ comPLAINED about the NEW POLicy.",
			options: [
				"has",
				"is",
				"have",
				"was"
			],
			correctAnswer: 2,
			explanation: "Cấu trúc \"a NUMber of + Danh Cơ số nhiều\" luôn đi với hành động số nhiều. (Ngược lại, \"The NUMber of\" sẽ đi với hành động số ít)."
		},
		{
			id: 5,
			question: "every MAN, WOMan, and CHILD _______ the RIGHT to be HAPpy.",
			options: [
				"has",
				"have",
				"having",
				"are having"
			],
			correctAnswer: 0,
			explanation: "Khi danh chủ bắt đầu bằng \"every\" hoặc \"EACH\", hành động luôn chia ở số ít bất kể có bao nhiêu Danh Cơ đi sau."
		},
		{
			id: 6,
			question: "the PAIR of SCISsors _______ on the SEWing TAble.",
			options: [
				"are",
				"were",
				"was",
				"been"
			],
			correctAnswer: 2,
			explanation: "Mặc dù \"SCISsors\" là Danh Cơ luôn ở dạng số nhiều, nhưng khi có cụm \"the PAIR of\" (Cặp/Cái) đứng trước, ta chia theo \"PAIR\" (số ít)."
		},
		{
			id: 7,
			question: "TEN DOLlars _______ TOO MUCH to PAY for this SMALL SNACK.",
			options: [
				"are",
				"were",
				"is",
				"have been"
			],
			correctAnswer: 2,
			explanation: "Các khoảng thời gian, số tiền, khoảng cách hoặc trọng lượng được coi là một đơn vị duy nhất nên chia hành động số ít."
		},
		{
			id: 8,
			question: "either my BROTHers or my FAther _______ reSPONsible for the rePAIRS.",
			options: [
				"are",
				"is",
				"were",
				"have been"
			],
			correctAnswer: 1,
			explanation: "Với cấu trúc \"either... or...\", hành động chia theo danh chủ gần nó nhất là \"my FAther\" (số ít)."
		},
		{
			id: 9,
			question: "the TEAM _______ ARguing among themSELVES about the STRATegy.",
			options: [
				"is",
				"are",
				"has",
				"was"
			],
			correctAnswer: 1,
			explanation: "Danh cơ tập hợp (TEAM, FAMILy, STAFF) dùng hành động số nhiều khi muốn nhấn mạnh vào hành động riêng rẽ của từng thành viên trong nhóm (ở đây là đang tranh cãi lẫn nhau)."
		},
		{
			id: 10,
			question: "BREAD and BUTter _______ our DAIly BREAKfast.",
			options: [
				"is",
				"are",
				"were",
				"have been"
			],
			correctAnswer: 0,
			explanation: "Khi hai Danh Cơ nối với nhau bằng \"and\" nhưng cùng chỉ về một món ăn hoặc một ý tưởng thống nhất, hành động sẽ chia ở số ít."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-singular-and-plural-verbs-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
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