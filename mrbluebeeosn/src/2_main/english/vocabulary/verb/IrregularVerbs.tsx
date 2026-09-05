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

			<p>Hành động bất quy tắc (irREGular VERBS) là “cơn ác mộng” của rất nhiều người học tiếng Anh, vì chúng không theo quy tắc thêm -ed như hành động thường. Tuy nhiên, chỉ cần nắm vững khoảng <strong>60–70 hành động phổ biến nhất</strong>, bạn đã có thể giao tiếp tự tin, viết email chuyên nghiệp, thi IELTS/TOEIC đạt điểm cao và thậm chí nói chuyện như người bản xứ ở mức trung cấp – cao cấp.</p>

			<p>Dưới đây là bảng <strong>hành động bất quy tắc phổ biến nhất</strong> (được cập nhật theo mức độ sử dụng thực tế năm 2025), kèm giải thích cách dùng rõ ràng, dễ nhớ.</p>

			<h3 className="margin-y-50 text-center">Bảng hành động bất quy tắc phổ biến nhất</h3>

			<h4 className="margin-y-40">1. is</h4>
			
				<ul className="list-square">
			
					<li>he [is] ALways CAREfully when reVIEWing the fiNANcial NUMbers [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [luôn] cẩn thận khi xem xét các con số tài chính [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng is (cho chủ thể ngôi thứ ba số ít he) để chỉ trạng thái hoặc tính chất ở hiện tại.</li>
			
					<li>she [was] VERy BUSy ORganizing her phoTOGraphy portFOlio [YESterday].</li>
					<li className="list-none">Cô ấy [đã] rất bận rộn sắp xếp danh mục đầu tư nhiếp ảnh của mình [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng was (cho chủ thể số ít she) để chỉ trạng thái trong quá khứ, đi kèm với trạng từ yesterday.</li>
			
					<li>they [have been] WORKing on the WEB deVELopment PROJect for HOURS.</li>
					<li className="list-none">Họ [đã và đang] làm việc trong dự án phát triển WEB suốt nhiều giờ [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have been kết hợp với thể tiếp diễn, chỉ hành động bắt đầu trong quá khứ và vẫn tiếp tục kéo dài đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">2. has</h4>
			
				<ul className="list-square">
			
					<li>he [has] an ENGlish LESson on his LEARNing APP [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [có] một bài học tiếng Anh trên ứng dụng học tập của mình [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng has (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [had] a proDUCtive MEETing with the acCOUNTing TEAM [YESterday].</li>
					<li className="list-none">Cô ấy [đã có] một cuộc họp hiệu quả với nhóm kế toán [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng had để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have had] SEVeral disCUSsions about the NEW WEB PROJect.</li>
					<li className="list-none">Họ [đã có] vài cuộc thảo luận về dự án web mới [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have had (trong đó have là trợ động, còn had là động chính ở dạng phân từ hai), nói về sự việc đã diễn ra và vẫn có liên quan hoặc để lại kết quả ở hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">3. do</h4>
			
				<ul className="list-square">
			
					<li>he [DOES] his WEB deVELopment WORK CAREfully [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [làm] công việc phát triển web của mình một cách cẩn thận [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng DOES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [DID] a THORough CHECK of the acCOUNTing RECords [YESterday].</li>
					<li className="list-none">Cô ấy [đã kiểm tra] kỹ lưỡng các hồ sơ kế toán [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng DID để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have DONE] a GREAT JOB UPdating the fiNANcial SOFTware.</li>
					<li className="list-none">Họ [đã làm] một công việc tuyệt vời trong việc cập nhật phần mềm tài chính [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have DONE, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">4. GO</h4>
			
				<ul className="list-square">
			
					<li>he [GOES] to the LOcal COFfee SHOP to BUY FRESH roBUSta BEANS [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [đi] đến quán cà phê địa phương để mua hạt robusta tươi [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng GOES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [WENT] to the PARK to CAPture PICtures of the KITE FLYers [YESterday].</li>
					<li className="list-none">Cô ấy [đã đi] đến công viên để chụp lại những bức ảnh về người thả diều [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng WENT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have GONE]to the OFfice to FInalize the QUARterly fiNANcial STATEments.</li>
					<li className="list-none">Họ [đã đi] đến văn phòng để hoàn thiện các báo cáo tài chính quý [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have GONE, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h4 className="margin-y-40">5. COME</h4>
			
				<ul className="list-square">
			
					<li>he [COMES] HOME from WORK to enJOY a WARM CUP of COFfee [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [trở về] nhà sau giờ làm việc để thưởng thức một tách cà phê ấm vào mỗi buổi tối.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng COMES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [CAME] to the LOcal PARK to TAKE PHOtos of the KITES [YESterday].</li>
					<li className="list-none">Cô ấy [đã đến] công viên địa phương để chụp ảnh những con diều vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng CAME để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have come UP] with a NEW STRATegy for the WEB PROJect.</li>
					<li className="list-none">Họ [đã đưa ra] một chiến lược mới cho dự án web [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have COME, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">6. SEE</h4>
			
				<ul className="list-square">
			
					<li>he [SEES] the SUNset CLEARly from his BALcony [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [nhìn thấy] hoàng hôn rõ ràng từ ban công của mình [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SEES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [SAW] a BEAUtiful KITE FLYing HIGH in the SKY [YESterday].</li>
					<li className="list-none">Cô ấy [đã nhìn thấy] một con diều đẹp bay cao trên bầu trời [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SAW để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have SEEN] sigNIFicant imPROVEments in the acCOUNTing SOFTware.</li>
					<li className="list-none">Họ [đã thấy] những cải tiến đáng kể trong phần mềm kế toán [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SEEN, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">7. GET</h4>
			
				<ul className="list-square">
			
					<li>he [GETS] FRESH COFfee BEANS deLIVered to his HOUSE [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [nhận] những hạt cà phê tươi được giao đến nhà [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng GETS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [GOT] a GREAT DEAL on a NEW CAMEra LENS [YESterday].</li>
					<li className="list-none">Cô ấy [đã mua] được một món hời cho chiếc ống kính máy ảnh mới [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng GOT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have GOTten] all the fiNANcial rePORTs READy for the MEETing.</li>
					<li className="list-none">Họ [đã chuẩn bị xong] tất cả các báo cáo tài chính cho cuộc họp [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have GOTten, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">8. MAKE</h4>
			
				<ul className="list-square">
			
					<li>he [MAKES] a STRONG CUP of PHIN COFfee [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [pha] một tách cà phê phin đậm đặc [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng MAKES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [MADE] a deLIcious BRAISED DISH in her CAST Iron PAN [YESterday].</li>
					<li className="list-none">Cô ấy [đã làm] một món kho ngon trong chiếc chảo gang của mình [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng MADE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have MADE] sigNIFicant UPdates to the WEB deVELopment PROJect.</li>
					<li className="list-none">Họ [đã thực hiện] những cập nhật quan trọng cho dự án phát triển web [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have MADE, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">9. KNOW</h4>
			
				<ul className="list-square">
			
					<li>he [KNOWS] HOW to OPtimize WEBsite perFORmance [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [biết] cách tối ưu hóa hiệu suất trang web [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng KNOWS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [KNEW] HOW to FIX her CAMEra SETtings [YESterday].</li>
					<li className="list-none">Cô ấy [đã biết] cách chỉnh cài đặt máy ảnh của mình [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng KNEW để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have KNOWN] about the NEW acCOUNTing reguLAtions for WEEKS.</li>
					<li className="list-none">Họ [đã biết] về các quy định kế toán mới trong nhiều tuần [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have KNOWN, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">10. TAKE</h4>
			
				<ul className="list-square">
			
					<li>he [TAKES] a SHORT BREAK to enJOY a CUP of COFfee [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [dành] một khoảng nghỉ ngắn để thưởng thức tách cà phê [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng TAKES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [TOOK] STUNning PHOtos at the KITE FIELD [YESterday].</li>
					<li className="list-none">Cô ấy [đã chụp] những bức ảnh tuyệt đẹp tại cánh đồng thả diều [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng TOOK để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have TAken] all the fiNANcial RECords for AUditing.</li>
					<li className="list-none">Họ [đã lấy] tất cả các hồ sơ tài chính để kiểm toán [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have TAken, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40">11. GIVE</h4>
			
				<ul className="list-square">
			
					<li>he [GIVES] HELPful adVICE on WEB deVELopment [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [đưa ra] những lời khuyên hữu ích về phát triển web [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng GIVES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [GAVE] a presenTAtion about her phoTOGraphy portFOlio [YESterday].</li>
					<li className="list-none">Cô ấy [đã thuyết trình] về danh mục đầu tư nhiếp ảnh của mình [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng GAVE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have GIVen] all the NECessary DAta to the acCOUNTing dePARTment.</li>
					<li className="list-none">Họ [đã cung cấp] tất cả dữ liệu cần thiết cho phòng kế toán [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have GIVen, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">12. WRITES</h4>
			
				<ul className="list-square">
			
					<li>he [WRITES] CODE for his WEB deVELopment PROJects [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [viết] mã cho các dự án phát triển web của mình [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng WRITES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [WROTE] an ARticle about her phoTOGraphy JOURney [YESterday].</li>
					<li className="list-none">Cô ấy [đã viết] một bài báo về hành trình nhiếp ảnh của mình [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng WROTE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have WRITten] a compreHENsive fiNANcial rePORT for the COMpany.</li>
					<li className="list-none">Họ [đã viết] một báo cáo tài chính toàn diện cho công ty [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have WRITten, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">13. SPEAK</h4>
			
				<ul className="list-square">
			
					<li>he [SPEAKS] ENGlish FLUently <strong>af</strong>ter PRACticing with his LANGuage APP [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [nói] tiếng Anh trôi chảy sau khi luyện tập với ứng dụng ngôn ngữ của mình [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SPEAKS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [SPOKE] to the phoTOGraphy CLIent about the PROJect DEtails [YESterday].</li>
					<li className="list-none">Cô ấy [đã nói chuyện] với khách hàng về các chi tiết dự án nhiếp ảnh [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SPOKE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have SPOken] about the NEW acCOUNTing STRATegies [alREADy].</li>
					<li className="list-none">Họ [đã bàn bạc] về các chiến lược kế toán mới [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SPOken, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">14. FIND</h4>
			
				<ul className="list-square">
			
					<li>he [FINDS] NEW inspirAtion for his WEB PROJects [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [tìm thấy] nguồn cảm hứng mới cho các dự án web của mình [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng FINDS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [FOUND] a GREAT DEAL on a CAMEra LENS [YESterday].</li>
					<li className="list-none">Cô ấy [đã tìm thấy] một món hời về ống kính máy ảnh [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng FOUND để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have FOUND] a soLUtion to the acCOUNTing disCREPancy.</li>
					<li className="list-none">Họ [đã tìm ra] giải pháp cho khoản chênh lệch kế toán [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have FOUND, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h4 className="margin-y-40">15. THINK</h4>
			
				<ul className="list-square">
			
					<li>he [THINKS] about NEW STRATegies for his WEB deVELopment WORK [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [suy nghĩ] về các chiến lược mới cho công việc phát triển web của mình [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng THINKS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [THOUGHT] about rePAIRing her BROken CAMEra [YESterday].</li>
					<li className="list-none">Cô ấy [đã suy nghĩ] về việc sửa chiếc máy ảnh bị hỏng của mình [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng THOUGHT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have THOUGHT CAREfully] about the NEW fiNANcial PLAN.</li>
					<li className="list-none">Họ [đã suy nghĩkỹ lưỡng]  về kế hoạch tài chính mới [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have THOUGHT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">16. TELL</h4>
			
				<ul className="list-square">
			
					<li>he [TELLS] his TEAM about his NEW PROJect iDEaS [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [kể] cho đội ngũ của mình nghe về các ý tưởng dự án mới [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng TELLS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [TOLD] me the WHOLE STORy about her CAMEra [YESterday].</li>
					<li className="list-none">Cô ấy [đã kể] cho tôi nghe toàn bộ câu chuyện về chiếc máy ảnh của cô ấy [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng TOLD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have TOLD] us all the DEtails about the acCOUNTing rePORT.</li>
					<li className="list-none">Họ [đã nói] cho chúng tôi biết tất cả các chi tiết về báo cáo kế toán [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have TOLD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">17. SAY</h4>
			
				<ul className="list-square">
			
					<li>he [SAYS] that he preFERS a STRONG CUP of COFfee [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [nói] rằng anh ấy thích một tách cà phê đậm đà [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SAYS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [SAID] that she forGOT her CAMEra BAG [YESterday].</li>
					<li className="list-none">Cô ấy [đã nói] rằng cô ấy quên chiếc túi đựng máy ảnh [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SAID để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have SAID] that the NEW PROJect PLAN is READy.</li>
					<li className="list-none">Họ [đã nói] rằng kế hoạch dự án mới đã sẵn sàng [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SAID, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">18. beCOME</h4>
			
				<ul className="list-square">
			
					<li>he [beCOMES] more FOcused <strong>af</strong>ter DRINKing a STRONG CUP of COFfee [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [trở nên] tập trung hơn sau khi uống một tách cà phê đậm đặc [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng beCOMES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [beCAME]ư= a proFESSional phoTOGrapher [YESterday] <strong>af</strong>ter reCEIVing her cerTIFicate.</li>
					<li className="list-none">Cô ấy [đã trở thành] một nhiếp ảnh gia chuyên nghiệp [vào ngày hôm qua] sau khi nhận được chứng chỉ của mình.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng beCAME để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have beCOME] KEY MEMbers of the acCOUNTing TEAM.</li>
					<li className="list-none">Họ [đã trở thành] những thành viên chủ chốt của đội ngũ kế toán [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have beCOME, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">19. LEAVE</h4>
			
				<ul className="list-square">
			
					<li>he [LEAVES] his OFfice [<strong>ever</strong>y EVEning] <strong>af</strong>ter FINishing all TASKS.</li>
					<li className="list-none">Anh ấy [rời] văn phòng [vào mỗi buổi tối] sau khi hoàn thành tất cả các nhiệm vụ.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng LEAVES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [LEFT] her CAMEra on the TAble [YESterday].</li>
					<li className="list-none">Cô ấy [đã để quên] máy ảnh của mình trên bàn [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng LEFT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have LEFT] for the MEETing ROOM [alREADy].</li>
					<li className="list-none">Họ [đã rời đi] đến phòng họp [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have LEFT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">20. FEEL</h4>
			
				<ul className="list-square">
			
					<li>he [FEELS] reLAXED <strong>af</strong>ter DRINKing a HOT CUP of COFfee [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [cảm thấy] thư thái sau khi uống một tách cà phê nóng [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng FEELS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [FELT] TIred <strong>af</strong>ter CARrying her CAMEra BAG [YESterday].</li>
					<li className="list-none">Cô ấy [đã cảm thấy] mệt mỏi sau khi đeo chiếc túi đựng máy ảnh [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng FELT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have FELT] VERy MOtivated [since the PROJect STARTed].</li>
					<li className="list-none">Họ [đã cảm thấy] rất có động lực [kể từ khi dự án bắt đầu].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have FELT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40">21. PUT</h4>
			
				<ul className="list-square">
			
					<li>he [PUTS] his DOCuments in a SAFE DRAWer [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [cất] tài liệu của mình vào một ngăn kéo an toàn [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng PUTS (cho chủ thể ngôi thứ ba số ít He) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [put her CAMEra ON] the TAble [YESterday].</li>
					<li className="list-none">Cô ấy [đã đặt máy ảnh của mình lên] bàn [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng PUT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have PUT] a LOT of EFfort into the NEW PROJect.</li>
					<li className="list-none">Họ [đã bỏ] rất nhiều nỗ lực vào dự án mới [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have PUT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">22. BRINGS</h4>
			
				<ul className="list-square">
			
					<li>he [BRINGS] a HOT CUP of COFfee to his DESK [<strong>ever</strong>y MORNing].</li>
					<li className="list-none">Anh ấy [mang] một tách cà phê nóng vào bàn làm việc của mình [vào mỗi buổi sáng].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng BRINGS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [BROUGHT] her CAMEra along to TAKE PHOtos [YESterday].</li>
					<li className="list-none">Cô ấy [đã mang] theo máy ảnh để chụp ảnh [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng BROUGHT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have BROUGHT] all the NECessary DOCuments for the MEETing.</li>
					<li className="list-none">Họ [đã mang] tất cả các tài liệu cần thiết cho cuộc họp [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have BROUGHT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">23. beGIN</h4>
			
				<ul className="list-square">
			
					<li>he [beGINS] his WORKday EARly [<strong>ever</strong>y MORNing].</li>
					<li className="list-none">Anh ấy [bắt đầu] ngày làm việc của mình từ sớm [vào mỗi buổi sáng].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng beGINS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [beGAN] LEARNing ENGlish Using a NEW METHod [LAST YEAR].</li>
					<li className="list-none">Cô ấy [đã bắt đầu] học tiếng Anh bằng một phương pháp mới [vào năm ngoái].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng beGAN để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have beGUN] WORKing on the NEW acCOUNTing rePORT.</li>
					<li className="list-none">Họ [đã bắt đầu] làm việc với báo cáo kế toán mới [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have beGUN, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">24. KEEP</h4>
			
				<ul className="list-square">
			
					<li>he [KEEPS] his WORKspace NEAT and ORganized [<strong>ever</strong>y DAY].</li>
					<li className="list-none">Anh ấy [giữ] góc làm việc của mình ngăn nắp và gọn gàng [mỗi ngày].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng KEEPS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [KEPT] all her NOTES from the acCOUNTing COURSE [LAST YEAR].</li>
					<li className="list-none">Cô ấy [đã giữ lại] tất cả các ghi chép từ khóa học kế toán [vào năm ngoái].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng KEPT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have KEPT] their PROMise to FINish the PROJect on TIME.</li>
					<li className="list-none">Họ [đã giữ] lời hứa hoàn thành dự án đúng hạn [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have KEPT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h4 className="margin-y-40">25. LET</h4>
			
				<ul className="list-square">
			
					<li>he [LETS] his TEAM WORK from HOME [on FRIdays].</li>
					<li className="list-none">Anh ấy [cho phép] đội ngũ của mình làm việc tại nhà [vào các ngày thứ Sáu].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng LETS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [let the CAT OUT] of the HOUSE [this MORNing].</li>
					<li className="list-none">Cô ấy [đã thả con mèo ra] ngoài nhà [vào sáng nay].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng LET để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have LET] us USE their OFfice SPACE for the MEEting.</li>
					<li className="list-none">Họ [đã cho] chúng tôi sử dụng không gian văn phòng của họ cho cuộc họp [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have LET, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">26. SET</h4>
			
				<ul className="list-square">
			
					<li>he [SETS] a CLEAR GOAL at the beGINning of [<strong>ever</strong>y MONTH].</li>
					<li className="list-none">Anh ấy [đặt ra] một mục tiêu rõ ràng [vào đầu mỗi tháng].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SETS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [SET] her aLARM CLOCK EARly [YESterday].</li>
					<li className="list-none">Cô ấy [đã đặt] đồng hồ báo thức sớm [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SET để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have SET] ALL the RULES for the NEW PROJect.</li>
					<li className="list-none">Họ [đã thiết lập] tất cả các quy tắc cho dự án mới [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SET, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">27. READ</h4>
			
				<ul className="list-square">
			
					<li>he [READS] SPEcialized TECHnical BLOGS [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [đọc] các blog kỹ thuật chuyên ngành [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng READS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [READ] an INTEresting BOOK [LAST WEEK].</li>
					<li className="list-none">Cô ấy [đã đọc] một cuốn sách hay [vào tuần trước].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng READ (phát âm là /red/) để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have READ] the NEW PROJect GUIDElines THORoughly.</li>
					<li className="list-none">Họ [đã đọc] kỹ các hướng dẫn dự án mới [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have READ (phát âm là /red/), nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">28. BUY</h4>
			
				<ul className="list-square">
			
					<li>he [BUYS] FRESH roBUSta BEANS [<strong>ever</strong>y MONTH].</li>
					<li className="list-none">Anh ấy [mua] hạt cà phê robusta tươi [mỗi tháng].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng BUYS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [BOUGHT] a NEW CAST IRON PAN [YESterday].</li>
					<li className="list-none">Cô ấy [đã mua] một chiếc chảo gang mới [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng BOUGHT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have BOUGHT] ALL the NECessary inGREdients.</li>
					<li className="list-none">Họ [đã mua] tất cả các nguyên liệu cần thiết [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have BOUGHT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">29. SIT</h4>
			
				<ul className="list-square">
			
					<li>he [SITS] at his DESK [<strong>ever</strong>y MORNing] to WORK.</li>
					<li className="list-none">Anh ấy [ngồi] vào bàn làm việc của mình [vào mỗi buổi sáng].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SITS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [SAT] on the BENCH in the PARK [YESterday].</li>
					<li className="list-none">Cô ấy [đã ngồi] trên băng ghế ở công viên [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SAT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have SAT] in the MEETing ROOM [for over an HOUR].</li>
					<li className="list-none">Họ [đã ngồi] trong phòng họp [hơn một tiếng đồng hồ] [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SAT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">30. STAND</h4>
			
				<ul className="list-square">
			
					<li>he [STANDS] by the WINdow [<strong>ever</strong>y MORNing] to WATCH the SUNrise.</li>
					<li className="list-none">Anh ấy [đứng] cạnh cửa sổ [vào mỗi buổi sáng] để ngắm bình minh.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng STANDS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [STOOD] in the RAIN for a LONG TIME [YESterday].</li>
					<li className="list-none">Cô ấy [đã đứng] dưới cơn mưa trong một thời gian dài [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng STOOD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have STOOD] FIRM against ALL the DIFficulties.</li>
					<li className="list-none">Họ [đã đứng] vững vàng trước mọi khó khăn.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have STOOD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40">31. LOSE</h4>
			
				<ul className="list-square">
			
					<li>he [LOses] his KEYS [when<strong>ev</strong>er he is in a HURry].</li>
					<li className="list-none">Anh ấy [hay làm mất] chìa khóa [mỗi khi vội vã].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng LOses (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [LOST] her FAvorite CAMEra in the PARK [LAST WEEK].</li>
					<li className="list-none">Cô ấy [đã làm mất] chiếc máy ảnh yêu thích của mình ở công viên [vào tuần trước].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng LOST để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have LOST] their WAY in the unfaMILiar NEIGHborhood.</li>
					<li className="list-none">Họ [đã lạc đường] ở khu phố lạ lẫm đó.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have LOST, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">32. PAY</h4>
			
				<ul className="list-square">
			
					<li>he [PAYS] his BILLS at the beGINning of [<strong>ever</strong>y MONTH].</li>
					<li className="list-none">Anh ấy [thanh toán] các hóa đơn của mình [vào đầu mỗi tháng].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng PAYS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [PAID] for the NEW COFfee GRINDer [YESterday].</li>
					<li className="list-none">Cô ấy [đã trả tiền] cho chiếc máy xay cà phê mới [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng PAID để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have PAID] for the SERvice in adVANCE.</li>
					<li className="list-none">Họ [đã thanh toán] trước cho dịch vụ này [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have PAID, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">33. MEET</h4>
			
				<ul className="list-square">
			
					<li>he [MEETS] his CLIents [<strong>ever</strong>y TUESday].</li>
					<li className="list-none">Anh ấy [gặp gỡ] các khách hàng của mình [vào mỗi thứ Ba].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng MEETS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [MET] an OLD FRIEND [YESterday].</li>
					<li className="list-none">Cô ấy [đã gặp] một người bạn cũ [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng MET để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have MET beFORE] at the CONference.</li>
					<li className="list-none">Họ [đã gặp nhau trước] đây ở hội nghị.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have MET, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">34. RUN</h4>
			
				<ul className="list-square">
			
					<li>he [RUNS] in the PARK [<strong>ever</strong>y afterNOON].</li>
					<li className="list-none">Anh ấy [chạy bộ] ở công viên [vào mỗi buổi chiều].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng RUNS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [RAN] to CATCH the BUS [this MORNing].</li>
					<li className="list-none">Cô ấy [đã chạy] để bắt xe buýt [vào sáng nay].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng RAN để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have RUN] [FIVE kiLOMeters so FAR].</li>
					<li className="list-none">Họ [đã chạy được] [năm ki-lô-mét cho đến nay].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have RUN, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h4 className="margin-y-40">35. EAT</h4>
			
				<ul className="list-square">
			
					<li>he [EATS] a HEALTHy BREAKfast [<strong>ever</strong>y DAY].</li>
					<li className="list-none">Anh ấy [ăn] một bữa sáng lành mạnh [mỗi ngày].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng EATS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [ATE] a deLICious MEAL [LAST NIGHT].</li>
					<li className="list-none">Cô ấy [đã ăn] một bữa ăn ngon [vào tối hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng ATE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have EAten] all the FOOD on the TAble.</li>
					<li className="list-none">Họ [đã ăn] hết sạch thức ăn trên bàn [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have EAten, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">36. DRINK</h4>
			
				<ul className="list-square">
			
					<li>he [DRINKS] a LARGE CUP of roBUSta COFfee [<strong>ever</strong>y MORNing].</li>
					<li className="list-none">Anh ấy [uống] một cốc cà phê robusta lớn [mỗi buổi sáng].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng DRINKS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [DRANK] a GLASS of FRESH JUICE [YESterday].</li>
					<li className="list-none">Cô ấy [đã uống] một cốc nước ép tươi [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng DRANK để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have DRUNK] all the WAter in the BOTtle.</li>
					<li className="list-none">Họ [đã uống] hết sạch nước trong chai [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have DRUNK, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">37. DRIVE</h4>
			
				<ul className="list-square">
			
					<li>he [DRIVES] to WORK [<strong>ever</strong>y MORNing].</li>
					<li className="list-none">Anh ấy [lái xe] đi làm [mỗi buổi sáng].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng DRIVES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [DROVE] to the COUNtryside [LAST WEEKend].</li>
					<li className="list-none">Cô ấy [đã lái xe] về vùng quê vào [cuối tuần trước].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng DROVE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>hey [have DRIVen] [for FIVE HOURS STRAIGHT].</li>
					<li className="list-none">Họ [đã lái xe] [suốt năm tiếng đồng hồ].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have DRIVen, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">38. BREAK</h4>
			
				<ul className="list-square">
			
					<li>he [BREAKS] the RECord [<strong>ever</strong>y YEAR].</li>
					<li className="list-none">Anh ấy [phá] kỷ lục [mỗi năm].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng BREAKS (cho chủ thể ngôi thứ ba số ít he) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she [BROKE] her FAvorite COFfee CUP [LAST DAY].</li>
					<li className="list-none">Cô ấy [đã làm vỡ] chiếc cốc uống cà phê yêu thích của mình [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng BROKE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have BROken] the OLD maCHINE comPLETEly.</li>
					<li className="list-none">Họ [đã làm hỏng] chiếc máy cũ hoàn toàn.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have BROken, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">39. CHOOSE</h4>
			
				<ul className="list-square">
			
					<li>she [CHOOses] the BEST OPtion for the PROJect.</li>
					<li className="list-none">Cô ấy [chọn] lựa chọn tốt nhất cho dự án.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng CHOOses (cho chủ thể ngôi thứ ba số ít she) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>he [CHOSE] a NEW CAR [LAST WEEK].</li>
					<li className="list-none">Anh ấy [đã chọn] một chiếc xe hơi mới [vào tuần trước].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng CHOSE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have CHOsen] the WINning TEAM.</li>
					<li className="list-none">Họ [đã chọn] ra đội chiến thắng.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have CHOsen, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">40. forGET</h4>
			
				<ul className="list-square">
			
					<li>he [forGETS] his KEYS ALmost [<strong>ever</strong>y DAY].</li>
					<li className="list-none">Anh ấy [quên] chìa khóa của mình hầu như [mỗi ngày].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng forGETS (cho chủ thể ngôi thứ ba số ít he) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she [forGOT] to rePLY to my MESsage [YESterday].</li>
					<li className="list-none">Cô ấy [đã quên] trả lời tin nhắn của tôi [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng forGOT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have forGOTten] all about the apPOINTment.</li>
					<li className="list-none">Họ [đã quên] hết về cuộc hẹn đó [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have forGOTten, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40">41. HEAR</h4>
			
				<ul className="list-square">
			
					<li>he [HEARS] a STRANGE NOISE outside his WINdow.</li>
					<li className="list-none">Anh ấy [nghe thấy] một tiếng động lạ bên ngoài cửa sổ.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng HEARS (cho chủ thể ngôi thứ ba số ít he) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she [HEARD] the GOOD NEWS [YESterday].</li>
					<li className="list-none">Cô ấy [đã nghe] tin vui [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng HEARD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>we [have HEARD] about this PLAN [beFORE].</li>
					<li className="list-none">Chúng ta [đã nghe] về kế hoạch này [trước đây].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have HEARD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">42. HOLD</h4>
			
				<ul className="list-square">
			
					<li>she [HOLDS] a MEETing [<strong>ever</strong>y MONday MORNing].</li>
					<li className="list-none">Cô ấy [tổ chức] một cuộc họp [vào mỗi sáng thứ Hai].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng HOLDS (cho chủ thể ngôi thứ ba số ít she) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>he [HELD] the umBRELla for me [in the RAIN].</li>
					<li className="list-none">Anh ấy [đã giữ] chiếc ô giúp tôi [trong cơn mưa].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng HELD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have HELD] this poSITion [for THREE YEARS].</li>
					<li className="list-none">Họ [đã nắm giữ] vị trí này [được ba năm].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have HELD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">43. LEARN</h4>
			
				<ul className="list-square">
			
					<li>he [LEARNS] a NEW LANguage [<strong>ever</strong>y YEAR].</li>
					<li className="list-none">Anh ấy [học] một ngôn ngữ mới [mỗi năm].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng LEARNS (cho chủ thể ngôi thứ ba số ít he) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she [LEARNED] a LOT [from the exPERIence].</li>
					<li className="list-none">Cô ấy [đã học] được rất nhiều [từ kinh nghiệm đó].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng LEARNED để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>we [have LEARNT] HOW to SOLVE the PROBlem.</li>
					<li className="list-none">Chúng ta [đã học] cách giải quyết vấn đề.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have LEARNT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">44. SEND</h4>
			
				<ul className="list-square">
			
					<li>she [SENDS] a [WEEkly] rePORT to her MANager.</li>
					<li className="list-none">Cô ấy [gửi] báo cáo [hàng tuần] cho quản lý của mình.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng sends (cho chủ thể ngôi thứ ba số ít She) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>he [SENT] an imPORTant Email [YESterday].</li>
					<li className="list-none">Anh ấy [đã gửi] một email quan trọng [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SENT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have SENT] the PACKage sucCESSfully.</li>
					<li className="list-none">Họ [đã gửi] bưu phẩm thành công.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với has SENT / have SENT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h4 className="margin-y-40">45. SHOW</h4>
			
				<ul className="list-square">
			
					<li>the CHART [SHOWS] the [ANnual] SALES GROWTH CLEARly.</li>
					<li className="list-none">Biểu đồ [thể hiện] rõ ràng sự tăng trưởng doanh số [hàng năm].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SHOWS (cho chủ thể ngôi thứ ba số ít the CHART) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>he [SHOWED] his NEW PROJect PROUDly at the MEETing.</li>
					<li className="list-none">Anh ấy [đã thể hiện] một cách tự hào dự án mới của mình tại cuộc họp.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SHOWED để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>she [has SHOWN] GREAT imPROVEment [REcently].</li>
					<li className="list-none">Cô ấy [đã thể hiện] sự tiến bộ lớn [gần đây].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với has SHOWN, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">46. SLEEP</h4>
			
				<ul className="list-square">
			
					<li>the BAby [SLEEPS] for EIGHT HOURS [<strong>ever</strong>y NIGHT].</li>
					<li className="list-none">Em bé [ngủ] tám tiếng [mỗi đêm].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SLEEPS (cho chủ thể ngôi thứ ba số ít the BAby) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>he [SLEPT SOUNDly] [through the NIGHT].</li>
					<li className="list-none">Anh ấy [đã ngủ ngon giấc] [suốt cả đêm].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SLEPT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>she [has SLEPT] for a LONG TIME.</li>
					<li className="list-none">Cô ấy [đã ngủ] trong một thời gian dài.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với has SLEPT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">47. SWIM</h4>
			
				<ul className="list-square">
			
					<li>he [SWIMS] in the POOL [<strong>ever</strong>y MORNing].</li>
					<li className="list-none">Anh ấy [bơi] ở hồ bơi [mỗi buổi sáng].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SWIMS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [SWAM] across the RIVer [YESterday].</li>
					<li className="list-none">Cô ấy [đã bơi] qua sông [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SWAM để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have SWUM] in this LAKE <strong>man</strong>y TIMES.</li>
					<li className="list-none">Họ [đã bơi] ở cái hồ này nhiều lần.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SWUM, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">48. TEACH</h4>
			
				<ul className="list-square">
			
					<li>she [TEACHes] ENGlish at a LOcal SCHOOL.</li>
					<li className="list-none">Cô ấy [dạy] tiếng Anh ở một trường học địa phương.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng TEACHes (cho chủ thể ngôi thứ ba số ít she) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>he [TAUGHT] us a VALuable LESson [YESterday].</li>
					<li className="list-none">Anh ấy [đã dạy] chúng tôi một bài học quý giá [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng TAUGHT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have TAUGHT] this SUBject for FIVE YEARS.</li>
					<li className="list-none">Họ [đã dạy] môn học này được năm năm.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have TAUGHT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">49. underSTAND</h4>
			
				<ul className="list-square">
			
					<li>the TEACHer [underSTANDS] the STUdent's PROBlem.</li>
					<li className="list-none">Giáo viên [hiểu] vấn đề của học sinh.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng underSTANDS (cho chủ thể ngôi thứ ba số ít the TEACHer) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she [underSTOOD] the LESson CLEARly [<strong>af</strong>ter the explaNAtion].</li>
					<li className="list-none">Cô ấy [đã hiểu] bài học một cách rõ ràng [sau lời giải thích].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng underSTOOD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>he [has underSTOOD] the CORE CONcept THORoughly.</li>
					<li className="list-none">Anh ấy [đã hiểu] khái niệm cốt lõi một cách thấu đáo.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với has underSTOOD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">50. WIN</h4>
			
				<ul className="list-square">
			
					<li>our TEAM [WINS] <strong>ever</strong>y GAME [THIS SEAson].</li>
					<li className="list-none">Đội của chúng ta [thắng] mọi trận đấu [trong mùa giải này].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng WINS (cho chủ thể ngôi thứ ba số ít our TEAM) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she [WON] the FIRST PRIZE in the compeTITion [YESterday].</li>
					<li className="list-none">Cô ấy [đã giành được] giải nhất trong cuộc thi [ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng WON để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>he [has WON] ALL the MATCHes EASily.</li>
					<li className="list-none">Anh ấy [đã thắng] tất cả các trận đấu một cách dễ dàng.</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với has WON, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">51. WEAR</h4>
			
				<ul className="list-square">
			
					<li>a MAN [WEARS] a WARM COAT in the COLD WEATHer.</li>
					<li className="list-none">Một người đàn ông [mặc] một chiếc áo khoác ấm trong thời tiết lạnh.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng wears (cho chủ thể ngôi thứ ba số ít A man) để chỉ thói quen hoặc sự việc diễn ra theo điều kiện thời tiết.</li>
			
					<li>she [WORE] a LOVEly DRESS to the PARTy [LAST NIGHT].</li>
					<li className="list-none">Cô ấy [đã mặc] một chiếc váy xinh xắn đến bữa tiệc [vào tối qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng wore để chỉ việc đã xảy ra và kết thúc hoàn toàn trong quá khứ.</li>
			
					<li>THIS PAIR of SHOES [has been worn OUT comPLETely].</li>
					<li className="list-none">Đôi giày này [đã bị mòn đi hoàn toàn] [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành bị động với cụm động worn OUT (trong đó OUT là trạng đi liền sau động worn), nói về sự việc đã hoàn tất và để lại kết quả ở hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">52. FLY</h4>
			
				<ul className="list-square">
			
					<li>a PLANE [FLIES HIGH] above the CLOUDS.</li>
					<li className="list-none">Một chiếc máy bay [bay cao] trên những tầng mây.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng FLIES kết hợp với trạng HIGH (cho chủ thể ngôi thứ ba số ít a PLANE) để chỉ sự thật hoặc hành động diễn ra theo quy luật.</li>
			
					<li>the BIRD [flew aWAY] QUICKly [when i CAME CLOSE].</li>
					<li className="list-none">Con chim [đã bay vụt đi] nhanh chóng [khi tôi đến gần].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với cụm động flew aWAY để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>he [has FLOWN] to VietNAM on a BUSIness TRIP.</li>
					<li className="list-none">Anh ấy [đã bay] đến Việt Nam trong một chuyến công tác.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (has FLOWN) để nói về sự việc đã hoàn tất và liên quan đến hiện tại, với chủ thể là he (anh ấy).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">53. FALL</h4>
			
				<ul className="list-square">
			
					<li>the RAIN [FALLS HEAVily] on the ROOF.</li>
					<li className="list-none">Trời mưa [rơi nặng hạt] trên mái nhà.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng FALLS (cho chủ thể ngôi thứ ba số ít the RAIN) để chỉ hiện tượng hoặc sự việc diễn ra theo quy luật tự nhiên.</li>
			
					<li>he [FELL] from the CAMEra eQUIPment [while WORKing outSIDE].</li>
					<li className="list-none">Anh ấy [đã bị ngã] từ chỗ thiết bị máy quay [trong lúc làm việc ngoài trời].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng FELL để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>SEVERal OLD TREES [have <strong>fal</strong>len DOWN] [DURing the STORM].</li>
					<li className="list-none">Một số cây cổ thụ [đã bị đổ sập] [trong cơn bão].</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (FALLen) đi sau have để nói về sự việc đã xảy ra và để lại kết quả ở hiện tại, với chủ thể là SEVERal OLD TREES (một số cây cổ thụ).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">54. CUT</h4>
			
				<ul className="list-square">
			
					<li>he [CUTS] the VEGEtables for COOKing.</li>
					<li className="list-none">Anh ấy [cắt] rau củ để nấu ăn.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng CUTS (cho chủ thể ngôi thứ ba số ít He) để chỉ việc làm diễn ra thường xuyên.</li>
			
					<li>she [CUT] a PIECE of CAKE for me [YESterday].</li>
					<li className="list-none">Cô ấy [đã cắt] một miếng bánh ngọt cho tôi [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng CUT để chỉ việc đã xảy ra và kết thúc trong quá khứ (từ này giữ nguyên hình thức không đổi ở dạng quá khứ).</li>
			
					<li>the GRASS [has been CUT SHORT] in the GARden.</li>
					<li className="list-none">Bãi cỏ trong vườn [đã được cắt ngắn].</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (CUT) đi sau has been để nói về một việc đã hoàn tất và để lại kết quả ở hiện tại, với chủ thể chịu tác động là the GRASS (bãi cỏ).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">55. HIT</h4>
			
				<ul className="list-square">
			
					<li>he [HITS] the TENnis BALL with GREAT FORCE.</li>
					<li className="list-none">Anh ấy [đánh] quả bóng quần vợt với một lực rất mạnh.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng HITS (cho chủ thể ngôi thứ ba số ít he) để chỉ hành động diễn ra mang tính thường xuyên hoặc kỹ thuật trong thể thao.</li>
			
					<li>the CAR [HIT] a TREE on the SIDE of the ROAD [LAST NIGHT].</li>
					<li className="list-none">Chiếc ô tô [đã đâm] vào một cái cây bên vệ đường [vào tối qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng HIT để chỉ sự việc đã xảy ra và kết thúc trong quá khứ (từ này giữ nguyên hình thức không đổi ở dạng quá khứ).</li>
			
					<li>the TARget [has been HIT sucCESSfully] by the ARcher.</li>
					<li className="list-none">Mục tiêu [đã bị bắn trúng thành công] bởi cung thủ.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (HIT) đi sau has been để nói về một việc đã hoàn tất và để lại kết quả ở hiện tại, với chủ thể chịu tác động là the TARget (mục tiêu).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">56. HURT</h4>
			
				<ul className="list-square">
			
					<li>he [HURTS] his KNEE when PLAYing FOOTball.</li>
					<li className="list-none">Anh ấy [làm đau] đầu gối của mình khi đá bóng.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng HURTS (cho chủ thể ngôi thứ ba số ít he) để chỉ việc xảy ra thường xuyên hoặc một thói quen khi chơi thể thao.</li>
			
					<li>she [HURT] her FINger while COOKing [YESterday].</li>
					<li className="list-none">Cô ấy [đã làm đứt] tay ([làm đau] ngón tay) trong lúc nấu ăn [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng HURT để chỉ việc đã xảy ra và kết thúc trong quá khứ (từ này giữ nguyên hình thức không đổi ở dạng quá khứ).</li>
			
					<li>his FEELings [have been HURT] by those HARSH WORDS.</li>
					<li className="list-none">Cảm xúc của anh ấy [đã bị tổn thương] bởi những lời lẽ cay nghiệt đó.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (HURT) đi sau have been để nói về một việc đã tác động và để lại kết quả ở hiện tại, với chủ thể chịu tác động là his FEELings (cảm xúc của anh ấy).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">57. COST</h4>
			
				<ul className="list-square">
			
					<li>THIS NEW PHONE [COSTS] a LOT of MONey.</li>
					<li className="list-none">Chiếc điện thoại mới này [tốn] rất nhiều tiền.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng COSTS (cho chủ thể ngôi thứ ba số ít this NEW PHONE) để chỉ một sự thật hoặc mức giá ở hiện tại.</li>
			
					<li>the TRIP [COST] us a FORtune [LAST SUMmer].</li>
					<li className="list-none">Chuyến đi đó [đã ngốn] của chúng tôi một gia tài [vào mùa hè năm ngoái].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng COST để chỉ sự việc đã xảy ra và kết thúc trong quá khứ (đặc biệt từ này giữ nguyên hình thức ở dạng quá khứ).</li>
			
					<li>a LOT of TIME [has been COST] by this deLAY.</li>
					<li className="list-none">Rất nhiều thời gian [đã bị lãng phí/thiệt hại] bởi sự chậm trễ này.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (COST) đi sau has been để nói về một việc đã tác động đến hiện tại, với chủ thể chịu tác động là a LOT of TIME (rất nhiều thời gian).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">58. BUILD</h4>
			
				<ul className="list-square">
			
					<li>he [BUILDS] a NEW HOUSE for his PARents.</li>
					<li className="list-none">Anh ấy [xây] một ngôi nhà mới cho ba mẹ mình.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng BUILDS (cho chủ thể ngôi thứ ba số ít he) để chỉ việc làm diễn ra mang tính thường xuyên hoặc kế hoạch đang thực hiện.</li>
			
					<li>they [BUILT] a SMALL BRIDGE over the RIVER [LAST YEAR].</li>
					<li className="list-none">Họ [đã xây] một cây cầu nhỏ bắc qua sông [vào năm ngoái].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng BUILT để chỉ việc đã hoàn tất hoàn toàn trong quá khứ, đi kèm mốc thời gian rõ ràng là LAST YEAR.</li>
			
					<li>THIS WEBsite [has been BUILT] with GREAT CARE.</li>
					<li className="list-none">Trang web này [đã được xây dựng] rất cẩn thận.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (BUILT) đi sau has been để nói về một việc đã hoàn tất và để lại kết quả ở hiện tại, với chủ thể chịu tác động là this WEBsite (trang WEB này).</li>
			
				</ul>

			
			<h4 className="margin-y-40">59. CATCH</h4>
			
				<ul className="list-square">
			
					<li>he [CATCHes] the BUS to WORK [<strong>ever</strong>y MORNing].</li>
					<li className="list-none">Anh ấy [bắt] xe buýt đi làm [vào mỗi buổi sáng].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng CATCHes (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen lặp lại.</li>
			
					<li>she [CAUGHT] a BIG FISH [YESterday].</li>
					<li className="list-none">Cô ấy [đã bắt được] một con cá lớn [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng CAUGHT để chỉ hành động đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have CAUGHT] the TRAIN JUST in TIME.</li>
					<li className="list-none">Họ [vừa mới bắt kịp] chuyến tàu đúng lúc.</li>
					<li className="list-none">Dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với dạng phân từ CAUGHT đi sau have để chỉ hành động vừa mới hoàn tất ảnh hưởng đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">60. THROW</h4>
			
				<ul className="list-square">
			
					<li>he [THROWS] the BALL to his DOG in the PARK.</li>
					<li className="list-none">Anh ấy [ném] quả bóng cho chú chó của mình ở công viên.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng THROWS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc hành động diễn ra thường xuyên.</li>
			
					<li>she [threw aWAY] the OLD LETters [LAST NIGHT].</li>
					<li className="list-none">Cô ấy [đã vứt bỏ] những bức thư cũ [vào tối qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng threw để chỉ hành động đã xảy ra và kết thúc trong quá khứ (cụm threw aWAY có nghĩa là vứt đi).</li>
			
					<li>the WINdow [has been THROWN] Open by the WIND.</li>
					<li className="list-none">Cửa sổ [đã bị gió thổi tung] mở ra.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (THROWN) đi sau has been để nói về một việc đã xảy ra và để lại kết quả ở hiện tại, với chủ thể chịu tác động là the WINdow (cửa sổ).</li>
			
				</ul>

			
			<h4 className="margin-y-40">61. SING</h4>
			
				<ul className="list-square">
			
					<li>he [SINGS] aLONG to his FAVOrite SONGS while CODing [<strong>ever</strong>y EVEning].</li>
					<li className="list-none">Anh ấy [hát] theo những bài hát yêu thích của mình trong lúc lập trình [vào mỗi buổi tối].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng SINGS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she [SANG] a traDITional SONG at the FAMIly GATHering [YESterday].</li>
					<li className="list-none">Cô ấy [đã hát] một bài hát truyền thống trong buổi sum họp gia đình [vào ngày hôm qua].</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng SANG để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they [have SUNG] toGETHer at <strong>man</strong>y comMUnity eVENTS.</li>
					<li className="list-none">Họ [đã hát] cùng nhau tại nhiều sự kiện cộng đồng [rồi].</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với have SUNG, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h3 className="margin-y-50 text-center">Cách sử dụng 3 cột V1 – V2 – V3 một cách dễ nhớ</h3>

			{/* V1: Nguyên thể / Hiện tại */}

			<h4>V1: ⏳ Thời Gian Hành Động ở Hiện Tại Đơn (Present Simple) (thêm s/es cho he/she/it)</h4>

			<p className="margin-top-20">Dùng để diễn tả thói quen, sự thật hiển nhiên, hoặc hành động lặp lại.</p>
			
				<ul className="list-square">
			
					<li>she [GOES] to SCHOOL [<strong>ever</strong>y DAY].</li>
					<li className="list-none">Cô ấy [đi] học [mỗi ngày]. (⏳ Thời Gian Hành Động ở Hiện Tại Đơn)</li>
			
				</ul>

			{/* V2: ⏳ Thời Gian Hành Động ở Quá Khứ Đơn */}

			<h4 className="margin-top-20">V2: ⏳ Thời Gian Hành Động ở Quá Khứ Đơn (Past Simple)</h4>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động đã xảy ra và kết thúc trong quá khứ, thường đi kèm các từ chỉ thời gian như yesterday, last week, ago.</p>
			
				<ul className="list-square">

					<li>[YESterday], i [WENT] to the CINema.</li>
					<li className="list-none">[Hôm qua] tôi [đã đi] xem phim (đi rạp chiếu phim). (⏳ Thời Gian Hành Động ở Quá Khứ Đơn)</li>
			
				</ul>

			{/* V3: Quá khứ phân từ (Past Participle) */}

			<h4 className="margin-top-20">V3: Quá khứ phân từ (Past Participle)</h4>

			<p className="margin-top-20">1️⃣ 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành (have/has + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động đã xảy ra nhưng còn liên quan đến hiện tại, hoặc kinh nghiệm.</p>
			
				<ul className="list-square">

					<li>i [have just GONE] HOME.</li>
					<li className="list-none">Tôi [vừa mới về] nhà [rồi]. (📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành)</li>
			
				</ul>

			<p className="margin-top-20">2️⃣ 📏 Khoảng Thời Gian Hành Động ở Quá Khứ Hoàn Thành (had + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động xảy ra trước một hành động khác trong quá khứ.</p>
			
				<ul className="list-square">

					<li>i [had FINished] my HOMEwork be<strong>fore</strong> DINner.</li>
					<li className="list-none">Tôi [đã hoàn thành xong] bài tập về nhà trước bữa tối [rồi]. (📏 Khoảng Thời Gian Hành Động ở Quá Khứ Hoàn Thành)</li>
			
				</ul>

			<p className="margin-top-20">3️⃣ 📏 Khoảng Thời Gian Hành Động ở Tương Lai Hoàn Thành (will have + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động sẽ hoàn thành trước một thời điểm trong tương lai.</p>
			
				<ul className="list-square">

					<li>i [will have FINished] my HOMEwork by NINE p.m.</li>
					<li className="list-none">Tôi [sẽ hoàn thành xong] bài tập về nhà trước 9 giờ tối [rồi]. (📏 Khoảng Thời Gian Hành Động ở Tương Lai Hoàn Thành)</li>
			
				</ul>
					
			<p className="margin-top-20">4️⃣ Thể bị động (be + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để nhấn mạnh hành động hoặc đối tượng chịu tác động, không nhấn mạnh người thực hiện.</p>
			
				<ul className="list-square">

					<li>the LETter [was WRITten] by her.</li>
					<li className="list-none">Bức thư [đã được viết] bởi cô ấy. (Câu bị động ⏳ Thời Gian Hành Động ở Quá Khứ Đơn)</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">Mẹo học nhanh & nhớ lâu (được hàng ngàn học viên áp dụng thành công)</h3>

			<h4 className="margin-top-30 margin-bottom-20">1. Học theo nhóm có quy luật phát âm (rất hiệu quả):</h4>
					
				<ul className="list-square">
			
					<li>Nhóm nguyên vẹn: [CUTS CUT CUT] / [HITS HIT HIT] / [PUTS PUT PUT]</li>
			
					<li>Nhóm đổi nguyên âm: [SINGS SANG SUNG] / [DRINKS DRANK DRUNK] / [SWIMS SWAM SWUM]</li>
			
					<li>Nhóm V2 & V3 giống nhau: [BUYS BOUGHT BOUGHT] / [BRINGS BROUGHT BROUGHT]</li>

					<li>Nhóm “đi & đến” đặc biệt: [GOES WENT GONE] / [COMES CAME COME]</li>
			
				</ul>

			
			<h4 className="margin-y-40">2. Học theo câu chuyện ngắn:</h4>
			
				<ul className="list-square">
			
					<li>[YESterday] i [TOOK] a PHOto, but toDAY i [have TAken] <strong>man</strong>y PHOtos [alREADy].</li>
					<li className="margin-bottom-20 list-none">[Ngày hôm qua] tôi [đã chụp] một bức ảnh, nhưng hôm nay tôi [đã chụp] rất nhiều bức ảnh [rồi].</li>
			
					<li>[YESterday] i [TOOK] a PHOto:</li>
					<li className="list-none">Cấu trúc này dùng ⏳ Thời Gian Hành Động ở Quá Khứ Đơn với dạng TOOK của hành động TAKE.</li>
					<li className="margin-bottom-20 list-none">Được dùng để diễn tả một hành động chụp ảnh đã xảy ra và kết thúc hoàn toàn trong quá khứ, đi kèm với trạng từ chỉ thời gian cụ thể là YESterday (ngày hôm qua).</li>
			
					<li>...but [toDAY] i [have TAken] <strong>man</strong>y PHOtos [alREADy]:</li>
					<li className="list-none">Cấu trúc này dùng 📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành với dạng have TAken.</li>
					<li className="list-none">Được dùng để nhấn mạnh kết quả hoặc số lượng ảnh đã chụp được tính đến thời điểm hiện tại trong ngày, kết hợp với trạng từ toDAY (hôm nay) và alREADy (đã... rồi).</li>
			
				</ul>
			
			
			<h4 className="margin-top-30 margin-bottom-20">3. Flashcard 3 mặt (rất mạnh):</h4>
					
				<ul className="list-square">
			
					<li>Mặt 1: [GOES]</li>
			
					<li>Mặt 2: [WENT]</li>
			
					<li>Mặt 3: [GONE] + câu ví dụ</li>
			
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