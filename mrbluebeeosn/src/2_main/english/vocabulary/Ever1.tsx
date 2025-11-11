import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Ever1(): React.JSX.Element {

  const postId = "Ever1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-lien-tuc-terms"><mark className="highlight-tertiary-padding-4-8">Tính liên tục</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ever
        <sup><Link to="/vocabulary/ever-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/ever-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>ever</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Ever</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈev.ər/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">eve̛r</Link>/
                <sup>&nbsp;⬤• (2x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Tính bao giờ, từng</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Sử dụng trong câu hỏi để hỏi về một trải nghiệm hoặc sự kiện đã xảy ra trong quá khứ.</p>

      <p className="text-indent-whole">Sử dụng trong câu khẳng định để nhấn mạnh một trải nghiệm hoặc sự kiện đã xảy ra hoặc có thể xảy ra.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>Have you <strong>ever</strong> been to Paris? (Bạn đã từng đến Paris chưa?)</li>

          <li>She is the kindest person I have <strong>ever</strong> met. (Cô ấy là người tốt bụng nhất mà tôi từng gặp.)</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>ever</strong>".</li>

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

          <li>At any time: Bất cứ lúc nào /æt ˈeni taɪm/</li>
          <li className="margin-bottom-20 list-none">Have you <strong>ever</strong>, at any time, seen a UFO? (Bạn đã từng, bất cứ lúc nào, nhìn thấy UFO chưa?)</li>

          <li>On any occasion: Bất cứ dịp nào /ɒn ˈeni əˈkeɪʒən/</li>
          <li className="list-none">On any occasion, she is always the first to arrive. (Bất cứ dịp nào, cô ấy luôn là người đến đầu tiên.)</li>

        </ul>

        {/* <Link to="/vocabulary/clearly-1">Clearly</Link> */}

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li><Link to="/vocabulary/never-1">Never</Link>: Không bao giờ /ˈnev.ər/</li>
          <li className="margin-bottom-20 list-none">I have never been to Paris. (Tôi chưa bao giờ đến Paris.)</li>

          <li><Link to="/vocabulary/not-1">Not</Link> once: Chưa bao giờ /nɒt wʌns/</li>
          <li className="list-none">I have not once regretted my decision. (Tôi chưa bao giờ hối hận về quyết định của mình.)</li>

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

          <li>Have you <strong>ever</strong> seen such a beautiful photo?</li>
          <li className="list-none">(Bạn đã từng thấy một bức ảnh đẹp như vậy chưa?)</li>

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

      <p className="text-indent-whole">Thử tạo càng nhiều câu ví dụ càng tốt với "<strong>ever</strong>".</p>

        <ul className="list-square">

          <li>Has she <strong>ever</strong> tried sushi?</li>
          <li className="list-none">(Cô ấy đã từng thử sushi chưa?)</li>

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

      <p className="text-indent-whole">Đọc và viết nhiều để củng cố vốn từ vựng và cách sử dụng của "<strong>ever</strong>".</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa never và <strong>ever</strong>):</p>

          <ol>

            <li><Link to="/vocabulary/never-1">Never</Link>: Dùng để phủ định hoàn toàn một trải nghiệm.</li>
            <li className="list-none margin-bottom-20">I have never been to the beach. (Tôi chưa bao giờ đi biển.)</li>

            <li value="2"><strong>Ever</strong>: Sử dụng trong <span className="highlight-255-padding-0-4">câu hỏi</span> hoặc <span className="highlight-255-padding-0-4">câu khẳng định</span> để <span className="highlight-255-padding-0-4">nhấn mạnh một trải nghiệm</span>.</li>
            <li className="list-none margin-bottom-20">Have you <strong>ever</strong> been to the beach? (Bạn đã từng đi biển chưa?)</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Ever</strong>" thường được đặt ở cuối câu hỏi hoặc sau động từ chính trong câu khẳng định.</li>

          <li className="margin-bottom-20">"<strong>Ever</strong>" có thể được dùng để nhấn mạnh một trải nghiệm đặc biệt hoặc một khoảng thời gian dài.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 12, 2024 · by 💎Gem ·</span>
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