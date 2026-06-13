import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NineBox1(): React.JSX.Element {

	const postId = "NineBox1";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Nine Box
												
				<sup><HashLink smooth to="/tieng-anh/nine-box-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/nine-box-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/nine-box-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/nine-box-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/nine-box-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/nine-box-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/nine-box-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/nine-box-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/nine-box-9">&nbsp;9&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">KIẾN TRÚC TƯ DUY 3X3 & HỆ THỐNG ĐỘNG LẬP TRÌNH: BẢN THIẾT KẾ LÀM CHỦ TIẾNG ANH LOGIC</h4>

			<p>Nếu bạn là người có tư duy mường tượng theo hệ thống—như cách một lập trình viên nhìn vào các luồng dữ liệu (Data Streams) hay một kế toán viên phân loại các tài khoản trên bảng cân đối phát sinh—bạn sẽ thường cảm thấy ngột ngạt với cách học tiếng Anh truyền thống.</p>

			<p>Những thuật ngữ cũ rời rạc, những quy tắc đầy rẫy ngoại lệ khiến bộ não logic của bạn liên tục đặt câu hỏi:</p>

			<p className="margin-y-30">"Bản chất hệ thống ở đây là gì?"</p>

			<p>Thực tế, ngôn ngữ không phải là một tập hợp các quy tắc ngẫu nhiên. Nó là một bộ mã được vận hành bởi logic. Để làm chủ tiếng Anh mà không bị rối bời, chúng ta chuyển đổi hoàn toàn sang Tư duy <strong>Chức năng</strong> (<strong>Functional Thinking</strong>).</p>
			
			<p>Hệ thống <strong>Kiến trúc Tư duy</strong> (<strong>Mental Architecture</strong>) 3x3 phối hợp cùng bộ quy ước song song dưới đây giúp bạn "đóng gói" và xử lý tiếng Anh chính xác như cách máy tính xử lý các kiểu dữ liệu (Data Types).</p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Hệ Tọa Độ Tư Duy: Hai Trục Nhất Quán</h3>

			<p>Để định vị bất kỳ thành phần nào trong một <strong>Câu lớn</strong> (khối thông tin đứng độc lập, kết thúc bằng dấu chấm và biểu thị một ý trọn vẹn), chúng ta đặt nó vào một hệ tọa độ hai trục chuẩn hóa:</p>
			
				<ul className="list-square">
			
					<li>Chiều Ngang — <strong>Chức năng</strong> (Vai trò):</li>
					<li className="list-none">Trả lời câu hỏi "Thành phần này làm nhiệm vụ gì?"</li>
					<li className="margin-bottom-20 list-none">→ Danh / Tính / Trạng.</li>
			
					<li>Chiều Dọc — <strong>Cấp độ</strong> (Quy mô):</li>
					<li className="list-none">Trả lời câu hỏi "Độ phức tạp và cấu trúc quy mô ra sao?"</li>
					<li className="list-none">→ Quy tắc 3 chữ C: [<strong>Base</strong>] Cơ → [<strong>Phrase</strong>] Cụm → [<strong>Clause</strong>] Câu.</li>
			
				</ul>

			<p className="margin-top-20">Bằng cách liên kết hai chiều này, mọi cấu trúc tiếng Anh được làm sạch hoàn toàn về mặt thuật ngữ và đưa vào một ma trận đồng bộ tuyệt đối.</p>
		


			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Ma Trận Đóng Gói Dữ Liệu Ngôn Ngữ</h3>

			<p>Mọi phân đoạn trong tiếng Anh đều có thể "đóng gói" (encapsulate) vào ma trận dữ liệu chuẩn sau:</p>


			<h4 className="margin-y-40">Chức năng:</h4>
			
				<ul className="list-square">
			
					<li><strong>DANH</strong> (Đối tượng)</li>
					<li><strong>TÍNH</strong> (Thuộc tính)</li>
					<li><strong>TRẠNG</strong> (Bối cảnh)</li>
			
				</ul>
			

			<h4 className="margin-y-40">Cấp độ:</h4>
	
			<p className="text-indent-whole">[<strong>BASE</strong>] <strong>Mức cơ bản</strong></p>
			
				<ul className="list-square">

					<li>[water], [information]</li>
					<li className="list-none">[nước], [thông tin]</li>
					<li className="margin-bottom-20 list-none">→ Danh Cơ [<strong>Noun Base</strong>]</li>

					<li>[accurate], [efficient]</li>
					<li className="list-none">[chính xác], [hiệu quả]</li>
					<li className="margin-bottom-20 list-none">→ Tính Cơ [<strong>Adjective Base</strong>]</li>
			
					<li>[now], [locally]</li>
					<li className="list-none">[bây giờ], [cục bộ / tại địa phương]</li>
					<li className="list-none">→ Trạng Cơ [<strong>Adverb Base</strong>]</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">[<strong>PHRASE</strong>] <strong>Khối cụm</strong></p>
			
				<ul className="list-square">

					<li>[a new financial report]</li>
					<li className="list-none">[một báo cáo tài chính mới]</li>
					<li className="margin-bottom-20 list-none">→ Danh Cụm [<strong>Noun Phrase</strong>]</li>

					<li>[extremely detailed]</li>
					<li className="list-none">[cực kỳ chi tiết]</li>
					<li className="margin-bottom-20 list-none">→ Tính Cụm [<strong>Adjective Phrase</strong>]</li>
			
					<li>[in the accounting software]</li>
					<li className="list-none">[trong phần mềm kế toán]</li>
					<li className="list-none">→ Trạng Cụm [<strong>Adverb Phrase</strong>]</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">[<strong>CLAUSE</strong>] <strong>Khối câu con</strong></p>
			
				<ul className="list-square">

					<li>[what the manager requested]</li>
					<li className="list-none">[những gì người quản lý yêu cầu]</li>
					<li className="margin-bottom-20 list-none">→ Danh Câu [<strong>Noun Clause</strong>]</li>
			
					<li>[that standardizes the process]</li>
					<li className="list-none">[mà tiêu chuẩn hóa quy trình]</li>
					<li className="margin-bottom-20 list-none">→ Tính Câu [<strong>Adjective Clause</strong>]</li>

					<li>[because the system crashed]</li>
					<li className="list-none">[bởi vì hệ thống bị treo/sập]</li>
					<li className="margin-bottom-20 list-none">→ Trạng Câu [<strong>Adverb Clause</strong>]</li>
			
				</ul>


			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. Bản Chất Của Vận Hành: Hình Thái Đi Trước, Chức Năng Theo Sau</h3>


			<p>Điểm mấu chốt của hệ thống tư duy logic này nằm ở việc tách biệt giữa <strong>Hình thái</strong> (Bề ngoài nhìn thấy) và <strong>Chức năng</strong> (Nhiệm vụ thực tế sau khi đặt vào vị trí câu).</p>

			<p>Khi tiếp cận một câu, người học chỉ nhìn thấy <strong>Hình thái</strong> của hành động ở các cấp độ quy mô:</p>


			<p className="margin-y-30">Động Cơ [<strong>Verb Base</strong>], Động Cụm [<strong>Verb Phrase</strong>], hoặc Động Câu [<strong>Verb Clause</strong>].</p>


			<p>Chúng ta chưa hề biết chức năng của nó là gì. Chỉ khi đặt khối hình thái đó vào một vị trí cụ thể trong câu lớn, <strong>Chức năng</strong> (Danh / Tính / Trạng) của nó mới được kích hoạt và hiển thị.</p>


			<h4 className="margin-y-40">3.1. Hình thái cấp độ BASE: ĐỘNG CƠ [Verb Base]</h4>

			<p className="text-indent-whole">Là đơn vị hành động nhỏ nhất (chỉ gồm 1 từ). Khi đứng vào các vị trí khác nhau, nó sẽ hình thành nên các chức năng tương ứng:</p>

					
			<p className="margin-top-20 text-indent-whole"><strong>Hình thành Chức năng Danh Cơ</strong> [<strong>Noun Base</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[Swimming] builds physical endurance.</li>
					<li className="margin-bottom-20 list-none">[Bơi lội] xây dựng sức bền thể chất.</li>

					<li className="list-none">→ Hành động bơi lội đóng vai trò là chủ thể của câu</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Hình thành Chức năng Tính Cơ</strong> [<strong>Adjective Base</strong>]:</p>

				<ul className="list-square">
			
					<li>The team developed an [exciting] software program.</li>
					<li className="margin-bottom-20 list-none">Nhóm đã phát triển một chương trình phần mềm [thú vị].</li>

					<li className="list-none">→ Hành động mang tính chất gây hào hứng đóng vai trò bổ nghĩa cho chương trình phần mềm</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Hình thành Chức năng Trạng Cơ</strong> [<strong>Adverb Base</strong>] (Gốc động cơ + ly):</p>
			
				<ul className="list-square">
			
					<li>She writes code [pointedly].</li>
					<li className="margin-bottom-20 list-none">Cô ấy viết mã [một cách có chủ đích].</li>

					<li className="list-none">→ Cô ấy viết mã một cách tập trung/có mục đích rõ ràng - cấu hình gốc từ hành động point</li>
			
				</ul>
			


			<h4 className="margin-y-40">3.2. Hình thái cấp độ PHRASE: ĐỘNG CỤM (Verb Phrase)</h4>

			<p className="text-indent-whole">Là đơn vị hành động chứa nhiều từ tạo thành một khối liên kết (không chứa cấu trúc chủ-vị riêng). Khi đứng vào câu, khối hình thái này sẽ hình thành nên các chức năng:</p>

					
			<p className="margin-top-20 text-indent-whole"><strong>Hình thành Chức năng Danh Cụm</strong> [<strong>Noun Phrase</strong>]:</p>
			
				<ul className="list-square">
			
					<li>We intend to [upgrade the main server].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi dự định [nâng cấp máy chủ chính].</li>

					<li className="list-none">→ Cả cụm hành động được đóng gói làm đối tượng đứng sau</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Hình thành Chức năng Tính Cụm</strong> [<strong>Adjective Phrase</strong>]:</p>
			
				<ul className="list-square">
			
					<li>The database is [running smoothly now].</li>
					<li className="margin-bottom-20 list-none">Cơ sở dữ liệu đang [hoạt động trơn tru bây giờ].</li>

					<li className="list-none">→ Cụm mô tả thuộc tính/trạng thái vận hành hiện tại của cơ sở dữ liệu</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Hình thành Chức năng Trạng Cụm</strong> [<strong>Adverb Phrase</strong>]:</p>
			
				<ul className="list-square">
			
					<li>They audit the logs [to prevent system fraud].</li>
					<li className="margin-bottom-20 list-none">Họ kiểm tra nhật ký [để ngăn chặn gian lận hệ thống].</li>

					<li className="list-none">→ Cụm mô tả bối cảnh mục đích cho hành động kiểm toán</li>
			
				</ul>


			<h4 className="margin-y-40">3.3. Hình thái cấp độ CLAUSE: ĐỘNG CÂU [Verb Clause]</h4>

			<p className="text-indent-whole">Là đơn vị hành động mở rộng ở quy mô lớn nhất, chứa một cấu trúc câu con bên trong nó. Khi được "gắn" vào hệ thống, khối hình thái này sẽ hình thành nên các chức năng dữ liệu phức hợp:</p>

					
			<p className="margin-top-20 text-indent-whole"><strong>Hình thành Chức năng Danh Câu</strong> [<strong>Noun Clause</strong>]:</p>
			
				<ul className="list-square">
			
					<li>The system confirms [that the payment succeeded].</li>
					<li className="margin-bottom-20 list-none">Hệ thống xác nhận [rằng khoản thanh toán đã thành công].</li>

					<li className="list-none">→ Khối câu con làm đối tượng được xác nhận bởi hệ thống</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Hình thành Chức năng Tính Câu</strong> [<strong>Adjective Clause</strong>]:</p>

				<ul className="list-square">
			
					<li>The source code [which has a security flaw] must be rewritten.</li>
					<li className="margin-bottom-20 list-none">Mã nguồn [có một lỗ hổng bảo mật] phải được viết lại.</li>

					<li className="list-none">→ Khối câu con định danh và mô tả đặc điểm cho đối tượng source code</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Hình thành Chức năng Trạng Câu</strong> [<strong>Adverb Clause</strong>]:</p>
			
				<ul className="list-square">
			
					<li>The software will deploy [wherever the network connects]</li>
					<li className="margin-bottom-20 list-none">Phần mềm sẽ được triển khai [bất cứ nơi nào mạng kết nối].</li>

					<li className="list-none">→ Khối câu con mô tả hoàn cảnh/điều kiện nơi chốn cho hành động triển khai.</li>
			
				</ul>

			
			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. Nguyên Tắc Phân Tầng Hệ Thống & Quy Ước Vận Hành</h3>

			<h4 className="margin-y-40">Bảng Tổng Hợp Quy Ước Vận Hành Hệ Thống</h4>

			<p className="margin-y-20 text-indent-whole"><strong>Hình thái</strong> (<strong>Nhìn thấy</strong>)</p>
			
				<ul className="list-square">
			
					<li>Động Cơ [<strong>Verb Base</strong>]</li>
					<li className="list-none">Cấp độ: [<strong>Base</strong>]</li>
					<li className="list-none">Chức năng hình thành (Theo vị trí): Danh cơ / Tính cơ / Trạng cơ</li>
					<li className="margin-bottom-20 list-none">Vai trò trong hệ thống: Hạt nhân đơn lẻ (1 từ).</li>
			
					<li>Động Cụm [<strong>Verb Phrase</strong>]</li>
					<li className="list-none">Cấp độ: [<strong>Phrase</strong>]</li>
					<li className="list-none">Chức năng hình thành (Theo vị trí): Danh cụm / Tính cụm / Trạng cụm</li>
					<li className="margin-bottom-20 list-none">Vai trò trong hệ thống: Module thực thi trung gian (Nhiều từ).</li>
			
					<li>Động Câu [<strong>Verb Clause</strong>]</li>
					<li className="list-none">Cấp độ: [<strong>Clause</strong>]</li>
					<li className="list-none">Chức năng hình thành (Theo vị trí): Danh câu / Tính câu / Trạng câu</li>
					<li className="list-none">Vai trò trong hệ thống: Module thực thi chứa câu con bên trong.</li>
			
				</ul>
			


			<h4 className="margin-y-40">Cấu trúc phân tầng lồng nhau (Lấy cả động cơ chính)</h4>

			<p className="text-indent-whole">Trong các cấu trúc phức tạp, các Module sẽ lồng vào nhau theo kiến trúc hình khối.</p>

			<p className="margin-y-30 text-indent-whole"><strong>Quy ước</strong>: Dấu [] bao quanh tầng ngoài và dấu {'{}'} bao quanh tầng lồng bên trong.</p>

			<p className="text-indent-whole">Hệ thống phân tầng này sẽ quét và lấy trọn vẹn cả động cơ chính điều phối hành động.</p>


			<p className="margin-top-20 text-indent-whole"><strong>Mô hình thực tế</strong>:</p>
			
				<ul className="list-square">
			
					<li>The analyst [expects {'{that the revenue will drop}'}].</li>
					<li className="margin-bottom-20 list-none">Nhà phân tích [kỳ vọng {'{rằng doanh thu sẽ giảm}'}].</li>

					<li className="list-none">{'{that the revenue will drop}'}</li>
					<li className="list-none">Hình thái Động Câu [<strong>Verb Clause</strong>]</li>
					<li className="margin-bottom-20 list-none">→ Hoạt động với Chức năng: Danh Câu [<strong>Noun Clause</strong>] vì làm đối tượng trực tiếp đứng sau.</li>
			
					<li className="list-none">[expects {'{that the revenue will drop}'}]</li>
					<li className="list-none">Toàn bộ khối bao gồm cả động cơ chính expects phối hợp với khối dữ liệu phía sau tạo thành hình thái Động Cụm [<strong>Verb Phrase</strong>]</li>
					<li className="list-none">→ Hoạt động với Chức năng: Danh Cụm [<strong>Noun Phrase</strong>] lớn điều phối hành động của chủ thể.</li>
			
				</ul>
	

			<h4 className="margin-y-40">Nguyên tắc "Điểm neo":</h4>
			
				<ol>
			
					<li><strong>Dấu móc</strong>:</li>
					<li className="margin-bottom-20 list-none">Dùng để bao quanh Động cơ chính hoặc toàn bộ cụm/câu con để não bộ phân định rõ ranh giới xử lý của trình biên dịch thông tin.</li>
			
					<li><strong>Dữ liệu nội bộ</strong>:</li>
					<li className="list-none">Các yếu tố cấu hình như <strong>s</strong>/<strong>es</strong>, <strong>ed</strong>, <strong>ing</strong> nằm bên trong dấu nhãn chính là cài đặt thông số hiển thị của hành động, không làm thay đổi bản chất của Cấp độ hay Chức năng mà khối đó đang đảm nhiệm.</li>
			
				</ol>
			


			{/* 5. */}

			<h3 className="margin-y-50 text-center">5. Tối Ưu Hóa Kỹ Năng Viết Lại Câu (Paraphrasing) Bằng Quy Tắc Chuyển Đổi Cấp Độ</h3>

			<p>Bản chất của Paraphrasing chuyên nghiệp không phải là tìm từ đồng nghĩa một cách mù quáng, mà là tịnh tiến quy mô dữ liệu theo chiều dọc (<strong>Base</strong> → <strong>Phrase</strong> → <strong>Clause</strong>) trong khi vẫn giữ cố định vị trí chức năng trên chiều ngang của hệ tọa độ.</p>
					


			<h4 className="margin-y-40">Nhóm 1: Tịnh tiến ô chức năng DANH [NOUN] (Đối tượng)</h4>
					
			<p className="margin-top-20 text-indent-whole">Danh Cơ [<strong>Noun Base</strong>]</p>

				<ul className="list-square">
			
					<li>[Automation] increases workflow efficiency.</li>
					<li className="list-none">[Tự động hóa] giúp tăng hiệu suất quy trình.</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Danh Cụm [<strong>Noun Phrase</strong>]</p>

				<ul className="list-square">
					
					<li>[The deployment of new software tools] increases workflow efficiency.</li>
					<li className="list-none">[Việc triển khai các công cụ phần mềm mới] giúp tăng hiệu suất quy trình.</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Danh Câu [<strong>Noun Clause</strong>]</p>

				<ul className="list-square">
			
					<li>[What the engineering team implemented yesterday] increases workflow efficiency.</li>
					<li className="list-none">[Những gì đội ngũ kỹ sư triển khai ngày hôm qua] giúp tăng hiệu suất quy trình.</li>
			
				</ul>



			<h4 className="margin-y-40">Nhóm 2: Biến đổi ô chức năng TÍNH [ADJECTIVE] (Thuộc tính)</h4>
					
			<p className="margin-top-20 text-indent-whole">Tính Cơ [<strong>Adjective Base</strong>]</p>

				<ul className="list-square">

					<li>We must replace this [unsecured] connection.</li>
					<li className="list-none">Chúng ta phải thay thế kết nối [không an toàn] này</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Tính Cụm [<strong>Adjective Phrase</strong>]</p>

				<ul className="list-square">

					<li>We must replace this connection [vulnerable to cyber threats].</li>
					<li className="list-none">Chúng ta phải thay thế kết nối [dễ bị tổn hại bởi các mối đe dọa mạng] này.</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Tính Câu [<strong>Adjective Clause</strong>]</p>
			
				<ul className="list-square">

					<li>We must replace this connection [which allows unauthorized user access].</li>
					<li className="list-none">Chúng ta phải thay thế kết nối [mà nó cho phép người dùng không được cấp quyền truy cập vào].</li>
			
				</ul>
			


			<h4 className="margin-y-40">Nhóm 3: Tịnh tiến ô chức năng TRẠNG [ADVERB] (Bối cảnh)</h4>
					
			<p className="margin-top-20 text-indent-whole">Trạng Cơ [<strong>Adverb Base</strong>]</p>

				<ul className="list-square">

					<li>The server updates [automatically].</li>
					<li className="list-none">Máy chủ cập nhật [một cách tự động].</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Trạng Cụm [<strong>Adverb Phrase</strong>]</p>

				<ul className="list-square">
			
					<li>The server updates [without any human intervention].</li>
					<li className="list-none">Máy chủ cập nhật [mà không cần bất kỳ sự can thiệp nào của con người].</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Trạng Câu [<strong>Adverb Clause</strong>]</p>
			
				<ul className="list-square">
					
					<li>The server updates [whenever a new security patch publishes].</li>
					<li className="list-none">Máy chủ cập nhật [bất cứ khi nào một bản vá bảo mật mới được phát hành].</li>
			
				</ul>
			

			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">Lời Kết</h3>

			<p>Sự đồng bộ giữa hai trục Chức năng (Danh - Tính - Trạng) và Cấp độ [<strong>Base</strong> - <strong>Phrase</strong> - <strong>Clause</strong>] tạo ra một bộ lọc ngôn ngữ cực kỳ tinh gọn.</p>

			<p>Khi bạn chuyển đổi cách nhìn từ việc đoán nghĩa từ vựng sang việc bóc tách Hình thái trước rồi định hình Chức năng dựa trên vị trí, bạn đã chính thức làm chủ mã nguồn của tiếng Anh.</p>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 08, 2026 · by 💎Gem and 🐝Mr. Bee Osn ·</span>
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

function X3() {
	throw new Error('Function not implemented.');
}
