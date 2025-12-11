// TiengAnhPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import EnglishPracticeQuiz from '../../../../../../components/quiz/EnglishPracticeQuiz';

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

export default function TracNghiemThiTiengAnh(): React.JSX.Element {
	// Danh sách câu hỏi về Tenses cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "She _ to the gym three times a week.",
			options: [
				"is going",
				"goes",
				"went",
				"has gone"
			],
			correctAnswer: 1,
			explanation: "Đây là hành động lặp đi lặp lại (thói quen), được diễn tả bằng trạng từ chỉ tần suất \"three times a week\". Ta sử dụng thì Hiện tại đơn (Simple Present)."
		},
		{
			id: 2,
			question: "When the phone rang, I _ a shower.",
			options: [
				"took",
				"was taking",
				"take",
				"have taken"
			],
			correctAnswer: 1,
			explanation: "Hành động tắm đang diễn ra (dài hơn) thì bị một hành động khác (điện thoại reo) cắt ngang. Hành động đang diễn ra sử dụng thì Quá khứ tiếp diễn (Past Continuous)."
		},
		{
			id: 3,
			question: "By the time we arrive at the airport, the plane _.",
			options: [
				"leaves",
				"will leave",
				"is leaving",
				"will have left"
			],
			correctAnswer: 3,
			explanation: "Hành động máy bay cất cánh sẽ hoàn thành trước một thời điểm hoặc một hành động khác trong tương lai (khi chúng ta đến sân bay). Ta sử dụng thì Tương lai hoàn thành (Future Perfect)."
		},
		{
			id: 4,
			question: "They _ here since 2010.",
			options: [
				"live",
				"lived",
				"are living",
				"have lived"
			],
			correctAnswer: 3,
			explanation: "Hành động sống bắt đầu trong quá khứ (2010) và vẫn tiếp tục đến hiện tại (có \"since\"). Ta sử dụng thì Hiện tại hoàn thành (Present Perfect)."
		},
		{
			id: 5,
			question: "Look! The sun _ so brightly.",
			options: [
				"shines",
				"is shining",
				"shone",
				"has shone"
			],
			correctAnswer: 1,
			explanation: "Hành động đang diễn ra tại thời điểm nói, thường đi kèm với các từ như \"Look!\" hoặc \"Listen!\". Ta sử dụng thì Hiện tại tiếp diễn (Present Continuous)."
		},
		{
			id: 6,
			question: "Before he went to bed, he _ his homework.",
			options: [
				"does",
				"did",
				"had done",
				"was doing"
			],
			correctAnswer: 2,
			explanation: "Hành động hoàn thành bài tập xảy ra và hoàn tất trước một hành động khác trong quá khứ (đi ngủ). Hành động xảy ra trước sử dụng thì Quá khứ hoàn thành (Past Perfect)."
		},
		{
			id: 7,
			question: "This time tomorrow, I _ on a beach in Hawaii.",
			options: [
				"will lie",
				"am lying",
				"will be lying",
				"lie"
			],
			correctAnswer: 2,
			explanation: "Hành động đang diễn ra tại một thời điểm cụ thể trong tương lai (\"This time tomorrow\"). Ta sử dụng thì Tương lai tiếp diễn (Future Continuous)."
		},
		{
			id: 8,
			question: "I _ my key, so I can't open the door.",
			options: [
				"lose",
				"lost",
				"have lost",
				"had lost"
			],
			correctAnswer: 2,
			explanation: "Hành động làm mất chìa khóa xảy ra trong quá khứ nhưng có kết quả/ảnh hưởng rõ rệt đến hiện tại (không mở được cửa). Ta sử dụng thì Hiện tại hoàn thành (Present Perfect)."
		},
		{
			id: 9,
			question: "How long _ the piano before you started taking singing lessons?",
			options: [
				"do you play",
				"did you play",
				"were you playing",
				"had you been playing"
			],
			correctAnswer: 3,
			explanation: "Hành động chơi piano diễn ra liên tục, kéo dài đến một thời điểm trong quá khứ (trước khi bắt đầu học hát). Ta sử dụng thì Quá khứ hoàn thành tiếp diễn (Past Perfect Continuous)."
		},
		{
			id: 10,
			question: "If the weather is good, we _ for a picnic next weekend.",
			options: [
				"go",
				"went",
				"will go",
				"are going"
			],
			correctAnswer: 2,
			explanation: "Hành động sẽ xảy ra trong tương lai (next weekend) và không có kế hoạch hay sắp xếp cụ thể. Ta sử dụng thì Tương lai đơn (Simple Future)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#tenses-basic-practice"><mark className="highlight-tertiary-padding-4-8">Tenses</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">English Tense Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English Tenses</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 11, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};