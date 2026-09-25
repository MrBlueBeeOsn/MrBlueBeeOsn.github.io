import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function LegoAssembly1(): React.JSX.Element {

	const postId = "LegoAssembly1";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#base-phrase-clause-terms"><mark className="highlight-tertiary-padding-4-8">[HEAD][PHRASE][CLAUSE]</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">[LEGo asSEMbly]
												
				{/* <sup><HashLink smooth to="/tieng-anh/lego-assembly-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-2">&nbsp;2&nbsp;</HashLink>
				</sup> */}

				{/* <sup><HashLink smooth to="/tieng-anh/lego-assembly-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/lego-assembly-9">&nbsp;9&nbsp;</HashLink>
				</sup> */}

			</h1>


			<div className="example">
										
				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#SUBject-HEAD">SUBject HEAD</HashLink>&nbsp;/&nbsp;
						<HashLink smooth to="#OBject-HEAD">OBject HEAD</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#SUBject-PHRASE">SUBject PHRASE</HashLink>&nbsp;/&nbsp;
						<HashLink smooth to="#OBject-PHRASE">OBject PHRASE</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#SUBject-CLAUSE">SUBject CLAUSE</HashLink>&nbsp;/&nbsp;
						<HashLink smooth to="#OBject-CLAUSE">OBject CLAUSE</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#ADjective-HEAD">ADjective HEAD</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADjective-PHRASE">ADjective PHRASE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADjective-CLAUSE">ADjective CLAUSE</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#ADverb-HEAD">ADverb HEAD</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADverb-PHRASE">ADverb PHRASE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADverb-CLAUSE">ADverb CLAUSE</HashLink>
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


			<h4 className="margin-bottom-30 text-center">Phá Vỡ 12 Thời: Học Tiếng Anh Theo [LEGo asSEMbly][Tư Duy Lắp Ghép]</h4>

			<p>Bạn đã dành bao nhiêu năm cuộc đời để học thuộc lòng những công thức cấu trúc phức tạp? Để rồi mỗi khi định mở miệng nói một câu, bộ nền não lại mất vài giây "đóng băng" để lục tìm trong trí nhớ xem phải chia các mảnh ghép [Lego] ra sao?</p>

			<p>Đó là cách học cũ kỹ – cách học biến tiếng Anh thành một môn toán học đầy tính đánh đố.</p>

			<p>Hôm nay, mình sẽ chia sẻ với bạn một tư duy đột phá, một hệ thống tối giản hóa toàn bộ cấu trúc tiếng Anh về một bộ khung duy nhất. Hệ thống này dựa trên một quy luật ghi nhớ siêu trực quan: Hệ thống ma trận logic 3 Chiều Ngang Chức năng: [NOUN HEAD][DANH LÕI] / [ADjective HEAD][TÍNH LÕI] / [ADverb HEAD][TRẠNG LÕI] và 3 Chiều Dọc Cấp độ: [HEAD][LÕI] - [PHRASE][CỤM] - [CLAUSE][CÂU].</p>



			{/* 1.  */}

			<h3 className="margin-y-50 text-center">1. Bộ Khung Xương Duy Nhất: [S] [V] [O]</h3>
			
			<p>Mọi câu lớn có thể đứng độc lập và kết thúc bằng dấu chấm trong tiếng Anh, thực chất chỉ là sự vận hành của ba thành phần cơ bản luôn đóng khung [SUBject], [VERB], [OBject]:</p>


			<h4 className="margin-y-40 text-indent-whole">[<strong>S HEAD</strong>] [<strong>V HEAD</strong>] [<strong>O HEAD</strong>]</h4>
			
				<ul className="list-square">
			
					<li>[<strong>SUBject HEAD</strong>][<strong>CHỦ LÕI</strong>]: Khối định danh đối tượng hành động.</li>
			
					<li>[<strong>VERB HEAD</strong>][<strong>ĐỘNG LÕI</strong>]: Hạt nhân/Bộ nguồn - Khối điều khiển toàn câu, luôn đứng liền kề với [S]. [Hạt nhân]/[Bộ nguồn][HEAD] là hạt nhân [VERB HEAD][ĐỘNG LÕI] hoặc chứa các trợ nguồn [Thời] gian, gánh vác bối cảnh [Thời] gian kết hợp logic thực thi hành động để cấp năng lượng cho toàn câu.</li>
			
					<li>[<strong>OBject HEAD</strong>][<strong>TÂN LÕI</strong>]: Là tất cả những gì đứng sau [HEAD]. Chúng mang tư duy "dePENDent - phụ thuộc", sinh ra là để bám vào [HEAD] và không bao giờ có thể đứng độc lập một mình.</li>

				</ul>
			

			<h4 className="margin-y-40">Bí mật về vị trí của chữ "NOT" và quy luật tách khối</h4>

			<p className="text-indent-whole">Ở câu khẳng định thông thường, [Hạt nhân]/[Bộ nguồn][HEAD] tồn tại dưới dạng một khối tích hợp duy nhất. Tuy nhiên, khi bạn muốn phủ định, chữ NOT luôn luôn đứng ngay sau thành phần đảm nhiệm dòng [Thời] gian đầu tiên.</p>

			<p className="text-indent-whole">Do đó, khi chuyển sang câu phủ định hoặc nghi vấn, khối hạt nhân [Hạt nhân]/[Bộ nguồn][HEAD] bắt buộc phải thực hiện thao tác tách cấu hình:</p>

			<p className="text-indent-whole">[HEAD] → [FInite VERB][HẠN ĐỘNG] / [SOFT MOdal][Ý THÁI] hay [asSERTive MOdal VERB][ÁP THÁI ĐỘNG] + [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG]</p>
					
			<p className="text-indent-whole">Vì bản chất [dePENDent][PHỤ] là tất cả những gì đứng sau [HEAD], nên:</p>
			
				<ul className="list-square">
			
					<li><strong>Trong câu khẳng định</strong>: [dePENDent][PHỤ] đứng ngay sau [Hạt nhân]/[Bộ nguồn][HEAD] tích hợp (will launch).</li>
			
					<li><strong>Trong câu phủ định</strong>: Khi [Hạt nhân]/[Bộ nguồn][HEAD] tách ra và chèn thêm NOT, cấu trúc ranh giới lúc này được xác lập lại. Phần [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] vẫn nằm trọn vẹn trong cấu hình của bộ nguồn [Hạt nhân]/[Bộ nguồn][HEAD], chỉ có chữ not là xen vào giữa. Lúc này, vùng [dePENDent][PHỤ] sẽ dịch chuyển và đứng ngay sau cấu hình [Hạt nhân]/[Bộ nguồn][HEAD] phủ định (will NOT launch).</li>
			
				</ul>
			

			{/* 2.  */}

			<h3 className="margin-y-50 text-center">2. Hệ Thống Phân Hệ [VERB HEAD][ĐỘNG LÕI] Thao Tác Hệ Thống</h3>

			<p>Để vận hành chính xác cấu trúc trên, toàn bộ hệ thống hành động trong tiếng Anh được phân tách tường minh thành 16 cấu hình mảnh ghép [Lego] [ĐỘNG] cốt lõi. Việc hiểu rõ bản chất vật lý của từng loại sẽ giúp bạn lắp ráp câu mà không bao giờ bị nhầm lẫn [Thời] gian hay thể thức.</p>

			<h4 className="margin-y-40">Phân Loại 16 Loại Phân Hệ [VERB HEAD][ĐỘNG LÕI]:</h4>
			
				<ol>
      
          <li value="1">[<strong>ROOT VERB</strong>][<strong>GỐC ĐỘNG</strong>]: LAUNCH, conSTRUCT, OPerate</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng [ROOT VERB][GỐC ĐỘNG] nguyên thủy nhất, chưa thêm bớt hay kết hợp với bất kỳ hành động nào khác.</li>
      
          <li value="2">[<strong>PARTicle VERB</strong>][<strong>HẠT ĐỘNG</strong>]: "to"</li>
          <li className="list-none">[Hạt] "to" đơn lẻ đóng vai trò hạt nhân đầu tiên đứng trước mọi khối hành động để kích hoạt trạng thái nguyên bản (ví dụ: to anALyze, to dePLOY).</li>
					<li className="margin-bottom-20 list-none">Các [Hạt] như aWAY, BACK, FORward, Over, ... đơn lẻ đứng sau hành động để điều hướng hướng đi, khuếch đại thái độ hoặc biến đổi hoàn toàn sắc thái ý nghĩa của hành động gốc (ví dụ: pasS aWAY, paY BACK, briNG FORward, taKE Over).</li>

          <li value="3">[<strong>auXILiary VERB</strong>][<strong>TRỢ ĐỘNG</strong>]: does, did, is, has, was, am, are</li>
          <li className="margin-bottom-20 list-none">Hành động đơn lẻ xuất hiện để mang năng lượng [Thời] gian / mốc [Thời] gian trong câu.</li>

					<li value="4" className="margin-bottom-20">[<strong>MOdal VERB</strong>][<strong>THÁI ĐỘNG</strong>]:</li>
      
          <li className="list-none">[<strong>SOFT MOdal VERB</strong>][<strong>Ý THÁI ĐỘNG</strong>]: would, could, should, might</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ mang tính [Ý] nhị, có [Ý] tứ, mong muốn là thật nhưng cách nói nhường nhịn và triệt tiêu tính ép. Các khối phức đặc biệt "ought to" và "had BETter" được quét như một [Phức Ý-Thái ĐỘNG] [Complex Soft-Modal VERB] thống nhất.</li>

          <li className="list-none">[<strong>asSERTive MOdal VERB</strong>][<strong>ÁP THÁI ĐỘNG</strong>]: will, shall, can, must, may</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ mang tính trực diện, [Áp] đặt thực tế xuống, không chừa lối thoát cho người nghe. Khối phức đặc biệt "have to" được quét như một [Phức Áp-Thái ĐỘNG] [Complex Assertive-Modal VERB] thống nhất.</li>

					<li value="5" className="margin-bottom-20">[<strong>non-FInite VERB</strong>][<strong>VÔ HẠN ĐỘNG</strong>]: HAVing NO TENSE or NO SUBject</li>

          <li className="list-none">[<strong>BARE inFINitive VERB</strong>][<strong>THUẦN NGUYÊN ĐỘNG</strong>]: LAUNCH, conSTRUCT, OPerate</li>
          <li className="margin-bottom-20 list-none">Hành động [Thuần] khiết đứng tự do một mình, không có "to" đi kèm, thường đứng ngay sau [PARTicle VERB][HẠT ĐỘNG] "to", [SOFT MOdal][Ý THÁI] hay [asSERTive MOdal VERB][ÁP THÁI ĐỘNG] hoặc các [ROOT VERB][GỐC ĐỘNG] kích hoạt/giác quan:</li>

					<li className="list-none">Nhóm Sai khiến & Cho phép: MAKE, LET, let's, HAVE</li>
					<li className="list-none">Nhóm Hỗ trợ & Nhờ vả: HELP, GET (trong trường hợp đặc biệt)</li>
					<li className="margin-bottom-20 list-none">Nhóm Giác quan & Quan sát: SEE, HEAR, WATCH, FEEL, NOtice, obSERVE, SMELL</li>

          <li className="list-none">[<strong>FULL inFINitive VERB</strong>][<strong>TOÀN NGUYÊN ĐỘNG</strong>]: to LAUNCH, to OPerate</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính lấy tên phần tử đầu tiên [PARTicle VERB][HẠT ĐỘNG] kết hợp cùng hành động [Thuần] khiết phía sau.</li>

					<li className="list-none">[<strong>PRESent PARTiciple VERB</strong>][<strong>HIỆN TIẾP ĐỘNG</strong>]: LAUNCHing, conSTRUCTing, OPerating</li>
          <li className="margin-bottom-20 list-none">Hành động mang đuôi -ing thể hiện tính chất đang [Tiếp] diễn, kéo dài.</li>

          <li className="list-none">[<strong>PAST PARTiciple VERB</strong>][<strong>ĐÃ HOÀN ĐỘNG</strong>]: LAUNCHED, conSTRUCTed, been, OPerating</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng cột 3 hoặc thêm đuôi -ed thể hiện tính chất đã trọn vẹn, [Hoàn] thành.</li>

          <li value="6" className="margin-bottom-20">[<strong>FInite VERB</strong>][<strong>HẠN ĐỘNG</strong>]: HAVing TENSE or SUBject</li>

					<li className="list-none">[<strong>BASE VERB</strong>][<strong>NỀN ĐỘNG</strong>]: LAUNCH, conSTRUCT, OPerate</li>
          <li className="margin-bottom-20 list-none">Hành động hiện tại dạng nền tảng cho các ngôi còn lại. Đây là hình thái phôi thô khi đưa vào câu để gánh thời hiện tại, phân biệt hoàn toàn với [GỐC ĐỘNG] nằm trong từ điển. Ví dụ: they LAUNCH, conSTRUCT, OPerate.</li>
					
					<li className="list-none">[<strong>THIRD-PERson SINGular VERB</strong>][<strong>NGÔI 3 S ĐỘNG</strong>]: LAUNCHes, conSTRUCTS</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] gian hiện tại và hành động [Thuần] khiết hòa tan, gộp chung hoàn toàn vào trong cùng một chữ đơn duy nhất.</li>

					<li className="list-none">[<strong>PAST VERB</strong>][<strong>ĐÃ ĐỘNG</strong>]: LAUNCHED</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] gian quá khứ và hành động [Thuần] khiết hòa tan, gộp chung hoàn toàn vào trong cùng một chữ đơn duy nhất.</li>
      
          <li className="list-none">[<strong>auXILiary and PRESent PARTiciple VERB</strong>][<strong>TRỢ và HIỆN TIẾP ĐỘNG</strong>]: is LAUNCHing, was conSTRUCTing</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa hành động mang [Thời] gian và hành động mang tính [Tiếp] diễn.</li>

          <li className="list-none">[<strong>auXILiary and PAST PARTiciple VERB</strong>][<strong>TRỢ và ĐÃ HOÀN ĐỘNG</strong>]: has LAUNCHED, had conSTRUCTed</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa hành động mang [Thời] gian và hành động mang tính [Hoàn] thành.</li>
      
          <li className="list-none">[<strong>auXILiary, PAST and PRESent PARTiciple VERB</strong>][<strong>TRỢ, ĐÃ VÀ HIỆN TIẾP ĐỘNG</strong>]: has been LAUNCHing, had been conSTRUCTing</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa ba lớp năng lượng [Thời] gian, [Hoàn] thành và [Tiếp] diễn.</li>

					<li className="list-none">[<strong>SOFT MOdal and BARE inFINitive VERB</strong>][<strong>Ý THÁI và THUẦN NGUYÊN ĐỘNG</strong>]: would OPerate, could HELP</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Ý] nhị, không ép và hành động [Thuần] khiết.</li>
      
          <li className="list-none">[<strong>asSERTive MOdal and BARE inFINitive VERB</strong>][<strong>ÁP THÁI và THUẦN NGUYÊN ĐỘNG</strong>]: will OPerate, can LAUNCH</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Áp] đặt thực tế và hành động [Thuần] khiết.</li>

          <li className="list-none">[<strong>auXILiary and BARE inFINitive VERB</strong>][<strong>TRỢ và THUẦN NGUYÊN ĐỘNG</strong>]: DID OPerate, DOES conSTRUCT</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] gian và hành động [Thuần] khiết song hành, được tách riêng biệt bằng một khoảng trắng trong câu.</li>
      
        </ol>


			{/* 3.  */}

			<h3 className="margin-y-50 text-center">3. Hệ Thống Phân Hệ [PHRASE][CỤM] Thao Tác Hệ Thống</h3>

			<p><strong>Quy Tắc Cốt Lõi</strong>:</p>

			<p className="margin-top-20">Khi bất kỳ họ [VERB HEAD][ĐỘNG LÕI] nào thuộc nhóm 16 mục trên kéo theo các [TÂN LÕI], [TÂN CỤM], [TÂN CÂU], [TRẠNG CÂU] [TRẠNG CỤM], [TRẠNG CÂU] phía sau, toàn khối đó tự động chuyển đổi cấu trúc và được dán nhãn thành dạng [PHRASE][CỤM] tương ứng của chính nó.</p>
			
				<ul className="list-square">
			
					<li>Ví dụ 1: LAUNCHing [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] + the APP [NOUN HEAD][DANH LÕI]</li>
					<li className="margin-bottom-20 list-none">→ LAUNCHing the APP [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM].</li>
			
					<li>Ví dụ 2: to OPtimize [FULL inFINitive VERB][TOÀN NGUYÊN ĐỘNG]</li>
					<li className="margin-bottom-20 list-none">→ to OPtimize the DAtabase [FULL inFINitive VERB PHRASE][TOÀN NGUYÊN ĐỘNG CỤM].</li>
			
					<li>Ví dụ 3: will seCURE [asSERTive MOdal and BARE inFINitive VERB][ÁP THÁI và THUẦN NGUYÊN ĐỘNG] + the NETwork [OBject HEAD][TÂN LÕI]</li>
					<li className="list-none">→ will seCURE the NETwork [Áp-Thái Thuần Động Cụm][Assertive-Modal Bare Verb Phrase].</li>
			
				</ul>
			
			<p className="margin-top-20">Tư duy này giúp bạn giải phóng bộ nền nào khỏi việc ghi nhớ thủ công hàng trăm cụm từ đơn lẻ, chỉ cần nhận diện khối [HEAD][LÕI] gốc và quét toàn bộ phần phụ thuộc bám đuôi để định hình nhãn [PHRASE][CỤM] trong một nốt nhạc.</p>
			


			{/* 4.  */}

			<h3 className="margin-y-50 text-center">4. Bản Đồ Công Thức Lắp Ghép Minh Họa Toàn Diện</h3>

			<p>Hãy nhìn cách các mảnh ghép [Lego] [ĐỘNG] tương tác với nhau để tạo ra các cấu hình nguồn [Hạt nhân]/[Bộ nguồn][HEAD] và dòng năng lượng trong câu:</p>

			
			<h4 className="margin-y-40">[Thời] gian và trạng thái [Hoàn] thành/[Tiếp] diễn:</h4>
          
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 1</strong>: [<strong>auXILiary VERB</strong>][<strong>TRỢ ĐỘNG</strong>]</p>

      <p className="text-indent-whole">Nhóm này dùng để chia mốc [Thời] gian và trạng thái [Hoàn] thành/[Tiếp] diễn:</p>

        <ul className="list-square">
      
          <li>be LAUNCHing → [auXILiary VERB][TRỢ ĐỘNG] be (am/is/are, was/were) + [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] LAUNCHing</li>

          <li>have been LAUNCHing → [auXILiary and PAST PARTiciple VERB][TRỢ và ĐÃ HOÀN ĐỘNG] have/has/had been + [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] LAUNCHing</li>
      
          <li>have LAUNCHED → [auXILiary VERB][TRỢ ĐỘNG] have/has/had + [PAST PARTiciple VERB][ĐÃ HOÀN ĐỘNG] LAUNCHED</li>
      
          <li>LAUNCHes, LAUNCHED → [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG], [PAST VERB][ĐÃ ĐỘNG] Tích hợp</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 2</strong>: [<strong>BARE VERB</strong>][<strong>THUẦN NGUYÊN ĐỘNG</strong>]</p>

      <p className="text-indent-whole">Nhóm dùng dạng nguyên bản, không chia:</p>

        <ul className="list-square">
      
          <li>to LAUNCH → [FULL inFINitive VERB][TOÀN NGUYÊN ĐỘNG] LAUNCH</li>
      
          <li>DID LAUNCH → [auXILiary VERB][TRỢ ĐỘNG] did (Nhấn mạnh) + [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] LAUNCH</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 3</strong>: [<strong>SOFT MOdal and BARE inFINitive VERB</strong>][<strong>Ý THÁI và THUẦN NGUYÊN ĐỘNG</strong>]</p>

      <p className="text-indent-whole">Nhóm tình huống lịch sự, gợi ý: would (nhã nhặn), should (gợi ý), could (khả năng nhẹ), might (khả năng thấp), ought to (khuyên bảo), had better (khuyên nhủ)</p>

        <ul className="list-square">
      
          <li>should eVALuate → [SOFT MOdal][Ý THÁI] should (gợi ý) + [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] eVALuate</li>
      
          <li>could upGRADE → [SOFT MOdal][Ý THÁI] could (khả năng nhẹ) + [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] upGRADE</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 4</strong>: [<strong>asSERTive MOdal and BARE inFINitive VERB</strong>][<strong>ÁP THÁI và THUẦN NGUYÊN ĐỘNG</strong>]</p>

      <p className="text-indent-whole">Nhóm tình huống ép buộc, chắc chắn: will (cam kết), shall (chắc chắn), can (năng lực), must (ép buộc), have to (bắt buộc), may (khả năng)</p>

        <ul className="list-square">
      
          <li>will MODify → [asSERTive MOdal][ÁP THÁI] will (cam kết) + [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] MODify</li>
      
          <li>must seCURE → [asSERTive MOdal][ÁP THÁI] must (ép buộc) + [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] seCURE</li>
      
        </ul>


			{/* 5.  */}

			<h3 className="margin-y-50 text-center">5. Giải Mã Vùng Đất [dePENDent][PHỤ]: Ma Trận Nhất Quán "Hình Thái trước - Chức Năng sau"</h3>

			<p>Điểm mấu chốt của phương pháp [Lego Assembly] là người học chỉ cần nhìn vào Hình thái (bản chất cấu tạo bề ngoài của khối [Lego]) trước, sau đó mới xác định Chức năng của nó dựa vào vị trí đứng trong câu.</p>


			<h4 className="margin-y-40">Chiều Dọc Cấp độ: [HEAD][LÕI] - [PHRASE][CỤM] - [CLAUSE][CÂU] (Mảnh [Lego] làm bằng gì?)</h4>

				<ul className="list-square">
			
					<li>[<strong>HEAD</strong>][<strong>LÕI</strong>]: Mức độ level cơ bản, đơn giản nhất (chỉ gồm 1 gốc đơn lẻ).</li>
			
					<li>[<strong>PHRASE</strong>][<strong>CỤM</strong>]: Khối phức hợp làm một chức năng chung nhưng không có lõi [S] và hành động riêng theo quy tắc kéo theo thành phần phụ thuộc.</li>

					<li>[<strong>CLAUSE</strong>][<strong>CÂU</strong>]: Một câu con có cấu trúc [S] và hành động riêng bên trong được khóa lại bởi một [conJUNCtion][LIÊN] để đi làm thuê cho câu lớn.</li>
			
				</ul>

			
			<h4 className="margin-y-40">Chiều Ngang Chức năng: [NOUN HEAD][DANH LÕI] / [ADjective HEAD][TÍNH LÕI] / [ADverb HEAD][TRẠNG LÕI] (Mảnh [Lego] dùng để làm gì?)</h4>

			<p className="text-indent-whole">Khi một Hình thái được đặt vào một vị trí cụ thể trong khung câu, nó sẽ kích hoạt một trong ba chức năng cốt lõi: [<strong>Danh</strong>] / [<strong>Tính</strong>] / [<strong>Trạng</strong>].</p>

			<p className="text-indent-whole">Từ sự giao thoa này, chúng có quy luật chuyển hóa cốt lõi sau:</p>
			
				<ul className="list-square">
			
					<li>[ROOT VERB][GỐC ĐỘNG] hình thành nên chức năng [NOUN HEAD][DANH LÕI], [ADjective HEAD][TÍNH LÕI], [ADverb HEAD][TRẠNG LÕI].</li>
			
					<li>[VERB PHRASE][ĐỘNG CỤM] hình thành nên chức năng [NOUN PHRASE][DANH CỤM], [ADjective PHRASE][TÍNH CỤM], [ADjunct][PHỤ].</li>

					<li>[prepoSITion][GIỚI] hình thành nên dạng hành động gốc cấu hình nền tảng.</li>

					<li>[COMplex prepoSITion][PHỨC GIỚI] hình thành nên các biến thể cụm từ chỉ mối quan hệ phức hợp.</li>

					<li>[prepoSITional PHRASE][GIỚI CỤM] hình thành nên chức năng [ADjective PHRASE][TÍNH CỤM], [ADjunct][PHỤ].</li>
			
				</ul>
			
			

			{/* 6.  */}

			<h3 className="margin-y-50 text-center">6. Bản Hướng Dẫn Lắp Ráp Lego Chi Tiết (Hình Thái & Chức Năng)</h3>

			<h4 className="margin-y-40">Lớp Chức Năng 1: Khối Giao Tiếp [DANH]</h4>

			<p className="text-indent-whole">Khối này chịu trách nhiệm đóng gói các hành động, thực thể thành một cái tên, một đối tượng để làm [SUBject HEAD][CHỦ LÕI] hoặc phần [OBject HEAD][TÂN LÕI] tiếp nhận tác động trong câu.</p>
			

			<p className="margin-top-20 text-indent-whole" id="SUBject-HEAD">[<strong>SUBject HEAD</strong>][<strong>CHỦ LÕI</strong>] <strong>cấu tạo từ</strong> [<strong>PRESent PARTiciple VERB</strong>][<strong>HIỆN TIẾP ĐỘNG</strong>] <strong>làm</strong> [<strong>SUBject</strong>][<strong>CHỦ</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[SWIMming] imPROVES PHYSical enDURance.</li>
					<li className="margin-bottom-20 list-none">[Việc bơi lội] cải thiện sức bền thể chất.</li>

					<li className="list-none">Hình thái: [SWIMming] - [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "SWIM" mặc thêm (kết hợp) hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI] biểu đạt một tiến trình hành động được thực hiện hóa.</li>

					<li className="list-none">Chức năng: [SWIMming] - [SUBject HEAD][CHỦ LÕI] được hình thành từ [NOUN HEAD][DANH LÕI] đóng vai trò làm [SUBject][CHỦ] kích hoạt và cung cấp năng lượng cho bộ nguồn [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] imPROVES.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole" id="OBject-HEAD">[<strong>OBject HEAD</strong>][<strong>TÂN LÕI</strong>] <strong>cấu tạo từ</strong> [<strong>PRESent PARTiciple VERB</strong>][<strong>HIỆN TIẾP ĐỘNG</strong>] <strong>làm</strong> [<strong>OBject</strong>][<strong>TÂN</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the CORporate TEAM EMphasizes [TRAINing].</li>
					<li className="margin-bottom-20 list-none">Đội ngũ doanh nghiệp chú trọng [việc đào tạo].</li>

					<li className="list-none">Hình thái: [TRAINing] - [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "TRAIN" mặc thêm (kết hợp) hậu tố "-ing" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI] biểu đạt một tiến trình hành động được thực hiện hóa.</li>

					<li className="list-none">Chức năng: [TRAINing] - [OBject HEAD ][TÂN LÕI] được hình thành từ [NOUN HEAD][DANH LÕI] tiếp nhận sự chú trọng tác động trực tiếp đứng ngay sau bộ nguồn [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] EMphasizes.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole" id="SUBject-PHRASE">[<strong>SUBject PHRASE</strong>][<strong>CHỦ CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>PRESent PARTiciple VERB PHRASE</strong>][<strong>HIỆN TIẾP ĐỘNG CỤM</strong>] <strong>làm</strong> [<strong>SUBject</strong>][<strong>CHỦ</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[deSIGNing SYStem ARchitecture] reQUIres DEEP experTISE.</li>
					<li className="margin-bottom-20 list-none">[Việc thiết kế kiến trúc hệ thống] đòi hỏi chuyên môn sâu.</li>

					<li className="list-none">Hình thái: [deSIGNing SYStem ARchitecture] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] deSIGNing phối hợp với khối định danh mục tiêu SYStem ARchitecture chịu tác động đi liền phía sau để làm rõ đối tượng được thiết kế.</li>

					<li className="list-none">Chức năng: [deSIGNing SYStem ARchitecture] - [SUBject PHRASE][CHỦ CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM] đứng trước điều phối hạt nguồn [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] reQUIres.</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole" id="OBject-PHRASE">[<strong>OBject PHRASE</strong>][<strong>TÂN CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>PRESent PARTiciple VERB PHRASE</strong>][<strong>HIỆN TIẾP ĐỘNG CỤM</strong>] <strong>làm</strong> [<strong>OBject</strong>][<strong>TÂN</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the corpoRAtion deLAYED [LAUNCHing the NEW SERvice].</li>
					<li className="margin-bottom-20 list-none">Tập đoàn đã hoãn [việc khởi chạy dịch vụ mới].</li>

					<li className="list-none">Hình thái: [LAUNCHing the NEW SERvice] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] LAUNCHing phối hợp với khối mô tả thuộc tính và đối tượng phía sau để tạo nên chỉnh thể hành động kéo dài có mục tiêu xác định.</li>

					<li className="list-none">Chức năng: [LAUNCHing the NEW SERvice] - [OBject PHRASE][TÂN CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM], tiếp nhận yêu cầu tác động trực tiếp đứng ngay sau bộ nguồn [PAST VERB][ĐÃ ĐỘNG] deLAYED.</li>
			
				</ul>
			
			

			<p className="margin-top-20 text-indent-whole" id="emBEDded-CLAUSE">[<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>PRESent PARTiciple VERB and emBEDded CLAUSE</strong>][<strong>HIỆN TIẾP ĐỘNG và NHÚNG CÂU</strong>] <strong>làm</strong> [<strong>SUBject PHRASE</strong>][<strong>CHỦ CỤM</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[inVESTigating {'{why the appliCAtion FAILED}'}] TAKES conSIDerable TIME.</li>
					<li className="margin-bottom-20 list-none">[Việc điều tra {'{lý do ứng dụng lỗi}'}] mất nhiều thời gian.</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Khối tổng thể [inVESTigating {'{why the appliCAtion FAILED}'}] là một [PRESent PARTiciple VERB and emBEDded CLAUSE][HIỆN TIẾP ĐỘNG và NHÚNG CÂU] bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] inVESTigating ôm trọn phần phụ thuộc phức tạp bên trong.</li>

					<li className="margin-bottom-20 list-none">Khối nhỏ bên trong {'{why the appliCAtion FAILED}'} là một [conJUNCtional CLAUSE][LIÊN CÂU] bắt đầu bằng [conJUNCtion][LIÊN] why kết hợp với một cấu trúc [S]-[HEAD] nội bộ của riêng nó.</li>

					<li className="list-none">Chức năng:</li>

					<li className="list-none">Khối tổng thể [inVESTigating {'{why the appliCAtion FAILED}'}] đóng vai trò là [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] làm [SUBject PHRASE][CHỦ CỤM] để kích hoạt bộ nguồn hành động TAKES phía sau.</li>

					<li className="list-none">Khối nhỏ bên trong {'{why the appliCAtion FAILED}'} đóng vai trò là [OBject CLAUSE][TÂN CÂU] làm phần tiếp nhận tác động trực tiếp chịu sự điều phối nội bộ của hành động InVESTigating.</li>
			
				</ul>
			

			
			<p className="margin-top-20 text-indent-whole">[<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>PRESent PARTiciple VERB and emBEDded CLAUSE</strong>][<strong>HIỆN TIẾP ĐỘNG và NHÚNG CÂU</strong>] <strong>làm</strong> [<strong>OBject PHRASE</strong>][<strong>TÂN CỤM</strong>]:</p>
			
				<ul className="list-square">
			
					<li>they coORdinate [preDICTing {'{HOW the CLImate will SHIFT}'}].</li>
					<li className="margin-bottom-20 list-none">Họ phối hợp [việc dự báo {'{cách khí hậu sẽ dịch chuyển}'}].</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Khối tổng thể [preDICTing {'{HOW the CLImate will SHIFT}'}] là một [PRESent PARTiciple VERB and emBEDded CLAUSE][HIỆN TIẾP ĐỘNG và NHÚNG CÂU] bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] preDICTing kéo theo cấu trúc phụ thuộc nhiều tầng.</li>

					<li className="margin-bottom-20 list-none">Khối nhỏ bên trong {'{HOW the CLImate will SHIFT}'} là một [conJUNCtional CLAUSE][LIÊN CÂU] bắt đầu bằng [conJUNCtion][LIÊN] HOW kết hợp với một cấu trúc [S]-[HEAD] nội bộ chứa [asSERTive MOdal VERB][ÁP THÁI ĐỘNG] will biểu thị thái độ áp đặt đối với tình huống xảy ra ở tương lai.</li>

					<li className="list-none">Chức năng:</li>

					<li className="list-none">Khối tổng thể [preDICTing {'{HOW the CLImate will SHIFT}'}] đóng vai trò là [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] làm [OBject PHRASE][TÂN CỤM] cho hành động chính coORdinate.</li>

					<li className="list-none">Khối nhỏ bên trong {'{HOW the CLImate will SHIFT}'} đóng vai trò là [OBject CLAUSE][TÂN CÂU] làm phần tiếp nhận tác động trực tiếp cho hành động preDICTing.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole" id="SUBject-CLAUSE">[<strong>SUBject CLAUSE</strong>][<strong>CHỦ CÂU</strong>] <strong>cấu tạo từ</strong> [<strong>interROGative CONtent CLAUSE</strong>][<strong>VẤN NỘI CÂU</strong>] <strong>làm</strong> [<strong>SUBject</strong>][<strong>CHỦ</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[HOW the SYStem OPerates] deTERmines Overall perFORmance.</li>
					<li className="margin-bottom-20 list-none">[Cách hệ thống vận hành] quyết định hiệu năng tổng thể.</li>

					<li className="list-none">Hình thái:  [HOW the SYStem OPerates] - [interROGative CONtent CLAUSE][VẤN NỘI CÂU] chứa [conJUNCtion][LIÊN] HOW ở vị trí đầu khối để dẫn dắt, liên kết một cấu trúc hoàn chỉnh có [SUBject HEAD][CHỦ LÕI] nội bộ the SYStem và hành động OPerates ở phía sau.</li>

					<li className="list-none">Chức năng:  [HOW the SYStem OPerates] - [SUBject CLAUSE][CHỦ CÂU] đứng đầu câu kích hoạt và cung cấp năng lượng cho bộ nguồn [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] deTERmines.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole" id="OBject-CLAUSE">[<strong>OBject CLAUSE</strong>][<strong>TÂN CÂU</strong>] <strong>cấu tạo từ</strong> [<strong>interROGative CONtent CLAUSE</strong>][<strong>VẤN NỘI CÂU</strong>] <strong>làm</strong> [<strong>OBject</strong>][<strong>TÂN</strong>]:</p>
			
				<ul className="list-square">
			
					<li>AUditors CHECK [how TECHnicians seCURE DAta].</li>
					<li className="margin-bottom-20 list-none">Kiểm toán viên kiểm tra [cách các kỹ thuật viên bảo mật dữ liệu].</li>

					<li className="list-none">Hình thái:  [how TECHnicians seCURE DAta] - [interROGative CONtent CLAUSE][VẤN NỘI CÂU] chứa [conJUNCtion][LIÊN] HOW ở vị trí đầu khối để dẫn dắt, liên kết một cấu trúc hoàn chỉnh có [SUBject HEAD][CHỦ LÕI] nội bộ TECHnicians và hành động seCURE ở phía sau.</li>

					<li className="list-none">Chức năng:  [how TECHnicians seCURE DAta] - [OBject CLAUSE][TÂN CÂU] tiếp nhận nội dung thông tin trực tiếp, đứng sau [BASE VERB][NỀN ĐỘNG] CHECK.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole">[<strong>OBject CLAUSE</strong>][<strong>TÂN CÂU</strong>] <strong>cấu tạo từ</strong> [<strong>ZEro conJUNCtional CLAUSE</strong>][<strong>ẨN LIÊN CÂU</strong>] <strong>làm</strong> [<strong>OBject</strong>][<strong>TÂN</strong>]:</p>
			
				<ul className="list-square">
			
					<li>MANagement dyNAMic beLIEVES [the STRATegy DRIVES GROWTH].</li>
					<li className="margin-bottom-20 list-none">Ban quản lý tin tưởng [chiến lược thúc đẩy tăng trưởng].</li>

					<li className="list-none">Hình thái: [the STRATegy DRIVES GROWTH] - [ZEro COMplement CLAUSE][KHUYẾT BỔ CÂU] có đầy đủ cấu hình [SUBject HEAD][CHỦ LÕI] nội bộ và hành động nhưng đã bị chủ động lược bỏ đi [conJUNCtion][LIÊN] that ở đầu khối nhằm tối giản cấu trúc bề mặt.</li>

					<li className="list-none">Chức năng: [the STRATegy DRIVES GROWTH] - [OBject CLAUSE][TÂN CÂU] tiếp nhận nội dung thông tin trực tiếp cho hành động beLIEVES.</li>
			
				</ul>
			


			<h4 className="margin-y-40">Lớp Chức Năng 2: Khối Mô Tả [TÍNH]</h4>

			<p className="text-indent-whole">Khối này dùng để mô tả đặc điểm, tính chất hoặc trạng thái cho một đối tượng hoặc cho [SUBject HEAD][CHỦ LÕI].</p>

			<p className="margin-top-20 text-indent-whole" id="ADjective-HEAD">[<strong>ADjective HEAD</strong>][<strong>TÍNH LÕI</strong>] <strong>cấu tạo từ</strong> [<strong>MODified ADjective</strong>][<strong>DIỆN TÍNH</strong>]:</p>
			
				<ul className="list-square">
			
					<li>THIS is an [INnovative] soLUtion.</li>
					<li className="margin-bottom-20 list-none">Đây là một giải pháp [mang tính đổi mới].</li>

					<li className="list-none">Hình thái: [INnovative] - [MODified ADjective][DIỆN TÍNH] hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "INnovate" mặc thêm (kết hợp) hậu tố "-ive" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI] có khả năng biểu đạt một đặc tính, thuộc tính tĩnh của sự vật.</li>

					<li className="list-none">Chức năng: [INnovative] - [ADjective HEAD][TÍNH LÕI] đứng trước [OBject HEAD][TÂN LÕI] soLUtion để bổ nghĩa và tô màu thuộc tính đặc điểm cho giải pháp.</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole" id="ADjective-PHRASE">[<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>PRESent PARTiciple VERB PHRASE</strong>][<strong>HIỆN TIẾP ĐỘNG CỤM</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the OPerator is [MONitoring the conTROL PANel].</li>
					<li className="margin-bottom-20 list-none">Người vận hành thì [đang theo dõi bảng điều khiển].</li>

					<li className="list-none">Hình thái: [MONitoring the conTROL PANel] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] MONitoring kết hợp với đối tượng chịu tác động the conTROL PANel để tạo nên một hành động đang được kéo dài trực quan.</li>

					<li className="list-none">Chức năng: [MONitoring the conTROL PANel] - [ADjective PHRASE][TÍNH CỤM] đứng sau bộ nguồn is để làm phần mô tả trực tiếp trạng thái hành động diễn tiến của [SUBject HEAD][CHỦ LÕI] the OPerator.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole">[<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>prepoSITional PHRASE</strong>][<strong>GIỚI CỤM</strong>]:</p>
				<ul className="list-square">
			
					<li>the deVICE [with the HIGH-resoLUtion LENS] GENerates SHARP VISual DAta.</li>
					<li className="margin-bottom-20 list-none">Thiết bị [với ống kính độ phân giải cao] tạo ra dữ liệu hình ảnh sắc nét.</li>

					<li className="list-none">Hình thái: [with the HIGH-resoLUtion LENS] - [prepoSITional PHRASE][GIỚI CỤM] bắt đầu bằng [prepoSITion][GIỚI] with kết hợp cùng một khối chức năng Danh nhằm giới hạn phạm vi mô tả của [prepoSITion][GIỚI].</li>

					<li className="list-none">Chức năng: [with the HIGH-resoLUtion LENS] - [ADjective PHRASE][TÍNH CỤM] đứng sau [SUBject HEAD][CHỦ LÕI] the deVICE để mô tả đặc điểm cấu tạo nhận dạng của đối tượng này.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole">[<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>prepoSITion and emBEDded CLAUSE</strong>][<strong>GIỚI và NHÚNG CÂU</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the SPECialist [with the perSPECtive {'{that FACTS GUIDE deVELopment}'}] reSOLVED the BUG.</li>
					<li className="margin-bottom-20 list-none">Chuyên gia [với quan điểm {'{rằng thực tế dẫn dắt sự phát triển}'}] đã xử lý xong lỗi mã nguồn.</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Khối tổng thể [with the perSPECtive {'{that FACTS GUIDE deVELopment}'}] là một [prepoSITion and emBEDded CLAUSE][GIỚI và NHÚNG CÂU] bắt đầu bằng [prepoSITion][GIỚI] with bao bọc lấy các cấu trúc phụ thuộc tầng dưới tạo nên chiều sâu thông tin.</li>

					<li className="margin-bottom-20 list-none">Khối nhỏ bên trong {'{that FACTS GUIDE deVELopment}'} là một [conJUNCtional CLAUSE][LIÊN CÂU] chứa [conJUNCtion][LIÊN] that kết hợp với một cấu hình [S]-[HEAD] nội bộ đã được chia [Thời] gian.</li>

					<li className="list-none">Chức năng:</li>

					<li className="list-none">Khối tổng thể [with the perSPECtive {'{that FACTS GUIDE deVELopment}'}] đóng vai trò là [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] bổ nghĩa, mô tả đặc điểm thuộc tính cho [SUBject HEAD][CHỦ LÕI] the SPECialist.</li>

					<li className="list-none">Khối nhỏ bên trong {'{that FACTS GUIDE deVELopment}'} đóng vai trò là [deCLARative CONtent CLAUSE][THUẬT NỘI CÂU] làm nhiệm vụ đồng vị, giải thích nội dung trực tiếp cho [NOUN HEAD][DANH LÕI] perSPECtive.</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole" id="ADjective-CLAUSE">[<strong>ADjective CLAUSE</strong>][<strong>TÍNH CÂU</strong>] <strong>cấu tạo từ</strong> [<strong>RELative CLAUSE</strong>][<strong>QUAN CÂU</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the SERver adMINistrator seCURED the FILE [which conTAINS the rePORT].</li>
					<li className="margin-bottom-20 list-none">Quản trị viên máy chủ đã bảo mật tập tin [chứa báo cáo].</li>

					<li className="list-none">Hình thái: [which conTAINS the rePORT] - [RELative CLAUSE][QUAN CÂU] chứa [SUBject PRONOUN][CHỦ ĐẠI] which đóng vai trò thế cho khối định danh đứng trước, đồng thời làm nhiệm vụ làm [SUBject HEAD][CHỦ LÕI] nội bộ kết hợp liền mạch với hành động conTAINS.</li>

					<li className="list-none">Chức năng: [which conTAINS the rePORT] - [ADjective CLAUSE][TÍNH CÂU] bổ nghĩa trực tiếp để giới hạn và xác định đặc điểm rõ ràng cho [OBject HEAD][TÂN LÕI] the FILE.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole">[<strong>ADjective CLAUSE</strong>][<strong>TÍNH CÂU</strong>] <strong>cấu tạo từ</strong> [<strong>ZEro RELative CLAUSE</strong>][<strong>VÔ QUAN CÂU</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the POLicy [they IMplemented LAST MONTH] deCREASED Overhead.</li>
					<li className="margin-bottom-20 list-none">Chính sách [họ triển khai tháng trước] đã làm giảm chi phí vận hành.</li>

					<li className="list-none">Hình thái: [they IMplemented LAST MONTH] - [ZEro RELative CLAUSE][KHUYẾT QUAN CÂU] có cấu trúc [S]-[HEAD] đầy đủ nhưng đã bị chủ động lược bỏ [OBject PRONOUN][TÂN ĐẠI] which/that ở đầu khối để tăng tốc độ truyền đạt của dòng thông tin.</li>

					<li className="list-none">Chức năng: [they IMplemented LAST MONTH] - [ADjective CLAUSE][TÍNH CÂU] làm nhiệm vụ giới hạn, bổ nghĩa đặc điểm thuộc tính cho thực thể [SUBject HEAD][CHỦ LÕI] the POLicy.</li>
			
				</ul>


			<h4 className="margin-y-40">Lớp Chức Năng 3: Khối Bối Cảnh [TRẠNG]</h4>

			<p className="text-indent-whole">Khối này dùng để mở rộng không gian, [Thời] gian, mục đích, cách thức hoặc nguyên nhân cho hành động chính của câu.</p>

			<p className="margin-top-20 text-indent-whole" id="ADverb-HEAD">[<strong>ADverb HEAD</strong>][<strong>TRẠNG LÕI</strong>] <strong>cấu tạo từ</strong> [<strong>MODified ADVERB</strong>][<strong>DIỆN TRẠNG</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the seCURity PATCH proTECTS the SYStem [efFECtively].</li>
					<li className="margin-bottom-20 list-none">Bản vá bảo mật bảo vệ hệ thống [một cách hiệu quả thực tế].</li>

					<li className="list-none">Hình thái: [efFECtively] - [MODified ADVERB][DIỆN TRẠNG] hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "efFECT" mặc thêm (kết hợp) hậu tố "-ive" và "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI] có khả năng bổ nghĩa cách thức, mô hình hóa trạng thái cho hành động.</li>

					<li className="list-none">Chức năng: [efFECtively] - [ADverb HEAD][TRẠNG LÕI] bổ nghĩa bối cảnh cách thức vận hành trực tiếp cho hành động proTECTS.</li>
			
				</ul>


			<p className="margin-top-20 text-indent-whole" id="ADverb-PHRASE">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [<strong>PARTicle BARE VERB PHRASE</strong>][<strong>HẠT THUẦN NGUYÊN ĐỘNG CỤM</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the TECHnician TESTS WEEKly [to preVENT SYStem FAILures].</li>
					<li className="margin-bottom-20 list-none">Kỹ thuật viên kiểm tra hàng tuần [để ngăn ngừa sự cố hệ thống].</li>

					<li className="list-none">Hình thái: [to preVENT SYStem FAILures] - [FULL inFINitive VERB PHRASE][TOÀN NGUYÊN ĐỘNG CỤM] bắt đầu bằng một [FULL inFINitive VERB][TOÀN NGUYÊN ĐỘNG] to preVENT phối hợp với khối định danh chịu tác động phía sau.</li>

					<li className="list-none">Chức năng: [to preVENT SYStem FAILures] - [ADjunct][PHỤ] đứng cuối câu để làm rõ bối cảnh mục đích hướng tới của hành động thực thi trước đó.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [<strong>prepoSITional PHRASE</strong>][<strong>GIỚI CỤM</strong>]:</p>
			
				<ul className="list-square">
			
					<li>we dePLOYED the appliCAtion [in the CLOUD INfrastructure].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi đã triển khai ứng dụng [trong hạ tầng điện toán đám mây].</li>

					<li className="list-none">Hình thái: [in the CLOUD INfrastructure] - [prepoSITional PHRASE][GIỚI CỤM] bắt đầu bằng [prepoSITion][GIỚI] in kết hợp một khối chức năng Danh chỉ không gian để xác định phạm vi hoạt động của [prepoSITion][GIỚI].</li>

					<li className="list-none">Chức năng: [in the CLOUD INfrastructure] - [ADjunct][PHỤ] đứng cuối câu để bổ sung bối cảnh không gian vị trí nơi diễn ra toàn bộ sự việc.</li>
			
				</ul>
			

			<p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [<strong>prepoSITion and emBEDded CLAUSE</strong>][<strong>GIỚI và NHÚNG CÂU</strong>]:</p>
			
				<ul className="list-square">
			
					<li>they iNITiated the tranSITion [at the MOment {'{when the upDATe comPLEted}'}].</li>
					<li className="margin-bottom-20 list-none">Họ đã khởi động quá trình chuyển đổi [vào đúng thời điểm {'{khi bản cập nhật hoàn thành}'}].</li>

					<li className="list-none">Hình thái:</li>

					<li className="list-none">Khối tổng thể [at the MOment {'{when the upDATe comPLEted}'}] là một [prepoSITion and emBEDded CLAUSE][GIỚI và NHÚNG CÂU] bắt đầu bằng [prepoSITion][GIỚI] at ôm lấy cấu trúc phức hợp tầng dưới nhằm định vị [Thời] gian.</li>

					<li className="margin-bottom-20 list-none">Khối nhỏ bên trong {'{when the upDATe comPLEted}'} là một [conJUNCtional CLAUSE][LIÊN CÂU] chứa [conJUNCtion][LIÊN] when liên kết một câu con hoàn chỉnh có chủ vị riêng.</li>

					<li className="list-none">Chức năng:</li>

					<li className="list-none">Khối tổng thể [at the MOment {'{when the upDATe comPLEted}'}] đóng vai trò là [<strong>ADjunct</strong>][<strong>PHỤ</strong>] bổ sung bối cảnh mốc [Thời] gian cụ thể cho hành động chính iNITiated.</li>

					<li className="list-none">Khối nhỏ bên trong {'{when the upDATe comPLEted}'} đóng vai trò là [ADjective CLAUSE][TÍNH CÂU] bổ nghĩa tính chất xác định trực tiếp cho [NOUN HEAD][DANH LÕI] MOment.</li>
			
				</ul>

			
			<p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [<strong>COMplex prepoSITional PHRASE</strong>][<strong>PHỨC GIỚI CỤM</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the PROgram CRASHED [due to a MEMORy LEAK].</li>
					<li className="margin-bottom-20 list-none">Chương trình đã bị sập [vì lỗi rò rỉ bộ nhớ].</li>

					<li className="list-none">Hình thái: [due to a MEMORy LEAK] - [COMplex prepoSITional PHRASE][PHỨC GIỚI CỤM] bắt đầu bằng một [COMplex prepoSITion][PHỨC GIỚI] due to kết hợp khối định danh đi kèm phía sau để chỉ nguyên nhân khách quan.</li>

					<li className="list-none">Chức năng: [due to a MEMORy LEAK] - [ADjunct][PHỤ] mở rộng bối cảnh nguyên nhân lý do cho trạng thái sự việc CRASHED.</li>
			
				</ul>
			
					
			<p className="margin-top-20 text-indent-whole" id="ADverb-CLAUSE">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [<strong>suBORdinate CLAUSE</strong>][<strong>PHỤ CÂU</strong>]:</p>
			
				<ul className="list-square">
			
					<li>we will PAUSE deVELopment [be<strong>cause</strong> the CLIent reQUESted alteRAtions].</li>
					<li className="margin-bottom-20 list-none">Chúng tôi sẽ tạm dừng phát triển [bởi vì khách hàng yêu cầu những thay đổi].</li>

					<li className="list-none">Hình thái: [be<strong>cause</strong> the CLIent reQUESted alteRAtions] - [suBORdinate CLAUSE][PHỤ CÂU] chứa [conJUNCtion][LIÊN] be<strong>cause</strong> và một bộ khung [S]-[HEAD] hoàn chỉnh bên trong câu con được chia ở thời gian hành động quá khứ.</li>

					<li className="list-none">Chức năng: [be<strong>cause</strong> the CLIent reQUESted alteRAtions] - [ADjunct][PHỤ] bổ nghĩa cho hành động chính của bộ nguồn [SOFT MOdal][Ý THÁI] hay [asSERTive MOdal VERB][ÁP THÁI ĐỘNG] will PAUSE, mở rộng bối cảnh nguyên nhân dẫn đến quyết định dừng lại.</li>
					
			
				</ul>


			<p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [<strong>ZEro conJUNCtional CLAUSE</strong>][<strong>ẨN LIÊN CÂU</strong>]:</p>
			
				<ul className="list-square">
			
					<li>[had the WARNing TRIGgered SOONer], we would have MITigated RISKS.</li>
					<li className="margin-bottom-20 list-none">[Nếu cảnh báo kích hoạt sớm hơn], chúng tôi đã giảm thiểu được các rủi ro.</li>

					<li className="list-none">Hình thái: [had the WARNing TRIGgered SOONer] - [ZEro suBORdinate CLAUSE][KHUYẾT PHỤ CÂU] giả định đã triệt tiêu hoàn toàn [conJUNCtion][LIÊN] điều kiện bằng phương pháp đảo cấu trúc đảo khối [FInite VERB][HẠN ĐỘNG] Had lên đứng trước [SUBject HEAD][CHỦ LÕI] nội bộ the WARNing.</li>

					<li className="list-none">Chức năng: [had the WARNing TRIGgered SOONer] - [ADjunct][PHỤ] đóng vai trò cung cấp cảnh báo nền tảng giả định bối cảnh điều kiện tiên quyết cho hệ quả của câu lớn phía sau.</li>
					
			
				</ul>

			
			{/* 7.  */}

			<h3 className="margin-y-50 text-center" id="PARaphrasing">7. Ứng Dụng Đỉnh Cao: Paraphrasing Bằng Tư Duy "Thay Khối Đồng Chức Năng"</h3>

			<p>Bản chất của viết lại câu chỉ đơn giản là một bài toán giữ nguyên bộ khung cấu trúc tổng thể, chỉ nhấc một khối [Lego] ra và đặt vào đó một khối [Lego] khác có kích thước hoặc hình thái khác nhưng mang cùng một màu Chức năng.</p>


			<h4 className="margin-y-40">Hướng 1: Tăng giảm kích thước (Từ cấp độ [HEAD][LÕI] lên cấp độ [CLAUSE][CÂU])</h4>
					
			<p className="margin-top-20 text-indent-whole"><strong>Khối bối cảnh</strong> [<strong>TRẠNG</strong>] <strong>ở cấp độ</strong> [<strong>HEAD</strong>][<strong>LÕI</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the PLATform upDATed [SEAMlessly].</li>
					<li className="margin-bottom-20 list-none">Nền tảng đã cập nhật [một cách mượt mà không gián đoạn].</li>
			
					<li className="list-none">Hình thái: [SEAMlessly] - [MODified ADVERB][DIỆN TRẠNG] hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "SEAM" mặc thêm (kết hợp) hậu tố "-less" và "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI] có vai trò chỉ trạng thái hoàn hảo, không có vết nối.</li>

					<li className="list-none">Chức năng: [SEAMlessly] - [ADverb HEAD][TRẠNG LÕI] bổ nghĩa bối cảnh cách thức vận hành trực tiếp cho hành động upDATed.</li>
			
				</ul>
			
			
			<h5 className="margin-y-30 text-indent-whole">Nâng cấp lên cấp độ [CLAUSE][CÂU]</h5>
			
			<p className="margin-top-20 text-indent-whole"><strong>Giữ nguyên màu</strong> [<strong>TRẠNG</strong>]:</p>
			
				<ul className="list-square">
			
					<li>the PLATform upDATed [as <strong>soon</strong> as the CODE PATCH WENT LIVE].</li>
					<li className="margin-bottom-20 list-none">Nền tảng đã cập nhật [ngay khi bản vá mã nguồn được kích hoạt trực tuyến].</li>
			
					<li className="list-none">Hình thái: [as <strong>soon</strong> as the CODE PATCH WENT LIVE] - [Phức Liên Câu][Complex Conjunctional Clause] cấp độ [CLAUSE][CÂU], chứa [Phức LIÊN][Complex conJUNCtion] as <strong>soon</strong> as kết hợp với một bộ cấu trúc [S]-[HEAD] hoàn chỉnh bên trong để mô tả một mốc sự kiện kích hoạt tức thời.</li>

					<li className="list-none">Chức năng: [as <strong>soon</strong> as the CODE PATCH WENT LIVE] - [ADjunct][PHỤ] thay thế vị trí của [ADverb HEAD][TRẠNG LÕI] cũ, mở rộng quy mô thông tin thành bối cảnh [Thời] gian cho hành động chính updated nhưng vẫn giữ nguyên màu sắc chức năng cung cấp bối cảnh.</li>
			
				</ul>
			
			

			<h4 className="margin-y-40">Hướng 2: Thay đổi cấu trúc bao gói (Giữ nguyên vị trí khung, thay đổi hình thái dữ liệu)</h4>
					
			<p className="text-indent-whole"><strong>Sử dụng khối</strong> [<strong>VERB PHRASE</strong>][<strong>ĐỘNG CỤM</strong>] <strong>đóng vai trò</strong> [<strong>DANH</strong>]:</p>
			
				<ul className="list-square">
			
					<li>diRECtors apPROVE [inCREAsing the BUDget].</li>
					<li className="margin-bottom-20 list-none">Các giám đốc phê duyệt [việc tăng ngân sách].</li>
			
					<li className="list-none">Hình thái: [inCREAsing the BUDget] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] bắt từ [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] inCREAsing mang tính chất chuyển động kéo dài có đối tượng đi kèm.</li>

					<li className="list-none">Chức năng: [inCREAsing the BUDget] - [OBject PHRASE][TÂN CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM] đóng vai trò làm phần [OBject][TÂN], chịu tác động trực tiếp đứng sau hành động điều khiển apPROVE.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Biến đổi sang khối</strong> [<strong>deCLARative CONtent CLAUSE</strong>][<strong>THUẬT NỘI CÂU</strong>] <strong>đóng vai trò</strong> [<strong>OBject</strong>][<strong>TÂN</strong>]:</p>
			
				<ul className="list-square">
			
					<li>diRECtors apPROVE [that the dePARTment inCREASes the BUDget].</li>
					<li className="margin-bottom-20 list-none">Các giám đốc phê duyệt [rằng phòng ban sẽ tăng ngân sách].</li>
			
					<li className="list-none">Hình thái: [that the dePARTment inCREASes the BUDget] - [deCLARative CONtent CLAUSE][THUẬT NỘI CÂU] bắt đầu bằng [conJUNCtion][LIÊN] that bao bọc lấy một kết cấu câu hoàn chỉnh có chủ vị phân định rõ ràng.</li>
					
					<li className="list-none">Chức năng: [that the dePARTment inCREASes the BUDget] - [OBject CLAUSE][TÂN CÂU] giữ nguyên vị trí chức năng [OBject][TÂN] đứng sau apPROVE nhưng cấu trúc hình thái được bung mở thành một câu con đầy đủ cấu trúc [S]-[HEAD] bên trong để chi tiết hóa thông tin.</li>
			
				</ul>
			

			{/* 8.  */}

			<h3 className="margin-y-50 text-center">8. Tuyệt Chiêu "Đảo Khối": Phủ Định & Nghi Vấn Trong 1 Nốt Nhạc</h3>

			<p>Khi đã coi câu là các khối [Lego], việc chuyển sang phủ định hay câu hỏi trở nên cực kỳ trực quan nhờ cơ chế vận hành của hạt nhân bộ nguồn. Bạn không cần nhớ công thức mới, chỉ cần thực hiện thao tác tách và dịch chuyển các khối cấu thành từ [HEAD].</p>


			<h5 className="margin-y-30">Luật Phủ định: Chốt chặn "NOT" sau dòng [Thời] gian đầu tiên</h5>
			
			<p className="text-indent-whole">Khi thêm phủ định, bộ nguồn tự động thực hiện cấu hình tách: Trợ nguồn [Thời] gian/Khối [Thái] từ đứng trước và [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] đi kèm phía sau. Bạn chỉ việc nhét khối NOT vào ngay sau thành phần mang dòng [Thời] gian đầu tiên.</p>
			
				<ul className="list-square">
			
					<li>Khẳng định: he will OPtimize the ALgorithm.</li>

					<li>Phủ định: he will NOT OPtimize the ALgorithm.</li>
			
				</ul>


			<h5 className="margin-y-30">Luật Nghi vấn: Nhấc dòng [Thời] gian lên đầu câu lớn</h5>

			<p className="text-indent-whole">Khi chuyển sang câu hỏi, bạn chỉ cần tách khối và nhấc riêng thành phần trợ nguồn [Thời] gian/khối [Thái] từ đứng trước (như [FInite VERB][HẠN ĐỘNG] / [SOFT MOdal VERB][Ý THÁI ĐỘNG] / [asSERTive MOdal VERB][ÁP THÁI ĐỘNG]) đặt ra trước [SUBject HEAD][CHỦ LÕI], để lại phần hành động cốt lõi ở phía sau.</p>
			
				<ul className="list-square">
			
					<li>Khẳng định: you are dePLOYing the upGRADE.</li>

					<li>Nghi vấn: are you dePLOYing the upGRADE?</li>
			
				</ul>
			

			<h4 className="margin-y-40">Bí mật của "Head Tàng Hình" (Tích hợp ngầm)</h4>
					
			<p className="text-indent-whole">Trong câu khẳng định của một số câu đơn giản, các [FInite VERB][HẠN ĐỘNG] đơn lẻ (do/does/did) mang đặc tính ẩn trong khối [Thời-Thuần] để đóng gói thành một từ duy nhất (ví dụ: bối cảnh quá khứ kết hợp với hành động test tạo thành tested).</p>
			
			<p className="text-indent-whole">Nhưng trong câu phủ định hoặc Nghi vấn, bộ khung này bắt buộc phải thực hiện thao tác tách khối để lộ diện rõ ràng cấu hình: [HEAD] gồm [FInite VERB][HẠN ĐỘNG] + [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG]:</p>
			
				<ul className="list-square">
			
					<li>Khẳng định (Ẩn trong khối [Thời-Thuần]):</li>
					<li className="list-none">i reVIEWED the LOGS.</li>
					<li className="margin-bottom-20 list-none">Bản chất gốc chứa năng lượng của "did reVIEW"</li>
			
					<li>Phủ định (Tách lộ [auXILiary VERB][TRỢ ĐỘNG] và bổ sung NOT):</li>
					<li className="margin-bottom-20 list-none">i did NOT reVIEW the LOGS.</li>
			
					<li>Nghi vấn (Tách lộ và nhấc [auXILiary VERB][TRỢ ĐỘNG] lên đầu):</li>
					<li className="list-none">did i reVIEW the LOGS??</li>
			
				</ul>
		
			
			<p className="margin-top-40">Nhìn nhận ngôn ngữ như một hệ thống lắp ráp cơ học, phân tách rõ ràng giữa Hình thái vật lý và Chức năng vị trí sẽ giúp bạn làm chủ cấu trúc này một cách tự nhiên nhất.</p>

			<p className="margin-top-20">Hãy ngừng học thuộc lòng vẹt các loại [Thời] gian máy móc, bật bộ nguồn [HEAD] lên và bắt đầu lắp ráp câu của riêng bạn ngay hôm nay!</p>
			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 27, 2026 · by 💎GEM and 🐝Mr. Bee Osn ·</span>
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