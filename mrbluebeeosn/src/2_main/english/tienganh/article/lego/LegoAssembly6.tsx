import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function LegoAssembly6(): React.JSX.Element {

	const postId = "LegoAssembly6";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Lego Assembly
												
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

			<h4 className="margin-bottom-30 text-center">Mô hình Lego Assembly S Head DP DC</h4>

			{/*  Giới thiệu  */}

			<h3 className="margin-y-50 text-center">Giới thiệu</h3>

			<p><strong>Lego Assembly</strong> biến câu tiếng Anh thành ba viên ghép trực quan:</p>

			<p><strong>S</strong> (<strong>Subject</strong>) <strong>Head</strong> (<strong>hạt nhân</strong>) <strong>DP</strong>/<strong>DC</strong> (<strong>phần phụ thuộc</strong>).</p>

			<p>Mục tiêu: tách <strong>chức năng</strong> (vị trí trong câu) và <strong>cấu trúc</strong> (câu con bên trong) để thao tác khẳng định, phủ định, nghi vấn và rút gọn câu con một cách nhất quán và dễ nhớ.</p>

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Nguyên tắc ghi nhãn cơ bản</h3>
			
				<ul className="list-square">
			
					<li><strong>S</strong> = Subject</li>
					<li className="margin-bottom-20 list-none">Danh chủ</li>

					<li><strong>Head</strong> = hạt nhân:</li>
					<li className="margin-bottom-20 list-none">Động cơ chia, thời động cơ, modal, hoặc be.</li>
			
					<li><strong>DP</strong> = Dependent Phrase</li>
					<li className="margin-bottom-20 list-none">Nhãn chức năng cho phần phụ thuộc theo vị trí (object, complement, hoặc phần đứng ở vị trí subject). DP có thể là danh cụm, tính cụm, participial phrase, gerund clause, infinitive phrase, câu con danh cơ, v.v.</li>
			
					<li><strong>DC</strong> = Dependent Clause</li>
					<li className="list-none">phụ câu có danh chủ + vị ngữ bên trong.</li>
			
				</ul>
			
			
			<p className="margin-top-20"><strong>Quy tắc nhanh</strong></p>
			
				<ol>
			
					<li>Xác định <strong>S</strong> (vị trí danh chủ).</li>
			
					<li>Xác định <strong>Head</strong> (động cơ chia / thời động cơ / modal / <strong>be</strong>).</li>
			
					<li>Phần đứng sau <strong>Head</strong> (hoặc phần đứng trước Head nếu là danh chủ) là <strong>DP</strong> theo vị trí.</li>

					<li>Mở phần phụ thuộc ra: nếu bên trong có S V → đó là <strong>DC</strong>; nếu không → <strong>DP</strong> thuần túy.</li>
			
					<li>Khi phần phụ thuộc vừa là DP theo vị trí vừa có cấu trúc câu con bên trong, ghi <strong>DP</strong>[<strong>DC</strong>].</li>
			
				</ol>
			
			<p className="margin-top-20"><strong>Ghi nhớ</strong>: DP là nhãn chức năng cho vị trí phụ thuộc; DC mô tả cấu trúc câu con. DC thường bổ sung cho một thành phần khác trong câu — thường là <strong>S</strong>, đôi khi là <strong>DP</strong>.</p>

			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Head theo chức năng (tóm tắt)</h3>
			
				<ul className="list-square">
			
					<li><strong>Động cơ chia</strong>:</li>
					<li className="margin-bottom-20 list-none">Mang thì trong khẳng định; khi phủ định/nghi vấn cần trợ <strong>do</strong>/<strong>does</strong>/<strong>did</strong>.</li>

					<li><strong>Thời động cơ</strong> (<strong>do</strong>/<strong>does</strong>/<strong>did</strong>):</li>
					<li className="margin-bottom-20 list-none">Tạo phủ định/nghi vấn cho present/past simple.</li>
			
					<li><strong>Modal</strong> (<strong>will</strong>/<strong>can</strong>/<strong>could</strong>):</li>
					<li className="margin-bottom-20 list-none">Biểu thị tương lai/khả năng; phủ định chèn <strong>not</strong> sau modal; nghi vấn đưa modal lên trước S.</li>

					<li><strong>Be adj</strong>:</li>
					<li className="margin-bottom-20 list-none">Be là Head; phủ định chèn <strong>not</strong> sau be; nghi vấn đảo be lên trước S.</li>
			
					<li><strong>Câu con làm Subject</strong>:</li>
					<li className="list-none">Câu con (DC) đứng ở vị trí S nhưng về chức năng vẫn là DP (ghi DP[DC] khi cần).</li>
			
				</ul>
			

			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. Khẳng định — Phủ định — Nghi vấn (quy tắc nhanh)</h3>
			
			<p><strong>Khẳng định</strong>: S Head DP.</p>

			<p><strong>Phủ định</strong>:</p>
			
				<ul className="list-square">
			
					<li>Nếu Head là <strong>modal</strong>/<strong>trợ</strong></li>
					<li className="margin-bottom-20 list-none">→ chèn <strong>not</strong> ngay sau Head.</li>
			
					<li>Nếu Head là <strong>động cơ chia</strong> (present/past simple)</li>
					<li className="list-none">→ thay Head bằng <strong>do</strong>/<strong>does</strong>/<strong>did</strong>; động cơ chính về nguyên mẫu.</li>
			
				</ul>
			
			<p className="margin-top-20"><strong>Nghi vấn</strong>: đưa Head (modal/trợ/do) lên trước S.</p>


			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. Ví dụ ngắn — làm rõ Head và DP</h3>

			<h4 className="margin-y-40">1. She buys a car.</h4>
					
			<p className="margin-top-20 text-indent-whole"><strong>Khẳng định</strong>:</p>
			
				<ul className="list-square">
			
					<li>She buys a car.</li>
					<li className="margin-bottom-20 list-none">Cô ấy mua một chiếc ô tô.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">buys (động cơ chia) - Head (gốc)</li>
					<li className="list-none">a car (object) - DP</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Phủ định</strong>:</p>
			
				<ul className="list-square">
			
					<li>She does not buy a car.</li>
					<li className="margin-bottom-20 list-none">Cô ấy không mua chiếc ô tô nào.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">does - Head</li>
					<li className="list-none">not buy a car - DP</li>
			
				</ul>
					
			<p className="margin-top-20 text-indent-whole"><strong>Nghi vấn</strong>:</p>
			
				<ul className="list-square">
			
					<li>Does she buy a car?</li>
					<li className="margin-bottom-20 list-none">Cô ấy có mua chiếc ô tô nào không?</li>
					<li className="list-none">Does (lên trước S) - Head</li>
					<li className="list-none">she - S</li>
					<li className="list-none">buy a car - DP</li>
			
				</ul>


			<h4 className="margin-y-40">2. They will join the team.</h4>
					
			<p className="margin-top-20 text-indent-whole"><strong>Khẳng định</strong>:</p>
			
				<ul className="list-square">
			
					<li>They will join the team.</li>
					<li className="margin-bottom-20 list-none">Họ sẽ gia nhập đội.</li>
					<li className="list-none">They - S</li>
					<li className="list-none">will (modal) - Head</li>
					<li className="list-none">join the team (complement) - DP</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Phủ định</strong>:</p>
			
				<ul className="list-square">
			
					<li>They will not join the team.</li>
					<li className="margin-top-20 list-none">Họ sẽ không gia nhập đội.</li>
					<li className="list-none">They - S</li>
					<li className="list-none">will - Head</li>
					<li className="list-none">not join the team - DP</li>
			
				</ul>
					
			<p className="margin-top-20 text-indent-whole"><strong>Nghi vấn</strong>:</p>
			
				<ul className="list-square">
			
					<li>Will they join the team?</li>
					<li className="margin-bottom-20 list-none">Họ sẽ gia nhập đội chứ?</li>
					<li className="list-none">Will - Head</li>
					<li className="list-none">they - S</li>
					<li className="list-none">join the team - DP</li>
			
				</ul>


			<h4 className="margin-y-40">3. The child is happy.</h4>
					
			<p className="margin-top-20 text-indent-whole"><strong>Khẳng định</strong>:</p>
			
				<ul className="list-square">
			
					<li>The child is happy.</li>
					<li className="margin-bottom-20 list-none">Đứa trẻ thì hạnh phúc.</li>
					<li className="list-none">The child - S</li>
					<li className="list-none">is (be) - Head</li>
					<li className="list-none">happy (adjective complement) - DP</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Phủ định</strong>:</p>
			
				<ul className="list-square">
			
					<li>The child is not happy.</li>
					<li className="margin-bottom-20 list-none">Đứa trẻ thì không hạnh phúc.</li>
					<li className="list-none">The child - S</li>
					<li className="list-none">is - Head</li>
					<li className="list-none">not happy - DP</li>
			
				</ul>
					
			<p className="margin-top-20 text-indent-whole"><strong>Nghi vấn</strong>:</p>
			
				<ul className="list-square">
			
					<li>Is the child happy?</li>
					<li className="margin-bottom-20 list-none">Đứa trẻ có hạnh phúc không?</li>
					<li className="list-none">Is - Head</li>
					<li className="list-none">the child - S</li>
					<li className="list-none">happy - DP</li>
			
				</ul>


			<h4 className="margin-y-40">4. She knows what he wants.</h4>

			<p className="margin-top-20 text-indent-whole"><strong>Khẳng định</strong>:</p>
			
				<ul className="list-square">
			
					<li>She knows what he wants.</li>
					<li className="margin-bottom-20 list-none">Cô ấy biết anh ấy muốn gì.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">knows (động cơ chia) - Head</li>
					<li className="list-none">what he wants - DP[DC] - DP theo chức năng là object; DC về cấu trúc là câu con danh cơ (S+V)</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Phủ định</strong>:</p>
			
				<ul className="list-square">
			
					<li>She does not know what he wants.</li>
					<li className="margin-bottom-20 list-none">Cô ấy không biết anh ấy muốn gì.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">does - Head</li>
					<li className="list-none">not know [what he wants] - DP[DC]</li>
			
				</ul>
					
			<p className="margin-top-20 text-indent-whole"><strong>Nghi vấn</strong>:</p>
			
				<ul className="list-square">
			
					<li>Does she know what he wants?</li>
					<li className="margin-bottom-20 list-none">Cô ấy có biết anh ấy muốn gì không?</li>
					<li className="list-none">Does - Head</li>
					<li className="list-none">she - S</li>
					<li className="list-none">know [what he wants] - DP[DC]</li>
			
				</ul>


			{/* 5.  */}

			<h3 className="margin-y-50 text-center">5. Rút gọn câu con quan hệ thành participial phrase</h3>
			
				<ul className="list-square">
			
					<li><strong>Điều kiện</strong>:</li>
					<li className="margin-bottom-20 list-none">Danh chủ trong câu con quan hệ trùng với danh cơ được bổ nghĩa.</li>
			
					<li><strong>Cách rút gọn</strong>:</li>
					<li className="margin-bottom-20 list-none">Bỏ đại cơ quan hệ; giữ <strong>V</strong>‑<strong>ing</strong> (present participle) hoặc <strong>V</strong>‑<strong>ed</strong> (past participle).</li>
			
					<li><strong>Hiệu quả</strong>:</li>
					<li className="list-none">Hình thức chuyển từ <strong>DC</strong> sang <strong>DP</strong> dạng participial; chức năng modifier trong NP không đổi.</li>
			
				</ul>
			
			<p className="margin-top-20">Ví dụ:</p>
					
				<ul className="list-square">
			
					<li>The woman who is speaking smiled.</li>
					<li className="margin-bottom-20 list-none">Người phụ nữ, người mà đang nói chuyện, đã mỉm cười.</li>
					<li className="list-none">The woman who is speaking - S</li>
					<li className="list-none">smiled - Head</li>
			
				</ul>

			<p className="margin-top-20">Rút gọn:</p>
					
				<ul className="list-square">
			
					<li>The woman speaking smiled.</li>
					<li className="margin-bottom-20 list-none">Người phụ nữ đang nói chuyện đã mỉm cười.</li>
					<li className="list-none">The woman speaking - S</li>
					<li className="list-none">smiled - Head</li>
					<li className="list-none"></li>
			
				</ul>
			
			<p className="margin-top-20"><strong>Lưu ý</strong>: không rút gọn khi danh chủ câu con quan hệ khác danh cơ chính; tránh rút gọn nếu gây mơ hồ.</p>
			

			{/* 6.  */}

			<h3 className="margin-y-50 text-center">6. DC bổ sung S, đôi khi DP — minh họa ngắn</h3>

			<p><strong>DC bổ sung S</strong>:</p>
			
				<ul className="list-square">
			
					<li>What she said surprised everyone.</li>
					<li className="list-none">Tôi biết rằng cô ấy sẽ đến.</li>
					<li className="list-none">What she said - S = DP[DC] (vị trí subject; cấu trúc là câu con).</li>
			
				</ul>

			<p className="margin-top-20"><strong>DC bổ sung DP</strong> (<strong>object</strong>):</p>
			
				<ul className="list-square">
			
					<li>I know that she will come.</li>
					<li className="list-none">Những gì cô ấy nói đã làm tất cả mọi người ngạc nhiên.</li>
					<li className="list-none">that she will come (object) → DP[DC]</li>
			
				</ul>

			<p className="margin-top-20"><strong>Ghi chú</strong>: nhiều thành phần khác (infinitive phrase, quantifier phrases, danh cụm) cũng là DP; chỉ khi phần đó chứa câu con mới thêm [DC].</p>
	

			{/* 7.  */}

			<h3 className="margin-y-50 text-center">7. 20 ví dụ mẫu S Head DP/DC</h3>
			
				<ol>

					<li value="1">I will start the course.</li>
					<li className="margin-bottom-20 list-none">Tôi sẽ bắt đầu khóa học.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">will - Head</li>
					<li className="margin-bottom-20 list-none">start the course - DP</li>

					<li value="2">I won’t start the course.</li>
					<li className="margin-bottom-20 list-none">Tôi sẽ không bắt đầu khóa học.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">won’t - Head</li>
					<li className="margin-bottom-20 list-none">start the course - DP</li>

					<li value="3">He buys a ticket.</li>
					<li className="margin-bottom-20 list-none">Anh ấy mua một chiếc vé.</li>
					<li className="list-none">He - S</li>
					<li className="list-none">buys - Head</li>
					<li className="margin-bottom-20 list-none">a ticket - DP</li>

					<li value="4">They can solve the problem.</li>
					<li className="margin-bottom-20 list-none">Họ có thể giải quyết vấn đề đó.</li>
					<li className="list-none">They - S</li>
					<li className="list-none">can - Head</li>
					<li className="margin-bottom-20 list-none">solve the problem - DP</li>

					<li value="5">She does not like coffee.</li>
					<li className="margin-bottom-20 list-none">Cô ấy không thích cà phê.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">does - Head</li>
					<li className="margin-bottom-20 list-none">not like coffee - DP</li>

					<li value="6">We are ready.</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã sẵn sàng.</li>
					<li className="list-none">We - S</li>
					<li className="list-none">are - Head</li>
					<li className="margin-bottom-20 list-none">ready - DP</li>

					<li value="7">The team won the match.</li>
					<li className="margin-bottom-20 list-none">Đội đã thắng trận đấu.</li>
					<li className="list-none">The team - S</li>
					<li className="list-none">won - Head</li>
					<li className="margin-bottom-20 list-none">the match - DP</li>

					<li value="8">She knows where he lives.</li>
					<li className="margin-bottom-20 list-none">Cô ấy biết anh ấy sống ở đâu.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">knows - Head</li>
					<li className="margin-bottom-20 list-none">where he lives - DP[DC]</li>

					<li value="9">What he said surprised everyone.</li>
					<li className="margin-bottom-20 list-none">Những gì anh ấy nói đã làm tất cả mọi người ngạc nhiên.</li>
					<li className="list-none">What he said - S</li>
					<li className="list-none">surprised - Head</li>
					<li className="margin-bottom-20 list-none">everyone - DP</li>

					<li value="10">Eating late at night is healthy.</li>
					<li className="margin-bottom-20 list-none">Việc ăn muộn vào ban đêm là tốt cho sức khỏe.</li>
					<li className="list-none">Eating late at night - S</li>
					<li className="list-none">is - Head</li>
					<li className="margin-bottom-20 list-none">healthy - DP</li>

					<li value="11">They will attend the meeting.</li>
					<li className="margin-bottom-20 list-none">Họ sẽ tham dự cuộc họp.</li>
					<li className="list-none">They - S</li>
					<li className="list-none">will - Head</li>
					<li className="margin-bottom-20 list-none">attend the meeting - DP</li>
			
					<li value="12">The students who studied passed the exam.</li>
					<li className="margin-bottom-20 list-none">Những học sinh, những người đã học bài, đã vượt qua kỳ thi.</li>
					<li className="list-none">The students who studied - S</li>
					<li className="list-none">passed - Head</li>
					<li className="margin-bottom-20 list-none">the exam - DP</li>

					<li value="13">The students studying passed the exam.</li>
					<li className="margin-bottom-20 list-none">Những học sinh đang học bài đã vượt qua kỳ thi.</li>
					<li className="list-none">The students studying - S</li>
					<li className="list-none">passed - Head</li>
					<li className="margin-bottom-20 list-none">the exam - DP</li>

					<li value="14">I do not remember the date.</li>
					<li className="margin-bottom-20 list-none">Tôi không nhớ ngày đó.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">do - Head</li>
					<li className="margin-bottom-20 list-none">not remember the date - DP</li>

					<li value="15">She could help us.</li>
					<li className="margin-bottom-20 list-none">Cô ấy có thể giúp chúng ta.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">could - Head</li>
					<li className="margin-bottom-20 list-none">help us - DP</li>

					<li value="16">The letter was sent yesterday.</li>
					<li className="margin-bottom-20 list-none">Bức thư đã được gửi đi vào ngày hôm qua.</li>
					<li className="list-none">The letter - S</li>
					<li className="list-none">was - Head</li>
					<li className="margin-bottom-20 list-none">sent yesterday - DP</li>

					<li value="17">I believe that he is honest.</li>
					<li className="margin-bottom-20 list-none">Tôi tin rằng anh ấy trung thực.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">believe - Head</li>
					<li className="margin-bottom-20 list-none">that he is honest - DP[DC]</li>

					<li value="18">She does not agree with the plan.</li>
					<li className="margin-bottom-20 list-none">Cô ấy không đồng ý với kế hoạch đó.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">does - Head</li>
					<li className="margin-bottom-20 list-none">not agree with the plan - DP</li>

					<li value="19">They have a new idea.</li>
					<li className="margin-bottom-20 list-none">Họ có một ý tưởng mới.</li>
					<li className="list-none">They - S</li>
					<li className="list-none">have - Head</li>
					<li className="margin-bottom-20 list-none">a new idea - DP</li>

					<li value="20">Whoever arrives first gets the prize.</li>
					<li className="margin-bottom-20 list-none">Bất cứ ai đến đầu tiên sẽ nhận được giải thưởng.</li>
					<li className="list-none">Whoever arrives first - S</li>
					<li className="list-none">gets - Head</li>
					<li className="list-none">the prize - DP</li>
				</ol>


			{/* 8.  */}

			<h3 className="margin-y-50 text-center">8. Bài tập ngắn</h3>

			<p></p>

			<p className="margin-top-20"><strong>Ví dụ 1</strong>:</p>
			
				<ul className="list-square">
			
					<li>She will finish the report.</li>
					<li className="margin-bottom-20 list-none">Cô ấy sẽ hoàn thành bản báo cáo.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">will - Head</li>
					<li className="margin-bottom-20 list-none">finish the report - DP</li>

					<li>She will not finish the report.</li>
					<li className="margin-bottom-20 list-none">Cô ấy sẽ không hoàn thành bản báo cáo.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">will - Head</li>
					<li className="margin-bottom-20 list-none">not finish the report - DP</li>

					<li>Will she finish the report?</li>
					<li className="margin-bottom-20 list-none">Cô ấy có sẽ hoàn thành bản báo cáo không?</li>
					<li className="list-none">She - S</li>
					<li className="list-none">will - Head</li>
					<li className="list-none">finish the report - DP</li>
			
				</ul>

			<p className="margin-top-20"><strong>Ví dụ 2</strong>:</p>
			
				<ul className="list-square">
			
					<li>I don’t know what he wants.</li>
					<li className="margin-bottom-20 list-none">Tôi không biết anh ấy muốn gì.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">don’t  - Head</li>
					<li className="list-none">know [what he wants] - DP[DC]</li>
					
			
				</ul>

			<p className="margin-top-20"><strong>Ví dụ 3</strong>:</p>
			
				<ul className="list-square">

					<li>The artist who was invited painted a mural.</li>
					<li className="margin-bottom-20 list-none">Người nghệ sĩ, người mà đã được mời, đã vẽ một bức tranh tường.</li>

					<li className="margin-bottom-20 list-none">Rút gọn:</li>
			
					<li>The artist invited painted a mural.</li>
					<li className="margin-bottom-20 list-none">Người nghệ sĩ được mời đã vẽ một bức tranh tường.</li>
					<li className="list-none">The artist invited - S</li>
					<li className="list-none">painted - Head</li>
					<li className="list-none">a mural - DP</li>
			
				</ul>

			<p className="margin-top-20"><strong>Ví dụ 4</strong>:</p>
			
				<ul className="list-square">
			
					<li>Eating late at night harms sleep.</li>
					<li className="margin-bottom-20 list-none">Việc ăn khuya gây hại cho giấc ngủ.</li>
					<li className="list-none">Eating late at night - DP[DC]</li>
					<li className="list-none">harms - Head</li>
					<li className="list-none">sleep - DP</li>
			
				</ul>
		

			{/* Kết luận */}

			<h3 className="margin-y-50 text-center">Kết luận</h3>

			<p>Mô hình S Head DP/DC là công cụ trực quan, nhất quán để phân biệt chức năng và cấu trúc trong câu tiếng Anh. </p>

			<p>Quy trình: tìm <strong>S</strong>, xác định <strong>Head</strong>, rồi lắp <strong>DP</strong>; thao tác trên <strong>Head</strong> (thay, thêm <strong>not</strong>, hoặc đảo lên trước S) tạo phủ định và nghi vấn; khi DP chứa câu con, biểu diễn đầy đủ bằng <strong>DP</strong>[<strong>DC</strong>].</p>

			<p>Áp dụng mô hình này giúp viết và biến đổi câu nhanh, rõ ràng và chính xác.</p>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 29, 2026 · by Copilot and 🐝Mr. Bee Osn ·</span>
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