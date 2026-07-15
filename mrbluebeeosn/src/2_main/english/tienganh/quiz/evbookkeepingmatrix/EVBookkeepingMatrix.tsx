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
			question: "[______] is the fundamental task of a bookkeeper. \n [Ghi chép mọi giao dịch kinh doanh] là nhiệm vụ cơ bản của một người làm sổ sách.",
			options: [
				"[Noun Clause]",
				"[Noun Phrase]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [Recording every business transaction] - [Tiếp Động Cụm][Progressive Verb Phrase] bắt đầu bằng hành động thêm đuôi \"-ing\" đi kèm các thành phần bổ nghĩa, không có chủ thể thực hiện hành động đứng trước và không biến đổi theo thời gian. \n\n Chức năng: [Recording every business transaction] - [Danh Cụm][Noun Phrase] cả này giữ vai trò làm thành phần đứng đầu chính đứng trước \"is\"."
		},
		{
			id: 2,
			question: "The bookkeeper provided the [______] entries for the month-end reports. \n Người làm sổ sách đã cung cấp các bút toán [điều chỉnh] cho các báo cáo cuối tháng.",
			options: [
				"[Adjective Base]",
				"[Adverb Base]"
			],
			correctAnswer: 0,
			explanation: "Hình thái: [adjusting] - [Tiếp Động Cơ][Progressive Verb Base] dạng gốc thêm đuôi \"-ing\" đứng đơn lẻ. \n\n Chức năng: [adjusting] - [Tính Cơ][Adjective Base] đi kèm ngay trước \"entries\" đứng ra bổ nghĩa cho thành phần này."
		},
		{
			id: 3,
			question: "The clerk worked [______]. \n Nhân viên đã làm việc [tính toán tổng lương cho đội ngũ nhân sự].",
			options: [
				"[Adverb Clause]",
				"[Adverb Phrase]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [calculating the total payroll for the staff] - [Tiếp Động Cụm][Progressive Verb Phrase] bắt đầu bằng hành động thêm đuôi \"-ing\" đi kèm các thành phần bổ nghĩa phía sau, không có chủ thể riêng biệt. \n\n Chức năng: [calculating the total payroll for the staff] - [Trạng Cụm][Adverb Phrase] đi kèm sau hành động chính \"worked\" đứng ra bổ nghĩa cho hành động đó theo góc độ cách thức."
		},
		{
			id: 4,
			question: "[______] requires constant attention to detail. \n [Để duy trì các hồ sơ tài chính chính xác] đòi hỏi sự chú ý liên tục đến từng chi tiết.",
			options: [
				"[Noun Phrase]",
				"[Noun Clause]"
			],
			correctAnswer: 0,
			explanation: "Hình thái: [To maintain accurate financial records] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] bắt đầu bằng hành động đi kèm \"to\" phía trước kết hợp thành phần bổ nghĩa, không chứa chủ thể thực hiện hành động. \n\n Chức năng: [To maintain accurate financial records] - [Danh Cụm][Noun Phrase] cả này giữ vai trò làm thành phần đứng đầu chính đứng trước \"requires\"."
		},
		{
			id: 5,
			question: "The ledger [______] is kept in the safe. \n Cuốn sổ cái [chứa tất cả các khoản bán hàng ghi nợ] được cất giữ trong két sắt.",
			options: [
				"[Adjective Clause]",
				"[Adjective Phrase]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [containing all the credit sales] - [Tiếp Động Cụm][Progressive Verb Phrase] bắt đầu bằng hành động thêm đuôi \"-ing\" kết hợp thành phần bổ nghĩa, không có chủ thể riêng đứng trước. \n\n Chức năng: [containing all the credit sales] - [Tính Cụm][Adjective Phrase] đứng sau \"The ledger\" đứng ra bổ nghĩa cho thành phần này."
		},
		{
			id: 6,
			question: "We use specialized software [______]. \n Chúng tôi sử dụng phần mềm chuyên dụng [để tự động hóa quy trình ghi chép sổ sách].",
			options: [
				"[Adverb Phrase]",
				"[Adverb Clause]"
			],
			correctAnswer: 0,
			explanation: "Hình thái: [to automate the bookkeeping process] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] bắt đầu bằng hành động có \"to\" đi kèm các thành phần bổ nghĩa. \n\n Chức năng: [to automate the bookkeeping process] - [Trạng Cụm][Adverb Phrase] đứng sau hành động chính \"use\" đứng ra bổ nghĩa cho hành động đó theo góc độ mục đích."
		},
		{
			id: 7,
			question: "[______] pleased the manager. \n [Hoàn tất {những gì các kiểm toán viên yêu cầu} đúng hạn] đã làm hài lòng người quản lý.",
			options: [
				"[Noun Clause]",
				"[Tiered Noun Phrase]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [Finalizing {what the auditors requested} on time] - [Tiếp Động Cụm][Progressive Verb Phrase] lồng ghép phân tầng. {what the auditors requested} - [Hiển-Liên Động Câu][Connector Verb Clause] bắt đầu bằng \"what\", có chứa chủ thể \"the auditors\" và hành động \"requested\" xác định theo thời quá khứ. \n\n Chức năng: [Finalizing {what the auditors requested} on time] - [Danh Cụm] Phân Tầng [Tiered Noun Phrase] tầng 1 bên ngoài dùng [] giữ vai trò thành phần đứng đầu chính. {what the auditors requested} - [Danh Câu][Noun Clause] giữ vai trò làm thành phần chịu tác động trực tiếp cho hành động \"Finalizing\" ở phía trước."
		},
		{
			id: 8,
			question: "The manager realized [______]. \n Người quản lý đã nhận ra [rằng người làm sổ sách đã mắc một sai lầm nghiêm trọng].",
			options: [
				"[Noun Clause]",
				"[Noun Phrase]"
			],
			correctAnswer: 0,
			explanation: "Hình thái: [that the bookkeeper made a serious error] - [Hiển-Liên Động Câu][Connector Verb Clause] bắt đầu bằng \"that\", có chứa chủ thể \"the bookkeeper\" và hành động \"made\" xác định theo thời quá khứ. \n\n Chức năng: [that the bookkeeper made a serious error] - [Danh Câu][Noun Clause] đứng sau hành động \"realized\" giữ vai trò tiếp nhận tác động từ hành động này."
		},
		{
			id: 9,
			question: "The accountant [______] is very thorough. \n Người kế toán, [người mà kiểm toán sổ sách của chúng tôi hàng năm], rất kỹ lưỡng.",
			options: [
				"[Adjective Phrase]",
				"[Adjective Clause]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [who audits our books every year] - [Hiển-Liên Động Câu][Connector Verb Clause] bắt đầu bằng thành phần liên kết \"who\", có chứa hành động \"audits\" xác định theo thời hiện tại. \n\n Chức năng: [who audits our books every year] - [Tính Câu][Adjective Clause] đứng sau \"The accountant\" đứng ra bổ nghĩa cho thành phần này."
		},
		{
			id: 10,
			question: "[______], we must update our methods. \n [Vì luật thuế đã thay đổi gần đây], chúng tôi phải cập nhật các phương pháp của mình.",
			options: [
				"[Adverb Clause]",
				"[Adverb Phrase]"
			],
			correctAnswer: 0,
			explanation: "[Because the tax laws changed recently] - [Hiển-Liên Động Câu][Connector Verb Clause] bắt đầu bằng thành phần liên kết \"Because\", có chứa chủ thể \"the tax laws\" và hành động \"changed\" xác định theo thời quá khứ. \n\n Chức năng: [Because the tax laws changed recently] - [Trạng Câu][Adverb Clause] đứng độc lập đứng ra bổ nghĩa cho toàn bộ phần còn lại theo góc độ nguyên nhân."
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
						<span>June 16, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};