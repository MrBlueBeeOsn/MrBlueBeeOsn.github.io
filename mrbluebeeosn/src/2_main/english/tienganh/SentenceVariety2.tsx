import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SentenceVariety2(): React.JSX.Element {

	const postId = "SentenceVariety2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Sentence Variety
												
				<sup><HashLink smooth to="/tieng-anh/sentence-variety-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/sentence-variety-9">&nbsp;9&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Các loại câu tiếng Anh: Từ rối rắm đến bay bổng chỉ trong 10 phút</h4>

			<p>Bạn có bao giờ viết một câu tiếng Anh dài ngoằng, xong đọc lại thấy… rối như mớ bòng bong?</p>

			<p>Hay toàn viết câu cụt ngủn, đọc như robot?</p>

			<p>Vấn đề không phải bạn thiếu từ vựng. Vấn đề là bạn chưa biết <strong>có những loại câu nào và khi nào thì dùng</strong>.</p>
					
			<p>Bài viết này sẽ cho bạn một hệ thống cực kỳ dễ nhớ – từ câu đơn giản nhất đến câu phức tạp "nghe như người bản xứ" – kèm cách học và áp dụng thực tế.</p>

			{/* 1. Bốn loại câu tiếng Anh cơ bản (ai cũng nên thuộc lòng) */}

			<h3 className="margin-y-50 text-center">1. Bốn loại câu tiếng Anh cơ bản (ai cũng nên thuộc lòng)</h3>

			<h4 className="margin-y-40">1. Simple (đơn)</h4>
					
			<p className="text-indent-whole">1 câu con độc lập</p>
			
				<ul className="list-square">
			
					<li>I like coffee.</li>
					<li className="list-none">Tôi mê cà phê lắm.</li>
			
				</ul>

			<h4 className="margin-y-40">2. Compound (ghép đẳng lập)</h4>
					
			<p className="text-indent-whole">2 câu con độc lập + liên cơ (and, but, or, so…)</p>
			
				<ul className="list-square">
			
					<li>I like coffee, <strong>but</strong> my sister likes tea.</li>
					<li className="list-none">Mình thì mê cà phê, còn chị/em mình lại khoái uống trà.</li>
			
				</ul>


			<h4 className="margin-y-40">3. Complex (ghép chính phụ)</h4>
					
			<p className="text-indent-whole">1 câu con độc lập + 1 phụ câu (because, although, when, if…)</p>
			
				<ul className="list-square">
			
					<li><strong>Although</strong> I was tired, I finished my homework.</li>
					<li className="list-none">Mặc dù rất mệt mỏi, tôi đã hoàn thành bài tập về nhà của mình.</li>
			
				</ul>
			

			<h4 className="margin-y-40">4. Compound-Complex (ghép hỗn hợp)</h4>
					
			<p className="text-indent-whole">2 câu con độc lập + 1+ phụ câu</p>
			
				<ul className="list-square">
			
					<li><strong>When</strong> I arrived home, I was hungry, <strong>so</strong> I made a sandwich.</li>
					<li className="list-none">Khi về đến nhà, tôi cảm thấy đói nên đã làm một chiếc bánh mì sandwich.</li>
			
				</ul>

			<h4 className="margin-y-40">💡 Mẹo nhận biết nhanh:</h4>

				<ul className="list-square">

					<li>Simple:</li>
					<li className="margin-bottom-20 list-none">Chỉ một việc.</li>
			
					<li>Compound:</li>
					<li className="margin-bottom-20 list-none">Hai việc, không việc nào phụ thuộc việc nào.</li>

					<li>Complex:</li>
					<li className="margin-bottom-20 list-none">Một việc chính, một việc phụ (thường có because, although, if, when).</li>

					<li>Compound-Complex:</li>
					<li className="list-none">Hai việc chính + một việc phụ.</li>
			
				</ul>

			{/* 2. Làm sao để học – không phải "nhồi" mà là "chơi" */}

			<h3 className="margin-y-50 text-center">2. Làm sao để học – không phải "nhồi" mà là "chơi"</h3>

			<p>Học cấu trúc câu mà ép bản thân thuộc công thức thì nhanh quên lắm.</p>

			<p>Thay vào đó:</p>

			<h4 className="margin-y-40">Cách 1: Chơi trò "bẻ câu"</h4>

			<p className="text-indent-whole">Lấy một câu đơn:</p>

				<ul className="list-square">

					<li>She opened the door.</li>
					<li className="list-none">Cổ mở cửa ra.</li>
			
				</ul>

			<p className="margin-y-30 text-indent-whole">Hỏi: <strong>Có thể thêm because vào không</strong>?</p>

				<ul className="list-square">

					<li>She opened the door <strong>because</strong> she heard a noise.</li>
					<li className="margin-bottom-20 list-none">Cô ấy mở toang cửa vì nghe có tiếng động lạ.</li>

					<li className="list-none">→ Thành complex</li>
			
				</ul>

			<p className="margin-y-30 text-indent-whole">Hỏi tiếp: <strong>Có thể nối với một câu khác bằng and không</strong>?</p>

			<ul className="list-square">

					<li>She opened the door <strong>because</strong> she heard a noise, <strong>and</strong> she screamed.</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã mở cửa vì cô ấy nghe thấy một tiếng ồn, và cô ấy đã hét lên.</li>

					<li className="list-none">→ Thành compound-complex</li>
			
				</ul>
					
			<p className="margin-top-20 text-indent-whole">Sau 5 phút, bạn sẽ thấy mình nhìn ra cấu trúc mà không cần phân tích ngữ pháp.</p>


			<h4 className="margin-y-40">Cách 2: Gắn màu sắc cho từng loại câu</h4>

			<p className="text-indent-whole">Khi đọc báo tiếng Anh (BBC, VOA), hãy lấy bút (hoặc highlight trong file) tô:</p>

			<p className="example-sentence">

				<ul className="list-square">

					<li><span className="m"><strong>Màu vàng</strong>: câu đơn</span></li>

					<li><span className="v"><strong>Màu xanh</strong>: câu ghép đẳng lập</span></li>

					<li><span className="o"><strong>Màu cam</strong>: câu phức</span></li>

					<li><span className="s"><strong>Màu tím</strong>: câu hỗn hợp</span></li>
			
				</ul>

			</p>
					
			<p className="margin-top-20 text-indent-whole">Sau 5 phút, bạn sẽ thấy mình nhìn ra cấu trúc mà không cần phân tích ngữ pháp.</p>



			<h4 className="margin-y-40">Cách 3: Nói trước, viết sau</h4>

			<p className="text-indent-whole">Mỗi tối, hãy nói một câu về ngày của bạn:</p>

				<ul className="list-square">
			
					<li>I woke up late.</li>
					<li className="margin-bottom-20 list-none">Tôi đã dậy muộn.</li>

					<li className="margin-bottom-20 list-none">→ Simple</li>

					<li>I woke up late, <strong>so</strong> I skipped breakfast.</li>
					<li className="margin-bottom-20 list-none">Tôi đã thức dậy muộn, vì vậy tôi đã bỏ qua bữa sáng.</li>

					<li className="margin-bottom-20 list-none">→ Complex</li>

					<li><strong>Because</strong> I woke up late, I skipped breakfast.</li>
					<li className="margin-bottom-20 list-none">Bởi vì tôi thức dậy trễ, tôi đã bỏ qua bữa ăn sáng.</li>

					<li className="list-none">→ Complex</li>
			
				</ul>
					
			<p className="margin-top-20 text-indent-whole">Rồi mới viết xuống. Nói giúp não bạn tạo phản xạ tự nhiên hơn.</p>

			{/* 3. Cách xây dựng câu từ đơn giản đến phức tạp (kế hoạch 3 bước) */}

			<h3 className="margin-y-50 text-center">3. Cách xây dựng câu từ đơn giản đến phức tạp (kế hoạch 3 bước)</h3>


			<h4 className="margin-y-40">Bước 1:</h4>

			<p className="text-indent-whole"><strong>Bắt đầu bằng câu đơn</strong> – nhưng đừng ở đó mãi</p>

			<p className="text-indent-whole">Viết một ý thật cơ bản.</p>

				<ul className="list-square">
			
					<li>The boy ran.</li>
					<li className="list-none">Cậu bé đã bỏ chạy.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">Bước 2:</h4>

			<p className="text-indent-whole">Thêm một câu con phụ để mở rộng</p>

			<p className="text-indent-whole">Dùng when, because, although, if…</p>

				<ul className="list-square">
			
					<li><strong>Because</strong> he was scared, the boy ran.</li>
					<li className="list-none">Bởi vì cậu ấy sợ hãi, cậu bé đã chạy.</li>
			
				</ul>


			<h4 className="margin-y-40">Bước 3:</h4>

			<p className="text-indent-whole">Nối thêm một câu con độc lập bằng <strong>and</strong>, <strong>but</strong>, <strong>so</strong>, <strong>or</strong></p>

				<ul className="list-square">
			
					<li><strong>Because</strong> he was scared, the boy ran, <strong>and</strong> he didn't look back.</li>
					<li className="list-none">Bởi vì cậu ấy sợ hãi, cậu bé đã chạy, và cậu ấy đã không nhìn lại.</li>
			
				</ul>
					
			<p className="margin-top-20 text-indent-whole">Thế là từ 3 từ bạn đã có một câu hỗn hợp (compound-complex) 12 từ, giàu cảm xúc và nhịp điệu.</p>

			<p className="text-indent-whole">🔁 Nguyên tắc vàng: <strong>Mỗi câu phức tạp nên có duy nhất một câu con phụ</strong> nếu bạn mới bắt đầu. Đừng nhồi nhét.</p>


			{/* 4. Cách nhận biết các loại câu khi đọc – mẹo "từ khóa" */}

			<h3 className="margin-y-50 text-center">4. Cách nhận biết các loại câu khi đọc – mẹo "từ khóa"</h3>
					
			<p className="text-indent-whole"></p>
			
				<ul className="list-square">
			
					<li>Thấy <strong>and</strong>, <strong>but</strong>, <strong>or</strong>, <strong>so</strong>, <strong>for</strong>, <strong>nor</strong>, <strong>yet</strong></li>
					<li className=" margin-bottom-20 list-none">→ có thể là compound (nối 2 câu con độc lập)</li>

					<li>Thấy <strong>because</strong>, <strong>although</strong>, <strong>if</strong>, <strong>when</strong>, <strong>while</strong>, <strong>since</strong>, <strong>unless</strong>, <strong>as soon as</strong></li>
					<li className=" margin-bottom-20 list-none">→ complex hoặc compound-complex</li>
			
					<li>Không thấy từ nối nào, chỉ một danh chủ + một động cơ chính</li>
					<li className="list-none">→ simple</li>
			
				</ul>

			<p className="margin-top-20">Ví dụ thực tế:</p>

			<p className="margin-top-20"></p>
			
				<ul className="list-square">
			
					<li><strong>Although</strong> it was raining, we went out.</li>
					<li className="margin-bottom-20 list-none">Mặc dù trời mưa, chúng tôi vẫn đi ra ngoài.</li>

					<li className=" margin-bottom-20 list-none">→ Complex – chữ although ở đầu</li>
			
					<li>It was raining, <strong>but</strong> we went out.</li>
					<li className="margin-bottom-20 list-none">Trời mưa nhưng chúng tôi vẫn đi ra ngoài.</li>

					<li className="list-none">→ Compound – chữ but ở giữa</li>
			
				</ul>

			<p className="margin-top-20">Thấy sự khác biệt tinh tế chưa? Cả hai đều đúng, nhưng sắc thái khác hẳn.</p>

			{/* 5. Cách áp dụng vào viết blog của bạn – ngay hôm nay */}

			<h3 className="margin-y-50 text-center">5. Cách áp dụng vào viết blog của bạn – ngay hôm nay</h3>

			<p>Đừng cố viết cả bài với toàn câu phức tạp. Sẽ rất giả tạo.</p>

			<p>Thay vào đó, hãy làm theo tỷ lệ này trong một đoạn văn 5 câu:</p>
					
			<p className="text-indent-whole"></p>
			
				<ul className="list-square">
			
					<li>1 câu đơn (tạo điểm nhấn, nghỉ ngơi)</li>

					<li>2 câu ghép đẳng lập (kể chuyện trôi chảy)</li>
			
					<li>1 câu phức (thêm chiều sâu)</li>
			
					<li>1 câu hỗn hợp (kết luận mạnh mẽ)</li>
			
				</ul>

			<p className="margin-top-20"><strong>Ví dụ một đoạn blog bằng tiếng Anh</strong> (chủ đề: học online):</p>

			<p className="example-sentence">

				<span className="m">Online learning is convenient. </span>

				<span className="v">You can study anywhere, <strong>and</strong> you can save a lot of time. </span>

				<span className="o">However, <strong>when</strong> there is no teacher around, many students feel lost. </span>

				<span className="s">They procrastinate, <strong>and</strong> their grades drop quickly. </span>

				<span className="p"><strong>Although</strong> technology helps, self-discipline is still the key – without it, no course will work.</span>
			
			
			</p>

			<p>Đếm thử:</p>
			
				<ul className="list-square">

					<li className="list-none"><span className="pill m">Câu 1: simple</span></li>

					<li className="list-none"><span className="pill v">Câu 2: compound</span></li>

					<li className="list-none"><span className="pill o">Câu 3: complex (when…)</span></li>

					<li className="list-none"><span className="pill s">Câu 4: compound</span></li>

					<li className="list-none"><span className="pill p">Câu 5: compound-complex (although… + without…)</span></li>
			
				</ul>

			<p className="margin-top-20">Nghe rất tự nhiên, không hề "học thuật" khô khan.</p>

			{/* Lời kết: */}

			<h3 className="margin-y-50 text-center">Tóm lại:</h3>

			<p>Học cấu trúc câu tiếng Anh không phải để khoe ngữ pháp, mà để người đọc muốn đọc tiếp</p>

			<p>Bạn không cần thuộc tên các loại câu. Bạn cần cảm được khi nào nên dùng câu ngắn, khi nào nên thêm because, khi nào nối bằng but.</p>
					
			<p className="text-indent-whole"></p>
			
				<ol>
			
					<li>Đọc một đoạn tin tức tiếng Anh, tô màu 4 loại câu như hướng dẫn.</li>
			
					<li>Viết lại một tin nhắn cũ của bạn (vài câu đơn) thành một đoạn có ít nhất 3 loại câu khác nhau.</li>
			
					<li>Đọc to lên. Nếu thấy vui tai, bạn đã đúng.</li>
			
				</ol>

			<p className="margin-top-20">Chỉ một tuần luyện tập, bài viết tiếng Anh của bạn sẽ không còn "cứng nhắc" nữa. Nó sẽ có hồn, có nhịp, và có người đọc.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 15, 2026 · by DPSK and 🐝Mr. Bee Osn ·</span>
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