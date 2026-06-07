import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NamDangDongTuVangRong2(): React.JSX.Element {

	const postId = "NamDangDongTuVangRong2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">5 Dạng Động Cơ “Vàng Ròng
			
				<sup><HashLink smooth to="/tieng-anh/5-dang-dong-tu-vang-rong-1">&nbsp;1&nbsp;</HashLink>
				</sup>
				
				<sup><HashLink smooth to="/tieng-anh/5-dang-dong-tu-vang-rong-2">&nbsp;2&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Từ "Ngại Nói" Thành "Nói Đã Tai" Chỉ Với 12 Động Cơ Siêu Phổ Biến! 🔥</h4>

			<p>Bạn có từng rơi vào tình huống: muốn nói tiếng Anh mà đầu óc cứ quay mòng mòng "dùng thì nào bây giờ?", "động từ này chia ra sao?"?</p>

			<p>Tin vui: Chỉ cần nắm chắc <strong>12 động từ thông dụng nhất</strong> cùng <strong>5 dạng cơ bản</strong> của chúng, bạn sẽ tự tin "bung lụa" trong hầu hết các cuộc trò chuyện đời thường – từ chat chit bạn bè, phỏng vấn xin việc, đến kể chuyện du lịch.</p>

			<h3 className="margin-y-50 text-center" id="bang-vang-12-dong-tu">Bảng "Vàng" 12 Động Cơ – Nắm Là Dùng Ngay</h3>

				<table className="margin-y-50">
					<thead>
						<tr>
							<th>Động cơ</th>
							<th>Nguyên thể</th>
							<th>Ngôi 3 số ít</th>
							<th>Quá khứ đơn</th>
							<th>Hiện tại hoàn thành</th>
							<th>Đang… (-ing)</th>
						</tr>
					</thead>

					<tbody>

						

						<tr>
								<td>to verb</td>
								<td>verb</td>
								<td>verbs</td>
								<td>verbed</td>
								<td>have, has verbed</td>
								<td>verbing</td>
						</tr>

						<tr>
								<td></td>
								<td>I, you, we, they</td>
								<td>He, she, it</td>
								<td></td>
								<td></td>
								<td></td>
						</tr>
						
						<tr>
								<td>to work</td>
								<td>work</td>
								<td></td>
								<td>worked</td>
								<td>have worked</td>
								<td>working</td>
						</tr>

						<tr>
								<td>to play</td>
								<td></td>
								<td>plays</td>
								<td>played</td>
								<td>has played</td>
								<td>playing</td>
						</tr>

						<tr>
								<td>to live</td>
								<td>live</td>
								<td></td>
								<td>lived</td>
								<td>have lived</td>
								<td>living</td>
						</tr>

						<tr>
								<td>to study</td>
								<td>study</td>
								<td></td>
								<td>studied</td>
								<td>have studied</td>
								<td>studying</td>
						</tr>

						<tr>
								<td>to like</td>
								<td></td>
								<td>likes</td>
								<td>liked</td>
								<td>has liked</td>
								<td>liking</td>
						</tr>

						<tr>
								<td>to go</td>
								<td>go</td>
								<td></td>
								<td>went</td>
								<td>have gone</td>
								<td>going</td>
						</tr>

						<tr>
								<td>to come</td>
								<td></td>
								<td>comes</td>
								<td>came</td>
								<td>has come</td>
								<td>coming</td>
						</tr>

						<tr>
								<td>to see</td>
								<td>see</td>
								<td></td>
								<td>saw</td>
								<td>have seen</td>
								<td>seeing</td>
						</tr>

						<tr>
								<td>to eat</td>
								<td></td>
								<td>eats</td>
								<td>ate</td>
								<td>has eaten</td>
								<td>eating</td>
						</tr>

						<tr>
								<td>to drink</td>
								<td>drink</td>
								<td></td>
								<td>drank</td>
								<td>have drunk</td>
								<td>drinking</td>
						</tr>

						<tr>
								<td>to take</td>
								<td>take</td>
								<td></td>
								<td>took</td>
								<td>have taken</td>
								<td>taking</td>
						</tr>

						<tr>
								<td>to give</td>
								<td></td>
								<td>gives</td>
								<td>gave</td>
								<td>has given</td>
								<td>giving</td>
						</tr>
					</tbody>
				</table>

			{/* 5 "Siêu Thì" Bạn Dùng Hàng Ngày Với 12 Động Cơ Này */}

			<h3 className="margin-y-50 text-center">5 "Siêu Thì" Bạn Dùng Hàng Ngày Với 12 Động Cơ Này</h3>
					
				<ol>
			
					<li value="1"><strong>Hiện tại đơn giản</strong> (thói quen, sự thật)</li>
					<li className="list-none">I <strong>work</strong> from home.</li>
					<li className="list-none"><strong>Do</strong> you <strong>like</strong> horror movies? → No, I <strong>don’t</strong>.</li>
					<li className="list-none">I <strong>work</strong> at a tech company.</li>
					<li className="list-none"><strong>Do</strong> you <strong>work</strong> on weekends?</li>

					<li value="2" className="margin-top-20"><strong>Hiện tại đơn giản</strong> (cho he/she/it)</li>
					<li className="list-none">She <strong>likes</strong> spicy food.</li>
					<li className="list-none"><strong>Does</strong> he <strong>play</strong> soccer? → Yes, he <strong>does</strong> every weekend.</li>
					<li className="list-none">She <strong>doesn’t like</strong> rainy days.</li>
					<li className="list-none"><strong>Does</strong> he <strong>play</strong> games a lot?</li>

					<li value="3" className="margin-top-20"><strong>Quá khứ đã xong xuôi</strong> (Past Simple)</li>
					<li className="list-none">Yesterday we <strong>went</strong> to the beach. I <strong>ate</strong> bún chả for lunch.</li>
					<li className="list-none"><strong>Did</strong> you <strong>go</strong> out last night? → Yeah, we <strong>did</strong>!</li>
					<li className="list-none">Last summer we <strong>traveled</strong> to Đà Lạt.</li>
					<li className="list-none">I <strong>ate</strong> phở for breakfast yesterday.</li>

					<li value="4" className="margin-top-20"><strong>Kinh nghiệm</strong> / <strong>kết quả đến hiện tại</strong> (Present Perfect)</li>
					<li className="list-none">I <strong>have never seen</strong> the Northern Lights.</li>
					<li className="list-none">She <strong>has lived</strong> in 3 countries so far.</li>
					<li className="list-none">I <strong>have visited</strong> Japan twice.</li>
					<li className="list-none">She <strong>has lived</strong> in Saigon since 2018.</li>
					<li className="list-none"><strong>Have</strong> you ever <strong>worked</strong> night shift?</li>

					<li value="5" className="margin-top-20"><strong>Đang diễn ra ngay lúc này</strong> (Present Continuous)</li>
					<li className="list-none">Right now I <strong>am studying</strong> English.</li>
					<li className="list-none">They <strong>are playing</strong> games.</li>
					<li className="list-none">Be quiet! The baby <strong>is sleeping</strong>.</li>
					<li className="list-none">What <strong>are</strong> you <strong>doing</strong> right now?</li>
			
				</ol>

			<h3 className="margin-y-50 text-center">Một Ngày Của Bạn Bằng Tiếng Anh (Dùng Đủ 5 dạng)</h3>
			
				<ul className="list-square">
			
					<li>Every morning I <strong>wake</strong> up and <strong>drink</strong> coffee</li>
					
					<li>Last weekend I <strong>went</strong> hiking with friends.</li>
			
					<li>This year I <strong>have studied</strong> English more seriously than ever.</li>

					<li>Right now I <strong>am writing</strong> this article for you.</li>

					<li><strong>Do</strong> you <strong>want</strong> to try? → Just start with these 12 verbs!</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">Thử Thách 7 Ngày "Nói Tiếng Anh Mượt Hơn" Ngay Hôm Nay</h3>
			
				<ul className="list-square">

					<li><strong>Ngày 1</strong>: Học thuộc 6 động từ đầu.</li>

					<li><strong>Ngày 2</strong>: Viết 5 câu mỗi dạng.</li>
			
					<li><strong>Ngày 3</strong>: Tập nói to trước gương: 5 câu Present Simple + Past Simple.</li>

					<li><strong>Ngày 4</strong>: Tập nói to trước gương: 5 câu Present Perfect + Present Continuous.</li>
			
					<li><strong>Ngày 5</strong>: Viết status bằng 3 thì khác nhau (dùng do/does nhiều nhất).</li>

					<li><strong>Ngày 6</strong>: Chat với bạn bằng Present Perfect (càng nhiều “I have…” càng tốt).</li>
			
					<li><strong>Ngày 7</strong>: Kể lại một ngày của bạn hoàn toàn bằng tiếng Anh (ghi âm càng tốt → nghe lại và sửa lỗi).</li>
			
				</ul>

			<p className="margin-top-20">Chỉ 10–15 phút mỗi ngày, sau 1 tuần bạn sẽ nhận ra: "Ơ, sao mình nói tự nhiên hơn hẳn vậy ta?"</p>

			<p>12 động từ nhỏ xíu này chính là <strong>chìa khóa mở cửa</strong> để bạn bước vào thế giới tiếng Anh thoải mái, không còn sợ sai nữa.</p>

			<p>Cứ bắt đầu đi, mình ở đây cổ vũ bạn! 💪✨</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 25, 2025 · by Grok and 🐝Mr. Bee Osn  ·</span>
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