import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';
import SVOMPT from '@/components/method/SVOMPT';

export default function SVOMPT1(): React.JSX.Element {

	const postId = "SVOMPT1";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#thinking-terms"><mark className="highlight-tertiary-padding-4-8">THINKing</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">SVOMPT
												
				{/* <sup><HashLink smooth to="/tieng-anh/SVOMPT-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/SVOMPT-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/SVOMPT-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/SVOMPT-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/SVOMPT-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/SVOMPT-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/SVOMPT-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/SVOMPT-8">&nbsp;8&nbsp;</HashLink>
				</sup> */}

			</h1>

			<h4 className="margin-bottom-30 text-center">BÍ QUYẾT "ĐƯỜNG THẲNG": NÓI TIẾNG ANH TRÔI CHẢY KHÔNG CẦN SUY NGHĨ</h4>

			<p className="margin-top-20">Bạn đã bao giờ thấy mình bị "đứng hình" khi đang nói tiếng Anh vì mải lo sắp xếp từ ngữ sao cho đúng ngữ pháp?</p>

			<p>Hãy quên đi những cấu trúc khô khan trên sách vở.</p>

			<p className="margin-top-20"><strong>SVOMPT</strong> là một quy tắc về trật tự từ trong câu tiếng Anh.</p>
			
				<ul className="list-square">
			
					<li><strong>S</strong> (<strong>SUBject</strong>): Ai hoặc cái gì thực hiện hành động.</li>
			
					<li><strong>V</strong> (<strong>VERB</strong>): Hành động trong câu.</li>
			
					<li><strong>O</strong> (<strong>OBject</strong>): Người hoặc vật chịu tác động của hành động.</li>

					<li><strong>M</strong> (<strong>MANner</strong>): Hành động diễn ra như thế nào (ví dụ: WELL, FAST, QUIetly).</li>
			
					<li><strong>P</strong> (<strong>PLACE</strong>): Hành động diễn ra ở đâu (ví dụ: at HOME, in the PARK).</li>

					<li><strong>T</strong> (<strong>TIME</strong>): Hành động diễn ra khi nào (ví dụ: toDAY, YESterday, at 5 pM).</li>
		
			
				</ul>
			
			<p className="margin-top-20">Ví dụ:</p>
			
			<div className="example">

				<p className="example-sentence">
					<span className="s">he</span> &nbsp;<span className="v">PLAYS</span> &nbsp;<span className="o">FOOTball</span> &nbsp;<span className="m">WELL</span> &nbsp;<span className="p">at the CLUB</span> &nbsp;<span className="t">on SUNdays</span>.
				</p>

				<p className="example-sentence">
					<span className="s">Anh ấy</span> &nbsp;<span className="v">chơi</span> &nbsp;<span className="o">bóng đá</span> &nbsp;<span className="m">rất giỏi</span> &nbsp;<span className="p">ở câu lạc bộ</span> &nbsp;<span className="t">vào các ngày Chủ nhật</span>.
				</p>

				<p>Câu này sử dụng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn để diễn tả một thói quen hoặc một hoạt động diễn ra thường xuyên định kỳ vào mỗi ngày Chủ nhật hàng tuần.</p>

			</div>

			<p>Hãy tưởng tượng tiếng Anh là một <strong>đường thẳng tắp</strong> phóng từ bạn về phía trước.</p>

			{/* 1. Tư duy "Đường thẳng": Từ gần đến xa */}
			
			<h3 className="margin-y-50 text-center">1. Tư duy "Đường thẳng": Từ gần đến xa</h3>

			<p className="margin-top-20">Hãy hình dung một con đường bắt đầu ngay sát dưới chân bạn (điểm bắt đầu) và chạy thẳng tới tận chân trời (điểm kết thúc).</p>

			<SVOMPT />

			<p className="margin-top-20">Trong tiếng Anh, các từ ngữ không nằm lộn xộn; chúng đứng xếp hàng trên con đường này theo đúng thứ tự <strong>SVOMPT</strong>:</p>
			
				<ul className="list-square">

					<li><strong>O</strong>, <strong>M</strong>, <strong>P</strong>, <strong>T</strong>:</li>
					<li className="margin-bottom-20 list-none">Là những cột mốc tiếp theo nằm xa dần trên con đường đó.</li>

					<li><strong>V</strong> (<strong>Verb</strong> - <strong>Hành động</strong>):</li>
					<li className="margin-bottom-20 list-none">Là bước tiến đầu tiên. "Làm gì" là lực đẩy để bạn đi tiếp.</li>

					<li><strong>S</strong> (<strong>Subject</strong> - <strong>Danh chủ</strong>):</li>
					<li className="list-none">Ở ngay gần bạn nhất. Phải xác định "Ai" đầu tiên để đặt chân lên con đường.</li>
			
				</ul>

			<p className="margin-top-20"><strong>Nguyên tắc vàng</strong>: Khi bạn nói, từ ngữ xuất hiện ở điểm gần, sau đó "vút" đi về phía xa và biến mất. Bạn không thể quay lại sửa toa tàu đã chạy qua, vì vậy hãy cứ nhìn thẳng về phía trước và lắp từ vào đúng vị trí.</p>

			{/* 2. Ví dụ thực tế: Hãy nhìn câu văn qua "Kính viễn vọng" */}
			
			<h3 className="margin-y-50 text-center">2. Ví dụ thực tế: Hãy nhìn câu văn qua "Kính viễn vọng"</h3>

			<p className="margin-top-20">Hãy thử áp dụng đường thẳng này vào một câu nói cụ thể.</p>

			<div className="example">

				<p className="example-label">Ví dụ</p>

				<p className="example-sentence">
					<span className="s">my FRIEND</span> &nbsp;<span className="v">PLAYS</span> &nbsp;<span className="o">piANo</span> &nbsp;<span className="m">BEAUtifully</span> &nbsp;<span className="p">at the HALL</span> &nbsp;<span className="t">toNIGHT</span>.
				</p>

				<p className="example-sentence">
					<span className="s">Bạn tôi</span> &nbsp;<span className="v">chơi</span> &nbsp;<span className="o">piANo</span> &nbsp;<span className="m">rất hay</span> &nbsp;<span className="p">ở hội trường</span> &nbsp;<span className="t">tối nay</span>.
				</p>

				<p>Trong ngữ cảnh này, "plays" dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn có thể diễn tả một lịch trình, sự kiện đã được lên kế hoạch sẵn diễn ra trong tương lai gần (tối nay). Ngoài ra, câu này cũng có thể dùng ⏱️ Thời Điểm Hành Động ở Hiện Tại Tiếp Diễn (is PLAYing) để nói về hành động sẽ xảy ra vào tối nay, nhưng với ⏳ Thời Gian Hành Động ở Hiện Tại Đơn thì câu mang sắc thái như một lịch trình chính thức.</p>

			</div>

			<p>Nếu nhìn theo đường thẳng tiến tới, bạn sẽ thấy:</p>

			<div className="pill-row">

				<ul className="list-square">

					<li className="margin-bottom-20 list-none"><span className="pill t">toNIGHT (tối nay)</span> TIME: Chân trời xa nhất - Khi nào?</li>

					<li className="margin-bottom-20 list-none"><span className="pill p">at the HALL (tại sảnh)</span> PLACE: Không gian - Ở đâu?</li>

					<li className="margin-bottom-20 list-none"><span className="pill m">BEAUtifully (hay)</span> MANner: Cảm giác - Chơi như thế nào?</li>

					<li className="margin-bottom-20 list-none"><span className="pill o">piANo</span> OBject: Vật gặp trên đường - Chơi cái gì?</li>

					<li className="margin-bottom-20 list-none"><span className="pill v">PLAYS (chơi)</span> VERB: Bước tiến - Hành động xuất hiện tiếp theo</li>

					<li className="list-none"><span className="pill s">my FRIEND (Bạn tôi)</span> SUBject: Điểm xuất phát - Vừa nghĩ đến là nói ngay</li>

				</ul>

			</div>


			<p className="margin-top-20">Tất cả nằm trên một đường chạy duy nhất.</p>

			<p>Bạn chỉ cần nạp "nguyên liệu" theo đúng thứ tự đó, câu văn sẽ tự động đúng và trôi chảy.</p>

			{/* 3. Tại sao cách này lại dễ hơn? */}
			
			<h3 className="margin-y-50 text-center">3. Tại sao cách này lại dễ hơn?</h3>

			<p className="margin-top-20">Sự khác biệt nằm ở chỗ bạn đang <strong>Nói</strong> hay đang <strong>Viết</strong>:</p>
			
				<ul className="list-square">
			
					<li><strong>Nói</strong> (<strong>Tư duy Đường thẳng</strong>):</li>
					<li className="margin-bottom-20 list-none">Từ ngữ có tính thời điểm. Khi đã nói ra là nó "biến mất" về phía xa. Tư duy này giúp bạn bớt lo lắng về lỗi sai. Bạn chỉ việc tập trung vào việc: "Tiếp theo là toa tàu nào?" trên đường thẳng <strong>SVOMPT</strong>.</li>

					<li><strong>Viết</strong> (<strong>Tư duy Hàng ngang</strong>):</li>
					<li className="list-none">Chữ nằm trên giấy nên bạn hay có thói quen nhìn tới nhìn lui để sửa. Điều này rất tốt khi làm văn, nhưng lại là "kẻ thù" của phản xạ nói.</li>
			
				</ul>

			{/* 4. Mẹo nhỏ để con đường luôn thông suốt */}
			
			<h3 className="margin-y-50 text-center">4. Mẹo nhỏ để con đường luôn thông suốt</h3>

			<p className="margin-top-20">Để không bao giờ bị "vấp" trên đường thẳng này, hãy nhớ:</p>
			
				<ul className="list-square">
			
					<li><strong>Ưu tiên cái cụ thể trước</strong> (<strong>Nhỏ trước</strong>, <strong>Lớn sau</strong>):</li>
					<li className="list-none">Nếu có hai mốc thời gian hay địa điểm, cái nào cụ thể hơn thì đặt ở gần hơn trên đường thẳng.</li>
					<li className="margin-bottom-20 list-none">Ví dụ: at 8 o'CLOCK (gần) on MONday (xa).</li>

					<li><strong>Mắt luôn nhìn về phía trước</strong>:</li>
					<li className="list-none">Đừng cố dịch ngược từ tiếng Việt. Hãy cứ để các từ <strong>S</strong>-<strong>V</strong>-<strong>O</strong>-<strong>M</strong>-<strong>P</strong>-<strong>T</strong> nối đuôi nhau phóng đi.</li>
			
				</ul>

			<p className="margin-top-20">Thay vì học thuộc lòng, hãy tập <strong>nhìn thấy</strong> con đường này mỗi khi bạn mở lời. Khi trật tự từ trở thành một hành trình đi thẳng tới, bạn sẽ thấy tiếng Anh tự nhiên và dễ dàng hơn bao giờ hết!</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 14, 2026 · by 💎GEM and 🐝Mr. Bee Osn ·</span>
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