import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SuperWords2(): React.JSX.Element {

	const postId = "SuperWords2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Super Words
												
				<sup><HashLink smooth to="/tieng-anh/super-words-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-9">&nbsp;9&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">SIÊU TỪ LOẠI: Khi mệnh đề trở thành “bản nâng cấp” của danh từ, tính từ, trạng từ</h4>

			<p></p>

			<p></p>
			
			<p></p>


			{/* .  */}

			<h3 className="margin-y-50 text-center">Mở đầu: Chuyện những cái tên dài ngoằng</h3>

			<p></p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Ý tưởng cốt lõi: Từ loại thường vs. “Siêu” từ loại</h3>

			<p></p>

			


			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. SIÊU DANH TỪ / SUPER‑NOUN – Khi cả một câu đóng vai trò danh từ</h3>

			<p></p>

		
			

			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. SIÊU TÍNH TỪ / SUPER‑ADJECTIVE – Bổ nghĩa cho danh từ bằng nguyên một câu</h3>

			<p></p>
			
			

			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. SIÊU TRẠNG TỪ / SUPER‑ADVERB – Bổ nghĩa cho động từ, tính từ hoặc cả câu</h3>

			<p></p>

			

			{/* 5.  */}

			<h3 className="margin-y-50 text-center">5. Tóm tắt nhanh bằng bảng song ngữ</h3>

			<p></p>


			{/* 6.  */}

			<h3 className="margin-y-50 text-center">6. Bài tập siêu nhanh (kèm đáp án)</h3>

			<p></p>


			{/* 7.  */}

			<h3 className="margin-y-50 text-center">7. Lợi ích của cách gọi “SIÊU” này</h3>

			<p></p>


			{/* 8.  */}

			<h3 className="margin-y-50 text-center">8. Một lưu ý nhỏ (để không bị… “siêu” sai chỗ)</h3>

			<p></p>


			{/* 9.  */}

			<h3 className="margin-y-50 text-center">9. Lời kết: Hãy biến ngữ pháp thành cuộc chơi</h3>

			<p></p>

			

			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">📌 Nhớ nhanh:</h3>

			<p></p>

			<p></p>

			<p></p>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 03, 2026 · by DPSK and 🐝Mr. Bee Osn ·</span>
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