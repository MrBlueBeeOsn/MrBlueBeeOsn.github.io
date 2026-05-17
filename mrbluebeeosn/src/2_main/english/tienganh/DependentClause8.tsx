import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DependentClause8(): React.JSX.Element {

	const postId = "DependentClause8";

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

			<h4 className="margin-bottom-30 text-center">Mình học dependent clause bằng cách mổ xẻ câu thật</h4>

			<p>Không có công thức nào giúp bạn nhớ lâu bằng việc cầm một câu, bóc nó ra, và nhìn xem từng mảnh làm việc gì.</p>
					
			<p>Dưới đây là 9 câu mình hay dùng để dạy, mỗi câu là một kiểu dependent clause khác nhau. Mình viết chậm, chỉ đúng chỗ cần nhìn.</p>
			
			{/* Nhóm 1: Biến cả sự việc thành một món đồ */}

			<h3 className="margin-y-50 text-center">Nhóm 1: Biến cả sự việc thành một món đồ</h3>

			<h4 className="margin-y-40">1. </h4>
			
				<ul className="list-square">
			
					<li>I know <strong>that she left</strong>.</li>
					<li className="list-none">Tôi biết là cô ấy đã đi rồi.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Khung chính: I know [cái gì đó].</p>

			<p className="text-indent-whole">Mảnh phụ: that she left</p>

			<p className="text-indent-whole">→ Nó ngồi đúng chỗ tân ngữ. Bạn thay cả cụm bằng "it" thì câu vẫn chạy.</p>

			<ul className="list-square">
			
					<li>I know <strong>it</strong>.</li>
					<li className="list-none">Tôi biết (điều đó) mà.</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Vậy đây là noun clause.</p>

			<p className="text-indent-whole"><strong>That</strong> ở đây không dịch. Nó chỉ là cái móc báo hiệu sắp có một mệnh đề, giúp người đọc không bị vấp giữa know và she. Trong văn nói bạn bỏ được, trong email công việc giữ lại cho sạch.</p>


			<h4 className="margin-y-40">2. </h4>
			
				<ul className="list-square">
			
					<li><strong>What you said yesterday</strong> hurt me.</li>
					<li className="list-none"><strong>Những gì bạn nói ngày hôm qua</strong> đã làm tổn thương tôi.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Khung chính: [cái gì đó] hurt me.</p>

			<p className="text-indent-whole">Mảnh phụ: What you said yesterday</p>

			<p className="text-indent-whole">→ Cả cụm làm chủ ngữ. What vừa là từ nối vừa làm tân ngữ của said. Bạn không thể bỏ what, vì bỏ là mất tân ngữ.</p>

			<p className="text-indent-whole">Cảm giác câu này khác hẳn:</p>

			<ul className="list-square">
			
					<li><strong>Your words</strong> hurt me</li>
					<li className="list-none"><strong>Lời nói của bạn</strong> làm tổn thương tôi.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Dùng what, bạn nhấn vào hành động nói, không phải từ ngữ.</p>

			{/* Nhóm 2: Dán nhãn để biết đang nói về ai, cái nào */}

			<h3 className="margin-y-50 text-center">Nhóm 2: Dán nhãn để biết đang nói về ai, cái nào</h3>

			<h4 className="margin-y-40">4. </h4>
			
				<ul className="list-square">
			
					<li>The developer <strong>who fixed the bug</strong> quit yesterday.</li>
					<li className="list-none">Người lập trình viên <strong>người mà sửa cái lỗi đó</strong> đã nghỉ việc ngày hôm qua.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Danh từ cần làm rõ: The developer</p>

			<p className="text-indent-whole">Mảnh phụ: who fixed the bug</p>

			<p className="text-indent-whole">→ who là chủ ngữ của fixed, nên không được lược. Không có mệnh đề này, bạn không biết developer nào nghỉ.</p>

			<p className="text-indent-whole">Đây là restrictive, không có dấu phẩy. Thông tin là bắt buộc để xác định.</p>

			<p className="margin-top-20 text-indent-whole">So sánh ngay:</p>
			
				<ul className="list-square">
			
					<li>The developer, <strong>who fixed the bug</strong>, quit yesterday.</li>
					<li className="list-none">Người lập trình viên, <strong>người mà đã sửa lỗi đó</strong>, đã nghỉ việc ngày hôm qua.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Thêm hai dấu phẩy, nghĩa đổi. Giờ chỉ có một developer trong ngữ cảnh, và việc fix bug chỉ là thông tin thêm. Bạn không dùng that trong kiểu có phẩy này.</p>


			<h4 className="margin-y-40">5. </h4>
			
				<ul className="list-square">
			
					<li>This is the café <strong>where we first met</strong>.</li>
					<li className="list-none">Đây là quán cà phê nơi chúng ta lần đầu gặp gỡ.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>where</strong> = <strong>at which</strong>. Nó đứng sau danh từ chỉ nơi chốn. Lỗi phổ biến: "where we first met at". Thừa at vì where đã mang giới từ rồi.</p>


			<h4 className="margin-y-40">6. </h4>
			
				<ul className="list-square">
			
					<li>I still remember the day <strong>when everything changed</strong>.</li>
					<li className="list-none">Tôi vẫn nhớ như in cái ngày mà mọi thứ thay đổi.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>when</strong> = <strong>on which</strong>. Sau danh từ chỉ thời gian, when tự nhiên hơn that. Nếu bạn viết "the day that everything changed" vẫn đúng, nhưng when tạo cảm giác kể chuyện.</p>

			{/* Nhóm 3: Cho câu một bối cảnh */}

			<h3 className="margin-y-50 text-center">Nhóm 3: Cho câu một bối cảnh</h3>

			<h4 className="margin-y-40">7. </h4>
			
				<ul className="list-square">
			
					<li><strong>When she left</strong>, the room went quiet.</li>
					<li className="list-none">Khi cô ấy rời đi, căn phòng trở nên yên ắng.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Mảnh phụ đứng đầu: When she left</p>

			<p className="text-indent-whole">→ trả lời khi nào. Dấu phẩy bắt buộc vì đảo trật tự</p>

			<p className="margin-top-20 text-indent-whole">Đổi chỗ:</p>

			<ul className="list-square">
			
					<li>The room went quiet <strong>when she left</strong>.</li>
					<li className="list-none">Căn phòng bỗng trở nên yên ắng khi cô ấy rời đi.</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Không cần phẩy, và trọng tâm dồn vào "went quiet". Cùng một sự thật, vị trí đổi thì giọng kể đổi.</p>

			<h4 className="margin-y-40">8. </h4>
			
				<ul className="list-square">
			
					<li><strong>Although it was expensive</strong>, we bought it.</li>
					<li className="list-none">Mặc dù nó đắt, chúng tôi vẫn mua.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>although</strong> dựng một chướng ngại. Vế chính vượt qua chướng ngại đó. Đừng thêm but ở sau. Người Việt hay viết "Although... but..." vì dịch từ "mặc dù... nhưng...". Tiếng Anh chỉ cần một móc.</p>


			<h4 className="margin-y-40">9. </h4>
			
				<ul className="list-square">
			
					<li>We worked late <strong>so that we could finish before the client arrived</strong>.</li>
					<li className="list-none">Chúng tôi đã làm việc muộn để có thể hoàn thành công việc trước khi khách hàng đến.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>so that</strong> chỉ mục đích, không phải kết quả. Sau so that bạn thường thấy can, could, will, would. Nếu bỏ that, thành "so we could finish", người đọc có thể hiểu là kết quả tình cờ, không phải kế hoạch. Một chữ that giữ ý định rõ ràng.</p>

			{/* Cách nhìn nhanh khi bạn gặp câu mới */}

			<h3 className="margin-y-50 text-center">Cách nhìn nhanh khi bạn gặp câu mới</h3>

			<p>1. Tìm <strong>động từ chính không nằm sau từ nối</strong>. Đó là xương sống.</p>

			<p>2. Phần còn lại có chủ ngữ + động từ mà bắt đầu bằng that, what, who, which, where, when, because, although, if, unless... là <strong>dependent</strong>.</p>

			<p>3. Hỏi:</p>
			
				<ul className="list-square">
			
					<li>Cụm đó thay được bằng "it/something" không?</li>
					<li className="margin-bottom-20 list-none">→ <strong>noun</strong>.</li>
			
					<li>Bỏ đi thì danh từ có còn rõ không?</li>
					<li className="margin-bottom-20 list-none">→ <strong>adjective</strong>.</li>
			
					<li>Trả lời khi nào/tại sao/dù gì?</li>
					<li className="list-none">→ <strong>adverb</strong>.</li>
			
				</ul>

			<p className="margin-top-20">Làm với ba câu mỗi ngày, không cần ghi chép. Sau một tuần, mắt bạn tự tách lớp khi đọc, tay tự thêm tầng khi viết.</p>

			<p>Và câu của bạn sẽ hết cụt không phải vì dài hơn, mà vì mỗi ý chính luôn đi kèm lý do, thời điểm, và con người cụ thể của nó.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 17, 2026 · by Meta AI and 🐝Mr. Bee Osn ·</span>
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