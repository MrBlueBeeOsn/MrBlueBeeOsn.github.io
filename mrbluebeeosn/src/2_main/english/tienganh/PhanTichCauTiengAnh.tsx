import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PhanTichCauTiengAnh(): React.JSX.Element {

	const postId = "PhanTichCauTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Hướng Dẫn Phân Tích Câu Tiếng Anh</h1>

			{/* This is the content of English Learning Term. */}

			<p>Phương Pháp 5W – Hiểu Chuẩn Nghĩa Câu Dài Bao Nhiêu Cũng Dễ!</p>

			<p>Bạn thường đọc câu tiếng Anh dài mà không biết bắt đầu hiểu từ đâu?</p>

			<p>Từ hôm nay chỉ cần hỏi đúng 5 câu hỏi quen thuộc theo thứ tự này → bạn nắm rõ nghĩa câu, dù câu phức tạp đến đâu!</p>

			<p className="margin-top-20">Quy tắc 5W thần thánh (ghi nhớ 1 lần dùng mãi mãi)</p>

				<ol className="list-square">

					<li><strong>Who</strong>? – <strong>Ai</strong>? (chủ ngữ, người/things thực hiện hoặc chịu hành động)</li>

					<li><strong>What</strong>? – <strong>Làm gì</strong>? (động từ chính + tân ngữ)</li>

					<li><strong>When</strong>? – <strong>Khi nào</strong>? (thời gian, thì của câu)</li>

					<li><strong>Where</strong>? – <strong>Ở đâu</strong>? (địa điểm)</li>

					<li><strong>Why</strong>? – <strong>Tại sao</strong>? (lý do, mục đích)</li>

				</ol>

			<h3 className="margin-y-50 text-center">Áp dụng thực tế – từng bước chi tiết</h3>

			{/* 1. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">1. My brother is playing football in the park with his friends every weekend because he loves sports.</h3>

					<ol>

						<li>Who? → <strong>My brother</strong> (anh trai tôi)</li>

						<li>What? → <strong>is playing football with his friends</strong> (đang chơi bóng đá với bạn bè)</li>

						<li>When? → <strong>every weekend</strong> (mỗi cuối tuần)</li>

						<li>Where? → <strong>in the park</strong> (trong công viên)</li>

						<li>Why? → <strong>because he loves sports</strong> (vì anh ấy thích thể thao)</li>

					</ol>

				<p className="margin-top-20">→ Nghĩa đầy đủ: Anh trai tôi đang chơi bóng đá với bạn bè trong công viên mỗi cuối tuần vì anh ấy thích thể thao.</p>

			</div>

			{/* 2. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">2. Yesterday, she bought a new red dress at the mall because she needed it for the party.</h3>

					<ol>

						<li>Who? → <strong>she</strong> (cô ấy)</li>

						<li>What? → <strong>bought a new red dress</strong> (mua một chiếc váy đỏ mới)</li>

						<li>When? → <strong>Yesterday</strong> (hôm qua)</li>

						<li>Where? → <strong>at the mall</strong> (ở trung tâm thương mại)</li>

						<li>Why? → <strong>because she needed it for the party</strong> (vì cô ấy cần nó cho bữa tiệc)</li>

					</ol>

				<p className="margin-top-20">→ Nghĩa đầy đủ: Hôm qua cô ấy đã mua một chiếc váy đỏ mới ở trung tâm thương mại vì cần cho bữa tiệc.</p>

			</div>

			{/* 3. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">3. We will travel to Da Lat next month by car to relax after the exam.</h3>

					<ol>

						<li>Who? → <strong>We</strong> (chúng tôi)</li>

						<li>What? → <strong>will travel by car</strong> (sẽ đi bằng xe hơi)</li>

						<li>When? → <strong>next month</strong> (tháng tới)</li>

						<li>Where? → <strong>to Da Lat</strong> (đến Đà Lạt)</li>

						<li>Why? → <strong>to relax after the exam</strong> (để thư giãn sau kỳ thi)</li>

					</ol>

				<p className="margin-top-20">→ Nghĩa đầy đủ: Chúng tôi sẽ đi Đà Lạt bằng xe hơi tháng tới để thư giãn sau kỳ thi.</p>

			</div>

			{/* 4. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">4. The children are watching cartoons on TV in the living room happily every evening.</h3>

					<ol>

						<li>Who? → <strong>The children</strong> (bọn trẻ)</li>

						<li>What? → <strong>are watching cartoons on TV</strong> (đang xem phim hoạt hình trên TV)</li>

						<li>When? → <strong>every evening</strong> (mỗi tối)</li>

						<li>Where? → <strong>in the living room</strong> (trong phòng khách)</li>

						<li>Why? → <strong>happily</strong> (vui vẻ – đây là cách thức, nhưng nếu có lý do thì bổ sung)</li>

					</ol>

				<p className="margin-top-20">→ Nghĩa đầy đủ: Bọn trẻ đang xem phim hoạt hình trên TV trong phòng khách một cách vui vẻ mỗi tối.</p>

			</div>

			{/* 5. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">5. He didn’t go to school yesterday because he was sick.</h3>

					<ol>

						<li>Who? → <strong>He</strong> (anh ấy)</li>

						<li>What? → <strong>didn’t go to school</strong> (không đi học)</li>

						<li>When? → <strong>yesterday</strong> (hôm qua)</li>

						<li>Where? → <strong>to school</strong> (đến trường)</li>

						<li>Why? → <strong>because he was sick</strong> (vì anh ấy bị ốm)</li>

					</ol>

				<p className="margin-top-20">→ Nghĩa đầy đủ: Anh ấy không đi học hôm qua vì bị ốm.</p>

			</div>

			<h3 className="margin-y-50 text-center">Kết luận</h3>

			<p>Chỉ cần hỏi đúng 5 câu hỏi quen thuộc:</p>

			<p><strong>Who</strong>? → <strong>What</strong>? → <strong>When</strong>? → <strong>Where</strong>? → <strong>Why</strong>?</p>
			
			<p>→ Dù gặp câu tiếng Anh dài và phức tạp đến đâu, bạn cũng hiểu chuẩn nghĩa chỉ trong vài giây!</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 20, 2025 · by 🐝Mr. Bee Osn and Grok ·</span>
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