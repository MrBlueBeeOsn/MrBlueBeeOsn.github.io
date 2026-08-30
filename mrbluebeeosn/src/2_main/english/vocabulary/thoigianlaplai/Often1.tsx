import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function OFten1(): React.JSX.Element {

  const postId = "OFten1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-lap-lai-terms"><mark className="highlight-tertiary-padding-4-88">ADverbs: lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">OFten
        <sup><Link to="/vocabulary/OFten-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/OFten-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>OFten</strong>" và các thành ngữ liên quan nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [OFten][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">OF te̛n</Link>]  /ˈɒf.ən/ ⬤• (2x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Thường xuyên</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Chỉ sự lặp đi lặp lại của một hành động hoặc sự kiện trong một khoảng thời gian.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>i OFten GO to the GYM.</li>
          <li className="margin-bottom-20 list-none">Tôi thường đi tập gym.</li>

          <li>she OFten forGETS her KEYS.</li>
          <li className="list-none">Cô ấy thường quên chìa khóa.</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>OFten</strong>" vì nó là một từ đơn lẻ.</li>

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

          <li>she <Link to="/vocabulary/FREquently-1">FREquently</Link> VISits her GRANDparents.</li>
          <li className="margin-bottom-20 list-none">Cô ấy thường xuyên thăm ông bà.</li>

          <li>they EXercise REGularly.</li>
          <li className="list-none">Họ tập thể dục đều đặn.</li>

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

          <li>i <Link to="/vocabulary/RAREly-1">RAREly</Link> EAT FAST FOOD.</li>
          <li className="margin-bottom-20 list-none">Tôi hiếm khi ăn đồ ăn nhanh.</li>

          <li>she <Link to="/vocabulary/never-1">NEVer</Link> LIES.</li>
          <li className="list-none">Cô ấy không bao giờ nói dối.</li>

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

      <p className="text-indent-whole">Hình dung một đồng hồ để biểu thị sự lặp đi lặp lại của một hành động.</p>

        <ul className="list-square">

          <li>EVERy TIME the CLOCK STRIKES TWELVE, i OFten TAKE a BREAK from WORK.</li>
          <li className="list-none">Mỗi khi đồng hồ điểm 12 giờ, tôi thường nghỉ giải lao.</li>

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

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>OFten</strong>" trong các ngữ cảnh khác nhau, liên quan đến các thói quen, hoạt động hàng ngày.</p>

        <ul className="list-square">

          <li>she OFten READS BOOKS before GOing to BED.</li>
          <li className="list-none">Cô ấy thường đọc sách trước khi đi ngủ.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ "<strong>OFten</strong>" trong giao tiếp hoặc khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa FREquently và <strong>OFten</strong>):</p>

          <ol>

            <li value="1">she <Link to="/vocabulary/FREquently-1">FREquently</Link> atTENDS CONFERences.</li>
            <li className="list-none">Cô ấy thường xuyên tham dự hội nghị.</li>
            <li className="list-none margin-bottom-20">Cách nói trang trọng hơn, nhấn mạnh tính thường xuyên.</li>

            <li value="2">i OFten GO to the PARK.</li>
            <li className="list-none margin-bottom-20">Tôi thường đi công viên.</li>
            <li className="list-none">Cách nói thông thường, dùng trong nhiều tình huống.</li>

          </ol>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Often</strong>" thường đứng trước hành động chính trong câu.</li>

          <li className="margin-bottom-20">Nó có thể được sử dụng để diễn tả mức độ thường xuyên của một hành động.</li>

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