import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function LegoAssembly7(): React.JSX.Element {

	const postId = "LegoAssembly7";

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

			<h4 className="margin-bottom-30 text-center">Mô Hình Lego Assembly: Hướng Dẫn Toàn Diện Học Ngữ Pháp Tiếng Anh Như Xếp Lego</h4>

			<p>Bạn có đang học ngữ pháp tiếng Anh như một tấm bản đồ phức tạp?</p>

			<p>Bạn đã bao giờ cảm thấy choáng ngợp trước hàng chục "thì" trong tiếng Anh: hiện tại đơn, quá khứ tiếp diễn, tương lai hoàn thành tiếp diễn...?</p>

			<p>Bạn học đi học lại nhưng vẫn lúng túng khi phải nói một câu đơn giản?</p>

			<p><strong>Có một cách tiếp cận khác</strong>.</p>
			
			<p>Hãy tưởng tượng ngữ pháp tiếng Anh không phải là một mớ quy tắc phức tạp, mà là một <strong>bộ Lego</strong> — bạn chỉ cần học cách <strong>lắp ghép</strong> các khối cơ bản.</p>

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Tư duy "Dependent" (Phụ thuộc) là chìa khóa vàng</h3>

			<p>Mọi cụm từ (phrase) hay mệnh đề (clause) trong tiếng Anh đều có một đặc tính chung:</p>

			<p><strong>Chúng không thể đứng một mình</strong>.</p>

			<p>Chúng sinh ra là để <strong>bổ nghĩa cho Hạt nhân</strong> (<strong>Head</strong>).</p>
			
			<p className="margin-top-20">Muốn nói về trạng thái? Lắp một cụm tính từ vào:</p>
			
				<ul className="list-square">
			
					<li>I am [very busy].</li>
					<li className="list-none">Tôi [rất bận].</li>
			
				</ul>
			

			<p className="margin-top-20">Muốn nói About hành động? Lắp một cụm động từ vào:</p>
			
				<ul className="list-square">
			
					<li>I am [developing the app].</li>
					<li className="list-none">Tôi đang [phát triển ứng dụng này].</li>
			
				</ul>
			

			<p className="margin-top-20">Muốn diễn đạt ý phức tạp? Lắp một mệnh đề vào:</p>
			
				<ul className="list-square">
			
					<li>I have [what I need].</li>
					<li className="list-none">Tôi có [những gì tôi cần].</li>
			
				</ul>
			
			<p className="margin-top-20">Bạn <strong>không cần học</strong> "<strong>thì</strong>". Bạn <strong>chỉ cần học cách</strong> "<strong>lắp ghép</strong>" (<strong>assembly</strong>).</p>
			

			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Công Thức Cốt Lõi: S + Head + DP</h3>

			<p>Mỗi câu tiếng Anh đều có thể được phân tích thành 3 phần:</p>

			<p className="margin-y-40 text-indent-whole"><strong>S</strong> (<strong>Subject</strong>) <strong>Head DP</strong></p>

			<p>Trong đó:</p>
			
				<ul className="list-square">
			
					<li>Subject (Chủ ngữ) = <strong>S</strong></li>
			
					<li>Hạt nhân (Khối trung tâm điều khiển) = <strong>Head</strong></li>
			
					<li>Dependent Phrase (Phụ cụm) — <strong>mọi thứ sau Head</strong> = <strong>DP</strong></li>
			
				</ul>
			
			<p className="margin-top-20"><strong>Quan trọng</strong>:</p>
			
				<ul className="list-square">
			
					<li>Không có công thức "S Head not DP".</li>
			
					<li>Công thức luôn là <strong>S Head DP</strong>, và <strong>not nằm trong DP</strong>.</li>
			
				</ul>


			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. S (Subject) — Chủ Ngữ</h3>

			<p className="margin-top-20">Là người hoặc vật thực hiện hành động hoặc mang trạng thái.</p>
			
				<ul className="list-square">
			
					<li>I, You, He, She, It, We, They</li>
					<li className="margin-bottom-20 list-none">Tôi, Bạn, Anh ấy, Cô ấy, Nó, Chúng tôi, Họ</li>

					<li>The student, My friend...</li>
					<li className="list-none">Học sinh đó, Bạn của tôi...</li>
			
				</ul>


			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. Head — Khối Trung Tâm Điều Khiển</h3>

			<p className="margin-top-20">Head là phần quyết định <strong>thời</strong>, <strong>thể</strong>, <strong>khả năng</strong>, <strong>nghi vấn</strong>, <strong>phủ định</strong> của câu. Head có thể là:</p>

			<h4 className="margin-y-40"><strong>Động cơ chính</strong> - <strong>Head tích hợp</strong>:</h4>
					
			<p className="text-indent-whole">Mang luôn "<strong>chỉ dấu thời</strong>"</p>
			
				<ul className="list-square">
			
					<li>buys - Head</li>
					<li className="list-none">mua</li>

					<li>knows - Head.</li>
					<li className="list-none">biết</li>

					<li>develops - Head</li>
					<li className="list-none">phát triển</li>
			
				</ul>

			<h4 className="margin-y-40">Trợ động từ - Head</h4>

			<p className="margin-top-20"><strong>does</strong> / <strong>doesn</strong>'<strong>t</strong>: thường không dịch trực tiếp mà thể hiện qua thì và ngữ cảnh - <strong>Head</strong></p>
			
				<ul className="list-square">
			
					<li>He does not go.</li>
					<li className="list-none">Anh ấy không đi.</li>
					<li className="margin-bottom-20 list-none">does - Head</li>
			
					<li>Does he go?</li>
					<li className="list-none">Anh ấy có đi không?</li>
					<li className="list-none">Does - Head</li>
			
				</ul>
			

			<p className="margin-top-20"><strong>will</strong>: là sẽ (tương lai) - <strong>Head</strong></p>
			
				<ul className="list-square">
			
					<li>I will go.</li>
					<li className="list-none">Tôi sẽ đi.</li>
					<li className="list-none">will - Head</li>
			
				</ul>

			<p className="margin-top-20"><strong>could</strong>: có thể (khả năng/đề xuất/lịch sự) - <strong>Head</strong></p>
			
				<ul className="list-square">
			
					<li>I could help.</li>
					<li className="list-none">Tôi có thể giúp.</li>
					<li className="list-none">could - Head</li>
			
				</ul>
			

			<p className="margin-top-20"><strong>am</strong>/<strong>is</strong>/<strong>are</strong>: thì / đang (tùy ngữ cảnh hiện tại tiếp diễn hoặc trạng thái) - <strong>Head</strong></p>
			
				<ul className="list-square">
			
					<li>I am busy.</li>
					<li className="list-none">Tôi thì bận.</li>
					<li className="margin-bottom-20 list-none">am - Head</li>
			
					<li>She is sleeping.</li>
					<li className="list-none">Cô ấy đang ngủ.</li>
					<li className="list-none">is - Head</li>
			
				</ul>
					
			
			<p className="margin-top-20"><strong>has</strong>/<strong>have</strong>: đã / rồi (hiện tại hoàn thành) - <strong>Head</strong></p>
			
				<ul className="list-square">
			
					<li>She has finished. </li>
					<li className="list-none">Cô ấy đã hoàn thành.</li>
					<li className="margin-bottom-20 list-none">has - Head.</li>
			
					<li>I have eaten.</li>
					<li className="list-none">Tôi đã ăn rồi.</li>
					<li className="list-none">have - Head.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">Head tích hợp là gì?</h4>
					
			<p>Động cơ chính đã tích hợp sẵn trợ động từ và thời gian = <strong>Head tích hợp</strong>.</p>

			<p className="margin-top-20">Ví dụ:</p>
			
				<ul className="list-square">
			
					<li>buys = does + buy (hiện tại đơn)</li>
			
					<li>knows = does + know (hiện tại đơn)</li>
			
					<li>developed = did + develop (quá khứ đơn)</li>
			
				</ul>


			{/* 5.  */}

			<h3 className="margin-y-50 text-center">5. DP (Dependent Phrase) — Phụ Cụm</h3>

			<p><strong>MỌI THỨ SAU HEAD</strong> (không có ngoại lệ) = <strong>DP</strong>.</p>
					
			<p className="margin-top-20">DP không thể đứng một mình. Nó bổ nghĩa cho Head và có thể đóng vai trò:</p>

			<p className="margin-top-20"><strong>Danh cơ</strong>: làm object / complement - <strong>DP</strong></p>
			
				<ul className="list-square">
			
					<li>He buys [a car].</li>
					<li className="list-none">Anh ấy mua [một chiếc xe hơi].</li>
					<li className="list-none">[a car] - DP</li>
			
				</ul>


			<p className="margin-top-20"><strong>Tính cơ</strong>: mô tả trạng thái, tính chất - <strong>DP</strong></p>
			
				<ul className="list-square">
			
					<li>She is [very happy].</li>
					<li className="list-none">Cô ấy [rất vui].</li>
					<li className="list-none">[very happy] - DP</li>
			
				</ul>


			<p className="margin-top-20"><strong>Trạng cơ</strong>: thời gian, cách thức, mức độ - <strong>DP</strong></p>
			
				<ul className="list-square">
			
					<li>He runs [very fast].</li>
					<li className="list-none">Anh ấy chạy [rất nhanh].</li>
					<li className="list-none">[very fast] - DP</li>
			
				</ul>
			

			<p className="margin-top-20"><strong>Cụm giới từ</strong>: nơi chốn, thời gian, lý do - <strong>DP</strong></p>
			
				<ul className="list-square">
			
					<li>He lives [in Vietnam].</li>
					<li className="list-none">Anh ấy sống [ở Việt Nam].</li>
					<li className="list-none">[in Vietnam] - DP</li>
			
				</ul>

 
			<p className="margin-top-20"><strong>Đặc điểm quan trọng nhất</strong>:</p>

			<p className="margin-y-40 text-indent-whole"><strong>DP</strong> có thể chứa <strong>not</strong> bên trong.</p>


			<p className="margin-top-20"><strong>Khẳng định</strong>:</p>
			
				<ul className="list-square">
			
					<li>buy a car = DP</li>
					<li className="list-none">mua một chiếc xe hơi = Phụ cụm = DP</li>
			
				</ul>
			
			<p className="margin-top-20"><strong>Phủ định</strong>:</p>
			
				<ul className="list-square">
			
					<li>not buy a car = DP</li>
					<li className="list-none">Không mua một chiếc xe hơi = Phụ cụm = DP</li>
					<li className="list-none"><strong>Not không đứng riêng</strong> — <strong>nó nằm trong DP</strong>.</li>
			
				</ul>


			{/* 6.  */}

			<h3 className="margin-y-50 text-center">6. DC (Dependent Clause) — Phụ Câu</h3>

			<p className="margin-top-20">DC là mệnh đề có <strong>Subject Verb</strong> bên trong nhưng <strong>không thể đứng một mình</strong>. DC có thể:</p>
			
				<ul className="list-square">
			
					<li><strong>Thay thế DP</strong></li>
					<li className="margin-bottom-20 list-none">Đứng ngay sau Head, làm noun clause</li>
			
					<li><strong>Nằm trong DP</strong></li>
					<li className="list-none">Bên trong một cụm từ</li>
			
				</ul>


			<p className="margin-top-20"><strong>1</strong>. <strong>Noun clause</strong>: Danh câu</p>
			
				<ul className="list-square">
			
					<li>She knows [what he does].</li>
					<li className="list-none">Cô ấy biết [những gì anh ấy làm].</li>
			
				</ul>

			<p className="margin-top-20"><strong>2</strong>. <strong>Adjective clause</strong>: Mệnh đề tính ngữ (relative clause/mệnh đề quan hệ)</p>
			
				<ul className="list-square">
			
					<li>The man [who is standing] is my friend.</li>
					<li className="list-none">Người đàn ông [người đang đứng] là bạn của tôi.</li>
			
				</ul>

			<p className="margin-top-20"><strong>3</strong>. <strong>Adverbial clause</strong>: Trạng câu</p>
			
				<ul className="list-square">
			
					<li>He left [when he arrived].</li>
					<li className="list-none">Anh ấy rời đi [khi anh ấy đến].</li>
			
				</ul>
			
			<p className="margin-top-20">DC vẫn tuân theo quy tắc: <strong>Sau Head là DP</strong>/<strong>DC</strong>, và <strong>DC có thể nằm trong DP</strong>.</p>


			{/* 7.  */}

			<h3 className="margin-y-50 text-center">7. Quy Tắc "Vàng": DP = Mọi Thứ Sau Head</h3>

			<p className="margin-top-20"><strong>1</strong>. <strong>DP</strong></p>
			
				<ul className="list-square">
			
					<li>Mọi thứ sau Head</li>
					<li className="margin-bottom-20">Bao gồm not nếu có</li>
			
				</ul>

			<p className="margin-top-20"><strong>2</strong>. <strong>DC</strong></p>
			
				<ul className="list-square">
			
					<li>Mệnh đề có S V</li>
					<li className="margin-bottom-20">Có thể thay thế DP hoặc nằm trong DP</li>
			
				</ul>

			<p className="margin-top-20"><strong>Phân biệt nhanh</strong>:</p>

			<p className="margin-top-20"><strong>1</strong>. <strong>DP</strong> (<strong>Dependent Phrase</strong>)</p>
			
				<ul className="list-square">
			
					<li>Không có S V hoàn chỉnh bên trong (trừ khi DC nằm trong DP)</li>
					<li className="list-none">She does (not know [what he does]) - S Head DP[DC]</li>
					<li className="list-none">not know [what he does] - DP</li>
					<li className="margin-bottom-20 list-none">[what he does] - DC</li>
			
					<li>Đứng sau Head</li>
					<li className="list-none">a car, buy a car, not buy a car - DP</li>
					<li className="margin-bottom-20 list-none">một chiếc xe hơi, mua một chiếc xe hơi, không mua một chiếc xe hơi</li>
			
				</ul>
		
			
			<p className="margin-top-20"><strong>2</strong>. <strong>DC</strong> (<strong>Dependent Clause</strong>)</p>
			
				<ul className="list-square">

					<li>Có S V hoàn chỉnh bên trong</li>
					<li className="list-none">what he does, who is standing, when he arrived - DC</li>
					<li className="margin-bottom-20 list-none">những gì anh ấy làm, người đang đứng, khi nào anh ấy đến</li>
			
					<li>Đứng sau Head</li>
					<li className="list-none">She knows [what he does]. - S Head DP/DC</li>
					<li className="margin-bottom-20 list-none">Cô ấy biết [những gì anh ấy làm]</li>
			
					<li>Thay thế DP</li>
					<li className="list-none">She knows [what he does]. S Head DC</li>
					<li className="margin-bottom-20 list-none">Cô ấy biết [những gì anh ấy làm]</li>
			
					<li>Nằm trong DP</li>
					<li className="list-none">She does not know [what he does].</li>
					<li className="list-none">Cô ấy không biết [những gì anh ấy làm].</li>
					<li className="list-none">not know [what he does] - DP[DC]</li>
					<li className="list-none">[what he does] - DC</li>
			
				</ul>
			
			<p className="margin-top-20"><strong>Luật kiểm tra nhanh</strong>:</p>
			
				<ul className="list-square">
			
					<li>Nếu phần sau Head có <strong>Subject Verb</strong> → là <strong>DC</strong></li>
					<li>Nếu không → là <strong>DP</strong></li>
			
				</ul>


			{/* 8.  */}

			<h3 className="margin-y-50 text-center">8. Ba Mẫu Câu Cơ Bản</h3>

			<h4 className="margin-y-40">1. Câu khẳng định</h4>

			<p className="margin-y-40 text-indent-whole"><strong>S Head DP</strong></p>

			<p className="margin-top-20 text-indent-whole">Ví dụ:</p>
			
				<ul className="list-square">

					<li>He buys [a car].</li>
					<li className="list-none">He buys a car.</li>
					<li className="margin-bottom-20 list-none">Anh ấy mua một chiếc xe hơi.</li>
			
					<li>She is [very busy].</li>
					<li className="list-none">She is very busy.</li>
					<li className="margin-bottom-20 list-none">Cô ấy rất bận.</li>
			
					<li>She knows [what he does].</li>
					<li className="list-none">She knows what he does.</li>
					<li className="list-none">Cô ấy biết những gì anh ấy làm.</li>
			
				</ul>
					

			<h4 className="margin-y-40">2. Câu phủ định</h4>

			<p className="margin-y-40 text-indent-whole"><strong>S Head DP</strong></p>
			
				<ul className="list-square">
			
					<li>not phần còn lại = DP</li>
			
					<li><strong>not nằm trong DP</strong>, không đứng riêng.</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Ví dụ:</p>
			
				<ul className="list-square">
			
					<li>He doesn't [buy a car].</li>
					<li className="list-none">He doesn't buy a car.</li>
					<li className="margin-bottom-20 list-none">Anh ấy không mua xe hơi.</li>

					<li>He does [not buy a car].</li>
					<li className="list-none">He does not buy a car.</li>
					<li className="margin-bottom-20 list-none">Anh ấy không mua một chiếc xe hơi.</li>
			
					<li>She does [not know what he does].</li>
					<li className="list-none">She does not know what he does.</li>
					<li className="margin-bottom-20 list-none">Cô ấy không biết những gì anh ấy làm.</li>
			
					<li>I am [not very busy].</li>
					<li className="list-none">I am not very busy.</li>
					<li className="list-none">Tôi không bận lắm.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Lưu ý quan trọng</strong>:</p>
			
				<ul className="list-square">
			
					<li><strong>doesn't</strong> = <strong>does</strong> + <strong>not</strong> (gộp vào Head)</li>
					<li className="margin-bottom-20 list-none">buy a car =→ DP</li>
			
					<li><strong>does not</strong> (tách ra)</li>
					<li className="list-none">not buy a car =→ DP</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Nhưng công thức vẫn là: <strong>S Head DP</strong></p>


			<h4 className="margin-y-40">3. Câu nghi vấn</h4>

			<p className="margin-y-40 text-indent-whole"><strong>Head S DP</strong> ?</p>
			
			<p className="text-indent-whole">Đảo <strong>Head</strong> lên trước <strong>S</strong>.</p>

			<p className="margin-top-20 text-indent-whole">Ví dụ:</p>
			
				<ul className="list-square">

					<li>Does he [buy a car]?</li>
					<li className="list-none">Does he buy a car?</li>
					<li className="margin-bottom-20 list-none">Anh ấy có mua một chiếc xe hơi không?</li>

					<li>Is she [very busy]?</li>
					<li className="list-none">Is she very busy?</li>
					<li className="margin-bottom-20 list-none">Cô ấy có bận lắm không?</li>
			
					<li>Does she [know what he does]?</li>
					<li className="list-none">Does she know what he does?</li>
					<li className="list-none">Cô ấy có biết những gì anh ấy làm không?</li>
			
				</ul>


			{/* 9.  */}

			<h3 className="margin-y-50 text-center">9. Sáu Trường Hợp Cụ Thể: Phân Tích Đầy Đủ</h3>

			<h4 className="margin-y-40">Trường hợp 1: Head tích hợp (khẳng định)</h4>
			
				<ul className="list-square">
			
					<li>He buys a car.</li>
					<li className="margin-bottom-20 list-none">Anh ấy mua một chiếc xe hơi.</li>
					<li className="list-none">He - S</li>
					<li className="list-none">buys (Head tích hợp = does + buy, mang thời hiện tại) - Head</li>
					<li className="list-none">a car (noun phrase, không có S V) - DP</li>
			
				</ul>
		

			<p className="margin-top-20 text-indent-whole">Công thức: <strong>S Head DP</strong></p>
			
				<ul className="list-square">
			
					<li>He buys a car.</li>
					<li className="list-none">Anh ấy mua một chiếc xe hơi.</li>
			
				</ul>


			<h4 className="margin-y-40">Trường hợp 2: Phủ định với doesn't</h4>
			
				<ul className="list-square">
			
					<li>He doesn't buy a car.</li>
					<li className="margin-bottom-20 list-none">Anh ấy không mua xe hơi.</li>
					<li className="list-none">He - S</li>
					<li className="list-none">doesn't (does not gộp làm một) - Head</li>
					<li className="list-none">buy a car (động từ nguyên mẫu noun phrase) - DP</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole">Công thức: <strong>S Head DP</strong></p>
			
				<ul className="list-square">
			
					<li>He doesn't buy a car.</li>
					<li className="list-none">Anh ấy không mua xe hơi.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"></p>


			<h4 className="margin-y-40">Trường hợp 3: Phủ định tách rời (does not)</h4>
			
				<ul className="list-square">
			
					<li>He does not buy a car.</li>
					<li className="margin-bottom-20 list-none">Anh ấy không mua một chiếc ô tô.</li>
					<li className="list-none">He - S</li>
					<li className="list-none">does - Head</li>
					<li className="list-none">not buy a car (not động từ nguyên mẫu noun phrase) - DP</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"></p>

			<p className="margin-top-20 text-indent-whole">Công thức: S <strong>Head DP</strong></p>
			
				<ul className="list-square">
			
					<li>He does not buy a car.</li>
					<li className="list-none">Anh ấy không mua một chiếc ô tô.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Lưu ý: <strong>not nằm trong DP</strong>, không đứng riêng.</p>


			<h4 className="margin-y-40">Trường hợp 4: DC làm mệnh đề quan hệ</h4>
			
				<ul className="list-square">
			
					<li>[The man who is talking to the teacher] is my friend.</li>
					<li className="margin-bottom-20 list-none">[Người đàn ông người mà đang nói chuyện với giáo viên] là bạn của tôi.</li>
					<li className="list-none">The man - S</li>
					<li className="list-none">who is talking to the teacher (mệnh đề quan hệ, có S V: who is) - DC</li>
					<li className="list-none">is - Head</li>
					<li className="list-none">my friend - DP</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Công thức: [<strong>S DC</strong>] <strong>Head DP</strong></p>
			
				<ul className="list-square">
			
					<li>[The man who is standing over there] is my friend.</li>
					<li className="list-none">[Người đàn ông người mà đang đứng ở đằng kia] là bạn của tôi.</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Khi rút gọn</strong>:</p>
			
				<ul className="list-square">
			
					<li>[The man standing over there] is my friend.</li>
					<li className="list-none">[Người đàn ông đang đứng ở đằng kia] là bạn của tôi.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">→ DC rút gọn thành <strong>participial phrase</strong> → <strong>trở thành DP</strong>.</p>
			

			<h4 className="margin-y-40">Trường hợp 5: DC là noun clause (sau Head)</h4>
					
			<ul className="list-square">
			
					<li>She knows what he does.</li>
					<li className="margin-bottom-20 list-none">Cô ấy biết những gì anh ấy làm.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">knows - Head tích hợp = does know, mang thời hiện tại</li>
					<li className="list-none">what he does - DP (DC thay thế DP, có he does)</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Vấn đề</strong>:</p>
			
				<ul className="list-square">
			
					<li>Theo quy tắc "sau Head là DP" → [what he does] <strong>đương nhiên là DP</strong>.</li>

					<li>Nhưng nhìn vào bên trong: có <strong>he does</strong> → về hình thức là <strong>DC</strong>.</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Giải pháp</strong>:</p>
			
				<ul className="list-square">
			
					<li>[<strong>what he does</strong>] <strong>là DC</strong> (<strong>về hình thức</strong>)</li>

					<li><strong>Nhưng đóng vai trò như DP</strong> (<strong>về chức năng</strong>)</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Đây là <strong>noun clause</strong> — mệnh đề danh từ, thay thế cho một noun phrase.</p>


			<p className="margin-top-20 text-indent-whole"><strong>Cấu trúc phân tích</strong>:</p>
			
				<ul className="list-square">
			
					<li>not know [what he does] - DP</li>
					<li className="margin-bottom-20 list-none">không biết [những gì anh ấy làm]</li>
					<li className="list-none">not know - động từ nguyên mẫu</li>
					<li className="list-none">[what he does] - DC (noun clause)</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Công thức: <strong>S Head DP</strong> (<strong>DC thay thế</strong>)</p>
			
				<ul className="list-square">
			
					<li>She knows [what he does].</li>
					<li className="list-none">Cô ấy biết [những gì anh ấy làm].</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"></p>


			<h4 className="margin-y-40">Trường hợp 6: Phủ định DC nằm trong DP</h4>
			
				<ul className="list-square">
			
					<li>She does not know what he does.</li>
					<li className="margin-bottom-20 list-none">Cô ấy không biết những gì anh ấy làm.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">does - Head</li>
					<li className="list-none">not know what he does - DP (chứa DC: what he does)</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Cấu trúc phân tích</strong>:</p>
			
				<ul className="list-square">
			
					<li>not know [what he does] - DP</li>
					<li className="margin-bottom-20 list-none">không biết [những gì anh ấy làm]</li>
					<li className="list-none">not know - động từ nguyên mẫu</li>
					<li className="list-none">[what he does] - DC (noun clause)</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole">Công thức: <strong>S Head DP</strong></p>
			
				<ul className="list-square">
			
					<li>She does [not know what he does].</li>
					<li className="list-none">Cô ấy [không biết điều mà anh ấy làm].</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Trong đó: DP <strong>chứa</strong> DC bên trong.</p>


			{/* 10.  */}

			<h3 className="margin-y-50 text-center">10. Ba Head Phổ Biến Nhất: am / will / could</h3>

			<h4 className="margin-y-40">Head = am — "Đang" (hiện tại tiếp diễn / trạng thái)</h4>
					
			<p className="text-indent-whole"><strong>Quy tắc</strong>: Sau <strong>am</strong></p>
			
				<ul className="list-square">
			
					<li>→ <strong>V</strong>-<strong>ing object</strong></li>
					<li>→ <strong>cụm tính từ</strong></li>
					<li>→ <strong>cụm giới từ</strong></li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Khẳng định</strong></p>
			
				<ul className="list-square">
			
					<li>I am developing an app.</li>
					<li className="list-none">Tôi đang phát triển một ứng dụng.</li>
					<li className="list-none">am - Head</li>
					<li className="margin-bottom-20 list-none">developing an app (V-ing object) - DP</li>
			
					<li>I am very busy.</li>
					<li className="list-none">Tôi đang rất bận.</li>
					<li className="list-none">am - Head</li>
					<li className="margin-bottom-20 list-none">very busy (cụm tính từ) - DP</li>
			
					<li>I am in Vietnam.</li>
					<li className="list-none">Tôi đang ở Việt Nam.</li>
					<li className="list-none">am - Head</li>
					<li className="list-none">in Vietnam (cụm giới từ) - DP</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Phủ định</strong></p>
			
				<ul className="list-square">
			
					<li>I am not developing an app.</li>
					<li className="list-none">Tôi không đang phát triển ứng dụng nào cả.</li>
					<li className="list-none">am - Head</li>
					<li className="margin-bottom-20 list-none">not developing an app (not V-ing object) - DP</li>
			
					<li>I am not very busy.</li>
					<li className="list-none">Tôi không bận lắm.</li>
					<li className="list-none">am - Head</li>
					<li className="margin-bottom-20 list-none">not very busy (not cụm tính từ) - DP</li>
			
					<li>I am not in Vietnam.</li>
					<li className="list-none">Tôi không đang ở Việt Nam.</li>
					<li className="list-none">am - Head</li>
					<li className="list-none">not in Vietnam (not cụm giới từ) - DP</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Nghi vấn</strong></p>
			
				<ul className="list-square">
			
					<li>Am I developing an app?</li>
					<li className="list-none">Tôi có đang phát triển một ứng dụng không?</li>
					<li className="list-none">Am - Head</li>
					<li className="margin-bottom-20 list-none">developing an app (V-ing object) - DP</li>
			
					<li>Am I very busy?</li>
					<li className="list-none">Tôi có đang rất bận không?</li>
					<li className="list-none">Am - Head</li>
					<li className="margin-bottom-20 list-none">very busy (cụm tính từ) - DP</li>
			
					<li>Am I in Vietnam?</li>
					<li className="list-none">Tôi có đang ở Việt Nam không?</li>
					<li className="list-none">Am - Head</li>
					<li className="list-none">in Vietnam (cụm giới từ) - DP</li>
			
				</ul>
			

			<h4 className="margin-y-40">Head = will — "Sẽ" (tương lai)</h4>
					
			<p className="text-indent-whole"><strong>Quy tắc</strong>: Sau <strong>will</strong></p>
			
				<ul className="list-square">
			
					<li>→ <strong>động từ nguyên mẫu object</strong></li>
					<li>→ <strong>be cụm tính từ</strong></li>
					<li>→ <strong>be cụm giới từ</strong></li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Khẳng định</strong></p>
			
				<ul className="list-square">
			
					<li>I will develop an app.</li>
					<li className="list-none">Tôi sẽ phát triển một ứng dụng.</li>
					<li className="list-none">will - Head</li>
					<li className="margin-bottom-20 list-none">develop an app (V nguyên mẫu object) - DP</li>
			
					<li>I will be very busy.</li>
					<li className="list-none">Tôi sẽ rất bận.</li>
					<li className="list-none">will - Head</li>
					<li className="margin-bottom-20 list-none">be very busy (be cụm tính từ) - DP</li>
			
					<li>I will be in Vietnam.</li>
					<li className="list-none">Tôi sẽ ở Việt Nam.</li>
					<li className="list-none">will - Head</li>
					<li className="list-none">be in Vietnam (be cụm giới từ)- DP</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Phủ định</strong></p>
			
				<ul className="list-square">
			
					<li>I will not develop an app.</li>
					<li className="list-none">Tôi sẽ không phát triển ứng dụng nào cả.</li>
					<li className="list-none">will - Head</li>
					<li className="margin-bottom-20 list-none">not develop an app (not V nguyên mẫu object) - DP</li>
			
					<li>I will not be very busy.</li>
					<li className="list-none">Tôi sẽ không bận lắm đâu.</li>
					<li className="list-none">will - Head</li>
					<li className="margin-bottom-20 list-none">not be very busy (not be cụm tính từ) - DP</li>
			
					<li>I will not be in Vietnam.</li>
					<li className="list-none">Tôi sẽ không ở Việt Nam.</li>
					<li className="list-none">will - Head</li>
					<li className="list-none">not be in Vietnam (not be cụm giới từ)- DP</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Nghi vấn</strong></p>
			
				<ul className="list-square">
			
					<li>Will I develop an app?</li>
					<li className="list-none">Tôi sẽ phát triển một ứng dụng chứ?</li>
					<li className="list-none">Will - Head</li>
					<li className="margin-bottom-20 list-none">develop an app (V nguyên mẫu object) - DP</li>
			
					<li>Will I be very busy?</li>
					<li className="list-none">Tôi sẽ rất bận phải không?</li>
					<li className="list-none">Will - Head</li>
					<li className="margin-bottom-20 list-none">be very busy (be cụm tính từ)- DP</li>
			
					<li>Will I be in Vietnam?</li>
					<li className="list-none">Tôi sẽ ở Việt Nam chứ?</li>
					<li className="list-none">Will - Head</li>
					<li className="list-none">be in Vietnam (be cụm giới từ) - DP</li>
			
				</ul>
			

			<h4 className="margin-y-40">Head = could — "Có thể" (khả năng / đề xuất)</h4>
					
			<p className="text-indent-whole"><strong>Quy tắc</strong>: Sau <strong>could</strong> (giống will).</p>
			
				<ul className="list-square">
			
					<li>→ <strong>động từ nguyên mẫu object</strong></li>
					<li>→ <strong>be cụm tính từ</strong></li>
					<li>→ <strong>be cụm giới từ</strong></li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Khẳng định</strong></p>
			
				<ul className="list-square">
			
					<li>I could develop an app.</li>
					<li className="list-none">Tôi có thể phát triển một ứng dụng.</li>
					<li className="list-none">could - Head</li>
					<li className="margin-bottom-20 list-none">develop an app (V nguyên mẫu object) - DP</li>
			
					<li>I could be very busy.</li>
					<li className="list-none">Tôi có thể rất bận.</li>
					<li className="list-none">could - Head</li>
					<li className="margin-bottom-20 list-none">be very busy (be cụm tính từ) - DP</li>
			
					<li>	I could be in Vietnam.</li>
					<li className="list-none">Tôi có thể ở Việt Nam.</li>
					<li className="list-none">could - Head</li>
					<li className="list-none">be in Vietnam (be cụm giới từ) - DP</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Phủ định</strong></p>
			
				<ul className="list-square">
			
					<li>I could not develop an app.</li>
					<li className="list-none">Tôi không thể nào phát triển được một ứng dụng.</li>
					<li className="list-none">coud - Head</li>
					<li className="margin-bottom-20 list-none">not develop an app (V nguyên mẫu object)	- DP</li>
			
					<li>I could not be very busy.</li>
					<li className="list-none">Tôi không thể nào rất bận được.</li>
					<li className="list-none">coud - Head</li>
					<li className="margin-bottom-20 list-none">not be very busy (be cụm tính từ) - DP</li>
			
					<li>I could not be in Vietnam.</li>
					<li className="list-none">Tôi không thể nào ở Việt Nam được.</li>
					<li className="list-none">coud - Head</li>
					<li className="list-none">not be in Vietnam (be cụm giới từ) - DP</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole"><strong>Nghi vấn</strong></p>
			
				<ul className="list-square">
			
					<li>Could I develop an app?</li>
					<li className="list-none">Tôi có thể phát triển một ứng dụng không?</li>
					<li className="list-none">Could - Head</li>
					<li className="margin-bottom-20 list-none">develop an app (V nguyên mẫu object) - DP</li>
			
					<li>Could I be very busy?</li>
					<li className="list-none">Tôi có thể đang rất bận không?</li>
					<li className="list-none">Could - Head</li>
					<li className="margin-bottom-20 list-none">be very busy (be cụm tính từ) - DP </li>
			
					<li>Could I be in Vietnam</li>
					<li className="list-none">Tôi có thể đang ở Việt Nam không?</li>
					<li className="list-none">Could - Head</li>
					<li className="list-none">be in Vietnam (be cụm giới từ) - DP</li>
			
				</ul>


			{/* 11.  */}

			<h3 className="margin-y-50 text-center">11. Quy Tắc Lắp Ghép "Vàng"</h3>

			<h4 className="margin-y-40">Bước 1: Chọn S</h4>
					
			<p className="text-indent-whole">Ai/thứ gì?</p>


			<h4 className="margin-y-40">Bước 2: Chọn mục đích câu</h4>
					
			<p className="text-indent-whole">Hành động? Trạng thái? Thời gian? Khả năng?</p>


			<h4 className="margin-y-40">Bước 3: Chọn Head</h4>
			
				<ul className="list-square">
			
					<li>am / will / could / do / did / is / are...</li>
			
					<li>Hoặc động từ chính (Head tích hợp): buys, knows, develops...</li>
			
				</ul>


			<h4 className="margin-y-40">Bước 4: Ghép DP phù hợp</h4>
					
				<ul className="list-square">
			
					<li><strong>Khẳng định</strong>:</li>
					<li className="margin-bottom-20 list-none">buy a car - DP</li>
			
					<li><strong>Phủ định</strong>:</li>
					<li className="margin-bottom-20 list-none">not buy a car - DP</li>
			
					<li><strong>Có DC</strong>:</li>
					<li className="list-none">know [what he does] - DP[DC]</li>
					<li className="list-none">not know [what he does] - DP[DC]</li>
			
				</ul>
		
		
			<h4 className="margin-y-40">Luật vàng:</h4>
			
				<ul className="list-square">
			
					<li><strong>am</strong> → [<strong>V-ing</strong>: developing an app = <strong>DP</strong>]</li>
			
					<li><strong>will</strong>/<strong>could</strong> → [<strong>V nguyên mẫu</strong>: develop an app = <strong>DP</strong>]</li>
			
					<li><strong>Mọi thứ sau Head</strong> (bao gồm not nếu có) = <strong>DP</strong></li>

					<li><strong>DC có S V</strong>, có thể thay thế DP hoặc nằm trong DP</li>
			
				</ul>
			

			{/* 12.  */}

			<h3 className="margin-y-50 text-center">12. Tại Sao Mô Hình Lego Assembly Hiệu Quả?</h3>

			<h4 className="margin-y-40">1. Nhất quán tuyệt đối</h4>

			<p className="text-indent-whole">Công thức <strong>luôn</strong> là:</p>

			<p className="margin-y-40 text-indent-whole"><strong>S Head DP</strong></p>
			
			<p className="text-indent-whole">Không có ngoại lệ. Không có "S Head not DP".</p>

			<h4 className="margin-y-40">2. Giảm áp lực "phải nhớ thì"</h4>

			<p className="text-indent-whole">Bạn không cần học 12 thì như một danh sách rời rạc. Bạn chỉ cần biết:</p>
			
				<ul className="list-square">
			
					<li><strong>Head nào</strong> biểu thị thời/mood nào</li>
			
					<li><strong>DP nào</strong> ghép được sau Head đó</li>
			
				</ul>
		

			<h4 className="margin-y-40">3. Tăng khả năng tạo câu mới nhanh</h4>

			<p className="text-indent-whole">Khi đã quen với các khối cơ bản, bạn có thể "lắp" câu mới bằng cách thay DP:</p>

			<p className="text-indent-whole">Với <strong>buys</strong> (<strong>khẳng định</strong>) = <strong>Head</strong></p>
			
				<ul className="list-square">
			
					<li>He buys [a car].</li>
					<li className="margin-bottom-20 list-none">Anh ấy mua [một chiếc ô tô].</li>
			
					<li>He buys [a house].</li>
					<li className="margin-bottom-20 list-none">Anh ấy mua [một ngôi nhà].</li>
			
					<li>He buys [what he needs].</li>
					<li className="list-none">Anh ấy mua [những gì anh ấy cần].</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Với <strong>does</strong> (<strong>phủ định</strong>) = <strong>Head</strong></p>
			
				<ul className="list-square">
			
					<li>He does [not buy a car].</li>
					<li className="margin-bottom-20 list-none">Anh ấy [không mua một chiếc ô tô].</li>
			
					<li>He does [not buy a house].</li>
					<li className="margin-bottom-20 list-none">Anh ấy [không mua một ngôi nhà].</li>
			
					<li>He does [not buy what he needs].</li>
					<li className="list-none">Anh ấy [không mua những gì anh ấy cần].</li>
			
				</ul>

			<p className="margin-top-20  text-indent-whole">Với <strong>doesn</strong>'<strong>t</strong> (<strong>phủ định gộp</strong>)  = <strong>Head</strong></p>
			
				<ul className="list-square">
			
					<li>He doesn't [buy a car].</li>
					<li className="margin-bottom-20 list-none">Anh ấy không [mua một chiếc ô tô].</li>
			
					<li>He doesn't [buy a house].</li>
					<li className="margin-bottom-20 list-none">Anh ấy không [mua một ngôi nhà].</li>
			
					<li>He doesn't [buy what he needs].</li>
					<li className="list-none">Anh ấy không [mua những thứ anh ấy cần].</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Cùng Head <strong>buys</strong> / <strong>does</strong> / <strong>doesn</strong>'<strong>t</strong>, thay DP → thay nghĩa hoàn toàn.</p>

			
			<h4 className="margin-y-40">4. Dễ kiểm tra lỗi</h4>
					
			<p className="text-indent-whole">Nếu câu sai, kiểm tra:</p>
			
				<ul className="list-square">
			
					<li>Head và DP có tương thích không?</li>
					<li className="margin-bottom-20 list-none">Cí dụ: "I am develop an app" sai vì <strong>am</strong> cần <strong>V</strong>-<strong>ing</strong></li>
			
					<li>DP hay DC?</li>
					<li className="list-none">Có S V hay không?</li>
			
				</ul>
			

			{/* 13.  */}

			<h3 className="margin-y-50 text-center">13. Sơ Đồ Phân Cấp Hoàn Chỉnh</h3>

			<p>Câu:</p>
			
				<ol>
			
					<li>Subject - <strong>S</strong></li>
			
					<li>Head tích hợp hoặc trợ động từ - <strong>Head</strong></li>
			
					<li>Mọi thứ sau Head - <strong>DP</strong></li>
			
				</ol>

			<p className="margin-top-20">1. <strong>DP không có not</strong> (<strong>khẳng định</strong>)</p>
			
				<ul className="list-square">
			
					<li>a car, the book (Noun phrase) - DP</li>

					<li>very busy, happy (adjective phrase) - DP</li>
			
					<li>very quickly, yesterday (adverb phrase) - DP</li>

					<li>in Vietnam, on the table (prepositional phrase) - DP</li>
			
				</ul>


			<p className="margin-top-20">2. <strong>DP có not</strong> (<strong>phủ định</strong>)</p>
			
				<ul className="list-square">
			
					<li>not a car (not + noun phrase) - DP</li>

					<li>not buy a car (not + verb phrase) - DP</li>
			
					<li>not very busy (not + adjective phrase) - DP</li>

					<li>not know what he does (not + verb phrase chứa DC) - DP[DC]</li>
			
					<li>not what he does (not DC)  - DP[DC]</li>
			
				</ul>
			

			{/* 14.  */}

			<h3 className="margin-y-50 text-center">14. Bài Tập Thực Hành</h3>

			<h4 className="margin-y-40">Bài 1: Phân tích câu</h4>
					
			<p className="text-indent-whole">Phân tích các câu sau thành S, Head, DP:</p>
			
				<ol>
			
					<li value="1">He doesn't know the answer.</li>
					<li className="margin-bottom-20 list-none">Anh ấy không biết câu trả lời.</li>
					<li className="list-none">He - S</li>
					<li className="list-none">doesn't - Head</li>
					<li className="margin-bottom-20 list-none">know the answer - DP</li>
			
					<li value="2">She will buy a car.</li>
					<li className="margin-bottom-20 list-none">Cô ấy sẽ mua một chiếc ô tô.</li>
					<li className="list-none">She - S</li>
					<li className="list-none">will - Head</li>
					<li className="margin-bottom-20 list-none">buy a car - DP</li>

					<li value="3">The woman who is talking is my teacher.</li>
					<li className="margin-bottom-20 list-none">Người phụ nữ đang nói chuyện là giáo viên của tôi.</li>
					<li className="list-none">The woman who is talking (chứa DC: who is talking) - S</li>
					<li className="list-none">is - Head</li>
					<li className="margin-bottom-20 list-none">my teacher - DP</li>

					<li value="4">I know what you want.</li>
					<li className="margin-bottom-20 list-none">Tôi biết bạn muốn gì.</li>
					<li className="list-none">I - S</li>
					<li className="list-none">knows (tích hợp do know) - Head</li>
					<li className="margin-bottom-20 list-none">what you want (DC thay thế DP) - DP</li>
			
					<li value="5">They do not understand what happened.</li>
					<li className="margin-bottom-20 list-none">Họ không hiểu chuyện gì đã xảy ra.</li>
					<li className="list-none">They - S</li>
					<li className="list-none">do - Head</li>
					<li className="list-none">not understand what happened (chứa DC: what happened) - DP</li>
			
				</ol>


			<h4 className="margin-y-40">Bài 2: Tạo câu</h4>

			<p className="text-indent-whole">Tạo câu khẳng định, phủ định, nghi vấn với:</p>
			
				<ul className="list-square">
			
					<li><strong>does</strong> = Head</li>
					<li><strong>the answer</strong> = DP</li>
					<li><strong>know the answer</strong> = DP</li>
					<li><strong>not know the answer</strong> = DP</li>
			
				</ul>

			<p className="margin-top-20"><strong>Khẳng định</strong>:</p>
			
				<ul className="list-square">
			
					<li>He knows [the answer].</li>
					<li className="margin-bottom-20 list-none">Anh ấy biết câu trả lời.</li>
					<li className="list-none">He - S</li>
					<li className="list-none">knows - Head tích hợp (does know)</li>
					<li className="list-none">the answer - DP</li>
			
				</ul>

			<p className="margin-top-20"><strong>Phủ định</strong>:</p>
			
				<ul className="list-square">
			
					<li>He does [not know the answer].</li>
					<li className="margin-bottom-20 list-none">Anh ấy không biết câu trả lời.</li>
					<li className="list-none">He - S</li>
					<li className="list-none">does - Head</li>
					<li className="list-none">not know the answer - DP</li>
			
				</ul>

			<p className="margin-top-20"><strong>Nghi vấn</strong>:</p>
			
				<ul className="list-square">
			
					<li>Does he [know the answer]?</li>
					<li className="margin-bottom-20 list-none">Anh ấy có biết câu trả lời không?</li>
					<li className="list-none">Does - Head</li>
					<li className="list-none">he - S</li>
					<li className="list-none">know the answer - DP</li>
			
				</ul>


			<h4 className="margin-y-40">Bài 3: Phân biệt DP và DC</h4>

			<p className="margin-top-20 text-indent-whole">Xác định phần sau Head là <strong>DP</strong> hay <strong>DC</strong>:</p>
			
				<ol>
			
					<li value="1">He knows [the answer].</li>
					<li className="list-none">Anh ấy biết [câu trả lời].</li>
					<li className="margin-bottom-20 list-none">[the answer] - Noun phrase, không có S V - <strong>DP</strong></li>
			
					<li value="2">He knows [what he wants].</li>
					<li className="list-none">Anh ấy biết [điều anh ấy muốn].</li>
					<li className="margin-bottom-20 list-none">[what he wants] - DC thay thế DP, có he wants - <strong>DP</strong>/<strong>DC</strong></li>

					<li value="3">She is [very busy].</li>
					<li className="list-none">Cô ấy [rất bận].</li>
					<li className="margin-bottom-20 list-none">[very busy] - Adjective phrase, không có S V - <strong>DP</strong></li>
			
					<li value="4">She is [what you call busy].</li>
					<li className="list-none">Cô ấy là [thứ mà bạn gọi là bận rộn].</li>
					<li className="list-none">[what you call busy] DC thay thế DP, có you call - <strong>DP</strong>/<strong>DC</strong></li>
			
				</ol>


			{/* Kết Luận  */}

			<h3 className="margin-y-50 text-center">Kết Luận: Học Ngữ Pháp Như Xếp Lego</h3>

			<p>Mô hình <strong>Lego Assembly</strong> không phải là một phương pháp mới lạ — nó là <strong>cách nhìn lại ngữ pháp</strong> theo nguyên tắc <strong>gọn</strong>, <strong>rõ</strong>, <strong>có hệ thống</strong>:</p>
			
				<ul className="list-square">
			
					<li>Công thức cốt lõi (luôn đúng) - <strong>S Head DP</strong></li>
					<li><strong>Mọi thứ sau Head</strong> (bao gồm not nếu có) = <strong>DP</strong></li>
					<li><strong>not nằm trong DP</strong>, không đứng riêng</li>
					<li><strong>DC</strong> có S V, <strong>có thể thay thế DP</strong> hoặc <strong>nằm trong DP</strong></li>
					<li>Động cơ chính mang thời (buys = does + buy) = <strong>Head tích hợp</strong></li>
					<li>am (<strong>Head</strong>) → V-ing - <strong>DP</strong></li>
					<li>will/could (<strong>Head</strong>) → V nguyên mẫu - <strong>DP</strong></li>
			
				</ul>
			
			<p className="margin-top-20">Khi đã quen, bạn sẽ "lắp câu" tự nhiên như xếp Lego. Không còn căng thẳng với "thì". Không còn mơ hồ với cấu trúc. Chỉ còn <strong>cách lắp ghép</strong>.</p>

			<p><strong>Bạn đã sẵn sàng thử nghiệm mô hình Lego Assembly chưa</strong>?</p>

			<p className="margin-top-20">Hãy bắt đầu với 3 Head: <strong>am</strong> / <strong>will</strong> / <strong>could</strong>. Chọn một DP. Lắp 3 mẫu câu: khẳng định, phủ định, nghi vấn. Lặp lại với DP khác.</p>
					
			<p>Đó là cách học ngữ pháp <strong>đơn giản</strong>, <strong>trực quan</strong>, và <strong>hiệu quả</strong> nhất mà bạn từng trải nghiệm.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 29 and 30, 2026 · by PPLX and 🐝Mr. Bee Osn ·</span>
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