import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ThreeDC2(): React.ReactElement {

	const postId = "ThreeDC2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Three DC
												
				<sup><HashLink smooth to="/tieng-anh/three-dc-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				{/* <sup><HashLink smooth to="/tieng-anh/three-dc-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-9">&nbsp;9&nbsp;</HashLink>
				</sup> */}

			</h1>

			<h4 className="margin-bottom-30 text-center">TIẾNG ANH QUA BA HÌNH THÁI – BA CHỨC NĂNG – VÀ CÁCH VIẾT LẠI CÂU BẰNG THAY KHỐI</h4>

			<p>Khi học tiếng Anh, bạn thường được dạy rất nhiều quy tắc rời rạc. Nhưng có một cách tiếp cận khác: nhìn mọi thứ trước hết qua hình thái, sau đó xác định chức năng.</p>

			<p>Khi đã quen, việc viết lại câu chỉ là thay một khối bằng một khối khác có cùng chức năng – giống như thay một viên gạch cùng loại trong bức tường.</p>
			
			<p>Hãy bắt đầu.</p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. BA HÌNH THÁI CỦA MỘT KHỐI</h3>

			<p>Bất kỳ nhóm từ nào cũng rơi vào một trong ba hình thái dưới đây. Hình thái cho bạn biết khối đó ở cấp độ Cơ, Cụm hay Câu.</p>

			<p className="margin-top-20">Ví dụ về từng hình thái:</p>
			
				<ul className="list-square">
			
					<li>[<strong>running</strong>]</li>
					<li className="margin-bottom-20 list-none">Hình thái: [running] - [Tiếp Động Cơ][Progressive Verb Base] một từ duy nhất ở dạng V-ing, không có chủ thể hay bổ túc kèm theo</li>
			
					<li>[<strong>eat an apple</strong>]</li>
					<li className="margin-bottom-20 list-none">Hình thái: [eat an apple] - [Thuần Động Cụm][Bare Verb Phrase] gồm [Động Cơ] [eat] và một tân thể [an apple], nhưng không có chủ thể riêng bên trong</li>
			
					<li>[<strong>that she sings well</strong>]</li>
					<li className="list-none">Hình thái: [that she sings well] - [Hiển-Liên Động Câu][Connector Verb Clause] có cặp chủ thể [she] và hành động [sings] bên trong, nhưng không thể đứng độc lập thành câu hoàn chỉnh</li>
			
				</ul>

			


			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. BA CHỨC NĂNG – DANH, TÍNH, TRẠNG</h3>

			<p>Một khối, khi được đặt vào một câu lớn, sẽ mang một trong ba chức năng. Dưới đây là cách xác định qua ví dụ.</p>


			<h4 className="margin-y-40">A. CHỨC NĂNG DANH</h4>
					
			<p className="text-indent-whole">Khối có chức năng Danh đóng vai trò như một Danh Cơ: nó có thể đứng đầu câu (là cái được nói đến), hoặc đứng sau một [Động Cơ] (là cái nhận tác động), hoặc đứng sau [<strong>is</strong>] (là bản chất).</p>


			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ Cơ</strong> – [<strong>Danh Cơ</strong>][<strong>Noun Base</strong>]: [Running]</p>
			
				<ul className="list-square">
			
					<li>[______] is fun.</li>
					<li className="margin-bottom-20 list-none">[Chạy bộ] thì vui.</li>
			
					<li className="list-none">Hình thái: [Running] - [Tiếp Động Cơ][Progressive Verb Base] một từ ở dạng V-ing, không có gì kèm theo</li>
			
					<li className="list-none">Chức năng: [Running] - [Danh Cơ][Noun Base] đứng đầu câu, là cái được khẳng định là [is fun]</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ Cụm</strong> – [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>]: [to read mystery novels]</p>
			
				<ul className="list-square">
			
					<li>She loves [______].</li>
					<li className="margin-bottom-20 list-none">Cô ấy thích [đọc tiểu thuyết trinh thám].</li>
			
					<li className="list-none">Hình thái: [to read mystery novels] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] gồm [to read] và tân thể [mystery novels]</li>
			
					<li className="list-none">Chức năng: [to read mystery novels] - [Danh Cụm][Noun Phrase] là đối tượng trực tiếp của [Động Cơ] [loves], cái mà hành động yêu thích hướng đến</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ Câu</strong> – [<strong>Danh Câu</strong>][<strong>Noun Clause</strong>]: [That you forgot my birthday]</p>
			
				<ul className="list-square">
			
					<li>[______] upset me.</li>
					<li className="margin-bottom-20 list-none">[Việc bạn quên sinh nhật tôi] làm tôi buồn.</li>
			
					<li className="list-none">Hình thái: [That you forgot my birthday] - [Hiển-Liên Động Câu][Connector Verb Clause] có cặp [you] và [forgot] bên trong</li>
			
					<li className="list-none">Chức năng: [That you forgot my birthday] - [Danh Câu][Noun Clause] đứng đầu câu, là toàn bộ sự kiện gây ra tác động [upset me]</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ đặc biệt</strong> – <strong>Danh Cụm phân tầng</strong> (khối ngoài [ ... ], khối trong {'{ ... }'}): [ heard {'{ that she had won }'} ]</p>
			
				<ul className="list-square">
			
					<li>We [ ______ ].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi [ nghe {'{ rằng cô ấy đã thắng }'} ].</li>
			
					<li className="list-none">Hình thái khối ngoài: [ heard {'{ ... }'} ] - [Tầng Động Cụm][Tiered Verb Phrase] gồm [Động Cơ] [heard] và một khối bên trong</li>
			
					<li className="margin-bottom-20 list-none">Hình thái khối trong: {'{ that she had won }'} - [Hiển-Liên Động Câu][Connector Verb Clause] có cặp [she] và [had won]</li>

					<li className="list-none">Chức năng khối trong: {'{ that she had won }'} - [Danh Câu][Noun Clause] là nội dung của hành động nghe</li>
			
					<li className="list-none">Chức năng khối ngoài: toàn bộ [ heard {'{ ... }'} ] - [Danh Cụm][Noun Phrase] là đối tượng trực tiếp của [Động Cơ] [heard], chịu tác động từ chủ thể [We]</li>
			
				</ul>

			


			<h4 className="margin-y-40">B. CHỨC NĂNG TÍNH</h4>
					
			<p className="text-indent-whole">Khối có chức năng Tính bổ nghĩa cho một [Danh Cơ] đứng ngay trước nó, giống như một [Tính Cơ] mở rộng.</p>


			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ Cơ</strong> – [<strong>Tính Cơ</strong>][<strong>Adjective Base</strong>]: [warm]</p>
			
				<ul className="list-square">
			
					<li>She has a [______] smile.</li>
					<li className="margin-bottom-20 list-none">Cô ấy có nụ cười [ấm áp].</li>
			
					<li className="list-none">Hình thái: [warm] - [Động Cơ][Verb Base] một từ chỉ tính chất</li>
			
					<li className="list-none">Chức năng: [warm] - [Tính Cơ][Adjective Base] đứng trước [Danh Cơ] [smile] để mô tả đặc điểm của nụ cười</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ Cụm</strong> – [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>]: [wearing a red cap]</p>
			
				<ul className="list-square">
			
					<li>The boy [______] is my brother.</li>
					<li className="margin-bottom-20 list-none">Cậu bé [đội mũ đỏ] là em trai tôi.</li>
			
					<li className="list-none">Hình thái: [wearing a red cap] - [Tiếp Động Cụm][Progressive Verb Phrase] dạng V-ing kèm tân thể [a red cap]</li>
			
					<li className="list-none">Chức năng: [wearing a red cap] - [Tính Cụm][Adjective Phrase] bổ nghĩa cho [Danh Cơ] [The boy], xác định cậu bé nào</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ Câu</strong> – [<strong>Tính Câu</strong>][<strong>Adjective Clause</strong>]: [which I dropped yesterday]</p>
			
				<ul className="list-square">
			
					<li>The laptop [______] still works.</li>
					<li className="margin-bottom-20 list-none">Chiếc laptop [mà tôi làm rơi hôm qua] vẫn chạy.</li>
			
					<li className="list-none">Hình thái: [which I dropped yesterday] - [Hiển-Liên Động Câu][Connector Verb Clause] có cặp [I] và [dropped]</li>
			
					<li className="list-none">Chức năng: [which I dropped yesterday] - [Tính Câu][Adjective Clause] bổ nghĩa cho [Danh Cơ] [The laptop], giúp phân biệt nó với các laptop khác</li>
			
				</ul>
			
			


			<h4 className="margin-y-40">C. CHỨC NĂNG TRẠNG</h4>
					
			<p className="text-indent-whole">Khối có chức năng Trạng bổ nghĩa cho một [Động Cơ] (hoặc toàn bộ câu), trả lời các câu hỏi: khi nào? ở đâu? tại sao? bằng cách nào? với điều kiện gì? mặc dù gì?</p>


			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ Cơ</strong> – [<strong>Trạng Cơ</strong>][<strong>Adverb Base</strong>]: [correctly]</p>
			
				<ul className="list-square">
			
					<li>He answered [______].</li>
					<li className="margin-bottom-20 list-none">Anh ấy trả lời [chính xác].</li>
			
					<li className="list-none">Hình thái: [correctly] - [Động Cơ][Verb Base] từ gốc [correct] thêm đuôi -ly</li>
			
					<li className="list-none">Chức năng: [correctly] - [Trạng Cơ][Adverb Base] bổ nghĩa cho [Động Cơ] [answered], cho biết cách thức hành động diễn ra</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ Cụm</strong> – [<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>]: [to catch the first bus]</p>
			
				<ul className="list-square">
			
					<li>She woke up early [______].</li>
					<li className="margin-bottom-20 list-none">Cô ấy dậy sớm [để bắt chuyến xe buýt đầu tiên].</li>
			
					<li className="list-none">Hình thái: [to catch the first bus] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] dạng to-V kèm tân thể, chỉ mục đích</li>
			
					<li className="list-none">Chức năng: [to catch the first bus] - [Trạng Cụm][Adverb Phrase] bổ nghĩa cho [Động Cụm] [woke up early], giải thích mục đích của việc dậy sớm</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ Câu</strong> – [<strong>Trạng Câu</strong>][<strong>Adverb Clause</strong>]: [If you study regularly]</p>
			
				<ul className="list-square">
			
					<li>[______], you will improve.</li>
					<li className="margin-bottom-20 list-none">[Nếu bạn học đều đặn], bạn sẽ tiến bộ.</li>
			
					<li className="list-none">Hình thái: [If you study regularly] - [Hiển-Liên Động Câu][Connector Verb Clause] có cặp [you] và [study]</li>
			
					<li className="list-none">Chức năng: [If you study regularly] - [Trạng Câu][Adverb Clause] bổ nghĩa cho mệnh đề chính [you will improve], chỉ điều kiện cần để xảy ra kết quả</li>
			
				</ul>



			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. PARAPHRASING – THAY KHỐI CÙNG CHỨC NĂNG</h3>

			<p>Khi bạn đã xác định được chức năng của một khối, việc viết lại câu chỉ là thay khối đó bằng một khối khác có cùng chức năng. Hình thái bên trong có thể thay đổi (Cơ → Cụm → Câu), nhưng chức năng phải giống hệt. Cấu trúc phần còn lại của câu không cần động đến.</p>

			<h4 className="margin-y-40">Ví dụ 1: Paraphrasing chức năng Danh</h4>

			<p className="text-indent-whole"><strong>Câu gốc</strong>: [Running]</p>
			
				<ul className="list-square">
			
					<li>[______] is relaxing.</li>
					<li className="margin-bottom-20 list-none">[Chạy bộ] thì thư giãn.</li>
			
					<li className="list-none">Hình thái: [Running] - [Tiếp Động Cơ][Progressive Verb Base] một từ V-ing</li>
			
					<li className="list-none">Chức năng: [Running] - [Danh Cơ][Noun Base] làm chủ thể của câu, cái được khẳng định là thư giãn</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Paraphrase 1</strong> (<strong>thay bằng Danh Cụm</strong>): [To run in the park]</p>
			
				<ul className="list-square">
			
					<li>[______] is relaxing.</li>
					<li className="margin-bottom-20 list-none">[Chạy trong công viên] thì thư giãn.</li>
			
					<li className="list-none">Hình thái: [To run in the park] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] to-V kèm bổ túc nơi chốn</li>
			
					<li className="list-none">Chức năng: [To run in the park] - [Danh Cụm][Noun Phrase] vẫn là chủ thể của câu</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Paraphrase 2</strong> (<strong>thay bằng Danh Câu</strong>): [That you run every morning]</p>
			
				<ul className="list-square">
			
					<li>[______] is relaxing.</li>
					<li className="margin-bottom-20 list-none">[Việc bạn chạy mỗi sáng] thì thư giãn.</li>
			
					<li className="list-none">Hình thái: [That you run every morning] - [Hiển-Liên Động Câu][Connector Verb Clause] có cặp [you] và [run]</li>
			
					<li className="list-none">Chức năng: [That you run every morning] - [Danh Câu][Noun Clause] cùng chức năng chủ thể</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">👉 Cả ba câu đều giữ nguyên phần cuối [is relaxing]. Chỉ có khối ở đầu thay đổi, nhưng cùng chức năng Danh.</p>



			<h4 className="margin-y-40">Ví dụ 2: Paraphrasing chức năng Tính</h4>

			<p className="text-indent-whole"><strong>Câu gốc</strong>: [made by my grandmother]</p>
			
				<ul className="list-square">
			
					<li>I like the bread [______].</li>
					<li className="margin-bottom-20 list-none">Tôi thích ổ bánh mì [do bà tôi làm].</li>
			
					<li className="list-none">Hình thái: [made by my grandmother] - [Hoàn Động Cụm][Perfect Verb Phrase] dạng V-ed kèm tác thể</li>
			
					<li className="list-none">Chức năng: [made by my grandmother] - [Tính Cụm][Adjective Phrase] bổ nghĩa cho [Danh Cơ] [the bread]</li>
			
				</ul>
			
			
			<p className="text-indent-whole"><strong>Paraphrase 1</strong> (<strong>thay bằng Tính Cơ</strong>): [fresh]</p>
			
				<ul className="list-square">
			
					<li>I like the [______] bread.</li>
					<li className="margin-bottom-20 list-none">Tôi thích ổ bánh mì [tươi].</li>
			
					<li className="list-none">Hình thái: [fresh] - [Động Cơ][Verb Base] một từ</li>
			
					<li className="list-none">Chức năng: [fresh] - [Tính Cơ][Adjective Base] bổ nghĩa cho [Danh Cụm] [the bread]</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Paraphrase 2</strong> (<strong>thay bằng Tính Câu</strong>): [which my grandmother made]</p>
			
				<ul className="list-square">
			
					<li>I like the bread [______].</li>
					<li className="margin-bottom-20 list-none">Tôi thích ổ bánh mì [mà bà tôi đã làm].</li>
			
					<li className="list-none">Hình thái: [which my grandmother made] - [Hiển-Liên Động Câu][Connector Verb Clause] có cặp [my grandmother] và [made]</li>
			
					<li className="list-none">Chức năng: [which my grandmother made] - [Tính Câu][Adjective Clause] bổ nghĩa cho [Danh Cơ] [the bread]</li>
			
				</ul>
			


			<h4 className="margin-y-40">Ví dụ 3: Paraphrasing chức năng Trạng</h4>

			<p className="text-indent-whole"><strong>Câu gốc</strong>: [because she studied hard]</p>
			
				<ul className="list-square">
			
					<li>She passed the exam [______].</li>
					<li className="margin-bottom-20 list-none">Cô ấy đỗ kỳ thi [vì cô ấy học chăm chỉ].</li>
			
					<li className="list-none">Hình thái: [because she studied hard] - [Hiển-Liên Động Câu][Connector Verb Clause] có cặp [she] và [studied]</li>
			
					<li className="list-none">Chức năng: [because she studied hard] - [Trạng Câu][Adverb Clause] chỉ lý do, bổ nghĩa cho [Động Cụm] [passed the exam]</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Paraphrase</strong> (<strong>thay bằng [Trạng Cụm] cùng nghĩa lý do</strong>): [by studying hard]</p>
			
				<ul className="list-square">
			
					<li>She passed the exam [______].</li>
					<li className="margin-bottom-20 list-none">Cô ấy đỗ kỳ thi [bằng cách học chăm chỉ].</li>
			
					<li className="list-none">Hình thái: [by studying hard] - [Giới Cụm][Prepositional Phrase] giới từ kết hợp với V-ing</li>
			
					<li className="list-none">Chức năng: [by studying hard] - [Trạng Cụm][Adverb Phrase] bổ nghĩa cho [Động Cụm] [passed the exam], chỉ cách thức đạt được kết quả</li>
			
				</ul>
			
			

			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. LỘ TRÌNH LUYỆN TẬP</h3>
			
				<ul className="list-square">
			
					<li><strong>Bước 1</strong> – Viết một câu đơn giản.</li>
					<li className="margin-bottom-20 list-none">Ví dụ: [Swimming] is good for health.</li>
			
					<li><strong>Bước 2</strong> – Xác định hình thái của từng khối.</li>
					<li className="margin-bottom-20 list-none">[Swimming] - [Tiếp Động Cơ][Progressive Verb Base] một từ V-ing</li>

					<li><strong>Bước 3</strong> – Xác định chức năng của khối đó trong câu.</li>
					<li className="margin-bottom-20 list-none">[Swimming] - [Danh Cơ][Noun Base] đứng đầu câu, là cái được nói đến</li>
			
					<li><strong>Bước 4</strong> – Paraphrase bằng cách thay khối cùng chức năng.</li>
					<li className="margin-bottom-20 list-none">Thay [Swimming] bằng [To swim regularly] (Danh Cụm) hoặc [That you swim often] (Danh Câu). Viết câu mới.</li>
			
					<li><strong>Bước 5</strong> – Lặp lại với các câu khác, mỗi ngày 5 câu.</li>
					<li className="list-none">Dần dần chuyển sang paraphrase các khối có chức năng Tính và Trạng.</li>
			
				</ul>
			


			{/* 5. */}

			<h3 className="margin-y-50 text-center">5. TỔNG KẾT</h3>
			
				<ul className="list-square">
			
					<li><strong>Hình thái</strong> cho biết khối ở cấp độ nào: Động Cơ, [Động Cụm] hay Động Câu.</li>
			
					<li><strong>Chức năng</strong> cho biết khối đang làm nhiệm vụ gì trong câu: Danh, Tính hay Trạng.</li>
			
					<li><strong>Paraphrasing</strong> là thay một khối bằng một khối khác có cùng chức năng – một bài toán đơn giản khi bạn đã nắm vững hai bước đầu.</li>
			
				</ul>
			
			<p className="margin-top-20">Hãy bắt đầu ngay hôm nay. Viết một câu, phân tích nó, rồi viết lại câu đó ít nhất một lần bằng cách thay một khối. Chỉ sau vài tuần, bạn sẽ thấy khả năng xây dựng và biến tấu câu tiếng Anh của mình tiến bộ vượt bậc</p>

			<p>Chúc bạn làm chủ hệ thống này và viết tiếng Anh ngày càng linh hoạt!</p>

			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 22, 2026 · by DPSK and 🐝Mr. Bee Osn ·</span>
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