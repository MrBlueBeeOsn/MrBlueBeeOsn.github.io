import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function EVer1(): React.JSX.Element {

  const postId = "EVer1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-co"><mark className="highlight-tertiary-padding-4-8">ADverbs: có</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">EVer
        <sup><Link to="/vocabulary/EVer-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/EVer-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>EVer</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [EVer][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">EV e̛r</Link>] /ˈev.ər/ ⬤• (2x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Bao giờ, từng</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Sử dụng trong câu hỏi để hỏi về một trải nghiệm hoặc sự kiện đã xảy ra trong quá khứ.</p>

      <p className="text-indent-whole">Sử dụng trong câu khẳng định để nhấn mạnh một trải nghiệm hoặc sự kiện đã xảy ra hoặc có thể xảy ra.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>have you EVer been to PARis?</li>
          <li className="margin-bottom-20 list-none">Bạn đã từng đến Paris chưa?</li>

          <li>she is the KINDest PERson i have EVer MET.</li>
          <li className="list-none">Cô ấy là người tốt bụng nhất mà tôi từng gặp.</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>EVer</strong>".</li>

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

          <li>have you EVer, at ANy TIME, SEEN a UFO?</li>
          <li className="margin-bottom-20 list-none">Bạn đã từng, bất cứ lúc nào, nhìn thấy UFO chưa?</li>

          <li>on ANy ocCAsion, she is ALways the FIRST to arRIVE.</li>
          <li className="list-none">Bất cứ dịp nào, cô ấy luôn là người đến đầu tiên.</li>

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

          <li>i have <Link to="/vocabulary/NEVer-1">NEVer</Link> been to PARis.</li>
          <li className="margin-bottom-20 list-none">Tôi chưa bao giờ đến Paris.</li>

          <li>i have <Link to="/vocabulary/NOT-1">NOT</Link> ONCE reGRETted my deCISion.</li>
          <li className="list-none">Tôi chưa bao giờ hối hận về quyết định của mình.</li>

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

      <p className="text-indent-whole">Hãy tưởng tượng một cuốn album ảnh chứa đầy những kỷ niệm, bạn có thể miêu tả là:</p>

        <ul className="list-square">

          <li>have you EVer SEEN such a BEAUtiful PHOto?</li>
          <li className="list-none">Bạn đã từng thấy một bức ảnh đẹp như vậy chưa?</li>

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

      <p className="text-indent-whole">Thử tạo càng nhiều câu ví dụ càng tốt với "<strong>EVer</strong>".</p>

        <ul className="list-square">

          <li>has she EVer TRIED SUshi?</li>
          <li className="list-none">Cô ấy đã từng thử sushi chưa?</li>

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

      <p className="text-indent-whole margin-bottom-20">Đọc và viết nhiều để củng cố vốn từ vựng và cách sử dụng của "<strong>EVer</strong>".</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa NEVer và <strong>EVer</strong>):</p>

          <ol>

            <li value="1">i have <Link to="/vocabulary/NEVer-1">NEVer</Link> been to the BEACH.</li>
            <li className="list-none">Tôi chưa bao giờ đi biển.</li>
            <li className="list-none margin-bottom-20">Dùng để phủ định hoàn toàn một trải nghiệm.</li>

            <li value="2">have you EVer been to the BEACH?</li>
            <li className="list-none">Bạn đã từng đi biển chưa?</li>
            <li className="list-none">Sử dụng trong <span className="highlight-255-padding-0-4">câu hỏi</span> hoặc <span className="highlight-255-padding-0-4">câu khẳng định</span> để <span className="highlight-255-padding-0-4">nhấn mạnh một trải nghiệm</span>.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>EVer</strong>" thường được đặt ở cuối câu hỏi hoặc sau hành động chính trong câu khẳng định.</li>

          <li className="margin-bottom-20">"<strong>EVer</strong>" có thể được dùng để nhấn mạnh một trải nghiệm đặc biệt hoặc một khoảng thời gian dài.</li>

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