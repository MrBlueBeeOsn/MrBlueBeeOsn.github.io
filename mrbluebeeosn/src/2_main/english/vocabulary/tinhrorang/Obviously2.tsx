import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Obviously2(): React.JSX.Element {

	const postId = "Obviously2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/vocabulary#tinh-ro-rang-terms"><mark className="highlight-tertiary-padding-4-8">Tính rõ ràng</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">obviously
				<sup>
					<Link to="/vocabulary/obviously-1">&nbsp;1&nbsp;</Link>
				</sup>
				<sup>
					<Link to="/vocabulary/obviously-2">&nbsp;2&nbsp;</Link>
				</sup>
			</h1>

			{/* This is the content of Vocabulary Term. */}

			<p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>obviously</strong>" (rõ ràng) và các cụm từ thường đi kèm nhé.</p>

			<div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

				<div>

					<p className="margin-y-10">
						
						<strong>Obviously&nbsp;</strong>
						
						<span className="highlight-255-padding-3-6">
							
							/ˈɒbviəsli/ + /
							
							<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">Obviơusly</Link>/ 
							
							<sup>&nbsp;⬤••• (4x)</sup>
							
						</span>
							
						&nbsp;trong tiếng Anh có nghĩa là "rõ ràng", "hiển nhiên", được dùng để nhấn mạnh một điều gì đó rất dễ thấy hoặc dễ hiểu.

					</p>

				</div>

				<div className="bee-wrapper2">
					<img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
				</div>

			</div>

			<ol className="margin-top-30 padding-left-30">

				<li value="1">Obviously <strong>wrong</strong> /rɒŋ/</li>
				<li className="list-none">His answer was ______.</li>
				<li className="list-none margin-bottom-20">Câu trả lời của anh ấy rõ ràng là sai.</li>

				<li value="2">Obviously <strong>correct</strong> /kəˈrekt/</li>
				<li className="list-none">Her solution was ______.</li>
				<li className="list-none margin-bottom-20">Giải pháp của cô ấy rõ ràng là đúng.</li>

				<li value="3">Obviously <strong>the best</strong> /ðə best/</li>
				<li className="list-none">This is ______ option.</li>
				<li className="list-none margin-bottom-20">Đây rõ ràng là lựa chọn tốt nhất.</li>

				<li value="4">Obviously <strong>upset</strong> /ʌpˈset/</li>
				<li className="list-none">She was ______ about the news.</li>
				<li className="list-none margin-bottom-20">Cô ấy rõ ràng là buồn về tin tức đó.</li>

				<li value="5">Obviously <strong>excited</strong> /ɪkˈsaɪtɪd/</li>
				<li className="list-none">He was ______ about the trip.</li>
				<li className="list-none margin-bottom-20">Anh ấy rõ ràng là rất hào hứng về chuyến đi.</li>

				<li value="6">Obviously <strong>tired</strong> /taɪərd/</li>
				<li className="list-none">She was ______ after a long day.</li>
				<li className="list-none margin-bottom-20">Cô ấy rõ ràng là rất mệt sau một ngày dài.</li>

				<li value="7">Obviously <strong>planned</strong> /plænd/</li>
				<li className="list-none">The accident was ______.</li>
				<li className="list-none margin-bottom-20">Vụ tai nạn rõ ràng là đã được lên kế hoạch.</li>

				<li value="8">Obviously <strong>careless</strong> /ˈkeərləs/</li>
				<li className="list-none">He was ______ with his work.</li>
				<li className="list-none margin-bottom-20">Anh ấy rõ ràng là rất cẩu thả trong công việc.</li>

				<li value="9">Obviously <strong>intentional</strong> /ɪnˈtenʃənl/</li>
				<li className="list-none">The damage was ______.</li>
				<li className="list-none margin-bottom-20">Những hư hại này rõ ràng là cố ý gây ra.</li>

				<li value="10">Obviously <strong>mistaken</strong> /mɪˈsteɪkən/</li>
				<li className="list-none">You are ______ about the facts.</li>
				<li className="list-none margin-bottom-20">Bạn rõ ràng là đã nhầm lẫn về những sự thật.</li>

			</ol>

			<p>** Các cụm từ trên thường được sử dụng để nhấn mạnh một điều gì đó rất dễ thấy hoặc dễ hiểu, không cần phải bàn cãi thêm. Chúng thường mang tính khẳng định và thường được dùng để kết luận một vấn đề.</p>

			{/* =============================
						Lưu ý:
			============================= */}

			<div className="margin-y-30 text-border1 table-container">

				<h3 className="margin-y-30 text-center">Lưu ý:</h3>

				<ul className="list-square">

					<li>"<strong>Obviously</strong>" thường được đặt ở đầu câu hoặc trước tính cơ, trạng cơ để nhấn mạnh ý nghĩa.</li>

					<li className="margin-bottom-20">Từ này có thể được sử dụng trong nhiều ngữ cảnh khác nhau, từ cuộc trò chuyện hàng ngày đến các bài viết học thuật.</li>

				</ul>

			</div>

			<p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>November 5, 2024 · by 💎Gem ·</span>
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