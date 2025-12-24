// BookkeepingPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import BookkeepingPracticeQuiz from '../../../components/quiz/BookkeepingPracticeQuiz';

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

export default function QuestionsandAnswers(): React.JSX.Element {
	// Danh sách câu hỏi về Bookkeeping cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "What is the fundamental accounting equation that forms the basis of the double-entry system?",
			options: [
				"Revenue - Expenses = Profit",
				"Assets = Liabilities + Owner's Equity",
				"Debit = Credit",
				"Assets + Liabilities = Equity"
			],
			correctAnswer: 1,
			explanation: "This equation represents the relationship between a company's assets (what it owns) and the claims against those assets (what it owes to others or to its owners)."
		},
		{
			id: 2,
			question: "In the double-entry bookkeeping system, every transaction must affect at least how many accounts?",
			options: [
				"One",
				"Two",
				"Three",
				"Four"
			],
			correctAnswer: 1,
			explanation: "The core principle of the double-entry system is that for every debit there must be an equal and corresponding credit, meaning at least two accounts must be involved to keep the accounting equation in balance."
		},
		{
			id: 3,
			question: "Which action is used to increase the balance of an Asset account?",
			options: [
				"A Debit",
				"A Credit",
				"A Contra-Entry",
				"A Transfer"
			],
			correctAnswer: 0,
			explanation: "Asset accounts (along with Expense accounts) have a natural debit balance, meaning a debit entry increases their balance."
		},
		{
			id: 4,
			question: "Which of the following is considered a Liability account?",
			options: [
				"Accounts Receivable",
				"Accounts Payable",
				"Cash",
				"Service Revenue"
			],
			correctAnswer: 1,
			explanation: "Accounts Payable represents money the company owes to its suppliers or vendors for goods or services purchased on credit, making it an obligation (Liability)."
		},
		{
			id: 5,
			question: "What is the primary purpose of preparing a Trial Balance?",
			options: [
				"To calculate the company's net profit or loss.",
				"To ensure that the total debits equal the total credits.",
				"To record the initial business transactions.",
				"To summarize the changes in Owner's Equity."
			],
			correctAnswer: 1,
			explanation: "The Trial Balance is a bookkeeping worksheet that lists the balances of all ledger accounts to check the mathematical equality of the total debit balances and the total credit balances."
		},
		{
			id: 6,
			question: "Which of the following describes the process of transferring journal entries to the ledger accounts?",
			options: [
				"Journalizing",
				"Posting",
				"Balancing",
				"Adjusting"
			],
			correctAnswer: 1,
			explanation: "Posting is the procedural step where amounts recorded in the general journal are transferred (copied) to the individual ledger accounts (T-accounts)."
		},
		{
			id: 7,
			question: "A company purchases office supplies on credit. How does this transaction affect the accounting equation?",
			options: [
				"Assets increase; Owner's Equity decreases.",
				"Assets increase; Liabilities decrease.",
				"Assets increase; Liabilities increase.",
				"Assets decrease; Liabilities increase."
			],
			correctAnswer: 2,
			explanation: "The purchase increases the Asset account (Supplies), and because it was on credit, it increases the Liability account (Accounts Payable). The equation remains balanced."
		},
		{
			id: 8,
			question: "Which financial statement reports a company's revenues and expenses over a specific period of time?",
			options: [
				"Balance Sheet",
				"Statement of Owner's Equity",
				"Cash Flow Statement",
				"Income Statement"
			],
			correctAnswer: 3,
			explanation: "The Income Statement (also known as the Profit and Loss or P&L Statement) reports on a company's financial performance by summarizing its revenues and expenses over a specific period."
		},
		{
			id: 9,
			question: "What is the rule for increasing a Revenue account?",
			options: [
				"Debit",
				"Credit",
				"A Contra-Debit",
				"It depends on the type of revenue."
			],
			correctAnswer: 1,
			explanation: "Revenue accounts increase Owner's Equity, which has a natural credit balance. Therefore, Revenue accounts are increased by credits."
		},
		{
			id: 10,
			question: "The term depreciation in bookkeeping refers to:",
			options: [
				"The increase in the market value of an asset.",
				"A reduction in the number of employees.",
				"The systematic allocation of the cost of a tangible asset over its useful life.",
				"An immediate expense recognition for all fixed asset purchases."
			],
			correctAnswer: 2,
			explanation: "Depreciation is the process of allocating the expense of a long-term asset (like equipment or buildings) over the accounting periods in which the asset is used to generate revenue."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/bookkeeping#bookkeeping-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Bookkeeping Questions & Answers</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental bookkeeping concepts</p>
				</header>
	
				{/* This is the content of Bookkeeping Quiz. */}
	
				<BookkeepingPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 06, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};