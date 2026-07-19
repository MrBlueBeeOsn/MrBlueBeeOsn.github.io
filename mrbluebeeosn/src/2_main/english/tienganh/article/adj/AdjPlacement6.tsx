import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function AdjPlacement6(): React.JSX.Element {

	const postId = "AdjPlacement6";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#functional-thinking-terms"><mark className="highlight-tertiary-padding-4-8">Functional Thinking</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">ADJ Placement
												
				<sup><HashLink smooth to="/tieng-anh/adj-placement-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/adj-placement-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/adj-placement-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/adj-placement-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/adj-placement-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/adj-placement-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/adj-placement-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/adj-placement-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/adj-placement-9">&nbsp;9&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Danh cơ trước, tính cơ sau — Chiến lược tư duy giúp người Việt chinh phục tiếng Anh</h4>

			<p className="margin-y-40"><strong>Mở đầu</strong></p>
					
			<p>Hầu hết người Việt học tiếng Anh đều bắt đầu bằng hai mẫu quen thuộc:</p>

			<p className="margin-top-20"><strong>Tính cơ đứng trước danh cơ</strong></p>
			
				<ul className="list-square">
			
					<li>A beautiful house.</li>
					<li className="list-none">Một ngôi nhà đẹp.</li>
			
				</ul>
			
			<p className="margin-top-20"><strong>Tính cơ sau</strong> “<strong>to be</strong>”</p>
			
				<ul className="list-square">
			
					<li>The house is beautiful.</li>
					<li className="list-none">Ngôi nhà đó thì đẹp.</li>
			
				</ul>

			<p className="margin-top-20">Chính vì vậy nhiều người mặc định rằng “tính cơ phải đứng trước danh cơ” — và cảm thấy bối rối khi gặp những câu dài, phức tạp. </p>

			<p>Thực tế tinh tế hơn: trong văn nói nâng cao và văn viết học thuật, người bản ngữ thường <strong>đưa danh cơ ra trước</strong>, rồi <strong>thả phần mô tả phía sau</strong> bằng một câu con đóng vai trò như tính cơ.</p>
			
			<p>Nhận ra điều này là một bước ngoặt: nó biến tiếng Anh từ “khác” thành “quen”, vì trật tự <strong>Danh cơ</strong> → <strong>Mô tả</strong> rất giống cách người Việt suy nghĩ.</p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Hai nguyên tắc nhấn mạnh bạn cần thuộc lòng</h3>

			<p className="margin-top-20"></p>
			
				<ul className="list-square">
			
					<li><strong>Danh cơ đứng trước tính cơ</strong>:</li>
					<li className="margin-bottom-20 list-none">Dùng khi bạn muốn <strong>nhấn mạnh danh cơ</strong> — giới thiệu đối tượng trước, rồi mô tả.</li>
			
					<li><strong>Tính cơ đứng trước danh cơ</strong>:</li>
					<li className="list-none">Dùng khi bạn muốn <strong>nhấn mạnh tính chất</strong> — mô tả ngay, ngắn gọn.</li>
			
				</ul>
			
			<p className="margin-top-20">Hiểu rõ mục đích của từng lựa chọn giúp bạn viết và nói chính xác, có sắc thái.</p>


			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Bộ ba câu con nền tảng của tiếng Anh nâng cao</h3>

			<p>Khi đã làm chủ tư duy <strong>Danh cơ</strong> → <strong>Mô tả</strong>, việc tiếp cận hai loại câu con còn lại sẽ dễ dàng hơn.</p>

			<p>Ba câu con này là <strong>câu con tính cơ</strong>, <strong>câu con trạng ngữ</strong>, và <strong>câu con danh cơ</strong> — chúng là công cụ chính để người bản ngữ xây dựng câu phức, lập luận và dẫn chứng.</p>

			<h4 className="margin-y-40">1. Câu con tính cơ — mô tả đứng sau danh cơ</h4>

			<p className="text-indent-whole"><strong>Chức năng</strong>: bổ sung, phân biệt hoặc mở rộng thông tin về danh cơ.</p>

			<p className="text-indent-whole">Ví dụ:</p>
			
				<ul className="list-square">
			
					<li>The student <strong>who studies every night</strong> passed the exam.</li>
					<li className="list-none">Học sinh, <strong>người mà học bài mỗi tối</strong>, đã đỗ kỳ thi.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>Rút gọn</strong>:</p>
			
				<ul className="list-square">
			
					<li>The student <strong>studying every night</strong> passed the exam.</li>
					<li className="list-none">Người học sinh <strong>học bài mỗi tối</strong> đã đỗ kỳ thi.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>Gợi ý thực hành</strong>: khi dịch câu tiếng Việt dạng <strong>Danh cơ</strong> + <strong>mô tả</strong>, hãy thử đặt danh cơ trước rồi thêm câu con tính cơ — cảm giác sẽ rất tự nhiên.</p>
		

			<h4 className="margin-y-40">2. Trạng câu — nối ý, giải thích hoàn cảnh</h4>
					
			<p className="text-indent-whole"><strong>Chức năng</strong>: trả lời câu hỏi khi nào, ở đâu, vì sao, như thế nào, với điều kiện nào; giúp câu mạch lạc, có nhịp điệu lập luận.</p>

			<p className="text-indent-whole">Ví dụ:</p>
			
				<ul className="list-square">
			
					<li><strong>Because she practiced daily</strong>, she improved quickly.</li>
					<li className="list-none"><strong>Bởi vì cô ấy đã luyện tập hàng ngày</strong>, cô ấy đã tiến bộ một cách nhanh chóng.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>Vị trí linh hoạt</strong>: có thể đứng đầu câu để nhấn lý do, hoặc cuối câu để bổ sung.</p>

			<p className="text-indent-whole"><strong>Gợi ý thực hành</strong>: khi viết luận, dùng câu con trạng ngữ để dẫn dắt luận điểm, rồi quay lại với danh cơ chính và câu con tính cơ để minh họa.</p>


			<h4 className="margin-y-40">3. Danh câu — biến cả cụm thành danh chủ hoặc danh nhận</h4>
					
			<p className="text-indent-whole"><strong>Chức năng</strong>: đóng vai trò như một danh cơ; thường dùng để trích dẫn ý tưởng, lập luận, hoặc làm chủ đề thảo luận.</p>

			<p className="text-indent-whole">Ví dụ:</p>
			
				<ul className="list-square">
			
					<li><strong>What she said</strong> surprised everyone.</li>
					<li className="list-none"><strong>Những gì cô ấy đã nói</strong> đã làm mọi người ngạc nhiên.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>Gợi ý thực hành</strong>: dùng câu con danh cơ để tóm tắt ý chính trước khi giải thích bằng câu con trạng ngữ và minh họa bằng câu con tính cơ.</p>


			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. Cách kết hợp bộ ba để viết luận và nói thuyết phục</h3>
			
				<ol>
			
					<li value="1" className="margin-bottom-20"><strong>Mở bằng câu con trạng ngữ</strong> để đặt bối cảnh hoặc nêu lý do.</li>
			
					<li value="2" className="margin-bottom-20"><strong>Giới thiệu danh cơ chính</strong> - đối tượng của luận điểm.</li>

					<li value="3" className="margin-bottom-20"><strong>Bổ sung bằng câu con tính cơ</strong> để phân biệt hoặc mô tả chi tiết.</li>
			
					<li value="4" className="margin-bottom-20"><strong>Dùng câu con danh cơ</strong> khi cần tóm tắt ý hoặc chuyển sang luận điểm tiếp theo.</li>
			
				</ol>

			<p className="margin-top-20"><strong>Ví dụ mẫu</strong> (mạch luận ngắn):</p>
			
			<p><strong>Because the market changed rapidly</strong>, the company, <strong>which had invested heavily in one product line</strong>, had to adapt quickly. <strong>What the management decided next</strong> determined the firm’s survival.</p>
			
			<p><strong>Bởi vì thị trường đã thay đổi một cách nhanh chóng</strong>, công ty đó, <strong>cái mà đã đầu tư mạnh vào một dòng sản phẩm</strong>, đã phải thích nghi nhanh. <strong>Những gì ban quản lý quyết định sau đó</strong> đã quyết định sự sống còn của doanh nghiệp.</p>

			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. Thực hành có hệ thống — 5 bước để làm chủ</h3>
			
				<ol>
			
					<li value="1"><strong>Nhận diện</strong>:</li>
					<li className="margin-bottom-20 list-none">Khi đọc tiếng Việt, gạch dưới danh cơ chính và phần mô tả.</li>
			
					<li value="2"><strong>Dịch theo mẫu</strong>:</li>
					<li className="margin-bottom-20 list-none">Chuyển mô tả thành câu con tính cơ; đặt danh cơ trước.</li>

					<li value="3"><strong>Thử biến thể</strong>:</li>
					<li className="margin-bottom-20 list-none">Viết cùng một ý bằng tính cơ trước danh cơ, rồi bằng danh cơ + câu con tính cơ; so sánh sắc thái.</li>
			
					<li value="4"><strong>Ghép mạch</strong>:</li>
					<li className="margin-bottom-20 list-none">Viết đoạn 4–6 câu dùng cả ba câu con — chú ý dấu câu và nhịp câu.</li>

					<li value="5"><strong>Rút gọn và tinh chỉnh</strong>:</li>
					<li className="list-none">Học cách rút gọn câu con để câu gọn, tránh lặp từ.</li>
			
				</ol>
			

			{/* 5.  */}

			<h3 className="margin-y-50 text-center">5. Những lỗi thường gặp và cách tránh</h3>
			
				<ul className="list-square">
			
					<li><strong>Nhồi quá nhiều câu con vào một câu</strong></li>
					<li className="margin-bottom-20 list-none">→ Tách câu để rõ ràng.</li>
			
					<li><strong>Bỏ dấu phẩy sai chỗ</strong> với câu con thêm thông tin</li>
					<li className="margin-bottom-20 list-none">→ Thay đổi nghĩa.</li>

					<li><strong>Dùng đại cơ quan hệ không phù hợp</strong></li>
					<li className="margin-bottom-20 list-none">→ Học who/which/that/where/when và cách rút gọn.</li>
			
					<li><strong>Quá lạm dụng cấu trúc phức</strong> khiến câu nặng nề</li>
					<li className="list-none">→ Ưu tiên rõ ràng, mạch lạc.</li>
			
				</ul>
			

			
			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">Kết luận: biến điểm tương đồng thành lợi thế cạnh tranh</h3>

			<p>Việc nhận ra rằng tiếng Anh có một <strong>trật tự mô tả rất gần với tiếng Việt</strong> — <strong>danh cơ trước</strong>, <strong>mô tả sau</strong> — là một lợi thế lớn.</p>

			<p>Khi bạn hiểu và thực hành <strong>câu con tính cơ</strong>, việc tiếp cận <strong>câu con trạng ngữ</strong> và <strong>câu con danh cơ</strong> sẽ trở nên tự nhiên.</p>

			<p>Ba câu con này là bộ công cụ giúp bạn đọc hiểu sâu, viết luận chặt chẽ và nói thuyết phục.</p>

			<h4 className="margin-y-40">Thử thách 7 ngày:</h4>
					
			<p className="text-indent-whole">Mỗi ngày chọn 3 câu tiếng Việt bạn hay dùng, dịch sang tiếng Anh theo mẫu Danh cơ → Mô tả, rồi ghép thành một đoạn 6–8 câu dùng cả ba câu con.</p>

			<p className="text-indent-whole">Sau một tuần, bạn sẽ thấy cách tư duy tiếng Anh thay đổi — từ “khó” thành “quen”, từ “lúng túng” thành “tự tin”.</p>



			<h4 className="margin-y-40">Ghi nhớ cuối cùng:</h4>

			<p className="text-indent-whole">Đừng để tên gọi phức tạp làm bạn chùn bước.</p>

			<p className="text-indent-whole">Hãy nhìn vào chức năng:</p>

			<p className="text-indent-whole"><strong>Ai</strong>/<strong>What</strong> → <strong>Nói gì</strong> → <strong>Vì sao</strong>/<strong>Ở đâu</strong>/<strong>Thế nào</strong>.</p>
					
			<p className="text-indent-whole">Khi bạn nắm được mạch này, tiếng Anh sẽ trở thành công cụ để bạn diễn đạt sắc sảo — không chỉ đúng, mà còn có phong cách.</p>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 01, 2026 · by Copilot and 🐝Mr. Bee Osn ·</span>
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