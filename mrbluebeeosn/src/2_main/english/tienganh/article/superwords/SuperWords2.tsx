import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SuperWords2(): React.JSX.Element {

	const postId = "SuperWords2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Super Words
												
				<sup><HashLink smooth to="/tieng-anh/super-words-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				{/* <sup><HashLink smooth to="/tieng-anh/super-words-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/super-words-9">&nbsp;9&nbsp;</HashLink>
				</sup> */}

			</h1>

			<h4 className="margin-bottom-30 text-center">Hệ thống “Cơ – Cụm – Câu”: Ngữ pháp 3D, viết lại câu dễ dàng</h4>

			{/* 1.  */}

			<p className="text-center"><strong>Chuyên mục</strong>: Ngữ pháp trực quan – Tư duy như kiến trúc sư câu</p>

			<h3 className="margin-y-50 text-center">Bạn có muốn một cách nhìn mới về câu?</h3>

			<p className="margin-top-20">Hãy thử xây dựng lại toàn bộ cách nhìn chỉ từ hai bộ ba:</p>
			
				<ul className="list-square">
			
					<li><strong>Ba chức năng</strong>:</li>
					<li className="margin-bottom-20 list-none">Danh – Tính – Trạng (việc một đơn vị đảm nhận trong câu lớn)</li>
			
					<li><strong>Ba cấp độ</strong>:</li>
					<li className="list-none">Cơ – Cụm – Câu (độ lớn, từ nhỏ nhất đến lớn nhất)</li>
			
				</ul>
			
			<p className="margin-top-20">Mỗi đơn vị khi xuất hiện đều có một <strong>Hình thái</strong> (hình dáng bên ngoài) và một <strong>Chức năng</strong> (việc nó làm).</p>

			<p>Hình thái thường bắt nguồn từ [<strong>Động Cơ</strong>][<strong>Verb Base</strong>], [<strong>Động Cụm</strong>][<strong>Verb Phrase</strong>] hoặc <strong>Động Câu</strong> [<strong>Verb Clause</strong>].</p>

			<p>Sau khi xác định Hình thái, bạn nhìn vào vị trí của nó trong câu lớn để biết Chức năng: <strong>Danh</strong>, <strong>Tính</strong> hay <strong>Trạng</strong>.</p>

			<p>Khi đã quen, bạn có thể <strong>viết lại câu</strong> (<strong>paraphrasing</strong>) chỉ bằng cách thay một khối này bằng một khối khác <strong>cùng chức năng</strong> – mà không động đến cấu trúc câu.</p>

			<p>Dưới đây, mọi khối đều được đặt trong []. Các cấp độ <strong>Cơ</strong>, <strong>Cụm</strong>, <strong>Câu</strong> luôn viết hoa khi ghép với chức năng <strong>Danh</strong>, <strong>Tính</strong>, <strong>Trạng</strong>.</p>

			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">I. Cấp độ CƠ – một đơn vị duy nhất</h3>

			<p>Một [<strong>Động Cơ</strong>][<strong>Verb Base</strong>] có thể làm ba việc.</p>


			<h4 className="margin-y-40">1. [Danh Cơ][Noun Base]</h4>

			<p className="text-indent-whole"><strong>Ví dụ</strong>: [Swimming]</p>
			
				<ul className="list-square">
			
					<li>[______] is fun.</li>
					<li className="margin-bottom-20 list-none">[Bơi lội] thì vui.</li>
			
					<li className="list-none">Hình thái: [Swimming] - [Tiếp Động Cơ][Progressive Verb Base] bắt đầu từ [Động Cơ] nguyên bản thêm -ing.</li>
			
					<li className="list-none">Chức năng: [Swimming] - [Danh Cơ][Noun Base] đứng đầu câu, chỉ một hoạt động.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Một ví dụ khác</strong>: [Smoking]</p>
			
				<ul className="list-square">
			
					<li>[______] is harmful.</li>
					<li className="margin-bottom-20 list-none">[Hút thuốc] có hại.</li>
			
					<li className="list-none">Hình thái: [Smoking] - [Tiếp Động Cơ][Progressive Verb Base] bắt đầu từ [Động Cơ] nguyên bản thêm -ing.</li>
			
					<li className="list-none">Chức năng: [Smoking] - [Danh Cơ][Noun Base] đứng đầu câu, chỉ một thói quen.</li>
			
				</ul>
			


			<h4 className="margin-y-40">2. [Tính Cơ][Adjective Base]</h4>

			<p className="text-indent-whole"><strong>Ví dụ</strong>: [exciting]</p>
			
				<ul className="list-square">
			
					<li>That is an [______] movie.</li>
					<li className="margin-bottom-20 list-none">Đó là một bộ phim [thú vị].</li>
			
					<li className="list-none">Hình thái: [exciting] - [Tiếp Động Cơ][Progressive Verb Base] bắt đầu từ [Động Cơ] nguyên bản dạng -ing.</li>
			
					<li className="list-none">Chức năng: [exciting] - [Tính Cơ][Adjective Base] bổ sung ý nghĩa cho movie.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ khác</strong>: [broken]</p>
			
				<ul className="list-square">
			
					<li>The [______] window needs repair.</li>
					<li className="margin-bottom-20 list-none">Cái cửa sổ [vỡ] cần sửa.</li>
			
					<li className="list-none">Hình thái: [broken] - [Hoàn Động Cơ][Perfect Verb Base] hình thành từ khối [Rễ Cơ][Root Base] nguyên bản "break" mặc thêm hậu tố "-ed" ở dạng cột 3 để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base].</li>
			
					<li className="list-none">Chức năng: [broken] - [Tính Cơ][Adjective Base] miêu tả trạng thái của cửa sổ.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">3. [Trạng Cơ][Adverb Base]</h4>

			<p className="text-indent-whole"><strong>Ví dụ</strong>: [quickly]</p>
			
				<ul className="list-square">
			
					<li>He runs [______].</li>
					<li className="margin-bottom-20 list-none">Anh ấy chạy [nhanh].</li>
			
					<li className="list-none">Hình thái: [quickly] - [Diện Cơ][Modified Base] hình thành từ khối [Rễ Cơ][Root Base] nguyên bản "quick" mặc thêm hậu tố "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base].</li>
			
					<li className="list-none">Chức năng: [quickly] - [Trạng Cơ][Adverb Base] bổ sung cách thức cho runs.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ khác</strong>: [softly]</p>
			
				<ul className="list-square">
			
					<li>She speaks [______].</li>
					<li className="margin-bottom-20 list-none">Cô ấy nói [nhẹ nhàng].</li>
			
					<li className="list-none">Hình thái: [softly] - [Diện Cơ][Modified Base] hình thành từ khối [Rễ Cơ][Root Base] nguyên bản "soft" mặc thêm hậu tố "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base].</li>
			
					<li className="list-none">Chức năng: [softly] - [Trạng Cơ][Adverb Base] bổ sung cách thức cho speaks.</li>
			
				</ul>

			


			{/* 2.  */}

			<h3 className="margin-y-50 text-center">II. Cấp độ CỤM – một khối, chưa có cặp chủ‑vị</h3>

			<p>Một [<strong>Động Cụm</strong>][<strong>Verb Phrase</strong>] (Động Cơ + các thành phần đi kèm) có thể mang ba chức năng.</p>


			<h4 className="margin-y-40">4. [Danh Cụm][Noun Phrase]</h4>

			<p className="text-indent-whole"><strong>Ví dụ</strong>: [To learn a new language]</p>
			
				<ul className="list-square">
			
					<li>[______] takes time.</li>
					<li className="margin-bottom-20 list-none">[Học một ngôn ngữ mới] cần thời gian.</li>
			
					<li className="list-none">Hình thái: [To learn a new language] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] dạng to-V.</li>
			
					<li className="list-none">Chức năng: [To learn a new language] - [Danh Cụm][Noun Phrase] đứng đầu câu, chỉ một việc.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ khác</strong>: [Getting up early]</p>
			
				<ul className="list-square">
			
					<li>[______] is good for health.</li>
					<li className="margin-bottom-20 list-none">[Dậy sớm] tốt cho sức khỏe.</li>
			
					<li className="list-none">Hình thái: [Getting up early] - [Tiếp Động Cụm][Progressive Verb Phrase] dạng V-ing.</li>
			
					<li className="list-none">Chức năng: [Getting up early] - [Danh Cụm][Noun Phrase] đứng đầu câu, chỉ một thói quen.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">5. [Tính Cụm][Adjective Phrase]</h4>

			<p className="text-indent-whole"><strong>Ví dụ</strong>: [sleeping peacefully]</p>
			
				<ul className="list-square">
			
					<li>The baby is [______].</li>
					<li className="margin-bottom-20 list-none">Em bé đang [ngủ yên bình].</li>
			
					<li className="list-none">Hình thái: [sleeping peacefully] - [Tiếp Động Cụm][Progressive Verb Phrase] gồm động cơ chính sleeping và trạng cụm peacefully.</li>
			
					<li className="list-none">Chức năng: [sleeping peacefully] - [Tính Cụm][Adjective Phrase] miêu tả trạng thái của the baby.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ khác</strong>: [to be tired]</p>
			
				<ul className="list-square">
			
					<li>She seems [______].</li>
					<li className="margin-bottom-20 list-none">Cô ấy có vẻ [mệt].</li>
			
					<li className="list-none">Hình thái: [to be tired] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] dạng to-V.</li>
			
					<li className="list-none">Chức năng: [to be tired] - [Tính Cụm][Adjective Phrase] bổ sung cho she.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">6. [Trạng Cụm][Adverb Phrase]</h4>

			<p className="text-indent-whole"><strong>Ví dụ</strong>: [to earn money]</p>
			
				<ul className="list-square">
			
					<li>He works hard [______].</li>
					<li className="margin-bottom-20 list-none">Anh ấy làm việc chăm chỉ [để kiếm tiền].</li>
			
					<li className="list-none">Hình thái: [to earn money] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] dạng to-V chỉ mục đích.</li>
			
					<li className="list-none">Chức năng: [to earn money] - [Trạng Cụm][Adverb Phrase] bổ sung mục đích cho works hard.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ khác</strong>: [to catch the bus]</p>
			
				<ul className="list-square">
			
					<li>She left [______].</li>
					<li className="margin-bottom-20 list-none">Cô ấy rời đi [để bắt xe buýt].</li>
			
					<li className="list-none">Hình thái: [to catch the bus] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] dạng to-V.</li>
			
					<li className="list-none">Chức năng: [to catch the bus] - [Trạng Cụm][Adverb Phrase] bổ sung mục đích cho left.</li>
			
				</ul>
			


			{/* 3.  */}

			<h3 className="margin-y-50 text-center">III. Cấp độ CÂU – câu con có đủ cặp chủ‑vị, không đứng một mình</h3>

			<p>Một <strong>Động Câu</strong> [<strong>Verb Clause</strong>] (có cặp chủ – vị hoàn chỉnh) có thể mang ba chức năng.</p>


			<h4 className="margin-y-40">7. [Danh Câu][Noun Clause]</h4>
					
			<p className="text-indent-whole"><strong>Ví dụ</strong>: [What she said]</p>
			
				<ul className="list-square">
			
					<li>[______] shocked me.</li>
					<li className="margin-bottom-20 list-none">[Những gì cô ấy nói] làm tôi sốc.</li>
			
					<li className="list-none">Hình thái: [What she said] - [Hiển-Liên Động Câu][Connector Verb Clause] có she và said.</li>
			
					<li className="list-none">Chức năng: [What she said] - [Danh Câu][Noun Clause] đứng đầu câu, chỉ một nội dung.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ khác</strong>: [that you are right]</p>
			
				<ul className="list-square">
			
					<li>I believe [______].</li>
					<li className="margin-bottom-20 list-none">Tôi tin [rằng bạn đúng].</li>
			
					<li className="list-none">Hình thái: [that you are right] - [Hiển-Liên Động Câu][Connector Verb Clause] có you và are.</li>
			
					<li className="list-none">Chức năng: [that you are right] - [Danh Câu][Noun Clause] làm đối tượng cho believe.</li>
			
				</ul>
			


			<h4 className="margin-y-40">8. [Tính Câu][Adjective Clause]</h4>

			<p className="text-indent-whole"><strong>Ví dụ</strong>: [who helped me]</p>
			
				<ul className="list-square">
			
					<li>The man [______] is my friend.</li>
					<li className="margin-bottom-20 list-none">Người đàn ông [đã giúp tôi] là bạn tôi.</li>
			
					<li className="list-none">Hình thái: [who helped me] - [Hiển-Liên Động Câu][Connector Verb Clause] có who và helped.</li>
			
					<li className="list-none">Chức năng: [who helped me] - [Tính Câu][Adjective Clause] bổ sung cho the man.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ khác</strong>: [that I borrowed]</p>
			
				<ul className="list-square">
			
					<li>The book [______] is great.</li>
					<li className="margin-bottom-20 list-none">Cuốn sách [mà tôi mượn] rất hay.</li>
			
					<li className="list-none">Hình thái: [that I borrowed] - [Hiển-Liên Động Câu][Connector Verb Clause] có I và borrowed.</li>
			
					<li className="list-none">Chức năng: [that I borrowed] - [Tính Câu][Adjective Clause] bổ sung cho the book.</li>
			
				</ul>
			


			<h4 className="margin-y-40">9. [Trạng Câu][Adverb Clause]</h4>

			<p className="text-indent-whole"><strong>Ví dụ</strong>: [Because it rained]</p>
			
				<ul className="list-square">
			
					<li>[______], we stayed home.</li>
					<li className="margin-bottom-20 list-none">[Vì trời mưa], chúng tôi ở nhà.</li>
			
					<li className="list-none">Hình thái: [Because it rained] - [Hiển-Liên Động Câu][Connector Verb Clause] có it và rained.</li>
			
					<li className="list-none">Chức năng: [Because it rained] - [Trạng Câu][Adverb Clause] chỉ nguyên nhân cho stayed home</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ khác</strong>: [When you arrive]</p>
			
				<ul className="list-square">
			
					<li>[______], call me.</li>
					<li className="margin-bottom-20 list-none">[Khi bạn đến], hãy gọi tôi.</li>
			
					<li className="list-none">Hình thái: [When you arrive] - [Hiển-Liên Động Câu][Connector Verb Clause] có you và arrive.</li>
			
					<li className="list-none">Chức năng: [When you arrive] - [Trạng Câu][Adverb Clause] chỉ thời gian cho call me.</li>
			
				</ul>
			



			<h4 className="margin-y-40">Mở rộng: [Danh Cụm][Noun Phrase]</h4>

			<p className="text-indent-whole">Đôi khi bạn thấy một [Động Cụm] bên ngoài bao bọc một {'{Động Câu}'} bên trong. Cả hai tầng đều làm việc Danh, nhưng khác cấp độ.</p>
			

			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ</strong>: [knows {'{what you did}'}]</p>
			
				<ul className="list-square">
			
					<li>She [______].</li>
					<li className="margin-bottom-20 list-none">Cô ấy [biết {'{những gì bạn đã làm}'}].</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Hình thái:</p>
			
				<ul className="list-square">
			
					<li>Toàn bộ [knows {'{what you did}'}'] - [Thuần Động Cụm][Bare Verb Phrase] tầng ngoài.</li>
					<li>{'{what you did}'} bên trong - [Hiển-Liên Động Câu][Connector Verb Clause] có you và did.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Chức năng:</p>
			
				<ul className="list-square">
			
					<li>{'{what you did}'} - [Danh Câu][Noun Clause] làm đối tượng cho knows.</li>
					<li>Toàn bộ [knows {'{what you did}'}] - [Danh Cụm][Noun Phrase] làm một khối hoàn chỉnh gắn với She.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Ký hiệu: [] cho [Động Cụm] → Chức năng Danh Cụm. {} cho [Động Câu] → Chức năng Danh Câu.</p>

			


			{/* 4.  */}

			<h3 className="margin-y-50 text-center">Paraphrasing – Thay khối cùng chức năng</h3>

			<p>Khi đã nhận diện được Hình thái và Chức năng, bạn có thể viết lại câu bằng cách <strong>thay một khối này bằng một khối khác cùng chức năng</strong> (cùng Danh, cùng Tính hoặc cùng Trạng), không cần thay đổi cấu trúc câu lớn.</p>

			<h4 className="margin-y-40">Paraphrasing với chức năng Danh</h4>
					
			<p className="text-indent-whole"><strong>Câu gốc</strong> – <strong>dùng Danh Cơ</strong>: [Swimming]</p>
			
				<ul className="list-square">
			
					<li>[______] is healthy.</li>
					<li className="margin-bottom-20 list-none">[Bơi lội] thì tốt cho sức khỏe.</li>
			
					<li className="list-none">Hình thái: [Swimming] - [Tiếp Động Cơ][Progressive Verb Base] bắt đầu từ [Động Cơ] nguyên bản thêm -ing.</li>
			
					<li className="list-none">Chức năng: [Swimming] - [Danh Cơ][Noun Base] đứng đầu câu, chỉ một hoạt động.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Thay bằng Danh Cụm</strong> (<strong>cùng chức năng Danh</strong>): [To swim every day]</p>
			
				<ul className="list-square">
			
					<li>[______] is healthy.</li>
					<li className="margin-bottom-20 list-none">[Bơi mỗi ngày] thì tốt cho sức khỏe.</li>
			
					<li className="list-none">Hình thái: [To swim every day] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] dạng to-V.</li>
			
					<li className="list-none">Chức năng: [To swim every day] - [Danh Cụm][Noun Phrase] đứng đầu câu, chỉ một việc.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Thay bằng Danh Câu</strong> (<strong>cùng chức năng Danh</strong>): [That you swim regularly]</p>
			
				<ul className="list-square">
			
					<li>[______] is healthy.</li>
					<li className="margin-bottom-20 list-none">[Việc bạn bơi thường xuyên] thì tốt cho sức khỏe.</li>
			
					<li className="list-none">Hình thái: [That you swim regularly] - [Hiển-Liên Động Câu][Connector Verb Clause] có you và swim.</li>
			
					<li className="list-none">Chức năng: [That you swim regularly] - [Danh Câu][Noun Clause] đứng đầu câu, chỉ một sự việc.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Cả ba câu đều đúng và giữ nguyên ý chính.</p>


			<h4 className="margin-y-40">Paraphrasing với chức năng Tính</h4>

			<p className="text-indent-whole"><strong>Câu gốc</strong> – <strong>dùng Tính Cơ</strong>: [exciting]</p>
			
				<ul className="list-square">
			
					<li>The movie is [______].</li>
					<li className="margin-bottom-20 list-none">Bộ phim thì [thú vị].</li>
			
					<li className="list-none">Hình thái: [exciting] - [Tiếp Động Cơ][Progressive Verb Base] bắt đầu từ [Động Cơ] nguyên bản dạng -ing.</li>
			
					<li className="list-none">Chức năng: [exciting] - [Tính Cơ][Adjective Base] miêu tả the movie.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Thay bằng Tính Cụm</strong> (<strong>cùng chức năng Tính</strong>): [really exciting]</p>
			
				<ul className="list-square">
			
					<li>The movie is [______].</li>
					<li className="margin-bottom-20 list-none">Bộ phim thì [rất thú vị].</li>
			
					<li className="list-none">Hình thái: [really exciting] - [Tính Cụm][Adjective Phrase] gồm trạng cơ really và tính cơ exciting.</li>
			
					<li className="list-none">Chức năng: [really exciting] - [Tính Cụm][Adjective Phrase] miêu tả the movie.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Thay bằng Tính Câu</strong> (<strong>cùng chức năng Tính</strong>): [what everyone calls exciting]</p>
			
				<ul className="list-square">
			
					<li>The movie is [______].</li>
					<li className="margin-bottom-20 list-none">Bộ phim là [điều mọi người gọi là thú vị].</li>
			
					<li className="list-none">Hình thái: [what everyone calls exciting] - [Hiển-Liên Động Câu][Connector Verb Clause] có everyone và calls.</li>
			
					<li className="list-none">Chức năng: [what everyone calls exciting] - [Tính Câu][Adjective Clause] miêu tả the movie.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Lại một phép thay thế thành công.</p>


			<h4 className="margin-y-40">Paraphrasing với chức năng Trạng</h4>

			<p className="text-indent-whole"><strong>Câu gốc</strong> – <strong>dùng Trạng Cơ</strong>: [carefully]</p>
			
				<ul className="list-square">
			
					<li>He drives [______].</li>
					<li className="margin-bottom-20 list-none">Anh ấy lái xe [cẩn thận].</li>
			
					<li className="list-none">Hình thái: [carefully] - [Diện Cơ][Modified Base] hình thành từ khối [Rễ Cơ][Root Base] nguyên bản "care" mặc thêm hậu tố "-ful" và "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base].</li>
			
					<li className="list-none">Chức năng: [carefully] - [Trạng Cơ][Adverb Base] bổ sung cách thức cho drives.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Thay bằng Trạng Cụm</strong> (<strong>cùng chức năng Trạng</strong>): [with great care]</p>
			
				<ul className="list-square">
			
					<li>He drives [______].</li>
					<li className="margin-bottom-20 list-none">Anh ấy lái xe [với sự cẩn thận lớn].</li>
			
					<li className="list-none">Hình thái: [with great care] - [Trạng Cụm][Adverb Phrase] dạng giới từ cụm.</li>
			
					<li className="list-none">Chức năng: [with great care] - [Trạng Cụm][Adverb Phrase] bổ sung cách thức cho drives.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Thay bằng Trạng Câu</strong> (<strong>cùng chức năng Trạng</strong>): [as if he were taking a test]</p>
			
				<ul className="list-square">
			
					<li>He drives [______].</li>
					<li className="margin-bottom-20 list-none">Anh ấy lái xe [như thể đang thi].</li>
			
					<li className="list-none">Hình thái: [as if he were taking a test] - [Hiển-Liên Động Câu][Connector Verb Clause] có he và were taking.</li>
			
					<li className="list-none">Chức năng: [as if he were taking a test] - [Trạng Câu][Adverb Clause] bổ sung cách thức cho drives.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Cả ba vẫn diễn tả “cách lái xe cẩn thận”.</p>
			
			


			{/* 5.  */}

			<h3 className="margin-y-50 text-center">Quy luật của hệ thống Cơ – Cụm – Câu</h3>

			<p className="margin-top-20"></p>
			
				<ul className="list-square">
			
					<li>Mọi đơn vị đều nằm trong lưới 3 chức năng × 3 cấp độ.</li>
			
					<li>Mỗi đơn vị có Hình thái (Động Cơ / [Động Cụm] / Động Câu) và Chức năng (Danh / Tính / Trạng). Hình thái được xác định qua dấu hiệu bên ngoài; Chức năng được suy ra từ vị trí trong câu lớn.</li>
			
					<li>Paraphrasing đơn giản là thay một khối bằng một khối khác cùng chức năng – giữ nguyên khung câu, chỉ thay phần bên trong.</li>
			
				</ul>
			

			

			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">Lời kết:</h3>

			<p>Hãy tập thói quen: khi gặp một câu, hãy <strong>đặt các khối vào</strong> [], xác định Hình thái của chúng (Động Cơ / [Động Cụm] / Động Câu), sau đó suy ra Chức năng (Danh / Tính / Trạng). Rồi thử thay khối đó bằng một khối khác cùng chức năng – bạn đã biết cách viết lại câu một cách thông minh.</p>

			<p><strong>Cơ</strong> – <strong>Cụm</strong> – <strong>Câu</strong> biến câu văn thành trò chơi xếp hình với ba màu (Danh, Tính, Trạng) và ba kích thước (Cơ, Cụm, Câu). Hãy chia sẻ để bạn bè cùng khám phá nhé! 🇻🇳</p>


			<hr className="hr-short"/>

			<div className="post-date no-margin">
				<span>
					Bài viết xây dựng dựa trên hệ thống “Cơ – Cụm – Câu” của [tên bạn/cộng đồng]. Khi chia sẻ, vui lòng ghi nguồn blog [tên blog].
				</span>
			</div>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 23, 2026 · by DPSK and 🐝Mr. Bee Osn ·</span>
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