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
			question: "the WOMan _______ LIVES NEXT DOOR is a FAmous DOCtor.",
			options: [
				"whom",
				"who",
				"which",
				"whose"
			],
			correctAnswer: 1,
			explanation: "Đại cơ quan hệ thay thế cho Danh Cơ chỉ người \"the WOMan\" và đóng vai trò làm danh chủ trong câu con quan hệ (đứng trước hành động \"LIVES\")."
		},
		{
			id: 2,
			question: "the BOOK _______ i BORrowed from the LIbrary YESterday is VERy INTEresting.",
			options: [
				"who",
				"whom",
				"which",
				"whose"
			],
			correctAnswer: 2,
			explanation: "Đại cơ quan hệ thay thế cho Danh Cơ chỉ vật \"the BOOK\" và đóng vai trò làm danh nhận trong câu con quan hệ."
		},
		{
			id: 3,
			question: "do you KNOW the BOY _______ BIcycle was STOlen LAST NIGHT?",
			options: [
				"who",
				"whose",
				"whom",
				"that"
			],
			correctAnswer: 1,
			explanation: "Dùng để chỉ sở hữu cho Danh Cơ đứng trước (\"the BOY's BIcycle\" → \"the BOY whose BIcycle\")."
		},
		{
			id: 4,
			question: "the RESTAUrant _______ we had DINner LAST WEEK was fanTAStic.",
			options: [
				"where",
				"which",
				"that",
				"when"
			],
			correctAnswer: 0,
			explanation: "Trạng cơ quan hệ chỉ nơi chốn, thay thế cho \"the RESTAUrant\" (tương đương với cụm \"at which\")."
		},
		{
			id: 5,
			question: "i will NEVer forGET the DAY _______ i FIRST MET my BEST FRIEND.",
			options: [
				"which",
				"where",
				"when",
				"who"
			],
			correctAnswer: 2,
			explanation: "Trạng cơ quan hệ chỉ thời gian, thay thế cho Danh Cơ \"the DAY\"."
		},
		{
			id: 6,
			question: "the MAN _______ you MET at the PARTy is my UNcle.",
			options: [
				"which",
				"whose",
				"whom",
				"who"
			],
			correctAnswer: 2,
			explanation: "Đại cơ quan hệ thay thế cho Danh Cơ chỉ người \"the MAN\" và đóng vai trò làm danh nhận trong câu con quan hệ (sau nó là một đại cơ/danh chủ \"you\")."
		},
		{
			id: 7,
			question: "the REAson _______ he FAILED the exAM was his LAziness.",
			options: [
				"why",
				"which",
				"where",
				"when"
			],
			correctAnswer: 0,
			explanation: "Trạng cơ quan hệ chỉ lý do, thường đi kèm sau cụm từ Danh Cơ \"the REAson\"."
		},
		{
			id: 8,
			question: "the BUILDing, _______ was BUILT in nineTEEN TWENty, is being RENovated.",
			options: [
				"that",
				"which",
				"who",
				"where"
			],
			correctAnswer: 1,
			explanation: "Đây là câu con quan hệ không xác định (có dấu phẩy), bổ nghĩa cho vật \"the BUILDing\". Quy tắc ngữ pháp không dùng \"that\" sau dấu phẩy."
		},
		{
			id: 9,
			question: "the STUdents _______ comPLEted the asSIGNment on TIME reCEIVED EXtra MARKS.",
			options: [
				"whom",
				"which",
				"who",
				"whose"
			],
			correctAnswer: 2,
			explanation: "Thay thế cho Danh Cơ số nhiều chỉ người \"the STUdents\" và làm danh chủ cho hành động \"comPLEted\"."
		},
		{
			id: 10,
			question: "the LAPtop _______ she is Using beLONGS to her BROTHer.",
			options: [
				"whose",
				"who",
				"whom",
				"that"
			],
			correctAnswer: 3,
			explanation: "\"that\" được dùng để thay thế cho Danh Cơ chỉ vật \"the LAPtop\" trong câu con quan hệ xác định (ở đây có thể dùng \"which\" nhưng trong các phương án chỉ có \"that\" là chính xác)."
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
						<span>May 25, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};