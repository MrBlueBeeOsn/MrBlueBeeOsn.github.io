import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';
import SVOMPT from '@/components/method/SVOMPT';

export default function TheGaitOfEnglish6(): React.JSX.Element {

	const postId = "TheGaitOfEnglish6";

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

			<h4 className="margin-bottom-30 text-center">SVOMPT — Nghệ thuật sắp xếp câu tiếng Anh theo một đường thẳng</h4>

			<p>SVOMPT là khung trật tự câu tiếng Anh cơ bản: <strong>Subject</strong> → <strong>Verb</strong> → <strong>Object</strong> → <strong>Manner</strong> → <strong>Place</strong> → <strong>Time</strong>.</p>
			
			<p>Khi nắm vững thứ tự này, bạn nói tự nhiên hơn, giảm sai sót khi thêm trạng ngữ, và dễ điều chỉnh nhấn nhá khi cần. </p>
					
			<p>Một hình ảnh trực quan mạnh mẽ để ghi nhớ là tưởng tượng các thành phần này xuất hiện theo <strong>một đường thẳng đi từ dưới lên</strong>, <strong>từ gần tới xa</strong>; mỗi thành phần hiện ra khi bạn “đi” dọc theo đường thẳng rồi biến mất khi bạn tiếp tục.</p>

			{/* 1. Thành phần và vai trò */}
			
			<h3 className="margin-y-50 text-center">1. Thành phần và vai trò</h3>
			
				<ul className="list-square">

					<li className="list-none"><strong>Time</strong> xác định thời điểm hoặc khoảng thời gian hành động diễn ra.</li>

					<li className="list-none"><strong>Place</strong> cho biết nơi xảy ra hành động.</li>

					<li className="list-none"><strong>Manner</strong> mô tả cách thức hành động được thực hiện.</li>

					<li className="list-none"><strong>Object</strong> là người hoặc vật chịu tác động của hành động.</li>

					<li className="list-none"><strong>Subject</strong> là người hoặc vật thực hiện hành động.</li>

					<li className="list-none"><strong>Verb</strong> là động từ chính, biểu thị hành động hoặc trạng thái.</li>

					<li className="margin-bottom-20 list-none"><strong>Subject</strong> là người hoặc vật thực hiện hành động.</li>
			
				</ul>

			<p className="margin-top-20">Quy tắc thực tế: khi có nhiều trạng ngữ, thứ tự sau động từ thường là <strong>Manner</strong> → <strong>Place</strong> → <strong>Time</strong>.</p>

			{/* 2. Hình dung đường thẳng để nói trôi chảy */}
			
			<h3 className="margin-y-50 text-center">2. Hình dung đường thẳng để nói trôi chảy</h3>

			<p>Hãy tưởng tượng một đường thẳng bắt đầu ngay trước mặt bạn, thấp và gần, rồi vươn lên về phía trước và ra xa. Khi nói, bạn “bước” dọc theo đường thẳng đó:</p>

			<SVOMPT />

			<p><strong>S</strong> xuất hiện đầu tiên gần bạn, <strong>V</strong> xuất hiện tiếp theo, <strong>O</strong> hiện ra sau <strong>V</strong>, rồi <strong>M</strong>, <strong>P</strong>, <strong>T</strong> lần lượt xuất hiện ở phần xa hơn. Hình ảnh này giúp bạn giữ thứ tự trạng ngữ đúng chỗ khi nói nhanh, vì bạn chỉ cần đọc theo trình tự mà đường thẳng đưa ra.</p>

			{/* 3. Ví dụ mẫu */}
			
			<h3 className="margin-y-50 text-center">3. Ví dụ mẫu</h3>

			<p>I read the book quietly in the library yesterday.</p>

			<p>She sent him a message quickly from her phone this morning.</p>

			<p>Nhìn theo đường thẳng: <strong>S</strong> → <strong>V</strong> → <strong>O</strong> → <strong>M</strong> → <strong>P</strong> → <strong>T</strong>. Khi cần nhấn mạnh thời gian, bạn có thể đưa Time lên đầu câu: Yesterday, I read the book quietly in the library.</p>

			{/* 4. Những lỗi thường gặp và cách sửa */}
			
			<h3 className="margin-y-50 text-center">4. Những lỗi thường gặp và cách sửa</h3>
			
				<ul className="list-square">

					<li><strong>Chèn trạng ngữ giữa V và O</strong> dẫn đến câu lộn xộn.</li>
					<li className="list-none">Sai: She gave yesterday him a gift.</li>
					<li className="margin-bottom-20 list-none">Đúng: She gave him a gift yesterday.</li>

					<li><strong>Nhầm thứ tự Manner và Place</strong> khi cả hai xuất hiện.</li>
					<li className="margin-bottom-20 list-none">Sửa: luôn đặt Manner trước Place nếu cả hai cùng có mặt.</li>

					<li className="margin-bottom-20"><strong>Áp dụng máy móc cho mọi cấu trúc</strong> sẽ sai với câu hỏi, câu bị động, hoặc một số phrasal verbs. Học thêm các cấu trúc này riêng biệt.</li>
			
				</ul>

			{/* 5. Bài tập luyện 10 phút mỗi ngày */}
			
			<h3 className="margin-y-50 text-center">5. Bài tập luyện 10 phút mỗi ngày</h3>
			
				<ol>

					<li>Viết 5 câu theo SVOMPT với 5 động từ khác nhau.</li>

					<li>Ghi âm 1 phút kể lại một việc theo SVOMPT, nghe lại và sửa vị trí M, P, T.</li>

					<li>Luyện biến thể: đặt Time lên đầu câu và so sánh sắc thái.</li>
			
				</ol>

			<p className="margin-top-20">Thực hành đều đặn sẽ biến hình ảnh đường thẳng thành phản xạ khi nói.</p>

			{/* 6. Mẹo nâng cao để linh hoạt khi giao tiếp */}
			
			<h3 className="margin-y-50 text-center">6. Mẹo nâng cao để linh hoạt khi giao tiếp</h3>
			
				<ul className="list-square">

					<li><strong>Nói trước, viết sau</strong>:</li>
					<li className="margin-bottom-20 list-none">Khi nói, dùng hình ảnh đường thẳng để giữ trật tự; khi viết, sắp hàng ngang theo cùng thứ tự.</li>

					<li><strong>Flashcards theo thành phần</strong>:</li>
					<li className="margin-bottom-20 list-none">Mỗi thẻ là một thành phần M, P, T; ghép nhanh để tăng tốc phản xạ.</li>

					<li><strong>Đổi vị trí để nhấn mạnh</strong>:</li>
					<li className="margin-bottom-20 list-none">Đưa Time hoặc Place lên đầu câu khi muốn nhấn mạnh bối cảnh.</li>

					<li><strong>Luyện với ngữ cảnh thực tế</strong>:</li>
					<li className="margin-bottom-20 list-none">Kể chuyện, mô tả hoạt động, tường thuật sự kiện theo SVOMPT để thấy hiệu quả ngay.</li>
			
				</ul>

			{/* Kết luận */}
			
			<h3 className="margin-y-50 text-center">Kết luận</h3>

			<p className="margin-top-20">Hình dung SVOMPT như một đường thẳng đi từ dưới lên, từ gần tới xa là một mẹo trực quan đơn giản nhưng hiệu quả. Nó giúp bạn nói tiếng Anh mạch lạc, giảm lỗi đặt trạng ngữ, và dễ điều chỉnh khi cần nhấn mạnh. Nếu bạn muốn, tôi có thể soạn một bộ <strong>20 câu bài tập</strong> theo ba mức độ để bạn luyện theo phương pháp này.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 14, 2026 · by Copilot and 🐝Mr. Bee Osn ·</span>
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