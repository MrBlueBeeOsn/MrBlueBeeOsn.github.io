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
			question: "after a LONG neGOtiation, the TWO COMpanies FINally deCIded to call OFF the MERger. WHAT does \"call OFF\" MEAN?",
			options: [
				"to anNOUNCE",
				"to postPONE",
				"to CANcel",
				"to comPLETE"
			],
			correctAnswer: 2,
			explanation: "call OFF có nghĩa là hủy bỏ hoặc bãi bỏ một sự kiện đã được lên kế hoạch. (Sau một cuộc đàm phán dài, hai công ty cuối cùng đã quyết định hủy bỏ việc sáp nhập.)"
		},
		{
			id: 2,
			question: "she was VERy upSET when her BOYfriend deCIded to break UP with her. WHAT does \"break UP\" MEAN?",
			options: [
				"to START a BUSINess",
				"to END a reLAtionship",
				"to have a FIGHT",
				"to FEEL conFUSED"
			],
			correctAnswer: 1,
			explanation: "break UP (with SOMEone) có nghĩa là chấm dứt một mối quan hệ tình cảm. (Cô ấy rất buồn khi bạn trai quyết định chia tay với cô ấy.)"
		},
		{
			id: 3,
			question: "the poLICE are inVESTigating HOW the SUSpect MANaged to get aWAY from the CUStody. WHAT does \"get aWAY\" MEAN?",
			options: [
				"to conFESS",
				"to esCAPE",
				"to arRIVE",
				"to surRENder"
			],
			correctAnswer: 1,
			explanation: "get aWAY có nghĩa là trốn thoát hoặc thoát khỏi một nơi nào đó. (Cảnh sát đang điều tra xem nghi phạm đã trốn thoát khỏi sự giam giữ bằng cách nào.)"
		},
		{
			id: 4,
			question: "if you DON'T KNOW the MEANing of a WORD, you should look it UP in a DICtionary. WHAT does \"look UP\" MEAN in this CONtext?",
			options: [
				"to adMIre",
				"to SEARCH for inforMAtion",
				"to obSERVE the SKY",
				"to exPECT"
			],
			correctAnswer: 1,
			explanation: "look UP có nghĩa là tra cứu, tìm kiếm thông tin (như một từ, số điện thoại) trong sách tham khảo, từ điển, hoặc trên mạng. (Nếu bạn không biết nghĩa của một từ, bạn nên tra cứu nó trong từ điển.)"
		},
		{
			id: 5,
			question: "PLEASE turn DOWN the MUsic; it's TOO LOUD and i CAN'T CONcentrate. WHAT does \"turn DOWN\" MEAN HERE?",
			options: [
				"to inCREASE the VOLume",
				"to reFUSE an OFFer",
				"to reDUCE the VOLume",
				"to FLIP UPside DOWN"
			],
			correctAnswer: 2,
			explanation: "turn DOWN có nghĩa là giảm âm lượng, nhiệt độ, hoặc mức độ của một thiết bị. (Làm ơn giảm nhỏ nhạc đi; nó quá to và tôi không thể tập trung.)"
		},
		{
			id: 6,
			question: "i'm TRYing to give UP EATing FAST FOOD because i WANT to be HEALTHier. WHAT does \"give UP\" MEAN?",
			options: [
				"to START a NEW HABit",
				"to conTINue",
				"to STOP DOing SOMEthing",
				"to TRY HARDer"
			],
			correctAnswer: 2,
			explanation: "give UP có nghĩa là từ bỏ, ngưng làm hoặc ngừng thói quen gì đó. (Tôi đang cố gắng từ bỏ việc ăn đồ ăn nhanh vì tôi muốn khỏe mạnh hơn.)"
		},
		{
			id: 7,
			question: "we NEED to set UP a MEETing NEXT WEEK to disCUSS the NEW PROJect. WHAT does \"set UP\" MEAN?",
			options: [
				"to CLEAN",
				"to arRANGE or esTABlish",
				"to FINish",
				"to reVIEW"
			],
			correctAnswer: 1,
			explanation: "set UP có nghĩa là sắp xếp, thành lập hoặc tổ chức (một cuộc họp, một doanh nghiệp, một hệ thống). (Chúng ta cần sắp xếp một cuộc họp vào tuần tới để thảo luận về dự án mới.)"
		},
		{
			id: 8,
			question: "he DIDn't KNOW the ANswer, so he deCIDed to make UP a STORy. WHAT does \"make UP\" MEAN in this SENtence?",
			options: [
				"to apPLY cosMETics",
				"to inVENT or FABricate",
				"to forGIVE",
				"to REConcile"
			],
			correctAnswer: 1,
			explanation: "make UP có nghĩa là bịa đặt, sáng tạo, hoặc tạo ra một câu chuyện, lời giải thích không có thật. (Anh ấy không biết câu trả lời, vì vậy anh ấy quyết định bịa ra một câu chuyện.)"
		},
		{
			id: 9,
			question: "reMEMber to put ON your SEATbelt before you START DRIving. WHAT does \"put ON\" MEAN?",
			options: [
				"to take OFF",
				"to disCARD",
				"to WEAR or DRESS oneSELF in",
				"to postPONE"
			],
			correctAnswer: 2,
			explanation: "put ON có nghĩa là mặc quần áo, đội mũ, hoặc đeo thứ gì đó lên người. (Hãy nhớ thắt dây an toàn trước khi bạn bắt đầu lái xe.)"
		},
		{
			id: 10,
			question: "if you KEEP WORKing HARD, you will eVENtuallly catch UP with your CLASSmates in TERMS of perFORmance. WHAT does \"catch UP (with)\" MEAN?",
			options: [
				"to stay beHIND",
				"to REACH the SAME LEVel as",
				"to comPETE aGAINST",
				"to CRITicize"
			],
			correctAnswer: 1,
			explanation: "catch UP (with) có nghĩa là bắt kịp, theo kịp ai đó hoặc đạt được cùng mức độ, tiêu chuẩn với người khác. (Nếu bạn tiếp tục làm việc chăm chỉ, cuối cùng bạn sẽ bắt kịp các bạn cùng lớp về mặt thành tích.)"
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
						<span>December 10, 2025 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};