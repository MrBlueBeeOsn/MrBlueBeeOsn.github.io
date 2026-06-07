import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SapXepCumDanhTuTiengAnh(): React.JSX.Element {

	const postId = "SapXepCumDanhTuTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Hướng Dẫn Sắp Xếp Danh Cụm

				<sup><HashLink smooth to="/tieng-anh/huong-dan-sap-xep-cum-danh-tu-tieng-anh">&nbsp;1&nbsp;</HashLink>
				</sup>
								
				<sup><HashLink smooth to="/tieng-anh/huong-dan-sap-xep-cum-dong-tu-tieng-anh">&nbsp;2&nbsp;</HashLink>
				</sup>

			</h1>

			{/* This is the content of English Learning Term. */}

			<p>Người Việt thường nói “bông hoa đỏ đẹp lớn” (tính cơ đứng sau danh cơ), nhưng tiếng Anh lại hoàn toàn ngược lại: tất cả <strong>tính cơ</strong>, <strong>mạo từ</strong>, <strong>số từ</strong>… phải <strong>đứng bên trái</strong>, <strong>danh cơ chính</strong> luôn <strong>đứng bên phải</strong> nhất.</p>

			<p className="margin-top-20">Để sắp xếp danh cụm tiếng Anh một cách nhanh và không bao giờ sai, bạn chỉ cần làm đúng 2 bước lớn:</p>
			
				<ul className="list-square">
			
					<li>Bước 1: gom hết các <strong>tính cơ</strong>, <strong>mạo từ</strong>, <strong>số từ</strong>… vào <strong>bên trái</strong></li>
			
					<li>Bước 2: đặt <strong>danh cơ chính</strong> vào <strong>bên phải</strong> cùng</li>
			
					<li className="list-none">→ Xong! Danh cụm đã đúng cấu trúc 100%.</li>
			
				</ul>

				<p className="margin-y-50 text-center">

					<span className="highlight-238-padding-4-8 text-border1">

						<span className="highlight-255-padding-0-4">Tính cơ, mạo từ, số từ</span> đứng bên trái, <span className="highlight-255-padding-0-4">danh cơ </span> đứng bên phải

					</span>

				</p>

			<h3 className="margin-top-30 margin-bottom-50 text-center">1. Tại sao phải “tính cơ bên trái – danh cơ bên phải”?</h3>

			<p>Tiếng Việt: đẹp → lớn → đỏ → hoa</p>
			
			<p>Tiếng Anh: a + large + red + beautiful + flower</p>

			<p className="margin-top-20">Nếu bạn cố xếp từ trái sang phải như tiếng Việt, bạn sẽ ra “flower beautiful red large” → sai hoàn toàn.</p>

			<p>Giải pháp đơn giản nhất: luôn đặt <strong>danh cơ chính</strong> làm mốc <strong>bên phải</strong>, <strong>còn lại</strong> gom hết vào <strong>bên trái</strong>.</p>

			<h3 className="margin-y-50 text-center">2. Hai bước sắp xếp danh cụm (rất dễ nhớ)</h3>

			{/* =============================
					Bước 1: Gom hết các từ bổ nghĩa vào bên trái
			============================= */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Bước 1: Gom hết các từ bổ nghĩa vào bên trái</h3>

				<p className="margin-top-20">Bao gồm:</p>
				
					<ul className="list-square">
				
						<li>Mạo từ (a / an / the)</li>
				
						<li>Số từ (one, two, three…)</li>
				
						<li>Tính cơ ý kiến (beautiful, cute, interesting…)</li>

						<li>Tính cơ kích thước, tuổi tác, hình dạng, màu sắc, nguồn gốc, chất liệu, mục đích…</li>
				
					</ul>
				
			</div>

			{/* =============================
					Bước 2: Đặt danh cơ chính (head noun) vào bên phải cùng
			============================= */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Bước 2: Đặt danh cơ chính (head noun) vào bên phải cùng</h3>

				<p>→ Danh cụm hoàn chỉnh.</p>

				<p className="margin-top-20">Ví dụ minh họa siêu nhanh</p>
				
				<p className="text-indent">Tiếng Việt: ba con mèo đen nhỏ dễ thương</p>

					<ol>

						<li>Gom bên trái: three + cute + small + black</li>

						<li>Đặt danh cơ bên phải: cat</li>

						<li className="list-none">→ <strong>three cute small black cats</strong></li>

					</ol>
				
				<p className="text-indent">Tiếng Việt: một chiếc váy lụa trắng dài thanh lịch của Pháp</p>

					<ol>

						<li>Gom bên trái: a + elegant + long + white + silk + French</li>

						<li>Đặt danh cơ bên phải: dress</li>

						<li className="list-none">→ a elegant long white silk French dress</li>

						<li className="list-none">→ Áp dụng thứ tự OSASCOMP → <strong>an elegant long white silk French dress</strong></li>

					</ol>

			</div>

			<h3 className="margin-y-50 text-center">3. Thứ tự chuẩn các tính cơ bên trái (nhớ một lần là dùng mãi mãi)</h3>

			<p>Khi đã gom hết vào bên trái, bạn chỉ cần sắp chúng theo thứ tự sau (từ trái sang phải):</p>

				<ol>

					<li>Opinion (ý kiến): beautiful, lovely, ugly…</li>

					<li>Size (kích thước): big, small, long, huge…</li>

					<li>Age (tuổi): old, young, new…</li>

					<li>Shape (hình dạng): round, square…</li>

					<li>Color (màu): red, blue, black…</li>

					<li>Origin (nguồn gốc): Vietnamese, Chinese, French…</li>

					<li>Material (chất liệu): wooden, cotton, silk…</li>

					<li>Purpose (mục đích): wedding (dress), cooking (oil)…</li>

					<li className="list-none">→ Viết tắt: <strong>O-S-A-S-C-O-M-P</strong></li>

				</ol>

			<p className="margin-top-20">Ví dụ: một chiếc xe hơi thể thao đỏ nhỏ đẹp</p>

			<h3 className="margin-y-50 text-center">4. Lưu ý cực kỳ quan trọng</h3>

				<ul className="list-square">

					<li>Danh cơ chính luôn là từ cuối cùng bên phải (không bao giờ đứng giữa hay đầu cụm).</li>

					<li>Mạo từ (a/an/the) và số từ luôn đứng xa nhất bên trái.</li>

					<li>Nếu có danh cơ ghép (sports car, coffee table), coi nó như một khối và đặt nó vào vị trí “material” hoặc “purpose”.</li>

					<li>Khi không chắc thứ tự → cứ gom hết tính cơ vào bên trái trước, rồi sắp lại theo OSASCOMP sau → vẫn đúng!</li>

				</ul>

			<h3 className="margin-y-50 text-center">5. Kết luận</h3>

			<p>Chỉ cần nhớ một nguyên tắc duy nhất:</p>

			<p><strong>Tính cơ</strong> + <strong>mạo từ</strong> + <strong>số từ</strong> → gom hết <strong>bên trái</strong></p>

			<p><strong>Danh cơ chính</strong> → đặt <strong>bên phải</strong> cùng</p>
			
			<p>Thực hành 10–15 cụm mỗi ngày theo 2 bước này, chỉ sau 1 tuần bạn sẽ tự động sắp xếp danh cụm tiếng Anh chuẩn như người bản ngữ mà không cần suy nghĩ nhiều!</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>November 29, 2025 · by Grok and 🐝Mr. Bee Osn  ·</span>
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