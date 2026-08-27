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

			<table className="margin-y-50">
					<thead>
						<tr>
							<th>STT</th>
							<th>Hiện tại đơn (thêm -s/es)</th>
							<th>Quá khứ đơn (V2)</th>
							<th>Quá khứ phân từ (V3)</th>
							<th>Nghĩa phổ biến</th>
						</tr>
					</thead>

					<tbody>

						<tr>
								<td>1</td>
								<td>is</td>
								<td>was / were</td>
								<td>been</td>
								<td>là, thì, ở</td>
						</tr>
						
						<tr>
								<td>2</td>
								<td>has</td>
								<td>had</td>
								<td>had</td>
								<td>có</td>
						</tr>
						
						<tr>
								<td>3</td>
								<td>does</td>
								<td>did</td>
								<td>done</td>
								<td>làm</td>
						</tr>

						<tr>
								<td>4</td>
								<td>goes</td>
								<td>went</td>
								<td>gone</td>
								<td>đi</td>
						</tr>

						<tr>
								<td>5</td>
								<td>comes</td>
								<td>came</td>
								<td>come</td>
								<td>đến, tới</td>
						</tr>

						<tr>
								<td>6</td>
								<td>sees</td>
								<td>saw</td>
								<td>seen</td>
								<td>nhìn, thấy</td>
						</tr>

						<tr>
								<td>7</td>
								<td>gets</td>
								<td>got</td>
								<td>got / gotten (AmE)</td>
								<td>lấy, nhận, trở nên</td>
						</tr>

						<tr>
								<td>8</td>
								<td>makes</td>
								<td>made</td>
								<td>made</td>
								<td>làm, chế tạo</td>
						</tr>

						<tr>
								<td>9</td>
								<td>knows</td>
								<td>knew</td>
								<td>known</td>
								<td>biết</td>
						</tr>

						<tr>
								<td>10</td>
								<td>takes</td>
								<td>took</td>
								<td>taken</td>
								<td>cầm, lấy, đi</td>
						</tr>

						<tr>
								<td>11</td>
								<td>gives</td>
								<td>gave</td>
								<td>given</td>
								<td>cho, tặng</td>
						</tr>
						
						<tr>
								<td>12</td>
								<td>writes</td>
								<td>wrote</td>
								<td>written</td>
								<td>viết</td>
						</tr>
						
						<tr>
								<td>13</td>
								<td>speaks</td>
								<td>spoke</td>
								<td>spoken</td>
								<td>nói, nói chuyện</td>
						</tr>

						<tr>
								<td>14</td>
								<td>finds</td>
								<td>found</td>
								<td>found</td>
								<td>tìm thấy</td>
						</tr>

						<tr>
								<td>15</td>
								<td>thinks</td>
								<td>thought</td>
								<td>thought</td>
								<td>nghĩ</td>
						</tr>

						<tr>
								<td>16</td>
								<td>tells</td>
								<td>told</td>
								<td>told</td>
								<td>kể, bảo</td>
						</tr>

						<tr>
								<td>17</td>
								<td>says</td>
								<td>said</td>
								<td>said</td>
								<td>nói, bảo</td>
						</tr>

						<tr>
								<td>18</td>
								<td>becomes</td>
								<td>became</td>
								<td>become</td>
								<td>trở thành</td>
						</tr>

						<tr>
								<td>19</td>
								<td>leaves</td>
								<td>left</td>
								<td>left</td>
								<td>rời đi, để lại</td>
						</tr>

						<tr>
								<td>20</td>
								<td>feels</td>
								<td>felt</td>
								<td>felt</td>
								<td>cảm thấy</td>
						</tr>

						<tr>
								<td>21</td>
								<td>puts</td>
								<td>put</td>
								<td>put</td>
								<td>đặt, để</td>
						</tr>
						
						<tr>
								<td>22</td>
								<td>brings</td>
								<td>brought</td>
								<td>brought</td>
								<td>mang đến, đem</td>
						</tr>
						
						<tr>
								<td>23</td>
								<td>begins</td>
								<td>began</td>
								<td>begun</td>
								<td>bắt đầu</td>
						</tr>

						<tr>
								<td>24</td>
								<td>keeps</td>
								<td>kept</td>
								<td>kept</td>
								<td>giữ</td>
						</tr>

						<tr>
								<td>25</td>
								<td>lets</td>
								<td>let</td>
								<td>let</td>
								<td>cho phép</td>
						</tr>

						<tr>
								<td>26</td>
								<td>sets</td>
								<td>set</td>
								<td>set</td>
								<td>đặt, thiết lập</td>
						</tr>

						<tr>
								<td>27</td>
								<td>reads</td>
								<td>read [red]</td>
								<td>read [red]</td>
								<td>đọc</td>
						</tr>

						<tr>
								<td>28</td>
								<td>buys</td>
								<td>bought</td>
								<td>bought</td>
								<td>mua</td>
						</tr>

						<tr>
								<td>29</td>
								<td>sits</td>
								<td>sat</td>
								<td>sat</td>
								<td>ngồi</td>
						</tr>

						<tr>
								<td>30</td>
								<td>stands</td>
								<td>stood</td>
								<td>stood</td>
								<td>đứng</td>
						</tr>

						
					</tbody>
				</table>

			
			
			<h4 className="margin-y-40">1. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			
			<h4 className="margin-y-40">2. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>

			
			<h4 className="margin-y-40">3. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			
			<h4 className="margin-y-40">4. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			

			<h4 className="margin-y-40">5. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			
			<h4 className="margin-y-40">6. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>

			
			<h4 className="margin-y-40">7. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>

			
			<h4 className="margin-y-40">8. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>


			<h4 className="margin-y-40">9. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>

			
			<h4 className="margin-y-40">10. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40">11. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			
			<h4 className="margin-y-40">12. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>

			
			<h4 className="margin-y-40">13. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			
			<h4 className="margin-y-40">14. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			

			<h4 className="margin-y-40">15. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			
			<h4 className="margin-y-40">16. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>

			
			<h4 className="margin-y-40">17. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>

			
			<h4 className="margin-y-40">18. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>


			<h4 className="margin-y-40">19. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>


			<h4 className="margin-y-40">20. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40">21. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			
			<h4 className="margin-y-40">22. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>

			
			<h4 className="margin-y-40">23. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			
			<h4 className="margin-y-40">24. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			

			<h4 className="margin-y-40">25. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			
			<h4 className="margin-y-40">26. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>

			
			<h4 className="margin-y-40">27. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>

			
			<h4 className="margin-y-40">28. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>


			<h4 className="margin-y-40">29. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>

			
			<h4 className="margin-y-40">30. </h4>
			
				<ul className="list-square">
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="margin-bottom-20 list-none"></li>
			
					<li></li>
					<li className="list-none"></li>
					<li className="list-none"></li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40">31. LOSE</h4>
			
				<ul className="list-square">
			
					<li>he <strong>LOses</strong> his KEYS whenever he is in a HURry.</li>
					<li className="list-none">Anh ấy <strong>hay làm mất</strong> chìa khóa mỗi khi vội vã.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng LOses (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>LOST</strong> her FAvorite CAMERa in the PARK LAST WEEK.</li>
					<li className="list-none">Cô ấy <strong>đã làm mất</strong> chiếc máy ảnh yêu thích của mình ở công viên vào tuần trước.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng LOST để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have LOST</strong> their WAY in the unfaMILiar NEIGHborhood.</li>
					<li className="list-none">Họ <strong>đã lạc đường</strong> ở khu phố lạ lẫm đó.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have LOST, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">32. PAY</h4>
			
				<ul className="list-square">
			
					<li>he <strong>PAYS</strong> his BILLS at the beGINning of every MONTH.</li>
					<li className="list-none">Anh ấy <strong>thanh toán</strong> các hóa đơn của mình vào đầu mỗi tháng.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng PAYS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>PAID</strong> for the NEW COFfee GRINDer YESterday.</li>
					<li className="list-none">Cô ấy <strong>đã trả tiền</strong> cho chiếc máy xay cà phê mới vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng PAID để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have PAID</strong> for the SERvice in adVANCE.</li>
					<li className="list-none">Họ <strong>đã thanh toán</strong> trước cho dịch vụ này rồi.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have PAID, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">33. MEET</h4>
			
				<ul className="list-square">
			
					<li>he <strong>MEETS</strong> his CLIents every TUESday.</li>
					<li className="list-none">Anh ấy <strong>gặp gỡ</strong> các khách hàng của mình vào mỗi thứ Ba.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng MEETS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>MET</strong> an OLD FRIEND YESterday.</li>
					<li className="list-none">Cô ấy <strong>đã gặp</strong> một người bạn cũ vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng MET để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have MET beFORE</strong> at the CONference.</li>
					<li className="list-none">Họ <strong>đã gặp nhau trước</strong> đây ở hội nghị.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have MET, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">34. RUN</h4>
			
				<ul className="list-square">
			
					<li>he <strong>RUNS</strong> in the PARK every afterNOON.</li>
					<li className="list-none">Anh ấy <strong>chạy bộ</strong> ở công viên vào mỗi buổi chiều.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng RUNS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>RAN</strong> to CATCH the BUS this MORning.</li>
					<li className="list-none">Cô ấy <strong>đã chạy</strong> để bắt xe buýt vào sáng nay.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng RAN để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have RUN</strong> FIVE kiLOMeters so FAR.</li>
					<li className="list-none">Họ <strong>đã chạy</strong> được năm ki-lô-mét cho đến nay.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have RUN, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h4 className="margin-y-40">35. EAT</h4>
			
				<ul className="list-square">
			
					<li>he <strong>EATS</strong> a HEALTHy BREAKfast every day.</li>
					<li className="list-none">Anh ấy <strong>ăn</strong> một bữa sáng lành mạnh mỗi ngày.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng EATS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>ATE</strong> a deLICious MEAL LAST NIGHT.</li>
					<li className="list-none">Cô ấy <strong>đã ăn</strong> một bữa ăn ngon vào tối hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng ATE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have EAten</strong> all the FOOD on the TAble.</li>
					<li className="list-none">Họ <strong>đã ăn</strong> hết sạch thức ăn trên bàn rồi.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have EAten, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">36. DRINK</h4>
			
				<ul className="list-square">
			
					<li>he <strong>DRINKS</strong> a LARGE CUP of roBUSta COFfee every MORning.</li>
					<li className="list-none">Anh ấy <strong>uống</strong> một cốc cà phê robusta lớn mỗi buổi sáng.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng DRINKS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>DRANK</strong> a GLASS of FRESH JUICE YESterday.</li>
					<li className="list-none">Cô ấy <strong>đã uống</strong> một cốc nước ép tươi vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng DRANK để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have DRUNK</strong> all the WAter in the BOTtle.</li>
					<li className="list-none">Họ <strong>đã uống</strong> hết sạch nước trong chai rồi.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have DRUNK, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">37. DRIVE</h4>
			
				<ul className="list-square">
			
					<li>he <strong>DRIVES</strong> to WORK every MORning.</li>
					<li className="list-none">Anh ấy <strong>lái xe</strong> đi làm mỗi buổi sáng.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng DRIVES (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>DROVE</strong> to the COUNtryside LAST WEEKend.</li>
					<li className="list-none">Cô ấy <strong>đã lái xe</strong> về vùng quê vào cuối tuần trước.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng DROVE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>hey <strong>have DRIVen</strong> for FIVE HOURS STRAIGHT.</li>
					<li className="list-none">Họ <strong>đã lái xe</strong> suốt năm tiếng đồng hồ.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have DRIVen, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">38. BREAK</h4>
			
				<ul className="list-square">
			
					<li>he <strong>BREAKS</strong> the RECord every YEAR.</li>
					<li className="list-none">Anh ấy <strong>phá</strong> kỷ lục mỗi năm.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng BREAKS (cho chủ thể ngôi thứ ba số ít he) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>BROKE</strong> her FAvorite COFfee CUP LAST DAY.</li>
					<li className="list-none">Cô ấy <strong>đã làm vỡ</strong> chiếc cốc uống cà phê yêu thích của mình vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng BROKE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have BROken</strong> the OLD maCHINE comPLETEly.</li>
					<li className="list-none">Họ <strong>đã làm hỏng</strong> chiếc máy cũ hoàn toàn.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have BROken, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">39. CHOOSE</h4>
			
				<ul className="list-square">
			
					<li>she <strong>CHOOses</strong> the BEST OPtion for the PROJect.</li>
					<li className="list-none">Cô ấy <strong>chọn</strong> lựa chọn tốt nhất cho dự án.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng CHOOses (cho chủ thể ngôi thứ ba số ít she) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>he <strong>CHOSE</strong> a NEW CAR LAST WEEK.</li>
					<li className="list-none">Anh ấy <strong>đã chọn</strong> một chiếc xe hơi mới vào tuần trước.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng CHOSE để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have CHOsen</strong> the WINning TEAM.</li>
					<li className="list-none">Họ <strong>đã chọn</strong> ra đội chiến thắng.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have CHOsen, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">40. forGET</h4>
			
				<ul className="list-square">
			
					<li>he <strong>forGETS</strong> his KEYS ALmost every DAY.</li>
					<li className="list-none">Anh ấy <strong>quên</strong> chìa khóa của mình hầu như mỗi ngày.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng forGETS (cho chủ thể ngôi thứ ba số ít he) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>forGOT</strong> to rePLY to my MESsage YESterday.</li>
					<li className="list-none">Cô ấy <strong>đã quên</strong> trả lời tin nhắn của tôi vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng forGOT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have forGOTten</strong> all about the apPOINTment.</li>
					<li className="list-none">Họ <strong>đã quên</strong> hết về cuộc hẹn đó rồi.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have forGOTten, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40">41. HEAR</h4>
			
				<ul className="list-square">
			
					<li>he <strong>HEARS</strong> a STRANGE NOISE outside his WINdow.</li>
					<li className="list-none">Anh ấy <strong>nghe thấy</strong> một tiếng động lạ bên ngoài cửa sổ.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng HEARS (cho chủ thể ngôi thứ ba số ít he) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>HEARD</strong> the GOOD NEWS YESterday.</li>
					<li className="list-none">Cô ấy <strong>đã nghe</strong> tin vui vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng HEARD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>we <strong>have HEARD</strong> about this PLAN beFORE.</li>
					<li className="list-none">Chúng ta <strong>đã nghe</strong> về kế hoạch này trước đây.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have HEARD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">42. HOLD</h4>
			
				<ul className="list-square">
			
					<li>she <strong>HOLDS</strong> a MEETing every MONday MORning.</li>
					<li className="list-none">Cô ấy <strong>tổ chức</strong> một cuộc họp vào mỗi sáng thứ Hai.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng HOLDS (cho chủ thể ngôi thứ ba số ít she) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>he <strong>HELD</strong> the umBRELla for me in the RAIN.</li>
					<li className="list-none">Anh ấy <strong>đã giữ</strong> chiếc ô giúp tôi trong cơn mưa.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng HELD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have HELD</strong> this poSITion for THREE YEARS.</li>
					<li className="list-none">Họ <strong>đã nắm giữ</strong> vị trí này được ba năm.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have HELD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">43. LEARN</h4>
			
				<ul className="list-square">
			
					<li>he <strong>LEARNS</strong> a NEW LANguage every year.</li>
					<li className="list-none">Anh ấy <strong>học</strong> một ngôn ngữ mới mỗi năm.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng LEARNS (cho chủ thể ngôi thứ ba số ít he) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>LEARNED</strong> a LOT from the exPERIence.</li>
					<li className="list-none">Cô ấy <strong>đã học</strong> được rất nhiều từ kinh nghiệm đó.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng LEARNED để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>we <strong>have LEARNT</strong> HOW to SOLVE the PROBlem.</li>
					<li className="list-none">Chúng ta <strong>đã học</strong> cách giải quyết vấn đề.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have LEARNT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">44. SEND</h4>
			
				<ul className="list-square">
			
					<li>she <strong>SENDS</strong> a WEEkly rePORT to her MANager.</li>
					<li className="list-none">Cô ấy <strong>gửi</strong> báo cáo hàng tuần cho quản lý của mình.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng sends (cho chủ thể ngôi thứ ba số ít She) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>he <strong>SENT</strong> an imPORtant Email YESterday.</li>
					<li className="list-none">Anh ấy <strong>đã gửi</strong> một email quan trọng vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng SENT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have SENT</strong> the PACKage sucCESSfully.</li>
					<li className="list-none">Họ <strong>đã gửi</strong> bưu phẩm thành công.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với has SENT / have SENT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			

			<h4 className="margin-y-40">45. SHOW</h4>
			
				<ul className="list-square">
			
					<li>the CHART SHOWS the ANnual SALES GROWTH CLEARly.</li>
					<li className="list-none">Biểu đồ <strong>thể hiện rõ ràng</strong> sự tăng trưởng doanh số hàng năm.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng SHOWS (cho chủ thể ngôi thứ ba số ít the CHART) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>he <strong>SHOWED</strong> his NEW PROJect PROUDly at the MEETing.</li>
					<li className="list-none">Anh ấy <strong>đã thể hiện</strong> một cách tự hào dự án mới của mình tại cuộc họp.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng SHOWED để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>she <strong>has SHOWN</strong> GREAT imPROVEment REcently.</li>
					<li className="list-none">Cô ấy <strong>đã thể hiện</strong> sự tiến bộ lớn gần đây.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với has SHOWN, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">46. SLEEP</h4>
			
				<ul className="list-square">
			
					<li>the BAby <strong>SLEEPS</strong> for EIGHT HOURS every NIGHT.</li>
					<li className="list-none">Em bé <strong>ngủ</strong> tám tiếng mỗi đêm.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng SLEEPS (cho chủ thể ngôi thứ ba số ít the BAby) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>he <strong>SLEPT SOUNDly</strong> through the NIGHT.</li>
					<li className="list-none">Anh ấy <strong>đã ngủ ngon giấc</strong> suốt cả đêm.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng SLEPT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>she <strong>has SLEPT</strong> for a LONG TIME.</li>
					<li className="list-none">Cô ấy <strong>đã ngủ</strong> trong một thời gian dài.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với has SLEPT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">47. SWIM</h4>
			
				<ul className="list-square">
			
					<li>he <strong>SWIMS</strong> in the POOL EVERy MORning.</li>
					<li className="list-none">Anh ấy <strong>bơi</strong> ở hồ bơi mỗi buổi sáng.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng SWIMS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>SWAM</strong> across the RIVer YESterday.</li>
					<li className="list-none">Cô ấy <strong>đã bơi</strong> qua sông vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng SWAM để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have SWUM</strong> in this LAKE MANy TIMES.</li>
					<li className="list-none">Họ <strong>đã bơi</strong> ở cái hồ này nhiều lần.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have SWUM, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">48. TEACH</h4>
			
				<ul className="list-square">
			
					<li>she <strong>TEACHes</strong> ENGlish at a LOcal SCHOOL.</li>
					<li className="list-none">Cô ấy <strong>dạy</strong> tiếng Anh ở một trường học địa phương.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng TEACHes (cho chủ thể ngôi thứ ba số ít she) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>he <strong>TAUGHT</strong> us a VALuable LESson YESterday.</li>
					<li className="list-none">Anh ấy <strong>đã dạy</strong> chúng tôi một bài học quý giá vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng TAUGHT để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have TAUGHT</strong> this SUBject for FIVE YEARS.</li>
					<li className="list-none">Họ <strong>đã dạy</strong> môn học này được năm năm.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với have TAUGHT, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">49. underSTAND</h4>
			
				<ul className="list-square">
			
					<li>the TEACHer <strong>underSTANDS</strong> the STUdent's PROBlem.</li>
					<li className="list-none">Giáo viên <strong>hiểu</strong> vấn đề của học sinh.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng underSTANDS (cho chủ thể ngôi thứ ba số ít the TEACHer) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>underSTOOD</strong> the LESson CLEARly AFTER the explaNAtion.</li>
					<li className="list-none">Cô ấy <strong>đã hiểu</strong> bài học một cách rõ ràng sau lời giải thích.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng underSTOOD để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>he <strong>has underSTOOD</strong> the CORE CONcept THORoughly.</li>
					<li className="list-none">Anh ấy <strong>đã hiểu</strong> khái niệm cốt lõi một cách thấu đáo.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với has underSTOOD, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>

			
			<h4 className="margin-y-40">50. WIN</h4>
			
				<ul className="list-square">
			
					<li>our TEAM <strong>WINS</strong> EVERy GAME this SEAson.</li>
					<li className="list-none">Đội của chúng ta <strong>thắng</strong> mọi trận đấu trong mùa giải này.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng WINS (cho chủ thể ngôi thứ ba số ít our TEAM) để chỉ sự việc diễn ra theo quy luật.</li>
			
					<li>she <strong>WON</strong> the FIRST PRIZE in the compeTITion YESterday.</li>
					<li className="list-none">Cô ấy <strong>đã giành được</strong> giải nhất trong cuộc thi ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng WON để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>he <strong>has WON</strong> ALL the MATCHes EASily.</li>
					<li className="list-none">Anh ấy <strong>đã thắng</strong> tất cả các trận đấu một cách dễ dàng.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành với has WON, nói về sự việc đã hoàn tất và liên quan đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">51. WEAR</h4>
			
				<ul className="list-square">
			
					<li>a MAN <strong>WEARS</strong> a WARM COAT in the COLD WEATHer.</li>
					<li className="list-none">Một người đàn ông <strong>mặc</strong> một chiếc áo khoác ấm trong thời tiết lạnh.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng wears (cho chủ thể ngôi thứ ba số ít A man) để chỉ thói quen hoặc sự việc diễn ra theo điều kiện thời tiết.</li>
			
					<li>she <strong>WORE</strong> a LOVEly DRESS to the PARty LAST NIGHT.</li>
					<li className="list-none">Cô ấy <strong>đã mặc</strong> một chiếc váy xinh xắn đến bữa tiệc vào tối qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng wore để chỉ việc đã xảy ra và kết thúc hoàn toàn trong quá khứ.</li>
			
					<li>this PAIR of SHOES <strong>has been WORN OUT comPLETely</strong>.</li>
					<li className="list-none">Đôi giày này <strong>đã bị mòn đi hoàn toàn</strong> rồi.</li>
					<li className="list-none">Cấu trúc này dùng dạng hoàn thành bị động với cụm động WORN OUT (trong đó OUT là trạng đi liền sau động worn), nói về sự việc đã hoàn tất và để lại kết quả ở hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">52. FLY</h4>
			
				<ul className="list-square">
			
					<li>a PLANE <strong>FLIES HIGH</strong> above the CLOUDS.</li>
					<li className="list-none">Một chiếc máy bay <strong>bay cao</strong> trên những tầng mây.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng FLIES kết hợp với trạng HIGH (cho chủ thể ngôi thứ ba số ít a PLANE) để chỉ sự thật hoặc hành động diễn ra theo quy luật.</li>
			
					<li>the BIRD <strong>FLEW aWAY</strong> QUICKly when i CAME CLOSE.</li>
					<li className="list-none">Con chim <strong>đã bay vụt đi</strong> nhanh chóng khi tôi đến gần.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với cụm động FLEW aWAY để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>he <strong>has FLOWN</strong> to VietNAM on a BUSIness TRIP.</li>
					<li className="list-none">Anh ấy <strong>đã bay</strong> đến Việt Nam trong một chuyến công tác.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (has FLOWN) để nói về sự việc đã hoàn tất và liên quan đến hiện tại, với chủ thể là he (anh ấy).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">53. FALL</h4>
			
				<ul className="list-square">
			
					<li>the RAIN <strong>FALLS HEAVily</strong> on the ROOF.</li>
					<li className="list-none">Trời mưa <strong>rơi nặng hạt</strong> trên mái nhà.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng FALLS (cho chủ thể ngôi thứ ba số ít the RAIN) để chỉ hiện tượng hoặc sự việc diễn ra theo quy luật tự nhiên.</li>
			
					<li>he <strong>FELL</strong> from the CAMera eQUIPment while WORKing outSIDE.</li>
					<li className="list-none">Anh ấy <strong>đã bị ngã</strong> từ chỗ thiết bị máy quay trong lúc làm việc ngoài trời.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng FELL để chỉ việc đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>SEVERal OLD TREES <strong>have FALLen</strong> DOWN DURing the STORM.</li>
					<li className="list-none">Một số cây cổ thụ <strong>đã bị đổ sập</strong> trong cơn bão.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (FALLen) đi sau have để nói về sự việc đã xảy ra và để lại kết quả ở hiện tại, với chủ thể là SEVERal OLD TREES (một số cây cổ thụ).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">54. CUT</h4>
			
				<ul className="list-square">
			
					<li>he <strong>CUTS</strong> the VEGETables for COOKing.</li>
					<li className="list-none">Anh ấy <strong>cắt</strong> rau củ để nấu ăn.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng CUTS (cho chủ thể ngôi thứ ba số ít He) để chỉ việc làm diễn ra thường xuyên.</li>
			
					<li>she <strong>CUT</strong> a PIECE of CAKE for me YESterday.</li>
					<li className="list-none">Cô ấy <strong>đã cắt</strong> một miếng bánh ngọt cho tôi vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng CUT để chỉ việc đã xảy ra và kết thúc trong quá khứ (từ này giữ nguyên hình thức không đổi ở dạng quá khứ).</li>
			
					<li>the GRASS <strong>has been CUT</strong> SHORT in the GARden.</li>
					<li className="list-none">Bãi cỏ trong vườn <strong>đã được cắt</strong> ngắn.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (CUT) đi sau has been để nói về một việc đã hoàn tất và để lại kết quả ở hiện tại, với chủ thể chịu tác động là the GRASS (bãi cỏ).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">55. HIT</h4>
			
				<ul className="list-square">
			
					<li>he <strong>HITS</strong> the TENnis BALL with GREAT FORCE.</li>
					<li className="list-none">Anh ấy <strong>đánh</strong> quả bóng quần vợt với một lực rất mạnh.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng HITS (cho chủ thể ngôi thứ ba số ít he) để chỉ hành động diễn ra mang tính thường xuyên hoặc kỹ thuật trong thể thao.</li>
			
					<li>the CAR <strong>HIT</strong> a TREE on the SIDE of the ROAD LAST NIGHT.</li>
					<li className="list-none">Chiếc ô tô <strong>đã đâm</strong> vào một cái cây bên vệ đường vào tối qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng HIT để chỉ sự việc đã xảy ra và kết thúc trong quá khứ (từ này giữ nguyên hình thức không đổi ở dạng quá khứ).</li>
			
					<li>the TARget <strong>has been HIT sucCESSfully</strong> by the ARcher.</li>
					<li className="list-none">Mục tiêu <strong>đã bị bắn trúng thành công</strong> bởi cung thủ.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (HIT) đi sau has been để nói về một việc đã hoàn tất và để lại kết quả ở hiện tại, với chủ thể chịu tác động là the TARget (mục tiêu).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">56. HURT</h4>
			
				<ul className="list-square">
			
					<li>he <strong>HURTS</strong> his KNEE when PLAYing FOOTball.</li>
					<li className="list-none">Anh ấy <strong>làm đau</strong> đầu gối của mình khi đá bóng.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng HURTS (cho chủ thể ngôi thứ ba số ít he) để chỉ việc xảy ra thường xuyên hoặc một thói quen khi chơi thể thao.</li>
			
					<li>she <strong>HURT</strong> her FINger while COOKing YESterday.</li>
					<li className="list-none">Cô ấy <strong>đã làm đứt</strong> tay (<strong>làm đau</strong> ngón tay) trong lúc nấu ăn vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng HURT để chỉ việc đã xảy ra và kết thúc trong quá khứ (từ này giữ nguyên hình thức không đổi ở dạng quá khứ).</li>
			
					<li>his FEELings <strong>have been HURT</strong> by those HARSH WORDS.</li>
					<li className="list-none">Cảm xúc của anh ấy <strong>đã bị tổn thương</strong> bởi những lời lẽ cay nghiệt đó.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (HURT) đi sau have been để nói về một việc đã tác động và để lại kết quả ở hiện tại, với chủ thể chịu tác động là his FEELings (cảm xúc của anh ấy).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">57. COST</h4>
			
				<ul className="list-square">
			
					<li>this NEW PHONE <strong>COSTS</strong> a LOT of MONey.</li>
					<li className="list-none">Chiếc điện thoại mới này <strong>tốn</strong> rất nhiều tiền.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng COSTS (cho chủ thể ngôi thứ ba số ít this NEW PHONE) để chỉ một sự thật hoặc mức giá ở hiện tại.</li>
			
					<li>the TRIP <strong>COST</strong> us a FORtune LAST SUMmer.</li>
					<li className="list-none">Chuyến đi đó <strong>đã ngốn</strong> của chúng tôi một gia tài vào mùa hè năm ngoái.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng COST để chỉ sự việc đã xảy ra và kết thúc trong quá khứ (đặc biệt từ này giữ nguyên hình thức ở dạng quá khứ).</li>
			
					<li>a LOT of TIME <strong>has been COST</strong> by this deLAY.</li>
					<li className="list-none">Rất nhiều thời gian <strong>đã bị lãng phí</strong>/<strong>thiệt hại</strong> bởi sự chậm trễ này.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (COST) đi sau has been để nói về một việc đã tác động đến hiện tại, với chủ thể chịu tác động là a LOT of TIME (rất nhiều thời gian).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">58. BUILD</h4>
			
				<ul className="list-square">
			
					<li>he <strong>BUILDS</strong> a NEW HOUSE for his PARents.</li>
					<li className="list-none">Anh ấy <strong>xây</strong> một ngôi nhà mới cho ba mẹ mình.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng BUILDS (cho chủ thể ngôi thứ ba số ít he) để chỉ việc làm diễn ra mang tính thường xuyên hoặc kế hoạch đang thực hiện.</li>
			
					<li>they <strong>BUILT</strong> a SMALL BRIDGE over the RIVER LAST YEAR.</li>
					<li className="list-none">Họ <strong>đã xây</strong> một cây cầu nhỏ bắc qua sông vào năm ngoái.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng BUILT để chỉ việc đã hoàn tất hoàn toàn trong quá khứ, đi kèm mốc thời gian rõ ràng là LAST YEAR.</li>
			
					<li>this WEBsite <strong>has been BUILT</strong> with GREAT CARE.</li>
					<li className="list-none">Trang web này <strong>đã được xây dựng</strong> rất cẩn thận.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (BUILT) đi sau has been để nói về một việc đã hoàn tất và để lại kết quả ở hiện tại, với chủ thể chịu tác động là this WEBsite (trang WEB này).</li>
			
				</ul>

			
			<h4 className="margin-y-40">59. CATCH</h4>
			
				<ul className="list-square">
			
					<li>he <strong>CATCHes</strong> the BUS to WORK EVERy MORNing.</li>
					<li className="list-none">Anh ấy <strong>bắt</strong> xe buýt đi làm vào mỗi buổi sáng.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng CATCHes (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen lặp lại.</li>
			
					<li>she <strong>CAUGHT</strong> a BIG FISH YESterday.</li>
					<li className="list-none">Cô ấy <strong>đã bắt được</strong> một con cá lớn vào ngày hôm qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng CAUGHT để chỉ hành động đã xảy ra và kết thúc trong quá khứ.</li>
			
					<li>they <strong>have CAUGHT</strong> the TRAIN JUST in TIME.</li>
					<li className="list-none">Họ <strong>vừa mới bắt kịp</strong> chuyến tàu đúng lúc.</li>
					<li className="list-none">Dùng thời hiện tại hoàn thành với dạng phân từ CAUGHT đi sau have để chỉ hành động vừa mới hoàn tất ảnh hưởng đến hiện tại.</li>
			
				</ul>


			<h4 className="margin-y-40">60. THROW</h4>
			
				<ul className="list-square">
			
					<li>he <strong>THROWS</strong> the BALL to his DOG in the PARK.</li>
					<li className="list-none">Anh ấy <strong>ném</strong> quả bóng cho chú chó của mình ở công viên.</li>
					<li className="margin-bottom-20 list-none">Dùng thời hiện tại đơn với dạng throws (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc hành động diễn ra thường xuyên.</li>
			
					<li>she <strong>THREW aWAY</strong> the OLD LETters LAST NIGHT.</li>
					<li className="list-none">Cô ấy <strong>đã vứt bỏ</strong> những bức thư cũ vào tối qua.</li>
					<li className="margin-bottom-20 list-none">Dùng thời quá khứ đơn với dạng THREW để chỉ hành động đã xảy ra và kết thúc trong quá khứ (cụm THREW aWAY có nghĩa là vứt đi).</li>
			
					<li>the WINdow <strong>has been THROWN</strong> Open by the WIND.</li>
					<li className="list-none">Cửa sổ <strong>đã bị gió thổi tung</strong> mở ra.</li>
					<li className="list-none">Cấu trúc này dùng từ chỉ hành động ở dạng hoàn thành (THROWN) đi sau has been để nói về một việc đã xảy ra và để lại kết quả ở hiện tại, với chủ thể chịu tác động là the WINdow (cửa sổ).</li>
			
				</ul>
			

			<h3 className="margin-y-50 text-center">Cách sử dụng 3 cột V1 – V2 – V3 một cách dễ nhớ</h3>

			{/* V1: Nguyên thể / Hiện tại */}

			<h4>V1: 🕒 Hiện tại đơn (Present Simple) (thêm s/es cho he/she/it)</h4>

			<p className="margin-top-20">Dùng để diễn tả thói quen, sự thật hiển nhiên, hoặc hành động lặp lại.</p>
			
				<ul className="list-square">
			
					<li>she GOES to SCHOOL EVERy DAY.</li>
					<li className="list-none">Cô ấy đi học mỗi ngày. (Thời hiện tại đơn)</li>
			
				</ul>

			{/* V2: Quá khứ đơn */}

			<h4 className="margin-top-20">V2: ⏳ Quá khứ đơn (Past Simple)</h4>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động đã xảy ra và kết thúc trong quá khứ, thường đi kèm các từ chỉ thời gian như yesterday, last week, ago.</p>
			
				<ul className="list-square">

					<li>YESterday, i WENT to the CINema.</li>
					<li className="list-none">Hôm qua tôi đã đi xem phim (đi rạp chiếu phim). (Thời quá khứ đơn)</li>
			
				</ul>

			{/* V3: Quá khứ phân từ (Past Participle) */}

			<h4 className="margin-top-20">V3: Quá khứ phân từ (Past Participle)</h4>

			<p className="margin-top-20">1️⃣ Hiện tại hoàn thành (have/has + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động đã xảy ra nhưng còn liên quan đến hiện tại, hoặc kinh nghiệm.</p>
			
				<ul className="list-square">

					<li>i have just GONE HOME.</li>
					<li className="list-none">Tôi vừa mới về nhà. (Thời hiện tại hoàn thành)</li>
			
				</ul>

			<p className="margin-top-20">2️⃣ Quá khứ hoàn thành (had + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động xảy ra trước một hành động khác trong quá khứ.</p>
			
				<ul className="list-square">

					<li>i had FINished my HOMEwork before DINner.</li>
					<li className="list-none">Tôi đã hoàn thành xong bài tập về nhà trước bữa tối. (Thời quá khứ hoàn thành)</li>
			
				</ul>

			<p className="margin-top-20">3️⃣ Tương lai hoàn thành (will have + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động sẽ hoàn thành trước một thời điểm trong tương lai.</p>
			
				<ul className="list-square">

					<li>i will have FINished my HOMEwork by NINE p.m.</li>
					<li className="list-none">Tôi sẽ hoàn thành xong bài tập về nhà trước 9 giờ tối. (Thời tương lai hoàn thành)</li>
			
				</ul>
					
			<p className="margin-top-20">4️⃣ Thể bị động (be + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để nhấn mạnh hành động hoặc đối tượng chịu tác động, không nhấn mạnh người thực hiện.</p>
			
				<ul className="list-square">

					<li>the LETter was WRITten by her.</li>
					<li className="list-none">Bức thư đã được viết bởi cô ấy. (Câu bị động thời quá khứ đơn)</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">Mẹo học nhanh & nhớ lâu (được hàng ngàn học viên áp dụng thành công)</h3>

			<h4 className="margin-top-30 margin-bottom-20">1. Học theo nhóm có quy luật phát âm (rất hiệu quả):</h4>
					
				<ul className="list-square">
			
					<li>Nhóm nguyên vẹn: cuts-cut-cut / hits-hit-hit / puts-put-put</li>
			
					<li>Nhóm đổi nguyên âm: sings-sang-sung / drinks-drank-drunk / swims-swam-swum</li>
			
					<li>Nhóm V2 & V3 giống nhau: buys-bought-bought / brings-brought-brought</li>

					<li>Nhóm “đi & đến” đặc biệt: goes-went-gone / comes-came-come</li>
			
				</ul>

			<h4 className="margin-top-30 margin-bottom-20">2. Học theo câu chuyện ngắn:</h4>
			
				<ul className="list-square">
			
					<li>Yesterday I <strong>took</strong> a photo, but today I have <strong>taken</strong> many photos already.</li>
			
				</ul>
			
			<h4 className="margin-top-30 margin-bottom-20">3. Flashcard 3 mặt (rất mạnh):</h4>
					
				<ul className="list-square">
			
					<li>Mặt 1: <strong>goes</strong></li>
			
					<li>Mặt 2: <strong>went</strong></li>
			
					<li>Mặt 3: <strong>gone</strong> + câu ví dụ</li>
			
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