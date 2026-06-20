import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Respond(): React.JSX.Element {

  const postId = "Respond";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#verbs-terms"><mark className="highlight-tertiary-padding-4-8">Verbs</mark></HashLink></h4>
      
            
      <h1 className="margin-y-50 text-center">[respond]</h1>

      {/* This is the content of Vocabulary Term. */}


      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-30"><strong>Động Cơ</strong> [<strong>Verb Base</strong>]: [respond] /rɪˈspɒnd/</p>

            <ul className="list-square">
          
              <li>Please [______] to this email.</li>
              <li className="margin-bottom-20 list-none">Hãy [phản hồi] email này.</li>

              <li className="list-none">Hình thái: [respond] - Động Cơ [Verb Base] nguyên mẫu, làm hành động chính tác động lên thành phần chịu tác động "this email".</li>
          
            </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>



      {/* =============================
            🟦 Cấp độ Cơ [Base]
      ============================= */}


      <h4 className="margin-top-50 margin-bottom-40">🟦 Cấp độ Cơ [Base]</h4>

      <p className="text-indent-whole">Thành phần nền tảng ở dạng từ đơn lẻ, thực hiện một vai trò ngữ pháp cốt lõi.</p>


      <p className="margin-top-20 text-indent-whole"><strong>Danh Cơ</strong> [<strong>Noun Base</strong>]: [response] /rɪˈspɒns/</p>
      
        <ul className="list-square">
      
          <li>We need a quick [______].</li>
          <li className="margin-bottom-20 list-none">Chúng ta cần một [sự phản hồi] nhanh chóng.</li>
      
          <li className="list-none">Hình thái: [response] - Động Cơ [Verb Base] biến đổi phần đuôi thành "-se" để chuyển đổi bản chất sang chức năng danh.</li>
      
          <li className="list-none">Chức năng: [response] - Danh Cơ [Noun Base] đứng sau lượng cơ "a quick" để làm thành phần chịu tác động trực tiếp cho Động Cơ "need".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Cơ</strong> [<strong>Adjective Base</strong>]: [responsive] /rɪˈspɒn.sɪv/</p>
      
        <ul className="list-square">
      
          <li>His customer service was [______].</li>
          <li className="margin-bottom-20 list-none">Dịch vụ khách hàng của anh ấy [có sự phản hồi tốt / nhạy bén].</li>
      
          <li className="list-none">Hình thái: [responsive] - Động Cơ [Verb Base] kết hợp phần đuôi "-ive" để chuyển đổi bản chất sang chức năng mô tả đặc điểm.</li>
      
          <li className="list-none">Chức năng: [responsive] - Tính Cơ [Adjective Base] đứng sau thời động cơ hệ từ "was" để làm thành phần bổ nghĩa cho thành phần thực hiện "His customer service".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cơ</strong> [<strong>Adverb Base</strong>]: [responsively] /rɪˈspɒn.sɪv.li/</p>
      
        <ul className="list-square">
      
          <li>She handles tasks [______].</li>
          <li className="margin-bottom-20 list-none">Cô ấy xử lý các nhiệm vụ [một cách linh hoạt, có sự phản hồi nhanh chóng].</li>
      
          <li className="list-none">Hình thái: [responsively] - Động Cơ [Verb Base] kết hợp thêm chuỗi đuôi "-ively" để chuyển đổi bản chất sang chức năng trạng.</li>
      
          <li className="list-none">Chức năng: [responsively] - Trạng Cơ [Adverb Base] đứng sau để thực hiện chức năng bổ nghĩa trực tiếp cho Động Cơ hành động "handles".</li>
      
        </ul>
      
      


      {/* =============================
            🟦 Cấp độ Cụm [Phrase]
      ============================= */}


      <h4 className="margin-y-40">🟦 Cấp độ Cụm [Phrase]</h4>
          
      <p className="text-indent-whole">Đơn vị kết hợp nhiều từ nhưng chưa có đầy đủ phần Thành phần thực hiện - Hành động.</p>


      <p className="margin-top-20 text-indent-whole"><strong>Danh Cụm</strong> [<strong>Noun Phrase</strong>]: [Responding to customers]</p>
      
        <ul className="list-square">
      
          <li>[______] is our priority.</li>
          <li className="margin-bottom-20 list-none">[Việc phản hồi khách hàng] là ưu tiên của chúng tôi.</li>
      
          <li className="list-none">Hình thái: [Responding to customers] - Động Cụm [Verb Phrase] có gốc là hành động thêm đuôi "-ing" đi kèm thành phần chịu tác động "customers", dùng làm chất liệu nền để đóng vai trò cho các chức năng khác.</li>
      
          <li className="list-none">Chức năng: [Responding to customers] - Danh Cụm [Noun Phrase] cấu tạo từ cụm hành động hóa danh, đứng đầu câu để thực hiện chức năng làm thành phần thực hiện cho Động Cơ "is".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Cụm</strong> [<strong>Adjective Phrase</strong>]: [Responding to customers]</p>
      
        <ul className="list-square">
      
          <li>The staff [______] is professional.</li>
          <li className="margin-bottom-20 list-none">Người nhân viên [đang phản hồi khách hàng] chuyên nghiệp.</li>
      
          <li className="list-none">Hình thái: [Responding to customers] - Động Cụm [Verb Phrase] sử dụng dạng hành động thêm đuôi "-ing" đi kèm thành phần chịu tác động "customers" tạo tính chủ động.</li>
      
          <li className="list-none">Chức năng: [Responding to customers] - Tính Cụm [Adjective Phrase] đứng ngay sau để thực hiện chức năng bổ nghĩa trực tiếp cho Danh Cơ "The staff".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm</strong> [<strong>Adverb Phrase</strong>]: [By responding to customers]</p>
      
        <ul className="list-square">
      
          <li>[______], we improved our rating.</li>
          <li className="margin-bottom-20 list-none">[Bằng cách phản hồi khách hàng], chúng tôi đã cải thiện điểm đánh giá của mình.</li>
      
          <li className="list-none">Hình thái: [By responding to customers] - Động Cụm [Verb Phrase] kết hợp thêm thành phần chỉ phương thức "By" vào trước hành động đuôi "-ing".</li>
      
          <li className="list-none">Chức năng: [By responding to customers] - Trạng Cụm [Adverb Phrase] đứng đầu câu và ngăn cách bằng dấu phẩy để thực hiện chức năng bổ nghĩa cho cả phần nội dung chính nhằm chỉ phương thức hành động.</li>
      
        </ul>
      



      {/* =============================
            🟦 Cấp độ Câu [Clause]
      ============================= */}


      <h4 className="margin-y-40">🟦 Cấp độ Câu [Clause]</h4>

      <p className="text-indent-whole">Đơn vị bậc cao có đầy đủ phần Thành phần thực hiện - Hành động để diễn đạt một ý phụ thuộc hoặc trọn vẹn, mang hình thái Động Câu [OSV] khi chứa trọn các thành phần [Object Subject Verb].</p>


      <p className="margin-top-20 text-indent-whole"><strong>Danh Câu</strong> [<strong>Noun Clause</strong>]: [How the system responds]</p>
      
        <ul className="list-square">
      
          <li>I checked [______] to the error.</li>
          <li className="margin-bottom-20 list-none">Tôi đã kiểm tra [cách mà hệ thống phản hồi] đối với lỗi đó.</li>
      
          <li className="list-none">Hình thái: [How the system responds] - Động Câu [Verb Clause] bắt đầu bằng thành phần liên kết phương thức "How", có thành phần thực hiện "the system" và Động Cơ chính "responds".</li>
      
          <li className="list-none">Chức năng: [How the system responds] - Danh Câu [Noun Clause] đóng vai trò là phần phụ thuộc chức năng danh, đứng sau để thực hiện chức năng làm thành phần chịu tác động trực tiếp cho Động Cơ chính "checked".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Câu</strong> [<strong>Adjective Clause</strong>]: [How the system responds]</p>
      
        <ul className="list-square">
      
          <li>The way [______] is very crucial.</li>
          <li className="margin-bottom-20 list-none">Cách thức [mà hệ thống phản hồi] rất quan trọng.</li>
      
          <li className="list-none">Hình thái: [How the system responds] - Động Câu [Verb Clause] thiết lập phần phối hợp có đầy đủ thành phần thực hiện "the system" và hành động "responds" đi sau thành phần liên kết "How".</li>
      
          <li className="list-none">Chức năng: [How the system responds] - Tính Câu [Adjective Clause] đóng vai trò là phần phụ thuộc liên kết bổ nghĩa, đứng sau để thực hiện chức năng bổ nghĩa trực tiếp cho Danh Cơ chỉ phương thức "The way".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Trạng Câu</strong> [<strong>Adverb Clause</strong>]: [As the system responds]</p>
      
        <ul className="list-square">
      
          <li>[______] immediately, we can save time.</li>
          <li className="margin-bottom-20 list-none">[Vì hệ thống phản hồi] ngay lập tức, chúng ta có thể tiết kiệm thời gian.</li>
      
          <li className="list-none">Hình thái: [As the system responds] - Động Câu [Verb Clause] sử dụng thành phần liên kết nguyên nhân "As" kết hợp trọn vẹn cùng thành phần thực hiện và hành động để làm chất liệu bổ trợ.</li>
      
          <li className="list-none">Chức năng: [As the system responds] - Trạng Câu [Adverb Clause] đóng vai trò là phần phụ thuộc bổ trợ nguyên nhân, đứng đầu để thực hiện chức năng làm thành phần bổ trợ chỉ lý do, bổ nghĩa cho toàn bộ thành phần chính "we can save time".</li>
      
        </ul>


      

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>June 20, 2026 · by 💎Gem ·</span>
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