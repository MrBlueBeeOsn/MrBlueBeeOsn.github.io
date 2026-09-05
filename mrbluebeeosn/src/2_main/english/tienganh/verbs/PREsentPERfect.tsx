import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PREsentPERfect(): React.JSX.Element {

	const postId = "PREsentPERfect";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#verbs-terms"><mark className="highlight-tertiary-padding-4-8">VERBS</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">PREsent PERfect</h1>					

			<h4 className="margin-bottom-30 text-center">Hiểu Đúng Về 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành</h4>

			<p>Bạn đã bao giờ tự hỏi: "📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành có phải dùng để nói về hành động chưa hoàn thành trong quá khứ không?" Đây là một câu hỏi rất phổ biến của người học tiếng Anh, và câu trả lời là <strong>đúng một phần</strong>, nhưng chưa đầy đủ. Hãy cùng mình khám phá sâu hơn về thời này để nắm rõ và dùng chính xác nhé!</p>

			<h3 className="margin-y-50 text-center">📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành Là Gì?</h3>

			<p>📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành được cấu tạo bởi <strong>have/has</strong> + <strong>động cơ ở dạng AST PARticiple</strong> (V3).</p>

			<p className="text-indent-whole">Ví dụ:</p>

				<ul className="list-square">

					<li>i <strong>have JUST FINished</strong> WRIting this ARticle.</li>
					<li className="margin-bottom-20 list-none">Tôi <strong>vừa mới viết xong</strong> bài báo này.</li>

					<li className="margin-bottom-20 list-none">Từ just được dùng để nhấn mạnh một hành động vừa mới xảy ra ngay trước thời điểm nói.</li>

					<li>she <strong>has LIVED</strong> in saiGON since TWENty fifTEEN.</li>
					<li className="margin-bottom-20 list-none">Cô ấy <strong>đã sống</strong> ở Sài Gòn từ năm 2015.</li>
					
					<li className="margin-bottom-20 list-none">Từ since kết hợp với một mốc thời gian cụ thể (2015) dùng để chỉ hành động bắt đầu từ quá khứ và vẫn đang tiếp tục kéo dài đến hiện tại.</li>

				</ul>

			<p className="margin-top-20">Khác với ⏳ Thời Gian Hành Động ở Quá Khứ Đơn (Past Simple), 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành <strong>luôn có sự liên kết với hiện tại</strong>. Nó không chỉ kể về quá khứ mà còn nhấn mạnh hậu quả hoặc sự tiếp diễn đến thời điểm bây giờ.</p>

			<h3 className="margin-y-50 text-center">Các Ý Nghĩa Chính Của 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành</h3>

			{/* 1. Hành động bắt đầu trong quá khứ và vẫn tiếp diễn đến hiện tại */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">1. Hành động bắt đầu trong quá khứ và vẫn tiếp diễn đến hiện tại</h3>

				<p>Đây chính là trường hợp "hành động chưa hoàn thành" mà nhiều bạn hay nghĩ đến.</p>

					<ul className="list-square">

						<li>i <strong>have WORKED</strong> at this COMpany for FIVE YEARS.</li>
						<li className="margin-bottom-20 list-none">Tôi <strong>đã làm việc</strong> ở công ty này được 5 năm (rồi).</li>

						<li className="list-none">Câu này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với từ for để chỉ một hành động bắt đầu trong quá khứ và vẫn tiếp tục kéo dài đến thời điểm hiện tại (bây giờ tôi vẫn đang làm ở công ty này).</li>

						<li className="list-none">→ Bắt đầu làm việc 5 năm trước → vẫn đang làm việc bây giờ → hành động chưa kết thúc.</li>

						<li className="list-none">Thường đi với <strong>for</strong> (khoảng thời gian) hoặc <strong>since</strong> (mốc thời gian).</li>

					</ul>

			</div>

			{/* 2. Hành động đã hoàn thành trong quá khứ nhưng kết quả vẫn ảnh hưởng đến hiện tại */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">2. Hành động đã hoàn thành trong quá khứ nhưng kết quả vẫn ảnh hưởng đến hiện tại</h3>

				<p>Ở đây, hành động <strong>đã xong</strong>, nhưng hậu quả còn rõ ràng ở hiện tại, và không đề cập thời gian cụ thể.</p>

					<ul className="list-square">

						<li>i <strong>have LOST</strong> my WALlet.</li>
						<li className="margin-bottom-20 list-none">Tôi <strong>đã làm mất</strong> ví tiền của mình (rồi).</li>

						<li className="list-none">Nhấn mạnh kết quả ở hiện tại (bây giờ tôi vẫn chưa tìm lại được ví).</li>
						<li className="list-none">→ Đã làm mất ví (không nói lúc nào) → hiện tại vẫn không có ví → cần tìm hoặc làm lại.</li>

					</ul>

				<p className="margin-top-20">Nếu nói thời gian cụ thể:</p>

					<ul className="list-square">

						<li>i <strong>LOST</strong> my WALlet YESterday.</li>
						<li className="margin-bottom-20 list-none">Tôi <strong>đã làm mất</strong> ví tiền của mình vào ngày hôm qua.</li>
						
						<li className="list-none">Nhấn mạnh hành động mất ví xảy ra và kết thúc vào thời điểm cụ thể trong quá khứ (YESterday).</li>
						<li className="list-none">→ dùng PAST SIMple.</li>

					</ul>

			</div>

			{/* 3. Nói về kinh nghiệm cá nhân đến thời điểm hiện tại */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">3. Nói về kinh nghiệm cá nhân đến thời điểm hiện tại</h3>

				<ul className="list-square">

						<li>he <strong>has VISited</strong> jaPAN THREE TIMES.</li>
						<li className="margin-bottom-20 list-none">Anh ấy <strong>đã đến thăm</strong> Nhật Bản ba lần rồi.</li>

						<li className="list-none">→ Trong cuộc đời đến nay, anh ấy đã đến Nhật 3 lần.</li>

						<li className="margin-top-20">Thường dùng với <Link to="/vocabulary/EVer-1">EVer</Link>, <Link to="/vocabulary/NEVer-1">NEVer</Link>, alREAdy, YET, JUST, REcently..</li>

					</ul>
			</div>

				<h3 className="margin-y-50 text-center">So Sánh Nhanh Với ⏳ Thời Gian Hành Động ở Quá Khứ Đơn</h3>

				<table className="margin-y-50">
					<thead>
						<tr>
							<th>📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành</th>
							<th>⏳ Thời Gian Hành Động ở Quá Khứ Đơn</th>
						</tr>
					</thead>

					<tbody>

						<tr>
								<td>
									i <strong>have SEEN</strong> that MOvie.<br/>
									Tôi <strong>đã xem</strong> bộ phim đó rồi.<br/><br/>
									
									(và giờ mình biết nội dung)
								</td>
								<td>
									I <strong>SAW</strong> that MOvie LAST WEEK.<br/>
									Tôi <strong>đã xem</strong> bộ phim đó vào tuần trước.<br/><br/>

									(chỉ kể sự kiện)
								</td>
						</tr>

						<tr>
								<td>Liên quan đến hiện tại</td>
								<td>Chỉ xảy ra và kết thúc trong quá khứ</td>
						</tr>

						<tr>
								<td>Không có thời gian cụ thể (hoặc <strong>for</strong>/<strong>since</strong>)</td>
								<td>Có thời gian cụ thể (<strong>YESterday</strong>, <strong>in 2020</strong>)</td>
						</tr>

					</tbody>
				</table>

			<h3 className="margin-y-50 text-center">Mẹo Nhớ Nhanh</h3>

			<p>→ Dùng <strong>PREsent PERfect</strong>: Nếu bạn đang nghĩ về hậu quả hiện tại hoặc sự tiếp diễn đến bây giờ.</p>

			<p>→ Dùng <strong>PAST SIMple</strong>: Nếu chỉ kể chuyện quá khứ như một sự kiện đã xong.</p>

			<p className="margin-top-20">📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành không khó, chỉ cần luyện tập là sẽ quen thôi! Hãy thử viết vài câu về bản thân bằng thời này xem sao:</p>
			
				<ul className="list-square">
			
					<li>WHERE have you LIVED?</li>
					<li className="margin-bottom-20 list-none">Bạn đã từng sống ở đâu? / Bạn đã sinh sống ở những đâu rồi?</li>
			
					<li>WHAT have you EAten toDAY?</li>
					<li className="margin-bottom-20 list-none">Hôm nay bạn đã ăn những gì rồi?</li>
			
					<li>have you EVer TRAVeled aBROAD?</li>
					<li className="list-none">Bạn đã từng đi du lịch nước ngoài bao giờ chưa?</li>
			
				</ul>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 28, 2025 · by Grok and 🐝Mr. Bee Osn  ·</span>
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