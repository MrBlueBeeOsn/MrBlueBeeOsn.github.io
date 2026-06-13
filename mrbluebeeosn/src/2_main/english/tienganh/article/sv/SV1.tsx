import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SV1(): React.JSX.Element {

	const postId = "SV1";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">SV
												
				<sup><HashLink smooth to="/tieng-anh/s-v-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				{/* <sup><HashLink smooth to="/tieng-anh/s-v-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/s-v-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/s-v-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/s-v-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/s-v-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/s-v-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/s-v-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/s-v-9">&nbsp;9&nbsp;</HashLink>
				</sup> */}

			</h1>

			<h4 className="margin-bottom-30 text-center">Cách Mạng Tư Duy Ngữ Pháp Tiếng Anh Bằng Hệ Trục Toạ Độ "3 Chức Năng - 3 Cấp Độ"</h4>

			<p>Bản chất của việc làm chủ một ngôn ngữ không nằm ở việc học thuộc lòng các quy tắc phức tạp, mà nằm ở khả năng nhìn thấu cấu trúc và quy luật vận hành của nó.</p>

			<p>Khi các yếu tố cấu trúc được đơn giản hóa thành một bản đồ trực quan, tư duy của người học sẽ được giải phóng hoàn toàn để đạt đến tốc độ phản xạ tự nhiên nhất.</p>

			<p>Hệ thống tư duy mới dưới đây được xây dựng dựa trên sự đồng bộ tuyệt đối giữa:</p>


			<p className="margin-y-30"><strong>3 Hình Thái</strong> gốc, <strong>3 Chức Năng</strong> điều phối và <strong>3 Cấp Độ</strong> hình khối.</p>
			
		
			<p>Giúp người học "nhìn phát hiểu ngay" mọi thành phần trong tiếng Anh mà không cần đến bất kỳ định nghĩa rườm rà nào.</p>


			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Hệ Trục Tọa Độ Quy Tắc 3C</h3>
			
			<p>Toàn bộ kiến trúc của câu tiếng Anh được phân định rõ ràng qua 3 cấp độ quy mô tăng dần, đều bắt đầu bằng chữ <strong>C</strong> để tạo lối mòn tư duy cực kỳ dễ nhớ:</p>

			<p className="margin-top-20"></p>
			
				<ul className="list-square">
			
					<li><strong>CƠ</strong> (<strong>Cơ bản</strong> - <strong>Base</strong>):</li>
					<li className="margin-bottom-20 list-none">Mức độ một từ đơn lẻ, đóng vai trò là những viên gạch nền tảng.</li>
			
					<li><strong>CỤM</strong> (<strong>Khối cụm</strong> - <strong>Phrase</strong>):</li>
					<li className="list-none">Một nhóm từ kết hợp với nhau nhưng <strong>không</strong> chứa hệ trục Chủ ngữ + Vị ngữ (S + V).</li>
					<li className="margin-bottom-20 list-none">Nếu khối này đóng vai trò phụ trợ, gọi chung là <strong>Phụ cụm</strong>.</li>
			
					<li><strong>CÂU</strong> (<strong>Hệ trục S</strong> + <strong>V</strong> - <strong>Clause</strong>):</li>
					<li className="list-none">Cấu trúc có chứa đầy đủ Chủ ngữ + Vị ngữ (S + V).</li>
					<li className="list-none">Nếu hệ trục này đóng vai trò phụ trợ nằm trong một cấu trúc lớn hơn, gọi chung là <strong>Phụ câu</strong>.</li>
			
				</ul>

			
			
			<p className="margin-top-20">Về mặt quy mô độc lập trong văn bản:</p>
				
				<ul className="list-square">
			
					<li><strong>Câu lớn</strong> (hoặc <strong>Câu trọn vẹn</strong>):</li>
					<li className="margin-bottom-20 list-none">Đứng độc lập, kết thúc bằng dấu chấm và biểu thị một ý trọn vẹn.</li>
					
					<li><strong>Câu con</strong>:</li>
					<li className="list-none">Hệ trục S + V nằm bên trong làm thành phần cấu tạo cho một Câu lớn.</li>
			
				</ul>
			
			

			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Tư Duy Ngược: Từ "Hình Thái" Giải Mã "Chức Năng"</h3>

			<p>Một sai lầm kinh điển của cách học cũ là bắt người học phải đoán chức năng trước.</p>

			<p>Với hệ thống mới, quy trình tư duy được đảo ngược một cách tự nhiên và khoa học:</p>
			
				<ul className="list-square">
			
					<li>Người học nhìn thấy <strong>Hình thái</strong> trước.</li>
			
					<li>Sau đó dựa vào vị trí để giải mã ra <strong>Chức năng</strong>.</li>

			
				</ul>
			
			
			<p className="margin-top-20">Hạt nhân của mọi hình thái hành động trong câu chính là <strong>ĐỘNG</strong> (Xung lực vận hành).</p>

			<p>Trục <strong>hình thái</strong> được chia làm <strong>3 cấp độ</strong>:</p>
			
				<ol>
			
					<li value="1">Động Cơ [<strong>Verb Base</strong>]:</li>
					<li className="list-none">Đơn vị hành động nhỏ nhất (1 từ gốc).</li>
					<li className="margin-bottom-20 list-none">Hình thái này sẽ đi làm các chức năng: Danh Cơ [<strong>Noun Base</strong>], Tính Cơ [<strong>Adjective Base</strong>], hoặc Trạng Cơ [<strong>Adverb Base</strong>].</li>
			
					<li value="2">Động Cụm [<strong>Verb Phrase</strong>]:</li>
					<li className="list-none">Khối hành động chứa nhiều từ (không S + V).</li>
					<li className="margin-bottom-20 list-none">Hình thái này sẽ đi làm các chức năng: Danh Cụm [<strong>Noun Phrase</strong>], Tính Cụm [<strong>Adjective Phrase</strong>], hoặc Trạng Cụm [<strong>Adverb Phrase</strong>].</li>
			
					<li value="3">Động Câu [<strong>Verb Clause</strong>]:</li>
					<li className="list-none">Khối hành động chứa một cấu trúc Câu con hoàn chỉnh (có S + V).</li>
					<li className="list-none">Hình thái này sẽ đi làm các chức năng: Danh Câu [<strong>Noun Clause</strong>], Tính Câu [<strong>Adjective Clause</strong>], hoặc Trạng Câu [<strong>Adverb Clause</strong>].</li>
			
				</ol>


			<p className="margin-top-20">Khi chưa đặt vào câu, bạn chỉ biết đó là hình thái Động cơ/Động cụm/Động câu.</p>

			<p>Chỉ khi nó "neo" vào một vị trí cụ thể, chức năng tương ứng (Danh / Tính / Trạng) mới được kích hoạt.</p>

			

			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. Ma Trận Đối Xứng Song Ngữ Bản Chất</h3>

			<p>Dưới đây là sơ đồ chi tiết tích hợp thuật ngữ quốc tế, giúp người học đối chiếu trực quan bản chất cấu trúc:</p>


			<h4 className="margin-y-40">Khối chức năng DANH [Noun]</h4>


			<p className="margin-top-20 text-indent-whole">Danh Cơ [<strong>Noun Base</strong>]: Một từ đơn lẻ dùng để gọi tên đối tượng.</p>
			
				<ul className="list-square">
			
					<li>[Success] is important.</li>
					<li className="margin-bottom-20 list-none">[Thành công] thì quan trọng.</li>

					<li className="list-none">→ [Success] là Danh Cơ [<strong>Noun Base</strong>].</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole">Danh Cụm [<strong>Noun Phrase</strong>]: Một khối cụm từ làm chức năng của danh cơ, không chứa hệ trục S + V.</p>
			
				<ul className="list-square">
			
					<li>[The key to success] is hard work.</li>
					<li className="margin-bottom-20 list-none">[Chìa khóa dẫn đến thành công] là sự chăm chỉ.</li>

					<li className="list-none">Động Cụm [<strong>Verb Phrase</strong>] → [The key to success] là Danh Cụm [<strong>Noun Phrase</strong>].</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Danh Câu [<strong>Noun Clause</strong>]: Một Câu con làm chức năng của danh cơ, có chứa đầy đủ hệ trục S + V.</p>
			
				<ul className="list-square">
			
					<li>[What he said] surprised everyone.</li>
					<li className="margin-bottom-20 list-none">[Điều mà anh ấy đã nói] làm mọi người ngạc nhiên.</li>

					<li className="list-none">→ [What he said] là Danh Câu [<strong>Noun Clause</strong>] vì chứa hệ trục S + V.</li>
			
				</ul>


			<h4 className="margin-y-40">Khối chức năng TÍNH [Adjective]</h4>


			<p className="margin-top-20 text-indent-whole">Tính Cơ [<strong>Adjective Base</strong>]: Một từ đơn lẻ dùng để mô tả đặc điểm, tính chất.</p>
			
				<ul className="list-square">
			
					<li>She bought a [beautiful] dress.</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã mua một chiếc váy [đẹp].</li>

					<li className="list-none">→ [Beautiful] là Tính Cơ [<strong>Adjective Base</strong>].</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole">Tính Cụm [<strong>Adjective Phrase</strong>]: Một khối cụm từ làm chức năng của tính cơ, không chứa hệ trục S + V.</p>
					
				<ul className="list-square">
			
					<li>She bought a dress [very beautiful and expensive].</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã mua một chiếc váy [rất đẹp và đắt tiền].</li>

					<li className="list-none">→ [Very beautiful and expensive] là Tính Cụm [<strong>Adjective Phrase</strong>].</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole">Tính Câu [<strong>Adjective Clause</strong>]: Một Câu con làm chức năng của tính cơ để bổ nghĩa cho một danh cơ, có chứa đầy đủ hệ trục S + V.</p>
					
				<ul className="list-square">
			
					<li>She bought a dress [which everyone liked].</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã mua một chiếc váy [mà ai cũng thích].</li>

					<li className="list-none">→ [Which everyone liked] là Tính Câu [<strong>Adjective Clause</strong>] vì chứa hệ trục S + V.</li>
			
				</ul>
			


			<h4 className="margin-y-40">Khối chức năng TRẠNG [Adverb]</h4>


			<p className="margin-top-20 text-indent-whole">Trạng Cơ [<strong>Adverb Base</strong>]: Một từ đơn lẻ chỉ cách thức, thời gian, nơi chốn.</p>
			
				<ul className="list-square">
			
					<li>We arrived [early].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [sớm].</li>

					<li className="list-none">→ [Early] là Trạng Cơ [<strong>Adverb Base</strong>].</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole">Trạng Cụm [<strong>Adverb Phrase</strong>]: Một khối cụm từ làm chức năng của trạng cơ, không chứa hệ trục S + V.</p>
			
				<ul className="list-square">
			
					<li>We arrived [in the morning].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [vào buổi sáng].</li>

					<li className="list-none">→ [In the morning] là Trạng Cụm [<strong>Adverb Phrase</strong>].</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole">Trạng Câu [<strong>Adverb Clause</strong>]: Một Câu con làm chức năng của trạng cơ, có chứa đầy đủ hệ trục S + V.</p>
			
				<ul className="list-square">
			
					<li>We arrived [before the sun rose].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [trước khi mặt trời mọc].</li>

					<li className="list-none">→ [Before the sun rose] là Trạng Câu [<strong>Adverb Clause</strong>] vì chứa hệ trục S + V.</li>
			
				</ul>


			{/* 4. */}

			<h3 className="margin-y-50 text-center">4. Quy Trình Vận Hành Và Ký Hiệu Đóng Gói Sơ Đồ</h3>

			<p>Để bóc tách các tầng hình thái lồng ghép vào nhau như những chiếc hộp gỗ, người học áp dụng quy ước đóng gói hình khối:</p>


			<h4 className="margin-y-40">1. Hình thái ĐỘNG CƠ (Verb Base)</h4>
					
			<p className="text-indent-whole">Đơn vị hành động nhỏ nhất (1 từ).</p>

			<p className="text-indent-whole"><strong>Ký hiệu quy ước</strong>: Sử dụng dấu vuông [] bao quanh.</p>


			<p className="margin-top-20 text-indent-whole">Chức năng Danh Cơ [<strong>Noun Base</strong>]</p>

				<ul className="list-square">

					<li>[Swimming] reduces stress.</li>
					<li className="margin-bottom-20 list-none">[Việc bơi lội] làm giảm căng thẳng.</li>
					<li className="list-none">→ Hành động bơi lội làm chủ thể</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Chức năng Tính Cơ [<strong>Adjective Base</strong>]</p>

				<ul className="list-square">

					<li>I can hear the [exciting] music.</li>
					<li className="margin-bottom-20 list-none">Tôi có thể nghe thấy tiếng nhạc [sôi động].</li>
					<li className="list-none">→ Hành động mang tính chất náo nhiệt bổ nghĩa cho music</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Chức năng Trạng Cơ [<strong>Adverb Base</strong>] - Quy ước: Hình thành từ gốc động cơ + đuôi ly</p>

				<ul className="list-square">
			
					<li>He answered [pointedly].</li>
					<li className="margin-bottom-20 list-none">Anh ấy đã trả lời [một cách sắc bén].</li>
					<li className="list-none">→ Hành động nói theo cách thức nhắm thẳng vào trọng tâm</li>
			
				</ul>


			<h4 className="margin-y-40">2. Hình thái ĐỘNG CỤM (Verb Phrase)</h4>

			<p className="text-indent-whole">Đơn vị hành động chứa nhiều từ kết hợp.</p>

			<p className="text-indent-whole"><strong>Ký hiệu quy ước</strong>: Sử dụng dấu vuông [] cho tầng ngoài và dấu ngoặc nhọn {'{}'} cho <strong>tầng lồng</strong> bên trong.</p>


			<p className="margin-top-20 text-indent-whole">Chức năng Danh Cụm [<strong>Noun Phrase</strong>]</p>

				<ul className="list-square">

					<li>We decided [to explore the cave].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã quyết định [khám phá hang động].</li>
					<li className="list-none">→ Cả cụm là một đầu việc được thực thi</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Chức năng Tính Cụm [<strong>Adjective Phrase</strong>]</p>

				<ul className="list-square">

					<li>The birds [flying in the sky] are beautiful.</li>
					<li className="margin-bottom-20 list-none">Những con chim [đang bay trên trời] thật đẹp.</li>
					<li className="list-none">→ Cụm mô tả trạng thái của đối tượng chim</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Chức năng Trạng Cụm [<strong>Adverb Phrase</strong>]</p>
					
				<ul className="list-square">
			
					<li>She practices daily [to win the race].</li>
					<li className="margin-bottom-20 list-none">Cô ấy luyện tập hàng ngày [để thắng cuộc đua].</li>
					<li className="list-none">→ Cụm mô tả mục đích cho hành động luyện tập</li>
			
				</ul>
			

			<h4 className="margin-y-40">3. Hình thái ĐỘNG CÂU (Verb Clause)</h4>

			<p className="text-indent-whole">Đơn vị hành động phức cao cấp, chứa một cấu trúc Câu con hoàn chỉnh ở bên trong.</p>

			<p className="text-indent-whole"><strong>Ký hiệu quy ước</strong>: Dấu [] xác định ranh giới bao quanh toàn bộ hệ thống Câu con này.</p>


			<p className="margin-top-20 text-indent-whole">Chức năng Danh Câu [<strong>Noun Clause</strong>]</p>

				<ul className="list-square">

					<li>They believe [that price dictates quality].</li>
					<li className="margin-bottom-20 list-none">Họ tin [rằng giá cả quyết định chất lượng].</li>
					<li className="list-none">→ Cấu trúc câu con làm đối tượng được tin tưởng</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole">Chức năng Tính Câu [<strong>Adjective Clause</strong>]</p>

				<ul className="list-square">

					<li>The house [which we rented last month] is small.</li>
					<li className="margin-bottom-20 list-none">Ngôi nhà [mà chúng tôi thuê tháng trước] thì nhỏ.</li>
					<li className="list-none">→ Cấu trúc câu con định danh cho ngôi nhà</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole">Chức năng Trạng Câu [<strong>Adverb Clause</strong>]</p>
			
				<ul className="list-square">
			
					<li>She stayed home [because it rained heavily].</li>
					<li className="margin-bottom-20 list-none">Cô ấy ở nhà [vì trời mưa to].</li>
					<li className="list-none">→ Cấu trúc câu con mô tả nguyên nhân của hành động ở nhà</li>
			
				</ul>


			{/* 5. */}

			<h3 className="margin-y-50 text-center">5. Nguyên Tắc Phân Tầng Bằng "Điểm Neo"</h3>

			<p>Khi xử lý các cấu trúc dài phức tạp, người học tuân thủ 3 nguyên tắc cốt lõi:</p>
			
				<ul className="list-square">
			
					<li><strong>Dấu móc trực quan</strong>:</li>
					<li className="margin-bottom-20 list-none">Sử dụng [] cho lớp bao ngoài và {'{}'} cho <strong>lớp lồng bên trong</strong> để bóc tách các tầng hệ thống.</li>
			
					<li><strong>Dữ liệu nội bộ</strong>:</li>
					<li className="margin-bottom-20 list-none">Các yếu tố đuôi biến đổi cấu hình như -<strong>s</strong>/-<strong>es</strong>, -<strong>ed</strong>, -<strong>ing</strong> nằm bên trong dấu móc là cấu hình của Động cơ, không làm thay đổi bản chất hình thái hay chức năng.</li>
			
					<li><strong>Tính tách biệt</strong>:</li>
					<li className="list-none">Động cơ chính điều phối toàn bộ Câu lớn luôn nằm ngoài các khối Module phụ trợ nếu nó đóng vai trò là điểm điều phối.</li>
			
				</ul>
			

			<p className="margin-top-20">Ví dụ thực tế về <strong>cấu trúc phân tầng</strong> (Bao gồm cả động cơ chính):</p>

				<ul className="list-square">
			
					<li>He [learns {'{what you teach him}'}].</li>
					<li className="margin-bottom-20 list-none">Anh ấy [học {'{những gì bạn dạy anh ấy}'}].</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Bóc tách tư duy hình khối:</p>
			
				<ul className="list-square">
			
					<li value="1">{'{what you teach him}'}: Người học nhìn thấy cấu trúc chứa hệ trục S+V (you + teach)</li>
					<li className="margin-bottom-20 list-none">Nhận diện ngay hình thái Động Câu [<strong>Verb Clause</strong>].</li>
					<li className="margin-bottom-20 list-none">→ Vì nó đứng sau làm đối tượng chịu tác động của hành động "learns", nên nó kích hoạt Chức năng: Danh Câu [<strong>Noun Clause</strong>].</li>
			
					<li value="2">[learns {'{what you teach him}'}]: Là một khối Động Cụm [<strong>Verb Phrase</strong>] lớn bao trọn lấy động cơ chính "learns" phối hợp cùng phần module phụ thuộc phía sau.</li>
					<li className="margin-bottom-20 list-none">Khối này nằm ngay sau chủ thể "He" để thực thi toàn bộ phần vị ngữ</li>
					<li className="list-none">→ Do đó nó đóng vai trò kích hoạt Chức năng: Danh Cụm [<strong>Noun Phrase</strong>] cho toàn bộ phần hành động của Câu lớn.</li>
			
				</ul>


			<p className="margin-top-20"><strong>Bảng Tổng Kết Hệ Thống Nhất Quán 2 Chiều</strong></p>

			<p className="margin-top-20 text-indent-whole"><strong>Hình thái</strong> (Chiều Dọc):</p>
			
				<ul className="list-square">
			
					<li className="margin-bottom-20">Động Cơ [<strong>Verb Base</strong>]</li>
					<li className="list-none">Ký hiệu: [Từ]</li>
					<li className="list-none">Cấp độ: [<strong>Base</strong>] Cơ bản</li>
					<li className="list-none">Chức năng kích hoạt - Chiều Ngang:</li>
					<li className="margin-bottom-20 list-none">Danh Cơ [<strong>Noun Base</strong>] / Tính Cơ [<strong>Adjective Base</strong>] / Trạng Cơ [<strong>Adverb Base</strong>]</li>
					
			
					<li className="margin-bottom-20">Động Cụm [<strong>Verb Phrase</strong>]</li>
					<li className="list-none">Ký hiệu: [Cụm từ]</li>
					<li className="list-none">Cấp độ: [<strong>Phrase</strong>] Cụm</li>
					<li className="list-none">Chức năng kích hoạt - Chiều Ngang:</li>
					<li className="margin-bottom-20 list-none">Danh Cụm [<strong>Noun Phrase</strong>] / Tính Cụm [<strong>Adjective Phrase</strong>] / Trạng Cụm [<strong>Adverb Phrase</strong>]</li>
					
			
					<li className="margin-bottom-20">Động Câu [<strong>Verb Clause</strong>]</li>
					<li className="list-none">Ký hiệu: [Hệ S+V]</li>
					<li className="list-none">Cấp độ: [<strong>Clause</strong>] Câu</li>
					<li className="list-none">Chức năng kích hoạt - Chiều Ngang:</li>
					<li className="list-none">Danh Câu [<strong>Noun Clause</strong>] / Tính Câu [<strong>Adjective Clause</strong>] / Trạng Câu [<strong>Adverb Clause</strong>]</li>
					
			
				</ul>
			
			
			<p className="margin-top-20">Hệ thống <strong>Cơ</strong> - <strong>Cụm</strong> - <strong>Câu</strong> phối hợp cùng ma trận <strong>Danh</strong> - <strong>Tính</strong> - <strong>Trạng</strong> chính là chiếc chìa khóa vạn năng.</p>

			<p>Nó giúp người học thoát khỏi mớ bòng bong lý thuyết bủa vây, quét cấu trúc với tốc độ ánh sáng để đạt đến đỉnh cao phản xạ tự nhiên:</p>

			<p><strong>Nhìn hình thái</strong> → <strong>Định vị trí</strong> → <strong>Hiểu bản chất</strong>!</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 06, 2026 · by 💎Gem and 🐝Mr. Bee Osn ·</span>
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