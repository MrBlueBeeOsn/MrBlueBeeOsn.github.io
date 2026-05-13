import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';
import SVOMPT from '@/components/method/SVOMPT';

export default function TheGaitOfEnglish5(): React.JSX.Element {

	const postId = "TheGaitOfEnglish5";

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

			<h4 className="margin-bottom-30 text-center">Con đường thẳng phía trước</h4>

			<p>Một cách tưởng tượng trật tự từ trong tiếng Anh mà bạn sẽ không bao giờ quên.</p>

			<p>5 phút đọc  ·  SVOMPT  ·  Mẹo học tiếng Anh</p>
			
			<p>Hầu hết chúng ta học trật tự từ tiếng Anh bằng cách nhìn vào một hàng chữ viết trên bảng: <strong>S</strong> – <strong>V</strong> – <strong>O</strong> – <strong>M</strong> – <strong>P</strong> – <strong>T</strong>. Nhìn thì nhớ, ngủ dậy thì quên. Vì sao? Vì não không lưu trữ những thứ nằm im trên giấy — não lưu trữ những thứ chúng ta cảm thấy và tưởng tượng được.</p>
					
			<p>Bài này chia sẻ một cách hình dung khác. Không phải nhìn ngang, mà nhìn thẳng về phía trước.</p>

			{/* 1. Đứng trên con đường */}
			
			<h3 className="margin-y-50 text-center">1. Đứng trên con đường</h3>

			<p>Hãy thử tưởng tượng: bạn đang đứng đầu một con đường thẳng tắp, kéo dài đến tận đường chân trời. Không có ngã rẽ, không có vòng lại. Chỉ có một hướng duy nhất — đi thẳng về phía trước.</p>

			<p>Khi bạn mở miệng nói tiếng Anh, đó chính là lúc bạn bắt đầu bước đi trên con đường đó. Và trên con đường ấy, bạn sẽ lần lượt gặp:</p>

			<SVOMPT />

			<p><strong>Subject</strong> ở ngay dưới chân — gần nhất, to nhất. Đó là thứ đầu tiên bạn nói. Rồi bạn tiếp tục bước: gặp <strong>Verb</strong>, rồi <strong>Object</strong>, rồi <strong>Manner</strong>, rồi <strong>Place</strong>, và cuối cùng là <strong>Time</strong> — nhỏ dần, xa dần, về phía đường chân trời.</p>

			<p>Nói tiếng Anh không phải lắp ghép từ — mà là bước đi trên một con đường không có chỗ để quay đầu.</p>

			{/* 2. Tại sao hình ảnh này lại hiệu quả */}
			
			<h3 className="margin-y-50 text-center">2. Tại sao hình ảnh này lại hiệu quả</h3>

			<p>Khi nhìn vào hàng chữ nằm ngang trên giấy, não bạn xử lý nó như một danh sách cần ghi nhớ. Nhưng khi bạn tưởng tượng mình đang đứng trên một con đường và nhìn về phía trước, não chuyển sang một chế độ khác — chế độ của <strong>hành động và không gian</strong>.</p>

			<p>Con đường thẳng còn mang một ý nghĩa rất thực: tiếng Anh không cho phép bạn đảo ngược. S đã nói rồi thì V phải theo. Bạn không thể "quay lại" để nhét Object lên trước Verb. Đường thẳng chỉ đi về một phía — và khi nói, bạn cũng chỉ đi về một phía.</p>

			{/* Thử với một câu cụ thể */}
			
			<h3 className="margin-y-50 text-center">Thử với một câu cụ thể</h3>

			<p>Lấy một câu đơn giản và đặt từng từ lên con đường đó:</p>

			<p>Ví dụ:</p>

			<p>She  eats  lunch  quietly  at school  every day.</p>
			
				<ul className="list-square">

					<li className="list-none">every day — T</li>

					<li className="list-none">↑</li>
					<li className="list-none">at school — P</li>

					<li className="list-none">↑</li>
					<li className="list-none">quietly — M</li>

					<li className="list-none">↑</li>
					<li className="list-none">lunch — O</li>

					<li className="list-none">↑</li>
					<li className="list-none">eats — V</li>

					<li className="list-none">↑</li>
					<li className="margin-bottom-20 list-none">She — S</li>
			
				</ul>

			<p className="margin-top-20">Từng từ xuất hiện theo thứ tự, rồi biến mất về phía xa. Bạn không cần dừng lại để sắp xếp — bạn chỉ cần tiếp tục bước.</p>

			{/* 3. Một vài điều cần nhớ thêm */}
			
			<h3 className="margin-y-50 text-center">3. Một vài điều cần nhớ thêm</h3>

			<p><strong>M</strong>, <strong>P</strong>, <strong>T không bắt buộc phải có đủ</strong>. Câu "She eats lunch" đã hoàn chỉnh. Con đường có thể kết thúc sớm hơn — miễn là bạn đã qua S và V.</p>

			<p><strong>S</strong>–<strong>V</strong>–<strong>O là phần cứng nhất</strong>. Ba bước đầu tiên không được đảo. Người bản ngữ có thể châm chước nếu bạn nói "at school she eats lunch quietly" — nhưng nếu bạn đảo Object lên trước Verb, câu sẽ vỡ.</p>

			<p><strong>Khi nói nhanh</strong>, <strong>không cần nghĩ đến <strong>M</strong>–<strong>P</strong>–<strong>T</strong></strong>. Chỉ cần S → V → O. Phần còn lại sẽ tự tìm chỗ của nó khi bạn quen dần.</p>

			<p className="margin-top-20">Lần sau khi bạn chuẩn bị nói một câu tiếng Anh — đừng nhìn vào bảng chữ. Hãy nhìn về phía trước. Con đường đã ở đó rồi. Chỉ cần bắt đầu bước.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 14, 2026 · by Claud and 🐝Mr. Bee Osn ·</span>
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