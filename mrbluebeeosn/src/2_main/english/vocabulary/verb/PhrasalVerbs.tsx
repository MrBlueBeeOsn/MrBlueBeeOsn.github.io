import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PhrasalVerbs(): React.JSX.Element {

	const postId = "PhrasalVerbs";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/vocabulary#verbs-terms"><mark className="highlight-tertiary-padding-4-8">VERBS</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">PHRAsal VERBS</h1>

			<h4 className="margin-bottom-30 text-center">PHRAsal VERBS trong tiếng Anh – Bí quyết nói tự nhiên như người bản xứ (Cập nhật 2026)</h4>

			<p>PHRAsal VERBS là “vũ khí bí mật” giúp bạn nâng tầm tiếng Anh giao tiếp, đặc biệt trong IELTS Speaking, TOEIC Speaking hay cuộc sống hàng ngày. Đây là những cụm từ gồm <strong>động cơ</strong> + <strong>trạng cơ</strong> <strong>(<del> giới cơ</del></strong>) (như UP, DOWN, OUT, ON, OFF…), tạo nên nghĩa hoàn toàn mới, không đoán được từ nghĩa riêng lẻ.</p>

			<p className="margin-top-20">Ví dụ:</p>
			
				<ul className="list-square">
			
					<li>“GIVE” = cho</li>
			
					<li>Nhưng <strong>give UP</strong> = bỏ cuộc (không phải “cho lên” đâu nhé!)</li>
			
				</ul>

			<p className="margin-top-20">Native speakers dùng PHRAsal VERBS <strong>rất nhiều</strong> trong nói chuyện đời thường – khoảng 80% hành động trong hội thoại hàng ngày là PHRAsal VERBS. Học chúng không chỉ giúp bạn nghe hiểu tốt hơn mà còn khiến câu nói của bạn tự nhiên, thân mật và ấn tượng hơn rất nhiều.</p>

			<h3 className="margin-y-50 text-center">Tại sao PHRAsal VERBS quan trọng trong năm 2026?</h3>
					
				<ul className="list-square">
			
					<li>IELTS/TOEFL/TOEIC ưu tiên ngôn ngữ tự nhiên → dùng PHRAsal VERBS đúng chỗ dễ lên band 7.0+ Speaking</li>
			
					<li>Giao tiếp thực tế: Người bản xứ hầu như <strong>không nói</strong> “i will TELephone you.” mà nói “i’ll <strong>call</strong> you <strong>Up</strong>”.</li>
			
					<li>Dễ gây nhầm lẫn nếu không biết: “pick UP” có thể là nhặt lên, học được, đón ai đó…</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">Bảng 30 PHRAsal VERBS phổ biến nhất – Dùng hàng ngày & thi cử</h3>

			<p>Dưới đây là danh sách chọn lọc những cụm <strong>hay gặp nhất</strong> và ví dụ thực tế.</p>

			<p className="margin-top-20"></p>
			
				<ol>
			
					<li value="1">i USually <strong>wake UP</strong> at SEVen a.m. Even on WEEKends.</li>
					<li className="margin-bottom-20 list-none">Tôi thường <strong>thức dậy</strong> lúc 7 giờ sáng kể cả vào những ngày cuối tuần.</li>
			
					<li value="2">it’s HARD to <strong>get UP</strong> when it’s RAINing outSIDE.</li>
					<li className="margin-bottom-20 list-none">Thật khó để <strong>rời khỏi giường</strong> khi trời đang mưa bên ngoài.</li>

					<li value="3">can you <strong>turn the LIGHTS ON</strong>? it’s TOO DARK.</li>
					<li className="margin-bottom-20 list-none">Bạn có thể <strong>bật đèn lên</strong> được không? Trối tối quá.</li>
			
					<li value="4">i’m <strong>looking AFter</strong> my NIECE <strong>this</strong> WEEKend.</li>
					<li className="margin-bottom-20 list-none">Cuối tuần này tôi sẽ <strong>trông nom</strong> cháu gái của mình.</li>

					<li value="5">i’ll <strong>pick you UP</strong> at EIGHT.</li>
					<li className="margin-bottom-20 list-none">Tôi <strong>sẽ đón bạn</strong> lúc 8 giờ.</li>

					<li className="list-none">she <strong>picked UP</strong> SPANish QUICKly.</li>
					<li className="margin-bottom-20 list-none">Cô ấy <strong>đã học</strong> nhanh (<strong>tiếp thu</strong> nhanh) tiếng Tây Ban Nha.</li>
			
					<li value="6">DON’T <strong>give UP</strong> on your DREAMS!</li>
					<li className="margin-bottom-20 list-none">Đừng <strong>từ bỏ</strong> những giấc mơ của bạn!</li>

					<li value="7">we’ve <strong>run OUT</strong> of MILK aGAIN.</li>
					<li className="margin-bottom-20 list-none">Chúng ta lại <strong>hết</strong> sữa rồi.</li>
			
					<li value="8">i JUST <strong>found OUT</strong> that the CONcert is FREE!</li>
					<li className="margin-bottom-20 list-none">Tôi vừa mới <strong>phát hiện ra</strong> rằng buổi hòa nhạc được miễn phí!</li>

					<li value="9">i <strong>get aLONG</strong> REally WELL with my NEW BOSS.</li>
					<li className="margin-bottom-20 list-none">Tôi <strong>hòa hợp</strong> rất tốt với sếp mới của mình.</li>
			
					<li value="10">we USually <strong>hang OUT</strong> at the caFÉ <strong>af</strong>ter CLASS.</li>
					<li className="margin-bottom-20 list-none">Chúng tôi thường <strong>đi chơi</strong> ở quán cà phê sau giờ học.</li>

					<li value="11">my CAR <strong>broke DOWN</strong> on the HIGHway YESterday.</li>
					<li className="margin-bottom-20 list-none">Xe ô tô của tôi <strong>đã bị hỏng</strong> trên đường cao tốc vào ngày hôm qua.</li>
			
					<li value="12">i’m <strong>looking FORward</strong> to the TET HOLiday!</li>
					<li className="margin-bottom-20 list-none">Tôi rất <strong>mong chờ</strong> kỳ nghỉ Tết!</li>

					<li value="13">they <strong>put OFF</strong> the MEETing until NEXT WEEK.</li>
					<li className="margin-bottom-20 list-none">Họ <strong>đã hoãn</strong> cuộc họp lại cho đến tuần tới.</li>
			
					<li value="14">she REally <strong>takes AFter</strong> her MOTHer.</li>
					<li className="margin-bottom-20 list-none">Cô ấy thực sự <strong>giống</strong> mẹ mình (về ngoại hình hoặc tính cách).</li>

					<li value="15">i <strong>came aCROSS</strong> an OLD PHOto of us LAST NIGHT.</li>
					<li className="margin-bottom-20 list-none">Tôi <strong>tình cờ bắt gặp</strong> một bức ảnh cũ của chúng mình vào tối qua.</li>
			
					<li value="16">they <strong>called the WEDding OFF</strong> at the LAST MINutes.</li>
					<li className="margin-bottom-20 list-none">Họ <strong>đã hủy đám cưới</strong> vào phút chót.</li>

					<li value="17"><strong>cheer UP</strong>! THINGS will GET BETter.</li>
					<li className="margin-bottom-20 list-none"><strong>Vui lên đi</strong>! Mọi chuyện rồi sẽ khá hơn thôi.</li>
			
					<li value="18">can you <strong>drop me OFF</strong> at the STAtion?</li>
					<li className="margin-bottom-20 list-none">Bạn có thể <strong>thả tôi xuống</strong> (<strong>cho tôi xuống</strong>) ở nhà ga được không?</li>

					<li value="19">it TOOK me MONTHS to <strong>get Over</strong> the BREAKup.</li>
					<li className="margin-bottom-20 list-none">Tôi mất nhiều tháng mới <strong>vượt qua được</strong> vụ chia tay đó.</li>
			
					<li value="20">the MANager will <strong>look INto</strong> the comPLAINT.</li>
					<li className="margin-bottom-20 list-none">Người quản lý sẽ <strong>điều tra</strong>/<strong>xem xét kỹ lưỡng về</strong> lời phàn nàn đó.</li>

					<li value="21">we ARGued but we <strong>made UP</strong> QUICKly.</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã cãi nhau nhưng chúng tôi <strong>đã làm hòa</strong> nhanh chóng.</li>
			
					<li value="22">he ALways <strong>turns UP</strong> LATE!</li>
					<li className="margin-bottom-20 list-none">Anh ấy lúc nào cũng <strong>xuất hiện</strong> muộn!</li>

					<li value="23">let’s <strong>catch UP</strong> over COFfee NEXT WEEK!</li>
					<li className="margin-bottom-20 list-none">Tuần tới chúng ta <strong>hẹn gặp</strong> nhau trò chuyện qua ly cà phê nhé!</li>
			
					<li value="24">i’m TRYing to <strong>cut DOWN</strong> on SUGar.</li>
					<li className="margin-bottom-20 list-none">Tôi đang cố gắng <strong>cắt giảm</strong> lượng đường tiêu thụ.</li>

					<li value="25"><strong>go ON</strong>, TELL me the STORy!</li>
					<li className="margin-bottom-20 list-none">Cứ nói <strong>tiếp đi</strong>, kể cho tôi nghe câu chuyện đó đi!</li>
			
					<li value="26"><strong>hold ON</strong> a SECond, i’m COMing!</li>
					<li className="margin-bottom-20 list-none"><strong>Đợi</strong> một giây nhé, tôi đang ra đây!</li>

					<li value="27">DON’T <strong>let me DOWN</strong> <strong>this</strong> TIME.</li>
					<li className="margin-bottom-20 list-none">Đừng <strong>làm tôi thất vọng</strong> lần này nhé.</li>
			
					<li value="28">we <strong>set UP</strong> a NEW GROUP CHAT for the CLASS.</li>
					<li className="margin-bottom-20 list-none">Chúng tôi <strong>đã lập</strong> một nhóm chat mới cho lớp.</li>

					<li value="29">the PLANE <strong>took OFF</strong> TEN MINutes LATE.</li>
					<li className="margin-bottom-20 list-none">Máy bay <strong>đã cất cánh</strong> muộn 10 phút.</li>
			
					<li value="30">everything will <strong>work OUT</strong> in the END.</li>
					<li className="list-none">Mọi chuyện cuối cùng rồi cũng sẽ <strong>ổn thỏa</strong> thôi.</li>
			
				</ol>
		

			<h3 className="margin-y-50 text-center">Mẹo học & sử dụng PHRAsal VERBS siêu hiệu quả (2026)</h3>

			<p className="margin-top-20 margin-bottom-20">1. <strong>Học theo ngữ cảnh</strong> → Đừng học rời rạc. Ghi cả câu ví dụ vào sổ tay hoặc Anki.</p>

			<p className="margin-top-20 margin-bottom-20">2. <strong>Nhóm theo chủ đề</strong> (rất mạnh):</p>

			<p className="margin-top-20  text-indent-whole"><strong>Daily routine</strong>:</p>
			
				<ul className="list-square">
			
					<li>i USually <strong>wake UP</strong> at SIX AM every DAY, EVEN on WEEKends.</li>
					<li className="margin-bottom-20 list-none">Tôi thường <strong>thức dậy</strong> lúc 6 giờ sáng mỗi ngày, kể cả vào cuối tuần.</li>
			
					<li><strong>af</strong>ter the aLARM CLOCK RANG, it TOOK her TEN MINutes to FINally <strong>get UP</strong>.</li>
					<li className="margin-bottom-20 list-none">Sau khi chuông đồng hồ báo thức reo, cô ấy mất mười phút để thực sự <strong>rời khỏi</strong> giường.</li>

					<li>PLEASE <strong>turn</strong> ON the AIR conDITioner be<strong>cause</strong> it is GETting VERy HOT in <strong>this</strong> ROOM.</li>
					<li className="margin-bottom-20 list-none">Làm ơn <strong>bật</strong> máy điều hòa lên vì trong phòng này đang rất nóng.</li>
			
					<li>we are TOO TIred to COOK toNIGHT, so let's <strong>eat OUT</strong> at <strong>that</strong> iTALian REStaurant.</li>
					<li className="list-none">Chúng ta quá mệt để nấu ăn tối nay, vì vậy hãy <strong>ra ngoài ăn</strong> ở nhà hàng Ý đó nhé.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Feelings</strong>:</p>
			
				<ul className="list-square">
			
					<li>she BOUGHT him his FAVORite ICE CREAM to <strong>cheer UP</strong> <strong>af</strong>ter he FAILED his DRIving test.</li>
					<li className="margin-bottom-20 list-none">Cô ấy mua cho anh ấy món kem yêu thích để làm anh <strong>vui lên</strong> sau khi anh trượt bài kiểm tra lái xe.</li>
			
					<li>TAKE a DEEP BREATH and <strong>calm DOWN</strong> be<strong>fore</strong> you MAKE any HASty deCISions.</li>
					<li className="margin-bottom-20 list-none">Hãy hít một hơi thật sâu và <strong>bình tĩnh lại</strong> trước khi bạn đưa ra bất kỳ quyết định vội vàng nào.</li>

					<li>she COULdn't hold BACK her eMOtions anyMORE and <strong>broke DOWN</strong> in TEARS <strong>af</strong>ter HEARing the BAD NEWS.</li>
					<li className="margin-bottom-20 list-none">Cô ấy không thể kìm nén cảm xúc của mình nữa và đã <strong>suy sụp</strong> oà khóc sau khi nghe tin xấu.</li>
			
					<li>it TOOK him a LONG TIME to <strong>get Over</strong> the HEARTbreak of their BREAKup.</li>
					<li className="list-none">Anh ấy mất một thời gian dài mới có thể <strong>vượt qua</strong> nỗi đau buồn từ cuộc chia tay của họ.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole"><strong>Social</strong>:</p>
			
				<ul className="list-square">
			
					<li>on WEEKends, i USually LIKE to <strong>hang OUT</strong> with my FRIENDS at a LOcal COFfee SHOP.</li>
					<li className="margin-bottom-20 list-none">Vào cuối tuần, tôi thường thích <strong>đi chơi</strong> với bạn bè ở một quán cà phê địa phương.</li>
			
					<li>we HAVEn't SEEN EACH OTHer for MONTHS, so we met UP for LUNCH to <strong>catch UP</strong> on EACH OTHer's LIVES.</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã không gặp nhau nhiều tháng nay, vì vậy chúng tôi đã hẹn gặp nhau ăn trưa để <strong>cập nhật tình hình</strong> cuộc sống của nhau.</li>

					<li>FORtunately, ALL of my NEW COLleagues are VERy FRIENDly, and i <strong>get aLONG</strong> with them QUITE WELL.</li>
					<li className="margin-bottom-20 list-none">May mắn thay, tất cả các đồng nghiệp mới của tôi đều rất thân thiện, và tôi <strong>hòa hợp</strong> với họ khá tốt.</li>
			
					<li>they deCIded to <strong>go OUT</strong> for DINner and a MOvie to CELebrate their WEDding anniVERsary.</li>
					<li className="list-none">Họ quyết định <strong>đi ra ngoài</strong> ăn tối và xem phim để kỷ niệm ngày cưới của mình.</li>
			
				</ul>
			
			
			<p className="margin-top-20 margin-bottom-20">3. <strong>Thực hành hàng ngày</strong> → Thay thế câu bình thường bằng PHRAsal VERBS:</p>

			
				<ul className="list-square">
			
					<li>i disCOVERED the TRUTH.</li>
					<li className="list-none">Tôi đã khám phá ra sự thật.</li>
					<li className="margin-bottom-20 list-none">Thường mang tính trang trọng hơn, nhấn mạnh việc tìm ra điều gì đó mới mẻ hoặc bị che giấu.</li>
			
					<li>i <strong>found OUT</strong> the TRUTH.</li>
					<li className="list-none">Tôi <strong>đã phát hiện ra</strong> sự thật.</li>
					<li className="list-none">Thường mang nghĩa tình cờ biết được hoặc tìm ra sau khi tìm tòi.</li>
			
			
				</ul>
			

			<p className="margin-top-20 margin-bottom-20">4. <strong>Nghe</strong> & <strong>bắt chước</strong> → Xem phim, TikTok, podcast Anh/Mỹ → ghi lại PHRAsal VERBS hay gặp.</p>

			<p className="margin-top-20 margin-bottom-20">5. <strong>Dùng trong IELTS Speaking</strong></p>

			<p className="margin-top-20 text-indent-whole">Part 1:</p>
			
				<ul className="list-square">
			
					<li>i <strong>get aLONG</strong> WELL with my SIBlings.</li>
					<li className="list-none">Tôi <strong>hòa hợp</strong> rất tốt với các anh chị em ruột của mình.</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Part 2:</p>
			
				<ul className="list-square">
			
					<li>LAST YEAR i <strong>took UP</strong> YOga to <strong>get Over</strong> STRESS.</li>
					<li className="list-none">Năm ngoái, tôi <strong>đã bắt đầu tập</strong> yoga để <strong>vượt qua</strong> căng thẳng.</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Part 3:</p>
			
				<ul className="list-square">
			
					<li>many PEOple <strong>give UP</strong> EAsily when THINGS <strong>GET TOUGH</strong>.</li>
					<li className="list-none">Nhiều người dễ dàng <strong>từ bỏ</strong> khi mọi thứ trở nên <strong>khó khăn</strong>.</li>
			
				</ul>
			

			<p className="margin-top-20">Học 5–10 cụm mỗi tuần, dùng ngay trong chat hoặc tự nói → sau 2–3 tháng bạn sẽ thấy mình <strong>nói tự nhiên</strong> hơn hẳn!</p>

			<p>Chúc bạn sớm “level up” tiếng Anh với PHRAsal VERBS! 🚀</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>January 06, 2026 · by Grok ·</span>
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