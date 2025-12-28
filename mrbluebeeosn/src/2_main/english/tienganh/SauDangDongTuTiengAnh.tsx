import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SauDangDongTuTiengAnh(): React.JSX.Element {

	const postId = "SauDangDongTuTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">6 Dạng Động Từ Tiếng Anh</h1>

			<h4 className="margin-bottom-30 text-center">Nhớ Siêu Dễ Với 3 Cặp “Đối Thủ”! 💥</h4>

			<p>Bạn có bao giờ thấy động từ tiếng Anh “lằng nhằng” với quá nhiều dạng?</p>

			<p>Tin vui: Chỉ cần nhớ <strong>6 dạng cơ bản</strong> theo <strong>3 cặp đối thủ</strong> cực kỳ dễ hình dung, bạn sẽ nắm chắc 95% cách dùng động từ trong giao tiếp hàng ngày.</p>
			
			<p>Cách nhớ này siêu đơn giản, giống như “đấu tay đôi” giữa các dạng, giúp não bạn lưu trữ lâu hơn.</p>

			<p className="margin-bottom-50">Hãy cùng “xem trận đấu” giữa 3 cặp này nhé!</p>

			{/* Cặp 1: Work vs Works */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-top-50 margin-bottom-20 text-center">Cặp 1: Work vs Works</h3>

				<p className="text-center margin-bottom-50">(Thói quen của “tôi/anh/em” vs “anh ấy/cô ấy/nó”)</p>

				<p><strong>Work</strong> (dạng gốc – bare infinitive): Dùng cho I, you, we, they ở hiện tại đơn giản, hoặc sau do/does/did, can, will, must…</p>

				<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>I <strong>work</strong> from home.</li>

						<li>Do you <strong>work</strong> on weekends?</li>

						<li>They <strong>don’t work</strong> very hard.</li>

					</ul>

				<p className="margin-top-20"><strong>Works</strong> (ngôi thứ ba số ít – 3rd person singular): Chỉ dùng khi chủ ngữ là he, she, it.</p>

				<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>She <strong>works</strong> in a big company.</li>

						<li>He <strong>likes</strong> spicy food.</li>

						<li>The phone <strong>rings</strong> a lot today.</li>

					</ul>

				<p className="margin-top-20 text-indent-whole"><strong>Mẹo nhớ cặp 1</strong>: “Nói về mình hoặc nhóm → work bình thường. Nói về một người/vật → phải thêm s/es để ‘lịch sự’!”</p>

			</div>

			{/* Cặp 2: Worked vs Have/Has/Had Worked */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-top-50 margin-bottom-20 text-center">Cặp 2: Worked vs Have/Has/Had Worked</h3>

				<p className="text-center margin-bottom-50">(Quá khứ “kết thúc hẳn” vs “quá khứ vẫn còn liên quan đến hiện tại”)</p>

					<p><strong>Worked</strong> (quá khứ đơn – past simple): Dùng để kể chuyện đã xong xuôi, có thời gian cụ thể trong quá khứ.</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>Yesterday I <strong>worked</strong> until midnight.</li>

						<li>We <strong>ate</strong> sushi last night.</li>

						<li>She <strong>went</strong> to Japan two years ago.</li>

					</ul>

				<p className="margin-top-20"><strong>Have</strong>/<strong>Has</strong>/<strong>Had Worked</strong> (phân từ quá khứ – past participle trong thì hoàn thành): Dùng để nói kinh nghiệm, kết quả kéo dài đến hiện tại (Present Perfect) hoặc trước một thời điểm trong quá khứ (Past Perfect).</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>I <strong>have worked</strong> here for 5 years (vẫn đang làm).</li>

						<li>She <strong>has never eaten</strong> durian.</li>

						<li>By 5 p.m., we <strong>had finished</strong> all the tasks.</li>

					</ul>

				<p className="margin-top-20 text-indent-whole"><strong>Mẹo nhớ cặp 2</strong>: “Chuyện xưa đã xong, có ngày tháng rõ ràng → dùng worked. Chuyện xưa nhưng vẫn ‘ám ảnh’ hiện tại hoặc chưa kết thúc → dùng have/has/had worked!”</p>

			</div>

			{/* Cặp 3: To Work vs (Be) Working */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-top-50 margin-bottom-20 text-center">Cặp 3: To Work vs (Be) Working</h3>

				<p className="text-center margin-bottom-50">(“Muốn/làm được” vs “đang làm ngay lúc này”)</p>

					<p><strong>To Work</strong> (động từ nguyên mẫu có “to” – to-infinitive): Dùng sau want, need, decide, plan, hope, learn, try, promise…</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>I want <strong>to work</strong> abroad next year.</li>

						<li>She decided <strong>to study</strong> English seriously.</li>

						<li>It’s nice <strong>to eat</strong> healthy food.</li>

					</ul>

				<p className="margin-top-20">(<strong>Be</strong>) <strong>Working</strong> (dạng -ing – present participle): Dùng với am/is/are (đang diễn ra), was/were, hoặc sau enjoy, hate, keep, stop, mind…</p>

				<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>Right now I <strong>am working</strong> on this article!</li>

						<li>They <strong>were playing</strong> games when I called.</li>

						<li>I enjoy <strong>working</strong> with music on.</li>

					</ul>

				<p className="margin-top-20 text-indent-whole"><strong>Mẹo nhớ cặp 3</strong>: “Muốn làm gì trong tương lai hoặc nói chung chung → dùng to work. Đang làm thật, ngay lúc này → thêm be + working để ‘bắt quả tang’!”</p>

			</div>

			<h3 className="margin-y-50 text-center">Tóm tắt 3 cặp “đối thủ” siêu dễ nhớ</h3>
			
				<ol>

					<li><strong>Work</strong> (tôi/anh/em) ↔ <strong>Works</strong> (anh ấy/cô ấy/nó)</li>
			
					<li><strong>Worked</strong> (chuyện xưa kết thúc) ↔ <strong>Have</strong>/<strong>Has</strong>/<strong>Had Worked</strong> (chuyện xưa vẫn còn ảnh hưởng)</li>

					<li><strong>To Work</strong> (muốn/làm được) ↔ (<strong>Be</strong>) <strong>Working</strong> (đang làm thật)</li>
			
				</ol>

			<p className="margin-top-20 text-indent-whole">Khi bạn đã quen 3 cặp này, chỉ cần thay work bằng bất kỳ động từ nào (eat, go, play, live, study, love, drink…) là bạn đã có thể nói đúng hầu hết các câu!</p>

			<h3 className="margin-y-50 text-center">Thử ngay một ngày của bạn bằng 3 cặp đối thủ</h3>

				<ul className="list-square">

					<li>Every day I <strong>work</strong> hard, but right now I <strong>am working</strong> even harder! (cặp 1 & 3)</li>
			
					<li>She <strong>works</strong> in Saigon, but I <strong>worked</strong> in Saigon last year. (cặp 1 & 2)</li>
			
					<li>I <strong>have worked</strong> from home for 3 years, and I want <strong>to work</strong> like this forever. (cặp 2 & 3)</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">Thử thách 3 ngày “nhớ 3 cặp – nói mượt”</h3>
			
				<ul className="list-square">

					<li><strong>Ngày 1</strong>: Tập cặp 1 – viết 10 câu work vs works.</li>

					<li><strong>Ngày 2</strong>: Tập cặp 2 – kể chuyện quá khứ (worked) và kinh nghiệm (have/has worked).</li>
			
					<li><strong>Ngày 3</strong>: Tập cặp 3 – nói về “đang làm” (am/is/are working) và “muốn làm” (want to…).</li>
			
				</ul>

			<p className="margin-top-20">Chỉ 10 phút mỗi ngày, sau 3 ngày bạn sẽ thấy: Tiếng Anh không còn là “động từ lằng nhằng” nữa, mà chỉ còn 3 cặp đấu tay đôi vui vẻ và dễ nhớ!</p>

			<p>Bạn chọn cặp nào để “xem trận đấu” đầu tiên hôm nay? Cặp 1, cặp 2 hay cặp 3?</p>

			<p>Bắt đầu ngay đi – mình tin bạn sẽ “thắng” cả 3 cặp rất nhanh! 💪✨</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 27, 2025 · by 🐝Mr. Bee Osn and Grok ·</span>
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