import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SuperWords3(): React.JSX.Element {

	const postId = "SuperWords3";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#functional-thinking-terms"><mark className="highlight-tertiary-padding-4-8">Functional Thinking</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">[Siêu Động Cơ]
												
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

			<h4 className="margin-bottom-30 text-center">Siêu Danh Cơ, Siêu Tính Cơ, Siêu [Trạng Cơ] – Cách Gọi Mới Giúp Học Câu Con Tiếng Anh Dễ Hơn</h4>

			<p></p>

			<p></p>
			
			<p></p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Tại sao cần cách gọi “Siêu”?</h3>

			<p></p>
			
			

			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Giải Thích Chi Tiết</h3>

			<p></p>


			<h4 className="margin-y-40">1. Siêu [Danh Cơ] (Super Noun / Noun Clause)</h4>
					
			<p className="text-indent-whole"></p>


			<h4 className="margin-y-40">2. Siêu [Tính Cơ] (Super Adjective / Adjective Clause / Relative Clause)</h4>
					
			<p className="text-indent-whole"></p>


			<h4 className="margin-y-40">3. Siêu [Trạng Cơ] (Super Adverb / Adverb Clause)</h4>
					
			<p className="text-indent-whole"></p>

			

			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. Lợi ích của cách gọi Siêu [Danh Cơ] – Siêu [Tính Cơ] – Siêu Trạng Cơ</h3>

			<p></p>

			

			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">Kết luận</h3>

			<p></p>

			<p></p>

			<p></p>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 03, 2026 · by Grok and 🐝Mr. Bee Osn ·</span>
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