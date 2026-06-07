import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Repeatedly1(): React.JSX.Element {

  const postId = "Repeatedly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-lap-lai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">repeatedly
        <sup><Link to="/vocabulary/repeatedly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/repeatedly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>repeatedly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Repeatedly</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /rɪˈpiːtɪdli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">rėpēatėdly</Link>/
                <sup>&nbsp;•⬤•• (4x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Một cách lặp đi lặp lại, nhiều lần</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>repeatedly</strong>" dùng để mô tả một hành động được thực hiện nhiều lần, liên tục. Nó nhấn mạnh tính thường xuyên và sự lặp đi lặp lại của một sự việc.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>She ______ asked him the same question.</li>
          <li className="margin-bottom-20 list-none">Cô ấy liên tục hỏi anh ta cùng một câu hỏi.</li>

          <li>The experiment was ______ conducted to verify the results.</li>
          <li className="list-none">Thí nghiệm được thực hiện lặp đi lặp lại để xác minh kết quả.</li>

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

          <li>Repeat (v) /rɪˈpiːt/</li>
          <li className="list-none">Please ______ that.</li>
          <li className="margin-bottom-20 list-none">Làm ơn lặp lại điều đó.</li>

          <li>Repetition (n) /ˌrepəˈtɪʃn/</li>
          <li className="list-none">The ______ of the same mistake is unacceptable.</li>
          <li className="margin-bottom-20 list-none">Việc lặp lại cùng một sai lầm là không thể chấp nhận được.</li>

          <li>Repeated (adj) /rɪˈpiːtɪd/</li>
          <li className="list-none">The ______ failures discouraged him.</li>
          <li className="list-none">Những thất bại liên tiếp làm anh ta nản lòng.</li>

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

          <li><Link to="/vocabulary/again-1">Again</Link> and again /əˈɡen ænd əˈɡen/</li>
          <li className="list-none">He tried ______.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã thử lại nhiều lần.</li>

          <li>Over and over /ˈoʊvər ænd ˈoʊvər/</li>
          <li className="list-none">She said it ______.</li>
          <li className="list-none">Cô ấy nói đi nói lại điều đó.</li>

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

          <li>Once (adv) /wʌns/</li>
          <li className="list-none">I've only done it ______.</li>
          <li className="margin-bottom-20 list-none">Tôi chỉ làm điều đó một lần.</li>

          <li><Link to="/vocabulary/rarely-1">Rarely</Link> /ˈreərli/</li>
          <li className="list-none">He ______ visits us.</li>
          <li className="list-none">Anh ấy hiếm khi đến thăm chúng tôi.</li>

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

      <p className="text-indent-whole">Hình dung một chiếc đồng hồ đang tích tắc hoặc một người đang tập luyện một bài thể dục nhiều lần.</p>

        <ul className="list-square">

          <li>The clock is ticking steadily and ______.</li>
          <li className="list-none">Chiếc đồng hồ đang tích tắc đều đặn và liên tục.</li>

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

      <p className="text-indent-whole">Tạo các câu liên quan đến các hoạt động hàng ngày hoặc các thói quen.</p>

        <ul className="list-square">

          <li>She ______ checked her phone.</li>
          <li className="list-none">Cô ấy liên tục kiểm tra điện thoại của mình.</li>

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

            <li>He made a mistake.</li>
            <li className="list-none margin-bottom-20">Anh ấy mắc một lỗi.</li>

            <li value="2">He ______ made the same mistake.</li>
            <li className="list-none margin-bottom-20">Anh ấy liên tục mắc cùng một lỗi.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh rằng</span> anh ấy <span className="highlight-255-padding-0-4">đã mắc lỗi nhiều lần</span>, cho thấy một sự thiếu cẩn trọng hoặc không rút ra được bài học.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Tần suất: Nhấn mạnh đến việc thực hiện một hành động nhiều lần.</li>

          <li className="margin-bottom-20">Sự kiên trì: Có thể ngụ ý sự kiên trì hoặc cố gắng không ngừng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 7, 2024 · by 💎Gem ·</span>
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