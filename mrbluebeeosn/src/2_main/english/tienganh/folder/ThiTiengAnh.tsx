import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ThiTiengAnh(): React.JSX.Element {

	const postId = "ThiTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">12 Thời Hành Động Tiếng Anh – Cách Gọi Dễ Nhớ Với “Đang”, “Đã”, “Sẽ”</h1>

			{/* This is the content of English Learning Term. */}

			<p>Hệ thống thì trong tiếng Anh thường khiến người học cảm thấy phức tạp. Tuy nhiên, nếu ta dùng cách gọi gần gũi như “<strong>đang</strong>”, “<strong>đã</strong>”, và “<strong>sẽ</strong>”, việc ghi nhớ sẽ trở nên dễ dàng hơn. Bài viết này sẽ giúp bạn nắm chắc 12 thì cơ bản qua cách gọi thân thuộc.</p>

			{/* 1. Nhóm Hiện Tại (Present). */}

			<div className="margin-top-50 margin-bottom-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">1. Nhóm Hiện Tại (Present)</h3>

					<ul className="list-square">

						<li><strong>Hiện tại</strong> → S + V(s/es)</li>
						<li className="list-none">She plays piano every day.</li>

						<li className="margin-top-20"><strong>Hiện tại đang</strong> → S + am/is/are + V-ing</li>
						<li className="list-none">She is playing piano now.</li>

						<li className="margin-top-20"><strong>Hiện tại đã</strong> → S + have/has + V3/ed</li>
						<li className="list-none">She has played piano many times.</li>

						<li className="margin-top-20"><strong>Hiện tại đã và đang</strong> → S + have/has + been + V-ing</li>
						<li className="list-none">She has been playing piano for two hours.</li>

					</ul>

			</div>

			{/* 2. Nhóm Quá Khứ (Past). */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">2. Nhóm Quá Khứ (Past)</h3>

					<ul className="list-square">

						<li><strong>Quá khứ</strong> → S + V2/ed</li>
						<li className="list-none">She played piano yesterday.</li>

						<li className="margin-top-20"><strong>Quá khứ đang</strong> → S + was/were + V-ing</li>
						<li className="list-none">She was playing piano at 8 p.m. last night.</li>

						<li className="margin-top-20"><strong>Quá khứ đã</strong> → S + had + V3/ed</li>
						<li className="list-none">She had played piano before the guests arrived.</li>

						<li className="margin-top-20"><strong>Quá khứ đã và đang</strong> → S + had + been + V-ing</li>
						<li className="list-none">She had been playing piano for an hour before they came.</li>

					</ul>

			</div>

			{/* 3. Nhóm Tương Lai (Future). */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">3. Nhóm Tương Lai (Future)</h3>

					<ul className="list-square">

						<li><strong>Tương lai sẽ</strong> → S + will + V</li>
						<li className="list-none">She will play piano tomorrow.</li>

						<li className="margin-top-20"><strong>Tương lai sẽ đang</strong> → S + will + be + V-ing</li>
						<li className="list-none">She will be playing piano at 8 p.m. tomorrow.</li>

						<li className="margin-top-20"><strong>Tương lai sẽ đã</strong> → S + will + have + V3/ed</li>
						<li className="list-none">She will have played piano by 9 p.m.</li>

						<li className="margin-top-20"><strong>Tương lai sẽ đã và đang</strong> → S + will + have + been + V-ing</li>
						<li className="list-none">She will have been playing piano for two hours by 10 p.m.</li>

					</ul>

			</div>

			{/* . */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">🎯 Mẹo ghi nhớ nhanh</h3>

					<ul>

						<li><strong>hiện tại – quá khứ – tương lai sẽ</strong> = hành động chính</li>

						<li><strong>Đang</strong> = be + V-ing.</li>

						<li><strong>Đã</strong> = have/had + V3/ed.</li>

						<li><strong>Đã và đang</strong> = have/had + been + V-ing.</li>

						<li><strong>Sẽ</strong> = thêm will vào trước.</li>

					</ul>

			</div>

			{/* Kết luận */}

			<h3 className="margin-y-50 text-center">Kết luận</h3>

			<p>12 thì tiếng Anh sẽ không còn khó khăn nếu bạn biết cách gọi chúng bằng những cụm từ gần gũi như “<strong>hiện tại</strong>”, “<strong>quá khứ</strong>”, hay “<strong>tương lai</strong>” kết hợp “<strong>đang</strong> / <strong>đã</strong> / <strong>đã và đang</strong>”, bạn sẽ nắm chắc 12 thì tiếng Anh mà không bị rối.  </p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 24, 2025 · by 🐝Mr. Bee Osn and Copilot ·</span>
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