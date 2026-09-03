// TiengAnhPracticeQuizDPDK.tsx

import EnglishPracticeQuiz from '../../../../../components/quiz/EnglishPracticeQuiz';

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

export default function EVArticlesQuiz() {
	// Danh sách câu hỏi về Tiếng Anh cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "i SAW ______ MOvie LAST NIGHT. ______ MOvie was EXcellent.",
			options: [
				"a / a",
				"a / the",
				"the / the",
				"an / the"
			],
			correctAnswer: 1,
			explanation: "Lần đầu nhắc đến \"MOvie\" dùng mạo từ bất định \"a\". Khi nhắc lại bộ phim đó ở câu thứ hai, vật thể đã được xác định nên dùng \"the\"."
		},
		{
			id: 2,
			question: "my BROTHer is ______ uniVERsity STUdent in LONdon.",
			options: [
				"a",
				"an",
				"the",
				"(no ARticle)"
			],
			correctAnswer: 0,
			explanation: "Mặc dù \"uniVERsity\" bắt đầu bằng chữ \"u\", nhưng phát âm là /juː/ (phụ âm), nên ta dùng \"a\" thay vì \"an\"."
		},
		{
			id: 3,
			question: "she WANTS to beCOME ______ engiNEER when she GROWS UP.",
			options: [
				"a",
				"the",
				"an",
				"(no ARticle)"
			],
			correctAnswer: 2,
			explanation: "\"engiNEER\" bắt đầu bằng nguyên âm /e/, vì vậy ta dùng mạo từ \"an\"."
		},
		{
			id: 4,
			question: "______ MOUNT EVerest is the HIGHest MOUNTain in the WORLD.",
			options: [
				"a",
				"an",
				"the",
				"(no ARticle)"
			],
			correctAnswer: 3,
			explanation: "Quy tắc chung là không dùng mạo từ \"the\" trước tên các ngọn núi đơn lẻ (chỉ dùng cho các dãy núi)."
		},
		{
			id: 5,
			question: "he is ______ HONest MAN you can TRUST.",
			options: [
				"a",
				"an",
				"the",
				"(no ARticle)"
			],
			correctAnswer: 1,
			explanation: "Từ \"honest\" có âm \"h\" câm, phát âm bắt đầu bằng nguyên âm /ɒ/, nên dùng \"an\"."
		},
		{
			id: 6,
			question: "LOOK at ______ MOON! it's so BRIGHT toNIGHT.",
			options: [
				"a",
				"an",
				"the",
				"(no ARticle)"
			],
			correctAnswer: 2,
			explanation: "Dùng \"the\" cho những vật thể duy nhất, độc nhất (như mặt trăng, mặt trời, trái đất)."
		},
		{
			id: 7,
			question: "we Usually HAVE ______ LUNCH at 12:30 P.M.",
			options: [
				"a",
				"an",
				"the",
				"(no ARticle)"
			],
			correctAnswer: 3,
			explanation: "Không dùng mạo từ trước tên các bữa ăn (BREAKfast, LUNCH, DINner) trừ khi có Tính Cơ đứng trước hoặc nói về một bữa ăn cụ thể."
		},
		{
			id: 8,
			question: "my FAther PLAYS ______ piANo VERy WELL.",
			options: [
				"a",
				"an",
				"the",
				"(no ARticle)"
			],
			correctAnswer: 2,
			explanation: "Dùng mạo từ \"the\" trước tên các loại nhạc cụ khi nói về kỹ năng chơi nhạc cụ đó."
		},
		{
			id: 9,
			question: "PARis is ______ CAPital of FRANCE.",
			options: [
				"a",
				"an",
				"the",
				"(no ARticle)"
			],
			correctAnswer: 2,
			explanation: "Cấu trúc \"the + NOUN + of + NOUN\" dùng để chỉ một đối tượng cụ thể, xác định."
		},
		{
			id: 10,
			question: "can you PASS me ______ SALT, PLEASE?",
			options: [
				"a",
				"an",
				"the",
				"(no ARticle)"
			],
			correctAnswer: 2,
			explanation: "Trong ngữ cảnh này, cả người nói và người nghe đều biết rõ \"lọ muối\" đang được nhắc tới ở trên bàn, nên dùng \"the\"."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><a href="/tieng-anh#ev-articles-quiz"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></a></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Articles</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental ngữ pháp tiếng Anh concepts</p>
				</header>
	
				<EnglishPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>April 15, 2026 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};