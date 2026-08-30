import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SELdom1(): React.JSX.Element {

  const postId = "SELdom1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hiem-terms"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiếm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SELdom
        <sup><Link to="/vocabulary/SELdom-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/SELdom-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>SELdom</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [SELdom][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">SEL dơm</Link>] /ˈsɛldəm/ ⬤• (2x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Tính hiếm khi, ít khi</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Chỉ một hành động hoặc sự việc xảy ra không thường xuyên, rất ít lần.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>i SELdom GO to the MOvies.</li>
          <li className="margin-bottom-20 list-none">Tôi hiếm khi đi xem phim.</li>

          <li>she SELdom MAKES misTAKES.</li>
          <li className="list-none">Cô ấy hiếm khi mắc lỗi.</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp.</li>

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

          <li>i <Link to="/vocabulary/rarely-1">RAREly</Link> EAT MEAT.</li>
          <li className="margin-bottom-20 list-none">Tôi hiếm khi ăn thịt.</li>

          <li>she inFREquently VISits her PARents.</li>
          <li className="list-none">Cô ấy ít khi đến thăm ba mẹ.</li>

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

          <li>i <Link to="/vocabulary/OFten-1">OFten</Link> GO for a WALK in the PARK.</li>
          <li className="margin-bottom-20 list-none">Tôi thường đi dạo trong công viên.</li>

          <li>he <Link to="/vocabulary/FREquently-1">FREquently</Link> TRAVels aBROAD.</li>
          <li className="list-none">Anh ấy thường xuyên đi du lịch nước ngoài.</li>

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

      <p className="text-indent-whole">Hình dung một chiếc đồng hồ hiếm khi chạy hoặc một bông hoa hiếm khi nở.</p>

        <ul className="list-square">

          <li>the WATCH SELdom KEEPS ACcurate TIME.</li>
          <li className="margin-bottom-20 list-none">Chiếc đồng hồ hiếm khi chạy đúng giờ.</li>

          <li>this TYPE of FLOWer SELdom BLOOMS.</li>
          <li className="list-none">Loại hoa này hiếm khi nở.</li>

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

      <p className="text-indent-whole">Thử tạo càng nhiều câu với "<strong>SELdom</strong>" trong các ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li>she SELdom comPLAINS about her JOB.</li>
          <li className="list-none">Cô ấy hiếm khi phàn nàn về công việc.</li>

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

      <p className="text-indent-whole margin-bottom-20">Đọc và viết nhiều để làm quen với từ này.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa RAREly và <strong>SELdom</strong>):</p>

          <ol>

            <li value="1">i <Link to="/vocabulary/rarely-1">RAREly</Link> EAT SPIcy FOOD.</li>
            <li className="list-none">Tôi hiếm khi ăn đồ ăn cay.</li>
            <li className="list-none margin-bottom-20">Có thể có một vài lần xảy ra, nhưng không thường xuyên.</li>

            <li value="2">i SELdom SEE him anyMORE.</li>
            <li className="list-none">Tôi hầu như không bao giờ gặp anh ấy nữa.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">Nhấn mạnh sự hiếm hoi tuyệt đối</span>.</li>

          </ol>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>SELdom</strong>" thường đứng trước hành động chính trong câu.</li>

          <li className="margin-bottom-20">"<strong>SELdom</strong>" mang nghĩa phủ định, tức là một việc gì đó không xảy ra thường xuyên.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 15, 2024 · by 💎GEM ·</span>
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