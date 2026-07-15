// EnglishPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import EnglishPracticeQuiz from '../../../../components/quiz/EnglishPracticeQuiz';

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
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "[______] is the first step in the accounting cycle. \n [Việc ghi chép các giao dịch] là bước đầu tiên trong chu trình kế toán.",
			options: [
				"[Noun Phrase]",
				"[Noun Base]"
			],
			correctAnswer: 0,
			explanation: "Morphology: [Recording transactions] - [Tiếp Động Cụm][Progressive Verb Phrase] consisting of the gerund \"recording\" and its direct object \"transactions\" working together as a structural unit. \n\n Function: [Recording transactions] - [Danh Cụm][Noun Phrase] serving as the complete subject of the sentence to initiate the main verb \"is\"."
		},
		{
			id: 2,
			question: "The primary goal of a bookkeeper is [______]. \n Mục tiêu chính của một người ghi sổ là [duy trì các sổ cái chính xác].",
			options: [
				"[Noun Base]",
				"[Noun Phrase]"
			],
			correctAnswer: 1,
			explanation: "Morphology: [to maintain accurate ledgers] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] formed by an infinitive verb followed by its modifying financial adjective and noun object. \n\n Function: [to maintain accurate ledgers] - [Danh Cụm][Noun Phrase] acting as a subject complement to explain what the primary goal is after the linking verb."
		},
		{
			id: 3,
			question: "The [______] financial statements were submitted to the tax authority. \n Các báo cáo tài chính [đã được kiểm toán] đã được nộp cho cơ quan thuế.",
			options: [
				"[Adjective Base]",
				"[Adjective Phrase]"
			],
			correctAnswer: 0,
			explanation: "Morphology: [audited] - [Hoàn Động Cơ][Perfect Verb Base] using a single past participle form of the verb to function as a modifier. \n\n Function: [audited] - [Tính Cơ][Adjective Base] directly modifying the financial noun \"statements\" to clarify their verified status."
		},
		{
			id: 4,
			question: "The clerk found the pricing error [______]. \n Nhân viên văn phòng đã tìm thấy lỗi định giá [trong khi đối chiếu bản sao kê ngân hàng].",
			options: [
				"[Adverb Phrase]",
				"[Adverb Clause]"
			],
			correctAnswer: 0,
			explanation: "Morphology: [while reconciling the bank statement] - [Hiển-Liên Động Cụm][Connector Verb Phrase] structured as a reduced adverbial phrase containing a time conjunction and a gerund phrase. \n\n Function: [while reconciling the bank statement] - [Trạng Cụm][Adverb Phrase] modifying the main action \"found\" by establishing the exact accounting timeframe."
		},
		{
			id: 5,
			question: "[______] surprised the equity investors. \n [Việc doanh thu hàng năm của công ty tăng lên] đã làm các nhà đầu tư cổ phiếu ngạc nhiên.",
			options: [
				"[Noun Phrase]",
				"[Noun Clause]"
			],
			correctAnswer: 1,
			explanation: "Morphology: [That the company's annual revenue increased] - [Hiển-Liên Động Câu][Connector Verb Clause] containing a subordinate conjunction, a clear corporate subject, and an intransitive past tense verb. \n\n Function: [That the company's annual revenue increased] - [Danh Câu][Noun Clause] functioning as the complete grammatical subject that triggered the psychological reaction of the investors."
		},
		{
			id: 6,
			question: "We need an experienced consultant [______]. \n Chúng tôi cần một cố vấn có kinh nghiệm [để phân tích các tác động về thuế hàng quý].",
			options: [
				"[Adjective Phrase]",
				"[Adverb Phrase]"
			],
			correctAnswer: 0,
			explanation: "Morphology: [to analyze the quarterly tax implications] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] built from an infinitive structure that carries its own complex corporate object. \n\n Function: [to analyze the quarterly tax implications] - [Tính Cụm][Adjective Phrase] modifying the accounting professional noun \"consultant\" by identifying their specific intended responsibility."
		},
		{
			id: 7,
			question: "[______], the system rejected the reimbursement. \n [Bởi vì các khoản chi phí đi lại không được phép], hệ thống đã từ chối việc hoàn tiền.",
			options: [
				"[Adverb Phrase]",
				"[Adverb Clause]"
			],
			correctAnswer: 1,
			explanation: "Morphology: [Because the travel expenses were not authorized] - [Hiển-Liên Động Câu][Connector Verb Clause] utilizing a causal conjunction coupled with a complete financial subject and a passive voice verb structure. \n\n Function: [Because the travel expenses were not authorized] - [Trạng Câu][Adverb Clause] modifying the independent clause by providing the regulatory reason why the reimbursement failed."
		},
		{
			id: 8,
			question: "The modern software [______] requires an annual license update. \n Phần mềm hiện đại [được sử dụng để xử lý bảng lương] yêu cầu một bản cập nhật giấy phép hàng năm.",
			options: [
				"[Adjective Phrase]",
				"[Noun Phrase]"
			],
			correctAnswer: 0,
			explanation: "Morphology: [used for payroll processing] - [Hoàn Động Cụm][Perfect Verb Phrase] appearing as a post-modifying past participial phrase linked with a prepositional structure. \n\n Function: [used for payroll processing] - [Tính Cụm][Adjective Phrase] defining and restricting the meaning of the specific technical noun \"software\" being discussed."
		},
		{
			id: 9,
			question: "I [______]. \n Tôi [biết {những gì cô ấy đã ghi sổ}].",
			options: [
				"[Noun Phrase]",
				"[Tiered Noun Phrase]"
			],
			correctAnswer: 1,
			explanation: "Morphology: [know {what she recorded}] - [Thuần Động Cụm][Bare Verb Phrase] serving as the predicate of the matrix clause, which embeds a finite objective clause inside its boundaries. \n\n Function: [know {what she recorded}] - [Danh Cụm] Phân Tầng [Tiered Noun Phrase] where the outer verbal predicate level marked by [] encapsulates an inner objective noun clause marked by {} representing the bookkeeping data."
		},
		{
			id: 10,
			question: "The internal auditor asked [______]. \n Kiểm toán viên nội bộ đã hỏi [liệu sổ cái chung đã được cập nhật chưa].",
			options: [
				"[Noun Clause]",
				"[Adjective Clause]"
			],
			correctAnswer: 0,
			explanation: "Morphology: [whether the general ledger was updated] - [Hiển-Liên Động Câu][Connector Verb Clause] introduced by an interrogative subordinator followed by a passive financial clause layout. \n\n Function: [whether the general ledger was updated] - [Danh Câu][Noun Clause] completing the predicate of the sentence by acting as the direct noun object for the inquiry verb \"asked\"."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#matrix-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Bookkeeping Matrix</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
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