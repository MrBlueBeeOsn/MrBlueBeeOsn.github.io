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

export default function EVNounClausesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "________ MADE everyone in the room LAUGH was his hiLARious imiTAtion of the BOSS.",
			options: [
				"WHAT",
				"that",
				"which",
				"whatever"
			],
			correctAnswer: 0,
			explanation: "Cụm từ đóng vai trò làm danh chủ trong câu này cần một câu con danh cơ. \"what\" đóng vai trò là danh chủ bên trong câu con Danh Cơ đó (what MADE everyone... = Điều mà đã làm cho mọi người...). \"that\" không thể làm danh chủ của hành động \"MADE\" trong ngữ cảnh này nếu không có một Danh Cơ đi trước."
		},
		{
			id: 2,
			question: "the proFESsor exPLAINED ________ the NEW SOFTware PROgram could imPROVE our efFICiency.",
			options: [
				"WHAT",
				"how",
				"which",
				"who"
			],
			correctAnswer: 1,
			explanation: "Danh câu làm danh nhận cho hành động \"exPLAINED\". Dựa vào ngữ nghĩa của câu, chúng ta cần một từ nối chỉ cách thức: \"Giáo sư giải thích bằng cách nào/làm thế nào phần mềm mới có thể cải thiện hiệu suất\"."
		},
		{
			id: 3,
			question: "the deCISion dePENDS on ________ CANdidate PASSes the FInal INterview.",
			options: [
				"whoever",
				"whichever",
				"who",
				"whatever"
			],
			correctAnswer: 1,
			explanation: "Sau giới cơ \"on\" cần một câu con danh cơ. Ở đây có Danh Cơ \"CANdidate\" ngay phía sau, do đó ta cần một hạn định cơ bổ nghĩa cho Danh Cơ này. \"whichever\" mang ý nghĩa \"bất cứ... nào\" trong một nhóm đối tượng có giới hạn (các ứng viên tham gia phỏng vấn)."
		},
		{
			id: 4,
			question: "it is esSENtial that she ________ the rePORT before the BOARD MEETing toMORrow.",
			options: [
				"subMITS",
				"subMIT",
				"subMITted",
				"will subMIT"
			],
			correctAnswer: 1,
			explanation: "Câu này sử dụng cấu trúc giả định (subJUNCtive MOOD) với Tính Cơ \"esSENtial \" (it is esSENtial  that + s + V-inf). Trong câu con Danh Cơ đi sau \"that\", hành động luôn ở dạng nguyên mẫu không \"to\" (BARE inFINitive) cho tất cả các ngôi."
		},
		{
			id: 5,
			question: "do you KNOW ________ the PACKage will arRIVE from LONdon?",
			options: [
				"when",
				"that",
				"WHAT",
				"why"
			],
			correctAnswer: 0,
			explanation: "Danh câu làm danh nhận cho hành động \"KNOW\". Xét về mặt ngữ nghĩa, hành động \"arRIVE\" (đến) thường đi với Trạng Cơ chỉ thời gian, câu hỏi hỏi về thời điểm gói hàng đến nên dùng \"when\"."
		},
		{
			id: 6,
			question: "________ she MANaged to FINish the PROJect in just TWO DAYS surPRISED all of us.",
			options: [
				"WHAT",
				"how",
				"that",
				"if"
			],
			correctAnswer: 2,
			explanation: "Cả câu con đứng đầu câu làm danh chủ chính. Câu con phía sau \"she MANaged to FINish...\" đã đầy đủ các thành phần cấu trúc (s-V-O), do đó ta dùng \"that\" để biến toàn bộ sự việc này thành một câu con Danh Cơ (Việc mà cô ấy hoàn thành... đã làm tất cả bất ngờ)."
		},
		{
			id: 7,
			question: "we are STILL disCUSSing the ISsue of ________ should be apPOINTed as the NEW MANager.",
			options: [
				"whom",
				"who",
				"whose",
				"which"
			],
			correctAnswer: 1,
			explanation: "Danh câu đứng sau giới cơ \"of\". Trong câu con này, ta cần một từ đóng vai trò làm danh chủ trước hành động bị động \"should be apPOINTed\". Vì vậy, ta phải chọn đại cơ danh chủ chỉ người là \"who\"."
		},
		{
			id: 8,
			question: "she COULDn't HEAR ________ the TOUR GUIDE was SAYing because of the LOUD NOISE.",
			options: [
				"that",
				"which",
				"WHAT",
				"whatever"
			],
			correctAnswer: 2,
			explanation: "Danh câu làm danh nhận cho hành động \"HEAR\". Hành động \"SAYing\" bên trong câu con Danh Cơ đang thiếu danh nhận trực tiếp (nói cái gì). \"what\" vừa làm từ nối vừa đóng vai trò là danh nhận cho \"SAYing\" (...nghe những gì hướng dẫn viên đang nói)."
		},
		{
			id: 9,
			question: "the TRUE PROBlem is ________ we LACK the NECessary BUDget to LAUNCH the CAMpaign.",
			options: [
				"that",
				"WHAT",
				"if",
				"whether"
			],
			correctAnswer: 0,
			explanation: "Danh câu đóng vai trò làm bổ ngữ cho danh chủ (SUBject COMplement) sau hành động nối \"is\". Vì câu con phía sau \"we LACK...\" đã trọn vẹn về nghĩa và cấu trúc, ta dùng \"that\" để dẫn dắt sự thật/sự việc đó."
		},
		{
			id: 10,
			question: "the HR dePARTment will HIRE ________ QUALifies for the TECHnical poSITion.",
			options: [
				"who",
				"whomever",
				"whoever",
				"anyone"
			],
			correctAnswer: 2,
			explanation: "Danh câu làm danh nhận cho hành động \"HIRE\". Trong câu con Danh Cơ này, từ cần điền đóng vai trò làm danh chủ trực tiếp của hành động \"QUALifies\", do đó ta phải chọn đại cơ nhân xưng dạng danh chủ là \"whoever\" (bất kỳ ai), chứ không dùng dạng danh nhận \"whomever\"."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-dc-quiz"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm DC - Noun</h1>
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