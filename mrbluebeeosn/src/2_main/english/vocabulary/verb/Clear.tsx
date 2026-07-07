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
    
      <h4><HashLink smooth to="/vocabulary#verbs-terms"><mark className="highlight-tertiary-padding-4-8">Verbs</mark></HashLink></h4>

      
      <h1 className="margin-y-50 text-center">[clear]</h1>

      {/* This is the content of Vocabulary Term. */}


      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20">[clear] is a [Verb Base] that means to remove things that are not wanted from a place, or to make something easy to see or understand.</p>

          <p>[clear] là một Động Cơ [Verb Base] có nghĩa là dọn dẹp, làm sạch hoặc làm cho rõ ràng, thông suốt.</p>

          <p className="margin-top-20">Ví dụ: /klɪə(r)/</p>

            <ul className="list-square">
          
              <li>You must [clear] the table.</li>
              <li className="margin-bottom-20 list-none">Bạn phải [dọn dẹp] cái bàn.</li>

              <li className="list-none">Hình thái: [clear] - Động Cơ [Verb Base] dạng nguyên bản đứng sau Thái Động Cơ [Modal Verb Base] "must" để thực thi hành động tác động lên thành phần chịu tác động "the table".</li>
          
            </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>



      {/* =============================
            
      ============================= */}


      {/* 1.  */}

			<h3 className="margin-y-50 text-center">HỆ THỐNG PHÂN LOẠI HẠT NHÂN ĐỘNG CƠ [VERB BASE CATEGORIES]</h3>
      
        <ol>
      
          <li value="1"><strong>Động Cơ</strong> [<strong>Verb Base</strong>]: clear</li>
          <li className="margin-bottom-20 list-none">Là mã hành động nguyên bản gốc, chưa qua xử lý dấu mốc thời gian hay phương thức, đóng vai trò là lõi dữ liệu thô.</li>
      
          <li value="2"><strong>Thời Động Cơ</strong> [<strong>Tense Verb Base</strong>]: is, was, has, had, will</li>
          <li className="margin-bottom-20 list-none">Là đơn vị từ đơn chuyên biệt chịu trách nhiệm kích hoạt bối cảnh thời gian (Hiện tại/Quá khứ) hoặc làm trợ lực thiết lập thể chủ động/bị động, hoàn thành/tiếp diễn.</li>

          <li value="3"><strong>Thời Động Cơ Phức</strong> [<strong>Complex Tense Verb Base</strong>]: had been, has been</li>
          <li className="margin-bottom-20 list-none">Là phân hệ cụm mã gồm nhiều thành phần thời phối hợp nhau để xử lý các bối cảnh thời gian phức tạp (như Quá khứ hoàn thành tiếp diễn, Hiện tại hoàn thành tiếp diễn).</li>
      
          <li value="4"><strong>Thực Động Cơ</strong> [<strong>Action Verb Base</strong>]: clearing, cleared (khi đi sau các trợ mã Thời)</li>
          <li className="margin-bottom-20 list-none">Là mã hành động đã được biến đổi hình thái sang dạng chuyển động tiếp diễn (-ing) hoặc trạng thái hoàn thành/bị động (-v3/-ed) để phối hợp với thành phần Thời, trực tiếp hiển thị bản chất thực thi của hành động.</li>

          <li value="5"><strong>Thái Động Cơ</strong> [<strong>Modal Verb Base</strong>]: must, can, should, may, might</li>
          <li className="margin-bottom-20 list-none">Là mã thiết lập chế độ, tâm thế hoặc khả năng, mức độ chắc chắn của hành động (như bắt buộc, có thể, nên).</li>
      
          <li value="6"><strong>Thời-Thực Động Cơ</strong> [<strong>Tense-Action Verb Base</strong>]: clears, cleared (Quá khứ đơn, dạng độc lập)</li>
          <li className="list-none">Là phân hệ tích hợp tối tân, nén cả dấu mốc Thời gian và bản chất Thực thi hành động vào trong một đơn vị từ đơn duy nhất.</li>
      
        </ol>
    

      <p className="margin-top-20"><strong>Sơ đồ phối hợp mã mã nguồn</strong> [<strong>Clear</strong>]:</p>
      
        <ul className="list-square">
      
          <li>is clearing → Thời Động Cơ is + Thực Động Cơ clearing</li>

          <li>was clearing → Thời Động Cơ was + Thực Động Cơ clearing</li>
      
          <li>has cleared → Thời Động Cơ has + Thực Động Cơ cleared</li>
      
          <li>had been clearing → Thời Động Cơ Phức had been + Thực Động Cơ clearing</li>

          <li>has been clearing → Thời Động Cơ Phức has been + Thực Động Cơ clearing</li>
      
          <li>cleared (Quá khứ đơn) → Thời-Thực Động Cơ (Một đơn vị tích hợp cả hai)</li>
      
          <li>should avoid → Thái Động Cơ should + Động Cơ avoid</li>
      
        </ul>
      


      {/* 1.  */}

			<h3 className="margin-y-50 text-center">PHẦN 1: HỆ THỐNG CÁC VÍ DỤ PHÂN HỆ MÃ TIẾNG ANH</h3>

      
      <h4 className="margin-y-40">1. Phân hệ Động Cơ [Verb Base]</h4>

      <p className="text-indent-whole">Khi nhìn vào một từ đơn hành động, người học nhận diện diện mạo vật lý của nó là Động Cơ [Verb Base].</p>

      <p className="text-indent-whole">Khi đặt vào sơ đồ vận hành, chính hình thái Động Cơ này sẽ hình thành nên các loại chức năng độc lập:</p>

          
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Danh Cơ</strong> [<strong>Noun Base</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 1: /ˈklærəti/</p>
      
        <ul className="list-square">
      
          <li>We need [clarity] now.</li>
          <li className="margin-bottom-20 list-none">Chúng ta cần [sự rõ ràng] ngay bây giờ.</li>
      
          <li className="list-none">Hình thái: [clarity] - Động Cơ [Verb Base] biến đổi hình thái gốc thông qua chuỗi kết cấu chuyển đổi để tạo thành một thực thể định danh độc lập.</li>
      
          <li className="list-none">Chức năng: [clarity] - Danh Cơ [Noun Base] đảm nhận nhiệm vụ làm Danh Nhận [Object] đứng sau để tiếp nhận tác động từ hành động "need".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Tính Cơ</strong> [<strong>Adjective Base</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 2: /klɪə(r)/</p>
      
        <ul className="list-square">
      
          <li>I want a [clear] explanation.</li>
          <li className="margin-bottom-20 list-none">Tôi muốn một lời giải thích [rõ ràng].</li>
      
          <li className="list-none">Hình thái: [clear] - Động Cơ [Verb Base] giữ nguyên diện mạo vật lý nhưng chuyển đổi bản chất sang chức năng mô tả đặc điểm dưới dạng từ đơn lẻ.</li>
      
          <li className="list-none">Chức năng: [clear] - Tính Cơ [Adjective Base] kích hoạt cơ chế của bộ quét đặt ngay trước đối tượng "explanation" để hiển thị đặc điểm của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Trạng Cơ</strong> [<strong>Adverb Base</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 3: /ˈklɪəli/</p>
      
        <ul className="list-square">
      
          <li>She speaks [clearly].</li>
          <li className="margin-bottom-20 list-none">Cô ấy nói chuyện [một cách rõ ràng].</li>
      
          <li className="list-none">Hình thái: [clearly] - Động Cơ [Verb Base] kết hợp thêm phần đuôi "-ly" để chuyển đổi bản chất sang chức năng trạng dưới dạng từ đơn lẻ thông dụng.</li>
      
          <li className="list-none">Chức năng: [clearly] - Trạng Cơ [Adverb Base] thực thi vai trò làm thành phần bổ nghĩa đứng sau hành động "speaks" để xác định bối cảnh cách thức.</li>
      
        </ul>


      <h4 className="margin-y-40">2. Phân hệ Động Cụm [Verb Phrase]</h4>
          
      <p className="text-indent-whole">Khi người học nhìn thấy một vùng mã chứa nhiều thành phần đi kèm hành động, họ nhận diện ngay diện mạo vật lý Động Cụm [Verb Phrase]. Khối hình thái này sẽ hình thành đầy đủ các chương trình chức năng đầu ra:</p>


      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Danh Cụm</strong> [<strong>Noun Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4:</p>
      
        <ul className="list-square">
      
          <li>You should avoid [clearing the files carelessly].</li>
          <li className="margin-bottom-20 list-none">Bạn nên tránh [việc xóa các tệp tin một cách bất cẩn].</li>
      
          <li className="list-none">Hình thái: [clearing the files carelessly] - Động Cụm [Verb Phrase] chứa Thực Động Cơ [Action Verb Base] dạng thêm đuôi "-ing", mở rộng thành một vùng mã hành động phức hợp gồm hành động dọn sạch/xóa bỏ, đối tượng tiếp nhận và trạng thái đi kèm.</li>
      
          <li className="list-none">Chức năng: [clearing the files carelessly] - Danh Cụm [Noun Phrase] đóng vai trò làm Danh Nhận [Object] (thành phần chịu tác động) tích hợp chuỗi dữ liệu đầu việc đứng ngay sau cặp phối hợp Danh Chủ [Subject] "You" và Thái Động Cơ - Động Cơ "should avoid".</li>
      
        </ul>


      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Tính Cụm</strong> [<strong>Adjective Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole"><strong>Tính Cụm dạng sắp xảy ra chủ động</strong> -<strong>to V</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5a:</p>
      
        <ul className="list-square">
      
          <li>The worker [to clear the room] will arrive soon.</li>
          <li className="margin-bottom-20 list-none">Người công nhân [sắp sửa dọn dẹp căn phòng] sẽ đến sớm thôi.</li>
      
          <li className="list-none">Hình thái: [to clear the room] - Động Cụm [Verb Phrase] chứa Thực Động Cơ [Action Verb Base] ở dạng nguyên bản có "to" để biểu thị tính chủ động hướng tới tương lai.</li>
      
          <li className="list-none">Chức năng: [to clear the room] - Tính Cụm [Adjective Phrase] đặt ngay sau đối tượng "worker" để quét và hiển thị đặc điểm hành động sắp sửa xảy ra mang tính chủ động của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Cụm dạng sắp xảy ra bị động -to be</strong> <strong>v3</strong>/-<strong>ed</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5b:</p>
      
        <ul className="list-square">
      
          <li>The data [to be cleared from the system] is not important.</li>
          <li className="margin-bottom-20 list-none">Dữ liệu [sắp sửa được xóa khỏi hệ thống] thì không quan trọng.</li>
      
          <li className="list-none">Hình thái: [to be cleared from the system] - Động Cụm [Verb Phrase] hiển thị dưới dạng mô hình "to be + V3/-ed" (chứa Thực Động Cơ [Action Verb Base] biến đổi hình thái bị động) kết hợp phần mở rộng phương thức để biểu thị trạng thái bị động hướng tới tương lai.</li>
      
          <li className="list-none">Chức năng: [to be cleared from the system] - Tính Cụm [Adjective Phrase] kích hoạt cơ chế bộ quét đặt ngay sau đối tượng "data" để mô tả đặc điểm trạng thái sắp sửa được tác động của đối tượng đó.</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Tính Cụm dạng đang diễn ra</strong> -<strong>ing</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5c:</p>
      
        <ul className="list-square">
      
          <li>The storm [clearing the sky] brought cool air.</li>
          <li className="margin-bottom-20 list-none">Cơn bão [đang làm sạch bầu trời] đã mang lại không khí mát mẻ.</li>
      
          <li className="list-none">Hình thái: [clearing the sky] - Động Cụm [Verb Phrase] chứa Thực Động Cơ [Action Verb Base] thêm đuôi "-ing" để biểu thị tính chủ động đang xảy ra.</li>
      
          <li className="list-none">Chức năng: [clearing the sky] - Tính Cụm [Adjective Phrase] đặt ngay sau đối tượng "storm" để quét và hiển thị đặc điểm hành động chủ động của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Cụm dạng đã xong bị động</strong> -<strong>v3</strong>/-<strong>ed</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5d:</p>
      
        <ul className="list-square">
      
          <li>The land [cleared for the project] is massive.</li>
          <li className="margin-bottom-20 list-none">Khu đất [đã được giải phóng mặt bằng cho dự án] thì rất rộng lớn.</li>
      
          <li className="list-none">Hình thái: [cleared for the project] - Động Cụm [Verb Phrase] hiển thị dưới dạng một vùng mã chứa Thực Động Cơ [Action Verb Base] ở dạng bị động thuộc trục thời quá khứ và phần mở rộng phương thức.</li>
      
          <li className="list-none">Chức năng: [cleared for the project] - Tính Cụm [Adjective Phrase] kích hoạt cơ chế bộ quét đặt ngay sau đối tượng "land" để mô tả đặc điểm trạng thái bị động hoàn thành của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Cụm dạng nguyên bản</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5e:</p>
      
        <ul className="list-square">
      
          <li>We need software [capable of clearing virus files].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi cần một phần mềm [có khả năng dọn sạch các tệp virus].</li>
      
          <li className="list-none">Hình thái: [capable of clearing virus files] - Cụm thành phần bắt đầu bằng mã đặc điểm gốc kết hợp mở rộng giới cụm phía sau (chứa Thực Động Cơ [Action Verb Base] dạng -ing sau Giới Cơ).</li>
      
          <li className="list-none">Chức năng: [capable of clearing virus files] - Tính Cụm [Adjective Phrase] đặt ngay sau đối tượng "software" để quét và xác định năng lực, đặc điểm của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Trạng Cụm</strong> [<strong>Adverb Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm dạng</strong> -<strong>to V</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6a:</p>
      
        <ul className="list-square">
      
          <li>They hired him [to clear the old building].</li>
          <li className="margin-bottom-20 list-none">Họ đã thuê anh ấy [để dọn dẹp tòa nhà cũ].</li>
      
          <li className="list-none">Hình thái: [to clear the old building] - Động Cụm [Verb Phrase] định hình dưới dạng một vùng mã hành động đứng cuối chuỗi thông tin, bắt đầu bằng Thực Động Cơ [Action Verb Base] nguyên bản có "to".</li>
      
          <li className="list-none">Chức năng: [to clear the old building] - Trạng Cụm [Adverb Phrase] đảm nhận vai trò làm một khối bối cảnh mục đích đứng sau để bổ nghĩa cho hành động "hired him".</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm dạng</strong> -<strong>to V</strong> (<strong>có dấu phẩy</strong>):</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6b:</p>
      
        <ul className="list-square">
      
          <li>[To clear the road quickly], they used heavy machines.</li>
          <li className="margin-bottom-20 list-none">[Để giải tỏa con đường một cách nhanh chóng], họ đã sử dụng máy móc hạng nặng.</li>
      
          <li className="list-none">Hình thái: [To clear the road quickly] - Động Cụm [Verb Phrase] bắt đầu bằng Thực Động Cơ [Action Verb Base] nguyên bản có "to", được đảo lên đứng biệt lập ở đầu câu và ngăn cách bằng dấu phẩy.</li>
      
          <li className="list-none">Chức năng: [To clear the road quickly], - Trạng Cụm [Adverb Phrase] đảm nhận nhiệm vụ làm khối bối cảnh mục đích nhấn mạnh cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm dạng</strong> -<strong>ing</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6c:</p>
      
        <ul className="list-square">
      
          <li>The company spent millions [clearing the polluted river].</li>
          <li className="margin-bottom-20 list-none">Công ty đã chi hàng triệu đô [cho việc làm sạch dòng sông bị ô nhiễm].</li>
      
          <li className="list-none">Hình thái: [clearing the polluted river] - Động Cụm [Verb Phrase] chứa Thực Động Cơ [Action Verb Base] dạng đuôi "-ing" đứng ở phần sau câu nhằm làm rõ tiến trình nội dung.</li>
      
          <li className="list-none">Chức năng: [clearing the polluted river] - Trạng Cụm [Adverb Phrase] đóng vai trò làm khối bối cảnh cách thức/nội dung đi kèm để bổ nghĩa trực tiếp cho khuôn mẫu hành động "spent millions" phía trước.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm dạng</strong> -<strong>ing</strong> (<strong>có dấu phẩy</strong>):</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6d:</p>
      
        <ul className="list-square">
      
          <li>[Clearing the debt early], she felt completely free.</li>
          <li className="margin-bottom-20 list-none">[Do xóa sạch nợ nần sớm], cô ấy cảm thấy hoàn toàn tự do.</li>
      
          <li className="list-none">Hình thái: [Clearing the debt early] - Động Cụm [Verb Phrase] đứng biệt lập ở đầu câu, ngăn cách bằng dấu phẩy, mang Thực Động Cơ [Action Verb Base] dạng "-ing" do được rút gọn từ một hệ Động Câu Trạng phụ thuộc có cùng thành phần lõi Danh Chủ [Subject].</li>
      
          <li className="list-none">Chức năng: [Clearing the debt early] - Trạng Cụm [Adverb Phrase] đóng vai trò làm một khối bối cảnh nguyên nhân/phương thức tổng thể để bổ nghĩa cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40">3. Phân hệ Giới Cụm [Prepositional Phrase]</h4>
          
      <p className="margin-top-20 text-indent-whole">Khi người học nhìn thấy một vùng mã mở rộng bắt đầu bằng một mã định vị (Giới Cơ) kéo theo một khối tên gọi phía sau, họ nhận diện ngay diện mạo vật lý Giới Cụm [Prepositional Phrase]. Khối hình thái này không tạo ra dữ liệu đầu việc (Danh) mà chỉ chuyên biệt hình thành nên 2 chương trình chức năng:</p>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Tính Cụm</strong> [<strong>Adjective Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole"><strong>Tính Cụm dạng Giới Cụm</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 7:</p>
      
        <ul className="list-square">
      
          <li>The solution [for the clear error] is simple.</li>
          <li className="margin-bottom-20 list-none">Giải pháp [cho lỗi rõ ràng này] thì đơn giản.</li>
      
          <li className="list-none">Hình thái: [for the clear error] - Giới Cụm [Prepositional Phrase] xuất hiện dưới dạng một vùng mã định vị không chứa hạt nhân hành động, bắt đầu bằng Giới Cơ "for".</li>
      
          <li className="list-none">Chức năng: [for the clear error] - Tính Cụm [Adjective Phrase] vận hành như một bộ quét đặt ngay phía sau đối tượng "solution" để hiển thị và mô tả đặc điểm phạm vi thuộc về của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Trạng Cụm</strong> [<strong>Adverb Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm dạng Giới Cụm</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 8a:</p>
      
        <ul className="list-square">
      
          <li>We restarted the system [after a clear warning].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã khởi động lại hệ thống [sau một cảnh báo rõ ràng].</li>
      
          <li className="list-none">Hình thái: [after a clear warning] - Giới Cụm [Prepositional Phrase] xuất hiện dưới dạng một vùng mã xác lập thời điểm, bắt đầu bằng Giới Cơ "after".</li>
      
          <li className="list-none">Chức năng: [after a clear warning] - Trạng Cụm [Adverb Phrase] đảm nhận vai trò làm một khối bối cảnh thời gian đứng sau để xác định cơ sở cho hành động "restarted the system".</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm dạng Giới Cụm</strong> (<strong>có dấu phẩy</strong>):</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 8b:</p>
      
        <ul className="list-square">
      
          <li>[For a clear vision], they adjusted the camera.</li>
          <li className="margin-bottom-20 list-none">[Để có được tầm nhìn rõ ràng], họ đã điều chỉnh máy ảnh.</li>
      
          <li className="list-none">Hình thái: [For a clear vision] - Giới Cụm [Prepositional Phrase] bắt đầu bằng Giới Cơ "For" kéo theo vùng cụm danh chủ/danh cụm phía sau, được đảo lên đứng biệt lập ở đầu câu và ngăn cách bằng dấu phẩy.</li>
      
          <li className="list-none">Chức năng: [For a clear vision] - Trạng Cụm [Adverb Phrase] đảm nhận nhiệm vụ thiết lập một khối bối cảnh mục đích tổng thể để bổ nghĩa cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40">4. Phân hệ Động Câu [Verb Clause]</h4>

      <p className="margin-top-20 text-indent-whole">Khi vùng mã mở rộng thành một phân hệ chứa một hệ con hoàn chỉnh có cả thành phần nền tảng Danh Chủ [Subject] riêng và Động Cơ riêng, người học xác định được diện mạo vật lý Động Câu [Verb Clause].</p>

      <p className="margin-top-20 text-indent-whole"><strong>Bản chất vật lý</strong>: Động Câu tuy mang hình thái của một hệ con đầy đủ nhưng <strong>không thể đứng một mình độc lập</strong> để tạo thành một thông điệp trọn vẹn. Nó luôn lồng ghép vào sơ đồ tổng thể để thực thi một chức năng phụ thuộc.</p>

      <p className="margin-top-20 text-indent-whole">Dựa trên sự xuất hiện của mã kết nối, Động Câu được chia làm 2 phân hệ vận hành:</p>

          
      <h5 className="margin-y-30 text-indent-whole">4.1 Phân hệ Động Câu Hiển Liên [Connector Verb Clause]</h5>

      <p className="margin-top-20 text-indent-whole">Phân hệ này sử dụng các mã kết nối (Liên Cơ [Connector Base] hoặc mã định vị) xuất hiện trực tiếp ở đầu hệ con để làm điểm tựa liên kết dữ liệu.</p>


      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Danh Câu</strong> [<strong>Noun Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 9:</p>
      
        <ul className="list-square">
      
          <li>I know [how you clear the cache].</li>
          <li className="margin-bottom-20 list-none">Tôi biết [cách mà bạn dọn sạch bộ nhớ đệm].</li>
      
          <li className="list-none">Hình thái: [how you clear the cache] - Động Câu [Verb Clause] chứa thành phần liên kết trực quan ở đầu, có Danh Chủ [Subject] "you" và Thực Động Cơ [Action Verb Base] "clear" thiết lập phối hợp hành động.</li>
      
          <li className="list-none">Chức năng: [how you clear the cache] - Danh Câu [Noun Clause] trở thành Danh Nhận [Object] chứa dữ liệu mục tiêu chịu tác động từ hành động "know".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Tính Câu</strong> [<strong>Adjective Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 10: [who responded to my email]</p>
      
        <ul className="list-square">
      
          <li>The manager [who cleared the schedule] is out.</li>
          <li className="margin-bottom-20 list-none">Người quản lý [người mà đã xóa trống lịch trình] thì đã đi ra ngoài.</li>
      
          <li className="list-none">Hình thái: [who cleared the schedule] - Động Câu [Verb Clause] chứa mã liên kết chỉ người đứng đầu, mang hạt nhân Thời-Thực Động Cơ [Tense-Action Verb Base] "cleared" xử lý bối cảnh thuộc trục thời quá khứ.</li>
      
          <li className="list-none">Chức năng: [who cleared the schedule] - Tính Câu [Adjective Clause] hoạt động như một module lọc bổ sung đặt sau một khối tên gọi để nhận diện đối tượng "manager".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hình thành chức năng Trạng Câu</strong> [<strong>Adverb Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11:</p>
      
        <ul className="list-square">
      
          <li>We can drive [because the snow cleared quickly].</li>
          <li className="margin-bottom-20 list-none">Chúng ta có thể lái xe [vì tuyết đã tan sạch một cách nhanh chóng].</li>
      
          <li className="list-none">Hình thái: [because the snow cleared quickly] - Động Câu [Verb Clause] kích hoạt ngay sau Liên Cơ [Connector Base] nguyên nhân "because", chứa Danh Chủ [Subject] "the snow" và Thời-Thực Động Cơ [Tense-Action Verb Base] "cleared" mang dấu mốc trục thời quá khứ.</li>
      
          <li className="list-none">Chức năng: [because the snow cleared quickly] - Trạng Câu [Adverb Clause] thiết lập module bối cảnh để bổ nghĩa cho toàn bộ phần diện thông tin chính "We can drive" đứng trước.</li>
      
        </ul>



      <h5 className="margin-y-30 text-indent-whole">4.2 Phân hệ Động Câu Ẩn Liên [Zero-Connector Verb Clause]</h5>

      <p className="margin-top-20 text-indent-whole">Ở phân hệ này, các thành phần liên kết đã được người bản ngữ chủ động lược bỏ để tối ưu tốc độ truyền tải thông tin. Về diện mạo vật lý, khối mã này nhìn hoàn toàn giống như một hệ con độc lập có đầy đủ cặp bài trùng Danh Chủ [Subject] và Động Cơ, tuy nhiên chức năng của nó vẫn là chức năng phụ thuộc và vẫn sinh ra đầy đủ 3 đầu ra: Danh, Tính, Trạng.</p>


      <p className="margin-top-20 text-indent-whole"><strong>Danh Câu Ẩn Liên</strong> [<strong>Zero-Connector Noun Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11a:</p>
      
        <ul className="list-square">
      
          <li>I hope [you cleared the history].</li>
          <li className="margin-bottom-20 list-none">Tôi hy vọng [bạn đã xóa sạch lịch sử].</li>
      
          <li className="list-none">Hình thái: [you cleared the history] - Động Câu [Verb Clause] đã ẩn Liên Cơ [Connector Base] định hướng "that", chỉ còn hiển thị trọn vẹn khối Danh Chủ [Subject] "you" và Thời-Thực Động Cơ [Tense-Action Verb Base] "cleared".</li>
      
          <li className="list-none">Chức năng: [you cleared the history] - Danh Câu [Noun Clause] đóng vai trò làm Danh Nhận [Object] nhận toàn bộ năng lượng hy vọng từ Thời-Thực Động Cơ [Tense-Action Verb Base] "hope".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Câu Ẩn Liên</strong> [<strong>Zero-Connector Adjective Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11b:</p>
      
        <ul className="list-square">
      
          <li>The path [the staff cleared] was safe.</li>
          <li className="margin-bottom-20 list-none">Con đường [mà nhân viên đã dọn sạch] đã an toàn.</li>
      
          <li className="list-none">Hình thái: [the staff cleared] - Động Câu [Verb Clause] đã ẩn mã liên kết vật thể đứng trước, giữ lại khối Danh Chủ [Subject] "the staff" và Thời-Thực Động Cơ [Tense-Action Verb Base] "cleared".</li>
      
          <li className="list-none">Chức năng: [the staff cleared] - Tính Câu [Adjective Clause] đóng vai trò như bộ quét đặt ngay sau đối tượng "The path" để làm rõ đặc điểm cho đối tượng này.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Trạng Câu Ẩn Liên</strong> [<strong>Zero-Connector Adverb Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11c:</p>
      
        <ul className="list-square">
      
          <li>[Should you clear the desk today], we can start the project.</li>
          <li className="margin-bottom-20 list-none">[Nếu bạn dọn sạch cái bàn trong hôm nay], chúng ta có thể bắt đầu dự án.</li>
      
          <li className="list-none">Hình thái: [Should you clear the desk today] - Động Câu [Verb Clause] vận hành ở trạng thái ẩn Liên Cơ [Connector Base] điều kiện "if" bằng giải pháp đảo Thái Động Cơ [Modal Verb Base] "Should" lên trước, tuy thiết lập bề mặt biến đổi nhưng bản chất vẫn giữ trọn vẹn Danh Chủ [Subject] "you" và Thực Động Cơ [Action Verb Base] "clear".</li>
      
          <li className="list-none">Chức năng: [Should you clear the desk today] - Trạng Câu [Adverb Clause] đảm nhận nhiệm vụ thiết lập khối bối cảnh giả định/điều kiện để bổ nghĩa cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40">5. Phân hệ Đóng Gói Phân Tầng [Nested Structure]</h4>

      <p className="margin-top-20 text-indent-whole">Khi hệ thống vận hành ở mức độ phức tạp, các khối mã sẽ lồng vào nhau tạo nên hệ thống phân tầng tối tân.</p>


      <h5 className="margin-top-20 text-indent-whole">Danh Cụm Phân Tầng [Nested Noun Phrase]</h5>

      <p className="margin-top-20 text-indent-whole">Ví dụ 12:</p>
      
        <ul className="list-square">
      
          <li>[Monitoring {'{how the program clears logs}'}] is important.</li>
          <li className="margin-bottom-20 list-none">[Việc giám sát {'{cách mà chương trình xóa các bản ghi lịch sử}'}] thì quan trọng.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: [Monitoring {'{how the program clears logs}'}] - Động Cụm [Verb Phrase] biểu thị dưới dạng một vùng mã mở rộng lớn bắt đầu bằng Thực Động Cơ [Action Verb Base] dạng đuôi "-ing" và kéo theo thành phần bổ trợ phía sau.</li>
      
          <li className="list-none">Chức năng: [Monitoring {'{how the program clears logs}'}] - <strong>Danh Cụm</strong> [<strong>Noun Phrase</strong>] chịu trách nhiệm làm một vùng đầu việc lớn cần thực hiện, đảm nhận vai trò làm Danh Chủ [Subject] để thiết lập nền tảng thông tin đứng đầu toàn câu trước Thời Động Cơ "is".</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: {'{how the program clears logs}'} - Động Câu [Verb Clause] định hình dưới dạng một khối mã con nằm gọn hoàn toàn bên trong vùng mã tổng thể, chứa đầy đủ Danh Chủ [Subject] riêng "the program" và Thời-Thực Động Cơ [Tense-Action Verb Base] riêng "clears" thiết lập theo trục thời hiện tại.</li>
      
          <li className="list-none">Chức năng: {'{how the program clears logs}'} - Danh Câu [Noun Clause] đóng vai trò làm Danh Nhận [Object] chịu sự điều phối trực tiếp từ hạt nhân hành động "Monitoring" ở tầng ngoài, tích hợp chuỗi thông tin tiếp nhận hành động để làm rõ nội dung cho việc giám sát.</li>
      
        </ul>


      <h5 className="margin-top-20 text-indent-whole">Tính Cụm Phân Tầng [Nested Adjective Phrase]</h5>

      <p className="margin-top-20 text-indent-whole">Ví dụ 13:</p>
      
        <ul className="list-square">
      
          <li>The instructions [about {'{how you clear the space}'}] are clear.</li>
          <li className="margin-bottom-20 list-none">Các hướng dẫn [về {'{cách mà bạn làm trống không gian}'}] thì rõ ràng.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: [about {'{how you clear the space}'}] - Giới Cụm [Prepositional Phrase] biểu thị dưới dạng một vùng mã lớn bắt đầu bằng Giới Cơ "about".</li>
      
          <li className="list-none">Chức năng: [about {'{how you clear the space}'}] - <strong>Tính Cụm</strong> [<strong>Adjective Phrase</strong>] vận hành như một bộ lọc tổng thể đặt ngay phía sau để mô tả đặc điểm nội dung cho Danh Cụm "The instructions" đứng trước nó.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: {'{how you clear the space}'} - Động Câu [Verb Clause] định hình dưới dạng khối mã con nằm gọn bên trong, chứa Danh Chủ [Subject] "you" và Thực Động Cơ [Action Verb Base] "clear".</li>
      
          <li className="list-none">Chức năng: {'{how you clear the space}'} - Danh Câu [Noun Clause] đóng vai trò làm Danh Nhận [Object] chịu sự điều phối trực tiếp của Giới Cơ "about" ở tầng ngoài.</li>
      
        </ul>


          
      <h5 className="margin-top-20 text-indent-whole">Trạng Cụm Phân Tầng [Nested Adverb Phrase]</h5>

      <p className="margin-top-20 text-indent-whole">Ví dụ 14:</p>
      
        <ul className="list-square">
      
          <li>She pointed directly [at {'{where they cleared the trees}'}].</li>
          <li className="margin-bottom-20 list-none">Cô ấy đã chỉ thẳng [vào {'{nơi mà họ đã chặt sạch cây cối}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: [at {'{where they cleared the trees}'}] - Giới Cụm [Prepositional Phrase] biểu thị dưới dạng một vùng mã xác lập không gian lớn bắt đầu bằng Giới Cơ "at".</li>
      
          <li className="list-none">Chức năng: [at {'{where they cleared the trees}'}] - <strong>Trạng Cụm</strong> [<strong>Adverb Phrase</strong>] đảm nhận vai trò làm một khối bối cảnh địa điểm tổng thể đứng sau bổ nghĩa cho hành động "pointed directly".</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: {'{where they cleared the trees}'} - Động Câu [Verb Clause] định hình dưới dạng khối mã con nằm gọn bên trong, chứa Danh Chủ [Subject] riêng "they" và Thời-Thực Động Cơ [Tense-Action Verb Base] riêng "cleared" thuộc trục thời quá khứ.</li>
      
          <li className="list-none">Chức năng: {'{where they cleared the trees}'} - Danh Câu [Noun Clause] đóng vai trò làm Danh Nhận [Object] chịu sự điều phối trực tiếp của Giới Cơ "at" ở tầng ngoài.</li>
      
        </ul>
      


      {/* 2.  */}

			<h3 className="margin-y-50 text-center">PHẦN 2: ỨNG DỤNG ĐỘT PHÁ – GIẢI MÃ PARAPHRASING BẰNG KỸ THUẬT "THẾ KHỐI"</h3>

      <p>Khi tư duy đã chuyển sang nhận diện hệ thống theo <strong>Hình thái trước</strong> - <strong>Chức năng sau</strong>, việc diễn đạt lại thông tin (Paraphrasing) trở thành bài toán lập trình thuần túy: <strong>Thay thế các khối mã có cùng chức năng đầu ra</strong> mà không cần phá vỡ hay làm biến dạng thiết lập tổng thể của khuôn mẫu chung.</p>


      <h4 className="margin-y-40">1. Phân hệ Động: Thay đổi các module chứa hành động</h4>

      <h5 className="margin-y-30 text-indent-whole">Case 1: Giữ nguyên cấp độ, thay thế khối mã tương đương</h5>

      <p className="margin-top-20 text-indent-whole">[<strong>Cụm</strong> → <strong>Cụm</strong>]</p>
      
        <ul className="list-square">
      
          <li>[Clearing the cache] is necessary.</li>
          <li className="margin-bottom-20 list-none">[Việc dọn sạch bộ nhớ đệm] thì cần thiết.</li>
      
          <li className="list-none">Hình thái gốc: [Clearing the cache] - Động Cụm [Verb Phrase] biểu hiện dưới dạng khối mã mở rộng chứa Thực Động Cơ [Action Verb Base] dạng "-ing" và đối tượng đi kèm.</li>
      
          <li className="list-none">Chức năng: [Clearing the cache] - Danh Cụm [Noun Phrase] vận hành như một phân hệ Danh Chủ [Subject] để quản lý một đầu việc lớn ở đầu câu.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Thế khối tương đương</strong>:</p>
      
        <ul className="list-square">
      
          <li>[Deleting the history] is necessary.</li>
          <li className="margin-bottom-20 list-none">[Việc xóa bỏ lịch sử] thì cần thiết.</li>
      
          <li className="list-none">Hình thái mới: [Deleting the history] - Động Cụm [Verb Phrase] xuất hiện dưới dạng khối mở rộng mới chứa Thực Động Cơ [Action Verb Base] khác được đưa vào thế chỗ.</li>
      
          <li className="list-none">Chức năng mới: [Deleting the history] - Danh Cụm [Noun Phrase] duy trì chính xác chức năng làm thành phần Danh Chủ [Subject] của khối cũ.</li>
      
        </ul>



      <h5 className="margin-y-30 text-indent-whole">Case 2: Kỹ thuật nâng cấp từ Giới Cụm lên Động Câu</h5>

      <p className="margin-top-20 text-indent-whole">[<strong>Phrase</strong> → <strong>Clause</strong>]</p>
      
        <ul className="list-square">
      
          <li>We fixed the drive [by clearing old files].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã sửa chữa ổ đĩa [bằng cách xóa các tệp cũ].</li>
      
          <li className="list-none">Hình thái gốc: [by clearing old files] - Giới Cụm [Prepositional Phrase] hiển thị dưới dạng một vùng mã chứa Giới Cơ phương thức "by" đi kèm Thực Động Cơ [Action Verb Base] đuôi "-ing" và đối tượng.</li>
      
          <li className="list-none">Chức năng: [by clearing old files] - Trạng Cụm [Adverb Phrase] đảm nhận vai trò làm một khối bối cảnh phương thức đứng sau bổ nghĩa cho hành động chính.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nâng cấp lên Động Câu</strong>:</p>
      
        <ul className="list-square">
      
          <li>We fixed the drive [because the user cleared the data].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã sửa chữa ổ đĩa [vì người dùng đã xóa sạch dữ liệu].</li>
      
          <li className="list-none">Hình thái mới: [because the user cleared the data] - Động Câu [Verb Clause] hiển thị dưới dạng khối mã chứa đầy đủ Danh Chủ [Subject] "the user" và hạt nhân Thời-Thực Động Cơ [Tense-Action Verb Base] "cleared" đi sau Liên Cơ [Connector Base] "because".</li>
      
          <li className="list-none">Chức năng mới: [because the user cleared the data] - Trạng Câu [Adverb Clause] đảm nhận vai trò bối cảnh nguyên nhân ở cấp độ cao cấp hơn, bổ nghĩa cho toàn bộ phần diện thông tin chính.</li>
      
        </ul>


      <h5 className="margin-y-30 text-indent-whole">Case 3: Kỹ thuật hạ cấp từ Động Câu về Động Cơ</h5>

      <p className="margin-top-20 text-indent-whole">[<strong>Clause</strong> → <strong>Base</strong>]</p>
      
        <ul className="list-square">
      
          <li>I like a system [which clears errors automatically].</li>
          <li className="margin-bottom-20 list-none">Tôi thích một hệ thống [cái mà tự động xóa sạch các lỗi].</li>
      
          <li className="list-none">Hình thái gốc: [which clears errors automatically] - Động Câu [Verb Clause] thiết lập theo dạng phân hệ hệ con đầy đủ bổ nghĩa đứng sau một khối tên gọi, chứa thành phần liên kết "which" và Thời-Thực Động Cơ [Tense-Action Verb Base] "clears".</li>
      
          <li className="list-none">Chức năng: [which clears errors automatically] - Tính Câu [Adjective Clause] đóng vai trò một module lọc nhằm định nghĩa đặc điểm cho đối tượng "system".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hạ cấp về Động Cơ</strong> (<strong>Từ đơn</strong>):</p>
      
        <ul className="list-square">
      
          <li>I like a [clear] system.</li>
          <li className="margin-bottom-20 list-none">Tôi thích một hệ thống [thông suốt / rõ ràng / không có lỗi].</li>
      
          <li className="list-none">Hình thái mới: [clear] - Động Cơ [Verb Base] thu gọn dưới dạng khối đặc điểm đã được cô đọng hoàn toàn về dạng một thành phần tính cơ đơn duy nhất.</li>
      
          <li className="list-none">Chức năng mới: [clear] - Tính Cơ [Adjective Base] thiết lập vị trí ngay trước đối tượng "system" để quét và hiển thị ngắn gọn đặc điểm của đối tượng đó.</li>
      
        </ul>


      <h4 className="margin-y-40">2. Phân hệ Giới: Thay đổi các module chứa mã định vị</h4>

      <h5 className="text-indent-whole">Case 4: Kỹ thuật hoán đổi vị trí và thay thế khối mã Giới Cụm tương đương</h5>
      
        <ul className="list-square">
      
          <li>We started the event [after a clear announcement].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã bắt đầu sự kiện [sau một thông báo rõ ràng].</li>
      
          <li className="list-none">Hình thái gốc: [after a clear announcement] - Giới Cụm [Prepositional Phrase] bắt đầu bằng Giới Cơ chỉ mốc thời gian "after" để kéo theo khối Danh Nhận [Object] phía sau.</li>
      
          <li className="list-none">Chức năng: [after a clear announcement] - Trạng Cụm [Adverb Phrase] thực thi vai trò làm khối bối cảnh thời gian đứng sau để xác định cơ sở cho hành động chính.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Thế khối Giới Cụm tương đương</strong>:</p>
      
        <ul className="list-square">
      
          <li>We started the event [with a clear announcement].</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã bắt đầu sự kiện [với một thông báo rõ ràng].</li>
      
          <li className="list-none">Hình thái mới: [with a clear announcement] - Giới Cụm [Prepositional Phrase] mới, bắt đầu bằng Giới Cơ đồng hành/phương thức "with" được đưa vào thế chỗ.</li>
      
          <li className="list-none">Chức năng mới: [with a clear announcement] - Trạng Cụm [Adverb Phrase] tiếp tục đảm nhận chính xác vai trò thiết lập khối bối cảnh phương thức cho hành động chính mà không làm biến dạng sơ đồ sắp xếp tổng thể.</li>
      
        </ul>

      

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>June 19, 2026 · by 💎Gem ·</span>
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