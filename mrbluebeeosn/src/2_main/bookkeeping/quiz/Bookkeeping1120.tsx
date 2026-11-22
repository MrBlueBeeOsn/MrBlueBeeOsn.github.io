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

export default function Bookkeeping1120(): React.JSX.Element {
	// Danh sách câu hỏi về Bookkeeping cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Under the accrual basis of accounting, when should revenue be recognized and recorded?",
			options: [
				"When cash is received from the customer.",
				"When the service is performed or goods are delivered, regardless of when cash is received.",
				"At the end of the fiscal year only.",
				"When the customer places an order."
			],
			correctAnswer: 1,
			explanation: "The revenue recognition principle under accrual accounting states that revenue must be recorded in the period it is earned, not necessarily when cash changes hands."
		},
		{
			id: 2,
			question: "What type of account is Accumulated Depreciation?",
			options: [
				"Expense Account",
				"Liability Account",
				"Owner's Equity Account",
				"Contra-Asset Account"
			],
			correctAnswer: 3,
			explanation: "Accumulated Depreciation is paired with a fixed asset account on the Balance Sheet and carries a credit balance, which offsets (reduces) the gross value of the asset to show its net book value."
		},
		{
			id: 3,
			question: "A business pays $1,200 in advance for a one-year insurance policy. How is this initially recorded?",
			options: [
				"Debit Prepaid Insurance $1,200; Credit Cash $1,200",
				"Debit Insurance Expense $1,200; Credit Cash $1,200",
				"Debit Cash $1,200; Credit Prepaid Insurance $1,200",
				"Debit Accounts Payable $1,200; Credit Insurance Expense $1,200"
			],
			correctAnswer: 0,
			explanation: "Because the coverage applies to future periods, the payment creates a future economic benefit (an Asset called Prepaid Insurance), while reducing Cash (another Asset)."
		},
		{
			id: 4,
			question: "What is the primary purpose of a Bank Reconciliation?",
			options: [
				"To calculate the interest earned on a savings account.",
				"To apply for a business line of credit.",
				"To identify and explain differences between the company's cash book balance and the bank statement balance.",
				"To close out revenue and expense accounts at month-end."
			],
			correctAnswer: 2,
			explanation: "Timing differences (such as outstanding checks or deposits in transit) and bank fees often cause the two balances to differ; reconciliation ensures the true cash balance is accurate."
		},
		{
			id: 5,
			question: "Which of the following is a temporary (nominal) account that is closed to Retained Earnings or Owner's Capital at the end of an accounting period?",
			options: [
				"Accounts Receivable",
				"Equipment",
				"Notes Payable",
				"Rent Expense"
			],
			correctAnswer: 3,
			explanation: "Temporary accounts (Revenues, Expenses, and Dividends/Drawings) accumulate balances for a single accounting period and are reset to zero at year-end, whereas permanent accounts (Assets, Liabilities, and Equity) carry their balances forward."
		},
		{
			id: 6,
			question: "Which special journal is used to record all sales of merchandise on credit?",
			options: [
				"Cash Receipts Journal",
				"Sales Journal",
				"Purchases Journal",
				"General Journal"
			],
			correctAnswer: 1,
			explanation: "In manual and structured accounting systems, the Sales Journal is dedicated exclusively to recording credit sales of inventory; cash sales are recorded in the Cash Receipts Journal."
		},
		{
			id: 7,
			question: "What is the normal balance of an Owner's Drawings (or Dividends) account?",
			options: [
				"Debit",
				"Credit",
				"Zero",
				"Either Debit or Credit depending on net income"
			],
			correctAnswer: 0,
			explanation: "Owner's Drawings reduce Owner's Equity. Since Owner's Equity has a natural credit balance, any account that reduces it—such as Drawings or Expenses—has a natural debit balance."
		},
		{
			id: 8,
			question: "A customer returns damaged goods that were originally purchased on account (credit). Which document is typically issued by the seller to reduce the customer's balance?",
			options: [
				"Debit Memorandum",
				"Purchase Order",
				"Credit Memorandum",
				"Remittance Advice"
			],
			correctAnswer: 2,
			explanation: "The seller issues a credit memo to inform the buyer that their Accounts Receivable balance is being credited (reduced) due to the returned merchandise."
		},
		{
			id: 9,
			question: "Which accounting principle requires that expenses be recorded in the same period as the revenues they helped to generate?",
			options: [
				"Conservatism Principle",
				"Cost Principle",
				"Monetary Unit Assumption",
				"Matching Principle"
			],
			correctAnswer: 3,
			explanation: "The matching principle dictates that all costs incurred to earn revenue must be recognized as expenses in the exact same reporting period as the related revenue to accurately measure profitability."
		},
		{
			id: 10,
			question: "Which of the following errors would cause a Trial Balance to be out of balance (Debits do not equal Credits)?",
			options: [
				"A transaction was completely omitted from the journal.",
				"A $500 purchase of supplies was debited to Equipment instead of Supplies.",
				"A $300 debit to Cash was posted as a $300 credit to Cash.",
				"A $1,000 transaction was recorded twice in both the debit and credit columns."
			],
			correctAnswer: 2,
			explanation: "Posting a debit as a credit causes total credits to exceed total debits by $600 (double the error amount). The other errors affect both sides equally or leave total debits equal to total credits."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/bookkeeping#bookkeeping-quiz"><mark className="highlight-tertiary-padding-4-8">Bookkeeping Quiz</mark></HashLink></h4>

				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Bookkeeping 11-20</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Bookkeeping</p>
				</header>
	
				{/* This is the content of Bookkeeping Quiz. */}
	
				<BookkeepingPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>noVEMber 22, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};