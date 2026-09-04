import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CLEARly2(): React.JSX.Element {

	const postId = "CLEARly2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/vocabulary#adverbs-ro-rang"><mark className="highlight-tertiary-padding-4-8">ADverbs: rõ ràng</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">CLEARly
				<sup>
					<Link to="/vocabulary/CLEARly-1">&nbsp;1&nbsp;</Link>
				</sup>
				<sup>
					<Link to="/vocabulary/CLEARly-2">&nbsp;2&nbsp;</Link>
				</sup>
			</h1>

			{/* This is the content of Vocabulary Term. */}

			<p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>CLEARly</strong>" (một cách rõ ràng) và các cụm từ hay đi kèm nhé.</p>

			<div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

				<div>

					<p className="margin-y-10">
						
						<span className="highlight-255-padding-3-6">
							
							[CLEARly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">CLĖAR ly</Link>] /ˈklɪərli/ ⬤• (2x)
							
						</span>
							
						&nbsp;trong tiếng Anh có nghĩa là "một cách rõ ràng", "một cách hiển nhiên", được dùng để nhấn mạnh sự rõ ràng, dễ hiểu của một ý tưởng, thông tin hoặc tình huống.

					</p>

				</div>

				<div className="bee-wrapper2">
					<img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
				</div>

			</div>

			<ol className="margin-top-30 padding-left-30">

				<li value="1">the RULES were CLEARly STAted at the beGINning of the GAME.</li>
				<li className="list-none margin-bottom-20">Quy tắc đã được nêu rõ ràng ngay từ đầu trò chơi.</li>

				<li value="2">the TERMS of the CONtract were CLEARly deFINED.</li>
				<li className="list-none margin-bottom-20">Các điều khoản của hợp đồng đã được định nghĩa rõ ràng.</li>

				<li value="3">the STARS were CLEARly VISible on a CLEAR NIGHT.</li>
				<li className="list-none margin-bottom-20">Những ngôi sao rất dễ thấy vào một đêm trời quang.</li>

				<li value="4">i HOPE my POINT is CLEARly underSTOOD.</li>
				<li className="list-none margin-bottom-20">Tôi hy vọng ý của tôi đã được hiểu rõ.</li>

				<li value="5">can you PLEASE exPLAIN that MORE CLEARly?</li>
				<li className="list-none margin-bottom-20">Bạn có thể giải thích rõ ràng hơn được không?</li>

				<li value="6">the conNECtion between the TWO eVENTS was LESS CLEARly esTABlished.</li>
				<li className="list-none margin-bottom-20">Mối liên hệ giữa hai sự kiện này ít rõ ràng hơn.</li>

				<li value="7">the exPERiment CLEARly DEMonstrates the efFECTS of CLImate CHANGE.</li>
				<li className="list-none margin-bottom-20">Thí nghiệm rõ ràng chứng minh những tác động của biến đổi khí hậu.</li>

				<li value="8">the MAP CLEARly INdicates the SHORtest ROUTE.</li>
				<li className="list-none margin-bottom-20">Bản đồ rõ ràng chỉ ra tuyến đường ngắn nhất.</li>

				<li value="9">his iDEaS were CLEARly arTICulated and EAsy to FOLlow.</li>
				<li className="list-none margin-bottom-20">Ý tưởng của anh ấy được diễn đạt rõ ràng và dễ hiểu.</li>

				<li value="10">it was CLEARly inTENded as a JOKE.</li>
				<li className="list-none margin-bottom-20">Rõ ràng đó là một trò đùa.</li>

			</ol>

			<p>** Các cụm từ trên đều nhấn mạnh tính rõ ràng, dễ hiểu và minh bạch của một ý tưởng, thông tin hoặc tình huống. Chúng thường được sử dụng để làm cho ý kiến của người nói trở nên đáng tin cậy và dễ hiểu hơn.</p>

			{/* =============================
						Lưu ý:
			============================= */}

			<div className="margin-y-30 text-border1 table-container">

				<h3 className="margin-y-30 text-center">Lưu ý:</h3>

				<ul className="list-square">

					<li>"<strong>CLEARly</strong>" thường được đặt trước Tính Cơ hoặc hành động để nhấn mạnh ý nghĩa.</li>

					<li className="margin-bottom-20">Từ này có thể được sử dụng trong nhiều ngữ cảnh khác nhau, từ cuộc trò chuyện hàng ngày đến văn bản học thuật.</li>

				</ul>

			</div>

			<p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>November 4, 2024 · by 💎GEM ·</span>
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