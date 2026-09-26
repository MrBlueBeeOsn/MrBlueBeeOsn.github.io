import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CLEAR(): React.JSX.Element {

  const postId = "CLEAR";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#verbs-functions-terms"><mark className="highlight-tertiary-padding-4-8">VERBS: FUNCtions</mark></HashLink></h4>

      
      <h1 className="margin-y-50 text-center">[CLEAR]</h1>

      {/* This is the content of Vocabulary Term. */}


      <div className="example">
                    
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SUBject-HEAD">SUBject HEAD</HashLink>
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
            <HashLink smooth to="#SUBject-PHRASE">SUBject PHRASE</HashLink>&nbsp;/&nbsp;
            <HashLink smooth to="#OBject-PHRASE">OBject PHRASE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SUBject-PHRASE-2">SUBject PHRASE 2</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADjunct-2">ADjunct 2</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SUBject-CLAUSE">SUBject CLAUSE</HashLink>&nbsp;/&nbsp;
            <HashLink smooth to="#OBject-CLAUSE">OBject CLAUSE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SUBject-CLAUSE-2">SUBject CLAUSE 2</HashLink>
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


      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20">[CLEAR] is a [ROOT VERB] that means to remove things that are not wanted from a place, or to make something easy to see or understand.</p>

          <p>[CLEAR] là một [ROOT VERB][GỐC ĐỘNG] có nghĩa là dọn dẹp, xóa bỏ những thứ không mong muốn khỏi một nơi nào đó, hoặc làm cho cái gì đó trở nên dễ nhìn, dễ hiểu (rõ ràng).</p>

          <p className="margin-top-20">Ví dụ: /klɪə(r)/</p>

            <ul className="list-square">
          
              <li>you must [CLEAR] the browser history.</li>
              <li className="margin-bottom-20 list-none">Bạn phải [xóa] lịch sử trình duyệt.</li>

              <li className="list-none">Khối trong: [CLEAR] - [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] dạng nguyên bản đứng sau [asSERTive MOdal and BARE inFINitive VERB][ÁP THÁI và THUẦN NGUYÊN ĐỘNG] "must" để thực thi hành động tác động lên thành phần chịu tác động "the browser history".</li>
          
            </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>



      {/* =============================
            
      ============================= */}


      {/* 1.  */}

			<h3 className="margin-y-50 text-center">HỆ THỐNG PHÂN LOẠI HẠT NHÂN VERB [VERB CATegories]</h3>


      <h4 className="margin-y-40">a. Phân hệ [VERB HEAD][ĐỘNG LÕI]</h4>
      
        <ol>
      
          <li value="1">[<strong>ROOT VERB</strong>][<strong>GỐC ĐỘNG</strong>]: CLEAR</li>
          <li className="margin-bottom-20 list-none">Là mã hành động nguyên bản (dọn dẹp, xóa bỏ, làm sạch), chưa qua xử lý dấu mốc thời gian hay phương thức, đóng vai trò là lõi dữ liệu thô.</li>
      
          <li value="2">[<strong>PARTicle VERB</strong>][<strong>HẠT ĐỘNG</strong>]: to, OUT, IN, UP, BACK</li>
          <li className="margin-bottom-20 list-none">[Hạt] to đơn lẻ đóng vai trò mã định vị độc lập làm điểm tựa khởi động, đặt nền móng trực tiếp trước hành động để kích hoạt trạng thái nguyên bản hoặc định hướng tác động đến đối tượng. Các [Hạt] như OUT, IN, UP, BACK đơn lẻ đứng sau hành động để mở rộng hướng di chuyển, phạm vi tác động, cường độ hoặc trạng thái tiếp diễn/kết thúc của hạt nhân vận hành đó.</li>

          <li value="3">[<strong>auXILiary VERB</strong>][<strong>TRỢ ĐỘNG</strong>]: does, did, is, has, was, am, are</li>
          <li className="margin-bottom-20 list-none">Là đơn vị từ đơn chuyên biệt chịu trách nhiệm kích hoạt bối cảnh thời gian (Hiện tại/Quá khứ) hoặc làm trợ lực thiết lập thể chủ động/bị động, hoàn thành/tiếp diễn.</li>

          <li value="4">[<strong>MOdal VERB</strong>][<strong>THÁI ĐỘNG</strong>]: must, can, should, may, might</li>
          <li className="margin-bottom-20 list-none">Là mã thiết lập chế độ, tâm thế hoặc khả năng, mức độ chắc chắn của hành động (như bắt buộc, có thể, nên).</li>
      
          <li className="list-none">[<strong>SOFT MOdal VERB</strong>][<strong>Ý THÁI ĐỘNG</strong>]: would, could, should, might</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ mang tính [Ý] nhị, có [Ý] tư, mong muốn là thật nhưng cách nói nhường nhịn và triệt tiêu tính ép. Các khối phức đặc biệt "ought to" và "had BETter" được quét như một [COMplex SOFT MOdal VERB][PHỨC Ý THÁI ĐỘNG] thống nhất.</li>

          <li className="list-none">[<strong>asSERTive MOdal VERB</strong>][<strong>ÁP THÁI ĐỘNG</strong>]: will, shall, can, must, may</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ mang tính trực diện, [Áp] đặt thực tế xuống, không chừa lối thoát cho người nghe. Khối phức đặc biệt "have to" được quét như một [COMplex asSERTive MOdal VERB][PHỨC ÁP THÁI ĐỘNG] thống nhất.</li>

          <li value="5" className="margin-bottom-20">[<strong>non-FInite VERB</strong>][<strong>VÔ HẠN ĐỘNG</strong>]: HAVing NO TENSE or NO SUBject</li>

          <li className="list-none">[<strong>BARE inFINitive VERB</strong>][<strong>THUẦN NGUYÊN ĐỘNG</strong>]: CLEAR</li>
          <li className="margin-bottom-20 list-none">Hành động [Thuần] khiết đứng tự do một mình, hoàn toàn giải phóng và không có "to" đi kèm, thường đứng ngay sau:</li>

          <li className="list-none">[PARTicle VERB][HẠT ĐỘNG]: to</li>
          <li className="list-none">[SOFT MOdal VERB][Ý THÁI ĐỘNG]: would, could, should, might</li>
          <li className="list-none">[asSERTive MOdal VERB][ÁP THÁI ĐỘNG]: will, shall, can, must, may</li>
          <li className="list-none">Nhóm VERB Sai Khiến / Cho Phép: MAKE, LET, let's, HAVE</li>
          <li className="list-none">Nhóm VERB Hỗ Trợ / Tương Tác: HELP, GET (khi ở dạng đặc biệt)</li>
          <li className="margin-bottom-20 list-none">Nhóm VERB Tri Giác / Cảm Nhận: SEE, HEAR, WATCH, FEEL, NOtice, obSERVE, SMELL</li>
      
          <li className="list-none">[<strong>FULL inFINitive VERB</strong>][<strong>TOÀN NGUYÊN ĐỘNG</strong>]: to CLEAR</li>
          <li className="margin-bottom-20 list-none">Sự tích hợp thẳng hàng giữa điểm tựa khởi động và cấu trúc hành động [Thuần] khiết đứng độc lập phía sau.</li>

          <li className="list-none">[<strong>PRESent PARTiciple VERB</strong>][<strong>HIỆN TIẾP ĐỘNG</strong>]: creATing</li>
          <li className="margin-bottom-20 list-none">Là mã hành động đã được biến đổi hình thái sang dạng chuyển động tiếp diễn (-ing), trực tiếp hiển thị bản chất thực thi của hành động.</li>

          <li className="list-none">[<strong>PAST PARTiciple VERB</strong>][<strong>ĐÃ HOÀN ĐỘNG</strong>]: CLEARED, been</li>
          <li className="margin-bottom-20 list-none">Là mã hành động đã được biến đổi trạng thái hoàn thành/bị động (-v3/-ed) để phối hợp với thành phần Thời, trực tiếp hiển thị bản chất thực thi của hành động.</li>

          <li value="6" className="margin-bottom-20">[<strong>FInite VERB</strong>][<strong>HẠN ĐỘNG</strong>]: HAVing TENSE or SUBject</li>

          <li className="list-none">[<strong>BASE VERB</strong>][<strong>NỀN ĐỘNG</strong>]: CLEAR</li>
          <li className="margin-bottom-20 list-none">Hành động hiện tại dạng nền tảng cho các ngôi còn lại. Đây là hình thái phôi thô khi đưa vào câu để gánh thời hiện tại, phân biệt hoàn toàn với [GỐC ĐỘNG] nằm trong từ điển. Ví dụ: they CLEAR.</li>
          
          <li className="list-none">[<strong>THIRD-PERson SINGular VERB</strong>][<strong>NGÔI 3 S ĐỘNG</strong>]: CLEARS, is</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] hiện tại và hành động [Thuần] khiết hòa tan, gộp chung hoàn toàn vào trong cùng một chữ đơn duy nhất.</li>

          <li className="list-none">[<strong>PAST VERB</strong>][<strong>ĐÃ ĐỘNG</strong>]: CLEARED</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] quá khứ và hành động [Thuần] khiết hòa tan, là phân hệ tích hợp tối tân, nén cả dấu mốc Thời gian và bản chất Thực thi hành động vào trong một đơn vị từ đơn duy nhất.</li>
      
          <li className="list-none">[<strong>auXILiary and PRESent PARTiciple VERB</strong>][<strong>TRỢ và HIỆN TIẾP ĐỘNG</strong>]: is creATing, was creATing</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa hành động mang [Thời] gian và hành động mang tính chất đang [Tiếp] diễn.</li>

          <li className="list-none">[<strong>auXILiary and PAST PARTiciple VERB</strong>][<strong>TRỢ và ĐÃ HOÀN ĐỘNG</strong>]: has CLEARD, had CLEARD</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa hành động mang [Thời] gian và hành động mang tính chất đã trọn vẹn, [Hoàn] thành.</li>
      
          <li className="list-none">[<strong>auXILiary, PAST and PRESent PARTiciple VERB</strong>][<strong>TRỢ, ĐÃ VÀ HIỆN TIẾP ĐỘNG</strong>]: has been creATing, had been creATing</li>
          <li className="margin-bottom-20 list-none">Là phân hệ cụm mã gồm nhiều thành phần thời phối hợp nhau để xử lý các bối cảnh thời gian phức tạp (như 🏃‍♂️ Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành Tiếp Diễn, 🏃‍♂️ Khoảng Thời Gian Hành Động ở Quá Khứ Hoàn Thành Tiếp Diễn).</li>

          <li className="list-none">[<strong>SOFT MOdal and BARE inFINitive VERB</strong>][<strong>Ý THÁI và THUẦN NGUYÊN ĐỘNG</strong>]: would CLEAR, could CLEAR, should CLEAR</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Ý] nhị, không ép và hành động [Thuần] khiết.</li>
      
          <li className="list-none">[<strong>asSERTive MOdal and BARE inFINitive VERB</strong>][<strong>ÁP THÁI và THUẦN NGUYÊN ĐỘNG</strong>]: will CLEAR, can CLEAR</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Áp] đặt thực tế và hành động [Thuần] khiết.</li>

          <li className="list-none">[<strong>auXILiary and BARE inFINitive VERB</strong>][<strong>TRỢ và THUẦN NGUYÊN ĐỘNG</strong>]: DID CLEAR, DOES CLEAR</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] gian và hành động [Thuần] khiết song hành, được tách riêng biệt bằng một khoảng trắng trong câu.</li>
      
        </ol>

      <p className="margin-top-20"><strong>Sơ đồ phối hợp mã mã nguồn</strong> [<strong>Clear</strong>]:</p>
      
        <ul className="list-square">
      
          <li>is CLEARing → [auXILiary VERB][TRỢ ĐỘNG] is + [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] CLEARing</li>

          <li>was CLEARing → [auXILiary VERB][TRỢ ĐỘNG] was + [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] CLEARing</li>
      
          <li>has CLEARED → [auXILiary VERB][TRỢ ĐỘNG] has + [ĐÃ HOÀN ĐỘNG] CLEARED</li>
      
          <li>had been CLEARing → [auXILiary and PAST PARTiciple VERB] had been + [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] CLEARing</li>

          <li>has been CLEARing → [auXILiary and PAST PARTiciple VERB] has been + [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] CLEARing</li>
      
          <li>CLEARED (⏳ Thời Gian Hành Động ở Quá Khứ Đơn) → [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG], [PAST VERB][ĐÃ ĐỘNG] (Một đơn vị tích hợp cả hai)</li>
      
          <li>should CLEAR → [Ý-Thái Thuần ĐỘNG] should + [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] to CLEAR</li>
      
        </ul>
      


      {/* 1.  */}

			<h3 className="margin-y-50 text-center">PHẦN 1: HỆ THỐNG CÁC VÍ DỤ PHÂN HỆ MÃ TIẾNG ANH</h3>

      
      <h4 className="margin-y-40">1. Phân hệ [VERB HEAD][ĐỘNG LÕI]</h4>

      <p className="text-indent-whole">Khi nhìn vào một từ đơn hành động, người học nhận diện diện mạo vật lý của nó là [VERB HEAD][ĐỘNG LÕI].</p>

      <p className="text-indent-whole">Khi đặt vào sơ đồ vận hành, chính hình thái [ĐỘNG] này sẽ hình thành nên các loại chức năng độc lập:</p>

          
      <p className="margin-top-20 text-indent-whole" id="SUBject-HEAD"><strong>Hình thành chức năng</strong> [<strong>SUBject HEAD</strong>][<strong>CHỦ LÕI</strong>] <strong>làm</strong> [<strong>SUBject</strong>][<strong>CHỦ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 1: /ˈklærəti/</p>
      
        <ul className="list-square">
      
          <li>[the {'{CLARity}'} of this inSTRUCTion] HELPED EVERyone.</li>
          <li className="margin-bottom-20 list-none">[{'{Sự rõ ràng}'} của lời hướng dẫn này] đã giúp đỡ mọi người.</li>
      
          <li className="list-none">Khối trong: {'{CLARity}'} - {'{MODified NOUN}'}{'{DIỆN DANH}'} hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "CLEAR" biến đổi thành "CLAR" mặc thêm hậu tố "-ity" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI], tạo thành một [SUBject][CHỦ] thực thể định danh độc lập. [SUBject HEAD][CHỦ LÕI] đảm nhận nhiệm vụ làm thành phần nền tảng ở đầu câu để làm định danh [NOUN HEAD][DANH LÕI] cho một đặc tính/sự việc.</li>
      
          <li className="list-none">Khối ngoài: [the {'{CLARity}'} of this inSTRUCTion] - [SUBject PHRASE][CHỦ CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM].</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole" id="ADjective-HEAD"><strong>Hình thành chức năng</strong> [<strong>ADjective HEAD</strong>][<strong>TÍNH LÕI</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 2: /klɪə(r)/</p>
      
        <ul className="list-square">
      
          <li>we NEED [a {'{CLEAR}'} explaNAtion].</li>
          <li className="margin-bottom-20 list-none">Chúng ta cần [một lời giải thích {'{rõ ràng}'}].</li>
      
          <li className="list-none">Khối trong: {'{CLEAR}'} - {'{MODified ADjective}'}{'{DIỆN TÍNH}'} hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "CLEAR" khi giữ nguyên trạng thái nhưng chuyển đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI] có khả năng [ADjective][TÍNH] mô tả tính chất đặc điểm dưới dạng từ đơn lẻ. [ADjective HEAD][TÍNH LÕI] kích hoạt cơ chế của bộ quét đặt ngay trước đối tượng [OBject HEAD][TÂN LÕI] "explaNAtion" để hiển thị đặc điểm của đối tượng đó.</li>
      
          <li className="list-none">Khối ngoài: [a {'{CLEAR}'} explaNAtion] - [OBject PHRASE][TÂN CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM].</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole" id="ADjunct-1"><strong>Hình thành chức năng</strong> [<strong>ADverb HEAD</strong>][<strong>TRẠNG LÕI</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 3: /ˈklɪəli/</p>
      
        <ul className="list-square">
      
          <li>she exPLAINED the PROCess [{'{CLEARly}'}].</li>
          <li className="margin-bottom-20 list-none">Cô ấy đã giải thích quy trình [một cách rõ ràng].</li>
      
          <li className="list-none">Khối trong: {'{CLEARly}'} - {'{MODified ADVERB}'}{'{DIỆN TRẠNG}'} hình thành từ khối [ROOT ADjective][GỐC TÍNH] nguyên bản "CLEAR" mặc thêm hậu tố "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI], chuyển đổi bản chất sang chức năng trạng dưới dạng từ đơn lẻ thông dụng.</li>
      
          <li className="list-none">Khối ngoài: [{'{CLEARly}'}] - [ADjunct 1][PHỤ 1] thực thi vai trò làm thành phần bổ nghĩa đứng sau [VERB HEAD][ĐỘNG LÕI] "exPLAINED" để xác định bối cảnh cách thức.</li>
      
        </ul>


      <h4 className="margin-y-40">2. Phân hệ [VERB PHRASE][ĐỘNG CỤM]</h4>
          
      <p className="text-indent-whole">Khi người học nhìn thấy một vùng mã chứa nhiều thành phần đi kèm hành động, họ nhận diện ngay diện mạo vật lý [VERB PHRASE][ĐỘNG CỤM]. Khối hình thái này sẽ hình thành đầy đủ các chương trình chức năng đầu ra:</p>


      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng</strong> [<strong>SUBject PHRASE</strong>][<strong>CHỦ CỤM</strong>] <strong>làm</strong> [<strong>SUBject</strong>][<strong>CHỦ</strong>]</p>

      <p className="margin-top-20 text-indent-whole" id="SUBject-PHRASE">Ví dụ 4a:</p>
      
        <ul className="list-square">
      
          <li>[Clearing the browser history] improves security.</li>
          <li className="margin-bottom-20 list-none">[Việc xóa lịch sử trình duyệt] cải thiện tính bảo mật.</li>
      
          <li className="list-none">Khối trong: [CLEARing the browser history] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng thêm đuôi "-ing", mở rộng thành một vùng mã hành động phức hợp gồm hành động xóa bỏ, đối tượng tiếp nhận và đặc điểm đi kèm.</li>
      
          <li className="list-none">Khối ngoài: [CLEARing the browser history] - [SUBject PHRASE][CHỦ CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM] để thiết lập nền tảng thông tin đứng đầu toàn câu để làm [SUBject][CHỦ] trước hạt nhân [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] "improves".</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng</strong> [<strong>OBject PHRASE</strong>][<strong>TÂN CỤM</strong>] <strong>làm</strong> [<strong>OBject</strong>][<strong>TÂN</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole" id="OBject-PHRASE">Ví dụ 4b: </p>
      
        <ul className="list-square">
      
          <li>the IT TEAM FINished [CLEARing OLD DAtabase FILES].</li>
          <li className="margin-bottom-20 list-none">Đội ngũ CNTT đã hoàn thành [việc dọn dẹp các tệp tin cơ sở dữ liệu cũ].</li>
      
          <li className="list-none">Khối trong: [CLEARing OLD DAtabase FILES] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng thêm đuôi "-ing", mở rộng thành một vùng mã hành động phức hợp gồm hành động dọn dẹp, đối tượng tiếp nhận và đặc điểm đi kèm.</li>
      
          <li className="list-none">Khối ngoài: [CLEARing OLD DAtabase FILES] - [OBject PHRASE][TÂN CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM] tích hợp chuỗi dữ liệu đầu việc để làm [OBject][TÂN] thành phần chịu tác động đứng ngay sau cặp phối hợp [SUBject PHRASE][CHỦ CỤM] "the IT TEAM" và [PAST VERB][ĐÃ ĐỘNG] "FINished".</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole" id="SUBject-PHRASE-2"><strong>Hình thành chức năng</strong> [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>TÍNH CỤM</strong>] <strong>dạng sắp xảy ra chủ động</strong> -<strong>to V</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5a:</p>
      
        <ul className="list-square">
      
          <li>the STAFF MEMber [to CLEAR the MEETing ROOM] is outSIDE.</li>
          <li className="margin-bottom-20 list-none">Nhân viên [sắp sửa dọn dẹp phòng họp] thì ở bên ngoài.</li>
      
          <li className="list-none">Khối trong: [to CLEAR the MEETing ROOM] - [FULL inFINitive VERB PHRASE][TOÀN NGUYÊN ĐỘNG CỤM] chứa [PARTicle VERB][HẠT ĐỘNG] ở dạng nguyên bản có "to" để biểu thị tính chủ động hướng tới tương lai.</li>
      
          <li className="list-none">Khối ngoài: [to CLEAR the MEETing ROOM] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng [SUBject BLOCK][CHỦ KHỐI] "STAFF MEMber" để quét và hiển thị đặc điểm hành động sắp sửa xảy ra mang tính chủ động của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>TÍNH CỤM</strong>] <strong>dạng sắp xảy ra bị động -to be</strong> <strong>v3</strong>/-<strong>ed</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5b:</p>
      
        <ul className="list-square">
      
          <li>the LAND [to be CLEARED NEXT MONTH] beLONGS to the CITy.</li>
          <li className="margin-bottom-20 list-none">Khu đất [sắp sửa được giải phóng mặt bằng vào tháng tới] thuộc về thành phố.</li>
      
          <li className="list-none">Khối trong: [to be CLEARED NEXT MONTH] - [FULL inFINitive PARTiciple VERB PHRASE][TOÀN NGUYÊN HOÀN ĐỘNG CỤM] hiển thị dưới dạng mô hình "to be + V3/-ed", chứa [PAST PARTiciple VERB][ĐÃ HOÀN ĐỘNG] biến đổi hình thái bị động, kết hợp phần mở rộng phương thức để biểu thị trạng thái bị động hướng tới tương lai.</li>
      
          <li className="list-none">Khối ngoài: [to be CLEARED NEXT MONTH] - [ADjective PHRASE][TÍNH CỤM] kích hoạt cơ chế bộ quét đặt ngay sau đối tượng [SUBject HEAD][CHỦ LÕI] "LAND" để mô tả đặc điểm trạng thái sắp sửa được tác động của đối tượng đó.</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole">[<strong>TÍNH CỤM</strong>] <strong>dạng đang diễn ra</strong> -<strong>ing</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5c:</p>
      
        <ul className="list-square">
      
          <li>the WORKer [CLEARing the ROAD BLOCK] WORE a VEST.</li>
          <li className="margin-bottom-20 list-none">Người công nhân [đang dọn dẹp chướng ngại vật trên đường] đã mặc một chiếc áo khoác bảo hộ.</li>
      
          <li className="list-none">Khối trong: [CLEARing the ROAD BLOCK] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] thêm đuôi "-ing" để biểu thị tính chủ động đang xảy ra.</li>
      
          <li className="list-none">Khối ngoài: [CLEARing the ROAD BLOCK] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng [SUBject HEAD][CHỦ LÕI] "WORKer" để quét và hiển thị đặc điểm hành động chủ động của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>TÍNH CỤM</strong>] <strong>dạng đã xong bị động</strong> -<strong>v3</strong>/-<strong>ed</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5d:</p>
      
        <ul className="list-square">
      
          <li>the FILES [CLEARED by the adMINistrator] are PERmanently deLETEd.</li>
          <li className="margin-bottom-20 list-none">Các tệp tin [đã được xóa bởi quản trị viên] thì bị xóa vĩnh viễn.</li>
      
          <li className="list-none">Khối trong: [CLEARED by the adMINistrator] - [PAST PARTiciple VERB PHRASE][ĐÃ HOÀN ĐỘNG CỤM] hiển thị dưới dạng một vùng mã chứa [PAST PARTiciple VERB][ĐÃ HOÀN ĐỘNG] ở dạng bị động thuộc trục thời quá khứ và phần mở rộng phương thức.</li>
      
          <li className="list-none">Khối ngoài: [CLEARED by the adMINistrator] - [ADjective PHRASE][TÍNH CỤM] kích hoạt cơ chế bộ quét đặt ngay sau đối tượng [SUBject HEAD][CHỦ LÕI] "FILES" để mô tả đặc điểm trạng thái bị động hoàn thành của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>TÍNH CỤM</strong>] <strong>dạng nguyên bản</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5e:</p>
      
        <ul className="list-square">
      
          <li>we FOUND an appliCAtion [CApable of CLEARing BACKground JUNK].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã tìm thấy một ứng dụng [có khả năng dọn dẹp rác chạy ngầm].</li>
      
          <li className="list-none">Khối trong: [CApable of CLEARing BACKground JUNK] - CỤM thành phần bắt đầu bằng mã đặc điểm gốc kết hợp mở rộng GIỚI CỤM phía sau, chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng -ing sau GIỚI.</li>
      
          <li className="list-none">Khối ngoài: [CApable of CLEARing BACKground JUNK] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng [OBject HEAD][TÂN LÕI] "appliCAtion" để quét và xác định năng lực, đặc điểm của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole" id="ADjunct-2"><strong>Hình thành chức năng</strong> [<strong>ADjunct 2</strong>][<strong>PHỤ 2</strong>] </p>

      <p className="margin-top-20 text-indent-whole"><strong>TRẠNG CỤM dạng</strong> -<strong>to V</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6a:</p>
      
        <ul className="list-square">
      
          <li>they RAN the SOFTware [to CLEAR CACHE FILES].</li>
          <li className="margin-bottom-20 list-none">Họ đã chạy phần mềm [để xóa các tệp bộ nhớ đệm].</li>
      
          <li className="list-none">Khối trong: [to CLEAR CACHE FILES] - [FULL inFINitive VERB PHRASE][TOÀN NGUYÊN ĐỘNG CỤM] định hình dưới dạng một vùng mã hành động đứng cuối chuỗi thông tin, bắt đầu bằng [PARTicle VERB][HẠT ĐỘNG] nguyên bản có "to".</li>
      
          <li className="list-none">Khối ngoài: [to CLEAR CACHE FILES] - [ADjunct 2][PHỤ 3] đảm nhận vai trò làm một khối bối cảnh mục đích đứng sau để bổ nghĩa cho [VERB HEAD][ĐỘNG LÕI] "RAN".</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole"><strong>TRẠNG CỤM dạng</strong> -<strong>to V</strong> (<strong>có dấu phẩy</strong>):</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6b:</p>
      
        <ul className="list-square">
      
          <li>[to CLEAR the misunderSTANDing], she SENT an Email.</li>
          <li className="margin-bottom-20 list-none">[Để xóa bỏ sự hiểu lầm], cô ấy đã gửi một email.</li>
      
          <li className="list-none">Khối trong: [to CLEAR the misunderSTANDing] - [FULL inFINitive VERB PHRASE][TOÀN NGUYÊN ĐỘNG CỤM] bắt đầu bằng [PARTicle VERB][HẠT ĐỘNG] nguyên bản có "to", được đảo lên đứng biệt lập ở đầu câu và ngăn cách bằng dấu phẩy.</li>
      
          <li className="list-none">Khối ngoài: [to CLEAR the misunderSTANDing], - [ADjunct][PHỤ] đảm nhận nhiệm vụ làm khối bối cảnh mục đích nhấn mạnh cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>TRẠNG CỤM dạng</strong> -<strong>ing</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6c:</p>
      
        <ul className="list-square">
      
          <li>the MANager SPENT HOURS [CLEARing OLD User PROfiles].</li>
          <li className="margin-bottom-20 list-none">Người quản lý đã dành hàng giờ đồng hồ [cho việc xóa các hồ sơ người dùng cũ].</li>
      
          <li className="list-none">Khối trong: [CLEARing OLD User PROfiles] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng đuôi "-ing" đứng ở phần sau câu nhằm làm rõ tiến trình nội dung.</li>
      
          <li className="list-none">Khối ngoài: [CLEARing OLD User PROfiles] - [ADjunct][PHỤ] đóng vai trò làm khối bối cảnh cách thức/nội dung đi kèm để bổ nghĩa trực tiếp cho khuôn mẫu [VERB HEAD][ĐỘNG LÕI] "SPENT" phía trước.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>TRẠNG CỤM dạng</strong> -<strong>ing</strong> (<strong>có dấu phẩy</strong>):</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6d:</p>
      
        <ul className="list-square">
      
          <li>[CLEARing the WORKspace EARly], he LEFT the OFFice with PEACE of MIND.</li>
          <li className="margin-bottom-20 list-none">[Do dọn dẹp không gian làm việc sớm], anh ấy đã rời văn phòng với tâm trí thảnh thơi.</li>
      
          <li className="list-none">Khối trong: [CLEARing the WORKspace EARly] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] đứng biệt lập ở đầu câu, ngăn cách bằng dấu phẩy, mang [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng "-ing" do được rút gọn từ một hệ [LIÊN CÂU] Trạng phụ thuộc có cùng thành phần lõi [SUBject PROnoun][CHỦ ĐẠI].</li>
      
          <li className="list-none">Khối ngoài: [CLEARing the WORKspace EARly] - [ADjunct][PHỤ] đóng vai trò làm một khối bối cảnh nguyên nhân/phương thức tổng thể để bổ nghĩa cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40">3. Phân hệ [prepoSITional PHRASE][GIỚI CỤM]</h4>
          
      <p className="margin-top-20 text-indent-whole">Khi người học nhìn thấy một vùng mã mở rộng bắt đầu bằng một mã định vị (prepoSITion) kéo theo một khối tên gọi phía sau, họ nhận diện ngay diện mạo vật lý [prepoSITional PHRASE][GIỚI CỤM]. Khối hình thái này không tạo ra dữ liệu đầu việc (Danh) mà chỉ chuyên biệt hình thành nên 2 chương trình chức năng:</p>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng</strong> [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>GIỚI CỤM</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 7:</p>
      
        <ul className="list-square">
      
          <li>the reQUIrement [for a CLEAR STRATegy] is URgent.</li>
          <li className="margin-bottom-20 list-none">Yêu cầu [cho một chiến lược rõ ràng] thì khẩn cấp.</li>
      
          <li className="list-none">Khối trong: [for a CLEAR STRATegy] - [prepoSITional PHRASE][GIỚI CỤM] xuất hiện dưới dạng một vùng mã định vị không chứa hạt nhân hành động, bắt đầu bằng [prepoSITion][GIỚI] "for".</li>
      
          <li className="list-none">Khối ngoài: [for a CLEAR STRATegy] - [ADjective PHRASE][TÍNH CỤM] vận hành như một bộ quét đặt ngay phía sau đối tượng [SUBject HEAD][CHỦ LÕI] "reQUIrement" để hiển thị và mô tả đặc điểm phạm vi thuộc về của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng</strong> [<strong>ADjunct</strong>][<strong>PHỤ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [prepoSITional PHRASE][<strong>GIỚI CỤM</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 8a:</p>
      
        <ul className="list-square">
      
          <li>they MADE the deCISion [<strong>af</strong>ter a CLEAR explaNAtion].</li>
          <li className="margin-bottom-20 list-none">Họ đã đưa ra quyết định [sau một lời giải thích rõ ràng].</li>
      
          <li className="list-none">Khối trong: [<strong>af</strong>ter a CLEAR explaNAtion] - [prepoSITional PHRASE][GIỚI CỤM] xuất hiện dưới dạng một vùng mã xác lập thời điểm, bắt đầu bằng [prepoSITion][GIỚI] "<strong>af</strong>ter".</li>
      
          <li className="list-none">Khối ngoài: [<strong>af</strong>ter a CLEAR explaNAtion] - [ADjunct][PHỤ] đảm nhận vai trò làm một khối bối cảnh thời gian đứng sau để xác định cơ sở cho [VERB HEAD][ĐỘNG LÕI] "MADE".</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>] <strong>cấu tạo từ</strong> [prepoSITional PHRASE][<strong>GIỚI CỤM</strong>] (<strong>có dấu phẩy</strong>):</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 8b:</p>
      
        <ul className="list-square">
      
          <li>[with a CLEAR GOAL], she QUICKly FINished the rePORT.</li>
          <li className="margin-bottom-20 list-none">[Với một mục tiêu rõ ràng], cô ấy đã hoàn thành bản báo cáo một cách nhanh chóng.</li>
      
          <li className="list-none">Khối trong: [with a CLEAR GOAL] - [prepoSITional PHRASE][GIỚI CỤM] bắt đầu bằng [prepoSITion][GIỚI] "with" kéo theo vùng cụm danh chủ/DANH CỤM phía sau, được đảo lên đứng biệt lập ở đầu câu và ngăn cách bằng dấu phẩy.</li>
      
          <li className="list-none">Khối ngoài: [with a CLEAR GOAL] - [ADjunct][PHỤ] đảm nhận nhiệm vụ thiết lập một khối bối cảnh phương thức tổng thể để bổ nghĩa cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40">4. Phân hệ [conJUNCtional CLAUSE][LIÊN CÂU]</h4>

      <p className="margin-top-20 text-indent-whole">Khi vùng mã mở rộng thành một phân hệ chứa một hệ con hoàn chỉnh có cả thành phần nền tảng [SUBject HEAD][CHỦ LÕI] riêng và [VERB HEAD][ĐỘNG LÕI] riêng, người học xác định được diện mạo vật lý [conJUNCtional CLAUSE][LIÊN CÂU].</p>

      <p className="margin-top-20 text-indent-whole"><strong>Bản chất vật lý</strong>: [LIÊN CÂU] tuy mang hình thái của một hệ con đầy đủ nhưng <strong>không thể đứng một mình độc lập</strong> để tạo thành một thông điệp trọn vẹn. Nó luôn lồng ghép vào sơ đồ tổng thể để thực thi một chức năng phụ thuộc.</p>

      <p className="margin-top-20 text-indent-whole">Dựa trên sự xuất hiện của mã kết nối, [LIÊN CÂU] được chia làm 2 phân hệ vận hành:</p>

          
      <h5 className="margin-y-30 text-indent-whole">4.1 Phân hệ [conJUNCtional CLAUSE][LIÊN CÂU]</h5>

      <p className="margin-top-20 text-indent-whole">Phân hệ này sử dụng các mã kết nối ([conJUNCtion][LIÊN] hoặc mã định vị) xuất hiện trực tiếp ở đầu hệ con để làm điểm tựa liên kết dữ liệu.</p>


      <p className="margin-top-20 text-indent-whole" id="SUBject-CLAUSE"><strong>Hình thành chức năng</strong> [<strong>SUBject CLAUSE</strong>][<strong>CHỦ CÂU</strong>] <strong>làm</strong> [<strong>SUBject</strong>][<strong>CHỦ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 9:</p>
      
        <ul className="list-square">
      
          <li>[how you CLEAR these SYStem LOGS] is confidential.</li>
          <li className="margin-bottom-20 list-none"> [Cách bạn xóa các nhật ký hệ thống này] là bảo mật.</li>
      
          <li className="list-none">Khối trong: [how you CLEAR these SYStem LOGS] - [interROGative CONtent CLAUSE][VẤN NỘI CÂU] chứa thành phần liên kết trực quan ở đầu, có [SUBject PROnoun][CHỦ ĐẠI] "you" và [BASE VERB][NỀN ĐỘNG] "CLEAR" thiết lập phối hợp hành động.</li>
      
          <li className="list-none">Khối ngoài: [how you CLEAR these SYStem LOGS] - [SUBject CLAUSE][CHỦ CÂU] quản lý khối thông tin quy trình, điều khiển chính cho hành động [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] "is".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole" id="SUBject CLAUSE-2"><strong>Hình thành chức năng</strong> [<strong>SUBject PHRASE</strong>][<strong>CHỦ CỤM</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 10:</p>
      
        <ul className="list-square">
      
          <li>[the engiNEER {'{who CLEARED the ERror CODES}'}] FIXED the SERver.</li>
          <li className="margin-bottom-20 list-none">[Người kỹ sư {'{người mà đã xóa các mã lỗi}'}] đã sửa chữa máy chủ.</li>
      
          <li className="list-none">Khối trong: {'{who CLEARED the ERror CODES}'} - {'{RELative CLAUSE}'}{'{QUAN CÂU}'} chứa mã liên kết chỉ người đứng đầu, mang hạt nhân [PAST VERB][ĐÃ ĐỘNG] "CLEARED" xử lý bối cảnh thuộc trục thời quá khứ. Hoạt động như một MODule lọc bổ sung đặt sau một khối tên gọi để nhận diện đối tượng [SUBject HEAD][CHỦ LÕI] "the engiNEER".</li>
      
          <li className="list-none">Khối ngoài: [the engiNEER {'{who CLEARED the ERror CODES}'}] - [SUBject PHRASE][CHỦ CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM].</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole" id="ADjunct-3"><strong>Hình thành chức năng</strong> [<strong>ADjunct 3</strong>][<strong>PHỤ 3</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11:</p>
      
        <ul className="list-square">
      
          <li>the TEAM CELebrated [be<strong>cause</strong> the LEADer CLEARED the PROject BUDget].</li>
          <li className="margin-bottom-20 list-none">Đội ngũ đã ăn mừng [vì người trưởng nhóm đã thông qua ngân sách dự án].</li>
      
          <li className="list-none">Khối trong: [be<strong>cause</strong> the LEADer CLEARED the PROject BUDget] - [suBORdinate CLAUSE][PHỤ CÂU] kích hoạt ngay sau [conJUNCtion][LIÊN] nguyên nhân "be<strong>cause</strong>", chứa [SUBject HEAD][CHỦ LÕI] "the LEADer" và [PAST VERB][ĐÃ ĐỘNG] "CLEARED" mang dấu mốc trục thời quá khứ.</li>
      
          <li className="list-none">Khối ngoài: [be<strong>cause</strong> the LEADer CLEARED the PROject BUDget] - [ADjunct 3][PHỤ 3] thiết lập MODule bối cảnh để bổ nghĩa cho toàn bộ phần diện thông tin chính "the TEAM CELebrated" đứng trước.</li>
      
        </ul>



      <h5 className="margin-y-30 text-indent-whole">4.2 Phân hệ [CONtact CLAUSE][CHẠM CÂU]</h5>

      <p className="margin-top-20 text-indent-whole">Ở phân hệ này, các thành phần liên kết đã được người bản ngữ chủ động lược bỏ để tối ưu tốc độ truyền tải thông tin. Về diện mạo vật lý, khối mã này nhìn hoàn toàn giống như một hệ con độc lập có đầy đủ cặp bài trùng [SUBject HEAD][CHỦ LÕI] và [VERB HEAD][ĐỘNG LÕI], tuy nhiên chức năng của nó vẫn là chức năng phụ thuộc và vẫn sinh ra đầy đủ 3 đầu ra: Danh, Tính, Trạng.</p>


      <p className="margin-top-20 text-indent-whole" id="OBject-CLAUSE"><strong>Hình thành chức năng</strong> [<strong>OBject CLAUSE</strong>][<strong>TÂN CÂU</strong>] <strong>làm</strong> [<strong>OBject</strong>][<strong>TÂN</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11a:</p>
      
        <ul className="list-square">
      
          <li>i beLIEVE [you CLEARED the STORage SPACE].</li>
          <li className="margin-bottom-20 list-none">Tôi tin [bạn đã dọn sạch không gian lưu trữ].</li>
      
          <li className="list-none">Khối trong: [you CLEARED the STORage SPACE] - [ZEro CONtent CLAUSE][KHUYẾT NỘI CÂU] đã ẩn [conJUNCtion][LIÊN] định hướng "that", chỉ còn hiển thị trọn vẹn khối [SUBject PROnoun][CHỦ ĐẠI] "you" và [PAST VERB][ĐÃ ĐỘNG] "CLEARED".</li>
      
          <li className="list-none">Khối ngoài: [you CLEARED the STORage SPACE] - [OBject CLAUSE][TÂN CÂU] nhận toàn bộ năng lượng niềm tin từ [BASE VERB][NỀN ĐỘNG] "beLIEVE".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>SUBject PHRASE</strong>][<strong>CHỦ CỤM</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11b:</p>
      
        <ul className="list-square">
      
          <li>[the DESK {'{the emPLOYee CLEARED}'}] LOOKED VERy NEAT.</li>
          <li className="margin-bottom-20 list-none">[Chiếc bàn làm việc {'{mà người nhân viên đã dọn dẹp}'}] trông rất gọn gàng.</li>
      
          <li className="list-none">Khối trong: {'{the emPLOYee CLEARED}'} - {'{ZEro RELative CLAUSE}'}{'{KHUYẾT QUAN CÂU}'} đã ẩn mã liên kết vật thể đứng trước, giữ lại khối [SUBject HEAD][CHỦ LÕI] "the emPLOYee" và [PAST VERB][ĐÃ ĐỘNG] "CLEARED". Đóng vai trò như bộ quét đặt ngay sau đối tượng [SUBject HEAD][CHỦ LÕI] "the DESK" để làm rõ đặc điểm cho đối tượng này.</li>
      
          <li className="list-none">Khối ngoài: [the DESK {'{the emPLOYee CLEARED}'}] - [SUBject PHRASE][CHỦ CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM].</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>ADjunct</strong>][<strong>PHỤ</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11c:</p>
      
        <ul className="list-square">
      
          <li>[should you CLEAR the PENDing TASKS toDAY], we will START the NEW PLAN.</li>
          <li className="margin-bottom-20 list-none">[Nếu bạn giải quyết xong các nhiệm vụ còn tồn đọng trong hôm nay], chúng tôi sẽ bắt đầu kế hoạch mới.</li>
      
          <li className="list-none">Khối trong: [should you CLEAR the PENDing TASKS toDAY] - [suBORdinate CLAUSE][PHỤ CÂU] vận hành ở trạng thái ẩn [conJUNCtion][LIÊN] điều kiện "if" bằng giải pháp đảo [SOFT MOdal and BARE inFINitive VERB][Ý THÁI và THUẦN NGUYÊN ĐỘNG] "Should" lên trước, tuy thiết lập bề mặt biến đổi nhưng bản chất vẫn giữ trọn vẹn [SUBject PROnoun][CHỦ ĐẠI] "you" và [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] "CLEAR".</li>
      
          <li className="list-none">Khối ngoài: [should you CLEAR the PENDing TASKS toDAY] - [ADjunct][PHỤ] đảm nhận nhiệm vụ thiết lập khối bối cảnh giả định/điều kiện để bổ nghĩa cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40" id="emBEDded-CLAUSE">5. Phân hệ [Nhúng Đóng Gói][emBEDded Structure]</h4>

      <p className="margin-top-20 text-indent-whole">Khi hệ thống vận hành ở mức độ phức tạp, các khối mã sẽ lồng vào nhau tạo nên hệ thống phân tầng tối tân.</p>


      <h5 className="margin-top-20 text-indent-whole">[NOUN PHRASE][DANH CỤM]</h5>

      <p className="margin-top-20 text-indent-whole">Ví dụ 12a: [SUBject PHRASE][CHỦ CỤM]</p>
      
        <ul className="list-square">
      
          <li>[ANalyzing {'{how the PROgram CLEARS METadata}'}] is NECessary.</li>
          <li className="margin-bottom-20 list-none">[Việc phân tích {'{cách mà chương trình xóa siêu dữ liệu}'}] thì cần thiết.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối ngoài</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Khối trong: [ANalyzing {'{how the PROgram CLEARS METadata}'}] - [PRESent PARTiciple VERB and emBEDded CLAUSE][HIỆN TIẾP ĐỘNG và NHÚNG CÂU] biểu thị dưới dạng một vùng mã mở rộng lớn bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng đuôi "-ing" và kéo theo thành phần bổ trợ phía sau.</li>
      
          <li className="list-none">Khối ngoài: [ANalyzing {'{how the PROgram CLEARS METadata}'}] - [SUBject PHRASE][CHỦ CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM] chịu trách nhiệm làm một vùng đầu việc lớn cần thực hiện, đảm nhận vai trò làm [SUBject][CHỦ] để thiết lập nền tảng thông tin đứng đầu toàn câu trước [auXILiary VERB][TRỢ ĐỘNG] "is".</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối trong</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Khối trong: {'{how the PROgram CLEARS METadata}'} - [interROGative CONtent CLAUSE][VẤN NỘI CÂU] định hình dưới dạng một khối mã con nằm gọn hoàn toàn bên trong vùng mã tổng thể, chứa đầy đủ [SUBject HEAD][CHỦ LÕI] riêng "the program" và [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] riêng "CLEARS" thiết lập theo trục thời hiện tại.</li>
      
          <li className="list-none">Khối ngoài: {'{how the PROgram CLEARS METadata}'} - [OBject CLAUSE][TÂN CÂU] chịu sự điều phối trực tiếp từ hạt nhân hành động "Analyzing" ở tầng ngoài, tích hợp chuỗi thông tin tiếp nhận hành động để làm rõ nội dung cho việc phân tích.</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12b: [OBject PHRASE][TÂN CỤM]</p>
      
        <ul className="list-square">
      
          <li>we recomMEND [MONitoring {'{why the DAtabase CLEARS SESsions}'}].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi kiến nghị [việc giám sát {'{tại sao cơ sở dữ liệu lại xóa các phiên làm việc}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối ngoài</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Khối trong: [MONitoring {'{why the DAtabase CLEARS SESsions}'}] - [PRESent PARTiciple VERB and emBEDded CLAUSE][HIỆN TIẾP ĐỘNG và NHÚNG CÂU] biểu thị dưới dạng một vùng mã mở rộng lớn bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng đuôi "-ing" và kéo theo thành phần bổ trợ phía sau.</li>
      
          <li className="list-none">Khối ngoài: [MONitoring {'{why the DAtabase CLEARS SESsions}'}] - [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] đóng vai trò làm [OBject PHRASE][TÂN CỤM] (thành phần chịu tác động) đứng ngay sau hạt nhân [BASE VERB][NỀN ĐỘNG] "recomMEND" để bổ sung trọn vẹn thông tin cho hành động kiến nghị này.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối trong</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Khối trong: {'{why the DAtabase CLEARS SESsions}'} - [interROGative CONtent CLAUSE][VẤN NỘI CÂU] định hình dưới dạng một khối mã con nằm gọn hoàn toàn bên trong vùng mã tổng thể, chứa đầy đủ [SUBject HEAD][CHỦ LÕI] riêng "the DAtabase" và [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] riêng "CLEARS" thiết lập theo trục thời hiện tại đi sau [conJUNCtion][LIÊN] "why".</li>
      
          <li className="list-none">Khối ngoài: {'{why the DAtabase CLEARS SESsions}'} - [OBject CLAUSE][TÂN CÂU] chịu sự điều phối trực tiếp từ hạt nhân hành động "MONitoring" ở tầng ngoài, làm rõ nội dung cho việc giám sát.</li>
      
        </ul>


      <h5 className="margin-top-20 text-indent-whole">[ADjective PHRASE][TÍNH CỤM]</h5>

      <p className="margin-top-20 text-indent-whole">Ví dụ 13:</p>
      
        <ul className="list-square">
      
          <li>they have DOUBTS [a<strong>bout</strong> {'{how they CLEAR the seCUrity CHECK}'}].</li>
          <li className="margin-bottom-20 list-none">Họ có những nghi ngờ [về {'{cách mà họ vượt qua vòng kiểm tra an ninh}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối ngoài</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Khối trong: [a<strong>bout</strong> {'{how they CLEAR the seCUrity CHECK}'}] - [prepoSITional PHRASE][GIỚI CỤM] biểu thị dưới dạng một vùng mã lớn bắt đầu bằng [prepoSITion][GIỚI] "a<strong>bout</strong>".</li>
      
          <li className="list-none">Khối ngoài: [a<strong>bout</strong> {'{how they CLEAR the seCUrity CHECK}'}] - [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] vận hành như một bộ lọc tổng thể đặt ngay phía sau để mô tả đặc điểm nội dung cho [OBject HEAD][TÂN LÕI] "DOUBTS" đứng trước nó.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối trong</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Khối trong: {'{how they CLEAR the seCUrity CHECK}'} - [interROGative CONtent CLAUSE][VẤN NỘI CÂU] định hình dưới dạng khối mã con nằm gọn bên trong, chứa [SUBject PROnoun][CHỦ ĐẠI] "they" và [BASE VERB][NỀN ĐỘNG] "CLEAR".</li>
      
          <li className="list-none">Khối ngoài: {'{how they CLEAR the seCUrity CHECK}'} - [OBject CLAUSE][TÂN CÂU] chịu sự điều phối trực tiếp của [prepoSITion][GIỚI] "a<strong>bout</strong>" ở tầng ngoài.</li>
      
        </ul>


          
      <h5 className="margin-top-20 text-indent-whole">[ADjunct][PHỤ]</h5>

      <p className="margin-top-20 text-indent-whole">Ví dụ 14:</p>
      
        <ul className="list-square">
      
          <li>the OFFicer LOOKED diRECTly [at {'{where the TEAM CLEARED the LAND}'}].</li>
          <li className="margin-bottom-20 list-none">Viên sĩ quan đã nhìn thẳng [vào {'{nơi mà đội ngũ đã giải phóng mặt bằng}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối ngoài</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Khối trong: [at {'{where TEAM CLEARED the LAND}'}] - [prepoSITional PHRASE][GIỚI CỤM] biểu thị dưới dạng một vùng mã xác lập không gian lớn bắt đầu bằng [prepoSITion][GIỚI] "at".</li>
      
          <li className="list-none">Khối ngoài: [at {'{where the TEAM CLEARED the LAND}'}] - [<strong>ADjunct</strong>][<strong>PHỤ</strong>] đảm nhận vai trò làm một khối bối cảnh địa điểm tổng thể đứng sau bổ nghĩa cho [VERB HEAD][ĐỘNG LÕI] "LOOKED".</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Khối trong</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Khối trong: {'{where the TEAM CLEARED the LAND}'} - [interROGative CONtent CLAUSE][VẤN NỘI CÂU] định hình dưới dạng khối mã con nằm gọn bên trong, chứa [SUBject HEAD][CHỦ LÕI] riêng "the TEAM" và [PAST VERB][ĐÃ ĐỘNG] riêng "CLEARED" thuộc trục thời quá khứ.</li>
      
          <li className="list-none">Khối ngoài: {'{where the TEAM CLEARED the LAND}'} - [OBject CLAUSE][TÂN CÂU] chịu sự điều phối trực tiếp của [prepoSITion][GIỚI] "at" ở tầng ngoài.</li>
      
        </ul>
      


      {/* 2.  */}

			<h3 className="margin-y-50 text-center" id="PARaphrasing">PHẦN 2: ỨNG DỤNG ĐỘT PHÁ – GIẢI MÃ PARAPHRASING BẰNG KỸ THUẬT "THẾ KHỐI"</h3>

      <p>Khi tư duy đã chuyển sang nhận diện hệ thống theo <strong>Hình thái trước</strong> - <strong>Chức năng sau</strong>, việc diễn đạt lại thông tin (PARaphrasing) trở thành bài toán lập trình thuần túy: <strong>Thay thế các khối mã có cùng chức năng đầu ra</strong> mà không cần phá vỡ hay làm biến dạng thiết lập tổng thể của khuôn mẫu chung.</p>


      <h4 className="margin-y-40">1. Phân hệ Động: Thay đổi các MODule chứa hành động</h4>

      <h5 className="margin-y-30 text-indent-whole">Case 1: Giữ nguyên cấp độ, thay thế khối mã tương đương</h5>

      <p className="margin-top-20 text-indent-whole">[<strong>CỤM</strong> → <strong>CỤM</strong>]</p>
      
        <ul className="list-square">
      
          <li>[CLEARing the BROWser CACHE] is NECessary.</li>
          <li className="margin-bottom-20 list-none">[Việc xóa bộ nhớ đệm trình duyệt] thì cần thiết.</li>
      
          <li className="list-none">Khối trong gốc: [CLEARing the BROWser CACHE] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] biểu hiện dưới dạng khối mã mở rộng chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng "-ing" và đối tượng đi kèm.</li>
      
          <li className="list-none">Khối ngoài: [CLEARing the BROWser CACHE] - [SUBject PHRASE][CHỦ CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM] vận hành như một phân hệ [SUBject][CHỦ] để quản lý một đầu việc lớn ở đầu câu.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Thế khối tương đương</strong>:</p>
      
        <ul className="list-square">
      
          <li>[EMPtying the TEMporary FOLDer] is NECessary.</li>
          <li className="margin-bottom-20 list-none">[Việc làm trống thư mục tạm thời] thì cần thiết.</li>
      
          <li className="list-none">Khối trong mới: [EMPtying the TEMporary FOLDer] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] xuất hiện dưới dạng khối mở rộng mới chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] khác được đưa vào thế chỗ.</li>
      
          <li className="list-none">Khối ngoài mới: [EMPtying the TEMporary FOLDer]- [SUBject PHRASE][CHỦ CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM] duy trì chính xác chức năng làm thành phần [SUBject][CHỦ] của khối cũ.</li>
      
        </ul>



      <h5 className="margin-y-30 text-indent-whole">Case 2: Kỹ thuật nâng cấp từ [GIỚI CỤM] lên [LIÊN CÂU]</h5>

      <p className="margin-top-20 text-indent-whole">[<strong>PHRASE</strong> → <strong>CLAUSE</strong>]</p>
      
        <ul className="list-square">
      
          <li>we imPROVED the perFORmance [by CLEARing OLD DAtabase LOGS].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã cải thiện hiệu suất [bằng cách xóa các nhật ký cơ sở dữ liệu cũ].</li>
      
          <li className="list-none">Khối trong gốc: [by CLEARing OLD DAtabase LOGS] - [prepoSITional PHRASE][GIỚI CỤM] hiển thị dưới dạng một vùng mã chứa [prepoSITion][GIỚI] phương thức "by" đi kèm [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] đuôi "-ing" và đối tượng.</li>
      
          <li className="list-none">Khối ngoài: [by CLEARing OLD DAtabase LOGS] - [ADjunct][PHỤ] đảm nhận vai trò làm một khối bối cảnh phương thức đứng sau bổ nghĩa cho hành động chính.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nâng cấp lên [LIÊN CÂU]</strong>:</p>
      
        <ul className="list-square">
      
          <li>we imPROVED the perFORmance [be<strong>cause</strong> the SYStem CLEARED all JUNK DAta].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã cải thiện hiệu suất [vì hệ thống đã dọn sạch tất cả dữ liệu rác].</li>
      
          <li className="list-none">Khối trong mới: [be<strong>cause</strong> the SYStem CLEARED all JUNK DAta] - [suBORdinate CLAUSE][PHỤ CÂU] hiển thị dưới dạng khối mã chứa đầy đủ [SUBject HEAD][CHỦ LÕI] "the system" và hạt nhân [PAST VERB][ĐÃ ĐỘNG] "CLEARED" đi sau [conJUNCtion][LIÊN] "be<strong>cause</strong>".</li>
      
          <li className="list-none">Khối ngoài mới: [be<strong>cause</strong> the SYStem CLEARED all JUNK DAta] - [ADjunct][PHỤ] đảm nhận vai trò bối cảnh nguyên nhân ở cấp độ cao cấp hơn, bổ nghĩa cho toàn bộ phần diện thông tin chính.</li>
      
        </ul>


      <h5 className="margin-y-30 text-indent-whole">Case 3: Kỹ thuật hạ cấp từ [CLAUSE] về [HEAD]</h5>

      <p className="margin-top-20 text-indent-whole">[<strong>CLAUSE</strong> → <strong>HEAD</strong>]</p>
      
        <ul className="list-square">
      
          <li>i LIKE [an appliCAtion {'{which CLEARS STORage SMOOTHly}'}].</li>
          <li className="margin-bottom-20 list-none">Tôi thích một ứng dụng [cái mà dọn dẹp dung lượng một cách mượt mà].</li>
      
          <li className="list-none">Khối trong gốc: {'{which CLEARS STORage SMOOTHly}'} - {'{RELative CLAUSE}'}{'{QUAN CÂU}'} thiết lập theo dạng phân hệ hệ con đầy đủ bổ nghĩa đứng sau một khối tên gọi, chứa thành phần liên kết "which" và [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] "CLEARS". Đóng vai trò một MODule lọc nhằm định nghĩa đặc điểm cho đối tượng [OBject HEAD][TÂN LÕI] "appliCAtion".</li>
      
          <li className="list-none">Khối ngoài: [an appliCAtion {'{which CLEARS STORage SMOOTHly}'}] - [OBject PHRASE][TÂN CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM].</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hạ cấp về HEAD</strong> (<strong>Từ đơn</strong>):</p>
      
        <ul className="list-square">
      
          <li>i LIKE [a {'{CLEAR}'} SYStem LAYout].</li>
          <li className="margin-bottom-20 list-none">Tôi thích một bố cục hệ thống [rõ ràng].</li>
      
          <li className="list-none">Khối trong mới: {'{CLEAR}'}- [ADjective HEAD][TÍNH LÕI] hình thành từ khối [ROOT ADjective][GỐC TÍNH] nguyên bản, ở trạng thái mộc hoàn toàn, không ăn diện thêm phụ kiện, thu gọn dưới dạng khối đặc điểm đã được cô đọng hoàn toàn về dạng một thành phần ADjective đơn duy nhất. Thiết lập vị trí ngay trước đối tượng [NOUN BLOCK][DANH KHỐI] "SYStem LAYout" để quét và hiển thị ngắn gọn đặc điểm của đối tượng đó.</li>
      
          <li className="list-none">Khối ngoài mới: [a {'{CLEAR}'} SYStem LAYout] - [OBject PHRASE][TÂN CỤM] được hình thành từ [NOUN PHRASE][DANH CỤM].</li>
      
        </ul>


      <h4 className="margin-y-40">2. Phân hệ Giới: Thay đổi các MODule chứa mã định vị</h4>

      <h5 className="text-indent-whole">Case 4: Kỹ thuật hoán đổi vị trí và thay thế khối mã [GIỚI CỤM] tương đương</h5>
      
        <ul className="list-square">
      
          <li>we STARTed the implemenTAtion [<strong>af</strong>ter a CLEAR BRIEFing].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã bắt đầu việc triển khai [sau một buổi hướng dẫn rõ ràng].</li>
      
          <li className="list-none">Khối trong gốc: [<strong>af</strong>ter a CLEAR BRIEFing] - [prepoSITional PHRASE][GIỚI CỤM] bắt đầu bằng [prepoSITion][GIỚI] chỉ mốc thời gian "<strong>af</strong>ter " để kéo theo khối [NOUN PHRASE][DANH CỤM] phía sau.</li>
      
          <li className="list-none">Khối ngoài: [<strong>af</strong>ter a CLEAR BRIEFing] - [ADjunct][PHỤ] thực thi vai trò làm khối bối cảnh thời gian đứng sau để xác định cơ sở cho hành động chính.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Thế khối [GIỚI CỤM] tương đương</strong>:</p>
      
        <ul className="list-square">
      
          <li>we STARTed the implemenTAtion [with a CLEAR BRIEFing].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã bắt đầu việc triển khai [với một buổi hướng dẫn rõ ràng].</li>
      
          <li className="list-none">Khối trong mới: [with a CLEAR BRIEFing] - [prepoSITional PHRASE][GIỚI CỤM] mới, bắt đầu bằng [prepoSITion][GIỚI] đồng hành/phương thức "with" được đưa vào thế chỗ.</li>
      
          <li className="list-none">Khối ngoài mới: [with a CLEAR BRIEFing] - [ADjunct][PHỤ] tiếp tục đảm nhận chính xác vai trò thiết lập khối bối cảnh phương thức cho hành động chính mà không làm biến dạng sơ đồ sắp xếp tổng thể.</li>
      
        </ul>

      

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>JUNE 19, 2026 · by 💎GEM ·</span>
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