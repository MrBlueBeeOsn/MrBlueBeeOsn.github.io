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

export default function TOEICPractice(): React.JSX.Element {
	// Danh sách câu hỏi về TOEIC cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "the NEWly apPOINTed MANager is exPECTed to ______ sigNIFicant CHANges to the COMpany's MARketing STRATegy.",
			options: [
				"IMplement",
				"implemenTAtion",
				"IMplementing",
				"IMplemented"
			],
			correctAnswer: 0,
			explanation: "The sentence requires a base verb (V1) to follow the auxiliary structure \"is exPECTed to\". This is part of the passive infinitive form: SUBject + is/am/are + exPECTed + to + V1. The base form of the verb is \"IMplement\"."
		},
		{
			id: 2,
			question: "the COMpany is OFfering a conSIDerable ______ to CUScomers who PAY for the ANnual subSCRIPtion in adVANCE.",
			options: [
				"DIScount",
				"disPOsable",
				"disCHARGE",
				"DIStance"
			],
			correctAnswer: 0,
			explanation: "The noun that fits the business context of paying less for a product or service is \"DIScount\". \"disPOsable,\" \"disCHARGE,\" and \"DIStance\" do not fit the meaning."
		},
		{
			id: 3,
			question: "since the MERger, Ms. LEE has been priMARily reSPONsible ______ overSEEing the inteGRAtion of the TWO SALES TEAMS.",
			options: [
				"at",
				"with",
				"for",
				"on"
			],
			correctAnswer: 2,
			explanation: "The correct and fixed prepositional phrase is \"reSPONsible for\". This phrase means 'having the DUty of TAking CARE of SOMEthing or having conTROL over SOMEone'."
		},
		{
			id: 4,
			question: "all emPLOYees must atTEND the ______ TRAINing SESsion SCHEDuled for NEXT MONday.",
			options: [
				"CApable",
				"MANdatory",
				"SPAcious",
				"CONfident"
			],
			correctAnswer: 1,
			explanation: "The word \"MANdatory\" (adjective) means 'required by law or rule; compulsory'. This fits the context of a session that all employees 'must attend'."
		},
		{
			id: 5,
			question: "if you have any QUESTions reGARDing your inSURance POLicy, PLEASE ______ a repreSENtative imMEdiately.",
			options: [
				"CONtact",
				"CONtacting",
				"CONtacted",
				"CONtacts"
			],
			correctAnswer: 0,
			explanation: "This is an imperative sentence (a comMAND or reQUEST) which requires the base form of the verb without a subject."
		},
		{
			id: 6,
			question: "the ______ LAUNCH of the NEW SOFTware was LARGEly due to the TIREless EFforts of the deVELopment TEAM.",
			options: [
				"sucCEED",
				"sucCESSful",
				"sucCESSfully",
				"sucCESSion"
			],
			correctAnswer: 1,
			explanation: "The blank requires an adjective (sucCESSful) to modify the noun \"launch.\" \"Succeed\" is a verb, \"sucCESSfully\" is an adverb, and \"sucCESSion\" is an unrelated noun."
		},
		{
			id: 7,
			question: "we are CURrently SEEKing a HIGHly ______ CANdidate to FILL the poSITion of CHIEF fiNANcial OFficer.",
			options: [
				"QUALify",
				"QUALity",
				"QUALified",
				"qualifiCAtion"
			],
			correctAnswer: 2,
			explanation: "The blank requires a past participle functioning as an adjective to describe the candidate. \"QUALified\" means 'ofFICially RECognized as being TRAINED to perFORM a parTICular JOB'."
		},
		{
			id: 8,
			question: "the FInal rePORT was comPILED by the MARketing TEAM, but it had to be signed ______ by the CEO before publiCAtion.",
			options: [
				"OFF",
				"Over",
				"UNder",
				"UP"
			],
			correctAnswer: 0,
			explanation: "The correct phrasal verb is \"signed OFF\" (meaning 'GIVE one's ofFICial apPROval or authoriZAtion'). This fits the context that the CEO must approve the report before it can be published."
		},
		{
			id: 9,
			question: "the SEMinar was TEMporarily ______ due to the unexPECted dePARture of the KEYnote SPEAKer.",
			options: [
				"imPOSED",
				"supPOSED",
				"disCLOSED",
				"postPONED"
			],
			correctAnswer: 3,
			explanation: "The word that means 'to cause or arrange for something to happen at a later time' is \"postPONED\". This fits the context that the seminar was delayed because the speaker left unexpectedly. \"imPOSED\" means to force a rule/tax; \"supPOSED\" means generally thought to be or required to; \"disCLOSED\" means revealed."
		},
		{
			id: 10,
			question: "the COMpany NEEds to STREAMline its opeRAtions to reDUCE COSTS and ______ efFICiency.",
			options: [
				"inCREAsing",
				"inCREASE",
				"to inCREAsing",
				"inCREASED",
			],
			correctAnswer: 1,
			explanation: "The sentence requires a parallel structure with the previous verb \"reDUCE\" within the infinitive phrase \"to reDUCE COSTS and inCREASE efFICiency.\" The phrase \"to reDUCE COSTS and inCREASE efFICiency\" links the two base verbs using the conjunction \"and.\""
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#toeic-basic-practice"><mark className="highlight-tertiary-padding-4-8">TOEIC</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">TOEIC Practice</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental TOEIC concepts</p>
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