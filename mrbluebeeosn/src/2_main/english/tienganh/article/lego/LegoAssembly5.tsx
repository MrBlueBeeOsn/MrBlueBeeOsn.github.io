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

			<h4 className="margin-bottom-30 text-center">Mô hình học ngữ pháp tiếng Anh qua lắp ghép</h4>

			<p></p>

			<p></p>
			
			<p></p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. </h3>

			<p></p>

			


			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. </h3>

			<p></p>

		
			

			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. </h3>

			<p></p>
			
			

			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. </h3>

			<p></p>

			

			{/* 5.  */}

			<h3 className="margin-y-50 text-center">5. </h3>

			<p></p>

			<p></p>
					
			<p></p>
					
			<p></p>

			<p></p>

			<h4 className="margin-y-40">DC → DP khi rút gọn</h4>
					
			<p className="text-indent-whole">Bỏ who/that + be → DC thu gọn thành DP. Chức năng giống hệt nhau, chỉ hình thức ngắn hơn. Đây không phải hai loại khác nhau — một cái đầy đủ, một cái rút gọn.</p>
					
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