import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Now1(): React.JSX.Element {

  const postId = "Now1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hien-tai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">now
        <sup><Link to="/vocabulary/now-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/now-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>now</strong>" và các thành ngữ liên quan nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Now</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /naʊ/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">now</Link>/
                <sup>&nbsp;⬤ (1x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Bây giờ, hiện tại</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Chỉ thời điểm hiện tại, ngay lúc này.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>I am eating <strong>now</strong>. (Tôi đang ăn bây giờ.)</li>

          <li><strong>Now</strong>, please be quiet. (Bây giờ, làm ơn im lặng.)</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>now</strong>" vì nó là một từ đơn lẻ.</li>

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

          <li>At present: (adv) /æt ˈprez.ənt/ - hiện tại</li>
          <li className="margin-bottom-20 list-none">At present, I am working on a new project. (Hiện tại, tôi đang làm việc trên một dự án mới.)</li>

          <li>Currently: (adv) /ˈkʌr.ənt.li/ - hiện nay</li>
          <li className="list-none">Currently, the temperature is 30 degrees. (Hiện nay, nhiệt độ là 30 độ.)</li>

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

          <li>Later: (adv) /ˈleɪ.tər/ - sau này</li>
          <li className="margin-bottom-20 list-none">We can talk about it later. (Chúng ta có thể nói về điều đó sau.)</li>

          <li>Before: (adv) /bɪˈfɔːr/ - trước đây</li>
          <li className="list-none">Before I go, I want to say goodbye. (Trước khi đi, tôi muốn nói lời tạm biệt.)</li>

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

          <li>Right <strong>now</strong>, it's 5 o'clock.</li>
          <li className="list-none">(Ngay bây giờ là 5 giờ.)</li>

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

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>now</strong>" trong các ngữ cảnh khác nhau, liên quan đến thời gian.</p>

        <ul className="list-square">

          <li>I can speak English much better <strong>now</strong>.</li>
          <li className="list-none">(Bây giờ tôi nói tiếng Anh tốt hơn nhiều rồi.)</li>

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

      <p className="text-indent-whole">Thường xuyên sử dụng "<strong>now</strong>" trong giao tiếp hàng ngày.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa at present và <strong>now</strong>):</p>

          <ol>

            <li>At present: Cách nói trang trọng hơn, nhấn mạnh tình trạng hiện tại.</li>
            <li className="list-none margin-bottom-20">At present, she is living in Paris. (Hiện tại, cô ấy đang sống ở Paris.)</li>

            <li value="2"><strong>Now</strong>: Cách nói thông thường, <span className="highlight-255-padding-0-4">nhấn mạnh sự tức thời</span>.</li>
            <li className="list-none margin-bottom-20"><strong>Now</strong>, listen to me carefully. (Bây giờ, hãy nghe tôi cẩn thận.)</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Now</strong>" thường đứng ở đầu câu hoặc trước động từ chính.</li>

          <li className="margin-bottom-20">Nó có thể được sử dụng để nhấn mạnh sự khẩn cấp hoặc để chuyển đổi chủ đề.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎Gem ·</span>
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