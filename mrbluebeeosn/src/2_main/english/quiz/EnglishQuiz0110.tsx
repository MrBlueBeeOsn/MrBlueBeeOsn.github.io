// EnglishQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
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

const EnglishQuiz: React.FC = () => {
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

	// State management
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const [isAnswered, setIsAnswered] = useState(false);
	const [quizCompleted, setQuizCompleted] = useState(false);
	const [timePerQuestion, setTimePerQuestion] = useState<number[]>(Array(questions.length).fill(0));
	const [startTime, setStartTime] = useState<number>(Date.now());

	// Cập nhật thời gian cho câu hỏi hiện tại
	useEffect(() => {
		if (!quizCompleted && !isAnswered) {
			const interval = setInterval(() => {
				const updatedTimes = [...timePerQuestion];
				updatedTimes[currentQuestionIndex] = Math.floor((Date.now() - startTime) / 1000);
				setTimePerQuestion(updatedTimes);
			}, 1000);
			
			return () => clearInterval(interval);
		}
	}, [currentQuestionIndex, isAnswered, quizCompleted, startTime, timePerQuestion]);

	// Xử lý khi người dùng chọn đáp án
	const handleOptionSelect = (optionIndex: number) => {
		if (isAnswered) return;
		
		setSelectedOption(optionIndex);
		setIsAnswered(true);
		
		const currentQuestion = questions[currentQuestionIndex];
		if (optionIndex === currentQuestion.correctAnswer) {
			setScore(score + 1);
		}
		
		// Cập nhật thời gian cho câu hỏi này
		const updatedTimes = [...timePerQuestion];
		updatedTimes[currentQuestionIndex] = Math.floor((Date.now() - startTime) / 1000);
		setTimePerQuestion(updatedTimes);
	};

	// Xử lý chuyển sang câu hỏi tiếp theo
	const handleNextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedOption(null);
			setIsAnswered(false);
			setStartTime(Date.now());
		} else {
			setQuizCompleted(true);
		}
	};

	// Xử lý quay lại câu hỏi trước
	const handlePreviousQuestion = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1);
			setSelectedOption(null);
			setIsAnswered(false);
			// Không reset thời gian khi quay lại câu hỏi cũ
		}
	};

	// Xử lý restart quiz
	const handleRestartQuiz = () => {
		setCurrentQuestionIndex(0);
		setScore(0);
		setSelectedOption(null);
		setIsAnswered(false);
		setQuizCompleted(false);
		setTimePerQuestion(Array(questions.length).fill(0));
		setStartTime(Date.now());
	};

	// Lấy câu hỏi hiện tại
	const currentQuestion = questions[currentQuestionIndex];
	
	// Tính tổng thời gian
	const totalTime = timePerQuestion.reduce((total, time) => total + time, 0);

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/english#english-terms"><mark className="highlight-tertiary-padding-4-8">English</mark></HashLink></h4>
	
				{/* <h1 className="margin-y-50 text-center">What is english?</h1> */}
	
				{/* This is the content of English Term. */}
	
				<div className="english-quiz-container">

					<header className="quiz-header">
						<h1 className="margin-y-50 text-center">English Basic Practice</h1>
						<p className="subtitle text-center">Test your knowledge of fundamental english concepts</p>
					</header>

					<div className="quiz-content">
						{!quizCompleted ? (
							<>
								{/* <div className="quiz-info">
									<div className="progress-section">
										<div className="progress-bar">
											<div 
												className="progress-fill" 
												style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
											></div>
										</div>
										<div className="progress-text">
											Question {currentQuestionIndex + 1} of {questions.length}
										</div>
									</div>
									
									<div className="stats">
										<div className="score">Score: <span>{score}</span></div>
										<div className="time">Time on this question: <span>{timePerQuestion[currentQuestionIndex]}s</span></div>
									</div>
								</div> */}

								<div className="question-card">
									<h2 className="question-text">{currentQuestion.question}</h2>
									
									<div className="options-container">
										{currentQuestion.options.map((option, index) => {
											let optionClass = "option";
											
											if (isAnswered) {
												if (index === currentQuestion.correctAnswer) {
													optionClass += " correct";
												} else if (index === selectedOption && index !== currentQuestion.correctAnswer) {
													optionClass += " incorrect";
												}
											} else if (index === selectedOption) {
												optionClass += " selected";
											}
											
											return (
												<div 
													key={index} 
													className={optionClass}
													onClick={() => handleOptionSelect(index)}
												>
													<span className="option-letter">{String.fromCharCode(65 + index)}</span>
													<span className="option-text">{option}</span>
												</div>
											);
										})}
									</div>
									
									{isAnswered && (
										<div className="explanation">
											<h3>Explanation:</h3>
											<p>{currentQuestion.explanation}</p>
											
											<div className="navigation">
												<button 
													onClick={handlePreviousQuestion}
													disabled={currentQuestionIndex === 0}
													className="nav-btn prev-btn"
												>
													Previous Question
												</button>
												
												<button 
													onClick={handleNextQuestion}
													className="nav-btn next-btn"
												>
													{currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
												</button>
											</div>
										</div>
									)}
								</div>
							</>
						) : (
							<div className="results-container">
								<h2>Quiz Completed!</h2>
								
								<div className="results-card">
									<div className="score-circle">
										<div className="score-value">{score}/{questions.length}</div>
										<div className="score-percent">
											{Math.round((score / questions.length) * 100)}%
										</div>
									</div>
									
									<div className="results-details">
										<h3>Your Results</h3>
										<div className="result-item">
											<span className="label">Correct Answers:</span>
											<span className="value">{score}</span>
										</div>
										<div className="result-item">
											<span className="label">Incorrect Answers:</span>
											<span className="value">{questions.length - score}</span>
										</div>
										<div className="result-item">
											<span className="label">Total Time:</span>
											<span className="value">{totalTime} seconds</span>
										</div>
										<div className="result-item">
											<span className="label">Average Time per Question:</span>
											<span className="value">{Math.round(totalTime / questions.length)} seconds</span>
										</div>
									</div>
									
									<div className="performance-message">
										{score === questions.length ? (
											<p className="excellent">Excellent! You have mastered the basics of English!</p>
										) : score >= questions.length * 0.7 ? (
											<p className="good">Good job! You have a solid understanding of English fundamentals.</p>
										) : score >= questions.length * 0.5 ? (
											<p className="average">Not bad! Review the explanations to improve your understanding.</p>
										) : (
											<p className="needs-improvement">Keep practicing! Review basic English concepts and try again.</p>
										)}
									</div>
									
									<div className="results-actions">
										<button onClick={handleRestartQuiz} className="restart-btn">
											Restart Quiz
										</button>
									</div>
								</div>
							</div>
						)}
					</div>

					<div className="quiz-info">
						<div className="progress-section">
							<div className="progress-bar">
								<div 
									className="progress-fill" 
									style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
								></div>
							</div>
							<div className="progress-text">
								Question {currentQuestionIndex + 1} of {questions.length}
							</div>
						</div>
						
						<div className="stats">
							<div className="score">Score: <span>{score}</span></div>
							<div className="time">Time on this question: <span>{timePerQuestion[currentQuestionIndex]}s</span></div>
						</div>
					</div>
					
					<footer className="quiz-footer">
						{/* <p>Interactive English Quiz • Designed for learning basic English concepts in English</p> */}
					</footer>
				</div>
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 04, 2025 · by DPSK ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};

export default EnglishQuiz;