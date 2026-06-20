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

export default function MatrixQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về English cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "[______] expands our narrow horizon. \n [Học hỏi mỗi ngày] mở rộng chân trời hạn hẹp của chúng ta.",
			options: [
				"[Noun Phrase]",
				"[Adjective Phrase]"
			],
			correctAnswer: 0,
			explanation: "Morphology: [To learn everyday] - Động Cụm [Verb Phrase] formed by combining the infinitive marker \"to\", the bare verb base \"learn\", and the adverbial modifier \"everyday\". \n\n Function: [To learn everyday] - Danh Cụm [Noun Phrase] occupies the subject position directly preceding the main predicate \"expands\", acting as the nominal head of the sentence."
		},
		{
			id: 2,
			question: "The [______] leaves covered the entire driveway. \n Những chiếc lá [đã rụng] phủ kín cả lối vào xe.",
			options: [
				"[Adjective Base]",
				"[Adverb Base]"
			],
			correctAnswer: 0,
			explanation: "Morphology: [fallen] - Động Cơ [Verb Base] formed by the bare past participle form of the verb \"fall\" without any auxiliary attachments. \n\n Function: [fallen] - Tính Cơ [Adjective Base] modifies and directly describes the head noun \"leaves\"."
		},
		{
			id: 3,
			question: "The heavy door flew [______] due to the strong wind. \n Cánh cửa nặng nề đã tung [mở] do cơn gió mạnh.",
			options: [
				"[Adjective Base]",
				"[Adverb Base]"
			],
			correctAnswer: 1,
			explanation: "Morphology: [open] - Động Cơ [Verb Base] originating from a bare verb base. \n\n Function: [open] - Trạng Cơ [Adverb Base] acts as a resultative complement modifying the verb \"flew\" to show the final state achieved by the action."
		},
		{
			id: 4,
			question: "[______] requires excellent communication skills. \n [Quản lý một đội ngũ quốc tế lớn] đòi hỏi kỹ năng giao tiếp xuất sắc.",
			options: [
				"[Noun Phrase]",
				"[Adjective Phrase]"
			],
			correctAnswer: 0,
			explanation: "Morphology: [Managing a large international team] - Động Cụm [Verb Phrase] formed by the gerund \"Managing\" and its direct object phrase \"a large international team\". \n\n Function: [Managing a large international team] - Danh Cụm [Noun Phrase] occupies the subject slot of the main verb \"requires\"."
		},
		{
			id: 5,
			question: "The book [______] became an overnight bestseller. \n Cuốn sách [được viết bởi vị giáo sư nổi tiếng] đã trở thành sách bán chạy nhất chỉ sau một đêm.",
			options: [
				"[Noun Phrase]",
				"[Adjective Phrase]"
			],
			correctAnswer: 1,
			explanation: "Morphology: [written by the famous professor] - Động Cụm [Verb Phrase] formed by the past participle \"written\" and its agentive prepositional phrase \"by the famous professor\". \n\n Function: [written by the famous professor] - Tính Cụm [Adjective Phrase] post-modifies and restricts the meaning of the head noun \"book\"."
		},
		{
			id: 6,
			question: "He stayed up all night [______]. \n Anh ấy đã thức cả đêm [để hoàn thành luận văn tốt nghiệp của mình].",
			options: [
				"[Noun Phrase]",
				"[Adverb Phrase]"
			],
			correctAnswer: 1,
			explanation: "Morphology: [to finish his graduation thesis] - Động Cụm [Verb Phrase] formed by the infinitive marker \"to\", the verb base \"finish\", and its direct object \"his graduation thesis\". \n\n Function: [to finish his graduation thesis] - Trạng Cụm [Adverb Phrase] modifies the matrix predicate \"stayed up\" by declaring the purpose behind the action."
		},
		{
			id: 7,
			question: "The clean laboratory [______] is highly secured. \n Phòng thí nghiệm sạch sẽ [nơi họ tiến hành các thí nghiệm y tế] được bảo mật rất cao.",
			options: [
				"[Adjective Clause]",
				"[Noun Clause]"
			],
			correctAnswer: 0,
			explanation: "Morphology: [where they conduct medical experiments] - Động Câu [Verb Clause] formed by the relative adverb \"where\" followed by a full clause containing the subject \"they\" and finite verb \"conduct\". \n\n Function: [where they conduct medical experiments] - Tính Câu [Adjective Clause] post-modifies and defines the spatial traits of the head noun \"laboratory\"."
		},
		{
			id: 8,
			question: "[______], they successfully completed the project. \n [Mặc dù đội ngũ phải đối mặt với việc cắt giảm ngân sách nghiêm trọng], họ đã hoàn thành dự án một cách thành công.",
			options: [
				"[Noun Clause]",
				"[Adverb Clause]"
			],
			correctAnswer: 1,
			explanation: "Morphology: [Although the team faced severe budget cuts] - Động Câu [Verb Clause] formed by the subordinating conjunction \"Although\" followed by a full clause containing the subject \"the team\" and finite verb \"faced\". \n\n Function: [Although the team faced severe budget cuts] - Trạng Câu [Adverb Clause] modifies the entire main clause by providing a situational context of concession."
		},
		{
			id: 9,
			question: "I [______]. \n Tôi [yêu thích việc {học các cấu trúc ngữ pháp phức tạp}].",
			options: [
				"[Noun Phrase]",
				"[Nested Noun Phrase]"
			],
			correctAnswer: 1,
			explanation: "Morphology: [love {learning complex grammar structures}] - Động Cụm [Verb Phrase] containing an outer finite verb \"love\" and an embedded non-finite gerund phrase layer \"{learning complex grammar structures}\". \n\n Function: [love {learning complex grammar structures}] - Danh Cụm Phân Tầng [Nested Noun Phrase] acts as the complete nominal predicate block, where the outer layer is a Danh Cụm [Noun Phrase] acting as the direct object of the subject \"I\", while nesting an internal secondary layer where the gerund phrase acts as an embedded Danh Cụm [Noun Phrase] serving as the direct object of \"love\"."
		},
		{
			id: 10,
			question: "The board members [______]. \n Các thành viên ban quản trị [đã đề xuất {rằng chúng ta hoãn lại việc kiểm toán công ty}].",
			options: [
				"[Nested Noun Phrase]",
				"[Noun Clause]"
			],
			correctAnswer: 0,
			explanation: "Morphology: [suggested {that we postpone the corporate audit}] - Động Cụm [Verb Phrase] containing an outer finite verb \"suggested\" and an embedded finite clause layer \"{that we postpone the corporate audit}\". \n\n Function: [suggested {that we postpone the corporate audit}] - Danh Cụm Phân Tầng [Nested Noun Phrase] acts as the primary nominal predicate block, where the outer layer forms a direct object phrase block, within which sits an embedded finite clause layer \"{that we postpone...}\", which is morphologically an Động Câu [Verb Clause] functioning as a Danh Câu [Noun Clause] acting as the direct object of the internal verb \"suggested\"."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#matrix-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Morphology × Function Matrix</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>June 14, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};