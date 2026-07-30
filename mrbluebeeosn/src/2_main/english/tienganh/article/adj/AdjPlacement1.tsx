import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function AdjPlacement1(): React.JSX.Element {

	const postId = "AdjPlacement1";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#functional-thinking-terms"><mark className="highlight-tertiary-padding-4-8">Functional Thinking</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Chức năng [Tính][Adjective]
												
				<sup><HashLink smooth to="/tieng-anh/adj-placement-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/adj-placement-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				{/* <sup><HashLink smooth to="/tieng-anh/adj-placement-3">&nbsp;3&nbsp;</HashLink>
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
				</sup> */}

			</h1>

			<h4 className="margin-bottom-30 text-center">ĐIỂM MẠNH TƯƠNG ĐỒNG: BƯỚC ĐỘT PHÁ GIÚP NGƯỜI VIỆT THỐNG TRỊ TIẾNG ANH HỌC THUẬT VỀ CHỨC NĂNG TÍNH</h4>

			<p>Lối mòn tư duy kìm hãm thế hệ người học tiếng Anh tại Việt Nam chính là định kiến: cấu trúc tiếng Anh "ngược" với tiếng Việt. Chúng ta thường bị đóng khung trong quy luật sơ cấp: [Tính Cơ][Adjective Base] phải đứng trước [Danh Cơ][Noun Base].</p>
			
			<p>Tuy nhiên, trong văn viết học thuật và các cấu trúc câu phức, người bản ngữ ưu tiên sử dụng trật tự [Danh Cơ][Noun Base] đứng trước, thành phần bổ nghĩa mang chức năng [Tính][Adjective] đứng sau. Đây chính là "khóa vàng" giúp người Việt sở hữu tư duy ngôn ngữ đẳng cấp.</p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Bản Chất Của Vị Trí: Quy Luật Điều Phối Trọng Tâm</h3>
			
				<ul className="list-square">
			
					<li>[<strong>Tính Cơ</strong>][<strong>Adjective Base</strong>] <strong>đứng trước</strong> [<strong>Danh Cơ</strong>][<strong>Noun Base</strong>] (<strong>Nhấn mạnh Đặc điểm</strong>):</li>
					<li className="margin-bottom-20 list-none">Dành cho các thành phần đặc tính đơn lẻ, ngắn gọn. Đặc điểm được xác lập ngay trước khi gọi tên đối tượng.</li>
			
					<li>[<strong>Danh Cơ</strong>][<strong>Noun Base</strong>] <strong>đứng trước thành phần bổ nghĩa</strong> (<strong>Nhấn mạnh Đối tượng</strong>):</li>
					<li className="list-none">Khi muốn đối tượng chính làm "mỏ neo", người bản ngữ đặt [Danh Cơ][Noun Base] lên đầu, sau đó mới thả chuỗi thông tin bổ trợ phía sau bằng [Tính Cụm][Adjective Phrase] hoặc [Tính Câu][Adjective Clause].</li>
			
				</ul>


			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Hệ Thống Phân Loại [Động Cơ][Verb Base]</h3>

			<p>Hệ thống này giúp não bộ bóc tách năng lượng của hành động thông qua 16 "hạt nhân" cấu tạo, chuyển hóa các đơn vị từ vựng đơn lẻ thành các cấu trúc ngữ pháp mang tính biểu đạt cao.</p>
			
			
			<h4 className="margin-y-40">A. Phân hệ [Cơ][Base]</h4>
			
				<ol>
      
          <li value="1">[<strong>Rễ Động Cơ</strong>][<strong>Root Verb Base</strong>]: originate, formulate</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng [Rễ Động Cơ][Root Verb Base] nguyên bản, chưa bị biến đổi bởi bất kỳ yếu tố nào.</li>
      
          <li value="2">[<strong>Hạt Động Cơ</strong>][<strong>Particle Verb Base</strong>]: to</li>
          <li className="margin-bottom-20 list-none">[Hạt] nhân định hướng, giữ vai trò kích hoạt trạng thái nguyên sơ, chuẩn bị nền tảng cho cấu trúc hành động.</li>

          <li value="3">[<strong>Thời Động Cơ</strong>][<strong>Tense Verb Base</strong>]: is, was, does</li>
          <li className="margin-bottom-20 list-none">Các từ khóa mang năng lượng định vị [Thời] gian, thiết lập khung bối cảnh hiện tại hoặc quá khứ cho câu.</li>
      
          <li value="4">[<strong>Ý-Thái Động Cơ</strong>][<strong>Soft-Modal Verb Base</strong>]: would, could, should</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ nhẹ nhàng, gợi [Ý], giảm bớt tính áp đặt, tạo sự [Ý] nhị. Các khối phức đặc biệt: [Phức Ý-Thái Động Cơ][Complex Soft-Modal Verb Base] như ought to, had better được quét như một đơn vị thống nhất.</li>

          <li value="5">[<strong>Áp-Thái Động Cơ</strong>][<strong>Assertive-Modal Verb Base</strong>]: will, must, can</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ trực diện, mang tính xác quyết và thực thi thực tế mạnh mẽ. Các khối phức đặc biệt: [Phức Áp-Thái Động Cơ][Complex Assertive-Modal Verb Base] như have to được quét như một đơn vị thống nhất.</li>

          <li value="6">[<strong>Thuần Động Cơ</strong>][<strong>Bare Verb Base</strong>]: originate, formulate</li>
          <li className="margin-bottom-20 list-none">Hành động [Thuần] khiết ở dạng tự do hoàn toàn, không có [Hạt] đi kèm, xuất hiện sau các nhóm [Ý-Thái] hoặc [Áp-Thái].</li>
      
          <li value="7">[<strong>Hạt Thuần Động Cơ</strong>][<strong>Particle Bare Verb Base</strong>]: to originate, to formulate</li>
          <li className="margin-bottom-20 list-none">Sự kết hợp tuyến tính giữa [Hạt] và hành động [Thuần] khiết, tạo nên mẫu hành động nguyên bản.</li>

          <li value="8">[<strong>Ý-Thái Thuần Động Cơ</strong>][<strong>Soft-Modal Bare Verb Base</strong>]: would verify, could design</li>
          <li className="margin-bottom-20 list-none">Kết hợp [Thái] độ mềm mỏng với hành động [Thuần] khiết, biểu đạt sự nhường nhịn.</li>
      
          <li value="9">[<strong>Áp-Thái Thuần Động Cơ</strong>][<strong>Assertive-Modal Bare Verb Base</strong>]: will verify, can design</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tính xác quyết với hành động [Thuần] khiết, tạo nên khả năng thực tế rõ ràng.</li>

          <li value="10">[<strong>Thời Thuần Động Cơ</strong>][<strong>Tense Bare Verb Base</strong>]: did originate, does formulate</li>
          <li className="margin-bottom-20 list-none">Cấu trúc song hành tách biệt giữa yếu tố [Thời] và hành động [Thuần] khiết.</li>

          <li value="11">[<strong>Thời-Thuần Động Cơ</strong>][<strong>Tense-Bare Verb Base</strong>]: originated, formulates</li>
          <li className="margin-bottom-20 list-none">Sự tích hợp hoàn toàn năng lượng [Thời] và hành động [Thuần] khiết vào một đơn vị từ duy nhất.</li>
      
          <li value="12">[<strong>Tiếp Động Cơ</strong>][<strong>Progressive Verb Base</strong>]: originating, formulating</li>
          <li className="margin-bottom-20 list-none">Hành động mang hậu tố "-ing", diễn tả trạng thái đang [Tiếp] diễn, kéo dài.</li>

          <li value="13">[<strong>Hoàn Động Cơ</strong>][<strong>Perfect Verb Base</strong>]: originated, formulated</li>
          <li className="margin-bottom-20 list-none">Dạng phân bổ trợ hoặc đuôi "-ed", xác lập trạng thái hành động đã trọn vẹn, [Hoàn] tất.</li>
      
          <li value="14">[<strong>Thời Tiếp Động Cơ</strong>][<strong>Tense Progressive Verb Base</strong>]: is originating, was formulating</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa yếu tố [Thời] và trạng thái hành động đang diễn ra.</li>

          <li value="15">[<strong>Thời Hoàn Động Cơ</strong>][<strong>Tense Perfect Verb Base</strong>]: has originated, had formulated</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa yếu tố [Thời] và trạng thái hành động đã [Hoàn] thành.</li>
      
          <li value="16">[<strong>Thời Hoàn Tiếp Động Cơ</strong>][<strong>Tense Perfect Progressive Verb Base</strong>]: has been originating, had been formulating</li>
          <li className="list-none">Phức hợp ba tầng năng lượng: [Thời] gian, [Hoàn] thành và [Tiếp] diễn.</li>
      
        </ol>


			<h4 className="margin-y-40">B. Phân hệ [Cụm][Phrase]</h4>

			<p className=" text-indent-whole"><strong>QUY TẮC CỐT LÕI</strong>:</p>

			<p className=" text-indent-whole">Khi bất kỳ họ [Cơ][Base] nào kéo theo các [Danh Nhận], [Trạng Cơ], [Trạng Cụm], hoặc [Trạng Câu] phía sau, toàn khối đó tự động chuyển cấu trúc thành [Cụm][Phrase].</p>

			<p className=" text-indent-whole">Ví dụ:</p>

			<p className=" text-indent-whole">formulating [Tiếp Động Cơ] + a strategy [Danh Nhận] ➔ formulating a strategy [Tiếp Động Cụm].</p>

			
			<h4 className="margin-y-40">C. Nhóm Phân Loại Năng Lượng Hành Động</h4>
          
      <p className="text-indent-whole"><strong>Nhóm 1</strong>: [<strong>Thời Động Cơ</strong>][<strong>Tense Verb Base</strong>]</p>

        <ul className="list-square">
      
          <li>is originating [Thời] be + [Tiếp Động Cơ] originating</li>

          <li>has been formulating [Thời + Hoàn] has + been + [Tiếp Động Cơ] formulating</li>
      
          <li>has originated [Thời + Hoàn] has + [Hoàn Động Cơ] originated</li>
      
          <li>formulates/originated [Thời-Thuần Động Cơ] tích hợp</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 2</strong>: [<strong>Thuần Động Cơ</strong>][<strong>Bare Verb Base</strong>]</p>

      <p className="text-indent-whole">Dạng nguyên bản, tĩnh tại:</p>

        <ul className="list-square">
      
          <li>to formulate [Hạt] to + [Thuần Động Cơ] formulate</li>
      
          <li>did originate [Thời] did + [Thuần Động Cơ] originate</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 3</strong>: [<strong>Ý-Thái Thuần Động Cơ</strong>][<strong>Soft-Modal Bare Verb Base</strong>]</p>

      <p className="text-indent-whole">Tình huống nhã nhặn, gợi mở:</p>

        <ul className="list-square">
      
          <li>should formulate [Ý-Thái] should + [Thuần Động Cơ] formulate</li>
      
          <li>could originate [Ý-Thái] could + [Thuần Động Cơ] originate</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 4</strong>: [<strong>Áp-Thái Thuần Động Cơ</strong>][<strong>Assertive-Modal Bare Verb Base</strong>]</p>

      <p className="text-indent-whole">Tình huống xác quyết, ép buộc:</p>

        <ul className="list-square">
      
          <li>will formulate [Áp-Thái] will + [Thuần Động Cơ] formulate</li>
      
          <li>must originate [Áp-Thái] must + [Thuần Động Cơ] originate</li>
      
        </ul>
 

			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. Ví Dụ Phân Tích Hình Thái & Chức Năng</h3>

			<p className="margin-top-20 text-indent-whole"><strong>A</strong>. [<strong>Tính Cơ</strong>][<strong>Adjective Base</strong>]</p>
			
				<ul className="list-square">
			
					<li>She has [elegant] manners.</li>
					<li className="margin-bottom-20 list-none">Cô ấy có phong thái [thanh lịch].</li>
			
					<li className="list-none">Hình thái: [elegant] - [Rễ Tính Cơ][Root Adjective Base] nguyên bản.</li>
			
					<li className="list-none">Chức năng: [elegant] - [Tính Cơ][Adjective Base] cài đặt đặc tính cố định cho [Danh Cơ][Noun Base] "manners".</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole"><strong>B</strong>. [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>]</p>
			
				<ul className="list-square">
			
					<li>The scientist [working in the lab] discovered the cure.</li>
					<li className="margin-bottom-20 list-none">Nhà khoa học [đang làm việc trong phòng thí nghiệm] đã tìm ra phương thuốc.</li>
			
					<li className="list-none">Hình thái: [working in the lab] - [Tiếp Động Cụm][Progressive Verb Phrase] bắt đầu bằng [Tiếp Động Cơ][Progressive Verb Base] "working" đi kèm cụm bổ nghĩa.</li>
			
					<li className="list-none">Chức năng: [working in the lab] - [Tính Cụm][Adjective Phrase] mô tả trạng thái hành động đang diễn ra của chủ thể.</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole"><strong>C</strong>. [<strong>Tính Câu</strong>][<strong>Adjective Clause</strong>]</p>
			
				<ul className="list-square">
			
					<li>The proposal [which is under review] is on my desk..</li>
					<li className="margin-bottom-20 list-none">Bản đề xuất [cái đang được xem xét] thì nằm trên bàn của tôi.</li>
			
					<li className="list-none">Hình thái: [which is under review] - [Hiển-Liên Động Câu][Connector Verb Clause] bắt đầu bằng [Liên Cơ][Connector Base] "which" kết hợp [Thời-TĐộng Cơ][Tense Progressive Verb Base] "is" và [Giới Cụm][Prepositional Phrase] "under review".</li>
			
					<li className="list-none">Chức năng: [which is under review] - [Hiển-Liên Động Câu][Connector Verb Clause] tạo thành khối bổ trợ, vạch rõ bản chất định danh cho [Danh Cơ][Noun Base] "proposal".</li>
			
				</ul>


			

			<p className="margin-top-20 text-indent-whole"><strong>D</strong>. [<strong>Tầng Giới Cụm</strong>][<strong>Tiered Prepositional Phrase</strong>]</p>
			
				<ul className="list-square">
			
					<li>Reviewing the analysis [of {'{what they investigated}'}] is important.</li>
					<li className="margin-bottom-20 list-none">Việc xem xét bản phân tích [về {'{những gì họ đã điều tra}'}] là quan trọng.</li>
			
				</ul>
			
				<p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
			
					<ul className="list-square">
				
						<li className="list-none">Tầng 1: [of {'{what they investigated}'}] - [Tầng Giới Cụm][Tiered Prepositional Phrase] vận hành như bộ quét nội dung tổng thể, bắt đầu bằng [Giới Cơ][Prepositional Base] "of".</li>

						<li className="list-none">Tầng 2: {'{what they investigated}'} - [Hiển-Liên Động Câu][Connector Verb Clause] kết hợp [Liên Cơ][Connector Base] "what" tạo nên lõi thông tin.</li>
				
					</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
			
				<ul className="list-square">
			
					<li className="list-none">Tầng 1: [of {'{what they investigated}'}] - [Tính Cụm][Adjective Phrase] mở rộng thông tin bổ trợ cho [Danh Khối][Noun Block] "the analysis".</li>

					<li className="list-none">Tầng 2: {'{what they investigated}'} - [Danh Câu][Noun Clause] chịu sự điều phối trực tiếp của [Giới Cơ][Prepositional Base] "of".</li>
			
				</ul>
			


			{/* 4. */}

			<h3 className="margin-y-50 text-center">4. Paraphrase - Chuyển Đổi Chức Năng (Nâng Cấp Tư Duy)</h3>


			<h4 className="margin-y-40">A. Chuyển từ [Tính Cơ][Adjective Base] ➔ [Tính Cụm][Adjective Phrase]</h4>

			<p className="text-indent-whole"><strong>Gốc</strong>: [<strong>Tính Cơ</strong>][<strong>Adjective Base</strong>]</p>
			
				<ul className="list-square">
			
					<li>The [profitable] investment is yours.</li>
					<li className="margin-bottom-20 list-none">Khoản đầu tư [có lợi nhuận] là của bạn.</li>
			
					<li className="list-none">Hình thái: [profitable] - [Rễ Tính Cơ][Root Adjective Base] nguyên bản.</li>
			
					<li className="list-none">Chức năng: [profitable] - [Tính Cơ][Adjective Base] cài đặt đặc tính cố định cho [Danh Cơ][Noun Base] "investment".</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole"><strong>Chuyển đổi</strong>: [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>]</p>
			
				<ul className="list-square">
			
					<li>The investment [generating high profits] is yours.</li>
					<li className="margin-bottom-20 list-none">Khoản đầu tư [tạo ra lợi nhuận cao] là của bạn.</li>
			
					<li className="list-none">Hình thái: [generating high profits] - [Tiếp Động Cụm][Progressive Verb Phrase] dẫn dắt bởi [Tiếp Động Cơ][Progressive Verb Base] "generating" đi kèm [Danh Nhận][Noun Object] "high profits".</li>
			
					<li className="list-none">Chức năng: [generating high profits] - [Tính Cụm][Adjective Phrase] mô tả trạng thái chủ động tạo ra giá trị của đối tượng trung tâm.</li>
			
				</ul>


			<h4 className="margin-y-40">B. Chuyển từ [Tính Cụm][Adjective Phrase] ➔ [Tính Câu][Adjective Clause]</h4>

			<p className="text-indent-whole"><strong>Gốc</strong>: [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>]</p>
			
				<ul className="list-square">
			
					<li>The man [standing there] is my boss.</li>
					<li className="margin-bottom-20 list-none">Người đàn ông [đang đứng đó] là sếp tôi.</li>
			
					<li className="list-none">Hình thái: [standing there] - [Tiếp Động Cụm][Progressive Verb Phrase] bắt đầu bằng [Tiếp Động Cơ][Progressive Verb Base] "standing".</li>
			
					<li className="list-none">Chức năng: [standing there] - [Tính Cụm][Adjective Phrase] mô tả trạng thái hành động đang diễn ra của chủ thể.</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole"><strong>Chuyển đổi</strong>: [<strong>Tính Câu</strong>][<strong>Adjective Clause</strong>]</p>
			
				<ul className="list-square">
			
					<li>The man [who is standing there] is my boss.</li>
					<li className="margin-bottom-20 list-none">Người đàn ông [người mà đang đứng đó] là sếp tôi.</li>
			
					<li className="list-none">Hình thái: [who is standing there] - [Hiển-Liên Động Câu][Connector Verb Clause] "who" kết hợp [Thời Tiếp Động Cơ][Tense Progressive Verb Base] "is standing".</li>
			
					<li className="list-none">Chức năng: [who is standing there] - [Tính Câu][Adjective Clause] định danh chính xác đối tượng thông qua hành động cụ thể đang diễn ra.</li>
			
				</ul>
			

			<h4 className="margin-y-40">C. Chuyển từ [Tính Câu][Adjective Clause] ➔ [Tính Cơ][Adjective Base]</h4>

			<p className="text-indent-whole"><strong>Gốc</strong>: [<strong>Tính Câu</strong>][<strong>Adjective Clause</strong>]</p>
			
				<ul className="list-square">
			
					<li>The policy [which is effective] will be applied.</li>
					<li className="margin-bottom-20 list-none">Chính sách [cái mà hiệu quả] sẽ được áp dụng.</li>
			
					<li className="list-none">Hình thái: [which is effective] - [Hiển-Liên Động Câu][Connector Verb Clause] bắt đầu bằng [Liên Cơ][Connector Base] "which" kết hợp [Thời-Động Cơ][Tense Progressive Verb Base] "is" và [Rễ Tính Cơ][Root Adjective Base] "effective".</li>
			
					<li className="list-none">Chức năng: [which is effective] - [Tính Câu][Adjective Clause] vạch rõ bản chất định danh cho đối tượng [Danh Cơ][Noun Base].</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole"><strong>Chuyển đổi</strong>: [<strong>Tính Cơ</strong>][<strong>Adjective Base</strong>]</p>
			
				<ul className="list-square">
			
					<li>The [effective] policy will be applied.</li>
					<li className="margin-bottom-20 list-none">Chính sách [hiệu quả] sẽ được áp dụng.</li>
			
					<li className="list-none">Hình thái: [effective] - [Rễ Tính Cơ][Root Adjective Base] nguyên bản.</li>
			
					<li className="list-none">Chức năng: [effective] - [Tính Cơ][Adjective Base] cài đặt nhãn dán thuộc tính cố định, rút gọn thông tin tối đa cho đối tượng [Danh Cơ][Noun Base].</li>
			
				</ul>
			
			
			

			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">5. Kết Luận</h3>

			<p>Việc duy trì các tầng phân tích giúp bộ não không bị quá tải khi xử lý các cấu trúc học thuật phức tạp. Khi làm chủ được các tầng chức năng Tính và sự phối hợp giữa [Cơ][Base]-[Cụm][Phrase]-[Câu][Clause], tiếng Anh sẽ trở thành công cụ biểu đạt mạnh mẽ, trôi chảy và đầy uy lực trong mọi văn bản học thuật.</p>


			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 01, 2026 · by 💎Gem and 🐝Mr. Bee Osn ·</span>
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