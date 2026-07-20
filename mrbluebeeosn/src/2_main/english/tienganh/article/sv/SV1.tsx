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
		
			<h4><HashLink smooth to="/tieng-anh#functional-thinking-terms"><mark className="highlight-tertiary-padding-4-8">Functional Thinking</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">[3 Chức Năng][3 Cấp Độ]
												
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

			<h4 className="margin-bottom-30 text-center">Cách Mạng Tư Duy Ngữ Pháp Tiếng Anh Bằng Hệ Trục Toạ Độ "[3 Chức Năng][3 Cấp Độ]"</h4>

			<p>Bản chất của việc làm chủ một ngôn ngữ không nằm ở việc học thuộc lòng các quy tắc phức tạp, mà nằm ở khả năng nhìn thấu cấu trúc và quy luật vận hành của nó. Khi các yếu tố cấu trúc được đơn giản hóa thành một bản đồ trực quan, tư duy của người học sẽ được giải phóng hoàn toàn để đạt đến tốc độ phản xạ tự nhiên nhất.</p>
		
			<p>Hệ thống tư duy mới dưới đây được xây dựng dựa trên sự đồng bộ tuyệt đối giữa các Hình Thái gốc, [3 Chức Năng] điều phối và [3 Cấp Độ] hình khối, giúp người học "nhìn phát hiểu ngay" mọi thành phần trong tiếng Anh mà không cần đến bất kỳ định nghĩa rườm rà nào.</p>


			{/* I.  */}

			<h3 className="margin-y-50 text-center">I. Hệ Trục Tọa Độ Quy Tắc [3C]</h3>

			<p>Toàn bộ kiến trúc của câu tiếng Anh được phân định rõ ràng qua 3 cấp độ quy mô tăng dần, đều bắt đầu bằng chữ [C] để tạo lối mòn tư duy cực kỳ dễ nhớ:</p>
			
				<ul className="list-square">
			
					<li>[<strong>Cơ</strong>][<strong>Base</strong>]:</li>
					<li className="margin-bottom-20 list-none">Mức độ một đơn vị cơ bản đơn lẻ, đóng vai trò là những viên gạch nền tảng.</li>
			
					<li>[<strong>Cụm</strong>][<strong>Phrase</strong>]:</li>
					<li className="list-none">Một nhóm yếu tố kết hợp với nhau nhưng không chứa hệ trục [S][V]. Nếu khối này đóng vai trò phụ trợ, gọi chung là [Phụ Cụm][Dependent Phrase].</li>
			
					<li>[<strong>Câu</strong>][<strong>Clause</strong>]:</li>
					<li className="list-none">Cấu trúc có chứa đầy đủ hệ trục [S][V]. Nếu hệ trục này đóng vai trò phụ trợ nằm trong một cấu trúc lớn hơn, gọi chung là [Phụ Câu][Dependent Clause].</li>
			
				</ul>


			<p className="margin-top-20">Về mặt quy mô độc lập trong văn bản:</p>
			
				<ul className="list-square">
			
					<li>[<strong>Câu lớn</strong>][<strong>Sentence</strong>]:</li>
					<li className="margin-bottom-20 list-none">Đứng độc lập, kết thúc bằng dấu chấm và biểu thị một ý trọn vẹn.</li>
			
					<li>[<strong>Câu con</strong>][<strong>Clause</strong>]:</li>
					<li className="list-none">Hệ trục [S][V] nằm bên trong làm thành phần cấu tạo cho một [Câu Lớn][Sentence].</li>
			
				</ul>

			

			{/* II.  */}

			<h3 className="margin-y-50 text-center">II. Tư Duy Ngược: Từ "Hình Thái" Giải Mã "Chức Năng"</h3>

			<p>Với hệ thống mới, quy trình tư duy được thực hiện một cách tự nhiên và khoa học: Người học nhìn thấy Hình thái trước, sau đó dựa vào vị trí để giải mã ra Chức năng.</p>

			<p>Hành động trong câu chính là các dạng [Động Cơ][Verb Base] xung lực vận hành, song hành cùng cấu trúc liên kết không hành động là [Giới Cơ][Prepositional Base] hoặc [Phức Giới Cơ][Complex Prepositional Base]. Để giải mã chính xác bản chất cấu trúc, trục hình thái [Động Cơ][Verb Base] được chia tách hệ thống thành 4 nhóm cốt lõi và phân hệ 16 mục sau:</p>
			

			
			<h4 className="margin-y-40">4 Nhóm Động Từ Cốt Lõi</h4>
          
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 1</strong>: [<strong>Thời Động Cơ</strong>][<strong>Tense Verb Base</strong>]</p>

      <p className="text-indent-whole">Nhóm này định vị mốc [Thời] gian và biểu thị trạng thái [Hoàn] thành hoặc [Tiếp] diễn của hành động.</p>

        <ul className="list-square">
      
          <li>be exploring ➔ [Thời] be (am/is/are, was/were) + [Tiếp Động Cơ] exploring</li>

          <li>have been exploring ➔ [Thời + Hoàn] have/has/had + been + [Tiếp Động Cơ] exploring</li>
      
          <li>have explored ➔ [Thời + Hoàn] have/has/had + explored</li>
      
          <li>explores, explored ➔ [Thời-Thuần Động Cơ] Tích hợp hoàn toàn</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 2</strong>: [<strong>Thuần Động Cơ</strong>][<strong>Bare Verb Base</strong>]</p>

      <p className="text-indent-whole">Nhóm giữ nguyên hình thái gốc nguyên bản, tuyệt đối không chia theo thời hay chủ ngữ.</p>

        <ul className="list-square">
      
          <li>to explore ➔ [Hạt Động Cơ] to + [Thuần Động Cơ] explore</li>
      
          <li>did explore ➔ [Thời] did (Nhấn mạnh) + [Thuần Động Cơ] explore</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 3</strong>: [<strong>Ý-Thái Thuần Động Cơ</strong>][<strong>Soft-Modal Bare Verb Base</strong>]</p>

      <p className="text-indent-whole">Nhóm diễn đạt các tình huống lịch sự, khuyên nhủ hoặc giả định nhẹ nhàng. Bao gồm: would (nhã nhặn), should (gợi ý), could (khả năng nhẹ), might (khả năng thấp), ought to (khuyên bảo), had better (khuyên nhủ).</p>

        <ul className="list-square">
      
          <li>should explore ➔ [Ý-Thái] should (gợi ý) + [Thuần Động Cơ] explore</li>
      
          <li>could explore ➔ [Ý-Thái] could (khả năng nhẹ) + [Thuần Động Cơ] explore</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 4</strong>: [<strong>Áp-Thái Thuần Động Cơ</strong>][<strong>Assertive-Modal Bare Verb Base</strong>]</p>

      <p className="text-indent-whole">Nhóm khẳng định, cam kết hoặc áp đặt thực tế một cách chắc chắn. Bao gồm: will (cam kết), shall (chắc chắn), can (năng lực), must (ép buộc), have to (bắt buộc), may (khả năng).</p>

        <ul className="list-square">
      
          <li>will explore ➔ [Áp-Thái] will (cam kết) + [Thuần Động Cơ] explore</li>
      
          <li>must explore ➔ [Áp-Thái] must (ép buộc) + [Thuần Động Cơ] explore</li>
      
        </ul>

			
			<h4 className="margin-y-40">III. Phân Hệ [Cơ][Base]</h4>
			
				<ol>
      
          <li value="1">[<strong>Rễ Động Cơ</strong>][<strong>Root Verb Base</strong>]: learn, speak, build</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng [Rễ Động Cơ][Root Verb Base] nguyên thủy cốt lõi nhất, chưa thêm bớt hay kết hợp với bất kỳ hành động nào khác.</li>
      
          <li value="2">[<strong>Hạt Động Cơ</strong>][<strong>Particle Verb Base</strong>]: to</li>
          <li className="margin-bottom-20 list-none">[Hạt] "to" đơn lẻ đóng vai trò hạt nhân đầu tiên đứng trước mọi khối hành động để kích hoạt trạng thái nguyên bản.</li>

          <li value="3">[<strong>Thời Động Cơ</strong>][<strong>Tense Verb Base</strong>]: does, did, is, has, was, am, are</li>
          <li className="margin-bottom-20 list-none">Các [Thời Động Cơ][Tense Verb Base] xuất hiện đơn lẻ để gánh vác năng lượng [Thời] gian, [Thời] cho câu.</li>
      
          <li value="4">[<strong>Ý-Thái Động Cơ</strong>][<strong>Soft-Modal Verb Base</strong>]: would, could, should, might, ought to, had better</li>
          <li className="margin-bottom-20 list-none">Hành động thể hiện [Thái] độ nhã nhặn, triệt tiêu tính ép buộc. Các khối phức đặc biệt "ought to" và "had better" được quét như một [Phức Ý-Thái Động Cơ][Complex Soft-Modal Verb Base] thống nhất.</li>

          <li value="5">[<strong>Áp-Thái Động Cơ</strong>][<strong>Assertive-Modal Verb Base</strong>]: will, shall, can, must, have to, may</li>
          <li className="margin-bottom-20 list-none">Hành động mang tính trực diện, [Áp] đặt thực tế xuống người nghe. Khối phức đặc biệt "have to" được quét như một [Phức Áp-Thái Động Cơ][Complex Assertive-Modal Verb Base] thống nhất.</li>

          <li value="6">[<strong>Thuần Động Cơ</strong>][<strong>Bare Verb Base</strong>]: learn, speak, build</li>
          <li className="margin-bottom-20 list-none">Hành động đứng tự do một mình, đã giải phóng hoàn toàn và không đi kèm to (thường đứng sau các hành động ở dạng [Ý-Thái][Soft-Modal] hay [Áp-Thái Động Cơ][Assertive-Modal Verb Base]).</li>
      
          <li value="7">[<strong>Hạt Thuần Động Cơ</strong>][<strong>Particle Bare Verb Base</strong>]: to learn, to speak, to build</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Hạt Động Cơ][Particle Verb Base] và hành động [Thuần Động Cơ][Bare Verb Base] phía sau.</li>

          <li value="8">[<strong>Ý-Thái Thuần Động Cơ</strong>][<strong>Soft-Modal Bare Verb Base</strong>]: would build, could speak</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Ý] nhị và hành động [Thuần] khiết.</li>
      
          <li value="9">[<strong>Áp-Thái Thuần Động Cơ</strong>][<strong>Assertive-Modal Bare Verb Base</strong>]: will build, can speak</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Áp] đặt thực tế và hành động [Thuần] khiết.</li>

          <li value="10">[<strong>Thời Thuần Động Cơ</strong>][<strong>Tense Bare Verb Base</strong>]: did speak, does build</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] gian và hành động [Thuần] khiết song hành, được ngăn cách bằng một khoảng trắng.</li>

          <li value="11">[<strong>Thời-Thuần Động Cơ</strong>][<strong>Tense-Bare Verb Base</strong>]: spoke, speaks, builds</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] gian và hành động [Thuần] khiết hòa tan, tích hợp gọn gàng vào một chữ duy nhất.</li>
      
          <li value="12">[<strong>Tiếp Động Cơ</strong>][<strong>Progressive Verb Base</strong>]: learning, speaking, building</li>
          <li className="margin-bottom-20 list-none">Hành động mang đuôi -ing, biểu thị tính chất đang [Tiếp] diễn, kéo dài.</li>

          <li value="13">[<strong>Hoàn Động Cơ</strong>][<strong>Perfect Verb Base</strong>]: learnt, spoken, built, been</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng hoàn tất (cột 3/-ed), biểu thị tính chất trọn vẹn, [Hoàn] thành.</li>
      
          <li value="14">[<strong>Thời Tiếp Động Cơ</strong>][<strong>Tense Progressive Verb Base</strong>]: is speaking, was building</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa từ mang [Thời] gian và hành động mang tính [Tiếp] diễn.</li>

          <li value="15">[<strong>Thời Hoàn Động Cơ</strong>][<strong>Tense Perfect Verb Base</strong>]: has spoken, had built</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa từ mang [Thời] và hành động mang tính [Hoàn] thành.</li>
      
          <li value="16">[<strong>Thời Hoàn Tiếp Động Cơ</strong>][<strong>Tense Perfect Progressive Verb Base</strong>]: has been speaking, had been building</li>
          <li className="list-none">Sự hợp nhất tuyến tính đồng thời của ba lớp năng lượng: [Thời] gian, [Hoàn] thành và [Tiếp] diễn.</li>
      
        </ol>


			{/* IV.  */}

			<h3 className="margin-y-50 text-center">IV. Phân Hệ [Cụm][Phrase]</h3>

			<p>📌 <strong>QUY TẮC CỐT LÕI</strong>:</p>

			<p className="margin-top-20">"Khi bất kỳ họ [Cơ][Base] nào thuộc 16 mục trên kéo theo các [Danh Nhận][Noun Object], [Trạng Cơ][Adverb Base], [Trạng Cụm][Adverb Phrase], hoặc [Trạng Câu][Adverb Clause] phía sau, toàn bộ khối đó lập tiếp chuyển đổi cấu trúc và được dán nhãn thành dạng [Cụm][Phrase] tương ứng của chính nó."</p>

			
			<p className="margin-top-20">Bất kỳ hình thái nào ở trên khi được đóng gói sẽ đi làm các chức năng: [Danh Cơ][Noun Base], [Tính Cơ][Adjective Base], hoặc [Trạng Cơ][Adverb Base] tùy theo vị trí neo của chúng.</p>
			
				<ul className="list-square">
			
					<li>[<strong>Giới Cơ</strong>][<strong>Prepositional Base</strong>]:</li>
					<li className="margin-bottom-20 list-none">Đơn vị gốc liên kết vị trí, không gian, thời gian đơn lẻ như in, on, at, to, under.</li>

					<li>[<strong>Phức Giới Cơ</strong>][<strong>Complex Prepositional Base</strong>]:</li>
					<li className="margin-bottom-20 list-none">Tổ hợp nhiều đơn vị liên kết vận hành đồng bộ như because of, in front of, thanks to, due to.</li>

					<li>[<strong>Liên Cơ</strong>][<strong>Connector Base</strong>]:</li>
					<li className="margin-bottom-20 list-none">Đơn vị nối giữ vai trò thiết lập quan hệ phụ thuộc hoặc liên kết giữa các thành phần cấu trúc.</li>
			
					<li>[<strong>Động Cụm</strong>][<strong>Verb Phrase</strong>]:</li>
					<li className="margin-bottom-20 list-none">Khối hành động chứa nhiều yếu tố kết hợp, không chứa hệ trục [S][V]. Hình thái này sẽ đi làm các chức năng: [Danh Cụm][Noun Phrase], [Tính Cụm][Adjective Phrase], hoặc [Trạng Cụm][Adverb Phrase].</li>

					<li>[<strong>Giới Cụm</strong>][<strong>Prepositional Phrase</strong>]:</li>
					<li className="margin-bottom-20 list-none">Khối liên kết không chứa xung lực hành động, không chứa hệ trục [S][V]. Hình thái này sẽ đi làm các chức năng đặc thù: [Tính Cụm][Adjective Phrase] hoặc [Trạng Cụm][Adverb Phrase].</li>
			
					<li>[<strong>Phức Giới Cụm</strong>][<strong>Complex Prepositional Phrase</strong>]:</li>
					<li className="margin-bottom-20 list-none">Khối liên kết xây dựng từ [Phức Giới Cơ][Complex Prepositional Base] kết hợp phần bổ nghĩa, không chứa hệ trục [S][V].</li>
			
					<li><strong>Động Câu</strong> [<strong>Verb Clause</strong>]:</li>
					<li className="list-none">Khối hành động chứa một cấu trúc [Câu][Clause] hoàn chỉnh, có chứa hệ trục [S][V]. Hình thái này sẽ đi làm các chức năng: [Danh Câu][Noun Clause], [Tính Câu][Adjective Clause], hoặc [Trạng Câu][Adverb Clause].</li>
			
				</ul>



			{/* V.  */}

			<h3 className="margin-y-50 text-center">V. Quy Trình Vận Hành Và Ký Hiệu Đóng Gói Sơ Đồ</h3>

			<p>Để bóc tách các tầng hình thái lồng ghép vào nhau như những chiếc hộp gỗ, người học áp dụng quy ước đóng gói hình khối bằng dấu vuông [] bao quanh:</p>


			<h4 className="margin-y-40">1. Hình thái [Động Cơ][Verb Base]</h4>

			<p className="text-indent-whole">Đơn vị hành động nhỏ nhất gồm 1 yếu tố gốc.</p>

			<ul className="list-square">
			
					<li>[Writing] sharpens the intellect.</li>
					<li className="margin-bottom-20 list-none">[Việc viết lách] mài sắc trí tuệ.</li>
			
					<li className="list-none">Hình thái: [Writing] - [Tiếp Động Cơ][Progressive Verb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "write" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base], đóng vai trò làm hạt nhân hành động đơn lẻ cho cấu trúc câu.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [Writing] - [Danh Cơ][Noun Base] đứng ở đầu câu tạo nên danh chủ cho toàn câu.</li>
			
				</ul>
			
				<ul className="list-square">
			
					<li>The [growing] demand requires action.</li>
					<li className="margin-bottom-20 list-none">Nhu cầu [đang tăng cao] đòi hỏi phải hành động.</li>
			
					<li className="list-none">Hình thái: [growing] - [Tiếp Động Cơ][Progressive Verb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "grow" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] phản ánh trạng thái đang vận động liên tục.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [growing] - [Tính Cơ][Adjective Base] đứng trước [Danh Cơ][Noun Base] "demand" nhằm mô tả đặc điểm của đối tượng.</li>
			
				</ul>
			
			
				<ul className="list-square">
			
					<li>The team cooperated [harmoniously].</li>
					<li className="margin-bottom-20 list-none">Đội ngũ đã hợp tác [một cách hài hòa].</li>
			
					<li className="list-none">Hình thái: [harmoniously] – [Diện Trạng Cơ][Modified Adverb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "harmonize" kết hợp các hậu tố "-ous" và "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] mang tính chất phương thức vận hành.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [harmoniously] - [Trạng Cơ][Adverb Base] đứng sau hành động nhằm chỉ ra cách thức thực hiện.</li>
			
				</ul>
			


			<h4 className="margin-y-40">2. Hình thái [Động Cụm][Verb Phrase]</h4>

			<p className="text-indent-whole">Đơn vị hành động chứa nhiều yếu tố kết hợp, cấu trúc không chứa hệ trục [S][V]. Khi các dạng [Cơ][Base] kết hợp với thành phần phụ trợ sau nó, chúng dán nhãn thành dạng cụm tương ứng:</p>

			<ul className="list-square">
			
					<li>[Learning a new language] requires patience.</li>
					<li className="margin-bottom-20 list-none">[Việc học một ngôn ngữ mới] đòi hỏi sự kiên nhẫn.</li>
			
					<li className="list-none">Hình thái: [Learning a new language] - [Tiếp Động Cụm][Progressive Verb Phrase] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [S][V].</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [Learning a new language] - [Danh Cụm][Noun Phrase] đứng ở vị trí đầu câu để làm danh chủ điều phối thông tin.</li>
			
				</ul>
			
				<ul className="list-square">
			
					<li>She promised [to finish the report].</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã hứa [hoàn thành bản báo cáo].</li>
			
					<li className="list-none">Hình thái: [to finish the report] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [S][V].</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [to finish the report] - [Danh Cụm][Noun Phrase] đứng sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "promised" để làm [Danh Nhận][Noun Object] thực thi.</li>
			
				</ul>
			
			
				<ul className="list-square">
			
					<li>The children [playing in the park] are laughing.</li>
					<li className="margin-bottom-20 list-none">Những đứa trẻ [đang chơi trong công viên] đang cười.</li>
			
					<li className="list-none">Hình thái: [playing in the park] - [Tiếp Động Cụm][Progressive Verb Phrase] biểu thị khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [S][V].</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [playing in the park] - [Tính Cụm][Adjective Phrase] đứng ngay sau đối tượng những đứa trẻ nhằm mô tả trạng thái của chúng.</li>
			
				</ul>
			
			
				<ul className="list-square">
			
					<li>He woke up early [to catch the train].</li>
					<li className="margin-bottom-20 list-none">Anh ấy đã thức dậy sớm [để bắt kịp chuyến tàu].</li>
			
					<li className="list-none">Hình thái: [to catch the train] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] xác định khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [S][V].</li>
			
					<li className="list-none">Chức năng: [to catch the train] - [Trạng Cụm][Adverb Phrase] gắn vào phía sau nhằm làm rõ mục đích cho phần thông tin trước đó.</li>
			
				</ul>
			


			<h4 className="margin-y-40">3. Hình thái [Giới Cụm][Prepositional Phrase]</h4>

			<p className="text-indent-whole">Khối liên kết không gian, thời gian hoặc sở hữu, hoàn toàn tách biệt khỏi cấu trúc hành động và không chứa hệ trục [S][V]. Hình thái này chuyên biệt tạo nên hai chức năng [Tính Cụm][Adjective Phrase] và [Trạng Cụm][Adverb Phrase].</p>
			
				<ul className="list-square">
			
					<li>The cat [under the black car] is sleeping.</li>
					<li className="margin-bottom-20 list-none">Con mèo [ở dưới chiếc xe màu đen] thì đang ngủ.</li>
			
					<li className="list-none">Hình thái: [under the black car] - [Giới Cụm][Prepositional Phrase] cấu thành khối bắt bằng một [Giới Cơ][Prepositional Base] mốc vị trí.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [under the black car] - [Tính Cụm][Adjective Phrase] neo ngay sau đối tượng con mèo để mô tả đặc điểm vị trí nhận diện riêng biệt cho nó.</li>
			
				</ul>
			
			
				<ul className="list-square">
			
					<li>We arrived [at midnight].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [vào lúc nửa đêm].</li>
			
					<li className="list-none">Hình thái: [at midnight] - [Giới Cụm][Prepositional Phrase] cấu thành khối bắt đầu bằng một [Giới Cơ][Prepositional Base] mốc thời gian.</li>
			
					<li className="list-none">Chức năng: [at midnight] - [Trạng Cụm][Adverb Phrase] gắn vào cuối câu chịu trách nhiệm cung cấp hoàn cảnh thời điểm cho sự việc.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">4. Hình thái [Hiển-Liên Động Câu][Connector Verb Clause]</h4>

			<p className="text-indent-whole">Đơn vị hành động phức cao cấp, chứa một cấu trúc [Câu][Clause] hoàn chỉnh ở bên trong có chứa hệ trục [S][V].</p>
			
				<ul className="list-square">
			
					<li>Everyone knows [that water boils at 100 degrees].</li>
					<li className="margin-bottom-20 list-none">Mọi người đều biết [rằng nước sôi ở 100 độ].</li>
			
					<li className="list-none">Hình thái: [that water boils at 100 degrees] - [Hiển-Liên Động Câu][Connector Verb Clause] tạo nên khối hành động phức có chứa hệ trục [S][V], bắt đầu bằng [Liên Cơ][Connector Base] "that".</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [that water boils at 100 degrees] - [Danh Câu][Noun Clause] đảm nhận nhiệm vụ của một khối đối tượng đứng sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "knows" để làm [Danh Nhận][Noun Object] dưới sự điều phối của nó.</li>
			
				</ul>


			
				<ul className="list-square">
			
					<li>The laptop [which I bought last week] works perfectly.</li>
					<li className="margin-bottom-20 list-none">Chiếc máy tính xách tay [mà tôi mua tuần trước] hoạt động hoàn hảo.</li>
			
					<li className="list-none">Hình thái: [which I bought last week] - [Hiển-Liên Động Câu][Connector Verb Clause] định hình khối hành động phức có chứa hệ trục [S][V], bắt đầu bằng [Liên Cơ][Connector Base] "which".</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [which I bought last week] - [Tính Câu][Adjective Clause] thực hiện nhiệm vụ đứng sau định danh và mô tả đặc điểm riêng cho [Danh Cơ][Noun Base] laptop.</li>
			
				</ul>
		
			
				<ul className="list-square">
			
					<li>We cancelled the picnic [because it rained heavily].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã hủy buổi dã ngoại [vì trời mưa to].</li>
			
					<li className="list-none">Hình thái: [because it rained heavily] - [Hiển-Liên Động Câu][Connector Verb Clause] thể hiện khối hành động phức có chứa hệ trục [S][V], bắt đầu bằng [Liên Cơ][Connector Base] "because".</li>
			
					<li className="list-none">Chức năng: [because it rained heavily] - [Trạng Câu][Adverb Clause] chịu trách nhiệm cung cấp hoàn cảnh nguyên nhân cho toàn bộ hành động hủy bỏ trước đó.</li>
			
				</ul>


			{/* VI.  */}

			<h3 className="margin-y-50 text-center">VI. Hiện Tượng [Ẩn-Liên Động Câu][Zero-Connector Verb Clause]</h3>

			<p>Trong tiếng Anh tự nhiên, người bản ngữ rất thường xuyên lược bỏ hoàn toàn thành phần kết nối bề nổi. Nếu khối này ẩn đi thành phần kết nối nhưng vẫn chứa hệ trục [S][V] nằm bên trong cấu trúc lớn hơn, nó thực chất là một dạng [Câu][Clause] đặc thù.</p>

			<p>Lúc này, khối [Ẩn-Liên Động Câu][Zero-Connector Verb Clause] hoàn toàn không chứa [Liên Cơ][Connector Base], hiển thị cấu hình giống hệt như một câu độc lập nhưng thực chất phải neo chặt vào hệ thống để làm tròn 3 chức năng:</p>


			<h4 className="margin-y-40">A. [Danh Nhận][Noun Object]</h4>
			
				<ul className="list-square">
			
					<li>I believe [you will pass the exam].</li>
					<li className="margin-bottom-20 list-none">Tôi tin [bạn sẽ vượt qua kỳ thi].</li>
			
					<li className="list-none">Hình thái: [you will pass the exam] - [Ẩn-Liên Động Câu][Zero-Connector Verb Clause] đã ẩn đi thành phần liên kết bề nổi.</li>
			
					<li className="list-none">Chức năng: [you will pass the exam] - [Danh Câu][Noun Clause] đứng sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "believe" như một [Danh Nhận][Noun Object] thực thi.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">B. [Tính Câu][Adjective Clause]</h4>
			
				<ul className="list-square">
			
					<li>The book [she lent me] was fascinating.</li>
					<li className="margin-bottom-20 list-none">Cuốn sách [cô ấy cho tôi mượn] rất hấp dẫn.</li>
			
					<li className="list-none">Hình thái: [she lent me] - [Ẩn-Liên Động Câu][Zero-Connector Verb Clause] đã ẩn đi thành phần liên kết bề nổi.</li>
			
					<li className="list-none">Chức năng: [she lent me] - [Tính Câu][Adjective Clause] đứng ngay sau đối tượng cuốn sách nhằm mô tả đặc điểm riêng biệt cho [Danh Cơ][Noun Base] book.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">C. [Trạng Câu][Adverb Clause]</h4>
			
				<ul className="list-square">
			
					<li>The tea was so hot [I couldn't drink it].</li>
					<li className="margin-bottom-20 list-none">Trà quá nóng [đến mức tôi không thể uống được].</li>
			
					<li className="list-none">Hình thái: [I couldn't drink it] - [Ẩn-Liên Động Câu][Zero-Connector Verb Clause] đã ẩn đi thành phần liên kết bề nổi.</li>
			
					<li className="list-none">Chức năng: [I couldn't drink it] - [Trạng Câu][Adverb Clause] gắn vào phía sau tính cơ "hot" nhằm làm rõ hệ quả và bổ nghĩa cho mức độ đặc điểm của [Tính Cơ][Adjective Base] này.</li>
			
				</ul>
			


			
			{/* VII.  */}

			<h3 className="margin-y-50 text-center">VII. Nguyên Tắc Phân [Tầng][Tiered] Bằng "Điểm Neo"</h3>

			<p>Khi xử lý các cấu trúc phức tạp chứa nhiều tầng lồng ghép, người học áp dụng quy ước mã hóa hình khối tăng dần: Dấu vuông [] cho lớp bao ngoài cùng, dấu ngoặc nhọn {'{}'} cho lớp lồng trung gian, và dấu móc nhọn &lt; &gt; cho lớp lồng sâu nhất.</p>

			<p>Các yếu tố đuôi biến đổi cấu hình như -s/-es, -ed, -ing nằm bên trong các dấu mốc tạo nên biến thể của từ, không làm thay đổi bản chất hình thái hay chức năng của khối.</p>

			<p>Hãy xem cách chúng ta bóc tách một cấu trúc chứa trọn vẹn cả 3 lớp hình khối:</p>

				<ul className="list-square">
			
					<li>[Finding {'{the key <to the room>}'}] is difficult.</li>
					<li className="margin-bottom-20 list-none">[Việc tìm kiếm {'{chiếc chìa khóa <của căn phòng đó>}'}] thì khó khăn.</li>

					<li className="list-none">Hình thái lớp trong cùng &lt; &gt;: &lt;to the room&gt; là một [Giới Cụm][Prepositional Phrase] bắt đầu bằng [Giới Cơ][Prepositional Base] to.</li>

					<li className="margin-bottom-20 list-none">Chức năng lớp trong cùng &lt; &gt;: &lt;to the room&gt; đóng vai trò là một [Tính Cụm][Adjective Phrase] neo ngay sau [Danh Cơ][Noun Base] key để bổ nghĩa và định danh trực tiếp cho chiếc chìa khóa đó.</li>

					<li className="list-none">Hình thái lớp trung gian {'{}'}: {'{the key <to the room>}'} là một [Rễ Danh Cụm][Root Noun Phrase] hình thành từ khối [Rễ Danh Cơ][Root Noun Base] nguyên bản "key" kết hợp [Định Cơ][Determiner Base] "the", ở trạng thái mộc hoàn toàn, không ăn diện thêm phụ kiện, kết hợp phần [Giới Cụm][Prepositional Phrase] bổ nghĩa đi kèm.</li>

					<li className="margin-bottom-20 list-none">Chức năng lớp trung gian {'{}'}: {'{the key <to the room>}'} đóng vai trò là một [Danh Cụm][Noun Phrase] làm điểm tựa [Danh Nhận][Noun Object] chịu sự điều phối trực tiếp của hành động thực thi Finding.</li>

					<li className="list-none">Hình thái tổng thể bao ngoài []: [Finding {'{the key <to the room>}'}] là một [Tiếp Tầng Động Cụm][Progressive Tiered Verb Phrase] bắt đầu bằng [Tiếp Động Cơ][Progressive Verb Base] dạng V-ing.</li>

					<li className="list-none">Chức năng tổng thể bao ngoài []: [Finding {'{the key <to the room>}'}] vận hành đồng bộ như một khối [Danh Cụm][Noun Phrase] lớn giữ vai trò làm [Danh Chủ][Noun Subject] điều phối hệ trục thông tin hành động cho toàn bộ [Câu Lớn][Sentence].</li>
			
				</ul>
			


			{/* VI.  */}

			<h3 className="margin-y-50 text-center">VI. Cấu Trúc Khối Phân Tầng Cao Cấp [Tiered Structures]</h3>

			<p>Khi các hình khối lồng ghép vào nhau theo nhiều lớp như những chiếc hộp gỗ, hệ thống quy ước dấu sẽ giúp bóc tách chính xác mối quan hệ phân tầng về cả Hình thái lẫn Chức năng.</p>


			<h4 className="margin-y-40">1. [Danh Cụm][Noun Phrase]</h4>

			<p><strong>Thể hiện Chức năng</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>
			
				<ul className="list-square">
			
					<li>[Discovering {'{how the engine works}'}] is interesting.</li>
					<li className="margin-bottom-20 list-none">[Việc phát hiện ra {'{cách thức mà động cơ hoạt động}'}] thì thú vị.</li>

					<li>Phân tích Hình thái:</li>

					<li className="list-none">Khối lồng bên trong {'{how the engine works}'} là một [Hiển-Liên Động Câu][Connector Verb Clause] vì chứa đầy đủ hệ trục [S][V] (the engine works), bắt đầu bằng [Liên Cơ][Connector Base] how. Xét về quy mô cấu trúc phụ trợ nằm trong một hệ thống lớn hơn, khối lồng này chính là một [Phụ Câu][Dependent Clause].</li>

					<li className="margin-bottom-20 list-none">Khối tổng thể bao ngoài [Discovering {'{how the engine works}'}] là một khối [Tiếp Tầng Động Cụm][Progressive Tiered Verb Phrase] bắt đầu bằng hành động thực thi [Tiếp Động Cơ][Progressive Verb Base] dạng V-ing Discovering.</li>
			
					<li>Phân tích Chức năng:</li>

					<li className="list-none">Lớp trong: Khối {'{how the engine works}'} đóng vai trò là một [Danh Câu][Noun Clause], neo ngay sau hành động thực thi [Tiếp Động Cơ][Progressive Verb Base] Discovering để làm [Danh Nhận][Noun Object] cho hành động đó.</li>

					<li className="list-none">Lớp ngoài: Toàn bộ khối cấu trúc [Discovering {'{how the engine works}'}] vận hành đồng bộ như một khối [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] lớn, đứng ở đầu câu giữ vai trò làm [Danh Chủ][Noun Subject] điều phối trục thông tin hành động cho toàn bộ [Câu Lớn][Sentence].</li>
			
				</ul>


			<p><strong>Thể hiện Chức năng</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>
			
				<ul className="list-square">
			
					<li>He avoided [discussing {'{what they had discovered}'}].</li>
					<li className="margin-bottom-20 list-none">Anh ấy đã tránh [thảo luận về {'{những gì họ đã phát hiện ra}'}].</li>

					<li>Phân tích Hình thái:</li>

					<li className="list-none">Khối lồng bên trong {'{what they had discovered}'} là một [Hiển-Liên Động Câu][Connector Verb Clause] vì chứa đầy đủ hệ trục [S][V] (they had discovered), bắt đầu bằng [Liên Cơ][Connector Base] what. Đây là một cấu trúc [Phụ Câu][Dependent Clause] điển hình đóng vai trò bổ nghĩa phụ trợ.</li>

					<li className="margin-bottom-20 list-none">Khối tổng thể bao ngoài [discussing {'{what they had discovered}'}] là một khối [Tiếp Tầng Động Cụm][Progressive Tiered Verb Phrase] bắt đầu bằng hình thái hành động thực thi [Tiếp Động Cơ][Progressive Verb Base] dạng V-ing discussing.</li>
			
					<li>Phân tích Chức năng:</li>

					<li className="list-none">Lớp trong: Khối {'{what they had discovered}'} đóng vai trò là một [Danh Câu][Noun Clause], neo ngay sau hành động thực thi [Tiếp Động Cơ][Progressive Verb Base] discussing để làm [Danh Nhận][Noun Object] cho hành động đó.</li>

					<li className="list-none">Lớp ngoài: Toàn bộ khối cấu trúc [discussing {'{what they had discovered}'}] vận hành đồng bộ như một khối [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] lớn, đứng ngay sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "avoided" nhằm làm [Danh Nhận][Noun Object] chịu sự điều phối trực tiếp từ nó.</li>
			
				</ul>

			

			<h4 className="margin-y-40">2. [Tính Cụm][Adjective Phrase]</h4>

			<p className="text-indent-whole">Khối [Tính Cụm][Adjective Phrase] bao ngoài chứa một khối chức năng độc lập nằm sâu bên trong để cùng tham gia mô tả đặc điểm cho danh chủ.</p>
			
				<ul className="list-square">
			
					<li>The article [about {'{how she succeeded}'}] is inspiring.</li>
					<li className="margin-bottom-20 list-none">Bài báo [về {'{cách cô ấy thành công}'}] rất truyền cảm hứng.</li>

					<li>Phân tích Hình thái:</li>

					<li className="list-none">Khối tổng thể bao ngoài [about {'{how she succeeded}'}] là một [Tầng Giới Cụm][Tiered Prepositional Phrase] bắt đầu bằng [Giới Cơ][Prepositional Base] about.</li>

					<li className="margin-bottom-20 list-none">Khối lồng bên trong {'{how she succeeded}'} là một [Hiển-Liên Động Câu][Connector Verb Clause] có chứa hệ trục [S][V], bắt đầu bằng [Liên Cơ][Connector Base] "how", đóng vai trò cấu trúc của một [Phụ Câu][Dependent Clause].</li>
			
					<li>Phân tích Chức năng:</li>

					<li className="list-none">Lớp trong: Khối {'{how she succeeded}'} đóng vai trò là một [Danh Câu][Noun Clause] đứng làm điểm tựa [Danh Nhận][Noun Object] dưới sự điều phối của [Giới Cơ][Prepositional Base] about.</li>

					<li className="list-none">Lớp ngoài: Toàn bộ khối [about {'{how she succeeded}'}] đóng vai trò là một [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] tổng thể bổ nghĩa cho [Danh Cụm][Noun Phrase] "The article" đứng trước nó.</li>
			
				</ul>



			<h4 className="margin-y-40">3. [Trạng Cụm][Adverb Phrase]</h4>
					
			<p className="text-indent-whole">Khối [Trạng Cụm][Adverb Phrase] bao ngoài đảm nhận nhiệm vụ cung cấp hoàn cảnh, bên trong chứa một khối chức năng phụ thuộc để thiết lập mốc so sánh hoặc mốc giới hạn.</p>
			
				<ul className="list-square">
			
					<li>She walked [slower {'{than we expected}'}].</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã đi bộ [chậm hơn {'{những gì chúng tôi kỳ vọng}'}].</li>

					<li>Phân tích Hình thái:</li>

					<li className="list-none">Khối tổng thể bao ngoài [slower {'{than we expected}'}] là một [Diện Tầng Tính Cụm][Modified Tiered Adjective Phrase] hình thành từ khối [Rễ Tính Cơ][Root Adjective Base] nguyên bản "slow" kết hợp hậu tố "-er" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] chỉ cách thức và mức độ.</li>

					<li className="margin-bottom-20 list-none">Khối lồng bên trong {'{than we expected}'} là một [Hiển-Liên Động Câu][Connector Verb Clause] có chứa hệ trục [S][V] (we expected), được bắt đầu và kết nối bằng [Liên Cơ][Connector Base] than, cấu tạo nên cấu trúc [Phụ Câu][Dependent Clause] phụ thuộc.</li>
			
					<li>Phân tích Chức năng:</li>

					<li className="list-none">Lớp trong: Khối {'{than we expected}'} đóng vai trò là một [Trạng Câu][Adverb Clause] phụ thuộc, neo vào sau [Trạng Cơ][Adverb Base] dạng so sánh slower để làm rõ mức độ cho cấu trúc so sánh.</li>

					<li className="list-none">Lớp ngoài: Toàn bộ khối cấu trúc [slower {'{than we expected}'}] vận hành đồng bộ như một [<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] tổng thể gắn sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "walked" nhằm làm rõ hoàn cảnh cách thức hành động được thực hiện.</li>
			
				</ul>



			{/* VII.  */}

			<h3 className="margin-y-50 text-center">IX. Paraphrasing: Nghệ Thuật Thay [Khối] Cùng Chức Năng</h3>

			<p>Khi tư duy hình khối [Cơ][Base] - [Cụm][Phrase] - [Câu][Clause] đã trở thành bản năng, kỹ thuật viết lại câu [paraphrasing] không còn là việc đổi yếu tố cấu trúc một cách khiên cưỡng. Việc làm mới câu văn giờ đây thực chất là một bài toán hình học sắp xếp module: Thay đổi Cấp Độ cấu trúc nhưng giữ nguyên vẹn Chức Năng ở cùng một vị trí neo.</p>

			<p>Chỉ cần xác định vị trí đó đang đảm nhận chức năng gì thông qua việc phối hợp cùng ma trận [Danh] - [Tính] - [Trạng], người học có toàn quyền nhấc một khối [Cơ][Base] ra và đặt một khối [Cụm][Phrase] như [Động Cụm][Verb Phrase], [Giới Cụm][Prepositional Phrase] hoặc một khối [Câu][Clause] như [Động Câu][Verb Clause] vào để thế chỗ. Cấu trúc tổng thể của [Câu Lớn][Sentence] hoàn toàn không bị phá vỡ hay xáo trộn.</p>

			<p>Kỹ thuật dịch chuyển khối cùng chức năng này giúp người học tự do thực hiện việc chuyển đổi mượt mà giữa [Động][Verb], [Giới][Preposition] và [Câu][Clause] theo ý muốn. Hãy xem cách chúng ta biến đổi linh hoạt một thông điệp thông qua việc hoán đổi các khối cấu trúc cùng giữ Chức năng [Trạng]:</p>


			<p className="margin-top-20 text-indent-whole">Cấp độ [Cơ][Base]:</p>
			
				<ul className="list-square">
			
					<li>We arrived [late].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [muộn].</li>
			
					<li className="list-none">➔ Sử dụng khối [late] - [Trạng Cơ][Adverb Base].</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole">Cấp độ [Cụm][Phrase] - [Động Cụm][Verb Phrase]:</p>
			
				<ul className="list-square">
			
					<li>We arrived [to help our friends].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [để giúp đỡ bạn bè của chúng tôi].</li>
			
					<li className="list-none">➔ Đặt khối [to help our friends] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] vào thế chỗ, đóng vai trò là một [Trạng Cụm][Adverb Phrase] nhằm làm rõ mục đích cho [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "arrived" trước đó.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Cấp độ [Cụm][Phrase] - [Giới Cụm][Prepositional Phrase]:</p>
			
				<ul className="list-square">
			
					<li>We arrived [at noon].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [vào buổi trưa].</li>
			
					<li className="list-none">➔ Đặt khối [at noon] - [Giới Cụm][Prepositional Phrase] vào vị trí neo, đóng vai trò là một [Trạng Cụm][Adverb Phrase] chịu trách nhiệm cung cấp mốc thời gian diễn ra sự việc.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Cấp độ [Câu][Clause]:</p>
			
				<ul className="list-square">
			
					<li>We arrived [after the rain stopped].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [sau khi cơn mưa tạnh].</li>
			
					<li className="list-none">➔ Đặt khối [after the rain stopped] - [Hiển-Liên Động Câu][Connector Verb Clause] giữ chức năng [Trạng Câu][Adverb Clause] có chứa hệ trục [S][V].</li>
			
				</ul>
			

			<p className="margin-top-20">Tương tự với việc thay khối cùng giữ Chức năng [Danh] làm [Danh Chủ][Noun Subject]:</p>

			<p className="margin-top-20 text-indent-whole">Cấp độ [Cơ][Base]:</p>
			
				<ul className="list-square">
			
					<li>[Knowledge] is power.</li>
					<li className="margin-bottom-20 list-none">[Tri thức] là sức mạnh.</li>
			
					<li className="list-none">➔ Khối [Knowledge] - [Diện Danh Cơ][Modified Noun Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "know" kết hợp hậu tố "-ledge" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base], giữ chức năng [Danh Cơ][Noun Base] đóng vai trò làm [Danh Chủ][Noun Subject].</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Cấp độ [Cụm][Phrase]:</p>
			
				<ul className="list-square">
			
					<li>[Learning a new language] is a huge advantage.</li>
					<li className="margin-bottom-20 list-none">[Việc học một ngôn ngữ mới] là một lợi thế lớn.</li>
			
					<li className="list-none">➔ Đặt khối [Learning a new language] - [Tiếp Động Cụm][Progressive Verb Phrase] giữ chức năng [Danh Cụm][Noun Phrase] đóng vai trò làm [Danh Chủ][Noun Subject].</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Cấp độ [Câu][Clause]:</p>
			
				<ul className="list-square">
			
					<li>[What you know] is power.</li>
					<li className="margin-bottom-20 list-none">[Những gì bạn biết] tạo nên sức mạnh.</li>
			
					<li className="list-none">➔ Đặt khối [What you know] - [Hiển-Liên Động Câu][Connector Verb Clause] giữ chức năng [Danh Câu][Noun Clause] đóng vai trò làm [Danh Chủ][Noun Subject].	</li>
			
				</ul>
			
			
			
			<p className="margin-top-20">Kỹ thuật dịch chuyển khối cùng chức năng này mang lại sự chủ động tuyệt đối khi viết. Thay vì ghi nhớ các công thức biến đổi máy móc, bạn chỉ cần nhìn câu văn dưới dạng các hộp hình khối độc lập và tự do nâng cấp từ [Cơ][Base] lên [Cụm][Phrase], hoặc chuyển đổi mượt mà giữa [Động][Verb], [Giới][Preposition] và [Câu][Clause] theo ý muốn.</p>

			<p>Hệ Trục Tọa Độ Quy Tắc [3C] phối hợp cùng ma trận [Danh] - [Tính] - [Trạng] chính là chiếc chìa khóa vạn năng giúp quét cấu trúc câu với tốc độ ánh sáng để đạt đến phản xạ tự nhiên: Nhìn hình thái ➔ Định vị trí ➔ Hiểu bản chất!</p>

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