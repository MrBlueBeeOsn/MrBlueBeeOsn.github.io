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

export default function EVMatrixQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "the GIRL [SITting by the WINdow] is my COUSin. \n Cô gái [đang ngồi cạnh cửa sổ] là em họ của tôi.",
			options: [
				"[Noun Phrase]",
				"[Adjective Phrase]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [SITting by the WINdow] - [Tiếp Động Cụm][Progressive Verb Phrase] bắt đầu bằng đuôi -ing kèm các thành phần bổ khuyết để tạo thành một cụm hành vi chưa chia thời gian. \n\n Chức năng: [SITting by the WINdow] - [Tính Cụm][Adjective Phrase] đứng ngay sau để bổ nghĩa trực tiếp và định danh cho nhóm thành phần chỉ người \"the GIRL\"."
		},
		{
			id: 2,
			question: "[to LEARN a NEW LANGuage] reQUIres a LOT of PAtience. \n [Việc học một ngôn ngữ mới] đòi hỏi rất nhiều sự kiên nhẫn.",
			options: [
				"[Noun Phrase]",
				"[Adverb Phrase]"
			],
			correctAnswer: 0,
			explanation: "Hình thái: [to LEARN a NEW LANGuage] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] bắt đầu bằng dạng nguyên thể có \"to\" kèm các thành phần bổ khuyết để tạo thành một cụm hành vi chưa chia thời gian. \n\n Chức năng: [to LEARN a NEW LANGuage] - [Danh Cụm][Noun Phrase] đứng ở đầu câu để làm chủ thể cốt lõi thực hiện hành vi cho \"reQUIres\"."
		},
		{
			id: 3,
			question: "she ALways Opens the WINdow [to LET in some FRESH AIR]. \n Cô ấy luôn mở cửa sổ [để không khí trong lành bay vào].",
			options: [
				"[Adjective Phrase]",
				"[Adverb Phrase]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [to LET in some FRESH AIR] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] bắt đầu bằng dạng nguyên thể có \"to\" kèm các thành phần bổ khuyết để tạo thành một cụm hành vi chưa chia thời gian. \n\n Chức năng: [to LET in some FRESH AIR] - [Trạng Cụm][Adverb Phrase] bổ sung thông tin chỉ định mục đích hướng tới cho hành vi chính \"Opens\"."
		},
		{
			id: 4,
			question: "the BOOK [that you LENT me YESterday] is FAScinating. \n Cuốn sách [mà bạn cho tôi mượn ngày hôm qua] thật thú vị.",
			options: [
				"[Noun Clause]",
				"[Adjective Clause]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [that you LENT me YESterday] - [Liên Câu][Conjunctional Clause] bắt đầu bằng một thành phần kết nối đi kèm đầy đủ một chủ thể (you) và hành vi đã chia thời gian (LENT). \n\n Chức năng: [that you LENT me YESterday] - [Tính Câu][Adjective Clause] đứng sau để bổ nghĩa và hạn định đặc điểm cho nhóm thành phần chỉ vật \"the BOOK\"."
		},
		{
			id: 5,
			question: "i DON'T [KNOW {WHAT we should DO NEXT}]. \n Tôi không [biết {điều chúng ta nên làm tiếp theo}].",
			options: [
				"[Noun Phrase]",
				"[Tiered Noun Phrase]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [KNOW {WHAT we should DO NEXT}] - [Tầng Thuần Động Cụm][Bare Tiered Verb Phrase] chứa hành vi hạt nhân \"KNOW\" đi kèm thành phần bổ khuyết là một [Liên Câu][Conjunctional Clause] có cấu trúc chủ-hành vi hoàn chỉnh ở tầng trong {}. \n\n Chức năng: [KNOW {WHAT we should DO NEXT}] - [Danh Cụm] Phân Tầng [Tiered Noun Phrase] đóng vai trò cụm tiếp nhận lớn bên ngoài, chứa một danh câu làm thành phần tiếp nhận trực tiếp cho \"KNOW\" ở bên trong."
		},
		{
			id: 6,
			question: "they will LEAVE [as SOON as the RAIN STOPS]. \n Họ sẽ rời đi [ngay khi cơn mưa tạnh].",
			options: [
				"[Adjective Clause]",
				"[Adverb Clause]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [as SOON as the RAIN STOPS] - [Liên Câu][Conjunctional Clause] bắt đầu bằng thành phần kết nối đi kèm kết cấu chủ-hành vi hoàn chỉnh (the rain stops) đã chia thời gian. \n\n Chức năng: [as SOON as the RAIN STOPS] - [Trạng Câu][Adverb Clause] liên kết vào cấu trúc để xác định mốc thời gian diễn ra cho toàn bộ phần thông tin chính \"they will LEAVE\"."
		},
		{
			id: 7,
			question: "the [BROken] VASE could NOT be rePAIRed. \n Chiếc bình [bị vỡ] đã không thể sửa chữa được.",
			options: [
				"[Adjective Base]",
				"[Adjective Phrase]"
			],
			correctAnswer: 0,
			explanation: "Hình thái: [BROken] - [Hoàn Động Cơ][Perfect Verb Base] tồn tại ở hình thái biến đổi đuôi đặc biệt của thể hoàn thành đứng đơn lẻ, chưa phát triển thành cụm hay câu. \n\n Chức năng: [BROken] - [Tính Cơ][Adjective Base] nằm trước để nêu đặc điểm thực tế cho thành phần chỉ vật \"VASE\"."
		},
		{
			id: 8,
			question: "he MADE his YOUNGer BROTHer [CRY]. \n Anh ấy đã làm cho em trai mình [khóc].",
			options: [
				"[Noun Base]",
				"[Adjective Base]"
			],
			correctAnswer: 1,
			explanation: "Hình thái: [CRY] - [Thuần Động Cơ][Bare Verb Base] tồn tại ở hình thái dạng gốc nguyên thể không \"to\" đứng độc lập, chưa phát triển thêm thành phần bổ khuyết. \n\n Chức năng: [CRY] - [Tính Cơ][Adjective Base] bổ sung trạng thái chịu tác động trực tiếp cho phần tiếp nhận \"his YOUNGer BROTHer\" phía trước."
		},
		{
			id: 9,
			question: "the TEAM PRACticed HARD [to WIN] the CHAMpionship. \n Toàn đội đã luyện tập chăm chỉ [để giành được] chức vô địch.",
			options: [
				"[Adverb Base]",
				"[Adverb Phrase]"
			],
			correctAnswer: 0,
			explanation: "Hình thái: [to WIN] - [Hạt Thuần Động Cơ][Particle Bare Verb Base] xét riêng trong ngoặc là hình thái hạt nhân nguyên thể có \"to\" đứng đơn lẻ, không tính phần bổ khuyết phía sau. \n\n Chức năng: [to WIN] - [Trạng Cơ][Adverb Base] đưa vào cấu trúc nhằm nêu bật mục đích cốt lõi cho hành vi \"PRACticed HARD\"."
		},
		{
			id: 10,
			question: "[SMOking] is STRICTly proHIBited in this HOSpital. \n [Việc hút thuốc] bị nghiêm cấm hoàn toàn trong bệnh viện này.",
			options: [
				"[Noun Base]",
				"[Noun Phrase]"
			],
			correctAnswer: 0,
			explanation: "Hình thái: [SMOking] - [Tiếp Động Cơ][Progressive Verb Base] bắt đầu từ [Động Cơ] nguyên bản tồn tại ở hình thái đuôi -ing đứng hoàn toàn độc lập, chưa phát triển các thành phần bổ khuyết đi kèm. \n\n Chức năng: [SMOking] - [Danh Cơ][Noun Base] đóng vai trò chủ thể cốt lõi ở đầu câu để chịu sự tác động từ phần thông tin phía sau."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-matrix-quiz"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Hình thái × Chức năng Matrix</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>June 14, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};