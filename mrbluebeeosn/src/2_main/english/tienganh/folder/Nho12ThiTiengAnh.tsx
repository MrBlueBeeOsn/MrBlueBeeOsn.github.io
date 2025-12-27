import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Nho12ThiTiengAnh(): React.JSX.Element {

	const postId = "Nho12ThiTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Hướng Dẫn Nhớ 12 Thì Tiếng Anh Chỉ Với Mã A1 Đến C4</h1>

			{/* This is the content of English Learning Term. */}

			<p>Phương Pháp Siêu Dễ – Ghi Nhớ Vĩnh Viễn Không Quên! (Bao Gồm Cả Thể Bị Động)</p>

			<p>Bạn từng học thuộc lòng 12 thì tiếng Anh nhưng cứ quên sạch?</p>

			<p>Từ hôm nay chỉ cần nhớ <strong>mã ngắn gọn từ A1 đến C4</strong> → bạn nắm chắc toàn bộ 12 thì chủ động + bị động chỉ trong vài phút!</p>

			{/* 1. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Quy tắc mã hóa thần thánh:</h3>

					<ul>

						<li><strong>A</strong> = Present (Hiện tại)</li>

						<li><strong>B</strong> = Past (Quá khứ)</li>

						<li><strong>C</strong> = Future (Tương lai)</li>

						<li><strong>1</strong> = Simple (Đơn)</li>

						<li><strong>2</strong> = Continuous (Tiếp diễn)</li>

						<li><strong>3</strong> = Perfect (Hoàn thành)</li>

						<li><strong>4</strong> = Perfect Continuous (Hoàn thành tiếp diễn)</li>

					</ul>

				<p className="margin-top-20">→ Mỗi mã đại diện cho một thì, dễ gọi tên: “A1 là hiện tại đơn”, “C4 là tương lai hoàn thành tiếp diễn”!</p>

			</div>

			{/* A. */}

			<h2 className="margin-y-50 text-center">Bảng 12 thì với mã A1 → C4 + ví dụ chủ động và bị động</h2>

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Nhóm Hiện tại (A)</h3>

					<ul className="list-square">

						<li><strong>A1</strong> – <strong>Present Simple</strong></li>
						<li className="list-none">Chủ động: He <strong>plays</strong> football every day. (Anh ấy chơi bóng đá mỗi ngày)</li>
						<li className="list-none">Bị động: Football <strong>is played</strong> every day. (Bóng đá được chơi mỗi ngày)</li>

						<li className="margin-top-20"><strong>A2</strong> – <strong>Present Continuous</strong></li>
						<li className="list-none">Chủ động: She <strong>is playing</strong> football now. (Cô ấy đang chơi bóng đá bây giờ)</li>
						<li className="list-none">Bị động: Football <strong>is being played</strong> now. (Bóng đá đang được chơi bây giờ)</li>

						<li className="margin-top-20"><strong>A3</strong> – <strong>Present Perfect</strong></li>
						<li className="list-none">Chủ động: They <strong>have played</strong> football for 2 hours. (Họ đã chơi bóng đá 2 tiếng)</li>
						<li className="list-none">Bị động: Football <strong>has been played</strong> for 2 hours. (Bóng đá đã được chơi 2 tiếng)</li>

						<li className="margin-top-20"><strong>A4</strong> – <strong>Present Perfect Continuous</strong></li>
						<li className="list-none">Chủ động: I <strong>have been playing</strong> football since morning. (Tôi đã đang chơi bóng đá từ sáng)</li>
						<li className="list-none">Bị động: Football <strong>has been being played</strong> since morning. (Bóng đá đã đang được chơi từ sáng)</li>

					</ul>

			</div>

			{/* B. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Nhóm Quá khứ (B)</h3>

					<ul className="list-square">

						<li><strong>B1</strong> – <strong>Past Simple</strong></li>
						<li className="list-none">Chủ động: He <strong>played</strong> football yesterday. (Anh ấy đã chơi bóng đá hôm qua)</li>
						<li className="list-none">Bị động: Football <strong>was played</strong> yesterday. (Bóng đá được chơi hôm qua)</li>

						<li className="margin-top-20"><strong>B2</strong> – <strong>Past Continuous</strong></li>
						<li className="list-none">Chủ động: She <strong>was playing</strong> football at 5 PM. (Cô ấy đang chơi bóng đá lúc 5 giờ)</li>
						<li className="list-none">Bị động: Football <strong>was being played</strong> at 5 PM. (Bóng đá đang được chơi lúc 5 giờ)</li>

						<li className="margin-top-20"><strong>B3</strong> – <strong>Past Perfect</strong></li>
						<li className="list-none">Chủ động: They <strong>had played</strong> football before dinner. (Họ đã chơi bóng đá trước bữa tối)</li>
						<li className="list-none">Bị động: Football <strong>had been played</strong> before dinner. (Bóng đá đã được chơi trước bữa tối)</li>

						<li className="margin-top-20"><strong>B4</strong> – <strong>Past Perfect Continuous</strong></li>
						<li className="list-none">Chủ động: I <strong>had been playing</strong> football for 3 hours. (Tôi đã đang chơi bóng đá 3 tiếng)</li>
						<li className="list-none">Bị động: Football <strong>had been being played</strong> for 3 hours. (Bóng đá đã đang được chơi 3 tiếng)</li>

					</ul>

			</div>

			{/* C. */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Nhóm Tương lai (C)</h3>

					<ul className="list-square">

						<li><strong>C1</strong> – <strong>Future Simple</strong></li>
						<li className="list-none">Chủ động: He <strong>will play</strong> football tomorrow. (Anh ấy sẽ chơi bóng đá ngày mai)</li>
						<li className="list-none">Bị động: Football <strong>will be played</strong> tomorrow. (Bóng đá sẽ được chơi ngày mai)</li>

						<li className="margin-top-20"><strong>C2</strong> – <strong>Future Continuous</strong></li>
						<li className="list-none">Chủ động: She <strong>will be playing</strong> football tomorrow. (Cô ấy sẽ đang chơi bóng đá ngày mai)</li>
						<li className="list-none">Bị động: Football <strong>will be being played</strong> tomorrow. (Bóng đá sẽ đang được chơi ngày mai)</li>

						<li><strong>C3</strong> – <strong>Future Perfect</strong></li>
						<li className="list-none">Chủ động: They <strong>will have played</strong> football by 6 PM. (Họ sẽ đã chơi xong bóng đá trước 6 giờ)</li>
						<li className="list-none">Bị động: Football <strong>will have been played</strong> by 6 PM. (Bóng đá sẽ đã được chơi trước 6 giờ)</li>

						<li className="margin-top-20"><strong>C4</strong> – <strong>Future Perfect Continuous</strong></li>
						<li className="list-none">Chủ động: I <strong>will have been playing</strong> football for 4 hours. (Tôi sẽ đã đang chơi bóng đá 4 tiếng)</li>
						<li className="list-none">Bị động: Football <strong>will have been being played</strong> for 4 hours. (Bóng đá sẽ đã đang được chơi 4 tiếng)</li>

					</ul>

			</div>

			{/* . */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">Mẹo nhớ nhanh mã A1 → C4</h3>

					<ul>

						<li><strong>A</strong> như <strong>At now</strong> (Hiện tại)</li>

						<li><strong>B</strong> như <strong>Before</strong> (Quá khứ)</li>

						<li><strong>C</strong> như <strong>Coming soon</strong> (Tương lai sắp đến)</li>

						<li><strong>1</strong> Simple → đơn giản nhất</li>

						<li><strong>2</strong> Continuous → đang diễn ra</li>

						<li><strong>3</strong> Perfect → đã hoàn thành</li>

						<li><strong>4</strong> Perfect Continuous → đã đang tiếp diễn lâu</li>

					</ul>

				<p className="margin-top-20"><strong>Bị động dễ nhớ</strong>: chỉ thêm “be + V3” và điều chỉnh trợ động từ phù hợp!</p>

			</div>

			{/* Kết luận */}

			<h3 className="margin-y-50 text-center">Kết luận</h3>

			<p>Chỉ cần nhớ <strong>A</strong> = <strong>Hiện tại</strong>, <strong>B</strong> = <strong>Quá khứ</strong>, <strong>C</strong> = <strong>Tương lai</strong></p>

			<p>và <strong>1 Simple</strong> → <strong>2 Continuous</strong> → <strong>3 Perfect</strong> → <strong>4 Perfect Continuous</strong></p>

			<p>→ 12 thì chủ động + bị động nằm gọn trong đầu bạn mãi mãi với mã <strong>A1</strong> đến <strong>C4</strong>!</p>

			<p>Thử ngay: Bạn muốn nói “Tôi đã đang học tiếng Anh 5 năm rồi” → đó là thì nào? (Đáp án: A4 – Present Perfect Continuous)</p>

			<p>Thử ngay: “Sách sẽ đã được đọc xong trước tối” → thì nào? (Đáp án: C3 bị động – Future Perfect Passive)</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 23, 2025 · by 🐝Mr. Bee Osn and Grok ·</span>
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