import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SapXepCumDongTuTiengAnh(): React.JSX.Element {

	const postId = "SapXepCumDongTuTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Hướng Dẫn Sắp Xếp Động Cụm
			
				<sup><HashLink smooth to="/tieng-anh/huong-dan-sap-xep-cum-danh-tu-tieng-anh">&nbsp;1&nbsp;</HashLink>
				</sup>
								
				<sup><HashLink smooth to="/tieng-anh/huong-dan-sap-xep-cum-dong-tu-tieng-anh">&nbsp;2&nbsp;</HashLink>
				</sup>
			
			</h1>

			{/* This is the content of English Learning Term. */}

			<p>Người Việt thường nói “đã đang sẽ không thể bị đánh”, nhưng tiếng Anh lại yêu cầu tất cả <strong>thời động cơ</strong>, <strong>phủ định</strong>, <strong>trạng cơ</strong>… phải <strong>đứng bên trái</strong>, còn <strong>động cơ chính</strong> luôn <strong>đứng bên phải</strong> nhất.</p>

			<p className="margin-top-20">Để sắp xếp động cụm tiếng Anh nhanh và không bao giờ sai, bạn chỉ cần làm đúng 2 bước lớn:</p>
			
				<ul className="list-square">
			
					<li>Bước 1: gom hết <strong>thời động cơ</strong>, <strong>phủ định</strong>, <strong>modal</strong>… vào <strong>bên trái</strong></li>
			
					<li>Bước 2: đặt <strong>động cơ chính</strong> (hoặc dạng của nó) vào <strong>bên phải</strong> cùng</li>
			
					<li className="list-none">→ Xong! Động cụm đã đúng cấu trúc 100%.</li>
			
				</ul>

				<p className="margin-y-50 text-center">

					<span className="highlight-238-padding-4-8 text-border1">

						<span className="highlight-255-padding-0-4">Thời động cơ, phủ định, trạng cơ…</span> đứng bên trái, <span className="highlight-255-padding-0-4">Động cơ chính</span> đứng bên phải

					</span>

				</p>

			<h3 className="margin-top-30 margin-bottom-50 text-center">1. Tại sao phải “thời động cơ bên trái – động cơ chính bên phải”?</h3>

			<p>Tiếng Việt: đã → đang → sẽ → không → bị → đánh</p>

			<p>Tiếng Anh: will + not + have + been + being + beaten</p>

			<p>Nếu bạn cố xếp từ trái sang phải như tiếng Việt, bạn sẽ ra “beaten being been have not will” → sai hoàn toàn.</p>

			<p>Giải pháp đơn giản nhất: <strong>luôn đặt động cơ chính làm mốc bên phải</strong>, <strong>còn lại gom hết vào bên trái</strong>.</p>

			<h3 className="margin-y-50 text-center">2. Hai bước sắp xếp cực nhanh (chỉ cần nhớ 1 lần)</h3>

			{/* =============================
					Bước 1: Gom hết các từ bổ nghĩa vào bên trái
			============================= */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Bước 1: Gom hết các từ bổ nghĩa vào bên trái</h3>

				<p className="margin-top-20">Bao gồm:</p>
				
					<ul className="list-square">
				
						<li>Modal (can, will, should, must…)</li>
				
						<li>Phủ định (not), nhấn mạnh (do/does/did)</li>
				
						<li>Perfect (have + V3)</li>

						<li>Continuous (be + V-ing)</li>
				
						<li>Passive (be + V3)</li>
				
					</ul>

			</div>

			{/* =============================
					Bước 2: Đặt động cơ chính (hoặc dạng V3/V-ing) vào bên phải cùng
			============================= */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Bước 2: Đặt động cơ chính (hoặc dạng V3/V-ing) vào bên phải cùng</h3>

				<p>→ Động cụm hoàn chỉnh.</p>

				<p>Ví dụ minh họa siêu nhanh</p>

				<p className="text-indent">Tiếng Việt: sẽ đã đang bị đánh</p>

					<ol>

						<li>Gom bên trái: will + have + been + being</li>

						<li>Đặt động cơ bên phải: beaten</li>

						<li className="list-none">→ <strong>will have been being beaten</strong></li>

					</ol>

				<p className="text-indent">Tiếng Việt: không thể đã hoàn thành xong công việc</p>

					<ol>

						<li>Gom bên trái: could + not + have</li>

						<li>Đặt động cơ bên phải: finished</li>

						<li className="list-none">→ <strong>could not have finished</strong></li>

					</ol>
				
				<p className="text-indent">Tiếng Việt: đang được xây</p>

					<ol>

						<li>Gom bên trái: be + being</li>

						<li>Đặt động cơ bên phải: built</li>

						<li className="list-none">→ <strong>is</strong>/<strong>are being built</strong></li>

					</ol>

			</div>

			<h3 className="margin-y-50 text-center">3. Thứ tự chuẩn các thời động cơ bên trái (nhớ 1 lần dùng mãi mãi)</h3>

			<p>Khi gom hết vào bên trái, chỉ cần sắp theo thứ tự cố định sau (từ trái sang phải):</p>

				<ol>

					<li>Modal: can, could, will, would, should, must, might…</li>

					<li>Perfect: have + V3</li>

					<li>Continuous: be + V-ing</li>

					<li>Passive: be + V3</li>

					<li>Động cơ chính</li>

					<li className="list-none">→ Viết tắt: <strong>M – P – C – P – Main verb</strong></li>

				</ol>

				<p className="margin-top-20 text-indent-whole">Phủ định “not” luôn đứng ngay sau modal hoặc thời động cơ đầu tiên.</p>

			<h3 className="margin-y-50 text-center">4. Lưu ý cực kỳ quan trọng</h3>

				<ul className="list-square">

					<li>Động cơ chính (hoặc dạng V3/V-ing của nó) luôn là từ cuối cùng bên phải.</li>

					<li>Nếu có phủ định → chèn “not” ngay sau thời động cơ đầu tiên.</li>

					<li>Với câu hỏi → chỉ cần đảo thời động cơ đầu tiên lên trước chủ ngữ (sau khi đã xếp xong cụm).</li>

					<li>Khi không chắc thứ tự → cứ gom hết thời động cơ vào bên trái trước, rồi sắp lại theo M-P-C-P → vẫn đúng 100%!</li>

				</ul>

			<h3 className="margin-y-50 text-center">5. Kết luận</h3>

			<p>Chỉ cần nhớ một nguyên tắc duy nhất:</p>

			<p><strong>Thời động cơ</strong> + <strong>phủ định</strong> + <strong>modal</strong> → gom hết <strong>bên trái</strong></p>

			<p><strong>Động cơ chính</strong> (hoặc dạng của nó) → đặt <strong>bên phải</strong> cùng</p>
			
			<p>Thực hành 10–15 cụm mỗi ngày theo 2 bước này, chỉ sau vài ngày bạn sẽ tự động xếp được mọi thì phức tạp nhất (future perfect continuous passive…) mà không cần tra bảng thì nữa!</p>

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