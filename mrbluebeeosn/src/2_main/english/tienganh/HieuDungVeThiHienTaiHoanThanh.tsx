import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function HieuDungVeThiHienTaiHoanThanh(): React.JSX.Element {

	const postId = "HieuDungVeThiHienTaiHoanThanh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Hiểu Đúng Về Thì Hiện Tại Hoàn Thành (Present Perfect)</h1>

			<p>Bạn đã bao giờ tự hỏi: "Thì hiện tại hoàn thành có phải dùng để nói về hành động chưa hoàn thành trong quá khứ không?" Đây là một câu hỏi rất phổ biến của người học tiếng Anh, và câu trả lời là <strong>đúng một phần</strong>, nhưng chưa đầy đủ. Hãy cùng mình khám phá sâu hơn về thì này để nắm rõ và dùng chính xác nhé!</p>

			<h3 className="margin-y-50 text-center">Thì Hiện Tại Hoàn Thành Là Gì?</h3>

			<p>Thì hiện tại hoàn thành được cấu tạo bởi <strong>have/has</strong> + <strong>động từ ở dạng past participle</strong> (V3).</p>

			<p>Ví dụ:</p>

				<ul className="list-square">

					<li>I <strong>have just finished</strong> writing this article.</li>

					<li>She <strong>has lived</strong> in Saigon since 2015.</li>

				</ul>

			<p className="margin-top-20">Khác với thì quá khứ đơn (Past Simple), thì hiện tại hoàn thành <strong>luôn có sự liên kết với hiện tại</strong>. Nó không chỉ kể về quá khứ mà còn nhấn mạnh hậu quả hoặc sự tiếp diễn đến thời điểm bây giờ.</p>

			<h3 className="margin-y-50 text-center">Các Ý Nghĩa Chính Của Thì Hiện Tại Hoàn Thành</h3>

			{/* 1. Hành động bắt đầu trong quá khứ và vẫn tiếp diễn đến hiện tại */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">1. Hành động bắt đầu trong quá khứ và vẫn tiếp diễn đến hiện tại</h3>

				<p>Đây chính là trường hợp "hành động chưa hoàn thành" mà nhiều bạn hay nghĩ đến.</p>

					<ul className="list-square">

						<li>I <strong>have worked</strong> at this company for 5 years.</li>
						<li className="list-none">→ Bắt đầu làm việc 5 năm trước → vẫn đang làm việc bây giờ → hành động chưa kết thúc.</li>

						<li className="margin-top-20">Thường đi với <strong>for</strong> (khoảng thời gian) hoặc <strong>since</strong> (mốc thời gian).</li>

					</ul>

			</div>

			{/* 2. Hành động đã hoàn thành trong quá khứ nhưng kết quả vẫn ảnh hưởng đến hiện tại */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">2. Hành động đã hoàn thành trong quá khứ nhưng kết quả vẫn ảnh hưởng đến hiện tại</h3>

				<p>Ở đây, hành động <strong>đã xong</strong>, nhưng hậu quả còn rõ ràng ở hiện tại, và không đề cập thời gian cụ thể.</p>

					<ul className="list-square">

						<li>I <strong>have lost</strong> my wallet.</li>
						<li className="list-none">→ Đã làm mất ví (không nói lúc nào) → hiện tại vẫn không có ví → cần tìm hoặc làm lại.</li>

					</ul>

				<p className="margin-top-20">Nếu nói thời gian cụ thể:</p>

					<ul className="list-square">

						<li>I lost my wallet yesterday</li>
						<li className="list-none">→ dùng Past Simple.</li>

					</ul>

			</div>

			{/* 3. Nói về kinh nghiệm cá nhân đến thời điểm hiện tại */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">3. Nói về kinh nghiệm cá nhân đến thời điểm hiện tại</h3>

				<ul className="list-square">

						<li>He <strong>has visited</strong> Japan three times.</li>
						<li className="list-none">→ Trong cuộc đời đến nay, anh ấy đã đến Nhật 3 lần.</li>

						<li className="margin-top-20">Thường dùng với <Link to="/vocabulary/ever-1">ever</Link>, <Link to="/vocabulary/never-1">never</Link>, already, yet, just, recently.</li>

					</ul>
			</div>

				<h3 className="margin-y-50 text-center">So Sánh Nhanh Với Thì Quá Khứ Đơn</h3>

				<table className="margin-y-50">
					<thead>
						<tr>
							<th>Thì Hiện Tại Hoàn Thành</th>
							<th>Thì Quá Khứ Đơn</th>
						</tr>
					</thead>

					<tbody>

						<tr>
								<td>Liên quan đến hiện tại</td>
								<td>Chỉ xảy ra và kết thúc trong quá khứ</td>
						</tr>

						<tr>
								<td>Không có thời gian cụ thể (hoặc for/since)</td>
								<td>Có thời gian cụ thể (yesterday, in 2020)</td>
						</tr>

						<tr>
								<td>I have seen that movie. (và giờ mình biết nội dung)</td>
								<td>I saw that movie last week. (chỉ kể sự kiện)</td>
						</tr>
					</tbody>
				</table>

			<h3 className="margin-y-50 text-center">Mẹo Nhớ Nhanh</h3>
			
				<ul className="list-square">
			
					<li>Nếu bạn đang nghĩ về <strong>hậu quả hiện tại</strong> hoặc <strong>sự tiếp diễn đến bây giờ</strong> → dùng Present Perfect.</li>
			
					<li>Nếu chỉ kể chuyện quá khứ như một sự kiện đã xong → dùng Past Simple.</li>
			
				</ul>

			<p className="margin-top-20">Thì hiện tại hoàn thành không khó, chỉ cần luyện tập là sẽ quen thôi! Hãy thử viết vài câu về bản thân bằng thì này xem sao:</p>
			
				<ul className="list-square">
			
					<li>Where have you lived?</li>
			
					<li>What have you eaten today?</li>
			
					<li>Have you ever traveled abroad?</li>
			
				</ul>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 28, 2025 · by 🐝Mr. Bee Osn and Grok ·</span>
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