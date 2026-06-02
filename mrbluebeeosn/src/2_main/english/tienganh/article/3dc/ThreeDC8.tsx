import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ThreeDC8(): React.ReactElement {

	const postId = "ThreeDC8";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Three DC
												
				<sup><HashLink smooth to="/tieng-anh/three-dc-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-9">&nbsp;9&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Bộ 3 Mệnh Đề Trong Tiếng Anh: Hướng Dẫn Đầy Đủ Để Thoát Khỏi Câu Đơn</h4>

			<p></p>

			<p></p>
			
			<p></p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Ba loại mệnh đề là gì</h3>

			<p></p>

			


			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Mệnh đề danh từ</h3>

			<p></p>

		
			

			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. Mệnh đề tính từ</h3>

			<p></p>
			
			

			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. Mệnh đề trạng từ</h3>

			<p></p>

			


			{/* 5.  */}

			<h3 className="margin-y-50 text-center">5. Cách phân biệt trong 5 giây</h3>

			<p></p>

			


			{/* 6.  */}

			<h3 className="margin-y-50 text-center">6. Từ đúng ngữ pháp đến tự nhiên</h3>

			<p></p>

		
			

			{/* 7.  */}

			<h3 className="margin-y-50 text-center">7. Lộ trình 7 ngày làm chủ</h3>

			<p></p>
			
			

			{/* 8.  */}

			<h3 className="margin-y-50 text-center">8. 30 câu mẫu nên thuộc lòng</h3>

			<p></p>

			<h4 className="margin-y-40">Noun clause</h4>
					
			<p className="text-indent-whole"></p>


			<h4 className="margin-y-40">Adjective clause</h4>
					
			<p className="text-indent-whole"></p>


			<h4 className="margin-y-40">Adverb clause</h4>
					
			<p className="text-indent-whole"></p>

			

			{/* 9.  */}

			<h3 className="margin-y-50 text-center">9. Sai lầm phổ biến của người Việt</h3>

			<p></p>

			

			{/* 10. */}

			<h3 className="margin-y-50 text-center">10. Kết luận</h3>

			<p></p>

			<p></p>

			<p></p>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 03, 2026 · by Meta AI and 🐝Mr. Bee Osn ·</span>
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