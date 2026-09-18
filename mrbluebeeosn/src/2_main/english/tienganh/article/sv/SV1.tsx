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
		
			<h4><HashLink smooth to="/tieng-anh#base-phrase-clause-terms"><mark className="highlight-tertiary-padding-4-8">[BASE][PHRASE][CLAUSE]</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">[FUNCtions][LEVels]
												
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


			<div className="example">
										
				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#NOUN-BASE">NOUN</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADjective-BASE">ADjective</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADverb-BASE">ADVERB</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#NOUN-PHRASE">NOUN PHRASE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADjective-PHRASE">ADjective PHRASE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADverb-PHRASE">ADverb PHRASE</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#NOUN-CLAUSE">NOUN CLAUSE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADjective-CLAUSE">ADjective CLAUSE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADverb-CLAUSE">ADverb CLAUSE</HashLink>
					</span> &nbsp;

				</p>

			</div>


			<h4 className="margin-bottom-30 text-center">Cách Mạng Tư Duy Ngữ Pháp Tiếng Anh Bằng Hệ Trục Tọa Độ "[FUNCtions][LEVels]"</h4>

			<p>Bản chất của việc làm chủ một ngôn ngữ không nằm ở việc học thuộc lòng các quy tắc phức tạp, mà nằm ở khả năng nhìn thấu cấu trúc và quy luật vận hành của nó. Khi các yếu tố cấu trúc được đơn giản hóa thành một bản đồ trực quan, tư duy của người học sẽ được giải phóng hoàn toàn để đạt đến tốc độ phản xạ tự nhiên nhất.</p>
		
			<p>Hệ thống tư duy mới dưới đây được xây dựng dựa trên sự đồng bộ tuyệt đối giữa các Hình Thái gốc, [3 Chức Năng] điều phối và [3 Cấp Độ] hình khối, giúp người học "nhìn phát hiểu ngay" mọi thành phần trong tiếng Anh mà không cần đến bất kỳ định nghĩa rườm rà nào.</p>


			{/* I.  */}

			<h3 className="margin-y-50 text-center">I. Hệ Trục Tọa Độ Quy Tắc [3C]</h3>

			<p>Hệ thống tư duy ngữ pháp vận hành dựa trên sự giao thoa đồng bộ của 2 trục tọa độ cốt lõi:</p>

			<p className="margin-top-20"><strong>1</strong>. <strong>Trục Cấp Độ</strong> (<strong>Quy mô cấu trúc</strong>):</p>
			
				<ul className="list-square">
			
					<li>[<strong>BASE</strong>][<strong>CƠ</strong>]: Đơn vị từ đơn lẻ gốc.</li>
			
					<li>[<strong>PHRASE</strong>][<strong>CỤM</strong>]: Tập hợp nhiều từ kết hợp, không chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] - [MAIN VERB][CHÍNH ĐỘNG].</li>
			
					<li>[<strong>CLAUSE</strong>][<strong>CÂU</strong>]: Khối cấu trúc hoàn chỉnh chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] - [MAIN VERB][CHÍNH ĐỘNG].</li>
			
				</ul>


			<p className="margin-top-20"><strong>2</strong>. <strong>Trục Chức Năng</strong> (<strong>Vai trò vận hành trong câu</strong>):</p>
			
				<ul className="list-square">
			
					<li>[<strong>NOUN</strong>][<strong>DANH</strong>]: Đóng vai trò thực thể ([SUBject PROnoun][CHỦ ĐẠI] điều phối hoặc [OBject PROnoun][TÂN ĐẠI] tiếp nhận).</li>
			
					<li>[<strong>ADjective</strong>][<strong>TÍNH</strong>]: Đóng vai trò mô tả đặc điểm, tính chất cho thực thể.</li>

					<li>[<strong>ADverb</strong>][<strong>TRẠNG</strong>]: Đóng vai trò bổ nghĩa hoàn cảnh (thời gian, địa điểm, nguyên nhân, cách thức, mục đích).</li>
			
				</ul>

			

			{/* II.  */}

			<h3 className="margin-y-50 text-center">II. Tư Duy Ngược: Từ "Hình Thái" Giải Mã "Chức Năng"</h3>

			<p>Với hệ thống mới, quy trình tư duy được thực hiện một cách tự nhiên và khoa học: Người học nhìn thấy Hình thái trước, sau đó dựa vào vị trí để giải mã ra Chức năng.</p>

			<p>Hành động trong câu chính là các dạng [VERB][ĐỘNG] xung lực vận hành, song hành cùng cấu trúc liên kết không hành động là [prepoSITion][GIỚI] hoặc [COMplex prepoSITion][PHỨC GIỚI].</p>

			<p>Để giải mã chính xác bản chất cấu trúc, trục hình thái [VERB][ĐỘNG] được chia tách hệ thống thành 4 nhóm cốt lõi và phân hệ 16 mục sau:</p>
			

			<h4 className="margin-y-40">4 Nhóm Động Từ Cốt Lõi</h4>
          
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 1</strong>: [<strong>TENSE VERB</strong>][<strong>THỜI ĐỘNG</strong>]</p>

      <p className="text-indent-whole">Nhóm này định vị mốc [Thời] gian và biểu thị trạng thái [Hoàn] thành hoặc [Tiếp] diễn của hành động.</p>

        <ul className="list-square">
      
          <li>be exPLOREing ➔ [Thời] be (am/is/are, was/were) + [HIỆN TIẾP ĐỘNG] exPLOREing</li>

          <li>have been exPLOREing ➔ [Thời + Hoàn] have/has/had + been + [HIỆN TIẾP ĐỘNG] exPLOREing</li>
      
          <li>have exPLORED ➔ [Thời + Hoàn] have/has/had + exPLORED</li>
      
          <li>exPLORES, exPLORED ➔ [Thời-Thuần ĐỘNG] Tích hợp hoàn toàn</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 2</strong>: [<strong>BARE VERB</strong>][<strong>THUẦN ĐỘNG</strong>]</p>

      <p className="text-indent-whole">Nhóm giữ nguyên hình thái gốc nguyên bản, tuyệt đối không chia theo thời hay thực thể khơi nguồn.</p>

        <ul className="list-square">
      
          <li>to exPLORE ➔ [Hạt ĐỘNG] to + [Thuần ĐỘNG] exPLORE</li>
      
          <li>DID exPLORE ➔ [Thời] did (Nhấn mạnh) + [Thuần ĐỘNG] exPLORE</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 3</strong>: [<strong>SOFT-MOdal BARE VERB</strong>][<strong>Ý-THÁI THUẦN ĐỘNG</strong>]</p>

      <p className="text-indent-whole">Nhóm diễn đạt các tình huống lịch sự, khuyên nhủ hoặc giả định nhẹ nhàng. Bao gồm: would (nhã nhặn), should (gợi ý), could (khả năng nhẹ), might (khả năng thấp), ought to (khuyên bảo), had better (khuyên nhủ).</p>

        <ul className="list-square">
      
          <li>should exPLORE ➔ [Ý-Thái] should (gợi ý) + [Thuần ĐỘNG] exPLORE</li>
      
          <li>could exPLORE ➔ [Ý-Thái] could (khả năng nhẹ) + [Thuần ĐỘNG] exPLORE</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 4</strong>: [<strong>asSERTive-MOdal BARE VERB</strong>][<strong>ÁP-THÁI THUẦN ĐỘNG</strong>]</p>

      <p className="text-indent-whole">Nhóm khẳng định, cam kết hoặc áp đặt thực tế một cách chắc chắn. Bao gồm: will (cam kết), shall (chắc chắn), can (năng lực), must (ép buộc), have to (bắt buộc), may (khả năng).</p>

        <ul className="list-square">
      
          <li>will exPLORE ➔ [Áp-Thái] will (cam kết) + [Thuần ĐỘNG] exPLORE</li>
      
          <li>must exPLORE ➔ [Áp-Thái] must (ép buộc) + [Thuần ĐỘNG] exPLORE</li>
      
        </ul>

			
			<h4 className="margin-y-40">III. Phân Hệ [BASE][CƠ]</h4>
			
				<ol>
      
          <li value="1">[<strong>ROOT VERB</strong>][<strong>RỄ ĐỘNG</strong>]: LEARN, SPEAK, BUILD</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng nguyên thủy cốt lõi nhất, chưa thêm bớt hay kết hợp với bất kỳ hành động nào khác.</li>
      
          <li value="2">[<strong>PARTicle VERB</strong>][<strong>HẠT ĐỘNG</strong>]: to, IN, ON, AT, BY</li>
          <li className="margin-bottom-20 list-none">[Hạt] "to" đơn lẻ đóng vai trò hạt nhân đầu tiên đứng trước mọi khối hành động để kích hoạt trạng thái nguyên bản. Các [Hạt] như IN, ON, AT, BY đơn lẻ đứng sau đóng vai trò định hướng hành động để chỉ rõ không gian hoặc phương thức thực hiện.</li>

          <li value="3">[<strong>auXILiary VERB</strong>][<strong>TRỢ ĐỘNG</strong>]: does, did, is, has, was, am, are</li>
          <li className="margin-bottom-20 list-none">Các [TENSE VERB][THỜI ĐỘNG] xuất hiện đơn lẻ để gánh vác năng lượng [Thời] gian, [Thời] cho câu.</li>
      
          <li value="4">[<strong>SOFT-MOdal VERB</strong>][<strong>Ý-THÁI ĐỘNG</strong>]: would, could, should, might, ought to, had BETter</li>
          <li className="margin-bottom-20 list-none">Hành động thể hiện [Thái] độ nhã nhặn, triệt tiêu tính ép buộc. Các khối phức đặc biệt "ought to" và "had better" được quét như một [COMplex SOFT-MOdal VERB][PHỨC Ý-THÁI ĐỘNG] thống nhất.</li>

          <li value="5">[<strong>asSERTive-MOdal VERB</strong>][<strong>ÁP-THÁI ĐỘNG</strong>]: will, shall, can, must, have to, may</li>
          <li className="margin-bottom-20 list-none">Hành động mang tính trực diện, [Áp] đặt thực tế xuống người nghe. Khối phức đặc biệt "have to" được quét như một [COMplex asSERTive-MOdal VERB][PHỨC ÁP-THÁI ĐỘNG] thống nhất.</li>

          <li value="6">[<strong>BARE VERB</strong>][<strong>THUẦN ĐỘNG</strong>]: LEARN, SPEAK, BUILD</li>
          <li className="margin-bottom-20 list-none">Hành động [Thuần] khiết đứng tự do một mình, đã giải phóng hoàn toàn và không đi kèm to, thường đứng ngay sau [PARTicle VERB][HẠT ĐỘNG] "to", [SOFT-MOdal][Ý-THÁI] hay [asSERTive-MOdal VERB][ÁP-THÁI ĐỘNG] hoặc [ROOT VERB][RỄ ĐỘNG] như MAKE, LET, let's, HELP, HAVE, SEE, HEAR, WATCH, FEEL, NOTICE.</li>
      
          <li value="7">[<strong>PARTicle BARE VERB</strong>][<strong>HẠT THUẦN ĐỘNG</strong>]: to LEARN, to SPEAK, to BUILD</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [PARTicle VERB][HẠT ĐỘNG] và hành động [BARE VERB][THUẦN ĐỘNG] phía sau.</li>

          <li value="8">[<strong>SOFT-MOdal BARE VERB</strong>][<strong>Ý-THÁI THUẦN ĐỘNG</strong>]: would BUILD, could SPEAK</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Ý] nhị và hành động [Thuần] khiết.</li>
      
          <li value="9">[<strong>asSERTive-MOdal BARE VERB</strong>][<strong>ÁP-THÁI THUẦN ĐỘNG</strong>]: will BUILD, can SPEAK</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Áp] đặt thực tế và hành động [Thuần] khiết.</li>

          <li value="10">[<strong>TENSE BARE VERB</strong>][<strong>THỜI THUẦN ĐỘNG</strong>]: DID SPEAK, DOES BUILD</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] gian và hành động [Thuần] khiết song hành, được ngăn cách bởi một khoảng trắng.</li>

          <li value="11">[<strong>PAST TENSE VERB</strong>][<strong>QUÁ THỜI ĐỘNG</strong>], [<strong>3RD-PERson PRESent VERB</strong>][<strong>BA HIỆN ĐỘNG</strong>]: SPOKE, SPEAKS, BUILDS, WORKS</li>
          <li className="margin-bottom-20 list-none">Hành động chính mang thời (chia thì đơn), tích hợp trọn vẹn trạng thái [Thời] gian và hành động [Thuần] khiết hòa tan gọn gàng vào một chữ duy nhất.</li>
      
          <li value="12">[<strong>PRESent PARTiciple VERB</strong>][<strong>HIỆN TIẾP ĐỘNG</strong>]: LEARNing, SPEAKing, BUILDing</li>
          <li className="margin-bottom-20 list-none">Hành động mang đuôi -ing, biểu thị tính chất đang [Tiếp] diễn, kéo dài.</li>

          <li value="13">[<strong>PAST PARTiciple VERB</strong>][<strong>QUÁ HOÀN ĐỘNG</strong>]: LEARNT, SPOKEN, BUILT, been</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng hoàn tất (cột 3/-ed), biểu thị tính chất trọn vẹn, [Hoàn] thành.</li>
      
          <li value="14">[<strong>TENSE PRESent PARTiciple VERB</strong>][<strong>THỜI HIỆN TIẾP ĐỘNG</strong>]: is SPEAKing, was BUILDing</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa từ mang [Thời] gian và hành động mang tính [Tiếp] diễn.</li>

          <li value="15">[<strong>TENSE PAST PARTiciple VERB</strong>][<strong>THỜI QUÁ HOÀN ĐỘNG</strong>]: has SPOken, had BUILT</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa từ mang [Thời] và hành động mang tính [Hoàn] thành.</li>
      
          <li value="16">[<strong>TENSE PERfect PRESent PARTiciple VERB</strong>][<strong>THỜI HOÀN HIỆN TIẾP ĐỘNG</strong>]: has been SPEAKing, had been BUILDing</li>
          <li className="list-none">Sự hợp nhất tuyến tính đồng thời của ba lớp năng lượng: [Thời] gian, [Hoàn] thành và [Tiếp] diễn.</li>
      
        </ol>


			{/* IV.  */}

			<h3 className="margin-y-50 text-center">IV. Phân Hệ [PHRASE][CỤM]</h3>

			<p>📌 <strong>QUY TẮC CỐT LÕI</strong>:</p>

			<p className="margin-top-20">"Khi bất kỳ họ [VERB][ĐỘNG] nào thuộc 16 mục trên kéo theo các [OBject PROnoun][TÂN ĐẠI], [ADVERB][TRẠNG], [ADverb PHRASE][TRẠNG CỤM], hoặc [ADverb CLAUSE][TRẠNG CÂU] phía sau, toàn bộ khối đó lập tức chuyển đổi cấu trúc và được dán nhãn thành dạng [PHRASE][CỤM] tương ứng của chính nó."</p>
			

			{/* V.  */}

			<h3 className="margin-y-50 text-center">V. Quy Trình Vận Hành Và Ký Hiệu Đóng Gói Sơ Đồ</h3>

			<p>Để bóc tách các tầng hình thái lồng ghép vào nhau như những chiếc hộp gỗ, người học áp dụng quy ước đóng gói hình khối bằng dấu vuông [] bao quanh:</p>


			<h4 className="margin-y-40">1. Hình thái [VERB][ĐỘNG]</h4>

			<p className="text-indent-whole">Đơn vị hành động nhỏ nhất gồm 1 yếu tố gốc.</p>

			<ul className="list-square" id="NOUN-BASE">
			
					<li>[WRIting] SHARPens the INtellect.</li>
					<li className="margin-bottom-20 list-none">[Việc viết lách] mài sắc trí tuệ.</li>
			
					<li className="list-none">Hình thái: [WRIting] - [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] hình thành từ khối [ROOT VERB][RỄ ĐỘNG] nguyên bản "WRITE" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [BASE][CƠ], đóng vai trò làm hạt nhân hành động đơn lẻ cho cấu trúc câu.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [WRIting] - [NOUN][DANH] đứng ở đầu câu tạo nên [SUBject PROnoun][CHỦ ĐẠI] cho toàn câu.</li>
			
				</ul>

				<ul className="list-square">
			
					<li>she PRACtices [READing].</li>
					<li className="margin-bottom-20 list-none">Cô ấy luyện tập [việc đọc].</li>
			
					<li className="list-none">Hình thái: [READing] - [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] hình thành từ khối [ROOT VERB][RỄ ĐỘNG] nguyên bản "READ" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [BASE][CƠ], đóng vai trò làm hạt nhân hành động tiếp diễn.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [READing] - [NOUN][DANH] đứng sau [3RD-PERson PRESent VERB][BA HIỆN ĐỘNG] "PRACtices" làm [OBject PROnoun][TÂN ĐẠI] gánh chịu trực tiếp tác động từ hành động luyện tập của thực thể khơi nguồn.</li>
			
				</ul>
			
				<ul className="list-square" id="ADjective-BASE">
			
					<li>the [GROWing] deMAND reQUIres ACtion.</li>
					<li className="margin-bottom-20 list-none">Nhu cầu [đang tăng cao] đòi hỏi phải hành động.</li>
			
					<li className="list-none">Hình thái: [GROWing] - [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] hình thành từ khối [ROOT VERB][RỄ ĐỘNG] nguyên bản "GROW" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [BASE][CƠ] phản ánh trạng thái đang vận động liên tục.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [GROWing] - [ADjective][TÍNH] đứng trước [NOUN][DANH] "deMAND" nhằm mô tả đặc điểm của đối tượng.</li>
			
				</ul>
			
			
				<ul className="list-square" id="ADverb-BASE">
			
					<li>the TEAM coOPered [harMOniously].</li>
					<li className="margin-bottom-20 list-none">Đội ngũ đã hợp tác [một cách hài hòa].</li>
			
					<li className="list-none">Hình thái: [harMOniously] – [MODified ADVERB][DIỆN TRẠNG] hình thành từ khối [ROOT VERB][RỄ ĐỘNG] nguyên bản "HARmonize" kết hợp các hậu tố "-ous" và "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [BASE][CƠ] mang tính chất phương thức vận hành.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [harMOniously] - [ADVERB][TRẠNG] đứng sau hành động nhằm chỉ ra cách thức thực hiện.</li>
			
				</ul>
			


			<h4 className="margin-y-40">2. Hình thái [VERB PHRASE][ĐỘNG CỤM]</h4>

			<p className="text-indent-whole">Đơn vị hành động chứa nhiều yếu tố kết hợp, cấu trúc không chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] - [MAIN VERB][CHÍNH ĐỘNG]. Khi các dạng [BASE][CƠ] kết hợp với thành phần phụ trợ sau nó, chúng dán nhãn thành dạng cụm tương ứng:</p>

			<ul className="list-square" id="NOUN-PHRASE">
			
					<li>[LEARNing a New LANguage] reQUIres PAtience.</li>
					<li className="margin-bottom-20 list-none">[Việc học một ngôn ngữ mới] đòi hỏi sự kiên nhẫn.</li>
			
					<li className="list-none">Hình thái: [LEARNing a New LANguage] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] - [MAIN VERB][CHÍNH ĐỘNG].</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [LEARNing a New LANguage] - [NOUN PHRASE][DANH CỤM] đứng ở vị trí đầu câu để làm [SUBject PROnoun][CHỦ ĐẠI] điều phối thông tin.</li>
			
				</ul>
			
				<ul className="list-square">
			
					<li>she PROMised [to FINish the rePORT].</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã hứa [hoàn thành bản báo cáo].</li>
			
					<li className="list-none">Hình thái: [to FINish the rePORT] - [PARTicle BARE VERB PHRASE][HẠT THUẦN ĐỘNG CỤM] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] - [MAIN VERB][CHÍNH ĐỘNG].</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [to FINish the rePORT] - [NOUN PHRASE][DANH CỤM] đứng sau [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "PROMised" để làm [OBject PROnoun][TÂN ĐẠI] thực thi [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG].</li>
			
				</ul>
			
			
				<ul className="list-square" id="ADjective-PHRASE">
			
					<li>the CHILDren [PLAYing in the PARK] are LAUGHing.</li>
					<li className="margin-bottom-20 list-none">Những đứa trẻ [đang chơi trong công viên] đang cười.</li>
			
					<li className="list-none">Hình thái: [PLAYing in the PARK] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] biểu thị khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] - [MAIN VERB][CHÍNH ĐỘNG], bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng V-ing.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [PLAYing in the PARK] - [ADjective PHRASE][TÍNH CỤM] đứng ngay sau đối tượng những đứa trẻ nhằm mô tả mức độ đặc điểm của [ADjective][TÍNH] này.</li>
			
				</ul>
			
			
				<ul className="list-square" id="ADverb-PHRASE">
			
					<li>he woKE UP EARly [to CATCH the TRAIN].</li>
					<li className="margin-bottom-20 list-none">Anh ấy đã thức dậy sớm [để bắt kịp chuyến tàu].</li>
			
					<li className="list-none">Hình thái: [to CATCH the TRAIN] - [PARTicle BARE VERB PHRASE][HẠT THUẦN ĐỘNG CỤM] xác định khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] - [MAIN VERB][CHÍNH ĐỘNG], bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng V-ing trong các cấu trúc biến thể hoặc liên kết mở rộng.</li>
			
					<li className="list-none">Chức năng: [to CATCH the TRAIN] - [ADverb PHRASE][TRẠNG CỤM] gắn vào phía sau nhằm làm rõ mục đích cho phần thông tin trước đó.</li>
			
				</ul>
			


			<h4 className="margin-y-40">3. Hình thái [prepoSITional PHRASE][GIỚI CỤM]</h4>

			<p className="text-indent-whole">Khối liên kết không gian, thời gian hoặc sở hữu, hoàn toàn tách biệt khỏi cấu trúc hành động và không chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] - [MAIN VERB][CHÍNH ĐỘNG]. Hình thái này chuyên biệt tạo nên hai chức năng [ADjective PHRASE][TÍNH CỤM] và [ADverb PHRASE][TRẠNG CỤM].</p>
			
				<ul className="list-square">
			
					<li>the CAT [under the BLACK CAR] is SLEEPing.</li>
					<li className="margin-bottom-20 list-none">Con mèo [ở dưới chiếc xe màu đen] thì đang ngủ.</li>
			
					<li className="list-none">Hình thái: [under the BLACK CAR] - [prepoSITional PHRASE][GIỚI CỤM] cấu thành khối bắt đầu bằng một [prepoSITion][GIỚI] mốc vị trí.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [under the BLACK CAR] - [ADjective PHRASE][TÍNH CỤM] neo ngay sau đối tượng con mèo để mô tả đặc điểm vị trí nhận diện riêng biệt cho nó.</li>
			
				</ul>
			
			
				<ul className="list-square">
			
					<li>we arRIVED [at MIDnight].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [vào lúc nửa đêm].</li>
			
					<li className="list-none">Hình thái: [at MIDnight] - [prepoSITional PHRASE][GIỚI CỤM] cấu thành khối bắt đầu bằng một [prepoSITion][GIỚI] mốc thời gian.</li>
			
					<li className="list-none">Chức năng: [at MIDnight] - [ADverb PHRASE][TRẠNG CỤM] gắn vào cuối câu chịu trách nhiệm cung cấp hoàn cảnh thời điểm cho sự việc.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">4. Hình thái [conJUNCtional CLAUSE][LIÊN CÂU]</h4>

			<p className="text-indent-whole">Đơn vị hành động phức cao cấp, chứa một cấu trúc [CLAUSE][CÂU] hoàn chỉnh ở bên trong có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] - [MAIN VERB][CHÍNH ĐỘNG].</p>


			<ul className="list-square" id="NOUN-CLAUSE">
			
					<li>[WHAT you SAID] surPRISED me.</li>
					<li className="margin-bottom-20 list-none">[Những gì bạn đã nói] đã làm tôi ngạc nhiên.</li>
			
					<li className="list-none">Hình thái:  [WHAT you SAID] - [conJUNCtional CLAUSE][LIÊN CÂU] tạo nên khối hành động phức có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "you" và [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "SAID", bắt đầu bằng [conJUNCtion][LIÊN] "WHAT".</li>
			
					<li className="margin-bottom-20 list-none">Chức năng:  [WHAT you SAID] - [NOUN CLAUSE][DANH CÂU] đảm nhận nhiệm vụ của một khối đối tượng đứng trước [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "surPRISED" để làm [SUBject PROnoun][CHỦ ĐẠI] điều phối hành động cho toàn bộ [Câu Lớn][Sentence].</li>
			
				</ul>

				<ul className="list-square">
			
					<li><strong>ever</strong>yone KNOWS [that WAter BOILS at ONE HUNdred deGREES].</li>
					<li className="margin-bottom-20 list-none">Mọi người đều biết [rằng nước sôi ở 100 độ].</li>
			
					<li className="list-none">Hình thái: [that WAter BOILS at ONE HUNdred deGREES] - [conJUNCtional CLAUSE][LIÊN CÂU] tạo nên khối hành động phức có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "WAter" và [3RD-PERson PRESent VERB][BA HIỆN ĐỘNG] "BOILS", bắt đầu bằng [conJUNCtion][LIÊN] "that".</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [that WAter BOILS at ONE HUNdred deGREES] - [NOUN CLAUSE][DANH CÂU] đảm nhận nhiệm vụ của một khối đối tượng đứng sau [3RD-PERson PRESent VERB][BA HIỆN ĐỘNG] "KNOWS" để làm [OBject PROnoun][TÂN ĐẠI] dưới sự điều phối của nó.</li>
			
				</ul>

			
				<ul className="list-square" id="ADjective-CLAUSE">
			
					<li>the LAPtop [which i BOUGHT LAST WEEK] WORKS PERfectly.</li>
					<li className="margin-bottom-20 list-none">Chiếc máy tính xách tay [mà tôi mua tuần trước] hoạt động hoàn hảo.</li>
			
					<li className="list-none">Hình thái: [which i BOUGHT LAST WEEK] - [SUBject PROnoun CLAUSE][CHỦ ĐẠI CÂU] định hình khối hành động phức có chứa hệ trục [SUBject PRONOUN][CHỦ ĐẠI] "i" và [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "BOUGHT", bắt đầu bằng [conJUNCtion][LIÊN] "which".</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [which i BOUGHT LAST WEEK] - [ADjective CLAUSE][TÍNH CÂU] thực hiện nhiệm vụ đứng sau định danh và mô tả đặc điểm riêng cho [NOUN][DANH] LAPtop.</li>
			
				</ul>
		
			
				<ul className="list-square" id="ADverb-CLAUSE">
			
					<li>we CANcelled the PICnic [be<strong>cause</strong> it RAINED HEAVily].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã hủy buổi dã ngoại [vì trời mưa to].</li>
			
					<li className="list-none">Hình thái: [be<strong>cause</strong> it RAINED HEAVily] - [conJUNCtional CLAUSE][LIÊN CÂU] thể hiện khối hành động phức có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "it" và [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "RAINED", bắt đầu bằng [conJUNCtion][LIÊN] "be<strong>cause</strong>".</li>
			
					<li className="list-none">Chức năng: [be<strong>cause</strong> it RAINED HEAVily] - [ADverb CLAUSE][TRẠNG CÂU] chịu trách nhiệm cung cấp hoàn cảnh nguyên nhân cho toàn bộ hành động hủy bỏ trước đó.</li>
			
				</ul>


			{/* VI.  */}

			<h3 className="margin-y-50 text-center">VI. Hiện Tượng [ZEro-conJUNCtional CLAUSE][ẨN-LIÊN CÂU]</h3>

			<p>Trong tiếng Anh tự nhiên, người bản ngữ rất thường xuyên lược bỏ hoàn toàn thành phần kết nối bề nổi. Nếu khối này ẩn đi thành phần kết nối nhưng vẫn chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] - [MAIN VERB][CHÍNH ĐỘNG] nằm bên trong cấu trúc lớn hơn, nó thực chất là một dạng [CLAUSE][CÂU] đặc thù.</p>

			<p>Lúc này, khối [ZEro-conJUNCtional CLAUSE][ẨN-LIÊN CÂU] hoàn toàn không chứa [conJUNCtion][LIÊN], hiển thị cấu hình giống hệt như một câu độc lập nhưng thực chất phải neo chặt vào hệ thống để làm tròn 3 chức năng:</p>


			<h4 className="margin-y-40">A. [OBject PROnoun][TÂN ĐẠI]</h4>
			
				<ul className="list-square">
			
					<li>i beLIEVE [you will PASS the exAM].</li>
					<li className="margin-bottom-20 list-none">Tôi tin [bạn sẽ vượt qua kỳ thi].</li>
			
					<li className="list-none">Hình thái: [you will PASS the exAM] - [ZEro-conJUNCtional CLAUSE][ẨN-LIÊN CÂU] đã ẩn đi thành phần liên kết bề nổi, bên trong chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "you" và khối hành động gồm [asSERTive-MOdal BARE VERB][ÁP-THÁI THUẦN ĐỘNG] "will" kết hợp với [BARE VERB][THUẦN ĐỘNG] "PASS".</li>
			
					<li className="list-none">Chức năng: [you will PASS the exAM] - [NOUN CLAUSE][DANH CÂU] đứng sau [BARE VERB][THUẦN ĐỘNG] "beLIEVE" như một [OBject PROnoun][TÂN ĐẠI] thực thi.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">B. [ADjective CLAUSE][TÍNH CÂU]</h4>
			
				<ul className="list-square">
			
					<li>the BOOK [she LENT me] was FAScinating.</li>
					<li className="margin-bottom-20 list-none">Cuốn sách [cô ấy cho tôi mượn] rất hấp dẫn.</li>
			
					<li className="list-none">Hình thái: [she LENT me] - [ZEro-OBject PROnoun CLAUSE][ẨN-TÂN ĐẠI CÂU] đã ẩn đi thành phần liên kết bề nổi, bên trong chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "she" và [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "LENT".</li>
			
					<li className="list-none">Chức năng: [she LENT me] - [ADjective CLAUSE][TÍNH CÂU] đứng ngay sau đối tượng cuốn sách nhằm mô tả đặc điểm riêng biệt cho [NOUN][DANH] book.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">C. [ADverb CLAUSE][TRẠNG CÂU]</h4>
			
				<ul className="list-square">
			
					<li>the TEA was so HOT [i COULDN'T DRINK it].</li>
					<li className="margin-bottom-20 list-none">Trà quá nóng [đến mức tôi không thể uống được].</li>
			
					<li className="list-none">Hình thái: [i COULDN'T DRINK it] - [ZEro-conJUNCtional CLAUSE][ẨN-LIÊN CÂU] đã ẩn đi thành phần liên kết bề nổi, bên trong chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "i" và cụm hành động gồm [SOFT-MOdal VERB][Ý-THÁI ĐỘNG] "COULDN'T" kết hợp với [BARE VERB][THUẦN ĐỘNG] "DRINK".</li>
			
					<li className="list-none">Chức năng: [i COULDN'T DRINK it] - [ADverb CLAUSE][TRẠNG CÂU] gắn vào phía sau [ADjective][TÍNH] "HOT" nhằm làm rõ hệ quả và bổ nghĩa cho mức độ đặc điểm của [ADjective][TÍNH] này.</li>
			
				</ul>
			


			
			{/* VII.  */}

			<h3 className="margin-y-50 text-center">VII. Nguyên Tắc Phân [TIERed][TẦNG] Bằng "Điểm Neo"</h3>

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

					<li className="list-none">Hình thái lớp trong cùng &lt;&gt;: &lt;what is HIDden&gt; là một [conJUNCtional CLAUSE][LIÊN CÂU] bắt đầu bằng [conJUNCtion][LIÊN] what.</li>

					<li className="margin-bottom-20 list-none">Chức năng lớp trong cùng &lt;&gt;: &lt;what is HIDden&gt; đóng vai trò là một [NOUN CLAUSE][DANH CÂU] làm điểm tựa [OBject PROnoun][TÂN ĐẠI] dưới sự điều phối của hành động mở opens.</li>

					<li><strong>Tầng 2</strong> {'{}'}:</li>

					<li className="list-none">Hình thái lớp trung gian {'{}'}: {'{which Opens <what is HIDden>}'} là một [SUBject PROnoun CLAUSE][CHỦ ĐẠI CÂU] bắt đầu bằng [SUBject PRONOUN][CHỦ ĐẠI] which.</li>

					<li className="margin-bottom-20 list-none">Chức năng lớp trung gian {'{}'}: {'{which Opens <what is HIDden>}'} đóng vai trò là một [ADjective CLAUSE][TÍNH CÂU] neo ngay sau [NOUN][DANH] key để bổ nghĩa và định danh trực tiếp cho chiếc chìa khóa đó.</li>

					<li><strong>Tầng 1</strong> []:</li>

					<li className="list-none">Hình thái tổng thể bao ngoài []: [FINDing the KEY {'{which Opens <what is HIDden>}'}] là một khối [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng V-ing FINDing.</li>

					<li className="list-none">Chức năng lớp tổng thể bao ngoài []: [FINDing the KEY {'{which Opens <what is HIDden>}'}] vận hành đồng bộ như một khối [NOUN PHRASE][DANH CỤM] lớn giữ vai trò làm [SUBject PROnoun][CHỦ ĐẠI] điều phối hệ trục thông tin hành động cho toàn bộ [Câu Lớn][Sentence].</li>
			
				</ul>
			


			{/* VIII.  */}

			<h3 className="margin-y-50 text-center">VIII. Khối [TIERed STRUCtures][TẦNG ĐA TRÚC] Cao Cấp</h3>

			<p>Khi các hình khối lồng ghép vào nhau theo nhiều lớp như những chiếc hộp gỗ, hệ thống quy ước dấu sẽ giúp bóc tách chính xác mối quan hệ phân tầng về cả Hình thái lẫn Chức năng.</p>


			<h4 className="margin-y-40">1. [NOUN PHRASE][DANH CỤM]</h4>

			<p className="text-indent-whole">Khối [NOUN PHRASE][DANH CỤM] lớn đóng vai trò làm [SUBject PROnoun][CHỦ ĐẠI] hoặc [OBject PROnoun][TÂN ĐẠI], nhưng bên trong nó lại chứa một khối chức năng phụ trợ lồng ghép để làm rõ thông tin.</p>

			<p><strong>Thể hiện Chức năng</strong> [<strong>SUBject PROnoun</strong>][<strong>CHỦ ĐẠI</strong>]</p>
			
				<ul className="list-square">
			
					<li>[disCOVering {'{how the ENgine WORKS}'}] is INTEResting.</li>
					<li className="margin-bottom-20 list-none">[Việc phát hiện ra {'{cách thức mà hành động hoạt động}'}] thì thú vị.</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Tầng trong: Khối lồng bên trong {'{how the ENgine WORKS}'} là một [conJUNCtional CLAUSE][LIÊN CÂU] vì chứa đầy đủ hệ trục [SUBject PROnoun][CHỦ ĐẠI] "the ENgine" và [3RD-PERson PRESent VERB][BA HIỆN ĐỘNG] "WORKS", bắt đầu bằng [conJUNCtion][LIÊN] how.</li>

					<li className="margin-bottom-20 list-none">Tầng ngoài: Khối tổng thể bao ngoài [disCOVering {'{how the ENgine WORKS}'}] là một khối [TIERed PRESent PARTiciple VERB PHRASE][TẦNG HIỆN TIẾP ĐỘNG CỤM] bắt đầu bằng hành động thực thi [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng V-ing disCOVering.</li>
			
					<li className="list-none">Chức năng:</li>

					<li className="list-none">Tầng trong: Lớp trong {'{how the ENgine WORKS}'} đóng vai trò là một [NOUN CLAUSE][DANH CÂU], neo ngay sau hành động thực thi [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] disCOVering để làm [OBject PROnoun][TÂN ĐẠI] cho hành động đó.</li>

					<li className="list-none">Tầng ngoài: Lớp ngoài [disCOVering {'{how the ENgine WORKS}'}] vận hành đồng bộ như một khối [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] lớn, đứng ở đầu câu giữ vai trò làm [SUBject PROnoun][CHỦ ĐẠI] điều phối trục thông tin hành động cho toàn bộ [Câu Lớn][Sentence].</li>
			
				</ul>


			<p className="margin-top-20"><strong>Thể hiện Chức năng</strong> [<strong>OBject PROnoun</strong>][<strong>TÂN ĐẠI</strong>]</p>
			
				<ul className="list-square">
			
					<li>he aVOIDed [disCUSSing {'{WHAT they had disCOVered}'}].</li>
					<li className="margin-bottom-20 list-none">Anh ấy đã tránh [thảo luận về {'{những gì họ đã phát hiện ra}'}].</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Tầng trong: Khối lồng bên trong {'{WHAT they had disCOVered}'} là một [conJUNCtional CLAUSE][LIÊN CÂU] chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "they" và [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "had disCOVered", bắt đầu bằng [conJUNCtion][LIÊN] what.</li>

					<li className="margin-bottom-20 list-none">Tầng ngoài: Khối tổng thể bao ngoài [disCUSSing {'{WHAT they had disCOVered}'}] là một khối [TIERed PRESent PARTiciple VERB PHRASE][TẦNG HIỆN TIẾP ĐỘNG CỤM] bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] disCUSSing.</li>
			
					<li className="list-none">Chức năng:</li>

					<li className="list-none">Tầng trong: Lớp trong {'{WHAT they had disCOVered}'} đóng vai trò là một [NOUN CLAUSE][DANH CÂU], neo ngay sau hành động thực thi disCUSSing để làm [OBject PROnoun][TÂN ĐẠI].</li>

					<li className="list-none">Tầng ngoài: Lớp ngoài [disCUSSing {'{WHAT they had disCOVered}'}] vận hành như một khối [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] lớn đứng ngay sau [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "aVOIDed" nhằm làm [OBject PROnoun][TÂN ĐẠI] chịu sự điều phối trực tiếp từ nó.</li>
			
				</ul>

			

			<h4 className="margin-y-40">2. [ADjective PHRASE][TÍNH CỤM]</h4>

			<p className="text-indent-whole">Khối [ADjective PHRASE][TÍNH CỤM] bao ngoài chứa một khối chức năng độc lập nằm sâu bên trong để cùng tham gia mô tả đặc điểm cho [SUBject PROnoun][CHỦ ĐẠI].</p>
			
				<ul className="list-square">
			
					<li>the ARticle [a<strong>bout</strong> {'{how she sucCEEDed}'}] is inSPIring.</li>
					<li className="margin-bottom-20 list-none">Bài báo [về {'{cách cô ấy thành công}'}] rất truyền cảm hứng.</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Tầng trong: Khối lồng bên trong {'{how she sucCEEDed}'} là một [conJUNCtional CLAUSE][LIÊN CÂU] có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "she" và [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "sucCEEDed", bắt đầu bằng [conJUNCtion][LIÊN] how.</li>

					<li className="margin-bottom-20 list-none">Tầng ngoài: Khối tổng thể bao ngoài [a<strong>bout</strong> {'{how she sucCEEDed}'}] là một khối [TIERed prepoSITional PHRASE][TẦNG GIỚI CỤM] bắt đầu bằng [prepoSITion][GIỚI] a<strong>bout</strong>.</li>
			
					<li className="list-none">Chức năng:</li>

					<li className="list-none">Tầng trong: Lớp trong {'{how she sucCEEDed}'} đóng vai trò là một [NOUN CLAUSE][DANH CÂU] đứng làm điểm tựa [OBject PROnoun][TÂN ĐẠI] dưới sự điều phối của [prepoSITion][GIỚI] a<strong>bout</strong>.</li>

					<li className="list-none">Tầng ngoài: Lớp ngoài [a<strong>bout</strong> {'{how she sucCEEDed}'}] đóng vai trò là một [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] tổng thể bổ nghĩa cho [NOUN PHRASE][DANH CỤM] "the ARticle" đứng trước nó.</li>
			
				</ul>



			<h4 className="margin-y-40">3. [ADverb PHRASE][TRẠNG CỤM]</h4>
					
			<p className="text-indent-whole">Khối [ADverb PHRASE][TRẠNG CỤM] bao ngoài đảm nhận nhiệm vụ cung cấp hoàn cảnh, bên trong chứa một khối chức năng phụ thuộc để thiết lập mốc so sánh hoặc mốc giới hạn.</p>
			
				<ul className="list-square">
			
					<li>she WALKED [SLOWer {'{than we exPECTed}'}].</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã đi bộ [chậm hơn {'{những gì chúng tôi kỳ vọng}'}].</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Tầng trong: Khối lồng bên trong {'{than we exPECTed}'} là một [conJUNCtional CLAUSE][LIÊN CÂU] có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "we" và [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "exPECTed", được bắt đầu bằng [conJUNCtion][LIÊN] than.</li>

					<li className="margin-bottom-20 list-none">Tầng ngoài: Khối tổng thể bao ngoài [SLOWer {'{than we exPECTed}'}] là một khối [Tầng Diện Trạng Cụm][Tiered Modified Adverb Phrase] hình thành từ khối [ROOT ADjective][RỄ TÍNH] nguyên bản SLOW kết hợp hậu tố -er.</li>
			
					<li className="list-none">Chức năng:</li>

					<li className="list-none">Tầng trong: Lớp trong {'{than we exPECTed}'} đóng vai trò là một [ADverb CLAUSE][TRẠNG CÂU] phụ thuộc, neo vào sau [MODified ADVERB][DIỆN TRẠNG] dạng so sánh SLOWer để làm rõ mức độ cho cấu trúc so sánh.</li>

					<li className="list-none">Tầng trong: Lớp trong [SLOWer {'{than we exPECTed}'}] vận hành đồng bộ như một khối [<strong>ADverb PHRASE</strong>][<strong>TRẠNG CỤM</strong>] tổng thể gắn sau [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "WALKED" nhằm làm rõ hoàn cảnh cách thức hành động được thực hiện.</li>
			
				</ul>



			{/* VII.  */}

			<h3 className="margin-y-50 text-center">IX. Paraphrasing: Nghệ Thuật Thay [Khối] Cùng Chức Năng</h3>

			<p>Khi tư duy hình khối [BASE][CƠ] - [PHRASE][CỤM] - [CLAUSE][CÂU] đã trở thành bản năng, kỹ thuật viết lại câu (paraphrasing) không còn là việc đổi yếu tố cấu trúc một cách khiên cưỡng. Việc làm mới câu văn giờ đây thực chất là một bài toán hình học sắp xếp module: Thay đổi Cấp Độ cấu trúc nhưng giữ nguyên vẹn Chức Năng ở cùng một vị trí neo.</p>

			<p>Chỉ cần xác định vị trí đó đang đảm nhận chức năng gì thông qua việc phối hợp cùng ma trận [Danh] - [Tính] - [Trạng], người học có toàn quyền nhấc một khối [BASE][CƠ] ra và đặt một khối [PHRASE][CỤM] như [VERB PHRASE][ĐỘNG CỤM], [prepoSITional PHRASE][GIỚI CỤM] hoặc một khối [CLAUSE][CÂU] như [conJUNCtional CLAUSE][LIÊN CÂU] vào để thế chỗ. Cấu trúc tổng thể của [Câu Lớn][Sentence] hoàn toàn không bị phá vỡ hay xáo trộn.</p>

			<p>Kỹ thuật dịch chuyển khối cùng chức năng này giúp người học tự do thực hiện việc chuyển đổi mượt mà giữa [VERB][ĐỘNG], [prepoSITion][GIỚI] và [CLAUSE][CÂU] theo ý muốn. Hãy xem cách chúng ta biến đổi linh hoạt một thông điệp thông qua việc hoán đổi các khối cấu trúc cùng giữ Chức năng [Trạng]:</p>


			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>BASE</strong>][<strong>CƠ</strong>]:</p>
			
				<ul className="list-square">
			
					<li>we arRIVED [LATE].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [muộn].</li>
			
					<li className="list-none">Hình thái: [LATE] - [ROOT ADVERB][RỄ TRẠNG] hình thành từ khối [ROOT ADjective][RỄ TÍNH] nguyên bản "LATE" đóng vai trò diện mạo đơn lẻ ở cấp độ [BASE][CƠ].</li>

					<li className="list-none">Chức năng: [LATE] - [ADVERB][TRẠNG] đứng sau [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "arRIVED" làm [ADVERB][TRẠNG] bổ nghĩa hoàn cảnh thời gian cho hành động.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>PHRASE</strong>][<strong>CỤM</strong>] - [<strong>VERB PHRASE</strong>][<strong>ĐỘNG CỤM</strong>]:</p>
			
				<ul className="list-square">
			
					<li>we arRIVED [to HELP our FRIENDS].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [để giúp đỡ bạn bè của chúng tôi].</li>
			
					<li className="list-none">Hình thái: [to HELP our FRIENDS] - [PARTicle BARE VERB PHRASE][HẠT THUẦN ĐỘNG CỤM] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] - [MAIN VERB][CHÍNH ĐỘNG], bắt đầu bằng [PARTicle VERB][HẠT ĐỘNG] "to".</li>

					<li className="list-none">Chức năng: [to HELP our FRIENDS] - [ADverb PHRASE][TRẠNG CỤM] đứng sau [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "arRIVED" nhằm làm rõ mục đích cho phần thông tin trước đó.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>PHRASE</strong>][<strong>CỤM</strong>] - [<strong>prepoSITional PHRASE</strong>][<strong>GIỚI CỤM</strong>]:</p>
			
				<ul className="list-square">
			
					<li>we arRIVED [at NOON].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [vào buổi trưa].</li>
			
					<li className="list-none">Hình thái: [at NOON] - [prepoSITional PHRASE][GIỚI CỤM] cấu thành khối bắt đầu bằng một [prepoSITion][GIỚI] mốc thời gian.</li>

					<li className="list-none">Chức năng: [at NOON] - [ADverb PHRASE][TRẠNG CỤM] gắn vào phía sau [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "arRIVED" chịu trách nhiệm cung cấp hoàn cảnh thời điểm cho sự việc.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>CLAUSE</strong>][<strong>CÂU</strong>]:</p>
			
				<ul className="list-square">
			
					<li>we arRIVED [<strong>af</strong>ter the RAIN STOPPED].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [sau khi cơn mưa tạnh].</li>
			
					<li className="list-none">Hình thái: [<strong>af</strong>ter the RAIN STOPPED] - [conJUNCtional CLAUSE][LIÊN CÂU] thể hiện khối hành động phức có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "the RAIN" và [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "STOPPED", bắt đầu bằng [conJUNCtion][LIÊN] "<strong>af</strong>ter ".</li>

					<li className="list-none">Chức năng: [<strong>af</strong>ter the RAIN STOPPED] - [ADverb CLAUSE][TRẠNG CÂU] gắn vào phía sau [PAST TENSE VERB][QUÁ THỜI ĐỘNG] "arRIVED" chịu trách nhiệm cung cấp hoàn cảnh thời gian cho toàn bộ hành động phía trước.</li>
			
				</ul>
			

			<h5 className="margin-y-30">Tương tự với việc thay khối cùng giữ Chức năng [Danh] làm [SUBject PROnoun][CHỦ ĐẠI]:</h5>

			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>BASE</strong>][<strong>CƠ</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[KNOWledge] is POWer.</li>
					<li className="margin-bottom-20 list-none">[Tri thức] là sức mạnh.</li>
			
					<li className="list-none">Hình thái: [KNOWledge] - [MODified NOUN][DIỆN DANH] hình thành từ khối [ROOT VERB][RỄ ĐỘNG] nguyên bản "KNOW" kết hợp hậu tố "-ledge" để thay đổi diện mạo bên ngoài thành một khối cấp độ [BASE][CƠ].</li>

					<li className="list-none">Chức năng: [KNOWledge] - [NOUN][DANH] đứng ở đầu câu tạo nên [SUBject PROnoun][CHỦ ĐẠI] cho toàn câu.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>PHRASE</strong>][<strong>CỤM</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[LEARNing a New LANguage] is a HUGE adVANtage.</li>
					<li className="margin-bottom-20 list-none">[Việc học một ngôn ngữ mới] là một lợi thế lớn.</li>
			
					<li className="list-none">Hình thái: [LEARNing a New LANguage] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] - [MAIN VERB][CHÍNH ĐỘNG].</li>

					<li className="list-none">Chức năng: [LEARNing a New LANguage] - [NOUN PHRASE][DANH CỤM] đứng ở vị trí đầu câu để làm [SUBject PROnoun][CHỦ ĐẠI] điều phối thông tin.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>CLAUSE</strong>][<strong>CÂU</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[WHAT you KNOW] is POWer.</li>
					<li className="margin-bottom-20 list-none">[Những gì bạn biết] tạo nên sức mạnh.</li>
			
					<li className="list-none">Hình thái:  [what you KNOW] - [conJUNCtional CLAUSE][LIÊN CÂU] tạo nên khối hành động phức có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "you" và [BARE VERB][THUẦN ĐỘNG] "KNOW", bắt đầu bằng [conJUNCtion][LIÊN] "WHAT".</li>

					<li className="list-none">Chức năng:  [what you KNOW] - [NOUN CLAUSE][DANH CÂU] đứng ở đầu câu tạo nên [SUBject PROnoun][CHỦ ĐẠI] cho toàn câu.</li>
			
				</ul>
			
			
			
			<p className="margin-top-20">Kỹ thuật dịch chuyển khối cùng chức năng này mang lại sự chủ động tuyệt đối khi viết. Thay vì ghi nhớ các công thức biến đổi máy móc, bạn chỉ cần nhìn câu văn dưới dạng các hộp hình khối độc lập và tự do nâng cấp từ [BASE][CƠ] lên [PHRASE][CỤM], hoặc chuyển đổi mượt mà giữa [VERB][ĐỘNG], [prepoSITion][GIỚI] và [CLAUSE][CÂU] theo ý muốn.</p>

			<p>Hệ Trục Tọa Độ Quy Tắc [3C] phối hợp cùng ma trận [Danh] - [Tính] - [Trạng] chính là chiếc chìa khóa vạn năng giúp quét cấu trúc câu với tốc độ ánh sáng để đạt đến phản xạ tự nhiên: Nhìn hình thái ➔ Định vị trí ➔ Hiểu bản chất!</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>JUNE 06, 2026 · by 💎GEM and 🐝Mr. Bee Osn ·</span>
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