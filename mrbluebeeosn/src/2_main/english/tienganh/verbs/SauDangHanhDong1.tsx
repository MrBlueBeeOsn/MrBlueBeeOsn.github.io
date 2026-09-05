import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SauDangHanhDong1(): React.JSX.Element {

	const postId = "SauDangHanhDong1";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#verbs-terms"><mark className="highlight-tertiary-padding-4-8">VERBS</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">6 Dạng [Hành Động]
									
				{/* <sup><HashLink smooth to="/tieng-anh/6-dang-hanh-dong-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/6-dang-hanh-dong-2">&nbsp;2&nbsp;</HashLink>
				</sup> */}

			</h1>

			<h4 className="margin-bottom-30 text-center">Nhớ Siêu Dễ Với 3 Cặp “Đối Thủ”! 💥</h4>

			<p>Bạn có bao giờ thấy hành động tiếng Anh “lằng nhằng” với quá nhiều dạng?</p>

			<p>Tin vui: Chỉ cần nhớ <strong>6 dạng cơ bản</strong> theo <strong>3 cặp đối thủ</strong> cực kỳ dễ hình dung, bạn sẽ nắm chắc 95% cách dùng hành động trong giao tiếp hàng ngày.</p>
			
			<p>Cách nhớ này siêu đơn giản, giống như “đấu tay đôi” giữa các dạng, giúp não bạn lưu trữ lâu hơn.</p>

			<p className="margin-bottom-50">Hãy cùng “xem trận đấu” giữa 3 cặp này nhé!</p>

			{/* Cặp 1: WORK vs WORKS */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-top-50 margin-bottom-20 text-center">Cặp 1: WORK vs WORKS</h3>

				<p className="text-center margin-bottom-50">(Thói quen của “tôi/anh/em” vs “anh ấy/cô ấy/nó”)</p>

				<p><strong>WORK</strong> (dạng gốc – BARE inFINitive): Dùng cho i, you, we, they ở ⏳ Thời Gian Hành Động ở Hiện Tại Đơn, hoặc sau do/does/did, can, will, must…</p>

				<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>i WORK from HOME.</li>
						<li className="list-none">Tôi làm việc ở nhà.</li>
						<li className="margin-bottom-20 list-none">Dạng khẳng định. Dùng để nói về phương thức hoặc địa điểm làm việc thường xuyên của bản thân ở hiện tại.</li>

						<li>do you WORK on WEEKends?</li>
						<li className="list-none">Bạn có làm việc vào các ngày cuối tuần không?</li>
						<li className="margin-bottom-20 list-none">Dạng câu hỏi (nghi vấn). Trợ hành động do được đưa lên đầu câu để hỏi về thói quen hoặc lịch trình làm việc của người đối diện.</li>

						<li>they DON'T WORK VERy HARD.</li>
						<li className="list-none">Họ không làm việc chăm chỉ cho lắm.</li>
						<li className="margin-bottom-20 list-none">Dạng phủ định. Sử dụng DON'T (do NOT) đi kèm với hành động nguyên mẫu WORK để diễn tả sự việc không diễn ra ở hiện tại.</li>

					</ul>

				<p className="margin-top-20"><strong>WORKS</strong> (ngôi thứ ba số ít – 3rd PERson SINGular): Chỉ dùng khi danh chủ là he, she, it.</p>

				<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>she WORKS in a BIG COMpany.</li>
						<li className="list-none">Cô ấy làm việc trong một công ty lớn.</li>
						<li className="margin-bottom-20 list-none">Dùng để diễn tả một sự thật hoặc tình trạng mang tính ổn định ở hiện tại. Hành động WORK thêm "S" vì chủ thể là ngôi thứ ba số ít (she).</li>

						<li>he LIKES SPIcy FOOD.</li>
						<li className="list-none">Anh ấy thích đồ ăn cay.</li>
						<li className="margin-bottom-20 list-none">Dùng để diễn tả sở thích, thói quen hoặc khẩu vị ở hiện tại. Hành động LIKE thêm "S" theo chủ thể he.</li>

						<li>the PHONE RINGS a LOT toDAY.</li>
						<li className="list-none">Điện thoại reo rất nhiều trong ngày hôm nay.</li>
						<li className="margin-bottom-20 list-none">Dùng để nói về một sự việc lặp đi lặp lại nhiều lần trong một khoảng thời gian hiện tại (ngày hôm nay). Hành động RING thêm "S" vì chủ thể là danh từ số ít (the PHONE).</li>

					</ul>

				<p className="margin-top-20 text-indent-whole"><strong>Mẹo nhớ cặp 1</strong>: “Nói về mình hoặc nhóm → WORK bình thường. Nói về một người/vật → phải thêm S/es để ‘lịch sự’!”</p>

			</div>

			{/* Cặp 2: WORKED vs have/has/had WORKED */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-top-50 margin-bottom-20 text-center">Cặp 2: WORKED vs have/has/had WORKED</h3>

				<p className="text-center margin-bottom-50">(Quá khứ “kết thúc hẳn” vs “quá khứ vẫn còn liên quan đến hiện tại”)</p>

					<p><strong>Worked</strong> (quá khứ đơn – PAST SIMple): Dùng để kể chuyện đã xong xuôi, có thời gian cụ thể trong quá khứ.</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>YESterday i WORKED until MIDnight.</li>
						<li className="list-none">Hôm qua tôi đã làm việc cho đến tận nửa đêm. (⏳ Thời Gian Hành Động ở Quá Khứ Đơn)</li>
						<li className="margin-bottom-20 list-none">Hành động làm việc kéo dài đến một thời điểm cụ thể trong quá khứ (MIDnight) và gắn với mốc thời gian rõ ràng là YESterday.</li>

						<li>we ATE SUshi LAST NIGHT.</li>
						<li className="list-none">Chúng tôi đã ăn sushi vào tối qua. (⏳ Thời Gian Hành Động ở Quá Khứ Đơn)</li>
						<li className="margin-bottom-20 list-none">Hành động bất quy tắc EAT chuyển thành ATE, kết hợp với cụm từ chỉ thời gian trong quá khứ là LAST NIGHT.</li>

						<li>she WENT to jaPAN TWO YEARS aGO.</li>
						<li className="list-none">Cô ấy đã đi Nhật Bản cách đây hai năm. (⏳ Thời Gian Hành Động ở Quá Khứ Đơn)</li>
						<li className="margin-bottom-20 list-none">Hành động bất quy tắc go chuyển thành WENT, kết hợp với cụm từ TWO YEARS aGO (cách đây 2 năm) để chỉ mốc thời gian đã trôi qua trong quá khứ.</li>

					</ul>

				<p className="margin-top-20"><strong>Have</strong>/<strong>Has</strong>/<strong>had WORKED</strong> (phân từ quá khứ – PAST PARticiple trong 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành: Dùng để nói kinh nghiệm, kết quả kéo dài đến hiện tại (PREsent PERfect) hoặc trước một thời điểm trong quá khứ (Past Perfect).</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>i have WORKED HERE for 5 YEARS.</li>
						<li className="list-none">Tôi đã làm việc ở đây được 5 năm.</li>
						<li className="margin-bottom-20 list-none">📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành (PREsent PERfect). Cấu trúc này dùng để diễn tả một hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn ở hiện tại (tính đến nay tôi vẫn đang làm việc tại đây).</li>

						<li>she has NEVer EAten DURian.</li>
						<li className="list-none">Cô ấy chưa bao giờ ăn sầu riêng.</li>
						<li className="margin-bottom-20 list-none">📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành (PREsent PERfect). Thường dùng phó từ NEVer để nói về trải nghiệm tính đến thời điểm hiện tại.</li>

						<li>by 5 p.M., we had FINished ALL the TASKS.</li>
						<li className="list-none">Trước 5 giờ chiều, chúng tôi đã hoàn thành tất cả các nhiệm vụ.</li>
						<li className="margin-bottom-20 list-none">📏 Khoảng Thời Gian Hành Động ở Quá Khứ Hoàn Thành (PAST PERfect). Diễn tả một hành động đã hoàn tất trước một thời điểm cụ thể trong quá khứ (trước mốc 5 giờ chiều hôm đó).</li>

					</ul>

				<p className="margin-top-20 text-indent-whole"><strong>Mẹo nhớ cặp 2</strong>: “Chuyện xưa đã xong, có ngày tháng rõ ràng → dùng WORKED. Chuyện xưa nhưng vẫn ‘ám ảnh’ hiện tại hoặc chưa kết thúc → dùng have/has/had WORKED!”</p>

			</div>

			{/* Cặp 3: To Work vs (Be) Working */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-top-50 margin-bottom-20 text-center">Cặp 3: be WORKing vs to WORK</h3>

				<p className="text-center margin-bottom-50">(“đang làm ngay lúc này” vs “Muốn/làm được”)</p>

				<p><strong>be</strong> <strong>WORKing</strong> (dạng -ing – PREsent PARticiple): Dùng với am/is/are (⏱️ Thời Điểm Hành Động ở Hiện Tại Tiếp Diễn), was/were, hoặc sau enJOY, HATE, KEEP, STOP, MIND…</p>

				<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>RIGHT NOW i am WORKing on this ARticle!</li>
						<li className="list-none">Ngay lúc này tôi đang làm bài báo này!</li>
						<li className="margin-bottom-20 list-none">Sử dụng ⏱️ Thời Điểm Hành Động ở Hiện Tại Tiếp Diễn (am WORKing) để diễn tả hành động đang thực sự diễn ra ngay tại thời điểm nói.</li>

						<li>they were PLAYing GAMES when i CALLED.</li>
						<li className="list-none">Họ đang chơi trò chơi thì tôi gọi điện đến.</li>
						<li className="margin-bottom-20 list-none">Sử dụng ⏱️ Thời Điểm Hành Động ở Quá Khứ Tiếp Diễn (were PLAYing) để chỉ một hành động đang diễn ra trong quá khứ thì có một hành động khác xen vào (được chia ở ⏳ Thời Gian Hành Động ở Quá Khứ Đơn - CALLED).</li>

						<li>i enJOY WORKing with MUsic ON.</li>
						<li className="list-none">Tôi thích làm việc khi có bật nhạc.</li>
						<li className="margin-bottom-20 list-none">Sử dụng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn (enJOY) và danh hành động (WORKing) theo sau hành động enjoy, kết hợp với cụm từ chỉ trạng thái with MUsic ON (có mở nhạc).</li>

					</ul>

					<p className="margin-top-20"><strong>To Work</strong> (động cơ nguyên mẫu có “to” – to-inFINitive): Dùng sau WANT, NEED, deCIde, PLAN, HOPE, LEARN, TRY, PROMise…</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>i WANT to WORK aBROAD NEXT YEAR.</li>
						<li className="list-none">Tôi muốn làm việc ở nước ngoài vào năm tới. (⏳ Thời Gian Hành Động ở Hiện Tại Đơn)</li>
						<li className="margin-bottom-20 list-none">Cấu trúc WANT to do SOMEthing dùng để diễn tả mong muốn ở hiện tại cho kế hoạch trong tương lai (NEXT YEAR).</li>

						<li>she deCIded to STUDy ENGlish SERiously.</li>
						<li className="list-none">Cô ấy đã quyết định học tiếng Anh một cách nghiêm túc. (⏳ Thời Gian Hành Động ở Quá Khứ Đơn)</li>
						<li className="margin-bottom-20 list-none">Cấu trúc decided to do SOMEthing dùng để diễn tả một quyết định đã được đưa ra và hoàn tất trong quá khứ.</li>

						<li>it’s NICE to EAT HEALthy FOOD.</li>
						<li className="list-none">Thật tuyệt khi ăn những thực phẩm lành mạnh. (⏳ Thời Gian Hành Động ở Hiện Tại Đơn)</li>
						<li className="margin-bottom-20 list-none">Cấu trúc it is + tính + to do SOMEthing dùng để đưa ra nhận xét hoặc cảm nhận về một hành động nào đó.</li>

					</ul>

				<p className="margin-top-20 text-indent-whole"><strong>Mẹo nhớ cặp 3</strong>: Đang làm thật, ngay lúc này → thêm be + WORKing để ‘bắt quả tang’! “Muốn làm gì trong tương lai hoặc nói chung chung → dùng to WORK.”</p>

			</div>

			<h3 className="margin-y-50 text-center">Tóm tắt 3 cặp “đối thủ” siêu dễ nhớ</h3>
			
				<ol>

					<li>Tôi/anh/em: <strong>WORK</strong></li>
					<li className="margin-bottom-20 list-none">Anh ấy/cô ấy/nó: <strong>WORKS</strong> </li>
			
					<li>Chuyện xưa kết thúc: <strong>WORKED</strong></li>
					<li className="margin-bottom-20 list-none">Chuyện xưa vẫn còn ảnh hưởng: <strong>have</strong>/<strong>has</strong>/<strong>had WORKED</strong></li>

					<li>Đang làm thật: <strong>be</strong> <strong>WORKing</strong></li>
					<li className="margin-bottom-20 list-none">Muốn/làm được: <strong>to WORK</strong></li>
			
				</ol>

			<p className="margin-top-20 text-indent-whole">Khi bạn đã quen 3 cặp này, chỉ cần thay work bằng bất kỳ hành động nào (EAT, GO, PLAY, LIVE, STUDy, LOVE, DRINK…) là bạn đã có thể nói đúng hầu hết các câu!</p>

			<h3 className="margin-y-50 text-center">Thử ngay một ngày của bạn bằng 3 cặp đối thủ</h3>

				<ul className="list-square">

					<li><strong>ever</strong>y day i WORK HARD, but RIGHT NOW i am WORKing Even HARder!</li>
					<li className="list-none">Mỗi ngày tôi đều làm việc chăm chỉ, nhưng ngay lúc này tôi còn đang làm việc chăm chỉ hơn nữa!</li>
					<li className="margin-bottom-20 list-none">Câu đầu dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn (thói quen hằng ngày), câu sau dùng ⏱️ Thời Điểm Hành Động ở Hiện Tại Tiếp Diễn (hành động đang diễn ra ngay tại thời điểm nói).</li>
			
					<li>she WORKS in jaPAN, but i WORKED in vietNAM LAST YEAR.</li>
					<li className="list-none">Cô ấy làm việc ở Nhật, nhưng tôi đã từng làm việc ở Việt Nam vào năm ngoái.</li>
					<li className="margin-bottom-20 list-none">Vế đầu dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn (sự thật/thói quen ở hiện tại), vế sau dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn (hành động đã xảy ra và kết thúc trong quá khứ với mốc thời gian cụ thể là LAST YEAR).</li>
			
					<li>i have WORKED from HOME for 3 YEARS, and i WANT to WORK like this forEVer.</li>
					<li className="list-none">Tôi đã làm việc ở nhà được 3 năm rồi, và tôi muốn làm việc thế này mãi mãi.</li>
					<li className="margin-bottom-20 list-none">Vế đầu dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với for 3 YEARS (hành động bắt đầu trong quá khứ và kéo dài đến hiện tại), vế sau dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn (nêu lên mong muốn/sở thích ở hiện tại).</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">Thử thách 3 ngày “nhớ 3 cặp – nói mượt”</h3>
			
				<ul className="list-square">

					<li><strong>Ngày 1</strong>: Tập cặp 1 – viết 10 câu WORK vs WORKS.</li>

					<li><strong>Ngày 2</strong>: Tập cặp 2 – kể chuyện quá khứ (WORKED) và kinh nghiệm (have/has WORKED).</li>
			
					<li><strong>Ngày 3</strong>: Tập cặp 3 – nói về “đang làm” (am/is/are WORKing) và “muốn làm” (WANT to…).</li>
			
				</ul>

			<p className="margin-top-20">Chỉ 10 phút mỗi ngày, sau 3 ngày bạn sẽ thấy: Tiếng Anh không còn là “động cơ lằng nhằng” nữa, mà chỉ còn 3 cặp đấu tay đôi vui vẻ và dễ nhớ!</p>

			<p>Bạn chọn cặp nào để “xem trận đấu” đầu tiên hôm nay? Cặp 1, cặp 2 hay cặp 3?</p>

			<p>Bắt đầu ngay đi – mình tin bạn sẽ “thắng” cả 3 cặp rất nhanh! 💪✨</p>

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