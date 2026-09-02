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

export default function EVSubjectVerbQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "each of the STUdents _______ reQUIred to subMIT the asSIGNment by FRIday.",
			options: [
				"is",
				"are",
				"were",
				"have"
			],
			correctAnswer: 0,
			explanation: "Khi danh chủ bắt đầu bằng \"each of\" (Mỗi trong số...), hành động luôn chia ở dạng số ít bất kể Danh Cơ theo sau là số nhiều."
		},
		{
			id: 2,
			question: "NEIther the MANager nor the emPLOYees _______ aWARE of the NEW POLicy.",
			options: [
				"was",
				"were",
				"is",
				"has been"
			],
			correctAnswer: 1,
			explanation: "Với cấu trúc \"NEIther... nor...\" (Không... cũng không...), hành động phải chia theo danh chủ gần nó nhất (ở đây là \"emPLOYees\" - Danh Cơ số nhiều)."
		},
		{
			id: 3,
			question: "the TEAM _______ PRACtice EVERy MORNing at SIX A.M.",
			options: [
				"do",
				"PRACtices",
				"PRACtice",
				"are PRACticing"
			],
			correctAnswer: 1,
			explanation: "\"TEAM\" là Danh Cơ tập hợp (colLECtive NOUN). Khi cả đội hoạt động như một đơn vị thống nhất, chúng ta chia hành động ở ngôi thứ 3 số ít."
		},
		{
			id: 4,
			question: "matheMATics _______ my most CHALlenging SUBject in HIGH SCHOOL.",
			options: [
				"are",
				"were",
				"was",
				"have been"
			],
			correctAnswer: 2,
			explanation: "Các môn học kết thúc bằng đuôi \"-ics\" (matheMATics, PHYSics, ecoNOMics...) luôn được coi là Danh Cơ số ít."
		},
		{
			id: 5,
			question: "a NUMber of PEOple _______ WAITing in LINE for the CONcert TICKets.",
			options: [
				"is",
				"was",
				"are",
				"has been"
			],
			correctAnswer: 2,
			explanation: "Cấu trúc \"a NUMber of + N số nhiều\" luôn đi với hành động số nhiều (mang nghĩa là \"Nhiều người/vật\")."
		},
		{
			id: 6,
			question: "EIther my SISter or my PARents _______ COMing to the graduAtion CERemony.",
			options: [
				"is",
				"are",
				"was",
				"has"
			],
			correctAnswer: 1,
			explanation: "Với cấu trúc \"EIther... or...\" (Hoặc... hoặc...), hành động chia theo danh chủ đứng gần nó nhất là \"PARents\" (số nhiều)."
		},
		{
			id: 7,
			question: "POLitics _______ a COMplicated TOPic for many PEOple.",
			options: [
				"are",
				"is",
				"were",
				"have been"
			],
			correctAnswer: 1,
			explanation: "Tương tự môn học, từ \"Politics\" (chính trị) khi nói về một lĩnh vực chung thì được tính là Danh Cơ số ít."
		},
		{
			id: 8,
			question: "BREAD and BUTter _______ her FAvorite BREAKfast.",
			options: [
				"are",
				"were",
				"is",
				"have been"
			],
			correctAnswer: 2,
			explanation: "Mặc dù có hai Danh Cơ nối bằng \"and\", nhưng \"BREAD and BUTter\" được coi là một món ăn duy nhất (một chỉnh thể), nên dùng hành động số ít."
		},
		{
			id: 9,
			question: "TEN MILES _______ a LONG DIStance to RUN for a beGINner.",
			options: [
				"are",
				"were",
				"is",
				"have"
			],
			correctAnswer: 2,
			explanation: "Các đơn vị đo lường (khoảng cách, thời gian, số tiền, trọng lượng) được coi là một khối thống nhất nên đi với hành động số ít."
		},
		{
			id: 10,
			question: "EVERyone in the OFfice _______ to atTEND the MEETing toMORrow.",
			options: [
				"NEED",
				"NEEDS",
				"are NEEDing",
				"have NEEDed"
			],
			correctAnswer: 1,
			explanation: "Các đại cơ bất định (EVERyone, SOMEone, NO one, EVERything...) luôn đi kèm với hành động chia ở số ít."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-subject-verb-agreement-basic-practice"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Subject-Verb Agreement (SVA)</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 20, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};