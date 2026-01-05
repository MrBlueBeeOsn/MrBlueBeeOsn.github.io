import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function BangDongTuBatQuyTac(): React.JSX.Element {

	const postId = "BangDongTuBatQuyTac";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Động từ bất quy tắc trong tiếng Anh</h1>

			<h4 className="margin-bottom-30 text-center">Bảng đầy đủ & cách sử dụng chi tiết nhất (2025)</h4>

			<p>Động từ bất quy tắc (irregular verbs) là “cơn ác mộng” của rất nhiều người học tiếng Anh, vì chúng không theo quy tắc thêm -ed như động từ thường. Tuy nhiên, chỉ cần nắm vững khoảng 60–70 động từ phổ biến nhất, bạn đã có thể giao tiếp tự tin, viết email chuyên nghiệp, thi IELTS/TOEIC đạt điểm cao và thậm chí nói chuyện như người bản xứ ở mức trung cấp – cao cấp.</p>
			
			<p>Dưới đây là bảng động từ bất quy tắc phổ biến nhất (được cập nhật theo mức độ sử dụng thực tế năm 2025), kèm giải thích cách dùng rõ ràng, dễ nhớ.</p>

			<h3 className="margin-y-50 text-center">Bảng động từ bất quy tắc phổ biến nhất</h3>

			<table className="margin-y-50">
					<thead>
						<tr>
							<th>STT</th>
							<th>Hiện tại đơn (thêm -s/es)</th>
							<th>Quá khứ đơn (V2)</th>
							<th>Quá khứ phân từ (V3)</th>
							<th>Nghĩa phổ biến</th>
						</tr>
					</thead>

					<tbody>

						<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
						</tr>

						<tr>
								<td>59</td>
								<td>catches</td>
								<td>caught</td>
								<td>caught</td>
								<td>bắt, nắm lấy</td>
						</tr>

						<tr>
								<td>60</td>
								<td>throws</td>
								<td>threw</td>
								<td>thrown</td>
								<td>ném, quăng</td>
						</tr>
						
					</tbody>
				</table>

			

			<h3 className="margin-y-50 text-center">Cách sử dụng 3 cột V1 – V2 – V3 một cách dễ nhớ</h3>

			{/* V1: Nguyên thể / Hiện tại */}

			<h4>V1: 🕒 Hiện tại đơn (Present Simple)</h4>
					
			<p className="margin-top-20 text-indent-whole">Nguyên thể / Hiện tại (thêm s/es cho he/she/it)</p>
			
				<ul className="list-square">
			
					<li>She goes to school every day.</li>

					<li>I go to school every day.</li>

					<li>She plays the piano very well.</li>

					<li>They watch TV in the evening.</li>

					<li>He works in a bank.</li>

					<li>We like English.</li>
			
				</ul>

			<p className="margin-top-20">👉 Dùng để diễn tả thói quen, sự thật hiển nhiên, hoặc hành động lặp lại.</p>

			{/* V2: Quá khứ đơn */}

			<h4>V2: ⏳ Quá khứ đơn (Past Simple)</h4>

			<p className="margin-top-20 text-indent-whole">Chỉ dùng trong thì Quá khứ đơn</p>
			
				<ul className="list-square">

					<li>Yesterday I went to the cinema.</li>

					<li>I went to school yesterday.</li>

					<li>She played the piano last night.</li>

					<li>They watched TV two hours ago.</li>

					<li>He worked in a bank last year.</li>

					<li>We liked the movie.</li>
			
				</ul>

			<p className="margin-top-20">👉 Dùng để diễn tả hành động đã xảy ra và kết thúc trong quá khứ, thường đi kèm các từ chỉ thời gian như yesterday, last week, ago.</p>

			{/* V3: Quá khứ phân từ (Past Participle) */}

			<h4>V3: Quá khứ phân từ (Past Participle)</h4>

			<p className="margin-top-20 text-indent-whole">1️⃣ Hiện tại hoàn thành (have/has + V3)</p>
			
				<ul className="list-square">

					<li>I have just gone home.</li>
					
					<li>I have finished my homework.</li>

					<li>She has visited Paris three times.</li>

					<li>They have just eaten lunch.</li>

					<li>He has already seen that movie.</li>
			
				</ul>

			<p className="margin-top-20">👉 Dùng để diễn tả hành động đã xảy ra nhưng còn liên quan đến hiện tại, hoặc kinh nghiệm.</p>

			<p className="margin-top-20 text-indent-whole">2️⃣ Quá khứ hoàn thành (had + V3)</p>
			
				<ul className="list-square">

					<li>I had finished my homework before dinner.</li>

					<li>She had visited Paris before she moved to London.</li>

					<li>They had eaten lunch when I arrived.</li>

					<li>He had seen that movie before last week.</li>
			
				</ul>

			<p className="margin-top-20">👉 Dùng để diễn tả hành động xảy ra trước một hành động khác trong quá khứ.</p>

			<p className="margin-top-20 text-indent-whole">3️⃣ Tương lai hoàn thành (will have + V3)</p>
			
				<ul className="list-square">

					<li>I will have finished my homework by 9 p.m.</li>

					<li>She will have visited Paris by the end of this year.</li>

					<li>They will have eaten lunch before the meeting starts.</li>

					<li>He will have seen that movie by tomorrow.</li>
			
				</ul>

			<p className="margin-top-20">👉 Dùng để diễn tả hành động sẽ hoàn thành trước một thời điểm trong tương lai.</p>
					
			<p className="margin-top-20 text-indent-whole">4️⃣ Thể bị động (be + V3)</p>
			
				<ul className="list-square">

					<li>The letter was written by her.</li>
					
					<li>The homework is finished by the student. (hiện tại đơn)</li>

					<li>The homework was finished yesterday. (quá khứ đơn)</li>

					<li>The homework will be finished tomorrow. (tương lai đơn)</li>

					<li>The homework has been finished. (hiện tại hoàn thành)</li>
			
				</ul>

			<p className="margin-top-20">👉 Dùng để nhấn mạnh hành động hoặc đối tượng chịu tác động, không nhấn mạnh người thực hiện.</p>

			<h3 className="margin-y-50 text-center">Mẹo học nhanh & nhớ lâu (được hàng ngàn học viên áp dụng thành công)</h3>

			<h4 className="margin-top-30 margin-bottom-20">1. Học theo nhóm có quy luật phát âm (rất hiệu quả):</h4>
					
				<ul className="list-square">
			
					<li>Nhóm nguyên vẹn: cuts-cut-cut / hits-hit-hit / puts-put-put</li>
			
					<li>Nhóm đổi nguyên âm: sings-sang-sung / drinks-drank-drunk / swims-swam-swum</li>
			
					<li>Nhóm V2 & V3 giống nhau: buys-bought-bought / brings-brought-brought</li>

					<li>Nhóm “đi & đến” đặc biệt: goes-went-gone / comes-came-come</li>
			
				</ul>

			<h4 className="margin-top-30 margin-bottom-20">2. Học theo câu chuyện ngắn:</h4>
			
				<ul className="list-square">
			
					<li>Yesterday I took a photo, but today I have taken many photos already.</li>
			
				</ul>
			
			<h4 className="margin-top-30 margin-bottom-20">3. Flashcard 3 mặt (rất mạnh):</h4>
					
				<ul className="list-square">
			
					<li>Mặt 1: goes</li>
			
					<li>Mặt 2: went</li>
			
					<li>Mặt 3: gone + câu ví dụ</li>
			
				</ul>

			<h4 className="margin-top-30 margin-bottom-20">4. Ưu tiên 30 động từ đầu tiên → chiếm ~85% tần suất xuất hiện trong giao tiếp & bài thi.</h4>
					
			<p>Hãy in bảng này ra, dán lên tường, học mỗi ngày 10 động từ trong 1 tuần. Sau 6 tuần bạn sẽ nắm chắc gần như toàn bộ động từ bất quy tắc hay gặp nhất!</p>

			<p>Chúc bạn học tốt và sớm “thoát kiếp” động từ bất quy tắc! 💪</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>January 05, 2026 · by Grok and 🐝Mr. Bee Osn  ·</span>
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