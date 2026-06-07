import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DependentClause7(): React.JSX.Element {

	const postId = "DependentClause7";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">DC
												
				<sup><HashLink smooth to="/tieng-anh/dependent-clause-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-9">&nbsp;9&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Phụ Câu: Cẩm Nang Hoàn Chỉnh Để Viết Câu Phức Tự Nhiên</h4>

			{/* 1. Tại sao bạn cần học mệnh đề phụ thuộc ngay hôm nay? */}

			<h3 className="margin-y-50 text-center">1. Tại sao bạn cần học mệnh đề phụ thuộc ngay hôm nay?</h3>

			<p>Hãy tưởng tượng bạn đang viết một essay IELTS. Hai cách viết sau:</p>

			<p className="margin-top-20"><strong>Cách 1</strong> — <strong>Câu đơn liên tiếp</strong>:</p>
			
				<ul className="list-square">
			
					<li className="margin-bottom-20">Climate change is serious. Many cities will flood. People will lose homes. Governments must act. We need solutions.</li>
			
					<li className="list-none">Biến đổi khí hậu đang rất nghiêm trọng. Nhiều thành phố sẽ bị ngập lụt. Người dân sẽ mất đi nhà cửa. Các chính phủ phải hành động ngay. Chúng ta cần có những giải pháp</li>
			
				</ul>
					
			<p className="margin-top-20"><strong>Cách 2</strong> — <strong>Câu phức với mệnh đề phụ thuộc</strong>:</p>
			
				<ul className="list-square">
			
					<li className="margin-bottom-20"><strong>Because climate change is accelerating</strong>, many coastal cities will flood <strong>if governments do not act soon</strong>. <strong>Although the problem is serious</strong>, effective solutions exist <strong>when people work together</strong>.</li>
			
					<li className="list-none">Vì biến đổi khí hậu đang gia tăng, nhiều thành phố ven biển sẽ bị ngập lụt nếu các chính phủ không sớm hành động. Mặc dù đây là một vấn đề nghiêm trọng, những giải pháp hiệu quả vẫn luôn tồn tại khi mọi người cùng nhau chung tay.</li>
			
				</ul>
			
			<p className="margin-top-20">Sự khác biệt? Rõ ràng. Cách 2 thể hiện <strong>tư duy logic</strong>, <strong>kết nối ý</strong>, và <strong>khả năng kiểm soát ngữ pháp</strong> — đúng thứ giám khảo IELTS tìm kiếm.</p>

			<p>Bí mật nằm ở <strong>mệnh đề phụ thuộc</strong>.</p>


			{/* 2. Phụ câu là gì? */}

			<h3 className="margin-y-50 text-center">2. Phụ câu là gì?</h3>
					
			<p>Phụ câu là một nhóm từ có đầy đủ chủ ngữ + động từ, nhưng không tạo thành câu hoàn chỉnh khi đứng một mình. Nó cần một mệnh đề độc lập để bổ sung ý nghĩa.</p>
			
				<ul className="list-square">

					<li className="margin-bottom-20"><strong>Because she studied</strong> — chưa trọn vẹn</li>
			
					<li><strong>Because she studied hard</strong>, <strong>she passed</strong> — hoàn chỉnh</li>
					<li className="list-none">Vì học hành chăm chỉ nên cô ấy đã thi đỗ.</li>
			
				</ul>


			{/* 3. Bảy bước để viết câu có mệnh đề phụ thuộc */}

			<h3 className="margin-y-50 text-center">3. Bảy bước để viết câu có mệnh đề phụ thuộc</h3>

			<h4 className="margin-y-40">Bước 1: Chọn từ nối phù hợp với ý bạn muốn diễn đạt</h4>
					
			<p className="text-indent-whole">Mỗi từ nối mang một ý nghĩa logic khác nhau:</p>

			<p className="text-indent-whole">Bạn muốn nói...	Dùng từ nối</p>
			
				<ul className="list-square">
			
					<li>Lý do</li>
					<li className="margin-bottom-20 list-none">because, since, as</li>
			
					<li>Thời điểm</li>
					<li className="margin-bottom-20 list-none">when, while, before, after, until</li>

					<li>Tương phản</li>
					<li className="margin-bottom-20 list-none">although, though, even though, whereas</li>
			
					<li>Điều kiện</li>
					<li className="margin-bottom-20 list-none">if, unless</li>

					<li>Mục đích</li>
					<li className="margin-bottom-20 list-none">so that, in order that</li>
			
					<li>Bổ nghĩa cho danh từ</li>
					<li className="margin-bottom-20 list-none">who, which, that, whose</li>
			
					<li>Làm chủ ngữ/tân ngữ</li>
					<li className="list-none">what, that, whether, who</li>
			
				</ul>
		

			<h4 className="margin-y-40">Bước 2: Viết mệnh đề phụ thuộc</h4>
					
			<p className="text-indent-whole">Cấu trúc: <strong>Từ nối</strong> + <strong>Chủ ngữ</strong> + <strong>Động cơ</strong></p>
			
				<ul className="list-square">
			
					<li>because + she + studied</li>
					<li className="margin-bottom-20 list-none">Bởi vì + cô ấy + học bài</li>
			
					<li>when + I + arrived</li>
					<li className="margin-bottom-20 list-none">Khi + tôi + đến nơi</li>
			
					<li>although + it + rained</li>
					<li className="list-none">Mặc dù + trời + mưa</li>
			
				</ul>


			<h4 className="margin-y-40">Bước 4: Ghép hai mệnh đề</h4>

			<p className="text-indent-whole"><strong>Cấu trúc 1</strong> — <strong>Phụ câu đứng đầu</strong>:</p>

			<p className="text-indent-whole">[Từ nối + Chủ ngữ + Động cơ], + [Mệnh đề độc lập]</p>
			
				<ul className="list-square">
			
					<li><strong>Because she studied hard</strong>, she passed the exam.</li>
					<li className="list-none">Vì học hành chăm chỉ nên cô ấy đã thi đỗ.</li>
			
				</ul>
					
			<p className="margin-top-20 text-indent-whole"><strong>Cấu trúc 2</strong> — <strong>Phụ câu đứng cuối</strong>:</p>

			<p className="text-indent-whole">[Mệnh đề độc lập] + [Từ nối + Chủ ngữ + Động cơ]</p>
			
				<ul className="list-square">
			
					<li>She passed the exam <strong>because she studied hard</strong>.</li>
					<li className="list-none">Cô ấy thi đỗ vì đã học hành rất chăm chỉ.</li>
			
				</ul>


			<h4 className="margin-y-40">Bước 5: Thêm dấu phẩy đúng chỗ</h4>

				<ul className="list-square">
			
					<li>Phụ câu đứng <strong>ĐẦU</strong></li>
					<li className="margin-bottom-20 list-none">→ <strong>DẤU PHẨY SAU</strong> mệnh đề</li>
			
					<li>Phụ câu đứng <strong>CUỐI</strong></li>
					<li className="list-none">→ <strong>KHÔNG</strong> có dấu phẩy</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Ví dụ 1</p>
			
				<ul className="list-square">
			
					<li><strong>Although it rained</strong>, we played.</li>
					<li className="margin-bottom-20 list-none">Mặc dù trời mưa nhưng chúng tôi vẫn chơi.</li>
			
					<li><strong>Although it rained</strong> we played.</li>
					<li className="list-none">Sai</li>
			
				</ul>
					
			<p className="margin-top-20 text-indent-whole">Ví dụ 2</p>
			
				<ul className="list-square">
			
					<li>We played <strong>although it rained</strong>.</li>
					<li className="margin-bottom-20 list-none">Chúng tôi vẫn chơi mặc dù trời mưa.</li>
			
					<li>We played, <strong>although it rained</strong>.</li>
					<li className="list-none">Sai</li>
			
				</ul>


			<h4 className="margin-y-40">Bước 6: Kiểm tra lại</h4>
			
				<ul className="list-square">
			
					<li>Phụ câu có <strong>chủ ngữ</strong> + <strong>động từ</strong>?</li>
			
					<li>Từ nối có đúng với ý nghĩa bạn muốn?</li>

					<li>Dấu phẩy có đúng vị trí?</li>
			
					<li>Câu có thể đứng độc lập không? (Nếu có, bạn đang viết mệnh đề độc lập chứ không phải phụ thuộc)</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"></p>


			<h4 className="margin-y-40">Bước 7: Luyện viết nhiều mẫu câu khác nhau</h4>
					
			<p className="text-indent-whole">Đừng chỉ dùng <strong>because</strong>. Hãy đa dạng hóa:</p>
			
				<ul className="list-square">
			
					<li>Ngày 1</li>
					<li className="margin-bottom-20 list-none">because, since, as</li>
			
					<li>Ngày 2</li>
					<li className="margin-bottom-20 list-none">although, even though, though</li>

					<li>Ngày 3</li>
					<li className="margin-bottom-20 list-none">when, while, before, after</li>
			
					<li>Ngày 4</li>
					<li className="margin-bottom-20 list-none">if, unless</li>

					<li>Ngày 5</li>
					<li className="margin-bottom-20 list-none">who, which, that</li>
			
					<li>Ngày 6</li>
					<li className="margin-bottom-20 list-none">what, where, why</li>
			
					<li>Ngày 7</li>
					<li className="list-none">Tổng hợp tất cả</li>
			
				</ul>


			{/* 4. Cách phân biệt mệnh đề phụ thuộc và mệnh đề độc lập */}

			<h3 className="margin-y-50 text-center">4. Cách phân biệt mệnh đề phụ thuộc và mệnh đề độc lập</h3>

			<h4 className="margin-y-40">1. Mệnh đề độc lập</h4>
					
			<p className="text-indent-whole">✅ Có: Có thể đứng một mình</p>
			<p className="text-indent-whole">Bắt đầu bằng từ nối: Không (hoặc FANBOYS)</p>
			<p className="text-indent-whole">✅ Có: Ý nghĩa trọn vẹn</p>
			
				<ul className="list-square">
			
					<li>She passed the exam.</li>
					<li className="list-none">Cô ấy đã thi đỗ rồi.</li>
			
				</ul>


			<h4 className="margin-y-40">2. Phụ câu</h4>
					
			<p className="text-indent-whole">❌ Không: Có thể đứng một mình</p>
			<p className="text-indent-whole">Bắt đầu bằng từ nối: ✅ Because, although, when, if, who, which...</p>
			<p className="text-indent-whole">❌ Không: Ý nghĩa trọn vẹn</p>
			
				<ul className="list-square">
			
					<li><strong>Because she studied hard</strong></li>
					<li className="list-none">Vì cô ấy học hành chăm chỉ...</li>
			
				</ul>
			

			<h4 className="margin-y-40">Bài kiểm tra nhanh</h4>
					
			<p className="text-indent-whole">Hãy xác định mệnh đề nào là phụ thuộc:</p>
			
				<ol>
			
					<li value="1">I called her</li>
					<li className="list-none">Tôi đã gọi điện cho cô ấy.</li>
					<li className="margin-bottom-20 list-none">→ <strong>Độc lập</strong> (câu hoàn chỉnh)</li>
			
					<li value="2">when I arrived</li>
					<li className="list-none">Khi tôi đến nơi...</li>
					<li className="margin-bottom-20 list-none">→ <strong>Phụ thuộc</strong> (cần mệnh đề khác)</li>

					<li value="3">Because it was raining</li>
					<li className="list-none">Vì trời mưa...</li>
					<li className="margin-bottom-20 list-none">→ <strong>Phụ thuộc</strong></li>

					<li value="4">we stayed home</li>
					<li className="list-none">Chúng tôi đã ở nhà.</li>
					<li className="margin-bottom-20 list-none">→ <strong>Độc lập</strong></li>
			
					<li value="5">although she was tired</li>
					<li className="list-none">Mặc dù cô ấy mệt..."</li>
					<li className="list-none">→ <strong>Phụ thuộc</strong></li>
			
				</ol>
			
			<p className="margin-top-20"></p>

			{/* 5. Ba loại mệnh đề phụ thuộc — Phân biệt rõ ràng */}

			<h3 className="margin-y-50 text-center">5. Ba loại mệnh đề phụ thuộc — Phân biệt rõ ràng</h3>

			<h4 className="margin-y-40">1. Trạng câu (Adverb Clause)</h4>
					
			<p className="text-indent-whole">Bổ nghĩa cho <strong>động từ</strong>, trả lời câu hỏi: khi nào? tại sao? nếu...?</p>
			
				<ul className="list-square">
			
					<li><strong>Because it was cold</strong>, we stayed home. (tại sao?)</li>
					<li className="margin-bottom-20 list-none"><strong>Vì trời lạnh</strong>, chúng tôi ở nhà.</li>

					<li>She called <strong>when she arrived</strong>. (khi nào?)</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã gọi điện <strong>ngay khi vừa đến nơi</strong>.</li>
			
					<li><strong>If you study</strong>, you will pass. (nếu...)</li>
					<li className="margin-bottom-20 list-none"><strong>Nếu bạn học bài</strong>, bạn sẽ đỗ thôi.</li>
			
					<li><strong>Although he was rich</strong>, he was unhappy. (tương phản)</li>
					<li className="list-none"><strong>Mặc dù giàu có</strong>, anh ấy lại không hạnh phúc.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Dấu hiệu:because, although, when, while, if, since, before, after, until, unless</p>

			<h4 className="margin-y-40">2. Mệnh đề tính từ (Adjective Clause)</h4>
					
			<p className="text-indent-whole">Bổ nghĩa cho <strong>danh từ</strong> đứng trước nó.</p>
			
				<ul className="list-square">
			
					<li>The book <strong>that I borrowed</strong> is great.</li>
					<li className="margin-bottom-20 list-none">Cuốn sách – <strong>cái mà tôi đã mượn</strong> – thì tuyệt vời.</li>

					<li className="margin-bottom-20 list-none">Quyển sách nào? → quyển mà tôi mượn</li>
			
					<li>The woman <strong>who lives next door</strong> is a doctor.</li>
					<li className="margin-bottom-20 list-none">Người phụ nữ – <strong>người mà sống cạnh nhà</strong> – là một bác sĩ.</li>
			
					<li>The car <strong>which he bought</strong> is fast.</li>
					<li className="list-none">Chiếc xe – <strong>cái mà anh ấy đã mua</strong> – thì nhanh.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Dấu hiệu:who, whom, which, that, whose, where, when</p>

			<h4 className="margin-y-40">3. Danh câu (Noun Clause)</h4>
					
			<p className="text-indent-whole">Đóng vai trò như <strong>danh từ</strong> — làm chủ ngữ, tân ngữ, hoặc bổ ngữ.</p>
			
				<ul className="list-square">
			
					<li><strong>What she said</strong> is true. (chủ ngữ)</li>
					<li className="margin-bottom-20 list-none"><strong>Những gì cô ấy nói</strong> là đúng đấy.</li>
			
					<li>I don't know <strong>what she wants</strong>. (tân ngữ)</li>
					<li className="margin-bottom-20 list-none">Tôi không biết <strong>cô ấy muốn gì</strong>.</li>
			
					<li>The problem is <strong>that we have no money</strong>. (bổ ngữ)</li>
					<li className="list-none">Vấn đề là <strong>chúng ta không có tiền</strong>.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>Dấu hiệu</strong>: that, what, who, whether, if, where, why, how</p>

			{/* 6. Ví dụ thực tế */}

			<h3 className="margin-y-50 text-center">6. Ví dụ thực tế</h3>

			<h4 className="margin-y-40">Trạng câu</h4>
					
				<ul className="list-square">

					<li><strong>Because she was sick</strong>, she didn't come.</li>
					<li className="margin-bottom-20 list-none"><strong>Vì cô ấy bị ốm</strong>, cô ấy không đến.</li>

					<li><strong>Although it rained</strong>, we played football.</li>
					<li className="margin-bottom-20 list-none"><strong>Mặc dù trời mưa</strong>, chúng tôi vẫn chơi bóng.</li>
			
					<li><strong>If you study hard</strong>, you will pass.</li>
					<li className="margin-bottom-20 list-none"><strong>Nếu bạn học chăm</strong>, bạn sẽ đậu.</li>

					<li>She called <strong>when I arrived</strong>.</li>
					<li className="margin-bottom-20 list-none">Cô ấy gọi <strong>khi tôi đến</strong>.</li>
			
					<li><strong>While I was sleeping</strong>, he left.</li>
					<li className="margin-bottom-20 list-none"><strong>Trong khi tôi đang ngủ</strong>, anh ấy rời đi.</li>
			
					<li>He left <strong>before I could say hello</strong>.</li>
					<li className="margin-bottom-20 list-none">Anh ấy rời đi <strong>trước khi tôi có thể chào</strong>.</li>

					<li>Wait <strong>until I come back</strong>.</li>
					<li className="margin-bottom-20 list-none">Đợi <strong>cho đến khi tôi quay lại</strong>.</li>
			
					<li><strong>Since you asked</strong>, I will tell you.</li>
					<li className="margin-bottom-20 list-none"><strong>Vì bạn hỏi</strong>, tôi sẽ nói cho bạn.</li>

					<li>I won't go <strong>unless you come</strong>.</li>
					<li className="margin-bottom-20 list-none">Tôi sẽ không đi <strong>trừ khi bạn đến</strong>.</li>
			
					<li><strong>As time passed</strong>, things improved.</li>
					<li className="margin-bottom-20 list-none"><strong>Khi thời gian trôi</strong>, mọi thứ cải thiện.</li>

					<li><strong>Even though he was rich</strong>, he was unhappy.</li>
					<li className="margin-bottom-20 list-none"><strong>Ngay cả khi anh ấy giàu</strong>, anh ấy không hạnh phúc.</li>
			
					<li>She has lived here <strong>since she was a child</strong>.</li>
					<li className="margin-bottom-20 list-none">Cô ấy sống ở đây <strong>từ khi cô ấy còn nhỏ</strong>.</li>

					<li><strong>When the bell rang</strong>, students left.</li>
					<li className="margin-bottom-20 list-none"><strong>Khi chuông reo</strong>, học sinh rời đi.</li>
			
					<li><strong>While he was cooking</strong>, she set the table.</li>
					<li className="margin-bottom-20 list-none"><strong>Trong khi anh ấy đang nấu ăn</strong>, cô ấy dọn bàn.</li>
			
					<li>Call me <strong>after you finish</strong>.</li>
					<li className="list-none">Gọi tôi <strong>sau khi bạn hoàn thành</strong>.</li>
			
				</ul>
			

			<h4 className="margin-y-40">Mệnh đề tính từ</h4>
					
				<ul className="list-square">
			
					<li>The book <strong>that I borrowed</strong> is fascinating.</li>
					<li className="margin-bottom-20 list-none">Quyển sách <strong>mà tôi mượn</strong> rất hấp dẫn.</li>

					<li>The woman <strong>who lives here</strong> is a doctor.</li>
					<li className="margin-bottom-20 list-none">Người phụ nữ <strong>sống ở đây</strong> là bác sĩ.</li>
			
					<li>The car <strong>which he bought</strong> is fast.</li>
					<li className="margin-bottom-20 list-none">Chiếc xe <strong>mà anh ấy mua</strong> rất nhanh.</li>

					<li>The man <strong>whose car was stolen</strong> called police.</li>
					<li className="margin-bottom-20 list-none">Người đàn ông <strong>có xe bị đánh cắp</strong> gọi cảnh sát.</li>
			
					<li>This is the restaurant <strong>where we met</strong>.</li>
					<li className="margin-bottom-20 list-none">Đây là nhà hàng <strong>nơi chúng tôi gặp nhau</strong>.</li>

					<li>I remember the day <strong>when we first met</strong>.</li>
					<li className="margin-bottom-20 list-none">Tôi nhớ ngày <strong>khi chúng tôi lần đầu gặp nhau</strong>.</li>
			
					<li>The reason <strong>why he left</strong> is unknown.</li>
					<li className="margin-bottom-20 list-none">Lý do <strong>tại sao anh ấy rời đi</strong> chưa rõ.</li>

					<li>She is the person <strong>who can help you</strong>.</li>
					<li className="margin-bottom-20 list-none">Cô ấy là người <strong>có thể giúp bạn</strong>.</li>
			
					<li>The movie <strong>that we watched</strong> was boring.</li>
					<li className="margin-bottom-20 list-none">Bộ phim <strong>mà chúng tôi xem</strong> rất nhàm chán.</li>
			
					<li>Do you know the boy <strong>who is standing there</strong>?</li>
					<li className="list-none">Bạn có biết cậu bé <strong>đang đứng đó</strong> không?</li>
			
				</ul>
			

			<h4 className="margin-y-40">Danh câu</h4>
					
				<ul className="list-square">
			
					<li>I don't know <strong>what she wants</strong>.</li>
					<li className="margin-bottom-20 list-none">Tôi không biết <strong>cô ấy muốn gì</strong>.</li>

					<li><strong>Whether he will come</strong> is unclear.</li>
					<li className="margin-bottom-20 list-none"><strong>Liệu anh ấy có đến</strong> vẫn chưa rõ.</li>

					<li>She said <strong>that she was busy</strong>.</li>
					<li className="margin-bottom-20 list-none">Cô ấy nói <strong>rằng cô ấy bận</strong>.</li>
			
					<li><strong>What he said</strong> is true.</li>
					<li className="margin-bottom-20 list-none"><strong>Điều anh ấy nói</strong> là sự thật.</li>

					<li>I wonder <strong>if it will rain</strong>.</li>
					<li className="margin-bottom-20 list-none">Tôi tự hỏi <strong>liệu trời có mưa không</strong>.</li>
			
					<li>The problem is <strong>that we have no money</strong>.</li>
					<li className="margin-bottom-20 list-none">Vấn đề là <strong>chúng tôi không có tiền</strong>.</li>

					<li><strong>Whoever calls</strong> should leave a message.</li>
					<li className="margin-bottom-20 list-none"><strong>Bất kỳ ai gọi</strong> nên để lại tin nhắn.</li>
			
					<li>I believe <strong>that you can do it</strong>.</li>
					<li className="margin-bottom-20 list-none">Tôi tin <strong>rằng bạn có thể làm được</strong>.</li>
			
					<li>Do you know <strong>where she lives</strong>?</li>
					<li className="margin-bottom-20 list-none">Bạn có biết <strong>cô ấy sống ở đâu</strong> không?</li>
			
					<li><strong>What matters most</strong> is your effort.</li>
					<li className="list-none"><strong>Điều quan trọng nhất</strong> là nỗ lực của bạn.</li>
			
				</ul>

			{/* 7. Lỗi phổ biến — Tránh ngay */}

			<h3 className="margin-y-50 text-center">7. Lỗi phổ biến — Tránh ngay</h3>

			<h4 className="margin-y-40">Lỗi 1</h4>

			<p className="text-indent-whole">Because I was late. (câu cụt)</p>
			<p className="text-indent-whole">Bởi vì tôi đến muộn...</p>
			
				<ul className="list-square">
			
					<li><strong>Because I was late</strong>, I missed the bus.</li>
					<li className="list-none">Vì đến muộn nên tôi đã bị lỡ chuyến xe buýt.</li>
			
				</ul>
			

			<h4 className="margin-y-40">Lỗi 2</h4>

			<p className="text-indent-whole">The man which called.</p>
			
				<ul className="list-square">
			
					<li>The man <strong>who</strong> called.</li>
					<li className="list-none">Người đàn ông, người mà đã gọi điện.</li>
			
				</ul>


			<h4 className="margin-y-40">Lỗi 3</h4>

			<p className="text-indent-whole">I know that. He is smart. (2 câu rời)</p>
			<p className="text-indent-whole">Tôi biết điều đó mà. Anh ấy thông minh thật.</p>
			
				<ul className="list-square">
			
					<li>I know <strong>that he is smart</strong>.</li>
					<li className="list-none">1 câu</li>
					<li className="list-none">Tôi biết anh ấy thông minh mà.</li>
			
				</ul>
			

			<h4 className="margin-y-40">Lỗi 4</h4>

			<p className="text-indent-whole">Despite it rained.</p>
			
				<ul className="list-square">
			
					<li><strong>Although it rained</strong>.</li>
					<li className="margin-bottom-20 list-none">Mặc dù trời đã mưa...</li>
			
					<li><strong>Despite the rain</strong>.</li>
					<li className="list-none">Dù trời mưa...</li>
			
				</ul>

		
			<h4 className="margin-y-40">Lỗi 5</h4>

			<p className="text-indent-whole">I don't know what is it.</p>
			
				<ul className="list-square">
			
					<li>I don't know <strong>what it is</strong>.</li>
					<li className="list-none">Tôi không biết đó là cái gì.</li>
			
				</ul>
			

			<h4 className="margin-y-40">Lỗi 6</h4>

			<p className="text-indent-whole">Although but he was rich.</p>
			<p className="text-indent-whole">2 từ nối</p>
			
				<ul className="list-square">
			
					<li><strong>Although</strong> he was rich.</li>
					<li className="margin-bottom-20 list-none">Mặc dù anh ấy giàu có...</li>
			
					<li><strong>But</strong> he was rich.</li>
					<li className="list-none">Dù ông ấy giàu...</li>
			
				</ul>
			

			<h4 className="margin-y-40">Lỗi 7</h4>

			<p className="text-indent-whole">The girl whom sings.</p>
			<p className="text-indent-whole">Sai đại từ</p>
			
				<ul className="list-square">
			
					<li>The girl <strong>who</strong> sings.</li>
					<li className="list-none">Cô gái, người mà hát.</li>
			
				</ul>
			

			{/* 8. Chiến lược 30 ngày để thành thạo */}

			<h3 className="margin-y-50 text-center">8. Chiến lược 30 ngày để thành thạo</h3>

			<p className="margin-top-20">Tuần 1: Xây nền tảng</p>
			
				<ul className="list-square">
			
					<li>Học 15 từ nối quan trọng nhất</li>
			
					<li>Viết 5 câu mỗi ngày cho mỗi từ nối</li>
			
					<li>Tạo flashcard với ví dụ</li>
			
				</ul>


			<p className="margin-top-20">Tuần 2: Luyện tập chuyên sâu</p>
			
				<ul className="list-square">
			
					<li>Chuyển 10 câu đơn thành câu phức mỗi ngày</li>
			
					<li>Đọc 1 bài báo, gạch chân 10 mệnh đề phụ thuộc</li>
			
					<li>Viết nhật ký tiếng Anh với ít nhất 5 mệnh đề phụ mỗi ngày</li>
			
				</ul>

			
			<p className="margin-top-20">Tuần 3: Nâng cao</p>
			
				<ul className="list-square">
			
					<li>Viết đoạn văn 100 từ với 5+ mệnh đề phụ khác nhau</li>
			
					<li>Luyện viết essay ngắn (150 từ) dùng nhiều loại mệnh đề</li>
			
					<li>Sửa lỗi từ các bài viết trước</li>
			
				</ul>
			
			
			<p className="margin-top-20">Tuần 4: Tổng hợp</p>
			
				<ul className="list-square">
			
					<li>Viết 3 essay, mỗi essay dùng ít nhất 8 mệnh đề phụ thuộc</li>
			
					<li>Đọc bài IELTS Reading, phân tích cấu trúc câu phức</li>
			
					<li>Ôn lại flashcard, sửa lỗi thường gặp</li>
			
				</ul>


			{/* 9. Bảng tổng kết nhanh */}

			<h3 className="margin-y-50 text-center">9. Bảng tổng kết nhanh</h3>

			<h4 className="margin-y-40">Loại mệnh đề: Trạng ngữ</h4>

			<p className="text-indent-whole">Chức năng: Bổ nghĩa động từ</p>
			<p className="text-indent-whole">Từ nối: because, if, when, although</p>
					
				<ul className="list-square">
			
					<li><strong>If it rains</strong>, we cancel.</li>
					<li className="list-none">Nếu trời mưa, chúng ta sẽ hủy bỏ.</li>
			
				</ul>


			<h4 className="margin-y-40">Loại mệnh đề: Tính cơ</h4>

			<p className="text-indent-whole">Chức năng: Bổ nghĩa danh từ</p>
			<p className="text-indent-whole">Từ nối: who, which, that, whose</p>
					
				<ul className="list-square">
			
					<li>The car <strong>that he bought</strong> is fast.</li>
					<li className="list-none">Chiếc xe anh ấy mới mua chạy nhanh lắm.</li>
			
				</ul>
			

			<h4 className="margin-y-40">Loại mệnh đề: Danh cơ</h4>

			<p className="text-indent-whole">Chức năng: Chủ ngữ/Tân ngữ</p>
			<p className="text-indent-whole">Từ nối: that, what, whether</p>
					
				<ul className="list-square">
			
					<li>I know <strong>what she means</strong>.</li>
					<li className="list-none">Tôi biết cô ấy muốn nói gì.</li>
			
				</ul>
			

			{/* 10. Đánh bóng kỹ năng — Viết như người bản xứ */}

			<h3 className="margin-y-50 text-center">10. Đánh bóng kỹ năng — Viết như người bản xứ</h3>
			
			<p className="margin-top-20"><strong>Người mới bắt đầu</strong>:</p>
			
				<ul className="list-square">
			
					<li>I studied. I passed. I was happy.</li>
					<li className="list-none">Tôi đã học. Tôi đã đỗ. Tôi đã rất vui.</li>
			
				</ul>
			

			<p className="margin-top-20"><strong>Người trung cấp</strong>:</p>
			
				<ul className="list-square">
			
					<li>I studied hard, so I passed the exam, and I was happy.</li>
					<li className="list-none">Mình đã học hành chăm chỉ nên đã thi đỗ, và mình cảm thấy rất hạnh phúc.</li>
			
				</ul>


			<p className="margin-top-20"><strong>Người thành thạo</strong>:</p>
			
				<ul className="list-square">
			
					<li>Because I had studied hard, I passed the exam, which made me extremely happy, although I was worried at first.</li>
					<li className="list-none">Vì đã học hành chăm chỉ nên mình đã thi đỗ, điều này khiến mình cực kỳ vui sướng dù lúc đầu có chút lo lắng</li>
			
				</ul>
			
			<p className="margin-top-20">Câu cuối có <strong>ba mệnh đề</strong>, hai mệnh đề phụ thuộc (because... và although...) và một mệnh đề tính từ (which...). Đây là mức độ <strong>người bản xứ</strong>.</p>

			{/* Kết luận */}

			<h3 className="margin-y-50 text-center">Kết luận</h3>

			<p>Phụ câu <strong>không thể đứng một mình</strong> — đó là đặc điểm xác định. Nhưng chính vì vậy, khi kết hợp với mệnh đề độc lập, nó tạo nên <strong>câu phức</strong> — công cụ mạnh nhất để viết tiếng Anh học thuật, mạch lạc và tự nhiên.</p>

			<p>Thành thạo mệnh đề phụ thuộc = Viết câu phức dễ dàng = Nâng band IELTS/TOEFL = Viết như người bản xứ.</p>

			<p>Bắt đầu ngay hôm nay: Chọn <strong>although</strong>, viết 5 câu phức. Trong 7 ngày, bạn sẽ thấy sự khác biệt. Trong 30 ngày, bạn sẽ không còn viết câu đơn nữa.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 17, 2026 · by PPLX and 🐝Mr. Bee Osn ·</span>
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