import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function IrregularVerbs(): React.JSX.Element {

	const postId = "IrregularVerbs";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/vocabulary#verbs-terms"><mark className="highlight-tertiary-padding-4-8">VERBS</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">irREGular VERBS</h1>

			<h4 className="margin-bottom-30 text-center">Bảng đầy đủ & cách sử dụng chi tiết nhất (2025) </h4>

			<p>Hành động bất quy tắc (irregular verbs) là “cơn ác mộng” của rất nhiều người học tiếng Anh, vì chúng không theo quy tắc thêm -ed như hành động thường. Tuy nhiên, chỉ cần nắm vững khoảng <strong>60–70 hành động phổ biến nhất</strong>, bạn đã có thể giao tiếp tự tin, viết email chuyên nghiệp, thi IELTS/TOEIC đạt điểm cao và thậm chí nói chuyện như người bản xứ ở mức trung cấp – cao cấp.</p>

			<p>Dưới đây là bảng <strong>hành động bất quy tắc phổ biến nhất</strong> (được cập nhật theo mức độ sử dụng thực tế năm 2025), kèm giải thích cách dùng rõ ràng, dễ nhớ.</p>

			<h3 className="margin-y-50 text-center">Bảng hành động bất quy tắc phổ biến nhất</h3>

			<h4 className="margin-y-40">1. is</h4>
			
				<ul className="list-square">
			
					<li>he <strong>is</strong> ALways CAREfully when reVIEWing the fiNANcial NUMbers <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>luôn</strong> cẩn thận khi xem xét các con số tài chính <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng is (cho chủ thể ngôi thứ ba số ít he) để chỉ trạng thái hoặc tính chất ở hiện tại.</li>
			
					<li>she <strong>was</strong> VERy BUSy ORganizing her phoTOGraphy portFOlio <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã</strong> rất bận rộn sắp xếp danh mục đầu tư nhiếp ảnh của mình <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng was (cho chủ thể số ít she) để chỉ trạng thái trong quá khứ, đi kèm với trạng từ yesterday.</li>
			
					<li>they <strong>have been</strong> WORKing on the WEB deVELopment PROJect for HOURS.</li>
					<li className="list-none">Họ <strong>đã và đang</strong> làm việc trong dự án phát triển WEB suốt nhiều giờ <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have been kết hợp với thể tiếp diễn, chỉ hành động bắt đầu trong quá khứ và vẫn tiếp tục kéo dài đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">2. has</h4>
			
				<ul className="list-square">
			
					<li>he <strong>has</strong> an ENGlish LESson on his LEARNing APP <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>có</strong> một bài học tiếng Anh trên ứng dụng học tập của mình <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng has (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>had</strong> a proDUCtive MEETing with the acCOUNTing TEAM <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã có</strong> một cuộc họp hiệu quả với nhóm kế toán <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng had để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have had</strong> SEVeral disCUSsions about the NEW WEB PROJect.</li>
					<li className="list-none">Họ <strong>đã có</strong> vài cuộc thảo luận về dự án web mới <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have had (trong đó have là trợ động, còn had là động chính ở dạng phân từ hai), nói về sự việc đã diễn ra và vẫn có liên quan hoặc để lại kết quả ở hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">3. do</h4>
			
				<ul className="list-square">
			
					<li>he <strong>DOES</strong> his WEB deVELopment WORK CAREfully <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>làm</strong> công việc phát triển web của mình một cách cẩn thận <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng DOES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>DID</strong> a THORough CHECK of the acCOUNTing RECords <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã kiểm tra</strong> kỹ lưỡng các hồ sơ kế toán <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng DID để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have DONE</strong> a GREAT JOB UPdating the fiNANcial SOFTware.</li>
					<li className="list-none">Họ <strong>đã làm</strong> một công việc tuyệt vời trong việc cập nhật phần mềm tài chính <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have DONE, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">4. GO</h4>
			
				<ul className="list-square">
			
					<li>he <strong>GOES</strong> to the LOcal COFfee SHOP to BUY FRESH roBUSta BEANS <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>đi</strong> đến quán cà phê địa phương để mua hạt robusta tươi <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng GOES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>WENT</strong> to the PARK to CAPture PICtures of the KITE FLYers <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã đi</strong> đến công viên để chụp lại những bức ảnh về người thả diều <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng WENT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have GONE</strong> to the OFfice to FInalize the QUARterly fiNANcial STATEments.</li>
					<li className="list-none">Họ <strong>đã đi</strong> đến văn phòng để hoàn thiện các báo cáo tài chính quý <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have GONE, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h4 className="margin-y-40">5. COME</h4>
			
				<ul className="list-square">
			
					<li>he <strong>COMES</strong> HOME from WORK to enJOY a WARM CUP of COFfee <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>trở về</strong> nhà sau giờ làm việc để thưởng thức một tách cà phê ấm vào mỗi buổi tối.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng COMES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>CAME</strong> to the LOcal PARK to TAKE PHOtos of the KITES <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã đến</strong> công viên địa phương để chụp ảnh những con diều vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng CAME để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have come UP</strong> with a NEW STRATegy for the WEB PROJect.</li>
					<li className="list-none">Họ <strong>đã đưa ra</strong> một chiến lược mới cho dự án web <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have COME, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">6. SEE</h4>
			
				<ul className="list-square">
			
					<li>he <strong>SEES</strong> the SUNset CLEARly from his BALcony <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>nhìn thấy</strong> hoàng hôn rõ ràng từ ban công của mình <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SEES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>SAW</strong> a BEAUtiful KITE FLYing HIGH in the SKY <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã nhìn thấy</strong> một con diều đẹp bay cao trên bầu trời <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SAW để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have SEEN</strong> sigNIFicant imPROVEments in the acCOUNTing SOFTware.</li>
					<li className="list-none">Họ <strong>đã thấy</strong> những cải tiến đáng kể trong phần mềm kế toán <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SEEN, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">7. GET</h4>
			
				<ul className="list-square">
			
					<li>he <strong>GETS</strong> FRESH COFfee BEANS deLIVered to his HOUSE <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>nhận</strong> những hạt cà phê tươi được giao đến nhà <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng GETS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>GOT</strong> a GREAT DEAL on a NEW CAMEra LENS <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã mua</strong> được một món hời cho chiếc ống kính máy ảnh mới <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng GOT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have GOTten</strong> all the fiNANcial rePORTs READy for the MEETing.</li>
					<li className="list-none">Họ <strong>đã chuẩn bị xong</strong> tất cả các báo cáo tài chính cho cuộc họp <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have GOTten, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">8. MAKE</h4>
			
				<ul className="list-square">
			
					<li>he <strong>MAKES</strong> a STRONG CUP of PHIN COFfee <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>pha</strong> một tách cà phê phin đậm đặc <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng MAKES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>MADE</strong> a deLIcious BRAISED DISH in her CAST Iron PAN <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã làm</strong> một món kho ngon trong chiếc chảo gang của mình <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng MADE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have MADE</strong> sigNIFicant UPdates to the WEB deVELopment PROJect.</li>
					<li className="list-none">Họ <strong>đã thực hiện</strong> những cập nhật quan trọng cho dự án phát triển web <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have MADE, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">9. KNOW</h4>
			
				<ul className="list-square">
			
					<li>he <strong>KNOWS</strong> HOW to OPtimize WEBsite perFORmance <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>biết</strong> cách tối ưu hóa hiệu suất trang web <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng KNOWS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>KNEW</strong> HOW to FIX her CAMEra SETtings <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã biết</strong> cách chỉnh cài đặt máy ảnh của mình <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng KNEW để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have KNOWN</strong> about the NEW acCOUNTing reguLAtions for WEEKS.</li>
					<li className="list-none">Họ <strong>đã biết</strong> về các quy định kế toán mới trong nhiều tuần <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have KNOWN, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">10. TAKE</h4>
			
				<ul className="list-square">
			
					<li>he <strong>TAKES</strong> a SHORT BREAK to enJOY a CUP of COFfee <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>dành</strong> một khoảng nghỉ ngắn để thưởng thức tách cà phê <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng TAKES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>TOOK</strong> STUNning PHOtos at the KITE FIELD <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã chụp</strong> những bức ảnh tuyệt đẹp tại cánh đồng thả diều <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng TOOK để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have TAken</strong> all the fiNANcial RECords for AUditing.</li>
					<li className="list-none">Họ <strong>đã lấy</strong> tất cả các hồ sơ tài chính để kiểm toán <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have TAken, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40">11. GIVE</h4>
			
				<ul className="list-square">
			
					<li>he <strong>GIVES</strong> HELPful adVICE on WEB deVELopment <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>đưa ra</strong> những lời khuyên hữu ích về phát triển web <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng GIVES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>GAVE</strong> a presenTAtion about her phoTOGraphy portFOlio <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã thuyết trình</strong> về danh mục đầu tư nhiếp ảnh của mình <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng GAVE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have GIVen</strong> all the NECessary DAta to the acCOUNTing dePARTment.</li>
					<li className="list-none">Họ <strong>đã cung cấp</strong> tất cả dữ liệu cần thiết cho phòng kế toán <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have GIVen, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">12. WRITES</h4>
			
				<ul className="list-square">
			
					<li>he <strong>WRITES</strong> CODE for his WEB deVELopment PROJects <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>viết</strong> mã cho các dự án phát triển web của mình <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng WRITES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>WROTE</strong> an ARticle about her phoTOGraphy JOURney <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã viết</strong> một bài báo về hành trình nhiếp ảnh của mình <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng WROTE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have WRITten</strong> a compreHENsive fiNANcial rePORT for the COMpany.</li>
					<li className="list-none">Họ <strong>đã viết</strong> một báo cáo tài chính toàn diện cho công ty <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have WRITten, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">13. SPEAK</h4>
			
				<ul className="list-square">
			
					<li>he <strong>SPEAKS</strong> ENGlish FLUently <strong>af</strong>ter PRACticing with his LANGuage APP <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>nói</strong> tiếng Anh trôi chảy sau khi luyện tập với ứng dụng ngôn ngữ của mình <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SPEAKS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>SPOKE</strong> to the phoTOGraphy CLIent about the PROJect DEtails <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã nói chuyện</strong> với khách hàng về các chi tiết dự án nhiếp ảnh <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SPOKE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have SPOken</strong> about the NEW acCOUNTing STRATegies <strong>alREADy</strong>.</li>
					<li className="list-none">Họ <strong>đã bàn bạc</strong> về các chiến lược kế toán mới <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SPOken, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">14. FIND</h4>
			
				<ul className="list-square">
			
					<li>he <strong>FINDS</strong> NEW inspirAtion for his WEB PROJects <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>tìm thấy</strong> nguồn cảm hứng mới cho các dự án web của mình <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng FINDS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>FOUND</strong> a GREAT DEAL on a CAMEra LENS <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã tìm thấy</strong> một món hời về ống kính máy ảnh <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng FOUND để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have FOUND</strong> a soLUtion to the acCOUNTing disCREPancy.</li>
					<li className="list-none">Họ <strong>đã tìm ra</strong> giải pháp cho khoản chênh lệch kế toán <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have FOUND, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h4 className="margin-y-40">15. THINK</h4>
			
				<ul className="list-square">
			
					<li>he <strong>THINKS</strong> about NEW STRATegies for his WEB deVELopment WORK <strong> <strong>eve</strong>ry EVEning</strong> .</li>
					<li className="list-none">Anh ấy <strong>suy nghĩ</strong> về các chiến lược mới cho công việc phát triển web của mình <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng THINKS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>THOUGHT</strong> about rePAIRing her BROken CAMEra <strong> YESterday</strong> .</li>
					<li className="list-none">Cô ấy <strong>đã suy nghĩ</strong> về việc sửa chiếc máy ảnh bị hỏng của mình <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng THOUGHT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have THOUGHT CAREfully</strong> about the NEW fiNANcial PLAN.</li>
					<li className="list-none">Họ <strong>đã suy nghĩkỹ lưỡng</strong>  về kế hoạch tài chính mới <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have THOUGHT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">16. TELL</h4>
			
				<ul className="list-square">
			
					<li>he <strong>TELLS</strong> his TEAM about his NEW PROJect iDEaS <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>kể</strong> cho đội ngũ của mình nghe về các ý tưởng dự án mới <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng TELLS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>TOLD</strong> me the WHOLE STORy about her CAMEra <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã kể</strong> cho tôi nghe toàn bộ câu chuyện về chiếc máy ảnh của cô ấy <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng TOLD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have TOLD</strong> us all the DEtails about the acCOUNTing rePORT.</li>
					<li className="list-none">Họ <strong>đã nói</strong> cho chúng tôi biết tất cả các chi tiết về báo cáo kế toán <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have TOLD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">17. SAY</h4>
			
				<ul className="list-square">
			
					<li>he <strong>SAYS</strong> that he preFERS a STRONG CUP of COFfee <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>nói</strong> rằng anh ấy thích một tách cà phê đậm đà <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SAYS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>SAID</strong> that she forGOT her CAMEra BAG <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã nói</strong> rằng cô ấy quên chiếc túi đựng máy ảnh <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SAID để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have SAID</strong> that the NEW PROJect PLAN is READy.</li>
					<li className="list-none">Họ <strong>đã nói</strong> rằng kế hoạch dự án mới đã sẵn sàng <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SAID, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">18. beCOME</h4>
			
				<ul className="list-square">
			
					<li>he <strong>beCOMES</strong> more FOcused <strong>af</strong>ter DRINKing a STRONG CUP of COFfee <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>trở nên</strong> tập trung hơn sau khi uống một tách cà phê đậm đặc <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng beCOMES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>beCAME</strong> a proFESSional phoTOGrapher <strong>YESterday</strong> <strong>af</strong>ter reCEIVing her cerTIFicate.</li>
					<li className="list-none">Cô ấy <strong>đã trở thành</strong> một nhiếp ảnh gia chuyên nghiệp <strong>vào ngày hôm qua</strong> sau khi nhận được chứng chỉ của mình.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng beCAME để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have beCOME</strong> KEY MEMbers of the acCOUNTing TEAM.</li>
					<li className="list-none">Họ <strong>đã trở thành</strong> những thành viên chủ chốt của đội ngũ kế toán <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have beCOME, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">19. LEAVE</h4>
			
				<ul className="list-square">
			
					<li>he <strong>LEAVES</strong> his OFfice <strong>eve</strong>ry <strong>EVEning</strong> <strong>af</strong>ter FINishing all TASKS.</li>
					<li className="list-none">Anh ấy <strong>rời</strong> văn phòng <strong>vào mỗi buổi tối</strong> sau khi hoàn thành tất cả các nhiệm vụ.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng LEAVES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>LEFT</strong> her CAMEra on the TAble <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã để quên</strong> máy ảnh của mình trên bàn <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng LEFT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have LEFT</strong> for the MEETing ROOM <strong>alREADy</strong>.</li>
					<li className="list-none">Họ <strong>đã rời đi</strong> đến phòng họp <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have LEFT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">20. FEEL</h4>
			
				<ul className="list-square">
			
					<li>he <strong>FEELS</strong> reLAXED <strong>af</strong>ter DRINKing a HOT CUP of COFfee <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>cảm thấy</strong> thư thái sau khi uống một tách cà phê nóng <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng FEELS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>FELT</strong> TIred <strong>af</strong>ter CARrying her CAMEra BAG <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã cảm thấy</strong> mệt mỏi sau khi đeo chiếc túi đựng máy ảnh <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng FELT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have FELT</strong> VERy MOtivated <strong>since the PROJect STARTed</strong>.</li>
					<li className="list-none">Họ <strong>đã cảm thấy</strong> rất có động lực <strong>kể từ khi dự án bắt đầu</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have FELT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40">21. PUT</h4>
			
				<ul className="list-square">
			
					<li>he <strong>PUTS</strong> his DOCuments in a SAFE DRAWer <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>cất</strong> tài liệu của mình vào một ngăn kéo an toàn <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng PUTS (cho chủ thể ngôi thứ ba số ít He) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>put</strong> her CAMEra ON the TAble <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã đặt</strong> máy ảnh của mình lên bàn <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng PUT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have PUT</strong> a LOT of EFfort into the NEW PROJect.</li>
					<li className="list-none">Họ <strong>đã bỏ</strong> rất nhiều nỗ lực vào dự án mới <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have PUT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">22. BRINGS</h4>
			
				<ul className="list-square">
			
					<li>he <strong>BRINGS</strong> a HOT CUP of COFfee to his DESK <strong>eve</strong>ry <strong>MORNing</strong>.</li>
					<li className="list-none">Anh ấy <strong>mang</strong> một tách cà phê nóng vào bàn làm việc của mình <strong>vào mỗi buổi sáng</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng BRINGS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>BROUGHT</strong> her CAMEra along to TAKE PHOtos <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã mang</strong> theo máy ảnh để chụp ảnh <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng BROUGHT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have BROUGHT</strong> all the NECessary DOCuments for the MEETing.</li>
					<li className="list-none">Họ <strong>đã mang</strong> tất cả các tài liệu cần thiết cho cuộc họp <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have BROUGHT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">23. beGIN</h4>
			
				<ul className="list-square">
			
					<li>he <strong>beGINS</strong> his WORKday EARly <strong>eve</strong>ry <strong>MORNing</strong>.</li>
					<li className="list-none">Anh ấy <strong>bắt đầu</strong> ngày làm việc của mình từ sớm <strong>vào mỗi buổi sáng</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng beGINS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>beGAN</strong> LEARNing ENGlish Using a NEW METHod <strong>LAST YEAR</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã bắt đầu</strong> học tiếng Anh bằng một phương pháp mới <strong>vào năm ngoái</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng beGAN để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have beGUN</strong> WORKing on the NEW acCOUNTing rePORT.</li>
					<li className="list-none">Họ <strong>đã bắt đầu</strong> làm việc với báo cáo kế toán mới <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have beGUN, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">24. KEEP</h4>
			
				<ul className="list-square">
			
					<li>he <strong>KEEPS</strong> his WORKspace NEAT and ORganized <strong>eve</strong>ry <strong>DAY</strong>.</li>
					<li className="list-none">Anh ấy <strong>giữ</strong> góc làm việc của mình ngăn nắp và gọn gàng <strong>mỗi ngày</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng KEEPS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>KEPT</strong> all her NOTES from the acCOUNTing COURSE <strong>LAST YEAR</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã giữ lại</strong> tất cả các ghi chép từ khóa học kế toán <strong>vào năm ngoái</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng KEPT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have KEPT</strong> their PROMise to FINish the PROJect on TIME.</li>
					<li className="list-none">Họ <strong>đã giữ</strong> lời hứa hoàn thành dự án đúng hạn <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have KEPT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h4 className="margin-y-40">25. LET</h4>
			
				<ul className="list-square">
			
					<li>he <strong>LETS</strong> his TEAM WORK from HOME <strong>on FRIdays</strong>.</li>
					<li className="list-none">Anh ấy <strong>cho phép</strong> đội ngũ của mình làm việc tại nhà <strong>vào các ngày thứ Sáu</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng LETS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>let</strong> the CAT OUT of the HOUSE <strong>THIS MORNing</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã thả</strong> con mèo ra ngoài nhà <strong>vào sáng nay</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng LET để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have LET</strong> us USE their OFfice SPACE for the MEEting.</li>
					<li className="list-none">Họ <strong>đã cho</strong> chúng tôi sử dụng không gian văn phòng của họ cho cuộc họp <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have LET, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">26. SET</h4>
			
				<ul className="list-square">
			
					<li>he <strong>SETS</strong> a CLEAR GOAL at the beGINning of <strong>eve</strong>ry <strong>MONTH</strong>.</li>
					<li className="list-none">Anh ấy <strong>đặt ra</strong> một mục tiêu rõ ràng <strong>vào đầu mỗi tháng</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SETS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>SET</strong> her aLARM CLOCK EARly <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã đặt</strong> đồng hồ báo thức sớm <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SET để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have SET</strong> ALL the RULES for the NEW PROJect.</li>
					<li className="list-none">Họ <strong>đã thiết lập</strong> tất cả các quy tắc cho dự án mới <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SET, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">27. READ</h4>
			
				<ul className="list-square">
			
					<li>he <strong>READS</strong> SPEcialized TECHnical BLOGS <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>đọc</strong> các blog kỹ thuật chuyên ngành <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng READS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>READ</strong> an INTEresting BOOK <strong>LAST WEEK</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã đọc</strong> một cuốn sách hay <strong>vào tuần trước</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng READ (phát âm là /red/) để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have READ</strong> the NEW PROJect GUIDElines THORoughly.</li>
					<li className="list-none">Họ <strong>đã đọc</strong> kỹ các hướng dẫn dự án mới <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have READ (phát âm là /red/), nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">28. BUY</h4>
			
				<ul className="list-square">
			
					<li>he <strong>BUYS</strong> FRESH roBUSta BEANS <strong>eve</strong>ry <strong>MONTH</strong>.</li>
					<li className="list-none">Anh ấy <strong>mua</strong> hạt cà phê robusta tươi <strong>mỗi tháng</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng BUYS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>BOUGHT</strong> a NEW CAST IRON PAN <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã mua</strong> một chiếc chảo gang mới <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng BOUGHT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have BOUGHT</strong> ALL the NECessary inGREdients.</li>
					<li className="list-none">Họ <strong>đã mua</strong> tất cả các nguyên liệu cần thiết <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have BOUGHT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">29. SIT</h4>
			
				<ul className="list-square">
			
					<li>he <strong>SITS</strong> at his DESK <strong>eve</strong>ry <strong>MORNing</strong> to WORK.</li>
					<li className="list-none">Anh ấy <strong>ngồi</strong> vào bàn làm việc của mình <strong>vào mỗi buổi sáng</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SITS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>SAT</strong> on the BENCH in the PARK <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã ngồi</strong> trên băng ghế ở công viên <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SAT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have SAT</strong> in the MEETing ROOM <strong>for over an HOUR</strong>.</li>
					<li className="list-none">Họ <strong>đã ngồi</strong> trong phòng họp <strong>hơn một tiếng đồng hồ</strong> <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SAT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">30. STAND</h4>
			
				<ul className="list-square">
			
					<li>he <strong>STANDS</strong> by the WINdow <strong>eve</strong>ry <strong>MORNing</strong> to WATCH the SUNrise.</li>
					<li className="list-none">Anh ấy <strong>đứng</strong> cạnh cửa sổ <strong>vào mỗi buổi sáng</strong> để ngắm bình minh.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng STANDS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>STOOD</strong> in the RAIN for a LONG TIME <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã đứng</strong> dưới cơn mưa trong một thời gian dài <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng STOOD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have STOOD</strong> FIRM against ALL the DIFficulties.</li>
					<li className="list-none">Họ <strong>đã đứng</strong> vững vàng trước mọi khó khăn.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have STOOD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40">31. LOSE</h4>
			
				<ul className="list-square">
			
					<li>he <strong>LOses</strong> his KEYS when<strong>ev</strong>er <strong>he is in a HURry</strong>.</li>
					<li className="list-none">Anh ấy <strong>hay làm mất</strong> chìa khóa <strong>mỗi khi vội vã</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng LOses (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>LOST</strong> her FAvorite CAMEra in the PARK <strong>LAST WEEK</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã làm mất</strong> chiếc máy ảnh yêu thích của mình ở công viên <strong>vào tuần trước</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng LOST để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have LOST</strong> their WAY in the unfaMILiar NEIGHborhood.</li>
					<li className="list-none">Họ <strong>đã lạc đường</strong> ở khu phố lạ lẫm đó.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have LOST, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">32. PAY</h4>
			
				<ul className="list-square">
			
					<li>he <strong>PAYS</strong> his BILLS at the beGINning of <strong>eve</strong>ry <strong>MONTH</strong>.</li>
					<li className="list-none">Anh ấy <strong>thanh toán</strong> các hóa đơn của mình <strong>vào đầu mỗi tháng</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng PAYS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>PAID</strong> for the NEW COFfee GRINDer <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã trả tiền</strong> cho chiếc máy xay cà phê mới <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng PAID để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have PAID</strong> for the SERvice in adVANCE.</li>
					<li className="list-none">Họ <strong>đã thanh toán</strong> trước cho dịch vụ này <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have PAID, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">33. MEET</h4>
			
				<ul className="list-square">
			
					<li>he <strong>MEETS</strong> his CLIents <strong>eve</strong>ry <strong>TUESday</strong>.</li>
					<li className="list-none">Anh ấy <strong>gặp gỡ</strong> các khách hàng của mình <strong>vào mỗi thứ Ba</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng MEETS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>MET</strong> an OLD FRIEND <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã gặp</strong> một người bạn cũ <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng MET để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have MET beFORE</strong> at the CONference.</li>
					<li className="list-none">Họ <strong>đã gặp nhau trước</strong> đây ở hội nghị.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have MET, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">34. RUN</h4>
			
				<ul className="list-square">
			
					<li>he <strong>RUNS</strong> in the PARK <strong>eve</strong>ry <strong>afterNOON</strong>.</li>
					<li className="list-none">Anh ấy <strong>chạy bộ</strong> ở công viên <strong>vào mỗi buổi chiều</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng RUNS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>RAN</strong> to CATCH the BUS <strong>THIS MORNing</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã chạy</strong> để bắt xe buýt <strong>vào sáng nay</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng RAN để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have RUN FIVE kiLOMeters so FAR</strong>.</li>
					<li className="list-none">Họ <strong>đã chạy được năm ki-lô-mét cho đến nay</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have RUN, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h4 className="margin-y-40">35. EAT</h4>
			
				<ul className="list-square">
			
					<li>he <strong>EATS</strong> a HEALTHy BREAKfast <strong>eve</strong>ry <strong>DAY</strong>.</li>
					<li className="list-none">Anh ấy <strong>ăn</strong> một bữa sáng lành mạnh <strong>mỗi ngày</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng EATS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>ATE</strong> a deLICious MEAL <strong>LAST NIGHT</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã ăn</strong> một bữa ăn ngon <strong>vào tối hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng ATE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have EAten</strong> all the FOOD on the TAble.</li>
					<li className="list-none">Họ <strong>đã ăn</strong> hết sạch thức ăn trên bàn <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have EAten, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">36. DRINK</h4>
			
				<ul className="list-square">
			
					<li>he <strong>DRINKS</strong> a LARGE CUP of roBUSta COFfee <strong>eve</strong>ry <strong>MORNing</strong>.</li>
					<li className="list-none">Anh ấy <strong>uống</strong> một cốc cà phê robusta lớn <strong>mỗi buổi sáng</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng DRINKS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>DRANK</strong> a GLASS of FRESH JUICE <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã uống</strong> một cốc nước ép tươi <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng DRANK để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have DRUNK</strong> all the WAter in the BOTtle.</li>
					<li className="list-none">Họ <strong>đã uống</strong> hết sạch nước trong chai <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have DRUNK, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">37. DRIVE</h4>
			
				<ul className="list-square">
			
					<li>he <strong>DRIVES</strong> to WORK <strong>eve</strong>ry <strong>MORNing</strong>.</li>
					<li className="list-none">Anh ấy <strong>lái xe</strong> đi làm <strong>mỗi buổi sáng</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng DRIVES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>DROVE</strong> to the COUNtryside <strong>LAST WEEKend</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã lái xe</strong> về vùng quê vào <strong>cuối tuần trước</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng DROVE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>hey <strong>have DRIVen for FIVE HOURS STRAIGHT</strong>.</li>
					<li className="list-none">Họ <strong>đã lái xe suốt năm tiếng đồng hồ</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have DRIVen, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">38. BREAK</h4>
			
				<ul className="list-square">
			
					<li>he <strong>BREAKS</strong> the RECord <strong>eve</strong>ry <strong>YEAR</strong>.</li>
					<li className="list-none">Anh ấy <strong>phá</strong> kỷ lục <strong>mỗi năm</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng BREAKS (cho chủ thể ngôi thứ ba số ít he) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>BROKE</strong> her FAvorite COFfee CUP <strong>LAST DAY</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã làm vỡ</strong> chiếc cốc uống cà phê yêu thích của mình <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng BROKE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have BROken</strong> the OLD maCHINE comPLETEly.</li>
					<li className="list-none">Họ <strong>đã làm hỏng</strong> chiếc máy cũ hoàn toàn.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have BROken, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">39. CHOOSE</h4>
			
				<ul className="list-square">
			
					<li>she <strong>CHOOses</strong> the BEST OPtion for the PROJect.</li>
					<li className="list-none">Cô ấy <strong>chọn</strong> lựa chọn tốt nhất cho dự án.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng CHOOses (cho chủ thể ngôi thứ ba số ít she) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>he <strong>CHOSE</strong> a NEW CAR <strong>LAST WEEK</strong>.</li>
					<li className="list-none">Anh ấy <strong>đã chọn</strong> một chiếc xe hơi mới <strong>vào tuần trước</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng CHOSE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have CHOsen</strong> the WINning TEAM.</li>
					<li className="list-none">Họ <strong>đã chọn</strong> ra đội chiến thắng.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have CHOsen, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">40. forGET</h4>
			
				<ul className="list-square">
			
					<li>he <strong>forGETS</strong> his KEYS ALmost <strong>eve</strong>ry <strong>DAY</strong>.</li>
					<li className="list-none">Anh ấy <strong>quên</strong> chìa khóa của mình hầu như <strong>mỗi ngày</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng forGETS (cho chủ thể ngôi thứ ba số ít he) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>forGOT</strong> to rePLY to my MESsage <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã quên</strong> trả lời tin nhắn của tôi <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng forGOT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have forGOTten</strong> all about the apPOINTment.</li>
					<li className="list-none">Họ <strong>đã quên</strong> hết về cuộc hẹn đó <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have forGOTten, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40">41. HEAR</h4>
			
				<ul className="list-square">
			
					<li>he <strong>HEARS</strong> a STRANGE NOISE outside his WINdow.</li>
					<li className="list-none">Anh ấy <strong>nghe thấy</strong> một tiếng động lạ bên ngoài cửa sổ.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng HEARS (cho chủ thể ngôi thứ ba số ít he) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>HEARD</strong> the GOOD NEWS <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã nghe</strong> tin vui <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng HEARD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>we <strong>have HEARD</strong> about <strong>this</strong> PLAN <strong>beFORE</strong>.</li>
					<li className="list-none">Chúng ta <strong>đã nghe</strong> về kế hoạch này <strong>trước đây</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have HEARD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">42. HOLD</h4>
			
				<ul className="list-square">
			
					<li>she <strong>HOLDS</strong> a MEETing <strong>eve</strong>ry <strong>MONday MORNing</strong>.</li>
					<li className="list-none">Cô ấy <strong>tổ chức</strong> một cuộc họp <strong>vào mỗi sáng thứ Hai</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng HOLDS (cho chủ thể ngôi thứ ba số ít she) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>he <strong>HELD</strong> the umBRELla for me <strong>in the RAIN</strong>.</li>
					<li className="list-none">Anh ấy <strong>đã giữ</strong> chiếc ô giúp tôi <strong>trong cơn mưa</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng HELD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have HELD</strong> <strong>this</strong> poSITion <strong>for THREE YEARS</strong>.</li>
					<li className="list-none">Họ <strong>đã nắm giữ</strong> vị trí này <strong>được ba năm</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have HELD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">43. LEARN</h4>
			
				<ul className="list-square">
			
					<li>he <strong>LEARNS</strong> a NEW LANguage <strong>eve</strong>ry <strong>year</strong>.</li>
					<li className="list-none">Anh ấy <strong>học</strong> một ngôn ngữ mới <strong>mỗi năm</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng LEARNS (cho chủ thể ngôi thứ ba số ít he) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>LEARNED</strong> a LOT <strong>from the exPERIence</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã học</strong> được rất nhiều <strong>từ kinh nghiệm đó</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng LEARNED để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>we <strong>have LEARNT</strong> HOW to SOLVE the PROBlem.</li>
					<li className="list-none">Chúng ta <strong>đã học</strong> cách giải quyết vấn đề.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have LEARNT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">44. SEND</h4>
			
				<ul className="list-square">
			
					<li>she <strong>SENDS</strong> a <strong>WEEkly</strong> rePORT to her MANager.</li>
					<li className="list-none">Cô ấy <strong>gửi</strong> báo cáo <strong>hàng tuần</strong> cho quản lý của mình.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng sends (cho chủ thể ngôi thứ ba số ít She) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>he <strong>SENT</strong> an imPORTant Email <strong>YESterday</strong>.</li>
					<li className="list-none">Anh ấy <strong>đã gửi</strong> một email quan trọng <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SENT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have SENT</strong> the PACKage sucCESSfully.</li>
					<li className="list-none">Họ <strong>đã gửi</strong> bưu phẩm thành công.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với has SENT / have SENT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h4 className="margin-y-40">45. SHOW</h4>
			
				<ul className="list-square">
			
					<li>the CHART SHOWS the <strong>ANnual</strong> SALES GROWTH CLEARly.</li>
					<li className="list-none">Biểu đồ <strong>thể hiện</strong> rõ ràng sự tăng trưởng doanh số <strong>hàng năm</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SHOWS (cho chủ thể ngôi thứ ba số ít the CHART) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>he <strong>SHOWED</strong> his NEW PROJect PROUDly at the MEETing.</li>
					<li className="list-none">Anh ấy <strong>đã thể hiện</strong> một cách tự hào dự án mới của mình tại cuộc họp.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SHOWED để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>she <strong>has SHOWN</strong> GREAT imPROVEment <strong>REcently</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã thể hiện</strong> sự tiến bộ lớn <strong>gần đây</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với has SHOWN, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">46. SLEEP</h4>
			
				<ul className="list-square">
			
					<li>the BAby <strong>SLEEPS</strong> for EIGHT HOURS <strong>eve</strong>ry NIGHT.</li>
					<li className="list-none">Em bé <strong>ngủ</strong> tám tiếng mỗi đêm.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SLEEPS (cho chủ thể ngôi thứ ba số ít the BAby) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>he <strong>SLEPT SOUNDly through the NIGHT</strong>.</li>
					<li className="list-none">Anh ấy <strong>đã ngủ ngon giấc suốt cả đêm</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SLEPT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>she <strong>has SLEPT</strong> for a LONG TIME.</li>
					<li className="list-none">Cô ấy <strong>đã ngủ</strong> trong một thời gian dài.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với has SLEPT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">47. SWIM</h4>
			
				<ul className="list-square">
			
					<li>he <strong>SWIMS</strong> in the POOL <strong>eve</strong>ry <strong>MORNing</strong>.</li>
					<li className="list-none">Anh ấy <strong>bơi</strong> ở hồ bơi <strong>mỗi buổi sáng</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SWIMS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>SWAM</strong> across the RIVer <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã bơi</strong> qua sông <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SWAM để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have SWUM</strong> in <strong>this</strong> LAKE <strong>man</strong>y TIMES.</li>
					<li className="list-none">Họ <strong>đã bơi</strong> ở cái hồ này nhiều lần.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SWUM, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">48. TEACH</h4>
			
				<ul className="list-square">
			
					<li>she <strong>TEACHes</strong> ENGlish at a LOcal SCHOOL.</li>
					<li className="list-none">Cô ấy <strong>dạy</strong> tiếng Anh ở một trường học địa phương.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng TEACHes (cho chủ thể ngôi thứ ba số ít she) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>he <strong>TAUGHT</strong> us a VALuable LESson <strong>YESterday</strong>.</li>
					<li className="list-none">Anh ấy <strong>đã dạy</strong> chúng tôi một bài học quý giá <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng TAUGHT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have TAUGHT</strong> <strong>this</strong> SUBject for FIVE YEARS.</li>
					<li className="list-none">Họ <strong>đã dạy</strong> môn học này được năm năm.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have TAUGHT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">49. underSTAND</h4>
			
				<ul className="list-square">
			
					<li>the TEACHer <strong>underSTANDS</strong> the STUdent's PROBlem.</li>
					<li className="list-none">Giáo viên <strong>hiểu</strong> vấn đề của học sinh.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng underSTANDS (cho chủ thể ngôi thứ ba số ít the TEACHer) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>underSTOOD</strong> the LESson CLEARly <strong>af</strong>ter <strong>the explaNAtion</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã hiểu</strong> bài học một cách rõ ràng <strong>sau lời giải thích</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng underSTOOD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>he <strong>has underSTOOD</strong> the CORE CONcept THORoughly.</li>
					<li className="list-none">Anh ấy <strong>đã hiểu</strong> khái niệm cốt lõi một cách thấu đáo.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với has underSTOOD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">50. WIN</h4>
			
				<ul className="list-square">
			
					<li>our TEAM <strong>WINS</strong> <strong>eve</strong>ry GAME <strong>THIS SEAson</strong>.</li>
					<li className="list-none">Đội của chúng ta <strong>thắng</strong> mọi trận đấu <strong>trong mùa giải này</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng WINS (cho chủ thể ngôi thứ ba số ít our TEAM) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>WON</strong> the FIRST PRIZE in the compeTITion <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã giành được</strong> giải nhất trong cuộc thi <strong>ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng WON để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>he <strong>has WON</strong> ALL the MATCHes EASily.</li>
					<li className="list-none">Anh ấy <strong>đã thắng</strong> tất cả các trận đấu một cách dễ dàng.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với has WON, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">51. WEAR</h4>
			
				<ul className="list-square">
			
					<li>a MAN <strong>WEARS</strong> a WARM COAT in the COLD WEATHer.</li>
					<li className="list-none">Một người đàn ông <strong>mặc</strong> một chiếc áo khoác ấm trong thời tiết lạnh.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng wears (cho chủ thể ngôi thứ ba số ít A man) để chỉ thói quen hoặc sự việc diễn ra theo điều kiện thời tiết.</li>
			
					<li>she <strong>WORE</strong> a LOVEly DRESS to the PARTy <strong>LAST NIGHT</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã mặc</strong> một chiếc váy xinh xắn đến bữa tiệc <strong>vào tối qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng wore để chỉ việc đã xảy ra và kết thúc hoàn toàn trong quá khứ.</li>
			
					<li>THIS PAIR of SHOES <strong>has been worn OUT comPLETely</strong>.</li>
					<li className="list-none">Đôi giày này <strong>đã bị mòn đi hoàn toàn</strong> <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành bị động với cụm động worn OUT (trong đó OUT là trạng đi liền sau động worn), nói về sự việc đã hoàn tất và để lại kết quả ở hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">52. FLY</h4>
			
				<ul className="list-square">
			
					<li>a PLANE <strong>FLIES HIGH</strong> above the CLOUDS.</li>
					<li className="list-none">Một chiếc máy bay <strong>bay cao</strong> trên những tầng mây.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng FLIES kết hợp với trạng HIGH (cho chủ thể ngôi thứ ba số ít a PLANE) để chỉ sự thật hoặc hành động diễn ra theo quy luật.</li>
			
					<li>the BIRD <strong>flew aWAY</strong> QUICKly <strong>when i CAME CLOSE</strong>.</li>
					<li className="list-none">Con chim <strong>đã bay vụt đi</strong> nhanh chóng <strong>khi tôi đến gần</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với cụm động flew aWAY để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>he <strong>has FLOWN</strong> to VietNAM on a BUSIness TRIP.</li>
					<li className="list-none">Anh ấy <strong>đã bay</strong> đến Việt Nam trong một chuyến công tác.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (has FLOWN) để nói về sự việc đã hoàn tất và liên quan đến hiện tại, với chủ thể là he (anh ấy).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">53. FALL</h4>
			
				<ul className="list-square">
			
					<li>the RAIN <strong>FALLS HEAVily</strong> on the ROOF.</li>
					<li className="list-none">Trời mưa <strong>rơi nặng hạt</strong> trên mái nhà.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng FALLS (cho chủ thể ngôi thứ ba số ít the RAIN) để chỉ hiện tượng hoặc sự việc diễn ra theo quy luật tự nhiên.</li>
			
					<li>he <strong>FELL</strong> from the CAMEra eQUIPment <strong>while WORKing outSIDE</strong>.</li>
					<li className="list-none">Anh ấy <strong>đã bị ngã</strong> từ chỗ thiết bị máy quay <strong>trong lúc làm việc ngoài trời</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng FELL để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>SEVERal OLD TREES <strong>have fallen DOWN DURing the STORM</strong>.</li>
					<li className="list-none">Một số cây cổ thụ <strong>đã bị đổ sập trong cơn bão</strong>.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (FALLen) đi sau have để nói về sự việc đã xảy ra và để lại kết quả ở hiện tại, với chủ thể là SEVERal OLD TREES (một số cây cổ thụ).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">54. CUT</h4>
			
				<ul className="list-square">
			
					<li>he <strong>CUTS</strong> the VEGEtables for COOKing.</li>
					<li className="list-none">Anh ấy <strong>cắt</strong> rau củ để nấu ăn.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng CUTS (cho chủ thể ngôi thứ ba số ít He) để chỉ việc làm diễn ra thường xuyên.</li>
			
					<li>she <strong>CUT</strong> a PIECE of CAKE for me <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã cắt</strong> một miếng bánh ngọt cho tôi <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng CUT để chỉ việc đã xảy ra và kết thúc trong quá khứ (từ này giữ nguyên hình thức không đổi ở dạng quá khứ).</li>
			
					<li>the GRASS <strong>has been CUT</strong> SHORT in the GARden.</li>
					<li className="list-none">Bãi cỏ trong vườn <strong>đã được cắt</strong> ngắn.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (CUT) đi sau has been để nói về một việc đã hoàn tất và để lại kết quả ở hiện tại, với chủ thể chịu tác động là the GRASS (bãi cỏ).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">55. HIT</h4>
			
				<ul className="list-square">
			
					<li>he <strong>HITS</strong> the TENnis BALL with GREAT FORCE.</li>
					<li className="list-none">Anh ấy <strong>đánh</strong> quả bóng quần vợt với một lực rất mạnh.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng HITS (cho chủ thể ngôi thứ ba số ít he) để chỉ hành động diễn ra mang tính thường xuyên hoặc kỹ thuật trong thể thao.</li>
			
					<li>the CAR <strong>HIT</strong> a TREE on the SIDE of the ROAD <strong>LAST NIGHT</strong>.</li>
					<li className="list-none">Chiếc ô tô <strong>đã đâm</strong> vào một cái cây bên vệ đường <strong>vào tối qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng HIT để chỉ sự việc đã xảy ra và kết thúc trong quá khứ (từ này giữ nguyên hình thức không đổi ở dạng quá khứ).</li>
			
					<li>the TARget <strong>has been HIT sucCESSfully</strong> by the ARcher.</li>
					<li className="list-none">Mục tiêu <strong>đã bị bắn trúng thành công</strong> bởi cung thủ.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (HIT) đi sau has been để nói về một việc đã hoàn tất và để lại kết quả ở hiện tại, với chủ thể chịu tác động là the TARget (mục tiêu).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">56. HURT</h4>
			
				<ul className="list-square">
			
					<li>he <strong>HURTS</strong> his KNEE when PLAYing FOOTball.</li>
					<li className="list-none">Anh ấy <strong>làm đau</strong> đầu gối của mình khi đá bóng.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng HURTS (cho chủ thể ngôi thứ ba số ít he) để chỉ việc xảy ra thường xuyên hoặc một thói quen khi chơi thể thao.</li>
			
					<li>she <strong>HURT</strong> her FINger while COOKing <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã làm đứt</strong> tay (<strong>làm đau</strong> ngón tay) trong lúc nấu ăn <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng HURT để chỉ việc đã xảy ra và kết thúc trong quá khứ (từ này giữ nguyên hình thức không đổi ở dạng quá khứ).</li>
			
					<li>his FEELings <strong>have been HURT</strong> by those HARSH WORDS.</li>
					<li className="list-none">Cảm xúc của anh ấy <strong>đã bị tổn thương</strong> bởi những lời lẽ cay nghiệt đó.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (HURT) đi sau have been để nói về một việc đã tác động và để lại kết quả ở hiện tại, với chủ thể chịu tác động là his FEELings (cảm xúc của anh ấy).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">57. COST</h4>
			
				<ul className="list-square">
			
					<li>THIS NEW PHONE <strong>COSTS</strong> a LOT of MONey.</li>
					<li className="list-none">Chiếc điện thoại mới này <strong>tốn</strong> rất nhiều tiền.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng COSTS (cho chủ thể ngôi thứ ba số ít <strong>this</strong> NEW PHONE) để chỉ một sự thật hoặc mức giá ở hiện tại.</li>
			
					<li>the TRIP <strong>COST</strong> us a FORtune <strong>LAST SUMmer</strong>.</li>
					<li className="list-none">Chuyến đi đó <strong>đã ngốn</strong> của chúng tôi một gia tài <strong>vào mùa hè năm ngoái</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng COST để chỉ sự việc đã xảy ra và kết thúc trong quá khứ (đặc biệt từ này giữ nguyên hình thức ở dạng quá khứ).</li>
			
					<li>a LOT of TIME <strong>has been COST</strong> by <strong>this</strong> deLAY.</li>
					<li className="list-none">Rất nhiều thời gian <strong>đã bị lãng phí</strong>/<strong>thiệt hại</strong> bởi sự chậm trễ này.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (COST) đi sau has been để nói về một việc đã tác động đến hiện tại, với chủ thể chịu tác động là a LOT of TIME (rất nhiều thời gian).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">58. BUILD</h4>
			
				<ul className="list-square">
			
					<li>he <strong>BUILDS</strong> a NEW HOUSE for his PARents.</li>
					<li className="list-none">Anh ấy <strong>xây</strong> một ngôi nhà mới cho ba mẹ mình.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng BUILDS (cho chủ thể ngôi thứ ba số ít he) để chỉ việc làm diễn ra mang tính thường xuyên hoặc kế hoạch đang thực hiện.</li>
			
					<li>they <strong>BUILT</strong> a SMALL BRIDGE over the RIVER <strong>LAST YEAR</strong>.</li>
					<li className="list-none">Họ <strong>đã xây</strong> một cây cầu nhỏ bắc qua sông <strong>vào năm ngoái</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng BUILT để chỉ việc đã hoàn tất hoàn toàn trong quá khứ, đi kèm mốc thời gian rõ ràng là LAST YEAR.</li>
			
					<li>THIS WEBsite <strong>has been BUILT</strong> with GREAT CARE.</li>
					<li className="list-none">Trang web này <strong>đã được xây dựng</strong> rất cẩn thận.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (BUILT) đi sau has been để nói về một việc đã hoàn tất và để lại kết quả ở hiện tại, với chủ thể chịu tác động là <strong>this</strong> WEBsite (trang WEB này).</li>
			
				</ul>

			
			<h4 className="margin-y-40">59. CATCH</h4>
			
				<ul className="list-square">
			
					<li>he <strong>CATCHes</strong> the BUS to WORK <strong>eve</strong>ry <strong>MORNing</strong>.</li>
					<li className="list-none">Anh ấy <strong>bắt</strong> xe buýt đi làm <strong>vào mỗi buổi sáng</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng CATCHes (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen lặp lại.</li>
			
					<li>she <strong>CAUGHT</strong> a BIG FISH <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã bắt được</strong> một con cá lớn <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng CAUGHT để chỉ hành động đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have CAUGHT</strong> the TRAIN JUST in TIME.</li>
					<li className="list-none">Họ <strong>vừa mới bắt kịp</strong> chuyến tàu đúng lúc.</li>
					<li className="list-none">Dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với dạng phân từ CAUGHT đi sau have để chỉ hành động vừa mới hoàn tất ảnh hưởng đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">60. THROW</h4>
			
				<ul className="list-square">
			
					<li>he <strong>THROWS</strong> the BALL to his DOG in the PARK.</li>
					<li className="list-none">Anh ấy <strong>ném</strong> quả bóng cho chú chó của mình ở công viên.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng throws (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc hành động diễn ra thường xuyên.</li>
			
					<li>she <strong>THREW aWAY</strong> the OLD LETters <strong>LAST NIGHT</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã vứt bỏ</strong> những bức thư cũ <strong>vào tối qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng THREW để chỉ hành động đã xảy ra và kết thúc trong quá khứ (cụm threw aWAY có nghĩa là vứt đi).</li>
			
					<li>the WINdow <strong>has been THROWN</strong> Open by the WIND.</li>
					<li className="list-none">Cửa sổ <strong>đã bị gió thổi tung</strong> mở ra.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (THROWN) đi sau has been để nói về một việc đã xảy ra và để lại kết quả ở hiện tại, với chủ thể chịu tác động là the WINdow (cửa sổ).</li>
			
				</ul>

			
			<h4 className="margin-y-40">61. SING</h4>
			
				<ul className="list-square">
			
					<li>he <strong>SINGS</strong> aLONG to his FAVOrite SONGS while CODing <strong>eve</strong>ry <strong>EVEning</strong>.</li>
					<li className="list-none">Anh ấy <strong>hát</strong> theo những bài hát yêu thích của mình trong lúc lập trình <strong>vào mỗi buổi tối</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SINGS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>SANG</strong> a traDITional SONG at the FAMIly GATHering <strong>YESterday</strong>.</li>
					<li className="list-none">Cô ấy <strong>đã hát</strong> một bài hát truyền thống trong buổi sum họp gia đình <strong>vào ngày hôm qua</strong>.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SANG để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have SUNG</strong> toGETHer at <strong>man</strong>y comMUnity eVENTs.</li>
					<li className="list-none">Họ <strong>đã hát</strong> cùng nhau tại nhiều sự kiện cộng đồng <strong>rồi</strong>.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SUNG, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h3 className="margin-y-50 text-center">Cách sử dụng 3 cột V1 – V2 – V3 một cách dễ nhớ</h3>

			{/* V1: Nguyên thể / Hiện tại */}

			<h4>V1: ⏳ Thời Gian Hành Động ở Hiện Tại Đơn (Present Simple) (thêm s/es cho he/she/it)</h4>

			<p className="margin-top-20">Dùng để diễn tả thói quen, sự thật hiển nhiên, hoặc hành động lặp lại.</p>
			
				<ul className="list-square">
			
					<li>she <strong>GOES</strong> to SCHOOL <strong>eve</strong>ry <strong>DAY</strong>.</li>
					<li className="list-none">Cô ấy <strong>đi</strong> học <strong>mỗi ngày</strong>. (⏳ Thời Gian Hành Động ở Hiện Tại Đơn)</li>
			
				</ul>

			{/* V2: ⏳ Thời Gian Hành Động ở Quá Khứ Đơn */}

			<h4 className="margin-top-20">V2: ⏳ Thời Gian Hành Động ở Quá Khứ Đơn (Past Simple)</h4>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động đã xảy ra và kết thúc trong quá khứ, thường đi kèm các từ chỉ thời gian như yesterday, last week, ago.</p>
			
				<ul className="list-square">

					<li><strong>YESterday</strong>, i <strong>WENT</strong> to the CINema.</li>
					<li className="list-none"><strong>Hôm qua</strong> tôi <strong>đã đi</strong> xem phim (đi rạp chiếu phim). (⏳ Thời Gian Hành Động ở Quá Khứ Đơn)</li>
			
				</ul>

			{/* V3: Quá khứ phân từ (Past Participle) */}

			<h4 className="margin-top-20">V3: Quá khứ phân từ (Past Participle)</h4>

			<p className="margin-top-20">1️⃣ 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành (have/has + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động đã xảy ra nhưng còn liên quan đến hiện tại, hoặc kinh nghiệm.</p>
			
				<ul className="list-square">

					<li>i <strong>have just GONE</strong> HOME.</li>
					<li className="list-none">Tôi <strong>vừa mới về</strong> nhà <strong>rồi</strong>. (📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành)</li>
			
				</ul>

			<p className="margin-top-20">2️⃣ 📏 Khoảng Thời Gian Hành Động ở Quá Khứ Hoàn Thành (had + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động xảy ra trước một hành động khác trong quá khứ.</p>
			
				<ul className="list-square">

					<li>i <strong>had FINished</strong> my HOMEwork be<strong>fore</strong> DINner.</li>
					<li className="list-none">Tôi <strong>đã hoàn thành xong</strong> bài tập về nhà trước bữa tối <strong>rồi</strong>. (📏 Khoảng Thời Gian Hành Động ở Quá Khứ Hoàn Thành)</li>
			
				</ul>

			<p className="margin-top-20">3️⃣ 📏 Khoảng Thời Gian Hành Động ở Tương Lai Hoàn Thành (will have + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động sẽ hoàn thành trước một thời điểm trong tương lai.</p>
			
				<ul className="list-square">

					<li>i <strong>will have FINished</strong> my HOMEwork by NINE p.m.</li>
					<li className="list-none">Tôi <strong>sẽ hoàn thành xong</strong> bài tập về nhà trước 9 giờ tối <strong>rồi</strong>. (📏 Khoảng Thời Gian Hành Động ở Tương Lai Hoàn Thành)</li>
			
				</ul>
					
			<p className="margin-top-20">4️⃣ Thể bị động (be + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để nhấn mạnh hành động hoặc đối tượng chịu tác động, không nhấn mạnh người thực hiện.</p>
			
				<ul className="list-square">

					<li>the LETter <strong>was WRITten</strong> by her.</li>
					<li className="list-none">Bức thư <strong>đã được viết</strong> bởi cô ấy. (Câu bị động ⏳ Thời Gian Hành Động ở Quá Khứ Đơn)</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">Mẹo học nhanh & nhớ lâu (được hàng ngàn học viên áp dụng thành công)</h3>

			<h4 className="margin-top-30 margin-bottom-20">1. Học theo nhóm có quy luật phát âm (rất hiệu quả):</h4>
					
				<ul className="list-square">
			
					<li>Nhóm nguyên vẹn: CUTS-CUT-CUT / HITS-HIT-HIT / PUTS-PUT-PUT</li>
			
					<li>Nhóm đổi nguyên âm: sings-sang-sung / DRINKS-DRANK-DRUNK / SWIMS-SWAM-SWUM</li>
			
					<li>Nhóm V2 & V3 giống nhau: BUYS-BOUGHT-BOUGHT / BRINGS-BROUGHT-BROUGHT</li>

					<li>Nhóm “đi & đến” đặc biệt: GOES-WENT-GONE / COMES-CAME-COME</li>
			
				</ul>

			
			<h4 className="margin-y-40">2. Học theo câu chuyện ngắn:</h4>
			
				<ul className="list-square">
			
					<li><strong>YESterday</strong> i <strong>TOOK</strong> a PHOto, but toDAY i <strong>have TAken</strong> <strong>man</strong>y PHOtos <strong>alREADy</strong>.</li>
					<li className="margin-bottom-20 list-none"><strong>Ngày hôm qua</strong> tôi <strong>đã chụp</strong> một bức ảnh, nhưng hôm nay tôi <strong>đã chụp</strong> rất nhiều bức ảnh <strong>rồi</strong>.</li>
			
					<li><strong>YESterday</strong> i <strong>TOOK</strong> a PHOto:</li>
					<li className="list-none">Cấu trúc này dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng TOOK của hành động TAKE.</li>
					<li className="margin-bottom-20 list-none">Được dùng để diễn tả một hành động chụp ảnh đã xảy ra và kết thúc hoàn toàn trong quá khứ, đi kèm với trạng từ chỉ thời gian cụ thể là YESterday (ngày hôm qua).</li>
			
					<li>...but <strong>toDAY</strong> i <strong>have TAken</strong> <strong>man</strong>y PHOtos <strong>alREADy</strong>:</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với dạng have TAken.</li>
					<li className="list-none">Được dùng để nhấn mạnh kết quả hoặc số lượng ảnh đã chụp được tính đến thời điểm hiện tại trong ngày, kết hợp với trạng từ toDAY (hôm nay) và alREADy (đã... rồi).</li>
			
				</ul>
			
			
			<h4 className="margin-top-30 margin-bottom-20">3. Flashcard 3 mặt (rất mạnh):</h4>
					
				<ul className="list-square">
			
					<li>Mặt 1: <strong>GOES</strong></li>
			
					<li>Mặt 2: <strong>WENT</strong></li>
			
					<li>Mặt 3: <strong>GONE</strong> + câu ví dụ</li>
			
				</ul>

			<h4 className="margin-top-30 margin-bottom-20">4. Ưu tiên 30 hành động đầu tiên → chiếm ~85% tần suất xuất hiện trong giao tiếp & bài thi.</h4>
			
			<p>Hãy in bảng này ra, dán lên tường, học mỗi ngày 10 hành động trong 1 tuần. Sau 6 tuần bạn sẽ nắm chắc gần như toàn bộ hành động bất quy tắc hay gặp nhất!</p>

			<p>Chúc bạn học tốt và sớm “thoát kiếp” hành động bất quy tắc! 💪</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>January 05, 2026 · by Grok ·</span>
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