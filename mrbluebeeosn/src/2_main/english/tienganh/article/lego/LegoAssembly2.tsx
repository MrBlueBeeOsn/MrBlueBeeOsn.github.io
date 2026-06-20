import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function LegoAssembly2(): React.JSX.Element {

	const postId = "LegoAssembly2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Lego Assembly
												
				<sup><HashLink smooth to="/tieng-anh/lego-assembly-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				{/* <sup><HashLink smooth to="/tieng-anh/lego-assembly-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-9">&nbsp;9&nbsp;</HashLink>
				</sup> */}

			</h1>

			<h4 className="margin-bottom-30 text-center">🧩 Tiếng Anh chỉ có một công thức: S + Head + Dependent</h4>

			<p>Bạn đã bao giờ cảm thấy mệt mỏi với việc học 12 thì tiếng Anh, nhưng vẫn không thể nói một câu đơn giản mà không lúng túng? Bạn từng nhồi nhét hàng trăm công thức, rồi khi giao tiếp thực tế, đầu óc trống rỗng?</p>

			<p>Chào mừng bạn đến với <strong>mô hình Lego Assembly</strong> – một cách tiếp cận hoàn toàn khác, dựa trên một sự thật đơn giản mà hầu hết sách ngữ pháp không bao giờ nói rõ:</p>

			<p>Mọi cụm từ và câu con trong tiếng Anh đều sinh ra để phụ thuộc. Chúng không thể đứng một mình. Chúng được lắp ghép vào một "Hạt nhân" – và Hạt nhân đó chỉ có một hình dạng duy nhất:</p>

			<p className="margin-y-50 text-indent-whole"><strong>S Head DP</strong>/<strong>DC</strong></p>
			
			<p>Hãy bỏ qua danh xưng "thời hiện tại đơn", "quá khứ tiếp diễn". Thay vào đó, bạn chỉ cần biết cách lắp ba khối Lego lại với nhau. Nghe có vẻ đơn giản? Bởi vì nó thực sự đơn giản.</p>



			{/* .  */}

			<h3 className="margin-y-50 text-center">🧩 Tiếng Anh chỉ có một công thức: S + Head + Dependent</h3>


			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. 📦 Chức năng DANH</h3>

			



			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. 📦 Chức năng TÍNH</h3>


			
			

			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. 📦 Chức năng TRẠNG</h3>

			
			
			


			{/* .  */}

			<h3 className="margin-y-50 text-center">🧩 Cấu trúc phân tầng: Danh cụm lồng Danh câu</h3>

			


			
			{/* .  */}

			<h3 className="margin-y-50 text-center">✍️ Paraphrasing: Thay khối cùng chức năng</h3>

			
			


			{/* .  */}

			<h3 className="margin-y-50 text-center">⚙️ Head – Hạt nhân điều khiển</h3>

			<p>Head có ba loại chính, và nó quyết định hình thái của Dependent.</p>


			<p className="margin-top-20"><strong>Loại 1</strong> – <strong>Khả năng Động Cơ</strong>: can, will, must, may, could</p>

			<p>→ Yêu cầu Dependent bắt đầu bằng Động Cơ nguyên mẫu.</p>
			
				<ul className="list-square">
			
					<li>She <strong>can</strong> [solve this problem].</li>
					<li className="list-none">Cô ấy <strong>có thể</strong> [giải quyết vấn đề này].</li>
			
				</ul>

			
			
			<p className="margin-top-20"><strong>Loại 2</strong> – <strong>Thời Động Cơ</strong>: am, is, are, was, were, have, has, had, do, does, did</p>

			<p>→ Dependent thường là Động Cụm dạng ing hoặc ed.</p>
			
				<ul className="list-square">
			
					<li>They <strong>are</strong> [playing soccer].</li>
					<li className="list-none">Họ <strong>đang</strong> [chơi bóng đá].</li>
			
				</ul>
			
			

			<p className="margin-top-20"><strong>Loại 3</strong> – <strong>Động Cơ chính</strong> (khi không có Head trợ giúp):</p>

			<p>Trong các câu khẳng định ở hiện tại hoặc quá khứ (cách diễn đạt thông thường).</p>
			
				<ul className="list-square">
			
					<li>I <strong>eat</strong> [an apple].</li>
					<li className="list-none">Tôi <strong>ăn</strong> [một quả táo].</li>
			
				</ul>
			
			<p className="margin-top-20">Phủ định chỉ cần thêm not sau Head: He <strong>will not</strong> [come].</p>

			<p>Nghi vấn đưa Head lên trước S: <strong>Will</strong> he [come]?</p>

			


			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">📌 Tóm tắt – Lắp ghép Lego cùng chức năng</h3>

			<p>Với mô hình <strong>S</strong> + <strong>Head</strong> + <strong>Dependent</strong>, việc học tiếng Anh trở nên cực kỳ trực quan:</p>

			<p className="margin-top-20"></p>
			
				<ol>
			
					<li>Xác định <strong>S</strong> (khối trung tâm).</li>
			
					<li>Xác định <strong>Head</strong> (hạt nhân điều khiển).</li>
			
					<li>Nhìn <strong>Dependent</strong>, nhận diện <strong>Hình thái</strong> (Động Cơ / Động Cụm / Động Câu).</li>

					<li>Suy ra <strong>Chức năng</strong> (Danh / Tính / Trạng) dựa vào vị trí.</li>
			
					<li>Khi viết lại câu, chỉ cần <strong>thay Dependent cũ bằng một Dependent mới có cùng chức năng</strong> – thay đổi cấp độ Cơ, Cụm, Câu hoặc thay đổi hình thái bên trong nhưng giữ nguyên vai trò Danh, Tính, Trạng.</li>
			
				</ol>
			
			<p className="margin-top-20">Hãy tập luyện mỗi ngày: lấy một câu bất kỳ, phân tích rồi thử viết lại bằng cách thay khối. Chỉ sau một thời gian ngắn, bạn sẽ thấy mọi câu tiếng Anh đều là những miếng Lego có thể hoán đổi linh hoạt.</p>

			<p>Chúc bạn lắp ghép vui vẻ! 🧩</p>


			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 20, 2026 · by DPSK and 🐝Mr. Bee Osn ·</span>
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