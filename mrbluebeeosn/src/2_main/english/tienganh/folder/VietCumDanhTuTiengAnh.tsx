import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VietCumDanhTuTiengAnh(): React.JSX.Element {

	const postId = "VietCumDanhTuTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Hướng Dẫn Viết Danh Cụm

				<sup><HashLink smooth to="/tieng-anh/huong-dan-viet-cum-danh-tu-tieng-anh">&nbsp;1&nbsp;</HashLink>
				</sup>
								
				<sup><HashLink smooth to="/tieng-anh/huong-dan-viet-cum-dong-tu-tieng-anh">&nbsp;2&nbsp;</HashLink>
				</sup>

			</h1>

			{/* This is the content of English Learning Term. */}

			<p>Khi học tiếng Anh, nhiều người Việt thường gặp khó khăn khi viết cụm danh từ (noun phrases) vì thói quen đặt tính từ trước danh từ trong tiếng Việt (ví dụ: “bông hoa đẹp”). Trong tiếng Anh, quy tắc ngược lại: danh từ chính luôn là “lõi”, còn các tính từ, mạo từ (a/an/the), và các bổ ngữ khác thường đứng trước danh từ chính. Để viết cụm danh từ tiếng Anh một cách tự nhiên và đúng ngữ pháp, bạn có thể áp dụng nguyên tắc "<strong>Danh Cơ viết trước</strong>, <strong>Tính Cơ viết sau</strong>" — nghĩa là suy nghĩ và viết theo thứ tự từ phải sang trái. Phương pháp này giúp bạn tránh dịch máy móc và tạo ra câu tiếng Anh chuẩn xác ngay từ đầu. Bài viết này sẽ hướng dẫn chi tiết cách thực hiện.</p>

				<p className="margin-y-50 text-center">

					<span className="highlight-238-padding-4-8 text-border1">

						<span className="highlight-255-padding-0-4">Danh Cơ</span> Viết Trước, <span className="highlight-255-padding-0-4">Tính Cơ</span> Viết Sau

					</span>

				</p>

			<h3 className="margin-top-30 margin-bottom-50 text-center">1. Tại sao phải suy nghĩ từ phải sang trái?</h3>
			
			<p>Trong tiếng Anh, danh từ chính (head noun) luôn nằm ở cuối cụm danh từ, còn các thành phần bổ nghĩa (tính từ, mạo từ, số từ, danh từ ghép…) đứng trước nó.</p>

			<p className="margin-top-20">Ví dụ:</p>

				<ul className="list-square">

					<li>Tiếng Việt: một bông hoa đỏ đẹp lớn</li>

					<li>Tiếng Anh: a large beautiful red flower.</li>

				</ul>

			<p className="margin-top-20">Nếu bạn suy nghĩ từ trái sang phải (như tiếng Việt), bạn sẽ dễ viết sai thành “a flower red beautiful large”.</p>

			<p>Do đó, cách hiệu quả nhất là:</p>

				<ul className="list-square">

					<li><strong>Bước 1</strong>: Viết <strong>danh từ</strong> chính trước (phần bên phải nhất).</li>

					<li><strong>Bước 2</strong>: Bổ sung các <strong>tính từ</strong>, <strong>mạo từ</strong>… từ phải sang trái (tức là thêm dần vào phía trước danh từ chính).</li>

				</ul>

			<h3 className="margin-y-50 text-center">2. Các bước viết cụm danh từ theo nguyên tắc “từ phải sang trái”</h3>

			{/* =============================
					Bước 1: Xác định danh từ chính
			============================= */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Bước 1: Viết danh từ chính trước (head noun)</h3>

				<p>Đây là từ cốt lõi mà bạn muốn nói đến.</p>
				
				<p className="margin-top-20">Ví dụ: Bạn muốn nói “ngôi nhà” → viết trước: <strong>house</strong></p>

			</div>

			{/* =============================
					Bước 2: Bổ sung các thành phần từ phải sang trái
			============================= */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Bước 2: Bổ sung các thành phần từ phải sang trái</h3>

				<p>Thêm dần các tính từ, danh từ ghép, số từ… vào phía trước danh từ chính theo thứ tự ngược lại với tiếng Việt.</p>

					<ul className="list-square">

						<li>Muốn thêm “đá” → <strong>stone</strong> house</li>

						<li>Muốn thêm “cũ” → <strong>old</strong> stone house</li>

						<li>Muốn thêm “đẹp” → <strong>beautiful</strong> old stone house</li>

						<li>Muốn thêm mạo từ “một ngôi” → <strong>a</strong> beautiful old stone house</li>

					</ul>

				<p className="margin-top-20">Ví dụ minh họa chi tiết</p>
				
				<p className="text-indent">Tiếng Việt: một chiếc bàn gỗ lớn màu nâu</p>

				<p className="text-indent">Cách viết từ phải sang trái:</p>

					<ol>

						<li>Viết danh từ chính: <strong>table</strong></li>

						<li>Thêm chất liệu (gỗ): <strong>wooden</strong> table</li>

						<li>Thêm kích thước (lớn): <strong>large</strong> wooden table</li>

						<li>Thêm màu sắc (nâu): <strong>brown</strong> large wooden table</li>

						<li>Thêm mạo từ: <strong>a</strong> brown large wooden table</li>

					</ol>

				<p className="margin-y-20 text-indent-whole">Kết quả cuối cùng: a large brown wooden table (thường điều chỉnh thứ tự tính từ theo quy tắc tiếng Anh: size → color → material)</p>

				<p className="margin-top-20">Một ví dụ khác</p>
				
				<p className="text-indent">Tiếng Việt: ba con mèo đen nhỏ dễ thương</p>

				<p className="text-indent">Cách viết từ phải sang trái:</p>

					<ol>

						<li><strong>cat</strong></li>

						<li><strong>black</strong> cat</li>

						<li><strong>small</strong> black cat</li>

						<li><strong>cute</strong> small black cat</li>

						<li><strong>three</strong> cute small black cats</li>

					</ol>

				<p className="margin-top-20 text-indent-whole">Kết quả: three cute small black cats</p>

			</div>

			<h3 className="margin-y-50 text-center">3. Quy tắc thứ tự tính từ trong tiếng Anh (OSASCOMP)</h3>

			<p>Khi đã thêm các tính từ vào phía trước danh từ chính, bạn cần sắp xếp chúng theo thứ tự chuẩn của tiếng Anh (từ trái sang phải):</p>

				<ol>

					<li><strong>Opinion</strong> (ý kiến): beautiful, ugly, cute, lovely…</li>

					<li><strong>Size</strong> (kích thước): big, small, large, tiny…</li>

					<li><strong>Age</strong> (tuổi): old, young, new…</li>

					<li><strong>Shape</strong> (hình dạng): round, square…</li>

					<li><strong>Color</strong> (màu sắc): red, blue, black…</li>

					<li><strong>Origin</strong> (nguồn gốc): Vietnamese, French…</li>

					<li><strong>Material</strong> (chất liệu): wooden, golden, silk…</li>

					<li><strong>Purpose</strong> (mục đích): cooking (pan), racing (car)…</li>

				</ol>

			<p className="margin-top-20">Ví dụ: một chiếc xe hơi thể thao đỏ nhỏ đẹp</p>

			<p className="text-indent">Viết từ phải sang trái:</p>

				<ul className="list-square">

					<li>→ <strong>car</strong></li>

					<li>→ <strong>sports</strong> car</li>

					<li>→ <strong>red</strong> sports car</li>

					<li>→ <strong>small</strong> red sports car</li>

					<li>→ <strong>beautiful</strong> small red sports car</li>

					<li>→ <strong>a</strong> beautiful small red sports car</li>

				</ul>

			<h3 className="margin-y-50 text-center">4. Lưu ý quan trọng khi áp dụng</h3>

				<ul className="list-square">

					<li>Luôn bắt đầu bằng danh từ chính để não bạn tập trung vào “cái gì là trung tâm”.</li>

					<li>Khi thêm tính từ, hãy nghĩ theo tiếng Việt (tính từ đứng sau) rồi đảo ngược lại để đặt trước danh từ.</li>

					<li>Với mạo từ (a/an/the) và số từ (one, two, three…), luôn thêm chúng ở bước cuối cùng (vị trí xa nhất bên trái).</li>

					<li>Thực hành thường xuyên sẽ giúp bạn tự động suy nghĩ theo hướng từ phải sang trái mà không cần viết từng bước.</li>

				</ul>

			<h3 className="margin-y-50 text-center">5. Kết luận</h3>
			
			<p>Phương pháp “<strong>danh từ viết trước</strong>, <strong>tính từ viết sau</strong>” (tức suy nghĩ và viết từ phải sang trái) là cách hiệu quả nhất để người Việt viết cụm danh từ tiếng Anh một cách tự nhiên, đúng ngữ pháp và nhanh chóng. Thay vì cố gắng dịch từng từ từ trái sang phải, hãy bắt đầu từ danh từ chính, rồi bổ sung dần các tính từ, mạo từ vào phía trước. Chỉ cần thực hành 10–20 cụm mỗi ngày, bạn sẽ thấy mình viết tiếng Anh chuẩn hơn rất nhiều!</p>

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