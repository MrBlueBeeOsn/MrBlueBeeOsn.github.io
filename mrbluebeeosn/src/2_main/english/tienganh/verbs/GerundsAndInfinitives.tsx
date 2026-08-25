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

			{/* II. Hai nhân vật chính và tính cách cơ bản */}

			<h3 className="margin-y-50 text-center">I. Hai nhân vật chính và tính cách cơ bản</h3>


			<h4 className="margin-y-40">SWIMming</h4>
			
				<ul className="list-square">
			
					<li><strong>SWIMming</strong> in the COOL BLUE SEA on a HOT SUMmer MORNing MAKES me exTREMEly HAPpy.</li>
					<li className="list-none">Bơi lội ở làn nước biển xanh mát vào một buổi sáng mùa hè nóng nực làm tôi vô cùng hạnh phúc.</li>
					<li className="margin-bottom-20 list-none">Cụm SWIMming (việc bơi lội) đóng vai trò là chủ thể của câu, kết hợp với hành động MAKES và từ "me" làm danh nhận (đối tượng nhận tác động trở nên hạnh phúc).</li>
			
					<li>i WANT <strong>to SWIM</strong> in the NEWly Open inFINity POOL at the ROOFtop hoTEL this WEEKEND.</li>
					<li className="list-none">Tôi muốn bơi ở bể bơi vô cực mới mở trên tầng thượng của khách sạn vào cuối tuần này.</li>
					<li className="list-none">i là chủ thể, kết hợp với cấu trúc WANT to + hành động nguyên mẫu và cụm từ chỉ địa điểm đóng vai trò là danh nhận nơi chốn phía sau.</li>
			
				</ul>
			
			
			<p className="margin-top-20">Tóm tắt điểm khác biệt cấu trúc</p>
			
				<ul className="list-square">
			
					<li>Dạng V-ing làm chủ thể: Khi một hành động đứng ở đầu câu làm trung tâm gây ra sự việc (chủ thể chính), nó thường được chia ở dạng thêm đuôi -ing.</li>
			
					<li>Dạng want to + hành động: Dùng để diễn tả mong muốn của chủ thể khi thực hiện một hành động nào đó.</li>
			
				</ul>
			

			{/* II. Bảng phân loại siêu thực dụng (cập nhật 2025) */}

			<h3 className="margin-y-50 text-center">II. Bảng phân loại siêu thực dụng (cập nhật 2025)</h3>

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
								<td>Sau giới cơ</td>
								<td>interested in, tired of</td>
								<td>(không có)</td>
								<td>-</td>
						</tr>

						<tr>
								<td>Động cơ + danh nhận + to V</td>
								<td>(không có)</td>
								<td>ask, allow, tell</td>
								<td>-</td>
						</tr>

						<tr>
								<td>Một số hành động đặc biệt</td>
								<td>admit, deny, practice, miss, postpone, risk</td>
								<td>manage, fail, afford, deserve, appear, seem, tend</td>
								<td></td>
						</tr>
					</tbody>
				</table>
					
			<p className="margin-top-20">(*nhóm like/love/hate/prefer: dùng cả hai đều được, nhưng -ing mang tính "tổng quát, thường xuyên", to V mang tính "cụ thể, tình huống riêng lẻ")</p>

			{/* 2. Những cặp "anh em sinh đôi nhưng tính cách trái ngược" – dễ nhầm nhất */}

			<h3 className="margin-y-50 text-center">2. Những cặp "anh em sinh đôi nhưng tính cách trái ngược" – dễ nhầm nhất</h3>
					
			<p>Cặp đôi đáng sợ nhất mà ai cũng từng bị lừa:</p>
			
			<h4 className="margin-y-40">1. reMEMber</h4>
			
				<ul className="list-square">
			
					<li>Do you <strong>reMEMber LOCKing</strong> the DOOR?</li>
					<li className="list-none">Bạn có nhớ là đã khóa cửa chưa?</li>
					<li className="margin-bottom-20 list-none">you là chủ thể. Cấu trúc reMEMber + hành động thêm đuôi -ing dùng để hỏi hoặc nhắc lại một sự việc, hành động đã xảy ra trong quá khứ (hành động khóa cửa đã làm rồi, giờ hỏi lại xem có nhớ việc đó không).</li>
			
					<li><strong>reMEMber to LOCK</strong> the DOOR.</li>
					<li className="list-none">Hãy nhớ khóa cửa nhé.</li>
					<li className="list-none">Câu mệnh lệnh ngầm hiểu chủ thể là you. Cấu trúc reMEMber + to + hành động nguyên mẫu dùng để nhắc nhở ai đó thực hiện một nhiệm vụ, một việc chưa làm ở tương lai (cửa chưa khóa, cần nhớ để làm).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">2. forGET</h4>
			
				<ul className="list-square">
			
					<li>i’ll NEVer <strong>forGET MEETing</strong> you at the COFfee SHOP LAST SUMmer.</li>
					<li className="list-none">Tôi sẽ không bao giờ quên lần gặp bạn ở quán cà phê vào mùa hè năm ngoái.</li>
					<li className="margin-bottom-20 list-none">i là chủ thể. Cấu trúc forGET + hành động thêm đuôi -ing dùng để diễn tả việc không bao giờ quên một sự việc, kỷ niệm đã xảy ra trong quá khứ.</li>
			
					<li>DON’T <strong>forGET to BUY</strong> MILK on your WAY HOME from WORK toDAY.</li>
					<li className="list-none">Đừng quên mua sữa trên đường đi làm về hôm nay nhé.</li>
					<li className="list-none">Câu mệnh lệnh ngầm hiểu chủ thể là you. Cấu trúc forGET + to + hành động nguyên mẫu nhắc nhở ai đó nhớ thực hiện một nhiệm vụ, một việc chưa làm ở tương lai.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">3. STOP</h4>
			
				<ul className="list-square">
			
					<li>he <strong>STOPPED SMOking</strong> LAST YEAR to imPROVE his HEALTH.</li>
					<li className="list-none">Anh ấy đã bỏ hút thuốc vào năm ngoái để cải thiện sức khỏe.</li>
					<li className="margin-bottom-20 list-none">he là chủ thể. Cấu trúc stop + hành động thêm đuôi -ing mang nghĩa dừng hẳn hoặc từ bỏ một việc đang làm/thói quen cũ.</li>
			
					<li>he <strong>STOPPED to SMOKE</strong> a cigaRETTE on his WAY HOME from WORK.</li>
					<li className="list-none">Anh ấy đã dừng lại để hút một điếu thuốc trên đường đi làm về.</li>
					<li className="list-none">he là chủ thể. Cấu trúc stop + to + hành động nguyên mẫu mang nghĩa dừng việc đang làm lại nhằm mục đích thực hiện hành động tiếp theo.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">4. TRY</h4>
			
				<ul className="list-square">
			
					<li>you should <strong>TRY EATing</strong> LESS SUGar.</li>
					<li className="list-none">Bạn nên thử ăn ít đường đi xem sao.</li>
					<li className="margin-bottom-20 list-none">you là chủ thể, kết hợp với cấu trúc thử nghiệm một việc để xem kết quả.</li>
			
					<li>you NEED to <strong>TRY to EAT</strong> LESS SUGar.</li>
					<li className="list-none">Bạn cần phải cố gắng ăn ít đường lại.</li>
					<li className="list-none">you là chủ thể, kết hợp với cấu trúc thể hiện sự nỗ lực vượt qua khó khăn để thực hiện một hành động.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">5. reGRET</h4>
			
				<ul className="list-square">
			
					<li>i <strong>reGRET TELLing</strong> her the TRUTH.</li>
					<li className="list-none">Tôi hối hận vì đã nói cho cô ấy sự thật.</li>
					<li className="margin-bottom-20 list-none">Cấu trúc "reGRET + hành động thêm đuôi -ing": Dùng để diễn tả sự hối hận về một việc đã xảy ra trong quá khứ.</li>
			
					<li>i <strong>reGRET to TELL</strong> you that your appliCAtion has been reJECTed.</li>
					<li className="list-none">Tôi rất tiếc phải thông báo với bạn rằng đơn xin việc của bạn đã bị từ chối.</li>
					<li className="list-none">Cấu trúc "reGRET to + hành động nguyên mẫu": Thường dùng ở dạng trang trọng (đặc biệt với các từ chỉ việc thông báo như inFORM, TELL, anNOUNCE) để thông báo một tin buồn hoặc không mấy tốt đẹp ngay tại thời điểm nói.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">6. conTINue</h4>
			
				<ul className="list-square">
			
					<li>she <strong>conTINued WORKing</strong> on her rePORT EVen after EVERyone ELSE had LEFT the OFfice.</li>
					<li className="list-none">Cô ấy vẫn tiếp tục làm bản báo cáo của mình ngay cả khi tất cả mọi người khác đã rời khỏi văn phòng.</li>
					<li className="margin-bottom-20 list-none">she là chủ thể. Cấu trúc này dùng khi một hành động đang diễn ra và được tiếp tục thực hiện liên tục không gián đoạn.</li>
			
					<li>after FINishing her COFfee, she <strong>conTINued to WRITE</strong> the Emails.</li>
					<li className="list-none">Sau khi uống xong cà phê, cô ấy tiếp tục viết các Emails tiếp theo.</li>
					<li className="list-none">she là chủ thể. Cấu trúc này dùng khi chuyển sang một hành động mới hoặc tiếp tục một việc sau một khoảng dừng (tuy nhiên, trong phần lớn các trường hợp thông thường, hai cấu trúc này có nghĩa gần như tương đương nhau).</li>
			
				</ul>
			
			<h4 className="margin-y-40">7. beGIN</h4>
			
				<ul className="list-square">
			
					<li>it <strong>beGAN RAINing</strong> HEAVily JUST as we STEPPED OUT of the RESTaurant.</li>
					<li className="list-none">Trời bắt đầu đổ mưa lớn ngay khi chúng tôi bước ra khỏi nhà hàng.</li>
					<li className="margin-bottom-20 list-none">it là chủ thể. Cấu trúc này thường được dùng khi miêu tả một quá trình hoặc sự việc tự nhiên bắt đầu diễn ra.</li>
			
					<li>he <strong>beGAN to exPLAIN</strong> the NEW acCOUNting RULES to the TEAM MEMbers.</li>
					<li className="list-none">Anh ấy bắt đầu giải thích các quy tắc kế toán mới cho các thành viên trong nhóm.</li>
					<li className="list-none">he là chủ thể. Cấu trúc này thường nhấn mạnh vào thời điểm một hành động có chủ ý chính thức được khởi đầu.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">8. START</h4>
			
				<ul className="list-square">
			
					<li>the CAR <strong>STARTed MAking</strong> a STRANGE NOISE on the WAY HOME.</li>
					<li className="list-none">Chiếc xe bắt đầu phát ra một tiếng động lạ trên đường về nhà.</li>
					<li className="margin-bottom-20 list-none">the CAR là chủ thể. Cấu trúc này thường được dùng để chỉ sự khởi đầu của một sự việc, hiện tượng hoặc quá trình đang diễn ra.</li>
			
					<li>she <strong>STARTed to CHECK</strong> the MONTHly fiNANcial rePORTS on her comPUter.</li>
					<li className="list-none">Cô ấy bắt đầu kiểm tra các báo cáo tài chính hàng tháng trên máy tính của mình.</li>
					<li className="list-none">she là chủ thể. Cấu trúc này thường nhấn mạnh vào thời điểm mà một người bắt tay vào thực hiện một hành động có ý thức.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">9. preFER</h4>
			
				<ul className="list-square">
			
					<li>he <strong>preFERS WORKing</strong> with RAW DAta RATHer than SUMmarizing TEXT.</li>
					<li className="list-none">Anh ấy thích làm việc với dữ liệu thô hơn là tóm tắt văn bản.</li>
					<li className="margin-bottom-20 list-none">he là chủ thể. Cấu trúc preFER + V-ing thường dùng để diễn tả một sở thích chung mang tính lâu dài hoặc thói quen.</li>
			
					<li>RIGHT NOW, she <strong>preFERS to STAY</strong> HOME and READ a BOOK inSTEAD of GOing OUT.</li>
					<li className="list-none">Ngay lúc này, cô ấy thích ở nhà đọc sách hơn là đi chơi bên ngoài.</li>
					<li className="list-none">she là chủ thể. Cấu trúc preFER + to V thường dùng khi nhấn mạnh vào một sở thích hoặc sự lựa chọn trong một tình huống cụ thể (thường đi kèm với từ would preFER hoặc các trạng từ chỉ thời điểm như now).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">10. HATE</h4>
			
				<ul className="list-square">
			
					<li>he <strong>HATES WAking UP</strong> EARly on FREEzing WINter MORnings.</li>
					<li className="list-none">Anh ấy ghét việc thức dậy sớm vào những buổi sáng mùa đông lạnh giá.</li>
					<li className="margin-bottom-20 list-none">he là chủ thể. Cấu trúc HATE + V-ing thường dùng để diễn tả sự khó chịu, không thích một thói quen, một hoạt động nói chung hoặc một trải nghiệm lặp đi lặp lại.</li>
			
					<li>i <strong>HATE to interRUPT</strong> your WORK, but we NEED to CHECK the fiNANcial rePORTS RIGHT NOW.</li>
					<li className="list-none">Tôi rất không muốn làm gián đoạn công việc của bạn, nhưng chúng ta cần kiểm tra các báo cáo tài chính ngay bây giờ.</li>
					<li className="list-none">i là chủ thể. Cấu trúc HATE + to V thường dùng để nói về việc không muốn phải làm một hành động cụ thể nào đó (thường dùng trong các tình huống giao tiếp lịch sự, áy náy khi phải làm phiền ai đó, ví dụ như i HATE to SAY this, but ...).</li>
			
				</ul>

			
			<h4 className="margin-y-40">11. LOVE</h4>
			
				<ul className="list-square">
			
					<li>she <strong>LOVES BREWing</strong> traDITional vietnaMESE COFfee Using a PHIN FILter every MORning.</li>
					<li className="list-none">Cô ấy rất thích pha cà phê truyền thống Việt Nam bằng phin vào mỗi buổi sáng.</li>
					<li className="margin-bottom-20 list-none">she là chủ thể. Cấu trúc LOVE + V-ing dùng để diễn tả niềm đam mê, sở thích lâu dài hoặc cảm giác tận hưởng khi làm một việc gì đó nói chung.</li>
			
					<li>i <strong>LOVE to READ</strong> SPECialized acCOUNting and PROgramming BLOGS on the WEEKend.</li>
					<li className="list-none">Tôi rất thích đọc các bài viết chuyên sâu về kế toán và lập trình vào dịp cuối tuần.</li>
					<li className="list-none">i là chủ thể. Cấu trúc LOVE + to V nhấn mạnh vào sự lựa chọn hoặc thói quen mà chủ thể cho là hợp lý, đáng làm, hoặc rất hào hứng muốn thực hiện. (Ngoài ra, cấu trúc i'd LOVE to... cũng rất hay dùng để bày tỏ mong muốn làm gì đó, ví dụ: i'd LOVE to JOIN your TEAM).</li>
			
				</ul>
			

			<h4 className="margin-y-40">12. LIKE</h4>
			
				<ul className="list-square">
			
					<li>he <strong>LIKES exPERimenting</strong> with DIFferent PHIN FILter techNIQUES to MAKE his COFfee STRONGer.</li>
					<li className="list-none">Anh ấy thích thử nghiệm các kỹ thuật dùng phin khác nhau để làm cho cà phê của mình đậm đà hơn.</li>
					<li className="margin-bottom-20 list-none">he là chủ thể. Cấu trúc LIKE + V-ing nhấn mạnh vào sự tận hưởng, cảm giác thích thú khi hành động đó đang diễn ra hoặc sở thích chung.</li>
			
					<li>she <strong>LIKES to ORganize</strong> her acCOUNting DOCuments CAREfully before LEAVing the OFfice.</li>
					<li className="list-none">Cô ấy thích sắp xếp các tài liệu kế toán của mình một cách cẩn thận trước khi rời văn phòng.</li>
					<li className="list-none">she là chủ thể. Cấu trúc LIKE + to V thường thể hiện thói quen, sự lựa chọn có ý thức hoặc việc mà chủ thể cho là hợp lý, cần thiết phải làm như vậy.</li>
			
				</ul>

			
			<h4 className="margin-y-40">13. MEAN</h4>
			
				<ul className="list-square">
			
					<li>CHANGing the rePORTing SOFTware <strong>MEANS reWRIting</strong> all the old DAta FILES.</li>
					<li className="list-none">Việc thay đổi phần mềm báo cáo có nghĩa là phải viết lại tất cả các tệp dữ liệu cũ.</li>
					<li className="margin-bottom-20 list-none">Cụm CHANGing the rePORTing SOFTware là chủ thể. Cấu trúc MEAN + V-ing dùng để chỉ hệ quả, sự việc hoặc kết quả tất yếu mà một hành động dẫn đến.</li>
			
					<li>he <strong>MEANT to FINish</strong> the fiNANcial AUdit rePORT YESterday, but he RAN OUT of TIME.</li>
					<li className="list-none">Anh ấy đã có ý định hoàn thành báo cáo kiểm toán tài chính vào ngày hôm qua, nhưng anh ấy đã hết thời gian.</li>
					<li className="list-none">he là chủ thể. Cấu trúc MEAN + to V dùng để diễn tả ý định, dự định hoặc mong muốn thực hiện một việc gì đó (thường dùng trong dạng quá khứ MEANT to để giải thích cho việc chưa hoàn thành).</li>
			
				</ul>

			
			<h4 className="margin-y-40">14. GO ON</h4>
			
				<ul className="list-square">
			
					<li>after a SHORT COFfee BREAK, she <strong>WENT ON WORKing</strong> on the MONTHly TAX rePORTS.</li>
					<li className="list-none">Sau một khoảng nghỉ uống cà phê ngắn, cô ấy đã tiếp tục làm các báo cáo thuế hàng tháng.</li>
					<li className="margin-bottom-20 list-none">she là chủ thể. Cấu trúc GO ON + V-ing dùng để chỉ việc tiếp tục một hành động đang làm trước đó mà không bị gián đoạn hay thay đổi công việc.</li>
			
					<li>the acCOUNtant FINished reVIEWing the INvoices and then <strong>WENT ON to CHECK</strong> the BANK STATEments.</li>
					<li className="list-none">Người kế toán đã xem xét xong các hóa đơn và sau đó chuyển sang kiểm tra các sao kê ngân hàng.</li>
					<li className="list-none">the acCOUNtant là chủ thể. Cấu trúc GO ON + to V dùng khi hoàn thành xong một hành động/giai đoạn này và bước sang thực hiện một hành động, giai đoạn mới tiếp theo.</li>
			
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
			

			
			{/* III. Chỉ dùng Gerund (-ing) */}

			<h3 className="margin-y-50 text-center">III. Chỉ dùng Gerund (-ing)</h3>
			
			
			<h4 className="margin-y-40">1. FANcy GRABbing</h4>
			
				<ul className="list-square">
			
					<li>do you <strong>FANcy GRABbing</strong> a CUP of traDITional vietnaMESE COFfee this AFternoon?</li>
					<li className="list-none">Bạn có hứng thú đi uống một ly cà phê truyền thống Việt Nam vào chiều nay không?</li>
					<li className="list-none">you là chủ thể. Cấu trúc FANcy + V-ing (thường dùng nhiều trong tiếng Anh Anh) mang nghĩa muốn hoặc có hứng thú trải nghiệm một hành động nào đó, thường dùng trong câu hỏi mời mọc hoặc diễn tả sở thích bất chợt.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">2. MIND WORKing</h4>
			
				<ul className="list-square">
			
					<li>i DON'T <strong>MIND WORKing</strong> Overtime to DOUble-CHECK the fiNANcial FIGures.</li>
					<li className="list-none">Tôi không ngại làm việc thêm giờ để kiểm tra lại các số liệu tài chính.</li>
					<li className="list-none">I là chủ thể. Cấu trúc MIND + V-ing thường được dùng trong câu phủ định (ví dụ: DON'T MIND - không ngại) hoặc câu hỏi (ví dụ: would you MIND...? - Bạn có phiền...) để hỏi ý kiến hoặc bày tỏ cảm giác không bị làm phiền bởi một hành động cụ thể.</li>
			
				</ul>

			
			<h4 className="margin-y-40">3. sugGESTed TRYing</h4>
			
				<ul className="list-square">
			
					<li>she <strong>sugGESTed TRYing</strong> a NEW PHIN FILter techNIQUE to MAKE the COFfee TASTE BETter.</li>
					<li className="list-none">Cô ấy đã gợi ý thử một kỹ thuật dùng phin mới để làm cho cà phê có vị ngon hơn.</li>
					<li className="list-none">she là chủ thể. Sau động từ sugGEST, hành động tiếp theo bắt buộc phải ở dạng -ing (TRYing), dùng để đưa ra một ý kiến, đề xuất chung cho mọi người cùng xem xét.</li>
			
				</ul>

			
			<h4 className="margin-y-40">4. iMAGines LIVing</h4>
			
				<ul className="list-square">
			
					<li>she <strong>iMAGines LIVing</strong> in a QUIet COUNtryside HOUSE surROUNDed by GREEN NAture.</li>
					<li className="list-none">Cô ấy tưởng tượng cảnh sống trong một ngôi nhà vùng quê yên tĩnh được bao quanh bởi thiên nhiên xanh mát.</li>
					<li className="list-none">she là chủ thể. Sau động từ iMAGine, hành động tiếp theo bắt buộc phải ở dạng -ing (LIVing), dùng để diễn tả sự hình dung hoặc tưởng tượng trong tâm trí về một cảnh tượng hoặc sự việc.</li>
			
				</ul>

			
			<h4 className="margin-y-40">5. conSIDered CHANGing</h4>
			
				<ul className="list-square">
			
					<li>she <strong>conSIDered CHANGing</strong> her caREER PATH to FOcus enTIREly on NEW WEB deVELopment.</li>
					<li className="list-none">Cô ấy đã cân nhắc việc thay đổi con đường sự nghiệp của mình để tập trung hoàn toàn vào việc phát triển web.</li>
					<li className="list-none">she là chủ thể. Sau động từ conSIDer, hành động tiếp theo bắt buộc phải ở dạng -ing (CHANGing), dùng để chỉ việc suy nghĩ, cân nhắc kỹ lưỡng về một khả năng hoặc hành động nào đó.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">6. aVOIDed disCUSSing</h4>
			
				<ul className="list-square">
			
					<li>she <strong>aVOIDed disCUSSing</strong> the COMplex TAX ISsues during the MEETing.</li>
					<li className="list-none">Cô ấy đã tránh thảo luận về các vấn đề thuế phức tạp trong cuộc họp.</li>
					<li className="list-none">she là chủ thể. Sau động từ aVOID, hành động tiếp theo bắt buộc phải ở dạng -ing (disCUSSing), dùng để chỉ việc cố gắng né tránh hoặc không làm một hành động nào đó.</li>
			
				</ul>

			
			<h4 className="margin-y-40">7. KEPT WORKing</h4>
			
				<ul className="list-square">
			
					<li>she <strong>KEPT WORKing</strong> on the acCOUNting LEDGer despite the LATE HOUR.</li>
					<li className="list-none">Cô ấy đã tiếp tục làm việc với sổ sách kế toán mặc dù đã muộn.</li>
					<li className="list-none">she là chủ thể. Sau động từ KEEP (hoặc KEEP ON), hành động tiếp theo bắt buộc phải ở dạng -ing (WORKing), diễn tả sự việc diễn ra liên tục hoặc lặp đi lặp lại không ngừng.</li>
			
				</ul>
			

			<h4 className="margin-y-40">8. FINished TYping</h4>
			
				<ul className="list-square">
			
					<li>she <strong>FINished TYping</strong> the fiNANcial rePORT before LEAVing the OFfice.</li>
					<li className="list-none">Cô ấy đã hoàn thành việc đánh máy báo cáo tài chính trước khi rời khỏi văn phòng.</li>
					<li className="list-none">she là chủ thể. Sau động từ FINish, hành động tiếp theo bắt buộc phải ở dạng -ing (TYping), dùng để chỉ việc kết thúc hoặc hoàn tất hoàn toàn một quá trình/hành động nào đó.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">9. GIVE UP DRINKing</h4>
			
				<ul className="list-square">
			
					<li>he <strong>GAVE UP DRINKing</strong> INstant COFfee and SWITCHED enTIREly to traDITional PHIN BREWS.</li>
					<li className="list-none">Anh ấy đã từ bỏ việc uống cà phê hòa tan và chuyển hoàn toàn sang cà phê phin truyền thống.</li>
					<li className="list-none">he là chủ thể. Sau cụm động từ GIVE UP, hành động tiếp theo bắt buộc phải ở dạng -ing (DRINKing), dùng để chỉ việc từ bỏ hoặc chấm dứt một thói quen, hành động nào đó.</li>
			
				</ul>

			
			<h4 className="margin-y-40">10. is USED to WORKing</h4>
			
				<ul className="list-square">
			
					<li>he <strong>is USED to WORKing</strong> LONG HOURS under HIGH PRESsure in the acCOUNting dePARTment.</li>
					<li className="list-none">Anh ấy đã quen với việc làm việc nhiều giờ liền dưới áp lực cao trong phòng kế toán.</li>
					<li className="list-none">he là chủ thể. Sau cụm từ be USED to (quen với), hành động tiếp theo bắt buộc phải ở dạng -ing (WORKing). (Lưu ý phân biệt với cấu trúc USED to + V nguyên mẫu dùng để chỉ thói quen trong quá khứ).</li>
			
				</ul>

			
			<h4 className="margin-y-40">11. LOOK FORward to VISiting</h4>
			
				<ul className="list-square">
			
					<li>she <strong>LOOKS FORward to VISiting</strong> the NEW COFfee ROASTing WORKshop NEXT WEEKend.</li>
					<li className="list-none">Cô ấy rất mong chờ được đến thăm xưởng rang cà phê mới vào cuối tuần tới.</li>
					<li className="list-none">she là chủ thể. Sau cụm từ LOOK FORward to, từ to ở đây là một giới nên hành động tiếp theo bắt buộc phải ở dạng -ing (VISiting), thể hiện cảm giác hào hứng, mong mỏi.</li>
			
				</ul>

			
			<h4 className="margin-y-40"></h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>

			
			
			{/* IV. Chỉ dùng Infinitive (to V) */}

			<h3 className="margin-y-50 text-center">IV. Chỉ dùng Infinitive (to V)</h3>


			<h4 className="margin-y-40">1. would HATE to MISS</h4>
			
				<ul className="list-square">
			
					<li>i <strong>would HATE to MISS</strong> the DEADline for subMITting the fiNANcial AUdit rePORTS.</li>
					<li className="list-none">Tôi sẽ rất không muốn bị lỡ hạn chót nộp báo cáo kiểm toán tài chính.</li>
					<li className="list-none">i là chủ thể. Cấu trúc would HATE + to V dùng để bày tỏ cảm giác áy ngại, sợ hãi hoặc không muốn một sự việc cụ thể nào đó xảy ra trong tương lai hoặc trong một tình huống giả định.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">2. would LOVE to disCUSS</h4>
			
				<ul className="list-square">
			
					<li>i <strong>would LOVE to disCUSS</strong> the NEW WEB PROJect with you toMORrow.</li>
					<li className="list-none">Tôi rất muốn thảo luận về dự án phát triển web mới với bạn vào ngày mai.</li>
					<li className="list-none">I là chủ thể. Cấu trúc would LOVE + to V (thường được viết tắt là 'd LOVE to) dùng để bày tỏ một mong muốn mãnh liệt một cách lịch sự về một dự định trong tương lai, hoặc thường dùng để vui vẻ nhận lời mời của ai đó.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">3. would LIKE to CHECK</h4>
			
				<ul className="list-square">
			
					<li>i <strong>would LIKE to CHECK</strong> the BANK STATEments and INvoices before LEAVing the OFfice.</li>
					<li className="list-none">Tôi muốn kiểm tra các bản sao kê ngân hàng và hóa đơn trước khi rời khỏi văn phòng.</li>
					<li className="list-none">i là chủ thể. Cấu trúc would LIKE + to V (thường được viết tắt là 'd LIKE to) là cách nói trang trọng và lịch sự hơn của từ WANT, dùng để diễn tả mong muốn hoặc yêu cầu thực hiện một hành động cụ thể ở hiện tại hoặc tương lai.</li>
			
				</ul>

			
			<h4 className="margin-y-40">4. aGREED to HELP</h4>
			
				<ul className="list-square">
			
					<li>he <strong>aGREED to HELP</strong> reVIEW the MONthly fiNANcial rePORTs before the DEADline.</li>
					<li className="list-none">Anh ấy đã đồng ý giúp kiểm tra lại các báo cáo tài chính hàng tháng trước hạn chót.</li>
					<li className="list-none">He là chủ thể. Sau động từ aGREE, hành động tiếp theo bắt buộc phải ở dạng to V (to HELP), thể hiện sự chấp thuận hoặc cam kết thực hiện một hành động cụ thể.</li>
			
				</ul>

			
			<h4 className="margin-y-40">5. LEARNED to COOK</h4>
			
				<ul className="list-square">
			
					<li>he <strong>LEARNED to COOK</strong> traDITional vietnaMESE DISHes USing a CAST Iron DUTCH OVen.</li>
					<li className="list-none">Anh ấy đã học cách nấu các món ăn truyền thống của Việt Nam bằng một chiếc nồi gang Hà Lan.</li>
					<li className="list-none">he là chủ thể. Sau động từ LEARN, hành động tiếp theo bắt buộc phải ở dạng to V (to COOK), thể hiện quá trình tiếp thu kỹ năng hoặc kiến thức mới để làm một việc cụ thể.</li>
			
				</ul>

			
			<h4 className="margin-y-40">6. reFUSED to SIGN</h4>
			
				<ul className="list-square">
			
					<li>he <strong>reFUSED to SIGN</strong> the fiNANcial AUdit rePORT until all ERrors were corRECTed.</li>
					<li className="list-none">Anh ấy đã từ chối ký báo cáo kiểm toán tài chính cho đến khi tất cả các lỗi được sửa chữa.</li>
					<li className="list-none">he là chủ thể. Sau động từ reFUSE, hành động tiếp theo bắt buộc phải ở dạng to V (to SIGN), thể hiện thái độ không đồng ý hoặc kiên quyết không thực hiện một hành động cụ thể.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">7. HOPES to FINish</h4>
			
				<ul className="list-square">
			
					<li>he <strong>HOPES to FINish</strong> the WEB deVELopment PROJect before the END of the MONTH.</li>
					<li className="list-none">Anh ấy hy vọng sẽ hoàn thành dự án phát triển web trước cuối tháng.</li>
					<li className="list-none">he là chủ thể. Sau động từ HOPE, hành động tiếp theo bắt buộc phải ở dạng to V (to FINish), thể hiện mong ước, sự kỳ vọng sẽ thực hiện được một hành động cụ thể trong tương lai.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">8. deCIded to BUY</h4>
			
				<ul className="list-square">
			
					<li>he <strong>deCIded to BUY</strong> a NEW CAST Iron WOK for his COOKing exPERiments.</li>
					<li className="list-none">Anh ấy đã quyết định mua một chiếc chảo wok bằng gang mới cho các thí nghiệm nấu nướng của mình.</li>
					<li className="list-none">he là chủ thể. Sau động từ deCIDE, hành động tiếp theo bắt buộc phải ở dạng to V (to BUY), thể hiện sự lựa chọn hoặc quyết định thực hiện một hành động cụ thể sau khi đã cân nhắc.</li>
			
				</ul>

			
			<h4 className="margin-y-40">9. HELP his COLleague to FIX</h4>
			
				<ul className="list-square">
			
					<li>he <strong>HELPED his COLleague to FIX</strong> the WEB deVELopment BUG on the PLATform.</li>
					<li className="list-none">Anh ấy đã giúp đồng nghiệp của mình sửa lỗi phát triển web trên nền tảng.</li>
					<li className="list-none">he là chủ thể chính, his COLleague là chủ thể nhận sự giúp đỡ. Sau HELP + sb, bạn có thể dùng trực tiếp to V (to FIX) hoặc bỏ to đi để dùng nguyên mẫu (FIX đều được).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">10. NEED to reVIEW</h4>
			
				<ul className="list-square">
			
					<li>she <strong>NEEDS to reVIEW</strong> the fiNANcial STATEments before subMITting them to the MANager.</li>
					<li className="list-none">Cô ấy cần phải xem lại các báo cáo tài chính trước khi nộp chúng cho người quản lý.</li>
					<li className="list-none">she là chủ thể. Sau động từ NEED (khi chỉ nhu cầu của chủ thể), hành động tiếp theo bắt buộc phải ở dạng to V (to reVIEW), thể hiện một việc cần thiết phải thực hiện.</li>
			
				</ul>

			
			<h4 className="margin-y-40">11. exPECT to reCEIVE</h4>
			
				<ul className="list-square">
			
					<li>she <strong>exPECTS to reCEIVE</strong> a POSitive reSPONSE from the CLIent regarding the NEW acCOUNting SOFTware.</li>
					<li className="list-none">Cô ấy mong đợi sẽ nhận được phản hồi tích cực từ khách hàng về phần mềm kế toán mới.</li>
					<li className="list-none">she là chủ thể. Sau động từ exPECT, hành động tiếp theo ở dạng to V (to reCEIVE), diễn tả sự trông đợi hoặc dự đoán một sự việc sẽ diễn ra trong tương lai.</li>
			
				</ul>

			
			<h4 className="margin-y-40">12. FORCE her to reWRITE</h4>
			
				<ul className="list-square">
			
					<li>the SUDden SYStem ERror <strong>FORCED her to reWRITE</strong> the enTIRE acCOUNting rePORT from SCRATCH.</li>
					<li className="list-none">Lỗi hệ thống bất ngờ đã buộc cô ấy phải viết lại toàn bộ báo cáo kế toán từ đầu.</li>
					<li className="list-none">the SUDden SYStem ERror là chủ thể gây ra hành động, và her là chủ thể nhận sự tác động bị bắt buộc. Sau FORCE + sb, hành động tiếp theo bắt buộc phải ở dạng to V (to reWRITE).</li>
			
				</ul>

			
			<h4 className="margin-y-40"></h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>


			{/* V. Mẹo nhớ siêu nhanh cho người Việt (2025 edition) */}

			<h3 className="margin-y-50 text-center">V. Mẹo nhớ siêu nhanh cho người Việt (2025 edition)</h3>

			<p className="margin-y-20"><strong>Thích gì</strong>, <strong>ghét gì</strong>, <strong>ngại gì</strong> → thường là -<strong>ing</strong></p>
			
				<ul className="list-square">
			
					<li>she <strong>enJOYS DANcing</strong> to traDITional MUsic during FAMILy GATHerings.</li>
					<li className="list-none">Cô ấy thích nhảy múa theo điệu nhạc truyền thống trong các buổi tụ họp gia đình.</li>
					<li className="margin-bottom-20 list-none">she là chủ thể. Sau hành động enJOY, hành động tiếp theo bắt buộc phải ở dạng -ing (DANcing), diễn tả sự tận hưởng và niềm vui khi thực hiện hành động đó.</li>
			
					<li>he <strong>HATES WAITing</strong> in LONG LINES at the COFfee SHOP during PEAK HOURS.</li>
					<li className="list-none">Anh ấy ghét việc phải xếp hàng dài ở quán cà phê vào giờ cao điểm.</li>
					<li className="margin-bottom-20 list-none">he là chủ thể. Sau hành động HATE, hành động ở dạng -ing (WAITing) dùng để diễn tả sự khó chịu đối với một trải nghiệm hoặc thói quen chung. (Như đã phân tích ở các phần trước, HATE + to V dùng cho việc cụ thể sắp phải làm).</li>
			
					<li>would you <strong>MIND HELPing</strong> me CARry these HEAVy CAST Iron COOKware BOXes?</li>
					<li className="list-none">Bạn có phiền giúp tôi khiêng những chiếc hộp dụng cụ nấu ăn bằng gang nặng này không?</li>
					<li className="list-none">you là chủ thể. Sau hành động MIND, hành động tiếp theo luôn ở dạng -ing (HELPing). Cấu trúc này thường dùng trong câu hỏi lịch sự hoặc câu phủ định để hỏi xem ai đó có cảm thấy khó chịu khi làm việc gì hay không.</li>
			
				</ul>

			<p className="margin-y-20"><strong>Muốn gì</strong>, <strong>hứa gì</strong>, <strong>dự định gì</strong> → hầu hết là <strong>to V</strong></p>
			
				<ul className="list-square">
			
					<li>she <strong>WANTS to TRAVel</strong> to NEW CITies to exPLORE LOcal COFfee CULtures.</li>
					<li className="list-none">Cô ấy muốn đi du lịch đến các thành phố mới để khám phá văn hóa cà phê địa phương.</li>
					<li className="margin-bottom-20 list-none">she là chủ thể. Sau hành động WANT, hành động tiếp theo phải ở dạng to V (to TRAVel).</li>
			
					<li>he <strong>PROMised to CALL</strong> his PARents as soon as he arRIVED in the CITy.</li>
					<li className="list-none">Anh ấy đã hứa sẽ gọi điện cho bố mẹ ngay khi đến thành phố.</li>
					<li className="margin-bottom-20 list-none">he là chủ thể. Sau hành động PROMise, hành động tiếp theo phải ở dạng to V (to CALL).</li>
			
					<li>they <strong>PLAN to MOVE</strong> to a BIGger aPARTment near their WORKplace NEXT MONTH.</li>
					<li className="list-none">Họ dự định chuyển đến một căn hộ lớn hơn gần nơi làm việc vào tháng tới.</li>
					<li className="list-none">they là chủ thể. Sau hành động plan, hành động tiếp theo phải ở dạng to V (to MOVE).</li>
			
				</ul>

			<p className="margin-y-20"><strong>Sau giới cơ thì phải</strong> -<strong>ing</strong> (đây là luật sắt)</p>
			
				<ul className="list-square">
			
					<li>he <strong>DREAMS of beCOMing</strong> a proFESsional WEB deVELoper and BUILDing USEful appliCAtions.</li>
					<li className="list-none">Anh ấy mơ ước trở thành một lập trình viên web chuyên nghiệp và xây dựng các ứng dụng hữu ích.</li>
					<li className="margin-bottom-20 list-none">he là chủ thể. Sau giới of, hành động beCOME phải được chuyển thành dạng -ing (beCOMing).</li>
			
					<li>she <strong>aPOLogized for being</strong> MORning acCOUNting MEETing.</li>
					<li className="list-none">Cô ấy đã xin lỗi vì đến muộn trong buổi họp kế toán buổi sáng.</li>
					<li className="margin-bottom-20 list-none">she là chủ thể. Sau giới for, hành động be phải được chuyển thành dạng -ing (being).</li>
			
					<li>he is <strong>GOOD at SINGing</strong> traDITional SONGS and PLAYing MUsical INstruments.</li>
					<li className="list-none">Anh ấy giỏi ca hát các bài hát truyền thống và chơi nhạc cụ.</li>
					<li className="list-none">he là chủ thể. Sau cụm tính kết hợp giới GOOD at, hành động SING phải được chuyển thành dạng -ing (SINGing).</li>
			
				</ul>


			<p className="margin-top-20">Khi không chắc → tự hỏi: Đây là <strong>trải nghiệm</strong>/<strong>hoạt động nói chung hay mục đích</strong>/<strong>ý định tương lai</strong>?</p>
			
				<ul className="list-square">

					<li>→ Chung chung, trải nghiệm → -ing</li>
					<li>→ Ý định, mục đích → to V</li>
			
				</ul>

			
			<h3 className="margin-y-50 text-center">VI. Bài test nhỏ để kiểm tra ngay (chỉ 5 câu)</h3>

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