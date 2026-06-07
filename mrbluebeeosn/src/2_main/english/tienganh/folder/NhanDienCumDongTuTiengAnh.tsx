import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NhanDienCumDongTuTiengAnh(): React.JSX.Element {

	const postId = "NhanDienCumDongTuTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Nhận Diện Động Cụm
						
				<sup><HashLink smooth to="/tieng-anh/huong-dan-nhan-dien-cum-danh-tu-tieng-anh">&nbsp;1&nbsp;</HashLink>
				</sup>
								
				<sup><HashLink smooth to="/tieng-anh/huong-dan-nhan-dien-cum-dong-tu-tieng-anh">&nbsp;2&nbsp;</HashLink>
				</sup>
			
			</h1>

			{/* This is the content of English Learning Term. */}

			<p>Quy Tắc Tay Trái – Tay Phải</p>

			<p className="margin-top-20">Quy tắc vàng cực dễ nhớ:</p>
			
				<ul className="list-square">
			
					<li><strong>Tay trái</strong> = <strong>When</strong> (khi nào): Quá khứ + Hiện tại + Tương lai</li>

					<li className="list-none">(has, had, is, are, will, am going to, can, should, been, -ed, V-ing, V3…)</li>
			
					<li><strong>Tay phải</strong> = <strong>What</strong> (cái gì): động từ chính luôn nằm cuối cùng</li>
			
				</ul>

			<p>Bước 1 – Xác định <strong>When</strong>: nhìn hết bên tay trái → biết hành động thuộc quá khứ, hiện tại hay tương lai (hoặc kết hợp)</p>

			<p>Bước 2 – Xác định <strong>What</strong>: nhìn đúng từ cuối cùng bên phải → biết hành động thật sự là gì</p>

			<h3 className="margin-top-30 margin-bottom-50 text-center">Áp dụng thực tế</h3>

			{/* 1. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">1. He studies English every day.</h3>

				<p className="margin-top-20">Bước 1 – Xác định When: tay trái: hiện tại (có “-s”)</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: study → học</p>
				
					<ul className="list-square">
				
						<li>Anh ấy học tiếng Anh mỗi ngày (thói quen hiện tại).</li>
				
						<li className="list-none">→ Người này học ở hiện tại, thói quen lặp lại hàng ngày.</li>
				
					</ul>

			</div>

			{/* 2. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">2. He has studied English.</h3>

				<p className="margin-top-20">Bước 1 – Xác định When: tay trái: hiện tại (has) + quá khứ (-ed)</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: studied → học</p>
				
					<ul className="list-square">
				
						<li>Anh ấy đã học tiếng Anh (hiện tại hoàn thành).</li>
				
						<li className="list-none">→ Người này học ở quá khứ nhưng kết quả vẫn còn đến hiện tại.</li>
				
					</ul>

			</div>

			{/* 3. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">3. She studied English last year.</h3>

				<p className="margin-top-20">Bước 1 – Xác định When: tay trái: quá khứ (-ed)</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: studied → học</p>
				
					<ul className="list-square">
				
						<li>Cô ấy đã học tiếng Anh năm ngoái.</li>
				
						<li className="list-none">→ Người này học hoàn toàn ở quá khứ, đã kết thúc.</li>
				
					</ul>

			</div>

			{/* 4. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">4. They are studying now.</h3>

				<p className="margin-top-20">Bước 1 – Xác định When: tay trái: hiện tại (are + V-ing)</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: studying → đang học</p>
				
					<ul className="list-square">
				
						<li>Họ đang học bây giờ.</li>
				
						<li className="list-none">→ Người này đang học đúng ngay lúc này.</li>
				
					</ul>

			</div>

			{/* 5. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">5. I am going to study abroad.</h3>

				<p className="margin-top-20">Bước 1 – Xác định When: tay trái: tương lai gần (am going to)</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: study → học</p>
				
					<ul className="list-square">
				
						<li>Tôi sắp đi du học.</li>
				
						<li className="list-none">→ Người này đã có kế hoạch chắc chắn cho tương lai gần.</li>
				
					</ul>

			</div>

			{/* 6. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">6. He will study medicine.</h3>

				<p className="margin-top-20">Bước 1 – Xác định When: tay trái: tương lai (will)</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: study → học</p>
				
					<ul className="list-square">
				
						<li>Anh ấy sẽ học ngành y.</li>
				
						<li className="list-none">→ Người này sẽ học trong tương lai.</li>
				
					</ul>

			</div>

			{/* 7. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">7. By next year, she will have studied for 10 years.</h3>

				<p className="margin-top-20">Bước 1 – Xác định When: tay trái: tương lai (will) + hiện tại (have) + quá khứ (-ed)</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: studied → học</p>
				
					<ul className="list-square">
				
						<li>Đến năm tới thì cô ấy sẽ đã học đủ 10 năm.</li>
				
						<li className="list-none">→ Hành động học bắt đầu từ quá khứ, vẫn liên quan hiện tại và sẽ hoàn thành trong tương lai.</li>
				
					</ul>

			</div>

			{/* 8. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">8. The car is being repaired.</h3>

				<p className="margin-top-20">Bước 1 – Xác định When: tay trái: hiện tại (is being) + quá khứ (V3 repaired)</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: repaired → được sửa</p>
				
					<ul className="list-square">
				
						<li>Chiếc xe đang được sửa.</li>
				
						<li className="list-none">→ Hành động sửa đang diễn ra ở hiện tại, xe chịu tác động.</li>
				
					</ul>

			</div>

			{/* 9. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">9. The bridge will have been being built for 5 years.</h3>

				<p className="margin-top-20">Bước 1 – Xác định When: tay trái: tương lai (will) + hiện tại đang tiếp diễn (have been being) + quá khứ (V3 built)</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: built → được xây</p>
				
					<ul className="list-square">
				
						<li>Đến thời điểm đó thì cây cầu đã và vẫn đang được xây liên tục 5 năm.</li>
				
						<li className="list-none">→ Hành động xây bắt đầu từ quá khứ, vẫn đang tiếp diễn hiện tại và sẽ kéo dài đến tương lai.</li>
				
					</ul>

			</div>

			<h3 className="margin-y-50 text-center">Kết luận</h3>

			<p className="margin-top-20">Quy tắc tay trái – tay phải:</p>
			
				<ul className="list-square">
			
					<li><strong>Tay trái</strong> = <strong>When</strong>: gom hết mọi dấu hiệu thời gian (quá khứ + hiện tại + tương lai)</li>
			
					<li><strong>Tay phải</strong> = <strong>What</strong>: động từ chính luôn nằm cuối cùng</li>
			
				</ul>

			<p className="margin-top-20">Chỉ cần nhìn tay trái → biết “khi nào”, nhìn tay phải → biết “cái gì” → hiểu chuẩn 100% chỉ trong 3 giây!</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>November 30, 2025 · by Grok and 🐝Mr. Bee Osn  ·</span>
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