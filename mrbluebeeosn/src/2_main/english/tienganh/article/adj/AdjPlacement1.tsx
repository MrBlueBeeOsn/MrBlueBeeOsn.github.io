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
		
			<h4><HashLink smooth to="/tieng-anh#base-phrase-clause-terms"><mark className="highlight-tertiary-padding-4-8">[BASE][PHRASE][CLAUSE]</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">[ADjective FUNCtion]
												
				{/* <sup><HashLink smooth to="/tieng-anh/adj-placement-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/adj-placement-2">&nbsp;2&nbsp;</HashLink>
				</sup> */}

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


			<div className="example">
										
				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#ADjective-BASE">ADjective BASE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADjective-PHRASE">ADjective PHRASE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADjective-CLAUSE">ADjective CLAUSE</HashLink>
					</span> &nbsp;

				</p>

			</div>


			<h4 className="margin-bottom-30 text-center">ĐIỂM MẠNH TƯƠNG ĐỒNG: BƯỚC ĐỘT PHÁ GIÚP NGƯỜI VIỆT THỐNG TRỊ TIẾNG ANH HỌC THUẬT VỀ CHỨC NĂNG [ADjective][TÍNH]</h4>

			<p>Lối mòn tư duy kìm hãm thế hệ người học tại Việt Nam chính là định kiến: cấu trúc tiếng Anh "ngược" với tiếng Việt. Chúng ta thường bị đóng khung trong quy luật sơ cấp: [ADjective BASE][TÍNH CƠ] phải đứng trước [NOUN BASE][DANH CƠ].</p>
			
			<p>Tuy nhiên, trong văn viết học thuật và các cấu trúc câu phức, người bản ngữ ưu tiên sử dụng trật tự [NOUN BASE][DANH CƠ] đứng trước, thành phần bổ nghĩa mang chức năng [ADjective][TÍNH] đứng sau. Đây chính là "khóa vàng" giúp người Việt sở hữu tư duy ngôn ngữ đẳng cấp.</p>
			

			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Bản Chất Của Vị Trí: Quy Luật Điều Phối Trọng Tâm</h3>
			
				<ul className="list-square">
			
					<li>[<strong>ADjective BASE</strong>][<strong>TÍNH CƠ</strong>] <strong>đứng trước</strong> [<strong>NOUN BASE</strong>][<strong>DANH CƠ</strong>]:</li>
					<li className="list-none">→ <strong>Nhấn mạnh Đặc điểm</strong></li>
					<li className="margin-bottom-20 list-none">Dành cho các thành phần đặc tính đơn lẻ, ngắn gọn. Đặc điểm được xác lập ngay trước khi gọi tên đối tượng.</li>
			
					<li>[<strong>NOUN BASE</strong>][<strong>DANH CƠ</strong>] <strong>đứng trước thành phần bổ nghĩa</strong>:</li>
					<li className="list-none">→ <strong>Nhấn mạnh Đối tượng</strong></li>
					<li className="list-none">Khi muốn đối tượng chính làm "mỏ neo", người bản ngữ đặt [NOUN BASE][DANH CƠ] lên đầu, sau đó mới thả chuỗi thông tin bổ trợ phía sau bằng [ADjective PHRASE][TÍNH CỤM] hoặc [SUBject PROnoun CLAUSE][CHỦ ĐẠI CÂU].</li>
			
				</ul>


			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Hệ Thống Phân Loại [VERB BASE][ĐỘNG CƠ]</h3>

			<p>Hệ thống này giúp não bộ bóc tách năng lượng của hành động thông qua 16 "hạt nhân" cấu tạo, chuyển hóa các đơn vị từ vựng đơn lẻ thành các cấu trúc ngữ pháp mang tính biểu đạt cao.</p>
			
			
			<h4 className="margin-y-40">A. Phân hệ [BASE][CƠ]</h4>
			
				<ol>
      
          <li value="1">[<strong>ROOT VERB BASE</strong>][<strong>RỄ ĐỘNG CƠ</strong>]: oRIGinate, FORMulate</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng [ROOT VERB BASE][RỄ ĐỘNG CƠ] nguyên bản, chưa bị biến đổi bởi bất kỳ yếu tố nào.</li>
      
          <li value="2">[<strong>PARTicle VERB BASE</strong>][<strong>HẠT ĐỘNG CƠ</strong>]: to, aWAY, BACK, FORTH, THROUGH</li>
          <li className="margin-bottom-20 list-none">[Hạt] "to" đơn lẻ đóng vai trò hạt nhân đầu tiên đứng trước mọi khối hành động để kích hoạt trạng thái nguyên bản. Các [Hạt] như aWAY, BACK, FORTH, THROUGH đơn lẻ đứng sau hành động để tạo ra hướng di chuyển hoặc chuyển hóa trạng thái không gian của hành động đó.</li>

          <li value="3">[<strong>TENSE VERB BASE</strong>][<strong>THỜI ĐỘNG CƠ</strong>]: is, was, does</li>
          <li className="margin-bottom-20 list-none">Các từ khóa mang năng lượng định vị [Thời] gian, thiết lập khung bối cảnh hiện tại hoặc quá khứ cho câu.</li>
      
          <li value="4">[<strong>SOFT-MOdal VERB BASE</strong>][<strong>Ý-THÁI ĐỘNG CƠ</strong>]: would, could, should</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ nhẹ nhàng, gợi [Ý], giảm bớt tính áp đặt, tạo sự [Ý] nhị. Các khối phức đặc biệt: [COMplex SOFT-MOdal VERB BASE][PHỨC Ý-THÁI ĐỘNG CƠ] như ought to, had BETter được quét như một đơn vị thống nhất.</li>

          <li value="5">[<strong>asSERTive-MOdal VERB BASE</strong>][<strong>ÁP-THÁI ĐỘNG CƠ</strong>]: will, must, can</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ trực diện, mang tính xác quyết và thực thi thực tế mạnh mẽ. Các khối phức đặc biệt: [COMplex asSERTive-MOdal VERB BASE][PHỨC ÁP-THÁI ĐỘNG CƠ] như have to được quét như một đơn vị thống nhất.</li>

          <li value="6">[<strong>BARE VERB BASE</strong>][<strong>THUẦN ĐỘNG CƠ</strong>]: oRIGinate, FORMulate</li>
          <li className="margin-bottom-20 list-none">Hành động [Thuần] khiết ở dạng tự do hoàn toàn, thường đứng ngay sau [PARTicle VERB BASE][HẠT ĐỘNG CƠ] "to", [SOFT-MOdal][Ý-THÁI] hay [asSERTive-MOdal VERB BASE][ÁP-THÁI ĐỘNG CƠ] hoặc [ROOT VERB BASE][RỄ ĐỘNG CƠ] như MAKE, LET, let's, HELP, HAVE, GET, SEE, HEAR, WATCH, FEEL.</li>
      
          <li value="7">[<strong>PARTicle BARE VERB BASE</strong>][<strong>HẠT THUẦN ĐỘNG CƠ</strong>]: to oRIGinate, to FORMulate</li>
          <li className="margin-bottom-20 list-none">Sự kết hợp tuyến tính giữa [Hạt] và hành động [Thuần] khiết, tạo nên mẫu hành động nguyên bản.</li>

          <li value="8">[<strong>SOFT-MOdal BARE VERB BASE</strong>][<strong>Ý-THÁI THUẦN ĐỘNG CƠ</strong>]: would VERify, could deSIGN</li>
          <li className="margin-bottom-20 list-none">Kết hợp [Thái] độ mềm mỏng với hành động [Thuần] khiết, biểu đạt sự nhường nhịn.</li>
      
          <li value="9">[<strong>asSERTive-MOdal BARE VERB BASE</strong>][<strong>ÁP-THÁI THUẦN ĐỘNG CƠ</strong>]: will VERify, can deSIGN</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tính xác quyết với hành động [Thuần] khiết, tạo nên khả năng thực tế rõ ràng.</li>

          <li value="10">[<strong>TENSE BARE VERB BASE</strong>][<strong>THỜI THUẦN ĐỘNG CƠ</strong>]: DID oRIGinate, DOES FORMulate</li>
          <li className="margin-bottom-20 list-none">Cấu trúc song hành tách biệt giữa yếu tố [Thời] và hành động [Thuần] khiết.</li>

          <li value="11">[<strong>TENSE-BARE VERB BASE</strong>][<strong>THỜI-THUẦN ĐỘNG CƠ</strong>]: oRIGinated, FORMulates</li>
          <li className="margin-bottom-20 list-none">Sự tích hợp hoàn toàn năng lượng [Thời] và hành động [Thuần] khiết vào một đơn vị từ duy nhất.</li>
      
          <li value="12">[<strong>proGRESSive VERB BASE</strong>][<strong>TIẾP ĐỘNG CƠ</strong>]: oRIGinating, FORMulating</li>
          <li className="margin-bottom-20 list-none">Hành động mang hậu tố "-ing", diễn tả trạng thái đang [Tiếp] diễn, kéo dài.</li>

          <li value="13">[<strong>PERfect VERB BASE</strong>][<strong>HOÀN ĐỘNG CƠ</strong>]: oRIGinated, FORMulated</li>
          <li className="margin-bottom-20 list-none">Dạng phân bổ trợ hoặc đuôi "-ed", xác lập trạng thái hành động đã trọn vẹn, [Hoàn] tất.</li>
      
          <li value="14">[<strong>TENSE proGRESSive VERB BASE</strong>][<strong>THỜI TIẾP ĐỘNG CƠ</strong>]: is oRIGinating, was FORMulating</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa yếu tố [Thời] và trạng thái hành động đang diễn ra.</li>

          <li value="15">[<strong>TENSE PERfect VERB BASE</strong>][<strong>THỜI HOÀN ĐỘNG CƠ</strong>]: has oRIGinated, had FORMulated</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa yếu tố [Thời] và trạng thái hành động đã [Hoàn] thành.</li>
      
          <li value="16">[<strong>TENSE PERfect proGRESSive VERB BASE</strong>][<strong>THỜI HOÀN TIẾP ĐỘNG CƠ</strong>]: has been oRIGinating, had been FORMulating</li>
          <li className="list-none">Phức hợp ba tầng năng lượng: [Thời] gian, [Hoàn] thành và [Tiếp] diễn.</li>
      
        </ol>


			<h4 className="margin-y-40">B. Phân hệ [PHRASE][CỤM]</h4>

			<p className=" text-indent-whole"><strong>QUY TẮC CỐT LÕI</strong>:</p>

			<p className=" text-indent-whole">Khi bất kỳ họ [BASE][CƠ] nào kéo theo các [OBject PROnoun][TÂN ĐẠI], [ADverb BASE][TRẠNG CƠ], [ADverb PHRASE][TRẠNG CỤM], hoặc [ADverb CLAUSE][TRẠNG CÂU] phía sau, toàn khối đó tự động chuyển cấu trúc thành [PHRASE][CỤM].</p>

			<p className="text-indent-whole margin-top-20">Ví dụ:</p>
			
				<ul className="list-square">
			
					<li>FORMulating [proGRESSive VERB BASE][TIẾP ĐỘNG CƠ] + a STRATegy [OBject PROnoun][TÂN ĐẠI]</li>
			
					<li>➔ FORMulating a STRATegy [proGRESSive VERB PHRASE][TIẾP ĐỘNG CỤM].</li>
			
				</ul>

			
			<h4 className="margin-y-40">C. Nhóm Phân Loại Năng Lượng Hành Động</h4>
          
      <p className="text-indent-whole"><strong>Nhóm 1</strong>: [<strong>TENSE VERB BASE</strong>][<strong>THỜI ĐỘNG CƠ</strong>]</p>

        <ul className="list-square">
      
          <li>is oRIGinating → [TENSE][THỜI] be + [proGRESSive VERB BASE][TIẾP ĐỘNG CƠ] oRIGinating</li>

          <li>has been FORMulating → [TENSE + PERfect][THỜI + HOÀN] has + been + [proGRESSive VERB BASE][TIẾP ĐỘNG CƠ] FORMulating</li>
      
          <li>has oRIGinated → [TENSE][THỜI] has + [PERfect VERB BASE][HOÀN ĐỘNG CƠ] oRIGinated</li>
      
          <li>FORMulates/oRIGinated → [TENSE-BARE VERB BASE][THỜI-THUẦN ĐỘNG CƠ] tích hợp</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 2</strong>: [<strong>BARE VERB BASE</strong>][<strong>THUẦN ĐỘNG CƠ</strong>]</p>

      <p className="text-indent-whole">Dạng nguyên bản, tĩnh tại:</p>

        <ul className="list-square">
      
          <li>to FORMulate → [PARTicle][HẠT] to + [BARE VERB BASE][THUẦN ĐỘNG CƠ] FORMulate</li>
      
          <li>DID oRIGinate → [TENSE][THỜI] did + [BARE VERB BASE][THUẦN ĐỘNG CƠ] oRIGinate</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 3</strong>: [<strong>SOFT-MOdal BARE VERB BASE</strong>][<strong>Ý-THÁI THUẦN ĐỘNG CƠ</strong>]</p>

      <p className="text-indent-whole">Tình huống nhã nhặn, gợi mở:</p>

        <ul className="list-square">
      
          <li>should FORMulate → [SOFT-MOdal][Ý-THÁI] should + [BARE VERB BASE][THUẦN ĐỘNG CƠ] FORMulate</li>
      
          <li>could oRIGinate → [SOFT-MOdal][Ý-THÁI] could + [BARE VERB BASE][THUẦN ĐỘNG CƠ] oRIGinate</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 4</strong>: [<strong>asSERTive-MOdal BARE VERB BASE</strong>][<strong>ÁP-THÁI THUẦN ĐỘNG CƠ</strong>]</p>

      <p className="text-indent-whole">Tình huống xác quyết, ép buộc:</p>

        <ul className="list-square">
      
          <li>will FORMulate → [asSERTive-MOdal][ÁP-THÁI] will + [BARE VERB BASE][THUẦN ĐỘNG CƠ] FORMulate</li>
      
          <li>must oRIGinate → [asSERTive-MOdal][ÁP-THÁI] must + [BARE VERB BASE][THUẦN ĐỘNG CƠ] oRIGinate</li>
      
        </ul>
 

			{/* 3.  */}

			<h3 className="margin-y-50 text-center" id="ADjective-BASE">3. Chức năng [ADjective BASE][TÍNH CƠ]</h3>

			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 1</strong>: [<strong>ADjective BASE</strong>][<strong>TÍNH CƠ</strong>] <strong>cấu tạo từ</strong> [<strong>ROOT ADjective BASE</strong>][<strong>RỄ TÍNH CƠ</strong>] <strong>nguyên bản</strong></p>
			
				<ul className="list-square">
			
					<li>she has [SWIFT] communiCAtion SKILLS.</li>
					<li className="margin-bottom-20 list-none">Cô ấy có kỹ năng giao tiếp [nhanh chóng].</li>
			
					<li className="list-none">Hình thái: [SWIFT] - [ROOT ADjective BASE][RỄ TÍNH CƠ] hình thành từ khối [ROOT ADjective BASE][RỄ TÍNH CƠ] nguyên bản "SWIFT".</li>
			
					<li className="list-none">Chức năng: [SWIFT] - [ADjective BASE][TÍNH CƠ] cài đặt đặc tính cố định cho [NOUN BASE][DANH CƠ] "SKILLS".</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 2</strong>: [<strong>ADjective BASE</strong>][<strong>TÍNH CƠ</strong>] <strong>cấu tạo từ</strong> [<strong>MODified ADjective BASE</strong>][<strong>DIỆN TÍNH CƠ</strong>]</p>
			
				<ul className="list-square">
			
					<li>they dePLOYED an [INnovative] SYStem.</li>
					<li className="margin-bottom-20 list-none">Họ đã triển khai một hệ thống [đổi mới, sáng tạo].</li>
			
					<li className="list-none">Hình thái: [INnovative] - [MODified ADjective BASE][DIỆN TÍNH CƠ] hình thành từ khối [ROOT VERB BASE][RỄ ĐỘNG CƠ] nguyên bản "INnovate" mặc thêm (kết hợp) hậu tố "-ive" để thay đổi diện mạo bên ngoài thành một khối cấp độ [BASE][CƠ] mang đặc tính mới.</li>
			
					<li className="list-none">Chức năng: [INnovative] - [ADjective BASE][TÍNH CƠ] bổ trợ trực tiếp đặc điểm cho [NOUN BASE][DANH CƠ] "SYStem".</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 3</strong>: [<strong>ADjective BASE</strong>][<strong>TÍNH CƠ</strong>] <strong>cấu tạo từ</strong> [<strong>proGRESSive VERB BASE</strong>][<strong>TIẾP ĐỘNG CƠ</strong>]</p>
			
				<ul className="list-square">
			
					<li>we obSERVED the [inCREASing] deMAND.</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã quan sát nhu cầu [đang gia tăng].</li>
			
					<li className="list-none">Hình thái: [inCREASing] - [proGRESSive VERB BASE][TIẾP ĐỘNG CƠ] hình thành từ khối [ROOT VERB BASE][RỄ ĐỘNG CƠ] nguyên bản "inCREASE" mặc thêm hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [BASE][CƠ] biểu thị tính tiếp diễn.</li>
			
					<li className="list-none">Chức năng: [inCREASing] - [ADjective BASE][TÍNH CƠ] định hình trạng thái động đang phát triển cho [NOUN BASE][DANH CƠ] "deMAND".</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 4</strong>: [<strong>ADjective BASE</strong>][<strong>TÍNH CƠ</strong>] <strong>cấu tạo từ</strong> [<strong>ROOT ADjective BASE</strong>][<strong>RỄ TÍNH CƠ</strong>] <strong>nguyên bản</strong></p>
			
				<ul className="list-square">
			
					<li>the [STRUCtured] rePORT was subMITted.</li>
					<li className="margin-bottom-20 list-none">Bản báo cáo [được cấu trúc hóa] đã được nộp.</li>
			
					<li className="list-none">Hình thái: [STRUCtured] - [PERfect VERB BASE][HOÀN ĐỘNG CƠ] hình thành từ khối [ROOT VERB BASE][RỄ ĐỘNG CƠ] nguyên bản "STRUCture" mặc thêm hậu tố "-ed" để thay đổi diện mạo bên ngoài thành một khối cấp độ [BASE][CƠ] biểu thị trạng thái hoàn tất.</li>
			
					<li className="list-none">Chức năng: [STRUCtured] - [ADjective BASE][TÍNH CƠ] xác lập đặc tính kết quả hoàn thành cho [NOUN BASE][DANH CƠ] "rePORT".</li>
			
				</ul>

			

			{/* 4.  */}

			<h3 className="margin-y-50 text-center" id="ADjective-PHRASE">4. Chức năng [ADjective PHRASE][TÍNH CỤM]</h3>

			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 1</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>ROOT ADjective PHRASE</strong>][<strong>RỄ TÍNH CỤM</strong>] <strong>nguyên bản</strong></p>
			
				<ul className="list-square">
			
					<li>they dePLOYED a NETwork [CApable of HANdling VAST DAted].</li>
					<li className="margin-bottom-20 list-none">Họ đã triển khai một mạng lưới [có khả năng xử lý dữ liệu lớn].</li>
			
					<li className="list-none">Hình thái: [CApable of HANdling VAST DAted] - [ROOT ADjective PHRASE][RỄ TÍNH CỤM] hình thành từ khối [ROOT ADjective BASE][RỄ TÍNH CƠ] nguyên bản "CApable", ở trạng thái mộc hoàn toàn, không ăn diện thêm phụ kiện, bắt đầu bằng mã đặc điểm gốc kết hợp mở rộng [prepoSITional PHRASE][GIỚI CỤM] phía sau chứa [proGRESSive VERB PHRASE][TIẾP ĐỘNG CỤM] biến đổi từ lõi hành động sau [prepoSITional BASE][GIỚI CƠ] "of".</li>
			
					<li className="list-none">Chức năng: [CApable of HANdling VAST DAted] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng "NETwork" để xác định năng lực, đặc điểm của đối tượng đó.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 2</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>MODified ADjective PHRASE</strong>][<strong>DIỆN TÍNH CỤM</strong>]</p>
			
				<ul className="list-square">
			
					<li>an iNItiative [preVENtive against SYStem FAIlures] was LAUNCHED.</li>
					<li className="margin-bottom-20 list-none">Một sáng kiến [phòng ngừa chống lại các sự cố hệ thống] đã được khởi động.</li>
			
					<li className="list-none">Hình thái: [preVENtive against SYStem FAIlures] - [MODified ADjective PHRASE][DIỆN TÍNH CỤM] hình thành từ khối [ROOT VERB BASE][RỄ ĐỘNG CƠ] nguyên bản "preVENT" mặc thêm (kết hợp) hậu tố "-ive" để thay đổi diện mạo bên ngoài thành một khối cấp độ [BASE][CƠ] mang diện mạo [MODified ADjective BASE][DIỆN TÍNH CƠ] "preVENtive", sau đó mở rộng kết hợp với [prepoSITional PHRASE][GIỚI CỤM] "against SYStem FAIlures" để tạo thành một khối [PHRASE][CỤM] hoàn chỉnh.</li>
			
					<li className="list-none">Chức năng: [preVENtive against SYStem FAIlures] - [ADjective PHRASE][TÍNH CỤM] gắn liền phía sau "iNItiative" nhằm mở rộng ý nghĩa đánh giá chất lượng.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 3</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>proGRESSive VERB PHRASE</strong>][<strong>TIẾP ĐỘNG CỤM</strong>] <strong>đang diễn ra</strong>, <strong>chủ động</strong></p>
			
				<ul className="list-square">
			
					<li>the comMITtee [eVALuating the FUNding reQUESTs] conVENED toDAY.</li>
					<li className="margin-bottom-20 list-none">Ủy ban [đang đánh giá các yêu cầu tài trợ] đã họp vào hôm nay.</li>
			
					<li className="list-none">Hình thái: [eVALuating the FUNding reQUESTs] - [proGRESSive VERB PHRASE][TIẾP ĐỘNG CỤM] phát triển từ [proGRESSive VERB BASE][TIẾP ĐỘNG CƠ] "eVALuating" tích hợp thêm vùng dữ liệu mở rộng biểu thị tính chủ động đang xảy ra.</li>
			
					<li className="list-none">Chức năng: [eVALuating the FUNding reQUESTs] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng "comMITtee" để hiển thị đặc điểm hành động chủ động của đối tượng đó.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 4</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>PERfect VERB PHRASE</strong>][<strong>HOÀN ĐỘNG CỤM</strong>] <strong>đã xong</strong>, <strong>bị động</strong></p>
			
				<ul className="list-square">
			
					<li>the PROtocol [deSIGNED by exTERnal conSULtants] enSURES TOtal seCUrity.</li>
					<li className="margin-bottom-20 list-none">Giao thức [được thiết kế bởi các chuyên gia tư vấn bên ngoài] đảm bảo bảo mật tuyệt đối.</li>
			
					<li className="list-none">Hình thái: [deSIGNED by exTERnal conSULtants] - [PERfect VERB PHRASE][HOÀN ĐỘNG CỤM] phát triển từ [PERfect VERB BASE][HOÀN ĐỘNG CƠ] "deSIGNED" kết hợp mở rộng ở dạng bị động.</li>
			
					<li className="list-none">Chức năng: [deSIGNED by exTERnal conSULtants] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng "PROtocol" để mô tả đặc điểm trạng thái bị động hoàn thành.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 5</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>PARTicle BARE VERB PHRASE</strong>][<strong>HẠT THUẦN ĐỘNG CỤM</strong>] <strong>sắp xảy ra</strong>, <strong>chủ động</strong></p>
			
				<ul className="list-square">
			
					<li>the techNICian [to inSPECT the SERvers] arRIVed EARly.</li>
					<li className="margin-bottom-20 list-none">Kỹ thuật viên [sắp sửa kiểm tra các máy chủ] đã đến sớm.</li>
			
					<li className="list-none">Hình thái: [to inSPECT the SERvers] - [PARTicle BARE VERB PHRASE][HẠT THUẦN ĐỘNG CỤM] phát triển từ cụm [PARTicle BARE VERB BASE][HẠT THUẦN ĐỘNG CƠ] "to inSPECT" tích hợp thêm vùng dữ liệu mở rộng phía sau.</li>
			
					<li className="list-none">Chức năng: [to inSPECT the SERvers] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng "techNICian" để quét và hiển thị đặc điểm hành động sắp xảy ra mang tính chủ động của đối tượng đó.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 6</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>PARTicle BARE PERfect VERB PHRASE</strong>][<strong>HẠT THUẦN HOÀN ĐỘNG CỤM</strong>] <strong>sắp xảy ra</strong>, <strong>bị động</strong></p>
			
				<ul className="list-square">
			
					<li>the SOFTware [to be upDATed NEXT WEEK] reQUIres adMINistrative RIGHTS.</li>
					<li className="margin-bottom-20 list-none">Phần mềm [sắp sửa được cập nhật vào tuần tới] yêu cầu quyền quản trị.</li>
			
					<li className="list-none">Hình thái: [to be upDATed NEXT WEEK] - [PARTicle BARE PERfect VERB PHRASE][HẠT THUẦN HOÀN ĐỘNG CỤM] bắt đầu bằng [PARTicle VERB BASE][HẠT ĐỘNG CƠ] "to" kéo theo vùng bổ trợ phía sau chứa [BARE VERB BASE][THUẦN ĐỘNG CƠ] "be" và [PERfect VERB BASE][HOÀN ĐỘNG CƠ] "upDATed" để biểu thị trạng thái bị động tương lai.</li>
			
					<li className="list-none">Chức năng: [to be upDATed NEXT WEEK] - [ADjective PHRASE][TÍNH CỤM] kích hoạt bộ quét đặt ngay sau đối tượng "SOFTware" để mô tả trạng thái sắp sửa được tác động.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 7</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>prepoSITional PHRASE</strong>][<strong>GIỚI CỤM</strong>]</p>
			
				<ul className="list-square">
			
					<li>the MANuscript [in the ARchive] conTAINS hisTORical NOTES.</li>
					<li className="margin-bottom-20 list-none">Bản thảo [trong kho lưu trữ] chứa các ghi chú lịch sử.</li>
			
					<li className="list-none">Hình thái: [in the ARchive] - [prepoSITional PHRASE][GIỚI CỤM] mở đầu bằng [prepoSITional BASE][GIỚI CƠ] "in" kết hợp [NOUN BLOCK][DANH KHỐI] định vị.</li>
			
					<li className="list-none">Chức năng: [in the ARchive] - [ADjective PHRASE][TÍNH CỤM] bổ trợ vị trí không gian trực tiếp cho "MANuscript".</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 8</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>COMplex prepoSITional PHRASE</strong>][<strong>PHỨC GIỚI CỤM</strong>]</p>
			
				<ul className="list-square">
			
					<li>PROfits [owing to straTEgic SHIFTS] exCEEDed expecTAtions.</li>
					<li className="margin-bottom-20 list-none">Lợi nhuận [nhờ vào các chuyển dịch chiến lược] đã vượt kỳ vọng.</li>
			
					<li className="list-none">Hình thái: [owing to straTEgic SHIFTS] - [COMplex prepoSITional PHRASE][PHỨC GIỚI CỤM] bắt đầu bằng [COMplex prepoSITional BASE][PHỨC GIỚI CƠ] "owing to".</li>
			
					<li className="list-none">Chức năng: [owing to straTEgic SHIFTS] - [ADjective PHRASE][TÍNH CỤM] thiết lập mối quan hệ nguyên nhân kết quả cho chủ thể "PROfits".</li>
			
				</ul>

			

			{/* 5.  */}

			<h3 className="margin-y-50 text-center" id="ADjective-CLAUSE">5. Chức năng [ADjective CLAUSE][TÍNH CÂU]</h3>

			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 1</strong>: [<strong>ADjective CLAUSE</strong>][<strong>TÍNH CÂU</strong>] <strong>cấu tạo từ</strong> [<strong>SUBject PROnoun CLAUSE</strong>][<strong>CHỦ ĐẠI CÂU</strong>]</p>
			
				<ul className="list-square">
			
					<li>the FRAMEwork [which GOVerns MARket reguLAtions] is roBUST.</li>
					<li className="margin-bottom-20 list-none">Khung [cái mà chi phối các quy định thị trường] thì vô cùng vững chắc.</li>
			
					<li className="list-none">Hình thái: [which GOVerns MARket reguLAtions] - [SUBject PROnoun CLAUSE][CHỦ ĐẠI CÂU] mở đầu bằng [SUBject PROnoun BASE][CHỦ ĐẠI CƠ] "which" nối tiếp chuỗi hành động chia thời.</li>
			
					<li className="list-none">Chức năng: [which GOVerns MARket reguLAtions] - [ADjective CLAUSE][TÍNH CÂU] định danh bản chất chức năng của "FRAMEwork".</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 2</strong>: [<strong>ADjective CLAUSE</strong>][<strong>TÍNH CÂU</strong>] <strong>cấu tạo từ</strong> [<strong>ZEro-OBject PROnoun CLAUSE</strong>][<strong>ẨN-TÂN ĐẠI CÂU</strong>]</p>
			
				<ul className="list-square">
			
					<li>the paRAMeters [EXperts recomMEND] must be TESTed.</li>
					<li className="margin-bottom-20 list-none">Các thông số [mà các chuyên gia khuyên dùng] phải được kiểm tra.</li>
			
					<li className="list-none">Hình thái: [EXperts recomMEND] - [ZEro-OBject PROnoun CLAUSE][ẨN-TÂN ĐẠI CÂU] bỏ qua [ZEro-OBject PROnoun BASE][ẨN-TÂN ĐẠI CƠ] nhưng vẫn giữ nguyên vẹn cấu trúc chủ - vị ngầm định.</li>
			
					<li className="list-none">Chức năng: [EXperts recomMEND] - [ADjective CLAUSE][TÍNH CÂU] thu gọn không gian biểu đạt để làm rõ đặc điểm đối tượng "paRAMeters".</li>
			
				</ul>

			
			{/* 6.  */}

			<h3 className="margin-y-50 text-center">6. [TIERed STRUCture][TẦNG CẤU TRÚC]</h3>
			

			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 1</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>TIERed prepoSITional PHRASE</strong>][<strong>TẦNG GIỚI CỤM</strong>]</p>
			
				<ul className="list-square">
			
					<li>STUdents [MAStering CORE THEories {'{which are reQUIred for adVANCED PLACEment}'}] will sucCEED.</li>
					<li className="margin-bottom-20 list-none">Học viên [làm chủ các lý thuyết cốt lõi {'{cái mà được yêu cầu cho suất học nâng cao}'}] sẽ thành công.</li>
			
				</ul>
			
				<p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong>:</p>
			
					<ul className="list-square">
				
						<li className="list-none">Tầng 1: [MAStering CORE THEories {'{which are reQUIred for adVANCED PLACEment}'}] - [TIERed proGRESSive VERB PHRASE][TẦNG TIẾP ĐỘNG CỤM] mở rộng từ [proGRESSive VERB BASE][TIẾP ĐỘNG CƠ] "MAStering".</li>

						<li className="list-none">Tầng 2: {'{which are reQUIred for adVANCED PLACEment}'} - [SUBject PROnoun CLAUSE][CHỦ ĐẠI CÂU] lồng ghép bên trong để phân tách chi tiết.</li>
				
					</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong>:</p>
			
				<ul className="list-square">
			
					<li className="list-none">Tầng 1: [MAStering CORE THEories {'{which are reQUIred for adVANCED PLACEment}'}] - [ADjective PHRASE][TÍNH CỤM] bám sát phía sau "STUdents" nhằm phân lớp đặc điểm đối tượng cực kỳ chặt chẽ.</li>

					<li className="list-none">Tầng 2: {'{which are reQUIred for adVANCED PLACEment}'} - [ADjective CLAUSE][TÍNH CÂU] bổ nghĩa cho [NOUN BLOCK][DANH KHỐI] "CORE THEories" nằm trong tầng 1 để làm rõ đặc tính của lý thuyết.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 2</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>TIERed PARTicle BARE VERB PHRASE</strong>][<strong>TẦNG HẠT THUẦN ĐỘNG CỤM</strong>]</p>
			
				<ul className="list-square">
			
					<li>the deCIsion [to dePLOY AUtomated SYStems {'{which OPtimize WORKflow}'}] will HELP ENterprises THRIVE.</li>
					<li className="margin-bottom-20 list-none">Quyết định [để triển khai hệ thống tự động hóa {'{cái mà tối ưu hóa luồng công việc}'}] sẽ giúp các doanh nghiệp phát triển.</li>
			
				</ul>
			
				<p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong>:</p>
			
					<ul className="list-square">
				
						<li className="list-none">Tầng 1: [to dePLOY AUtomated SYStems {'{which OPtimize WORKflow}'}] - [TIERed PARTicle BARE VERB PHRASE][TẦNG HẠT THUẦN ĐỘNG CỤM] bắt đầu bằng [PARTicle BARE VERB BASE][HẠT THUẦN ĐỘNG CƠ] "to dePLOY" kết hợp mở rộng cấu trúc.</li>

						<li className="list-none">Tầng 2: {'{which OPtimize WORKflow}'} - [SUBject PROnoun CLAUSE][CHỦ ĐẠI CÂU] lồng sâu bên trong.</li>
				
					</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong>:</p>
			
				<ul className="list-square">
			
					<li className="list-none">Tầng 1: [to dePLOY AUtomated SYStems {'{which OPtimize WORKflow}'}] - [ADjective PHRASE][TÍNH CỤM] xác lập hành động tương lai gắn kèm điều kiện bổ trợ cho [NOUN BLOCK][DANH KHỐI] "the deCIsion".</li>

					<li className="list-none">Tầng 2: {'{which OPtimize WORKflow}'} - [ADjective CLAUSE][TÍNH CÂU] bổ nghĩa cho [NOUN BLOCK][DANH KHỐI] "AUtomated SYStems" nhằm xác định rõ tính năng của hệ thống.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 3</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>TIERed prepoSITional PHRASE</strong>][<strong>TẦNG GIỚI CỤM</strong>]</p>
			
				<ul className="list-square">
			
					<li>reVIEWing the aNALysis [of {'{WHAT they inVEStigated}'}] is imPORTant.</li>
					<li className="margin-bottom-20 list-none">Việc xem xét bản phân tích [về {'{những gì họ đã điều tra}'}] là quan trọng.</li>
			
				</ul>
			
				<p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong>:</p>
			
					<ul className="list-square">
				
						<li className="list-none">Tầng 1: [of {'{WHAT they inVEStigated}'}] - [TIERed prepoSITional PHRASE][TẦNG GIỚI CỤM] vận hành như bộ quét nội dung tổng thể, bắt đầu bằng [prepoSITional BASE][GIỚI CƠ] "of".</li>

						<li className="list-none">Tầng 2: {'{WHAT they inVEStigated}'} - [SUBject PROnoun CLAUSE][CHỦ ĐẠI CÂU] kết hợp [SUBject PROnoun BASE][CHỦ ĐẠI CƠ] "WHAT" tạo nên lõi thông tin.</li>
				
					</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong>:</p>
			
				<ul className="list-square">
			
					<li className="list-none">Tầng 1: [of {'{WHAT they inVEStigated}'}] - [ADjective PHRASE][TÍNH CỤM] mở rộng thông tin bổ trợ cho [NOUN BLOCK][DANH KHỐI] "the aNALysis".</li>

					<li className="list-none">Tầng 2: {'{WHAT they inVEStigated}'} - [NOUN CLAUSE][DANH CÂU] chịu sự điều phối trực tiếp của [prepoSITional BASE][GIỚI CƠ] "of".</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Ví dụ 4</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>TIERed COMplex prepoSITional PHRASE</strong>][<strong>TẦNG PHỨC GIỚI CỤM</strong>]</p>
			
				<ul className="list-square">
			
					<li>SHIFTS [due to MARket fluctuAtions {'{which afFECted proDUCtion}'}] CAUSED LOSses.</li>
					<li className="margin-bottom-20 list-none">Những thay đổi [do biến động thị trường {'{cái mà đã ảnh hưởng đến sản xuất}'}] đã gây ra tổn thất.</li>
			
				</ul>
			
				<p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong>:</p>
			
					<ul className="list-square">
				
						<li className="list-none">Tầng 1: [due to MARket fluctuAtions {'{which afFECted proDUCtion}'}] - [TIERed COMplex prepoSITional PHRASE][TẦNG PHỨC GIỚI CỤM] bắt đầu bằng [COMplex prepoSITional BASE][PHỨC GIỚI CƠ] "due to" kết hợp tổ hợp phức hợp.</li>

						<li className="list-none">Tầng 2: {'{which afFECted proDUCtion}'} - [SUBject PROnoun CLAUSE][CHỦ ĐẠI CÂU] tích hợp bổ trợ tầng sâu.</li>
				
					</ul>


			<p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong>:</p>
			
				<ul className="list-square">
			
					<li className="list-none">Tầng 1: [due to MARket fluctuAtions {'{which afFECted proDUCtion}'}] - [ADjective PHRASE][TÍNH CỤM] đa tầng bóc tách sâu nguyên nhân và hệ quả cho [NOUN BLOCK][DANH KHỐI] "SHIFTS".</li>

					<li className="list-none">Tầng 2: {'{which afFECted proDUCtion}'} - [ADjective CLAUSE][TÍNH CÂU] bổ nghĩa cho [NOUN BLOCK][DANH KHỐI] "MARket fluctuAtions" để chỉ rõ khía cạnh biến động.</li>
			
				</ul>
			


			{/* 7. */}

			<h3 className="margin-y-50 text-center">7. Paraphrase - Chuyển Đổi Chức Năng (Nâng Cấp Tư Duy)</h3>


			<h4 className="margin-y-40">A. Chuyển từ [ADjective BASE][TÍNH CƠ] ➔ [ADjective PHRASE][TÍNH CỤM]</h4>

			<p className="text-indent-whole"><strong>Gốc</strong>: [<strong>ADjective BASE</strong>][<strong>TÍNH CƠ</strong>]</p>
			
				<ul className="list-square">
			
					<li>the [PROfitable] inVESTment is YOURS.</li>
					<li className="margin-bottom-20 list-none">Khoản đầu tư [có lợi nhuận] là của bạn.</li>
			
					<li className="list-none">Hình thái: [PROfitable] - [MODified ADjective BASE][DIỆN TÍNH CƠ] hình thành từ khối [ROOT VERB BASE][RỄ ĐỘNG CƠ] nguyên bản "profit" mặc thêm (kết hợp) hậu tố "-able" để thay đổi diện mạo bên ngoài thành một khối cấp độ [BASE][CƠ] mang diện mạo [MODified ADjective BASE][DIỆN TÍNH CƠ] "PROfitable", chuyên trách cài đặt đặc tính sinh lợi cho đối tượng đi kèm.</li>
			
					<li className="list-none">Chức năng: [PROfitable] - [ADjective BASE][TÍNH CƠ] cài đặt đặc tính cố định cho [NOUN BASE][DANH CƠ] "inVESTment".</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole"><strong>Chuyển đổi</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>]</p>
			
				<ul className="list-square">
			
					<li>the inVESTment [GENerating HIGH PROfits] is YOURS.</li>
					<li className="margin-bottom-20 list-none">Khoản đầu tư [tạo ra lợi nhuận cao] là của bạn.</li>
			
					<li className="list-none">Hình thái: [GENerating HIGH PROfits] - [proGRESSive VERB PHRASE][TIẾP ĐỘNG CỤM] dẫn dắt bởi [proGRESSive VERB BASE][TIẾP ĐỘNG CƠ] "GENerating" đi kèm [OBject PROnoun][TÂN ĐẠI] "HIGH PROfits".</li>
			
					<li className="list-none">Chức năng: [GENerating HIGH PROfits] - [ADjective PHRASE][TÍNH CỤM] mô tả trạng thái chủ động tạo ra giá trị của đối tượng trung tâm.</li>
			
				</ul>


			<h4 className="margin-y-40">B. Chuyển từ [ADjective PHRASE][TÍNH CỤM] ➔ [ADjective CLAUSE][TÍNH CÂU]</h4>

			<p className="text-indent-whole"><strong>Gốc</strong>: [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>]</p>
			
				<ul className="list-square">
			
					<li>the MAN [STANding THERE] is my BOSS.</li>
					<li className="margin-bottom-20 list-none">Người đàn ông [đang đứng đó] là sếp tôi.</li>
			
					<li className="list-none">Hình thái: [STANding THERE] - [proGRESSive VERB PHRASE][TIẾP ĐỘNG CỤM] bắt đầu bằng [proGRESSive VERB BASE][TIẾP ĐỘNG CƠ] "STANding".</li>
			
					<li className="list-none">Chức năng: [STANding THERE] - [ADjective PHRASE][TÍNH CỤM] mô tả trạng thái hành động đang diễn ra của chủ thể.</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole"><strong>Chuyển đổi</strong>: [<strong>ADjective CLAUSE</strong>][<strong>TÍNH CÂU</strong>]</p>
			
				<ul className="list-square">
			
					<li>the MAN [who is STANding THERE] is my BOSS.</li>
					<li className="margin-bottom-20 list-none">Người đàn ông [người mà đang đứng đó] là sếp tôi.</li>
			
					<li className="list-none">Hình thái: [who is STANding THERE] - [SUBject PROnoun CLAUSE][CHỦ ĐẠI CÂU] "who" kết hợp [TENSE proGRESSive VERB BASE][THỜI TIẾP ĐỘNG CƠ] "is STANding".</li>
			
					<li className="list-none">Chức năng: [who is STANding THERE] - [ADjective CLAUSE][TÍNH CÂU] định danh chính xác đối tượng thông qua hành động cụ thể đang diễn ra.</li>
			
				</ul>
			

			<h4 className="margin-y-40">C. Chuyển từ [ADjective CLAUSE][TÍNH CÂU] ➔ [ADjective BASE][TÍNH CƠ]</h4>

			<p className="text-indent-whole"><strong>Gốc</strong>: [<strong>ADjective CLAUSE</strong>][<strong>TÍNH CÂU</strong>]</p>
			
				<ul className="list-square">
			
					<li>the POLicy [which is efFECtive] will be apPLIED.</li>
					<li className="margin-bottom-20 list-none">Chính sách [cái mà hiệu quả] sẽ được áp dụng.</li>
			
					<li className="list-none">Hình thái: [which is efFECtive] - [SUBject PROnoun CLAUSE][CHỦ ĐẠI CÂU] mở đầu bằng [SUBject PROnoun BASE][CHỦ ĐẠI CƠ] "which" kết hợp [TENSE-BARE VERB BASE][THỜI-THUẦN ĐỘNG CƠ] "is" và [MODified ADjective BASE][DIỆN TÍNH CƠ] "efFECtive".</li>
			
					<li className="list-none">Chức năng: [which is efFECtive] - [ADjective CLAUSE][TÍNH CÂU] vạch rõ bản chất định danh cho đối tượng [NOUN BASE][DANH CƠ].</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole"><strong>Chuyển đổi</strong>: [<strong>ADjective BASE</strong>][<strong>TÍNH CƠ</strong>]</p>
			
				<ul className="list-square">
			
					<li>the [efFECtive] POLicy will be apPLIED.</li>
					<li className="margin-bottom-20 list-none">Chính sách [hiệu quả] sẽ được áp dụng.</li>
			
					<li className="list-none">Hình thái: [efFECtive] - [MODified ADjective BASE][DIỆN TÍNH CƠ] hình thành từ khối [ROOT VERB BASE][RỄ ĐỘNG CƠ] nguyên bản "efFECT" mặc thêm (kết hợp) hậu tố "-ive" để thay đổi diện mạo bên ngoài thành một khối cấp độ [BASE][CƠ] mang diện mạo [MODified ADjective BASE][DIỆN TÍNH CƠ] "efFECtive", chuyên trách cài đặt đặc tính mang lại kết quả cao cho đối tượng đi kèm.</li>
			
					<li className="list-none">Chức năng: [efFECtive] - [ADjective BASE][TÍNH CƠ] cài đặt nhãn dán thuộc tính cố định, rút gọn thông tin tối đa cho đối tượng [NOUN BASE][DANH CƠ].</li>
			
				</ul>
			
			
			

			{/* Lời Kết */}

			<h3 className="margin-y-50 text-center">Kết Luận</h3>

			<p>Việc duy trì các tầng phân tích giúp bộ não không bị quá tải khi xử lý các cấu trúc học thuật phức tạp. Khi làm chủ được các tầng chức năng Tính và sự phối hợp giữa [BASE][CƠ]-[PHRASE][CỤM]-[CLAUSE][CÂU], tiếng Anh sẽ trở thành công cụ biểu đạt mạnh mẽ, trôi chảy và đầy uy lực trong mọi văn bản học thuật.</p>


			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>June 01, 2026 · by 💎GEM and 🐝Mr. Bee Osn ·</span>
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