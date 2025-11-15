import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Very1(): React.JSX.Element {

  const postId = "Very1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#muc-do-cao-terms"><mark className="highlight-tertiary-padding-4-8">Mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">very
        <sup><Link to="/vocabulary/very-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/very-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>very</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Very</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈveri/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">very</Link>/
                <sup>&nbsp;⬤• (2x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Rất</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Dùng để nhấn mạnh mức độ của một tính từ hoặc một trạng từ khác, cho thấy một đặc điểm nào đó ở mức độ cao.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>She is <strong>very</strong> beautiful. (Cô ấy rất đẹp.)</li>

          <li>He runs <strong>very</strong> fast. (Anh ấy chạy rất nhanh.)</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>very</strong>". Tuy nhiên, "<strong>very</strong>" thường được kết hợp với các tính từ và trạng từ khác để tạo thành các cụm từ mới.</li>

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

          <li><Link to="/vocabulary/extremely-1">Extremely</Link>: (adv) Cực kỳ /ɪkˈstriːm.li/</li>
          <li className="margin-bottom-20 list-none">She is extremely intelligent. (Cô ấy cực kỳ thông minh.)</li>

          <li><Link to="/vocabulary/highly-1">Highly</Link>: (adv) Rất, cao /ˈhaɪ.li/</li>
          <li className="list-none">He is highly motivated. (Anh ấy có động lực rất cao.)</li>

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

          <li>Slightly: (adv) Một chút, hơi /ˈslaɪt.li/</li>
          <li className="margin-bottom-20 list-none">I'm slightly tired. (Tôi hơi mệt.)</li>

          <li><Link to="/vocabulary/not-1">Not</Link> <strong>very</strong>: (adv) Không rất</li>
          <li className="list-none">She is not <strong>very</strong> tall. (Cô ấy không cao lắm.)</li>

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

      <p className="text-indent-whole">Hãy tưởng tượng một quả táo đỏ rực, bạn có thể miêu tả là:</p>

        <ul className="list-square">

          <li>The apple is <strong>very</strong> red.</li>
          <li className="list-none">(Quả táo rất đỏ.)</li>

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

      <p className="text-indent-whole">Thử tạo càng nhiều câu ví dụ càng tốt với "<strong>very</strong>".</p>

        <ul className="list-square">

          <li>She has <strong>very</strong> long hair.</li>
          <li className="list-none">(Cô ấy có mái tóc rất dài.)</li>

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

      <p className="text-indent-whole">Đọc và viết nhiều để củng cố vốn từ vựng và cách sử dụng của "<strong>very</strong>".</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa extremely và <strong>very</strong>):</p>

          <ol>

            <li><Link to="/vocabulary/extremely-1">Extremely</Link>: Nhấn mạnh một mức độ cực kỳ cao.</li>
            <li className="list-none margin-bottom-20">She is extremely happy. (Cô ấy vui sướng vô cùng.)</li>

            <li value="2"><strong>Very</strong>: <span className="highlight-255-padding-0-4">Nhấn mạnh một mức độ cao</span>.</li>
            <li className="list-none margin-bottom-20">She is <strong>very</strong> happy. (Cô ấy rất vui.)</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Very</strong>" thường đứng trước tính từ hoặc trạng từ.</li>

          <li>"<strong>Very</strong>" có thể được sử dụng để nhấn mạnh cả tính chất tích cực và tiêu cực.</li>

          <li className="margin-bottom-20">Để tránh lạm dụng "<strong>very</strong>", bạn có thể sử dụng các tính từ hoặc trạng từ mạnh hơn hoặc các cấu trúc so sánh hơn.</li>

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