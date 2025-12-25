import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Bang12DongTuPhoBien(): React.JSX.Element {

	const postId = "Bang12DongTuPhoBien";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Bảng 12 động từ phổ biến nhất mọi thời đại</h1>

			<h3 className="margin-y-50 text-center">Hành Trình 12 Thì Động Từ Tiếng Anh: Từ Present Đến Present Perfect</h3>

			<p>Học tiếng Anh, đặc biệt là hệ thống thì (tenses), thường khiến nhiều người cảm thấy “choáng ngợp”. Nhưng nếu bạn nắm vững được 12 động từ cơ bản nhất cùng 3 dạng quan trọng: hiện tại (Present), quá khứ đơn (Past) và hiện tại hoàn thành (Present Perfect), bạn đã xây được một nền tảng cực kỳ vững chắc để giao tiếp tự nhiên và đúng ngữ pháp.</p>

			<p>Hãy cùng khám phá danh sách những động từ “quốc dân” này và cách chúng thay đổi qua các thì nhé!</p>

			<h3 className="margin-y-50 text-center">Bảng 12 động từ phổ biến nhất mọi thời đại</h3>

				<table className="margin-y-50">
          <thead>
            <tr>
              <th>Present (hiện tại)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>Past (quá khứ đơn)</th>
							<th>Present Perfect (hiện tại hoàn thành)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
                <td>do/does work</td>
                <td>worked</td>
                <td>have/has worked</td>
            </tr>

            <tr>
                <td>do/does play</td>
                <td>played</td>
                <td>have/has played</td>
            </tr>

            <tr>
                <td>do/does live</td>
                <td>lived</td>
                <td>have/has lived</td>
            </tr>

						<tr>
                <td>do/does study</td>
                <td>studied</td>
                <td>have/has studied</td>
            </tr>

						<tr>
                <td>do/does like</td>
                <td>liked</td>
                <td>have/has liked</td>
            </tr>

						<tr>
                <td>do/does go</td>
                <td>went</td>
                <td>have/has gone</td>
            </tr>

						<tr>
                <td>do/does come</td>
                <td>came</td>
                <td>have/has come</td>
            </tr>

						<tr>
                <td>do/does see</td>
                <td>saw</td>
                <td>have/has seen</td>
            </tr>

						<tr>
                <td>do/does eat</td>
                <td>ate</td>
                <td>have/has eaten</td>
            </tr>

						<tr>
                <td>do/does drink</td>
                <td>drank</td>
                <td>have/has drunk</td>
            </tr>

						<tr>
                <td>do/does take</td>
                <td>took</td>
                <td>have/has taken</td>
            </tr>

						<tr>
                <td>do/does give</td>
                <td>gave</td>
                <td>have/has given</td>
            </tr>
          </tbody>
        </table>

			<h3 className="margin-y-50 text-center">Tại sao 12 động từ này lại “đỉnh cao” đến vậy?</h3>

			<h4 className="margin-y-30">1. Tần suất sử dụng cực cao</h4>
					
			<p>Đây là những động từ xuất hiện nhiều nhất trong hội thoại hàng ngày, phim ảnh, bài hát, sách báo tiếng Anh. Nắm được chúng, bạn đã có thể hiểu và nói được khoảng 40–50% các câu giao tiếp cơ bản.</p>

			<h4 className="margin-y-30">2. Đại diện cho cả hai loại: Quy tắc & Bất quy tắc</h4>
			
				<ul className="list-square">
			
					<li>Động từ có quy tắc (regular): work → worked → worked</li>
			
					<li>Động từ bất quy tắc (irregular): go → went → gone</li>
			
				</ul>

			<p className="margin-top-20">Học cả hai loại ngay từ đầu giúp bạn làm quen với “cảm giác” của ngôn ngữ.</p>

			<h4 className="margin-y-30">3. Dễ áp dụng vào 3 thì quan trọng nhất khi mới bắt đầu</h4>
			
				<ul className="list-square">
			
					<li><strong>Present Simple</strong>: I work every day.</li>
			
					<li><strong>Past Simple</strong>: I worked yesterday.</li>
			
					<li><strong>Present Perfect</strong>: I have worked here for 3 years.</li>
			
				</ul>

			<p className="margin-top-20">Khi bạn đã quen với 3 thì này, việc học các thì còn lại (Present Continuous, Past Perfect, Future…) sẽ trở nên dễ thở hơn rất nhiều.</p>

			{/* Một số câu ví dụ */}

			<h3 className="margin-y-50 text-center">Một số câu ví dụ “đời thường” để bạn luyện ngay hôm nay</h3>
					
				<ul className="list-square">
			
					<li>I <strong>have worked</strong> at this company since 2020.</li>
			
					<li>She <strong>went</strong> to Japan last summer, but she <strong>hasn’t gone</strong> anywhere this year.</li>
			
					<li>We <strong>have eaten</strong> sushi so many times, but yesterday we ate the best one ever!</li>

					<li>He <strong>has lived</strong> in 5 different countries. That’s why he speaks English so well.</li>
			
					<li>They <strong>gave</strong> me a beautiful gift, but I <strong>haven’t given</strong> them anything yet.</li>
			
				</ul>

			{/* Bí kíp */}

			<h3 className="margin-y-50 text-center">Bí kíp học nhanh và nhớ lâu</h3>

			<h4 className="margin-y-30">1. Học theo cụm:</h4>
					
			<p className="text-indent-whole">Không học riêng lẻ “go – went – gone”, mà học luôn câu hoàn chỉnh:</p>
			
				<ul className="list-square">
			
					<li>“I’ve never <strong>gone</strong> to Paris.”</li>
			
					<li>“She <strong>went</strong> there last month.”</li>
			
				</ul>

			<h4 className="margin-y-30">2. Kể chuyện bằng 3 thì:</h4>
					
			<p className="text-indent-whole">Mỗi ngày thử kể lại một việc nhỏ trong ngày bằng cả 3 dạng. Ví dụ:</p>
			
				<ul className="list-square">
			
					<li>Today I <strong>work</strong> from home.</li>
			
					<li>Yesterday I <strong>worked</strong> until midnight.</li>
			
					<li>This month I <strong>have worked</strong> more than 200 hours!</li>
			
				</ul>

			<h4 className="margin-y-30">3. Nghe và nhại theo phim/nhạc</h4>
					
			<p>Các bài hát như “I’ve Had The Time of My Life”, “I Will Always Love You”, “Shape of You”… đều chứa rất nhiều Present Perfect và Past Simple.</p>

			<p className="margin-top-20">Hãy bắt đầu ngay hôm nay với 12 “chiến binh” này. Khi bạn đã nói được tự nhiên 3 thì trên với những động từ quen thuộc nhất, bạn sẽ thấy tiếng Anh không còn xa vời nữa – mà trở thành một người bạn đồng hành rất gần gũi.</p>

			<p>Chúc bạn học vui và tiến bộ mỗi ngày! 🚀</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 25, 2025 · by 🐝Mr. Bee Osn and Grok ·</span>
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