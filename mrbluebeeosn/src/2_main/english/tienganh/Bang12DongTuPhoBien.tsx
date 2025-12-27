import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Bang12DongTuPhoBien(): React.JSX.Element {

	const postId = "Bang12DongTuPhoBien";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">12 động từ thông dụng nhất cùng 4 dạng cơ bản</h1>

			<h4 className="margin-bottom-30 text-center">Từ "Ngại Nói" Thành "Nói Đã Tai" Chỉ Với 12 Động Từ Siêu Phổ Biến! 🔥</h4>

			<p>Bạn có từng rơi vào tình huống: muốn nói tiếng Anh mà đầu óc cứ quay mòng mòng "dùng thì nào bây giờ?", "động từ này chia ra sao?"?</p>

			<p>Tin vui: Chỉ cần nắm chắc <strong>12 động từ thông dụng nhất</strong> cùng <strong>4 dạng cơ bản</strong> của chúng, bạn sẽ tự tin "bung lụa" trong hầu hết các cuộc trò chuyện đời thường – từ chat chit bạn bè, phỏng vấn xin việc, đến kể chuyện du lịch.</p>

			<h3 className="margin-y-50 text-center">Bảng "Vàng" 12 Động Từ – Nắm Là Dùng Ngay</h3>

				<table className="margin-y-50">
          <thead>
            <tr>
              <th>Nguyên thể</th>
              <th>Quá khứ đơn</th>
							<th>Hiện tại hoàn thành</th>
							<th>Đang… (-ing)</th>
							<th>Do/Does + ? (câu hỏi)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
                <td>work</td>
                <td>worked</td>
                <td>have/has worked</td>
								<td>working</td>
								<td>Do you work…?</td>
            </tr>

            <tr>
                <td>play</td>
                <td>played</td>
                <td>have/has played</td>
								<td>playing</td>
								<td>Does she play…?</td>
            </tr>

            <tr>
                <td>live</td>
                <td>lived</td>
                <td>have/has lived</td>
								<td>living</td>
								<td>Do they live…?</td>
            </tr>

						<tr>
                <td>study</td>
                <td>studied</td>
                <td>have/has studied</td>
								<td>studying</td>
								<td>Do you study…?</td>
            </tr>

						<tr>
                <td>like</td>
                <td>liked</td>
                <td>have/has liked</td>
								<td>liking</td>
								<td>Does he like…?</td>
            </tr>

						<tr>
                <td>go</td>
                <td>went</td>
                <td>have/has gone</td>
								<td>going</td>
								<td>Do we go…?</td>
            </tr>

						<tr>
                <td>come</td>
                <td>came</td>
                <td>have/has come</td>
								<td>coming</td>
								<td>Does it come…?</td>
            </tr>

						<tr>
                <td>see</td>
                <td>saw</td>
                <td>have/has seen</td>
								<td>seeing</td>
								<td>Do you see…?</td>	
            </tr>

						<tr>
                <td>eat</td>
                <td>ate</td>
                <td>have/has eaten</td>
								<td>eating</td>
								<td>Does she eat…?</td>
            </tr>

						<tr>
                <td>drink</td>
                <td>drank</td>
                <td>have/has drunk</td>
								<td>drinking</td>
								<td>Do they drink…?</td>
            </tr>

						<tr>
                <td>take</td>
                <td>took</td>
                <td>have/has taken</td>
								<td>taking</td>
								<td>Do I take…?</td>
            </tr>

						<tr>
                <td>give</td>
                <td>gave</td>
                <td>have/has given</td>
								<td>giving</td>
								<td>Does he give…?</td>
            </tr>
          </tbody>
        </table>

			{/* 5 "Siêu Thì" Bạn Dùng Hàng Ngày Với 12 Động Từ Này */}

			<h3 className="margin-y-50 text-center">5 "Siêu Thì" Bạn Dùng Hàng Ngày Với 12 Động Từ Này</h3>
					
				<ol>
			
					<li value="1"><strong>Hiện tại đơn giản</strong> (thói quen, sự thật)</li>
					<li className="list-none">I <strong>work</strong> from home. She <strong>likes</strong> spicy food.</li>

					<li value="2" className="margin-top-20"><strong>Đang diễn ra ngay lúc này</strong> (Present Continuous)</li>
					<li className="list-none">Right now I <strong>am studying</strong> English. They <strong>are playing</strong> games.</li>

					<li value="3" className="margin-top-20"><strong>Quá khứ đã xong xuôi</strong> (Past Simple)</li>
					<li className="list-none">Yesterday we <strong>went</strong> to the beach. I <strong>ate</strong> bún chả for lunch.</li>

					<li value="4" className="margin-top-20"><strong>Kinh nghiệm</strong> / <strong>kết quả đến hiện tại</strong> (Present Perfect)</li>
					<li className="list-none">I <strong>have never seen</strong> the Northern Lights.</li>
					<li className="list-none">She <strong>has lived</strong> in 3 countries so far.</li>

					<li value="5" className="margin-top-20"><strong>Câu hỏi & phủ định siêu nhanh</strong> (với do/does/did)</li>
					<li className="list-none"><strong>Do</strong> you <strong>like</strong> horror movies? → No, I <strong>don’t</strong>.</li>
					<li className="list-none"><strong>Does</strong> he <strong>play</strong> soccer? → Yes, he <strong>does</strong> every weekend.</li>
					<li className="list-none"><strong>Did</strong> you <strong>go</strong> out last night? → Yeah, we <strong>did</strong>!</li>
			
				</ol>

			<h4 className="margin-y-30">Một Ngày Của Bạn Bằng Tiếng Anh (Dùng Đủ 4 Dạng)</h4>
			
				<ul className="list-square">
			
					<li>Every morning I <strong>wake</strong> up and <strong>drink</strong> coffee</li>
			
					<li>Right now I <strong>am writing</strong> this article for you.</li>

					<li>Last weekend I <strong>went</strong> hiking with friends.</li>
			
					<li>This year I <strong>have studied</strong> English more seriously than ever.</li>

					<li><strong>Do</strong> you <strong>want</strong> to try? → Just start with these 12 verbs!</li>
			
				</ul>

			<h4 className="margin-y-30">Thử Thách 7 Ngày "Nói Tiếng Anh Mượt Hơn" Ngay Hôm Nay</h4>
			
				<ul className="list-square">

					<li><strong>Ngày 1–2</strong>: Học thuộc 6 động từ đầu + viết 5 câu mỗi dạng.</li>
			
					<li><strong>Ngày 3–4</strong>: Tập nói to 10 câu dùng Present Continuous + Present Perfect.</li>
			
					<li><strong>Ngày 5–6</strong>: Viết status hoặc chat với bạn bằng 3 thì khác nhau (dùng do/does nhiều nhất).</li>
			
					<li><strong>Ngày 7</strong>: Kể lại một ngày của bạn hoàn toàn bằng tiếng Anh (ghi âm càng tốt).</li>
			
				</ul>

			<p className="margin-top-20">Chỉ 10–15 phút mỗi ngày, sau 1 tuần bạn sẽ nhận ra: "Ơ, sao mình nói tự nhiên hơn hẳn vậy ta?"</p>

			<p>12 động từ nhỏ xíu này chính là <strong>chìa khóa mở cửa</strong> để bạn bước vào thế giới tiếng Anh thoải mái, không còn sợ sai nữa.</p>

			<p>Cứ bắt đầu đi, mình ở đây cổ vũ bạn! 💪✨</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 25, 2025 · by 🐝Mr. Bee Osn and Grok ·</span>
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