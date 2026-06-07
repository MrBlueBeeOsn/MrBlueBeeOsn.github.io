import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SauDangDongTuTiengAnh2(): React.JSX.Element {

	const postId = "SauDangDongTuTiengAnh2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">6 Dạng Động Cơ Tiếng Anh
												
				<sup><HashLink smooth to="/tieng-anh/6-dang-dong-tu-tieng-anh-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/6-dang-dong-tu-tieng-anh-2">&nbsp;2&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">“Bộ Sưu Tập Hoàn Chỉnh” Giúp Bạn Nói & Viết Đúng, Mượt Như Người Bản Xứ! 🚀</h4>

			<p>Bạn vừa phát hiện ra một sự thật thú vị: động cơ tiếng Anh không chỉ có 3 hay 4 dạng như nhiều người vẫn nghĩ… mà thực tế có tới <strong>6 dạng cơ bản</strong> mà ai học tiếng Anh nghiêm túc cũng nên nắm chắc!</p>

			<p>Hôm nay, chúng ta sẽ cùng “mở kho báu” này một cách vui vẻ, dễ hiểu và cực kỳ thực tế. Khi bạn nắm được bộ 6 dạng này, bạn sẽ tự tin nói, viết, nghe, đọc mà không còn lo “sai chia động cơ” nữa.</p>

			<h3 className="margin-y-50 text-center">Bộ 6 Dạng Động Cơ “Hoàn Chỉnh” Của Tiếng Anh</h3>

			{/* Cặp 1: Work vs Works */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-top-50 margin-bottom-20 text-center">Cặp 1: Work vs Works</h3>

				<h4 className="margin-top-50 margin-bottom-30">Work – Bare infinitive / Base form (động cơ nguyên mẫu không “to”)</h4>

					<p className="text-indent-whole">Dùng cho I/you/we/they ở hiện tại đơn, sau do/does/did, sau modal verbs (can, will, must, should, may…), và sau let/make/help…</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>I <strong>work</strong> 8 hours a day.</li>

						<li>Do you <strong>like</strong> coffee?</li>

						<li>You can <strong>go</strong> now.</li>

					</ul>

				<p className="margin-top-20 text-indent-whole">→ Đây là dạng “thoải mái, tự do” nhất trong giao tiếp hàng ngày.</p>

				<h4 className="margin-top-50 margin-bottom-30">Works – 3rd person singular (ngôi thứ ba số ít ở hiện tại đơn)</h4>

					<p className="text-indent-whole">Chỉ thêm -s/-es khi chủ ngữ là he/she/it.</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>He <strong>works</strong> in marketing.</li>

						<li>She <strong>goes</strong> jogging every morning.</li>

						<li>The phone <strong>rings</strong> a lot today.</li>

					</ul>

				<p className="margin-top-20 text-indent-whole">→ Quy tắc nhỏ nhưng cực kỳ quan trọng – quên -s là sai ngay!</p>

			</div>

			{/* Cặp 2: Worked vs Have/Has/Had Worked */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-top-50 margin-bottom-20 text-center">Cặp 2: Worked vs Have/Has/Had Worked</h3>

				<h4 className="margin-top-50 margin-bottom-30">Worked – Past simple & Past participle (quá khứ đơn & phân từ quá khứ)</h4>

					<p className="text-indent-whole">Dùng để kể chuyện quá khứ, hoặc trong thì hoàn thành.</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>Yesterday I <strong>worked</strong> late.</li>

						<li>We <strong>ate</strong> sushi last night.</li>

						<li>She <strong>went</strong> home early.</li>

					</ul>

				<p className="margin-top-20 text-indent-whole">→ Với động cơ bất quy tắc thì dạng này thay đổi (go → went, eat → ate, see → saw…).</p>

				<h4 className="margin-top-50 margin-bottom-30">(have/has/had) worked – Past participle trong thì hoàn thành (Present Perfect, Past Perfect…)</h4>

					<p className="text-indent-whole">Đây là dạng “cầu nối thời gian” – kết hợp với have/has/had để tạo các thì hoàn thành.</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>I <strong>have worked</strong> here for 5 years.</li>

						<li>She <strong>has never eaten</strong> phở before.</li>

						<li>By the time you arrived, we <strong>had finished</strong> dinner.</li>

					</ul>

				<p className="margin-top-20 text-indent-whole">→ Dạng này xuất hiện rất nhiều trong giao tiếp tự nhiên và bài thi.</p>

				<p><Link to="/tieng-anh/hieu-dung-ve-thi-hien-tai-hoan-thanh" className="text-indent-whole">Hiểu Đúng Về Thì Hiện Tại Hoàn Thành</Link></p>

			</div>

			{/* Cặp 3: (Be) Working vs To Work */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-top-50 margin-bottom-20 text-center">Cặp 3: (Be) Working vs To Work</h3>

				<h4 className="margin-top-50 margin-bottom-30">(be) working – Present participle / -ing form (dạng đang diễn ra)</h4>

					<p className="text-indent-whole">Dùng với am/is/are (Present Continuous), was/were (Past Continuous), hoặc sau các động cơ như enjoy, hate, keep, stop, mind…</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>Right now I <strong>am working</strong> on this article!</li>

						<li>They <strong>were playing</strong> games when I called.</li>

						<li>I enjoy <strong>working</strong> with music on.</li>

					</ul>

				<p className="margin-top-20 text-indent-whole">→ Đây là dạng “năng động, sống động” nhất – giúp câu chuyện của bạn trở nên “đang diễn ra” ngay trước mắt người nghe.</p>

				<h4 className="margin-top-50 margin-bottom-30">To work – Infinitive with “to” (động cơ nguyên mẫu có “to”)</h4>

					<p className="text-indent-whole">Đây là dạng “được đóng gói” – xuất hiện sau các động cơ như want, need, decide, plan, hope, learn, promise, try…</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>I want <strong>to work</strong> from home.</li>

						<li>She decided <strong>to study</strong> abroad next year.</li>

						<li>It’s important <strong>to eat</strong> healthy food.</li>

					</ul>

				<p className="margin-top-20 text-indent-whole">→ Dạng này như “vé vào cửa” cho rất nhiều cấu trúc câu hay ho.</p>

			</div>

			<h3 className="margin-y-50 text-center">Tại Sao Bộ 6 Dạng Này Là “Vũ Khí Bí Mật”?</h3>

				<p>Khi bạn nắm chắc 6 dạng này, bạn có thể tự tin tạo ra hầu hết các câu trong tiếng Anh giao tiếp:</p>
			
				<ol>

					<li value="1">Cặp 1: Work vs Works: <strong>work</strong> / <strong>works</strong></li>

					<li className="list-none">Sau modal: can <strong>work</strong>, must <strong>work</strong>, should <strong>work</strong>…</li>
			
					<li value="2">Cặp 2: Worked vs Have/Has/Had Worked: <strong>worked</strong> / Hiện tại hoàn thành: <strong>have</strong>/<strong>has worked</strong></li>
			
					<li value="3">Cặp 3: (Be) Working vs To Work: <strong>am</strong>/<strong>is</strong>/<strong>are working</strong> / Nguyên mẫu: want <strong>to work</strong></li>
			
				</ol>

			<p className="margin-y-20 text-indent-whole">Chỉ cần thay “work” bằng bất kỳ động cơ nào (eat, go, play, live, study, love, drink…), bạn đã có hàng nghìn câu đúng ngữ pháp!</p>

			<h3 className="margin-y-50 text-center">Thử Ngay Một Ngày Của Bạn Bằng Bộ 6 Dạng</h3>

				<p><strong>Cặp 1</strong>: Work vs Works</p>

				<ul className="list-square">

					<li>Every morning I <strong>wake</strong> up and <strong>drink</strong> coffee. (dạng gốc)</li>

					<li>She <strong>works</strong> in a beautiful office downtown. (ngôi thứ ba)</li>
			
				</ul>

				<p className="margin-top-20"><strong>Cặp 2</strong>: Worked vs Have/Has/Had Worked</p>

				<ul className="list-square">
			
					<li>Yesterday I <strong>worked</strong> until midnight. (quá khứ)</li>

					<li>This year I <strong>have worked</strong> more than 2000 hours. (hiện tại hoàn thành)</li>
			
				</ul>

				<p className="margin-top-20"><strong>Cặp 3</strong>: (Be) Working vs To Work</p>

				<ul className="list-square">

					<li>Right now I <strong>am working</strong> on my English. (dạng -ing)</li>
			
					<li>I want <strong>to travel</strong> more next year. (to + infinitive)</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">Thử Thách 7 Ngày “Chinh Phục Bộ 6 Dạng”</h3>
			
				<ul className="list-square">

					<li><strong>Ngày 1-2</strong>: Học thuộc 5 động cơ + viết 5 câu cho mỗi dạng.</li>
			
					<li><strong>Ngày 3</strong>: Tập nói về thói quen (work/works).</li>

					<li><strong>Ngày 4</strong>: Kể chuyện quá khứ (worked).</li>
			
					<li><strong>Ngày 5</strong>: Luyện hiện tại hoàn thành (have/has worked).</li>

					<li><strong>Ngày 6</strong>: Nói về “đang làm gì” (am/is/are working).</li>
			
					<li><strong>Ngày 7</strong>: Kết hợp tất cả – kể một ngày hoàn chỉnh bằng tiếng Anh!</li>
			
				</ul>

			<p className="margin-top-20">Chỉ cần 10–15 phút mỗi ngày, bạn sẽ thấy tiếng Anh không còn là “những quy tắc khó nhằn”, mà trở thành <strong>cách để kể câu chuyện đời mình</strong> một cách tự nhiên, chân thật và hấp dẫn.</p>

			<p>Bạn đã sẵn sàng “thu phục” bộ 6 siêu sao này chưa?</p>

			<p>Chọn một động cơ yêu thích (work, eat, go, love, travel, sleep…) và bắt đầu ngay hôm nay nhé!</p>

			<p>Mình tin bạn sẽ làm được – và làm rất tốt! 💪✨</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 27, 2025 · by Grok and 🐝Mr. Bee Osn  ·</span>
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