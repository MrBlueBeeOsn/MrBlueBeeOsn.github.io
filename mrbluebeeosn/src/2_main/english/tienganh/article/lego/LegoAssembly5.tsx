import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function LegoAssembly5(): React.JSX.Element {

	const postId = "LegoAssembly5";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Lego Assembly
												
				<sup><HashLink smooth to="/tieng-anh/lego-assembly-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-9">&nbsp;9&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Mô hình học ngữ pháp tiếng Anh qua lắp ghép</h4>

			<p></p>

			<p></p>
			
			<p></p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. </h3>

			<p></p>

			


			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. </h3>

			<p></p>

		
			

			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. </h3>

			<p></p>
			
			

			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. </h3>

			<p></p>

			

			{/* 5.  */}

			<h3 className="margin-y-50 text-center">5. </h3>

			<p></p>

			

			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center"></h3>

			<p></p>

			<p></p>

			<p></p>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 27, 2026 · by Claud and 🐝Mr. Bee Osn ·</span>
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