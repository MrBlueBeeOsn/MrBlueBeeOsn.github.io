import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VietCumDongTuTiengAnh(): React.JSX.Element {

	const postId = "VietCumDongTuTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Hướng Dẫn Viết Động Cụm

				<sup><HashLink smooth to="/tieng-anh/huong-dan-viet-cum-danh-tu-tieng-anh">&nbsp;1&nbsp;</HashLink>
				</sup>
				
				<sup><HashLink smooth to="/tieng-anh/huong-dan-viet-cum-dong-tu-tieng-anh">&nbsp;2&nbsp;</HashLink>
				</sup>

			</h1>

			{/* This is the content of English Learning Term. */}

			<p>Khi học tiếng Anh, nhiều người Việt thường gặp khó khăn khi viết động cụm (verb phrases) có nhiều trợ động cơ vì trong tiếng Việt ta hay nói/think theo thứ tự “trợ động cơ + động cơ chính” (đã đang ăn cơm). Trong tiếng Anh, thứ tự viết lại giống hệt cách ta nói trong đầu: <strong>trợ động cơ đứng trước</strong> → <strong>động cơ chính đứng sau</strong> (have been eating).</p>

			<p>Vì vậy, để viết đúng và nhanh nhất, bạn chỉ cần <strong>nghĩ theo đúng thứ tự tiếng Việt</strong> (từ trái sang phải), nhưng <strong>khi viết/bổ sung từng lớp thì làm từ phải sang trái</strong> – tức là luôn bắt đầu bằng động cơ chính trước, rồi lần lượt thêm trợ động cơ vào phía trước nó. Phương pháp này giúp bạn không bao giờ bị rối thứ tự dù động cụm có dài bao nhiêu lớp đi nữa.</p>

				<p className="margin-y-50 text-center">

					<span className="highlight-238-padding-4-8 text-border1">

						<span className="highlight-255-padding-0-4">Động Cơ</span> Viết Trước, <span className="highlight-255-padding-0-4">Trợ Động Cơ</span> Viết Sau

					</span>

				</p>

			<h3 className="margin-top-30 margin-bottom-50 text-center">1. Tại sao phải “viết từ phải sang trái” dù suy nghĩ từ trái sang phải?</h3>

				<ul className="list-square">

					<li><strong>Trong đầu bạn nghĩ</strong>: đã → đang → ăn → cơm → have been eating rice (đúng thứ tự tiếng Anh luôn!).</li>

					<li><strong>Vấn đề xảy ra khi bạn cố viết liền một lần</strong>: bạn dễ quên lớp nào trước lớp nào sau, nhất là khi có 3–4 trợ động cơ.</li>

					<li><strong>Giải pháp</strong>: Luôn bắt buộc mình viết động cơ chính trước (phần bên phải nhất), rồi bổ sung từng trợ động cơ một từ phía trước nó (từ phải sang trái). Như vậy dù bạn nghĩ theo kiểu tiếng Việt bao nhiêu lần đi nữa, kết quả viết ra vẫn luôn đúng 100%.</li>

				</ul>

			<p className="margin-top-20">Ví dụ: “đã đang ăn cơm”</p>

				<ul className="list-square">

					<li>→ Bước 1 (viết trước): <strong>eating</strong></li>

					<li>→ Bước 2 (bổ sung “đang”): <strong>been</strong> eating</li>

					<li>→ Bước 3 (bổ sung “đã”): <strong>have</strong> been eating</li>

					<li>→ Hoàn thành: <strong>have been eating rice</strong> (đúng thứ tự, không cần chỉnh lại gì)</li>

				</ul>

			<h3 className="margin-y-50 text-center">2. Các bước viết động cụm theo nguyên tắc “động cơ viết trước”</h3>

			{/* =============================
					Bước 1: Viết động cơ chính trước (main verb)
			============================= */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Bước 1: Viết động cơ chính trước (main verb)</h3>

				<p>Đây là hành động hoặc trạng thái chính bạn muốn diễn đạt.</p>
				
				<p className="margin-top-20">Ví dụ: “học” → viết trước: <strong>study</strong> hoặc <strong>studying</strong> (nếu cần dạng -ing)</p>

			</div>

			{/* =============================
					Bước 2: Bổ sung từng lớp trợ động cơ từ phải sang trái
			============================= */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Bước 2: Bổ sung từng lớp trợ động cơ từ phải sang trái</h3>

				<p>Thêm dần trợ động cơ, phủ định, trạng cơ… vào phía trước động cơ chính.</p>

					<ul className="list-square">

						<li>Muốn thêm “đang”: <strong>been</strong> studying</li>

						<li>Muốn thêm “đã”: <strong>have</strong> been studying</li>

						<li>Muốn phủ định: <strong>not</strong> have been studying</li>

						<li>Muốn thêm “sẽ”: <strong>will</strong> not have been studying</li>

					</ul>

				<p className="margin-top-20">Ví dụ minh họa chi tiết</p>
				
				<p className="text-indent">Tiếng Việt: sẽ đã đang học tiếng Anh</p>

				<p className="text-indent">Cách viết từ phải sang trái:</p>

					<ol>

						<li>Động cơ chính: <strong>beat</strong></li>

						<li>Thêm bị động: <strong>beaten</strong></li>

						<li>Thêm “đang bị”: <strong>being</strong> beaten</li>

						<li>Thêm “đã đang bị”: <strong>been</strong> being beaten</li>

						<li>Thêm “đã”: <strong>have</strong> been being beaten</li>

						<li>Thêm “sẽ”: <strong>will</strong> have been beaten</li>

					</ol>

				<p className="margin-y-20 text-indent-whole">Kết quả: will have been being beaten (hoàn hảo tiếp diễn tương lai bị động)</p>

				<p className="margin-top-20">Một ví dụ khác</p>
				
				<p className="text-indent">Tiếng Việt: không thể đã hoàn thành xong</p>

				<p className="text-indent">Cách viết từ phải sang trái:</p>

					<ol>

						<li><strong>finish</strong></li>

						<li><strong>finished</strong> hoặc <strong>done</strong></li>

						<li><strong>have</strong> finished</li>

						<li><strong>not</strong> have finished</li>

						<li><strong>could</strong> not have finished</li>

					</ol>

			</div>

			<h3 className="margin-y-50 text-center">3. Thứ tự trợ động cơ chuẩn trong tiếng Anh (Modal – Perfect – Continuous – Passive)</h3>

			<p>Chỉ cần nhớ 4 lớp từ trái sang phải:</p>

				<ol>

					<li><strong>Modal</strong> (tình thái): can, could, will, would, should, must…</li>

					<li><strong>Perfect</strong> (hoàn thành): have + V3</li>

					<li><strong>Continuous</strong> (tiếp diễn): be + V-ing</li>

					<li><strong>Passive</strong> (bị động): be + V3</li>

					<li><strong>Main verb</strong> (động cơ chính)</li>

				</ol>

				<p className="margin-top-20 text-indent-whole">Khi viết từ phải sang trái, bạn chỉ việc thêm từng lớp đúng thứ tự trên là xong.</p>

			<h3 className="margin-y-50 text-center">4. Lưu ý quan trọng khi áp dụng</h3>

				<ul className="list-square">

					<li>Trong đầu vẫn nghĩ bình thường theo tiếng Việt (từ trái sang phải) → rất tự nhiên.</li>

					<li>Khi đặt bút (hoặc gõ phím) thì <strong>luôn bắt đầu bằng động cơ chính trước</strong> → <strong>rồi thêm từng trợ động cơ vào phía trước</strong> → đảm bảo không sai thứ tự.</li>

					<li>Phủ định “not” luôn đứng ngay sau trợ động cơ đầu tiên (hoặc sau modal).</li>

					<li>Với câu hỏi chỉ cần đảo trợ động cơ đầu tiên lên trước chủ ngữ sau khi đã xây xong cụm.</li>

					<li>Thực hành 10–20 cụm mỗi ngày, bạn sẽ tự động viết được mọi thì phức tạp mà không cần suy nghĩ nhiều.</li>

				</ul>

			<h3 className="margin-y-50 text-center">5. Kết luận</h3>
			
			<p>Dù trong đầu bạn nghĩ “đã đang sẽ không thể…” theo kiểu tiếng Việt (từ trái sang phải), chỉ cần <strong>luôn viết động cơ chính trước</strong>, <strong>rồi bổ sung từng trợ động cơ một vào phía trước</strong> (tức viết từ phải sang trái), bạn sẽ luôn có động cụm tiếng Anh đúng thứ tự 100%, dù dài bao nhiêu lớp đi nữa. Đây chính là mẹo hay nhất dành riêng cho người Việt khi làm việc với thì tiếng Anh!</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>November 19, 2025 · by Grok and 🐝Mr. Bee Osn  ·</span>
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