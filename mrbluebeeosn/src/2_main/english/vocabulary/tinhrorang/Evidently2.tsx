import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function EVidently2(): React.JSX.Element {

	const postId = "EVidently2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/vocabulary#adverbs-chinh-xac"><mark className="highlight-tertiary-padding-4-8">ADverbs: chính xác</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">EVidently
				<sup>
					<Link to="/vocabulary/EVidently-1">&nbsp;1&nbsp;</Link>
				</sup>
				<sup>
					<Link to="/vocabulary/EVidently-2">&nbsp;2&nbsp;</Link>
				</sup>
			</h1>

			{/* This is the content of Vocabulary Term. */}

			<p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>EVidently</strong>" (một cách rõ ràng) và các cụm từ hay đi kèm nhé.</p>

			<div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

				<div>

					<p className="margin-y-10">
						
						<span className="highlight-255-padding-3-6">
							
							[EVidently][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">EV i de̛nt ly</Link>] /ˈevɪdəntli/ ⬤••• (4x)
							
						</span>
							
						&nbsp;là một Trạng Cơ dùng để nhấn mạnh rằng một điều gì đó rất rõ ràng, dễ thấy hoặc có thể được suy luận ra từ những bằng chứng có sẵn.

					</p>

				</div>

				<div className="bee-wrapper2">
					<img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
				</div>

			</div>

			<ol className="margin-top-30 padding-left-30">

				<li value="1">it was EVidently CLEAR that she was upSET.</li>
				<li className="list-none margin-bottom-20">Rõ ràng là cô ấy rất buồn.</li>

				<li value="2">his ALibi was EVidently FALSE.</li>
				<li className="list-none margin-bottom-20">Bằng chứng ngoại phạm của anh ta rõ ràng là sai.</li>

				<li value="3">she was EVidently PLEASED with the GIFT.</li>
				<li className="list-none margin-bottom-20">Cô ấy rõ ràng rất hài lòng với món quà.</li>

				<li value="4">he was EVidently surPRISED by the NEWS.</li>
				<li className="list-none margin-bottom-20">Anh ấy rõ ràng rất ngạc nhiên trước tin tức đó.</li>

				<li value="5">she was EVidently WORried about her SON'S HEALTH.</li>
				<li className="list-none margin-bottom-20">Cô ấy rõ ràng rất lo lắng về sức khỏe của con trai mình.</li>

				<li value="6">he was EVidently unprePARED for the TEST.</li>
				<li className="list-none margin-bottom-20">Anh ấy rõ ràng chưa chuẩn bị cho bài kiểm tra.</li>

				<li value="7">it was EVidently inTENded as a JOKE.</li>
				<li className="list-none margin-bottom-20">Rõ ràng là nó được nói đùa.</li>

				<li value="8">she was EVidently aWARE of the DANger.</li>
				<li className="list-none margin-bottom-20">Cô ấy rõ ràng biết về mối nguy hiểm.</li>

				<li value="9">the TWO eVENTS were EVidently conNECted.</li>
				<li className="list-none margin-bottom-20">Hai sự kiện đó rõ ràng có liên quan với nhau.</li>

				<li value="10">you were EVidently misTAken about the DATE.</li>
				<li className="list-none margin-bottom-20">Bạn rõ ràng đã nhầm về ngày.</li>

			</ol>

			<p>** Các cụm từ trên đều nhấn mạnh sự rõ ràng, hiển nhiên của một điều gì đó. Chúng thường được sử dụng để khẳng định một sự thật hoặc một ý kiến mà không cần phải chứng minh thêm.</p>

			{/* =============================
						Lưu ý:
			============================= */}

			<div className="margin-y-30 text-border1 table-container">

				<h3 className="margin-y-30 text-center">Lưu ý:</h3>

				<ul className="list-square">

					<li>"<strong>EVidently</strong>" thường được đặt ở đầu câu hoặc trước một Tính Cơ hoặc tính cụm để nhấn mạnh.</li>

					<li className="margin-bottom-20">Từ này thường được sử dụng trong văn nói và văn viết để tạo ra một giọng điệu chắc chắn và thuyết phục.</li>

				</ul>

			</div>

			<p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>November 7, 2024 · by 💎GEM ·</span>
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