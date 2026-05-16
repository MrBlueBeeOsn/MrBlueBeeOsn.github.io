import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DependentClause6(): React.JSX.Element {

	const postId = "DependentClause6";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Dependent Clause
												
				<sup><HashLink smooth to="/tieng-anh/dependent-clause-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-9">&nbsp;9&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Dependent Clause: Nền tảng để viết tiếng Anh nâng cao</h4>

			<p>Trong tiếng Anh, <strong>dependent clause</strong> (<strong>mệnh đề phụ thuộc</strong>) là một phần câu có chủ ngữ + động từ nhưng không thể đứng một mình. Nó cần một independent clause (mệnh đề chính) để tạo thành câu hoàn chỉnh.</p>
					
			<p>Khi hiểu rõ và sử dụng thành thạo, bạn sẽ viết câu phức tinh tế, đọc hiểu sâu hơn và diễn đạt ý tưởng mạch lạc hơn.</p>

			{/* 1. 🔎 Cách nhận biết nhanh */}

			<h3 className="margin-y-50 text-center">1. 🔎 Cách nhận biết nhanh</h3>
			
				<ul className="list-square">
			
					<li><strong>Có subject</strong> + <strong>verb nhưng chưa đủ ý</strong></li>
					<li className="margin-bottom-20 list-none">→ Dependent clause.</li>
			
					<li><strong>Bắt đầu bằng từ nối</strong>:</li>
					<li className="margin-bottom-20 list-none">who, which, what, when, where, why, how, that, as, because, although, if, until.</li>
			
					<li><strong>Trả lời cho câu hỏi</strong>:</li>
					<li className="list-none">Khi nào, ở đâu, tại sao, ai, cái gì, như thế nào.</li>
			
				</ul>

			<h4 className="margin-y-40">Ví dụ & phân tích:</h4>
			
				<ul className="list-square">
			
					<li><strong>Although she was tired</strong>, she finished the report.</li>
					<li className="margin-bottom-20 list-none">Mặc dù mệt, cô ấy vẫn hoàn thành xong bản báo cáo.</li>

					<li className="margin-bottom-20 list-none">→ “Although she was tired” có chủ ngữ (she) và động từ (was tired), nhưng không thể đứng một mình. Nó bổ nghĩa cho mệnh đề chính “she finished the report.”</li>
			
					<li>The house <strong>which stands near the river</strong> is old.</li>
					<li className="margin-bottom-20 list-none">Ngôi nhà nằm cạnh bờ sông đã cũ rồi.</li>

					<li className="margin-bottom-20 list-none">→ “which stands near the river” mô tả danh từ the house. Đây là mệnh đề quan hệ.</li>
			
					<li><strong>What you choose</strong> will affect your future.</li>
					<li className="margin-bottom-20 list-none">Những gì bạn chọn lựa hôm nay sẽ định hình tương lai của chính bạn.</li>

					<li className="list-none">→ “What you choose” đóng vai trò chủ ngữ của câu.</li>
			
				</ul>


			{/* 2. ✍️ Các loại dependent clause */}

			<h3 className="margin-y-50 text-center">2. ✍️ Các loại dependent clause</h3>

			<h4 className="margin-y-40">1. Adverbial Clause (Mệnh đề trạng ngữ)</h4>
					
			<p className="text-indent-whole">Chức năng: bổ nghĩa cho động từ, chỉ thời gian, nguyên nhân, điều kiện, nhượng bộ.</p>
			
				<ul className="list-square">
			
					<li><strong>Because she studied hard</strong>, she passed the exam.</li>
					<li className="margin-bottom-20 list-none">Vì cô ấy học chăm chỉ, cô ấy đã vượt qua kỳ thi.</li>
			
					<li><strong>Although it was raining</strong>, they continued playing football.</li>
					<li className="list-none">Mặc dù trời mưa, họ vẫn tiếp tục chơi bóng.</li>
			
				</ul>
		

			<h4 className="margin-y-40">2. Adjective/Relative Clause (Mệnh đề tính từ/quan hệ)</h4>
					
			<p className="text-indent-whole">Chức năng: mô tả hoặc bổ sung thông tin cho danh từ.</p>
			
				<ul className="list-square">
			
					<li>The man <strong>who helped me</strong> is kind.</li>
					<li className="margin-bottom-20 list-none">Người đàn ông đã giúp tôi rất tốt bụng.</li>
			
					<li>The book <strong>that I borrowed</strong> is useful.</li>
					<li className="list-none">Cuốn sách mà tôi mượn rất hữu ích.</li>
			
				</ul>


			<h4 className="margin-y-40">3. Noun Clause (Mệnh đề danh từ)</h4>
					
			<p className="text-indent-whole">Chức năng: đóng vai trò như một danh từ — làm chủ ngữ, tân ngữ hoặc bổ ngữ.</p>
			
				<ul className="list-square">
			
					<li><strong>What she said</strong> impressed everyone.</li>
					<li className="margin-bottom-20 list-none">Những gì cô ấy nói khiến mọi người ấn tượng.</li>
			
					<li>I believe <strong>that honesty matters</strong>. </li>
					<li className="list-none">Tôi tin rằng sự trung thực quan trọng.</li>
			
				</ul>
			

			{/* 3. 🛠 Các bước để viết câu có dependent clause */}

			<h3 className="margin-y-50 text-center">3. 🛠 Các bước để viết câu có dependent clause</h3>

			<h4 className="margin-y-40">1. Chọn từ nối phù hợp:</h4>
					
			<p className="text-indent-whole">Dựa vào ý định (thời gian, nguyên nhân, mô tả, danh từ).</p>
			
				<ul className="list-square">
			
					<li><strong>When the bell rang</strong>, students left the classroom.</li>
					<li className="list-none">Khi chuông reo, học sinh rời lớp.</li>
			
				</ul>


			<h4 className="margin-y-40">2. Xác định chức năng:</h4>
					
			<p className="text-indent-whole">Trạng ngữ, tính từ hay danh từ.</p>
			
				<ul className="list-square">
			
					<li>The teacher <strong>who explains clearly</strong> helps students succeed.</li>
					<li className="list-none">Giáo viên giảng rõ ràng giúp học sinh thành công.</li>
			
				</ul>


			<h4 className="margin-y-40">3. Ghép với mệnh đề chính:</h4>
					
			<p className="text-indent-whole">Dependent clause + independent clause.</p>
			
				<ul className="list-square">
			
					<li>She smiled <strong>when she saw her friend</strong>.</li>
					<li className="list-none">Cô ấy mỉm cười khi thấy bạn mình.</li>
			
				</ul>


			<h4 className="margin-y-40">4. Kiểm tra tính độc lập:</h4>
					
			<p className="text-indent-whole">Tách mệnh đề ra; nếu không thể đứng một mình, đó là dependent clause.</p>
			
				<ul className="list-square">
			
					<li><strong>If</strong> you study hard</li>
					<li className="margin-bottom-20 list-none">Nếu bạn học hành chăm chỉ...</li>

					<li className="list-none">→ Chưa đủ ý, cần mệnh đề chính.</li>
			
				</ul>


			{/* 4. 💡 Mẹo nhớ và tránh lỗi */}

			<h3 className="margin-y-50 text-center">4. 💡 Mẹo nhớ và tránh lỗi</h3>

			<h4 className="margin-y-40">Clause ≠ Phrase:</h4>
					
			<p className="text-indent-whole">Clause có subject + verb, phrase thì không.</p>
			
				<ul className="list-square">
			
					<li>Running fast (phrase) ≠ He runs fast (clause).</li>
					<li className="list-none">Chạy nhanh (cụm từ) ≠ Anh ấy chạy nhanh (mệnh đề).</li>
			
				</ul>


			<h4 className="margin-y-40">Dấu phẩy:</h4>
					
			<p className="text-indent-whole">Nếu dependent clause đứng trước, thường cần dấu phẩy.</p>
			
				<ul className="list-square">
			
					<li><strong>Although it was late</strong>, they kept working.</li>
					<li className="list-none">Mặc dù đã muộn, họ vẫn tiếp tục làm việc.</li>
			
				</ul>


			<h4 className="margin-y-40">That:</h4>
					
			<p className="text-indent-whole">Thường dùng trong mệnh đề quan hệ xác định hoặc mệnh đề danh từ, không cần dấu phẩy.</p>
			
				<ul className="list-square">
			
					<li>I know <strong>that she is honest</strong>.</li>
					<li className="list-none">Tôi biết rằng cô ấy trung thực.</li>
			
				</ul>

			
			<h4 className="margin-y-40">Tránh câu rời rạc:</h4>
					
			<p className="text-indent-whole">Dependent clause không bao giờ đứng một mình.</p>
			
				<ul className="list-square">

					<li className="margin-bottom-20">Sai: Because she was late.</li>
			
					<li>Đúng: <strong>Because she was late</strong>, she missed the bus.</li>
					<li className="list-none">Vì đến muộn nên cô ấy đã bị lỡ chuyến xe buýt.</li>
			
				</ul>
			

			{/* 5. 📝 Bài tập luyện tập */}

			<h3 className="margin-y-50 text-center">5. 📝 Bài tập luyện tập</h3>


			<p className="margin-top-20">1. Viết 2 câu dùng because/although.</p>
			
				<ul className="list-square">
			
					<li><strong>Because the weather was nice</strong>, we went hiking.</li>
					<li className="margin-bottom-20 list-none">Vì thời tiết đẹp, chúng tôi đi leo núi.</li>
			
					<li><strong>Although he failed once</strong>, he tried again.</li>
					<li className="list-none">Mặc dù anh ấy thất bại một lần, anh ấy vẫn thử lại.</li>
			
				</ul>
			
			<p className="margin-top-20"></p>

			<p className="margin-top-20">2. Viết 2 câu dùng who/which/that.</p>
			
				<ul className="list-square">
			
					<li>The student <strong>who studies regularly</strong> improves faster.</li>
					<li className="margin-bottom-20 list-none">Học sinh học thường xuyên tiến bộ nhanh hơn.</li>
			
					<li>The car <strong>that I bought last year</strong> is reliable.</li>
					<li className="list-none">Chiếc xe tôi mua năm ngoái rất đáng tin cậy.</li>
			
				</ul>
			

			<p className="margin-top-20">3. Viết 2 câu dùng what/how làm chủ ngữ.</p>
			
				<ul className="list-square">
			
					<li><strong>What you decide</strong> matters a lot.</li>
					<li className="margin-bottom-20 list-none">Điều bạn quyết định rất quan trọng.</li>
			
					<li><strong>How he solved the problem</strong> impressed everyone.</li>
					<li className="list-none">Cách anh ấy giải quyết vấn đề khiến mọi người ấn tượng.</li>
			
				</ul>
			

			<p className="margin-top-20">4. Viết 1 câu với as.</p>
			
				<ul className="list-square">
			
					<li><strong>As she spoke</strong>, everyone listened carefully.</li>
					<li className="list-none">Khi cô ấy nói, mọi người chăm chú lắng nghe.</li>
			
				</ul>
			

			{/* ✅ Kết luận */}

			<h3 className="margin-y-50 text-center">✅ Kết luận</h3>

			<p>Dependent clause không phải là phần phụ vô nghĩa, mà là <strong>công cụ tạo chiều sâu cho câu văn</strong>.</p>

			<p>Khi bạn luyện tập nhận diện, phân loại và viết theo bước, việc sử dụng mệnh đề phụ sẽ trở thành thói quen tự nhiên, giúp tiếng Anh của bạn mạch lạc, logic và chuyên nghiệp hơn.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 16, 2026 · by Copilot and 🐝Mr. Bee Osn ·</span>
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