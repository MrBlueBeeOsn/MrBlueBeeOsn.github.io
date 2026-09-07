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
			question: "[to LEARN EVERyday] exPANDS our NARrow hoRIzon. \n [Học hỏi mỗi ngày] mở rộng chân trời hạn hẹp của chúng ta.",
			options: [
				"[NOUN PHRASE]",
				"[ADjective PHRASE]"
			],
			correctAnswer: 0,
			explanation: "Form: [to LEARN EVERyday] - [PARTicle BARE VERB PHRASE][HẠT THUẦN ĐỘNG CỤM] formed by combining the infinitive marker \"to\", the bare verb base \"LEARN\", and the adverbial modifier \"EVERyday\". \n\n Function: [to LEARN EVERyday] - [NOUN PHRASE][DANH CỤM] occupies the subject position directly preceding the main predicate \"exPANDS\", acting as the nominal head of the sentence."
		},
		{
			id: 2,
			question: "the [FALlen] LEAVES COVered the enTIre DRIVEway. \n Những chiếc lá [đã rụng] phủ kín cả lối vào xe.",
			options: [
				"[ADjective BASE]",
				"[ADverb BASE]"
			],
			correctAnswer: 0,
			explanation: "Form: [FALlen] - [PERfect VERB BASE][HOÀN ĐỘNG CƠ] formed by the bare past participle form of the verb \"FALL\" without any auxiliary attachments. \n\n Function: [FALlen] - [ADjective BASE][TÍNH CƠ] modifies and directly describes the head noun \"LEAVES\"."
		},
		{
			id: 3,
			question: "the HEAVy DOOR FLEW [Open] due to the STRONG WIND. \n Cánh cửa nặng nề đã tung [mở] do cơn gió mạnh.",
			options: [
				"[ADjective BASE]",
				"[ADverb BASE]"
			],
			correctAnswer: 1,
			explanation: "Form: [Open] - [BARE VERB BASE][THUẦN ĐỘNG CƠ] originating from a bare verb base. \n\n Function: [Open] - [ADverb BASE][TRẠNG CƠ] acts as a resultative complement modifying the verb \"FLEW\" to show the final state achieved by the action."
		},
		{
			id: 4,
			question: "[MANaging a LARGE interNATional TEAM] reQUIres EXcellent communiCAtion SKILLS. \n [Quản lý một đội ngũ quốc tế lớn] đòi hỏi kỹ năng giao tiếp xuất sắc.",
			options: [
				"[NOUN PHRASE]",
				"[ADjective PHRASE]"
			],
			correctAnswer: 0,
			explanation: "Form: [MANaging a LARGE interNATional TEAM] - [proGRESSive VERB PHRASE][TIẾP ĐỘNG CỤM] formed by the gerund \"MANaging\" and its direct object phrase \"a LARGE interNATional TEAM\". \n\n Function: [MANaging a LARGE interNATional TEAM] - [NOUN PHRASE][DANH CỤM] occupies the subject slot of the main verb \"reQUIres\"."
		},
		{
			id: 5,
			question: "the BOOK [WRITten by the FAmous proFESsor] beCAME an overNIGHT bestSELler. \n Cuốn sách [được viết bởi vị giáo sư nổi tiếng] đã trở thành sách bán chạy nhất chỉ sau một đêm.",
			options: [
				"[NOUN PHRASE]",
				"[ADjective PHRASE]"
			],
			correctAnswer: 1,
			explanation: "Form: [WRITten by the FAmous proFESsor] - [PERfect VERB PHRASE][HOÀN ĐỘNG CỤM] formed by the past participle \"WRITten\" and its agentive prepositional phrase \"by the FAmous proFESsor\". \n\n Function: [WRITten by the FAmous proFESsor] - [ADjective PHRASE][TÍNH CỤM] post-modifies and restricts the meaning of the head noun \"BOOK\"."
		},
		{
			id: 6,
			question: "he stayED UP ALL NIGHT [to FINish his gradUAtion THEsis]. \n Anh ấy đã thức cả đêm [để hoàn thành luận văn tốt nghiệp của mình].",
			options: [
				"[NOUN PHRASE]",
				"[Adverb Phrase]"
			],
			correctAnswer: 1,
			explanation: "Form: [to FINish his gradUAtion THEsis] - [PARTicle BARE VERB PHRASE][HẠT THUẦN ĐỘNG CỤM] formed by the infinitive marker \"to\", the verb base \"FINish\", and its direct object \"his gradUAtion THEsis\". \n\n Function: [to FINish his gradUAtion THEsis] - [ADverb PHRASE][TRẠNG CỤM] modifies the matrix predicate \"stayED UP\" by declaring the purpose behind the action."
		},
		{
			id: 7,
			question: "the CLEAN LABORatory [where they conDUCT MEDical exPERiments] is HIGHly seCURED. \n Phòng thí nghiệm sạch sẽ [nơi họ tiến hành các thí nghiệm y tế] được bảo mật rất cao.",
			options: [
				"[ADjective CLAUSE]",
				"[NOUN CLAUSE]"
			],
			correctAnswer: 0,
			explanation: "Form: [where they conDUCT MEDical exPERiments] - [conJUNCtional CLAUSE][LIÊN CÂU] formed by the relative adverb \"where\" followed by a full clause containing the subject \"they\" and finite verb \"conDUCT\". \n\n Function: [where they conDUCT MEDical exPERiments] - [ADjective CLAUSE][TÍNH CÂU] post-modifies and defines the spatial traits of the head noun \"LABORatory\"."
		},
		{
			id: 8,
			question: "[although the TEAM FACED seVERE BUDget CUTS], they sucCESSfully comPLEted the PRODuct. \n [Mặc dù đội ngũ phải đối mặt với việc cắt giảm ngân sách nghiêm trọng], họ đã hoàn thành dự án một cách thành công.",
			options: [
				"[NOUN CLAUSE]",
				"[Adverb Clause]"
			],
			correctAnswer: 1,
			explanation: "Form: [although the TEAM FACED seVERE BUDget CUTS] - [conJUNCtional CLAUSE][LIÊN CÂU] formed by the subordinating conjunction \"although\" followed by a full clause containing the subject \"the TEAM\" and finite verb \"FACED\". \n\n Function: [although the TEAM FACED seVERE BUDget CUTS] - [ADverb CLAUSE][TRẠNG CÂU] modifies the entire main clause by providing a situational context of concession."
		},
		{
			id: 9,
			question: "i [LOVE {LEARNing COMplex GRAMmar STRUCtures}]. \n Tôi [yêu thích việc {học các cấu trúc ngữ pháp phức tạp}].",
			options: [
				"[NOUN PHRASE]",
				"[TIERed NOUN PHRASE]"
			],
			correctAnswer: 1,
			explanation: "Form: [LOVE {LEARNing COMplex GRAMmar STRUCtures}] - [TIERed NOUN PHRASE][TẦNG ĐỘNG CỤM] containing an outer finite verb \"love\" and an embedded non-finite gerund phrase layer \"{LEARNing COMplex GRAMmar STRUCtures}\". \n\n Function: [LOVE {LEARNing COMplex GRAMmar STRUCtures}] - [TIERed NOUN PHRASE][TẦNG DANH CỤM] acts as the complete nominal predicate block, where the outer layer is a [NOUN PHRASE][DANH CỤM] acting as the direct object of the subject \"i\", while nesting an internal secondary layer where the gerund phrase acts as an embedded [NOUN PHRASE][DANH CỤM] serving as the direct object of \"LOVE\"."
		},
		{
			id: 10,
			question: "the BOARD MEMbers [sugGESTed {that we postPONE the CORporate AUdit}]. \n Các thành viên ban quản trị [đã đề xuất {rằng chúng ta hoãn lại việc kiểm toán công ty}].",
			options: [
				"[TIERed NOUN PHRASE]",
				"[NOUN CLAUSE]"
			],
			correctAnswer: 0,
			explanation: "Form: [sugGESTed {that we postPONE the CORporate AUdit}] - [TIERed NOUN PHRASE][TẦNG ĐỘNG CỤM] containing an outer finite verb \"sugGESTed\" and an embedded finite clause layer \"{that we postPONE the CORporate AUdit}\". \n\n Function: [sugGESTed {that we postPONE the CORporate AUdit}] - [TIERed NOUN PHRASE][TẦNG DANH CỤM] acts as the primary nominal predicate block, where the outer layer forms a direct object phrase block, within which sits an embedded finite clause layer \"{that we postPONE...}\", which is morphologically an [conJUNCtional CLAUSE][LIÊN CÂU] functioning as a [NOUN CLAUSE][DANH CÂU] acting as the direct object of the internal verb \"sugGESTed\"."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#matrix-quiz"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Form × Function Matrix</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental English concepts</p>
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