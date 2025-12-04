// EnglishQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import EnglishQuiz from './EnglishQuiz';

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

const EnglishQuiz0110: React.FC = () => {
	// Danh sách câu hỏi về kế toán cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which of the following is NOT a core financial statement?",
			options: [
				"The Income Statement",
				"The Balance Sheet",
				"The Trial Balance",
				"The Cash Flow Statement"
			],
			correctAnswer: 2,
			explanation: "The Trial Balance is an internal report used to ensure debits equal credits, but it's not one of the core financial statements presented to external users. The core statements are Income Statement, Balance Sheet, Cash Flow Statement, and Statement of Changes in Equity."
		},
		{
			id: 2,
			question: "What is the basic accounting equation?",
			options: [
				"Assets = Liabilities + Owner's Equity",
				"Assets + Liabilities = Owner's Equity",
				"Assets = Liabilities - Owner's Equity",
				"Assets + Owner's Equity = Liabilities"
			],
			correctAnswer: 0,
			explanation: "The basic accounting equation is Assets = Liabilities + Owner's Equity. This equation must always balance and forms the foundation of double-entry bookkeeping."
		},
		{
			id: 3,
			question: "Which principle states that revenue should be recognized when it is earned, not necessarily when cash is received?",
			options: [
				"Matching Principle",
				"Revenue Recognition Principle",
				"Cost Principle",
				"Consistency Principle"
			],
			correctAnswer: 1,
			explanation: "The Revenue Recognition Principle states that revenue should be recorded when it is earned, regardless of when payment is received. This is part of accrual accounting."
		},
		{
			id: 4,
			question: "Which of the following accounts is a permanent (real) account?",
			options: [
				"Revenue",
				"Expenses",
				"Accounts Payable",
				"Dividends"
			],
			correctAnswer: 2,
			explanation: "Accounts Payable is a permanent (real) account because its balance carries forward to the next accounting period. Revenue, expenses, and dividends are temporary (nominal) accounts that are closed at the end of each period."
		},
		{
			id: 5,
			question: "What does GAAP stand for?",
			options: [
				"Generally Accepted Accounting Principles",
				"General Accounting Assessment Procedures",
				"Governmental Accounting Auditing Practices",
				"Global Accounting and Auditing Protocol"
			],
			correctAnswer: 0,
			explanation: "GAAP stands for Generally Accepted Accounting Principles, which are the standard framework of guidelines for financial accounting used in the United States."
		},
		{
			id: 6,
			question: "The process of transferring journal entries to ledger accounts is called:",
			options: [
				"Journalizing",
				"Posting",
				"Balancing",
				"Adjusting"
			],
			correctAnswer: 1,
			explanation: "Posting is the process of transferring information from journal entries to ledger accounts. Journalizing is the initial recording of transactions in the journal."
		},
		{
			id: 7,
			question: "Which financial statement shows a company's financial position at a specific point in time?",
			options: [
				"Income Statement",
				"Statement of Cash Flows",
				"Balance Sheet",
				"Statement of Retained Earnings"
			],
			correctAnswer: 2,
			explanation: "The Balance Sheet (also called Statement of Financial Position) shows a company's assets, liabilities, and equity at a specific point in time (as of a certain date)."
		},
		{
			id: 8,
			question: "The matching principle in accounting requires:",
			options: [
				"Assets to be matched with liabilities",
				"Expenses to be matched with the revenues they help generate",
				"Cash inflows to be matched with cash outflows",
				"Debits to be matched with credits"
			],
			correctAnswer: 1,
			explanation: "The Matching Principle requires that expenses be recorded in the same accounting period as the revenues they helped generate, ensuring accurate profit measurement."
		},
		{
			id: 9,
			question: "Which type of account normally has a credit balance?",
			options: [
				"Assets",
				"Expenses",
				"Liabilities",
				"Dividends"
			],
			correctAnswer: 2,
			explanation: "Liabilities, equity, and revenue accounts normally have credit balances. Assets, expenses, and dividends normally have debit balances."
		},
		{
			id: 10,
			question: "What is the purpose of the statement of cash flows?",
			options: [
				"To show the profitability of a company",
				"To show changes in equity over a period",
				"To show sources and uses of cash during a period",
				"To show assets and liabilities at a point in time"
			],
			correctAnswer: 2,
			explanation: "The Statement of Cash Flows shows how changes in balance sheet accounts and income affect cash and cash equivalents, breaking down analysis to operating, investing, and financing activities."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#english-quiz-01-10"><mark className="highlight-tertiary-padding-4-8">English</mark></HashLink></h4>
	
				{/* This is the content of English Quiz. */}
	
				<EnglishQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 04, 2025 · by DPSK ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};

export default EnglishQuiz0110;