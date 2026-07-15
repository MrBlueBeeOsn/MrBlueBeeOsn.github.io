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

			<h1 className="margin-y-50 text-center">[Lego Assembly]
												
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

			<p>Mọi câu lớn (câu trọn vẹn, kết thúc bằng dấu chấm) trong tiếng Anh đều được xây dựng từ một khuôn mẫu duy nhất:</p>

			<p className="margin-y-30 text-indent-whole"><strong>S</strong> + <strong>Head</strong> + <strong>Dependent</strong></p>
			
				<ul className="list-square">
			
					<li><strong>S</strong> – Khối chỉ người hoặc vật làm trung tâm.</li>
			
					<li><strong>Head</strong> – Hạt nhân điều khiển thời gian, cách phủ định, cách đặt câu hỏi.</li>
			
					<li><strong>Dependent</strong> – Toàn bộ phần đứng sau Head.</li>
			
				</ul>
			
			<p className="margin-top-20">Dependent được tổ chức theo <strong>3 cấp độ</strong> (Cơ → Cụm → Câu) và <strong>3 chức năng</strong> (Danh – Tính – Trạng). Nguyên lý xuyên suốt: <strong>Hình thái trước</strong> – <strong>Chức năng sau</strong>.</p>

			<p>Đầu tiên nhận diện Dependent là một [Động Cơ][Verb Base], [Động Cụm][Verb Phrase] hay [Động Câu][Verb Clause]. Sau đó, dựa vào vị trí trong câu lớn, suy ra nó đang đảm nhận chức năng Danh, Tính hay Trạng.</p>

			<p>Khi đã thuần thục, bạn có thể <strong>viết lại câu</strong> (<strong>paraphrasing</strong>) chỉ bằng cách thay khối Dependent này bằng một khối Dependent khác <strong>cùng chức năng</strong> – giống như đổi một miếng Lego cùng hình dạng nhưng khác màu.</p>



			{/* .  */}

			<h3 className="margin-y-50 text-center">🧩 Tiếng Anh chỉ có một công thức: S + Head + Dependent</h3>


			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. 📦 Chức năng DANH</h3>

			<h4 className="margin-y-40">Cấp độ Cơ – [Danh Cơ][Noun Base]</h4>
			
				<ul className="list-square">
			
					<li>[Swimming] is healthy.</li>
					<li className="margin-bottom-20 list-none">[Bơi lội] thì tốt cho sức khỏe.</li>
			
					<li className="list-none">Hình thái: [Swimming] – [Động Cơ][Verb Base] thêm ing vào swim</li>
			
					<li className="list-none">Chức năng: [Swimming] – [Danh Cơ][Noun Base] đứng ở vị trí chỉ toàn bộ sự việc làm trung tâm cho câu</li>
			
				</ul>


			<h4 className="margin-y-40">Cấp độ Cụm – [Danh Cụm][Noun Phrase]</h4>
			
				<ul className="list-square">
			
					<li>She wants [to learn English].</li>
					<li className="margin-bottom-20 list-none">Cô ấy muốn [học tiếng Anh].</li>
			
					<li className="list-none">Hình thái: [to learn English] – [Động Cụm][Verb Phrase] bắt đầu bằng [Động Cơ] ở dạng nguyên mẫu có to</li>
			
					<li className="list-none">Chức năng: [to learn English] – [Danh Cụm][Noun Phrase] nhận tác động từ Head wants</li>
			
				</ul>


			<h4 className="margin-y-40">Cấp độ Câu – [Danh Câu][Noun Clause]</h4>
			
				<ul className="list-square">
			
					<li>I remember [what you told me].</li>
					<li className="margin-bottom-20 list-none">Tôi nhớ [những gì bạn đã nói với tôi].</li>
			
					<li className="list-none">Hình thái: [what you told me] – [Hiển-Liên Động Câu][Connector Verb Clause] có you làm trung tâm và [Động Cơ] told</li>
			
					<li className="list-none">Chức năng: [what you told me] – [Danh Câu][Noun Clause] làm phần được remember tác động đến</li>
			
				</ul>



			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. 📦 Chức năng TÍNH</h3>

			<h4 className="margin-y-40">Cấp độ Cơ – [Tính Cơ][Adjective Base]</h4>
			
				<ul className="list-square">
			
					<li>She has a [sparkling] personality.</li>
					<li className="margin-bottom-20 list-none">Cô ấy có một tính cách [lấp lánh].</li>
			
					<li className="list-none">Hình thái: [sparkling] – [Động Cơ][Verb Base] dạng ing của sparkle</li>
			
					<li className="list-none">Chức năng: [sparkling] – [Tính Cơ][Adjective Base] bổ sung ý nghĩa cho [Danh Cơ] personality</li>
			
				</ul>


			<h4 className="margin-y-40">Cấp độ Cụm – [Tính Cụm][Adjective Phrase]</h4>
			
				<ul className="list-square">
			
					<li>The soup tastes [absolutely delicious].</li>
					<li className="margin-bottom-20 list-none">Món súp có vị [ngon tuyệt].</li>
			
					<li className="list-none">Hình thái: [absolutely delicious] – [Tính Cụm][Adjective Phrase] gồm [Trạng Cơ] absolutely và [Tính Cơ] delicious</li>
			
					<li className="list-none">Chức năng: [absolutely delicious] – [Tính Cụm][Adjective Phrase] mô tả trạng thái của The soup sau Head tastes</li>
			
				</ul>


			<h4 className="margin-y-40">Cấp độ Câu – [Tính Câu][Adjective Clause]</h4>
			
				<ul className="list-square">
			
					<li>The laptop [that I bought yesterday] is already broken.</li>
					<li className="margin-bottom-20 list-none">Chiếc máy tính [mà tôi đã mua hôm qua] thì đã hỏng.</li>
			
					<li className="list-none">Hình thái: [that I bought yesterday] – [Hiển-Liên Động Câu][Connector Verb Clause] có I và [Động Cơ] bought</li>
			
					<li className="list-none">Chức năng: [that I bought yesterday] – [Tính Câu][Adjective Clause] bổ sung thông tin cho [Danh Cơ] The laptop</li>
			
				</ul>



			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. 📦 Chức năng TRẠNG</h3>

			<h4 className="margin-y-40">Cấp độ Cơ – [Trạng Cơ][Adverb Base]</h4>
			
				<ul className="list-square">
			
					<li>He answered [politely].</li>
					<li className="margin-bottom-20 list-none">Anh ấy trả lời [một cách lịch sự].</li>
			
					<li className="list-none">Hình thái: [politely] – [Động Cơ][Verb Base] thêm ly vào polite</li>
			
					<li className="list-none">Chức năng: [politely] – [Trạng Cơ][Adverb Base] làm rõ cách thức cho [Động Cơ] answered</li>
			
				</ul>


			<h4 className="margin-y-40">Cấp độ Cụm – [Trạng Cụm][Adverb Phrase]</h4>
					
			<p className="margin-top-20 text-indent-whole"></p>
			
				<ul className="list-square">
			
					<li>She studies [to pass the exam].</li>
					<li className="margin-bottom-20 list-none">Cô ấy học [để vượt qua kỳ thi].</li>
			
					<li className="list-none">Hình thái: [to pass the exam] – [Động Cụm][Verb Phrase] nguyên mẫu chỉ mục đích</li>
			
					<li className="list-none">Chức năng: [to pass the exam] – [Trạng Cụm][Adverb Phrase] bổ nghĩa cho việc studies nêu mục đích</li>
			
				</ul>


			<h4 className="margin-y-40">Cấp độ Câu – [Trạng Câu][Adverb Clause]</h4>
			
				<ul className="list-square">
			
					<li>I will stay home [because it is raining].</li>
					<li className="margin-bottom-20 list-none">Tôi sẽ ở nhà [bởi vì trời đang mưa].</li>
			
					<li className="list-none">Hình thái: [because it is raining] – [Hiển-Liên Động Câu][Connector Verb Clause] có it và [Động Cơ] is raining</li>
			
					<li className="list-none">Chức năng: [because it is raining] – [Trạng Câu][Adverb Clause] giải thích nguyên nhân cho hành động will stay home</li>
			
				</ul>
		
			


			{/* .  */}

			<h3 className="margin-y-50 text-center">🧩 Cấu trúc phân tầng: Danh cụm lồng Danh câu</h3>

			<p className="margin-top-20">Đôi khi một [Động Cụm] lại chứa bên trong một Động Câu, tạo thành khối nhiều lớp.</p>
			
				<ul className="list-square">
			
					<li>He [forgot {'{that she needed the document}'}].</li>
					<li className="margin-bottom-20 list-none">Anh ấy [đã quên {'{rằng cô ấy cần tài liệu}'}].</li>
			
					<li className="list-none">Hình thái tổng thể: [forgot {'{that she needed the document}'}] – [Động Cụm][Verb Phrase] tầng ngoài [Động Cơ] forgot</li>
					<li className="margin-bottom-20 list-none">Hình thái bên trong: {'{that she needed the document}'} – [Hiển-Liên Động Câu][Connector Verb Clause][Động Câu][Verb Clause] tầng trong</li>

					<li className="list-none">Chức năng của khối trong: {'{that she needed the document}'} – [Danh Câu][Noun Clause]</li>
					<li className="list-none">Chức năng của khối ngoài: [forgot {'{that she needed the document}'}] – [Danh Cụm][Noun Phrase] toàn bộ là khối mở rộng sau He</li>
			
				</ul>
			

			
			{/* .  */}

			<h3 className="margin-y-50 text-center">✍️ Paraphrasing: Thay khối cùng chức năng</h3>

			<p>Khi bạn đã xác định được chức năng của một Dependent, bạn có thể thoải mái thay nó bằng một Dependent khác <strong>cùng chức năng</strong> nhưng khác cấp độ hoặc khác hình thái. Câu mới vẫn giữ nguyên cách lắp ghép <strong>S</strong> + <strong>Head</strong> + <strong>Dependent</strong>, chỉ có phần bên trong Dependent thay đổi.</p>


			<h4 className="margin-y-40">Thay [Danh Cụm] bằng Danh Câu</h4>

			<p className="margin-top-20 text-indent-whole">Câu gốc: [to learn English]</p>
			
				<ul className="list-square">
			
					<li>She wants [______].</li>
					<li className="margin-bottom-20 list-none">Cô ấy muốn [học tiếng Anh].</li>
			
					<li className="list-none">[to learn English] – [Động Cụm][Verb Phrase] → chức năng [Danh Cụm][Noun Phrase]</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Câu viết lại: [that she can speak English well]</p>
			
				<ul className="list-square">
			
					<li>She wants [______].</li>
					<li className="margin-bottom-20 list-none">Cô ấy muốn [rằng cô ấy có thể nói tiếng Anh tốt].</li>
			
					<li className="list-none">[that she can speak English well] – [Hiển-Liên Động Câu][Connector Verb Clause] → chức năng [Danh Câu][Noun Clause]</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Cả hai Dependent đều làm chức năng Danh, vì vậy khuôn mẫu tổng thể không đổi.</p>



			<h4 className="margin-y-40">Thay [Tính Cụm] bằng Tính Câu</h4>

			<p className="margin-top-20 text-indent-whole"><strong>Câu gốc</strong>: [sitting on the bench]</p>
			
				<ul className="list-square">
			
					<li>The girl [______] is my friend.</li>
					<li className="margin-bottom-20 list-none">Cô gái [đang ngồi trên ghế dài] là bạn tôi.</li>
			
					<li className="list-none">[sitting on the bench] – [Động Cụm][Verb Phrase] → chức năng [Tính Cụm][Adjective Phrase]</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Câu viết lại</strong>: [who is sitting on the bench]</p>
			
				<ul className="list-square">
			
					<li>The girl [______] is my friend.</li>
					<li className="margin-bottom-20 list-none">Cô gái [người mà đang ngồi trên ghế dài] là bạn tôi.</li>
			
					<li className="list-none">[who is sitting on the bench] – [Hiển-Liên Động Câu][Connector Verb Clause] → chức năng [Tính Câu][Adjective Clause]</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">Thay [Trạng Cụm] bằng Trạng Câu</h4>

			<p className="margin-top-20 text-indent-whole"><strong>Câu gốc</strong>: [to earn money]</p>
			
				<ul className="list-square">
			
					<li>He works hard [______].</li>
					<li className="margin-bottom-20 list-none">Anh ấy làm việc chăm chỉ [để kiếm tiền].</li>
			
					<li className="list-none">[to earn money] – [Động Cụm][Verb Phrase] → chức năng [Trạng Cụm][Adverb Phrase]</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Câu viết lại</strong>: [so that he can earn more money]</p>
			
				<ul className="list-square">
			
					<li>He works hard [______].</li>
					<li className="margin-bottom-20 list-none">Anh ấy làm việc chăm chỉ [để mà anh ấy có thể kiếm thêm tiền].</li>
			
					<li className="list-none">[so that he can earn more money] – [Hiển-Liên Động Câu][Connector Verb Clause] → chức năng [Trạng Câu][Adverb Clause]</li>
			
				</ul>



			<h4 className="margin-y-40">Thay [Danh Cơ] bằng Danh Cụm</h4>

			<p className="margin-top-20 text-indent-whole"><strong>Câu gốc</strong>: [Running]</p>
			
				<ul className="list-square">
			
					<li>[______] is fun.</li>
					<li className="margin-bottom-20 list-none">[Chạy bộ] thì vui.</li>
			
					<li className="list-none">[Running] – [Động Cơ][Verb Base] → chức năng [Danh Cơ][Noun Base]</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Câu viết lại</strong>: [Running every morning]</p>
			
				<ul className="list-square">
			
					<li>[______] is fun.</li>
					<li className="margin-bottom-20 list-none">[Chạy bộ mỗi sáng] thì vui.</li>
			
					<li className="list-none">[Running every morning] – [Động Cụm][Verb Phrase] → chức năng [Danh Cụm][Noun Phrase]</li>
			
				</ul>
			


			{/* .  */}

			<h3 className="margin-y-50 text-center">⚙️ Head – Hạt nhân điều khiển</h3>

			<p>Head có ba loại chính, và nó quyết định hình thái của Dependent.</p>
			

			<h4 className="margin-y-40">Loại 1</h4>
					
			<p className="text-indent-whole">Khả năng Động Cơ: can, will, must, may, could</p>
			
				<ul className="list-square">
			
					<li>She <strong>can</strong> [solve this problem].</li>
					<li className="margin-bottom-20 list-none">Cô ấy <strong>có thể</strong> [giải quyết vấn đề này].</li>

					<li className="list-none">→ Yêu cầu Dependent bắt đầu bằng [Động Cơ] nguyên mẫu.</li>
			
				</ul>


			<h4 className="margin-y-40">Loại 2</h4>
					
			<p className="text-indent-whole">Thời Động Cơ: am, is, are, was, were, have, has, had, do, does, did</p>

			<p className="text-indent-whole"></p>
			
				<ul className="list-square">
			
					<li>They <strong>are</strong> [playing soccer].</li>
					<li className="margin-bottom-20 list-none">Họ <strong>đang</strong> [chơi bóng đá].</li>

					<li className="list-none">→ Dependent thường là [Động Cụm] dạng ing hoặc ed.</li>
			
				</ul>



			<h4 className="margin-y-40">Loại 3</h4>

			<p className="text-indent-whole">Động Cơ chính (khi không có Head trợ giúp). Trong các câu khẳng định ở hiện tại hoặc quá khứ (cách diễn đạt thông thường).</p>
			
				<ul className="list-square">
			
					<li>I <strong>eat</strong> [an apple].</li>
					<li className="list-none">Tôi <strong>ăn</strong> [một quả táo].</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Phủ định chỉ cần thêm not sau Head: He <strong>will not</strong> [come].</p>

			<p className="text-indent-whole">Nghi vấn đưa Head lên trước S: <strong>Will</strong> he [come]?</p>

			


			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">📌 Tóm tắt – Lắp ghép Lego cùng chức năng</h3>

			<p>Với mô hình <strong>S</strong> + <strong>Head</strong> + <strong>Dependent</strong>, việc học tiếng Anh trở nên cực kỳ trực quan:</p>

			<p className="margin-top-20"></p>
			
				<ol>
			
					<li>Xác định <strong>S</strong> (khối trung tâm).</li>
			
					<li>Xác định <strong>Head</strong> (hạt nhân điều khiển).</li>
			
					<li>Nhìn <strong>Dependent</strong>, nhận diện <strong>Hình thái</strong> (Động Cơ / [Động Cụm] / Động Câu).</li>

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