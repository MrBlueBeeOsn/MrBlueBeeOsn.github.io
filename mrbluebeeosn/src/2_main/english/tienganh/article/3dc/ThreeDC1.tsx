import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ThreeDC1(): React.ReactElement {

	const postId = "ThreeDC1";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#functional-thinking-terms"><mark className="highlight-tertiary-padding-4-8">Functional Thinking</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">[BỘ 3 PHỤ KHỐI]
												
				{/* <sup><HashLink smooth to="/tieng-anh/three-dc-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/three-dc-2">&nbsp;2&nbsp;</HashLink>
				</sup> */}

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

			<h4 className="margin-bottom-30 text-center">BÍ QUYẾT LÀM CHỦ "[BỘ 3 PHỤ KHỐI]" VÀ HỆ THỐNG ĐỘNG LỰC HỌC TIẾNG ANH LÊN TẦM ADVANCED</h4>

			<p>Khi mới học tiếng Anh, chúng ta thường có xu hướng tư duy theo từng thành phần đơn lẻ rồi lắp ghép chúng lại thành những câu ngắn ngủi, rời rạc. Tuy nhiên, để chạm đến ngưỡng <strong>Advanced English</strong> – giao tiếp mượt mà và viết lách sắc bén – bạn bắt buộc phải chuyển mình sang tư duy theo cụm khối.</p>

			<p>Chìa khóa vàng để thực hiện bước chuyển mình đó chính là làm chủ mối quan hệ giữa <strong>Hình thái khối hành động</strong> / <strong>khối quan hệ</strong> và <strong>Chức năng vận hành</strong> của chúng trong câu. Bài viết này sẽ là một cẩm nang toàn diện, giúp bạn thay đổi hoàn toàn thế giới quan về cấu trúc tiếng Anh thông qua hệ thống tư duy hai chiều Ngang - Dọc tối giản và logic nhất.</p>

			
		
			{/* 1.  */}

			<h3 className="margin-y-50 text-center">I. HỆ THỐNG TƯ DUY HAI CHIỀU: HÌNH THÁI TRƯỚC, CHỨC NĂNG SAU</h3>

			<p>Để bẻ khóa tiếng Anh nâng cao, người học cần nhìn nhận một khối biểu hiện dựa trên <strong>Hình thái biểu hiện</strong> của nó trước, sau đó mới xác định <strong>Chức năng</strong> dựa vào vị trí đứng trong câu. Hệ thống này được đồng bộ hóa một cách nhất quán theo hai trục:</p>
			
				<ul className="list-square">
			
					<li><strong>Chiều dọc</strong> – <strong>4 Cấp độ Hình thái</strong>: [Động Cơ][Verb Base] → [Động Cụm][Verb Phrase] → [Giới Cụm][Prepositional Phrase] → [Liên Câu][Conjunctional Clause]. Người học khi nhìn vào một câu chỉ cần nhận diện khối biểu hiện đang ở hình thái nào.</li>
			
					<li><strong>Chiều ngang</strong> – <strong>3 Chức năng</strong>: [Danh][Noun] / [Tính][Adjective] / [Trạng][Adverb]. Tùy thuộc vào vị trí đứng, các Hình thái trên sẽ "hóa thân" để thực thi một trong ba chức năng này.</li>
			
				</ul>
			

			<p className="margin-top-20">Từ sự giao thoa này, chúng ta có sự phân cấp vận hành tiếng Anh toàn diện dưới đây:</p>
			
				<ul className="list-square">

					<li><strong>Ở cấp độ</strong> [<strong>Động Cơ</strong>][<strong>Verb Base</strong>]: Sinh ra [Danh Cơ][Noun Base], [Tính Cơ][Adjective Base], [Trạng Cơ][Adverb Base].</li>
			
					<li><strong>Ở cấp độ</strong> [<strong>Động Cụm</strong>][<strong>Verb Phrase</strong>]: Sinh ra [Danh Cụm][Noun Phrase], [Tính Cụm][Adjective Phrase], [Trạng Cụm][Adverb Phrase].</li>
			
					<li><strong>Ở cấp độ</strong> [<strong>Giới Cụm</strong>][<strong>Prepositional Phrase</strong>]: Sinh ra [Tính Cụm][Adjective Phrase], [Trạng Cụm][Adverb Phrase].</li>

					<li><strong>Ở cấp độ</strong> [<strong>Liên Câu</strong>][<strong>Conjunctional Clause</strong>]: Sinh ra [Danh Câu][Noun Clause], [Tính Câu][Adjective Clause], [Trạng Câu][Adverb Clause].</li>
			
				</ul>



			{/* II. */}

			<h3 className="margin-y-50 text-center">II. HỆ THỐNG PHÂN LOẠI ĐỘNG CƠ PHỨC HỢP THEO NHÓM</h3>


			<p>Dưới đây là sơ đồ bóc tách cách các phân loại [Động Cơ][Verb Base] phối hợp để tạo nên các cấu hình thời gian và thái độ khác nhau thông qua các nhóm chức năng chuyên biệt:</p>
          
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 1</strong>: [<strong>Thời Động Cơ</strong>][<strong>Tense Verb Base</strong>]</p>

      <p className="text-indent-whole">Nhóm này dùng để chia mốc thời gian và trạng thái hoàn thành/tiếp diễn.</p>

        <ul className="list-square">
      
          <li>be upGRADing → [Thời] be (am/is/are, was/were) + [Tiếp Động Cơ] upGRADing</li>

          <li>have been reSTRUCturing → [Thời + Hoàn] have/has/had + been + [Tiếp Động Cơ] reSTRUCturing</li>
      
          <li>have VALidated → [Thời + Hoàn] have/has/had + VALidated</li>
      
          <li>pioNEERS, pioNEERED → [Thời-Thuần Động Cơ] Tích hợp</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 2</strong>: [<strong>Thuần Động Cơ</strong>][<strong>Bare Verb Base</strong>]</p>

      <p className="text-indent-whole">Nhóm dùng dạng nguyên bản, không chia.</p>

        <ul className="list-square">
      
          <li>to coORdinate → [Hạt] to + [Thuần Động Cơ] coORdinate</li>
      
          <li>DID conFIRM → [Thời] did (Nhấn mạnh) + [Thuần Động Cơ] conFIRM</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 3</strong>: [<strong>Ý-Thái Thuần Động Cơ</strong>][<strong>Soft-Modal Bare Verb Base</strong>]</p>

      <p className="text-indent-whole">Nhóm tình huống lịch sự, gợi ý: would (nhã nhặn), should (gợi ý), could (khả năng nhẹ), might (khả năng thấp), ought to (khuyên bảo), had better (khuyên nhủ).</p>

        <ul className="list-square">
      
          <li>should STREAMline → [Ý-Thái] should (gợi ý) + [Thuần Động Cơ] STREAMline</li>
      
          <li>could neGOtiate → [Ý-Thái] could (khả năng nhẹ) + [Thuần Động Cơ] neGOtiate</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 4</strong>: [<strong>Áp-Thái Thuần Động Cơ</strong>][<strong>Assertive-Modal Bare Verb Base</strong>]</p>

      <p className="text-indent-whole">Nhóm tình huống ép buộc, chắc chắn: will (cam kết), shall (chắc chắn), can (năng lực), must (ép buộc), have to (bắt buộc), may (khả năng).</p>

        <ul className="list-square">
      
          <li>will IMplement → [Áp-Thái] will (cam kết) + [Thuần Động Cơ] IMplement</li>
      
          <li>must AUthorize → [Áp-Thái] must (ép buộc) + [Thuần Động Cơ] AUthorize</li>
      
        </ul>

			

			{/* III. */}

			<h3 className="margin-y-50 text-center">III. PHÂN HỆ [CƠ][BASE] (HỆ THỐNG 16 MỤC CỐT LÕI)</h3>

			<p>Hệ thống biểu hiện hành động và thái độ ở cấp độ từ đơn lẻ hoặc tổ hợp tuyến tính tối giản được chuẩn hóa qua 16 mục hình thái dưới đây:</p>
			
				<ol>
      
          <li value="1">[<strong>Rễ Động Cơ</strong>][<strong>Root Verb Base</strong>]: ANalyze, INnovate, transFORM</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng [Rễ Động Cơ][Root Verb Base] nguyên thủy nhất, chưa thêm bớt hay kết hợp với bất kỳ hành động nào khác.</li>
      
          <li value="2">[<strong>Hạt Động Cơ</strong>][<strong>Particle Verb Base</strong>]: to, UP, OUT, DOWN, OFF, ON, IN, aWAY, BACK, Over,...</li>
          <li className="margin-bottom-20 list-none">[Hạt] "to" đơn lẻ đóng vai trò hạt nhân đầu tiên đứng trước mọi khối hành động để kích hoạt trạng thái nguyên bản. Các [Hạt] như UP, OUT, DOWN, OFF, ON, IN, aWAY, BACK, Over,... đơn lẻ đứng sau hành động để điều hướng không gian, hoàn tất hoặc biến đổi sắc thái ý nghĩa của hành động gốc.</li>

          <li value="3">[<strong>Thời Động Cơ</strong>][<strong>Tense Verb Base</strong>]: does, did, is, has, was, am, are</li>
          <li className="margin-bottom-20 list-none">Hành động đơn lẻ xuất hiện để mang năng lượng [Thời] gian / [Thời] trong câu.</li>
      
          <li value="4">[<strong>Ý-Thái Động Cơ</strong>][<strong>Soft-Modal Verb Base</strong>]: would, could, should, might, ought to, had BETter</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ mang tính [Ý] nhị, có [Ý] tứ, mong muốn là thật nhưng cách nói nhường nhịn và triệt tiêu tính ép. Các khối phức đặc biệt "ought to" và "had BETter" được quét như một [Phức Ý-Thái Động Cơ] [Complex Soft-Modal Verb Base] thống nhất.</li>

          <li value="5">[<strong>Áp-Thái Động Cơ</strong>][<strong>Assertive-Modal Verb Base</strong>]: will, shall, can, must, have to, may</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ mang tính trực diện, [Áp] đặt thực tế xuống, không chừa lối thoát cho người nghe. Khối phức đặc biệt "HAVE to" được quét như một [Phức Áp-Thái Động Cơ] [Complex Assertive-Modal Verb Base] thống nhất.</li>

          <li value="6">[<strong>Thuần Động Cơ</strong>][<strong>Bare Verb Base</strong>]: ANalyze, INnovate, transFORM</li>
          <li className="margin-bottom-20 list-none">Hành động [Thuần] khiết đứng tự do một mình, không có to đi kèm, thường đứng ngay sau [Hạt Động Cơ][Particle Verb Base] "to", [Ý-Thái][Soft-Modal] hay [Áp-Thái Động Cơ][Assertive-Modal Verb Base] hoặc [Rễ Động Cơ][Root Verb Base] MAKE, LET, LET'S, HELP, HAVE, GET, SEE, HEAR, WATCH, FEEL, NOtice, obSERVE, SMELL,...</li>
      
          <li value="7">[<strong>Hạt Thuần Động Cơ</strong>][<strong>Particle Bare Verb Base</strong>]: to ANalyze, to transFORM</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính lấy tên phần tử đầu tiên [Hạt Động Cơ] kết hợp cùng hành động [Thuần] khiết phía sau.</li>

          <li value="8">[<strong>Ý-Thái Thuần Động Cơ</strong>][<strong>Soft-Modal Bare Verb Base</strong>]: would transFORM, should ANalyze</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Ý] nhị, không ép và hành động [Thuần] khiết.</li>
      
          <li value="9">[<strong>Áp-Thái Thuần Động Cơ</strong>][<strong>Assertive-Modal Bare Verb Base</strong>]: will transFORM, can ANalyze</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Áp] đặt thực tế xuống và hành động [Thuần] khiết.</li>

          <li value="10">[<strong>Thời Thuần Động Cơ</strong>][<strong>Tense Bare Verb Base</strong>]: DID ANalyze, DOES transFORM</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] và hành động [Thuần] khiết song hành, được tách riêng biệt bằng một khoảng trắng trong câu.</li>

          <li value="11">[<strong>Thời-Thuần Động Cơ</strong>][<strong>Tense-Bare Verb Base</strong>]: ANalyzed, ANalyzes, transFORMS</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] (Quá khứ/Hiện tại) và hành động [Thuần] khiết hòa tan, gộp chung hoàn toàn vào trong cùng một chữ đơn duy nhất.</li>
      
          <li value="12">[<strong>Tiếp Động Cơ</strong>][<strong>Progressive Verb Base</strong>]: ANalyzing, INnovating, transFORMing</li>
          <li className="margin-bottom-20 list-none">Hành động mang đuôi -ing thể hiện tính chất đang [Tiếp] diễn, kéo dài.</li>

          <li value="13">[<strong>Hoàn Động Cơ</strong>][<strong>Perfect Verb Base</strong>]: ANalyzed, INnovated, been, transFORMED</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng cột 3 hoặc thêm đuôi -ed thể hiện tính chất đã trọn vẹn, [Hoàn] thành.</li>
      
          <li value="14">[<strong>Thời Tiếp Động Cơ</strong>][<strong>Tense Progressive Verb Base</strong>]: is ANalyzing, was transFORMing</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa hành động mang [Thời] gian và hành động mang tính [Tiếp] diễn.</li>

          <li value="15">[<strong>Thời Hoàn Động Cơ</strong>][<strong>Tense Perfect Verb Base</strong>]: has ANalyzed, had transFORMED</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa hành động mang [Thời] và hành động mang tính [Hoàn] thành.</li>
      
          <li value="16">[<strong>Thời Hoàn Tiếp Động Cơ</strong>][<strong>Tense Perfect Progressive Verb Base</strong>]: has been ANalyzing, had been transFORMing</li>
          <li className="list-none">Sự hợp nhất tuyến tính giữa ba lớp năng lượng [Thời] gian, [Hoàn] thành và [Tiếp] diễn.</li>
      
        </ol>

			
			{/* IV. */}

			<h3 className="margin-y-50 text-center">IV. PHÂN HỆ [CỤM][PHRASE]</h3>
			
			
			<p><strong>Quy tắc cốt lõi</strong>:</p>

			<p className="margin-top-20">Khi bất kỳ họ [Cơ][Base] nào (thuộc nhóm 16 mục trên) kéo theo các [Danh Nhận][Noun Object], [Trạng Cơ][Adverb Base], [Trạng Cụm][Adverb Phrase], hoặc [Trạng Câu][Adverb Clause] phía sau, toàn khối đó tự động chuyển đổi cấu trúc nội bộ và tái dán nhãn thành dạng [Cụm][Phrase] tương ứng của chính nó.</p>
			
				<ul className="list-square">
			
					<li>Ví dụ 1: upGRADing [Tiếp Động Cơ][Progressive Verb Base] + the SYStem [Danh Nhận][Noun Object]</li>
					<li className="margin-bottom-20 list-none">→ upGRADing the SYStem [Tiếp Động Cụm][Progressive Verb Phrase].</li>
			
					<li>Ví dụ 2: to coORdinate [Hạt Thuần Động Cơ][Particle Bare Verb Base] + efFIciently [Trạng Cơ][Adverb Base]</li>
					<li className="margin-bottom-20 list-none">→ to coORdinate efFIciently [Hạt Thuần Động Cụm][Particle Bare Verb Phrase].</li>
			
					<li>Ví dụ 3: will IMplement [Áp-Thái Thuần Động Cơ][Assertive-Modal Bare Verb Base] + the STRATegy [Danh Nhận][Noun Object]</li>
					<li className="list-none">→ will IMplement the STRATegy [Áp-Thái Thuần Động Cụm][Assertive-Modal Bare Verb Phrase].</li>
			
				</ul>
			
			<p className="margin-top-20">Hệ thống [Cụm][Phrase] vận hành như một thực thể mở rộng linh hoạt, giữ nguyên thuộc tính gốc của hạt nhân [Cơ][Base] nhưng mang theo các thành phần bổ trợ để hoàn chỉnh một khối ý niệm hành động lớn hơn trước khi định vị chức năng trong câu.</p>

			{/* V. */}

			<h3 className="margin-y-50 text-center">V. CÁC CẤP ĐỘ VẬN HÀNH THỰC TẾ QUA VÍ DỤ</h3>

			
			<h4 className="margin-y-40">1. Hình thái [ĐỘNG CƠ][VERB BASE]</h4>

			<p className="text-indent-whole">Là đơn vị hành động hạt nhân nhỏ nhất, chỉ gồm đúng 1 từ. Vị trí đứng trong khối sẽ quyết định chức năng của khối hành động này:</p>


			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 1a</strong>: <strong>Sinh ra</strong> [<strong>DANH CƠ</strong>][<strong>NOUN BASE</strong>] <strong>làm khối</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>
			
				<ul className="list-square">
			
					<li>[JOGging] STRENGTHens the HEART.</li>
					<li className="margin-bottom-20 list-none">[Việc chạy bộ] làm khỏe cơ tim.</li>
			
					<li className="list-none">Hình thái: Khối [JOGging] - [Tiếp Động Cơ][Progressive Verb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "JOG" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] đại diện cho một hành động biểu hiện khối cô đọng.</li>
			
					<li className="list-none">Chức năng: Khối [JOGging] - [Danh Cơ][Noun Base] đóng vai trò làm [Danh Chủ][Noun Subject] thực hiện hành động cho cả khối chịu sự quản lý thời gian của [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "STRENGTHens".</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 1b</strong>: <strong>Sinh ra</strong> [<strong>DANH CƠ</strong>][<strong>NOUN BASE</strong>] <strong>làm khối</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>
			
				<ul className="list-square">
			
					<li>she enJOYS [SWIMming].</li>
					<li className="margin-bottom-20 list-none">Cô ấy thích [việc bơi lội].</li>
			
					<li className="list-none">Hình thái: Khối [SWIMming] - [Tiếp Động Cơ][Progressive Verb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "SWIM" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] đại diện cho một hành động biểu hiện khối cô đọng.</li>
			
					<li className="list-none">Chức năng: Khối [SWIMming] - [Danh Cơ][Noun Base] đóng vai trò làm [Danh Nhận][Noun Object] chịu sự điều phối trực tiếp của [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "enJOYS".</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 2</strong>: <strong>Sinh ra</strong> [<strong>TÍNH CƠ</strong>][<strong>ADJECTIVE BASE</strong>]:</p>
			
				<ul className="list-square">
			
					<li>we NEED a [CUStomized] soLUtion.</li>
					<li className="margin-bottom-20 list-none">Chúng tôi cần một giải pháp [được thiết kế riêng].</li>
			
					<li className="list-none">Hình thái: Khối [CUStomized] - [Hoàn Động Cơ][Perfect Verb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "CUStomize" mặc thêm hậu tố "-ed" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] mang đặc tính bị động, hoàn tất.</li>
			
					<li className="list-none">Chức năng: Khối [CUStomized] - [Tính Cơ][Adjective Base] đứng ngay trước một thực thể để biểu thị đặc tính và bổ nghĩa cho thực thể đó.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 3</strong>: <strong>Sinh ra</strong> [<strong>TRẠNG CƠ</strong>][<strong>ADVERB BASE</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the SYStem FAILED [unexPECtedly] FAST.</li>
					<li className="margin-bottom-20 list-none">Hệ thống đã trục trặc nhanh [một cách bất ngờ].</li>
			
					<li className="list-none">Hình thái: Khối [unexPECtedly] - [Diện Trạng Cơ][Modified Adverb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "exPECT" mặc thêm (kết hợp) tiền tố phủ định "un-" cùng tổ hợp các hậu tố biến đổi trạng thái "-ed" và "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] biểu thị hoàn cảnh trạng thái đặc biệt.</li>
			
					<li className="list-none">Chức năng: Khối [unexPECtedly] - [Trạng Cơ][Adverb Base] đứng trước để biểu thị mức độ, tính chất bối cảnh và bổ nghĩa trực tiếp cho từ mô tả đặc tính nhanh đứng liền phía sau.</li>
			
				</ul>
			


			<h4 className="margin-y-40">2. Hình thái [ĐỘNG CỤM][VERB PHRASE]</h4>

			<p className="text-indent-whole">Là một khối hành động chứa nhiều từ kết hợp với nhau nhưng chưa có cấu trúc câu phức tạp hoàn chỉnh. Khối [Động Cụm][Verb Phrase] này sẽ đảm nhận các vai trò:</p>

			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 1a</strong>: <strong>Sinh ra</strong> [<strong>DANH CỤM</strong>][<strong>NOUN PHRASE</strong>] <strong>làm khối</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>
			
				<ul className="list-square">
			
					<li>it TAKES exCEPtional negotiAtion SKILLS [to seCURE this CONtract].</li>
					<li className="margin-bottom-20 list-none">Cần có kỹ năng đàm phán xuất sắc [để đạt được hợp đồng này].</li>
			
					<li className="list-none">Hình thái: Khối [to seCURE this CONtract] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] bắt đầu bằng [Hạt Thuần Động Cơ][Particle Bare Verb Base] "to seCURE" kéo theo một [Danh Nhận][Noun Object] phía sau.</li>
			
					<li className="list-none">Chức năng: Khối [to seCURE this CONtract] - [Danh Cụm][Noun Phrase] đóng vai trò làm [Danh Chủ][Noun Subject] đứng sau [Thời-Thuần Động Cụm][Tense-Bare Verb Phrase] "TAKES exCEPtional negotiAtion SKILLS" để bổ nghĩa cho [Giữ Chủ][Placeholder Subject] "It".</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 1b</strong>: <strong>Sinh ra</strong> [<strong>DANH CỤM</strong>][<strong>NOUN PHRASE</strong>] <strong>làm khối</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>
			
				<ul className="list-square">
			
					<li>the MANagement reSOLVED [to LIQuidate the underperFORming ASsets].</li>
					<li className="margin-bottom-20 list-none">Ban quản lý đã quyết định [thanh lý các tài sản kém hiệu quả].</li>
			
					<li className="list-none">Hình thái: Khối [to LIQuidate the underperFORming ASsets] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] bắt đầu bằng [Hạt Thuần Động Cơ][Particle Bare Verb Base] "to LIQuidate" kéo theo một cụm [Danh Nhận][Noun Object] phức hợp phía sau.</li>
			
					<li className="list-none">Chức năng: Khối [to LIQuidate the underperFORming ASsets] - [Danh Cụm][Noun Phrase] làm khối [Danh Nhận][Noun Object] mục tiêu cần thực hiện, đứng sau chịu sự điều phối của [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "reSOLVED".</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 2</strong>: <strong>Sinh ra</strong> [<strong>TÍNH CỤM</strong>][<strong>ADJECTIVE PHRASE</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the OFficer [SUpervising the AUdit] deTECted a disCREPancy.</li>
					<li className="margin-bottom-20 list-none">Người viên chức [đang giám sát việc kiểm toán] đã phát hiện ra một sự bất nhất.</li>
			
					<li className="list-none">Hình thái: Khối [SUpervising the AUdit] - [Tiếp Động Cụm][Progressive Verb Phrase] bắt đầu bằng một [Tiếp Động Cơ][Progressive Verb Base] "SUpervising" kết hợp với một [Danh Nhận][Noun Object] phía sau.</li>
			
					<li className="list-none">Chức năng: Khối [SUpervising the AUdit] - [Tính Cụm][Adjective Phrase] đứng ngay sau thực thể "the OFficer" để bổ nghĩa đặc điểm xác định cho thực thể đó.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 3</strong>: <strong>Sinh ra</strong> [<strong>TRẠNG CỤM</strong>][<strong>ADVERB PHRASE</strong>]:</p>
			
				<ul className="list-square">
			
					<li>he atTENDS WORKshops [to reFINE his LEADership STYLE].</li>
					<li className="margin-bottom-20 list-none">Anh ấy tham gia các hội thảo [để trau dồi phong cách lãnh đạo].</li>
			
					<li className="list-none">Hình thái: Khối [to reFINE his LEADership STYLE] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] bắt đầu bằng [Hạt Thuần Động Cơ][Particle Bare Verb Base] "to reFINE" kéo theo một cụm [Danh Nhận][Noun Object] làm thành phần bổ trợ.</li>
			
					<li className="list-none">Chức năng: Khối [to reFINE his LEADership STYLE] - [Trạng Cụm][Adverb Phrase] đứng cuối nhằm giải thích bối cảnh mục đích cho hành động tham gia được vận hành bởi [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "atTENDS".</li>
			
				</ul>


			<h4 className="margin-y-40">3. Hình thái [GIỚI CỤM][PREPOSITIONAL PHRASE]</h4>

			<p className="text-indent-whole">Là khối không bắt đầu bằng một từ hành động, mà được định hình bắt đầu bằng một [Giới Cơ][Prepositional Base] chỉ quan hệ kết hợp với một [Danh Nhận][Noun Object] phía sau.</p>

			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 1</strong>: <strong>Sinh ra</strong> [<strong>TÍNH CỤM</strong>][<strong>ADJECTIVE PHRASE</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the OFfice [on the TOP FLOOR] has panoRAMic VIEWS.</li>
					<li className="margin-bottom-20 list-none">Văn phòng [ở tầng trên cùng] có tầm nhìn toàn cảnh.</li>
			
					<li className="list-none">Hình thái: Khối [on the TOP FLOOR] - [Giới Cụm][Prepositional Phrase] bắt đầu bằng [Giới Cơ][Prepositional Base] "on" liên kết quan hệ không gian trực tiếp với cụm [Danh Nhận][Noun Object] "the TOP FLOOR".</li>
			
					<li className="list-none">Chức năng: Khối [on the TOP FLOOR] - [Tính Cụm][Adjective Phrase] đứng ôm sát ngay sau khối biểu thị thực thể "the OFfice" để bổ nghĩa chỉ bối cảnh vị trí đặc trưng cho văn phòng đó.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 2</strong>: <strong>Sinh ra</strong> [<strong>TRẠNG CỤM</strong>][<strong>ADVERB PHRASE</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the SYStem upDATES autoMATically [at MIDnight].</li>
					<li className="margin-bottom-20 list-none">Hệ thống tự động cập nhật [vào lúc nửa đêm].</li>
			
					<li className="list-none">Hình thái: Khối [at MIDnight] - [Giới Cụm][Prepositional Phrase] bắt đầu bằng [Giới Cơ][Prepositional Base] "at" liên kết quan hệ thời gian trực tiếp với [Danh Nhận][Noun Object] "MIDnight".</li>
			
					<li className="list-none">Chức năng: Khối [at MIDnight] - [Trạng Cụm][Adverb Phrase] đứng cuối câu nhằm bổ nghĩa hoàn cảnh mốc thời gian diễn ra hành động cập nhật của hệ thống.</li>
			
				</ul>



			<h4 className="margin-y-40">4. Hình thái [LIÊN CÂU][CONJUNCTIONAL CLAUSE]</h4>

			<p className="text-indent-whole">Là đơn vị hành động mạnh mẽ nhất vì chứa cấu trúc khối hoàn chỉnh bên trong có [Danh Chủ][Noun Subject] và các cấu hình [Động Cơ][Verb Base] riêng biệt, đồng thời được dẫn dắt trực tiếp bởi một [Liên Cơ][Conjunctional Base] tường minh:</p>


			<p className="text-indent-whole"><strong>Ví dụ 1a</strong>: <strong>Sinh ra</strong> [<strong>DANH CÂU</strong>][<strong>NOUN CLAUSE</strong>] <strong>làm khối</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>
			
				<ul className="list-square">
			
					<li>[how the TEAM seCURES the FUNding] reMAINS a CRITical QUEStion.</li>
					<li className="margin-bottom-20 list-none">[Cách mà đội ngũ đảm bảo nguồn vốn] vẫn là một câu hỏi then chốt.</li>
			
					<li className="list-none">Hình thái: Khối [how the TEAM seCURES the FUNding] - [Liên Câu][Conjunctional Clause] bắt đầu bằng [Liên Cơ][Conjunctional Base] "How" kết hợp với cấu trúc một khối hoàn chỉnh có [Danh Chủ][Noun Subject] "the TEAM" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "seCURES".</li>
			
					<li className="list-none">Chức năng: Khối [how the TEAM seCURES the FUNding] - [Danh Câu][Noun Clause] đóng vai trò làm [Danh Chủ][Noun Subject] đứng trước điều phối [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "reMAINS".</li>
			
				</ul>


			<p className="text-indent-whole"><strong>Ví dụ 1b</strong>: <strong>Sinh ra</strong> [<strong>DANH CÂU</strong>][<strong>NOUN CLAUSE</strong>] <strong>làm khối</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>
			
				<ul className="list-square">
			
					<li>the aNALysis reVEALED [that the ALgorithm posSESSED a BIas].</li>
					<li className="margin-bottom-20 list-none">Kết quả phân tích cho thấy [rằng thuật toán đã có một sự thiên vị].</li>
			
					<li className="list-none">Hình thái: Khối [that the ALgorithm posSESSED a BIas] - [Liên Câu][Conjunctional Clause] bắt đầu bằng [Liên Cơ][Conjunctional Base] "that" kết hợp với cấu trúc một khối hoàn chỉnh có [Danh Chủ][Noun Subject] "the ALgorithm" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "posSESSED".</li>
			
					<li className="list-none">Chức năng: Khối [that the ALgorithm posSESSED a BIas] - [Danh Câu][Noun Clause] làm khối [Danh Nhận][Noun Object] chịu tác động trực tiếp đứng sau điều phối của [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "reVEALED".</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 2</strong>: <strong>Sinh ra</strong> [<strong>TÍNH CÂU</strong>][<strong>ADJECTIVE CLAUSE</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the SOFTware [which the TEAM dePLOYED LAST NIGHT] CRASHED.</li>
					<li className="margin-bottom-20 list-none">Phần mềm [mà đội ngũ đã triển khai đêm qua] đã gặp sự cố.</li>
			
					<li className="list-none">Hình thái: Khối [which the TEAM dePLOYED LAST NIGHT] - [Liên Câu][Conjunctional Clause] bắt đầu bằng [Liên Cơ][Conjunctional Base] quan hệ "which" kết hợp với cấu trúc một khối hoàn chỉnh có [Danh Chủ][Noun Subject] "the TEAM" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "dePLOYED".</li>
			
					<li className="list-none">Chức năng: Khối [which the TEAM dePLOYED LAST NIGHT] - [Tính Câu][Adjective Clause] đứng ôm ngay sau thực thể "the SOFTware" để bổ nghĩa chi tiết cho thực thể đó.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 3</strong>: <strong>Sinh ra</strong> [<strong>TRẠNG CÂU</strong>][<strong>ADVERB CLAUSE</strong>]:</p>
			
				<ul className="list-square">
			
					<li>we will HALT proDUCtion [unless the QUAlity STANdard imPROVES].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi sẽ dừng sản xuất [trừ khi tiêu chuẩn chất lượng cải thiện].</li>
			
					<li className="list-none">Hình thái: Khối [unless the QUAlity STANdard imPROVES] - [Liên Câu][Conjunctional Clause] bắt đầu bằng [Liên Cơ][Conjunctional Base] điều kiện "unless" kết hợp với cấu trúc khối hoàn chỉnh có [Danh Chủ][Noun Subject] "the QUAlity STANdard" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "imPROVES".</li>
			
					<li className="list-none">Chức năng: Khối [unless the QUAlity STANdard imPROVES] - [Trạng Câu][Adverb Clause] bổ nghĩa bối cảnh tình huống điều kiện cho hành động dừng được định vị bởi [Áp-Thái Động Cơ][Assertive-Modal Verb Base] "will".</li>
			
				</ul>


			{/* VI. */}

			<h3 className="margin-y-50 text-center">VI. HIỆN TƯỢNG [ẨN LIÊN CÂU][ZERO CONJUNCTIONAL CLAUSE]</h3>

			<p>Trong thực tế, rất nhiều khối [Liên Câu][Conjunctional Clause] được lược bỏ hoàn toàn [Liên Cơ][Conjunctional Base] dẫn dắt. Lúc này, khối biểu hiện có hình thái bề ngoài giống hệt như một câu độc lập, nhưng chúng bắt buộc phải gắn kết chặt chẽ vào hệ thống để thực thi các chức năng cốt lõi:</p>


			<p className="margin-top-20"><strong>Ví dụ 1</strong>: [<strong>DANH CÂU</strong>][<strong>NOUN CLAUSE</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the exECutive asSUMED [the BOARD would apPROVE the BUDget].</li>
					<li className="margin-bottom-20 list-none">Vị giám đốc điều hành đã giả định [ban quản trị sẽ phê duyệt ngân sách].</li>
			
					<li className="list-none">Hình thái: Khối [the BOARD would apPROVE the BUDget] - [Ẩn-Liên Câu][Zero-Conjunctional Clause] lồng ghép trực tiếp đứng sau hành động chính mà không cần sự hỗ trợ của [Liên Cơ][Conjunctional Base] "that".</li>
			
					<li className="list-none">Chức năng: Khối [the BOARD would apPROVE the BUDget] thực thi chức năng [Danh Câu][Noun Clause] làm nhiệm vụ của một [Danh Nhận][Noun Object] chịu tác động trực tiếp đứng sau sự điều phối của [Thời-Thuần Động Cơ][Tense-Bare Verb Base] asSUMED.</li>
			
				</ul>
			
			
			<p className="margin-top-20"><strong>Ví dụ 2</strong>: [<strong>TÍNH CÂU</strong>][<strong>ADJECTIVE CLAUSE</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the MENtor [i conSULted YESterday] proVIded inVALuable adVICE.</li>
					<li className="margin-bottom-20 list-none">Người cố vấn [tôi đã xin ý kiến ngày hôm qua] đã đưa ra lời khuyên vô giá.</li>
			
					<li className="list-none">Hình thái: Khối [i conSULted YESterday] - [Ẩn-Liên Câu][Zero-Conjunctional Clause] có sự lược bỏ [Liên Cơ][Conjunctional Base] dẫn dắt đối tượng nhưng vẫn đảm bảo cấu trúc chủ-vị hoàn chỉnh ở bên trong.</li>
			
					<li className="list-none">Chức năng: Khối [i conSULted YESterday] thực thi chức năng [Tính Câu][Adjective Clause] đứng ôm ngay sau thực thể "the MENtor" để bổ nghĩa đặc điểm xác định cho thực thể đó.</li>
			
				</ul>
			
			
			<p className="margin-top-20"><strong>Ví dụ 3</strong>: [<strong>TRẠNG CÂU</strong>][<strong>ADVERB CLAUSE</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the HIGHer the PRESsure RIses, [the FASter the CHEMical reACTS].</li>
					<li className="margin-bottom-20 list-none">Áp suất càng tăng cao, [hóa chất càng phản ứng nhanh hơn].</li>
			
					<li className="list-none">Hình thái: Khối [the FASter the CHEMical reACTS] - [Ẩn-Liên Câu][Zero-Conjunctional Clause] mang cấu trúc so sánh lũy tiến song hành đặc trưng nhưng không sử dụng [Liên Cơ][Conjunctional Base] phụ thuộc truyền thống.</li>
			
					<li className="list-none">Chức năng: Khối [the FASter the CHEMical reACTS] thực thi chức năng [Trạng Câu][Adverb Clause] đóng vai trò một khối bối cảnh tương quan hệ quả để bổ nghĩa bối cảnh hệ quả cho vế điều kiện phía trước.</li>
			
				</ul>
			


			
			{/* VII. */}

			<h3 className="margin-y-50 text-center">VII. BẢN CHẤT PHÂN [TẦNG][TIERED] VÀ NGUYÊN TẮC "ĐIỂM NEO"</h3>

			<p>Trong các cấu trúc nâng cao, các hình thái lồng ghép vào nhau như các module linh kiện. Ranh giới ngoài cùng [] luôn đại diện cho khối bao quét tầng ngoài, và dấu {'{}'} sẽ bao quét khối lồng bên trong để thể hiện rõ mối quan hệ điều phối hệ thống.</p>


			<h4 className="margin-y-40">1. [DANH CỤM][NOUN PHRASE]</h4>

			<p className="text-indent-whole"><strong>Làm khối</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]:</p>

				<ul className="list-square">
			
					<li>it deMANDS sciencTIFic REsearch [to underSTAND {'{why the SPEcies went exTINCT}'}].</li>
					<li className="margin-bottom-20 list-none">Đòi hỏi các nghiên cứu khoa học [để thấu hiểu {'{tại sao loài này tuyệt chủng}'}].</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Khối bao ngoài [to underSTAND {'{why the SPEcies went exTINCT}'}] là một [Tầng Hạt Thuần Động Cụm][Tiered Particle Bare Verb Phrase] bắt đầu bằng [Hạt Thuần Động Cơ][Particle Bare Verb Base] "to underSTAND".</li>

					<li className="margin-bottom-20 list-none">Bên trong bao gói {'{why the SPEcies went exTINCT}'} là một [Liên Câu][Conjunctional Clause] dẫn dắt bằng biểu hiện nghi vấn "why".</li>
			
					<li className="list-none">Chức năng:</li>

					<li className="list-none">Khối {'{why the SPEcies went exTINCT}'} bên trong đóng vai trò là [Danh Câu][Noun Clause] làm [Danh Nhận][Noun Object] chịu sự điều phối của [Thuần Động Cơ][Bare Verb Base] "underSTAND".</li>

					<li className="list-none">Toàn bộ khối hỗn hợp [to underSTAND {'{why the SPEcies went exTINCT}'}] vận hành với chức năng [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] đóng vai trò tổng thể làm khối [Danh Chủ][Noun Subject] đứng sau [Thời-Thuần Động Cụm][Tense-Bare Verb Phrase] deMANDS sciencTIFic REsearch để bổ nghĩa cho [Giữ Chủ][Placeholder Subject] It.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Làm khối</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the SCIentists HOPE [to DEMonstrate {'{how the DRUG WORKS}'}].</li>
					<li className="margin-bottom-20 list-none">Các nhà khoa học hy vọng [chứng minh được {'{thuốc hoạt động như thế nào}'}].</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Khối bao ngoài [to DEMonstrate {'{how the DRUG WORKS}'}] là một [Tầng Hạt Thuần Động Cụm][Tiered Particle Bare Verb Phrase] bắt đầu bằng [Hạt Thuần Động Cơ][Particle Bare Verb Base] "to DEMonstrate".</li>

					<li className="margin-bottom-20 list-none">Bên trong bao gói {'{how the DRUG WORKS}'} là một [Liên Câu][Conjunctional Clause] bắt đầu bằng [Liên Cơ][Conjunctional Base] "how".</li>
			
					<li className="list-none">Chức năng:</li>

					<li className="list-none">Khối {'{how the DRUG WORKS}'} bên trong đóng vai trò là [Danh Câu][Noun Clause] làm [Danh Nhận][Noun Object] chịu sự điều phối trực tiếp của [Thuần Động Cơ][Bare Verb Base] "DEMonstrate".</li>

					<li className="list-none">Toàn bộ khối hỗn hợp [to DEMonstrate {'{how the DRUG WORKS}'}] vận hành với chức năng [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] đóng vai trò tổng thể làm khối [Danh Nhận][Noun Object] chịu sự điều phối trực tiếp của [Thời-Thuần Động Cơ][Tense-Bare Verb Base] HOPE.</li>
			
				</ul>
			


			<h4 className="margin-y-40">2. [TÍNH CỤM][ADJECTIVE PHRASE]</h4>
			
				<ul className="list-square">
			
					<li>the disPUTE [over {'{whether the COMpany should MERGE}'}] deLAYED the negoTIAtion.</li>
					<li className="margin-bottom-20 list-none">Cuộc tranh chấp [về việc {'{liệu công ty có nên sáp nhập hay không}'}] đã làm trì hoãn cuộc đàm phán.</li>
			
					<li className="list-none">Hình thái:</li>

					<li className="list-none">Khối tổng thể [over {'{whether the COMpany should MERGE}'}] là một [Tầng Giới Cụm][Tiered Prepositional Phrase] bắt đầu bằng [Giới Cơ][Prepositional Base] "over".</li>

					<li className="margin-bottom-20 list-none">Bên trong bao gói {'{whether the COMpany should MERGE}'} là một [Liên Câu][Conjunctional Clause] được mở đầu bằng [Liên Cơ][Conjunctional Base] "whether".</li>
			
					<li className="list-none">Chức năng:</li>

					<li className="list-none">Khối {'{whether the COMpany should MERGE}'} bên trong thực thi chức năng [Danh Câu][Noun Clause] làm [Danh Nhận][Noun Object] nhận quan hệ trực tiếp đứng sau [Giới Cơ][Prepositional Base] over.</li>

					<li className="list-none">Toàn bộ khối hỗn hợp [over {'{whether the COMpany should MERGE}'}] vận hành với chức năng [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] ở tầng ngoài để ôm sau bổ nghĩa đặc điểm cho cụm the disPUTE.</li>

			
				</ul>


			<h4 className="margin-y-40">3. [TRẠNG CỤM][ADVERB PHRASE]</h4>
			
				<ul className="list-square">
			
					<li>they rediSIGNED the NETwork [because of {'{how FREquently the SERver CRASHED}'}].</li>
					<li className="margin-bottom-20 list-none">Họ đã thiết kế lại hệ thống mạng [bởi vì {'{máy chủ đã trục trặc thường xuyên như thế nào}'}].</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Khối tổng thể [because of {'{how FREquently the SERver CRASHED}'}] là một [Tầng Phức Giới Cụm][Tiered Complex Prepositional Phrase] bắt đầu bằng [Phức Giới Cơ][Complex Prepositional Base] "because of".</li>

					<li className="margin-bottom-20 list-none">Bên trong bao gói {'{how FREquently the SERver CRASHED}'} là một [Liên Câu][Conjunctional Clause] bắt đầu bằng tổ hợp tuyến tính gồm [Liên Cơ][Conjunctional Base] "how" kết hợp cùng [Trạng Cơ][Adverb Base] "FREquently".</li>
			
					<li className="list-none">Chức năng:</li>

					<li className="list-none">Khối {'{how FREquently the SERver CRASHED}'} bên trong thực thi chức năng [Danh Câu][Noun Clause] làm [Danh Nhận][Noun Object] nhận quan hệ trực tiếp đứng sau [Phức Giới Cơ][Complex Prepositional Base] because of.</li>

					<li className="list-none">Toàn bộ khối hỗn hợp [because of {'{how FREquently the SERver CRASHED}'}] thực thi chức năng [<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] tổng thể đứng cuối để bổ nghĩa hoàn cảnh nguyên nhân cho [Thời-Thuần Động Cơ][Tense-Bare Verb Base] rediSIGNED.</li>
			
				</ul>
	


			{/* V. */}

			<h3 className="margin-y-50 text-center">VIII. ĐỈNH CAO PARAPHRASING: TƯ DUY THAY THẾ [KHỐI] CÙNG CHỨC NĂNG</h3>

			<h4 className="margin-y-40">1. Paraphrasing cho chức năng [TRẠNG][ADVERB] (Mô tả hoàn cảnh, bối cảnh)</h4>

			<p className="margin-y-30 text-indent-whole"><strong>Gốc</strong>:</p>
					
			<p className="margin-top-20 text-indent-whole"><strong>Dùng hình thái</strong> [<strong>Liên Câu</strong>][<strong>Conjunctional Clause</strong>]</p>
			
				<ul className="list-square">
			
					<li>the SYStem CRASHED [because the inTERnal TEMperature EScalated RAPidly].</li>
					<li className="margin-bottom-20 list-none">Hệ thống đã gặp sự cố [vì nhiệt độ bên trong leo thang nhanh chóng].</li>
			
					<li className="list-none">Hình thái: Khối [because the inTERnal TEMperature EScalated RAPidly] - [Liên Câu][Conjunctional Clause] bắt đầu bằng [Liên Cơ][Conjunctional Base] "because" kết hợp với cấu trúc khối hoàn chỉnh có [Danh Chủ][Noun Subject] "the inTERnal TEMperature" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "EScalated".</li>
			
					<li className="list-none">Chức năng: Khối [because the inTERnal TEMperature EScalated RAPidly] - [Trạng Câu][Adverb Clause] thực hiện vai trò bổ nghĩa hoàn cảnh nguyên nhân cho hành động sập hệ thống được xác định bởi "CRASHED".</li>
			
				</ul>
			
			
			<p className="margin-y-30 text-indent-whole"><strong>Viết lại 1</strong></p>
			
			<p className="margin-top-20 text-indent-whole"><strong>Đổi sang hình thái</strong> [<strong>Diện Trạng Cơ</strong>][<strong>Modified Adverb Base</strong>]</p>
			
				<ul className="list-square">
			
					<li>[acCORDingly], the SYStem CRASHED.</li>
					<li className="margin-bottom-20 list-none">[Theo đó / Do vậy], hệ thống đã bị sập.</li>
			
					<li className="list-none">Hình thái: Khối [acCORDingly] - [Diện Trạng Cơ][Modified Adverb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "acCORD" mặc thêm (kết hợp) hậu tố "-ing" và "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] bối cảnh độc lập.</li>
			
					<li className="list-none">Chức năng: Khối [acCORDingly] - [Trạng Cơ][Adverb Base] đứng biệt lập ở đầu câu để bổ nghĩa liên kết logic hệ quả cho toàn bộ nhận định phía sau.</li>
			
				</ul>

			
			<h5 className="margin-y-30 text-indent-whole">Viết lại 2</h5>

			<p className="margin-top-20 text-indent-whole"><strong>Đổi sang hình thái</strong> [<strong>Phức Giới Cụm</strong>][<strong>Complex Prepositional Phrase</strong>]</p>
			
				<ul className="list-square">
			
					<li>the SYStem CRASHED [due to the RAPid TEMperature escaLAtion].</li>
					<li className="margin-bottom-20 list-none">Hệ thống đã gặp sự cố [do sự leo thang nhiệt độ nhanh chóng].</li>
			
					<li className="list-none">Hình thái: Khối [due to the RAPid TEMperature escaLAtion] - [Phức Giới Cụm][Complex Prepositional Phrase] bắt đầu bằng [Phức Giới Cơ][Complex Prepositional Base] "due to" điều phối một cấu trúc biểu thị thực thể phức hợp phía sau.</li>
			
					<li className="list-none">Chức năng: Khối [due to the RAPid TEMperature escaLAtion] - [Trạng Cụm][Adverb Phrase] thực hiện chức năng cung cấp bối cảnh nguyên nhân rút gọn cho hành động chính "CRASHED".</li>
			
				</ul>
			


			<h4 className="margin-y-40">2. Paraphrasing cho chức năng [TÍNH][ADJECTIVE] (Mô tả, định danh thực thể)</h4>

			<p className="margin-y-30 text-indent-whole"><strong>Gốc</strong>:</p>

			<p className="text-indent-whole"><strong>Dùng hình thái</strong> [<strong>Liên Câu</strong>][<strong>Conjunctional Clause</strong>]</p>
			
				<ul className="list-square">
			
					<li>the CODE [which acCELerates the RENdering PROcess] reQUIRES optimiZAtion.</li>
					<li className="margin-bottom-20 list-none">Khối mã [mà tăng tốc quy trình kết xuất] cần được tối ưu hóa.</li>
			
					<li className="list-none">Hình thái: Khối [which acCELerates the RENdering PROcess] - [Liên Câu][Conjunctional Clause] bắt đầu bằng [Liên Cơ][Conjunctional Base] quan hệ "which" đi kèm khối hoàn chỉnh có hạt nhân hành động "acCELerates".</li>
			
					<li className="list-none">Chức năng: Khối [which acCELerating the RENdering PROcess] - [Tính Câu][Adjective Clause] đứng ôm sát phía sau để bổ nghĩa đặc điểm xác định chi tiết cho khối biểu thị thực thể "the CODE".</li>
			
				</ul>


			
			<p className="margin-y-30 text-indent-whole"><strong>Viết lại 1</strong></p>
			
			<p className="margin-top-20 text-indent-whole"><strong>Đổi sang hình thái</strong> [<strong>Diện Tính Cơ</strong>][<strong>Modified Adjective Base</strong>]</p>
			
				<ul className="list-square">
			
					<li>the [RENdering-acCELerating] CODE reQUIRES optimiZAtion.</li>
					<li className="margin-bottom-20 list-none">Khối mã [tăng-tốc-kết-xuất] cần được tối ưu hóa.</li>
			
					<li className="list-none">Hình thái: Khối [RENdering-acCELerating] - [Diện Tính Cơ][Modified Adjective Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "acCELerate" mặc thêm (kết hợp) tiền tố thành phần [Tiếp Động Cơ][Progressive Verb Base] "RENdering-" và hậu tố "-ING" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] có cấu hình ghép.</li>
			
					<li className="list-none">Chức năng: Khối [RENdering-acCELerating] - [Tính Cơ][Adjective Base] đứng trực tiếp phía trước để bổ nghĩa đặc tính vận hành cho khối biểu thị thực thể "CODE".</li>
			
				</ul>
			

			
			<p className="margin-y-30 text-indent-whole"><strong>Viết lại 2</strong></p>

			<p className="margin-top-20 text-indent-whole"><strong>Đổi sang hình thái</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>]</p>
			
				<ul className="list-square">
			
					<li>the CODE [acCELerating the RENdering PROcess] reQUIRES optimiZAtion.</li>
					<li className="margin-bottom-20 list-none">Khối mã [đang tăng tốc quy trình kết xuất] cần được tối ưu hóa.</li>
			
					<li className="list-none">Hình thái: Khối [acCELerating the RENdering PROcess] - [Tiếp Động Cụm][Progressive Verb Phrase] bắt đầu bằng phân từ đuôi "-ing" và có thành phần bổ trợ đi kèm.</li>
			
					<li className="list-none">Chức năng: Khối [acCELerating the RENdering PROcess] - [Tính Cụm][Adjective Phrase] đứng ôm sau bổ nghĩa rút gọn cho khối biểu thị thực thể "the CODE".</li>
			
				</ul>


			<h4 className="margin-y-40">3. Paraphrasing cho chức năng [DANH][NOUN]</h4>

			<p className="margin-y-30 text-indent-whole"><strong>Gốc</strong>: <strong>Dùng hình thái</strong> [<strong>Liên Câu</strong>][<strong>Conjunctional Clause</strong>]</p>

			<p className="margin-top-20 text-indent-whole">Làm [Danh Chủ][Noun Subject]</p>

			
				<ul className="list-square">
			
					<li>the PROgrammer disCOVered [how he could BYpass the seCUrity FIREwall].</li>
					<li className="margin-bottom-20 list-none">Lập trình viên đã phát hiện ra [cách mà anh ấy có thể vượt qua tường lửa bảo mật].</li>
			
					<li className="list-none">Hình thái: Khối [how he could BYpass the seCUrity FIREwall] - [Liên Câu][Conjunctional Clause] bắt đầu bằng [Liên Cơ][Conjunctional Base] "how" lồng khối chủ vị hoàn chỉnh có [Ý-Thái Thuần Động Cơ][Soft-Modal Bare Verb Base] "could".</li>
			
					<li className="list-none">Chức năng: Khối [how he could BYpass the seCUrity FIREwall] - [Danh Câu][Noun Clause] làm khối [Danh Nhận][Noun Object] nhận tác động trực tiếp của hành động "disCOVered".</li>
			
				</ul>
			

			<p className="margin-y-30 text-indent-whole"><strong>Viết lại</strong>: <strong>Đổi sang hình thái</strong> [<strong>Liên Cụm</strong>][<strong>Conjunctional Phrase</strong>]</p>

			<p className="margin-top-20 text-indent-whole">Làm [Danh Nhận][Noun Object]</p>
			
				<ul className="list-square">
			
					<li>the PROgrammer disCOVered [how to BYpass the seCUrity FIREwall].</li>
					<li className="margin-bottom-20 list-none">Lập trình viên đã phát hiện ra [cách vượt qua tường lửa bảo mật].</li>
			
					<li className="list-none">Hình thái: Khối [how to BYpass the seCUrity FIREwall] - [Liên Cụm][Conjunctional Phrase] bắt đầu bằng biểu hiện nghi vấn [Liên Cơ][Conjunctional Base] "how" dẫn dắt trực tiếp một cấu trúc hành động dạng "to + bare verb".</li>
			
					<li className="list-none">Chức năng: Khối [how to BYpass the seCUrity FIREwall] - [Danh Cụm][Noun Phrase] làm khối [Danh Nhận][Noun Object] chịu sự điều phối của hành động "disCOVered".</li>
			
				</ul>



			{/* IX. */}

			<h3 className="margin-y-50 text-center">IX. TUYỆT CHIÊU PHÂN BIỆT [LIÊN CÂU][CONJUNCTIONAL CLAUSE] THẦN TỐC BẰNG MẸO [THẾ THÂN]</h3>

			<p>Khi gặp các khối [Liên Câu][Conjunctional Clause] có hình thái giống hệt nhau (ví dụ: đều bắt đầu bằng một từ đa năng làm [Liên Cơ][Conjunctional Base] như that, when, where), người học rất dễ bị bối rối.</p>

			<p>Hãy áp dụng ngay phương pháp [<strong>Thế thân</strong>][<strong>Substitution</strong>] dựa trên nguyên lý thay thế bằng một khối từ mức độ [Cơ][Base] cơ bản:</p>
			
				<ul className="list-square">
			
					<li className="margin-bottom-20 list-none">Nếu thế thế thân bằng một [Trạng Cơ][Adverb Base] đơn lẻ (THEN, THERE) thành công</li>
					<li className="list-none">→ Khối đó đảm nhiệm chức năng [<strong>Trạng Câu</strong>][<strong>Adverb Clause</strong>].</li>
			
					<li className="margin-bottom-20 list-none">Nếu thế thế thân bằng một [Tính Cơ][Adjective Base] đơn lẻ (BEAUtiful, SMART, NEW) thành công</li>
					<li className="list-none">→ Khối đó phụ trách chức năng [<strong>Tính Câu</strong>][<strong>Adjective Clause</strong>].</li>
			
					<li className="margin-bottom-20 list-none">Nếu thế thế thân bằng một ký hiệu tổng quát "SOMEthing" hoặc "it" (tương đương một [Danh Cơ][Noun Base]) thành công</li>
					<li className="list-none">→ Khối đó gánh vác chức năng [<strong>Danh Câu</strong>][<strong>Noun Clause</strong>].</li>
			
				</ul>

			
			<h5 className="margin-y-30">Thử thách phá án 3 cấu trúc có cùng hình thái [LIÊN CÂU][CONJUNCTIONAL CLAUSE] chứa biểu hiện [Liên Cơ][Conjunctional Base] "<strong>[where]</strong>":</h5>
			

			<p className="margin-top-20">Trường hợp A: Thử thế thân bằng [Trạng Cơ][Adverb Base] "<strong>[THERE]</strong>"</p>
			
				<ul className="list-square">
			
					<li>the techNIcian will dePLOY the SOFTware [where the SIGnal PEAKS].</li>
					<li className="margin-bottom-20 list-none">the techNIcian will dePLOY the SOFTware [THERE].</li>
			
					<li className="list-none">→ Hợp lý! Khối [where the SIGnal PEAKS] thực thi chức năng [<strong>Trạng Câu</strong>][<strong>Adverb Clause</strong>] chỉ bối cảnh vị trí.</li>
			
				</ul>
			
			
			<p className="margin-top-20">Trường hợp B: Thử thế thân bằng [Tính Cơ][Adjective Base] "<strong>[NEW]</strong>"</p>
			
				<ul className="list-square">
			
					<li>this is the SERver ROOM [where the SIGnal PEAKS].</li>
					<li className="margin-bottom-20 list-none">this is the [NEW] SERver ROOM.</li>
			
					<li className="list-none">→ Hợp lý! Khối [where the SIGnal PEAKS] hoàn thành chức năng [<strong>Tính Câu</strong>][<strong>Adjective Clause</strong>] bổ nghĩa đặc điểm cho khối định danh đứng trước.</li>
			
				</ul>
			
			
			<p className="margin-top-20">Trường hợp C: Thử thế thân bằng [Danh Cơ][Noun Base] "<strong>[SOMEthing]</strong>"</p>
			
				<ul className="list-square">
			
					<li>the SYStem MONitors [where the SIGnal PEAKS].</li>
					<li className="margin-bottom-20 list-none">the SYStem MONitors [SOMEthing].</li>
			
					<li className="list-none">→ Hợp lý! Khối [where the SIGnal PEAKS] đáp ứng chức năng [<strong>Danh Câu</strong>][<strong>Noun Clause</strong>] đóng vai trò làm [Danh Nhận][Noun Object] trực tiếp đứng sau hành động "MONitors".</li>
			
				</ul>


				

			{/* X. Bổ sung */}

			<h3 className="margin-y-50 text-center">X. Đảo ngữ kết hợp (Inversion)</h3>
		
			<p>Nâng tầm [<strong>Trạng Câu</strong>][<strong>Adverb Clause</strong>] lên mức học thuật cao nhất bằng cách tiến hành đưa đưa Trạng Câu/Cụm phủ định lên đầu, sau đó tiến hành đảo ngữ [Thời Động Cơ] thành phần chính:</p>

			<h5 className="margin-y-30 text-indent-whole">Ví dụ 1</h5>

				<p className="margin-top-20 text-indent-whole"><strong>Gốc</strong>:</p>
			
					<ul className="list-square">
				
						<li>he [had HARDly] LEFT the HOUSE when it STARted to POUR.</li>
						<li className="margin-bottom-20 list-none">Anh ấy [đã hầu như chưa] rời khỏi nhà thì trời bắt đầu đổ mưa như trút.</li>
				
					</ul>


				<p className="margin-y-20 text-indent-whole"><strong>Viết lại dạng advanced</strong>:</p>
				
					<ul className="list-square">

						<li>[HARDly had] he LEFT the HOUSE when it STARted to POUR.</li>
						<li className="list-none">[Hầu như đã chưa] anh ấy rời khỏi nhà thì trời bắt đầu đổ mưa như trút.</li>
				
					</ul>

				

			<h5 className="margin-y-30 text-indent-whole">Ví dụ 2</h5>

				<p className="margin-top-20 text-indent-whole"><strong>Gốc</strong>:</p>
		
					<ul className="list-square">
				
						<li>i [have NEVer] SEEN such a proFESsional acCOUNting SYStem.</li>
						<li className="margin-bottom-20 list-none">Tôi [đã chưa từng bao giờ] thấy một hệ thống kế toán nào chuyên nghiệp đến thế.</li>
				
					</ul>
				

				<p className="margin-y-20 text-indent-whole"><strong>Viết lại dạng advanced</strong>:</p>

					<ul className="list-square">

						<li>[NEVer have] i SEEN such a proFESsional acCOUNting SYStem.</li>
						<li className="margin-bottom-20 list-none">[Đã chưa từng bao giờ] tôi thấy một hệ thống kế toán nào chuyên nghiệp đến thế.</li>

						<li className="list-none">→ Việc đưa [NEVer have] - <strong>Trạng Cơ phủ định</strong> [<strong>Negative Adverb Base</strong>] "NEVer" và [Thời Động Cơ][Tense Verb Base] "have" lên đầu câu làm cho câu văn mang sắc thái nhấn mạnh cực độ, thể hiện sự ngạc nhiên hoặc khẳng định mạnh mẽ.</li>
				
					</ul>


			<h5 className="margin-y-30 text-indent-whole">Ví dụ 3</h5>
			
				<p className="margin-top-20 text-indent-whole"><strong>Gốc</strong>:</p>
			
					<ul className="list-square">
				
						<li>he [RAREly] REalizes how MUCH his deCIsions afFECT the PROject.</li>
						<li className="margin-bottom-20 list-none">Anh ấy [hiếm khi] nhận ra các quyết định của mình ảnh hưởng đến dự án nhiều đến thế nào.</li>
				
					</ul>
				

				<p className="margin-y-20 text-indent-whole"><strong>Viết lại dạng advanced</strong>:</p>

					<ul className="list-square">

						<li>[RAREly does] he REalize how MUCH his deCIsions afFECT the PROject.</li>
						<li className="margin-bottom-20 list-none">[Hiếm khi thực sự] anh ấy nhận ra được các quyết định của mình ảnh hưởng đến dự án nhiều đến thế nào.</li>

						<li className="list-none">→ Việc đưa [RAREly does] - <strong>Trạng Cơ phủ định</strong> [<strong>Negative Adverb Base</strong>] "RAREly" và [Thời Động Cơ][Tense Verb Base] "does" lên đầu câu như một lời cảnh báo hoặc nhấn mạnh về sự thiếu sót trong nhận thức.</li>
				
					</ul>
					
			

			<h5 className="margin-y-30 text-indent-whole">Ví dụ 4:</h5>

				<p className="margin-top-20 text-indent-whole"><strong>Gốc</strong>:</p>
			
					<ul className="list-square">
				
						<li>[she NOT ONly] WRITES CLEAN CODE [but ALso] deSIGNS BEAUtiful INterfaces.</li>
						<li className="list-none">Cô ấy [không chỉ] viết mã sạch [mà còn] thiết kế các giao diện đẹp mắt.</li>
				
					</ul>
				

				<p className="margin-y-20 text-indent-whole"><strong>Viết lại dạng advanced</strong>:</p>

					<ul className="list-square">

						<li>[NOT ONly does] she WRITE CLEAN CODE, [but she ALso] deSIGNS BEAUtiful INterfaces.</li>
						<li className="margin-bottom-20 list-none">[Không chỉ thực sự] cô ấy viết mã sạch, [mà] cô ấy [còn] thiết kế được các giao diện đẹp mắt.</li>

						<li className="list-none">→ Việc đưa [NOT ONly does] - <strong>Trạng Cụm phủ định</strong> [<strong>Negative Adverb Phrase</strong>] "NOT ONly" và [Thời Động Cơ][Tense Verb Base] "does" lên đầu câu nhấn mạnh rằng kỹ năng của cô ấy không dừng lại ở việc viết mã mà còn vượt xa hơn thế ở mảng thiết kế.</li>

				
					</ul>


			<h5 className="margin-y-30 text-indent-whole">Ví dụ 5:</h5>

				<p className="margin-top-20 text-indent-whole"><strong>Gốc</strong>:</p>
			
					<ul className="list-square">
				
						<li>you [must NOT] SHARE this PASSword under any CIRcumstances.</li>
						<li className="list-none">Bạn [không được phép] chia sẻ mật khẩu này dưới bất kỳ hoàn cảnh nào.</li>
				
					</ul>

				<p className="margin-y-20 text-indent-whole"><strong>Viết lại dạng advanced</strong>:</p>


					<ul className="list-square">

						<li>[under no CIRcumstances must] you SHARE this PASSword.</li>
						<li className="margin-bottom-20 list-none">[Dưới bất kỳ hoàn cảnh nào cũng không được phép] bạn chia sẻ mật khẩu này.</li>

						<li className="list-none">→ Việc đưa ra giới hạn [under no CIRcumstances must] - <strong>Trạng Cụm phủ định</strong> [<strong>Negative Adverb Phrase</strong>] "under no CIRcumstances" và [Áp-Thái Động Cơ][Assertive-Modal Verb Base] "must" lên đầu câu ngay từ đầu để "khóa" mọi khả năng ngay lập tức, sau đó mới nhắc đến hành động.</li>
				
					</ul>



			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">LỜI KẾT</h3>

			<p>Tư duy tiếng Anh theo mô hình phân tầng khối là chìa khóa tối thượng để chuyển hóa từ trạng thái dịch cơ học sang phản xạ bản xứ tự nhiên. Việc làm chủ sự biến đổi linh hoạt giữa Hình thái và Chức năng của các mảnh ghép – đặc biệt là sự kết nối trong "[BỘ 3 PHỤ KHỐI]" – sẽ giúp bạn giải phóng hoàn toàn khả năng ngôn ngữ của mình.</p>

			<p>Hãy rèn luyện thói quen quét cấu trúc dưới dạng các khối thông tin đa năng; bạn sẽ thấy việc viết những cấu trúc phức tạp, chặt chẽ hay việc paraphrasing nâng cao trở nên trực quan, chính xác và dễ dàng hơn bao giờ hết.</p>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 03, 2026 · by 💎Gem and 🐝Mr. Bee Osn ·</span>
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