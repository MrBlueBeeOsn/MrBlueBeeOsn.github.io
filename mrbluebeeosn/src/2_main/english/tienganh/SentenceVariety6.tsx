import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SentenceVariety6(): React.JSX.Element {

	const postId = "SentenceVariety6";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Sentence Variety
												
				<sup><HashLink smooth to="/tieng-anh/sentence-variety-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-9">&nbsp;9&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Dependent Clause: Nền tảng để viết tiếng Anh nâng cao</h4>

			<p>Trong tiếng Anh, <strong>dependent clause</strong> (<strong>phụ câu</strong>) là một phần câu có danh chủ + động cơ nhưng không thể đứng một mình. Nó cần một <strong>independent clause</strong> (<strong>câu con chính</strong>) để tạo thành câu hoàn chỉnh.</p>
					
			<p>Khi hiểu rõ và sử dụng thành thạo, bạn sẽ viết câu phức tinh tế, đọc hiểu sâu hơn và diễn đạt ý tưởng mạch lạc hơn.</p>

			{/* 1. 🔎 Cách nhận biết nhanh */}

			<h3 className="margin-y-50 text-center">1. 🔎 Cách nhận biết nhanh</h3>
			
				<ul className="list-square">
			
					<li><strong>Có subject</strong> + <strong>verb nhưng chưa đủ ý</strong></li>
					<li className="margin-bottom-20 list-none">→ dependent clause.</li>
			
					<li><strong>Bắt đầu bằng từ nối</strong>:</li>
					<li className="margin-bottom-20 list-none">who, which, what, when, where, why, how, that, as, because, although, if, until.</li>
			
					<li><strong>Trả lời cho câu hỏi</strong>:</li>
					<li className="list-none">khi nào, ở đâu, tại sao, ai, cái gì, như thế nào.</li>
			
				</ul>
			
					
			<p className="text-indent-whole">Ví dụ & phân tích:</p>
			
				<ul className="list-square">
			
					<li>Although she was tired, she finished the report.</li>
					<li className="margin-bottom-20 list-none">Mặc dù mệt, cô ấy vẫn hoàn thành xong bản báo cáo.</li>

					<li className="margin-bottom-20 list-none">→ “<strong>Although she was tired</strong>” có danh chủ (she) và động cơ (was tired), nhưng không thể đứng một mình. Nó bổ nghĩa cho câu con chính “she finished the report.”</li>
			
					<li>The house which stands near the river is old. </li>
					<li className="margin-bottom-20 list-none">Ngôi nhà nằm cạnh bờ sông đã cũ rồi.</li>

					<li className="margin-bottom-20 list-none">→ “<strong>which stands near the river</strong>” mô tả danh cơ the house. Đây là câu con quan hệ.</li>
			
					<li>What you choose will affect your future.</li>
					<li className="margin-bottom-20 list-none">Những gì bạn chọn lựa hôm nay sẽ định hình tương lai của chính bạn.</li>

					<li className="list-none">→ “<strong>What you choose</strong>” đóng vai trò danh chủ của câu.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"></p>

			{/* 2. ✍️ Các loại dependent clause */}

			<h3 className="margin-y-50 text-center">2. ✍️ Các loại dependent clause</h3>
			
			<h4 className="margin-y-40">1. Adverbial Clause (Trạng câu)</h4>
					
			<p className="text-indent-whole">Chức năng: bổ nghĩa cho động cơ, chỉ thời gian, nguyên nhân, điều kiện, nhượng bộ.</p>
			
				<ul className="list-square">
			
					<li><strong>Because she studied hard</strong>, she passed the exam.</li>
					<li className="margin-bottom-20 list-none">Vì cô ấy học chăm chỉ, cô ấy đã vượt qua kỳ thi.</li>
			
					<li><strong>Although it was raining</strong>, they continued playing football.</li>
					<li className="list-none">Mặc dù trời mưa, họ vẫn tiếp tục chơi bóng.</li>
			
				</ul>


			<h4 className="margin-y-40">2. Adjective/Relative Clause (Câu con tính cơ/quan hệ)</h4>
					
			<p className="text-indent-whole">Chức năng: mô tả hoặc bổ sung thông tin cho danh cơ.</p>
			
				<ul className="list-square">
			
					<li>The man <strong>who helped me</strong> is kind.</li>
					<li className="margin-bottom-20 list-none">Người đàn ông đã giúp tôi rất tốt bụng.</li>
			
					<li>The book <strong>that I borrowed</strong> is useful.</li>
					<li className="list-none">Cuốn sách mà tôi mượn rất hữu ích.</li>
			
				</ul>


			<h4 className="margin-y-40">3. Noun Clause (Danh câu)</h4>
					
			<p className="text-indent-whole">Chức năng: đóng vai trò như một danh cơ — làm danh chủ, danh nhận hoặc bổ ngữ.</p>
			
				<ul className="list-square">
			
					<li><strong>What she said</strong> impressed everyone.</li>
					<li className="margin-bottom-20 list-none">Những gì cô ấy nói khiến mọi người ấn tượng.</li>
			
					<li>I believe <strong>that honesty matters</strong>.</li>
					<li className="list-none">Tôi tin rằng sự trung thực quan trọng.</li>
			
				</ul>

			{/* 3. 🛠 Các bước để viết câu có dependent clause */}

			<h3 className="margin-y-50 text-center">3. 🛠 Các bước để viết câu có dependent clause</h3>

			<h4 className="margin-y-40">1. Chọn từ nối phù hợp:</h4>
					
			<p className="text-indent-whole">Dựa vào ý định (thời gian, nguyên nhân, mô tả, danh cơ).</p>
			
				<ul className="list-square">
			
					<li><strong>When</strong> the bell rang, students left the classroom.</li>
					<li className="list-none">Khi chuông reo, học sinh rời lớp.</li>
			
				</ul>


			<h4 className="margin-y-40">2. Xác định chức năng:</h4>
					
			<p className="text-indent-whole">Trạng ngữ, tính cơ hay danh cơ.</p>
			
				<ul className="list-square">
			
					<li>The teacher <strong>who</strong> explains clearly helps students succeed.</li>
					<li className="list-none">Giáo viên giảng rõ ràng giúp học sinh thành công.</li>
			
				</ul>


			<h4 className="margin-y-40">3. Ghép với câu con chính:</h4>
					
			<p className="text-indent-whole">Dependent clause + independent clause.</p>
			
				<ul className="list-square">
			
					<li>She smiled <strong>when</strong> she saw her friend.</li>
					<li className="list-none">Cô ấy mỉm cười khi thấy bạn mình.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">4. Kiểm tra tính độc lập:</h4>
					
			<p className="text-indent-whole">Tách câu con ra; nếu không thể đứng một mình, đó là dependent clause.</p>
			
				<ul className="list-square">
			
					<li><strong>If</strong> you study hard</li>
					<li className="margin-bottom-20 list-none">Nếu bạn học hành chăm chỉ...</li>

					<li className="list-none">→ chưa đủ ý, cần câu con chính.</li>
			
				</ul>

			{/* 4. 💡 Mẹo nhớ và tránh lỗi */}

			<h3 className="margin-y-50 text-center">4. 💡 Mẹo nhớ và tránh lỗi</h3>

			<h4 className="margin-y-40">Clause ≠ Phrase:</h4>
					
			<p className="text-indent-whole">Clause có subject + verb, phrase thì không.</p>
			
				<ul className="list-square">
			
					<li>Running fast (phrase) ≠ He runs fast (clause).</li>
					<li className="list-none">Chạy nhanh (cụm từ) # Anh ấy chạy nhanh (câu con).</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"></p>


			<h4 className="margin-y-40">Dấu phẩy:</h4>
					
			<p className="text-indent-whole">Nếu dependent clause đứng trước, thường cần dấu phẩy.</p>
			
				<ul className="list-square">
			
					<li><strong>Although</strong> it was late, they kept working.</li>
					<li className="list-none">Mặc dù đã muộn, họ vẫn tiếp tục làm việc.</li>
			
				</ul>
			

			<h4 className="margin-y-40">That:</h4>
					
			<p className="text-indent-whole">Thường dùng trong câu con quan hệ xác định hoặc câu con danh cơ, không cần dấu phẩy.</p>
			
				<ul className="list-square">
			
					<li>I know <strong>that</strong> she is honest.</li>
					<li className="list-none">Tôi biết rằng cô ấy trung thực.</li>
			
				</ul>
			

			<h4 className="margin-y-40">Tránh câu rời rạc:</h4>

			<p className="margin-top-20 text-indent-whole">Dependent clause không bao giờ đứng một mình.</p>
					
				<ul className="list-square">
			
					<li className="margin-bottom-20">Sai: Because she was late.</li>
			
					<li>Đúng: <strong>Because</strong> she was late, she missed the bus.</li>
					<li className="list-none">Vì đến muộn nên cô ấy đã bị lỡ chuyến xe buýt.</li>
			
				</ul>
			

			{/* 5. 📝 Bài tập luyện tập */}

			<h3 className="margin-y-50 text-center">5. 📝 Bài tập luyện tập</h3>

			<p className="margin-top-20">1. Viết 2 câu dùng because/although.</p>
			
				<ul className="list-square">
			
					<li><strong>Because</strong> the weather was nice, we went hiking.</li>
					<li className="margin-bottom-20 list-none">Vì thời tiết đẹp, chúng tôi đi leo núi.</li>
			
					<li><strong>Although</strong> he failed once, he tried again.</li>
					<li className="list-none">Mặc dù anh ấy thất bại một lần, anh ấy vẫn thử lại.</li>
			
				</ul>


			<p className="margin-top-20">2. Viết 2 câu dùng who/which/that.</p>
			
				<ul className="list-square">
			
					<li>The student <strong>who</strong> studies regularly improves faster.</li>
					<li className="margin-bottom-20 list-none">Học sinh học thường xuyên tiến bộ nhanh hơn.</li>
			
					<li>The car <strong>that</strong> I bought last year is reliable.</li>
					<li className="list-none">Chiếc xe tôi mua năm ngoái rất đáng tin cậy.</li>
			
				</ul>
			

			<p className="margin-top-20">3. Viết 2 câu dùng what/how làm danh chủ.</p>
			
				<ul className="list-square">
			
					<li><strong>What</strong> you decide matters a lot</li>
					<li className="margin-bottom-20 list-none">Điều bạn quyết định rất quan trọng.</li>
			
					<li><strong>How</strong> he solved the problem impressed everyone.</li>
					<li className="list-none">Cách anh ấy giải quyết vấn đề khiến mọi người ấn tượng.</li>
			
				</ul>


			<p className="margin-top-20">4. Viết 1 câu với as.</p>
			
				<ul className="list-square">
			
					<li><strong>As</strong> she spoke, everyone listened carefully.</li>
					<li className="list-none">Khi cô ấy nói, mọi người chăm chú lắng nghe.</li>
			
				</ul>


			{/* ✅ Kết luận */}

			<h3 className="margin-y-50 text-center">✅ Kết luận</h3>

			<p>Dependent clause không phải là phần phụ vô nghĩa, mà là <strong>công cụ tạo chiều sâu cho câu văn</strong>.</p>

			<p>Khi bạn luyện tập nhận diện, phân loại và viết theo bước, việc sử dụng câu con phụ sẽ trở thành thói quen tự nhiên, giúp tiếng Anh của bạn mạch lạc, logic và chuyên nghiệp hơn.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 15, 2026 · by Copilot and 🐝Mr. Bee Osn ·</span>
				</div>

				<div className="eye-icon no-margin">
					<EyeIcon />
				</div>

				<div className="post-date no-margin">
					<ViewCounter postId={postId} />
				</div>

				<div className="like-button no-margin">
					<LikeButton postId={postId} />
				</div>

			</div>

		</article>
		
	</main>

	</>);
}