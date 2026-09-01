import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NOW1(): React.JSX.Element {

  const postId = "NOW1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hien-tai"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NOW
        <sup><Link to="/vocabulary/NOW-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/NOW-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>NOW</strong>" và các thành ngữ liên quan nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [NOW][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">NOW</Link>] /naʊ/ ⬤ (1x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Bây giờ, hiện tại</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Chỉ thời điểm hiện tại, ngay lúc này.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>i am EATing NOW.</li>
          <li className="margin-bottom-20 list-none">Tôi đang ăn bây giờ.</li>

          <li>NOW, PLEASE be QUIet.</li>
          <li className="list-none">Bây giờ, làm ơn im lặng.</li>

        </ul>

      {/* =============================
            Gia đình từ:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Gia đình từ</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>NOW</strong>" vì nó là một từ đơn lẻ.</li>

        </ul>

      {/* =============================
            Từ đồng nghĩa:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ đồng nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>at PRESent, i am WORKing on a NEW PROJect.</li>
          <li className="margin-bottom-20 list-none">Hiện tại, tôi đang làm việc trên một dự án mới.</li>

          <li><Link to="/vocabulary/CURrently-1">CURrently</Link>, the TEMPERature is THIRty deGREES.</li>
          <li className="list-none">Hiện nay, nhiệt độ là 30 độ.</li>

        </ul>

        {/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>we can TALK about it LAter.</li>
          <li className="margin-bottom-20 list-none">Chúng ta có thể nói về điều đó sau.</li>

          <li>before i GO, i WANT to SAY GOODBYE.</li>
          <li className="list-none">Trước khi đi, tôi muốn nói lời tạm biệt.</li>

        </ul>
      
      {/* =============================
            🌻 Mẹo học từ vựng:
      ============================= */}

      <h3 className="margin-y-50 text-center">🌻 Mẹo học từ vựng:</h3>

      {/* =============================
            1. Liên kết hình ảnh:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Liên kết</strong></mark> 
        </strong>
        <strong>&nbsp;với hình ảnh</strong>:
      </p>

      <p className="text-indent-whole">Hình dung một chiếc đồng hồ đang chỉ vào thời điểm hiện tại.</p>

        <ul className="list-square">

          <li>RIGHT NOW, it's FIVE o'CLOCK.</li>
          <li className="list-none">Ngay bây giờ là 5 giờ.</li>

        </ul>

      {/* =============================
            2. Tạo câu ví dụ:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Tạo câu</strong></mark> 
        </strong>
        <strong>&nbsp;ví dụ</strong>:
      </p>

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>NOW</strong>" trong các ngữ cảnh khác nhau, liên quan đến thời gian.</p>

        <ul className="list-square">

          <li>i can SPEAK ENGlish MUCH BETter NOW.</li>
          <li className="list-none">Bây giờ tôi nói tiếng Anh tốt hơn nhiều rồi.</li>

        </ul>

      {/* =============================
            3. Luyện tập thường xuyên:
      ============================= */}

      <p className="margin-top-20">
        <strong>
            <mark className="highlight-255-padding-4-8"><strong>3. Luyện tập</strong></mark>
        </strong>
        <strong>&nbsp;thường xuyên</strong>:
      </p>

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng "<strong>NOW</strong>" trong giao tiếp hàng ngày.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa at PRESent và <strong>NOW</strong>):</p>

          <ol>

            <li value="1">at PRESent, she is LIVing in PARis.</li>
            <li className="list-none">Hiện tại, cô ấy đang sống ở Paris.</li>
            <li className="list-none margin-bottom-20">Cách nói trang trọng hơn, nhấn mạnh tình trạng hiện tại.</li>

            <li value="2">NOW, LISten to me <Link to="/vocabulary/CAREfully-1">CAREfully</Link>.</li>
            <li className="list-none">Bây giờ, hãy nghe tôi cẩn thận.</li>
            <li className="list-none">Cách nói thông thường, <span className="highlight-255-padding-0-4">nhấn mạnh sự tức thời</span>.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>NOW</strong>" thường đứng ở đầu câu hoặc trước hành động chính.</li>

          <li className="margin-bottom-20">Nó có thể được sử dụng để nhấn mạnh sự khẩn cấp hoặc để chuyển đổi chủ đề.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎GEM ·</span>
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