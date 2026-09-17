import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TRUly2(): React.JSX.Element {

	const postId = "TRUly2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/vocabulary#adverbs-xac-thuc"><mark className="highlight-tertiary-padding-4-8">ADverbs: xác thực</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">TRUly
				<sup>
					<Link to="/vocabulary/TRUly-1">&nbsp;1&nbsp;</Link>
				</sup>
				<sup>
					<Link to="/vocabulary/TRUly-2">&nbsp;2&nbsp;</Link>
				</sup>
			</h1>

			<div className="example">
																			
				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#apPREciate">apPREciate</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#beLIEVE-in">beLIEVE in</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#underSTAND">underSTAND</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#SORry">SORry</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#reMARKable">reMARKable</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#inSPIring">inSPIring</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#uNIQUE">uNIQUE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#GRATEful">GRATEful</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#BLESSED">BLESSED</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#unforGETtable">unforGETtable</HashLink>
					</span> &nbsp;

				</p>

			</div>

			{/* This is the content of Vocabulary Term. */}

			<p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>TRUly</strong>" (thật sự, thực sự) và các cụm từ hay đi kèm nhé.</p>

			<div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

				<div>

					<p className="margin-y-10">
						
						<span className="highlight-255-padding-3-6">
							
							[TRUly \<Link to="/pronunciation/5-vowel-system">TRÜ ly</Link>\ /ˈtruːli/ ⬤• (2x)
							
						</span>
							
						&nbsp;trong tiếng Anh có nghĩa là "thật sự", "thực tế", thường được dùng để nhấn mạnh tính xác thực, chân thật của một điều gì đó.

					</p>

				</div>

				<div className="bee-wrapper2">
					<img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
				</div>

			</div>

      <ol className="margin-top-30 padding-left-30">

				<li value="1" id="apPREciate">i TRUly [apPREciate] your HELP.</li>
				<li className="list-none margin-bottom-20">Tôi thật sự [trân trọng] sự giúp đỡ của bạn.</li>

				<li value="2" id="beLIEVE-in">i TRUly [beLIEVE in] the POWer of LOVE.</li>
				<li className="list-none margin-bottom-20">Tôi thật sự [tin vào] sức mạnh của tình yêu.</li>

				<li value="3" id="underSTAND">i TRUly [underSTAND] HOW you FEEL.</li>
				<li className="list-none margin-bottom-20">Tôi thật sự [hiểu] cảm giác của bạn.</li>

				<li value="4" id="SORry">i am TRUly [SORry] for WHAT i SAID.</li>
				<li className="list-none margin-bottom-20">Tôi thật sự [xin lỗi] về những gì tôi đã nói.</li>

				<li value="5" id="reMARKable">her perFORmance was TRUly [reMARKable].</li>
				<li className="list-none margin-bottom-20">Màn trình diễn của cô ấy thật sự [đáng chú ý].</li>

				<li value="6" id="inSPIring">his STOry is TRUly [inSPIring].</li>
				<li className="list-none margin-bottom-20">Câu chuyện của anh ấy thật sự [truyền cảm hứng].</li>

				<li value="7" id="uNIQUE">her ARTwork is TRUly [uNIQUE].</li>
				<li className="list-none margin-bottom-20">Tác phẩm nghệ thuật của cô ấy thật sự [độc đáo].</li>

				<li value="8" id="GRATEful">i am TRUly [GRATEful] for your supPORT.</li>
				<li className="list-none margin-bottom-20">Tôi thật sự [biết ơn] sự ủng hộ của bạn.</li>

				<li value="9" id="BLESSED">i FEEL TRUly [BLESSED] to have such GOOD FRIENDS.</li>
				<li className="list-none margin-bottom-20">Tôi cảm thấy thật sự [may mắn] khi có những người bạn tốt như vậy.</li>

				<li value="10" id="unforGETtable">it was a TRUly [unforGETtable] exPErience.</li>
				<li className="list-none margin-bottom-20">Đó là một trải nghiệm thật sự [khó quên].</li>

			</ol>

			<p>** Các cụm từ trên đều được sử dụng để nhấn mạnh tính chân thật, sâu sắc của cảm xúc, suy nghĩ hoặc đánh giá. Chúng thường được dùng trong các tình huống giao tiếp đòi hỏi sự chân thành và chân thật.</p>

			{/* =============================
						Lưu ý:
			============================= */}

			<div className="margin-y-30 text-border1 table-container">

				<h3 className="margin-y-30 text-center">Lưu ý:</h3>

				<ul className="list-square">

					<li>"<strong>TRUly</strong>" thường được đặt trước ADjective hoặc hành động để nhấn mạnh ý nghĩa.</li>

					<li className="margin-bottom-20">Từ này thường được sử dụng trong các văn nói và văn viết trang trọng.</li>

				</ul>

			</div>

			<p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>noVEMber 2, 2024 · by 💎GEM ·</span>
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