import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DependentClause5(): React.JSX.Element {

	const postId = "DependentClause5";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">DC
												
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

			<h4 className="margin-bottom-30 text-center">Câu Con Biết Tựa Vào Người Khác</h4>

			<p>Dependent clause không phải điểm yếu trong câu văn — đó là thứ cho thấy người viết đang suy nghĩ theo tầng bậc, không chỉ liệt kê. Bài viết này sẽ dạy bạn cách viết, phân biệt, và sau cùng là làm chủ chúng.</p>

			<p>Hãy tưởng tượng bạn nghe ai đó nói:</p>

			<p>"Bởi vì trời mưa..." — rồi họ im lặng.</p>

			<p>Bạn chờ. Bạn muốn biết điều gì xảy ra tiếp theo. Cái khoảng trống đó, cái cảm giác chưa xong đó, chính là bản chất của dependent clause.</p>
					
			<p>Nó có đủ danh chủ, đủ động cơ — nhưng vẫn cần một câu con chính để trọn vẹn. Và chính sự "chưa xong" ấy lại là công cụ mạnh nhất để bạn viết tiếng Anh có chiều sâu.</p>

			{/* Bốn bước để viết một Dependent Clause đúng và hay */}

			<h3 className="margin-y-50 text-center">Bốn bước để viết một Dependent Clause đúng và hay</h3>

			<h4 className="margin-y-40">Bước 1: Chọn mối quan hệ bạn muốn diễn đạt</h4>
					
			<p className="text-indent-whole">Trước khi viết, hãy hỏi: hai ý này quan hệ với nhau như thế nào? Nguyên nhân–kết quả? Tương phản? Điều kiện? Thời gian? Câu trả lời sẽ quyết định bạn dùng từ nối gì.</p>
			
				<ul className="list-square">
			
					<li><strong>Ý 1</strong>: Trời mưa.</li>
					<li className="margin-bottom-20"><strong>Ý 2</strong>: Chúng tôi ở trong nhà.</li>

					<li className="list-none">→ Quan hệ: nguyên nhân–kết quả → dùng <strong>because</strong> / <strong>since</strong></li>
			
				</ul>


			<h4 className="margin-y-40">Bước 2: Đặt từ nối vào đầu câu con phụ</h4>
					
			<p className="text-indent-whole">Chọn đúng loại từ tín hiệu — liên cơ phụ thuộc, đại cơ quan hệ, hoặc WH-word. Đặt nó ngay trước danh chủ của câu con phụ, không phải trước câu con chính.</p>
			
				<ul className="list-square">
			
					<li><strong>Because it rained heavily</strong>, we stayed inside.</li>
					<li className="margin-bottom-20 list-none">Vì trời mưa rất to nên chúng tôi ở trong nhà.</li>
			
					<li><strong>Since the deadline had passed</strong>, she stopped worrying.</li>
					<li className="list-none">Vì hạn chót đã qua nên cô ấy không còn lo lắng nữa.</li>
			
				</ul>
			

			<h4 className="margin-y-40">Bước 3: Kiểm tra: câu con phụ có tự đứng được không?</h4>
					
			<p className="text-indent-whole">Đọc riêng câu con phụ. Nếu nó cảm giác "chưa xong" — bạn đã viết đúng. Nếu nó đọc như một câu hoàn chỉnh — bạn đã quên hoặc nhầm từ nối.</p>
			
				<ul className="list-square">
			
					<li><strong>Because</strong> it rained heavily</li>
					<li className="margin-bottom-20 list-none">Bởi vì trời mưa rất to.</li>

					<li className="margin-bottom-20 list-none">→ cảm giác thiếu → ✓ đúng là dependent clause</li>
			
					<li>It rained heavily</li>
					<li className="margin-bottom-20 list-none">Trời đã mưa rất to.</li>

					<li className="list-none">→ hoàn chỉnh → đây là independent clause, không phải dependent</li>
			
				</ul>
	

			<h4 className="margin-y-40">Bước 4: Quyết định đặt câu con phụ ở đầu hay cuối câu</h4>
					
			<p className="text-indent-whole">Đây là nơi phong cách xuất hiện. Đặt ở đầu để nhấn mạnh bối cảnh — cần có dấu phẩy. Đặt ở cuối để nhấn mạnh kết quả — thường không cần dấu phẩy.</p>
			
				<ul className="list-square">
			
					<li><strong>Although she was exhausted</strong>, she finished the report.</li>
					<li className="margin-bottom-20 list-none">Mặc dù đã kiệt sức, cô ấy vẫn hoàn thành xong bản báo cáo.</li>

					<li className="margin-bottom-20 list-none">← nhấn bối cảnh</li>
			
					<li>She finished the report <strong>although she was exhausted</strong>.</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã hoàn thành bản báo cáo mặc dù cô ấy đã kiệt sức.</li>

					<li className="list-none">← nhấn hành động</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"></p>
			

			{/* Phân biệt ba loại — đừng nhầm lẫn */}

			<h3 className="margin-y-50 text-center">Phân biệt ba loại — đừng nhầm lẫn</h3>

			<p>Dependent clause có ba hình dạng, mỗi loại làm một việc khác nhau trong câu.</p>

			<p>Câu hỏi nhận diện nhanh nhất: câu con này đang đóng vai trò gì?</p>

			<h4 className="margin-y-40">1. Noun Clause</h4>
					
				<p className="text-indent-whole">Hỏi:&nbsp;
					
					<span className="pill p">Danh chủ</span>&nbsp;
					<span className="pill p">danh nhận</span>&nbsp;
					là gì?

				</p>
			
				<ul className="list-square">
			
					<li>I know <strong>what you are afraid of</strong>.</li>
					<li className="margin-bottom-20 list-none">Tôi biết bạn đang sợ điều gì.</li>
			
					<li><strong>That she lied</strong> hurt everyone.</li>
					<li className="list-none">Việc cô ấy nói dối đã làm tổn thương tất cả mọi người.</li>
			
				</ul>
		

			<h4 className="margin-y-40">2. Adjective Clause</h4>
					
				<p className="text-indent-whole">Hỏi:&nbsp;

					<span className="pill p">Danh cơ nào</span>&nbsp;
					<span className="pill p">cái nào</span>&nbsp;
					?
					
				</p>
			
				<ul className="list-square">
			
					<li>The letter <strong>that arrived at midnight</strong> changed everything.</li>
					<li className="list-none">Lá thư đến lúc nửa đêm đã thay đổi mọi thứ.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">3. Adverb Clause</h4>
					
				<p className="text-indent-whole">Hỏi:&nbsp;

					<span className="pill p">Tại sao</span>&nbsp;
					<span className="pill p">khi nào</span>&nbsp;
					<span className="pill p">như thế nào</span>&nbsp;
					?
				
				</p>
			
				<ul className="list-square">
			
					<li>She smiled <strong>although nothing had gone right</strong>.</li>
					<li className="list-none">Cô ấy vẫn mỉm cười mặc dù chẳng có chuyện gì suôn sẻ.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Người viết bậc thầy không chỉ dùng dependent clause — họ chọn đúng loại để tạo ra đúng sắc thái họ muốn.</p>

			{/* Những lỗi phổ biến và cách tránh */}

			<h3 className="margin-y-50 text-center">Những lỗi phổ biến và cách tránh</h3>

			<p className="margin-top-20">Ví dụ 1</p>
			
				<ul className="list-square">
			
					<li>Although she was tired. She kept going.</li>
					<li className="margin-bottom-20 list-none">Viết sai</li>
			
					<li><strong>Although she was tired</strong>, she kept going.</li>
					<li className="list-none">Mặc dù mệt, cô ấy vẫn tiếp tục bước tiếp.</li>
			
				</ul>
			

			<p className="margin-top-20">Ví dụ 2</p>
			
				<ul className="list-square">
			
					<li>Because of she was late, they left.</li>
					<li className="margin-bottom-20 list-none">Viết sai</li>
			
					<li><strong>Because she was late</strong>, they left.</li>
					<li className="list-none">Vì cô ấy đến muộn nên họ đã rời đi.</li>
			
				</ul>

			<p className="margin-top-20">Ví dụ 3</p>
			
				<ul className="list-square">
			
					<li>The man which called never left a name.</li>
					<li className="margin-bottom-20 list-none">Viết sai</li>
			
					<li>The man <strong>who called</strong> never left a name.</li>
					<li className="list-none">Người đàn ông gọi điện đã không hề để lại tên.</li>
			
				</ul>
					
			<p className="margin-top-20">Ví dụ 4</p>
			
				<ul className="list-square">
			
					<li>I know that what she said.</li>
					<li className="margin-bottom-20 list-none">Viết sai</li>
			
					<li>I know <strong>what she said</strong>.</li>
					<li className="list-none">Tôi biết cô ấy đã nói gì.</li>
			
				</ul>

			{/* Quy tắc dấu phẩy — một lần nhớ, mãi không quên */}

			<h3 className="margin-y-50 text-center">Quy tắc dấu phẩy — một lần nhớ, mãi không quên</h3>

			<h4 className="margin-y-40">Có phẩy</h4>

			<p className="text-indent-whole">Dependent clause đứng đầu câu</p>
			<p className="margin-bottom-20 text-indent-whole">→ Luôn có dấu phẩy trước câu con chính.</p>
			
				<ul className="list-square">
			
					<li><strong>Since the meeting ended early</strong>, everyone went home.</li>
					<li className="list-none">Vì cuộc họp kết thúc sớm nên mọi người đều đi về nhà.</li>
			
				</ul>

			<h4 className="margin-y-40">Không phẩy</h4>

			<p className="text-indent-whole">Dependent clause đứng cuối câu</p>
			<p className="margin-bottom-20 text-indent-whole">→ Thường không cần dấu phẩy.</p>
			
				<ul className="list-square">
			
					<li>Everyone went home <strong>since the meeting ended early</strong>.</li>
					<li className="list-none">Mọi người đều về nhà vì cuộc họp kết thúc sớm.</li>
			
				</ul>

			<h4 className="margin-y-40">Có phẩy</h4>

			<p className="text-indent-whole">Trường hợp ngoại lệ: câu con cuối câu mang nghĩa tương phản</p>
			<p className="margin-bottom-20 text-indent-whole">→ Có phẩy.</p>

				<ul className="list-square">
			
					<li>He kept working, <strong>although the deadline had passed</strong>.</li>
					<li className="list-none">Anh ấy vẫn tiếp tục làm việc, mặc dù đã quá hạn chót.</li>
			
				</ul>
			

			{/* Làm chủ — không phải học thuộc, mà là luyện thói quen */}

			<h3 className="margin-y-50 text-center">Làm chủ — không phải học thuộc, mà là luyện thói quen</h3>

			<p>Ngữ pháp không được làm chủ bằng cách nhớ bảng quy tắc. Nó được làm chủ bằng cách dùng đi dùng lại cho đến khi nó trở thành phản xạ. Mỗi ngày, thử lấy bất kỳ hai câu đơn nào bạn vừa viết — rồi gộp chúng lại bằng một dependent clause.</p>

			<h4 className="margin-y-40 text-center">Trước - Sau khi luyện</h4>

			<p>Ví dụ 1</p>
			
				<ul className="list-square">
			
					<li>It was cold. I wore a coat.</li>
					<li className="margin-bottom-20 list-none">Trời lạnh. Tôi đã mặc một chiếc áo khoác.</li>
			
					<li><strong>Because it was cold</strong>, I wore my heaviest coat.</li>
					<li className="list-none">Vì trời lạnh nên tôi đã mặc chiếc áo khoác dày nhất của mình.</li>
			
				</ul>

			<p className="margin-top-20">Ví dụ 2</p>
			
				<ul className="list-square">
			
					<li>She spoke quietly. People still heard her.</li>
					<li className="margin-bottom-20 list-none">Cô ấy nói rất nhỏ. Nhưng mọi người vẫn nghe thấy.</li>
			
					<li><strong>Although she spoke quietly</strong>, every word carried.</li>
					<li className="list-none">Mặc dù cô ấy nói chuyện một cách lặng lẽ, mỗi từ ngữ đều được truyền đi.</li>
			
				</ul>
					
			<p className="margin-top-20">Ví dụ 3</p>
			
				<ul className="list-square">
			
					<li>He sent a message. I didn't see it.</li>
					<li className="margin-bottom-20 list-none">Anh ấy đã gửi một tin nhắn. Tôi không nhìn thấy nó.</li>
			
					<li>I never saw the message <strong>that he sent that night</strong>.</li>
					<li className="list-none">Tôi chưa bao giờ nhìn thấy tin nhắn mà anh ấy gửi đêm đó.</li>
			
				</ul>
			
			<p className="margin-top-20">Làm điều này mỗi ngày trong ba tuần — không phải lý thuyết, không phải bài tập điền vào chỗ trống. Chỉ là viết thật, với ý thức rõ ràng về điều mình đang làm. Não bộ sẽ tự hoàn thành phần còn lại.</p>

			<hr className="hr-short"/>

			<p className="text-center">Dependent clause biết tựa vào người khác.</p>

			<p className="text-center">Người viết thành thục biết dùng điều đó.</p>

			<p className="text-center">Và câu văn — vì thế — đứng vững hơn bao giờ hết.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 16, 2026 · by Claud and 🐝Mr. Bee Osn ·</span>
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