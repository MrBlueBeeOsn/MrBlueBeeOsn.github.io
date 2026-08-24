import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GerundsAndInfinitives(): React.JSX.Element {

	const postId = "GerundsAndInfinitives";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#verbs-terms"><mark className="highlight-tertiary-padding-4-8">VERBS</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">GERunds and inFINitives</h1>

			<h4 className="margin-bottom-30 text-center">“Kẻ thù” lớn nhất của người học tiếng Anh… nhưng thực ra rất dễ thương nếu bạn hiểu đúng cách</h4>

			<p className="margin-top-20">Bạn đã bao giờ cảm thấy hoang mang khi đứng trước những câu như:</p>

			<h4 className="margin-y-40">enJOY</h4>
			
				<ul className="list-square">
			
					<li>i <strong>enJOY</strong> SWIMming. → đúng</li>
					<li className="list-none">Tôi thích bơi lội. (Thời hiện tại đơn)</li>
					<li className="margin-bottom-20 list-none">Từ enJOY thường được theo sau bởi một từ chỉ hành động được thêm đuôi -ing (cụ thể ở đây là SWIMming) để diễn tả một sở thích hoặc niềm vui chung chung ở hiện tại.</li>
			
					<li>i <strong>enJOY</strong> to SWIM. → sai</li>
			
				</ul>

			
			<h4 className="margin-y-40">WANT</h4>
			
				<ul className="list-square">
			
					<li>i <strong>WANT</strong> to GO. → đúng</li>
					<li className="list-none">Tôi muốn đi. (Thời hiện tại đơn)</li>
					<li className="margin-bottom-20 list-none">Từ WANT dùng để diễn tả mong muốn ở hiện tại, và nó được nối tiếp ngay bằng một từ chỉ hành động có chữ to đi kèm ở phía trước (to GO).</li>

					<li>i <strong>WANT</strong> GOing → sai kinh khủng</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole">Rồi đột nhiên lại gặp những câu "phản bội" kiểu:</p>

			<h4 className="margin-y-40">STOP</h4>
			
				<ul className="list-square">
			
					<li>i <strong>STOPPED</strong> SMOKing.</li>
					<li className="list-none">Tôi đã bỏ hút thuốc (rồi). (Thời quá khứ đơn)</li>
					<li className="margin-bottom-20 list-none">Cấu trúc stop đi kèm với từ chỉ hành động có đuôi -ing (SMOKing) mang ý nghĩa là ngừng hẳn hoặc từ bỏ một thói quen (tôi đã từng hút thuốc và bây giờ không làm việc đó nữa).</li>
			
					<li>i <strong>STOPPED</strong> to SMOKE.</li>
					<li className="list-none">Tôi đã dừng lại để hút thuốc. (Thời quá khứ đơn)</li>
					<li className="margin-bottom-20 list-none">Cấu trúc stop đi kèm với từ chỉ hành động có chữ to ở trước (to SMOKE) mang ý nghĩa là tạm dừng một việc đang làm lại để chuyển sang thực hiện một việc khác (ví dụ: đang đi dọc đường thì dừng chân lại để hút thuốc).</li>
			
				</ul>
			
			<p className="margin-top-20">Hai cấu trúc này khiến hàng triệu người học tiếng Anh phát điên. Nhưng nếu bạn hiểu được "tâm lý" và "tính cách" của chúng, mọi thứ sẽ trở nên… đáng yêu hơn rất nhiều.</p>

			{/* 1. Hai nhân vật chính và tính cách cơ bản */}

			<h3 className="margin-y-50 text-center">1. Hai nhân vật chính và tính cách cơ bản</h3>


			<h4 className="margin-y-40">SWIMming</h4>
			
				<ul className="list-square">
			
					<li><strong>SWIMming</strong> in the COOL BLUE SEA on a HOT SUMmer MORNing MAKES me exTREMEly HAPpy.</li>
					<li className="list-none">Bơi lội ở làn nước biển xanh mát vào một buổi sáng mùa hè nóng nực làm tôi vô cùng hạnh phúc.</li>
					<li className="margin-bottom-20 list-none">Cụm SWIMming (việc bơi lội) đóng vai trò là chủ thể của câu, kết hợp với động từ MAKES và từ "me" làm danh nhận (đối tượng nhận tác động trở nên hạnh phúc).</li>
			
					<li>i WANT <strong>to SWIM</strong> in the NEWly Open inFINity POOL at the ROOFtop hoTEL this WEEKEND.</li>
					<li className="list-none">Tôi muốn bơi ở bể bơi vô cực mới mở trên tầng thượng của khách sạn vào cuối tuần này.</li>
					<li className="list-none">i là chủ thể, kết hợp với cấu trúc WANT to + hành động nguyên mẫu và cụm từ chỉ địa điểm đóng vai trò là danh nhận nơi chốn phía sau.</li>
			
				</ul>
			
			
			<p className="margin-top-20">Tóm tắt điểm khác biệt cấu trúc</p>
			
				<ul className="list-square">
			
					<li>Dạng V-ing làm chủ thể: Khi một hành động đứng ở đầu câu làm trung tâm gây ra sự việc (chủ thể chính), nó thường được chia ở dạng thêm đuôi -ing.</li>
			
					<li>Dạng want to + hành động: Dùng để diễn tả mong muốn của chủ thể khi thực hiện một hành động nào đó.</li>
			
				</ul>
			

			{/* 2. Bảng phân loại siêu thực dụng (cập nhật 2025) */}

			<h3 className="margin-y-50 text-center">2. Bảng phân loại siêu thực dụng (cập nhật 2025)</h3>

				<table className="margin-y-50">
					<thead>
						<tr>
							<td>Nhóm</td>
							<th>Chỉ dùng Gerund (-ing)</th>
							<th>Chỉ dùng Infinitive (to V)</th>
							<th>Cả hai nhưng NGHĨA KHÁC NHAU</th>
						</tr>
					</thead>

					<tbody>

						<tr>
								<td>Cảm xúc & sở thích</td>
								<td>enjoy, like*, love*, hate*, mind, fancy</td>
								<td>want, would like, would love, would hate*</td>
								<td>like / love / hate / prefer</td>
						</tr>
						
						<tr>
								<td>Thói quen / bắt đầu / kết thúc</td>
								<td>finish, keep, avoid, consider, imagine, suggest</td>
								<td>decide, plan, hope, promise, refuse, learn, agree</td>
								<td></td>
						</tr>
						
						<tr>
								<td>Sau giới cơ</td>
								<td>interested in, good at, tired of, look forward to, be used to, give up</td>
								<td>(không có)</td>
								<td>-</td>
						</tr>

						<tr>
								<td>Động cơ + danh nhận + to V</td>
								<td>(không có)</td>
								<td>ask, allow, tell, force, want, expect, need, help sb to do</td>
								<td>-</td>
						</tr>

						<tr>
								<td>Một số hành động đặc biệt</td>
								<td>admit, deny, practice, miss, postpone, risk</td>
								<td>manage, fail, afford, deserve, appear, seem, tend</td>
								<td>regret, go on, mean</td>
						</tr>
					</tbody>
				</table>
					
			<p className="margin-top-20">(*nhóm like/love/hate/prefer: dùng cả hai đều được, nhưng -ing mang tính "tổng quát, thường xuyên", to V mang tính "cụ thể, tình huống riêng lẻ")</p>

			{/* 3. Những cặp "anh em sinh đôi nhưng tính cách trái ngược" – dễ nhầm nhất */}

			<h3 className="margin-y-50 text-center">3. Những cặp "anh em sinh đôi nhưng tính cách trái ngược" – dễ nhầm nhất</h3>
					
			<p>Cặp đôi đáng sợ nhất mà ai cũng từng bị lừa:</p>
			
			<h4 className="margin-y-40">1. reMEMber</h4>
			
				<ul className="list-square">
			
					<li>Do you <strong>reMEMber</strong> LOCKing the DOOR?</li>
					<li className="list-none">Bạn có nhớ là đã khóa cửa chưa?</li>
					<li className="margin-bottom-20 list-none">You là chủ thể. Cấu trúc reMEMber + hành động thêm đuôi -ing dùng để hỏi hoặc nhắc lại một sự việc, hành động đã xảy ra trong quá khứ (hành động khóa cửa đã làm rồi, giờ hỏi lại xem có nhớ việc đó không).</li>
			
					<li><strong>reMEMber</strong> to LOCK the DOOR.</li>
					<li className="list-none">Hãy nhớ khóa cửa nhé.</li>
					<li className="list-none">Câu mệnh lệnh ngầm hiểu chủ thể là You. Cấu trúc reMEMber + to + hành động nguyên mẫu dùng để nhắc nhở ai đó thực hiện một nhiệm vụ, một việc chưa làm ở tương lai (cửa chưa khóa, cần nhớ để làm).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">2. forGET</h4>
			
				<ul className="list-square">
			
					<li>i’ll NEVer <strong>forGET</strong> MEETing you at the COFfee SHOP LAST SUMmer.</li>
					<li className="list-none">Tôi sẽ không bao giờ quên lần gặp bạn ở quán cà phê vào mùa hè năm ngoái.</li>
					<li className="margin-bottom-20 list-none">i là chủ thể. Cấu trúc forGET + hành động thêm đuôi -ing dùng để diễn tả việc không bao giờ quên một sự việc, kỷ niệm đã xảy ra trong quá khứ.</li>
			
					<li>DON’T <strong>forGET</strong> to BUY MILK on your WAY HOME from WORK toDAY.</li>
					<li className="list-none">Đừng quên mua sữa trên đường đi làm về hôm nay nhé.</li>
					<li className="list-none">Câu mệnh lệnh ngầm hiểu chủ thể là you. Cấu trúc forGET + to + hành động nguyên mẫu nhắc nhở ai đó nhớ thực hiện một nhiệm vụ, một việc chưa làm ở tương lai.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">3. STOP</h4>
			
				<ul className="list-square">
			
					<li>he <strong>STOPPED</strong> SMOking LAST YEAR to imPROVE his HEALTH.</li>
					<li className="list-none">Anh ấy đã bỏ hút thuốc vào năm ngoái để cải thiện sức khỏe.</li>
					<li className="margin-bottom-20 list-none">he là chủ thể. Cấu trúc stop + hành động thêm đuôi -ing mang nghĩa dừng hẳn hoặc từ bỏ một việc đang làm/thói quen cũ.</li>
			
					<li>he <strong>STOPPED</strong> to SMOKE a cigaRETTE on his WAY HOME from WORK.</li>
					<li className="list-none">Anh ấy đã dừng lại để hút một điếu thuốc trên đường đi làm về.</li>
					<li className="list-none">he là chủ thể. Cấu trúc stop + to + hành động nguyên mẫu mang nghĩa dừng việc đang làm lại nhằm mục đích thực hiện hành động tiếp theo.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">4. TRY</h4>
			
				<ul className="list-square">
			
					<li>you should <strong>TRY</strong> EATing LESS SUGar.</li>
					<li className="list-none">Bạn nên thử ăn ít đường đi xem sao.</li>
					<li className="margin-bottom-20 list-none">you là chủ thể, kết hợp với cấu trúc thử nghiệm một việc để xem kết quả.</li>
			
					<li>you NEED to <strong>TRY</strong> to EAT LESS SUGar.</li>
					<li className="list-none">Bạn cần phải cố gắng ăn ít đường lại.</li>
					<li className="list-none">you là chủ thể, kết hợp với cấu trúc thể hiện sự nỗ lực vượt qua khó khăn để thực hiện một hành động.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">5. reGRET</h4>
			
				<ul className="list-square">
			
					<li>i <strong>reGRET</strong> TELLing her the TRUTH.</li>
					<li className="list-none">Tôi hối hận vì đã nói cho cô ấy sự thật.</li>
					<li className="margin-bottom-20 list-none">Cấu trúc "reGRET + hành động thêm đuôi -ing": Dùng để diễn tả sự hối hận về một việc đã xảy ra trong quá khứ.</li>
			
					<li>i <strong>reGRET</strong> to TELL you that your appliCAtion has been reJECTed.</li>
					<li className="list-none">Tôi rất tiếc phải thông báo với bạn rằng đơn xin việc của bạn đã bị từ chối.</li>
					<li className="list-none">Cấu trúc "reGRET to + hành động nguyên mẫu": Thường dùng ở dạng trang trọng (đặc biệt với các từ chỉ việc thông báo như inFORM, TELL, anNOUNCE) để thông báo một tin buồn hoặc không mấy tốt đẹp ngay tại thời điểm nói.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">6. conTINued</h4>
			
				<ul className="list-square">
			
					<li>she <strong>conTINued</strong> WORKing on her rePORT EVen after EVERyone ELSE had LEFT the OFfice.</li>
					<li className="list-none">Cô ấy vẫn tiếp tục làm bản báo cáo của mình ngay cả khi tất cả mọi người khác đã rời khỏi văn phòng.</li>
					<li className="margin-bottom-20 list-none">she là chủ thể. Cấu trúc này dùng khi một hành động đang diễn ra và được tiếp tục thực hiện liên tục không gián đoạn.</li>
			
					<li>after FINishing her COFfee, she <strong>conTINued</strong> to WRITE the Emails.</li>
					<li className="list-none">Sau khi uống xong cà phê, cô ấy tiếp tục viết các Emails tiếp theo.</li>
					<li className="list-none">she là chủ thể. Cấu trúc này dùng khi chuyển sang một hành động mới hoặc tiếp tục một việc sau một khoảng dừng (tuy nhiên, trong phần lớn các trường hợp thông thường, hai cấu trúc này có nghĩa gần như tương đương nhau).</li>
			
				</ul>
			
			<h4 className="margin-y-40">7. beGIN</h4>
			
				<ul className="list-square">
			
					<li>it <strong>beGAN</strong> RAINing HEAVily JUST as we STEPPED OUT of the RESTaurant.</li>
					<li className="list-none">Trời bắt đầu đổ mưa lớn ngay khi chúng tôi bước ra khỏi nhà hàng.</li>
					<li className="margin-bottom-20 list-none">It là chủ thể. Cấu trúc này thường được dùng khi miêu tả một quá trình hoặc sự việc tự nhiên bắt đầu diễn ra.</li>
			
					<li>he <strong>beGAN</strong> to exPLAIN the NEW acCOUNting RULES to the TEAM MEMbers.</li>
					<li className="list-none">Anh ấy bắt đầu giải thích các quy tắc kế toán mới cho các thành viên trong nhóm.</li>
					<li className="list-none">he là chủ thể. Cấu trúc này thường nhấn mạnh vào thời điểm một hành động có chủ ý chính thức được khởi đầu.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">8. START</h4>
			
				<ul className="list-square">
			
					<li>the CAR <strong>STARTed</strong> MAking a STRANGE NOISE on the WAY HOME.</li>
					<li className="list-none">Chiếc xe bắt đầu phát ra một tiếng động lạ trên đường về nhà.</li>
					<li className="margin-bottom-20 list-none">The car là chủ thể. Cấu trúc này thường được dùng để chỉ sự khởi đầu của một sự việc, hiện tượng hoặc quá trình đang diễn ra.</li>
			
					<li>she <strong>STARTed</strong> to CHECK the MONTHly fiNANcial rePORTS on her comPUter.</li>
					<li className="list-none">Cô ấy bắt đầu kiểm tra các báo cáo tài chính hàng tháng trên máy tính của mình.</li>
					<li className="list-none">She là chủ thể. Cấu trúc này thường nhấn mạnh vào thời điểm mà một người bắt tay vào thực hiện một hành động có ý thức.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40"></h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			

			{/* 4. Mẹo nhớ siêu nhanh cho người Việt (2025 edition) */}

			<h3 className="margin-y-50 text-center">4. Mẹo nhớ siêu nhanh cho người Việt (2025 edition)</h3>
			
				<ul className="list-square">
			
					<li><strong>Thích gì</strong>, <strong>ghét gì</strong>, <strong>ngại gì</strong> → thường là -<strong>ing</strong></li>
					<li className="list-none">→ enjoy dancing, hate waiting, mind helping</li>
			
					<li className="margin-top-20"><strong>Muốn gì</strong>, <strong>hứa gì</strong>, <strong>dự định gì</strong> → hầu hết là <strong>to V</strong></li>
					<li className="list-none">→ want to travel, promise to call, plan to move</li>

					<li className="margin-top-20"><strong>Sau giới cơ thì phải</strong> -<strong>ing</strong> (đây là luật sắt)</li>
					<li className="list-none">→ dream of becoming, apologize for being late, good at singing</li>

					<li className="margin-top-20">Khi không chắc → tự hỏi:</li>
					<li className="list-none">Đây là <strong>trải nghiệm</strong>/<strong>hoạt động nói chung hay mục đích</strong>/<strong>ý định tương lai</strong>?</li>
					<li className="list-none">→ Chung chung, trải nghiệm → -ing</li>
					<li className="list-none">→ Ý định, mục đích → to V</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">5. Bài test nhỏ để kiểm tra ngay (chỉ 5 câu)</h3>

				<ol>

					<li>i’m LOOKing FORward to __________ (SEE) you next WEEK.</li>

					<li>she adMITted __________ (STEAL) the COOKies..</li>

					<li>would you MIND __________ (NOT/PLAY) MUsic SO LOUD?</li>
			
					<li>i TRIED __________ (Open) the JAR but i COULDn't.</li>
			
					<li>we reGRET __________ (inFORM) you that the eVENT has been CANceled.</li>
			
				</ol>

			<p className="margin-top-20"><strong>Đáp án bài test nhỏ</strong></p>
			
				<ol>
			
					<li>SEEing</li>
			
					<li>STEALing / having STOlen (cả hai đều đúng, nhưng stealing phổ biến hơn)</li>
			
					<li>NOT PLAYing</li>

					<li>to OPen</li>
			
					<li>to inFORM</li>
			
				</ol>

			<h3 className="margin-y-50 text-center">Kết luận: Đừng sợ, hãy "làm quen" với họ</h3>

			<p>GERunds và inFINitives không phải là quy tắc cần học thuộc lòng, mà là <strong>hai cách nhìn khác nhau về hành động</strong>:</p>
			
				<ul className="list-square">

					<li>GERund (V-ing) = hành động được xem như <strong>một thứ</strong>, <strong>một trải nghiệm</strong></li>
			
					<li>inFINitive (to V) = hành động được xem như <strong>một mục tiêu</strong>, <strong>một ý định</strong></li>
			
				</ul>

			<p className="margin-top-20">Khi bạn bắt đầu nghĩ theo cách này thay vì cố nhớ từng động cơ, bạn sẽ thấy chúng… thân thiện hơn rất nhiều.</p>

			<p>Hãy thử nói to một câu với cả hai cách và cảm nhận sự khác biệt. Bạn sẽ thấy ngay: ngôn ngữ không chỉ là quy tắc, mà còn là <strong>cảm giác</strong>.</p>

			<p className="margin-top-20">Chúc bạn sớm "hòa hợp" với hai người bạn Gerund & Infinitive nhé! 💙</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 29, 2025 · by Grok and 🐝Mr. Bee Osn  ·</span>
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