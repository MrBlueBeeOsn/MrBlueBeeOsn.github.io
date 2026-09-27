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
		
			<h4><HashLink smooth to="/tieng-anh#SUBject-PREDicator-OBject-ADjunct"><mark className="highlight-tertiary-padding-4-8">[SUBject][PREDicator][OBject][ADjunct]</mark></HashLink></h4>

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
						<HashLink smooth to="#NOUN-PHRASE-SUBject">NOUN PHRASE SUBject</HashLink>&nbsp;/&nbsp;
						<HashLink smooth to="#NOUN-PHRASE-OBject">NOUN PHRASE OBject</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADjective-HEAD">ADjective HEAD</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADjunct-1">ADjunct 1</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#non-FInite-CLAUsal-SUBject">non-FInite CLAUsal SUBject</HashLink>&nbsp;/&nbsp;
						<HashLink smooth to="#non-FInite-CLAUsal-OBject">non-FInite CLAUsal OBject</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#non-FInite-CLAUsal-SUBject-2">non-FInite CLAUsal SUBject 2</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADjunct-2">ADjunct 2</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#FInite-CLAUsal-SUBject">FInite CLAUsal SUBject</HashLink>&nbsp;/&nbsp;
						<HashLink smooth to="#FInite-CLAUsal-OBject">FInite CLAUsal OBject</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#FInite-CLAUsal-SUBject-2">FInite CLAUsal SUBject 2</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADjunct-3">ADjunct 3</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#emBEDded-CLAUSE">emBEDded CLAUSE</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#PARaphrasing">PARaphrasing</HashLink>
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
			
					<li>[<strong>HEAD</strong>][<strong>LÕI</strong>]: Đơn vị từ đơn lẻ gốc.</li>
			
					<li>[<strong>PHRASE</strong>][<strong>CỤM</strong>]: Tập hợp nhiều từ kết hợp, không chứa hệ trục [SUBject HEAD][CHỦ LÕI] - [PREDicator HEAD][VỊ LÕI].</li>
			
					<li>[<strong>CLAUSE</strong>][<strong>VẾ</strong>]: Khối cấu trúc hoàn chỉnh chứa hệ trục [SUBject HEAD][CHỦ LÕI] - [PREDicator HEAD][VỊ LÕI].</li>
			
				</ul>


			<p className="margin-top-20"><strong>2</strong>. <strong>Trục Chức Năng</strong> (<strong>Vai trò vận hành trong câu</strong>):</p>
			
				<ul className="list-square">
			
					<li>[<strong>NOUN HEAD</strong>][<strong>DANH LÕI</strong>]: Đóng vai trò thực thể [SUBject HEAD][CHỦ LÕI] điều phối hoặc [OBject HEAD][TÂN LÕI] tiếp nhận.</li>
			
					<li>[<strong>ADjective HEAD</strong>][<strong>TÍNH LÕI</strong>]: Đóng vai trò mô tả đặc điểm, tính chất cho thực thể.</li>

					<li>[<strong>ADverb HEAD</strong>][<strong>TRẠNG LÕI</strong>]: Đóng vai trò bổ nghĩa hoàn cảnh (thời gian, địa điểm, nguyên nhân, cách thức, mục đích).</li>
			
				</ul>

			

			{/* II.  */}

			<h3 className="margin-y-50 text-center">II. Tư Duy Ngược: Từ "Hình Thái" Giải Mã "Chức Năng"</h3>

			<p>Với hệ thống mới, quy trình tư duy được thực hiện một cách tự nhiên và khoa học: Người học nhìn thấy Hình thái trước, sau đó dựa vào vị trí để giải mã ra Chức năng.</p>

			<p>Hành động trong câu chính là các dạng [PREDicator HEAD][VỊ LÕI] xung lực vận hành, song hành cùng cấu trúc liên kết không hành động là [prepoSITion][GIỚI] hoặc [COMplex prepoSITion][PHỨC GIỚI].</p>

			<p>Để giải mã chính xác bản chất cấu trúc, trục hình thái [PREDicator HEAD][VỊ LÕI] được chia tách hệ thống thành 4 nhóm cốt lõi và phân hệ 16 mục sau:</p>
			

			<h4 className="margin-y-40">4 Nhóm Động Từ Cốt Lõi</h4>
          
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 1</strong>: [<strong>non-MOdal auXILiary VERB</strong>][<strong>PHI-THÁI TRỢ ĐỘNG</strong>]</p>

      <p className="text-indent-whole">Nhóm này định vị mốc [Thời] gian và biểu thị trạng thái [Hoàn] thành hoặc [Tiếp] diễn của hành động.</p>

        <ul className="list-square">
      
          <li>be exPLOREing ➔ [non-MOdal auXILiary VERB][PHI-THÁI TRỢ ĐỘNG] be (am/is/are, was/were) + [GERund-PARTiciple FORM][DANH-TÍNH MẪU] exPLOREing</li>

          <li>have been exPLOREing ➔ [PREDicator][VỊ] have/has/had been + [GERund-PARTiciple FORM][DANH-TÍNH MẪU] exPLOREing</li>
      
          <li>have exPLORED ➔ [non-MOdal auXILiary VERB][PHI-THÁI TRỢ ĐỘNG] have/has/had + [PAST PARTiciple FORM][KHỨ TÍNH MẪU] exPLORED</li>
      
          <li>exPLORES, exPLORED ➔ [3rd SINGular PRESent FORM][BA LẺ HIỆN MẪU], [PRETerite FORM][KHỨ MẪU] Tích hợp hoàn toàn</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 2</strong>: [<strong>BARE VERB</strong>][<strong>THUẦN NGUYÊN ĐỘNG</strong>]</p>

      <p className="text-indent-whole">Nhóm giữ nguyên hình thái gốc nguyên bản, tuyệt đối không chia theo thời hay thực thể khơi nguồn.</p>

        <ul className="list-square">
      
          <li>to exPLORE ➔ [PARTicle VERB] to + [PLAIN FORM][GIẢN MẪU] to exPLORE</li>
      
          <li>DID exPLORE ➔ [non-MOdal auXILiary VERB][PHI-THÁI TRỢ ĐỘNG] did (Nhấn mạnh) + [PLAIN FORM][GIẢN MẪU] to exPLORE</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 3</strong>: [<strong>PREDicator</strong>][<strong>VỊ</strong>]</p>

      <p className="text-indent-whole">Nhóm diễn đạt các tình huống lịch sự, khuyên nhủ hoặc giả định nhẹ nhàng. Bao gồm: would (nhã nhặn), should (gợi ý), could (khả năng nhẹ), might (khả năng thấp), ought to (khuyên bảo), had better (khuyên nhủ).</p>

        <ul className="list-square">
      
          <li>should exPLORE ➔ [Ý-Thái] should (gợi ý) + [PLAIN FORM][GIẢN MẪU] to exPLORE</li>
      
          <li>could exPLORE ➔ [Ý-Thái] could (khả năng nhẹ) + [PLAIN FORM][GIẢN MẪU] to exPLORE</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 4</strong>: [<strong>PREDicator</strong>][<strong>VỊ</strong>]</p>

      <p className="text-indent-whole">Nhóm khẳng định, cam kết hoặc áp đặt thực tế một cách chắc chắn. Bao gồm: will (cam kết), shall (chắc chắn), can (năng lực), must (ép buộc), have to (bắt buộc), may (khả năng).</p>

        <ul className="list-square">
      
          <li>will exPLORE ➔ [Áp-Thái] will (cam kết) + [PLAIN FORM][GIẢN MẪU] to exPLORE</li>
      
          <li>must exPLORE ➔ [Áp-Thái] must (ép buộc) + [PLAIN FORM][GIẢN MẪU] to exPLORE</li>
      
        </ul>

			
			<h4 className="margin-y-40">III. Phân Hệ [PREDicator HEAD][VỊ LÕI]</h4>
			
				<ol>
      
          <li value="1">[<strong>ROOT VERB</strong>][<strong>GỐC ĐỘNG</strong>]: LEARN, SPEAK, BUILD</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng nguyên thủy cốt lõi nhất, chưa thêm bớt hay kết hợp với bất kỳ hành động nào khác.</li>
      
          <li value="2">[<strong>PARTicle VERB</strong>][<strong>HẠT ĐỘNG</strong>]: to, IN, ON, AT, BY</li>
          <li className="margin-bottom-20 list-none">[Hạt] "to" đơn lẻ đóng vai trò hạt nhân đầu tiên đứng trước mọi khối hành động để kích hoạt trạng thái nguyên bản. Các [Hạt] như IN, ON, AT, BY đơn lẻ đứng sau đóng vai trò định hướng hành động để chỉ rõ không gian hoặc phương thức thực hiện.</li>

          <li value="3">[<strong>non-MOdal auXILiary VERB</strong>][<strong>PHI-THÁI TRỢ ĐỘNG</strong>]: does, did, is, has, was, am, are</li>
          <li className="margin-bottom-20 list-none">Các [FInite VERB][HẠN ĐỘNG] xuất hiện đơn lẻ để gánh vác năng lượng [Thời] gian, [Thời] cho câu.</li>

					<li value="4" className="margin-bottom-20">[<strong>MOdal auXILiary VERB</strong>][<strong>THÁI TRỢ ĐỘNG</strong>]:</li>
      
          <li className="list-none">[<strong>PREterite MOdal auXILiary VERB</strong>][<strong>KHỨ THÁI TRỢ ĐỘNG</strong>]: would, could, should, might, ought to, had BETter</li>
          <li className="margin-bottom-20 list-none">Hành động thể hiện [Thái] độ nhã nhặn, triệt tiêu tính ép buộc. Các khối phức đặc biệt "ought to" và "had better" được quét như một [COMplex SOFT MOdal VERB][PHỨC Ý THÁI ĐỘNG] thống nhất.</li>

          <li className="list-none">[<strong>PREsent MOdal auXILiary VERB</strong>][<strong>HIỆN THÁI TRỢ ĐỘNG</strong>]: will, shall, can, must, have to, may</li>
          <li className="margin-bottom-20 list-none">Hành động mang tính trực diện, [Áp] đặt thực tế xuống người nghe. Khối phức đặc biệt "have to" được quét như một [COMplex asSERTive MOdal VERB][PHỨC ÁP THÁI ĐỘNG] thống nhất.</li>

					<li value="5" className="margin-bottom-20">[<strong>non-FInite FORMS</strong>][<strong>BẤT-ĐỊNH MẪU</strong>]: HAVing NO TENSE or NO SUBject</li>

          <li className="list-none">[<strong>PLAIN FORM</strong>][<strong>GIẢN MẪU</strong>]: LEARN, SPEAK, BUILD</li>
          <li className="margin-bottom-20 list-none">Hành động [Thuần] khiết đứng tự do một mình, đã giải phóng hoàn toàn và không đi kèm to, thường đứng ngay sau [PARTicle VERB][HẠT ĐỘNG] "to", [SOFT MOdal][Ý THÁI] hay [PREsent MOdal auXILiary VERB][HIỆN THÁI TRỢ ĐỘNG] hoặc [ROOT VERB][GỐC ĐỘNG] như MAKE, LET, let's, HELP, HAVE, SEE, HEAR, WATCH, FEEL, NOTICE.</li>
      
          <li className="list-none">[to-infiniTIval][TO-NGUYÊN]: to LEARN, to SPEAK, to BUILD</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [PARTicle VERB][HẠT ĐỘNG] và hành động [PLAIN FORM][GIẢN MẪU] phía sau.</li>

					<li className="list-none">[<strong>GERund-PARTiciple FORM</strong>][<strong>DANH-TÍNH MẪU</strong>]: LEARNing, SPEAKing, BUILDing</li>
          <li className="margin-bottom-20 list-none">Hành động mang đuôi -ing, biểu thị tính chất đang [Tiếp] diễn, kéo dài.</li>

          <li className="list-none">[<strong>PAST PARTiciple FORM</strong>][<strong>KHỨ TÍNH MẪU</strong>]: LEARNT, SPOKEN, BUILT, been</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng hoàn tất (cột 3/-ed), biểu thị tính chất trọn vẹn, [Hoàn] thành.</li>

          <li value="6" className="margin-bottom-20">[<strong>FInite FORMS</strong>][<strong>ĐỊNH MẪU</strong>]: HAVing TENSE or SUBject</li>

					<li className="list-none">[<strong>PLAIN PRESent FORM</strong>][<strong>GIẢN HIỆN MẪU</strong>]: LEARN, SPEAK, BUILD</li>
          <li className="margin-bottom-20 list-none">Hành động hiện tại dạng nền tảng cho các ngôi còn lại. Đây là hình thái phôi thô khi đưa vào câu để gánh thời hiện tại, phân biệt hoàn toàn với [GỐC ĐỘNG] nằm trong từ điển. Ví dụ: they LEARN, SPEAK, BUILD.</li>
					
					<li className="list-none">[<strong>3rd SINGular PRESent FORM</strong>][<strong>BA LẺ HIỆN MẪU</strong>]: SPEAKS, BUILDS, WORKS</li>
          <li className="margin-bottom-20 list-none">Hành động chính mang [Thời] chia thời đơn, tích hợp trọn vẹn trạng thái [Thời] gian hiện tại và hành động [Thuần] khiết hòa tan gọn gàng vào một chữ duy nhất.</li>

					<li className="list-none">[<strong>PRETerite FORM</strong>][<strong>KHỨ MẪU</strong>]: SPOKE</li>
          <li className="margin-bottom-20 list-none">Hành động chính mang [Thời] chia thời đơn, tích hợp trọn vẹn trạng thái [Thời] gian quá khứ và hành động [Thuần] khiết hòa tan gọn gàng vào một chữ duy nhất.</li>
      
          <li className="list-none">[<strong>PREDicator</strong>][<strong>VỊ</strong>]: is SPEAKing, was BUILDing</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa từ mang [Thời] gian và hành động mang tính [Tiếp] diễn.</li>

          <li className="list-none">[<strong>PREDicator</strong>][<strong>VỊ</strong>]: has SPOken, had BUILT</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa từ mang [Thời] và hành động mang tính [Hoàn] thành.</li>
      
          <li className="list-none">[<strong>PREDicator</strong>][<strong>VỊ</strong>]: has been SPEAKing, had been BUILDing</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính đồng thời của ba lớp năng lượng: [Thời] gian, [Hoàn] thành và [Tiếp] diễn.</li>

					<li className="list-none">[<strong>PREDicator</strong>][<strong>VỊ</strong>]: would BUILD, could SPEAK</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Ý] nhị và hành động [Thuần] khiết.</li>
      
          <li className="list-none">[<strong>PREDicator</strong>][<strong>VỊ</strong>]: will BUILD, can SPEAK</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Áp] đặt thực tế và hành động [Thuần] khiết.</li>

          <li className="list-none">[<strong>PREDicator</strong>][<strong>VỊ</strong>]: DID SPEAK, DOES BUILD</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] gian và hành động [Thuần] khiết song hành, được ngăn cách bởi một khoảng trắng.</li>
      
        </ol>


			{/* IV.  */}

			<h3 className="margin-y-50 text-center">IV. Phân hệ [CLAUSE][VẾ]</h3>

			<p>📌 <strong>QUY TẮC CỐT LÕI</strong>:</p>

			<p className="margin-top-20">"Khi bất kỳ họ [PREDicator HEAD][VỊ LÕI] nào thuộc 16 mục trên kéo theo các [OBject HEAD][TÂN LÕI], [non-FInite CLAUsal OBject][BẤT-ĐỊNH VẾ TÂN], [FInite CLAUsal OBject][ĐỊNH VẾ TÂN], [ADverb HEAD][TRẠNG LÕI], [ADjunct][PHỤ], hoặc [ADjunct][PHỤ] phía sau, toàn bộ khối đó lập tức chuyển đổi cấu trúc và được dán nhãn thành dạng [PHRASE][CỤM] tương ứng của chính nó."</p>
			

			{/* V.  */}

			<h3 className="margin-y-50 text-center">V. Quy Trình Vận Hành Và Ký Hiệu Đóng Gói Sơ Đồ</h3>

			<p>Để bóc tách các tầng hình thái lồng ghép vào nhau như những chiếc hộp gỗ, người học áp dụng quy ước đóng gói hình khối bằng dấu vuông [] bao quanh:</p>


			<h4 className="margin-y-40">1. Hình thái [PREDicator HEAD][VỊ LÕI]</h4>

			<p className="text-indent-whole">Đơn vị hành động nhỏ nhất gồm 1 yếu tố gốc.</p>

			<ul className="list-square" id="NOUN-PHRASE-SUBject">
			
					<li>[WRIting] SHARPens the INtellect.</li>
					<li className="margin-bottom-20 list-none">[Việc viết lách] mài sắc trí tuệ.</li>
			
					<li className="list-none">Khối trong: [WRIting] - [GERund-PARTiciple FORM][DANH-TÍNH MẪU] hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "WRITE" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI], đóng vai trò làm hạt nhân hành động đơn lẻ cho cấu trúc câu.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [WRIting] - [NOUN PHRASE SUBject][DANH CỤM CHỦ] được hình thành từ [NOUN HEAD][DANH LÕI] đứng ở đầu câu để làm [SUBject][CHỦ] cho toàn câu.</li>
			
				</ul>

				<ul className="list-square" id="NOUN-PHRASE-OBject">
			
					<li>she PRACtices [READing].</li>
					<li className="margin-bottom-20 list-none">Cô ấy luyện tập [việc đọc].</li>
			
					<li className="list-none">Khối trong: [READing] - [GERund-PARTiciple FORM][DANH-TÍNH MẪU] hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "READ" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI], đóng vai trò làm hạt nhân hành động tiếp diễn.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [READing] - [OBject HEAD ][TÂN LÕI] được hình thành từ [NOUN HEAD][DANH LÕI] đứng sau [3rd SINGular PRESent FORM][BA LẺ HIỆN MẪU] "PRACtices" để làm [OBject][TÂN] gánh chịu trực tiếp tác động từ hành động luyện tập của thực thể khơi nguồn.</li>
			
				</ul>
			
				<ul className="list-square" id="ADjective-HEAD">
			
					<li>the [GROWing] deMAND reQUIres ACtion.</li>
					<li className="margin-bottom-20 list-none">Nhu cầu [đang tăng cao] đòi hỏi phải hành động.</li>
			
					<li className="list-none">Khối trong: [GROWing] - [GERund-PARTiciple FORM][DANH-TÍNH MẪU] hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "GROW" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI] phản ánh trạng thái đang vận động liên tục.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [GROWing] - [ADjective HEAD][TÍNH LÕI] đứng trước [SUBject HEAD][CHỦ LÕI] "deMAND" nhằm mô tả đặc điểm của đối tượng.</li>
			
				</ul>
			
			
				<ul className="list-square" id="ADjunct-1">
			
					<li>the TEAM coOPered [harMOniously].</li>
					<li className="margin-bottom-20 list-none">Đội ngũ đã hợp tác [một cách hài hòa].</li>
			
					<li className="list-none">Khối trong: [harMOniously] – [MODified ADVERB][DIỆN TRẠNG] hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "HARmonize" kết hợp các hậu tố "-ous" và "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI] mang tính chất phương thức vận hành.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [harMOniously] - [ADjunct 1][PHỤ 1] đứng sau hành động nhằm chỉ ra cách thức thực hiện.</li>
			
				</ul>
			


			<h4 className="margin-y-40">2. Hình thái [CLAUSE][VẾ]</h4>

			<p className="text-indent-whole">Đơn vị hành động chứa nhiều yếu tố kết hợp, cấu trúc không chứa hệ trục [SUBject HEAD][CHỦ LÕI] - [PREDicator HEAD][VỊ LÕI]. Khi các dạng [HEAD][LÕI] kết hợp với thành phần phụ trợ sau nó, chúng dán nhãn thành dạng cụm tương ứng:</p>

			<ul className="list-square" id="non-FInite-CLAUsal-SUBject">
			
					<li>[LEARNing a New LANguage] reQUIres PAtience.</li>
					<li className="margin-bottom-20 list-none">[Việc học một ngôn ngữ mới] đòi hỏi sự kiên nhẫn.</li>
			
					<li className="list-none">Khối trong: [LEARNing a New LANguage] - [GERund-PARTiciple CLAUSE][DANH-TÍNH VẾ] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [SUBject HEAD][CHỦ LÕI] - [PREDicator HEAD][VỊ LÕI].</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [LEARNing a New LANguage] - [non-FInite CLAUsal SUBject][BẤT-ĐỊNH VẾ CHỦ] được hình thành từ [NOUN PHRASE][DANH CỤM] đứng ở vị trí đầu câu để làm [SUBject][CHỦ] điều phối thông tin.</li>
			
				</ul>
			
				<ul className="list-square" id="non-FInite-CLAUsal-OBject">
			
					<li>she PROMised [to FINish the rePORT].</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã hứa [hoàn thành bản báo cáo].</li>
			
					<li className="list-none">Khối trong: [to FINish the rePORT] - [to-infiniTIval CLAUSE][TO-NGUYÊN VẾ] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [SUBject HEAD][CHỦ LÕI] - [PREDicator HEAD][VỊ LÕI].</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [to FINish the rePORT] - [non-FInite CLAUsal OBject][BẤT-ĐỊNH VẾ TÂN] được hình thành từ [NOUN PHRASE][DANH CỤM] đứng sau [PRETerite FORM][KHỨ MẪU] "PROMised" để làm [OBject][TÂN] thực thi [GERund-PARTiciple FORM][DANH-TÍNH MẪU].</li>
			
				</ul>
			
			
				<ul className="list-square" id="non-FInite-CLAUsal-SUBject-2">
			
					<li>the CHILDren [PLAYing in the PARK] are LAUGHing.</li>
					<li className="margin-bottom-20 list-none">Những đứa trẻ [đang chơi trong công viên] đang cười.</li>
			
					<li className="list-none">Khối trong: [PLAYing in the PARK] - [GERund-PARTiciple CLAUSE][DANH-TÍNH VẾ] biểu thị khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [SUBject HEAD][CHỦ LÕI] - [PREDicator HEAD][VỊ LÕI], bắt đầu bằng [GERund-PARTiciple FORM][DANH-TÍNH MẪU] dạng V-ing.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [PLAYing in the PARK] - [ADjective PHRASE][TÍNH CỤM] đứng ngay sau đối tượng [SUBject HEAD][CHỦ LÕI] "the CHILDren" những đứa trẻ nhằm mô tả mức độ đặc điểm.</li>
			
				</ul>
			
			
				<ul className="list-square" id="ADjunct-2">
			
					<li>he woKE UP EARly [to CATCH the TRAIN].</li>
					<li className="margin-bottom-20 list-none">Anh ấy đã thức dậy sớm [để bắt kịp chuyến tàu].</li>
			
					<li className="list-none">Khối trong: [to CATCH the TRAIN] - [to-infiniTIval CLAUSE][TO-NGUYÊN VẾ] xác định khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [SUBject HEAD][CHỦ LÕI] - [PREDicator HEAD][VỊ LÕI], bắt đầu bằng [GERund-PARTiciple FORM][DANH-TÍNH MẪU] dạng V-ing trong các cấu trúc biến thể hoặc liên kết mở rộng.</li>
			
					<li className="list-none">Khối ngoài: [to CATCH the TRAIN] - [ADjunct 2][PHỤ 2] gắn vào phía sau nhằm làm rõ mục đích cho phần thông tin trước đó.</li>
			
				</ul>
			


			<h4 className="margin-y-40">3. Hình thái [prepoSITion PHRASE][GIỚI CỤM]</h4>

			<p className="text-indent-whole">Khối liên kết không gian, thời gian hoặc sở hữu, hoàn toàn tách biệt khỏi cấu trúc hành động và không chứa hệ trục [SUBject HEAD][CHỦ LÕI] - [PREDicator HEAD][VỊ LÕI]. Hình thái này chuyên biệt tạo nên hai chức năng [ADjective PHRASE][TÍNH CỤM] và [ADjunct][PHỤ].</p>
			
				<ul className="list-square">
			
					<li>the CAT [under the BLACK CAR] is SLEEPing.</li>
					<li className="margin-bottom-20 list-none">Con mèo [ở dưới chiếc xe màu đen] thì đang ngủ.</li>
			
					<li className="list-none">Khối trong: [under the BLACK CAR] - [prepoSITion PHRASE][GIỚI CỤM] cấu thành khối bắt đầu bằng một [prepoSITion][GIỚI] mốc vị trí.</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [under the BLACK CAR] - [ADjective PHRASE][TÍNH CỤM] neo ngay sau đối tượng [SUBject HEAD][CHỦ LÕI] "the CAT" con mèo để mô tả đặc điểm vị trí nhận diện riêng biệt cho nó.</li>
			
				</ul>
			
			
				<ul className="list-square">
			
					<li>we arRIVED [at MIDnight].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [vào lúc nửa đêm].</li>
			
					<li className="list-none">Khối trong: [at MIDnight] - [prepoSITion PHRASE][GIỚI CỤM] cấu thành khối bắt đầu bằng một [prepoSITion][GIỚI] mốc thời gian.</li>
			
					<li className="list-none">Khối ngoài: [at MIDnight] - [ADjunct][PHỤ] gắn vào cuối câu chịu trách nhiệm cung cấp hoàn cảnh thời điểm cho sự việc.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">4. Hình thái [conJUNCtional CLAUSE][LIÊN VẾ]</h4>

			<p className="text-indent-whole">Đơn vị hành động phức cao cấp, chứa một cấu trúc [CLAUSE][VẾ] hoàn chỉnh ở bên trong có chứa hệ trục [SUBject HEAD][CHỦ LÕI] - [PREDicator HEAD][VỊ LÕI].</p>


			<ul className="list-square" id="FInite-CLAUsal-SUBject">
			
					<li>[WHAT you SAID] surPRISED me.</li>
					<li className="margin-bottom-20 list-none">[Những gì bạn đã nói] đã làm tôi ngạc nhiên.</li>
			
					<li className="list-none">Khối trong:  [WHAT you SAID] - [interROGative CONtent CLAUSE][VẤN NỘI VẾ] tạo nên khối hành động phức có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "you" và [PRETerite FORM][KHỨ MẪU] "SAID", bắt đầu bằng [conJUNCtion][LIÊN] "WHAT".</li>
			
					<li className="margin-bottom-20 list-none">Chức năng:  [WHAT you SAID] - [FInite CLAUsal SUBject][ĐỊNH VẾ CHỦ] đảm nhận nhiệm vụ của một khối đối tượng đứng trước [PRETerite FORM][KHỨ MẪU] "surPRISED" để làm [SUBject][CHỦ] điều phối hành động cho toàn bộ [SENtence][CÂU LỚN].</li>
			
				</ul>

				<ul className="list-square" id="FInite-CLAUsal-OBject">
			
					<li><strong>ever</strong>yone KNOWS [that WAter BOILS at ONE HUNdred deGREES].</li>
					<li className="margin-bottom-20 list-none">Mọi người đều biết [rằng nước sôi ở 100 độ].</li>
			
					<li className="list-none">Khối trong: [that WAter BOILS at ONE HUNdred deGREES] - [interROGative CONtent CLAUSE][VẤN NỘI VẾ] tạo nên khối hành động phức có chứa hệ trục [SUBject HEAD][CHỦ LÕI] "WAter" và [3rd SINGular PRESent FORM][BA LẺ HIỆN MẪU] "BOILS", bắt đầu bằng [conJUNCtion][LIÊN] "that".</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [that WAter BOILS at ONE HUNdred deGREES] - [FInite CLAUsal OBject][ĐỊNH VẾ TÂN] đảm nhận nhiệm vụ của một khối đối tượng đứng sau [3rd SINGular PRESent FORM][BA LẺ HIỆN MẪU] "KNOWS" để làm [OBject][TÂN] dưới sự điều phối của nó.</li>
			
				</ul>

			
				<ul className="list-square" id="FInite-CLAUsal-SUBject-2">
			
					<li>[the LAPtop {'{which i BOUGHT LAST WEEK}'}] WORKS PERfectly.</li>
					<li className="margin-bottom-20 list-none">[Chiếc máy tính xách tay {'{mà tôi mua tuần trước}'}] hoạt động hoàn hảo.</li>
			
					<li className="list-none">Khối trong: {'{which i BOUGHT LAST WEEK}'} - {'{RELative CLAUSE}'}{'{QUAN CÂU}'} định hình khối hành động phức có chứa hệ trục [SUBject PRONOUN][CHỦ ĐẠI] "i" và [PRETerite FORM][KHỨ MẪU] "BOUGHT", bắt đầu bằng [conJUNCtion][LIÊN] "which". Thực hiện nhiệm vụ đứng sau định danh và mô tả đặc điểm riêng cho [SUBject HEAD][CHỦ LÕI] "LAPtop".</li>
			
					<li className="margin-bottom-20 list-none">Chức năng: [the LAPtop {'{which i BOUGHT LAST WEEK}'}] - [non-FInite CLAUsal SUBject][BẤT-ĐỊNH VẾ CHỦ] được hình thành từ [NOUN PHRASE][DANH CỤM].</li>
			
				</ul>
		
			
				<ul className="list-square" id="ADjunct-3">
			
					<li>we CANcelled the PICnic [be<strong>cause</strong> it RAINED HEAVily].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã hủy buổi dã ngoại [vì trời mưa to].</li>
			
					<li className="list-none">Khối trong: [be<strong>cause</strong> it RAINED HEAVily] - [suBORdinate CLAUSE][PHỤ VẾ] thể hiện khối hành động phức có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "it" và [PRETerite FORM][KHỨ MẪU] "RAINED", bắt đầu bằng [conJUNCtion][LIÊN] "be<strong>cause</strong>".</li>
			
					<li className="list-none">Khối ngoài: [be<strong>cause</strong> it RAINED HEAVily] - [ADjunct 3][PHỤ 3] chịu trách nhiệm cung cấp hoàn cảnh nguyên nhân cho toàn bộ hành động hủy bỏ trước đó.</li>
			
				</ul>


			{/* VI.  */}

			<h3 className="margin-y-50 text-center">VI. Hiện Tượng [CONtact CLAUSE][CHẠM VẾ]</h3>

			<p>Trong tiếng Anh tự nhiên, người bản ngữ rất thường xuyên lược bỏ hoàn toàn thành phần kết nối bề nổi. Nếu khối này ẩn đi thành phần kết nối nhưng vẫn chứa hệ trục [SUBject HEAD][CHỦ LÕI] - [PREDicator HEAD][VỊ LÕI] nằm bên trong cấu trúc lớn hơn, nó thực chất là một dạng [CLAUSE][VẾ] đặc thù.</p>

			<p>Lúc này, khối [CONtact CLAUSE][CHẠM VẾ] hoàn toàn không chứa [conJUNCtion][LIÊN], hiển thị cấu hình giống hệt như một câu độc lập nhưng thực chất phải neo chặt vào hệ thống để làm tròn 3 chức năng:</p>


			<h4 className="margin-y-40">A. [FInite CLAUsal OBject][ĐỊNH VẾ TÂN]</h4>
			
				<ul className="list-square">
			
					<li>i beLIEVE [you will PASS the eXAM].</li>
					<li className="margin-bottom-20 list-none">Tôi tin [bạn sẽ vượt qua kỳ thi].</li>
			
					<li className="list-none">Khối trong: [you will PASS the eXAM] - [ZEro COMplement CLAUSE][KHUYẾT BỔ VẾ] đã ẩn đi thành phần liên kết bề nổi, bên trong chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "you" và khối hành động gồm [PREDicator][VỊ] "will" kết hợp với [PLAIN FORM][GIẢN MẪU] "PASS".</li>
			
					<li className="list-none">Khối ngoài: [you will PASS the eXAM] - [FInite CLAUsal OBject][ĐỊNH VẾ TÂN] đứng sau [PLAIN PRESent FORM][GIẢN HIỆN MẪU] "beLIEVE" như một [OBject][TÂN] thực thi.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">B. [RELative CLAUSE][QUAN VẾ]</h4>
			
				<ul className="list-square">
			
					<li>[the BOOK {'{she LENT me}'}] was FAScinating.</li>
					<li className="margin-bottom-20 list-none">[Cuốn sách {'{cô ấy cho tôi mượn}'}] rất hấp dẫn.</li>
			
					<li className="list-none">Khối trong: {'{she LENT me}'} - {'{ZEro RELative CLAUSE}'}{'{KHUYẾT QUAN CÂU}'} đã ẩn đi thành phần liên kết bề nổi, bên trong chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "she" và [PRETerite FORM][KHỨ MẪU] "LENT". Đứng ngay sau đối tượng cuốn sách nhằm mô tả đặc điểm riêng biệt cho [SUBject HEAD][CHỦ LÕI] "the BOOK".</li>
			
					<li className="list-none">Khối ngoài: [the BOOK {'{she LENT me}'}] - [non-FInite CLAUsal SUBject][BẤT-ĐỊNH VẾ CHỦ] được hình thành từ [NOUN PHRASE][DANH CỤM].</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">C. [ADjunct][PHỤ]</h4>
			
				<ul className="list-square">
			
					<li>the TEA was SO HOT [i COULDN'T DRINK it].</li>
					<li className="margin-bottom-20 list-none">Trà quá nóng [đến mức tôi không thể uống được].</li>
			
					<li className="list-none">Khối trong: [i COULDN'T DRINK it] - [ZEro suBORdinate CLAUSE][KHUYẾT PHỤ VẾ] đã ẩn đi thành phần liên kết bề nổi, bên trong chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "i" và cụm hành động gồm [PREterite MOdal auXILiary VERB][KHỨ THÁI TRỢ ĐỘNG] "COULDN'T" kết hợp với [PLAIN FORM][GIẢN MẪU] "DRINK".</li>
			
					<li className="list-none">Khối ngoài: [i COULDN'T DRINK it] - [ADjunct][PHỤ] gắn vào phía sau [ADjective HEAD][TÍNH LÕI] "HOT" nhằm làm rõ hệ quả và bổ nghĩa cho mức độ đặc điểm của [ADverb HEAD][TRẠNG LÕI] "SO".</li>
			
				</ul>
			


			
			{/* VII.  */}

			<h3 className="margin-y-50 text-center">VII. Nguyên Tắc Phân [emBEDded][NHÚNG] Bằng "Điểm Neo"</h3>

			<p>Khi xử lý các cấu trúc phức tạp chứa nhiều tầng lồng ghép, người học áp dụng quy ước mã hóa hình khối tăng dần:</p>
			
				<ol>
			
					<li>Dấu vuông [] cho lớp bao ngoài cùng</li>
			
					<li>Dấu ngoặc nhọn {'{}'} cho lớp lồng trung gian</li>
			
					<li>Dấu móc nhọn &lt;&gt; cho lớp lồng sâu nhất.</li>
			
				</ol>
			
			
			<p className="margin-top-20">Các yếu tố đuôi biến đổi cấu hình như -s/-es, -ed, -ing nằm bên trong các dấu mốc tạo nên biến thể của từ, không làm thay đổi bản chất hình thái hay chức năng của khối.</p>

			<p>Hãy xem cách chúng ta bóc tách một cấu trúc chứa trọn vẹn cả 3 lớp hình khối:</p>

				<ul className="list-square">
			
					<li>[FINDing {'{'}the KEY {'<'}which Opens "what is HIDden"{'>}'}]  is DIFficult.</li>
					<li className="margin-bottom-20 list-none">[Việc tìm kiếm chiếc chìa khóa {'{mà mở <thứ đang bị giấu>}'}] thì khó khăn.</li>
					
					<li><strong>Khối trong</strong> {'<>'}:</li>

					<li className="list-none">Khối trong lớp trong cùng {'<>'}: "what is HIDden" là một [interROGative CONtent CLAUSE][VẤN NỘI VẾ] bắt đầu bằng [PROnoun][ĐẠI] what.</li>

					<li className="margin-bottom-20 list-none">Chức năng lớp trong cùng {'<>'}: "what is HIDden" đóng vai trò là một [ADjective PHR][TÂN VẾ] dưới sự điều phối của hành động mở Opens.</li>

					<li><strong>Khối giữa</strong> {'{}'}:</li>

					<li className="list-none">Khối trong lớp trung gian {'{}'}: {'<'}which Opens "what is HIDden"{'>'} là một [RELative CLAUSE][QUAN VẾ] bắt đầu bằng [SUBject PRONOUN][CHỦ ĐẠI] which. Neo ngay sau [NOUN HEAD][DANH LÕI] "the KEY" để bổ nghĩa và định danh trực tiếp cho chiếc chìa khóa đó.</li>

					<li className="margin-bottom-20 list-none">Chức năng lớp trung gian {'{}'}: {'{'}the KEY {'<'}which Opens "what is HIDden"{'>}'} - [non-FInite CLAUsal OBject][BẤT-ĐỊNH VẾ TÂN] được hình thành từ [NOUN PHRASE][DANH CỤM].</li>

					<li><strong>Khối ngoài</strong> []:</li>

					<li className="list-none">Khối trong tổng thể bao ngoài []: [FINDing {'{'}the KEY {'<'}which Opens "what is HIDden"{'>}'}] là một khối [GERund-PARTiciple CLAUSE][DANH-TÍNH VẾ] bắt đầu bằng [GERund-PARTiciple FORM][DANH-TÍNH MẪU] dạng V-ing FINDing.</li>

					<li className="list-none">Khối ngoài lớp tổng thể bao ngoài []: [FINDing {'{'}the KEY {'<'}which Opens "what is HIDden"{'>}'}] giữ vai trò làm [non-FInite CLAUsal SUBject][BẤT-ĐỊNH VẾ CHỦ] điều phối hệ trục thông tin hành động cho toàn bộ [SENtence][CÂU LỚN], vận hành đồng bộ như một khối [NOUN PHRASE][DANH CỤM] lớn.</li>
			
				</ul>
			


			{/* VIII.  */}

			<h3 className="margin-y-50 text-center" id="emBEDded-CLAUSE">VIII. Khối [emBEDded STRUCtures][NHÚNG ĐA TRÚC] Cao Cấp</h3>

			<p>Khi các hình khối lồng ghép vào nhau theo nhiều lớp như những chiếc hộp gỗ, hệ thống quy ước dấu sẽ giúp bóc tách chính xác mối quan hệ phân tầng về cả Hình thái lẫn Chức năng.</p>


			<h4 className="margin-y-40">1. [NOUN PHRASE][DANH CỤM]</h4>

			<p className="text-indent-whole">Khối [NOUN PHRASE][DANH CỤM] lớn đóng vai trò làm [non-FInite CLAUsal SUBject][BẤT-ĐỊNH VẾ CHỦ] hoặc [non-FInite CLAUsal OBject][BẤT-ĐỊNH VẾ TÂN], nhưng bên trong nó lại chứa một khối chức năng phụ trợ lồng ghép để làm rõ thông tin.</p>

			<p><strong>Thể hiện Chức năng</strong> [<strong>non-FInite CLAUsal SUBject</strong>][<strong>BẤT-ĐỊNH CÂU CHỦ</strong>]</p>
			
				<ul className="list-square">
			
					<li>[disCOVering {'{how the ENgine WORKS}'}] is INTEResting.</li>
					<li className="margin-bottom-20 list-none">[Việc phát hiện ra {'{cách thức mà hành động hoạt động}'}] thì thú vị.</li>

					<li className="list-none">Khối trong:</li>

					<li className="list-none">Tầng trong: Khối lồng bên trong {'{how the ENgine WORKS}'} là một [interROGative CONtent CLAUSE][VẤN NỘI VẾ] vì chứa đầy đủ hệ trục [SUBject HEAD][CHỦ LÕI] "the ENgine" và [3rd SINGular PRESent FORM][BA LẺ HIỆN MẪU] "WORKS", bắt đầu bằng [conJUNCtion][LIÊN] how.</li>

					<li className="margin-bottom-20 list-none">Tầng ngoài: Khối tổng thể bao ngoài [disCOVering {'{how the ENgine WORKS}'}] là một khối [PRESent PARTiciple VERB and emBEDded CLAUSE][HIỆN TIẾP ĐỘNG và NHÚNG VẾ] bắt đầu bằng hành động thực thi [GERund-PARTiciple FORM][DANH-TÍNH MẪU] dạng V-ing disCOVering.</li>
			
					<li className="list-none">Khối ngoài:</li>

					<li className="list-none">Tầng trong: Lớp trong {'{how the ENgine WORKS}'} đóng vai trò là một [FInite CLAUsal OBject][ĐỊNH VẾ TÂN], neo ngay sau hành động thực thi [GERund-PARTiciple FORM][DANH-TÍNH MẪU] disCOVering để làm [FInite CLAUsal OBject][ĐỊNH VẾ TÂN] cho hành động đó.</li>

					<li className="list-none">Tầng ngoài: Lớp ngoài [disCOVering {'{how the ENgine WORKS}'}] vận hành đồng bộ như một khối [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] lớn, đứng ở đầu câu giữ vai trò làm [non-FInite CLAUsal SUBject][BẤT-ĐỊNH VẾ CHỦ] điều phối trục thông tin hành động cho toàn bộ [SENtence][CÂU LỚN].</li>
			
				</ul>


			<p className="margin-top-20"><strong>Thể hiện Chức năng</strong> [<strong>non-FInite CLAUsal OBject</strong>][<strong>BẤT-ĐỊNH CÂU TÂN</strong>]</p>
			
				<ul className="list-square">
			
					<li>he aVOIDed [disCUSSing {'{WHAT they had disCOVered}'}].</li>
					<li className="margin-bottom-20 list-none">Anh ấy đã tránh [thảo luận về {'{những gì họ đã phát hiện ra}'}].</li>

					<li className="list-none">Khối trong:</li>

					<li className="list-none">Tầng trong: Khối lồng bên trong {'{WHAT they had disCOVered}'} là một [interROGative CONtent CLAUSE][VẤN NỘI VẾ] chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "they" và [PRETerite FORM][KHỨ MẪU] "had disCOVered", bắt đầu bằng [conJUNCtion][LIÊN] what.</li>

					<li className="margin-bottom-20 list-none">Tầng ngoài: Khối tổng thể bao ngoài [disCUSSing {'{WHAT they had disCOVered}'}] là một khối [PRESent PARTiciple VERB and emBEDded CLAUSE][HIỆN TIẾP ĐỘNG và NHÚNG VẾ] bắt đầu bằng [GERund-PARTiciple FORM][DANH-TÍNH MẪU] disCUSSing.</li>
			
					<li className="list-none">Khối ngoài:</li>

					<li className="list-none">Tầng trong: Lớp trong {'{WHAT they had disCOVered}'} đóng vai trò là một [FInite CLAUsal OBject][ĐỊNH VẾ TÂN], neo ngay sau hành động thực thi disCUSSing để làm [FInite CLAUsal OBject][ĐỊNH VẾ TÂN] cho hành động đó.</li>

					<li className="list-none">Tầng ngoài: Lớp ngoài [disCUSSing {'{WHAT they had disCOVered}'}] vận hành như một khối [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] lớn đứng ngay sau [PRETerite FORM][KHỨ MẪU] "aVOIDed" nhằm làm [non-FInite CLAUsal OBject][BẤT-ĐỊNH VẾ TÂN] chịu sự điều phối trực tiếp từ nó.</li>
			
				</ul>

			

			<h4 className="margin-y-40">2. [ADjective PHRASE][TÍNH CỤM]</h4>

			<p className="text-indent-whole">Khối [ADjective PHRASE][TÍNH CỤM] bao ngoài chứa một khối chức năng độc lập nằm sâu bên trong để cùng tham gia mô tả đặc điểm cho [SUBject HEAD][CHỦ LÕI].</p>
			
				<ul className="list-square">
			
					<li>the ARticle [a<strong>bout</strong> {'{how she sucCEEDed}'}] is inSPIring.</li>
					<li className="margin-bottom-20 list-none">Bài báo [về {'{cách cô ấy thành công}'}] rất truyền cảm hứng.</li>

					<li className="list-none">Khối trong:</li>

					<li className="list-none">Tầng trong: Khối lồng bên trong {'{how she sucCEEDed}'} là một [interROGative CONtent CLAUSE][VẤN NỘI VẾ] có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "she" và [PRETerite FORM][KHỨ MẪU] "sucCEEDed", bắt đầu bằng [conJUNCtion][LIÊN] how.</li>

					<li className="margin-bottom-20 list-none">Tầng ngoài: Khối tổng thể bao ngoài [a<strong>bout</strong> {'{how she sucCEEDed}'}] là một khối [prepoSITion and emBEDded CLAUSE][GIỚI và NHÚNG VẾ] bắt đầu bằng [prepoSITion][GIỚI] a<strong>bout</strong>.</li>
			
					<li className="list-none">Khối ngoài:</li>

					<li className="list-none">Tầng trong: Lớp trong {'{how she sucCEEDed}'} đóng vai trò là một [FInite CLAUsal OBject][ĐỊNH VẾ TÂN] đứng làm điểm tựa [FInite CLAUsal OBject][ĐỊNH VẾ TÂN] dưới sự điều phối của [prepoSITion][GIỚI] a<strong>bout</strong>.</li>

					<li className="list-none">Tầng ngoài: Lớp ngoài [a<strong>bout</strong> {'{how she sucCEEDed}'}] đóng vai trò là một [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] tổng thể bổ nghĩa cho [SUBject HEAD][CHỦ LÕI] "the ARticle" đứng trước nó.</li>
			
				</ul>



			<h4 className="margin-y-40">3. [ADjunct][PHỤ]</h4>
					
			<p className="text-indent-whole">Khối [ADjunct][PHỤ] bao ngoài đảm nhận nhiệm vụ cung cấp hoàn cảnh, bên trong chứa một khối chức năng phụ thuộc để thiết lập mốc so sánh hoặc mốc giới hạn.</p>
			
				<ul className="list-square">
			
					<li>she WALKED [SLOWer {'{than we exPECTed}'}].</li>
					<li className="margin-bottom-20 list-none">Cô ấy đã đi bộ [chậm hơn {'{những gì chúng tôi kỳ vọng}'}].</li>

					<li className="list-none">Khối trong:</li>

					<li className="list-none">Tầng trong: Khối lồng bên trong {'{than we exPECTed}'} là một [ComPARative CLAUSE][SO VẾ] có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "we" và [PRETerite FORM][KHỨ MẪU] "exPECTed", được bắt đầu bằng [conJUNCtion][LIÊN] than.</li>

					<li className="margin-bottom-20 list-none">Tầng ngoài: Khối tổng thể bao ngoài [SLOWer {'{than we exPECTed}'}] là một khối [Nhúng Diện Trạng Cụm][emBEDded Modified Adverb Phrase] hình thành từ khối [ROOT ADjective][GỐC TÍNH] nguyên bản SLOW kết hợp hậu tố -er.</li>
			
					<li className="list-none">Khối ngoài:</li>

					<li className="list-none">Tầng trong: Lớp trong {'{than we exPECTed}'} đóng vai trò là một [ADjunct][PHỤ] phụ thuộc, neo vào sau [MODified ADVERB][DIỆN TRẠNG] dạng so sánh SLOWer để làm rõ mức độ cho cấu trúc so sánh.</li>

					<li className="list-none">Tầng trong: Lớp trong [SLOWer {'{than we exPECTed}'}] vận hành đồng bộ như một khối [<strong>ADjunct</strong>][<strong>PHỤ</strong>] tổng thể gắn sau [PRETerite FORM][KHỨ MẪU] "WALKED" nhằm làm rõ hoàn cảnh cách thức hành động được thực hiện.</li>
			
				</ul>



			{/* VII.  */}

			<h3 className="margin-y-50 text-center" id="PARaphrasing">IX. Paraphrasing: Nghệ Thuật Thay [Khối] Cùng Chức Năng</h3>

			<p>Khi tư duy hình khối [HEAD][LÕI] - [PHRASE][CỤM] - [CLAUSE][VẾ] đã trở thành bản năng, kỹ thuật viết lại câu (paraphrasing) không còn là việc đổi yếu tố cấu trúc một cách khiên cưỡng. Việc làm mới câu văn giờ đây thực chất là một bài toán hình học sắp xếp MODule: Thay đổi Cấp Độ cấu trúc nhưng giữ nguyên vẹn Chức Năng ở cùng một vị trí neo.</p>

			<p>Chỉ cần xác định vị trí đó đang đảm nhận chức năng gì thông qua việc phối hợp cùng ma trận [Danh] - [Tính] - [Trạng], người học có toàn quyền nhấc một khối [HEAD][LÕI] ra và đặt một khối [PHRASE][CỤM] như [CLAUSE][VẾ], [prepoSITion PHRASE][GIỚI CỤM] hoặc một khối [CLAUSE][VẾ] như [conJUNCtional CLAUSE][LIÊN VẾ] vào để thế chỗ. Cấu trúc tổng thể của [SENtence][CÂU LỚN] hoàn toàn không bị phá vỡ hay xáo trộn.</p>

			<p>Kỹ thuật dịch chuyển khối cùng chức năng này giúp người học tự do thực hiện việc chuyển đổi mượt mà giữa [PREDicator HEAD][VỊ LÕI], [prepoSITion][GIỚI] và [CLAUSE][VẾ] theo ý muốn. Hãy xem cách chúng ta biến đổi linh hoạt một thông điệp thông qua việc hoán đổi các khối cấu trúc cùng giữ Chức năng [Trạng]:</p>


			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>HEAD</strong>][<strong>LÕI</strong>]:</p>
			
				<ul className="list-square">
			
					<li>we arRIVED [LATE].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [muộn].</li>
			
					<li className="list-none">Khối trong: [LATE] - [ROOT ADVERB][GỐC TRẠNG] hình thành từ khối [ROOT ADjective][GỐC TÍNH] nguyên bản "LATE" đóng vai trò diện mạo đơn lẻ ở cấp độ [HEAD][LÕI].</li>

					<li className="list-none">Khối ngoài: [LATE] - [ADjunct 1][PHỤ 1] đứng sau [PRETerite FORM][KHỨ MẪU] "arRIVED" làm [ADverb HEAD][TRẠNG LÕI] bổ nghĩa hoàn cảnh thời gian cho hành động.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>PHRASE</strong>][<strong>CỤM</strong>] - [<strong>VERB PHRASE</strong>][<strong>ĐỘNG CỤM</strong>]:</p>
			
				<ul className="list-square">
			
					<li>we arRIVED [to HELP our FRIENDS].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [để giúp đỡ bạn bè của chúng tôi].</li>
			
					<li className="list-none">Khối trong: [to HELP our FRIENDS] - [to-infiniTIval CLAUSE][TO-NGUYÊN VẾ] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [SUBject HEAD][CHỦ LÕI] - [PREDicator HEAD][VỊ LÕI], bắt đầu bằng [PARTicle VERB][HẠT ĐỘNG] "to".</li>

					<li className="list-none">Khối ngoài: [to HELP our FRIENDS] - [ADjunct][PHỤ] đứng sau [PRETerite FORM][KHỨ MẪU] "arRIVED" nhằm làm rõ mục đích cho phần thông tin trước đó.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>PHRASE</strong>][<strong>CỤM</strong>] - [<strong>prepoSITion PHRASE</strong>][<strong>GIỚI CỤM</strong>]:</p>
			
				<ul className="list-square">
			
					<li>we arRIVED [at NOON].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [vào buổi trưa].</li>
			
					<li className="list-none">Khối trong: [at NOON] - [prepoSITion PHRASE][GIỚI CỤM] cấu thành khối bắt đầu bằng một [prepoSITion][GIỚI] mốc thời gian.</li>

					<li className="list-none">Khối ngoài: [at NOON] - [ADjunct][PHỤ] gắn vào phía sau [PRETerite FORM][KHỨ MẪU] "arRIVED" chịu trách nhiệm cung cấp hoàn cảnh thời điểm cho sự việc.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>CLAUSE</strong>][<strong>VẾ</strong>]:</p>
			
				<ul className="list-square">
			
					<li>we arRIVED [<strong>af</strong>ter the RAIN STOPPED].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã đến [sau khi cơn mưa tạnh].</li>
			
					<li className="list-none">Khối trong: [<strong>af</strong>ter the RAIN STOPPED] - [suBORdinate CLAUSE][PHỤ VẾ] thể hiện khối hành động phức có chứa hệ trục [SUBject HEAD][CHỦ LÕI] "the RAIN" và [PRETerite FORM][KHỨ MẪU] "STOPPED", bắt đầu bằng [conJUNCtion][LIÊN] "<strong>af</strong>ter ".</li>

					<li className="list-none">Khối ngoài: [<strong>af</strong>ter the RAIN STOPPED] - [ADjunct][PHỤ] gắn vào phía sau [PRETerite FORM][KHỨ MẪU] "arRIVED" chịu trách nhiệm cung cấp hoàn cảnh thời gian cho toàn bộ hành động phía trước.</li>
			
				</ul>
			

			<h5 className="margin-y-30">Tương tự với việc thay khối cùng giữ Chức năng [Danh] làm [SUBject HEAD][CHỦ LÕI]:</h5>

			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>HEAD</strong>][<strong>LÕI</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[KNOWledge] is POWer.</li>
					<li className="margin-bottom-20 list-none">[Tri thức] là sức mạnh.</li>
			
					<li className="list-none">Khối trong: [KNOWledge] - {'{MODified NOUN}'}{'{DIỆN DANH}'} hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "KNOW" kết hợp hậu tố "-ledge" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI].</li>

					<li className="list-none">Khối ngoài: [KNOWledge] - [NOUN PHRASE SUBject][DANH CỤM CHỦ] được hình thành từ [NOUN HEAD][DANH LÕI] đứng ở đầu câu làm [SUBject][CHỦ] cho toàn câu.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>PHRASE</strong>][<strong>CỤM</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[LEARNing a New LANguage] is a HUGE adVANtage.</li>
					<li className="margin-bottom-20 list-none">[Việc học một ngôn ngữ mới] là một lợi thế lớn.</li>
			
					<li className="list-none">Khối trong: [LEARNing a New LANguage] - [GERund-PARTiciple CLAUSE][DANH-TÍNH VẾ] cấu thành khối hành động chứa nhiều yếu tố kết hợp và không chứa hệ trục [SUBject HEAD][CHỦ LÕI] - [PREDicator HEAD][VỊ LÕI].</li>

					<li className="list-none">Khối ngoài: [LEARNing a New LANguage] - [non-FInite CLAUsal SUBject][BẤT-ĐỊNH VẾ CHỦ] được hình thành từ [NOUN PHRASE][DANH CỤM] đứng ở vị trí đầu câu để làm [SUBject][CHỦ] điều phối thông tin.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cấp độ</strong> [<strong>CLAUSE</strong>][<strong>VẾ</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[WHAT you KNOW] is POWer.</li>
					<li className="margin-bottom-20 list-none">[Những gì bạn biết] tạo nên sức mạnh.</li>
			
					<li className="list-none">Khối trong:  [what you KNOW] - [interROGative CONtent CLAUSE][VẤN NỘI VẾ] tạo nên khối hành động phức có chứa hệ trục [SUBject PROnoun][CHỦ ĐẠI] "you" và [PLAIN PRESent FORM][GIẢN HIỆN MẪU] "KNOW", bắt đầu bằng [conJUNCtion][LIÊN] "WHAT".</li>

					<li className="list-none">Khối ngoài:  [what you KNOW] - [FInite CLAUsal SUBject][ĐỊNH VẾ CHỦ] đứng ở đầu câu tạo nên [SUBject][CHỦ] cho toàn câu.</li>
			
				</ul>
			
			
			
			<p className="margin-top-20">Kỹ thuật dịch chuyển khối cùng chức năng này mang lại sự chủ động tuyệt đối khi viết. Thay vì ghi nhớ các công thức biến đổi máy móc, bạn chỉ cần nhìn câu văn dưới dạng các hộp hình khối độc lập và tự do nâng cấp từ [HEAD][LÕI] lên [PHRASE][CỤM], hoặc chuyển đổi mượt mà giữa [PREDicator HEAD][VỊ LÕI], [prepoSITion][GIỚI] và [CLAUSE][VẾ] theo ý muốn.</p>

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