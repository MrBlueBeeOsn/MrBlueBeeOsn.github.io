import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DichCauTiengVietSangTiengAnh(): React.JSX.Element {

	const postId = "DichCauTiengVietSangTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Dịch Câu Sang Tiếng Anh</h1>

			{/* This is the content of English Learning Term. */}

			<p>Phương Pháp “Thay Từng Lớp” – Chuẩn Như Người Bản Xứ</p>

			<p>Chỉ cần làm đúng thứ tự 3 bước sau → câu tiếng Anh ra đời chuẩn ngữ pháp, chuẩn tự nhiên 100%!</p>

			<p className="margin-top-20">3 bước bất di bất dịch:</p>
			
				<ol>
			
					<li>Thay <strong>ngôi</strong> (tôi → I, bạn → you, anh ấy → he, của tôi → my…)</li>

					<li>Thay <strong>động từ</strong> + <strong>trạng từ</strong> (thích → like, đang ăn → are eating, rất → very, vui vẻ → happily…)</li>
			
					<li>Thay danh từ + toàn bộ <strong>cụm danh từ</strong> (những bông hoa đỏ đẹp → beautiful red flowers)</li>
			
				</ol>

			<h3 className="margin-top-30 margin-bottom-50 text-center">Áp dụng thực tế – đúng chuẩn từng bước</h3>

			{/* 1. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">1. Tôi thích những bông hoa đỏ đẹp trong vườn.</h3>
				
					<ul className="list-square">
				
						<li className="list-none">→ Bước 1: <strong>I</strong> thích những bông hoa đỏ đẹp trong vườn.</li>
				
						<li className="list-none">→ Bước 2: I <strong>like</strong> những bông hoa đỏ đẹp trong vườn.</li>

						<li className="list-none">→ Bước 3: I like <strong>beautiful red flowers in the garden</strong>.</li>
				
					</ul>

			</div>

			{/* 2. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">2. Bạn đang ăn cơm rất ngon với bạn bè.</h3>
				
					<ul className="list-square">
				
						<li className="list-none">→ Bước 1: <strong>You</strong> đang ăn cơm rất ngon với bạn bè.</li>
				
						<li className="list-none">→ Bước 2: You <strong>are eating very deliciously</strong> với bạn bè.</li>

						<li className="list-none">→ Bước 3: You are eating very deliciously <strong>with your friends</strong>.</li>
				
					</ul>

			</div>

			{/* 3. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">3. Con mèo đen nhỏ của tôi đã ngủ trên ghế sofa mới.</h3>
				
					<ul className="list-square">
				
						<li className="list-none">→ Bước 1: <strong>My</strong> con mèo đen nhỏ đã ngủ trên ghế sofa mới.</li>
				
						<li className="list-none">→ Bước 2: My con mèo đen nhỏ <strong>has slept</strong> trên ghế sofa mới.</li>

						<li className="list-none">→ Bước 3: My <strong>small black cat</strong> has slept <strong>on the new sofa</strong>.</li>
				
					</ul>

			</div>

			{/* 4. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">4. Trẻ em đang chơi đùa vui vẻ trong công viên lớn.</h3>
				
					<ul className="list-square">
				
						<li className="list-none">→ Bước 1: <strong>Children</strong> đang chơi đùa vui vẻ trong công viên lớn.</li>
				
						<li className="list-none">→ Bước 2: Children <strong>are playing happily</strong> trong công viên lớn.</li>

						<li className="list-none">→ Bước 3: Children are playing happily <strong>in the big park</strong>.</li>
				
					</ul>

			</div>

			{/* 5. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">5. Chúng tôi sẽ đi Đà Lạt vào kỳ nghỉ tới bằng xe hơi mới.</h3>
				
					<ul className="list-square">
				
						<li className="list-none">→ Bước 1: <strong>We</strong> sẽ đi Đà Lạt vào kỳ nghỉ tới bằng xe hơi mới.</li>
				
						<li className="list-none">→ Bước 2: We <strong>will go</strong> Đà Lạt vào kỳ nghỉ tới bằng xe hơi mới.</li>

						<li className="list-none">→ Bước 3: We will go <strong>to Da Lat on the next holiday by new car</strong>.</li>
				
					</ul>

			</div>

			{/* 6. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">6. Cô ấy không thích phim kinh dị dài dòng.</h3>
				
					<ul className="list-square">
				
						<li className="list-none">→ Bước 1: <strong>She</strong> không thích phim kinh dị dài dòng.</li>
				
						<li className="list-none">→ Bước 2: She <strong>does not like</strong> phim kinh dị dài dòng.</li>

						<li className="list-none">→ Bước 3: She does not like <strong>long horror movies</strong>.</li>
				
					</ul>

			</div>

			{/* 7. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">7. Anh ấy đã tặng tôi một chiếc đồng hồ Thụy Sĩ rất đắt tiền.</h3>
				
					<ul className="list-square">
				
						<li className="list-none">→ Bước 1: <strong>He</strong> đã tặng <strong>me</strong> một chiếc đồng hồ Thụy Sĩ rất đắt tiền.</li>
				
						<li className="list-none">→ Bước 2: He <strong>has given</strong> me một chiếc đồng hồ Thụy Sĩ <strong>very expensively</strong>.</li>

						<li className="list-none">→ Bước 3: He has given me <strong>a Swiss watch</strong>.</li>
				
					</ul>

			</div>

			<h3 className="margin-y-50 text-center">Mẹo nhỏ để dịch nhanh như chớp</h3>
			
				<ul className="list-square">
			
					<li>Bước 1: chỉ thay <strong>đại từ</strong> + <strong>sở hữu</strong> (my, your, his, her, our, their…).</li>
			
					<li>Bước 2: chỉ thay <strong>động từ</strong> + <strong>trạng từ</strong> (đang → -ing, rất → very/really, vui vẻ → happily…).</li>
			
					<li>Bước 3: “đảo ngược” toàn bộ <strong>cụm danh từ</strong>: tính từ → danh từ.</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">Kết luận</h3>

			<p className="margin-top-20">Chỉ cần làm đúng 3 bước thay từng lớp:</p>
			
				<ul className="list-square">
			
					<li><strong>Ngôi</strong> → <strong>Động cơ</strong> & <strong>trạng từ</strong> → <strong>Danh cơ</strong> & <strong>cụm danh từ</strong></li>
			
					<li>→ Dù câu tiếng Việt có dài và phức tạp đến đâu, bạn cũng dịch ra tiếng Anh chuẩn 100% chỉ trong vài giây!</li>
			
				</ul>

			<p className="margin-top-20">Chỉ cần nhìn 2 bên tay → biết ngay “như thế nào” + “cái gì” → hiểu chuẩn cụm danh từ chỉ trong 3 giây, dù dài bao nhiêu từ!</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 08, 2025 · by Grok and 🐝Mr. Bee Osn  ·</span>
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