import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SuperWords4(): React.JSX.Element {

	const postId = "SuperWords4";

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

			<h4 className="margin-bottom-30 text-center">Siêu Danh Cơ, Siêu Tính Cơ Và Siêu Trạng Cơ: Một Cách Nhìn Mới Về Mệnh Đề Tiếng Anh</h4>

			<p></p>

			<p></p>
			
			<p></p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Ngôn Ngữ Luôn Có Xu Hướng Mở Rộng</h3>

			<p></p>



			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Quy Tắc Vàng Khi Nhìn Một Mệnh Đề</h3>

			<p></p>


			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. Siêu Danh Cơ (Noun Clause)</h3>

			<p></p>

			


			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. Siêu Tính Cơ (Adjective Clause)</h3>

			<p></p>

		
			

			{/* 5.  */}

			<h3 className="margin-y-50 text-center">5. Siêu Trạng Cơ (Adverb Clause)</h3>

			<p></p>
			
			

			{/* 6.  */}

			<h3 className="margin-y-50 text-center">6. Công Thức Ba Tầng Của Tiếng Anh</h3>

			<p></p>

			

			{/* 7.  */}

			<h3 className="margin-y-50 text-center">7. Tại Sao Cách Nhìn Này Hiệu Quả?</h3>

			<p></p>

			

			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">Kết Luận</h3>

			<p></p>

			<p></p>

			<p></p>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 04, 2026 · by GPT and 🐝Mr. Bee Osn ·</span>
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