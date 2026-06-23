import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SentenceVariety8(): React.JSX.Element {

	const postId = "SentenceVariety8";

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

			<h4 className="margin-bottom-30 text-center">Luyện viết câu tiếng Anh</h4>

			<p>Viết câu tiếng Anh hay không bắt đầu từ từ vựng khó. Nó bắt đầu từ việc bạn biết mình đang dùng khung nào, và đổi khung khi cần.</p>

			{/* 1. Bốn khung câu bạn phải nhìn ra ngay */}

			<h3 className="margin-y-50 text-center">1. Bốn khung câu bạn phải nhìn ra ngay</h3>

			<p>Đừng nhớ định nghĩa dài. Chỉ đếm câu con và dấu nối.</p>

			<h4 className="margin-y-40">1. Câu đơn</h4>
					
			<p className="text-indent-whole">1 câu con, 1 ý trọn vẹn.</p>
			
				<ul className="list-square">
					<li>I read every night.</li>
					<li>She loves music.</li>
				</ul>

			<p className="margin-top-20 text-indent-whole">Nhận diện: không có and, but, because, when ở giữa.</p>

			<h4 className="margin-y-40">2. Câu ghép</h4>
					
			<p className="text-indent-whole">2 câu con độc lập nối bằng and, but, so, or, yet.</p>
			
				<ul className="list-square">
					<li>I read every night, <strong>and</strong> I take notes.</li>
					<li>It was cold, <strong>so</strong> we stayed in.</li>
				</ul>

			<p className="margin-top-20 text-indent-whole">Nhận diện: thấy dấu phẩy + liên cơ, hai vế đều đứng một mình được.</p>

			<h4 className="margin-y-40">3. Câu phức</h4>
					
			<p className="text-indent-whole">1 câu con chính + 1 câu con phụ với because, when, if, although, while, that.</p>
			
				<ul className="list-square">
					<li><strong>Because</strong> I read every night, I remember more.</li>
					<li>I stop <strong>when</strong> I'm tired.</li>
				</ul>

			<p className="margin-top-20 text-indent-whole">Nhận diện: có từ phụ thuộc ở đầu hoặc giữa câu.</p>
			

			<h4 className="margin-y-40">4. Câu ghép phức</h4>
					
			<p className="text-indent-whole">ít nhất 2 câu con chính + 1 câu con phụ.</p>
			
				<ul className="list-square">
					<li><strong>When</strong> I read, I take notes, <strong>and</strong> I review them later.</li>
				</ul>

			<p className="margin-top-20 text-indent-whole">Nhận diện: vừa thấy when/because, vừa thấy and/but.</p>

			<p className="margin-top-20 text-indent-whole">Thêm nhanh 3 kiểu theo mục đích:</p>
			
				<ol>

					<li><strong>Kể</strong>: You are right.</li>
			
					<li><strong>Hỏi</strong>: Are you right?</li>
			
					<li><strong>Ra lệnh</strong>: Be right.</li>
			
					<li><strong>Cảm thán</strong>: How right you are!</li>
			
				</ol>
			
			<p className="margin-top-20"></p>

			{/* 2. Học thế nào cho nhớ */}

			<h3 className="margin-y-50 text-center">2. Học thế nào cho nhớ</h3>
			
				<ul className="list-square">
			
					<li><strong>Tách trước</strong>, <strong>ghép sau</strong></li>
					<li className="margin-top-20 list-none">Lấy một đoạn tiếng Anh bất kỳ, gạch chân động cơ chính. Đếm được 1 động cơ chia thời = 1 câu con. Luyện 5 phút mỗi ngày, mắt bạn sẽ tự động thấy khung.</li>
			
					<li><strong>Học theo cụm</strong>, <strong>không học lẻ</strong>.</li>
					<li className="margin-top-20 list-none">Đừng học "although". Học cả cụm "Although it was hard, I kept going." Thay danh chủ là dùng được.</li>
			
					<li><strong>Viết lại</strong>, <strong>không viết mới</strong>.</li>
					<li className="list-none">Lấy 1 ý đơn giản, ép nó đi qua 4 khung.</li>
			
				</ul>
			
			<p className="margin-top-20"></p>
			
			<p className="margin-top-20"></p>

			{/* 3. Cách nâng cấp từ đơn giản lên phức tạp */}

			<h3 className="margin-y-50 text-center">3. Cách nâng cấp từ đơn giản lên phức tạp</h3>

			<ul className="list-square">

					<li>Bắt đầu với câu đơn bạn chắc chắn đúng:</li>
					<li className="margin-bottom-20 list-none">I practice daily.</li>

					<li>Thêm lý do bằng because:</li>
					<li className="margin-bottom-20 list-none">Because I practice daily, I improve.</li>
			
					<li>Thêm kết quả bằng and/so:</li>
					<li className="margin-bottom-20 list-none">Because I practice daily, I improve, and I feel confident.</li>

					<li>Thêm điều kiện bằng if:</li>
					<li className="list-none">If I keep this habit, I will improve, and I will feel confident because I practice daily.</li>
			
				</ul>

			<p className="margin-top-20">Bạn không cần viết dài như vậy mãi. Bài tập này chỉ để não quen nối ý. Khi viết thật, bạn sẽ tự rút ngắn lại.</p>

			{/* 4. Áp dụng vào viết hằng ngày */}

			<h3 className="margin-y-50 text-center">4. Áp dụng vào viết hằng ngày</h3>

			<p className="margin-top-20">Dùng quy tắc 3 câu:</p>
			
				<ul className="list-square">
			
					<li>Mở bằng câu đơn. Ngắn.</li>
			
					<li>Nối bằng câu phức với when hoặc because.</li>
			
					<li>Chốt bằng câu ghép với but hoặc so, hoặc một câu hỏi.</li>
			
				</ul>

			<p className="margin-top-20">Ví dụ nhanh:</p>
			
				<ul className="list-square">
					<li>I write every morning. When I write, I think clearer, and my day starts better. Want to try?</li>
				</ul>
			
			<p className="margin-top-20"></p>

			<p>Đọc lên nghe có nhịp, không cần từ khó.</p>
			
			<p>Giữ 4 khung này trong đầu, bạn sẽ hết sợ câu dài. </p>

			<p>Bạn biết mình đang ở đâu, muốn thêm gì, và khi nào nên dừng. Đó là lúc tiếng Anh của bạn bắt đầu nghe tự nhiên.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 15, 2026 · by Meta AI and 🐝Mr. Bee Osn ·</span>
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