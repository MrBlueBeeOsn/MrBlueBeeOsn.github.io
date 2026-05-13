import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TheGaitOfEnglish8(): React.JSX.Element {

	const postId = "TheGaitOfEnglish8";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">The gait of the English
												
				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-1">&nbsp;1&nbsp;</HashLink>
				</sup>
								
				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-8">&nbsp;8&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Học SVOMPT theo đường thẳng</h4>
			
			<p>Tiếng Anh được nghe theo chiều sâu, không phải chiều ngang. Một câu không trải ra trên giấy mà tiến về phía trước, từ thứ ở ngay trước mặt bạn đến thứ mờ dần ở chân trời.</p>
					
			<p>Nếu dựng câu thành một trục đứng, đỉnh là nơi xa nhất, đáy là nơi gần nhất, bạn sẽ thấy đúng thứ tự mà tai người bản xứ chờ đợi.</p>

			{/* 1. Sáu lớp, từ xa về gần */}
			
			<h3 className="margin-y-50 text-center">1. Sáu lớp, từ xa về gần</h3>
			
			<p>Hãy nhìn lên từ chân bạn. Càng lên cao, chi tiết càng lùi xa:</p>
			
				<ul className="list-square">

					<li><strong>T</strong> – <strong>Time</strong></li>
					<li className="margin-bottom-20 list-none">Tầng cao nhất, mờ nhất. Khi nào câu xảy ra. after work, this morning, every Sunday.</li>

					<li><strong>P</strong> – <strong>Place</strong></li>
					<li className="margin-bottom-20 list-none">Ngay dưới thời gian. Ở đâu. in my small kitchen, on the bus, in Da Nang.</li>

					<li><strong>M</strong> – <strong>Manner</strong></li>
					<li className="margin-bottom-20 list-none">Cách hành động diễn ra. slowly, quietly, with care. Nó luôn bám sát động từ.</li>

					<li><strong>O</strong> – <strong>Object</strong></li>
					<li className="margin-bottom-20 list-none">Vật bạn chạm tới. dinner, a story, no one. Có câu không cần tầng này.</li>

					<li><strong>V</strong> – <strong>Verb</strong></li>
					<li className="margin-bottom-20 list-none">Chuyển động cốt lõi. cook, make, waits.</li>

					<li><strong>S</strong> – <strong>Subject</strong></li>
					<li className="margin-bottom-20 list-none">Đáy trục, gần nhất và rõ nhất. Ai bắt đầu mọi thứ. I, my mother, the rain.</li>
			
				</ul>

			<p className="margin-top-20">Xếp lại thành hình, bạn có:</p>
			
				<ul className="list-square">

					<li className="list-none"><strong>T</strong></li>

					<li className="list-none">↑</li>
					<li className="list-none"><strong>P</strong></li>

					<li className="list-none">↑</li>
					<li className="list-none"><strong>M</strong></li>

					<li className="list-none">↑</li>
					<li className="list-none"><strong>O</strong></li>

					<li className="list-none">↑</li>
					<li className="list-none"><strong>V</strong></li>

					<li className="list-none">↑</li>
					<li className="list-none"><strong>S</strong></li>
			
				</ul>

			<p className="margin-top-20">Đọc từ dưới lên, câu tự nhiên bật ra. Lấy một ví dụ:</p>
			
				<ul className="list-square">
			
					<li className="list-none">after work</li>
			
					<li className="list-none">in my small kitchen</li>
			
					<li className="list-none">slowly</li>

					<li className="list-none">dinner</li>
			
					<li className="list-none">cook</li>
			
					<li className="list-none">I</li>
			
				</ul>

			<p className="margin-top-20">Đọc ngược từ đáy: I cook dinner slowly in my small kitchen after work.</p>

			<p>Bạn không cần nhớ công thức. Bạn chỉ bước từ bậc gần nhất lên bậc xa nhất.</p>

			{/* 2. Vì sao thứ tự này nghe nhẹ */}
			
			<h3 className="margin-y-50 text-center">2. Vì sao thứ tự này nghe nhẹ</h3>

			<p>Não nghe theo thời gian thực. Nó cần biết ai làm gì trước, rồi mới mở rộng ra cách làm, nơi chốn, thời điểm. Đặt thời gian ở đáy, bạn bắt người nghe nhìn ra chân trời trước khi biết ai đang đứng trước mặt.</p>

			<p>Tiếng Việt cho phép linh hoạt, nên ta hay kéo thời gian vào giữa. Tiếng Anh vẫn hiểu, nhưng khi bạn giữ đúng trục từ S lên T, người nghe không phải quay lại sửa hình ảnh trong đầu. Câu trôi một mạch.</p>
			
			<p className="margin-top-20">So sánh nhanh:</p>
			
				<ul className="list-square">
			
					<li><strong>Lệch trục</strong>:</li>
					<li className="margin-bottom-20 list-none">I in the morning drink coffee quickly at home.</li>

					<li><strong>Đúng trục</strong>:</li>
					<li className="margin-bottom-20 list-none">I drink coffee quickly at home in the morning.</li>
			
				</ul>

			{/* 3. Tập nhìn thay vì nhớ */}
			
			<h3 className="margin-y-50 text-center">3. Tập nhìn thay vì nhớ</h3>

			<p>Đừng học thuộc SVOMPT. Trước khi nói, dựng tháp trong đầu ba giây:</p>
			
				<ol>

					<li>Đáy: ai? → my friend</li>

					<li>Trên đó: làm gì? → teaches</li>

					<li>Chạm gì? → guitar</li>

					<li>Thế nào? → patiently</li>

					<li>Ở đâu? → online</li>

					<li>Đỉnh: khi nào? → on weekends</li>
			
				</ol>

			<p className="margin-top-20">Viết ra để kiểm tra:</p>

			<p className="margin-top-20"></p>
			
				<ul className="list-square">
			
					<li className="list-none">on weekends</li>
			
					<li className="list-none">online</li>
			
					<li className="list-none">patiently</li>

					<li className="list-none">guitar</li>
			
					<li className="list-none">teaches</li>
			
					<li className="list-none">my friend</li>
			
				</ul>

			<p className="margin-top-20">Giữ hình ảnh trục đứng này, mỗi lần nói bạn không còn sắp chữ. Bạn chỉ bước từ chỗ gần nhất ra chỗ xa nhất. Người nghe đi cùng bạn hết con đường, và câu rơi đúng chỗ mà không cần sửa.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 14, 2026 · by Meta AI and 🐝Mr. Bee Osn ·</span>
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