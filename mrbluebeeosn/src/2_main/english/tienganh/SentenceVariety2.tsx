import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SentenceVariety2(): React.JSX.Element {

	const postId = "SentenceVariety2";

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

			<h4 className="margin-bottom-30 text-center">Các loại câu tiếng Anh: Từ rối rắm đến bay bổng chỉ trong 10 phút</h4>

			<p>Bạn có bao giờ viết một câu tiếng Anh dài ngoằng, xong đọc lại thấy… rối như mớ bòng bong?</p>

			<p>Hay toàn viết câu cụt ngủn, đọc như robot?</p>

			<p>Vấn đề không phải bạn thiếu từ vựng. Vấn đề là bạn chưa biết <strong>có những loại câu nào và khi nào thì dùng</strong>.</p>
					
			<p>Bài viết này sẽ cho bạn một hệ thống cực kỳ dễ nhớ – từ câu đơn giản nhất đến câu phức tạp "nghe như người bản xứ" – kèm cách học và áp dụng thực tế.</p>

			{/* 1. Bốn loại câu tiếng Anh cơ bản (ai cũng nên thuộc lòng) */}

			<h3 className="margin-y-50 text-center">1. Bốn loại câu tiếng Anh cơ bản (ai cũng nên thuộc lòng)</h3>

				<table className="margin-y-50">
					<thead>
						<tr>
							<th>Loại câu</th>
							<th>Công thức</th>
							<th>Ví dụ</th>
						</tr>
					</thead>

					<tbody>
						
						<tr>
								<td><strong>Simple</strong> (đơn)</td>
								<td>1 mệnh đề độc lập</td>
								<td>I like coffee.</td>
						</tr>
						
						<tr>
								<td><strong>Compound</strong> (ghép đẳng lập)</td>
								<td>2 mệnh đề độc lập + liên từ (and, but, or, so…)</td>
								<td>I like coffee, but my sister likes tea.</td>
						</tr>

						<tr>
								<td><strong>Complex</strong> (ghép chính phụ)</td>
								<td>1 mệnh đề độc lập + 1 mệnh đề phụ thuộc (because, although, when, if…)</td>
								<td>Although I was tired, I finished my homework.</td>
						</tr>

						<tr>
								<td><strong>Compound</strong>-<strong>Complex</strong> (ghép hỗn hợp)</td>
								<td>2 mệnh đề độc lập + 1+ mệnh đề phụ thuộc</td>
								<td>When I arrived home, I was hungry, so I made a sandwich.</td>
						</tr>
					</tbody>
				</table>

			<p>💡 Mẹo nhận biết nhanh:</p>

				<ul className="list-square">

					<li>Simple:</li>
					<li className="margin-bottom-20 list-none">Chỉ một việc.</li>
			
					<li>Compound:</li>
					<li className="margin-bottom-20 list-none">Hai việc, không việc nào phụ thuộc việc nào.</li>

					<li>Complex:</li>
					<li className="margin-bottom-20 list-none">Một việc chính, một việc phụ (thường có because, although, if, when).</li>

					<li>Compound-Complex:</li>
					<li className="list-none">Hai việc chính + một việc phụ.</li>
			
				</ul>

			{/* 2. Làm sao để học – không phải "nhồi" mà là "chơi" */}

			<h3 className="margin-y-50 text-center">2. Làm sao để học – không phải "nhồi" mà là "chơi"</h3>

			<p>Học cấu trúc câu mà ép bản thân thuộc công thức thì nhanh quên lắm.</p>

			<p>Thay vào đó:</p>

			<p className="margin-top-20"><strong>Cách 1</strong>: <strong>Chơi trò</strong> "<strong>bẻ câu</strong>"</p>

			<p>Lấy một câu đơn:</p>

				<ul className="list-square">

					<li>→ She opened the door.</li>
			
				</ul>

			<p>Hỏi: "Có thể thêm because vào không?"</p>

				<ul className="list-square">

					<li>→ She opened the door because she heard a noise.</li>
					<li className="list-none">Thành complex</li>
			
				</ul>

			<p>Hỏi tiếp: "Có thể nối với một câu khác bằng and không?"</p>

				<ul className="list-square">

					<li>→ She opened the door because she heard a noise, and she screamed.</li>
					<li className="list-none">Thành compound-complex</li>
			
				</ul>

			<p className="margin-top-20">Sau 5 phút, bạn sẽ thấy mình nhìn ra cấu trúc mà không cần phân tích ngữ pháp.</p>

			<p className="margin-top-20"><strong>Cách 2</strong>: <strong>Gắn màu sắc cho từng loại câu</strong></p>

			<p>Khi đọc báo tiếng Anh (BBC, VOA), hãy lấy bút (hoặc highlight trong file) tô:</p>

				<ul className="list-square">
			
					<li>Màu vàng: câu đơn</li>

					<li>Màu xanh: câu ghép đẳng lập</li>

					<li>Màu cam: câu phức</li>

					<li>Màu tím: câu hỗn hợp</li>
			
				</ul>

			<p className="margin-top-20">Sau 5 phút, bạn sẽ thấy mình nhìn ra cấu trúc mà không cần phân tích ngữ pháp.</p>

			<p className="margin-top-20"><strong>Cách 3</strong>: <strong>Nói trước</strong>, <strong>viết sau</strong></p>

			<p>Mỗi tối, hãy nói một câu về ngày của bạn:</p>

				<ul className="list-square">
			
					<li>I woke up late.</li>
					<li className="margin-bottom-20 list-none">Simple</li>

					<li>I woke up late, so I skipped breakfast.</li>
					<li className="margin-bottom-20 list-none">Complex</li>

					<li>Because I woke up late, I skipped breakfast.</li>
					<li className="list-none">Complex</li>
			
				</ul>

			<p className="margin-top-20">Rồi mới viết xuống. Nói giúp não bạn tạo phản xạ tự nhiên hơn.</p>

			{/* 3. Cách xây dựng câu từ đơn giản đến phức tạp (kế hoạch 3 bước) */}

			<h3 className="margin-y-50 text-center">3. Cách xây dựng câu từ đơn giản đến phức tạp (kế hoạch 3 bước)</h3>

			<p className="margin-top-20"><strong>Bước 1</strong>: <strong>Bắt đầu bằng câu đơn</strong> – <strong>nhưng đừng ở đó mãi</strong></p>
			
				<ul className="list-square">
			
					<li className="list-none">Viết một ý thật cơ bản.</li>
			
					<li className="list-none">The boy ran.</li>
			
				</ul>

			<p className="margin-top-20"><strong>Bước 2</strong>: <strong>Thêm một mệnh đề phụ để mở rộng</strong></p>

				<ul className="list-square">
			
					<li className="list-none">Dùng when, because, although, if…</li>
			
					<li className="list-none">Because he was scared, the boy ran.</li>
			
				</ul>

			<p className="margin-top-20"><strong>Bước 3</strong>: <strong>Nối thêm một mệnh đề độc lập bằng and</strong>, <strong>but</strong>, <strong>so</strong>, <strong>or</strong></p>

				<ul className="list-square">
			
					<li className="list-none">Because he was scared, the boy ran, and he didn't look back.</li>
			
				</ul>

			<p className="margin-top-20">Thế là từ 3 từ bạn đã có một câu hỗn hợp (compound-complex) 12 từ, giàu cảm xúc và nhịp điệu.</p>

			<p>🔁 Nguyên tắc vàng: <strong>Mỗi câu phức tạp nên có duy nhất một mệnh đề phụ</strong> nếu bạn mới bắt đầu. Đừng nhồi nhét.</p>

			{/* 4. Cách nhận biết các loại câu khi đọc – mẹo "từ khóa" */}

			<h3 className="margin-y-50 text-center">4. Cách nhận biết các loại câu khi đọc – mẹo "từ khóa"</h3>
					
			<p className="text-indent-whole"></p>
			
				<ul className="list-square">
			
					<li>Thấy <strong>and</strong>, <strong>but</strong>, <strong>or</strong>, <strong>so</strong>, <strong>for</strong>, <strong>nor</strong>, <strong>yet</strong></li>
					<li className=" margin-bottom-20 list-none">→ có thể là compound (nối 2 mệnh đề độc lập)</li>

					<li>Thấy <strong>because</strong>, <strong>although</strong>, <strong>if</strong>, <strong>when</strong>, <strong>while</strong>, <strong>since</strong>, <strong>unless</strong>, <strong>as soon as</strong></li>
					<li className=" margin-bottom-20 list-none">→ complex hoặc compound-complex</li>
			
					<li>Không thấy từ nối nào, chỉ một chủ ngữ + một động từ chính</li>
					<li className="list-none">→ simple</li>
			
				</ul>

			<p className="margin-top-20">Ví dụ thực tế:</p>

			<p className="margin-top-20"></p>
			
				<ul className="list-square">
			
					<li>Although it was raining, we went out.</li>
					<li className=" margin-bottom-20 list-none">Complex – chữ although ở đầu</li>
			
					<li>It was raining, but we went out.</li>
					<li className="list-none">Compound – chữ but ở giữa</li>
			
				</ul>

			<p className="margin-top-20">Thấy sự khác biệt tinh tế chưa? Cả hai đều đúng, nhưng sắc thái khác hẳn.</p>

			{/* 5. Cách áp dụng vào viết blog của bạn – ngay hôm nay */}

			<h3 className="margin-y-50 text-center">5. Cách áp dụng vào viết blog của bạn – ngay hôm nay</h3>

			<p>Đừng cố viết cả bài với toàn câu phức tạp. Sẽ rất giả tạo.</p>

			<p>Thay vào đó, hãy làm theo tỷ lệ này trong một đoạn văn 5 câu:</p>
					
			<p className="text-indent-whole"></p>
			
				<ul className="list-square">
			
					<li>1 câu đơn (tạo điểm nhấn, nghỉ ngơi)</li>

					<li>2 câu ghép đẳng lập (kể chuyện trôi chảy)</li>
			
					<li>1 câu phức (thêm chiều sâu)</li>
			
					<li>1 câu hỗn hợp (kết luận mạnh mẽ)</li>
			
				</ul>

			<p className="margin-top-20"><strong>Ví dụ một đoạn blog bằng tiếng Anh</strong> (chủ đề: học online):</p>

			<p>Online learning is convenient. You can study anywhere, and you can save a lot of time. However, when there is no teacher around, many students feel lost. They procrastinate, and their grades drop quickly. Although technology helps, self-discipline is still the key – without it, no course will work.</p>

			<p>Đếm thử:</p>
			
				<ul className="list-square">

					<li className="list-none">Câu 1: simple</li>

					<li className="list-none">Câu 2: compound</li>

					<li className="list-none">Câu 3: complex (when…)</li>

					<li className="list-none">Câu 4: compound</li>

					<li className="list-none">Câu 5: compound-complex (although… + without…)</li>
			
				</ul>

			<p className="margin-top-20">Nghe rất tự nhiên, không hề "học thuật" khô khan.</p>

			{/* Lời kết: */}

			<h3 className="margin-y-50 text-center">Tóm lại:</h3>

			<p>Học cấu trúc câu tiếng Anh không phải để khoe ngữ pháp, mà để người đọc muốn đọc tiếp</p>

			<p>Bạn không cần thuộc tên các loại câu. Bạn cần cảm được khi nào nên dùng câu ngắn, khi nào nên thêm because, khi nào nối bằng but.</p>
					
			<p className="text-indent-whole"></p>
			
				<ol>
			
					<li>Đọc một đoạn tin tức tiếng Anh, tô màu 4 loại câu như hướng dẫn.</li>
			
					<li>Viết lại một tin nhắn cũ của bạn (vài câu đơn) thành một đoạn có ít nhất 3 loại câu khác nhau.</li>
			
					<li>Đọc to lên. Nếu thấy vui tai, bạn đã đúng.</li>
			
				</ol>

			<p className="margin-top-20">Chỉ một tuần luyện tập, bài viết tiếng Anh của bạn sẽ không còn "cứng nhắc" nữa. Nó sẽ có hồn, có nhịp, và có người đọc.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 15, 2026 · by DPSK and 🐝Mr. Bee Osn ·</span>
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