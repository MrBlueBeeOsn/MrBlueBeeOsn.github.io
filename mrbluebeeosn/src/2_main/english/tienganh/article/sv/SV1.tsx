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
												
				{/* <sup><HashLink smooth to="/tieng-anh/s-v-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/s-v-2">&nbsp;2&nbsp;</HashLink>
				</sup> */}

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

			<h4 className="margin-bottom-30 text-center">Cách Mạng Tư Duy Ngữ Pháp Tiếng Anh Bằng Hệ Trục Tọa Độ "[3 Chức Năng][3 Cấp Độ]"</h4>

			<p>Bản chất của việc làm chủ một ngôn ngữ không nằm ở việc học thuộc lòng các quy tắc phức tạp, mà nằm ở khả năng nhìn thấu cấu trúc và quy luật vận hành của nó. Khi các yếu tố cấu trúc được đơn giản hóa thành một bản đồ trực quan, tư duy của người học sẽ được giải phóng hoàn toàn để đạt đến tốc độ phản xạ tự nhiên nhất.</p>
		
			<p>Hệ thống tư duy mới dưới đây được xây dựng dựa trên sự đồng bộ tuyệt đối giữa các Hình Thái gốc, [3 Chức Năng] điều phối và [3 Cấp Độ] hình khối, giúp người học "nhìn phát hiểu ngay" mọi thành phần trong tiếng Anh mà không cần đến bất kỳ định nghĩa rườm rà nào.</p>


			{/* I.  */}

			<h3 className="margin-y-50 text-center">I. Hệ Trục Tọa Độ Quy Tắc [3C]</h3>

			<p>Hệ thống tư duy ngữ pháp vận hành dựa trên sự giao thoa đồng bộ của 2 trục tọa độ cốt lõi:</p>

			<p className="margin-top-20"><strong>1</strong>. <strong>Trục Cấp Độ</strong> (<strong>Quy mô cấu trúc</strong>):</p>
			
				<ul className="list-square">
			
					<li>[<strong>Cơ</strong>][<strong>Base</strong>]: Đơn vị từ đơn lẻ gốc.</li>
			
					<li>[<strong>Cụm</strong>][<strong>Phrase</strong>]: Tập hợp nhiều từ kết hợp, không chứa hệ trục [Danh Chủ][Noun Subject] - [Thời-Thuần Động Cơ][Tense-Bare Verb Base].</li>
			
					<li>[<strong>Câu</strong>][<strong>Clause</strong>]: Khối cấu trúc hoàn chỉnh chứa hệ trục [Danh Chủ][Noun Subject] - [Thời-Thuần Động Cơ][Tense-Bare Verb Base].</li>
			
				</ul>


			<p className="margin-top-20"><strong>2</strong>. <strong>Trục Chức Năng</strong> (<strong>Vai trò vận hành trong câu</strong>):</p>
			
				<ul className="list-square">
			
					<li>[<strong>Danh</strong>][<strong>Noun</strong>]: Đóng vai trò thực thể ([Danh Chủ][Noun Subject] điều phối hoặc [Danh Nhận][Noun Object] tiếp nhận).</li>
			
					<li>[<strong>Tính</strong>][<strong>Adjective</strong>]: Đóng vai trò mô tả đặc điểm, tính chất cho thực thể.</li>

					<li>[<strong>Trạng</strong>][<strong>Adverb</strong>]: Đóng vai trò bổ nghĩa hoàn cảnh (thời gian, địa điểm, nguyên nhân, cách thức, mục đích).</li>
			
				</ul>

			

			{/* II.  */}

			<h3 className="margin-y-50 text-center">II. Tư Duy Ngược: Từ "Hình Thái" Giải Mã "Chức Năng"</h3>

			<p>Với hệ thống mới, quy trình tư duy được thực hiện một cách tự nhiên và khoa học: Người học nhìn thấy Hình thái trước, sau đó dựa vào vị trí để giải mã ra Chức năng.</p>

			<p>Hành động trong câu chính là các dạng [Động Cơ][Verb Base] xung lực vận hành, song hành cùng cấu trúc liên kết không hành động là [Giới Cơ][Prepositional Base] hoặc [Phức Giới Cơ][Complex Prepositional Base].</p>

			<p>Để giải mã chính xác bản chất cấu trúc, trục hình thái [Động Cơ][Verb Base] được chia tách hệ thống thành 4 nhóm cốt lõi và phân hệ 16 mục sau:</p>
			

			<h4 className="margin-y-40">4 Nhóm Động Từ Cốt Lõi</h4>
          
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 1</strong>: [<strong>Thời Động Cơ</strong>][<strong>Tense Verb Base</strong>]</p>

      <p className="text-indent-whole">Nhóm này định vị mốc [Thời] gian và biểu thị trạng thái [Hoàn] thành hoặc [Tiếp] diễn của hành động.</p>

        <ul className="list-square">
      
          <li>be exPLOREing ➔ [Thời] be (am/is/are, was/were) + [Tiếp Động Cơ] exPLOREing</li>

          <li>have been exPLOREing ➔ [Thời + Hoàn] have/has/had + been + [Tiếp Động Cơ] exPLOREing</li>
      
          <li>have exPLORED ➔ [Thời + Hoàn] have/has/had + exPLORED</li>
      
          <li>exPLORES, exPLORED ➔ [Thời-Thuần Động Cơ] Tích hợp hoàn toàn</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 2</strong>: [<strong>Thuần Động Cơ</strong>][<strong>Bare Verb Base</strong>]</p>

      <p className="text-indent-whole">Nhóm giữ nguyên hình thái gốc nguyên bản, tuyệt đối không chia theo thời hay thực thể khơi nguồn.</p>

        <ul className="list-square">
      
          <li>to exPLORE ➔ [Hạt Động Cơ] to + [Thuần Động Cơ] exPLORE</li>
      
          <li>DID exPLORE ➔ [Thời] did (Nhấn mạnh) + [Thuần Động Cơ] exPLORE</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 3</strong>: [<strong>Ý-Thái Thuần Động Cơ</strong>][<strong>Soft-Modal Bare Verb Base</strong>]</p>

      <p className="text-indent-whole">Nhóm diễn đạt các tình huống lịch sự, khuyên nhủ hoặc giả định nhẹ nhàng. Bao gồm: would (nhã nhặn), should (gợi ý), could (khả năng nhẹ), might (khả năng thấp), ought to (khuyên bảo), had better (khuyên nhủ).</p>

        <ul className="list-square">
      
          <li>should exPLORE ➔ [Ý-Thái] should (gợi ý) + [Thuần Động Cơ] exPLORE</li>
      
          <li>could exPLORE ➔ [Ý-Thái] could (khả năng nhẹ) + [Thuần Động Cơ] exPLORE</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 4</strong>: [<strong>Áp-Thái Thuần Động Cơ</strong>][<strong>Assertive-Modal Bare Verb Base</strong>]</p>

      <p className="text-indent-whole">Nhóm khẳng định, cam kết hoặc áp đặt thực tế một cách chắc chắn. Bao gồm: will (cam kết), shall (chắc chắn), can (năng lực), must (ép buộc), have to (bắt buộc), may (khả năng).</p>

        <ul className="list-square">
      
          <li>will exPLORE ➔ [Áp-Thái] will (cam kết) + [Thuần Động Cơ] exPLORE</li>
      
          <li>must exPLORE ➔ [Áp-Thái] must (ép buộc) + [Thuần Động Cơ] exPLORE</li>
      
        </ul>

			
			<h4 className="margin-y-40">III. Phân Hệ [Cơ][Base]</h4>
			
				<ol>
      
          <li value="1">[<strong>Rễ Động Cơ</strong>][<strong>Root Verb Base</strong>]: LEARN, SPEAK, BUILD</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng nguyên thủy cốt lõi nhất, chưa thêm bớt hay kết hợp với bất kỳ hành động nào khác.</li>
      
          <li value="2">[<strong>Hạt Động Cơ</strong>][<strong>Particle Verb Base</strong>]: to, IN, ON, AT, BY</li>
          <li className="margin-bottom-20 list-none">[Hạt] "to" đơn lẻ đóng vai trò hạt nhân đầu tiên đứng trước mọi khối hành động để kích hoạt trạng thái nguyên bản. Các [Hạt] như in, on, at, by đơn lẻ đứng sau đóng vai trò định hướng hành động để chỉ rõ không gian hoặc phương thức thực hiện.</li>

          <li value="3">[<strong>Thời Động Cơ</strong>][<strong>Tense Verb Base</strong>]: DOES, DID, is, has, was, am, are</li>
          <li className="margin-bottom-20 list-none">Các [Thời Động Cơ][Tense Verb Base] xuất hiện đơn lẻ để gánh vác năng lượng [Thời] gian, [Thời] cho câu.</li>
      
          <li value="4">[<strong>Ý-Thái Động Cơ</strong>][<strong>Soft-Modal Verb Base</strong>]: would, could, should, might, ought to, had BETter</li>
          <li className="margin-bottom-20 list-none">Hành động thể hiện [Thái] độ nhã nhặn, triệt tiêu tính ép buộc. Các khối phức đặc biệt "ought to" và "had better" được quét như một [Phức Ý-Thái Động Cơ][Complex Soft-Modal Verb Base] thống nhất.</li>

          <li value="5">[<strong>Áp-Thái Động Cơ</strong>][<strong>Assertive-Modal Verb Base</strong>]: will, shall, can, must, HAVE to, may</li>
          <li className="margin-bottom-20 list-none">Hành động mang tính trực diện, [Áp] đặt thực tế xuống người nghe. Khối phức đặc biệt "have to" được quét như một [Phức Áp-Thái Động Cơ][Complex Assertive-Modal Verb Base] thống nhất.</li>

          <li value="6">[<strong>Thuần Động Cơ</strong>][<strong>Bare Verb Base</strong>]: LEARN, SPEAK, BUILD</li>
          <li className="margin-bottom-20 list-none">Hành động [Thuần] khiết đứng tự do một mình, đã giải phóng hoàn toàn và không đi kèm to, thường đứng ngay sau [Hạt Động Cơ][Particle Verb Base] "to", [Ý-Thái][Soft-Modal] hay [Áp-Thái Động Cơ][Assertive-Modal Verb Base] hoặc [Rễ Động Cơ][Root Verb Base] như make, let, help, have, see, hear, watch, feel, notice.</li>
      
          <li value="7">[<strong>Hạt Thuần Động Cơ</strong>][<strong>Particle Bare Verb Base</strong>]: to LEARN, to SPEAK, to BUILD</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Hạt Động Cơ][Particle Verb Base] và hành động [Thuần Động Cơ][Bare Verb Base] phía sau.</li>

          <li value="8">[<strong>Ý-Thái Thuần Động Cơ</strong>][<strong>Soft-Modal Bare Verb Base</strong>]: would BUILD, could SPEAK</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Ý] nhị và hành động [Thuần] khiết.</li>
      
          <li value="9">[<strong>Áp-Thái Thuần Động Cơ</strong>][<strong>Assertive-Modal Bare Verb Base</strong>]: will BUILD, can SPEAK</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Áp] đặt thực tế và hành động [Thuần] khiết.</li>

          <li value="10">[<strong>Thời Thuần Động Cơ</strong>][<strong>Tense Bare Verb Base</strong>]: DID SPEAK, DOES BUILD</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] gian và hành động [Thuần] khiết song hành, được ngăn cách bởi một khoảng trắng.</li>

          <li value="11">[<strong>Thời-Thuần Động Cơ</strong>][<strong>Tense-Bare Verb Base</strong>]: SPOKE, SPEAKS, BUILDS, WORKS</li>
          <li className="margin-bottom-20 list-none">Hành động chính mang thời (chia thì đơn), tích hợp trọn vẹn trạng thái [Thời] gian và hành động [Thuần] khiết hòa tan gọn gàng vào một chữ duy nhất.</li>
      
          <li value="12">[<strong>Tiếp Động Cơ</strong>][<strong>Progressive Verb Base</strong>]: LEARNing, SPEAKing, BUILDing</li>
          <li className="margin-bottom-20 list-none">Hành động mang đuôi -ing, biểu thị tính chất đang [Tiếp] diễn, kéo dài.</li>

          <li value="13">[<strong>Hoàn Động Cơ</strong>][<strong>Perfect Verb Base</strong>]: LEARNT, SPOKEN, BUILT, been</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng hoàn tất (cột 3/-ed), biểu thị tính chất trọn vẹn, [Hoàn] thành.</li>
      
          <li value="14">[<strong>Thời Tiếp Động Cơ</strong>][<strong>Tense Progressive Verb Base</strong>]: is SPEAKing, was BUILDing</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa từ mang [Thời] gian và hành động mang tính [Tiếp] diễn.</li>

          <li value="15">[<strong>Thời Hoàn Động Cơ</strong>][<strong>Tense Perfect Verb Base</strong>]: has SPOken, had BUILT</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa từ mang [Thời] và hành động mang tính [Hoàn] thành.</li>
      
          <li value="16">[<strong>Thời Hoàn Tiếp Động Cơ</strong>][<strong>Tense Perfect Progressive Verb Base</strong>]: has been SPEAKing, had been BUILDing</li>
          <li className="list-none">Sự hợp nhất tuyến tính đồng thời của ba lớp năng lượng: [Thời] gian, [Hoàn] thành và [Tiếp] diễn.</li>
      
        </ol>


			{/* IV.  */}

			<h3 className="margin-y-50 text-center">IV. Phân Hệ [Cụm][Phrase]</h3>

			<p>📌 <strong>QUY TẮC CỐT LÕI</strong>:</p>

			<p className="margin-top-20">"Khi bất kỳ họ [Cơ][Base] nào thuộc 16 mục trên kéo theo các [Danh Nhận][Noun Object], [Trạng Cơ][Adverb Base], [Trạng Cụm][Adverb Phrase], hoặc [Trạng Câu][Adverb Clause] phía sau, toàn bộ khối đó lập tức chuyển đổi cấu trúc và được dán nhãn thành dạng [Cụm][Phrase] tương ứng của chính nó."</p>
			

			{/* V.  */}

			<h3 className="margin-y-50 text-center">V. Quy Trình Vận Hành Và Ký Hiệu Đóng Gói Sơ Đồ</h3>

			<p>Để bóc tách các tầng hình thái lồng ghép vào nhau như những chiếc hộp gỗ, người học áp dụng quy ước đóng gói hình khối bằng dấu vuông [] bao quanh:</p>


			<h4 className="margin-y-40">1. Hình thái [Động Cơ][Verb Base]</h4>

			<p className="text-indent-whole">Đơn vị hành động nhỏ nhất gồm 1 yếu tố gốc.</p>

			<ul className="list-square">
			
					<li>[WRIting] SHARPens the INtellect.</li>
					<li className="margin-bottom-20 list-none">[Việc viết lách] mài sắc trí tuệ.</li>
			
					<li className="list-none">Hình thái: [WRIting] - [Tiếp Động Cơ][Progressive Verb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "WRITE" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base], đóng vai trò làm hạt nhân hành động đơn lẻ cho cấu trúc câu.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [WRIting] - [Danh Cơ][Noun Base] đứng ở đầu câu tạo nên [Danh Chủ][Noun Subject] cho toàn câu.</li>
			
				</ul>

				<ul className="list-square">
			
					<li>She PRACtices [READing].</li>
					<li className="margin-bottom-20 list-none">Cô ấy luyện tập [việc đọc].</li>
			
					<li className="list-none">Hình thái: [READing] - [Tiếp Động Cơ][Progressive Verb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "READ" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base], đóng vai trò làm hạt nhân hành động tiếp diễn.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [READing] - [Danh Cơ][Noun Base] đứng sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "PRACtices" làm [Danh Nhận][Noun Object] gánh chịu trực tiếp tác động từ hành động luyện tập của thực thể khơi nguồn.</li>
			
				</ul>
			
				<ul className="list-square">
			
					<li>The [GROWing] deMAND reQUIRES ACtion.</li>
					<li className="margin-bottom-20 list-none">Nhu cầu [đang tăng cao] đòi hỏi phải hành động.</li>
			
					<li className="list-none">Hình thái: [GROWing] - [Tiếp Động Cơ][Progressive Verb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "GROW" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] phản ánh trạng thái đang vận động liên tục.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [GROWing] - [Tính Cơ][Adjective Base] đứng trước [Danh Cơ][Noun Base] "deMAND" nhằm mô tả đặc điểm của đối tượng.</li>
			
				</ul>
			
			
				<ul className="list-square">
			
					<li>The TEAM coOPered [harMOniously].</li>
					<li className="margin-bottom-20 list-none">Đội ngũ đã hợp tác [một cách hài hòa].</li>
			
					<li className="list-none">Hình thái: [harMOniously] – [Diện Trạng Cơ][Modified Adverb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "HARmonize" kết hợp các hậu tố "-ous" và "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] mang tính chất phương thức vận hành.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [harMOniously] - [Trạng Cơ][Adverb Base] đứng sau hành động nhằm chỉ ra cách thức thực hiện.</li>
			
				</ul>
			


			<h4 className="margin-y-40">2. Hình thái [Động Cụm][Verb Phrase]</h4>

			<p className="text-indent-whole">Đơn vị hành động chứa nhiều yếu tố kết hợp, cấu trúc không chứa hệ trục [Danh Chủ][Noun Subject] - [Thời-Thuần Động Cơ][Tense-Bare Verb Base]. Khi các dạng [Cơ][Base] kết hợp với thành phần phụ trợ sau nó, chúng dán nhãn thành dạng cụm tương ứng:</p>

			<ul className="list-square">
			
					<li>[LEARNing a New LANguage] reQUIRES PAtience.</li>
					<li className="margin-bottom-20 list-none">[Việc học một ngôn ngữ mới] đòi hỏi sự kiên nhẫn.</li>
			
					<li className="list-none">Hình thái: [LEARNing a New LANguage] - [Tiếp Động Cụm][Progressive Verb Phrase] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [Danh Chủ][Noun Subject] - [Thời-Thuần Động Cơ][Tense-Bare Verb Base].</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [LEARNing a New LANguage] - [Danh Cụm][Noun Phrase] đứng ở vị trí đầu câu để làm [Danh Chủ][Noun Subject] điều phối thông tin.</li>
			
				</ul>
			
				<ul className="list-square">
			
					<li>She PROMised [to FINish the rePORT].</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã hứa [hoàn thành bản báo cáo].</li>
			
					<li className="list-none">Hình thái: [to FINish the rePORT] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [Danh Chủ][Noun Subject] - [Thời-Thuần Động Cơ][Tense-Bare Verb Base].</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [to FINish the rePORT] - [Danh Cụm][Noun Phrase] đứng sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "PROMised" để làm [Danh Nhận][Noun Object] thực thi [Tiếp Động Cơ][Progressive Verb Base].</li>
			
				</ul>
			
			
				<ul className="list-square">
			
					<li>The CHILdren [PLAYing in the PARK] are LAUGHing.</li>
					<li className="margin-bottom-20 list-none">Những đứa trẻ [đang chơi trong công viên] đang cười.</li>
			
					<li className="list-none">Hình thái: [PLAYing in the PARK] - [Tiếp Động Cụm][Progressive Verb Phrase] biểu thị khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [Danh Chủ][Noun Subject] - [Thời-Thuần Động Cơ][Tense-Bare Verb Base], bắt đầu bằng [Tiếp Động Cơ][Progressive Verb Base] dạng V-ing.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [PLAYing in the PARK] - [Tính Cụm][Adjective Phrase] đứng ngay sau đối tượng những đứa trẻ nhằm mô tả mức độ đặc điểm của [Tính Cơ][Adjective Base] này.</li>
			
				</ul>
			
			
				<ul className="list-square">
			
					<li>He WOKE UP EARly [to CATCH the TRAIN].</li>
					<li className="margin-bottom-20 list-none">Anh ấy đã thức dậy sớm [để bắt kịp chuyến tàu].</li>
			
					<li className="list-none">Hình thái: [to CATCH the TRAIN] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] xác định khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [Danh Chủ][Noun Subject] - [Thời-Thuần Động Cơ][Tense-Bare Verb Base], bắt đầu bằng [Tiếp Động Cơ][Progressive Verb Base] dạng V-ing trong các cấu trúc biến thể hoặc liên kết mở rộng.</li>
			
					<li className="list-none">Chức năng: [to CATCH the TRAIN] - [Trạng Cụm][Adverb Phrase] gắn vào phía sau nhằm làm rõ mục đích cho phần thông tin trước đó.</li>
			
				</ul>
			


			<h4 className="margin-y-40">3. Hình thái [Giới Cụm][Prepositional Phrase]</h4>

			<p className="text-indent-whole">Khối liên kết không gian, thời gian hoặc sở hữu, hoàn toàn tách biệt khỏi cấu trúc hành động và không chứa hệ trục [Danh Chủ][Noun Subject] - [Thời-Thuần Động Cơ][Tense-Bare Verb Base]. Hình thái này chuyên biệt tạo nên hai chức năng [Tính Cụm][Adjective Phrase] và [Trạng Cụm][Adverb Phrase].</p>
			
				<ul className="list-square">
			
					<li>The CAT [under the BLACK CAR] is SLEEPing.</li>
					<li className="margin-bottom-20 list-none">Con mèo [ở dưới chiếc xe màu đen] thì đang ngủ.</li>
			
					<li className="list-none">Hình thái: [under the BLACK CAR] - [Giới Cụm][Prepositional Phrase] cấu thành khối bắt đầu bằng một [Giới Cơ][Prepositional Base] mốc vị trí.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [under the BLACK CAR] - [Tính Cụm][Adjective Phrase] neo ngay sau đối tượng con mèo để mô tả đặc điểm vị trí nhận diện riêng biệt cho nó.</li>
			
				</ul>
			
			
				<ul className="list-square">
			
					<li>We arRIVED [at MIDnight].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [vào lúc nửa đêm].</li>
			
					<li className="list-none">Hình thái: [at MIDnight] - [Giới Cụm][Prepositional Phrase] cấu thành khối bắt đầu bằng một [Giới Cơ][Prepositional Base] mốc thời gian.</li>
			
					<li className="list-none">Chức năng: [at MIDnight] - [Trạng Cụm][Adverb Phrase] gắn vào cuối câu chịu trách nhiệm cung cấp hoàn cảnh thời điểm cho sự việc.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">4. Hình thái [Liên Câu][Conjunctional Clause]</h4>

			<p className="text-indent-whole">Đơn vị hành động phức cao cấp, chứa một cấu trúc [Câu][Clause] hoàn chỉnh ở bên trong có chứa hệ trục [Danh Chủ][Noun Subject] - [Thời-Thuần Động Cơ][Tense-Bare Verb Base].</p>


			<ul className="list-square">
			
					<li>[What you SAID] surPRISED me.</li>
					<li className="margin-bottom-20 list-none">[Những gì bạn đã nói] đã làm tôi ngạc nhiên.</li>
			
					<li className="list-none">Hình thái: [What you SAID] - [Liên Câu][Conjunctional Clause] tạo nên khối hành động phức có chứa hệ trục [Danh Chủ][Noun Subject] "you" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "SAID", bắt đầu bằng [Liên Cơ][Conjunctional Base] "what".</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [What you SAID] - [Danh Câu][Noun Clause] đảm nhận nhiệm vụ của một khối đối tượng đứng trước [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "surPRISED" để làm [Danh Chủ][Noun Subject] điều phối hành động cho toàn bộ [Câu Lớn][Sentence].</li>
			
				</ul>

				<ul className="list-square">
			
					<li>EVEryone KNOWS [that WAter BOILS at ONE HUNdred deGREES].</li>
					<li className="margin-bottom-20 list-none">Mọi người đều biết [rằng nước sôi ở 100 độ].</li>
			
					<li className="list-none">Hình thái: [that WAter BOILS at ONE HUNdred deGREES] - [Liên Câu][Conjunctional Clause] tạo nên khối hành động phức có chứa hệ trục [Danh Chủ][Noun Subject] "WAter" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "BOILS", bắt đầu bằng [Liên Cơ][Conjunctional Base] "that".</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [that WAter BOILS at ONE HUNdred deGREES] - [Danh Câu][Noun Clause] đảm nhận nhiệm vụ của một khối đối tượng đứng sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "KNOWS" để làm [Danh Nhận][Noun Object] dưới sự điều phối của nó.</li>
			
				</ul>

			
				<ul className="list-square">
			
					<li>The LAPtop [which I BOUGHT LAST WEEK] WORKS PERfectly.</li>
					<li className="margin-bottom-20 list-none">Chiếc máy tính xách tay [mà tôi mua tuần trước] hoạt động hoàn hảo.</li>
			
					<li className="list-none">Hình thái: [which I BOUGHT LAST WEEK] - [Liên Câu][Conjunctional Clause] định hình khối hành động phức có chứa hệ trục [Danh Chủ][Noun Subject] "I" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "BOUGHT", bắt đầu bằng [Liên Cơ][Conjunctional Base] "which".</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [which I BOUGHT LAST WEEK] - [Tính Câu][Adjective Clause] thực hiện nhiệm vụ đứng sau định danh và mô tả đặc điểm riêng cho [Danh Cơ][Noun Base] LAPtop.</li>
			
				</ul>
		
			
				<ul className="list-square">
			
					<li>We CANcelled the PICnic [because it RAINED HEAVily].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã hủy buổi dã ngoại [vì trời mưa to].</li>
			
					<li className="list-none">Hình thái: [because it RAINED HEAVily] - [Liên Câu][Conjunctional Clause] thể hiện khối hành động phức có chứa hệ trục [Danh Chủ][Noun Subject] "it" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "RAINED", bắt đầu bằng [Liên Cơ][Conjunctional Base] "because".</li>
			
					<li className="list-none">Chức năng: [because it RAINED HEAVily] - [Trạng Câu][Adverb Clause] chịu trách nhiệm cung cấp hoàn cảnh nguyên nhân cho toàn bộ hành động hủy bỏ trước đó.</li>
			
				</ul>


			{/* VI.  */}

			<h3 className="margin-y-50 text-center">VI. Hiện Tượng [Ẩn-Liên Câu][Zero-Conjunctional Clause]</h3>

			<p>Trong tiếng Anh tự nhiên, người bản ngữ rất thường xuyên lược bỏ hoàn toàn thành phần kết nối bề nổi. Nếu khối này ẩn đi thành phần kết nối nhưng vẫn chứa hệ trục [Danh Chủ][Noun Subject] - [Thời-Thuần Động Cơ][Tense-Bare Verb Base] nằm bên trong cấu trúc lớn hơn, nó thực chất là một dạng [Câu][Clause] đặc thù.</p>

			<p>Lúc này, khối [Ẩn-Liên Câu][Zero-Conjunctional Clause] hoàn toàn không chứa [Liên Cơ][Conjunctional Base], hiển thị cấu hình giống hệt như một câu độc lập nhưng thực chất phải neo chặt vào hệ thống để làm tròn 3 chức năng:</p>


			<h4 className="margin-y-40">A. [Danh Nhận][Noun Object]</h4>
			
				<ul className="list-square">
			
					<li>I beLIEVE [you will PASS the exAM].</li>
					<li className="margin-bottom-20 list-none">Tôi tin [bạn sẽ vượt qua kỳ thi].</li>
			
					<li className="list-none">Hình thái: [you will PASS the exAM] - [Ẩn-Liên Câu][Zero-Conjunctional Clause] đã ẩn đi thành phần liên kết bề nổi, bên trong chứa hệ trục [Danh Chủ][Noun Subject] "you" và khối hành động gồm [Áp-Thái Thuần Động Cơ][Assertive-Modal Bare Verb Base] "will" kết hợp với [Thuần Động Cơ][Bare Verb Base] "PASS".</li>
			
					<li className="list-none">Chức năng: [you will PASS the exAM] - [Danh Câu][Noun Clause] đứng sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "beLIEVE" như một [Danh Nhận][Noun Object] thực thi.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">B. [Tính Câu][Adjective Clause]</h4>
			
				<ul className="list-square">
			
					<li>The BOOK [she LENT me] was FAScinating.</li>
					<li className="margin-bottom-20 list-none">Cuốn sách [cô ấy cho tôi mượn] rất hấp dẫn.</li>
			
					<li className="list-none">Hình thái: [she LENT me] - [Ẩn-Liên Câu][Zero-Conjunctional Clause] đã ẩn đi thành phần liên kết bề nổi, bên trong chứa hệ trục [Danh Chủ][Noun Subject] "she" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "LENT".</li>
			
					<li className="list-none">Chức năng: [she LENT me] - [Tính Câu][Adjective Clause] đứng ngay sau đối tượng cuốn sách nhằm mô tả đặc điểm riêng biệt cho [Danh Cơ][Noun Base] book.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">C. [Trạng Câu][Adverb Clause]</h4>
			
				<ul className="list-square">
			
					<li>The TEA was so HOT [I COULDN'T DRINK it].</li>
					<li className="margin-bottom-20 list-none">Trà quá nóng [đến mức tôi không thể uống được].</li>
			
					<li className="list-none">Hình thái: [I COULDN'T DRINK it] - [Ẩn-Liên Câu][Zero-Conjunctional Clause] đã ẩn đi thành phần liên kết bề nổi, bên trong chứa hệ trục [Danh Chủ][Noun Subject] "I" và cụm hành động gồm [Ý-Thái Động Cơ][Soft-Modal Verb Base] "COULDN'T" kết hợp với [Thuần Động Cơ][Bare Verb Base] "DRINK".</li>
			
					<li className="list-none">Chức năng: [I COULDN'T DRINK it] - [Trạng Câu][Adverb Clause] gắn vào phía sau [Tính Cơ][Adjective Base] "HOT" nhằm làm rõ hệ quả và bổ nghĩa cho mức độ đặc điểm của [Tính Cơ][Adjective Base] này.</li>
			
				</ul>
			


			
			{/* VII.  */}

			<h3 className="margin-y-50 text-center">VII. Nguyên Tắc Phân [Tầng][Tiered] Bằng "Điểm Neo"</h3>

			<p>Khi xử lý các cấu trúc phức tạp chứa nhiều tầng lồng ghép, người học áp dụng quy ước mã hóa hình khối tăng dần:</p>
			
				<ol>
			
					<li>Dấu vuông [] cho lớp bao ngoài cùng</li>
			
					<li>Dấu ngoặc nhọn {'{}'} cho lớp lồng trung gian</li>
			
					<li>Dấu móc nhọn &lt;&gt; cho lớp lồng sâu nhất.</li>
			
				</ol>
			
			
			<p className="margin-top-20">Các yếu tố đuôi biến đổi cấu hình như -s/-es, -ed, -ing nằm bên trong các dấu mốc tạo nên biến thể của từ, không làm thay đổi bản chất hình thái hay chức năng của khối.</p>

			<p>Hãy xem cách chúng ta bóc tách một cấu trúc chứa trọn vẹn cả 3 lớp hình khối:</p>

				<ul className="list-square">
			
					<li>[FINDing the KEY {'{which Opens <what is HIDden>}'}]  is DIFficult.</li>
					<li className="margin-bottom-20 list-none">[Việc tìm kiếm chiếc chìa khóa {'{mà mở <thứ đang bị giấu>}'}] thì khó khăn.</li>
					
					<li><strong>Tầng 3</strong> &lt;&gt;:</li>

					<li className="list-none">Hình thái lớp trong cùng &lt;&gt;: &lt;what is HIDden&gt; là một [Liên Câu][Conjunctional Clause] bắt đầu bằng [Liên Cơ][Conjunctional Base] what.</li>

					<li className="margin-bottom-20 list-none">Chức năng lớp trong cùng &lt;&gt;: &lt;what is HIDden&gt; đóng vai trò là một [Danh Câu][Noun Clause] làm điểm tựa [Danh Nhận][Noun Object] dưới sự điều phối của hành động mở opens.</li>

					<li><strong>Tầng 2</strong> {'{}'}:</li>

					<li className="list-none">Hình thái lớp trung gian {'{}'}: {'{which Opens <what is HIDden>}'} là một [Liên Câu][Conjunctional Clause] bắt đầu bằng [Liên Cơ][Conjunctional Base] which.</li>

					<li className="margin-bottom-20 list-none">Chức năng lớp trung gian {'{}'}: {'{which Opens <what is HIDden>}'} đóng vai trò là một [Tính Câu][Adjective Clause] neo ngay sau [Danh Cơ][Noun Base] key để bổ nghĩa và định danh trực tiếp cho chiếc chìa khóa đó.</li>

					<li><strong>Tầng 1</strong> []:</li>

					<li className="list-none">Hình thái tổng thể bao ngoài []: [FINDing the KEY {'{which Opens <what is HIDden>}'}] là một khối [Tiếp Động Cụm][Progressive Verb Phrase] bắt đầu bằng [Tiếp Động Cơ][Progressive Verb Base] dạng V-ing FINDing.</li>

					<li className="list-none">Chức năng lớp tổng thể bao ngoài []: [FINDing the KEY {'{which Opens <what is HIDden>}'}] vận hành đồng bộ như một khối [Danh Cụm][Noun Phrase] lớn giữ vai trò làm [Danh Chủ][Noun Subject] điều phối hệ trục thông tin hành động cho toàn bộ [Câu Lớn][Sentence].</li>
			
				</ul>
			


			{/* VIII.  */}

			<h3 className="margin-y-50 text-center">VIII. Khối [Tầng Cấu Trúc][Tiered Structures] Cao Cấp</h3>

			<p>Khi các hình khối lồng ghép vào nhau theo nhiều lớp như những chiếc hộp gỗ, hệ thống quy ước dấu sẽ giúp bóc tách chính xác mối quan hệ phân tầng về cả Hình thái lẫn Chức năng.</p>


			<h4 className="margin-y-40">1. [Danh Cụm][Noun Phrase]</h4>

			<p className="text-indent-whole">Khối [Danh Cụm][Noun Phrase] lớn đóng vai trò làm [Danh Chủ][Noun Subject] hoặc [Danh Nhận][Noun Object], nhưng bên trong nó lại chứa một khối chức năng phụ trợ lồng ghép để làm rõ thông tin.</p>

			<p><strong>Thể hiện Chức năng</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>
			
				<ul className="list-square">
			
					<li>[disCOVering {'{how the ENgine WORKS}'}] is INteresting.</li>
					<li className="margin-bottom-20 list-none">[Việc phát hiện ra {'{cách thức mà hành động hoạt động}'}] thì thú vị.</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Tầng trong: Khối lồng bên trong {'{how the ENgine WORKS}'} là một [Liên Câu][Conjunctional Clause] vì chứa đầy đủ hệ trục [Danh Chủ][Noun Subject] "the ENgine" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "WORKS", bắt đầu bằng [Liên Cơ][Conjunctional Base] how.</li>

					<li className="margin-bottom-20 list-none">Tầng ngoài: Khối tổng thể bao ngoài [disCOVering {'{how the ENgine WORKS}'}] là một khối [Tầng Tiếp Động Cụm][Tiered Progressive Verb Phrase] bắt đầu bằng hành động thực thi [Tiếp Động Cơ][Progressive Verb Base] dạng V-ing disCOVering.</li>
			
					<li className="list-none">Chức năng:</li>

					<li className="list-none">Tầng trong: Lớp trong {'{how the ENgine WORKS}'} đóng vai trò là một [Danh Câu][Noun Clause], neo ngay sau hành động thực thi [Tiếp Động Cơ][Progressive Verb Base] disCOVering để làm [Danh Nhận][Noun Object] cho hành động đó.</li>

					<li className="list-none">Tầng ngoài: Lớp ngoài [disCOVering {'{how the ENgine WORKS}'}] vận hành đồng bộ như một khối [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] lớn, đứng ở đầu câu giữ vai trò làm [Danh Chủ][Noun Subject] điều phối trục thông tin hành động cho toàn bộ [Câu Lớn][Sentence].</li>
			
				</ul>


			<p className="margin-top-20"><strong>Thể hiện Chức năng</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>
			
				<ul className="list-square">
			
					<li>He aVOIDed [disCUSSing {'{what they had disCOVered}'}].</li>
					<li className="margin-bottom-20 list-none">Anh ấy đã tránh [thảo luận về {'{những gì họ đã phát hiện ra}'}].</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Tầng trong: Khối lồng bên trong {'{what they had disCOVered}'} là một [Liên Câu][Conjunctional Clause] chứa hệ trục [Danh Chủ][Noun Subject] "they" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "had disCOVered", bắt đầu bằng [Liên Cơ][Conjunctional Base] what.</li>

					<li className="margin-bottom-20 list-none">Tầng ngoài: Khối tổng thể bao ngoài [disCUSSing {'{what they had disCOVered}'}] là một khối [Tầng Tiếp Động Cụm][Tiered Progressive Verb Phrase] bắt đầu bằng [Tiếp Động Cơ][Progressive Verb Base] disCUSSing.</li>
			
					<li className="list-none">Chức năng:</li>

					<li className="list-none">Tầng trong: Lớp trong {'{what they had disCOVered}'} đóng vai trò là một [Danh Câu][Noun Clause], neo ngay sau hành động thực thi disCUSSing để làm [Danh Nhận][Noun Object].</li>

					<li className="list-none">Tầng ngoài: Lớp ngoài [disCUSSing {'{what they had disCOVered}'}] vận hành như một khối [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] lớn đứng ngay sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "aVOIDed" nhằm làm [Danh Nhận][Noun Object] chịu sự điều phối trực tiếp từ nó.</li>
			
				</ul>

			

			<h4 className="margin-y-40">2. [Tính Cụm][Adjective Phrase]</h4>

			<p className="text-indent-whole">Khối [Tính Cụm][Adjective Phrase] bao ngoài chứa một khối chức năng độc lập nằm sâu bên trong để cùng tham gia mô tả đặc điểm cho [Danh Chủ][Noun Subject].</p>
			
				<ul className="list-square">
			
					<li>The ARticle [about {'{how she sucCEEDed}'}] is inSPIring.</li>
					<li className="margin-bottom-20 list-none">Bài báo [về {'{cách cô ấy thành công}'}] rất truyền cảm hứng.</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Tầng trong: Khối lồng bên trong {'{how she sucCEEDed}'} là một [Liên Câu][Conjunctional Clause] có chứa hệ trục [Danh Chủ][Noun Subject] "she" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "sucCEEDed", bắt đầu bằng [Liên Cơ][Conjunctional Base] how.</li>

					<li className="margin-bottom-20 list-none">Tầng ngoài: Khối tổng thể bao ngoài [about {'{how she sucCEEDed}'}] là một khối [Tầng Giới Cụm][Tiered Prepositional Phrase] bắt đầu bằng [Giới Cơ][Prepositional Base] about.</li>
			
					<li className="list-none">Chức năng:</li>

					<li className="list-none">Tầng trong: Lớp trong {'{how she sucCEEDed}'} đóng vai trò là một [Danh Câu][Noun Clause] đứng làm điểm tựa [Danh Nhận][Noun Object] dưới sự điều phối của [Giới Cơ][Prepositional Base] about.</li>

					<li className="list-none">Tầng ngoài: Lớp ngoài [about {'{how she sucCEEDed}'}] đóng vai trò là một [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] tổng thể bổ nghĩa cho [Danh Cụm][Noun Phrase] "The ARticle" đứng trước nó.</li>
			
				</ul>



			<h4 className="margin-y-40">3. [Trạng Cụm][Adverb Phrase]</h4>
					
			<p className="text-indent-whole">Khối [Trạng Cụm][Adverb Phrase] bao ngoài đảm nhận nhiệm vụ cung cấp hoàn cảnh, bên trong chứa một khối chức năng phụ thuộc để thiết lập mốc so sánh hoặc mốc giới hạn.</p>
			
				<ul className="list-square">
			
					<li>She WALKED [SLOWer {'{than we exPECTed}'}].</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã đi bộ [chậm hơn {'{những gì chúng tôi kỳ vọng}'}].</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Tầng trong: Khối lồng bên trong {'{than we exPECTed}'} là một [Liên Câu][Conjunctional Clause] có chứa hệ trục [Danh Chủ][Noun Subject] "we" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "exPECTed", được bắt đầu bằng [Liên Cơ][Conjunctional Base] than.</li>

					<li className="margin-bottom-20 list-none">Tầng ngoài: Khối tổng thể bao ngoài [SLOWer {'{than we exPECTed}'}] là một khối [Tầng Diện Trạng Cụm][Tiered Modified Adverb Phrase] hình thành từ khối [Rễ Tính Cơ][Root Adjective Base] nguyên bản SLOW kết hợp hậu tố -er.</li>
			
					<li className="list-none">Chức năng:</li>

					<li className="list-none">Tầng trong: Lớp trong {'{than we exPECTed}'} đóng vai trò là một [Trạng Câu][Adverb Clause] phụ thuộc, neo vào sau [Diện Trạng Cơ][Modified Adverb Base] dạng so sánh SLOWer để làm rõ mức độ cho cấu trúc so sánh.</li>

					<li className="list-none">Tầng trong: Lớp trong [SLOWer {'{than we exPECTed}'}] vận hành đồng bộ như một khối [<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] tổng thể gắn sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "WALKED" nhằm làm rõ hoàn cảnh cách thức hành động được thực hiện.</li>
			
				</ul>



			{/* VII.  */}

			<h3 className="margin-y-50 text-center">IX. Paraphrasing: Nghệ Thuật Thay [Khối] Cùng Chức Năng</h3>

			<p>Khi tư duy hình khối [Cơ][Base] - [Cụm][Phrase] - [Câu][Clause] đã trở thành bản năng, kỹ thuật viết lại câu (paraphrasing) không còn là việc đổi yếu tố cấu trúc một cách khiên cưỡng. Việc làm mới câu văn giờ đây thực chất là một bài toán hình học sắp xếp module: Thay đổi Cấp Độ cấu trúc nhưng giữ nguyên vẹn Chức Năng ở cùng một vị trí neo.</p>

			<p>Chỉ cần xác định vị trí đó đang đảm nhận chức năng gì thông qua việc phối hợp cùng ma trận [Danh] - [Tính] - [Trạng], người học có toàn quyền nhấc một khối [Cơ][Base] ra và đặt một khối [Cụm][Phrase] như [Động Cụm][Verb Phrase], [Giới Cụm][Prepositional Phrase] hoặc một khối [Câu][Clause] như [Liên Câu][Conjunctional Clause] vào để thế chỗ. Cấu trúc tổng thể của [Câu Lớn][Sentence] hoàn toàn không bị phá vỡ hay xáo trộn.</p>

			<p>Kỹ thuật dịch chuyển khối cùng chức năng này giúp người học tự do thực hiện việc chuyển đổi mượt mà giữa [Động][Verb], [Giới][Preposition] và [Câu][Clause] theo ý muốn. Hãy xem cách chúng ta biến đổi linh hoạt một thông điệp thông qua việc hoán đổi các khối cấu trúc cùng giữ Chức năng [Trạng]:</p>


			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>Cơ</strong>][<strong>Base</strong>]:</p>
			
				<ul className="list-square">
			
					<li>We arRIVED [LATE].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [muộn].</li>
			
					<li className="list-none">Hình thái: [LATE] - [Rễ Trạng Cơ][Root Adverb Base] hình thành từ khối [Rễ Tính Cơ][Root Adjective Base] nguyên bản "LATE" đóng vai trò diện mạo đơn lẻ ở cấp độ [Cơ][Base].</li>

					<li className="list-none">Chức năng: [LATE] - [Trạng Cơ][Adverb Base] đứng sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "arRIVED" làm [Trạng Cơ][Adverb Base] bổ nghĩa hoàn cảnh thời gian cho hành động.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>Cụm</strong>][<strong>Phrase</strong>] - [<strong>Động Cụm</strong>][<strong>Verb Phrase</strong>]:</p>
			
				<ul className="list-square">
			
					<li>We arRIVED [to HELP our FRIENDS].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [để giúp đỡ bạn bè của chúng tôi].</li>
			
					<li className="list-none">Hình thái: [to HELP our FRIENDS] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [Danh Chủ][Noun Subject] - [Thời-Thuần Động Cơ][Tense-Bare Verb Base], bắt đầu bằng [Hạt Động Cơ][Particle Verb Base] "to".</li>

					<li className="list-none">Chức năng: [to HELP our FRIENDS] - [Trạng Cụm][Adverb Phrase] đứng sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "arRIVED" nhằm làm rõ mục đích cho phần thông tin trước đó.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>Cụm</strong>][<strong>Phrase</strong>] - [<strong>Giới Cụm</strong>][<strong>Prepositional Phrase</strong>]:</p>
			
				<ul className="list-square">
			
					<li>We arRIVED [at NOON].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [vào buổi trưa].</li>
			
					<li className="list-none">Hình thái: [at NOON] - [Giới Cụm][Prepositional Phrase] cấu thành khối bắt đầu bằng một [Giới Cơ][Prepositional Base] mốc thời gian.</li>

					<li className="list-none">Chức năng: [at NOON] - [Trạng Cụm][Adverb Phrase] gắn vào phía sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "arRIVED" chịu trách nhiệm cung cấp hoàn cảnh thời điểm cho sự việc.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>Câu</strong>][<strong>Clause</strong>]:</p>
			
				<ul className="list-square">
			
					<li>We arRIVED [after the RAIN STOPPED].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [sau khi cơn mưa tạnh].</li>
			
					<li className="list-none">Hình thái: [after the RAIN STOPPED] - [Liên Câu][Conjunctional Clause] thể hiện khối hành động phức có chứa hệ trục [Danh Chủ][Noun Subject] "the RAIN" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "STOPPED", bắt đầu bằng [Liên Cơ][Conjunctional Base] "after".</li>

					<li className="list-none">Chức năng: [after the RAIN STOPPED] - [Trạng Câu][Adverb Clause] gắn vào phía sau [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "arRIVED" chịu trách nhiệm cung cấp hoàn cảnh thời gian cho toàn bộ hành động phía trước.</li>
			
				</ul>
			

			<h5 className="margin-y-30">Tương tự với việc thay khối cùng giữ Chức năng [Danh] làm [Danh Chủ][Noun Subject]:</h5>

			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>Cơ</strong>][<strong>Base</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[KNOWledge] is POWer.</li>
					<li className="margin-bottom-20 list-none">[Tri thức] là sức mạnh.</li>
			
					<li className="list-none">Hình thái: [KNOWledge] - [Diện Danh Cơ][Modified Noun Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "KNOW" kết hợp hậu tố "-ledge" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base].</li>

					<li className="list-none">Chức năng: [KNOWledge] - [Danh Cơ][Noun Base] đứng ở đầu câu tạo nên [Danh Chủ][Noun Subject] cho toàn câu.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>Cụm</strong>][<strong>Phrase</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[LEARNing a New LANguage] is a HUGE adVANtage.</li>
					<li className="margin-bottom-20 list-none">[Việc học một ngôn ngữ mới] là một lợi thế lớn.</li>
			
					<li className="list-none">Hình thái: [LEARNing a New LANguage] - [Tiếp Động Cụm][Progressive Verb Phrase] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [Danh Chủ][Noun Subject] - [Thời-Thuần Động Cơ][Tense-Bare Verb Base].</li>

					<li className="list-none">Chức năng: [LEARNing a New LANguage] - [Danh Cụm][Noun Phrase] đứng ở vị trí đầu câu để làm [Danh Chủ][Noun Subject] điều phối thông tin.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>Câu</strong>][<strong>Clause</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[What you KNOW] is POWer.</li>
					<li className="margin-bottom-20 list-none">[Những gì bạn biết] tạo nên sức mạnh.</li>
			
					<li className="list-none">Hình thái: [What you KNOW] - [Liên Câu][Conjunctional Clause] tạo nên khối hành động phức có chứa hệ trục [Danh Chủ][Noun Subject] "you" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "KNOW", bắt đầu bằng [Liên Cơ][Conjunctional Base] "what".</li>

					<li className="list-none">Chức năng: [What you KNOW] - [Danh Câu][Noun Clause] đứng ở đầu câu tạo nên [Danh Chủ][Noun Subject] cho toàn câu.</li>
			
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