import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function creATE(): React.JSX.Element {

  const postId = "creATE";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#verbs-functions-terms"><mark className="highlight-tertiary-padding-4-8">VERBS: FUNCtions</mark></HashLink></h4>
      
            
      <h1 className="margin-y-50 text-center">[creATE]</h1>
      

      <div className="example">
              
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#NOUN-PHRASE-as-SUBject">NOUN PHRASE as SUBject</HashLink>
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
            <HashLink smooth to="#non-FInite-CLAUSE-as-SUBject-2">non-FInite CLAUSE as SUBject 2</HashLink>&nbsp;/&nbsp;
            <HashLink smooth to="#non-FInite-CLAUsal-COMplement">non-FInite CLAUsal COMplement</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#non-FInite-CLAUSE-as-SUBject-3">non-FInite CLAUSE as SUBject 3</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADjunct-2">ADjunct 2</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#FInite-CLAUsal-SUBject">FInite CLAUsal SUBject</HashLink>&nbsp;/&nbsp;
            <HashLink smooth to="#FInite-CLAUsal-COMplement">FInite CLAUsal COMplement</HashLink>
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


      {/* This is the content of Vocabulary Term. */}

      <h4 className="margin-bottom-30 text-center">BẢN THIẾT KẾ MÃ NGUỒN VÀ HỆ THỐNG VẬN HÀNH</h4>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20">[creATE] is a [VERB LEXeme] that means to bring something into existence, or to cause something to happen.</p>

          <p>[creATE] là một [VERB LEXEME][ĐỘNG VỊ] có nghĩa là tạo ra, sáng tạo, hoặc làm cho một điều gì đó xuất hiện.</p>

          <p className="margin-top-20">Phát âm: [creATE][crē ĀTE] /kriːˈeɪt/</p>

            <ul className="list-square">
          
              <li>the TEAM should [creATE] a NEW MARketing STRATegy imMEdiately.</li>
              <li className="margin-bottom-20 list-none">Đội ngũ nên [tạo ra] một chiến lược tiếp thị mới ngay lập tức.</li>

              <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [creATE] - [PLAIN FORM][GIẢN DẠNG] hình thành từ khối [VERB LEXEME][ĐỘNG VỊ] nguyên bản "create" đứng sau chịu tác động từ [PREterite MOdal auXILiary VERB][KHỨ THÁI TRỢ ĐỘNG] "should" để thực thi hành động hướng tới đối tượng tiếp nhận trực tiếp "a NEW MARketing STRATegy".</li>
          
            </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>



      {/* =============================
            
      ============================= */}


      {/* 1.  */}

			<h3 className="margin-y-50 text-center">HỆ THỐNG [PHÂN LOẠI HẠT NHÂN ĐỘNG][VERB CATegories]</h3>

      <h4 className="margin-y-40">a. Phân hệ [PREDicator HEAD][VỊ LÕI]</h4>
      
        <ol>
      
          <li value="1">[<strong>VERB LEXEME</strong>][<strong>ĐỘNG VỊ</strong>]: cREATE</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng [VERB LEXEME][ĐỘNG VỊ] nguyên bản chưa qua xử lý gộp hay biến hóa cấu trúc hình thái vật lý.</li>

          <li value="2">[<strong>infiniTIval MARKer</strong>][<strong>NGUYÊN DẤU</strong>]: to</li>
					<li className="margin-bottom-20 list-none">[infiniTIval MARKer][NGUYÊN DẤU] "to" đơn lẻ đóng vai trò mã định vị độc lập làm điểm tựa khởi động, đặt nền móng trực tiếp trước hành động để kích hoạt trạng thái nguyên bản hoặc định hướng tác động đến đối tượng. Ví dụ: • Sentence A (Marked): You ought <strong>to</strong> leave. • Sentence B (Unmarked): You should leave.</li>

					<li className="list-none">[<strong>InfiniTIval suBORdinator</strong>][<strong>NGUYÊN HẠ</strong>]: to</li>
					<li className="margin-bottom-20 list-none">"to" nằm ở đầu [CLAUSE][ĐIỀU], được xem như một công cụ ngữ pháp cấu trúc cho phép và giới thiệu một [CLAUSE][ĐIỀU]. Ví dụ: • it is esSENtial [<strong>to</strong> mainTAIN neuTRALity]. • they deCIded [<strong>to</strong> deLAY the dePARTure]. • she LEFT EARly in <strong>or</strong>der [<strong>to</strong> CATCH the TRAIN].</li>
					
					<li className="list-none">[<strong>TRANsitive PrepoSITion</strong>][<strong>NGOẠI GIỚI</strong>]: to</li>
					<li className="margin-bottom-20 list-none">"to" đi kèm với [NOUN PHRASE as COMplement][DANH CỤM làm BỔ] cho [prepoSITion][GIỚI] "to". Ví dụ: he WALKED <strong>to</strong> SCHOOL. • she LOOKED <strong>at</strong> the PICture.</li>
					
					<li className="list-none">[<strong>InTRANsitive PrepoSITion</strong>][<strong>NỘI GIỚI</strong>] (Particles): OUT, IN, WITH, BACK</li>
					<li className="margin-bottom-20 list-none">Các [InTRANsitive PrepoSITion][NỘI GIỚI] như OUT, IN, UP, BACK đơn lẻ đứng sau hành động để mở rộng hướng di chuyển, phạm vi tác động, cường độ hoặc trạng thái tiếp diễn/kết thúc của hạt nhân vận hành đó. Ví dụ: turN <strong>OFF</strong> the LIGHT. / he saT <strong>DOWN</strong>.</li>

          <li value="3">[<strong>non-MOdal auXILiary VERB</strong>][<strong>PHI-THÁI TRỢ ĐỘNG</strong>]: does, did, is, has, was, am, are</li>
          <li className="margin-bottom-20 list-none">Hành động đơn lẻ xuất hiện để mang năng lượng [Thời] gian / [Thời] trong câu.</li>

          <li value="4" className="margin-bottom-20">[<strong>MOdal auXILiary VERB</strong>][<strong>THÁI TRỢ ĐỘNG</strong>]:</li>
      
          <li className="list-none">[<strong>PREterite MOdal auXILiary VERB</strong>][<strong>KHỨ THÁI TRỢ ĐỘNG</strong>]: would, could, should, might</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ mang tính [Ý] nhị, có [Ý] tư, mong muốn là thật nhưng cách nói nhường nhịn và triệt tiêu tính ép. Các khối phức đặc biệt "ought to" và "had BETter" được quét như một [COMplex SOFT MOdal VERB][PHỨC Ý THÁI ĐỘNG] thống nhất.</li>

          <li className="list-none">[<strong>PREsent MOdal auXILiary VERB</strong>][<strong>HIỆN THÁI TRỢ ĐỘNG</strong>]: will, shall, can, must, may</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ mang tính trực diện, [Áp] đặt thực tế xuống, không chừa lối thoát cho người nghe. Khối phức đặc biệt "have to" được quét như một [COMplex asSERTive MOdal VERB][PHỨC ÁP THÁI ĐỘNG] thống nhất.</li>

          <li value="5" className="margin-bottom-20">[<strong>non-FInite FORMS</strong>][<strong>CHƯA-CHIA DẠNG</strong>]: HAVing NO TENSE or NO SUBject</li>

          <li className="list-none">[<strong>PLAIN FORM</strong>][<strong>GIẢN DẠNG</strong>]: cREATE</li>
          <li className="margin-bottom-20 list-none">Hành động [Thuần] khiết đứng tự do một mình, hoàn toàn giải phóng và không có "to" đi kèm, thường đứng ngay sau:</li>

          <li className="list-none">• [<strong>infiniTIval MARKer</strong>][<strong>NGUYÊN DẤU</strong>]: to</li>
          <li className="list-none">• [<strong>PREterite MOdal auXILiary VERB</strong>][<strong>KHỨ THÁI TRỢ ĐỘNG</strong>]: would, could, should, might</li>
          <li className="list-none">• [<strong>PREsent MOdal auXILiary VERB</strong>][<strong>HIỆN THÁI TRỢ ĐỘNG</strong>]: will, shall, can, must, may</li>
          <li className="list-none">• Nhóm VERB Sai Khiến / Cho Phép: MAKE, LET, let's, HAVE</li>
          <li className="list-none">• Nhóm VERB Hỗ Trợ / Tương Tác: HELP, GET (khi ở dạng đặc biệt)</li>
          <li className="margin-bottom-20 list-none">• Nhóm VERB Tri Giác / Cảm Nhận: SEE, HEAR, WATCH, FEEL, NOtice, obSERVE, SMELL</li>
      
          <li className="list-none">[<strong>to-infiniTIval</strong>][<strong>TO-NGUYÊN</strong>]: to cREATE</li>
          <li className="margin-bottom-20 list-none">Sự tích hợp thẳng hàng giữa điểm tựa khởi động và cấu trúc hành động [Thuần] khiết đứng độc lập phía sau.</li>

          <li className="list-none">[<strong>GERund-PARTiciple FORM</strong>][<strong>DANH-TÍNH DẠNG</strong>]: creATing</li>
          <li className="margin-bottom-20 list-none">Hành động mang đuôi -ing thể hiện tính chất đang [Tiếp] diễn, kéo dài.</li>

          <li className="list-none">[<strong>PAST PARTiciple FORM</strong>][<strong>KHỨ TÍNH DẠNG</strong>]: creATed, been</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng cột 3 hoặc thêm đuôi -ed thể hiện tính chất đã trọn vẹn, [Hoàn] thành.</li>

          <li value="6" className="margin-bottom-20">[<strong>FInite FORMS</strong>][<strong>CHIA DẠNG</strong>]: HAVing TENSE or SUBject</li>

          <li className="list-none">[<strong>PLAIN PRESent FORM</strong>][<strong>GIẢN HIỆN DẠNG</strong>]: cREATE</li>
          <li className="margin-bottom-20 list-none">Hành động hiện tại dạng nền tảng cho các ngôi còn lại. Đây là hình thái phôi thô khi đưa vào câu để gánh thời hiện tại, phân biệt hoàn toàn với [GỐC ĐỘNG] nằm trong từ điển. Ví dụ: they cREATE.</li>
          
          <li className="list-none">[<strong>3RD SINGular PRESent FORM</strong>][<strong>3RD ÍT HIỆN DẠNG</strong>]: creATEs, is</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] hiện tại và hành động [Thuần] khiết hòa tan, gộp chung hoàn toàn vào trong cùng một chữ đơn duy nhất.</li>

          <li className="list-none">[<strong>PRETerite FORM</strong>][<strong>KHỨ DẠNG</strong>]: creATed</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] quá khứ và hành động [Thuần] khiết hòa tan, gộp chung hoàn toàn vào trong cùng một chữ đơn duy nhất.</li>
      
          <li className="list-none">[<strong>PREDicator</strong>][<strong>VỊ</strong>]: is creATing, was creATing</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa hành động mang [Thời] gian và hành động mang tính chất đang [Tiếp] diễn.</li>

          <li className="list-none">[<strong>PREDicator</strong>][<strong>VỊ</strong>]: has creATED, had creATED</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa hành động mang [Thời] gian và hành động mang tính chất đã trọn vẹn, [Hoàn] thành.</li>
      
          <li className="list-none">[<strong>PREDicator</strong>][<strong>VỊ</strong>]: has been creATing, had been creATing</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa ba lớp năng lượng [Thời] gian, tính chất đã trọn vẹn, [Hoàn] thành và tính chất đang [Tiếp] diễn.</li>

          <li className="list-none">[<strong>PREDicator</strong>][<strong>VỊ</strong>]: would creATE, could creATE, should creATE</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Ý] nhị, không ép và hành động [Thuần] khiết.</li>
      
          <li className="list-none">[<strong>PREDicator</strong>][<strong>VỊ</strong>]: will creATE, can creATE</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Áp] đặt thực tế và hành động [Thuần] khiết.</li>

          <li className="list-none">[<strong>PREDicator</strong>][<strong>VỊ</strong>]: DID creATE, DOES creATE</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] gian và hành động [Thuần] khiết song hành, được tách riêng biệt bằng một khoảng trắng trong câu.</li>
      
        </ol>
      
      

      <h4 className="margin-y-40">b. Phân hệ [CLAUSE][ĐIỀU]</h4>
          
      <p className="text-indent-whole"><strong>QUY TẮC CỐT LÕI</strong>:</p>

      <p className="text-indent-whole">Khi bất kỳ họ [PREDicator HEAD][VỊ LÕI] nào thuộc hệ thống 16 mục trên kéo theo thành phần bổ trợ phía sau (như [COMplement][BỔ], [non-FInite CLAUSE as CATenative COMplement][CHƯA-CHIA ĐIỀU làm CHUỖI BỔ], [FInite CLAUSE as COMplement][BỊ-CHIA ĐIỀU làm BỔ], [ADverb HEAD][TRẠNG LÕI], hoặc [ADjunct][PHỤ]), toàn bộ cấu trúc đó sẽ ngay lập tức được dán nhãn và nâng cấp thành dạng [PHRASE][CỤM] tương ứng của chính nó.</p>
      


      {/* 1.  */}

			<h3 className="margin-y-50 text-center">PHẦN 1: HỆ THỐNG CÁC VÍ DỤ PHÂN HỆ MÃ TIẾNG ANH MỚI</h3>

      
      <h4 className="margin-y-40">1. Phân hệ [PREDicator HEAD][VỊ LÕI]</h4>
          
      <p className="margin-top-20 text-indent-whole" id="NOUN-PHRASE-as-SUBject"><strong>1.1</strong> <strong>Hình thành chức năng</strong> [<strong>NOUN PHRASE as SUBject</strong>][<strong>DANH CỤM làm CHỦ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 1: [creAtion] \crē Ā tion\ /kriːˈeɪʃn/</p>
      
        <ul className="list-square">
      
          <li>[the arTIStic creAtion from the LOcal deSIGner] imPRESSED the AUdience.</li>
          <li className="margin-bottom-20 list-none">[Tác phẩm sáng tạo từ nhà thiết kế địa phương] đã làm ấn tượng khán giả.</li>
          
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [the arTIStic creAtion from the LOcal deSIGner] - [NOUN PHRASE as SUBject][DANH CỤM làm CHỦ] của [SENtence][CÂU] đảm nhận nhiệm vụ làm thành phần định danh nền tảng đứng đầu câu, kích hoạt và cung cấp năng lượng cho bộ nguồn [PRETerite FORM][KHỨ DẠNG] "imPRESSED".</li>
    
          <li className="list-none margin-bottom-10"><strong>Khối giữa</strong> (<strong>Trước</strong>): [arTIStic] - [ADjective as pre-MODdifier][TÍNH làm TIỀN-CHỈNH] của [HEAD NOUN][LÕI DANH] "creAtion".</li>

					<li className="list-none margin-bottom-10"><strong>Khối giữa</strong> (<strong>Sau</strong>): [from the LOcal deSIGner] - [prepoSITion PHRASE as post-MODifier][GIỚI CỤM làm HẬU-CHỈNH] của [HEAD NOUN][LÕI DANH] "creAtion".</li>
          
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [the LOcal deSIGner] - [NOUN PHRASE as COMplement][DANH CỤM làm BỔ] của [prepoSITion][GIỚI] "from".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole" id="ADjective-HEAD"><strong>1.2</strong> <strong>Hình thành chức năng</strong> [<strong>ADjective HEAD</strong>][<strong>TÍNH LÕI</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 2: [creAtive] \crē Ā tive\ /kriːˈeɪtɪv/</p>
      
        <ul className="list-square">
      
          <li><strong>ever</strong>y PROduct deSIGN dePARTment reQUIres [a {'{creAtive}'} TEAM].</li>
          <li className="margin-bottom-20 list-none">Mỗi bộ phận thiết kế sản phẩm đều yêu cầu [một đội ngũ {'{có tính sáng tạo}'}].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: {'{creAtive}'} - {'{MODified ADjective}'}{'{ĐỊNH TÍNH}'} hình thành từ khối [VERB LEXEME][ĐỘNG VỊ] nguyên bản "creATE" kết hợp biến đổi đuôi và hậu tố "-ive" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI] có khả năng [ADjective][TÍNH] mô tả tính chất đặc điểm. [ADjective HEAD][TÍNH LÕI] kích hoạt bộ quét đặt ngay trước đối tượng [MODifier HEAD][ĐỊNH LÕI] "TEAM" để hiển thị đặc điểm của đối tượng đó.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [a {'{creAtive}'} TEAM] - [non-FInite CLAUSE as CATenative COMplement][CHƯA-CHIA ĐIỀU làm CHUỖI BỔ].</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole" id="ADjunct-1"><strong>1.3</strong> <strong>Hình thành chức năng</strong> [<strong>ADverb HEAD</strong>][<strong>TRẠNG LÕI</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 3: [creAtively] \crē Ā tive ly\ /kriːˈeɪtɪvli/</p>
      
        <ul className="list-square">
      
          <li>the ARtist SOLVED the PROBlem [{'{creAtively}'} {'{during the PROject}'}].</li>
          <li className="margin-bottom-20 list-none">Nghệ sĩ đã giải quyết vấn đề [{'{một cách sáng tạo}'} {'{trong suốt dự án}'}].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: {'{creAtively}'} - {'{MODified ADVERB}'}{'{ĐỊNH TRẠNG}'} hình thành từ khối [VERB LEXEME][ĐỘNG VỊ] nguyên bản "creATE" qua biến thể mô tả đặc điểm và thêm hậu tố "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI] có khả năng bổ trợ bối cảnh phương thức.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [{'{creAtively}'} {'{during the PROject}'}] - [ADjunct 1][PHỤ 1] và [ADjunct 2][PHỤ 2] làm thành phần bổ nghĩa cho hành động [PRETerite FORM][KHỨ DẠNG] "SOLVED" để xác định cách thức diễn ra.</li>
      
        </ul>


      <h4 className="margin-y-40">2. Phân hệ [CLAUSE][ĐIỀU]</h4>

      <p className="margin-top-20 text-indent-whole"><strong>2.1</strong> <strong>Hình thành chức năng</strong> [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>]</p>

      <p className="margin-top-20 text-indent-whole" id="non-FInite-CLAUSE-as-SUBject-2">[<strong>non-FInite CLAUSE as SUBject</strong>][<strong>CHƯA-CHIA ĐIỀU làm CHỦ</strong>] <strong>cấu tạo từ</strong> [<strong>GERund-PARTiciple CLAUSE</strong>][<strong>DANH-TÍNH ĐIỀU</strong>] <strong>làm</strong> [<strong>SUBject</strong>][<strong>CHỦ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4a:</p>
      
        <ul className="list-square">
      
          <li>[CreAting MODern DIGital soLUtions] reQUIres DEEP TECHnical KNOWledge.</li>
          <li className="margin-bottom-20 list-none">[Việc tạo ra các giải pháp kỹ thuật số hiện đại] đòi hỏi kiến thức kỹ thuật sâu rộng.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [CreAting MODern DIGital soLUtions] - [GERund-PARTiciple CLAUSE][DANH-TÍNH ĐIỀU] phát triển từ [GERund-PARTiciple FORM][DANH-TÍNH DẠNG] "CreAting" tích hợp thêm vùng dữ liệu mở rộng phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [CreAting MODern DIGital soLUtions] - [non-FInite CLAUSE as SUBject][CHƯA-CHIA ĐIỀU] được hình thành từ [NOUN PHRASE][DANH CỤM] đứng trước hành động [THIRD-PERson SINGular VERB PHRASE ][NGÔI 3 S ĐỘNG CỤM] "reQUIres DEEP TECHnical KNOWledge" để làm [SUBject][CHỦ] quản lý một đầu việc lớn ở đầu câu.</li>
      
        </ul>

  

      <p className="margin-top-20 text-indent-whole" id="non-FInite-CLAUsal-COMplement">[<strong>non-FInite CLAUSE as COMplement</strong>][<strong>CHƯA-CHIA ĐIỀU làm BỔ</strong>] <strong>cấu tạo từ</strong> [<strong>GERund-PARTiciple CLAUSE</strong>][<strong>DANH-TÍNH ĐIỀU</strong>] <strong>làm</strong> [<strong>COMplement</strong>][<strong>BỔ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4b:</p>
      
        <ul className="list-square">
      
          <li>the STARtup TEAM priORitized [creAting enGAging User CONtent].</li>
          <li className="margin-bottom-20 list-none">Đội ngũ khởi nghiệp đã ưu tiên [việc tạo ra nội dung thu hút người dùng].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [creAting enGAging User CONtent] - [GERund-PARTiciple CLAUSE][DANH-TÍNH ĐIỀU] hình thành từ [GERund-PARTiciple FORM][DANH-TÍNH DẠNG] "creAting" tích hợp thêm vùng dữ liệu mở rộng phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [creAting enGAging User CONtent] - [non-FInite CLAUSE as CATenative COMplement][CHƯA-CHIA ĐIỀU làm CHUỖI BỔ] được hình thành từ [NOUN PHRASE][DANH CỤM] tiếp nhận trực tiếp mục tiêu của hành động [PRETerite FORM][KHỨ DẠNG] "priORitized".</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">[<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>to-infiniTIval CLAUSE</strong>][<strong>TO-NGUYÊN ĐIỀU</strong>] <strong>làm</strong> [<strong>non-FInite CLAUSE as SUBject</strong>][<strong>CHƯA-CHIA ĐIỀU làm CHỦ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4c:</p>
      
        <ul className="list-square">
      
          <li>[To creATE susTAINable ENergy SYStems] is the founDAtion's MAIN GOAL.</li>
          <li className="margin-bottom-20 list-none">[Việc tạo ra các hệ thống năng lượng bền vững] là mục tiêu chính của quỹ.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [To creATE susTAINable ENergy SYStems] - [to-infiniTIval CLAUSE][TO-NGUYÊN ĐIỀU] phát triển từ cụm [to-infiniTIval][TO-NGUYÊN] "to creATE" tích hợp thêm vùng dữ liệu mở rộng phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [To creATE susTAINable ENergy SYStems] - [non-FInite CLAUSE as SUBject][CHƯA-CHIA ĐIỀU] được hình thành từ [NOUN PHRASE][DANH CỤM] đứng trước hành động [PRETerite FORM][KHỨ DẠNG] "is" để định danh đầu việc làm chủ thể đầu câu.</li>
      
        </ul>

  
      <p className="margin-top-20 text-indent-whole">[<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>to-infiniTIval CLAUSE</strong>][<strong>TO-NGUYÊN ĐIỀU</strong>] <strong>làm</strong> [<strong>non-FInite CLAUSE as COMplement</strong>][<strong>CHƯA-CHIA ĐIỀU làm BỔ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4d:</p>
      
        <ul className="list-square">
      
          <li>the COMpany AIMS [to creATE INnovative PROducts for conSUmers].</li>
          <li className="margin-bottom-20 list-none">Công ty hướng tới [việc tạo ra các sản phẩm đổi mới cho người tiêu dùng].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [to creATE INnovative PROducts for conSUmers] - [to-infiniTIval CLAUSE][TO-NGUYÊN ĐIỀU] phát triển từ cụm [to-infiniTIval][TO-NGUYÊN] "to creATE" tích hợp thêm vùng dữ liệu mở rộng phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [to creATE INnovative PROducts for conSUmers] - [non-FInite CLAUSE as CATenative COMplement][CHƯA-CHIA ĐIỀU làm CHUỖI BỔ] được hình thành từ [NOUN PHRASE][DANH CỤM] tiếp nhận trực tiếp mục tiêu tác động cho hành động [3RD SINGular PRESent FORM][3RD ÍT HIỆN DẠNG] "AIMS".</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole">[<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>to-infiniTIval CLAUSE</strong>][<strong>TO-NGUYÊN ĐIỀU</strong>] <strong>làm</strong> [<strong>non-FInite CLAUSE as SUBject</strong>][<strong>CHƯA-CHIA ĐIỀU làm CHỦ</strong>] <strong>bổ nghĩa</strong> [<strong>DUMmy PROnoun</strong>][<strong>GIẢ ĐẠI</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4e:</p>
      
        <ul className="list-square">
      
          <li>[it] is esSENtial [to creATE STRONG seCUrity PROtocols].</li>
          <li className="margin-bottom-20 list-none">Điều thiết yếu là [việc tạo ra các giao thức bảo mật mạnh mẽ].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [to creATE STRONG seCUrity PROtocols] - [to-infiniTIval CLAUSE][TO-NGUYÊN ĐIỀU] phát triển từ cụm [to-infiniTIval][TO-NGUYÊN] "to creATE" tích hợp thêm vùng dữ liệu mở rộng phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [to creATE STRONG seCUrity PROtocols] - [non-FInite CLAUSE as SUBject][CHƯA-CHIA ĐIỀU] được hình thành từ [NOUN PHRASE][DANH CỤM] đảm nhận vai trò làm [SUBject][CHỦ] bổ nghĩa cho [DUMmy PROnoun][GIẢ ĐẠI] "it" trong cấu trúc [THIRD-PERson SINGular VERB PHRASE ][NGÔI 3 S ĐỘNG CỤM] "is esSENtial".</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole" id="non-FInite-CLAUSE-as-SUBject-3"><strong>2.2</strong> <strong>Hình thành chức năng</strong> [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>]</p>

      
      <p className="margin-top-20 text-indent-whole">[<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>GERund-PARTiciple CLAUSE</strong>][<strong>DANH-TÍNH ĐIỀU</strong>] <strong>đang diễn ra</strong>, <strong>chủ động</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5a:</p>
      
        <ul className="list-square">
      
          <li>the engiNEER [creAting the CORE SOFTware] FOUND an efFIcient MEthod.</li>
          <li className="margin-bottom-20 list-none">Kỹ sư [đang tạo ra phần mềm cốt lõi] đã tìm ra một phương pháp hiệu quả.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [creAting the CORE SOFTware] - [GERund-PARTiciple CLAUSE][DANH-TÍNH ĐIỀU] phát triển từ [GERund-PARTiciple FORM][DANH-TÍNH DẠNG] "creAting" tích hợp thêm vùng dữ liệu mở rộng biểu thị tính chủ động đang xảy ra.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [creAting the CORE SOFTware] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng [SUBject HEAD][CHỦ LÕI] "engiNEER" để hiển thị đặc điểm và bổ nghĩa cho đối tượng đó.</li>
      
        </ul>
      
    

      <p className="margin-top-20 text-indent-whole">[<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>to-infiniTIval CLAUSE</strong>][<strong>TO-NGUYÊN ĐIỀU</strong>] <strong>sắp xảy ra</strong>, <strong>chủ động</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5b:</p>
      
        <ul className="list-square">
      
          <li>the ARchitect [to creATE the BUILDing BLUEprints] has been apPOINted.</li>
          <li className="margin-bottom-20 list-none">Kiến trúc sư [sắp sửa tạo ra bản thiết kế tòa nhà] đã được bổ nhiệm.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [to creATE the BUILDing BLUEprints] - [to-infiniTIval CLAUSE][TO-NGUYÊN ĐIỀU] phát triển từ cụm [to-infiniTIval][TO-NGUYÊN] "to creATE" tích hợp thêm vùng dữ liệu mở rộng phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [to creATE the BUILDing BLUEprints] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng [SUBject HEAD][CHỦ LÕI] "ARchitect" để quét và hiển thị đặc điểm sắp xảy ra mang tính chủ động của đối tượng đó.</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole">[<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>to-infiniTIval CLAUSE</strong>][<strong>TO-NGUYÊN ĐIỀU</strong>] <strong>sắp xảy ra</strong>, <strong>bị động</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5c:</p>
      
        <ul className="list-square">
      
          <li>the ARTwork [to be creAted by the MASter] will be exHIBited toMORrow.</li>
          <li className="margin-bottom-20 list-none">Tác phẩm nghệ thuật [sắp sửa được tạo ra bởi bậc thầy] sẽ được triển lãm vào ngày mai.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [to be creAted by the MASter] - [to-infiniTIval CLAUSE][TO-NGUYÊN ĐIỀU] bắt đầu bằng [infiniTIval MARKer][NGUYÊN DẤU] "to" kéo theo vùng bổ trợ phía sau chứa [PLAIN FORM][GIẢN DẠNG] "be" và [PAST PARTiciple FORM][KHỨ TÍNH DẠNG] "creAted" để biểu thị trạng thái bị động tương lai.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [to be creAted by the MASter] - [ADjective PHRASE][TÍNH CỤM] kích hoạt bộ quét đặt ngay sau đối tượng [SUBject HEAD][CHỦ LÕI] "ARTwork" để mô tả trạng thái sắp sửa được tác động.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>PAST PARTiciple CLAUSE</strong>][<strong>KHỨ TÍNH ĐIỀU</strong>] <strong>đã xong</strong>, <strong>bị động</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5d:</p>
      
        <ul className="list-square">
      
          <li>the SYStem [creAted by the TECH TEAM] was LAUNCHED YESterday.</li>
          <li className="margin-bottom-20 list-none">Hệ thống [đã được tạo ra bởi đội ngũ công nghệ] đã được ra mắt ngày hôm qua.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [creAted by the TECH TEAM] - [PAST PARTiciple CLAUSE][KHỨ TÍNH ĐIỀU] phát triển từ [PAST PARTiciple FORM][KHỨ TÍNH DẠNG] "creAted" kết hợp mở rộng ở dạng bị động thuộc trục thời quá khứ.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [creAted by the TECH TEAM] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng [SUBject HEAD][CHỦ LÕI] "SYStem" để mô tả đặc điểm trạng thái bị động hoàn thành cho đối tượng này.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>MODified ADjective PHRASE</strong>][<strong>ĐỊNH TÍNH CỤM</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5e:</p>
      
        <ul className="list-square">
      
          <li>they NEED a STRATegy [creAtive in its exeCUtion].</li>
          <li className="margin-bottom-20 list-none">Họ cần một chiến lược [sáng tạo trong cách thức thực thi].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [creAtive in its exeCUtion] - [MODified ADjective PHRASE][ĐỊNH TÍNH CỤM] hình thành từ khối [VERB LEXEME][ĐỘNG VỊ] nguyên bản "creATE" qua việc thêm hậu tố "-ive" và kết hợp mở rộng với một [prepoSITion PHRASE][GIỚI CỤM] phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [creAtive in its exeCUtion] - [ADjective PHRASE][TÍNH CỤM] đứng ngay sau [MODifier HEAD][ĐỊNH LÕI] "STRATegy" để bổ nghĩa, xác định đặc điểm và năng lực trực tiếp cho đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole" id="ADjunct-2"><strong>2.3</strong> <strong>Hình thành chức năng</strong> [<strong>ADjunct 2</strong>][<strong>PHỤ 2</strong>]</p>


      <p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [<strong>GERund-PARTiciple CLAUSE</strong>][<strong>DANH-TÍNH ĐIỀU</strong>] <strong>có dấu phẩy</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6a:</p>
      
        <ul className="list-square">
      
          <li>[CreAting a NEW VIsual iDENtity], the BRAND LAUNCHED its camPAIGN.</li>
          <li className="margin-bottom-20 list-none">[Tạo ra một bộ nhận diện hình ảnh mới], thương hiệu đã ra mắt chiến dịch của mình.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [CreAting a NEW VIsual iDENtity] - [GERund-PARTiciple CLAUSE][DANH-TÍNH ĐIỀU] đứng biệt lập ở đầu câu, ngăn cách bằng dấu phẩy, mang [GERund-PARTiciple FORM][DANH-TÍNH DẠNG] kết hợp mở rộng do được rút gọn từ một hệ [CONtent CLAUSE][NỘI ĐIỀU] phụ thuộc có cùng thành phần lõi [SUBject PROnoun][CHỦ ĐẠI].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [CreAting a NEW VIsual iDENtity] - [ADjunct 2][PHỤ 2] đóng vai trò làm một khối bối cảnh nguyên nhân/phương thức tổng thể, bổ nghĩa cho hành động [PRETerite FORM][KHỨ DẠNG] "LAUNCHED" và toàn bộ CLAUSE chính.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [<strong>GERund-PARTiciple CLAUSE</strong>][<strong>DANH-TÍNH ĐIỀU</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6b:</p>
      
        <ul className="list-square">
      
          <li>the Agency ALlocated REsources [creAting CUStom SOFTware TOOLS].</li>
          <li className="margin-bottom-20 list-none">Cơ quan đã phân bổ các nguồn lực [với mục đích tạo ra các công cụ phần mềm tùy chỉnh].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [creAting CUStom SOFTware TOOLS] - [GERund-PARTiciple CLAUSE][DANH-TÍNH ĐIỀU] phát triển từ [GERund-PARTiciple FORM][DANH-TÍNH DẠNG] "creAting" kết hợp mở rộng đứng ở phần sau câu nhằm làm rõ tiến trình nội dung.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [creAting CUStom SOFTware TOOLS] - [ADjunct][PHỤ] đóng vai trò làm khối bối cảnh cách thức, bổ nghĩa trực tiếp cho hành động [PRETerite FORM][KHỨ DẠNG] "ALlocated".</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [<strong>to-infiniTIval CLAUSE</strong>][<strong>TO-NGUYÊN ĐIỀU</strong>] <strong>có dấu phẩy</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6c:</p>
      
        <ul className="list-square">
      
          <li>[To creATE HIGH-QUAlity PROducts], the TEAM upGRAded their maCHINES.</li>
          <li className="margin-bottom-20 list-none">[Để tạo ra các sản phẩm chất lượng cao], đội ngũ đã nâng cấp máy móc của họ.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [To creATE HIGH-QUAlity PROducts] - [to-infiniTIval CLAUSE][TO-NGUYÊN ĐIỀU] phát triển từ cụm [to-infiniTIval][TO-NGUYÊN] "to creATE" kết hợp mở rộng, được đảo lên đứng biệt lập ở đầu câu và ngăn cách bằng dấu phẩy.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [To creATE HIGH-QUAlity PROducts] - [ADjunct][PHỤ] đảm nhận nhiệm vụ làm khối bối cảnh mục đích, bổ nghĩa cho hành động [PRETerite FORM][KHỨ DẠNG] "upGRAded" và toàn bộ diễn biến phía sau.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [<strong>to-infiniTIval CLAUSE</strong>][<strong>TO-NGUYÊN ĐIỀU</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6d:</p>
      
        <ul className="list-square">
      
          <li>the deSIGner STAYED LATE [to creATE the FInal PROtotype].</li>
          <li className="margin-bottom-20 list-none">Nhà thiết kế đã ở lại muộn [để tạo ra mẫu nguyên mẫu cuối cùng].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [to creATE the FInal PROtotype] - [to-infiniTIval CLAUSE][TO-NGUYÊN ĐIỀU] phát triển từ cụm [to-infiniTIval][TO-NGUYÊN] "to creATE" kết hợp mở rộng đứng cuối chuỗi thông tin.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [to creATE the FInal PROtotype] - [ADjunct][PHỤ] đảm nhận vai trò làm một khối bối cảnh mục đích, bổ nghĩa trực tiếp cho hành động [PRETerite FORM][KHỨ DẠNG] "STAYED".</li>
      
        </ul>



      <h4 className="margin-y-40">3. Phân hệ [prepoSITion PHRASE][GIỚI CỤM]</h4>
      
      <p className="margin-top-20 text-indent-whole"><strong>3.1</strong> <strong>Hình thành chức năng</strong> [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 7:</p>
      
        <ul className="list-square">
      
          <li>the deLAY [in the creAtion of the NEW PORtal] RAISED SEVeral conCERNS.</li>
          <li className="margin-bottom-20 list-none">Sự chậm trễ [trong việc tạo ra cổng thông tin mới] đã dấy lên nhiều lo ngại.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [in the creAtion of the NEW PORtal] - [prepoSITion PHRASE][GIỚI CỤM] xuất hiện dưới dạng một vùng mã định vị không chứa hạt nhân hành động, bắt đầu bằng [prepoSITion][GIỚI] "in".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [in the creAtion of the NEW PORtal] - [ADjective PHRASE][TÍNH CỤM] vận hành như một bộ quét đặt ngay phía sau đối tượng [SUBject HEAD][CHỦ LÕI] "deLAY" để hiển thị và mô tả phạm vi thuộc về của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>3.2</strong> <strong>Hình thành chức năng</strong> [<strong>ADjunct</strong>][<strong>PHỤ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [<strong>prepoSITion PHRASE</strong>][<strong>GIỚI CỤM</strong>] (<strong>có dấu phẩy</strong>):</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 8a:</p>
      
        <ul className="list-square">
      
          <li>[For the creAtion of BETter SERvices], the FIRM inVESTment inCREASED.</li>
          <li className="margin-bottom-20 list-none">[Nhằm phục vụ cho việc tạo ra các dịch vụ tốt hơn], khoản đầu tư của công ty đã tăng lên.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [For the creAtion of BETter SERvices] - [prepoSITion PHRASE][GIỚI CỤM] bắt đầu bằng [prepoSITion][GIỚI] "for" kéo theo vùng [NOUN PHRASE][DANH CỤM] phía sau, được đảo lên đứng biệt lập ở đầu câu và ngăn cách bằng dấu phẩy.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [For the creAtion of BETter SERvices] - [ADjunct][PHỤ] đảm nhận nhiệm vụ thiết lập khối bối cảnh nguyên nhân / phương tiện, bổ nghĩa cho hành động [PRETerite FORM][KHỨ DẠNG] "inCREASED".</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [<strong>prepoSITion PHRASE</strong>][<strong>GIỚI CỤM</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 8b:</p>
      
        <ul className="list-square">
      
          <li>the TEAM GAthered [for the creAtion of a NEW PROject PLAN].</li>
          <li className="margin-bottom-20 list-none">Đội ngũ đã tập hợp [phục vụ cho việc tạo ra một kế hoạch dự án mới].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [for the creAtion of a NEW PROject PLAN] - [prepoSITion PHRASE][GIỚI CỤM] xuất hiện dưới dạng một vùng mã xác lập lý do / bối cảnh, bắt đầu bằng [prepoSITion][GIỚI] "for".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [for the creAtion of a NEW PROject PLAN] - [ADjunct][PHỤ] đảm nhận vai trò làm khối bối cảnh mục đích / nguyên nhân, bổ nghĩa cho hành động [PRETerite FORM][KHỨ DẠNG] "GAthered".</li>
      
        </ul>



      <h4 className="margin-y-40">4. Phân hệ [CLAUSE][ĐIỀU]</h4>
          
      <h5 className="margin-y-30 text-indent-whole">4.1 Phân hệ [CLAUSE][ĐIỀU]</h5>

      <p className="margin-top-20 text-indent-whole"><strong>4.1.1</strong> <strong>Hình thành chức năng</strong> [<strong>CONtent CLAUSE</strong>][<strong>NỘI ĐIỀU</strong>]</p>

      <p className="margin-top-20 text-indent-whole" id="FInite-CLAUsal-SUBject">[<strong>FInite CLAUSE as SUBject</strong>][<strong>BỊ-CHIA ĐIỀU làm CHỦ</strong>] <strong>cấu tạo từ</strong> [<strong>Open InterROGative CONtent CLAUSE</strong>][<strong>MỞ VẤN NỘI ĐIỀU</strong>] <strong>làm</strong> [<strong>SUBject</strong>][<strong>CHỦ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 9a:</p>
      
        <ul className="list-square">
      
          <li>[HOW the ARtist creATES uNIQUE SCULPtures] FAScinates the AUdience.</li>
          <li className="margin-bottom-20 list-none">[Cách người nghệ sĩ tạo ra các bức tượng điêu khắc độc đáo] cuốn hút khán giả.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>:  [HOW the ARtist creATES uNIQUE SCULPtures] - [Open InterROGative CONtent CLAUSE][MỞ VẤN NỘI ĐIỀU]
 chứa thành phần [ADverb][TRẠNG] "HOW" ở đầu, mang [SUBject HEAD][CHỦ LÕI] riêng "the ARtist" và cụm hành động phối hợp phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>:  [HOW the ARtist creATES uNIQUE SCULPtures] - [FInite CLAUSE as SUBject][BỊ-CHIA ĐIỀU] quản lý khối thông tin quy trình, điều khiển chính cho hành động [3RD SINGular PRESent FORM][3RD ÍT HIỆN DẠNG] "FAScinates".</li>
      
        </ul>



      <p className="margin-top-20 text-indent-whole" id="FInite-CLAUsal-COMplement">[<strong>FInite CLAUSE as COMplement</strong>][<strong>BỊ-CHIA ĐIỀU làm BỔ</strong>] <strong>cấu tạo từ</strong> [<strong>Open InterROGative CONtent CLAUSE</strong>][<strong>MỞ VẤN NỘI ĐIỀU</strong>] <strong>làm</strong> [<strong>COMplement</strong>][<strong>BỔ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 9b:</p>
      
        <ul className="list-square">
      
          <li>the diRECtor exPLAINED [how the TEAM creATES efFECtive adVERtisements].</li>
          <li className="margin-bottom-20 list-none">Giám đốc đã giải thích [cách đội ngũ tạo ra các quảng cáo hiệu quả].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>:  [how the TEAM creATES efFECtive adVERtisements] - [Open InterROGative CONtent CLAUSE][MỞ VẤN NỘI ĐIỀU]
 chứa thành phần [ADverb][TRẠNG] "HOW" ở đầu, có [SUBject HEAD][CHỦ LÕI] "the TEAM" và cụm hành động phối hợp phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>:  [how the TEAM creATES efFECtive adVERtisements] - [FInite CLAUSE as COMplement][BỊ-CHIA ĐIỀU làm BỔ] chứa dữ liệu mục tiêu tiếp nhận cho hành động [PRETerite FORM][KHỨ DẠNG] "exPLAINED".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole" id="FInite-CLAUsal-SUBject-2"><strong>4.1.2</strong> <strong>Hình thành chức năng</strong> [<strong>non-FInite CLAUSE as SUBject</strong>][<strong>CHƯA-CHIA ĐIỀU làm CHỦ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 10:</p>
      
        <ul className="list-square">
      
          <li>[the ENgine {'{which creATES SOlar ENergy}'}] was REcently inSTALLED.</li>
          <li className="margin-bottom-20 list-none">[Cỗ máy {'{cái mà tạo ra năng lượng mặt trời}'}] gần đây đã được lắp đặt.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: {'{which creATES SOlar ENergy}'} - {'{RELative CLAUSE}'}{'{QUAN CÂU}'} chứa thành phần [SUBject PRONOUN][CHỦ ĐẠI] vật thể "which" ở đầu, mang hạt nhân hành động xử lý bối cảnh thuộc trục thời hiện tại. Hoạt động như một MODule lọc bổ sung đặt sau khối tên gọi để nhận diện và mô tả đặc điểm cho đối tượng [SUBject HEAD][CHỦ LÕI] "ENgine".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [the ENgine {'{which creATES SOlar ENergy}'}] - [non-FInite CLAUSE as SUBject][CHƯA-CHIA ĐIỀU] làm CHỦ].</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole" id="ADjunct-3"><strong>4.1.3</strong> <strong>Hình thành chức năng</strong> [<strong>ADjunct 3</strong>][<strong>PHỤ 3</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11:</p>
      
        <ul className="list-square">
      
          <li>the VENture sucCEEded [be<strong>cause</strong> the FOUNder creAted a CLEAR VIsion].</li>
          <li className="margin-bottom-20 list-none">Dự án đã thành công [vì nhà sáng lập đã tạo ra một tầm nhìn rõ ràng].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [be<strong>cause</strong> the FOUNder creAted a CLEAR VIsion] - [suBORdinate CLAUSE][PHỤ ĐIỀU] kích hoạt ngay sau thành phần [PrepoSITion][GIỚI] nguyên nhân "be<strong>cause</strong>", chứa [SUBject HEAD][CHỦ LÕI] "the FOUNder" và cụm hành động mang dấu mốc trục thời quá khứ.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [be<strong>cause</strong> the FOUNder creAted a CLEAR VIsion] - [ADjunct 3][PHỤ 3] thiết lập MODule bối cảnh, bổ nghĩa cho hành động [PRETerite FORM][KHỨ DẠNG] "sucCEEded" và toàn bộ CLAUSE chính trước đó.</li>
      
        </ul>



      <h5 className="margin-y-30 text-indent-whole">4.2 Phân hệ [ZEro CONtent CLAUSE][KHUYẾT NỘI ĐIỀU]</h5>

      <p className="margin-top-20 text-indent-whole"><strong>4.2.1</strong> <strong>Hình thành chức năng</strong> [<strong>CONtent CLAUSE</strong>][<strong>NỘI ĐIỀU</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11a:</p>
      
        <ul className="list-square">
      
          <li>they beLIEVE [the Agency creAted a reLIable SYStem].</li>
          <li className="margin-bottom-20 list-none">Họ tin rằng [cơ quan đã tạo ra một hệ thống đáng tin cậy].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [the Agency creAted a reLIable SYStem] - [ZEro CONtent CLAUSE][KHUYẾT NỘI ĐIỀU] đã ẩn thành phần [SuBORdinator][HẠ] định hướng "that", chỉ còn hiển thị trọn vẹn khối [SUBject HEAD][CHỦ LÕI] "the Agency" và cụm hành động phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [the Agency creAted a reLIable SYStem] - [FInite CLAUSE as COMplement][BỊ-CHIA ĐIỀU làm BỔ] tiếp nhận trực tiếp nội dung cho hành động [PLAIN PRESent FORM][GIẢN HIỆN DẠNG] "beLIEVE".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>4.2.2</strong> <strong>Hình thành chức năng</strong> [<strong>non-FInite CLAUSE as SUBject</strong>][<strong>CHƯA-CHIA ĐIỀU làm CHỦ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11b:</p>
      
        <ul className="list-square">
      
          <li>[the deSIGN {'{she creAted for the CLIent}'}] WON a presTIgious aWARD.</li>
          <li className="margin-bottom-20 list-none">[Mẫu thiết kế {'{mà cô ấy đã tạo ra cho khách hàng}'}] đã giành một giải thưởng uy tín.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: {'{she creAted for the CLIent}'} - {'{ZEro RELative CLAUSE}'}{'{KHUYẾT QUAN CÂU}'} đã ẩn thành phần [ZEro-OBject PRONOUN][ẨN-TÂN ĐẠI] vật thể đứng trước, giữ lại khối [SUBject PROnoun][CHỦ ĐẠI] "she" và cụm [PAST VERB PHRASE][ĐÃ ĐỘNG CỤM] "creAted for the CLIent". Đóng vai trò như bộ quét đặt ngay sau đối tượng [SUBject HEAD][CHỦ LÕI] "the deSIGN" để làm rõ đặc điểm cho đối tượng này.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [the deSIGN {'{she creAted for the CLIent}'}] - [non-FInite CLAUSE as SUBject][CHƯA-CHIA ĐIỀU] làm CHỦ].</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>4.2.3</strong> <strong>Hình thành chức năng</strong> [<strong>ADjunct</strong>][<strong>PHỤ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11c:</p>
      
        <ul className="list-square">
      
          <li>[should the PROgram creATE TECHnical ERrors], aLERT the SYStem adMINistrator.</li>
          <li className="margin-bottom-20 list-none">[Nếu chương trình tạo ra các lỗi kỹ thuật], hãy báo cho quản trị viên hệ thống.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [should the PROgram creATE TECHnical ERrors] - [ZEro CONtent CLAUSE][KHUYẾT NỘI ĐIỀU] vận hành ở trạng thái ẩn thành phần [PrepoSITion][GIỚI] điều kiện "if" bằng giải pháp đảo [PREsent MOdal auXILiary VERB][HIỆN THÁI TRỢ ĐỘNG] "Should" lên trước, tuy thiết lập bề mặt biến đổi nhưng bản chất vẫn giữ trọn vẹn [SUBject HEAD][CHỦ LÕI] "the PROgram" và [BARE infiniTIval CLAUSE][THUẦN NGUYÊN ĐIỀU] "creATE TECHnical ERrors".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [should the PROgram creATE TECHnical ERrors] - [ADjunct][PHỤ] đảm nhận nhiệm vụ thiết lập khối bối cảnh giả định/điều kiện, bổ nghĩa cho hành động và câu lệnh phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40" id="emBEDded-CLAUSE">5. Phân hệ [Nhúng Đóng Gói][emBEDded Structure]</h4>

      <p className="margin-top-20 text-indent-whole"><strong>5.1</strong> <strong>Hình thành chức năng</strong> [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>PRESent PARTiciple VERB and emBEDded CLAUSE</strong>][<strong>HIỆN TIẾP ĐỘNG và NHÚNG ĐIỀU</strong>] <strong>làm</strong> [<strong>non-FInite CLAUSE as SUBject</strong>][<strong>CHƯA-CHIA ĐIỀU làm CHỦ</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12a:</p>
      
        <ul className="list-square">
      
          <li>[CreAting soLUtions for {'{WHAT CLIents STRUGgle with}'}] BUILDS MARket VAlue.</li>
          <li className="margin-bottom-20 list-none">[Việc tạo ra các giải pháp cho {'{những gì khách hàng đang gặp khó khăn}'}] xây dựng giá trị thị trường.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối ngoài</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [CreAting soLUtions for {'{WHAT CLIents STRUGgle with}'}] - [PRESent PARTiciple VERB and emBEDded CLAUSE][HIỆN TIẾP ĐỘNG và NHÚNG ĐIỀU] lớn phát triển từ [GERund-PARTiciple FORM][DANH-TÍNH DẠNG] "CreAting" mở rộng kéo theo thành phần bổ trợ phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [CreAting soLUtions for {'{WHAT CLIents STRUGgle with}'}] - [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] chịu trách nhiệm làm một khối đầu việc lớn, đảm nhận vai trò làm [non-FInite CLAUSE as SUBject][CHƯA-CHIA ĐIỀU] đứng trước hành động [THIRD-PERson SINGular VERB PHRASE ][NGÔI 3 S ĐỘNG CỤM] "BUILDS MARket VAlue".</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối trong</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: {'{WHAT CLIents STRUGgle with}'} - [Open InterROGative CONtent CLAUSE][MỞ VẤN NỘI ĐIỀU] định hình dưới dạng khối mã con nằm gọn bên trong, chứa [SUBject HEAD][CHỦ LÕI] riêng "CLIents" và cụm hành động riêng đi sau thành phần [PROnoun][ĐẠI] "what".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: {'{WHAT CLIents STRUGgle with}'} - [FInite CLAUSE as COMplement][BỊ-CHIA ĐIỀU làm BỔ] chịu sự điều phối trực tiếp của [prepoSITion][GIỚI] "for" ở tầng ngoài.</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">[<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>PRESent PARTiciple VERB and emBEDded CLAUSE</strong>][<strong>HIỆN TIẾP ĐỘNG và NHÚNG ĐIỀU</strong>] <strong>làm</strong> [<strong>non-FInite CLAUSE as COMplement</strong>][<strong>CHƯA-CHIA ĐIỀU làm BỔ</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12b:</p>
      
        <ul className="list-square">
      
          <li>the MANager sugGESted [exPLORing {'{WHY the TEAM creAted outDAted deSIGNS}'}].</li>
          <li className="margin-bottom-20 list-none">Người quản lý đã gợi ý [việc tìm hiểu {'{lý do tại sao đội ngũ lại tạo ra các thiết kế lỗi thời}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối ngoài</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [exPLORing {'{WHY the TEAM creAted outDAted deSIGNS}'}] - [PRESent PARTiciple VERB and emBEDded CLAUSE][HIỆN TIẾP ĐỘNG và NHÚNG ĐIỀU] bắt đầu bằng [GERund-PARTiciple FORM][DANH-TÍNH DẠNG] "exPLORing" kết hợp vùng mã mở rộng phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [exPLORing {'{WHY the TEAM creAted outDAted deSIGNS}'}] - [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] đóng vai trò làm [non-FInite CLAUSE as CATenative COMplement][CHƯA-CHIA ĐIỀU làm CHUỖI BỔ] tiếp nhận nội dung cho hành động [PRETerite FORM][KHỨ DẠNG] "sugGESted".</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối trong</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: {'{WHY the TEAM creAted outDAted deSIGNS}'} - [Open InterROGative CONtent CLAUSE][MỞ VẤN NỘI ĐIỀU] định hình dưới dạng một khối mã con nằm gọn hoàn toàn bên trong vùng mã tổng thể, chứa đầy đủ [SUBject HEAD][CHỦ LÕI] riêng "the TEAM" và cụm hành động riêng thiết lập theo trục thời quá khứ đi sau thành phần [ADverb][TRẠNG] "WHY".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: {'{WHY the TEAM creAted outDAted deSIGNS}'} - [FInite CLAUSE as COMplement][BỊ-CHIA ĐIỀU làm BỔ] chịu sự điều phối trực tiếp từ hạt nhân "exPLORing" ở tầng ngoài, làm rõ nội dung cho việc tìm hiểu.</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">[<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>FULL inFINitive VERB and emBEDded CLAUSE</strong>][<strong>TOÀN NGUYÊN ĐỘNG và NHÚNG ĐIỀU</strong>] <strong>làm</strong> [<strong>non-FInite CLAUSE as SUBject</strong>][<strong>CHƯA-CHIA ĐIỀU làm CHỦ</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12c:</p>
      
        <ul className="list-square">
      
          <li>[To underSTAND {'{HOW the SYStem creATES AUtomated rePORTS}'}] reQUIres TECHnical SKILLS.</li>
          <li className="margin-bottom-20 list-none">[Việc hiểu {'{cách hệ thống tạo ra các báo cáo tự động}'}] đòi hỏi các kỹ năng kỹ thuật.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối ngoài</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [To underSTAND {'{HOW the SYStem creATES AUtomated rePORTS}'}] - [FULL inFINitive VERB and emBEDded CLAUSE][TOÀN NGUYÊN ĐỘNG và NHÚNG ĐIỀU] bắt đầu bằng [to-infiniTIval][TO-NGUYÊN] "To underSTAND" kết hợp vùng mã mở rộng phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [To underSTAND {'{HOW the SYStem creATES AUtomated rePORTS}'}] - [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] đóng vai trò làm [non-FInite CLAUSE as SUBject][CHƯA-CHIA ĐIỀU] đứng trước hành động [THIRD-PERson SINGular VERB PHRASE ][NGÔI 3 S ĐỘNG CỤM] "reQUIres TECHnical SKILLS" để quản lý khối đầu việc ở đầu câu.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối trong</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: {'{HOW the SYStem creATES AUtomated rePORTS}'} - [Open InterROGative CONtent CLAUSE][MỞ VẤN NỘI ĐIỀU] định hình dưới dạng khối mã con nằm gọn bên trong, chứa [SUBject HEAD][CHỦ LÕI] "the system" và cụm hành động riêng đi sau thành phần [ADverb][TRẠNG] "HOW".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: {'{HOW the SYStem creATES AUtomated rePORTS}'} - [FInite CLAUSE as COMplement][BỊ-CHIA ĐIỀU làm BỔ] chịu sự điều phối trực tiếp từ hạt nhân "underSTAND" ở tầng ngoài.</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">[<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>FULL inFINitive VERB and emBEDded CLAUSE</strong>][<strong>TOÀN NGUYÊN ĐỘNG và NHÚNG ĐIỀU</strong>] <strong>làm</strong> [<strong>non-FInite CLAUSE as COMplement</strong>][<strong>CHƯA-CHIA ĐIỀU làm BỔ</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12d:</p>
      
        <ul className="list-square">
      
          <li>the FIRM PLANS [to STUdy {'{HOW Users creATE PERsonal PROfiles}'}].</li>
          <li className="margin-bottom-20 list-none">Công ty có kế hoạch [nghiên cứu {'{cách người dùng tạo ra các hồ sơ cá nhân}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối ngoài</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [to STUdy {'{HOW Users creATE PERsonal PROfiles}'}] - [FULL inFINitive VERB and emBEDded CLAUSE][TOÀN NGUYÊN ĐỘNG và NHÚNG ĐIỀU] bắt đầu bằng [to-infiniTIval][TO-NGUYÊN] "to STUdy" kéo theo vùng mã bổ trợ phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [to STUdy {'{HOW Users creATE PERsonal PROfiles}'}] - [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] đóng vai trò làm [non-FInite CLAUSE as CATenative COMplement][CHƯA-CHIA ĐIỀU làm CHUỖI BỔ] tiếp nhận mục tiêu kế hoạch cho hành động [3RD SINGular PRESent FORM][3RD ÍT HIỆN DẠNG] "PLANS".</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối trong</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: {'{HOW Users creATE PERsonal PROfiles}'} - [Open InterROGative CONtent CLAUSE][MỞ VẤN NỘI ĐIỀU] nằm gọn hoàn toàn bên trong vùng mã tổng thể, chứa [SUBject HEAD][CHỦ LÕI] riêng "Users" và cụm hành động riêng đi sau thành phần [ADverb][TRẠNG] "HOW".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: {'{HOW Users creATE PERsonal PROfiles}'} - [FInite CLAUSE as COMplement][BỊ-CHIA ĐIỀU làm BỔ] chịu sự điều phối trực tiếp từ hạt nhân "STUdy" ở tầng ngoài.</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">[<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>FULL inFINitive VERB and emBEDded CLAUSE</strong>][<strong>TOÀN NGUYÊN ĐỘNG và NHÚNG ĐIỀU</strong>] <strong>làm</strong> [<strong>non-FInite CLAUSE as SUBject</strong>][<strong>CHƯA-CHIA ĐIỀU làm CHỦ</strong>] <strong>bổ nghĩa</strong> [<strong>DUMmy PROnoun</strong>][<strong>GIẢ ĐẠI</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12e:</p>
      
        <ul className="list-square">
      
          <li>[it] TAKES experTISE [to eVAluate {'{HOW the appliCAtion creATES User LOGS}'}].</li>
          <li className="margin-bottom-20 list-none">Đòi hỏi chuyên môn [để đánh giá {'{cách ứng dụng tạo ra các nhật ký người dùng}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối ngoài</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [to eVAluate {'{HOW the appliCAtion creATES User LOGS}'}] - [FULL inFINitive VERB and emBEDded CLAUSE][TOÀN NGUYÊN ĐỘNG và NHÚNG ĐIỀU] lớn biểu hiện dưới dạng một vùng mã mở rộng bắt đầu bằng [to-infiniTIval][TO-NGUYÊN] "to eVAluate" và kéo theo thành phần bổ trợ phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [to eVAluate {'{HOW the appliCAtion creATES User LOGS}'}] - [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] chịu trách nhiệm làm một vùng đầu việc lớn, đóng vai trò [SUBject [non-FInite CLAUSE as SUBject][CHƯA-CHIA ĐIỀU] bổ nghĩa cho [DUMmy PROnoun][GIẢ ĐẠI] "it" trong cấu trúc [THIRD-PERson SINGular VERB PHRASE ][NGÔI 3 S ĐỘNG CỤM] "TAKES experTISE".</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối trong</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: {'{HOW the appliCAtion creATES User LOGS}'} - [Open InterROGative CONtent CLAUSE][MỞ VẤN NỘI ĐIỀU] định hình dưới dạng một khối mã con nằm gọn hoàn toàn bên trong vùng mã tổng thể, chứa đầy đủ [SUBject HEAD][CHỦ LÕI] riêng "the appliCAtion" và cụm hành động riêng thiết lập theo trục thời hiện tại đi sau thành phần [ADverb][TRẠNG] "HOW".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: {'{HOW the appliCAtion creATES User LOGS}'} - [FInite CLAUSE as COMplement][BỊ-CHIA ĐIỀU làm BỔ] chịu sự điều phối trực tiếp từ hạt nhân "eVAluate" ở tầng ngoài, tích hợp chuỗi thông tin tiếp nhận hành động để làm rõ nội dung cho việc đánh giá.</li>
      
        </ul>
      
      

      <p className="margin-top-20 text-indent-whole"><strong>5.2</strong> <strong>Hình thành chức năng</strong> [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 13:</p>
      
        <ul className="list-square">
      
          <li>the BOARD reVIEWED proPOsals [regarding {'{HOW the TEAM creATES NEW MARketing CHANnels}'}].</li>
          <li className="margin-bottom-20 list-none">Hội đồng đã xem xét các đề xuất [liên quan đến {'{cách đội ngũ tạo ra các kênh tiếp thị mới}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối ngoài</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [regarding {'{HOW the TEAM creATES NEW MARketing CHANnels}'}] - [prepoSITion and emBEDded CLAUSE][GIỚI và NHÚNG ĐIỀU] (với "regarding" đóng vai trò [prepoSITion][GIỚI]) biểu thị dưới dạng một vùng mã lớn.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [regarding {'{HOW the TEAM creATES NEW MARketing CHANnels}'}] - [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] vận hành như một bộ quét tổng thể đặt ngay phía sau đối tượng [MODifier HEAD][ĐỊNH LÕI] "proPOsals" để mô tả đặc điểm nội dung.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối trong</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: {'{HOW the TEAM creATES NEW MARketing CHANnels}'} - [Open InterROGative CONtent CLAUSE][MỞ VẤN NỘI ĐIỀU] định hình dưới dạng khối mã con nằm gọn bên trong, chứa [SUBject HEAD][CHỦ LÕI] "the TEAM" và cụm hành động đi sau thành phần [ADverb][TRẠNG] "HOW".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: {'{HOW the TEAM creATES NEW MARketing CHANnels}'} - [FInite CLAUSE as COMplement][BỊ-CHIA ĐIỀU làm BỔ] chịu sự điều phối trực tiếp ở tầng ngoài.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>5.3</strong> <strong>Hình thành chức năng</strong> [<strong>ADjunct</strong>][<strong>PHỤ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 14:</p>
      
        <ul className="list-square">
      
          <li>the MEEting FOcused [on {'{WHY the deSIGner creAted COMplex LAYouts}'}].</li>
          <li className="margin-bottom-20 list-none">Cuộc họp đã tập trung [vào {'{lý do tại sao nhà thiết kế lại tạo ra các bố cục phức tạp}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối ngoài</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: [on {'{WHY the deSIGner creAted COMplex LAYouts}'}] - [prepoSITion and emBEDded CLAUSE][GIỚI và NHÚNG ĐIỀU] biểu thị dưới dạng một vùng mã xác lập nội dung lớn bắt đầu bằng [prepoSITion][GIỚI] "on".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [on {'{WHY the deSIGner creAted COMplex LAYouts}'}] - [<strong>ADjunct</strong>][<strong>PHỤ</strong>] đảm nhận vai trò làm một khối bối cảnh địa điểm/nội dung tổng thể, bổ nghĩa cho hành động [PRETerite FORM][KHỨ DẠNG] "FOcused".</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối trong</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong>: {'{WHY the deSIGner creAted COMplex LAYouts}'} - [Open InterROGative CONtent CLAUSE][MỞ VẤN NỘI ĐIỀU] định hình dưới dạng khối mã con nằm gọn bên trong, chứa [SUBject HEAD][CHỦ LÕI] riêng "the deSIGner" và cụm hành động riêng thuộc trục thời quá khứ đi sau thành phần [ADverb][TRẠNG] "WHY".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: {'{WHY the deSIGner creAted COMplex LAYouts}'} - [FInite CLAUSE as COMplement][BỊ-CHIA ĐIỀU làm BỔ] chịu sự điều phối trực tiếp của [prepoSITion][GIỚI] "on" ở tầng ngoài.</li>
      
        </ul>
      


      {/* 2.  */}

			<h3 className="margin-y-50 text-center" id="PARaphrasing">PHẦN 2: ỨNG DỤNG ĐỘT PHÁ – GIẢI MÃ PARAPHRASING BẰNG KỸ THUẬT [THẾ KHỐI]</h3>

      <h4 className="margin-y-40">1. Phân hệ [PREDicator HEAD][VỊ LÕI]: Thay đổi các MODule chứa hành động</h4>

      <p className="margin-top-20 text-indent-whole"><strong>Case 1</strong>: <strong>Giữ nguyên cấp độ</strong> [<strong>PHRASE</strong>][<strong>CỤM</strong>]</p>
      
        <ul className="list-square">
      
          <li>[CreAting HIGH-IMpact CONtent] reQUIres proFESsional dediCAtion.</li>
          <li className="margin-bottom-20 list-none">[Việc tạo ra nội dung có sức tác động cao] đòi hỏi sự tận tụy chuyên nghiệp.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong> gốc: [CreAting HIGH-IMpact CONtent] - [GERund-PARTiciple CLAUSE][DANH-TÍNH ĐIỀU] biểu hiện dưới dạng khối mã mở rộng chứa hành động và đối tượng đi kèm.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [CreAting HIGH-IMpact CONtent] - [non-FInite CLAUSE as SUBject][CHƯA-CHIA ĐIỀU] được hình thành từ [NOUN PHRASE][DANH CỤM] vận hành như một phân hệ [SUBject][CHỦ] đứng trước hành động [THIRD-PERson SINGular VERB PHRASE ][NGÔI 3 S ĐỘNG CỤM] "reQUIres proFESsional dediCAtion" để quản lý một đầu việc lớn ở đầu câu.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Thế khối tương đương</strong> [<strong>GERund-PARTiciple CLAUSE</strong>][<strong>DANH-TÍNH ĐIỀU</strong>]</p>
      
        <ul className="list-square">
      
          <li>[DeVEloping efFECtive proMOtional maTErial] reQUIres proFESsional dediCAtion.</li>
          <li className="margin-bottom-20 list-none">[Việc phát triển tài liệu quảng bá hiệu quả] đòi hỏi sự tận tụy chuyên nghiệp.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong> mới: [DeVEloping efFECtive proMOtional maTErial] - [GERund-PARTiciple CLAUSE][DANH-TÍNH ĐIỀU] mới chứa một hành động tiếp diễn khác cùng chuỗi dữ liệu mở rộng được đưa vào thế chỗ.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong> mới: [DeVEloping efFECtive proMOtional maTErial] - [non-FInite CLAUSE as SUBject][CHƯA-CHIA ĐIỀU] được hình thành từ [NOUN PHRASE][DANH CỤM] duy trì chính xác chức năng làm thành phần [SUBject][CHỦ] đứng trước hành động [THIRD-PERson SINGular VERB PHRASE ][NGÔI 3 S ĐỘNG CỤM] "reQUIres proFESsional dediCAtion" của khối cũ.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>Case 2</strong>: <strong>Kỹ thuật nâng cấp từ</strong> [<strong>PHRASE</strong>][<strong>CỤM</strong>] <strong>lên</strong> [<strong>CLAUSE</strong>][<strong>ĐIỀU</strong>]</p>
      
        <ul className="list-square">
      
          <li>the COMpany BOOSted VAlue [by creAting uNIQUE PROducts].</li>
          <li className="margin-bottom-20 list-none">Công ty đã gia tăng giá trị [bằng cách tạo ra các sản phẩm độc đáo].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong> gốc: [by creAting uNIQUE PROducts] - [prepoSITion PHRASE][GIỚI CỤM] hiển thị dưới dạng một vùng mã chứa [prepoSITion][GIỚI] phương thức "by" đi kèm cụm hành động phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [by creAting uNIQUE PROducts] - [ADjunct][PHỤ] đảm nhận vai trò làm khối bối cảnh phương thức, bổ nghĩa cho hành động [PRETerite FORM][KHỨ DẠNG] "BOOSted".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nâng cấp lên</strong> [<strong>suBORdinate CLAUSE</strong>][<strong>PHỤ ĐIỀU</strong>]</p>
      
        <ul className="list-square">
      
          <li>the COMpany BOOSted VAlue [be<strong>cause</strong> the deVElopers creAted uNIQUE PROducts].</li>
          <li className="margin-bottom-20 list-none">Công ty đã gia tăng giá trị [vì các nhà phát triển đã tạo ra các sản phẩm độc đáo].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong> mới: [be<strong>cause</strong> the deVElopers creAted uNIQUE PROducts] - [suBORdinate CLAUSE][PHỤ ĐIỀU] hiển thị dưới dạng khối mã chứa đầy đủ [SUBject HEAD][CHỦ LÕI] "the deVElopers" và cụm hành động đi sau thành phần [PrepoSITion][GIỚI] "be<strong>cause</strong>".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong> mới: [be<strong>cause</strong> the deVElopers creAted uNIQUE PROducts] - [ADjunct][PHỤ] đảm nhận vai trò bối cảnh nguyên nhân ở cấp độ cao cấp hơn, bổ nghĩa cho hành động [PRETerite FORM][KHỨ DẠNG] "BOOSted" và toàn bộ diễn biến phía trước.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>Case 3</strong>: <strong>Kỹ thuật hạ cấp từ</strong> [<strong>CLAUSE</strong>][<strong>ĐIỀU</strong>] <strong>về</strong> [<strong>HEAD</strong>][<strong>LÕI</strong>]</p>
      
        <ul className="list-square">
      
          <li>the STUdio HIred [a TEAM {'{which creATES interACtive ART PROjects}'}].</li>
          <li className="margin-bottom-20 list-none">Xưởng phim đã thuê [một đội ngũ {'{nhóm mà tạo ra các dự án nghệ thuật tương tác}'}].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong> gốc: {'{which creATES interACtive ART PROjects}'} - {'{RELative CLAUSE}'}{'{QUAN CÂU}'} thiết lập theo dạng phân hệ hệ con đầy đủ bổ nghĩa đứng sau một khối tên gọi, chứa thành phần [SUBject PRONOUN][CHỦ ĐẠI] "which" và cụm hành động phía sau. Đóng vai trò một MODule lọc nhằm định nghĩa đặc điểm cho đối tượng [MODifier HEAD][ĐỊNH LÕI] "TEAM".</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [a TEAM {'{which creATES interACtive ART PROjects}'}] - [non-FInite CLAUSE as CATenative COMplement][CHƯA-CHIA ĐIỀU làm CHUỖI BỔ].</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hạ cấp về</strong> [<strong>MODified ADjective</strong>][<strong>ĐỊNH TÍNH</strong>]</p>
      
        <ul className="list-square">
      
          <li>the STUdio HIred [a {'{creAtive}'} TEAM].</li>
          <li className="margin-bottom-20 list-none">Xưởng phim đã thuê một đội ngũ [sáng tạo].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong> mới: {'{creAtive}'} - {'{MODified ADjective}'}{'{ĐỊNH TÍNH}'} hình thành từ khối [VERB LEXEME][ĐỘNG VỊ] nguyên bản "creATE" kết hợp đuôi "-ive" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI] có khả năng [ADjective][TÍNH] mô tả đặc điểm, thu gọn hoàn toàn dưới dạng một thành phần mô tả đặc điểm đơn duy nhất đứng trước đối tượng. [ADjective HEAD][TÍNH LÕI] thiết lập vị trí ngay trước đối tượng [MODifier HEAD][ĐỊNH LÕI] "TEAM" để quét và hiển thị ngắn gọn đặc điểm của đối tượng đó.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong> mới: [a {'{creAtive}'} TEAM] - [non-FInite CLAUSE as CATenative COMplement][CHƯA-CHIA ĐIỀU làm CHUỖI BỔ].</li>
      
        </ul>


      <h4 className="margin-y-40">2. Phân hệ [prepoSITion][GIỚI]: Thay đổi các MODule chứa mã định vị</h4>

      <p className="margin-top-20 text-indent-whole"><strong>Case 4</strong>: <strong>Kỹ thuật hoán đổi vị trí cấp độ</strong> [<strong>PHRASE</strong>][<strong>CỤM</strong>]</p>
      
        <ul className="list-square">
      
          <li>the TEAM ALlocated TIME [for the creAtion of the SYStem INterface].</li>
          <li className="margin-bottom-20 list-none">Đội ngũ đã phân bổ thời gian [phục vụ cho việc tạo ra giao diện hệ thống].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong> gốc: [for the creAtion of the SYStem INterface] - [prepoSITion PHRASE][GIỚI CỤM] bắt đầu bằng [prepoSITion][GIỚI] chỉ lý do / bối cảnh "for" để kéo theo khối [NOUN PHRASE][DANH CỤM] phía sau.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong>: [for the creAtion of the SYStem INterface] - [ADjunct][PHỤ] thực thi vai trò làm khối bối cảnh nguyên nhân / mục đích, bổ nghĩa cho hành động [PRETerite FORM][KHỨ DẠNG] "ALlocated".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Thế khối tương đương</strong> [<strong>to-infiniTIval CLAUSE</strong>][<strong>TO-NGUYÊN ĐIỀU</strong>]:</p>
      
        <ul className="list-square">
      
          <li>the TEAM ALlocated TIME [to creATE the SYStem INterface].</li>
          <li className="margin-bottom-20 list-none">Đội ngũ đã phân bổ thời gian [để tạo ra giao diện hệ thống].</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối trong</strong> mới: [to creATE the SYStem INterface] - [to-infiniTIval CLAUSE][TO-NGUYÊN ĐIỀU] mới, bắt đầu bằng [to-infiniTIval][TO-NGUYÊN] "to creATE" được đưa vào thế chỗ.</li>
      
          <li className="list-none margin-bottom-10"><strong>Khối ngoài</strong> mới: [to creATE the SYStem INterface] - [ADjunct][PHỤ] đảm nhận vai trò thiết lập khối bối cảnh mục đích tổng thể, bổ nghĩa cho hành động [PRETerite FORM][KHỨ DẠNG] "ALlocated" mà không làm biến dạng sơ đồ sắp xếp tổng thể của câu.</li>
      
        </ul>

      

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>juLY 07, 2026 · by 💎GEM ·</span>
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