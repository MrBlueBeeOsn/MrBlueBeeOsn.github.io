import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Bang30PhrasalVerbs(): React.JSX.Element {

	const postId = "Bang30PhrasalVerbs";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Bảng 30 phrasal verbs phổ biến nhất</h1>

			<h4 className="margin-bottom-30 text-center">Phrasal Verbs trong tiếng Anh – Bí quyết nói tự nhiên như người bản xứ (Cập nhật 2026)</h4>

			<p>Phrasal verbs là “vũ khí bí mật” giúp bạn nâng tầm tiếng Anh giao tiếp, đặc biệt trong IELTS Speaking, TOEIC Speaking hay cuộc sống hàng ngày. Đây là những cụm từ gồm <strong>động từ</strong> + <strong>giới từ</strong>/<strong>trạng từ</strong> (như up, down, out, on, off…), tạo nên nghĩa hoàn toàn mới, không đoán được từ nghĩa riêng lẻ.</p>

			<p className="margin-top-20">Ví dụ:</p>
			
				<ul className="list-square">
			
					<li>“give” = cho</li>
			
					<li>Nhưng <strong>give up</strong> = bỏ cuộc (không phải “cho lên” đâu nhé!)</li>
			
				</ul>

			<p className="margin-top-20">Native speakers dùng phrasal verbs <strong>rất nhiều</strong> trong nói chuyện đời thường – khoảng 80% động từ trong hội thoại hàng ngày là phrasal verbs. Học chúng không chỉ giúp bạn nghe hiểu tốt hơn mà còn khiến câu nói của bạn tự nhiên, thân mật và ấn tượng hơn rất nhiều.</p>

			<h3 className="margin-y-50 text-center">Tại sao phrasal verbs quan trọng trong năm 2026?</h3>
					
				<ul className="list-square">
			
					<li>IELTS/TOEFL/TOEIC ưu tiên ngôn ngữ tự nhiên → dùng phrasal verbs đúng chỗ dễ lên band 7.0+ Speaking</li>
			
					<li>Giao tiếp thực tế: Người bản xứ hầu như <strong>không nói</strong> “I will telephone you” mà nói “I’ll <strong>call</strong> you <strong>up</strong>”</li>
			
					<li>Dễ gây nhầm lẫn nếu không biết: “pick up” có thể là nhặt lên, học được, đón ai đó…</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">Bảng 30 phrasal verbs phổ biến nhất – Dùng hàng ngày & thi cử</h3>

			<p>Dưới đây là danh sách chọn lọc những cụm <strong>hay gặp nhất</strong> (dựa trên tần suất sử dụng thực tế 2025–2026), kèm nghĩa, loại (separable/inseparable) và ví dụ thực tế.</p>

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
								<td>take off</td>
								<td>cởi ra, cất cánh (máy bay)</td>
								<td>Separable</td>
								<td>The plane took off 10 minutes late.</td>
						</tr>

						<tr>
								<td>30</td>
								<td>work out</td>
								<td>giải quyết, tập gym</td>
								<td>Inseparable</td>
								<td>Everything will work out in the end.</td>
						</tr>

						<tr>
								<td>31–50</td>
								<td>(các cụm phổ biến khác)</td>
								<td>fall apart, figure out, fill in, get away, grow up, hand in, keep up, look out, pass out, pay back, put on, run into, show up, sort out, stand up, take on, think over, throw away, try on, watch out</td>
								<td>Separable/Inseparable tùy</td>
								<td>Ví dụ: Watch out! There’s a car coming!</td>
						</tr>
						
					</tbody>
				</table>

			<h3 className="margin-y-50 text-center">Mẹo học & sử dụng phrasal verbs siêu hiệu quả (2026)</h3>

			<p className="margin-top-20 margin-bottom-20">1. <strong>Học theo ngữ cảnh</strong> → Đừng học rời rạc. Ghi cả câu ví dụ vào sổ tay hoặc Anki.</p>

			<p className="margin-top-20 margin-bottom-20">2. <strong>Nhóm theo chủ đề</strong> (rất mạnh):</p>
			
				<ul className="list-square">
			
					<li>Daily routine: wake up, get up, turn on, eat out</li>

					<li>Feelings: cheer up, calm down, break down, get over</li>

					<li>Social: hang out, catch up, get along, go out</li>
			
				</ul>
			
			<p className="margin-top-20 margin-bottom-20">3. <strong>Thực hành hàng ngày</strong> → Thay thế câu bình thường bằng phrasal verbs:</p>
					
				<ul className="list-square">
			
					<li className="list-none">“I discovered the truth” → “I <strong>found out</strong> the truth”</li>
			
				</ul>

			<p className="margin-top-20 margin-bottom-20">4. <strong>Nghe</strong> & <strong>bắt chước</strong> → Xem phim, TikTok, podcast Anh/Mỹ → ghi lại phrasal verbs hay gặp.</p>

			<p className="margin-top-20 margin-bottom-20">5. <strong>Dùng trong IELTS Speaking</strong> → Part 1: “I <strong>get along</strong> well with my siblings.”</p>
					
				<ul className="list-square">
			
					<li className="list-none">Part 2: “Last year I <strong>took up</strong> yoga to <strong>get over</strong> stress.”</li>
			
					<li className="list-none">Part 3: “Many people <strong>give up</strong> easily when things <strong>get tough</strong>.”</li>
			
				</ul>

			<p className="margin-top-20">Học 5–10 cụm mỗi tuần, dùng ngay trong chat hoặc tự nói → sau 2–3 tháng bạn sẽ thấy mình <strong>nói tự nhiên</strong> hơn hẳn!</p>

			<p>Chúc bạn sớm “level up” tiếng Anh với phrasal verbs! 🚀</p>

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