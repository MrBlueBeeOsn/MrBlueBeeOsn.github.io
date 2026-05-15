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

			<h4 className="margin-bottom-30 text-center">Hướng dẫn học và áp dụng các loại câu tiếng Anh</h4>

			<p>Viết tiếng Anh hiệu quả không chỉ phụ thuộc vào vốn từ vựng, mà còn nằm ở <strong>cách bạn xây dựng câu</strong>.</p>
					
			<p>Khi biết phân biệt và sử dụng nhiều loại câu khác nhau, bạn sẽ dễ dàng diễn đạt ý tưởng rõ ràng, tự nhiên và giàu nhịp điệu hơn.</p>

			{/* 1. Các loại câu tiếng Anh cơ bản */}

			<h3 className="margin-y-50 text-center">1. Các loại câu tiếng Anh cơ bản</h3>

				<table className="margin-y-50">
					<thead>
						<tr>
							<th>Loại câu</th>
							<th>Đặc điểm</th>
							<th>Ví dụ</th>
						</tr>
					</thead>

					<tbody>
						
						<tr>
								<td><strong>Simple sentence</strong></td>
								<td>Một mệnh đề độc lập</td>
								<td>I like English.</td>
						</tr>
						
						<tr>
								<td><strong>Compound sentence</strong></td>
								<td>Hai mệnh đề độc lập nối bằng liên từ (and, but, so)</td>
								<td>I like English, and I practice every day.</td>
						</tr>

						<tr>
								<td><strong>Complex sentence</strong></td>
								<td>Một mệnh đề chính + mệnh đề phụ (because, although, when)</td>
								<td>I study English because I want a better job.</td>
						</tr>

						<tr>
								<td><strong>Compound-complex sentence</strong></td>
								<td>Kết hợp cả ghép và phức</td>
								<td>I study English because I want a better job, and my teacher helps me a lot.</td>
						</tr>
					</tbody>
				</table>

			{/* 2. Cách nhận biết */}

			<h3 className="margin-y-50 text-center">2. Cách nhận biết</h3>
			
				<ul className="list-square">

					<li><strong>Câu đơn</strong>: chỉ có một động từ chính.</li>
			
					<li><strong>Câu ghép</strong>: có liên từ nối hai mệnh đề ngang hàng (and, but, or, so).</li>
			
					<li><strong>Câu phức</strong>: có mệnh đề phụ bắt đầu bằng because, although, when, if.</li>
			
					<li><strong>Câu ghép-phức</strong>: vừa có liên từ nối mệnh đề ngang hàng, vừa có mệnh đề phụ.</li>
			
				</ul>

			<p className="margin-top-20">👉 Khi đọc báo, sách hoặc xem phim, hãy thử gạch chân các từ nối để phân loại câu.</p>

			{/* 3. Cách học và áp dụng */}

			<h3 className="margin-y-50 text-center">3. Cách học và áp dụng</h3>
			
				<ul className="list-square">

					<li><strong>Bắt đầu từ câu đơn giản</strong>:</li>
					<li className="margin-bottom-20 list-none">I wake up early.</li>

					<li><strong>Ghép câu lại</strong>:</li>
					<li className="margin-bottom-20 list-none">I wake up early, and I drink coffee.</li>
			
					<li><strong>Thêm mệnh đề phụ</strong>:</li>
					<li className="margin-bottom-20 list-none">I drink coffee because I feel sleepy in the morning.</li>

					<li><strong>Kết hợp nhiều lớp</strong>:</li>
					<li className="list-none">I wake up early because I have work, and I drink coffee before I go.</li>
			
				</ul>

			{/* 4. Lộ trình luyện tập */}

			<h3 className="margin-y-50 text-center">4. Lộ trình luyện tập</h3>
			
				<ol>
			
					<li><strong>Tuần 1</strong>: Viết câu đơn giản về thói quen hằng ngày.</li>
			
					<li><strong>Tuần 2</strong>: Ghép câu bằng and, but, so.</li>
			
					<li><strong>Tuần 3</strong>: Thêm mệnh đề phụ với because, although, when.</li>

					<li><strong>Tuần 4</strong>: Viết đoạn văn ngắn (5–6 câu) kết hợp đủ loại câu.</li>
			
				</ol>

			{/* 5. Mẹo học nhanh */}

			<h3 className="margin-y-50 text-center">5. Mẹo học nhanh</h3>
			
				<ul className="list-square">

					<li><strong>Đọc to</strong> để nghe nhịp điệu; nếu hụt hơi, chia câu; nếu quá ngắn, ghép lại.</li>

					<li><strong>Ghi chú từ nối</strong> khi đọc tiếng Anh để nhận diện loại câu.</li>

					<li><strong>Thực hành viết lại</strong>: lấy 3 câu đơn, biến thành câu ghép, rồi thêm mệnh đề phụ.</li>
			
				</ul>

			{/* Kết luận */}

			<h3 className="margin-y-50 text-center">Kết luận</h3>

			<p>Học cách xây dựng câu từ <strong>đơn giản đến phức tạp</strong> là bước quan trọng để nâng cao khả năng viết tiếng Anh. </p>

			<p>Khi bạn quen với việc nhận biết và áp dụng các loại câu, văn bản sẽ trở nên tự nhiên, dễ đọc và giàu sức thuyết phục hơn.</p>

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