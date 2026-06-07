import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Truly1(): React.JSX.Element {

  const postId = "Truly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-xac-thuc-terms"><mark className="highlight-tertiary-padding-4-8">Tính xác thực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">truly
        <sup><Link to="/vocabulary/truly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/truly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>truly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Truly</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈtruːli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">trüly</Link>/
                <sup>&nbsp;⬤• (2x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Thực sự, thật sự</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>truly</strong>" được dùng để nhấn mạnh sự thật, tính xác thực của một thông tin, cảm xúc hoặc tình huống. Nó thể hiện sự chân thành, thẳng thắn và không giả dối.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>She is ______ a talented artist.</li>
          <li className="margin-bottom-20 list-none">Cô ấy thực sự là một nghệ sĩ tài năng.</li>

          <li>I ______ appreciate your help.</li>
          <li className="list-none">Tôi thực sự biết ơn sự giúp đỡ của bạn.</li>

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

          <li>True (adj) /truː/</li>
          <li className="list-none">That is a ______ story.</li>
          <li className="margin-bottom-20 list-none">Đó là một câu chuyện có thật.</li>

          <li>Truth (n) /truːθ/</li>
          <li className="list-none">The ______ will set you free.</li>
          <li className="list-none">Sự thật sẽ giải phóng bạn.</li>

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

          <li><Link to="/vocabulary/really-1">Really</Link> /ˈriːəli/</li>
          <li className="list-none">I'm ______ tired.</li>
          <li className="margin-bottom-20 list-none">Tôi thực sự mệt mỏi.</li>

          <li>Indeed /ɪnˈdiːd/</li>
          <li className="list-none">______, it was a beautiful day.</li>
          <li className="list-none">Thực vậy, đó là một ngày đẹp trời.</li>

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

          <li>Falsely /ˈfɔːlsli/</li>
          <li className="list-none">He ______ accused her of stealing.</li>
          <li className="margin-bottom-20 list-none">Anh ta đã vu khống cô ấy ăn trộm.</li>

          <li>Apparently /əˈpærəntli/</li>
          <li className="list-none">______, he is leaving the company.</li>
          <li className="list-none">Có vẻ như anh ấy sẽ rời khỏi công ty.</li>

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

      <p className="text-indent-whole">Hình dung một người đang nói lời thật lòng với bạn.</p>

        <ul className="list-square">

          <li>I'm ______ happy for you.</li>
          <li className="list-none">Tôi thực sự vui mừng cho bạn.</li>

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

      <p className="text-indent-whole">Tự tạo các câu ví dụ khác nhau với từ "<strong>truly</strong>" trong nhiều ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li>______, I appreciate your kindness.</li>
          <li className="list-none">Thật lòng, tôi rất trân trọng lòng tốt của bạn.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại và bài viết để làm quen với cách sử dụng.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>I like pizza.</li>
            <li className="list-none margin-bottom-20">Tôi thích pizza.</li>

            <li value="2">I ______ love pizza.</li>
            <li className="list-none margin-bottom-20">Tôi thực sự yêu pizza.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>truly</strong>" để thể hiện một tình cảm sâu sắc hơn, <span className="highlight-255-padding-0-4">nhấn mạnh rằng tình yêu</span> dành cho pizza <span className="highlight-255-padding-0-4">là rất lớn</span>.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Nhấn mạnh sự thật: "<strong>Truly</strong>" thường được dùng để nhấn mạnh tính xác thực của một thông tin hoặc cảm xúc.</li>

          <li className="margin-bottom-20">Thể hiện sự chân thành: Nó cũng thể hiện sự chân thành và lòng thành kính của người nói.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 2, 2024 · by 💎Gem ·</span>
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