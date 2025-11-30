import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NhanDienCumDanhTuTiengAnh(): React.JSX.Element {

	const postId = "NhanDienCumDanhTuTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Nhận Diện Cụm Danh Từ
			
				<sup><HashLink smooth to="/tieng-anh/huong-dan-nhan-dien-cum-danh-tu-tieng-anh">&nbsp;1&nbsp;</HashLink>
				</sup>
								
				<sup><HashLink smooth to="/tieng-anh/huong-dan-nhan-dien-cum-dong-tu-tieng-anh">&nbsp;2&nbsp;</HashLink>
				</sup>
			
			</h1>

			{/* This is the content of English Learning Term. */}

			<p>Quy Tắc Tay Trái – Tay Phải Siêu Dễ Nhớ Cho Người Việt</p>

			<p className="margin-top-20">Quy tắc vàng mới (dễ nhớ hơn bao giờ hết):</p>
			
				<ul className="list-square">
			
					<li><strong>Tay trái</strong> = <strong>How</strong> (như thế nào): tính từ, trạng từ, mạo từ, số từ, danh từ ghép…</li>
			
					<li><strong>Tay phải</strong> = <strong>What</strong> (cái gì): danh từ chính luôn nằm cuối cùng</li>
			
				</ul>

			<p>Bước 1 – Xác định <strong>How</strong>: nhìn hết bên tay trái → biết đẹp-ugly, to-nhỏ, màu gì, chất liệu gì…</p>

			<p>Bước 2 – Xác định <strong>What</strong>: nhìn đúng từ cuối cùng bên phải → biết là nhà, xe, người, bàn…</p>

			<h3 className="margin-top-30 margin-bottom-50 text-center">Áp dụng thực tế – Cấu trúc chuẩn</h3>

			{/* 1. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">1. a beautiful big red flower</h3>

				<p className="margin-top-20">Bước 1 – Xác định How: tay trái: beautiful + big + red</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: flower → hoa</p>
				
					<ul className="list-square">
				
						<li>Một bông hoa đỏ to đẹp</li>
				
						<li className="list-none">→ tính từ ý kiến (beautiful) → kích thước (big) → màu sắc (red) → danh từ chính (flower).</li>
				
					</ul>

			</div>

			{/* 2. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">2. three cute small black cats</h3>

				<p className="margin-top-20">Bước 1 – Xác định How: tay trái: three + cute + small + black</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: cats → mèo</p>
				
					<ul className="list-square">
				
						<li>Ba con mèo đen nhỏ dễ thương</li>
				
						<li className="list-none">→ số từ (three) → ý kiến (cute) → kích thước (small) → màu (black) → danh từ chính (cats).</li>
				
					</ul>

			</div>

			{/* 3. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">3. an old wooden table</h3>

				<p className="margin-top-20">Bước 1 – Xác định How: tay trái: an + old + wooden</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: table → bàn</p>
				
					<ul className="list-square">
				
						<li>Một chiếc bàn gỗ cũ</li>
				
						<li className="list-none">→ mạo từ (an) → tuổi (old) → chất liệu (wooden) → danh từ chính (table).</li>
				
					</ul>

			</div>

			{/* 4. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">4. two interesting French silk dresses</h3>

				<p className="margin-top-20">Bước 1 – Xác định How: tay trái: two + interesting + French + silk</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: dresses → váy</p>
				
					<ul className="list-square">
				
						<li>Hai chiếc váy lụa Pháp thú vị</li>
				
						<li className="list-none">→ số từ → ý kiến → nguồn gốc → chất liệu → danh từ chính.</li>
				
					</ul>

			</div>

			{/* 5. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">5. my younger sister’s new laptop</h3>

				<p className="margin-top-20">Bước 1 – Xác định How: tay trái: my + younger sister’s + new</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: laptop → laptop</p>
				
					<ul className="list-square">
				
						<li>Chiếc laptop mới của em gái tôi</li>
				
						<li className="list-none">→ sở hữu → quan hệ → tuổi → danh từ chính.</li>
				
					</ul>

			</div>

			{/* 6. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">6. a large round wooden dining table</h3>

				<p className="margin-top-20">Bước 1 – Xác định How: tay trái: a + large + round + wooden + dining</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: table → bàn</p>
				
					<ul className="list-square">
				
						<li>Một chiếc bàn ăn gỗ tròn lớn</li>

						<li className="list-none">→ mạo từ → kích thước → hình dạng → chất liệu</li>
				
						<li className="list-none">→ mục đích → danh từ chính.</li>
				
					</ul>

			</div>

			{/* 7. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">7. The tall handsome man in black suit</h3>

				<p className="margin-top-20">Bước 1 – Xác định How: tay trái: the + tall + handsome + in black suit</p>

				<p className="margin-top-20">Bước 2 – Xác định What: tay phải: man → người đàn ông</p>
				
					<ul className="list-square">
				
						<li>Người đàn ông cao ráo đẹp trai mặc vest đen</li>
				
						<li className="list-none">→ Mạo từ → chiều cao → ngoại hình → cụm giới từ bổ sung → danh từ chính.</li>
				
					</ul>

			</div>

			<h3 className="margin-y-50 text-center">Quy tắc nhớ nhanh OSASCOMP (khi tay trái có nhiều tính từ)</h3>

			<p>Opinion → Size → Age → Shape → Color → Origin → Material → Purpose</p>

			<p>→ Cứ gom hết vào tay trái rồi sắp lại theo thứ tự này là chuẩn!</p>

			<h3 className="margin-y-50 text-center">Kết luận</h3>

			<p className="margin-top-20">Quy tắc tay trái – tay phải cho cụm danh từ:</p>
			
				<ul className="list-square">
			
					<li><strong>Tay trái</strong> = <strong>How</strong>: gom hết tính từ, mạo từ, số từ, trạng từ…</li>
			
					<li><strong>Tay phải</strong> = <strong>What</strong>: danh từ chính luôn nằm cuối cùng</li>
			
				</ul>

			<p className="margin-top-20">Chỉ cần nhìn 2 bên tay → biết ngay “như thế nào” + “cái gì” → hiểu chuẩn cụm danh từ chỉ trong 3 giây, dù dài bao nhiêu từ!</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>November 30, 2025 · by 🐝Mr. Bee Osn and Grok ·</span>
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