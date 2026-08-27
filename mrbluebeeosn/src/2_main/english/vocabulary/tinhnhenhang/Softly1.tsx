import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SOFTly1(): React.JSX.Element {

  const postId = "SOFTly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-nhe-nhang-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: nhẹ nhàng</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SOFTly
        <sup><Link to="/vocabulary/SOFTly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/SOFTly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng tìm hiểu về từ "<strong>SOFTly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [SOFTly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">SOFT ly</Link>] /ˈsɒftli/ ⬤• (2x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Một cách nhẹ nhàng, dịu dàng</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>SOFTly</strong>" được dùng để miêu tả một hành động được thực hiện một cách nhẹ nhàng, không mạnh mẽ, thường mang ý nghĩa êm dịu, thoải mái. Nó cũng có thể dùng để miêu tả âm thanh nhẹ nhàng, không ồn ào.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>she CLOSED the DOOR SOFTly.</li>
          <li className="margin-bottom-20 list-none">Cô ấy đóng cửa nhẹ nhàng.</li>

          <li>he SPOKE SOFTly so as NOT to WAKE the BAby.</li>
          <li className="list-none">Anh ấy nói nhỏ để không đánh thức em bé.</li>

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

          <li>the BLANket is VERy SOFT.</li>
          <li className="list-none">Chăn rất mềm.</li>

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

          <li>she <Link to="/vocabulary/GENTly-1">GENtly</Link> STROKED the CAT.</li>
          <li className="margin-bottom-20 list-none">Cô ấy vuốt ve con mèo một cách nhẹ nhàng.</li>

          <li>she WALKED QUIetly OUT of the ROOM.</li>
          <li className="list-none">Cô ấy đi ra khỏi phòng một cách yên lặng.</li>

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

          <li>he SHOUTed LOUDly.</li>
          <li className="margin-bottom-20 list-none">Anh ấy hét lên rất to.</li>

          <li>he HANdled the PACKage ROUGHly.</li>
          <li className="list-none">Anh ấy cầm gói hàng một cách thô bạo.</li>

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

      <p className="text-indent-whole">Hình dung một người đang vuốt ve một chú mèo một cách nhẹ nhàng.</p>

        <ul className="list-square">

          <li>she is STROKing the CAT SOFTly.</li>
          <li className="list-none">Cô ấy đang vuốt ve con mèo một cách nhẹ nhàng.</li>

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

      <p className="text-indent-whole">Tự tạo các câu ví dụ khác nhau với từ "<strong>softly</strong>" trong nhiều ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li>"can you please SPEAK SOFTly?" she WHISpered.</li>
          <li className="list-none">Cô ấy thì thầm: "Bạn có thể nói nhỏ nhẹ được không?"</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này khi muốn miêu tả một hành động hoặc âm thanh nhẹ nhàng.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>he CLOSED the DOOR.</li>
            <li className="list-none margin-bottom-20">Anh ấy đóng cửa.</li>

            <li value="2">he SOFTly CLOSED the DOOR.</li>
            <li className="list-none margin-bottom-20">Anh ấy đóng cửa nhẹ nhàng.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh</span> rằng hành động <span className="highlight-255-padding-0-4">đóng</span> cửa được thực hiện <span className="highlight-255-padding-0-4">một cách nhẹ nhàng</span>, không gây tiếng động.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Cảm giác: "<strong>SOFTly</strong>" thường gợi lên cảm giác thoải mái, dễ chịu.</li>

          <li className="margin-bottom-20">Âm thanh: Nó cũng dùng để miêu tả âm thanh nhẹ nhàng, dịu tai.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 12, 2024 · by 💎GEM ·</span>
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