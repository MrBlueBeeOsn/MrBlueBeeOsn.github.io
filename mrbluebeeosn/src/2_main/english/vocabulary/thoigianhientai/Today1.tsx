import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function toDAY1(): React.JSX.Element {

  const postId = "toDAY1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hien-tai"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">toDAY
        <sup><Link to="/vocabulary/toDAY-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/toDAY-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>toDAY</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [toDAY][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">tơ DĀY</Link>] /təˈdeɪ/ •⬤ (2x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Hôm nay</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Chỉ thời điểm hiện tại, ngày mà người nói hoặc người nghe đang trải qua.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>it's SUNny toDAY.</li>
          <li className="margin-bottom-20 list-none">Hôm nay trời nắng.</li>

          <li>i'm GOing to the MOvies toDAY.</li>
          <li className="list-none">Hôm nay tôi sẽ đi xem phim.</li>

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

          <li>toDAY is a BEAUtiful DAY.</li>
          <li className="margin-bottom-20 list-none">Hôm nay là một ngày đẹp trời.</li>

          <li>every DAY i GO to SCHOOL.</li>
          <li className="list-none">Mỗi ngày tôi đều đi học.</li>

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

          <li>i'm GOing to BED <Link to="/vocabulary/NOW-1">NOW</Link>.</li>
          <li className="margin-bottom-20 list-none">Bây giờ tôi sẽ đi ngủ.</li>

          <li>at PRESent, i am WORKing on a new PROJect.</li>
          <li className="list-none">Hiện tại, tôi đang làm việc trên một dự án mới.</li>

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

          <li>i WENT to the PARK YESterday.</li>
          <li className="margin-bottom-20 list-none">Hôm qua tôi đã đến công viên.</li>

          <li>i will GO to the BEACH <Link to="/vocabulary/toMORrow-1">toMORrow</Link>.</li>
          <li className="list-none">Ngày mai tôi sẽ đi biển.</li>

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

      <p className="text-indent-whole">Hình dung một lịch và ngày hôm nay được đánh dấu.</p>

        <ul className="list-square">

          <li>i have a MEETing MARKed on my CALendar toDAY.</li>
          <li className="list-none">Tôi có một cuộc họp được đánh dấu trên lịch hôm nay.</li>

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

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>toDAY</strong>" trong các ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li>i'm GOing to the MOvies toDAY.</li>
          <li className="list-none">Hôm nay tôi sẽ đi xem phim.</li>

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

      <p className="text-indent-whole margin-bottom-20">Đọc và viết nhiều để nhớ từ vựng lâu hơn.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa NOW và <strong>toDAY</strong>):</p>

          <ol>

            <li value="1">i'm EATing <Link to="/vocabulary/NOW-1">NOW</Link>.</li>
            <li className="list-none">Bây giờ tôi đang ăn.</li>
            <li className="list-none margin-bottom-20">Chỉ thời điểm chính xác tại thời điểm nói.</li>

            <li value="2">i'm BUSy toDAY.</li>
            <li className="list-none">Hôm nay tôi bận.</li>
            <li className="list-none">Chỉ một khoảng thời gian 24 giờ, từ nửa đêm đến nửa đêm.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>toDAY</strong>" thường đứng ở đầu câu hoặc giữa câu.</li>

          <li className="margin-bottom-20">"<strong>toDAY</strong>" có thể được dùng để nhấn mạnh sự đối lập với quá khứ hoặc tương lai.</li>

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