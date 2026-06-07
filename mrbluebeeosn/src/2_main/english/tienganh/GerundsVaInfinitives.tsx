import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GerundsVaInfinitives(): React.JSX.Element {

	const postId = "GerundsVaInfinitives";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Gerunds và Infinitives</h1>

			<h4 className="margin-bottom-30 text-center">“Kẻ thù” lớn nhất của người học tiếng Anh… nhưng thực ra rất dễ thương nếu bạn hiểu đúng cách</h4>

			<p className="margin-top-20">Bạn đã bao giờ cảm thấy hoang mang khi đứng trước những câu như:</p>
			
				<ul className="list-square">
			
					<li>I enjoy <strong>swimming</strong> → đúng</li>
			
					<li>I enjoy <strong>to swim</strong> → sai</li>
			
					<li>I want <strong>to go</strong> → đúng</li>

					<li>I want <strong>going</strong> → sai kinh khủng</li>
			
				</ul>

			<p className="margin-top-20">Rồi đột nhiên lại gặp những câu "phản bội" kiểu:</p>
			
				<ul className="list-square">
			
					<li>I stopped <strong>smoking</strong> (nghỉ hút thuốc)</li>
			
					<li>I stopped <strong>to smoke</strong> (dừng lại để… hút thuốc)</li>
			
				</ul>
			
			<p className="margin-top-20">Hai cấu trúc này khiến hàng triệu người học tiếng Anh phát điên. Nhưng nếu bạn hiểu được "tâm lý" và "tính cách" của chúng, mọi thứ sẽ trở nên… đáng yêu hơn rất nhiều.</p>

			{/* 1. Hai nhân vật chính và tính cách cơ bản */}

			<h3 className="margin-y-50 text-center">1. Hai nhân vật chính và tính cách cơ bản</h3>

				<table className="margin-y-50">
					<thead>
						<tr>
							<td>Đặc điểm</td>
							<th>Gerund (V-ing)</th>
							<th>Infinitive (to + V)</th>
						</tr>
					</thead>

					<tbody>

						<tr>
								<td>Bản chất</td>
								<td>Danh cơ hóa động cơ</td>
								<td>Động cơ nguyên mẫu có "to"</td>
						</tr>
						
						<tr>
								<td>Cảm giác</td>
								<td>Hành động như một <strong>hoạt động</strong>/<strong>sự việc</strong></td>
								<td>Hành động như một <strong>mục đích</strong>/<strong>ý định</strong></td>
						</tr>
						
						<tr>
								<td>Thường đứng ở vị trí</td>
								<td>Chủ ngữ, tân ngữ, sau giới cơ</td>
								<td>Tân ngữ của một số động cơ nhất định</td>
						</tr>

						<tr>
								<td>Cảm giác thời gian</td>
								<td>Thường mang tính <strong>chung chung</strong>, <strong>thói quen</strong>, <strong>trải nghiệm</strong></td>
								<td>Thường mang tính <strong>tương lai</strong>, <strong>dự định</strong></td>
						</tr>

						<tr>
								<td>Ví dụ cảm tính</td>
								<td>"Swimming makes me happy" (việc bơi lội nói chung)</td>
								<td>"I want to swim in Maldives" (tôi muốn đi bơi ở Maldives – ý định cụ thể)</td>
						</tr>
					</tbody>
				</table>

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
								<td>start, begin, continue, stop, try, remember, forget</td>
						</tr>
						
						<tr>
								<td>Sau giới cơ</td>
								<td>interested in, good at, tired of, look forward to, be used to, give up</td>
								<td>(không có)</td>
								<td>-</td>
						</tr>

						<tr>
								<td>Động cơ + tân ngữ + to V</td>
								<td>(không có)</td>
								<td>ask, allow, tell, force, want, expect, need, help sb to do</td>
								<td>-</td>
						</tr>

						<tr>
								<td>Một số động cơ đặc biệt</td>
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

				<table className="margin-y-50">
					<thead>
						<tr>
							<td>Động cơ</td>
							<th>V-ing (thường là trải nghiệm đã xảy ra)</th>
							<th>to V (hành động sau đó, có chủ đích)</th>
						</tr>
					</thead>

					<tbody>

						<tr>
								<td>remember</td>
								<td>Remember <strong>locking</strong> the door? (Nhớ là đã khóa chưa?)</td>
								<td>Remember <strong>to lock</strong> the door. (Nhớ khóa cửa nhé!)</td>
						</tr>
						
						<tr>
								<td>forget</td>
								<td>I’ll never forget <strong>meeting</strong> you. (không bao giờ quên việc gặp bạn)</td>
								<td>Don’t forget <strong>to buy</strong> milk. (đừng quên mua sữa)</td>
						</tr>
						
						<tr>
								<td>stop</td>
								<td>I stopped <strong>smoking</strong>. (bỏ thuốc lá)</td>
								<td>I stopped <strong>to smoke</strong>. (dừng lại để… hút điếu thuốc)</td>
						</tr>

						<tr>
								<td>try</td>
								<td>Try <strong>eating</strong> less sugar. (thử xem ăn ít đường có ổn không)</td>
								<td>Try <strong>to eat</strong> less sugar. (cố gắng hết sức để ăn ít đường)</td>
						</tr>

						<tr>
								<td>regret</td>
								<td>I regret <strong>telling</strong> her the truth. (hối hận vì đã nói)</td>
								<td>I regret <strong>to tell</strong> you that… (tiếc phải thông báo rằng…) – rất trang trọng</td>
						</tr>
					</tbody>
				</table>

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

					<li>I’m looking forward to __________ (see) you next week.</li>

					<li>She admitted __________ (steal) the cookies.</li>

					<li>Would you mind __________ (not/play) music so loud?</li>
			
					<li>I tried __________ (open) the jar but I couldn’t.</li>
			
					<li>We regret __________ (inform) you that the event has been canceled.</li>
			
				</ol>

			<p className="margin-top-20">(Đáp án ở cuối bài – đừng nhìn vội nhé!)</p>

			<h3 className="margin-y-50 text-center">Kết luận: Đừng sợ, hãy "làm quen" với họ</h3>

			<p>Gerunds và Infinitives không phải là quy tắc cần học thuộc lòng, mà là <strong>hai cách nhìn khác nhau về hành động</strong>:</p>
			
				<ul className="list-square">

					<li>Gerund (V-ing) = hành động được xem như <strong>một thứ</strong>, <strong>một trải nghiệm</strong></li>
			
					<li>Infinitive (to V) = hành động được xem như <strong>một mục tiêu</strong>, <strong>một ý định</strong></li>
			
				</ul>

			<p className="margin-top-20">Khi bạn bắt đầu nghĩ theo cách này thay vì cố nhớ từng động cơ, bạn sẽ thấy chúng… thân thiện hơn rất nhiều.</p>

			<p>Hãy thử nói to một câu với cả hai cách và cảm nhận sự khác biệt. Bạn sẽ thấy ngay: ngôn ngữ không chỉ là quy tắc, mà còn là <strong>cảm giác</strong>.</p>

			<p className="margin-top-20"><strong>Đáp án bài test nhỏ</strong></p>
			
				<ol>
			
					<li>seeing</li>
			
					<li>stealing / having stolen (cả hai đều đúng, nhưng stealing phổ biến hơn)</li>
			
					<li>not playing</li>

					<li>to open</li>
			
					<li>to inform</li>
			
				</ol>

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