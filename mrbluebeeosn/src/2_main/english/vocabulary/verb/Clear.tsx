import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Clear(): React.JSX.Element {

  const postId = "Clear";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#verbs-functions-terms"><mark className="highlight-tertiary-padding-4-8">VERBS: FUNCtions</mark></HashLink></h4>

      
      <h1 className="margin-y-50 text-center">[CLEAR]</h1>

      {/* This is the content of Vocabulary Term. */}


      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20">[CLEAR] is a [ROOT VERB] that means to remove things that are not wanted from a place, or to make something easy to see or understand.</p>

          <p>[CLEAR] là một [ROOT VERB][GỐC ĐỘNG] có nghĩa là dọn dẹp, xóa bỏ những thứ không mong muốn khỏi một nơi nào đó, hoặc làm cho cái gì đó trở nên dễ nhìn, dễ hiểu (rõ ràng).</p>

          <p className="margin-top-20">Ví dụ: /klɪə(r)/</p>

            <ul className="list-square">
          
              <li>you must [clear] the browser history.</li>
              <li className="margin-bottom-20 list-none">Bạn phải [xóa] lịch sử trình duyệt.</li>

              <li className="list-none">Hình thái: [clear] - [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] dạng nguyên bản đứng sau [asSERTive MOdal and BARE inFINitive VERB][ÁP THÁI và THUẦN NGUYÊN ĐỘNG] "must" để thực thi hành động tác động lên thành phần chịu tác động "the browser history".</li>
          
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
      
        <ol>
      
          <li value="1">[<strong>ROOT VERB</strong>][<strong>GỐC ĐỘNG</strong>]: clear</li>
          <li className="margin-bottom-20 list-none">Là mã hành động nguyên bản [ROOT VERB][GỐC ĐỘNG] (dọn dẹp, xóa bỏ, làm sạch), chưa qua xử lý dấu mốc thời gian hay phương thức, đóng vai trò là lõi dữ liệu thô.</li>
      
          <li value="2">[<strong>auXILiary VERB</strong>][<strong>TRỢ ĐỘNG</strong>]: is, was, has, had, will</li>
          <li className="margin-bottom-20 list-none">Là đơn vị từ đơn chuyên biệt chịu trách nhiệm kích hoạt bối cảnh thời gian (Hiện tại/Quá khứ) hoặc làm trợ lực thiết lập thể chủ động/bị động, hoàn thành/tiếp diễn.</li>

          <li value="3">[<strong>Thời ĐÃ HOÀN ĐỘNG</strong>][<strong>Complex Tense VERB</strong>]: had been, has been</li>
          <li className="margin-bottom-20 list-none">Là phân hệ cụm mã gồm nhiều thành phần thời phối hợp nhau để xử lý các bối cảnh thời gian phức tạp (như 🏃‍♂️ Khoảng Thời Gian Hành Động ở Quá Khứ Hoàn Thành Tiếp Diễn, 🏃‍♂️ Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành Tiếp Diễn).</li>
      
          <li value="4">[<strong>Tiếp, ĐÃ HOÀN ĐỘNG</strong>][<strong>Progressive, Perfect  VERB</strong>]: clearing, cleared (khi đi sau các trợ mã Thời)</li>
          <li className="margin-bottom-20 list-none">Là mã hành động đã được biến đổi hình thái sang dạng chuyển động tiếp diễn (-ing) hoặc trạng thái hoàn thành/bị động (-v3/-ed) để phối hợp với thành phần Thời, trực tiếp hiển thị bản chất thực thi của hành động.</li>

          <li value="5">[<strong>Thái ĐỘNG</strong>][<strong>Modal VERB</strong>]: must, can, should, may, might</li>
          <li className="margin-bottom-20 list-none">Là mã thiết lập chế độ, tâm thế hoặc khả năng, mức độ chắc chắn của hành động (như bắt buộc, có thể, nên).</li>
      
          <li value="6">[<strong>TENSE-BARE VERB</strong>][<strong>THỜI-THUẦN NGUYÊN ĐỘNG</strong>]: clears, cleared (⏳ Thời Gian Hành Động ở Quá Khứ Đơn, dạng độc lập)</li>
          <li className="list-none">Là phân hệ tích hợp tối tân, nén cả dấu mốc Thời gian và bản chất Thực thi hành động vào trong một đơn vị từ đơn duy nhất.</li>
      
        </ol>
    

      <p className="margin-top-20"><strong>Sơ đồ phối hợp mã mã nguồn</strong> [<strong>Clear</strong>]:</p>
      
        <ul className="list-square">
      
          <li>is clearing → [auXILiary VERB][TRỢ ĐỘNG] is + [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] clearing</li>

          <li>was clearing → [auXILiary VERB][TRỢ ĐỘNG] was + [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] clearing</li>
      
          <li>has cleared → [auXILiary VERB][TRỢ ĐỘNG] has + [ĐÃ HOÀN ĐỘNG] cleared</li>
      
          <li>had been clearing → [auXILiary and PAST PARTiciple VERB] had been + [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] clearing</li>

          <li>has been clearing → [auXILiary and PAST PARTiciple VERB] has been + [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] clearing</li>
      
          <li>cleared (⏳ Thời Gian Hành Động ở Quá Khứ Đơn) → [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG], [PAST VERB][ĐÃ ĐỘNG] (Một đơn vị tích hợp cả hai)</li>
      
          <li>should clear → [Ý-Thái Thuần ĐỘNG] should + [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] to clear</li>
      
        </ul>
      


      {/* 1.  */}

			<h3 className="margin-y-50 text-center">PHẦN 1: HỆ THỐNG CÁC VÍ DỤ PHÂN HỆ MÃ TIẾNG ANH</h3>

      
      <h4 className="margin-y-40">1. Phân hệ [VERB HEAD][ĐỘNG LÕI]</h4>

      <p className="text-indent-whole">Khi nhìn vào một từ đơn hành động, người học nhận diện diện mạo vật lý của nó là [VERB HEAD][ĐỘNG LÕI].</p>

      <p className="text-indent-whole">Khi đặt vào sơ đồ vận hành, chính hình thái [ĐỘNG] này sẽ hình thành nên các loại chức năng độc lập:</p>

          
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng DANH</strong> [<strong>NOUN</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 1: /ˈklærəti/</p>
      
        <ul className="list-square">
      
          <li>the [clarity] of this instruction helped everyone.</li>
          <li className="margin-bottom-20 list-none">[Sự rõ ràng] của lời hướng dẫn này đã giúp đỡ mọi người.</li>
      
          <li className="list-none">Hình thái: [clarity] - [MODified NOUN][DIỆN DANH] hình thành từ khối [ROOT VERB][GỐC ĐỘNG] nguyên bản "clear" biến đổi thành "clar" mặc thêm hậu tố "-ity" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI], tạo thành một thực thể định danh độc lập.</li>
      
          <li className="list-none">Chức năng: [clarity] - [NOUN HEAD][DANH LÕI] đảm nhận nhiệm vụ làm thành phần nền tảng ở đầu câu để định danh cho một đặc tính/sự việc.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng</strong> [<strong>ADjective HEAD</strong>][<strong>TÍNH LÕI</strong>] [<strong>ADjective</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 2: /klɪə(r)/</p>
      
        <ul className="list-square">
      
          <li>we need a [clear] explanation.</li>
          <li className="margin-bottom-20 list-none">Chúng ta cần một lời giải thích [rõ ràng].</li>
      
          <li className="list-none">Hình thái: [clear] - Bản thân [VERB HEAD][ĐỘNG LÕI] khi giữ nguyên trạng thái từ đơn lẻ nhưng chuyển đổi bản chất sang chức năng mô tả đặc điểm dưới dạng từ đơn lẻ.</li>
      
          <li className="list-none">Chức năng: [clear] - [ADjective HEAD][TÍNH LÕI] kích hoạt cơ chế của bộ quét đặt ngay trước đối tượng "explanation" để hiển thị đặc điểm của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng TRẠNG</strong> [<strong>AdVERB</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 3: /ˈklɪəli/</p>
      
        <ul className="list-square">
      
          <li>she explained the process [clearly].</li>
          <li className="margin-bottom-20 list-none">Cô ấy đã giải thích quy trình [một cách rõ ràng].</li>
      
          <li className="list-none">Hình thái: [clearly] - [MODified ADVERB][DIỆN TRẠNG] hình thành từ khối [ROOT ADjective][GỐC TÍNH] nguyên bản "clear" mặc thêm hậu tố "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [HEAD][LÕI], chuyển đổi bản chất sang chức năng trạng dưới dạng từ đơn lẻ thông dụng.</li>
      
          <li className="list-none">Chức năng: [clearly] - [ADverb HEAD][TRẠNG LÕI] thực thi vai trò làm thành phần bổ nghĩa đứng sau hành động "explained" để xác định bối cảnh cách thức.</li>
      
        </ul>


      <h4 className="margin-y-40">2. Phân hệ [VERB PHRASE][ĐỘNG CỤM]</h4>
          
      <p className="text-indent-whole">Khi người học nhìn thấy một vùng mã chứa nhiều thành phần đi kèm hành động, họ nhận diện ngay diện mạo vật lý [VERB PHRASE][ĐỘNG CỤM]. Khối hình thái này sẽ hình thành đầy đủ các chương trình chức năng đầu ra:</p>


      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Danh Cụm</strong> [<strong>Noun Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4:</p>
      
        <ul className="list-square">
      
          <li>[Clearing the browser history] improves security.</li>
          <li className="margin-bottom-20 list-none">[Việc xóa lịch sử trình duyệt] cải thiện tính bảo mật.</li>
      
          <li className="list-none">Hình thái: [clearing the browser history] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng thêm đuôi "-ing", mở rộng thành một vùng mã hành động phức hợp gồm hành động xóa bỏ, đối tượng tiếp nhận và đặc điểm đi kèm.</li>
      
          <li className="list-none">Chức năng: [clearing the browser history] - [NOUN PHRASE][DANH CỤM] đóng vai trò làm [SUBject PROnoun][CHỦ ĐẠI] để thiết lập nền tảng thông tin đứng đầu toàn câu trước hạt nhân [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] "improves".</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">Ví dụ 4b: [OBject PROnoun][TÂN ĐẠI]</p>
      
        <ul className="list-square">
      
          <li>the IT team finished [clearing old database files].</li>
          <li className="margin-bottom-20 list-none">Đội ngũ CNTT đã hoàn thành [việc dọn dẹp các tệp tin cơ sở dữ liệu cũ].</li>
      
          <li className="list-none">Hình thái: [clearing old database files] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng thêm đuôi "-ing", mở rộng thành một vùng mã hành động phức hợp gồm hành động dọn dẹp, đối tượng tiếp nhận và đặc điểm đi kèm.</li>
      
          <li className="list-none">Chức năng: [clearing old database files] - [NOUN PHRASE][DANH CỤM] đóng vai trò làm [OBject PROnoun][TÂN ĐẠI] (thành phần chịu tác động) tích hợp chuỗi dữ liệu đầu việc đứng ngay sau cặp phối hợp [SUBject PROnoun][CHỦ ĐẠI] và [PAST VERB][ĐÃ ĐỘNG] "finished".</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Tính Cụm</strong> [<strong>Adjective Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>] <strong>dạng sắp xảy ra chủ động</strong> -<strong>to V</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5a:</p>
      
        <ul className="list-square">
      
          <li>the staff member [to clear the meeting room] is outside.</li>
          <li className="margin-bottom-20 list-none">Nhân viên [sắp sửa dọn dẹp phòng họp] thì ở bên ngoài.</li>
      
          <li className="list-none">Hình thái: [to clear the meeting room] - [FULL inFINitive VERB PHRASE][TOÀN NGUYÊN ĐỘNG CỤM] chứa [PARTicle VERB][HẠT ĐỘNG] ở dạng nguyên bản có "to" để biểu thị tính chủ động hướng tới tương lai.</li>
      
          <li className="list-none">Chức năng: [to clear the meeting room] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng "staff member" để quét và hiển thị đặc điểm hành động sắp sửa xảy ra mang tính chủ động của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>] <strong>dạng sắp xảy ra bị động -to be</strong> <strong>v3</strong>/-<strong>ed</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5b:</p>
      
        <ul className="list-square">
      
          <li>the land [to be cleared next month] belongs to the city.</li>
          <li className="margin-bottom-20 list-none">Khu đất [sắp sửa được giải phóng mặt bằng vào tháng tới] thuộc về thành phố.</li>
      
          <li className="list-none">Hình thái: [to be cleared next month] - [FULL inFINitive PARTiciple VERB PHRASE][TOÀN NGUYÊN HOÀN ĐỘNG CỤM] hiển thị dưới dạng mô hình "to be + V3/-ed" (chứa [PAST PARTiciple VERB][ĐÃ HOÀN ĐỘNG] biến đổi hình thái bị động) kết hợp phần mở rộng phương thức để biểu thị trạng thái bị động hướng tới tương lai.</li>
      
          <li className="list-none">Chức năng: [to be cleared next month] - [ADjective PHRASE][TÍNH CỤM] kích hoạt cơ chế bộ quét đặt ngay sau đối tượng "land" để mô tả đặc điểm trạng thái sắp sửa được tác động của đối tượng đó.</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>] <strong>dạng đang diễn ra</strong> -<strong>ing</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5c:</p>
      
        <ul className="list-square">
      
          <li>the worker [clearing the road block] wore a vest.</li>
          <li className="margin-bottom-20 list-none">Người công nhân [đang dọn dẹp chướng ngại vật trên đường] đã mặc một chiếc áo khoác bảo hộ.</li>
      
          <li className="list-none">Hình thái: [clearing the road block] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] thêm đuôi "-ing" để biểu thị tính chủ động đang xảy ra.</li>
      
          <li className="list-none">Chức năng: [clearing the road block] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng "worker" để quét và hiển thị đặc điểm hành động chủ động của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>] <strong>dạng đã xong bị động</strong> -<strong>v3</strong>/-<strong>ed</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5d:</p>
      
        <ul className="list-square">
      
          <li>the files [cleared by the administrator] are permanently deleted.</li>
          <li className="margin-bottom-20 list-none">Các tệp tin [đã được xóa bởi quản trị viên] thì bị xóa vĩnh viễn.</li>
      
          <li className="list-none">Hình thái: [cleared by the administrator] - [PAST PARTiciple VERB PHRASE][ĐÃ HOÀN ĐỘNG CỤM] hiển thị dưới dạng một vùng mã chứa [PAST PARTiciple VERB][ĐÃ HOÀN ĐỘNG] ở dạng bị động thuộc trục thời quá khứ và phần mở rộng phương thức.</li>
      
          <li className="list-none">Chức năng: [cleared by the administrator] - [ADjective PHRASE][TÍNH CỤM] kích hoạt cơ chế bộ quét đặt ngay sau đối tượng "files" để mô tả đặc điểm trạng thái bị động hoàn thành của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>] <strong>dạng nguyên bản</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5e:</p>
      
        <ul className="list-square">
      
          <li>we found an application [capable of clearing background junk].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã tìm thấy một ứng dụng [có khả năng dọn dẹp rác chạy ngầm].</li>
      
          <li className="list-none">Hình thái: [capable of clearing background junk] - Cụm thành phần bắt đầu bằng mã đặc điểm gốc kết hợp mở rộng giới cụm phía sau (chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng -ing sau GIỚI).</li>
      
          <li className="list-none">Chức năng: [capable of clearing background junk] - [ADjective PHRASE][TÍNH CỤM] đặt ngay sau đối tượng "application" để quét và xác định năng lực, đặc điểm của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Trạng Cụm</strong> [<strong>Adverb Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm dạng</strong> -<strong>to V</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6a:</p>
      
        <ul className="list-square">
      
          <li>they ran the software [to clear cache files].</li>
          <li className="margin-bottom-20 list-none">Họ đã chạy phần mềm [để xóa các tệp bộ nhớ đệm].</li>
      
          <li className="list-none">Hình thái: [to clear cache files] - [FULL inFINitive VERB PHRASE][TOÀN NGUYÊN ĐỘNG CỤM] định hình dưới dạng một vùng mã hành động đứng cuối chuỗi thông tin, bắt đầu bằng [PARTicle VERB][HẠT ĐỘNG] nguyên bản có "to".</li>
      
          <li className="list-none">Chức năng: [to clear cache files] - [ADverb PHRASE][TRẠNG CỤM] đảm nhận vai trò làm một khối bối cảnh mục đích đứng sau để bổ nghĩa cho hành động "ran the software".</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm dạng</strong> -<strong>to V</strong> (<strong>có dấu phẩy</strong>):</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6b:</p>
      
        <ul className="list-square">
      
          <li>[To clear the misunderstanding], she sent an email.</li>
          <li className="margin-bottom-20 list-none">[Để xóa bỏ sự hiểu lầm], cô ấy đã gửi một email.</li>
      
          <li className="list-none">Hình thái: [To clear the misunderstanding] - [FULL inFINitive VERB PHRASE][TOÀN NGUYÊN ĐỘNG CỤM] bắt đầu bằng [PARTicle VERB][HẠT ĐỘNG] nguyên bản có "to", được đảo lên đứng biệt lập ở đầu câu và ngăn cách bằng dấu phẩy.</li>
      
          <li className="list-none">Chức năng: [To clear the misunderstanding], - [ADverb PHRASE][TRẠNG CỤM] đảm nhận nhiệm vụ làm khối bối cảnh mục đích nhấn mạnh cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm dạng</strong> -<strong>ing</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6c:</p>
      
        <ul className="list-square">
      
          <li>the manager spent hours [clearing old user profiles].</li>
          <li className="margin-bottom-20 list-none">Người quản lý đã dành hàng giờ đồng hồ [cho việc xóa các hồ sơ người dùng cũ].</li>
      
          <li className="list-none">Hình thái: [clearing old user profiles] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng đuôi "-ing" đứng ở phần sau câu nhằm làm rõ tiến trình nội dung.</li>
      
          <li className="list-none">Chức năng: [clearing old user profiles] - [ADverb PHRASE][TRẠNG CỤM] đóng vai trò làm khối bối cảnh cách thức/nội dung đi kèm để bổ nghĩa trực tiếp cho khuôn mẫu hành động "spent hours" phía trước.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm dạng</strong> -<strong>ing</strong> (<strong>có dấu phẩy</strong>):</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6d:</p>
      
        <ul className="list-square">
      
          <li>[Clearing the workspace early], he left the office with peace of mind.</li>
          <li className="margin-bottom-20 list-none">[Do dọn dẹp không gian làm việc sớm], anh ấy đã rời văn phòng với tâm trí thảnh thơi.</li>
      
          <li className="list-none">Hình thái: [Clearing the workspace early] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] đứng biệt lập ở đầu câu, ngăn cách bằng dấu phẩy, mang [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng "-ing" do được rút gọn từ một hệ [Liên Câu] Trạng phụ thuộc có cùng thành phần lõi [SUBject PROnoun][CHỦ ĐẠI].</li>
      
          <li className="list-none">Chức năng: [Clearing the workspace early] - [ADverb PHRASE][TRẠNG CỤM] đóng vai trò làm một khối bối cảnh nguyên nhân/phương thức tổng thể để bổ nghĩa cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40">3. Phân hệ [prepoSITional PHRASE][GIỚI CỤM]</h4>
          
      <p className="margin-top-20 text-indent-whole">Khi người học nhìn thấy một vùng mã mở rộng bắt đầu bằng một mã định vị (prepoSITion) kéo theo một khối tên gọi phía sau, họ nhận diện ngay diện mạo vật lý [prepoSITional PHRASE][GIỚI CỤM]. Khối hình thái này không tạo ra dữ liệu đầu việc (Danh) mà chỉ chuyên biệt hình thành nên 2 chương trình chức năng:</p>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Tính Cụm</strong> [<strong>Adjective Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>Giới Cụm</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 7:</p>
      
        <ul className="list-square">
      
          <li>the requirement [for a clear strategy] is urgent.</li>
          <li className="margin-bottom-20 list-none">Yêu cầu [cho một chiến lược rõ ràng] thì khẩn cấp.</li>
      
          <li className="list-none">Hình thái: [for a clear strategy] - [prepoSITional PHRASE][GIỚI CỤM] xuất hiện dưới dạng một vùng mã định vị không chứa hạt nhân hành động, bắt đầu bằng [GIỚI] "for".</li>
      
          <li className="list-none">Chức năng: [for a clear strategy] - [ADjective PHRASE][TÍNH CỤM] vận hành như một bộ quét đặt ngay phía sau đối tượng "requirement" để hiển thị và mô tả đặc điểm phạm vi thuộc về của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Trạng Cụm</strong> [<strong>Adverb Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>ADverb PHRASE</strong>][<strong>TRẠNG CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>Giới Cụm</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 8a:</p>
      
        <ul className="list-square">
      
          <li>they made the decision [<strong>af</strong>ter a clear explanation].</li>
          <li className="margin-bottom-20 list-none">Họ đã đưa ra quyết định [sau một lời giải thích rõ ràng].</li>
      
          <li className="list-none">Hình thái: [<strong>af</strong>ter a clear explanation] - [prepoSITional PHRASE][GIỚI CỤM] xuất hiện dưới dạng một vùng mã xác lập thời điểm, bắt đầu bằng [GIỚI] "after".</li>
      
          <li className="list-none">Chức năng: [<strong>af</strong>ter a clear explanation] - [ADverb PHRASE][TRẠNG CỤM] đảm nhận vai trò làm một khối bối cảnh thời gian đứng sau để xác định cơ sở cho hành động "made the decision".</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>ADverb PHRASE</strong>][<strong>TRẠNG CỤM</strong>] <strong>cấu tạo từ</strong> [<strong>Giới Cụm</strong>] (<strong>có dấu phẩy</strong>):</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 8b:</p>
      
        <ul className="list-square">
      
          <li>[With a clear goal], she quickly finished the report.</li>
          <li className="margin-bottom-20 list-none">[Với một mục tiêu rõ ràng], cô ấy đã hoàn thành bản báo cáo một cách nhanh chóng.</li>
      
          <li className="list-none">Hình thái: [With a clear goal] - [prepoSITional PHRASE][GIỚI CỤM] bắt đầu bằng [GIỚI] "With" kéo theo vùng cụm danh chủ/danh cụm phía sau, được đảo lên đứng biệt lập ở đầu câu và ngăn cách bằng dấu phẩy.</li>
      
          <li className="list-none">Chức năng: [With a clear goal] - [ADverb PHRASE][TRẠNG CỤM] đảm nhận nhiệm vụ thiết lập một khối bối cảnh phương thức tổng thể để bổ nghĩa cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40">4. Phân hệ [conJUNCtional CLAUSE][LIÊN CÂU]</h4>

      <p className="margin-top-20 text-indent-whole">Khi vùng mã mở rộng thành một phân hệ chứa một hệ con hoàn chỉnh có cả thành phần nền tảng [SUBject PROnoun][CHỦ ĐẠI] riêng và [ĐỘNG] riêng, người học xác định được diện mạo vật lý [conJUNCtional CLAUSE][LIÊN CÂU].</p>

      <p className="margin-top-20 text-indent-whole"><strong>Bản chất vật lý</strong>: [Liên Câu] tuy mang hình thái của một hệ con đầy đủ nhưng <strong>không thể đứng một mình độc lập</strong> để tạo thành một thông điệp trọn vẹn. Nó luôn lồng ghép vào sơ đồ tổng thể để thực thi một chức năng phụ thuộc.</p>

      <p className="margin-top-20 text-indent-whole">Dựa trên sự xuất hiện của mã kết nối, [Liên Câu] được chia làm 2 phân hệ vận hành:</p>

          
      <h5 className="margin-y-30 text-indent-whole">4.1 Phân hệ [conJUNCtional CLAUSE][LIÊN CÂU]</h5>

      <p className="margin-top-20 text-indent-whole">Phân hệ này sử dụng các mã kết nối ([conJUNCtion][LIÊN] hoặc mã định vị) xuất hiện trực tiếp ở đầu hệ con để làm điểm tựa liên kết dữ liệu.</p>


      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Danh Câu</strong> [<strong>Noun Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 9:</p>
      
        <ul className="list-square">
      
          <li>i know  [how you clear these system logs].</li>
          <li className="margin-bottom-20 list-none">Tôi biết [cách mà bạn xóa các nhật ký hệ thống này].</li>
      
          <li className="list-none">Hình thái:  [how you clear these system logs] - [conJUNCtional CLAUSE][LIÊN CÂU] chứa thành phần liên kết trực quan ở đầu, có [SUBject PROnoun][CHỦ ĐẠI] "you" và [BASE VERB][NỀN ĐỘNG] "clear" thiết lập phối hợp hành động.</li>
      
          <li className="list-none">Chức năng:  [how you clear these system logs] - [NOUN CLAUSE][DANH CÂU] trở thành [OBject PROnoun][TÂN ĐẠI] chứa dữ liệu mục tiêu chịu tác động từ hành động "know".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Tính Câu</strong> [<strong>Adjective Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 10:</p>
      
        <ul className="list-square">
      
          <li>the engineer [who cleared the error codes] fixed the server.</li>
          <li className="margin-bottom-20 list-none">Người kỹ sư [người mà đã xóa các mã lỗi] đã sửa chữa máy chủ.</li>
      
          <li className="list-none">Hình thái: [who cleared the error codes] - [conJUNCtional CLAUSE][LIÊN CÂU] chứa mã liên kết chỉ người đứng đầu, mang hạt nhân [PAST VERB][ĐÃ ĐỘNG] "cleared" xử lý bối cảnh thuộc trục thời quá khứ.</li>
      
          <li className="list-none">Chức năng: [who cleared the error codes] - [ADjective CLAUSE][TÍNH CÂU] hoạt động như một module lọc bổ sung đặt sau một khối tên gọi để nhận diện đối tượng "engineer".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Trạng Câu</strong> [<strong>Adverb Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11:</p>
      
        <ul className="list-square">
      
          <li>the team celebrated [because the leader cleared the project budget].</li>
          <li className="margin-bottom-20 list-none">Đội ngũ đã ăn mừng [vì người trưởng nhóm đã thông qua ngân sách dự án].</li>
      
          <li className="list-none">Hình thái: [because the leader cleared the project budget] - [conJUNCtional CLAUSE][LIÊN CÂU] kích hoạt ngay sau [conJUNCtion][LIÊN] nguyên nhân "because", chứa [SUBject PROnoun][CHỦ ĐẠI] "the leader" và [PAST VERB][ĐÃ ĐỘNG] "cleared" mang dấu mốc trục thời quá khứ.</li>
      
          <li className="list-none">Chức năng: [because the leader cleared the project budget] - [ADverb CLAUSE][TRẠNG CÂU] thiết lập module bối cảnh để bổ nghĩa cho toàn bộ phần diện thông tin chính "the team celebrated" đứng trước.</li>
      
        </ul>



      <h5 className="margin-y-30 text-indent-whole">4.2 Phân hệ [ZEro-conJUNCtional CLAUSE][ẨN-LIÊN CÂU]</h5>

      <p className="margin-top-20 text-indent-whole">Ở phân hệ này, các thành phần liên kết đã được người bản ngữ chủ động lược bỏ để tối ưu tốc độ truyền tải thông tin. Về diện mạo vật lý, khối mã này nhìn hoàn toàn giống như một hệ con độc lập có đầy đủ cặp bài trùng [SUBject PROnoun][CHỦ ĐẠI] và ĐỘNG, tuy nhiên chức năng của nó vẫn là chức năng phụ thuộc và vẫn sinh ra đầy đủ 3 đầu ra: Danh, Tính, Trạng.</p>


      <p className="margin-top-20 text-indent-whole">[<strong>OBject PROnoun</strong>][<strong>TÂN ĐẠI</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11a:</p>
      
        <ul className="list-square">
      
          <li>i believe [you cleared the storage space].</li>
          <li className="margin-bottom-20 list-none">Tôi tin [bạn đã dọn sạch không gian lưu trữ].</li>
      
          <li className="list-none">Hình thái: [you cleared the storage space] - [conJUNCtional CLAUSE][LIÊN CÂU] đã ẩn [conJUNCtion][LIÊN] định hướng "that", chỉ còn hiển thị trọn vẹn khối [SUBject PROnoun][CHỦ ĐẠI] "you" và [PAST VERB][ĐÃ ĐỘNG] "cleared".</li>
      
          <li className="list-none">Chức năng: [you cleared the storage space] - [NOUN CLAUSE][DANH CÂU] đóng vai trò làm [OBject PROnoun][TÂN ĐẠI] nhận toàn bộ năng lượng niềm tin từ [BASE VERB][NỀN ĐỘNG] "believe".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>ADjective CLAUSE</strong>][<strong>TÍNH CÂU</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11b:</p>
      
        <ul className="list-square">
      
          <li>the desk [the employee cleared] looked very neat.</li>
          <li className="margin-bottom-20 list-none">Chiếc bàn làm việc [mà người nhân viên đã dọn dẹp] trông rất gọn gàng.</li>
      
          <li className="list-none">Hình thái: [the employee cleared] - [conJUNCtional CLAUSE][LIÊN CÂU] đã ẩn mã liên kết vật thể đứng trước, giữ lại khối [SUBject PROnoun][CHỦ ĐẠI] "the employee" và [PAST VERB][ĐÃ ĐỘNG] "cleared".</li>
      
          <li className="list-none">Chức năng: [the employee cleared] - [ADjective CLAUSE][TÍNH CÂU] đóng vai trò như bộ quét đặt ngay sau đối tượng "the desk" để làm rõ đặc điểm cho đối tượng này.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>ADverb CLAUSE</strong>][<strong>TRẠNG CÂU</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11c:</p>
      
        <ul className="list-square">
      
          <li>[should you clear the pending tasks today], we will start the new plan.</li>
          <li className="margin-bottom-20 list-none">[Nếu bạn giải quyết xong các nhiệm vụ còn tồn đọng trong hôm nay], chúng tôi sẽ bắt đầu kế hoạch mới.</li>
      
          <li className="list-none">Hình thái: [should you clear the pending tasks today] - [conJUNCtional CLAUSE][LIÊN CÂU] vận hành ở trạng thái ẩn [conJUNCtion][LIÊN] điều kiện "if" bằng giải pháp đảo [SOFT MOdal and BARE inFINitive VERB][Ý THÁI và THUẦN NGUYÊN ĐỘNG] "Should" lên trước, tuy thiết lập bề mặt biến đổi nhưng bản chất vẫn giữ trọn vẹn [SUBject PROnoun][CHỦ ĐẠI] "you" và [BARE inFINitive VERB][THUẦN NGUYÊN ĐỘNG] "clear".</li>
      
          <li className="list-none">Chức năng: [should you clear the pending tasks today] - [ADverb CLAUSE][TRẠNG CÂU] đảm nhận nhiệm vụ thiết lập khối bối cảnh giả định/điều kiện để bổ nghĩa cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40">5. Phân hệ [Nhúng Đóng Gói][emBEDded Structure]</h4>

      <p className="margin-top-20 text-indent-whole">Khi hệ thống vận hành ở mức độ phức tạp, các khối mã sẽ lồng vào nhau tạo nên hệ thống phân tầng tối tân.</p>


      <h5 className="margin-top-20 text-indent-whole">[Danh Cụm Phân Tầng][emBEDded NOUN PHRASE]</h5>

      <p className="margin-top-20 text-indent-whole">Ví dụ 12a: [SUBject PROnoun][CHỦ ĐẠI]</p>
      
        <ul className="list-square">
      
          <li>[Analyzing {'{how the program clears metadata}'}] is necessary.</li>
          <li className="margin-bottom-20 list-none">[Việc phân tích {'{cách mà chương trình xóa siêu dữ liệu}'}] thì cần thiết.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: [Analyzing {'{how the program clears metadata}'}] - [PRESent PARTiciple VERB and emBEDded CLAUSE][HIỆN TIẾP ĐỘNG và NHÚNG CÂU] biểu thị dưới dạng một vùng mã mở rộng lớn bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng đuôi "-ing" và kéo theo thành phần bổ trợ phía sau.</li>
      
          <li className="list-none">Chức năng: [Analyzing {'{how the program clears metadata}'}] - [NOUN PHRASE][DANH CỤM] chịu trách nhiệm làm một vùng đầu việc lớn cần thực hiện, đảm nhận vai trò làm [SUBject PROnoun][CHỦ ĐẠI] để thiết lập nền tảng thông tin đứng đầu toàn câu trước [auXILiary VERB][TRỢ ĐỘNG] "is".</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: {'{how the program clears metadata}'} - [conJUNCtional CLAUSE][LIÊN CÂU] định hình dưới dạng một khối mã con nằm gọn hoàn toàn bên trong vùng mã tổng thể, chứa đầy đủ [SUBject PROnoun][CHỦ ĐẠI] riêng "the program" và [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] riêng "clears" thiết lập theo trục thời hiện tại.</li>
      
          <li className="list-none">Chức năng: {'{how the program clears metadata}'} - [NOUN CLAUSE][DANH CÂU] đóng vai trò làm [OBject PROnoun][TÂN ĐẠI] chịu sự điều phối trực tiếp từ hạt nhân hành động "Analyzing" ở tầng ngoài, tích hợp chuỗi thông tin tiếp nhận hành động để làm rõ nội dung cho việc phân tích.</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12b: [OBject PROnoun][TÂN ĐẠI]</p>
      
        <ul className="list-square">
      
          <li>we recommend [monitoring {'{why the database clears sessions}'}].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi kiến nghị [việc giám sát {'{tại sao cơ sở dữ liệu lại xóa các phiên làm việc}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: [monitoring {'{why the database clears sessions}'}] - [PRESent PARTiciple VERB and emBEDded CLAUSE][HIỆN TIẾP ĐỘNG và NHÚNG CÂU] biểu thị dưới dạng một vùng mã mở rộng lớn bắt đầu bằng [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng đuôi "-ing" và kéo theo thành phần bổ trợ phía sau.</li>
      
          <li className="list-none">Chức năng: [monitoring {'{why the database clears sessions}'}] - [<strong>NOUN PHRASE</strong>][<strong>DANH CỤM</strong>] đóng vai trò làm [OBject PROnoun][TÂN ĐẠI] (thành phần chịu tác động) đứng ngay sau hạt nhân [BASE VERB][NỀN ĐỘNG] "recommend" để bổ sung trọn vẹn thông tin cho hành động kiến nghị này.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: {'{why the database clears sessions}'} - [conJUNCtional CLAUSE][LIÊN CÂU] định hình dưới dạng một khối mã con nằm gọn hoàn toàn bên trong vùng mã tổng thể, chứa đầy đủ [SUBject PROnoun][CHỦ ĐẠI] riêng "the database" và [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] riêng "clears" thiết lập theo trục thời hiện tại đi sau liên từ "why".</li>
      
          <li className="list-none">Chức năng: {'{why the database clears sessions}'} - [NOUN CLAUSE][DANH CÂU] đóng vai trò làm [OBject PROnoun][TÂN ĐẠI] chịu sự điều phối trực tiếp từ hạt nhân hành động "monitoring" ở tầng ngoài, làm rõ nội dung cho việc giám sát.</li>
      
        </ul>


      <h5 className="margin-top-20 text-indent-whole">[Tính Cụm Phân Tầng][emBEDded Adjective Phrase]</h5>

      <p className="margin-top-20 text-indent-whole">Ví dụ 13:</p>
      
        <ul className="list-square">
      
          <li>they have doubts [about {'{how they clear the security check}'}].</li>
          <li className="margin-bottom-20 list-none">Họ có những nghi ngờ [về {'{cách mà họ vượt qua vòng kiểm tra an ninh}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: [about {'{how they clear the security check}'}] - [prepoSITional PHRASE][GIỚI CỤM] biểu thị dưới dạng một vùng mã lớn bắt đầu bằng [GIỚI] "about".</li>
      
          <li className="list-none">Chức năng: [about {'{how they clear the security check}'}] - [<strong>ADjective PHRASE</strong>][<strong>TÍNH CỤM</strong>] vận hành như một bộ lọc tổng thể đặt ngay phía sau để mô tả đặc điểm nội dung cho [DANH] "doubts" đứng trước nó.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: {'{how they clear the security check}'} - [conJUNCtional CLAUSE][LIÊN CÂU] định hình dưới dạng khối mã con nằm gọn bên trong, chứa [SUBject PROnoun][CHỦ ĐẠI] "they" và [BASE VERB][NỀN ĐỘNG] "clear".</li>
      
          <li className="list-none">Chức năng: {'{how they clear the security check}'} - [NOUN CLAUSE][DANH CÂU] đóng vai trò làm [OBject PROnoun][TÂN ĐẠI] chịu sự điều phối trực tiếp của [GIỚI] "about" ở tầng ngoài.</li>
      
        </ul>


          
      <h5 className="margin-top-20 text-indent-whole">[Trạng Cụm Phân Tầng][emBEDded Adverb Phrase]</h5>

      <p className="margin-top-20 text-indent-whole">Ví dụ 14:</p>
      
        <ul className="list-square">
      
          <li>the officer looked directly [at {'{where the team cleared the land}'}].</li>
          <li className="margin-bottom-20 list-none">Viên sĩ quan đã nhìn thẳng [vào {'{nơi mà đội ngũ đã giải phóng mặt bằng}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: [at {'{where the team cleared the land}'}] - [prepoSITional PHRASE][GIỚI CỤM] biểu thị dưới dạng một vùng mã xác lập không gian lớn bắt đầu bằng [GIỚI] "at".</li>
      
          <li className="list-none">Chức năng: [at {'{where the team cleared the land}'}] - [<strong>ADverb PHRASE</strong>][<strong>TRẠNG CỤM</strong>] đảm nhận vai trò làm một khối bối cảnh địa điểm tổng thể đứng sau bổ nghĩa cho hành động "looked directly".</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: {'{where the team cleared the land}'} - [conJUNCtional CLAUSE][LIÊN CÂU] định hình dưới dạng khối mã con nằm gọn bên trong, chứa [SUBject PROnoun][CHỦ ĐẠI] riêng "the team" và [PAST VERB][ĐÃ ĐỘNG] riêng "cleared" thuộc trục thời quá khứ.</li>
      
          <li className="list-none">Chức năng: {'{where the team cleared the land}'} - [NOUN CLAUSE][DANH CÂU] đóng vai trò làm [OBject PROnoun][TÂN ĐẠI] chịu sự điều phối trực tiếp của [GIỚI] "at" ở tầng ngoài.</li>
      
        </ul>
      


      {/* 2.  */}

			<h3 className="margin-y-50 text-center">PHẦN 2: ỨNG DỤNG ĐỘT PHÁ – GIẢI MÃ PARAPHRASING BẰNG KỸ THUẬT "THẾ KHỐI"</h3>

      <p>Khi tư duy đã chuyển sang nhận diện hệ thống theo <strong>Hình thái trước</strong> - <strong>Chức năng sau</strong>, việc diễn đạt lại thông tin (Paraphrasing) trở thành bài toán lập trình thuần túy: <strong>Thay thế các khối mã có cùng chức năng đầu ra</strong> mà không cần phá vỡ hay làm biến dạng thiết lập tổng thể của khuôn mẫu chung.</p>


      <h4 className="margin-y-40">1. Phân hệ Động: Thay đổi các module chứa hành động</h4>

      <h5 className="margin-y-30 text-indent-whole">Case 1: Giữ nguyên cấp độ, thay thế khối mã tương đương</h5>

      <p className="margin-top-20 text-indent-whole">[<strong>Cụm</strong> → <strong>Cụm</strong>]</p>
      
        <ul className="list-square">
      
          <li>[Clearing the browser cache] is necessary.</li>
          <li className="margin-bottom-20 list-none">[Việc xóa bộ nhớ đệm trình duyệt] thì cần thiết.</li>
      
          <li className="list-none">Hình thái gốc: [Clearing the browser cache] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] biểu hiện dưới dạng khối mã mở rộng chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] dạng "-ing" và đối tượng đi kèm.</li>
      
          <li className="list-none">Chức năng: [Clearing the browser cache] - [NOUN PHRASE][DANH CỤM] vận hành như một phân hệ [SUBject PROnoun][CHỦ ĐẠI] để quản lý một đầu việc lớn ở đầu câu.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Thế khối tương đương</strong>:</p>
      
        <ul className="list-square">
      
          <li>[Emptying the temporary folder] is necessary.</li>
          <li className="margin-bottom-20 list-none">[Việc làm trống thư mục tạm thời] thì cần thiết.</li>
      
          <li className="list-none">Hình thái mới: [Emptying the temporary folder] - [PRESent PARTiciple VERB PHRASE][HIỆN TIẾP ĐỘNG CỤM] xuất hiện dưới dạng khối mở rộng mới chứa [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] khác được đưa vào thế chỗ.</li>
      
          <li className="list-none">Chức năng mới: [Emptying the temporary folder] - [NOUN PHRASE][DANH CỤM] duy trì chính xác chức năng làm thành phần [SUBject PROnoun][CHỦ ĐẠI] của khối cũ.</li>
      
        </ul>



      <h5 className="margin-y-30 text-indent-whole">Case 2: Kỹ thuật nâng cấp từ [Giới Cụm] lên Liên Câu</h5>

      <p className="margin-top-20 text-indent-whole">[<strong>Phrase</strong> → <strong>Clause</strong>]</p>
      
        <ul className="list-square">
      
          <li>we improved the performance [by clearing old database logs].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã cải thiện hiệu suất [bằng cách xóa các nhật ký cơ sở dữ liệu cũ].</li>
      
          <li className="list-none">Hình thái gốc: [by clearing old database logs] - [prepoSITional PHRASE][GIỚI CỤM] hiển thị dưới dạng một vùng mã chứa [GIỚI] phương thức "by" đi kèm [PRESent PARTiciple VERB][HIỆN TIẾP ĐỘNG] đuôi "-ing" và đối tượng.</li>
      
          <li className="list-none">Chức năng: [by clearing old database logs] - [ADverb PHRASE][TRẠNG CỤM] đảm nhận vai trò làm một khối bối cảnh phương thức đứng sau bổ nghĩa cho hành động chính.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nâng cấp lên Liên Câu</strong>:</p>
      
        <ul className="list-square">
      
          <li>we improved the performance [because the system cleared all junk data].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã cải thiện hiệu suất [vì hệ thống đã dọn sạch tất cả dữ liệu rác].</li>
      
          <li className="list-none">Hình thái mới: [because the system cleared all junk data] - [conJUNCtional CLAUSE][LIÊN CÂU] hiển thị dưới dạng khối mã chứa đầy đủ [SUBject PROnoun][CHỦ ĐẠI] "the system" và hạt nhân [PAST VERB][ĐÃ ĐỘNG] "cleared" đi sau [conJUNCtion][LIÊN] "because".</li>
      
          <li className="list-none">Chức năng mới: [because the system cleared all junk data] - [ADverb CLAUSE][TRẠNG CÂU] đảm nhận vai trò bối cảnh nguyên nhân ở cấp độ cao cấp hơn, bổ nghĩa cho toàn bộ phần diện thông tin chính.</li>
      
        </ul>


      <h5 className="margin-y-30 text-indent-whole">Case 3: Kỹ thuật hạ cấp từ [Liên Câu] về ĐỘNG</h5>

      <p className="margin-top-20 text-indent-whole">[<strong>Clause</strong> → <strong>Base</strong>]</p>
      
        <ul className="list-square">
      
          <li>i like an application [which clears storage smoothly].</li>
          <li className="margin-bottom-20 list-none">Tôi thích một ứng dụng [cái mà dọn dẹp dung lượng một cách mượt mà].</li>
      
          <li className="list-none">Hình thái gốc: [which clears storage smoothly] - [conJUNCtional CLAUSE][LIÊN CÂU] thiết lập theo dạng phân hệ hệ con đầy đủ bổ nghĩa đứng sau một khối tên gọi, chứa thành phần liên kết "which" và [THIRD-PERson SINGular VERB][NGÔI 3 S ĐỘNG] "clears".</li>
      
          <li className="list-none">Chức năng: [which clears storage smoothly] - [ADjective CLAUSE][TÍNH CÂU] đóng vai trò một module lọc nhằm định nghĩa đặc điểm cho đối tượng "application".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hạ cấp về ĐỘNG</strong> (<strong>Từ đơn</strong>):</p>
      
        <ul className="list-square">
      
          <li>i like a [clear] system layout.</li>
          <li className="margin-bottom-20 list-none">Tôi thích một bố cục hệ thống [rõ ràng].</li>
      
          <li className="list-none">Hình thái mới: [clear] - [ROOT ADjective][GỐC TÍNH] hình thành từ khối [ROOT ADjective][GỐC TÍNH] nguyên bản, ở trạng thái mộc hoàn toàn, không ăn diện thêm phụ kiện, thu gọn dưới dạng khối đặc điểm đã được cô đọng hoàn toàn về dạng một thành phần ADjective đơn duy nhất.</li>
      
          <li className="list-none">Chức năng mới: [clear] - [ADjective HEAD][TÍNH LÕI] thiết lập vị trí ngay trước đối tượng "system layout" để quét và hiển thị ngắn gọn đặc điểm của đối tượng đó.</li>
      
        </ul>


      <h4 className="margin-y-40">2. Phân hệ Giới: Thay đổi các module chứa mã định vị</h4>

      <h5 className="text-indent-whole">Case 4: Kỹ thuật hoán đổi vị trí và thay thế khối mã [Giới Cụm] tương đương</h5>
      
        <ul className="list-square">
      
          <li>we started the implementation [<strong>af</strong>ter a clear briefing].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã bắt đầu việc triển khai [sau một buổi hướng dẫn rõ ràng].</li>
      
          <li className="list-none">Hình thái gốc: [<strong>af</strong>ter a clear briefing] - [prepoSITional PHRASE][GIỚI CỤM] bắt đầu bằng [GIỚI] chỉ mốc thời gian "<strong>af</strong>ter " để kéo theo khối [OBject PROnoun][TÂN ĐẠI] phía sau.</li>
      
          <li className="list-none">Chức năng: [<strong>af</strong>ter a clear briefing] - [ADverb PHRASE][TRẠNG CỤM] thực thi vai trò làm khối bối cảnh thời gian đứng sau để xác định cơ sở cho hành động chính.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Thế khối [Giới Cụm] tương đương</strong>:</p>
      
        <ul className="list-square">
      
          <li>we started the implementation [with a clear briefing].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã bắt đầu việc triển khai [với một buổi hướng dẫn rõ ràng].</li>
      
          <li className="list-none">Hình thái mới: [with a clear briefing] - [prepoSITional PHRASE][GIỚI CỤM] mới, bắt đầu bằng [GIỚI] đồng hành/phương thức "with" được đưa vào thế chỗ.</li>
      
          <li className="list-none">Chức năng mới: [with a clear briefing] - [ADverb PHRASE][TRẠNG CỤM] tiếp tục đảm nhận chính xác vai trò thiết lập khối bối cảnh phương thức cho hành động chính mà không làm biến dạng sơ đồ sắp xếp tổng thể.</li>
      
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