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

export default function (): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "[reCORDing every BUSINess transACtion] is the fundaMENtal TASK of a BOOKkeeper. \n [Ghi chép mọi giao dịch kinh doanh] là nhiệm vụ cơ bản của một người làm sổ sách.",
			options: [
				"[Noun Clause]",
				"[Noun Phrase]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [reCORDing every BUSINess transACtion] - [Tiếp Động Cụm][Progressive Verb Phrase] bắt đầu bằng hành động thêm đuôi \"-ing\" đi kèm các thành phần bổ nghĩa, không có chủ thể thực hiện hành động đứng trước và không biến đổi theo thời gian. \n\n Chức năng: [reCORDing every BUSINess transACtion] - [Danh Cụm][Noun Phrase] cả này giữ vai trò làm thành phần đứng đầu chính đứng trước \"is\"."
		},
		{
			id: 2,
			question: "the BOOKkeeper proVIded the [adJUSTing] ENtries for the MONTH-end rePORTS. \n Người làm sổ sách đã cung cấp các bút toán [điều chỉnh] cho các báo cáo cuối tháng.",
			options: [
				"[Adjective Base]",
				"[Adverb Base]"
			],
			correctAnswer: 0,
			explanation: "Hình thái: [adJUSTing] - [Tiếp Động Cơ][Progressive Verb Base] bắt đầu từ [Động Cơ] nguyên bản dạng gốc thêm đuôi \"-ing\" đứng đơn lẻ. \n\n Chức năng: [adJUSTing] - [Tính Cơ][Adjective Base] đi kèm ngay trước \"ENtries\" đứng ra bổ nghĩa cho thành phần này."
		},
		{
			id: 3,
			question: "the CLERK WORKED [CALculating the TOtal PAYroll for the STAFF]. \n Nhân viên đã làm việc [tính toán tổng lương cho đội ngũ nhân sự].",
			options: [
				"[Adverb Clause]",
				"[Adverb Phrase]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [CALculating the TOtal PAYroll for the STAFF] - [Tiếp Động Cụm][Progressive Verb Phrase] bắt đầu bằng hành động thêm đuôi \"-ing\" đi kèm các thành phần bổ nghĩa phía sau, không có chủ thể riêng biệt. \n\n Chức năng: [CALculating the TOtal PAYroll for the STAFF] - [Trạng Cụm][Adverb Phrase] đi kèm sau hành động chính \"WORKED\" đứng ra bổ nghĩa cho hành động đó theo góc độ cách thức."
		},
		{
			id: 4,
			question: "[to mainTAIN ACcurate fiNANcial REcords] reQUIres CONstant atTENtion to DEtail. \n [Để duy trì các hồ sơ tài chính chính xác] đòi hỏi sự chú ý liên tục đến từng chi tiết.",
			options: [
				"[Noun Phrase]",
				"[Noun Clause]"
			],
			correctAnswer: 0,
			explanation: "Hình thái: [to mainTAIN ACcurate fiNANcial REcords] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] bắt đầu bằng hành động đi kèm \"to\" phía trước kết hợp thành phần bổ nghĩa, không chứa chủ thể thực hiện hành động. \n\n Chức năng: [to mainTAIN ACcurate fiNANcial REcords] - [Danh Cụm][Noun Phrase] cả này giữ vai trò làm thành phần đứng đầu chính đứng trước \"reQUIres\"."
		},
		{
			id: 5,
			question: "the LEDGer [conTAINing all the CREDit SALES] is KEPT in the SAFE. \n Cuốn sổ cái [chứa tất cả các khoản bán hàng ghi nợ] được cất giữ trong két sắt.",
			options: [
				"[Adjective Clause]",
				"[Adjective Phrase]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [conTAINing all the CREDit SALES] - [Tiếp Động Cụm][Progressive Verb Phrase] bắt đầu bằng hành động thêm đuôi \"-ing\" kết hợp thành phần bổ nghĩa, không có chủ thể riêng đứng trước. \n\n Chức năng: [conTAINing all the CREDit SALES] - [Tính Cụm][Adjective Phrase] đứng sau \"the LEDGer\" đứng ra bổ nghĩa cho thành phần này."
		},
		{
			id: 6,
			question: "we USE SPECialized SOFTware [to AUtomate the BOOKkeeping PROcess]. \n Chúng tôi sử dụng phần mềm chuyên dụng [để tự động hóa quy trình ghi chép sổ sách].",
			options: [
				"[Adverb Phrase]",
				"[Adverb Clause]"
			],
			correctAnswer: 0,
			explanation: "Hình thái: [to AUtomate the BOOKkeeping PROcess] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] bắt đầu bằng hành động có \"to\" đi kèm các thành phần bổ nghĩa. \n\n Chức năng: [to AUtomate the BOOKkeeping PROcess] - [Trạng Cụm][Adverb Phrase] đứng sau hành động chính \"USE\" đứng ra bổ nghĩa cho hành động đó theo góc độ mục đích."
		},
		{
			id: 7,
			question: "[FInalizing {what the AUditors reQUESTed} on TIME] PLEASED the MANager. \n [Hoàn tất {những gì các kiểm toán viên yêu cầu} đúng hạn] đã làm hài lòng người quản lý.",
			options: [
				"[Noun Clause]",
				"[Tiered Noun Phrase]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [FInalizing {what the AUditors reQUESTed} on TIME] - [Tiếp Động Cụm][Progressive Verb Phrase] lồng ghép phân tầng. {what the AUditors reQUESTed} - [Liên Câu][Conjunctional Clause] bắt đầu bằng \"what\", có chứa chủ thể \"the AUditors\" và hành động \"reQUESTed\" xác định theo thời quá khứ. \n\n Chức năng: [FInalizing {what the AUditors reQUESTed} on TIME] - [Danh Cụm] Phân Tầng [Tiered Noun Phrase] tầng 1 bên ngoài dùng [] giữ vai trò thành phần đứng đầu chính. {what the AUditors reQUESTed} - [Danh Câu][Noun Clause] giữ vai trò làm thành phần chịu tác động trực tiếp cho hành động \"FInalizing\" ở phía trước."
		},
		{
			id: 8,
			question: "the MANager REalized [that the BOOKkeeper MADE a SERious ERror]. \n Người quản lý đã nhận ra [rằng người làm sổ sách đã mắc một sai lầm nghiêm trọng].",
			options: [
				"[Noun Clause]",
				"[Noun Phrase]"
			],
			correctAnswer: 0,
			explanation: "Hình thái: [that the BOOKkeeper MADE a SERious ERror] - [Liên Câu][Conjunctional Clause] bắt đầu bằng \"that\", có chứa chủ thể \"the BOOKkeeper\" và hành động \"made\" xác định theo thời quá khứ. \n\n Chức năng: [that the BOOKkeeper MADE a SERious ERror] - [Danh Câu][Noun Clause] đứng sau hành động \"REalized\" giữ vai trò tiếp nhận tác động từ hành động này."
		},
		{
			id: 9,
			question: "the acCOUNTant [who AUdits our BOOKS every YEAR] is VERy THORough. \n Người kế toán, [người mà kiểm toán sổ sách của chúng tôi hàng năm], rất kỹ lưỡng.",
			options: [
				"[Adjective Phrase]",
				"[Adjective Clause]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [who AUdits our BOOKS every YEAR] - [Liên Câu][Conjunctional Clause] bắt đầu bằng thành phần liên kết \"who\", có chứa hành động \"AUdits\" xác định theo thời hiện tại. \n\n Chức năng: [who AUdits our BOOKS every YEAR] - [Tính Câu][Adjective Clause] đứng sau \"the acCOUNTant\" đứng ra bổ nghĩa cho thành phần này."
		},
		{
			id: 10,
			question: "[because the TAX LAWS CHANGED REcently], we must upDATE our METHods. \n [Vì luật thuế đã thay đổi gần đây], chúng tôi phải cập nhật các phương pháp của mình.",
			options: [
				"[Adverb Clause]",
				"[Adverb Phrase]"
			],
			correctAnswer: 0,
			explanation: "[because the TAX LAWS CHANGED REcently] - [Liên Câu][Conjunctional Clause] bắt đầu bằng thành phần liên kết \"because\", có chứa chủ thể \"the TAX LAWS\" và hành động \"CHANGED\" xác định theo thời quá khứ. \n\n Chức năng: [because the TAX LAWS CHANGED REcently] - [Trạng Câu][Adverb Clause] đứng độc lập đứng ra bổ nghĩa cho toàn bộ phần còn lại theo góc độ nguyên nhân."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-matrix-quiz"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">EV Bookkeeping Matrix</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>June 16, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};