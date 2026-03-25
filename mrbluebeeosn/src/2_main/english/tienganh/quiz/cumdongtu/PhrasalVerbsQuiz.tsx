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

export default function PhrasalVerbsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Phrasal Verbs cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "After a long negotiation, the two companies finally decided to call off the merger. What does \"call off\" mean?",
			options: [
				"To announce",
				"To postpone",
				"To cancel",
				"To complete"
			],
			correctAnswer: 2,
			explanation: "Call off có nghĩa là hủy bỏ hoặc bãi bỏ một sự kiện đã được lên kế hoạch. (Sau một cuộc đàm phán dài, hai công ty cuối cùng đã quyết định hủy bỏ việc sáp nhập.)"
		},
		{
			id: 2,
			question: "She was very upset when her boyfriend decided to break up with her. What does \"break up\" mean?",
			options: [
				"To start a business",
				"To end a relationship",
				"To have a fight",
				"To feel confused"
			],
			correctAnswer: 1,
			explanation: "Break up (with someone) có nghĩa là chấm dứt một mối quan hệ tình cảm. (Cô ấy rất buồn khi bạn trai quyết định chia tay với cô ấy.)"
		},
		{
			id: 3,
			question: "The police are investigating how the suspect managed to get away from the custody. What does \"get away\" mean?",
			options: [
				"To confess",
				"To escape",
				"To arrive",
				"To surrender"
			],
			correctAnswer: 1,
			explanation: "Get away có nghĩa là trốn thoát hoặc thoát khỏi một nơi nào đó. (Cảnh sát đang điều tra xem nghi phạm đã trốn thoát khỏi sự giam giữ bằng cách nào.)"
		},
		{
			id: 4,
			question: "If you don't know the meaning of a word, you should look it up in a dictionary. What does \"look up\" mean in this context?",
			options: [
				"To admire",
				"To search for information",
				"To observe the sky",
				"To expect"
			],
			correctAnswer: 1,
			explanation: "Look up có nghĩa là tra cứu, tìm kiếm thông tin (như một từ, số điện thoại) trong sách tham khảo, từ điển, hoặc trên mạng. (Nếu bạn không biết nghĩa của một từ, bạn nên tra cứu nó trong từ điển.)"
		},
		{
			id: 5,
			question: "Please turn down the music; it's too loud and I can't concentrate. What does \"turn down\" mean here?",
			options: [
				"To increase the volume",
				"To refuse an offer",
				"To reduce the volume",
				"To flip upside down"
			],
			correctAnswer: 2,
			explanation: "Turn down có nghĩa là giảm âm lượng, nhiệt độ, hoặc mức độ của một thiết bị. (Làm ơn giảm nhỏ nhạc đi; nó quá to và tôi không thể tập trung.)"
		},
		{
			id: 6,
			question: "I'm trying to give up eating fast food because I want to be healthier. What does \"give up\" mean?",
			options: [
				"To start a new habit",
				"To continue",
				"To stop doing something",
				"To try harder"
			],
			correctAnswer: 2,
			explanation: "Give up có nghĩa là từ bỏ, ngưng làm hoặc ngừng thói quen gì đó. (Tôi đang cố gắng từ bỏ việc ăn đồ ăn nhanh vì tôi muốn khỏe mạnh hơn.)"
		},
		{
			id: 7,
			question: "We need to set up a meeting next week to discuss the new project. What does \"set up\" mean?",
			options: [
				"To clean",
				"To arrange or establish",
				"To finish",
				"To review"
			],
			correctAnswer: 1,
			explanation: "Set up có nghĩa là sắp xếp, thành lập hoặc tổ chức (một cuộc họp, một doanh nghiệp, một hệ thống). (Chúng ta cần sắp xếp một cuộc họp vào tuần tới để thảo luận về dự án mới.)"
		},
		{
			id: 8,
			question: "He didn't know the answer, so he decided to make up a story. What does \"make up\" mean in this sentence?",
			options: [
				"To apply cosmetics",
				"To invent or fabricate",
				"To forgive",
				"To reconcile"
			],
			correctAnswer: 1,
			explanation: "Make up có nghĩa là bịa đặt, sáng tạo, hoặc tạo ra một câu chuyện, lời giải thích không có thật. (Anh ấy không biết câu trả lời, vì vậy anh ấy quyết định bịa ra một câu chuyện.)"
		},
		{
			id: 9,
			question: "Remember to put on your seatbelt before you start driving. What does \"put on\" mean?",
			options: [
				"To take off",
				"To discard",
				"To wear or dress oneself in",
				"To postpone"
			],
			correctAnswer: 2,
			explanation: "Put on có nghĩa là mặc quần áo, đội mũ, hoặc đeo thứ gì đó lên người. (Hãy nhớ thắt dây an toàn trước khi bạn bắt đầu lái xe.)"
		},
		{
			id: 10,
			question: "If you keep working hard, you will eventually catch up with your classmates in terms of performance. What does \"catch up (with)\" mean?",
			options: [
				"To stay behind",
				"To reach the same level as",
				"To compete against",
				"To criticize"
			],
			correctAnswer: 1,
			explanation: "Catch up (with) có nghĩa là bắt kịp, theo kịp ai đó hoặc đạt được cùng mức độ, tiêu chuẩn với người khác. (Nếu bạn tiếp tục làm việc chăm chỉ, cuối cùng bạn sẽ bắt kịp các bạn cùng lớp về mặt thành tích.)"
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tieng-anh#cum-dong-tu-basic-practice"><mark className="highlight-tertiary-padding-4-8">Phrasal Verbs</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Phrasal Verbs</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental phrasal verbs</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 10, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};