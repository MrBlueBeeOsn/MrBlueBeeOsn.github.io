import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function LegoAssembly8(): React.JSX.Element {

	const postId = "LegoAssembly8";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">[Lego Assembly]
												
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

			<h4 className="margin-bottom-30 text-center">Ngữ pháp Lego: Ba chỗ đứng, bốn cách lấp đầy</h4>

			<p>Ngữ pháp tiếng Anh thường làm ta rối vì quá nhiều tên gọi. Danh nhận, bổ ngữ, câu con quan hệ, câu con danh ngữ. Mỗi tên một định nghĩa, cuối cùng ta nhớ tên mà quên cách dùng.</p>
			
			<p>Thử dẹp hết tên. Chỉ giữ lại ba chỗ đứng trong câu. Mọi thứ khác chỉ là cách bạn lấp đầy ba chỗ đó.</p>

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Khung xương: S – Head – DP</h3>

			<p>Một câu tiếng Anh chuẩn luôn có ba vị trí, theo thứ tự:</p>

			<h4 className="margin-y-40">1. S – danh chủ</h4>
				
			<p className="text-indent-whole">Ai làm gì.</p>


			<h4 className="margin-y-40">2. Head – đầu máy mang thì</h4>
				
			<p className="text-indent-whole">Động cơ đã chia. Head có hai dạng:</p>
		
			<ul className="list-square">
		
				<li><strong>Tích hợp</strong>: thì dính luôn vào động cơ.</li>
				<li className="list-none">buys = does + buy</li>
				<li className="list-none">knows = does + know</li>
				<li className="margin-bottom-20 list-none">doesn't = does + not.</li>
		
				<li><strong>Tách rời</strong>: thời động cơ đứng riêng.</li>
				<li className="list-none">does, is, will.</li>
		
			</ul>
		

			<h4 className="margin-y-40">3. DP – phần sau Head</h4>
				
			<p className="text-indent-whole">Luật vàng:</p>
			
				<ul className="list-square">
					<li className="list-none"><strong>DP là tất cả những gì đứng sau Head</strong>.</li>
				</ul>
			
			<p className="margin-top-20 text-indent-whole">DP không quan tâm bạn nhét gì vào. Nó chỉ là một cái hộp.</p>

			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Ví dụ nền tảng</h3>
			
				<ul className="list-square">
			
					<li>He buys a car.</li>
					<li className="list-none">Anh ấy không mua một chiếc ô tô.</li>
					<li className="list-none">buys - Head</li>
					<li className="margin-bottom-20 list-none">[a car] - DP</li>
			
					<li>He is tired.</li>
					<li className="list-none">Anh ấy đang mệt.</li>
					<li className="list-none">is - Head</li>
					<li className="margin-bottom-20 list-none">tired - DP - vì tired đứng sau Head, nó là DP, dù truyền thống gọi là tính cơ vị ngữ.[tired]</li>
			
					<li>He does not buy a car.</li>
					<li className="list-none">Anh ấy không mua một chiếc ô tô.</li>
					<li className="list-none">does - Head</li>
					<li className="list-none">[not buy a car] - DP</li>
			
				</ul>
			
			<p className="margin-top-20">Ba câu cùng một bộ lõi, chỉ khác chỗ để công tắc not.</p>
			

			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. Khi hộp DP chứa một câu</h3>

			<p>DC không phải chỗ đứng thứ tư. DC là chất liệu bạn dùng để lấp đầy hộp DP.</p>
			
				<ul className="list-square">
			
					<li>She knows what he does.</li>
					<li className="list-none">Cô ấy biết anh ấy làm gì.</li>
					<li className="list-none">knows - Head</li>
					<li className="list-none">[what he does] - DP</li>
			
				</ul>
			
			<p className="margin-top-20">Nhìn vị trí, đây là DP. Mở hộp ra, bên trong có đủ S và V, vậy nó là DC. Ta ghi gọn là DP/DC.</p>


			<p className="margin-top-20">Ví dụ khác:</p>
			
				<ul className="list-square">
			
					<li>I believe [that she left].</li>
					<li className="margin-bottom-20 list-none">Tôi tin [rằng cô ấy đã rời đi].</li>
			
					<li>He asked [where you went].</li>
					<li className="margin-bottom-20 list-none">Anh ấy đã hỏi [bạn đã đi đâu].</li>
			
				</ul>
			
				<ul className="list-square">
			
					<li>She does not know what he does.</li>
					<li className="list-none">Cô ấy không biết anh ấy làm gì.</li>
					<li className="list-none">does - Head</li>
					<li className="list-none">[not know what he does] - DP - hộp DP chứa not ở ngoài và DC ở trong.</li>
			
				</ul>
			
			<p className="margin-top-20"></p>

			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. Khi hộp S chứa một câu</h3>
			
				<ul className="list-square">
			
					<li>The man who is standing over there is my friend.</li>
					<li className="margin-bottom-20 list-none">Người đàn ông, người mà đang đứng đằng kia, là bạn của tôi.</li>
					<li className="list-none">[The man who is standing over there] - S</li>
					<li className="list-none">is - Head</li>
					<li className="list-none">[my friend] - DP</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">"who is standing over there" là DC, nhưng nó nằm trong hộp S, làm nhiệm vụ bổ nghĩa cho "man".</p>
					
			<p className="margin-top-20">Rút gọn:</p>
			
				<ul className="list-square">
			
					<li>The man standing over there is my friend.</li>
					<li className="list-none">Người đàn ông đang đứng đằng kia là bạn của tôi.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">"standing over there" giờ trông như DP thường, nhưng việc làm vẫn là của DC. Gọi đây là DP tính cơ cho dễ nhớ.</p>

			{/* 5.  */}

			<h3 className="margin-y-50 text-center">5. Câu nghi vấn: Head nhảy lên đầu</h3>
					
			<p>Khung ba chỗ không đổi, chỉ đổi thứ tự.</p>
			
				<ul className="list-square">
			
					<li>Is he tired?</li>
					<li className="margin-bottom-20 list-none">Anh ấy có mệt không?</li>
					<li className="list-none">Is - Head - nhảy ra trước S</li>
					<li className="list-none">he - S</li>
					<li className="margin-bottom-20 list-none">[tired] - DP - vẫn là phần sau S.</li>

					<li>Does he buy a car?</li>
					<li className="margin-bottom-20 list-none">Anh ấy có mua một chiếc ô tô không?</li>
					<li className="list-none">Does - Head</li>
					<li className="list-none">he - S</li>
					<li className="margin-bottom-20 list-none">[buy a car] - DP</li>
			
					<li>Does she know what he does?</li>
					<li className="margin-bottom-20 list-none">Cô ấy có biết những gì anh ấy làm không?</li>
					<li className="list-none">Does - Head</li>
					<li className="list-none">she - S</li>
					<li className="margin-bottom-20 list-none">[know what he does] - DP - bên trong DP vẫn là DP/DC như câu khẳng định.</li>
			
					<li>What does she know?</li>
					<li className="margin-bottom-20 list-none">Cô ấy biết cái gì?</li>
					<li className="list-none">does - Head</li>
					<li className="list-none">she - S</li>
					<li className="list-none">[know what] - DP gốc — what được đưa ra trước để hỏi.</li>
			
				</ul>
			
			<p className="margin-top-20">Dù là khẳng định hay nghi vấn, bạn vẫn làm đúng ba bước: tìm Head, xác định S, khoanh DP.</p>

			{/* 6.  */}

			<h3 className="margin-y-50 text-center">6. Bốn cách lấp đầy bạn sẽ gặp</h3>

			<p className="margin-top-20">1. <strong>DP thường</strong>:</p>
			
				<ul className="list-square">
			
					<li>[a car]</li>
					<li className="margin-bottom-20 list-none">[một chiếc ô tô]</li>
			
					<li>[my friend]</li>
					<li className="list-none">[bạn của tôi]</li>
			
				</ul>

			<p className="margin-top-20">2. <strong>DP phủ định</strong>:</p>
			
				<ul className="list-square">
			
					<li>[not buy a car]</li>
					<li className="list-none">[không mua một chiếc ô tô]</li>
			
				</ul>

			<p className="margin-top-20">3. <strong>DP</strong>/<strong>DC</strong>:</p>
			
				<ul className="list-square">
			
					<li>[what he does]</li>
					<li className="margin-bottom-20 list-none">[những gì anh ấy làm]</li>
			
					<li>[that she left]</li>
					<li className="list-none">[việc cô ấy đã rời đi]</li>
			
				</ul>

			<p className="margin-top-20">4. <strong>S chứa DC</strong> hoặc <strong>DP tính cơ</strong>:</p>
			
				<ul className="list-square">
			
					<li>[The man who is standing...]</li>
					<li className="margin-bottom-20 list-none">[Người đàn ông, người mà đang đứng...]</li>
			
					<li>[The man standing...]</li>
					<li className="margin-bottom-20 list-none">[Người đàn ông đang đứng...]</li>
			
					<li>[tired]</li>
					<li className="list-none">[Mệt mỏi]</li>
			
				</ul>

			{/* 7.  */}

			<h3 className="margin-y-50 text-center">7. Cách dùng trong 5 phút</h3>
			
				<ul className="list-square">
			
					<li>Bước 1:</li>
					<li className="margin-bottom-20 list-none"><strong>Tìm Head trước</strong>, vì Head mang thì nên dễ thấy nhất.</li>
			
					<li>Bước 2:</li>
					<li className="list-none"><strong>Khoanh tất cả sau Head</strong>, đó là một hộp <strong>DP</strong> duy nhất.</li>
					<li className="margin-bottom-20 list-none">Với câu hỏi, <strong>Head ở đầu</strong>, <strong>DP nằm sau S</strong>.</li>
			
					<li>Bước 3:</li>
					<li className="list-none">Mở hộp ra xem bên trong là gì. <strong>Nếu thấy S</strong> + <strong>V thì ghi thêm</strong> /<strong>DC.</strong></li>
			
				</ul>
			
			<p className="margin-top-20">Bạn không cần hỏi đây là danh nhận hay bổ ngữ. Chỉ cần trả lời hai câu hỏi: nó đứng ở đâu, và nó làm bằng gì.</p>

			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">Lời Kết</h3>

			<p>Giữ đúng ba chỗ đứng, cho phép hộp chứa bất cứ thứ gì, bạn sẽ thấy câu phức không còn đáng sợ.</p>

			<p>He is tired cũng chỉ là <strong>S Head DP</strong> như He buys a car.</p>

			<p>Câu hỏi cũng chỉ là <strong>Head đổi chỗ với S</strong>.</p>

			<p>Đây không phải chân lý ngữ pháp, chỉ là một cái kệ ba tầng để xếp câu lên cho gọn. Kệ vững thì treo gì cũng được.</p>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 29, 2026 · by Meta AI and 🐝Mr. Bee Osn ·</span>
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