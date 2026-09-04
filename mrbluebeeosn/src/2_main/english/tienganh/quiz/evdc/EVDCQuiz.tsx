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

export default function EVDCQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "i DON'T KNOW _______ she is PLANning to inVITE to the PARTy.",
			options: [
				"who",
				"whom",
				"whose",
				"which"
			],
			correctAnswer: 1,
			explanation: "Cụm từ \"whom she is PLANning to inVITE to the PARTy\" là một Noun Clause (Danh câu) làm danh nhận cho hành động \"KNOW \". Trong câu con phụ này, \"she\" là danh chủ và hành động \"inVITE\" cần một danh nhận chỉ người đứng trước, do đó ta dùng \"whom\" thay vì \"who\" (làm danh chủ)."
		},
		{
			id: 2,
			question: "the BOOK _______ you LENT me YESterday was absoLUTEly FAScinating.",
			options: [
				"who",
				"whom",
				"that",
				"what"
			],
			correctAnswer: 2,
			explanation: "Cụm \"that you LENT me YESterday\" là một Adjective Clause (Câu con tính ngữ/quan hệ) bổ nghĩa cho Danh Cơ chỉ vật \"the BOOK\". Ta dùng đại cơ quan hệ \"that\" (hoặc \"which\") làm danh nhận thay thế cho vật. \"what\" không đứng sau Danh Cơ để bổ nghĩa như vậy."
		},
		{
			id: 3,
			question: "_______ he WORKED HARD all DAY, he COULDn't FINish the rePORT on TIME.",
			options: [
				"because",
				"although",
				"since",
				"despite"
			],
			correctAnswer: 1,
			explanation: "Cụm \"although he WORKED HARD all DAY\" là một Adverb Clause of Concession (Trạng câu chỉ sự nhượng bộ). Ta chọn \"although\" vì phía sau là một câu con hoàn chỉnh (s + V) và mang ý nghĩa tương phản. \"despite\" cũng mang nghĩa tương tự nhưng chỉ đi với danh cụm hoặc V-ing."
		},
		{
			id: 4,
			question: "the REAson _______ she LEFT EARly was NEVer exPLAINED.",
			options: [
				"why",
				"because",
				"which",
				"where"
			],
			correctAnswer: 0,
			explanation: "Cụm \"why she LEFT EARly\" là một Adjective Clause bổ nghĩa cho Danh Cơ \"the REAson\". Trạng Cơ quan hệ \"why\" được dùng để chỉ lý do cho Danh Cơ đứng trước nó."
		},
		{
			id: 5,
			question: "you can SIT _______ you LIKE in the audiTORium.",
			options: [
				"whatever",
				"wherever",
				"whenever",
				"however"
			],
			correctAnswer: 1,
			explanation: "Cụm \"wherever you LIKE\" là một Adverb Clause of Place (Trạng câu chỉ nơi chốn). \"wherever\" có nghĩa là \"bất cứ nơi nào\", phù hợp nhất với ngữ cảnh chọn vị trí chỗ ngồi trong khán phòng."
		},
		{
			id: 6,
			question: "the DOCtor recomMENDed that he _______ a FEW DAYS OFF from WORK.",
			options: [
				"TAKES",
				"TAKE",
				"TOOK",
				"TAking"
			],
			correctAnswer: 1,
			explanation: "Cụm \"that he TAKE a FEW DAYS OFF...\" là một Noun Clause đi sau hành động mang tính cầu khiến \"recomMENDed\". Đây là cấu trúc giả định (subJUNCtive MOOD), hành động trong câu con \"that\" bắt buộc phải ở dạng nguyên mẫu không \"to\" cho tất cả các ngôi (he TAKE)."
		},
		{
			id: 7,
			question: "the LAPtop, _______ BATtery LIFE is aMAzing, beLONGS to my SISter.",
			options: [
				"which",
				"that",
				"whose",
				"whom"
			],
			correctAnswer: 2,
			explanation: "Cụm \"whose BATtery LIFE is aMAzing\" là một Adjective Clause (câu con quan hệ không xác định). \"whose\" là đại cơ quan hệ chỉ sự sở hữu, thay thế cho cụm \"the LAPtop's BATtery LIFE\"."
		},
		{
			id: 8,
			question: "she ACTS as if she _______ the BOSS of this COMpany.",
			options: [
				"is",
				"was",
				"were",
				"has been"
			],
			correctAnswer: 2,
			explanation: "Cụm \"as if she were the BOSS ...\" là một Adverb Clause of Manner (Trạng câu chỉ cách thức) chứa cấu trúc giả định với \"as if\" (như thể là). Vì thực tế cô ấy không phải là sếp (trái thực tế ở hiện tại), hành động \"to be\" được chia thành \"were\" cho tất cả các ngôi."
		},
		{
			id: 9,
			question: "_______ WINS the compeTITion will reCEIVE a CASH PRIZE.",
			options: [
				"who",
				"whoever",
				"anyone",
				"someone"
			],
			correctAnswer: 1,
			explanation: "Toàn bộ cụm \"whoever WINS the compeTITion\" đóng vai trò là một Noun Clause làm danh chủ chính cho hành động \"will reCEIVE\". \"whoever\" (bất cứ ai) vừa làm từ nối vừa làm danh chủ cho hành động \"WINS\" bên trong câu con phụ. Nếu chọn \"anyone\", ta phải có thêm \"who\" (anyone who WINS...)."
		},
		{
			id: 10,
			question: "we STAYED inSIDE _______ it STARTed RAINing HEAVily.",
			options: [
				"as SOON as",
				"until",
				"unless",
				"although"
			],
			correctAnswer: 0,
			explanation: "Cụm \"as SOON as it STARTed RAINing HEAVily\" là một Adverb Clause of Time (Trạng câu chỉ thời gian). Liên cơ \"as SOON as\" (ngay khi) giúp câu diễn đạt đúng logic: hành động \"ở trong nhà\" diễn ra ngay tại thời điểm \"trời bắt đầu mưa to\"."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#ev-dc-quiz"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm DC</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>May 23, 2023 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};