import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import MrBeeOsnTopic from '@/components/topic/MrBeeOsnTopic';
import ExternalLink from '@/components/icon/ExternalLink';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function AboutIndex(): React.JSX.Element {

	const postId = "AboutIndex";

	return (<>
		 
	<main className="image image4">

		<article>

			{/* =============================
					Mr.Bee Osn Topic
			============================= */}
			
				<MrBeeOsnTopic />

			{/* =============================
					About
			============================= */}

			<div className="container">

				<h1 className="margin-y-50 text-center">Accounting Bee</h1>

				<div className="header">

				{/* <h1 className="margin-y-50 text-center">About</h1> */}
			
					<ul className="list-border">

						<li>Welcome everyone!</li>

						<li>Đây là website <mark className="highlight-255-padding-0-4">Bookkeeping + English</mark> nhiều trang nội bộ đầu tiên của mình!</li>
					
					<li>Trang web này được xây dựng để học <mark className="highlight-255-padding-0-4">Bookkeeping & English</mark> cơ bản.</li>

					</ul>

				</div>
				
			</div>

			<div className="viewcounter">

				<div className="post-date no-margin">
					<span>October 28, 2025 · by 🐝Mr. Bee Osn ·</span>
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