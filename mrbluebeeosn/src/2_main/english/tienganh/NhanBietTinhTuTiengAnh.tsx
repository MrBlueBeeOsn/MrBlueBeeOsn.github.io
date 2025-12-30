import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NhanBietTinhTuTiengAnh(): React.JSX.Element {

	const postId = "NhanBietTinhTuTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Bí Quyết Nhận Biết Tính Từ Tiếng Anh Nhanh Như Chớp Qua Đuôi Từ</h1>

			<p>Bạn có bao giờ cảm thấy bối rối khi phải phân biệt <strong>tính từ</strong> (<strong>adjective</strong>) với các từ loại khác trong câu? Đừng lo! Trong tiếng Anh, hầu hết tính từ đều để lại “dấu vân tay” rất rõ ràng qua <strong>đuôi từ</strong> (<strong>suffix</strong>). Chỉ cần ghi nhớ khoảng 8–10 đuôi phổ biến nhất, bạn đã có thể đoán đúng đến 85–90% các tính từ khi làm bài thi, viết luận hay giao tiếp hàng ngày.</p>
			
			<p>Dưới đây là hướng dẫn chi tiết, sinh động và dễ nhớ nhất để bạn “bắt bài” tính từ chỉ trong tích tắc!</p>

			<h3 className="margin-y-50 text-center">Tại sao đuôi từ lại “bật mí” tính từ?Tóm tắt các đuôi tính từ phổ biến nhất</h3>

			<p>Tính từ thường được tạo ra từ danh từ hoặc động từ bằng cách thêm hậu tố. Mỗi hậu tố mang một ý nghĩa đặc trưng, giúp ta nhanh chóng nhận diện vai trò của từ trong câu.</p>
					
			<p>Dưới đây là <strong>bảng tóm tắt các đuôi tính từ phổ biến nhất</strong> kèm rất nhiều ví dụ thực tế:</p>

			<table className="margin-y-50">
					<thead>
						<tr>
							<td>Đuôi từ</td>
							<th>Ý nghĩa chính</th>
							<th>Ví dụ điển hình (rất hay gặp)</th>
							<th>Câu ví dụ minh họa</th>
						</tr>
					</thead>

					<tbody>

						<tr>
								<td>-<strong>able</strong> / -<strong>ible</strong></td>
								<td>Có thể… / đáng…</td>
								<td>comfortable, responsible, flexible, visible, incredible</td>
								<td>This chair is very <strong>comfortable</strong>.</td>
						</tr>
						
						<tr>
								<td>-<strong>ous</strong></td>
								<td>Đầy… / có nhiều…</td>
								<td>dangerous, famous, delicious, curious, enormous</td>
								<td>Be careful! The road is <strong>dangerous</strong> at night.</td>
						</tr>
						
						<tr>
								<td>-<strong>ful</strong></td>
								<td>Đầy… / có chất lượng tốt</td>
								<td>beautiful, careful, helpful, successful, powerful</td>
								<td>She gave me a <strong>helpful</strong> suggestion.</td>
						</tr>

						<tr>
								<td>-<strong>less</strong></td>
								<td>Không… / thiếu…</td>
								<td>hopeless, careless, homeless, endless, useless</td>
								<td>It’s <strong>useless</strong> to argue with him.</td>
						</tr>

						<tr>
								<td>-<strong>al</strong></td>
								<td>Thuộc về… / liên quan đến…</td>
								<td>national, personal, natural, social, traditional</td>
								<td>We celebrated the <strong>national</strong> holiday yesterday.</td>
						</tr>

						<tr>
								<td>-<strong>ic</strong> / -<strong>ical</strong></td>
								<td>Có tính chất… / thuộc về…</td>
								<td>economic, scientific, historic, romantic, psychological</td>
								<td>This is a very <strong>romantic</strong> place for couples.</td>
						</tr>
						
						<tr>
								<td>-<strong>ive</strong></td>
								<td>Có xu hướng… / mang tính…</td>
								<td>active, creative, attractive, effective, sensitive</td>
								<td>She is a very <strong>creative</strong> designer.</td>
						</tr>
						
						<tr>
								<td>-<strong>y</strong></td>
								<td>Có đặc điểm… / giống như…</td>
								<td>happy, rainy, sunny, healthy, tasty, cloudy</td>
								<td>The weather is <strong>sunny</strong> and perfect for a picnic!</td>
						</tr>

						<tr>
								<td>-<strong>ed</strong></td>
								<td>Cảm thấy… (phân từ quá khứ)</td>
								<td>bored, tired, excited, interested, surprised</td>
								<td>I felt really <strong>excited</strong> when I heard the news.</td>
						</tr>

						<tr>
								<td>-<strong>ing</strong></td>
								<td>Gây ra cảm giác… (phân từ hiện tại)</td>
								<td>boring, tiring, interesting, exciting, confusing</td>
								<td>The movie was so <strong>boring</strong> that I fell asleep.</td>
						</tr>
					</tbody>
				</table>

			<h3 className="margin-y-50 text-center">Mẹo “bắt bài” siêu nhanh khi làm bài</h3>

			<p>Gặp các đuôi -<strong>able</strong>, -<strong>ible</strong>, -<strong>ous</strong>, -<strong>ful</strong>, -<strong>less</strong>, -<strong>al</strong>, -<strong>ic</strong>, -<strong>ive</strong>, -<strong>y</strong> → gần như chắc chắn là tính từ (90% trường hợp).</p>

			<p>Cặp đôi -<strong>ed</strong> vs -<strong>ing</strong> cực kỳ phổ biến trong bài thi:</p>

				<ul className="list-square">
			
					<li>-<strong>ed</strong> → cảm xúc của <strong>người</strong> (I’m interested / bored / tired…)</li>
			
					<li>-<strong>ing</strong> → đặc điểm của <strong>sự việc</strong> (The lesson is interesting / boring / tiring…)</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">Một số ví dụ minh họa sinh động</h3>

			<p>Hãy tưởng tượng những tình huống đời thường sau:</p>
			
				<ul className="list-square">

					<li>Cô ấy rất <strong>careful</strong> khi lái xe → cẩn thận (người cảm thấy)</li>

					<li>Con đường này <strong>dangerous</strong> lắm! → nguy hiểm (đặc điểm của đường)</li>

					<li>Món ăn này <strong>delicious</strong> quá! → ngon tuyệt (mô tả món ăn)</li>

					<li>Tôi cảm thấy <strong>hopeless</strong> khi thi trượt lần thứ ba → tuyệt vọng (cảm xúc cá nhân)</li>
			
					<li>Bộ phim đó <strong>exciting</strong> từ đầu đến cuối → hấp dẫn, gây hứng thú</li>
			
				</ul>

			<p className="margin-top-20">Chỉ 10 phút mỗi ngày, sau 3 ngày bạn sẽ thấy: Tiếng Anh không còn là “động từ lằng nhằng” nữa, mà chỉ còn 3 cặp đấu tay đôi vui vẻ và dễ nhớ!</p>

			<h3 className="margin-y-50 text-center">Tóm lại – Top 8 đuôi “vàng” cần ghi nhớ ngay hôm nay</h3>

			<p>-<strong>able</strong>/-<strong>ible</strong> – <strong>ous</strong> – <strong>ful</strong> – <strong>less</strong> – <strong>al</strong> – <strong>ic</strong>/-<strong>ical</strong> – <strong>ive</strong> – <strong>y</strong></p>
					
			<p>Chỉ cần nắm vững 8 đuôi này, bạn đã có “vũ khí bí mật” để nhận diện tính từ cực nhanh trong bài đọc hiểu, điền từ, viết câu hay thậm chí khi nói chuyện với người bản xứ.</p>
			
			<p>Hãy thử áp dụng ngay hôm nay: lấy một bài báo tiếng Anh, gạch chân tất cả từ có đuôi trong danh sách trên và xem bạn đoán đúng bao nhiêu % nhé!</p>

			<p>Chúc bạn học tốt và sớm trở thành “pro” nhận diện tính từ! 🌟</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 28, 2025 · by Grok and 🐝Mr. Bee Osn  ·</span>
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