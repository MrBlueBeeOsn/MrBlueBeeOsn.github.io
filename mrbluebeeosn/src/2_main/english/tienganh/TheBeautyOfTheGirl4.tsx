import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TheBeautyOfTheGirl4(): React.JSX.Element {

	const postId = "TheBeautyOfTheGirl4";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">The Beauty of the Girl
															
				<sup><HashLink smooth to="/tieng-anh/the-beauty-of-the-girl-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-beauty-of-the-girl-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-beauty-of-the-girl-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-beauty-of-the-girl-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-beauty-of-the-girl-5">&nbsp;5&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Thực hành ngay</h4>

			{/* Bài tập 1: Chuyển đổi đơn giản */}
			
			<h3 className="margin-y-50 text-center">Bài tập 1: Chuyển đổi đơn giản</h3>

			<p>Hãy chuyển 5 câu này:</p>

			<p>1. "<strong>Red apple</strong>"</p>
			
				<ul className="list-square">

					<li>Red → Redness</li>

					<li>The redness of the apple</li>
			
				</ul>

			<p className="margin-top-20">2. "<strong>Tall tree</strong>"</p>
			
				<ul className="list-square">

					<li>Tall → Height</li>

					<li>The height of the tree</li>
			
				</ul>

			<p className="margin-top-20">3. "<strong>Sweet candy</strong>"</p>
			
				<ul className="list-square">

					<li>Sweet → Sweetness</li>

					<li>The sweetness of the candy</li>
			
				</ul>

			<p className="margin-top-20">4. "<strong>Soft bed</strong>"</p>
			
				<ul className="list-square">

					<li>Soft → Softness</li>

					<li>The softness of the bed</li>
			
				</ul>

			<p className="margin-top-20">5. "<strong>Bright star</strong>"</p>
			
				<ul className="list-square">

					<li>Bright → Brightness</li>

					<li>The brightness of the star</li>
			
				</ul>

			{/* Bài tập 2: Câu hoàn chỉnh */}

			<h3 className="margin-y-50 text-center">Bài tập 2: Câu hoàn chỉnh</h3>
			
			<p>"<strong>A beautiful girl drank hot coffee</strong>"</p>

			<p><strong>Phân tích</strong>:</p>
			
				<ul className="list-square">

					<li>Beautiful → Beauty → The beauty of the girl</li>

					<li>Hot → Heat → The heat of the coffee</li>
			
				</ul>

			<p className="margin-top-20"><strong>Dịch xuôi</strong>: "Vẻ đẹp của cô gái đã uống cái nóng của cà phê"</p>

			<p>(Nghe lạ nhưng đây là cách người Tây nghĩ!)</p>
			
			{/* Câu chuyện có thật */}
			
			<h3 className="margin-y-50 text-center">Câu chuyện có thật</h3>

			<p>Chị Lan - 30 tuổi</p>

			<p>"Tôi học tiếng Anh 5 năm nhưng đọc email công ty mất cả tiếng. Sếp nước ngoài gửi email 10 dòng, tôi phải đọc 3 lần mới hiểu!</p>

			<p>Email toàn những từ như:</p>
			
				<ul className="list-square">

					<li>important meeting (cuộc họp quan trọng)</li>

					<li>urgent request (yêu cầu khẩn cấp)</li>

					<li>detailed report (báo cáo chi tiết)</li>
			
				</ul>

			<p className="margin-top-20">Tôi cứ phải nhảy qua nhảy lại:</p>

			<ul className="list-square">

					<li>Meeting → important → ghép</li>

					<li>Request → urgent → ghép</li>

					<li>Report → detailed → ghép</li>
			
				</ul>

			<p className="margin-top-20"><strong>Mệt lắm</strong>!</p>

			<p>Sau khi học cách chuyển tính từ thành danh từ:</p>

			<ul className="list-square">

					<li>Important → Importance → The importance of the meeting</li>

					<li>Urgent → Urgency → The urgency of the request</li>

					<li>Detailed → Detail → The detail of the report</li>
			
				</ul>

			<p className="margin-top-20">Bây giờ đọc email 10 dòng chỉ mất 5 phút! Thần kỳ quá!"</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 30, 2025 · by Claud and 🐝Mr. Bee Osn ·</span>
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