import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ACtually2(): React.JSX.Element {

	const postId = "ACtually2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/vocabulary#tinh-xac-thuc-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: xác thực</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">ACtually
				<sup>
					<Link to="/vocabulary/ACtually-1">&nbsp;1&nbsp;</Link>
				</sup>
				<sup>
					<Link to="/vocabulary/ACtually-2">&nbsp;2&nbsp;</Link>
				</sup>
			</h1>

			{/* This is the content of Vocabulary Term. */}

			<p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>ACtually</strong>" (thực ra) và các cụm từ thường đi kèm nhé.</p>

			<div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

				<div>

					<p className="margin-y-10">
						
						<span className="highlight-255-padding-3-6">
							
							[ACtually][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">AC tưa̛l ly</Link>] /ˈæk.tʃəl.i/ ⬤•• (3x)
							
						</span>
							
						&nbsp;trong tiếng Anh có nghĩa là "thực ra", "thực tế là", "thật ra". Từ này thường được dùng để nhấn mạnh một thông tin, một sự thật hoặc một quan điểm nào đó, thường trái ngược hoặc bổ sung cho những gì đã được nói trước đó.

					</p>

				</div>

				<div className="bee-wrapper2">
					<img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
				</div>

			</div>

			<ol className="margin-top-30 padding-left-30">

				<li value="1">i THOUGHT he was ANgry, but ACtually, i THINK he was JUST TIred.</li>
				<li className="list-none margin-bottom-20">Tôi tưởng anh ấy tức giận, nhưng thực ra, tôi nghĩ anh ấy chỉ mệt mỏi thôi.</li>

				<li value="2">i THOUGHT it was a CAT, but ACtually, it's a racCOON.</li>
				<li className="list-none margin-bottom-20">Tôi tưởng đó là một con mèo, nhưng thực ra, đó là một con gấu trúc.</li>

				<li value="3">she does NOT ACtually LIKE COFfee, she JUST preTENDS.</li>
				<li className="list-none margin-bottom-20">Cô ấy không thực sự thích cà phê, cô ấy chỉ giả vờ thôi.</li>

				<li value="4">as a MATter of FACT, ACtually, i've ALREAdy SEEN that MOVie.</li>
				<li className="list-none margin-bottom-20">Thực tế mà nói thì, tôi đã xem bộ phim đó rồi.</li>

				<li value="5">it's ACtually a LONG WALK to the STORE.</li>
				<li className="list-none margin-bottom-20">Thực ra thì đi bộ đến cửa hàng khá xa.</li>

				<li value="6">i did NOT ACtually MEAN to HURT your FEELings.</li>
				<li className="list-none margin-bottom-20">Thực ra tôi không có ý làm bạn tổn thương.</li>

				<li value="7">it's ACtually SIMple to DO.</li>
				<li className="list-none margin-bottom-20">Thực ra thì rất đơn giản để làm.</li>

				<li value="8">i've ACtually BEEN to PAris TWICE.</li>
				<li className="list-none margin-bottom-20">Thực ra tôi đã đến Paris hai lần rồi.</li>

				<li value="9">it's ACtually that exPENsive.</li>
				<li className="list-none margin-bottom-20">Thực ra không phải là đắt đâu.</li>

				<li value="10">ACtually, i was WONdering if you could HELP me with this.</li>
				<li className="list-none margin-bottom-20">Thực ra, tôi đang tự hỏi liệu bạn có thể giúp tôi việc này không.</li>

			</ol>

			<p>** Các cụm từ trên đều được sử dụng để bổ sung, sửa chữa hoặc làm rõ thông tin. Chúng giúp cho cuộc trò chuyện trở nên chính xác và rõ ràng hơn.</p>

			{/* =============================
						Lưu ý:
			============================= */}

			<div className="margin-y-30 text-border1 table-container">

				<h3 className="margin-y-30 text-center">Lưu ý:</h3>

				<ul className="list-square">

					<li>"<strong>ACtually</strong>" thường được đặt ở đầu câu hoặc trước một cụm từ để nhấn mạnh ý nghĩa của chúng.</li>

					<li className="margin-bottom-20">Từ này thường được sử dụng trong giao tiếp hàng ngày để làm cho cuộc trò chuyện trở nên tự nhiên và thân thiện hơn.</li>

				</ul>

			</div>

			<p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>November 4, 2024 · by 💎Gem ·</span>
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