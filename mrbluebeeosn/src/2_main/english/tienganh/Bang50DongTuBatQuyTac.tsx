import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Bang50DongTuBatQuyTac(): React.JSX.Element {

	const postId = "Bang50DongTuBatQuyTac";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Động cơ bất quy tắc</h1>

			<h4 className="margin-bottom-30 text-center">Bảng đầy đủ & cách sử dụng chi tiết nhất (2025) </h4>

			<p>Động cơ bất quy tắc (irregular verbs) là “cơn ác mộng” của rất nhiều người học tiếng Anh, vì chúng không theo quy tắc thêm -ed như động cơ thường. Tuy nhiên, chỉ cần nắm vững khoảng <strong>60–70 động cơ phổ biến nhất</strong>, bạn đã có thể giao tiếp tự tin, viết email chuyên nghiệp, thi IELTS/TOEIC đạt điểm cao và thậm chí nói chuyện như người bản xứ ở mức trung cấp – cao cấp.</p>

			<p>Dưới đây là bảng <strong>động cơ bất quy tắc phổ biến nhất</strong> (được cập nhật theo mức độ sử dụng thực tế năm 2025), kèm giải thích cách dùng rõ ràng, dễ nhớ.</p>

			<h3 className="margin-y-50 text-center">Bảng động cơ bất quy tắc phổ biến nhất</h3>

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

						<tr>
								<td>31</td>
								<td>loses</td>
								<td>lost</td>
								<td>lost</td>
								<td>mất, thua</td>
						</tr>
						
						<tr>
								<td>32</td>
								<td>pays</td>
								<td>paid</td>
								<td>paid</td>
								<td>trả tiền</td>
						</tr>
						
						<tr>
								<td>33</td>
								<td>meets</td>
								<td>met</td>
								<td>met</td>
								<td>gặp</td>
						</tr>

						<tr>
								<td>34</td>
								<td>runs</td>
								<td>ran</td>
								<td>run</td>
								<td>chạy</td>
						</tr>

						<tr>
								<td>35</td>
								<td>eats</td>
								<td>ate</td>
								<td>eaten</td>
								<td>ăn</td>
						</tr>

						<tr>
								<td>36</td>
								<td>drinks</td>
								<td>drank</td>
								<td>drunk</td>
								<td>uống</td>
						</tr>

						<tr>
								<td>37</td>
								<td>drives</td>
								<td>drove</td>
								<td>driven</td>
								<td>lái xe</td>
						</tr>

						<tr>
								<td>38</td>
								<td>breaks</td>
								<td>broke</td>
								<td>broken</td>
								<td>làm vỡ, hỏng</td>
						</tr>

						<tr>
								<td>39</td>
								<td>chooses</td>
								<td>chose</td>
								<td>chosen</td>
								<td>chọn</td>
						</tr>

						<tr>
								<td>40</td>
								<td>forgets</td>
								<td>forgot</td>
								<td>forgotten</td>
								<td>quên</td>
						</tr>

						<tr>
								<td>41</td>
								<td>hears</td>
								<td>heard</td>
								<td>heard</td>
								<td>nghe</td>
						</tr>
						
						<tr>
								<td>42</td>
								<td>holds</td>
								<td>held</td>
								<td>held</td>
								<td>cầm, nắm, tổ chức</td>
						</tr>
						
						<tr>
								<td>43</td>
								<td>learns</td>
								<td>learnt / learned</td>
								<td>learnt / learned</td>
								<td>học, biết được</td>
						</tr>

						<tr>
								<td>44</td>
								<td>sends</td>
								<td>sent</td>
								<td>sent</td>
								<td>gửi</td>
						</tr>

						<tr>
								<td>45</td>
								<td>shows</td>
								<td>showed</td>
								<td>shown / showed</td>
								<td>chỉ, cho xem</td>
						</tr>

						<tr>
								<td>46</td>
								<td>sleeps</td>
								<td>slept</td>
								<td>slept</td>
								<td>ngủ</td>
						</tr>

						<tr>
								<td>47</td>
								<td>swims</td>
								<td>swam</td>
								<td>swum</td>
								<td>bơi</td>
						</tr>

						<tr>
								<td>48</td>
								<td>teaches</td>
								<td>taught</td>
								<td>taught</td>
								<td>dạy</td>
						</tr>

						<tr>
								<td>49</td>
								<td>understands</td>
								<td>understood</td>
								<td>understood</td>
								<td>hiểu</td>
						</tr>

						<tr>
								<td>50</td>
								<td>wins</td>
								<td>won</td>
								<td>won</td>
								<td>thắng</td>
						</tr>

						<tr>
								<td>51</td>
								<td>wears</td>
								<td>wore</td>
								<td>worn</td>
								<td>mặc, đeo</td>
						</tr>
						
						<tr>
								<td>52</td>
								<td>flies</td>
								<td>flew</td>
								<td>flown</td>
								<td>bay</td>
						</tr>
						
						<tr>
								<td>53</td>
								<td>falls</td>
								<td>fell</td>
								<td>fallen</td>
								<td>ngã, rơi</td>
						</tr>

						<tr>
								<td>54</td>
								<td>cuts</td>
								<td>cut</td>
								<td>cut</td>
								<td>cắt</td>
						</tr>

						<tr>
								<td>55</td>
								<td>hits</td>
								<td>hit</td>
								<td>hit</td>
								<td>đánh, đập</td>
						</tr>

						<tr>
								<td>56</td>
								<td>hurts</td>
								<td>hurt</td>
								<td>hurt</td>
								<td>làm đau</td>
						</tr>

						<tr>
								<td>57</td>
								<td>costs</td>
								<td>cost</td>
								<td>cost</td>
								<td>có giá, tốn</td>
						</tr>

						<tr>
								<td>58</td>
								<td>builds</td>
								<td>built</td>
								<td>built</td>
								<td>xây dựng</td>
						</tr>

						<tr>
								<td>59</td>
								<td>catches</td>
								<td>caught</td>
								<td>caught</td>
								<td>bắt, nắm lấy</td>
						</tr>

						<tr>
								<td>60</td>
								<td>throws</td>
								<td>threw</td>
								<td>thrown</td>
								<td>ném, quăng</td>
						</tr>
						
					</tbody>
				</table>

			<h3 className="margin-y-50 text-center">Cách sử dụng 3 cột V1 – V2 – V3 một cách dễ nhớ</h3>

			{/* V1: Nguyên thể / Hiện tại */}

			<h4>V1: 🕒 Hiện tại đơn (Present Simple) (thêm s/es cho he/she/it)</h4>

			<p className="margin-top-20">Dùng để diễn tả thói quen, sự thật hiển nhiên, hoặc hành động lặp lại.</p>
			
				<ul className="list-square">
			
					<li>She <strong>goes</strong> to school every day.</li>
			
				</ul>

			{/* V2: Quá khứ đơn */}

			<h4 className="margin-top-20">V2: ⏳ Quá khứ đơn (Past Simple)</h4>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động đã xảy ra và kết thúc trong quá khứ, thường đi kèm các từ chỉ thời gian như yesterday, last week, ago.</p>
			
				<ul className="list-square">

					<li>Yesterday I <strong>went</strong> to the cinema.</li>
			
				</ul>

			{/* V3: Quá khứ phân từ (Past Participle) */}

			<h4 className="margin-top-20">V3: Quá khứ phân từ (Past Participle)</h4>

			<p className="margin-top-20">1️⃣ Hiện tại hoàn thành (have/has + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động đã xảy ra nhưng còn liên quan đến hiện tại, hoặc kinh nghiệm.</p>
			
				<ul className="list-square">

					<li>I <strong>have just gone</strong> home.</li>
			
				</ul>

			<p className="margin-top-20">2️⃣ Quá khứ hoàn thành (had + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động xảy ra trước một hành động khác trong quá khứ.</p>
			
				<ul className="list-square">

					<li>I <strong>had finished</strong> my homework before dinner.</li>
			
				</ul>

			<p className="margin-top-20">3️⃣ Tương lai hoàn thành (will have + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để diễn tả hành động sẽ hoàn thành trước một thời điểm trong tương lai.</p>
			
				<ul className="list-square">

					<li>I <strong>will have finished</strong> my homework by 9 p.m.</li>
			
				</ul>
					
			<p className="margin-top-20">4️⃣ Thể bị động (be + V3)</p>

			<p className="margin-top-20 text-indent-whole">Dùng để nhấn mạnh hành động hoặc đối tượng chịu tác động, không nhấn mạnh người thực hiện.</p>
			
				<ul className="list-square">

					<li>The letter <strong>was written</strong> by her.</li>
			
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

			<h4 className="margin-top-30 margin-bottom-20">4. Ưu tiên 30 động cơ đầu tiên → chiếm ~85% tần suất xuất hiện trong giao tiếp & bài thi.</h4>
			
			<p>Hãy in bảng này ra, dán lên tường, học mỗi ngày 10 động cơ trong 1 tuần. Sau 6 tuần bạn sẽ nắm chắc gần như toàn bộ động cơ bất quy tắc hay gặp nhất!</p>

			<p>Chúc bạn học tốt và sớm “thoát kiếp” động cơ bất quy tắc! 💪</p>

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