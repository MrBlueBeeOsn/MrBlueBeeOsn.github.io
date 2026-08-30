import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GENTly1(): React.JSX.Element {

  const postId = "GENTly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-nhe-nhang-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: nhẹ nhàng</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GENTly
        <sup><Link to="/vocabulary/GENTly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/GENTly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>GENTly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [GENTly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">GENT ly</Link>] /ˈdʒɛntli/ ⬤• (2x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Nhẹ nhàng, dịu dàng</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>GENTly</strong>" được dùng để miêu tả một hành động được thực hiện một cách nhẹ nhàng, không mạnh bạo, không gây tổn thương. Nó có thể áp dụng cho nhiều tình huống khác nhau, từ việc chạm vào một vật dễ vỡ đến việc nói chuyện với ai đó một cách dịu dàng.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>she CLOSED the DOOR GENTly.</li>
          <li className="margin-bottom-20 list-none">Cô ấy đóng cửa nhẹ nhàng.</li>

          <li>PLEASE SPEAK GENTly to the CHILD.</li>
          <li className="list-none">Làm ơn nói chuyện nhẹ nhàng với đứa trẻ.</li>

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

          <li>she has a GENTle NAture.</li>
          <li className="list-none">Cô ấy có một tính cách dịu dàng.</li>

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

          <li>she SPOKE <Link to="/vocabulary/SOFTly-1">SOFTly</Link>.</li>
          <li className="margin-bottom-20 list-none">Cô ấy nói nhỏ nhẹ.</li>

          <li>HANdle the GLASS <Link to="/vocabulary/CAREfully-1">CAREfully</Link>.</li>
          <li className="list-none">Nhẹ nhàng cầm cái ly.</li>

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

          <li>he HANdled the PACKage ROUGHly.</li>
          <li className="margin-bottom-20 list-none">Anh ấy cầm gói hàng một cách thô bạo.</li>

          <li>the STORM RAGED VIolently.</li>
          <li className="list-none">Bão nổi lên dữ dội.</li>

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

      <p className="text-indent-whole">Hình dung một người đang vuốt ve một con mèo một cách nhẹ nhàng.</p>

        <ul className="list-square">

          <li>she is GENTly PETting the CAT.</li>
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

      <p className="text-indent-whole">Tạo các câu miêu tả các hành động nhẹ nhàng.</p>

        <ul className="list-square">

          <li>she CLOSED the BOOK GENTly and PUT it DOWN.</li>
          <li className="list-none">Cô ấy đóng sách nhẹ nhàng và đặt nó xuống.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các bài viết hoặc cuộc trò chuyện.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>he PUSHED the DOOR.</li>
            <li className="list-none margin-bottom-20">Anh ấy đẩy cửa.</li>

            <li value="2">he PUSHED the DOOR GENTly.</li>
            <li className="list-none margin-bottom-20">Anh ấy đẩy cửa nhẹ nhàng.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh</span> rằng anh ấy <span className="highlight-255-padding-0-4">đã đẩy</span> cửa <span className="highlight-255-padding-0-4">một cách cẩn thận</span>, không mạnh bạo.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Cảm xúc: "<strong>GENTly</strong>" thường liên quan đến cảm xúc tích cực như sự dịu dàng, ân cần.</li>

          <li className="margin-bottom-20">Hành động: Nó có thể được sử dụng để miêu tả cả hành động vật lý và hành động bằng lời nói.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 5, 2024 · by 💎GEM ·</span>
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