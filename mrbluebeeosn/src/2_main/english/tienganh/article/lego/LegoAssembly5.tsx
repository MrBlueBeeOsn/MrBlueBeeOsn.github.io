import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function LegoAssembly5(): React.JSX.Element {

	const postId = "LegoAssembly5";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#functional-thinking-terms"><mark className="highlight-tertiary-padding-4-8">Functional Thinking</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">[Tư Duy Lắp Ghép]
												
				<sup><HashLink smooth to="/tieng-anh/lego-assembly-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-3">&nbsp;3&nbsp;</HashLink>
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
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Học ngữ pháp tiếng Anh bằng cách lắp ghép</h4>
			
			<p>Học tiếng Anh theo kiểu truyền thống, bạn phải nhớ "thời hiện tại đơn", "thời quá khứ tiếp diễn", rồi hàng chục bảng chia động cơ với đầy ngoại lệ.</p>

			<p>[Lego Assembly] đề xuất một cách nhìn hoàn toàn khác:</p>

			<p>Mọi câu tiếng Anh đều được lắp từ ba khối cố định. Bạn không học "thì" — bạn học cách lắp ghép.</p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Ba khối Lego</h3>

			<p>Hình dung mỗi câu tiếng Anh là một thanh Lego gồm đúng ba mảnh. Mỗi mảnh có màu riêng, chức năng riêng, và không thể hoán đổi tùy tiện.</p>

			<p className="margin-top-20">1. <strong>S</strong></p>
			
				<ul className="list-square">
			
					<li>Subject - Danh chủ</li>
					<li className="list-none">Ai / cái gì thực hiện</li>
			
				</ul>

			<p className="margin-top-20">2. <strong>Head</strong></p>
			
				<ul className="list-square">
			
					<li>Hạt nhân — Động cơ</li>
					<li className="margin-bottom-20 list-none">Mang chỉ dấu thời gian</li>
			
				</ul>
			
			<p className="margin-top-20">3. <strong>DP</strong>/<strong>DC</strong></p>
			
				<ul className="list-square">
			
					<li>Dependent Phrase/Clause - Phụ cụm/Câu con</li>
					<li className="list-none">Bổ nghĩa, đứng sau Head</li>
			
				</ul>
			
			<p className="margin-top-20">DP và DC đều là "phụ thuộc" — chúng không thể đứng một mình. Sinh ra là để bổ nghĩa cho hạt nhân.</p>

			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Head — Hạt nhân của câu</h3>

			<p>Head không chỉ là động cơ. Nó là trung tâm điều khiển của câu — gánh luôn chỉ dấu thời gian, ngôi số, và cả phủ định khi cần.</p>

			<h4 className="margin-y-40">Head tích hợp</h4>

			<p className="text-indent-whole">Trong câu khẳng định, Head là một từ duy nhất nhưng đã gói ghém nhiều thứ bên trong:</p>
			
				<ul className="list-square">

					<li>She eats rice.</li>
					<li className="margin-bottom-20 list-none">Cô ấy ăn cơm.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">eats (tích hợp does eat) - Head</li>
					<li className="margin-bottom-20 list-none">rice - DP</li>
					
					<li>I ate rice.</li>
					<li className="margin-bottom-20 list-none">Tôi đã ăn cơm.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">ate (tích hợp did eat) - Head</li>
					<li className="margin-bottom-20 list-none">rice - DP</li>

					<li>She is tired.</li>
					<li className="margin-bottom-20 list-none">Cô ấy đang mệt.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">is - Head</li>
					<li className="margin-bottom-20 list-none">tired - DP</li>
			
					<li>He doesn't eat rice.</li>
					<li className="margin-bottom-20 list-none">Anh ấy không ăn cơm.</li>
					<li className="list-none">He - S</li>
					<li className="list-none">doesn't (tích hợp does + not) - Head</li>
					<li className="margin-bottom-20 list-none">eat rice - DP</li>
			 
					<li>She won't come.</li>
					<li className="margin-bottom-20 list-none">Cô ấy sẽ không đến.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">won't (tích hợp will + not) - Head</li>
					<li className="margin-bottom-20 list-none">come - DP</li>
			
				</ul>

			<h4 className="margin-y-40">Head tách ra</h4>

			<p className="text-indent-whole">Khi câu cần phủ định đầy đủ hoặc đặt câu hỏi, chỉ dấu thời gian tách thành Head riêng. Phần còn lại gộp thành DP — bắt đầu bằng động cơ nguyên mẫu bare (không "to").</p>
					
				<ul className="list-square">
			
					<li>will / could / do / did / does</li>
					<li className="margin-bottom-20 list-none">sẽ / có thể / làm / đã làm / làm (dùng cho ngôi thứ ba số ít)</li>

					<li className="list-none">→ Head tách — DP bắt đầu bằng V bare</li>
			
				</ul>
	

			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. Ba loại câu</h3>

			<p>Cùng ba khối Lego đó. Chỉ cần thay đổi vị trí của Head là bạn có ba loại câu hoàn toàn khác nhau.</p>

			<h4 className="margin-y-40">Khẳng định — S Head DP/DC</h4>

			<p className="margin-y-30 text-indent-whole"><strong>S Head DP</strong>/<strong>DC</strong></p>
			
				<ul className="list-square">

					<li>I eat rice.</li>
					<li className="margin-bottom-20 list-none">Tôi ăn cơm.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">eat - Head</li>
					<li className="margin-bottom-20 list-none">rice - DP</li>
					
					<li>He buys a car.</li>
					<li className="margin-bottom-20 list-none">Anh ta mua một chiếc xe.</li>
					<li className="list-none">He - S</li>
					<li className="list-none">buys - Head</li>
					<li className="margin-bottom-20 list-none">a car - DP</li>

					<li>She is tired.</li>
					<li className="margin-bottom-20 list-none">Cô ấy mệt.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">is - Head</li>
					<li className="margin-bottom-20 list-none">tired - DP</li>
			
					<li>I am eating rice.</li>
					<li className="margin-bottom-20 list-none">Tôi đang ăn cơm.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">am - Head</li>
					<li className="margin-bottom-20 list-none">eating rice - DP</li>
			 
					<li>She will join the team.</li>
					<li className="margin-bottom-20 list-none">Cô ấy sẽ gia nhập đội.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">will - Head</li>
					<li className="list-none">join the team - DP</li>
			
				</ul>


			<h4 className="margin-y-40">Phủ định — "not" đi theo vị trí</h4>

			<p className="text-indent-whole">"not" không có nhà cố định. Khi rút gọn (-n't) nó dính vào Head. Khi viết đầy đủ nó đứng đầu DP.</p>

			<p className="margin-y-30 text-indent-whole"><strong>Rút gọn</strong>: <strong>S Head</strong>(-<strong>n</strong>'<strong>t</strong>) <strong>DP</strong> — "<strong>not</strong>" <strong>thuộc Head</strong></p>
			
				<ul className="list-square">

					<li>I don't eat rice.</li>
					<li className="margin-bottom-20 list-none">Tôi không ăn cơm.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">don't - Head</li>
					<li className="margin-bottom-20 list-none">eat rice - DP</li>
			
					<li>She isn't tired.</li>
					<li className="margin-bottom-20 list-none">Cô ấy không mệt.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">isn't - Head</li>
					<li className="margin-bottom-20 list-none">tired - DP</li>
			 
					<li>She won't join the team.</li>
					<li className="margin-bottom-20 list-none">Cô ấy sẽ không tham gia đội.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">won't - Head</li>
					<li className="list-none">join the team - DP</li>
			
				</ul>
			
					
			<p className="margin-y-30 text-indent-whole"><strong>Đầy đủ</strong>: <strong>S Head DP</strong> (<strong>not</strong>...) — "<strong>not</strong>" <strong>đứng đầu DP</strong></p>
			
				<ul className="list-square">

					<li>I do not eat rice.</li>
					<li className="margin-bottom-20 list-none">Tôi không ăn cơm.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">do - Head</li>
					<li className="margin-bottom-20 list-none">not eat rice - DP</li>
			
					<li>She is not tired.</li>
					<li className="margin-bottom-20 list-none">Cô ấy không mệt.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">is - Head</li>
					<li className="margin-bottom-20 list-none">not tired - DP</li>
			 
					<li>She will not join the team.</li>
					<li className="margin-bottom-20 list-none">Cô ấy sẽ không tham gia đội.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">will - Head</li>
					<li className="list-none">not join the team - DP</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">"not" đi theo ai đứng cạnh nó — rút gọn thì ở trong Head, viết đầy đủ thì đứng đầu DP.</p>


			<h4 className="margin-y-40">Nghi vấn — Head nhảy lên trước S</h4>
					
			<p className="text-indent-whole"><strong>Head S DP</strong>/<strong>DC</strong>? (<strong>Head nhảy lên</strong> — <strong>DP không đổi</strong>)</p>
			
				<ul className="list-square">

					<li>Do you eat rice?</li>
					<li className="margin-bottom-20 list-none">Bạn có ăn cơm không?</li>
					<li className="list-none">Do - Head</li>
					<li className="list-none">you - S</li>
					<li className="margin-bottom-20 list-none">eat rice? - DP</li>

					<li>Is she tired?</li>
					<li className="margin-bottom-20 list-none">Cô ấy có mệt không?</li>
					<li className="list-none">Is - Head</li>
					<li className="list-none">she - S</li>
					<li className="margin-bottom-20 list-none">tired? - DP</li>

					<li>Will she join the team?</li>
					<li className="margin-bottom-20 list-none">Cô ấy có gia nhập đội không?</li>
					<li className="list-none">Will - Head</li>
					<li className="list-none">she - S</li>
					<li className="margin-bottom-20 list-none">join the team? - DP</li>
			
					<li>Could you open the door?</li>
					<li className="margin-bottom-20 list-none">Bạn có thể mở cửa không?</li>
					<li className="list-none">Could - Head</li>
					<li className="list-none">you - S</li>
					<li className="margin-bottom-20 list-none">open the door? - DP</li>
			 
					<li>Isn't she tired?</li>
					<li className="margin-bottom-20 list-none">Cô ấy không mệt à?</li>
					<li className="list-none">Isn't - Head</li>
					<li className="list-none">she - S</li>
					<li className="list-none">tired? - DP</li>
			
				</ul>

			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. DP — Dependent Phrase</h3>

			<p>DP là tất cả những gì đứng sau Head, không có động cơ chia riêng bên trong. Nó có thể là tính cơ, danh cơ, cụm V-ing, cụm nguyên mẫu, trạng cơ, hoặc cụm giới cơ.</p>

				<ul className="list-square">

					<li>She is happy today.</li>
					<li className="margin-bottom-20 list-none">Cô ấy vui hôm nay.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">is - Head</li>
					<li className="margin-bottom-20 list-none">happy today - DP tính cơ</li>

					<li>She is reading a book.</li>
					<li className="margin-bottom-20 list-none">Cô ấy đang đọc sách.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">is - Head</li>
					<li className="margin-bottom-20 list-none">reading a book - DP V-ing</li>

					<li>He buys a new car.</li>
					<li className="margin-bottom-20 list-none">Anh ta mua xe mới.</li>
					<li className="list-none">He - S</li>
					<li className="list-none">buys - Head</li>
					<li className="margin-bottom-20 list-none">a new car - DP danh cơ</li>
			
					<li>He works in Vietnam.</li>
					<li className="margin-bottom-20 list-none">Anh ta làm việc ở Hà Nội.</li>
					<li className="list-none">He - S</li>
					<li className="list-none">works - Head</li>
					<li className="margin-bottom-20 list-none">in Vietnam - DP giới cơ</li>
			 
					<li>I will eat rice</li>
					<li className="margin-bottom-20 list-none">Tôi sẽ ăn cơm.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">will - Head</li>
					<li className="list-none">eat rice - DP V bare</li>
			
				</ul>

			{/* 5.  */}

			<h3 className="margin-y-50 text-center">5. DC — Dependent Clause</h3>
					
			<p>DC là câu con phụ — nó có động cơ chia riêng bên trong. Đây là điểm duy nhất phân biệt DC với DP.</p>
					
			<p>Kiểm tra nhanh: có động cơ đang "chạy" bên trong không? Có → DC. Không → DP.</p>

			<h4 className="margin-y-40">DC làm danh nhận — đứng sau Head</h4>
					
			<p className="text-indent-whole">DC thay thế vị trí DP — nó là thứ đứng sau Head, chỉ là phức tạp hơn vì bên trong có S V riêng.</p>

			<ul className="list-square">

					<li>She said that she is not tired.</li>
					<li className="margin-bottom-20 list-none">Cô ấy nói rằng cô ấy không mệt.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">said - Head</li>
					<li className="margin-bottom-20 list-none">that she is not tired - DC</li>

					<li>I have what I need.</li>
					<li className="margin-bottom-20 list-none">Tôi biết rằng anh ta đúng.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">know - Head</li>
					<li className="margin-bottom-20 list-none">that he is right - DC</li>
			
					<li>I have what I need.</li>
					<li className="margin-bottom-20 list-none">Tôi có những gì tôi cần.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">have - Head</li>
					<li className="margin-bottom-20 list-none">what I need - DC</li>
			 
					<li>I don't know where he went.</li>
					<li className="margin-bottom-20 list-none">Tôi không biết anh ta đi đâu.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">don't - Head</li>
					<li className="list-none">know where he went - DP[DC]</li>
			
				</ul>

			<h4 className="margin-y-40">DC bổ nghĩa danh cơ trong S — Relative Clause</h4>
					
			<p className="text-indent-whole">DC có thể nằm bên trong S để bổ nghĩa cho danh cơ. Khi đó cấu trúc là: S [DC] Head DP.</p>

			<ul className="list-square">
			
					<li>The man who is standing next to the door is my friend.</li>
					<li className="margin-bottom-20 list-none">Người đàn ông, người mà đang đứng cạnh cửa, là bạn của tôi.</li>
					<li className="list-none">The man - S</li>
					<li className="list-none">who is standing next to the door - DC</li>
					<li className="list-none">is - Head</li>
					<li className="margin-bottom-20 list-none">my friend - DP</li>
			 
					<li>The book that she recommended was very useful.</li>
					<li className="margin-bottom-20 list-none">Cuốn sách mà cô ấy giới thiệu đã rất hữu ích.</li>
					<li className="list-none">The book - S</li>
					<li className="list-none">that she recommended - DC trong S</li>
					<li className="list-none">was - Head</li>
					<li className="list-none">very useful - DP</li>
			
				</ul>
			

			<h4 className="margin-y-40">DC → DP khi rút gọn</h4>
					
			<p className="text-indent-whole">Bỏ who/that be → DC thu gọn thành DP. Chức năng giống hệt nhau, chỉ hình thức ngắn hơn. Đây không phải hai loại khác nhau — một cái đầy đủ, một cái rút gọn.</p>
					
			<p className="text-indent-whole"><strong>DC</strong> — <strong>đầy đủ</strong></p>
			
				<ul className="list-square">
			
					<li>who is standing next to the door</li>
					<li className="margin-bottom-20 list-none">người đang đứng cạnh cửa</li>
			
					<li>that is broken</li>
					<li className="margin-bottom-20 list-none">cái mà bị hỏng (hoặc: cái bị hỏng)</li>
			
					<li>who was sleeping on the couch</li>
					<li className="list-none">người đã đang ngủ trên ghế sofa</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>DP</strong> — <strong>rút gọn</strong></p>
			
				<ul className="list-square">
			
					<li>standing next to the door</li>
					<li className="margin-bottom-20 list-none">đang đứng cạnh cửa</li>
			
					<li>broken</li>
					<li className="margin-bottom-20 list-none">bị hỏng / bị vỡ</li>
			
					<li>sleeping on the couch</li>
					<li className="margin-bottom-20 list-none">đang ngủ trên ghế sofa</li>
			
				</ul>

				<p className="margin-top-20">Ví dụ:</p>
			
				<ul className="list-square">
			
					<li>The man who is standing next to the door is my friend.</li>
					<li className="margin-bottom-20 list-none">Người đàn ông, người mà đang đứng cạnh cửa, là bạn của tôi.</li>
					<li className="list-none">The man - S</li>
					<li className="list-none">who is standing next to the door - DC</li>
					<li className="list-none">is - Head</li>
					<li className="margin-bottom-20 list-none">my friend - DP</li>
			 
					<li>The man standing next to the door is my friend.</li>
					<li className="margin-bottom-20 list-none">Người đàn ông đang đứng cạnh cửa là bạn của tôi.</li>
					<li className="list-none">The man - S</li>
					<li className="list-none">standing next to the door - DP rút gọn</li>
					<li className="list-none">is - Head</li>
					<li className="list-none">my friend - DP</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">DC là DP đầy đủ, DP là DC rút gọn. Cả hai đều phụ thuộc — không thể đứng một mình.</p>

			{/* 6.  */}

			<h3 className="margin-y-50 text-center">6. Bảng tổng hợp</h3>
			
				<ul className="list-square">

					<li>I eat rice</li>
					<li className="list-none">Tôi ăn cơm.</li>
					<li className="list-none">eat (tích hợp do eat) - Head</li>
					<li className="margin-bottom-20 list-none">rice - DP</li>

					<li>He buys a car</li>
					<li className="list-none">Anh ấy mua một chiếc ô tô.</li>
					<li className="list-none">buys (tích hợp does buy) - Head</li>
					<li className="margin-bottom-20 list-none">a car - DP</li>
					
					<li>She is tired</li>
					<li className="list-none">Cô ấy đang mệt.</li>
					<li className="list-none">is - Head</li>
					<li className="margin-bottom-20 list-none">tired - DP</li>

					<li>I am eating rice</li>
					<li className="list-none">Tôi đang ăn cơm.</li>
					<li className="list-none">am - Head</li>
					<li className="margin-bottom-20 list-none">eating rice - DP</li>

					<li>She will join the team</li>
					<li className="list-none">Cô ấy sẽ tham gia đội.</li>
					<li className="list-none">will - Head</li>
					<li className="margin-bottom-20 list-none">	join the team - DP</li>

					<li>He doesn't eat rice</li>
					<li className="list-none">Anh ấy không ăn cơm.</li>
					<li className="list-none">doesn't - Head</li>
					<li className="margin-bottom-20 list-none">eat rice - DP</li>
					
					<li>He does not eat rice</li>
					<li className="list-none">Anh ấy không ăn cơm.</li>
					<li className="list-none">does - Head</li>
					<li className="margin-bottom-20 list-none">not eat rice - DP</li>

					<li>She isn't tired</li>
					<li className="list-none">Cô ấy không mệt.</li>
					<li className="list-none">isn't - Head</li>
					<li className="margin-bottom-20 list-none">tired - DP</li>

					<li>She is not tired</li>
					<li className="list-none">Cô ấy không mệt.</li>
					<li className="list-none">is - Head</li>
					<li className="margin-bottom-20 list-none">not tired - DP</li>

					<li>She won't come</li>
					<li className="list-none">Cô ấy sẽ không đến.</li>
					<li className="list-none">won't - Head</li>
					<li className="margin-bottom-20 list-none">come - DP</li>
					
					<li>Do you eat rice?</li>
					<li className="list-none">Bạn có ăn cơm không?</li>
					<li className="list-none">Do - Head</li>
					<li className="margin-bottom-20 list-none">eat rice - DP</li>

					<li>Will she join the team?</li>
					<li className="list-none">Cô ấy sẽ tham gia đội chứ?</li>
					<li className="list-none">Will - Head</li>
					<li className="margin-bottom-20 list-none">join the team - DP</li>

					<li>Isn't she tired?</li>
					<li className="list-none">Cô ấy không mệt sao?</li>
					<li className="list-none">Isn't - Head</li>
					<li className="margin-bottom-20 list-none">tired - DP</li>

					<li>She said that she is not tired</li>
					<li className="list-none">Cô ấy nói rằng cô ấy không mệt.</li>
					<li className="list-none">said - Head</li>
					<li className="margin-bottom-20 list-none">that she is not tired - DC</li>
			
					<li>I know that he is right</li>
					<li className="list-none">Tôi biết rằng anh ấy đúng.</li>
					<li className="list-none">know - Head</li>
					<li className="margin-bottom-20 list-none">that he is right - DC</li>
			
					<li>I have what I need</li>
					<li className="list-none">Tôi có thứ tôi cần.</li>
					<li className="list-none">have - Head</li>
					<li className="margin-bottom-20 list-none">what I need - DC</li>
			
					<li>The man [who is standing...] is my friend</li>
					<li className="list-none">Người đàn ông [đang đứng...] là bạn của tôi.</li>
					<li className="list-none">is - Head</li>
					<li className="list-none">	my friend - DC trong S</li>
			
				</ul>
			
			<p className="margin-top-20"></p>

			{/* 7. */}

			<h3 className="margin-y-50 text-center">7. Bốn quy tắc vàng</h3>
			
				<ol>
			
					<li>Head gánh hết mọi thứ — thời gian, ngôi số, phủ định khi rút gọn. DP/DC chỉ mang nghĩa thuần túy.</li>
			
					<li>"not" đi theo vị trí: dính vào Head khi rút gọn (-n't), đứng đầu DP khi viết đầy đủ.</li>
			
					<li>Nghi vấn = Head nhảy lên trước S. Không thay đổi gì khác. DP/DC giữ nguyên hoàn toàn.</li>

					<li>DC là DP đầy đủ, DP là DC rút gọn. Cả hai đều phụ thuộc — không thể đứng một mình.</li>
			
				</ol>
			
			<p className="margin-top-20"></p>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 28, 2026 · by Claud and 🐝Mr. Bee Osn ·</span>
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