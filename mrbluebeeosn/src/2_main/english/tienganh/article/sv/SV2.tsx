import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SV2(): React.JSX.Element {

	const postId = "SV2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">SV
												
				<sup><HashLink smooth to="/tieng-anh/s-v-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/s-v-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				{/* <sup><HashLink smooth to="/tieng-anh/s-v-3">&nbsp;3&nbsp;</HashLink>
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

			<h4 className="margin-bottom-30 text-center">HỆ THUẬT NGỮ "CƠ – CỤM – CÂU" TRONG TIẾNG ANH</h4>

			<p>Bạn từng nghĩ viết lại câu (paraphrasing) là phải thay đổi cả cấu trúc?</p>

			<p>Thực ra, khi đã nhận diện được Hình thái (Động Cơ / Động Cụm / Động Câu / Giới Cụm) và Chức năng (Danh / Tính / Trạng) của từng khối, paraphrase trở thành bài toán đơn giản: thay một khối bằng một khối khác có cùng Chức năng. Câu vẫn đúng, ý nghĩa không đổi.</p>
			
			<p>Dưới đây là toàn bộ hệ thống, từ ba cấp độ cơ bản đến kỹ thuật paraphrase linh hoạt, với ví dụ minh họa theo đúng mẫu.</p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. NGUYÊN LÝ NỀN TẢNG: HÌNH THÁI TRƯỚC, CHỨC NĂNG SAU</h3>

			<p className="margin-top-20">Mọi đơn vị trong câu đều được xây dựng từ Hình thái:</p>
			
				<ul className="list-square">
			
					<li>Động Cơ [Verb Base]</li>
					<li className="margin-bottom-20 list-none">Dạng gốc của hành động hoặc trạng thái, không kèm theo bất kỳ dấu hiệu nào về thời điểm.</li>
			
					<li>Động Cụm [Verb Phrase]</li>
					<li className="margin-bottom-20 list-none">Nhóm từ bắt đầu bằng động cơ, có thể kèm thêm các thành phần bổ sung.</li>

					<li>Giới Cụm [Prepositional Phrase]</li>
					<li className="margin-bottom-20 list-none">Nhóm từ bắt đầu bằng một thành phần chỉ quan hệ không gian, thời gian, cách thức, mục đích, nguyên nhân (như in, on, at, for, with, by, of, to,...).</li>
			
					<li>Động Câu [Verb Clause]</li>
					<li className="list-none">Một câu con có đầy đủ một thành phần thực hiện hành động và một động cơ.</li>
			
				</ul>
			
			<p className="margin-top-20"></p>

			<p className="margin-top-20">Từ những hình thái này, sau khi được "đóng gói" hoặc biến đổi, chúng đảm nhận một trong ba Chức năng – tùy vào vị trí trong câu lớn:</p>
			
				<ul className="list-square">
			
					<li>Chức năng Danh</li>
					<li className="margin-bottom-20 list-none">Đứng ở đầu câu, hoặc sau một động cơ, hoặc sau một động cơ liên kết để đóng vai trò thực thể trung tâm hoặc Danh Nhận (đối tượng nhận tác động của hành động).</li>
			
					<li>Chức năng Tính</li>
					<li className="margin-bottom-20 list-none">Đứng trước hoặc sau một [Danh Cơ] để bổ sung đặc điểm cho thực thể đó.</li>
			
					<li>Chức năng Trạng</li>
					<li className="list-none">Bổ nghĩa cho một động cơ, một [Tính Cơ], hoặc toàn bộ câu.</li>
			
				</ul>
			

			<p className="margin-top-20">Hai câu hỏi thần chú:</p>
			
				<ol>
			
					<li>Hình thái của nó là Động Cơ, Động Cụm, Giới Cụm hay Động Câu?</li>
			
					<li>Nó đang đứng ở vị trí nào? Đầu câu? Sau một [Danh Cơ]? Bên cạnh một động cơ?</li>
			
				</ol>
			
			<p className="margin-top-20">Từ đó suy ra Chức năng và gọi tên chính xác.</p>



			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. CHÍN THUẬT NGỮ CỦA HỆ THỐNG</h3>

			<p>Theo chiều dọc (ba cấp độ: Cơ – Cụm – Câu) và chiều ngang (ba chức năng: Danh – Tính – Trạng), ta có chín thuật ngữ ghép. Mỗi thuật ngữ đều có dạng tiếng Anh tương ứng:</p>
			
				<ul className="list-square">
			
					<li>Danh Cơ [Noun Base] – một động cơ đảm nhiệm chức năng danh.</li>
					<li>Danh Cụm [Noun Phrase] – một động cụm hoặc giới cụm đảm nhiệm chức năng danh.</li>
					<li className="margin-bottom-20">Danh Câu [Noun Clause] – một động câu đảm nhiệm chức năng danh.</li>

					<li>Tính Cơ [Adjective Base] – một động cơ đảm nhiệm chức năng tính.</li>
					<li>Tính Cụm [Adjective Phrase] – một động cụm hoặc giới cụm đảm nhiệm chức năng tính.</li>
					<li className="margin-bottom-20">Tính Câu [Adjective Clause] – một động câu đảm nhiệm chức năng tính.</li>

					<li>Trạng Cơ [Adverb Base] – một động cơ đảm nhiệm chức năng trạng.</li>
					<li>Trạng Cụm [Adverb Phrase] – một động cụm hoặc giới cụm đảm nhiệm chức năng trạng.</li>
					<li className="margin-bottom-20">Trạng Câu [Adverb Clause] – một động câu đảm nhiệm chức năng trạng.</li>
			
				</ul>

		
			

			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. VÍ DỤ MINH HỌA CHO TỪNG LOẠI (THEO MẪU)</h3>

			<h4 className="margin-y-40">3.1 Chức năng Danh</h4>

			<p className="text-indent-whole">Danh Cơ – Hình thái: Động Cơ</p>
			
				<ul className="list-square">
			
					<li>[Swimming] is my favorite activity.</li>
					<li className="margin-bottom-20 list-none">[Bơi lội] là hoạt động yêu thích của tôi.</li>
			
					<li className="list-none">Hình thái: [Swimming] – Động Cơ [Verb Base] dạng V-ing, biểu thị hành động được đóng gói thành một khái niệm.</li>
			
					<li className="list-none">Chức năng: [Swimming] – Danh Cơ [Noun Base] đứng ở đầu câu, đóng vai trò thực thể trung tâm mà câu hướng đến.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Danh Cụm – Hình thái: Động Cụm</p>
			
				<ul className="list-square">
			
					<li>He enjoys [reading mystery novels].</li>
					<li className="margin-bottom-20 list-none">Anh ấy thích [đọc tiểu thuyết trinh thám].</li>
			
					<li className="list-none">Hình thái: [reading mystery novels] – Động Cụm [Verb Phrase] bắt đầu bằng động cơ reading dạng V-ing, kèm thêm mystery novels để tạo thành một khối hoàn chỉnh.</li>
			
					<li className="list-none">Chức năng: [reading mystery novels] – Danh Cụm [Noun Phrase] đứng sau động cơ enjoys, là Danh Nhận – đối tượng tiếp nhận hành động.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Danh Câu – Hình thái: Động Câu</p>
			
				<ul className="list-square">
			
					<li>[How she solved the puzzle] amazed everyone.</li>
					<li className="margin-bottom-20 list-none">[Cách cô ấy giải câu đố] làm mọi người kinh ngạc.</li>
			
					<li className="list-none">Hình thái: [How she solved the puzzle] – Động Câu [Verb Clause] có một thành phần thực hiện hành động là she, động cơ solved ở dạng có đuôi -ed, và the puzzle.</li>
			
					<li className="list-none">Chức năng: [How she solved the puzzle] – Danh Câu [Noun Clause] đứng ở đầu câu, đảm nhận vai trò thực thể gây ra trạng thái amazed.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">3.2 Chức năng Tính</h4>

			<p className="text-indent-whole">Tính Cơ – Hình thái: Động Cơ</p>
			
				<ul className="list-square">
			
					<li>We saw a [shining] star.</li>
					<li className="margin-bottom-20 list-none">Chúng tôi thấy một ngôi sao [lấp lánh].</li>
			
					<li className="list-none">Hình thái: [shining] – Động Cơ [Verb Base] dạng V-ing, miêu tả trạng thái đang diễn ra.</li>
			
					<li className="list-none">Chức năng: [shining] – Tính Cơ [Adjective Base] đứng trước star, bổ sung đặc điểm cho thực thể star.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Tính Cụm – Hình thái: Động Cụm</p>
			
				<ul className="list-square">
			
					<li>The child seems [exhausted from playing].</li>
					<li className="margin-bottom-20 list-none">Đứa trẻ có vẻ [kiệt sức vì chơi].</li>
			
					<li className="list-none">Hình thái: [exhausted from playing] – Động Cụm [Verb Phrase] gồm động cơ exhausted dạng có đuôi -ed và phần bổ sung from playing.</li>
			
					<li className="list-none">Chức năng: [exhausted from playing] – Tính Cụm [Adjective Phrase] đứng sau động cơ seems, mô tả trạng thái của thực thể The child.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Tính Câu – Hình thái: Động Câu</p>
			
				<ul className="list-square">
			
					<li>The café [where we first met] has closed.</li>
					<li className="margin-bottom-20 list-none">Quán cà phê [nơi chúng tôi gặp nhau lần đầu] đã đóng cửa.</li>
			
					<li className="list-none">Hình thái: [where we first met] – Động Câu [Verb Clause] có we là thành phần thực hiện hành động, met là động cơ dạng có đuôi -ed, first là thành phần bổ sung.</li>
			
					<li className="list-none">Chức năng: [where we first met] – Tính Câu [Adjective Clause] đứng ngay sau The café, xác định rõ thực thể đang được nói đến.</li>
			
				</ul>
			
			


			<h4 className="margin-y-40">3.3 Chức năng Trạng</h4>

			<p className="text-indent-whole">Trạng Cơ – Hình thái: Động Cơ</p>
			
				<ul className="list-square">
			
					<li>He spoke [calmly].</li>
					<li className="margin-bottom-20 list-none">Anh ấy nói [một cách bình tĩnh].</li>
			
					<li className="list-none">Hình thái: [calmly] – Động Cơ [Verb Base] gốc calm thêm đuôi -ly, chuyển hóa thành thành phần chỉ cách thức.</li>
			
					<li className="list-none">Chức năng: [calmly] – Trạng Cơ [Adverb Base] đứng cạnh động cơ spoke, bổ sung ý nghĩa về cách thức thực hiện hành động.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Trạng Cụm – Hình thái: Động Cụm</p>
			
				<ul className="list-square">
			
					<li>She saves money [to travel abroad].</li>
					<li className="margin-bottom-20 list-none">Cô ấy tiết kiệm tiền [để đi du lịch nước ngoài].</li>
			
					<li className="list-none">Hình thái: [to travel abroad] – Động Cụm [Verb Phrase] gồm động cơ nguyên mẫu có to và abroad.</li>
			
					<li className="list-none">Chức năng: [to travel abroad] – Trạng Cụm [Adverb Phrase] đứng cuối câu, bổ sung ý nghĩa về mục đích cho hành động saves money.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Trạng Câu – Hình thái: Động Câu</p>
			
				<ul className="list-square">
			
					<li>[Although it was late], they continued working.</li>
					<li className="margin-bottom-20 list-none">[Mặc dù trời đã muộn], họ vẫn tiếp tục làm việc.</li>
			
					<li className="list-none">Hình thái: [Although it was late] – Động Câu [Verb Clause] có it là thành phần thực hiện hành động, was là động cơ, late là thành phần bổ sung.</li>
			
					<li className="list-none">Chức năng: [Although it was late] – Trạng Câu [Adverb Clause] đứng đầu câu, bổ sung ý nghĩa về sự nhượng bộ cho toàn bộ câu chính.</li>
			
				</ul>
			
			
			
			

			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. DANH CỤM PHÂN TẦNG (NESTED NOUN PHRASE)</h3>

			<p>Khi một Động Cụm bên ngoài bao bọc bên trong một Động Câu, ta có cấu trúc phân tầng. Lớp ngoài mang chức năng Danh Cụm, lớp trong mang chức năng Danh Câu.</p>
			
				<ul className="list-square">
			
					<li>She [forgot {'{why I called her}'}].</li>
					<li className="margin-bottom-20 list-none">Cô ấy [quên {'{tại sao tôi gọi cho cô ấy}'}].</li>
			
					<li className="list-none">Hình thái lớp trong: {'{why I called her}'} – Động Câu [Verb Clause] có I là thành phần thực hiện hành động, called là động cơ dạng có đuôi -ed, her là đối tượng.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng lớp trong: {'{why I called her}'} – Danh Câu [Noun Clause] đóng vai trò là khối thông tin bên trong, được bao bọc bởi lớp ngoài.</li>

					<li className="list-none">Hình thái lớp ngoài: [forgot {'{why I called her}'}] – Động Cụm [Verb Phrase] bắt đầu bằng động cơ forgot dạng có đuôi -ed, bao trọn động câu bên trong.</li>
			
					<li className="list-none">Chức năng lớp ngoài: [forgot {'{why I called her}'}] – Danh Cụm [Noun Phrase] toàn bộ khối này nằm sau She, là Danh Nhận – đối tượng mà hành động forgot hướng đến.</li>
			
				</ul>
			
			

			

			{/* 5.  */}

			<h3 className="margin-y-50 text-center">5. PARAPHRASING – THAY KHỐI CÙNG CHỨC NĂNG</h3>

			<p>Khi đã thuần thục nhận diện Hình thái và Chức năng, paraphrase trở thành bài toán thay thế một khối bằng một khối khác có cùng Chức năng – không cần thay đổi cấu trúc tổng thể, không cần cùng Hình thái.</p>

			<h4 className="margin-y-40">Ví dụ 1: Thay Danh Cơ bằng Danh Cụm</h4>

			<p className="text-indent-whole">Câu gốc:</p>
			
				<ul className="list-square">
			
					<li>[Jogging] is beneficial.</li>
					<li className="margin-bottom-20 list-none">[Chạy bộ] có lợi cho sức khỏe.</li>
			
					<li className="list-none">Hình thái: [Jogging] – Động Cơ [Verb Base] dạng V-ing.</li>
			
					<li className="list-none">Chức năng: [Jogging] – Danh Cơ [Noun Base] đứng ở đầu câu, là thực thể trung tâm.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Paraphrase (thay bằng Danh Cụm):</p>
			
				<ul className="list-square">
			
					<li>[Going for a jog every morning] is beneficial.</li>
					<li className="margin-bottom-20 list-none">[Đi chạy bộ mỗi sáng] có lợi cho sức khỏe.</li>
			
					<li className="list-none">Hình thái: [Going for a jog every morning] – Động Cụm [Verb Phrase].</li>
			
					<li className="list-none">Chức năng: [Going for a jog every morning] – Danh Cụm [Noun Phrase] vẫn đứng ở đầu câu, cùng vai trò thực thể trung tâm.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">Ví dụ 2: Thay Danh Cụm bằng Danh Câu</h4>

			<p className="text-indent-whole">Câu gốc:</p>
			
				<ul className="list-square">
			
					<li>I remember [his kindness].</li>
					<li className="margin-bottom-20 list-none">Tôi nhớ [lòng tốt của anh ấy].</li>
			
					<li className="list-none">Hình thái: [his kindness] – đây là một khối Danh Cơ thuần túy, không xuất phát từ động cơ.</li>
			
					<li className="list-none">Chức năng: [his kindness] – Danh Cơ [Noun Base] đứng sau động cơ remember, là Danh Nhận của hành động.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Paraphrase (thay bằng Danh Câu):</p>
			
				<ul className="list-square">
			
					<li>I remember [that he was kind to me].</li>
					<li className="margin-bottom-20 list-none">Tôi nhớ [rằng anh ấy đã tốt với tôi].</li>
			
					<li className="list-none">Hình thái: [that he was kind to me] – Động Câu [Verb Clause].</li>
			
					<li className="list-none">Chức năng: [that he was kind to me] – Danh Câu [Noun Clause] vẫn đứng sau động cơ remember, cùng chức năng Danh Nhận.</li>
			
				</ul>
			
			


			<h4 className="margin-y-40">Ví dụ 3: Thay Tính Câu bằng Tính Cụm (Có Giới Cụm)</h4>

			<p className="text-indent-whole">Câu gốc:</p>
			
				<ul className="list-square">
			
					<li>The student [who sits in the front row] always answers first.</li>
					<li className="margin-bottom-20 list-none">Học sinh [ngồi ở hàng ghế đầu] luôn trả lời đầu tiên.</li>
			
					<li className="list-none">Hình thái: [who sits in the front row] – Động Câu [Verb Clause] có thành phần thực hiện hành động là who, động cơ sits, và phần bổ sung in the front row.</li>
			
					<li className="list-none">Chức năng: [who sits in the front row] – Tính Câu [Adjective Clause] đứng ngay sau The student, bổ sung đặc điểm.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Paraphrase (thay bằng Tính Cụm):</p>
			
				<ul className="list-square">
			
					<li>The student [in the front row] always answers first.</li>
					<li className="margin-bottom-20 list-none">Học sinh [ở hàng ghế đầu] luôn trả lời đầu tiên.</li>
			
					<li className="list-none">Hình thái: [in the front row] – Giới Cụm [Prepositional Phrase], một cụm chỉ phạm vi không gian, bắt đầu bằng in.</li>
			
					<li className="list-none">Chức năng: [in the front row] – Tính Cụm [Adjective Phrase] vẫn đứng sau The student, cùng chức năng bổ sung đặc điểm.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">Ví dụ 4: Thay Trạng Cụm (Động Cụm) bằng Trạng Câu</h4>

			<p className="text-indent-whole">Câu gốc:</p>
			
				<ul className="list-square">
			
					<li>She called me [to share the good news].</li>
					<li className="margin-bottom-20 list-none">Cô ấy gọi cho tôi [để chia sẻ tin vui].</li>
			
					<li className="list-none">Hình thái: [to share the good news] – Động Cụm [Verb Phrase] dạng nguyên mẫu mục đích.</li>
			
					<li className="list-none">Chức năng: [to share the good news] – Trạng Cụm [Adverb Phrase] bổ sung ý nghĩa mục đích cho hành động called.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Paraphrase (thay bằng Trạng Câu):</p>
			
				<ul className="list-square">
			
					<li>She called me [so that she could share the good news].</li>
					<li className="margin-bottom-20 list-none">Cô ấy gọi cho tôi [để mà cô ấy có thể chia sẻ tin vui].</li>
			
					<li className="list-none">Hình thái: [so that she could share the good news] – Động Câu [Verb Clause].</li>
			
					<li className="list-none">Chức năng: [so that she could share the good news] – Trạng Câu [Adverb Clause] vẫn bổ sung ý nghĩa mục đích.</li>
			
				</ul>
			
			


			<h4 className="margin-y-40">Ví dụ 5: Thay Trạng Cơ bằng Trạng Cụm (Có Giới Cụm)</h4>

			<p className="text-indent-whole">Câu gốc:</p>
			
				<ul className="list-square">
			
					<li>He drives [carefully].</li>
					<li className="margin-bottom-20 list-none">Anh ấy lái xe [cẩn thận].</li>
			
					<li className="list-none">Hình thái: [carefully] – Động Cơ [Verb Base] thêm -ly.</li>
			
					<li className="list-none">Chức năng: [carefully] – Trạng Cơ [Adverb Base] bổ nghĩa cho động cơ drives.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Paraphrase (thay bằng Trạng Cụm):</p>
			
				<ul className="list-square">
			
					<li>He drives [with great care].</li>
					<li className="margin-bottom-20 list-none">Anh ấy lái xe [với sự cẩn thận lớn].</li>
			
					<li className="list-none">Hình thái: [with great care] – Giới Cụm [Prepositional Phrase], một cụm chỉ cách thức, bắt đầu bằng with.</li>
			
					<li className="list-none">Chức năng: [with great care] – Trạng Cụm [Adverb Phrase] vẫn bổ nghĩa cho động cơ drives.</li>
			
				</ul>
			


			{/* 6.  */}

			<h3 className="margin-y-50 text-center">6. PARAPHRASING LIÊN HOÀN – THAY NHIỀU KHỐI TRONG CÙNG CÂU</h3>

			<p>Câu gốc:</p>
			
				<ul className="list-square">
			
					<li>[That he finished the race] impressed [everyone].</li>
					<li className="margin-bottom-20 list-none">[Việc anh ấy hoàn thành cuộc đua] gây ấn tượng [mọi người].</li>

					<li className="list-none">Hình thái: [That he finished the race] – Động Câu [Verb Clause].</li>
					<li className="margin-bottom-20 list-none">Chức năng: [That he finished the race] – Danh Câu [Noun Clause] đứng ở đầu câu, là thực thể gây ra ấn tượng.</li>
			
					<li className="list-none">Hình thái: [everyone] – một khối Danh Cơ thuần túy.</li>
					<li className="list-none">Chức năng: [everyone] – Danh Nhận, nhận tác động của hành động impressed.</li>
			
				</ul>
			
			
			<p className="margin-top-20">Paraphrase lần 1 (thay Danh Câu bằng Danh Cụm):</p>
			
				<ul className="list-square">
			
					<li>[His finishing the race] impressed [everyone].</li>
					<li className="margin-bottom-20 list-none">[Việc anh ấy hoàn thành cuộc đua] gây ấn tượng [mọi người].</li>
			
					<li className="list-none">Hình thái: [His finishing the race] – Động Cụm [Verb Phrase].</li>
			
					<li className="list-none">Chức năng: [His finishing the race] – Danh Cụm [Noun Phrase] vẫn đứng đầu câu, cùng chức năng.</li>
			
				</ul>
			
			
			<p className="margin-top-20">Paraphrase lần 2 (thay Danh Nhận bằng Danh Cụm khác):</p>
			
				<ul className="list-square">
			
					<li>[His finishing the race] impressed [all the spectators].</li>
					<li className="margin-bottom-20 list-none">[Việc anh ấy hoàn thành cuộc đua] gây ấn tượng [tất cả khán giả].</li>
			
					<li className="list-none">Hình thái: [all the spectators] – một khối Danh Cụm.</li>
			
					<li className="list-none">Chức năng: [all the spectators] – Danh Cụm [Noun Phrase] vẫn đứng sau động cơ impressed, là Danh Nhận – nhận tác động của hành động.</li>
			
				</ul>
			
			
			<p className="margin-top-20">Cả ba câu đều có cấu trúc:</p>

			<p>[Khối chức năng Danh - thực thể gây tác động] + impressed + [Khối chức năng Danh - Danh Nhận]. Việc paraphrase chỉ là thay thế các khối cùng Chức năng.</p>

			

			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">7. KẾT LUẬN – PARAPHRASING LÀ TRÒ CHƠI THAY KHỐI CÙNG CHỨC NĂNG</h3>

			<p>Hệ thống Cơ – Cụm – Câu và việc phân biệt rõ Hình thái (Động Cơ, Động Cụm, Giới Cụm, Động Câu) với Chức năng Danh / Tính / Trạng không chỉ giúp người học hiểu sâu cấu trúc câu. Nó còn biến paraphrase thành một thao tác đơn giản, có thể thực hành một cách có ý thức:</p>
			
				<ul className="list-square">
			
					<li>Bước 1:</li>
					<li className="margin-bottom-20 list-none">Xác định khối cần thay – nó đang mang Chức năng gì? Danh, Tính hay Trạng?</li>
			
					<li>Bước 2:</li>
					<li className="margin-bottom-20 list-none">Chọn một khối khác (có Hình thái bất kỳ: Động Cơ, Động Cụm, Giới Cụm, hay Động Câu) nhưng phải đảm bảo cùng Chức năng.</li>
			
					<li>Bước 3:</li>
					<li className="list-none">Thế vào vị trí cũ, giữ nguyên phần còn lại của câu.</li>
			
				</ul>
			
			<p className="margin-top-20">Không cần thay đổi cấu trúc tổng thể. Không cần sợ sai. Chỉ cần nắm vững hai câu hỏi: Hình thái là gì? Chức năng là gì?</p>


			<p>Khi đã thành thạo, bạn sẽ thấy mọi câu tiếng Anh đều là những khối [ ] lồng vào nhau, và paraphrase chỉ là trò chơi "thay khối cùng màu chức năng".</p>

			{/* <hr className="hr-short"/> */}

			{/* <p><strong>Tác giả</strong>: [Tên bạn / Blog của bạn]</p>

			<p><strong>Ngày đăng</strong>: [Thêm ngày]</p> */}

			{/* <p><strong>Ghi chú</strong>: Hệ thống thuật ngữ và phương pháp paraphrase này được phát triển dựa trên nguyên lý Hình thái – Chức năng, nhằm tối ưu hóa khả năng tư duy linh hoạt cho người học tiếng Anh. Bạn được khuyến khích sao chép, thực hành và chia sẻ.</p> */}
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 23, 2026 · by 💎Gem and 🐝Mr. Bee Osn ·</span>
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